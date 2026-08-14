# `iam` Submodule <a name="`iam` Submodule" id="@cdk_utils/iam.iam"></a>



## Classes <a name="Classes" id="Classes"></a>

### IAMActions <a name="IAMActions" id="@cdk_utils/iam.iam.IAMActions"></a>

IAM action constants for the iam service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iam.IAMActions.Initializer"></a>

```typescript
import { iam } from '@cdk_utils/iam'

new iam.IAMActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AcceptDelegationRequest">AcceptDelegationRequest</a></code> | <code>string</code> | [Write] iam:AcceptDelegationRequest. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccessKeyLastUsed">actionGetAccessKeyLastUsed</a></code> | <code>string</code> | [Read] iam:GetAccessKeyLastUsed. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountAuthorizationDetails">actionGetAccountAuthorizationDetails</a></code> | <code>string</code> | [Read] iam:GetAccountAuthorizationDetails. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountEmailAddress">actionGetAccountEmailAddress</a></code> | <code>string</code> | [Read] iam:GetAccountEmailAddress. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountName">actionGetAccountName</a></code> | <code>string</code> | [Read] iam:GetAccountName. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountPasswordPolicy">actionGetAccountPasswordPolicy</a></code> | <code>string</code> | [Read] iam:GetAccountPasswordPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountProperties">actionGetAccountProperties</a></code> | <code>string</code> | [Read] iam:GetAccountProperties. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetAccountSummary">actionGetAccountSummary</a></code> | <code>string</code> | [List] iam:GetAccountSummary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetCloudFrontPublicKey">actionGetCloudFrontPublicKey</a></code> | <code>string</code> | [Read] iam:GetCloudFrontPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetContextKeysForCustomPolicy">actionGetContextKeysForCustomPolicy</a></code> | <code>string</code> | [Read] iam:GetContextKeysForCustomPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetContextKeysForPrincipalPolicy">actionGetContextKeysForPrincipalPolicy</a></code> | <code>string</code> | [Read] iam:GetContextKeysForPrincipalPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetCredentialReport">actionGetCredentialReport</a></code> | <code>string</code> | [Read] iam:GetCredentialReport. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetDelegationRequest">actionGetDelegationRequest</a></code> | <code>string</code> | [Read] iam:GetDelegationRequest. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] iam:GetGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetGroupPolicy">actionGetGroupPolicy</a></code> | <code>string</code> | [Read] iam:GetGroupPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetHumanReadableSummary">actionGetHumanReadableSummary</a></code> | <code>string</code> | [Read] iam:GetHumanReadableSummary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetInstanceProfile">actionGetInstanceProfile</a></code> | <code>string</code> | [Read] iam:GetInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetLoginProfile">actionGetLoginProfile</a></code> | <code>string</code> | [List] iam:GetLoginProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetMFADevice">actionGetMFADevice</a></code> | <code>string</code> | [Read] iam:GetMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetOpenIDConnectProvider">actionGetOpenIDConnectProvider</a></code> | <code>string</code> | [Read] iam:GetOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetOrganizationsAccessReport">actionGetOrganizationsAccessReport</a></code> | <code>string</code> | [Read] iam:GetOrganizationsAccessReport. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetOutboundWebIdentityFederationInfo">actionGetOutboundWebIdentityFederationInfo</a></code> | <code>string</code> | [Read] iam:GetOutboundWebIdentityFederationInfo. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] iam:GetPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetPolicyVersion">actionGetPolicyVersion</a></code> | <code>string</code> | [Read] iam:GetPolicyVersion. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetRole">actionGetRole</a></code> | <code>string</code> | [Read] iam:GetRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetRolePolicy">actionGetRolePolicy</a></code> | <code>string</code> | [Read] iam:GetRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetRoleTemplateVersion">actionGetRoleTemplateVersion</a></code> | <code>string</code> | [Read] iam:GetRoleTemplateVersion. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetSAMLProvider">actionGetSAMLProvider</a></code> | <code>string</code> | [Read] iam:GetSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetServerCertificate">actionGetServerCertificate</a></code> | <code>string</code> | [Read] iam:GetServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLastAccessedDetails">actionGetServiceLastAccessedDetails</a></code> | <code>string</code> | [Read] iam:GetServiceLastAccessedDetails. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLastAccessedDetailsWithEntities">actionGetServiceLastAccessedDetailsWithEntities</a></code> | <code>string</code> | [Read] iam:GetServiceLastAccessedDetailsWithEntities. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLinkedRoleDeletionStatus">actionGetServiceLinkedRoleDeletionStatus</a></code> | <code>string</code> | [Read] iam:GetServiceLinkedRoleDeletionStatus. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetSSHPublicKey">actionGetSSHPublicKey</a></code> | <code>string</code> | [Read] iam:GetSSHPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] iam:GetUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionGetUserPolicy">actionGetUserPolicy</a></code> | <code>string</code> | [Read] iam:GetUserPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionSetDefaultPolicyVersion">actionSetDefaultPolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iam:SetDefaultPolicyVersion. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionSetSecurityTokenServicePreferences">actionSetSecurityTokenServicePreferences</a></code> | <code>string</code> | [Write] iam:SetSecurityTokenServicePreferences. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.actionSetSTSRegionalEndpointStatus">actionSetSTSRegionalEndpointStatus</a></code> | <code>string</code> | [Write] iam:SetSTSRegionalEndpointStatus. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AddClientIDToOpenIDConnectProvider">AddClientIDToOpenIDConnectProvider</a></code> | <code>string</code> | [Write] iam:AddClientIDToOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AddRoleToInstanceProfile">AddRoleToInstanceProfile</a></code> | <code>string</code> | [Write] iam:AddRoleToInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AddUserToGroup">AddUserToGroup</a></code> | <code>string</code> | [Write] iam:AddUserToGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AssociateDelegationRequest">AssociateDelegationRequest</a></code> | <code>string</code> | [Write] iam:AssociateDelegationRequest. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AttachGroupPolicy">AttachGroupPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:AttachGroupPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AttachRolePolicy">AttachRolePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:AttachRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.AttachUserPolicy">AttachUserPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:AttachUserPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ChangePassword">ChangePassword</a></code> | <code>string</code> | [Write] iam:ChangePassword. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateAccessKey">CreateAccessKey</a></code> | <code>string</code> | [Write] iam:CreateAccessKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateAccountAlias">CreateAccountAlias</a></code> | <code>string</code> | [Write] iam:CreateAccountAlias. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateDelegationRequest">CreateDelegationRequest</a></code> | <code>string</code> | [Write] iam:CreateDelegationRequest. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] iam:CreateGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string</code> | [Write] iam:CreateInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateLoginProfile">CreateLoginProfile</a></code> | <code>string</code> | [Write] iam:CreateLoginProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateOpenIDConnectProvider">CreateOpenIDConnectProvider</a></code> | <code>string</code> | [Write] iam:CreateOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreatePolicyVersion">CreatePolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iam:CreatePolicyVersion. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateRole">CreateRole</a></code> | <code>string</code> | [Write] iam:CreateRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateSAMLProvider">CreateSAMLProvider</a></code> | <code>string</code> | [Write] iam:CreateSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateServiceLinkedRole">CreateServiceLinkedRole</a></code> | <code>string</code> | [Write] iam:CreateServiceLinkedRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateServiceSpecificCredential">CreateServiceSpecificCredential</a></code> | <code>string</code> | [Write] iam:CreateServiceSpecificCredential. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] iam:CreateUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.CreateVirtualMFADevice">CreateVirtualMFADevice</a></code> | <code>string</code> | [Write] iam:CreateVirtualMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeactivateMFADevice">DeactivateMFADevice</a></code> | <code>string</code> | [Write] iam:DeactivateMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteAccessKey">DeleteAccessKey</a></code> | <code>string</code> | [Write] iam:DeleteAccessKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteAccountAlias">DeleteAccountAlias</a></code> | <code>string</code> | [Write] iam:DeleteAccountAlias. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteAccountPasswordPolicy">DeleteAccountPasswordPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteAccountPasswordPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteCloudFrontPublicKey">DeleteCloudFrontPublicKey</a></code> | <code>string</code> | [Write] iam:DeleteCloudFrontPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] iam:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteGroupPolicy">DeleteGroupPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteGroupPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string</code> | [Write] iam:DeleteInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteLoginProfile">DeleteLoginProfile</a></code> | <code>string</code> | [Write] iam:DeleteLoginProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteOpenIDConnectProvider">DeleteOpenIDConnectProvider</a></code> | <code>string</code> | [Write] iam:DeleteOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeletePolicyVersion">DeletePolicyVersion</a></code> | <code>string</code> | [PermissionManagement] iam:DeletePolicyVersion. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteRole">DeleteRole</a></code> | <code>string</code> | [Write] iam:DeleteRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteRolePermissionsBoundary">DeleteRolePermissionsBoundary</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteRolePermissionsBoundary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteRolePolicy">DeleteRolePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteSAMLProvider">DeleteSAMLProvider</a></code> | <code>string</code> | [Write] iam:DeleteSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteServerCertificate">DeleteServerCertificate</a></code> | <code>string</code> | [Write] iam:DeleteServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteServiceLinkedRole">DeleteServiceLinkedRole</a></code> | <code>string</code> | [Write] iam:DeleteServiceLinkedRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteServiceSpecificCredential">DeleteServiceSpecificCredential</a></code> | <code>string</code> | [Write] iam:DeleteServiceSpecificCredential. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteSigningCertificate">DeleteSigningCertificate</a></code> | <code>string</code> | [Write] iam:DeleteSigningCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteSSHPublicKey">DeleteSSHPublicKey</a></code> | <code>string</code> | [Write] iam:DeleteSSHPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] iam:DeleteUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteUserPermissionsBoundary">DeleteUserPermissionsBoundary</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteUserPermissionsBoundary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteUserPolicy">DeleteUserPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DeleteUserPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DeleteVirtualMFADevice">DeleteVirtualMFADevice</a></code> | <code>string</code> | [Write] iam:DeleteVirtualMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DetachGroupPolicy">DetachGroupPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DetachGroupPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DetachRolePolicy">DetachRolePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DetachRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DetachUserPolicy">DetachUserPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:DetachUserPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DisableOrganizationsRootCredentialsManagement">DisableOrganizationsRootCredentialsManagement</a></code> | <code>string</code> | [Write] iam:DisableOrganizationsRootCredentialsManagement. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DisableOrganizationsRootSessions">DisableOrganizationsRootSessions</a></code> | <code>string</code> | [Write] iam:DisableOrganizationsRootSessions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.DisableOutboundWebIdentityFederation">DisableOutboundWebIdentityFederation</a></code> | <code>string</code> | [Write] iam:DisableOutboundWebIdentityFederation. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.EnableMFADevice">EnableMFADevice</a></code> | <code>string</code> | [Write] iam:EnableMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.EnableOrganizationsRootCredentialsManagement">EnableOrganizationsRootCredentialsManagement</a></code> | <code>string</code> | [Write] iam:EnableOrganizationsRootCredentialsManagement. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.EnableOrganizationsRootSessions">EnableOrganizationsRootSessions</a></code> | <code>string</code> | [Write] iam:EnableOrganizationsRootSessions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.EnableOutboundWebIdentityFederation">EnableOutboundWebIdentityFederation</a></code> | <code>string</code> | [Write] iam:EnableOutboundWebIdentityFederation. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.GenerateCredentialReport">GenerateCredentialReport</a></code> | <code>string</code> | [Read] iam:GenerateCredentialReport. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.GenerateOrganizationsAccessReport">GenerateOrganizationsAccessReport</a></code> | <code>string</code> | [Read] iam:GenerateOrganizationsAccessReport. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.GenerateServiceLastAccessedDetails">GenerateServiceLastAccessedDetails</a></code> | <code>string</code> | [Read] iam:GenerateServiceLastAccessedDetails. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListAccessKeys">ListAccessKeys</a></code> | <code>string</code> | [List] iam:ListAccessKeys. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListAccountAliases">ListAccountAliases</a></code> | <code>string</code> | [List] iam:ListAccountAliases. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListAttachedGroupPolicies">ListAttachedGroupPolicies</a></code> | <code>string</code> | [List] iam:ListAttachedGroupPolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListAttachedRolePolicies">ListAttachedRolePolicies</a></code> | <code>string</code> | [List] iam:ListAttachedRolePolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListAttachedUserPolicies">ListAttachedUserPolicies</a></code> | <code>string</code> | [List] iam:ListAttachedUserPolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListCloudFrontPublicKeys">ListCloudFrontPublicKeys</a></code> | <code>string</code> | [List] iam:ListCloudFrontPublicKeys. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListDelegationRequests">ListDelegationRequests</a></code> | <code>string</code> | [List] iam:ListDelegationRequests. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListEntitiesForPolicy">ListEntitiesForPolicy</a></code> | <code>string</code> | [List] iam:ListEntitiesForPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListGroupPolicies">ListGroupPolicies</a></code> | <code>string</code> | [List] iam:ListGroupPolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] iam:ListGroups. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListGroupsForUser">ListGroupsForUser</a></code> | <code>string</code> | [List] iam:ListGroupsForUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfiles">ListInstanceProfiles</a></code> | <code>string</code> | [List] iam:ListInstanceProfiles. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfilesForRole">ListInstanceProfilesForRole</a></code> | <code>string</code> | [List] iam:ListInstanceProfilesForRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfileTags">ListInstanceProfileTags</a></code> | <code>string</code> | [List] iam:ListInstanceProfileTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListMFADevices">ListMFADevices</a></code> | <code>string</code> | [List] iam:ListMFADevices. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListMFADeviceTags">ListMFADeviceTags</a></code> | <code>string</code> | [List] iam:ListMFADeviceTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListOpenIDConnectProviders">ListOpenIDConnectProviders</a></code> | <code>string</code> | [List] iam:ListOpenIDConnectProviders. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListOpenIDConnectProviderTags">ListOpenIDConnectProviderTags</a></code> | <code>string</code> | [List] iam:ListOpenIDConnectProviderTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListOrganizationsFeatures">ListOrganizationsFeatures</a></code> | <code>string</code> | [List] iam:ListOrganizationsFeatures. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] iam:ListPolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListPoliciesGrantingServiceAccess">ListPoliciesGrantingServiceAccess</a></code> | <code>string</code> | [List] iam:ListPoliciesGrantingServiceAccess. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListPolicyTags">ListPolicyTags</a></code> | <code>string</code> | [List] iam:ListPolicyTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string</code> | [List] iam:ListPolicyVersions. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListRolePolicies">ListRolePolicies</a></code> | <code>string</code> | [List] iam:ListRolePolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListRoles">ListRoles</a></code> | <code>string</code> | [List] iam:ListRoles. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListRoleTags">ListRoleTags</a></code> | <code>string</code> | [List] iam:ListRoleTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListSAMLProviders">ListSAMLProviders</a></code> | <code>string</code> | [List] iam:ListSAMLProviders. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListSAMLProviderTags">ListSAMLProviderTags</a></code> | <code>string</code> | [List] iam:ListSAMLProviderTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListServerCertificates">ListServerCertificates</a></code> | <code>string</code> | [List] iam:ListServerCertificates. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListServerCertificateTags">ListServerCertificateTags</a></code> | <code>string</code> | [List] iam:ListServerCertificateTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListServiceSpecificCredentials">ListServiceSpecificCredentials</a></code> | <code>string</code> | [List] iam:ListServiceSpecificCredentials. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListSigningCertificates">ListSigningCertificates</a></code> | <code>string</code> | [List] iam:ListSigningCertificates. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListSSHPublicKeys">ListSSHPublicKeys</a></code> | <code>string</code> | [List] iam:ListSSHPublicKeys. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListSTSRegionalEndpointsStatus">ListSTSRegionalEndpointsStatus</a></code> | <code>string</code> | [List] iam:ListSTSRegionalEndpointsStatus. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListUserPolicies">ListUserPolicies</a></code> | <code>string</code> | [List] iam:ListUserPolicies. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] iam:ListUsers. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListUserTags">ListUserTags</a></code> | <code>string</code> | [List] iam:ListUserTags. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ListVirtualMFADevices">ListVirtualMFADevices</a></code> | <code>string</code> | [List] iam:ListVirtualMFADevices. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PassRole">PassRole</a></code> | <code>string</code> | [Write] iam:PassRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutAccountProperties">PutAccountProperties</a></code> | <code>string</code> | [Write] iam:PutAccountProperties. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutGroupPolicy">PutGroupPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:PutGroupPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutRolePermissionsBoundary">PutRolePermissionsBoundary</a></code> | <code>string</code> | [PermissionManagement] iam:PutRolePermissionsBoundary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutRolePolicy">PutRolePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:PutRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutUserPermissionsBoundary">PutUserPermissionsBoundary</a></code> | <code>string</code> | [PermissionManagement] iam:PutUserPermissionsBoundary. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.PutUserPolicy">PutUserPolicy</a></code> | <code>string</code> | [PermissionManagement] iam:PutUserPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.RejectDelegationRequest">RejectDelegationRequest</a></code> | <code>string</code> | [Write] iam:RejectDelegationRequest. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.RemoveClientIDFromOpenIDConnectProvider">RemoveClientIDFromOpenIDConnectProvider</a></code> | <code>string</code> | [Write] iam:RemoveClientIDFromOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.RemoveRoleFromInstanceProfile">RemoveRoleFromInstanceProfile</a></code> | <code>string</code> | [Write] iam:RemoveRoleFromInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.RemoveUserFromGroup">RemoveUserFromGroup</a></code> | <code>string</code> | [Write] iam:RemoveUserFromGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ResetServiceSpecificCredential">ResetServiceSpecificCredential</a></code> | <code>string</code> | [Write] iam:ResetServiceSpecificCredential. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.ResyncMFADevice">ResyncMFADevice</a></code> | <code>string</code> | [Write] iam:ResyncMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.SendDelegationToken">SendDelegationToken</a></code> | <code>string</code> | [Write] iam:SendDelegationToken. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.SimulateCustomPolicy">SimulateCustomPolicy</a></code> | <code>string</code> | [Read] iam:SimulateCustomPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.SimulatePrincipalPolicy">SimulatePrincipalPolicy</a></code> | <code>string</code> | [Read] iam:SimulatePrincipalPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagInstanceProfile">TagInstanceProfile</a></code> | <code>string</code> | [Tagging] iam:TagInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagMFADevice">TagMFADevice</a></code> | <code>string</code> | [Tagging] iam:TagMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagOpenIDConnectProvider">TagOpenIDConnectProvider</a></code> | <code>string</code> | [Tagging] iam:TagOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagPolicy">TagPolicy</a></code> | <code>string</code> | [Tagging] iam:TagPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagRole">TagRole</a></code> | <code>string</code> | [Tagging] iam:TagRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagSAMLProvider">TagSAMLProvider</a></code> | <code>string</code> | [Tagging] iam:TagSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagServerCertificate">TagServerCertificate</a></code> | <code>string</code> | [Tagging] iam:TagServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.TagUser">TagUser</a></code> | <code>string</code> | [Tagging] iam:TagUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagInstanceProfile">UntagInstanceProfile</a></code> | <code>string</code> | [Tagging] iam:UntagInstanceProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagMFADevice">UntagMFADevice</a></code> | <code>string</code> | [Tagging] iam:UntagMFADevice. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagOpenIDConnectProvider">UntagOpenIDConnectProvider</a></code> | <code>string</code> | [Tagging] iam:UntagOpenIDConnectProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagPolicy">UntagPolicy</a></code> | <code>string</code> | [Tagging] iam:UntagPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagRole">UntagRole</a></code> | <code>string</code> | [Tagging] iam:UntagRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagSAMLProvider">UntagSAMLProvider</a></code> | <code>string</code> | [Tagging] iam:UntagSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagServerCertificate">UntagServerCertificate</a></code> | <code>string</code> | [Tagging] iam:UntagServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UntagUser">UntagUser</a></code> | <code>string</code> | [Tagging] iam:UntagUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateAccessKey">UpdateAccessKey</a></code> | <code>string</code> | [Write] iam:UpdateAccessKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateAccountEmailAddress">UpdateAccountEmailAddress</a></code> | <code>string</code> | [Write] iam:UpdateAccountEmailAddress. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateAccountName">UpdateAccountName</a></code> | <code>string</code> | [Write] iam:UpdateAccountName. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateAccountPasswordPolicy">UpdateAccountPasswordPolicy</a></code> | <code>string</code> | [Write] iam:UpdateAccountPasswordPolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateAssumeRolePolicy">UpdateAssumeRolePolicy</a></code> | <code>string</code> | [PermissionManagement] iam:UpdateAssumeRolePolicy. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateCloudFrontPublicKey">UpdateCloudFrontPublicKey</a></code> | <code>string</code> | [Write] iam:UpdateCloudFrontPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] iam:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateLoginProfile">UpdateLoginProfile</a></code> | <code>string</code> | [Write] iam:UpdateLoginProfile. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateOpenIDConnectProviderThumbprint">UpdateOpenIDConnectProviderThumbprint</a></code> | <code>string</code> | [Write] iam:UpdateOpenIDConnectProviderThumbprint. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateRole">UpdateRole</a></code> | <code>string</code> | [Write] iam:UpdateRole. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateRoleDescription">UpdateRoleDescription</a></code> | <code>string</code> | [Write] iam:UpdateRoleDescription. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateSAMLProvider">UpdateSAMLProvider</a></code> | <code>string</code> | [Write] iam:UpdateSAMLProvider. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateServerCertificate">UpdateServerCertificate</a></code> | <code>string</code> | [Write] iam:UpdateServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateServiceSpecificCredential">UpdateServiceSpecificCredential</a></code> | <code>string</code> | [Write] iam:UpdateServiceSpecificCredential. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateSigningCertificate">UpdateSigningCertificate</a></code> | <code>string</code> | [Write] iam:UpdateSigningCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateSSHPublicKey">UpdateSSHPublicKey</a></code> | <code>string</code> | [Write] iam:UpdateSSHPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] iam:UpdateUser. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UploadCloudFrontPublicKey">UploadCloudFrontPublicKey</a></code> | <code>string</code> | [Write] iam:UploadCloudFrontPublicKey. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UploadServerCertificate">UploadServerCertificate</a></code> | <code>string</code> | [Write] iam:UploadServerCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UploadSigningCertificate">UploadSigningCertificate</a></code> | <code>string</code> | [Write] iam:UploadSigningCertificate. |
| <code><a href="#@cdk_utils/iam.iam.IAMActions.property.UploadSSHPublicKey">UploadSSHPublicKey</a></code> | <code>string</code> | [Write] iam:UploadSSHPublicKey. |

---

##### `AcceptDelegationRequest`<sup>Required</sup> <a name="AcceptDelegationRequest" id="@cdk_utils/iam.iam.IAMActions.property.AcceptDelegationRequest"></a>

```typescript
public readonly AcceptDelegationRequest: string;
```

- *Type:* string

[Write] iam:AcceptDelegationRequest.

---

##### `actionGetAccessKeyLastUsed`<sup>Required</sup> <a name="actionGetAccessKeyLastUsed" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccessKeyLastUsed"></a>

```typescript
public readonly actionGetAccessKeyLastUsed: string;
```

- *Type:* string

[Read] iam:GetAccessKeyLastUsed.

---

##### `actionGetAccountAuthorizationDetails`<sup>Required</sup> <a name="actionGetAccountAuthorizationDetails" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountAuthorizationDetails"></a>

```typescript
public readonly actionGetAccountAuthorizationDetails: string;
```

- *Type:* string

[Read] iam:GetAccountAuthorizationDetails.

---

##### `actionGetAccountEmailAddress`<sup>Required</sup> <a name="actionGetAccountEmailAddress" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountEmailAddress"></a>

```typescript
public readonly actionGetAccountEmailAddress: string;
```

- *Type:* string

[Read] iam:GetAccountEmailAddress.

---

##### `actionGetAccountName`<sup>Required</sup> <a name="actionGetAccountName" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountName"></a>

```typescript
public readonly actionGetAccountName: string;
```

- *Type:* string

[Read] iam:GetAccountName.

---

##### `actionGetAccountPasswordPolicy`<sup>Required</sup> <a name="actionGetAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountPasswordPolicy"></a>

```typescript
public readonly actionGetAccountPasswordPolicy: string;
```

- *Type:* string

[Read] iam:GetAccountPasswordPolicy.

---

##### `actionGetAccountProperties`<sup>Required</sup> <a name="actionGetAccountProperties" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountProperties"></a>

```typescript
public readonly actionGetAccountProperties: string;
```

- *Type:* string

[Read] iam:GetAccountProperties.

---

##### `actionGetAccountSummary`<sup>Required</sup> <a name="actionGetAccountSummary" id="@cdk_utils/iam.iam.IAMActions.property.actionGetAccountSummary"></a>

```typescript
public readonly actionGetAccountSummary: string;
```

- *Type:* string

[List] iam:GetAccountSummary.

---

##### `actionGetCloudFrontPublicKey`<sup>Required</sup> <a name="actionGetCloudFrontPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.actionGetCloudFrontPublicKey"></a>

```typescript
public readonly actionGetCloudFrontPublicKey: string;
```

- *Type:* string

[Read] iam:GetCloudFrontPublicKey.

---

##### `actionGetContextKeysForCustomPolicy`<sup>Required</sup> <a name="actionGetContextKeysForCustomPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetContextKeysForCustomPolicy"></a>

```typescript
public readonly actionGetContextKeysForCustomPolicy: string;
```

- *Type:* string

[Read] iam:GetContextKeysForCustomPolicy.

---

##### `actionGetContextKeysForPrincipalPolicy`<sup>Required</sup> <a name="actionGetContextKeysForPrincipalPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetContextKeysForPrincipalPolicy"></a>

```typescript
public readonly actionGetContextKeysForPrincipalPolicy: string;
```

- *Type:* string

[Read] iam:GetContextKeysForPrincipalPolicy.

---

##### `actionGetCredentialReport`<sup>Required</sup> <a name="actionGetCredentialReport" id="@cdk_utils/iam.iam.IAMActions.property.actionGetCredentialReport"></a>

```typescript
public readonly actionGetCredentialReport: string;
```

- *Type:* string

[Read] iam:GetCredentialReport.

---

##### `actionGetDelegationRequest`<sup>Required</sup> <a name="actionGetDelegationRequest" id="@cdk_utils/iam.iam.IAMActions.property.actionGetDelegationRequest"></a>

```typescript
public readonly actionGetDelegationRequest: string;
```

- *Type:* string

[Read] iam:GetDelegationRequest.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.iam.IAMActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] iam:GetGroup.

---

##### `actionGetGroupPolicy`<sup>Required</sup> <a name="actionGetGroupPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetGroupPolicy"></a>

```typescript
public readonly actionGetGroupPolicy: string;
```

- *Type:* string

[Read] iam:GetGroupPolicy.

---

##### `actionGetHumanReadableSummary`<sup>Required</sup> <a name="actionGetHumanReadableSummary" id="@cdk_utils/iam.iam.IAMActions.property.actionGetHumanReadableSummary"></a>

```typescript
public readonly actionGetHumanReadableSummary: string;
```

- *Type:* string

[Read] iam:GetHumanReadableSummary.

---

##### `actionGetInstanceProfile`<sup>Required</sup> <a name="actionGetInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.actionGetInstanceProfile"></a>

```typescript
public readonly actionGetInstanceProfile: string;
```

- *Type:* string

[Read] iam:GetInstanceProfile.

---

##### `actionGetLoginProfile`<sup>Required</sup> <a name="actionGetLoginProfile" id="@cdk_utils/iam.iam.IAMActions.property.actionGetLoginProfile"></a>

```typescript
public readonly actionGetLoginProfile: string;
```

- *Type:* string

[List] iam:GetLoginProfile.

---

##### `actionGetMFADevice`<sup>Required</sup> <a name="actionGetMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.actionGetMFADevice"></a>

```typescript
public readonly actionGetMFADevice: string;
```

- *Type:* string

[Read] iam:GetMFADevice.

---

##### `actionGetOpenIDConnectProvider`<sup>Required</sup> <a name="actionGetOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.actionGetOpenIDConnectProvider"></a>

```typescript
public readonly actionGetOpenIDConnectProvider: string;
```

- *Type:* string

[Read] iam:GetOpenIDConnectProvider.

---

##### `actionGetOrganizationsAccessReport`<sup>Required</sup> <a name="actionGetOrganizationsAccessReport" id="@cdk_utils/iam.iam.IAMActions.property.actionGetOrganizationsAccessReport"></a>

```typescript
public readonly actionGetOrganizationsAccessReport: string;
```

- *Type:* string

[Read] iam:GetOrganizationsAccessReport.

---

##### `actionGetOutboundWebIdentityFederationInfo`<sup>Required</sup> <a name="actionGetOutboundWebIdentityFederationInfo" id="@cdk_utils/iam.iam.IAMActions.property.actionGetOutboundWebIdentityFederationInfo"></a>

```typescript
public readonly actionGetOutboundWebIdentityFederationInfo: string;
```

- *Type:* string

[Read] iam:GetOutboundWebIdentityFederationInfo.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] iam:GetPolicy.

---

##### `actionGetPolicyVersion`<sup>Required</sup> <a name="actionGetPolicyVersion" id="@cdk_utils/iam.iam.IAMActions.property.actionGetPolicyVersion"></a>

```typescript
public readonly actionGetPolicyVersion: string;
```

- *Type:* string

[Read] iam:GetPolicyVersion.

---

##### `actionGetRole`<sup>Required</sup> <a name="actionGetRole" id="@cdk_utils/iam.iam.IAMActions.property.actionGetRole"></a>

```typescript
public readonly actionGetRole: string;
```

- *Type:* string

[Read] iam:GetRole.

---

##### `actionGetRolePolicy`<sup>Required</sup> <a name="actionGetRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetRolePolicy"></a>

```typescript
public readonly actionGetRolePolicy: string;
```

- *Type:* string

[Read] iam:GetRolePolicy.

---

##### `actionGetRoleTemplateVersion`<sup>Required</sup> <a name="actionGetRoleTemplateVersion" id="@cdk_utils/iam.iam.IAMActions.property.actionGetRoleTemplateVersion"></a>

```typescript
public readonly actionGetRoleTemplateVersion: string;
```

- *Type:* string

[Read] iam:GetRoleTemplateVersion.

---

##### `actionGetSAMLProvider`<sup>Required</sup> <a name="actionGetSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.actionGetSAMLProvider"></a>

```typescript
public readonly actionGetSAMLProvider: string;
```

- *Type:* string

[Read] iam:GetSAMLProvider.

---

##### `actionGetServerCertificate`<sup>Required</sup> <a name="actionGetServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.actionGetServerCertificate"></a>

```typescript
public readonly actionGetServerCertificate: string;
```

- *Type:* string

[Read] iam:GetServerCertificate.

---

##### `actionGetServiceLastAccessedDetails`<sup>Required</sup> <a name="actionGetServiceLastAccessedDetails" id="@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLastAccessedDetails"></a>

```typescript
public readonly actionGetServiceLastAccessedDetails: string;
```

- *Type:* string

[Read] iam:GetServiceLastAccessedDetails.

---

##### `actionGetServiceLastAccessedDetailsWithEntities`<sup>Required</sup> <a name="actionGetServiceLastAccessedDetailsWithEntities" id="@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLastAccessedDetailsWithEntities"></a>

```typescript
public readonly actionGetServiceLastAccessedDetailsWithEntities: string;
```

- *Type:* string

[Read] iam:GetServiceLastAccessedDetailsWithEntities.

---

##### `actionGetServiceLinkedRoleDeletionStatus`<sup>Required</sup> <a name="actionGetServiceLinkedRoleDeletionStatus" id="@cdk_utils/iam.iam.IAMActions.property.actionGetServiceLinkedRoleDeletionStatus"></a>

```typescript
public readonly actionGetServiceLinkedRoleDeletionStatus: string;
```

- *Type:* string

[Read] iam:GetServiceLinkedRoleDeletionStatus.

---

##### `actionGetSSHPublicKey`<sup>Required</sup> <a name="actionGetSSHPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.actionGetSSHPublicKey"></a>

```typescript
public readonly actionGetSSHPublicKey: string;
```

- *Type:* string

[Read] iam:GetSSHPublicKey.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.iam.IAMActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] iam:GetUser.

---

##### `actionGetUserPolicy`<sup>Required</sup> <a name="actionGetUserPolicy" id="@cdk_utils/iam.iam.IAMActions.property.actionGetUserPolicy"></a>

```typescript
public readonly actionGetUserPolicy: string;
```

- *Type:* string

[Read] iam:GetUserPolicy.

---

##### `actionSetDefaultPolicyVersion`<sup>Required</sup> <a name="actionSetDefaultPolicyVersion" id="@cdk_utils/iam.iam.IAMActions.property.actionSetDefaultPolicyVersion"></a>

```typescript
public readonly actionSetDefaultPolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iam:SetDefaultPolicyVersion.

---

##### `actionSetSecurityTokenServicePreferences`<sup>Required</sup> <a name="actionSetSecurityTokenServicePreferences" id="@cdk_utils/iam.iam.IAMActions.property.actionSetSecurityTokenServicePreferences"></a>

```typescript
public readonly actionSetSecurityTokenServicePreferences: string;
```

- *Type:* string

[Write] iam:SetSecurityTokenServicePreferences.

---

##### `actionSetSTSRegionalEndpointStatus`<sup>Required</sup> <a name="actionSetSTSRegionalEndpointStatus" id="@cdk_utils/iam.iam.IAMActions.property.actionSetSTSRegionalEndpointStatus"></a>

```typescript
public readonly actionSetSTSRegionalEndpointStatus: string;
```

- *Type:* string

[Write] iam:SetSTSRegionalEndpointStatus.

---

##### `AddClientIDToOpenIDConnectProvider`<sup>Required</sup> <a name="AddClientIDToOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.AddClientIDToOpenIDConnectProvider"></a>

```typescript
public readonly AddClientIDToOpenIDConnectProvider: string;
```

- *Type:* string

[Write] iam:AddClientIDToOpenIDConnectProvider.

---

##### `AddRoleToInstanceProfile`<sup>Required</sup> <a name="AddRoleToInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.AddRoleToInstanceProfile"></a>

```typescript
public readonly AddRoleToInstanceProfile: string;
```

- *Type:* string

[Write] iam:AddRoleToInstanceProfile.

---

##### `AddUserToGroup`<sup>Required</sup> <a name="AddUserToGroup" id="@cdk_utils/iam.iam.IAMActions.property.AddUserToGroup"></a>

```typescript
public readonly AddUserToGroup: string;
```

- *Type:* string

[Write] iam:AddUserToGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iam.IAMActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iam.IAMActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iam.IAMActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iam.IAMActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iam.IAMActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDelegationRequest`<sup>Required</sup> <a name="AssociateDelegationRequest" id="@cdk_utils/iam.iam.IAMActions.property.AssociateDelegationRequest"></a>

```typescript
public readonly AssociateDelegationRequest: string;
```

- *Type:* string

[Write] iam:AssociateDelegationRequest.

---

##### `AttachGroupPolicy`<sup>Required</sup> <a name="AttachGroupPolicy" id="@cdk_utils/iam.iam.IAMActions.property.AttachGroupPolicy"></a>

```typescript
public readonly AttachGroupPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:AttachGroupPolicy.

---

##### `AttachRolePolicy`<sup>Required</sup> <a name="AttachRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.AttachRolePolicy"></a>

```typescript
public readonly AttachRolePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:AttachRolePolicy.

---

##### `AttachUserPolicy`<sup>Required</sup> <a name="AttachUserPolicy" id="@cdk_utils/iam.iam.IAMActions.property.AttachUserPolicy"></a>

```typescript
public readonly AttachUserPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:AttachUserPolicy.

---

##### `ChangePassword`<sup>Required</sup> <a name="ChangePassword" id="@cdk_utils/iam.iam.IAMActions.property.ChangePassword"></a>

```typescript
public readonly ChangePassword: string;
```

- *Type:* string

[Write] iam:ChangePassword.

---

##### `CreateAccessKey`<sup>Required</sup> <a name="CreateAccessKey" id="@cdk_utils/iam.iam.IAMActions.property.CreateAccessKey"></a>

```typescript
public readonly CreateAccessKey: string;
```

- *Type:* string

[Write] iam:CreateAccessKey.

---

##### `CreateAccountAlias`<sup>Required</sup> <a name="CreateAccountAlias" id="@cdk_utils/iam.iam.IAMActions.property.CreateAccountAlias"></a>

```typescript
public readonly CreateAccountAlias: string;
```

- *Type:* string

[Write] iam:CreateAccountAlias.

---

##### `CreateDelegationRequest`<sup>Required</sup> <a name="CreateDelegationRequest" id="@cdk_utils/iam.iam.IAMActions.property.CreateDelegationRequest"></a>

```typescript
public readonly CreateDelegationRequest: string;
```

- *Type:* string

[Write] iam:CreateDelegationRequest.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.iam.IAMActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] iam:CreateGroup.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string;
```

- *Type:* string

[Write] iam:CreateInstanceProfile.

---

##### `CreateLoginProfile`<sup>Required</sup> <a name="CreateLoginProfile" id="@cdk_utils/iam.iam.IAMActions.property.CreateLoginProfile"></a>

```typescript
public readonly CreateLoginProfile: string;
```

- *Type:* string

[Write] iam:CreateLoginProfile.

---

##### `CreateOpenIDConnectProvider`<sup>Required</sup> <a name="CreateOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.CreateOpenIDConnectProvider"></a>

```typescript
public readonly CreateOpenIDConnectProvider: string;
```

- *Type:* string

[Write] iam:CreateOpenIDConnectProvider.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.iam.IAMActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:CreatePolicy.

---

##### `CreatePolicyVersion`<sup>Required</sup> <a name="CreatePolicyVersion" id="@cdk_utils/iam.iam.IAMActions.property.CreatePolicyVersion"></a>

```typescript
public readonly CreatePolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iam:CreatePolicyVersion.

---

##### `CreateRole`<sup>Required</sup> <a name="CreateRole" id="@cdk_utils/iam.iam.IAMActions.property.CreateRole"></a>

```typescript
public readonly CreateRole: string;
```

- *Type:* string

[Write] iam:CreateRole.

---

##### `CreateSAMLProvider`<sup>Required</sup> <a name="CreateSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.CreateSAMLProvider"></a>

```typescript
public readonly CreateSAMLProvider: string;
```

- *Type:* string

[Write] iam:CreateSAMLProvider.

---

##### `CreateServiceLinkedRole`<sup>Required</sup> <a name="CreateServiceLinkedRole" id="@cdk_utils/iam.iam.IAMActions.property.CreateServiceLinkedRole"></a>

```typescript
public readonly CreateServiceLinkedRole: string;
```

- *Type:* string

[Write] iam:CreateServiceLinkedRole.

---

##### `CreateServiceSpecificCredential`<sup>Required</sup> <a name="CreateServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMActions.property.CreateServiceSpecificCredential"></a>

```typescript
public readonly CreateServiceSpecificCredential: string;
```

- *Type:* string

[Write] iam:CreateServiceSpecificCredential.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.iam.IAMActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] iam:CreateUser.

---

##### `CreateVirtualMFADevice`<sup>Required</sup> <a name="CreateVirtualMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.CreateVirtualMFADevice"></a>

```typescript
public readonly CreateVirtualMFADevice: string;
```

- *Type:* string

[Write] iam:CreateVirtualMFADevice.

---

##### `DeactivateMFADevice`<sup>Required</sup> <a name="DeactivateMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.DeactivateMFADevice"></a>

```typescript
public readonly DeactivateMFADevice: string;
```

- *Type:* string

[Write] iam:DeactivateMFADevice.

---

##### `DeleteAccessKey`<sup>Required</sup> <a name="DeleteAccessKey" id="@cdk_utils/iam.iam.IAMActions.property.DeleteAccessKey"></a>

```typescript
public readonly DeleteAccessKey: string;
```

- *Type:* string

[Write] iam:DeleteAccessKey.

---

##### `DeleteAccountAlias`<sup>Required</sup> <a name="DeleteAccountAlias" id="@cdk_utils/iam.iam.IAMActions.property.DeleteAccountAlias"></a>

```typescript
public readonly DeleteAccountAlias: string;
```

- *Type:* string

[Write] iam:DeleteAccountAlias.

---

##### `DeleteAccountPasswordPolicy`<sup>Required</sup> <a name="DeleteAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMActions.property.DeleteAccountPasswordPolicy"></a>

```typescript
public readonly DeleteAccountPasswordPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteAccountPasswordPolicy.

---

##### `DeleteCloudFrontPublicKey`<sup>Required</sup> <a name="DeleteCloudFrontPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.DeleteCloudFrontPublicKey"></a>

```typescript
public readonly DeleteCloudFrontPublicKey: string;
```

- *Type:* string

[Write] iam:DeleteCloudFrontPublicKey.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.iam.IAMActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] iam:DeleteGroup.

---

##### `DeleteGroupPolicy`<sup>Required</sup> <a name="DeleteGroupPolicy" id="@cdk_utils/iam.iam.IAMActions.property.DeleteGroupPolicy"></a>

```typescript
public readonly DeleteGroupPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteGroupPolicy.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string;
```

- *Type:* string

[Write] iam:DeleteInstanceProfile.

---

##### `DeleteLoginProfile`<sup>Required</sup> <a name="DeleteLoginProfile" id="@cdk_utils/iam.iam.IAMActions.property.DeleteLoginProfile"></a>

```typescript
public readonly DeleteLoginProfile: string;
```

- *Type:* string

[Write] iam:DeleteLoginProfile.

---

##### `DeleteOpenIDConnectProvider`<sup>Required</sup> <a name="DeleteOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.DeleteOpenIDConnectProvider"></a>

```typescript
public readonly DeleteOpenIDConnectProvider: string;
```

- *Type:* string

[Write] iam:DeleteOpenIDConnectProvider.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.iam.IAMActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DeletePolicy.

---

##### `DeletePolicyVersion`<sup>Required</sup> <a name="DeletePolicyVersion" id="@cdk_utils/iam.iam.IAMActions.property.DeletePolicyVersion"></a>

```typescript
public readonly DeletePolicyVersion: string;
```

- *Type:* string

[PermissionManagement] iam:DeletePolicyVersion.

---

##### `DeleteRole`<sup>Required</sup> <a name="DeleteRole" id="@cdk_utils/iam.iam.IAMActions.property.DeleteRole"></a>

```typescript
public readonly DeleteRole: string;
```

- *Type:* string

[Write] iam:DeleteRole.

---

##### `DeleteRolePermissionsBoundary`<sup>Required</sup> <a name="DeleteRolePermissionsBoundary" id="@cdk_utils/iam.iam.IAMActions.property.DeleteRolePermissionsBoundary"></a>

```typescript
public readonly DeleteRolePermissionsBoundary: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteRolePermissionsBoundary.

---

##### `DeleteRolePolicy`<sup>Required</sup> <a name="DeleteRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.DeleteRolePolicy"></a>

```typescript
public readonly DeleteRolePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteRolePolicy.

---

##### `DeleteSAMLProvider`<sup>Required</sup> <a name="DeleteSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.DeleteSAMLProvider"></a>

```typescript
public readonly DeleteSAMLProvider: string;
```

- *Type:* string

[Write] iam:DeleteSAMLProvider.

---

##### `DeleteServerCertificate`<sup>Required</sup> <a name="DeleteServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.DeleteServerCertificate"></a>

```typescript
public readonly DeleteServerCertificate: string;
```

- *Type:* string

[Write] iam:DeleteServerCertificate.

---

##### `DeleteServiceLinkedRole`<sup>Required</sup> <a name="DeleteServiceLinkedRole" id="@cdk_utils/iam.iam.IAMActions.property.DeleteServiceLinkedRole"></a>

```typescript
public readonly DeleteServiceLinkedRole: string;
```

- *Type:* string

[Write] iam:DeleteServiceLinkedRole.

---

##### `DeleteServiceSpecificCredential`<sup>Required</sup> <a name="DeleteServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMActions.property.DeleteServiceSpecificCredential"></a>

```typescript
public readonly DeleteServiceSpecificCredential: string;
```

- *Type:* string

[Write] iam:DeleteServiceSpecificCredential.

---

##### `DeleteSigningCertificate`<sup>Required</sup> <a name="DeleteSigningCertificate" id="@cdk_utils/iam.iam.IAMActions.property.DeleteSigningCertificate"></a>

```typescript
public readonly DeleteSigningCertificate: string;
```

- *Type:* string

[Write] iam:DeleteSigningCertificate.

---

##### `DeleteSSHPublicKey`<sup>Required</sup> <a name="DeleteSSHPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.DeleteSSHPublicKey"></a>

```typescript
public readonly DeleteSSHPublicKey: string;
```

- *Type:* string

[Write] iam:DeleteSSHPublicKey.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.iam.IAMActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] iam:DeleteUser.

---

##### `DeleteUserPermissionsBoundary`<sup>Required</sup> <a name="DeleteUserPermissionsBoundary" id="@cdk_utils/iam.iam.IAMActions.property.DeleteUserPermissionsBoundary"></a>

```typescript
public readonly DeleteUserPermissionsBoundary: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteUserPermissionsBoundary.

---

##### `DeleteUserPolicy`<sup>Required</sup> <a name="DeleteUserPolicy" id="@cdk_utils/iam.iam.IAMActions.property.DeleteUserPolicy"></a>

```typescript
public readonly DeleteUserPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DeleteUserPolicy.

---

##### `DeleteVirtualMFADevice`<sup>Required</sup> <a name="DeleteVirtualMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.DeleteVirtualMFADevice"></a>

```typescript
public readonly DeleteVirtualMFADevice: string;
```

- *Type:* string

[Write] iam:DeleteVirtualMFADevice.

---

##### `DetachGroupPolicy`<sup>Required</sup> <a name="DetachGroupPolicy" id="@cdk_utils/iam.iam.IAMActions.property.DetachGroupPolicy"></a>

```typescript
public readonly DetachGroupPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DetachGroupPolicy.

---

##### `DetachRolePolicy`<sup>Required</sup> <a name="DetachRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.DetachRolePolicy"></a>

```typescript
public readonly DetachRolePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DetachRolePolicy.

---

##### `DetachUserPolicy`<sup>Required</sup> <a name="DetachUserPolicy" id="@cdk_utils/iam.iam.IAMActions.property.DetachUserPolicy"></a>

```typescript
public readonly DetachUserPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:DetachUserPolicy.

---

##### `DisableOrganizationsRootCredentialsManagement`<sup>Required</sup> <a name="DisableOrganizationsRootCredentialsManagement" id="@cdk_utils/iam.iam.IAMActions.property.DisableOrganizationsRootCredentialsManagement"></a>

```typescript
public readonly DisableOrganizationsRootCredentialsManagement: string;
```

- *Type:* string

[Write] iam:DisableOrganizationsRootCredentialsManagement.

---

##### `DisableOrganizationsRootSessions`<sup>Required</sup> <a name="DisableOrganizationsRootSessions" id="@cdk_utils/iam.iam.IAMActions.property.DisableOrganizationsRootSessions"></a>

```typescript
public readonly DisableOrganizationsRootSessions: string;
```

- *Type:* string

[Write] iam:DisableOrganizationsRootSessions.

---

##### `DisableOutboundWebIdentityFederation`<sup>Required</sup> <a name="DisableOutboundWebIdentityFederation" id="@cdk_utils/iam.iam.IAMActions.property.DisableOutboundWebIdentityFederation"></a>

```typescript
public readonly DisableOutboundWebIdentityFederation: string;
```

- *Type:* string

[Write] iam:DisableOutboundWebIdentityFederation.

---

##### `EnableMFADevice`<sup>Required</sup> <a name="EnableMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.EnableMFADevice"></a>

```typescript
public readonly EnableMFADevice: string;
```

- *Type:* string

[Write] iam:EnableMFADevice.

---

##### `EnableOrganizationsRootCredentialsManagement`<sup>Required</sup> <a name="EnableOrganizationsRootCredentialsManagement" id="@cdk_utils/iam.iam.IAMActions.property.EnableOrganizationsRootCredentialsManagement"></a>

```typescript
public readonly EnableOrganizationsRootCredentialsManagement: string;
```

- *Type:* string

[Write] iam:EnableOrganizationsRootCredentialsManagement.

---

##### `EnableOrganizationsRootSessions`<sup>Required</sup> <a name="EnableOrganizationsRootSessions" id="@cdk_utils/iam.iam.IAMActions.property.EnableOrganizationsRootSessions"></a>

```typescript
public readonly EnableOrganizationsRootSessions: string;
```

- *Type:* string

[Write] iam:EnableOrganizationsRootSessions.

---

##### `EnableOutboundWebIdentityFederation`<sup>Required</sup> <a name="EnableOutboundWebIdentityFederation" id="@cdk_utils/iam.iam.IAMActions.property.EnableOutboundWebIdentityFederation"></a>

```typescript
public readonly EnableOutboundWebIdentityFederation: string;
```

- *Type:* string

[Write] iam:EnableOutboundWebIdentityFederation.

---

##### `GenerateCredentialReport`<sup>Required</sup> <a name="GenerateCredentialReport" id="@cdk_utils/iam.iam.IAMActions.property.GenerateCredentialReport"></a>

```typescript
public readonly GenerateCredentialReport: string;
```

- *Type:* string

[Read] iam:GenerateCredentialReport.

---

##### `GenerateOrganizationsAccessReport`<sup>Required</sup> <a name="GenerateOrganizationsAccessReport" id="@cdk_utils/iam.iam.IAMActions.property.GenerateOrganizationsAccessReport"></a>

```typescript
public readonly GenerateOrganizationsAccessReport: string;
```

- *Type:* string

[Read] iam:GenerateOrganizationsAccessReport.

---

##### `GenerateServiceLastAccessedDetails`<sup>Required</sup> <a name="GenerateServiceLastAccessedDetails" id="@cdk_utils/iam.iam.IAMActions.property.GenerateServiceLastAccessedDetails"></a>

```typescript
public readonly GenerateServiceLastAccessedDetails: string;
```

- *Type:* string

[Read] iam:GenerateServiceLastAccessedDetails.

---

##### `ListAccessKeys`<sup>Required</sup> <a name="ListAccessKeys" id="@cdk_utils/iam.iam.IAMActions.property.ListAccessKeys"></a>

```typescript
public readonly ListAccessKeys: string;
```

- *Type:* string

[List] iam:ListAccessKeys.

---

##### `ListAccountAliases`<sup>Required</sup> <a name="ListAccountAliases" id="@cdk_utils/iam.iam.IAMActions.property.ListAccountAliases"></a>

```typescript
public readonly ListAccountAliases: string;
```

- *Type:* string

[List] iam:ListAccountAliases.

---

##### `ListAttachedGroupPolicies`<sup>Required</sup> <a name="ListAttachedGroupPolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListAttachedGroupPolicies"></a>

```typescript
public readonly ListAttachedGroupPolicies: string;
```

- *Type:* string

[List] iam:ListAttachedGroupPolicies.

---

##### `ListAttachedRolePolicies`<sup>Required</sup> <a name="ListAttachedRolePolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListAttachedRolePolicies"></a>

```typescript
public readonly ListAttachedRolePolicies: string;
```

- *Type:* string

[List] iam:ListAttachedRolePolicies.

---

##### `ListAttachedUserPolicies`<sup>Required</sup> <a name="ListAttachedUserPolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListAttachedUserPolicies"></a>

```typescript
public readonly ListAttachedUserPolicies: string;
```

- *Type:* string

[List] iam:ListAttachedUserPolicies.

---

##### `ListCloudFrontPublicKeys`<sup>Required</sup> <a name="ListCloudFrontPublicKeys" id="@cdk_utils/iam.iam.IAMActions.property.ListCloudFrontPublicKeys"></a>

```typescript
public readonly ListCloudFrontPublicKeys: string;
```

- *Type:* string

[List] iam:ListCloudFrontPublicKeys.

---

##### `ListDelegationRequests`<sup>Required</sup> <a name="ListDelegationRequests" id="@cdk_utils/iam.iam.IAMActions.property.ListDelegationRequests"></a>

```typescript
public readonly ListDelegationRequests: string;
```

- *Type:* string

[List] iam:ListDelegationRequests.

---

##### `ListEntitiesForPolicy`<sup>Required</sup> <a name="ListEntitiesForPolicy" id="@cdk_utils/iam.iam.IAMActions.property.ListEntitiesForPolicy"></a>

```typescript
public readonly ListEntitiesForPolicy: string;
```

- *Type:* string

[List] iam:ListEntitiesForPolicy.

---

##### `ListGroupPolicies`<sup>Required</sup> <a name="ListGroupPolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListGroupPolicies"></a>

```typescript
public readonly ListGroupPolicies: string;
```

- *Type:* string

[List] iam:ListGroupPolicies.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.iam.IAMActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] iam:ListGroups.

---

##### `ListGroupsForUser`<sup>Required</sup> <a name="ListGroupsForUser" id="@cdk_utils/iam.iam.IAMActions.property.ListGroupsForUser"></a>

```typescript
public readonly ListGroupsForUser: string;
```

- *Type:* string

[List] iam:ListGroupsForUser.

---

##### `ListInstanceProfiles`<sup>Required</sup> <a name="ListInstanceProfiles" id="@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfiles"></a>

```typescript
public readonly ListInstanceProfiles: string;
```

- *Type:* string

[List] iam:ListInstanceProfiles.

---

##### `ListInstanceProfilesForRole`<sup>Required</sup> <a name="ListInstanceProfilesForRole" id="@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfilesForRole"></a>

```typescript
public readonly ListInstanceProfilesForRole: string;
```

- *Type:* string

[List] iam:ListInstanceProfilesForRole.

---

##### `ListInstanceProfileTags`<sup>Required</sup> <a name="ListInstanceProfileTags" id="@cdk_utils/iam.iam.IAMActions.property.ListInstanceProfileTags"></a>

```typescript
public readonly ListInstanceProfileTags: string;
```

- *Type:* string

[List] iam:ListInstanceProfileTags.

---

##### `ListMFADevices`<sup>Required</sup> <a name="ListMFADevices" id="@cdk_utils/iam.iam.IAMActions.property.ListMFADevices"></a>

```typescript
public readonly ListMFADevices: string;
```

- *Type:* string

[List] iam:ListMFADevices.

---

##### `ListMFADeviceTags`<sup>Required</sup> <a name="ListMFADeviceTags" id="@cdk_utils/iam.iam.IAMActions.property.ListMFADeviceTags"></a>

```typescript
public readonly ListMFADeviceTags: string;
```

- *Type:* string

[List] iam:ListMFADeviceTags.

---

##### `ListOpenIDConnectProviders`<sup>Required</sup> <a name="ListOpenIDConnectProviders" id="@cdk_utils/iam.iam.IAMActions.property.ListOpenIDConnectProviders"></a>

```typescript
public readonly ListOpenIDConnectProviders: string;
```

- *Type:* string

[List] iam:ListOpenIDConnectProviders.

---

##### `ListOpenIDConnectProviderTags`<sup>Required</sup> <a name="ListOpenIDConnectProviderTags" id="@cdk_utils/iam.iam.IAMActions.property.ListOpenIDConnectProviderTags"></a>

```typescript
public readonly ListOpenIDConnectProviderTags: string;
```

- *Type:* string

[List] iam:ListOpenIDConnectProviderTags.

---

##### `ListOrganizationsFeatures`<sup>Required</sup> <a name="ListOrganizationsFeatures" id="@cdk_utils/iam.iam.IAMActions.property.ListOrganizationsFeatures"></a>

```typescript
public readonly ListOrganizationsFeatures: string;
```

- *Type:* string

[List] iam:ListOrganizationsFeatures.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] iam:ListPolicies.

---

##### `ListPoliciesGrantingServiceAccess`<sup>Required</sup> <a name="ListPoliciesGrantingServiceAccess" id="@cdk_utils/iam.iam.IAMActions.property.ListPoliciesGrantingServiceAccess"></a>

```typescript
public readonly ListPoliciesGrantingServiceAccess: string;
```

- *Type:* string

[List] iam:ListPoliciesGrantingServiceAccess.

---

##### `ListPolicyTags`<sup>Required</sup> <a name="ListPolicyTags" id="@cdk_utils/iam.iam.IAMActions.property.ListPolicyTags"></a>

```typescript
public readonly ListPolicyTags: string;
```

- *Type:* string

[List] iam:ListPolicyTags.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.iam.IAMActions.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string;
```

- *Type:* string

[List] iam:ListPolicyVersions.

---

##### `ListRolePolicies`<sup>Required</sup> <a name="ListRolePolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListRolePolicies"></a>

```typescript
public readonly ListRolePolicies: string;
```

- *Type:* string

[List] iam:ListRolePolicies.

---

##### `ListRoles`<sup>Required</sup> <a name="ListRoles" id="@cdk_utils/iam.iam.IAMActions.property.ListRoles"></a>

```typescript
public readonly ListRoles: string;
```

- *Type:* string

[List] iam:ListRoles.

---

##### `ListRoleTags`<sup>Required</sup> <a name="ListRoleTags" id="@cdk_utils/iam.iam.IAMActions.property.ListRoleTags"></a>

```typescript
public readonly ListRoleTags: string;
```

- *Type:* string

[List] iam:ListRoleTags.

---

##### `ListSAMLProviders`<sup>Required</sup> <a name="ListSAMLProviders" id="@cdk_utils/iam.iam.IAMActions.property.ListSAMLProviders"></a>

```typescript
public readonly ListSAMLProviders: string;
```

- *Type:* string

[List] iam:ListSAMLProviders.

---

##### `ListSAMLProviderTags`<sup>Required</sup> <a name="ListSAMLProviderTags" id="@cdk_utils/iam.iam.IAMActions.property.ListSAMLProviderTags"></a>

```typescript
public readonly ListSAMLProviderTags: string;
```

- *Type:* string

[List] iam:ListSAMLProviderTags.

---

##### `ListServerCertificates`<sup>Required</sup> <a name="ListServerCertificates" id="@cdk_utils/iam.iam.IAMActions.property.ListServerCertificates"></a>

```typescript
public readonly ListServerCertificates: string;
```

- *Type:* string

[List] iam:ListServerCertificates.

---

##### `ListServerCertificateTags`<sup>Required</sup> <a name="ListServerCertificateTags" id="@cdk_utils/iam.iam.IAMActions.property.ListServerCertificateTags"></a>

```typescript
public readonly ListServerCertificateTags: string;
```

- *Type:* string

[List] iam:ListServerCertificateTags.

---

##### `ListServiceSpecificCredentials`<sup>Required</sup> <a name="ListServiceSpecificCredentials" id="@cdk_utils/iam.iam.IAMActions.property.ListServiceSpecificCredentials"></a>

```typescript
public readonly ListServiceSpecificCredentials: string;
```

- *Type:* string

[List] iam:ListServiceSpecificCredentials.

---

##### `ListSigningCertificates`<sup>Required</sup> <a name="ListSigningCertificates" id="@cdk_utils/iam.iam.IAMActions.property.ListSigningCertificates"></a>

```typescript
public readonly ListSigningCertificates: string;
```

- *Type:* string

[List] iam:ListSigningCertificates.

---

##### `ListSSHPublicKeys`<sup>Required</sup> <a name="ListSSHPublicKeys" id="@cdk_utils/iam.iam.IAMActions.property.ListSSHPublicKeys"></a>

```typescript
public readonly ListSSHPublicKeys: string;
```

- *Type:* string

[List] iam:ListSSHPublicKeys.

---

##### `ListSTSRegionalEndpointsStatus`<sup>Required</sup> <a name="ListSTSRegionalEndpointsStatus" id="@cdk_utils/iam.iam.IAMActions.property.ListSTSRegionalEndpointsStatus"></a>

```typescript
public readonly ListSTSRegionalEndpointsStatus: string;
```

- *Type:* string

[List] iam:ListSTSRegionalEndpointsStatus.

---

##### `ListUserPolicies`<sup>Required</sup> <a name="ListUserPolicies" id="@cdk_utils/iam.iam.IAMActions.property.ListUserPolicies"></a>

```typescript
public readonly ListUserPolicies: string;
```

- *Type:* string

[List] iam:ListUserPolicies.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.iam.IAMActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] iam:ListUsers.

---

##### `ListUserTags`<sup>Required</sup> <a name="ListUserTags" id="@cdk_utils/iam.iam.IAMActions.property.ListUserTags"></a>

```typescript
public readonly ListUserTags: string;
```

- *Type:* string

[List] iam:ListUserTags.

---

##### `ListVirtualMFADevices`<sup>Required</sup> <a name="ListVirtualMFADevices" id="@cdk_utils/iam.iam.IAMActions.property.ListVirtualMFADevices"></a>

```typescript
public readonly ListVirtualMFADevices: string;
```

- *Type:* string

[List] iam:ListVirtualMFADevices.

---

##### `PassRole`<sup>Required</sup> <a name="PassRole" id="@cdk_utils/iam.iam.IAMActions.property.PassRole"></a>

```typescript
public readonly PassRole: string;
```

- *Type:* string

[Write] iam:PassRole.

---

##### `PutAccountProperties`<sup>Required</sup> <a name="PutAccountProperties" id="@cdk_utils/iam.iam.IAMActions.property.PutAccountProperties"></a>

```typescript
public readonly PutAccountProperties: string;
```

- *Type:* string

[Write] iam:PutAccountProperties.

---

##### `PutGroupPolicy`<sup>Required</sup> <a name="PutGroupPolicy" id="@cdk_utils/iam.iam.IAMActions.property.PutGroupPolicy"></a>

```typescript
public readonly PutGroupPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:PutGroupPolicy.

---

##### `PutRolePermissionsBoundary`<sup>Required</sup> <a name="PutRolePermissionsBoundary" id="@cdk_utils/iam.iam.IAMActions.property.PutRolePermissionsBoundary"></a>

```typescript
public readonly PutRolePermissionsBoundary: string;
```

- *Type:* string

[PermissionManagement] iam:PutRolePermissionsBoundary.

---

##### `PutRolePolicy`<sup>Required</sup> <a name="PutRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.PutRolePolicy"></a>

```typescript
public readonly PutRolePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:PutRolePolicy.

---

##### `PutUserPermissionsBoundary`<sup>Required</sup> <a name="PutUserPermissionsBoundary" id="@cdk_utils/iam.iam.IAMActions.property.PutUserPermissionsBoundary"></a>

```typescript
public readonly PutUserPermissionsBoundary: string;
```

- *Type:* string

[PermissionManagement] iam:PutUserPermissionsBoundary.

---

##### `PutUserPolicy`<sup>Required</sup> <a name="PutUserPolicy" id="@cdk_utils/iam.iam.IAMActions.property.PutUserPolicy"></a>

```typescript
public readonly PutUserPolicy: string;
```

- *Type:* string

[PermissionManagement] iam:PutUserPolicy.

---

##### `RejectDelegationRequest`<sup>Required</sup> <a name="RejectDelegationRequest" id="@cdk_utils/iam.iam.IAMActions.property.RejectDelegationRequest"></a>

```typescript
public readonly RejectDelegationRequest: string;
```

- *Type:* string

[Write] iam:RejectDelegationRequest.

---

##### `RemoveClientIDFromOpenIDConnectProvider`<sup>Required</sup> <a name="RemoveClientIDFromOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.RemoveClientIDFromOpenIDConnectProvider"></a>

```typescript
public readonly RemoveClientIDFromOpenIDConnectProvider: string;
```

- *Type:* string

[Write] iam:RemoveClientIDFromOpenIDConnectProvider.

---

##### `RemoveRoleFromInstanceProfile`<sup>Required</sup> <a name="RemoveRoleFromInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.RemoveRoleFromInstanceProfile"></a>

```typescript
public readonly RemoveRoleFromInstanceProfile: string;
```

- *Type:* string

[Write] iam:RemoveRoleFromInstanceProfile.

---

##### `RemoveUserFromGroup`<sup>Required</sup> <a name="RemoveUserFromGroup" id="@cdk_utils/iam.iam.IAMActions.property.RemoveUserFromGroup"></a>

```typescript
public readonly RemoveUserFromGroup: string;
```

- *Type:* string

[Write] iam:RemoveUserFromGroup.

---

##### `ResetServiceSpecificCredential`<sup>Required</sup> <a name="ResetServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMActions.property.ResetServiceSpecificCredential"></a>

```typescript
public readonly ResetServiceSpecificCredential: string;
```

- *Type:* string

[Write] iam:ResetServiceSpecificCredential.

---

##### `ResyncMFADevice`<sup>Required</sup> <a name="ResyncMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.ResyncMFADevice"></a>

```typescript
public readonly ResyncMFADevice: string;
```

- *Type:* string

[Write] iam:ResyncMFADevice.

---

##### `SendDelegationToken`<sup>Required</sup> <a name="SendDelegationToken" id="@cdk_utils/iam.iam.IAMActions.property.SendDelegationToken"></a>

```typescript
public readonly SendDelegationToken: string;
```

- *Type:* string

[Write] iam:SendDelegationToken.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iam.IAMActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SimulateCustomPolicy`<sup>Required</sup> <a name="SimulateCustomPolicy" id="@cdk_utils/iam.iam.IAMActions.property.SimulateCustomPolicy"></a>

```typescript
public readonly SimulateCustomPolicy: string;
```

- *Type:* string

[Read] iam:SimulateCustomPolicy.

---

##### `SimulatePrincipalPolicy`<sup>Required</sup> <a name="SimulatePrincipalPolicy" id="@cdk_utils/iam.iam.IAMActions.property.SimulatePrincipalPolicy"></a>

```typescript
public readonly SimulatePrincipalPolicy: string;
```

- *Type:* string

[Read] iam:SimulatePrincipalPolicy.

---

##### `TagInstanceProfile`<sup>Required</sup> <a name="TagInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.TagInstanceProfile"></a>

```typescript
public readonly TagInstanceProfile: string;
```

- *Type:* string

[Tagging] iam:TagInstanceProfile.

---

##### `TagMFADevice`<sup>Required</sup> <a name="TagMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.TagMFADevice"></a>

```typescript
public readonly TagMFADevice: string;
```

- *Type:* string

[Tagging] iam:TagMFADevice.

---

##### `TagOpenIDConnectProvider`<sup>Required</sup> <a name="TagOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.TagOpenIDConnectProvider"></a>

```typescript
public readonly TagOpenIDConnectProvider: string;
```

- *Type:* string

[Tagging] iam:TagOpenIDConnectProvider.

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdk_utils/iam.iam.IAMActions.property.TagPolicy"></a>

```typescript
public readonly TagPolicy: string;
```

- *Type:* string

[Tagging] iam:TagPolicy.

---

##### `TagRole`<sup>Required</sup> <a name="TagRole" id="@cdk_utils/iam.iam.IAMActions.property.TagRole"></a>

```typescript
public readonly TagRole: string;
```

- *Type:* string

[Tagging] iam:TagRole.

---

##### `TagSAMLProvider`<sup>Required</sup> <a name="TagSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.TagSAMLProvider"></a>

```typescript
public readonly TagSAMLProvider: string;
```

- *Type:* string

[Tagging] iam:TagSAMLProvider.

---

##### `TagServerCertificate`<sup>Required</sup> <a name="TagServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.TagServerCertificate"></a>

```typescript
public readonly TagServerCertificate: string;
```

- *Type:* string

[Tagging] iam:TagServerCertificate.

---

##### `TagUser`<sup>Required</sup> <a name="TagUser" id="@cdk_utils/iam.iam.IAMActions.property.TagUser"></a>

```typescript
public readonly TagUser: string;
```

- *Type:* string

[Tagging] iam:TagUser.

---

##### `UntagInstanceProfile`<sup>Required</sup> <a name="UntagInstanceProfile" id="@cdk_utils/iam.iam.IAMActions.property.UntagInstanceProfile"></a>

```typescript
public readonly UntagInstanceProfile: string;
```

- *Type:* string

[Tagging] iam:UntagInstanceProfile.

---

##### `UntagMFADevice`<sup>Required</sup> <a name="UntagMFADevice" id="@cdk_utils/iam.iam.IAMActions.property.UntagMFADevice"></a>

```typescript
public readonly UntagMFADevice: string;
```

- *Type:* string

[Tagging] iam:UntagMFADevice.

---

##### `UntagOpenIDConnectProvider`<sup>Required</sup> <a name="UntagOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMActions.property.UntagOpenIDConnectProvider"></a>

```typescript
public readonly UntagOpenIDConnectProvider: string;
```

- *Type:* string

[Tagging] iam:UntagOpenIDConnectProvider.

---

##### `UntagPolicy`<sup>Required</sup> <a name="UntagPolicy" id="@cdk_utils/iam.iam.IAMActions.property.UntagPolicy"></a>

```typescript
public readonly UntagPolicy: string;
```

- *Type:* string

[Tagging] iam:UntagPolicy.

---

##### `UntagRole`<sup>Required</sup> <a name="UntagRole" id="@cdk_utils/iam.iam.IAMActions.property.UntagRole"></a>

```typescript
public readonly UntagRole: string;
```

- *Type:* string

[Tagging] iam:UntagRole.

---

##### `UntagSAMLProvider`<sup>Required</sup> <a name="UntagSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.UntagSAMLProvider"></a>

```typescript
public readonly UntagSAMLProvider: string;
```

- *Type:* string

[Tagging] iam:UntagSAMLProvider.

---

##### `UntagServerCertificate`<sup>Required</sup> <a name="UntagServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.UntagServerCertificate"></a>

```typescript
public readonly UntagServerCertificate: string;
```

- *Type:* string

[Tagging] iam:UntagServerCertificate.

---

##### `UntagUser`<sup>Required</sup> <a name="UntagUser" id="@cdk_utils/iam.iam.IAMActions.property.UntagUser"></a>

```typescript
public readonly UntagUser: string;
```

- *Type:* string

[Tagging] iam:UntagUser.

---

##### `UpdateAccessKey`<sup>Required</sup> <a name="UpdateAccessKey" id="@cdk_utils/iam.iam.IAMActions.property.UpdateAccessKey"></a>

```typescript
public readonly UpdateAccessKey: string;
```

- *Type:* string

[Write] iam:UpdateAccessKey.

---

##### `UpdateAccountEmailAddress`<sup>Required</sup> <a name="UpdateAccountEmailAddress" id="@cdk_utils/iam.iam.IAMActions.property.UpdateAccountEmailAddress"></a>

```typescript
public readonly UpdateAccountEmailAddress: string;
```

- *Type:* string

[Write] iam:UpdateAccountEmailAddress.

---

##### `UpdateAccountName`<sup>Required</sup> <a name="UpdateAccountName" id="@cdk_utils/iam.iam.IAMActions.property.UpdateAccountName"></a>

```typescript
public readonly UpdateAccountName: string;
```

- *Type:* string

[Write] iam:UpdateAccountName.

---

##### `UpdateAccountPasswordPolicy`<sup>Required</sup> <a name="UpdateAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMActions.property.UpdateAccountPasswordPolicy"></a>

```typescript
public readonly UpdateAccountPasswordPolicy: string;
```

- *Type:* string

[Write] iam:UpdateAccountPasswordPolicy.

---

##### `UpdateAssumeRolePolicy`<sup>Required</sup> <a name="UpdateAssumeRolePolicy" id="@cdk_utils/iam.iam.IAMActions.property.UpdateAssumeRolePolicy"></a>

```typescript
public readonly UpdateAssumeRolePolicy: string;
```

- *Type:* string

[PermissionManagement] iam:UpdateAssumeRolePolicy.

---

##### `UpdateCloudFrontPublicKey`<sup>Required</sup> <a name="UpdateCloudFrontPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.UpdateCloudFrontPublicKey"></a>

```typescript
public readonly UpdateCloudFrontPublicKey: string;
```

- *Type:* string

[Write] iam:UpdateCloudFrontPublicKey.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.iam.IAMActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] iam:UpdateGroup.

---

##### `UpdateLoginProfile`<sup>Required</sup> <a name="UpdateLoginProfile" id="@cdk_utils/iam.iam.IAMActions.property.UpdateLoginProfile"></a>

```typescript
public readonly UpdateLoginProfile: string;
```

- *Type:* string

[Write] iam:UpdateLoginProfile.

---

##### `UpdateOpenIDConnectProviderThumbprint`<sup>Required</sup> <a name="UpdateOpenIDConnectProviderThumbprint" id="@cdk_utils/iam.iam.IAMActions.property.UpdateOpenIDConnectProviderThumbprint"></a>

```typescript
public readonly UpdateOpenIDConnectProviderThumbprint: string;
```

- *Type:* string

[Write] iam:UpdateOpenIDConnectProviderThumbprint.

---

##### `UpdateRole`<sup>Required</sup> <a name="UpdateRole" id="@cdk_utils/iam.iam.IAMActions.property.UpdateRole"></a>

```typescript
public readonly UpdateRole: string;
```

- *Type:* string

[Write] iam:UpdateRole.

---

##### `UpdateRoleDescription`<sup>Required</sup> <a name="UpdateRoleDescription" id="@cdk_utils/iam.iam.IAMActions.property.UpdateRoleDescription"></a>

```typescript
public readonly UpdateRoleDescription: string;
```

- *Type:* string

[Write] iam:UpdateRoleDescription.

---

##### `UpdateSAMLProvider`<sup>Required</sup> <a name="UpdateSAMLProvider" id="@cdk_utils/iam.iam.IAMActions.property.UpdateSAMLProvider"></a>

```typescript
public readonly UpdateSAMLProvider: string;
```

- *Type:* string

[Write] iam:UpdateSAMLProvider.

---

##### `UpdateServerCertificate`<sup>Required</sup> <a name="UpdateServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.UpdateServerCertificate"></a>

```typescript
public readonly UpdateServerCertificate: string;
```

- *Type:* string

[Write] iam:UpdateServerCertificate.

---

##### `UpdateServiceSpecificCredential`<sup>Required</sup> <a name="UpdateServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMActions.property.UpdateServiceSpecificCredential"></a>

```typescript
public readonly UpdateServiceSpecificCredential: string;
```

- *Type:* string

[Write] iam:UpdateServiceSpecificCredential.

---

##### `UpdateSigningCertificate`<sup>Required</sup> <a name="UpdateSigningCertificate" id="@cdk_utils/iam.iam.IAMActions.property.UpdateSigningCertificate"></a>

```typescript
public readonly UpdateSigningCertificate: string;
```

- *Type:* string

[Write] iam:UpdateSigningCertificate.

---

##### `UpdateSSHPublicKey`<sup>Required</sup> <a name="UpdateSSHPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.UpdateSSHPublicKey"></a>

```typescript
public readonly UpdateSSHPublicKey: string;
```

- *Type:* string

[Write] iam:UpdateSSHPublicKey.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.iam.IAMActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] iam:UpdateUser.

---

##### `UploadCloudFrontPublicKey`<sup>Required</sup> <a name="UploadCloudFrontPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.UploadCloudFrontPublicKey"></a>

```typescript
public readonly UploadCloudFrontPublicKey: string;
```

- *Type:* string

[Write] iam:UploadCloudFrontPublicKey.

---

##### `UploadServerCertificate`<sup>Required</sup> <a name="UploadServerCertificate" id="@cdk_utils/iam.iam.IAMActions.property.UploadServerCertificate"></a>

```typescript
public readonly UploadServerCertificate: string;
```

- *Type:* string

[Write] iam:UploadServerCertificate.

---

##### `UploadSigningCertificate`<sup>Required</sup> <a name="UploadSigningCertificate" id="@cdk_utils/iam.iam.IAMActions.property.UploadSigningCertificate"></a>

```typescript
public readonly UploadSigningCertificate: string;
```

- *Type:* string

[Write] iam:UploadSigningCertificate.

---

##### `UploadSSHPublicKey`<sup>Required</sup> <a name="UploadSSHPublicKey" id="@cdk_utils/iam.iam.IAMActions.property.UploadSSHPublicKey"></a>

```typescript
public readonly UploadSSHPublicKey: string;
```

- *Type:* string

[Write] iam:UploadSSHPublicKey.

---

### IAMConditions <a name="IAMConditions" id="@cdk_utils/iam.iam.IAMConditions"></a>

Condition key constants and builders for iam.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iam.IAMConditions.Initializer"></a>

```typescript
import { iam } from '@cdk_utils/iam'

new iam.IAMConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.accountPropertyNamespaces">accountPropertyNamespaces</a></code> | Generates a condition block for `iam:AccountPropertyNamespaces`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.associatedResourceARN">associatedResourceARN</a></code> | Generates a condition block for `iam:AssociatedResourceArn`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.awsServiceName">awsServiceName</a></code> | Generates a condition block for `iam:AWSServiceName`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.delegationDuration">delegationDuration</a></code> | Generates a condition block for `iam:DelegationDuration`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.delegationRequestOwner">delegationRequestOwner</a></code> | Generates a condition block for `iam:DelegationRequestOwner`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.fidoCertification">fidoCertification</a></code> | Generates a condition block for `iam:FIDO-certification`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.fidoFips1402Certification">fidoFips1402Certification</a></code> | Generates a condition block for `iam:FIDO-FIPS-140-2-certification`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.fidoFips1403Certification">fidoFips1403Certification</a></code> | Generates a condition block for `iam:FIDO-FIPS-140-3-certification`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.notificationChannel">notificationChannel</a></code> | Generates a condition block for `iam:NotificationChannel`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.organizationsPolicyId">organizationsPolicyId</a></code> | Generates a condition block for `iam:OrganizationsPolicyId`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.passedToService">passedToService</a></code> | Generates a condition block for `iam:PassedToService`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.permissionsBoundary">permissionsBoundary</a></code> | Generates a condition block for `iam:PermissionsBoundary`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.policyARN">policyARN</a></code> | Generates a condition block for `iam:PolicyARN`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.registerSecurityKey">registerSecurityKey</a></code> | Generates a condition block for `iam:RegisterSecurityKey`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.roleTemplateARN">roleTemplateARN</a></code> | Generates a condition block for `iam:RoleTemplateARN`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialAgeDays">serviceSpecificCredentialAgeDays</a></code> | Generates a condition block for `iam:ServiceSpecificCredentialAgeDays`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialServiceName">serviceSpecificCredentialServiceName</a></code> | Generates a condition block for `iam:ServiceSpecificCredentialServiceName`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.templateARN">templateARN</a></code> | Generates a condition block for `iam:TemplateArn`. |

---

##### `accountPropertyNamespaces` <a name="accountPropertyNamespaces" id="@cdk_utils/iam.iam.IAMConditions.accountPropertyNamespaces"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.accountPropertyNamespaces(values: string[])
```

Generates a condition block for `iam:AccountPropertyNamespaces`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iam.IAMConditions.accountPropertyNamespaces.parameter.values"></a>

- *Type:* string[]

---

##### `associatedResourceARN` <a name="associatedResourceARN" id="@cdk_utils/iam.iam.IAMConditions.associatedResourceARN"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.associatedResourceARN(value: string)
```

Generates a condition block for `iam:AssociatedResourceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.associatedResourceARN.parameter.value"></a>

- *Type:* string

---

##### `awsServiceName` <a name="awsServiceName" id="@cdk_utils/iam.iam.IAMConditions.awsServiceName"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.awsServiceName(value: string)
```

Generates a condition block for `iam:AWSServiceName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.awsServiceName.parameter.value"></a>

- *Type:* string

---

##### `delegationDuration` <a name="delegationDuration" id="@cdk_utils/iam.iam.IAMConditions.delegationDuration"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.delegationDuration(value: string)
```

Generates a condition block for `iam:DelegationDuration`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.delegationDuration.parameter.value"></a>

- *Type:* string

---

##### `delegationRequestOwner` <a name="delegationRequestOwner" id="@cdk_utils/iam.iam.IAMConditions.delegationRequestOwner"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.delegationRequestOwner(value: string)
```

Generates a condition block for `iam:DelegationRequestOwner`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.delegationRequestOwner.parameter.value"></a>

- *Type:* string

---

##### `fidoCertification` <a name="fidoCertification" id="@cdk_utils/iam.iam.IAMConditions.fidoCertification"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.fidoCertification(value: string)
```

Generates a condition block for `iam:FIDO-certification`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.fidoCertification.parameter.value"></a>

- *Type:* string

---

##### `fidoFips1402Certification` <a name="fidoFips1402Certification" id="@cdk_utils/iam.iam.IAMConditions.fidoFips1402Certification"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.fidoFips1402Certification(value: string)
```

Generates a condition block for `iam:FIDO-FIPS-140-2-certification`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.fidoFips1402Certification.parameter.value"></a>

- *Type:* string

---

##### `fidoFips1403Certification` <a name="fidoFips1403Certification" id="@cdk_utils/iam.iam.IAMConditions.fidoFips1403Certification"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.fidoFips1403Certification(value: string)
```

Generates a condition block for `iam:FIDO-FIPS-140-3-certification`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.fidoFips1403Certification.parameter.value"></a>

- *Type:* string

---

##### `notificationChannel` <a name="notificationChannel" id="@cdk_utils/iam.iam.IAMConditions.notificationChannel"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.notificationChannel(value: string)
```

Generates a condition block for `iam:NotificationChannel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.notificationChannel.parameter.value"></a>

- *Type:* string

---

##### `organizationsPolicyId` <a name="organizationsPolicyId" id="@cdk_utils/iam.iam.IAMConditions.organizationsPolicyId"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.organizationsPolicyId(value: string)
```

Generates a condition block for `iam:OrganizationsPolicyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.organizationsPolicyId.parameter.value"></a>

- *Type:* string

---

##### `passedToService` <a name="passedToService" id="@cdk_utils/iam.iam.IAMConditions.passedToService"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.passedToService(value: string)
```

Generates a condition block for `iam:PassedToService`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.passedToService.parameter.value"></a>

- *Type:* string

---

##### `permissionsBoundary` <a name="permissionsBoundary" id="@cdk_utils/iam.iam.IAMConditions.permissionsBoundary"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.permissionsBoundary(value: string)
```

Generates a condition block for `iam:PermissionsBoundary`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.permissionsBoundary.parameter.value"></a>

- *Type:* string

---

##### `policyARN` <a name="policyARN" id="@cdk_utils/iam.iam.IAMConditions.policyARN"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.policyARN(value: string)
```

Generates a condition block for `iam:PolicyARN`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.policyARN.parameter.value"></a>

- *Type:* string

---

##### `registerSecurityKey` <a name="registerSecurityKey" id="@cdk_utils/iam.iam.IAMConditions.registerSecurityKey"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.registerSecurityKey(value: string)
```

Generates a condition block for `iam:RegisterSecurityKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.registerSecurityKey.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iam.IAMConditions.requestTag"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iam.IAMConditions.resourceTag"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `roleTemplateARN` <a name="roleTemplateARN" id="@cdk_utils/iam.iam.IAMConditions.roleTemplateARN"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.roleTemplateARN(value: string)
```

Generates a condition block for `iam:RoleTemplateARN`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.roleTemplateARN.parameter.value"></a>

- *Type:* string

---

##### `serviceSpecificCredentialAgeDays` <a name="serviceSpecificCredentialAgeDays" id="@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialAgeDays"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.serviceSpecificCredentialAgeDays(value: number)
```

Generates a condition block for `iam:ServiceSpecificCredentialAgeDays`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialAgeDays.parameter.value"></a>

- *Type:* number

---

##### `serviceSpecificCredentialServiceName` <a name="serviceSpecificCredentialServiceName" id="@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialServiceName"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.serviceSpecificCredentialServiceName(value: string)
```

Generates a condition block for `iam:ServiceSpecificCredentialServiceName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.serviceSpecificCredentialServiceName.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iam.IAMConditions.tagKeys"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iam.IAMConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `templateARN` <a name="templateARN" id="@cdk_utils/iam.iam.IAMConditions.templateARN"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMConditions.templateARN(value: string)
```

Generates a condition block for `iam:TemplateArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iam.IAMConditions.templateARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ACCOUNT_PROPERTY_NAMESPACES">ACCOUNT_PROPERTY_NAMESPACES</a></code> | <code>string</code> | Condition key: iam:AccountPropertyNamespaces (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.actionGetAccountPropertiesConditionKeys">actionGetAccountPropertiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccountProperties action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.actionGetRoleConditionKeys">actionGetRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ASSOCIATED_RESOURCE_ARN">ASSOCIATED_RESOURCE_ARN</a></code> | <code>string</code> | Condition key: iam:AssociatedResourceArn (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AttachGroupPolicyConditionKeys">AttachGroupPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachGroupPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AttachRolePolicyConditionKeys">AttachRolePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachRolePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AttachUserPolicyConditionKeys">AttachUserPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachUserPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AWS_SERVICE_NAME">AWS_SERVICE_NAME</a></code> | <code>string</code> | Condition key: iam:AWSServiceName (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateDelegationRequestConditionKeys">CreateDelegationRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDelegationRequest action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateInstanceProfileConditionKeys">CreateInstanceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstanceProfile action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateOpenIDConnectProviderConditionKeys">CreateOpenIDConnectProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOpenIDConnectProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreatePolicyConditionKeys">CreatePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateRoleConditionKeys">CreateRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateSAMLProviderConditionKeys">CreateSAMLProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSAMLProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateServiceLinkedRoleConditionKeys">CreateServiceLinkedRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceLinkedRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateServiceSpecificCredentialConditionKeys">CreateServiceSpecificCredentialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceSpecificCredential action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.CreateVirtualMFADeviceConditionKeys">CreateVirtualMFADeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVirtualMFADevice action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DELEGATION_DURATION">DELEGATION_DURATION</a></code> | <code>string</code> | Condition key: iam:DelegationDuration (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DELEGATION_REQUEST_OWNER">DELEGATION_REQUEST_OWNER</a></code> | <code>string</code> | Condition key: iam:DelegationRequestOwner (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteRoleConditionKeys">DeleteRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteRolePermissionsBoundaryConditionKeys">DeleteRolePermissionsBoundaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRolePermissionsBoundary action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteRolePolicyConditionKeys">DeleteRolePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRolePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteServiceSpecificCredentialConditionKeys">DeleteServiceSpecificCredentialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceSpecificCredential action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteUserPermissionsBoundaryConditionKeys">DeleteUserPermissionsBoundaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUserPermissionsBoundary action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DeleteUserPolicyConditionKeys">DeleteUserPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUserPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DetachGroupPolicyConditionKeys">DetachGroupPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachGroupPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DetachRolePolicyConditionKeys">DetachRolePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachRolePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.DetachUserPolicyConditionKeys">DetachUserPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachUserPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.EnableMFADeviceConditionKeys">EnableMFADeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableMFADevice action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.FIDO_CERTIFICATION">FIDO_CERTIFICATION</a></code> | <code>string</code> | Condition key: iam:FIDO-certification (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.FIDO_FIPS_140_2_CERTIFICATION">FIDO_FIPS_140_2_CERTIFICATION</a></code> | <code>string</code> | Condition key: iam:FIDO-FIPS-140-2-certification (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.FIDO_FIPS_140_3_CERTIFICATION">FIDO_FIPS_140_3_CERTIFICATION</a></code> | <code>string</code> | Condition key: iam:FIDO-FIPS-140-3-certification (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.GenerateOrganizationsAccessReportConditionKeys">GenerateOrganizationsAccessReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateOrganizationsAccessReport action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ListDelegationRequestsConditionKeys">ListDelegationRequestsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDelegationRequests action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.NOTIFICATION_CHANNEL">NOTIFICATION_CHANNEL</a></code> | <code>string</code> | Condition key: iam:NotificationChannel (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ORGANIZATIONS_POLICY_ID">ORGANIZATIONS_POLICY_ID</a></code> | <code>string</code> | Condition key: iam:OrganizationsPolicyId (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PASSED_TO_SERVICE">PASSED_TO_SERVICE</a></code> | <code>string</code> | Condition key: iam:PassedToService (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PassRoleConditionKeys">PassRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PassRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PERMISSIONS_BOUNDARY">PERMISSIONS_BOUNDARY</a></code> | <code>string</code> | Condition key: iam:PermissionsBoundary (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.POLICY_ARN">POLICY_ARN</a></code> | <code>string</code> | Condition key: iam:PolicyARN (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PutAccountPropertiesConditionKeys">PutAccountPropertiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAccountProperties action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PutRolePermissionsBoundaryConditionKeys">PutRolePermissionsBoundaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRolePermissionsBoundary action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PutRolePolicyConditionKeys">PutRolePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRolePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PutUserPermissionsBoundaryConditionKeys">PutUserPermissionsBoundaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutUserPermissionsBoundary action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.PutUserPolicyConditionKeys">PutUserPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutUserPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.REGISTER_SECURITY_KEY">REGISTER_SECURITY_KEY</a></code> | <code>string</code> | Condition key: iam:RegisterSecurityKey (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ResetServiceSpecificCredentialConditionKeys">ResetServiceSpecificCredentialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResetServiceSpecificCredential action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: iam:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.ROLE_TEMPLATE_ARN">ROLE_TEMPLATE_ARN</a></code> | <code>string</code> | Condition key: iam:RoleTemplateARN (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS">SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS</a></code> | <code>string</code> | Condition key: iam:ServiceSpecificCredentialAgeDays (Numeric). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME">SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME</a></code> | <code>string</code> | Condition key: iam:ServiceSpecificCredentialServiceName (String). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagInstanceProfileConditionKeys">TagInstanceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagInstanceProfile action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagMFADeviceConditionKeys">TagMFADeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagMFADevice action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagOpenIDConnectProviderConditionKeys">TagOpenIDConnectProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagOpenIDConnectProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagPolicyConditionKeys">TagPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagRoleConditionKeys">TagRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagSAMLProviderConditionKeys">TagSAMLProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagSAMLProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagServerCertificateConditionKeys">TagServerCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagServerCertificate action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TagUserConditionKeys">TagUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagUser action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.TEMPLATE_ARN">TEMPLATE_ARN</a></code> | <code>string</code> | Condition key: iam:TemplateArn (ARN). |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagInstanceProfileConditionKeys">UntagInstanceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagInstanceProfile action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagMFADeviceConditionKeys">UntagMFADeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagMFADevice action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagOpenIDConnectProviderConditionKeys">UntagOpenIDConnectProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagOpenIDConnectProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagPolicyConditionKeys">UntagPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagPolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagRoleConditionKeys">UntagRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagSAMLProviderConditionKeys">UntagSAMLProviderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagSAMLProvider action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagServerCertificateConditionKeys">UntagServerCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagServerCertificate action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UntagUserConditionKeys">UntagUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagUser action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UpdateAssumeRolePolicyConditionKeys">UpdateAssumeRolePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAssumeRolePolicy action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UpdateRoleConditionKeys">UpdateRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRole action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UpdateRoleDescriptionConditionKeys">UpdateRoleDescriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoleDescription action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UpdateServiceSpecificCredentialConditionKeys">UpdateServiceSpecificCredentialConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceSpecificCredential action. |
| <code><a href="#@cdk_utils/iam.iam.IAMConditions.property.UploadServerCertificateConditionKeys">UploadServerCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UploadServerCertificate action. |

---

##### `ACCOUNT_PROPERTY_NAMESPACES`<sup>Required</sup> <a name="ACCOUNT_PROPERTY_NAMESPACES" id="@cdk_utils/iam.iam.IAMConditions.property.ACCOUNT_PROPERTY_NAMESPACES"></a>

```typescript
public readonly ACCOUNT_PROPERTY_NAMESPACES: string;
```

- *Type:* string

Condition key: iam:AccountPropertyNamespaces (ArrayOfString).

---

##### `actionGetAccountPropertiesConditionKeys`<sup>Required</sup> <a name="actionGetAccountPropertiesConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.actionGetAccountPropertiesConditionKeys"></a>

```typescript
public readonly actionGetAccountPropertiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccountProperties action.

---

##### `actionGetRoleConditionKeys`<sup>Required</sup> <a name="actionGetRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.actionGetRoleConditionKeys"></a>

```typescript
public readonly actionGetRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRole action.

---

##### `ASSOCIATED_RESOURCE_ARN`<sup>Required</sup> <a name="ASSOCIATED_RESOURCE_ARN" id="@cdk_utils/iam.iam.IAMConditions.property.ASSOCIATED_RESOURCE_ARN"></a>

```typescript
public readonly ASSOCIATED_RESOURCE_ARN: string;
```

- *Type:* string

Condition key: iam:AssociatedResourceArn (ARN).

---

##### `AttachGroupPolicyConditionKeys`<sup>Required</sup> <a name="AttachGroupPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.AttachGroupPolicyConditionKeys"></a>

```typescript
public readonly AttachGroupPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachGroupPolicy action.

---

##### `AttachRolePolicyConditionKeys`<sup>Required</sup> <a name="AttachRolePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.AttachRolePolicyConditionKeys"></a>

```typescript
public readonly AttachRolePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachRolePolicy action.

---

##### `AttachUserPolicyConditionKeys`<sup>Required</sup> <a name="AttachUserPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.AttachUserPolicyConditionKeys"></a>

```typescript
public readonly AttachUserPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachUserPolicy action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iam.IAMConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iam.IAMConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_SERVICE_NAME`<sup>Required</sup> <a name="AWS_SERVICE_NAME" id="@cdk_utils/iam.iam.IAMConditions.property.AWS_SERVICE_NAME"></a>

```typescript
public readonly AWS_SERVICE_NAME: string;
```

- *Type:* string

Condition key: iam:AWSServiceName (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iam.IAMConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDelegationRequestConditionKeys`<sup>Required</sup> <a name="CreateDelegationRequestConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateDelegationRequestConditionKeys"></a>

```typescript
public readonly CreateDelegationRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDelegationRequest action.

---

##### `CreateInstanceProfileConditionKeys`<sup>Required</sup> <a name="CreateInstanceProfileConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateInstanceProfileConditionKeys"></a>

```typescript
public readonly CreateInstanceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstanceProfile action.

---

##### `CreateOpenIDConnectProviderConditionKeys`<sup>Required</sup> <a name="CreateOpenIDConnectProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateOpenIDConnectProviderConditionKeys"></a>

```typescript
public readonly CreateOpenIDConnectProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOpenIDConnectProvider action.

---

##### `CreatePolicyConditionKeys`<sup>Required</sup> <a name="CreatePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreatePolicyConditionKeys"></a>

```typescript
public readonly CreatePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicy action.

---

##### `CreateRoleConditionKeys`<sup>Required</sup> <a name="CreateRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateRoleConditionKeys"></a>

```typescript
public readonly CreateRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRole action.

---

##### `CreateSAMLProviderConditionKeys`<sup>Required</sup> <a name="CreateSAMLProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateSAMLProviderConditionKeys"></a>

```typescript
public readonly CreateSAMLProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSAMLProvider action.

---

##### `CreateServiceLinkedRoleConditionKeys`<sup>Required</sup> <a name="CreateServiceLinkedRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateServiceLinkedRoleConditionKeys"></a>

```typescript
public readonly CreateServiceLinkedRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceLinkedRole action.

---

##### `CreateServiceSpecificCredentialConditionKeys`<sup>Required</sup> <a name="CreateServiceSpecificCredentialConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateServiceSpecificCredentialConditionKeys"></a>

```typescript
public readonly CreateServiceSpecificCredentialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceSpecificCredential action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `CreateVirtualMFADeviceConditionKeys`<sup>Required</sup> <a name="CreateVirtualMFADeviceConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.CreateVirtualMFADeviceConditionKeys"></a>

```typescript
public readonly CreateVirtualMFADeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVirtualMFADevice action.

---

##### `DELEGATION_DURATION`<sup>Required</sup> <a name="DELEGATION_DURATION" id="@cdk_utils/iam.iam.IAMConditions.property.DELEGATION_DURATION"></a>

```typescript
public readonly DELEGATION_DURATION: string;
```

- *Type:* string

Condition key: iam:DelegationDuration (String).

---

##### `DELEGATION_REQUEST_OWNER`<sup>Required</sup> <a name="DELEGATION_REQUEST_OWNER" id="@cdk_utils/iam.iam.IAMConditions.property.DELEGATION_REQUEST_OWNER"></a>

```typescript
public readonly DELEGATION_REQUEST_OWNER: string;
```

- *Type:* string

Condition key: iam:DelegationRequestOwner (ARN).

---

##### `DeleteRoleConditionKeys`<sup>Required</sup> <a name="DeleteRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteRoleConditionKeys"></a>

```typescript
public readonly DeleteRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRole action.

---

##### `DeleteRolePermissionsBoundaryConditionKeys`<sup>Required</sup> <a name="DeleteRolePermissionsBoundaryConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteRolePermissionsBoundaryConditionKeys"></a>

```typescript
public readonly DeleteRolePermissionsBoundaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRolePermissionsBoundary action.

---

##### `DeleteRolePolicyConditionKeys`<sup>Required</sup> <a name="DeleteRolePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteRolePolicyConditionKeys"></a>

```typescript
public readonly DeleteRolePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRolePolicy action.

---

##### `DeleteServiceSpecificCredentialConditionKeys`<sup>Required</sup> <a name="DeleteServiceSpecificCredentialConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteServiceSpecificCredentialConditionKeys"></a>

```typescript
public readonly DeleteServiceSpecificCredentialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceSpecificCredential action.

---

##### `DeleteUserPermissionsBoundaryConditionKeys`<sup>Required</sup> <a name="DeleteUserPermissionsBoundaryConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteUserPermissionsBoundaryConditionKeys"></a>

```typescript
public readonly DeleteUserPermissionsBoundaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUserPermissionsBoundary action.

---

##### `DeleteUserPolicyConditionKeys`<sup>Required</sup> <a name="DeleteUserPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DeleteUserPolicyConditionKeys"></a>

```typescript
public readonly DeleteUserPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUserPolicy action.

---

##### `DetachGroupPolicyConditionKeys`<sup>Required</sup> <a name="DetachGroupPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DetachGroupPolicyConditionKeys"></a>

```typescript
public readonly DetachGroupPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachGroupPolicy action.

---

##### `DetachRolePolicyConditionKeys`<sup>Required</sup> <a name="DetachRolePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DetachRolePolicyConditionKeys"></a>

```typescript
public readonly DetachRolePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachRolePolicy action.

---

##### `DetachUserPolicyConditionKeys`<sup>Required</sup> <a name="DetachUserPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.DetachUserPolicyConditionKeys"></a>

```typescript
public readonly DetachUserPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachUserPolicy action.

---

##### `EnableMFADeviceConditionKeys`<sup>Required</sup> <a name="EnableMFADeviceConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.EnableMFADeviceConditionKeys"></a>

```typescript
public readonly EnableMFADeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableMFADevice action.

---

##### `FIDO_CERTIFICATION`<sup>Required</sup> <a name="FIDO_CERTIFICATION" id="@cdk_utils/iam.iam.IAMConditions.property.FIDO_CERTIFICATION"></a>

```typescript
public readonly FIDO_CERTIFICATION: string;
```

- *Type:* string

Condition key: iam:FIDO-certification (String).

---

##### `FIDO_FIPS_140_2_CERTIFICATION`<sup>Required</sup> <a name="FIDO_FIPS_140_2_CERTIFICATION" id="@cdk_utils/iam.iam.IAMConditions.property.FIDO_FIPS_140_2_CERTIFICATION"></a>

```typescript
public readonly FIDO_FIPS_140_2_CERTIFICATION: string;
```

- *Type:* string

Condition key: iam:FIDO-FIPS-140-2-certification (String).

---

##### `FIDO_FIPS_140_3_CERTIFICATION`<sup>Required</sup> <a name="FIDO_FIPS_140_3_CERTIFICATION" id="@cdk_utils/iam.iam.IAMConditions.property.FIDO_FIPS_140_3_CERTIFICATION"></a>

```typescript
public readonly FIDO_FIPS_140_3_CERTIFICATION: string;
```

- *Type:* string

Condition key: iam:FIDO-FIPS-140-3-certification (String).

---

##### `GenerateOrganizationsAccessReportConditionKeys`<sup>Required</sup> <a name="GenerateOrganizationsAccessReportConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.GenerateOrganizationsAccessReportConditionKeys"></a>

```typescript
public readonly GenerateOrganizationsAccessReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateOrganizationsAccessReport action.

---

##### `ListDelegationRequestsConditionKeys`<sup>Required</sup> <a name="ListDelegationRequestsConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.ListDelegationRequestsConditionKeys"></a>

```typescript
public readonly ListDelegationRequestsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDelegationRequests action.

---

##### `NOTIFICATION_CHANNEL`<sup>Required</sup> <a name="NOTIFICATION_CHANNEL" id="@cdk_utils/iam.iam.IAMConditions.property.NOTIFICATION_CHANNEL"></a>

```typescript
public readonly NOTIFICATION_CHANNEL: string;
```

- *Type:* string

Condition key: iam:NotificationChannel (String).

---

##### `ORGANIZATIONS_POLICY_ID`<sup>Required</sup> <a name="ORGANIZATIONS_POLICY_ID" id="@cdk_utils/iam.iam.IAMConditions.property.ORGANIZATIONS_POLICY_ID"></a>

```typescript
public readonly ORGANIZATIONS_POLICY_ID: string;
```

- *Type:* string

Condition key: iam:OrganizationsPolicyId (String).

---

##### `PASSED_TO_SERVICE`<sup>Required</sup> <a name="PASSED_TO_SERVICE" id="@cdk_utils/iam.iam.IAMConditions.property.PASSED_TO_SERVICE"></a>

```typescript
public readonly PASSED_TO_SERVICE: string;
```

- *Type:* string

Condition key: iam:PassedToService (String).

---

##### `PassRoleConditionKeys`<sup>Required</sup> <a name="PassRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PassRoleConditionKeys"></a>

```typescript
public readonly PassRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PassRole action.

---

##### `PERMISSIONS_BOUNDARY`<sup>Required</sup> <a name="PERMISSIONS_BOUNDARY" id="@cdk_utils/iam.iam.IAMConditions.property.PERMISSIONS_BOUNDARY"></a>

```typescript
public readonly PERMISSIONS_BOUNDARY: string;
```

- *Type:* string

Condition key: iam:PermissionsBoundary (ARN).

---

##### `POLICY_ARN`<sup>Required</sup> <a name="POLICY_ARN" id="@cdk_utils/iam.iam.IAMConditions.property.POLICY_ARN"></a>

```typescript
public readonly POLICY_ARN: string;
```

- *Type:* string

Condition key: iam:PolicyARN (ARN).

---

##### `PutAccountPropertiesConditionKeys`<sup>Required</sup> <a name="PutAccountPropertiesConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PutAccountPropertiesConditionKeys"></a>

```typescript
public readonly PutAccountPropertiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAccountProperties action.

---

##### `PutRolePermissionsBoundaryConditionKeys`<sup>Required</sup> <a name="PutRolePermissionsBoundaryConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PutRolePermissionsBoundaryConditionKeys"></a>

```typescript
public readonly PutRolePermissionsBoundaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRolePermissionsBoundary action.

---

##### `PutRolePolicyConditionKeys`<sup>Required</sup> <a name="PutRolePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PutRolePolicyConditionKeys"></a>

```typescript
public readonly PutRolePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRolePolicy action.

---

##### `PutUserPermissionsBoundaryConditionKeys`<sup>Required</sup> <a name="PutUserPermissionsBoundaryConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PutUserPermissionsBoundaryConditionKeys"></a>

```typescript
public readonly PutUserPermissionsBoundaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutUserPermissionsBoundary action.

---

##### `PutUserPolicyConditionKeys`<sup>Required</sup> <a name="PutUserPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.PutUserPolicyConditionKeys"></a>

```typescript
public readonly PutUserPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutUserPolicy action.

---

##### `REGISTER_SECURITY_KEY`<sup>Required</sup> <a name="REGISTER_SECURITY_KEY" id="@cdk_utils/iam.iam.IAMConditions.property.REGISTER_SECURITY_KEY"></a>

```typescript
public readonly REGISTER_SECURITY_KEY: string;
```

- *Type:* string

Condition key: iam:RegisterSecurityKey (String).

---

##### `ResetServiceSpecificCredentialConditionKeys`<sup>Required</sup> <a name="ResetServiceSpecificCredentialConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.ResetServiceSpecificCredentialConditionKeys"></a>

```typescript
public readonly ResetServiceSpecificCredentialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResetServiceSpecificCredential action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.iam.IAMConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: iam:ResourceTag/${TagKey} (String).

---

##### `ROLE_TEMPLATE_ARN`<sup>Required</sup> <a name="ROLE_TEMPLATE_ARN" id="@cdk_utils/iam.iam.IAMConditions.property.ROLE_TEMPLATE_ARN"></a>

```typescript
public readonly ROLE_TEMPLATE_ARN: string;
```

- *Type:* string

Condition key: iam:RoleTemplateARN (ARN).

---

##### `SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS`<sup>Required</sup> <a name="SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS" id="@cdk_utils/iam.iam.IAMConditions.property.SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS"></a>

```typescript
public readonly SERVICE_SPECIFIC_CREDENTIAL_AGE_DAYS: string;
```

- *Type:* string

Condition key: iam:ServiceSpecificCredentialAgeDays (Numeric).

---

##### `SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME`<sup>Required</sup> <a name="SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME" id="@cdk_utils/iam.iam.IAMConditions.property.SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME"></a>

```typescript
public readonly SERVICE_SPECIFIC_CREDENTIAL_SERVICE_NAME: string;
```

- *Type:* string

Condition key: iam:ServiceSpecificCredentialServiceName (String).

---

##### `TagInstanceProfileConditionKeys`<sup>Required</sup> <a name="TagInstanceProfileConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagInstanceProfileConditionKeys"></a>

```typescript
public readonly TagInstanceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagInstanceProfile action.

---

##### `TagMFADeviceConditionKeys`<sup>Required</sup> <a name="TagMFADeviceConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagMFADeviceConditionKeys"></a>

```typescript
public readonly TagMFADeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagMFADevice action.

---

##### `TagOpenIDConnectProviderConditionKeys`<sup>Required</sup> <a name="TagOpenIDConnectProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagOpenIDConnectProviderConditionKeys"></a>

```typescript
public readonly TagOpenIDConnectProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagOpenIDConnectProvider action.

---

##### `TagPolicyConditionKeys`<sup>Required</sup> <a name="TagPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagPolicyConditionKeys"></a>

```typescript
public readonly TagPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagPolicy action.

---

##### `TagRoleConditionKeys`<sup>Required</sup> <a name="TagRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagRoleConditionKeys"></a>

```typescript
public readonly TagRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagRole action.

---

##### `TagSAMLProviderConditionKeys`<sup>Required</sup> <a name="TagSAMLProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagSAMLProviderConditionKeys"></a>

```typescript
public readonly TagSAMLProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagSAMLProvider action.

---

##### `TagServerCertificateConditionKeys`<sup>Required</sup> <a name="TagServerCertificateConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagServerCertificateConditionKeys"></a>

```typescript
public readonly TagServerCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagServerCertificate action.

---

##### `TagUserConditionKeys`<sup>Required</sup> <a name="TagUserConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.TagUserConditionKeys"></a>

```typescript
public readonly TagUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagUser action.

---

##### `TEMPLATE_ARN`<sup>Required</sup> <a name="TEMPLATE_ARN" id="@cdk_utils/iam.iam.IAMConditions.property.TEMPLATE_ARN"></a>

```typescript
public readonly TEMPLATE_ARN: string;
```

- *Type:* string

Condition key: iam:TemplateArn (ARN).

---

##### `UntagInstanceProfileConditionKeys`<sup>Required</sup> <a name="UntagInstanceProfileConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagInstanceProfileConditionKeys"></a>

```typescript
public readonly UntagInstanceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagInstanceProfile action.

---

##### `UntagMFADeviceConditionKeys`<sup>Required</sup> <a name="UntagMFADeviceConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagMFADeviceConditionKeys"></a>

```typescript
public readonly UntagMFADeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagMFADevice action.

---

##### `UntagOpenIDConnectProviderConditionKeys`<sup>Required</sup> <a name="UntagOpenIDConnectProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagOpenIDConnectProviderConditionKeys"></a>

```typescript
public readonly UntagOpenIDConnectProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagOpenIDConnectProvider action.

---

##### `UntagPolicyConditionKeys`<sup>Required</sup> <a name="UntagPolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagPolicyConditionKeys"></a>

```typescript
public readonly UntagPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagPolicy action.

---

##### `UntagRoleConditionKeys`<sup>Required</sup> <a name="UntagRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagRoleConditionKeys"></a>

```typescript
public readonly UntagRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagRole action.

---

##### `UntagSAMLProviderConditionKeys`<sup>Required</sup> <a name="UntagSAMLProviderConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagSAMLProviderConditionKeys"></a>

```typescript
public readonly UntagSAMLProviderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagSAMLProvider action.

---

##### `UntagServerCertificateConditionKeys`<sup>Required</sup> <a name="UntagServerCertificateConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagServerCertificateConditionKeys"></a>

```typescript
public readonly UntagServerCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagServerCertificate action.

---

##### `UntagUserConditionKeys`<sup>Required</sup> <a name="UntagUserConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UntagUserConditionKeys"></a>

```typescript
public readonly UntagUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagUser action.

---

##### `UpdateAssumeRolePolicyConditionKeys`<sup>Required</sup> <a name="UpdateAssumeRolePolicyConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UpdateAssumeRolePolicyConditionKeys"></a>

```typescript
public readonly UpdateAssumeRolePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAssumeRolePolicy action.

---

##### `UpdateRoleConditionKeys`<sup>Required</sup> <a name="UpdateRoleConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UpdateRoleConditionKeys"></a>

```typescript
public readonly UpdateRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRole action.

---

##### `UpdateRoleDescriptionConditionKeys`<sup>Required</sup> <a name="UpdateRoleDescriptionConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UpdateRoleDescriptionConditionKeys"></a>

```typescript
public readonly UpdateRoleDescriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoleDescription action.

---

##### `UpdateServiceSpecificCredentialConditionKeys`<sup>Required</sup> <a name="UpdateServiceSpecificCredentialConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UpdateServiceSpecificCredentialConditionKeys"></a>

```typescript
public readonly UpdateServiceSpecificCredentialConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceSpecificCredential action.

---

##### `UploadServerCertificateConditionKeys`<sup>Required</sup> <a name="UploadServerCertificateConditionKeys" id="@cdk_utils/iam.iam.IAMConditions.property.UploadServerCertificateConditionKeys"></a>

```typescript
public readonly UploadServerCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UploadServerCertificate action.

---

### IAMOperations <a name="IAMOperations" id="@cdk_utils/iam.iam.IAMOperations"></a>

API operation to required IAM actions mapping for iam.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iam.IAMOperations.Initializer"></a>

```typescript
import { iam } from '@cdk_utils/iam'

new iam.IAMOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AcceptDelegationRequest">AcceptDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the AcceptDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AcquireRole">AcquireRole</a></code> | <code>string[]</code> | IAM actions required for the AcquireRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AddClientIDToOpenIDConnectProvider">AddClientIDToOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the AddClientIDToOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AddRoleToInstanceProfile">AddRoleToInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the AddRoleToInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AddUserToGroup">AddUserToGroup</a></code> | <code>string[]</code> | IAM actions required for the AddUserToGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AssociateDelegationRequest">AssociateDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the AssociateDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AttachGroupPolicy">AttachGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AttachRolePolicy">AttachRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.AttachUserPolicy">AttachUserPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachUserPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ChangePassword">ChangePassword</a></code> | <code>string[]</code> | IAM actions required for the ChangePassword API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateAccessKey">CreateAccessKey</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateAccountAlias">CreateAccountAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountAlias API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateDelegationRequest">CreateDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the CreateDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateLoginProfile">CreateLoginProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateLoginProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateOpenIDConnectProvider">CreateOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreatePolicyVersion">CreatePolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateRole">CreateRole</a></code> | <code>string[]</code> | IAM actions required for the CreateRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateSAMLProvider">CreateSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateServiceLinkedRole">CreateServiceLinkedRole</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceLinkedRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateServiceSpecificCredential">CreateServiceSpecificCredential</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceSpecificCredential API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.CreateVirtualMFADevice">CreateVirtualMFADevice</a></code> | <code>string[]</code> | IAM actions required for the CreateVirtualMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeactivateMFADevice">DeactivateMFADevice</a></code> | <code>string[]</code> | IAM actions required for the DeactivateMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteAccessKey">DeleteAccessKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteAccountAlias">DeleteAccountAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountAlias API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteAccountPasswordPolicy">DeleteAccountPasswordPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountPasswordPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteGroupPolicy">DeleteGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteLoginProfile">DeleteLoginProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoginProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteOpenIDConnectProvider">DeleteOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeletePolicyVersion">DeletePolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteRole">DeleteRole</a></code> | <code>string[]</code> | IAM actions required for the DeleteRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteRolePermissionsBoundary">DeleteRolePermissionsBoundary</a></code> | <code>string[]</code> | IAM actions required for the DeleteRolePermissionsBoundary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteRolePolicy">DeleteRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteSAMLProvider">DeleteSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteServerCertificate">DeleteServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteServiceLinkedRole">DeleteServiceLinkedRole</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceLinkedRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteServiceSpecificCredential">DeleteServiceSpecificCredential</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceSpecificCredential API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteSigningCertificate">DeleteSigningCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteSigningCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteSSHPublicKey">DeleteSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteSSHPublicKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteUserPermissionsBoundary">DeleteUserPermissionsBoundary</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPermissionsBoundary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteUserPolicy">DeleteUserPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DeleteVirtualMFADevice">DeleteVirtualMFADevice</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DetachGroupPolicy">DetachGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DetachRolePolicy">DetachRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DetachUserPolicy">DetachUserPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachUserPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DisableOrganizationsRootCredentialsManagement">DisableOrganizationsRootCredentialsManagement</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationsRootCredentialsManagement API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DisableOrganizationsRootSessions">DisableOrganizationsRootSessions</a></code> | <code>string[]</code> | IAM actions required for the DisableOrganizationsRootSessions API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.DisableOutboundWebIdentityFederation">DisableOutboundWebIdentityFederation</a></code> | <code>string[]</code> | IAM actions required for the DisableOutboundWebIdentityFederation API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.EnableMFADevice">EnableMFADevice</a></code> | <code>string[]</code> | IAM actions required for the EnableMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.EnableOrganizationsRootCredentialsManagement">EnableOrganizationsRootCredentialsManagement</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationsRootCredentialsManagement API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.EnableOrganizationsRootSessions">EnableOrganizationsRootSessions</a></code> | <code>string[]</code> | IAM actions required for the EnableOrganizationsRootSessions API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.EnableOutboundWebIdentityFederation">EnableOutboundWebIdentityFederation</a></code> | <code>string[]</code> | IAM actions required for the EnableOutboundWebIdentityFederation API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.GenerateCredentialReport">GenerateCredentialReport</a></code> | <code>string[]</code> | IAM actions required for the GenerateCredentialReport API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.GenerateOrganizationsAccessReport">GenerateOrganizationsAccessReport</a></code> | <code>string[]</code> | IAM actions required for the GenerateOrganizationsAccessReport API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.GenerateServiceLastAccessedDetails">GenerateServiceLastAccessedDetails</a></code> | <code>string[]</code> | IAM actions required for the GenerateServiceLastAccessedDetails API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListAccessKeys">ListAccessKeys</a></code> | <code>string[]</code> | IAM actions required for the ListAccessKeys API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListAccountAliases">ListAccountAliases</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAliases API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListAttachedGroupPolicies">ListAttachedGroupPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedGroupPolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListAttachedRolePolicies">ListAttachedRolePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedRolePolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListAttachedUserPolicies">ListAttachedUserPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedUserPolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListDelegationRequests">ListDelegationRequests</a></code> | <code>string[]</code> | IAM actions required for the ListDelegationRequests API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListEntitiesForPolicy">ListEntitiesForPolicy</a></code> | <code>string[]</code> | IAM actions required for the ListEntitiesForPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListGroupPolicies">ListGroupPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListGroupPolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListGroupsForUser">ListGroupsForUser</a></code> | <code>string[]</code> | IAM actions required for the ListGroupsForUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfiles">ListInstanceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceProfiles API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfilesForRole">ListInstanceProfilesForRole</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceProfilesForRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfileTags">ListInstanceProfileTags</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceProfileTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListMFADevices">ListMFADevices</a></code> | <code>string[]</code> | IAM actions required for the ListMFADevices API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListMFADeviceTags">ListMFADeviceTags</a></code> | <code>string[]</code> | IAM actions required for the ListMFADeviceTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListOpenIDConnectProviders">ListOpenIDConnectProviders</a></code> | <code>string[]</code> | IAM actions required for the ListOpenIDConnectProviders API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListOpenIDConnectProviderTags">ListOpenIDConnectProviderTags</a></code> | <code>string[]</code> | IAM actions required for the ListOpenIDConnectProviderTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListOrganizationsFeatures">ListOrganizationsFeatures</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationsFeatures API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListPoliciesGrantingServiceAccess">ListPoliciesGrantingServiceAccess</a></code> | <code>string[]</code> | IAM actions required for the ListPoliciesGrantingServiceAccess API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListPolicyTags">ListPolicyTags</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListPolicyVersions">ListPolicyVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyVersions API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListRolePolicies">ListRolePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListRolePolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListRoles">ListRoles</a></code> | <code>string[]</code> | IAM actions required for the ListRoles API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListRoleTags">ListRoleTags</a></code> | <code>string[]</code> | IAM actions required for the ListRoleTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListSAMLProviders">ListSAMLProviders</a></code> | <code>string[]</code> | IAM actions required for the ListSAMLProviders API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListSAMLProviderTags">ListSAMLProviderTags</a></code> | <code>string[]</code> | IAM actions required for the ListSAMLProviderTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListServerCertificates">ListServerCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListServerCertificates API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListServerCertificateTags">ListServerCertificateTags</a></code> | <code>string[]</code> | IAM actions required for the ListServerCertificateTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListServiceSpecificCredentials">ListServiceSpecificCredentials</a></code> | <code>string[]</code> | IAM actions required for the ListServiceSpecificCredentials API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListSigningCertificates">ListSigningCertificates</a></code> | <code>string[]</code> | IAM actions required for the ListSigningCertificates API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListSSHPublicKeys">ListSSHPublicKeys</a></code> | <code>string[]</code> | IAM actions required for the ListSSHPublicKeys API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListUserPolicies">ListUserPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListUserPolicies API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListUserTags">ListUserTags</a></code> | <code>string[]</code> | IAM actions required for the ListUserTags API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ListVirtualMFADevices">ListVirtualMFADevices</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualMFADevices API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetAccessKeyLastUsed">opGetAccessKeyLastUsed</a></code> | <code>string[]</code> | IAM actions required for the GetAccessKeyLastUsed API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetAccountAuthorizationDetails">opGetAccountAuthorizationDetails</a></code> | <code>string[]</code> | IAM actions required for the GetAccountAuthorizationDetails API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetAccountPasswordPolicy">opGetAccountPasswordPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetAccountPasswordPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetAccountProperties">opGetAccountProperties</a></code> | <code>string[]</code> | IAM actions required for the GetAccountProperties API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetAccountSummary">opGetAccountSummary</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSummary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetContextKeysForCustomPolicy">opGetContextKeysForCustomPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContextKeysForCustomPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetContextKeysForPrincipalPolicy">opGetContextKeysForPrincipalPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetContextKeysForPrincipalPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetCredentialReport">opGetCredentialReport</a></code> | <code>string[]</code> | IAM actions required for the GetCredentialReport API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetDelegationRequest">opGetDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the GetDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetGroupPolicy">opGetGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetHumanReadableSummary">opGetHumanReadableSummary</a></code> | <code>string[]</code> | IAM actions required for the GetHumanReadableSummary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetInstanceProfile">opGetInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetLoginProfile">opGetLoginProfile</a></code> | <code>string[]</code> | IAM actions required for the GetLoginProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetMFADevice">opGetMFADevice</a></code> | <code>string[]</code> | IAM actions required for the GetMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetOpenIDConnectProvider">opGetOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the GetOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetOrganizationsAccessReport">opGetOrganizationsAccessReport</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationsAccessReport API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetOutboundWebIdentityFederationInfo">opGetOutboundWebIdentityFederationInfo</a></code> | <code>string[]</code> | IAM actions required for the GetOutboundWebIdentityFederationInfo API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetPolicyVersion">opGetPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetRole">opGetRole</a></code> | <code>string[]</code> | IAM actions required for the GetRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetRolePolicy">opGetRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetRoleTemplateVersion">opGetRoleTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the GetRoleTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetSAMLProvider">opGetSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the GetSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetServerCertificate">opGetServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLastAccessedDetails">opGetServiceLastAccessedDetails</a></code> | <code>string[]</code> | IAM actions required for the GetServiceLastAccessedDetails API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLastAccessedDetailsWithEntities">opGetServiceLastAccessedDetailsWithEntities</a></code> | <code>string[]</code> | IAM actions required for the GetServiceLastAccessedDetailsWithEntities API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLinkedRoleDeletionStatus">opGetServiceLinkedRoleDeletionStatus</a></code> | <code>string[]</code> | IAM actions required for the GetServiceLinkedRoleDeletionStatus API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetSSHPublicKey">opGetSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the GetSSHPublicKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opGetUserPolicy">opGetUserPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetUserPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opSetDefaultPolicyVersion">opSetDefaultPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.opSetSecurityTokenServicePreferences">opSetSecurityTokenServicePreferences</a></code> | <code>string[]</code> | IAM actions required for the SetSecurityTokenServicePreferences API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutAccountProperties">PutAccountProperties</a></code> | <code>string[]</code> | IAM actions required for the PutAccountProperties API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutGroupPolicy">PutGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutRolePermissionsBoundary">PutRolePermissionsBoundary</a></code> | <code>string[]</code> | IAM actions required for the PutRolePermissionsBoundary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutRolePolicy">PutRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutUserPermissionsBoundary">PutUserPermissionsBoundary</a></code> | <code>string[]</code> | IAM actions required for the PutUserPermissionsBoundary API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.PutUserPolicy">PutUserPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutUserPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.RejectDelegationRequest">RejectDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.RemoveClientIDFromOpenIDConnectProvider">RemoveClientIDFromOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the RemoveClientIDFromOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.RemoveRoleFromInstanceProfile">RemoveRoleFromInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the RemoveRoleFromInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.RemoveUserFromGroup">RemoveUserFromGroup</a></code> | <code>string[]</code> | IAM actions required for the RemoveUserFromGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ResetServiceSpecificCredential">ResetServiceSpecificCredential</a></code> | <code>string[]</code> | IAM actions required for the ResetServiceSpecificCredential API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.ResyncMFADevice">ResyncMFADevice</a></code> | <code>string[]</code> | IAM actions required for the ResyncMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.SendDelegationToken">SendDelegationToken</a></code> | <code>string[]</code> | IAM actions required for the SendDelegationToken API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.SimulateCustomPolicy">SimulateCustomPolicy</a></code> | <code>string[]</code> | IAM actions required for the SimulateCustomPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.SimulatePrincipalPolicy">SimulatePrincipalPolicy</a></code> | <code>string[]</code> | IAM actions required for the SimulatePrincipalPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagInstanceProfile">TagInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the TagInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagMFADevice">TagMFADevice</a></code> | <code>string[]</code> | IAM actions required for the TagMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagOpenIDConnectProvider">TagOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the TagOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagPolicy">TagPolicy</a></code> | <code>string[]</code> | IAM actions required for the TagPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagRole">TagRole</a></code> | <code>string[]</code> | IAM actions required for the TagRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagSAMLProvider">TagSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the TagSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagServerCertificate">TagServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the TagServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.TagUser">TagUser</a></code> | <code>string[]</code> | IAM actions required for the TagUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagInstanceProfile">UntagInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the UntagInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagMFADevice">UntagMFADevice</a></code> | <code>string[]</code> | IAM actions required for the UntagMFADevice API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagOpenIDConnectProvider">UntagOpenIDConnectProvider</a></code> | <code>string[]</code> | IAM actions required for the UntagOpenIDConnectProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagPolicy">UntagPolicy</a></code> | <code>string[]</code> | IAM actions required for the UntagPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagRole">UntagRole</a></code> | <code>string[]</code> | IAM actions required for the UntagRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagSAMLProvider">UntagSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the UntagSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagServerCertificate">UntagServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the UntagServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UntagUser">UntagUser</a></code> | <code>string[]</code> | IAM actions required for the UntagUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateAccessKey">UpdateAccessKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateAccountPasswordPolicy">UpdateAccountPasswordPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountPasswordPolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateAssumeRolePolicy">UpdateAssumeRolePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssumeRolePolicy API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateDelegationRequest">UpdateDelegationRequest</a></code> | <code>string[]</code> | IAM actions required for the UpdateDelegationRequest API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateLoginProfile">UpdateLoginProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoginProfile API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateOpenIDConnectProviderThumbprint">UpdateOpenIDConnectProviderThumbprint</a></code> | <code>string[]</code> | IAM actions required for the UpdateOpenIDConnectProviderThumbprint API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateRole">UpdateRole</a></code> | <code>string[]</code> | IAM actions required for the UpdateRole API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateRoleDescription">UpdateRoleDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoleDescription API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateSAMLProvider">UpdateSAMLProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateSAMLProvider API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateServerCertificate">UpdateServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateServiceSpecificCredential">UpdateServiceSpecificCredential</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSpecificCredential API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateSigningCertificate">UpdateSigningCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdateSigningCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateSSHPublicKey">UpdateSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the UpdateSSHPublicKey API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UploadServerCertificate">UploadServerCertificate</a></code> | <code>string[]</code> | IAM actions required for the UploadServerCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UploadSigningCertificate">UploadSigningCertificate</a></code> | <code>string[]</code> | IAM actions required for the UploadSigningCertificate API call. |
| <code><a href="#@cdk_utils/iam.iam.IAMOperations.property.UploadSSHPublicKey">UploadSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the UploadSSHPublicKey API call. |

---

##### `AcceptDelegationRequest`<sup>Required</sup> <a name="AcceptDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.AcceptDelegationRequest"></a>

```typescript
public readonly AcceptDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the AcceptDelegationRequest API call.

---

##### `AcquireRole`<sup>Required</sup> <a name="AcquireRole" id="@cdk_utils/iam.iam.IAMOperations.property.AcquireRole"></a>

```typescript
public readonly AcquireRole: string[];
```

- *Type:* string[]

IAM actions required for the AcquireRole API call.

---

##### `AddClientIDToOpenIDConnectProvider`<sup>Required</sup> <a name="AddClientIDToOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.AddClientIDToOpenIDConnectProvider"></a>

```typescript
public readonly AddClientIDToOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the AddClientIDToOpenIDConnectProvider API call.

---

##### `AddRoleToInstanceProfile`<sup>Required</sup> <a name="AddRoleToInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.AddRoleToInstanceProfile"></a>

```typescript
public readonly AddRoleToInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the AddRoleToInstanceProfile API call.

---

##### `AddUserToGroup`<sup>Required</sup> <a name="AddUserToGroup" id="@cdk_utils/iam.iam.IAMOperations.property.AddUserToGroup"></a>

```typescript
public readonly AddUserToGroup: string[];
```

- *Type:* string[]

IAM actions required for the AddUserToGroup API call.

---

##### `AssociateDelegationRequest`<sup>Required</sup> <a name="AssociateDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.AssociateDelegationRequest"></a>

```typescript
public readonly AssociateDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDelegationRequest API call.

---

##### `AttachGroupPolicy`<sup>Required</sup> <a name="AttachGroupPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.AttachGroupPolicy"></a>

```typescript
public readonly AttachGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachGroupPolicy API call.

---

##### `AttachRolePolicy`<sup>Required</sup> <a name="AttachRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.AttachRolePolicy"></a>

```typescript
public readonly AttachRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachRolePolicy API call.

---

##### `AttachUserPolicy`<sup>Required</sup> <a name="AttachUserPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.AttachUserPolicy"></a>

```typescript
public readonly AttachUserPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachUserPolicy API call.

---

##### `ChangePassword`<sup>Required</sup> <a name="ChangePassword" id="@cdk_utils/iam.iam.IAMOperations.property.ChangePassword"></a>

```typescript
public readonly ChangePassword: string[];
```

- *Type:* string[]

IAM actions required for the ChangePassword API call.

---

##### `CreateAccessKey`<sup>Required</sup> <a name="CreateAccessKey" id="@cdk_utils/iam.iam.IAMOperations.property.CreateAccessKey"></a>

```typescript
public readonly CreateAccessKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessKey API call.

---

##### `CreateAccountAlias`<sup>Required</sup> <a name="CreateAccountAlias" id="@cdk_utils/iam.iam.IAMOperations.property.CreateAccountAlias"></a>

```typescript
public readonly CreateAccountAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountAlias API call.

---

##### `CreateDelegationRequest`<sup>Required</sup> <a name="CreateDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.CreateDelegationRequest"></a>

```typescript
public readonly CreateDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the CreateDelegationRequest API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.iam.IAMOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstanceProfile API call.

---

##### `CreateLoginProfile`<sup>Required</sup> <a name="CreateLoginProfile" id="@cdk_utils/iam.iam.IAMOperations.property.CreateLoginProfile"></a>

```typescript
public readonly CreateLoginProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoginProfile API call.

---

##### `CreateOpenIDConnectProvider`<sup>Required</sup> <a name="CreateOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.CreateOpenIDConnectProvider"></a>

```typescript
public readonly CreateOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateOpenIDConnectProvider API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreatePolicyVersion`<sup>Required</sup> <a name="CreatePolicyVersion" id="@cdk_utils/iam.iam.IAMOperations.property.CreatePolicyVersion"></a>

```typescript
public readonly CreatePolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyVersion API call.

---

##### `CreateRole`<sup>Required</sup> <a name="CreateRole" id="@cdk_utils/iam.iam.IAMOperations.property.CreateRole"></a>

```typescript
public readonly CreateRole: string[];
```

- *Type:* string[]

IAM actions required for the CreateRole API call.

---

##### `CreateSAMLProvider`<sup>Required</sup> <a name="CreateSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.CreateSAMLProvider"></a>

```typescript
public readonly CreateSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateSAMLProvider API call.

---

##### `CreateServiceLinkedRole`<sup>Required</sup> <a name="CreateServiceLinkedRole" id="@cdk_utils/iam.iam.IAMOperations.property.CreateServiceLinkedRole"></a>

```typescript
public readonly CreateServiceLinkedRole: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceLinkedRole API call.

---

##### `CreateServiceSpecificCredential`<sup>Required</sup> <a name="CreateServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMOperations.property.CreateServiceSpecificCredential"></a>

```typescript
public readonly CreateServiceSpecificCredential: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceSpecificCredential API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.iam.IAMOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateVirtualMFADevice`<sup>Required</sup> <a name="CreateVirtualMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.CreateVirtualMFADevice"></a>

```typescript
public readonly CreateVirtualMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the CreateVirtualMFADevice API call.

---

##### `DeactivateMFADevice`<sup>Required</sup> <a name="DeactivateMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.DeactivateMFADevice"></a>

```typescript
public readonly DeactivateMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateMFADevice API call.

---

##### `DeleteAccessKey`<sup>Required</sup> <a name="DeleteAccessKey" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteAccessKey"></a>

```typescript
public readonly DeleteAccessKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessKey API call.

---

##### `DeleteAccountAlias`<sup>Required</sup> <a name="DeleteAccountAlias" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteAccountAlias"></a>

```typescript
public readonly DeleteAccountAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountAlias API call.

---

##### `DeleteAccountPasswordPolicy`<sup>Required</sup> <a name="DeleteAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteAccountPasswordPolicy"></a>

```typescript
public readonly DeleteAccountPasswordPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountPasswordPolicy API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteGroupPolicy`<sup>Required</sup> <a name="DeleteGroupPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteGroupPolicy"></a>

```typescript
public readonly DeleteGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroupPolicy API call.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceProfile API call.

---

##### `DeleteLoginProfile`<sup>Required</sup> <a name="DeleteLoginProfile" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteLoginProfile"></a>

```typescript
public readonly DeleteLoginProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoginProfile API call.

---

##### `DeleteOpenIDConnectProvider`<sup>Required</sup> <a name="DeleteOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteOpenIDConnectProvider"></a>

```typescript
public readonly DeleteOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOpenIDConnectProvider API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeletePolicyVersion`<sup>Required</sup> <a name="DeletePolicyVersion" id="@cdk_utils/iam.iam.IAMOperations.property.DeletePolicyVersion"></a>

```typescript
public readonly DeletePolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyVersion API call.

---

##### `DeleteRole`<sup>Required</sup> <a name="DeleteRole" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteRole"></a>

```typescript
public readonly DeleteRole: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRole API call.

---

##### `DeleteRolePermissionsBoundary`<sup>Required</sup> <a name="DeleteRolePermissionsBoundary" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteRolePermissionsBoundary"></a>

```typescript
public readonly DeleteRolePermissionsBoundary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRolePermissionsBoundary API call.

---

##### `DeleteRolePolicy`<sup>Required</sup> <a name="DeleteRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteRolePolicy"></a>

```typescript
public readonly DeleteRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRolePolicy API call.

---

##### `DeleteSAMLProvider`<sup>Required</sup> <a name="DeleteSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteSAMLProvider"></a>

```typescript
public readonly DeleteSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSAMLProvider API call.

---

##### `DeleteServerCertificate`<sup>Required</sup> <a name="DeleteServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteServerCertificate"></a>

```typescript
public readonly DeleteServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServerCertificate API call.

---

##### `DeleteServiceLinkedRole`<sup>Required</sup> <a name="DeleteServiceLinkedRole" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteServiceLinkedRole"></a>

```typescript
public readonly DeleteServiceLinkedRole: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceLinkedRole API call.

---

##### `DeleteServiceSpecificCredential`<sup>Required</sup> <a name="DeleteServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteServiceSpecificCredential"></a>

```typescript
public readonly DeleteServiceSpecificCredential: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceSpecificCredential API call.

---

##### `DeleteSigningCertificate`<sup>Required</sup> <a name="DeleteSigningCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteSigningCertificate"></a>

```typescript
public readonly DeleteSigningCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSigningCertificate API call.

---

##### `DeleteSSHPublicKey`<sup>Required</sup> <a name="DeleteSSHPublicKey" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteSSHPublicKey"></a>

```typescript
public readonly DeleteSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSSHPublicKey API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteUserPermissionsBoundary`<sup>Required</sup> <a name="DeleteUserPermissionsBoundary" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteUserPermissionsBoundary"></a>

```typescript
public readonly DeleteUserPermissionsBoundary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPermissionsBoundary API call.

---

##### `DeleteUserPolicy`<sup>Required</sup> <a name="DeleteUserPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteUserPolicy"></a>

```typescript
public readonly DeleteUserPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPolicy API call.

---

##### `DeleteVirtualMFADevice`<sup>Required</sup> <a name="DeleteVirtualMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.DeleteVirtualMFADevice"></a>

```typescript
public readonly DeleteVirtualMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualMFADevice API call.

---

##### `DetachGroupPolicy`<sup>Required</sup> <a name="DetachGroupPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DetachGroupPolicy"></a>

```typescript
public readonly DetachGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachGroupPolicy API call.

---

##### `DetachRolePolicy`<sup>Required</sup> <a name="DetachRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DetachRolePolicy"></a>

```typescript
public readonly DetachRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachRolePolicy API call.

---

##### `DetachUserPolicy`<sup>Required</sup> <a name="DetachUserPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.DetachUserPolicy"></a>

```typescript
public readonly DetachUserPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachUserPolicy API call.

---

##### `DisableOrganizationsRootCredentialsManagement`<sup>Required</sup> <a name="DisableOrganizationsRootCredentialsManagement" id="@cdk_utils/iam.iam.IAMOperations.property.DisableOrganizationsRootCredentialsManagement"></a>

```typescript
public readonly DisableOrganizationsRootCredentialsManagement: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationsRootCredentialsManagement API call.

---

##### `DisableOrganizationsRootSessions`<sup>Required</sup> <a name="DisableOrganizationsRootSessions" id="@cdk_utils/iam.iam.IAMOperations.property.DisableOrganizationsRootSessions"></a>

```typescript
public readonly DisableOrganizationsRootSessions: string[];
```

- *Type:* string[]

IAM actions required for the DisableOrganizationsRootSessions API call.

---

##### `DisableOutboundWebIdentityFederation`<sup>Required</sup> <a name="DisableOutboundWebIdentityFederation" id="@cdk_utils/iam.iam.IAMOperations.property.DisableOutboundWebIdentityFederation"></a>

```typescript
public readonly DisableOutboundWebIdentityFederation: string[];
```

- *Type:* string[]

IAM actions required for the DisableOutboundWebIdentityFederation API call.

---

##### `EnableMFADevice`<sup>Required</sup> <a name="EnableMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.EnableMFADevice"></a>

```typescript
public readonly EnableMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the EnableMFADevice API call.

---

##### `EnableOrganizationsRootCredentialsManagement`<sup>Required</sup> <a name="EnableOrganizationsRootCredentialsManagement" id="@cdk_utils/iam.iam.IAMOperations.property.EnableOrganizationsRootCredentialsManagement"></a>

```typescript
public readonly EnableOrganizationsRootCredentialsManagement: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationsRootCredentialsManagement API call.

---

##### `EnableOrganizationsRootSessions`<sup>Required</sup> <a name="EnableOrganizationsRootSessions" id="@cdk_utils/iam.iam.IAMOperations.property.EnableOrganizationsRootSessions"></a>

```typescript
public readonly EnableOrganizationsRootSessions: string[];
```

- *Type:* string[]

IAM actions required for the EnableOrganizationsRootSessions API call.

---

##### `EnableOutboundWebIdentityFederation`<sup>Required</sup> <a name="EnableOutboundWebIdentityFederation" id="@cdk_utils/iam.iam.IAMOperations.property.EnableOutboundWebIdentityFederation"></a>

```typescript
public readonly EnableOutboundWebIdentityFederation: string[];
```

- *Type:* string[]

IAM actions required for the EnableOutboundWebIdentityFederation API call.

---

##### `GenerateCredentialReport`<sup>Required</sup> <a name="GenerateCredentialReport" id="@cdk_utils/iam.iam.IAMOperations.property.GenerateCredentialReport"></a>

```typescript
public readonly GenerateCredentialReport: string[];
```

- *Type:* string[]

IAM actions required for the GenerateCredentialReport API call.

---

##### `GenerateOrganizationsAccessReport`<sup>Required</sup> <a name="GenerateOrganizationsAccessReport" id="@cdk_utils/iam.iam.IAMOperations.property.GenerateOrganizationsAccessReport"></a>

```typescript
public readonly GenerateOrganizationsAccessReport: string[];
```

- *Type:* string[]

IAM actions required for the GenerateOrganizationsAccessReport API call.

---

##### `GenerateServiceLastAccessedDetails`<sup>Required</sup> <a name="GenerateServiceLastAccessedDetails" id="@cdk_utils/iam.iam.IAMOperations.property.GenerateServiceLastAccessedDetails"></a>

```typescript
public readonly GenerateServiceLastAccessedDetails: string[];
```

- *Type:* string[]

IAM actions required for the GenerateServiceLastAccessedDetails API call.

---

##### `ListAccessKeys`<sup>Required</sup> <a name="ListAccessKeys" id="@cdk_utils/iam.iam.IAMOperations.property.ListAccessKeys"></a>

```typescript
public readonly ListAccessKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessKeys API call.

---

##### `ListAccountAliases`<sup>Required</sup> <a name="ListAccountAliases" id="@cdk_utils/iam.iam.IAMOperations.property.ListAccountAliases"></a>

```typescript
public readonly ListAccountAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAliases API call.

---

##### `ListAttachedGroupPolicies`<sup>Required</sup> <a name="ListAttachedGroupPolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListAttachedGroupPolicies"></a>

```typescript
public readonly ListAttachedGroupPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedGroupPolicies API call.

---

##### `ListAttachedRolePolicies`<sup>Required</sup> <a name="ListAttachedRolePolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListAttachedRolePolicies"></a>

```typescript
public readonly ListAttachedRolePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedRolePolicies API call.

---

##### `ListAttachedUserPolicies`<sup>Required</sup> <a name="ListAttachedUserPolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListAttachedUserPolicies"></a>

```typescript
public readonly ListAttachedUserPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedUserPolicies API call.

---

##### `ListDelegationRequests`<sup>Required</sup> <a name="ListDelegationRequests" id="@cdk_utils/iam.iam.IAMOperations.property.ListDelegationRequests"></a>

```typescript
public readonly ListDelegationRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListDelegationRequests API call.

---

##### `ListEntitiesForPolicy`<sup>Required</sup> <a name="ListEntitiesForPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.ListEntitiesForPolicy"></a>

```typescript
public readonly ListEntitiesForPolicy: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitiesForPolicy API call.

---

##### `ListGroupPolicies`<sup>Required</sup> <a name="ListGroupPolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListGroupPolicies"></a>

```typescript
public readonly ListGroupPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupPolicies API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.iam.IAMOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListGroupsForUser`<sup>Required</sup> <a name="ListGroupsForUser" id="@cdk_utils/iam.iam.IAMOperations.property.ListGroupsForUser"></a>

```typescript
public readonly ListGroupsForUser: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupsForUser API call.

---

##### `ListInstanceProfiles`<sup>Required</sup> <a name="ListInstanceProfiles" id="@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfiles"></a>

```typescript
public readonly ListInstanceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceProfiles API call.

---

##### `ListInstanceProfilesForRole`<sup>Required</sup> <a name="ListInstanceProfilesForRole" id="@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfilesForRole"></a>

```typescript
public readonly ListInstanceProfilesForRole: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceProfilesForRole API call.

---

##### `ListInstanceProfileTags`<sup>Required</sup> <a name="ListInstanceProfileTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListInstanceProfileTags"></a>

```typescript
public readonly ListInstanceProfileTags: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceProfileTags API call.

---

##### `ListMFADevices`<sup>Required</sup> <a name="ListMFADevices" id="@cdk_utils/iam.iam.IAMOperations.property.ListMFADevices"></a>

```typescript
public readonly ListMFADevices: string[];
```

- *Type:* string[]

IAM actions required for the ListMFADevices API call.

---

##### `ListMFADeviceTags`<sup>Required</sup> <a name="ListMFADeviceTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListMFADeviceTags"></a>

```typescript
public readonly ListMFADeviceTags: string[];
```

- *Type:* string[]

IAM actions required for the ListMFADeviceTags API call.

---

##### `ListOpenIDConnectProviders`<sup>Required</sup> <a name="ListOpenIDConnectProviders" id="@cdk_utils/iam.iam.IAMOperations.property.ListOpenIDConnectProviders"></a>

```typescript
public readonly ListOpenIDConnectProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListOpenIDConnectProviders API call.

---

##### `ListOpenIDConnectProviderTags`<sup>Required</sup> <a name="ListOpenIDConnectProviderTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListOpenIDConnectProviderTags"></a>

```typescript
public readonly ListOpenIDConnectProviderTags: string[];
```

- *Type:* string[]

IAM actions required for the ListOpenIDConnectProviderTags API call.

---

##### `ListOrganizationsFeatures`<sup>Required</sup> <a name="ListOrganizationsFeatures" id="@cdk_utils/iam.iam.IAMOperations.property.ListOrganizationsFeatures"></a>

```typescript
public readonly ListOrganizationsFeatures: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationsFeatures API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPoliciesGrantingServiceAccess`<sup>Required</sup> <a name="ListPoliciesGrantingServiceAccess" id="@cdk_utils/iam.iam.IAMOperations.property.ListPoliciesGrantingServiceAccess"></a>

```typescript
public readonly ListPoliciesGrantingServiceAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListPoliciesGrantingServiceAccess API call.

---

##### `ListPolicyTags`<sup>Required</sup> <a name="ListPolicyTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListPolicyTags"></a>

```typescript
public readonly ListPolicyTags: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyTags API call.

---

##### `ListPolicyVersions`<sup>Required</sup> <a name="ListPolicyVersions" id="@cdk_utils/iam.iam.IAMOperations.property.ListPolicyVersions"></a>

```typescript
public readonly ListPolicyVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyVersions API call.

---

##### `ListRolePolicies`<sup>Required</sup> <a name="ListRolePolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListRolePolicies"></a>

```typescript
public readonly ListRolePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListRolePolicies API call.

---

##### `ListRoles`<sup>Required</sup> <a name="ListRoles" id="@cdk_utils/iam.iam.IAMOperations.property.ListRoles"></a>

```typescript
public readonly ListRoles: string[];
```

- *Type:* string[]

IAM actions required for the ListRoles API call.

---

##### `ListRoleTags`<sup>Required</sup> <a name="ListRoleTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListRoleTags"></a>

```typescript
public readonly ListRoleTags: string[];
```

- *Type:* string[]

IAM actions required for the ListRoleTags API call.

---

##### `ListSAMLProviders`<sup>Required</sup> <a name="ListSAMLProviders" id="@cdk_utils/iam.iam.IAMOperations.property.ListSAMLProviders"></a>

```typescript
public readonly ListSAMLProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListSAMLProviders API call.

---

##### `ListSAMLProviderTags`<sup>Required</sup> <a name="ListSAMLProviderTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListSAMLProviderTags"></a>

```typescript
public readonly ListSAMLProviderTags: string[];
```

- *Type:* string[]

IAM actions required for the ListSAMLProviderTags API call.

---

##### `ListServerCertificates`<sup>Required</sup> <a name="ListServerCertificates" id="@cdk_utils/iam.iam.IAMOperations.property.ListServerCertificates"></a>

```typescript
public readonly ListServerCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListServerCertificates API call.

---

##### `ListServerCertificateTags`<sup>Required</sup> <a name="ListServerCertificateTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListServerCertificateTags"></a>

```typescript
public readonly ListServerCertificateTags: string[];
```

- *Type:* string[]

IAM actions required for the ListServerCertificateTags API call.

---

##### `ListServiceSpecificCredentials`<sup>Required</sup> <a name="ListServiceSpecificCredentials" id="@cdk_utils/iam.iam.IAMOperations.property.ListServiceSpecificCredentials"></a>

```typescript
public readonly ListServiceSpecificCredentials: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceSpecificCredentials API call.

---

##### `ListSigningCertificates`<sup>Required</sup> <a name="ListSigningCertificates" id="@cdk_utils/iam.iam.IAMOperations.property.ListSigningCertificates"></a>

```typescript
public readonly ListSigningCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ListSigningCertificates API call.

---

##### `ListSSHPublicKeys`<sup>Required</sup> <a name="ListSSHPublicKeys" id="@cdk_utils/iam.iam.IAMOperations.property.ListSSHPublicKeys"></a>

```typescript
public readonly ListSSHPublicKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListSSHPublicKeys API call.

---

##### `ListUserPolicies`<sup>Required</sup> <a name="ListUserPolicies" id="@cdk_utils/iam.iam.IAMOperations.property.ListUserPolicies"></a>

```typescript
public readonly ListUserPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListUserPolicies API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.iam.IAMOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListUserTags`<sup>Required</sup> <a name="ListUserTags" id="@cdk_utils/iam.iam.IAMOperations.property.ListUserTags"></a>

```typescript
public readonly ListUserTags: string[];
```

- *Type:* string[]

IAM actions required for the ListUserTags API call.

---

##### `ListVirtualMFADevices`<sup>Required</sup> <a name="ListVirtualMFADevices" id="@cdk_utils/iam.iam.IAMOperations.property.ListVirtualMFADevices"></a>

```typescript
public readonly ListVirtualMFADevices: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualMFADevices API call.

---

##### `opGetAccessKeyLastUsed`<sup>Required</sup> <a name="opGetAccessKeyLastUsed" id="@cdk_utils/iam.iam.IAMOperations.property.opGetAccessKeyLastUsed"></a>

```typescript
public readonly opGetAccessKeyLastUsed: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessKeyLastUsed API call.

---

##### `opGetAccountAuthorizationDetails`<sup>Required</sup> <a name="opGetAccountAuthorizationDetails" id="@cdk_utils/iam.iam.IAMOperations.property.opGetAccountAuthorizationDetails"></a>

```typescript
public readonly opGetAccountAuthorizationDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountAuthorizationDetails API call.

---

##### `opGetAccountPasswordPolicy`<sup>Required</sup> <a name="opGetAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetAccountPasswordPolicy"></a>

```typescript
public readonly opGetAccountPasswordPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountPasswordPolicy API call.

---

##### `opGetAccountProperties`<sup>Required</sup> <a name="opGetAccountProperties" id="@cdk_utils/iam.iam.IAMOperations.property.opGetAccountProperties"></a>

```typescript
public readonly opGetAccountProperties: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountProperties API call.

---

##### `opGetAccountSummary`<sup>Required</sup> <a name="opGetAccountSummary" id="@cdk_utils/iam.iam.IAMOperations.property.opGetAccountSummary"></a>

```typescript
public readonly opGetAccountSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSummary API call.

---

##### `opGetContextKeysForCustomPolicy`<sup>Required</sup> <a name="opGetContextKeysForCustomPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetContextKeysForCustomPolicy"></a>

```typescript
public readonly opGetContextKeysForCustomPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContextKeysForCustomPolicy API call.

---

##### `opGetContextKeysForPrincipalPolicy`<sup>Required</sup> <a name="opGetContextKeysForPrincipalPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetContextKeysForPrincipalPolicy"></a>

```typescript
public readonly opGetContextKeysForPrincipalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetContextKeysForPrincipalPolicy API call.

---

##### `opGetCredentialReport`<sup>Required</sup> <a name="opGetCredentialReport" id="@cdk_utils/iam.iam.IAMOperations.property.opGetCredentialReport"></a>

```typescript
public readonly opGetCredentialReport: string[];
```

- *Type:* string[]

IAM actions required for the GetCredentialReport API call.

---

##### `opGetDelegationRequest`<sup>Required</sup> <a name="opGetDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.opGetDelegationRequest"></a>

```typescript
public readonly opGetDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the GetDelegationRequest API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.iam.IAMOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetGroupPolicy`<sup>Required</sup> <a name="opGetGroupPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetGroupPolicy"></a>

```typescript
public readonly opGetGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupPolicy API call.

---

##### `opGetHumanReadableSummary`<sup>Required</sup> <a name="opGetHumanReadableSummary" id="@cdk_utils/iam.iam.IAMOperations.property.opGetHumanReadableSummary"></a>

```typescript
public readonly opGetHumanReadableSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetHumanReadableSummary API call.

---

##### `opGetInstanceProfile`<sup>Required</sup> <a name="opGetInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.opGetInstanceProfile"></a>

```typescript
public readonly opGetInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceProfile API call.

---

##### `opGetLoginProfile`<sup>Required</sup> <a name="opGetLoginProfile" id="@cdk_utils/iam.iam.IAMOperations.property.opGetLoginProfile"></a>

```typescript
public readonly opGetLoginProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetLoginProfile API call.

---

##### `opGetMFADevice`<sup>Required</sup> <a name="opGetMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.opGetMFADevice"></a>

```typescript
public readonly opGetMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the GetMFADevice API call.

---

##### `opGetOpenIDConnectProvider`<sup>Required</sup> <a name="opGetOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.opGetOpenIDConnectProvider"></a>

```typescript
public readonly opGetOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetOpenIDConnectProvider API call.

---

##### `opGetOrganizationsAccessReport`<sup>Required</sup> <a name="opGetOrganizationsAccessReport" id="@cdk_utils/iam.iam.IAMOperations.property.opGetOrganizationsAccessReport"></a>

```typescript
public readonly opGetOrganizationsAccessReport: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationsAccessReport API call.

---

##### `opGetOutboundWebIdentityFederationInfo`<sup>Required</sup> <a name="opGetOutboundWebIdentityFederationInfo" id="@cdk_utils/iam.iam.IAMOperations.property.opGetOutboundWebIdentityFederationInfo"></a>

```typescript
public readonly opGetOutboundWebIdentityFederationInfo: string[];
```

- *Type:* string[]

IAM actions required for the GetOutboundWebIdentityFederationInfo API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetPolicyVersion`<sup>Required</sup> <a name="opGetPolicyVersion" id="@cdk_utils/iam.iam.IAMOperations.property.opGetPolicyVersion"></a>

```typescript
public readonly opGetPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyVersion API call.

---

##### `opGetRole`<sup>Required</sup> <a name="opGetRole" id="@cdk_utils/iam.iam.IAMOperations.property.opGetRole"></a>

```typescript
public readonly opGetRole: string[];
```

- *Type:* string[]

IAM actions required for the GetRole API call.

---

##### `opGetRolePolicy`<sup>Required</sup> <a name="opGetRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetRolePolicy"></a>

```typescript
public readonly opGetRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetRolePolicy API call.

---

##### `opGetRoleTemplateVersion`<sup>Required</sup> <a name="opGetRoleTemplateVersion" id="@cdk_utils/iam.iam.IAMOperations.property.opGetRoleTemplateVersion"></a>

```typescript
public readonly opGetRoleTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetRoleTemplateVersion API call.

---

##### `opGetSAMLProvider`<sup>Required</sup> <a name="opGetSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.opGetSAMLProvider"></a>

```typescript
public readonly opGetSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the GetSAMLProvider API call.

---

##### `opGetServerCertificate`<sup>Required</sup> <a name="opGetServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.opGetServerCertificate"></a>

```typescript
public readonly opGetServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetServerCertificate API call.

---

##### `opGetServiceLastAccessedDetails`<sup>Required</sup> <a name="opGetServiceLastAccessedDetails" id="@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLastAccessedDetails"></a>

```typescript
public readonly opGetServiceLastAccessedDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceLastAccessedDetails API call.

---

##### `opGetServiceLastAccessedDetailsWithEntities`<sup>Required</sup> <a name="opGetServiceLastAccessedDetailsWithEntities" id="@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLastAccessedDetailsWithEntities"></a>

```typescript
public readonly opGetServiceLastAccessedDetailsWithEntities: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceLastAccessedDetailsWithEntities API call.

---

##### `opGetServiceLinkedRoleDeletionStatus`<sup>Required</sup> <a name="opGetServiceLinkedRoleDeletionStatus" id="@cdk_utils/iam.iam.IAMOperations.property.opGetServiceLinkedRoleDeletionStatus"></a>

```typescript
public readonly opGetServiceLinkedRoleDeletionStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceLinkedRoleDeletionStatus API call.

---

##### `opGetSSHPublicKey`<sup>Required</sup> <a name="opGetSSHPublicKey" id="@cdk_utils/iam.iam.IAMOperations.property.opGetSSHPublicKey"></a>

```typescript
public readonly opGetSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the GetSSHPublicKey API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.iam.IAMOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetUserPolicy`<sup>Required</sup> <a name="opGetUserPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.opGetUserPolicy"></a>

```typescript
public readonly opGetUserPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetUserPolicy API call.

---

##### `opSetDefaultPolicyVersion`<sup>Required</sup> <a name="opSetDefaultPolicyVersion" id="@cdk_utils/iam.iam.IAMOperations.property.opSetDefaultPolicyVersion"></a>

```typescript
public readonly opSetDefaultPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultPolicyVersion API call.

---

##### `opSetSecurityTokenServicePreferences`<sup>Required</sup> <a name="opSetSecurityTokenServicePreferences" id="@cdk_utils/iam.iam.IAMOperations.property.opSetSecurityTokenServicePreferences"></a>

```typescript
public readonly opSetSecurityTokenServicePreferences: string[];
```

- *Type:* string[]

IAM actions required for the SetSecurityTokenServicePreferences API call.

---

##### `PutAccountProperties`<sup>Required</sup> <a name="PutAccountProperties" id="@cdk_utils/iam.iam.IAMOperations.property.PutAccountProperties"></a>

```typescript
public readonly PutAccountProperties: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountProperties API call.

---

##### `PutGroupPolicy`<sup>Required</sup> <a name="PutGroupPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.PutGroupPolicy"></a>

```typescript
public readonly PutGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutGroupPolicy API call.

---

##### `PutRolePermissionsBoundary`<sup>Required</sup> <a name="PutRolePermissionsBoundary" id="@cdk_utils/iam.iam.IAMOperations.property.PutRolePermissionsBoundary"></a>

```typescript
public readonly PutRolePermissionsBoundary: string[];
```

- *Type:* string[]

IAM actions required for the PutRolePermissionsBoundary API call.

---

##### `PutRolePolicy`<sup>Required</sup> <a name="PutRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.PutRolePolicy"></a>

```typescript
public readonly PutRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutRolePolicy API call.

---

##### `PutUserPermissionsBoundary`<sup>Required</sup> <a name="PutUserPermissionsBoundary" id="@cdk_utils/iam.iam.IAMOperations.property.PutUserPermissionsBoundary"></a>

```typescript
public readonly PutUserPermissionsBoundary: string[];
```

- *Type:* string[]

IAM actions required for the PutUserPermissionsBoundary API call.

---

##### `PutUserPolicy`<sup>Required</sup> <a name="PutUserPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.PutUserPolicy"></a>

```typescript
public readonly PutUserPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutUserPolicy API call.

---

##### `RejectDelegationRequest`<sup>Required</sup> <a name="RejectDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.RejectDelegationRequest"></a>

```typescript
public readonly RejectDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectDelegationRequest API call.

---

##### `RemoveClientIDFromOpenIDConnectProvider`<sup>Required</sup> <a name="RemoveClientIDFromOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.RemoveClientIDFromOpenIDConnectProvider"></a>

```typescript
public readonly RemoveClientIDFromOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the RemoveClientIDFromOpenIDConnectProvider API call.

---

##### `RemoveRoleFromInstanceProfile`<sup>Required</sup> <a name="RemoveRoleFromInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.RemoveRoleFromInstanceProfile"></a>

```typescript
public readonly RemoveRoleFromInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRoleFromInstanceProfile API call.

---

##### `RemoveUserFromGroup`<sup>Required</sup> <a name="RemoveUserFromGroup" id="@cdk_utils/iam.iam.IAMOperations.property.RemoveUserFromGroup"></a>

```typescript
public readonly RemoveUserFromGroup: string[];
```

- *Type:* string[]

IAM actions required for the RemoveUserFromGroup API call.

---

##### `ResetServiceSpecificCredential`<sup>Required</sup> <a name="ResetServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMOperations.property.ResetServiceSpecificCredential"></a>

```typescript
public readonly ResetServiceSpecificCredential: string[];
```

- *Type:* string[]

IAM actions required for the ResetServiceSpecificCredential API call.

---

##### `ResyncMFADevice`<sup>Required</sup> <a name="ResyncMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.ResyncMFADevice"></a>

```typescript
public readonly ResyncMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the ResyncMFADevice API call.

---

##### `SendDelegationToken`<sup>Required</sup> <a name="SendDelegationToken" id="@cdk_utils/iam.iam.IAMOperations.property.SendDelegationToken"></a>

```typescript
public readonly SendDelegationToken: string[];
```

- *Type:* string[]

IAM actions required for the SendDelegationToken API call.

---

##### `SimulateCustomPolicy`<sup>Required</sup> <a name="SimulateCustomPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.SimulateCustomPolicy"></a>

```typescript
public readonly SimulateCustomPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SimulateCustomPolicy API call.

---

##### `SimulatePrincipalPolicy`<sup>Required</sup> <a name="SimulatePrincipalPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.SimulatePrincipalPolicy"></a>

```typescript
public readonly SimulatePrincipalPolicy: string[];
```

- *Type:* string[]

IAM actions required for the SimulatePrincipalPolicy API call.

---

##### `TagInstanceProfile`<sup>Required</sup> <a name="TagInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.TagInstanceProfile"></a>

```typescript
public readonly TagInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the TagInstanceProfile API call.

---

##### `TagMFADevice`<sup>Required</sup> <a name="TagMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.TagMFADevice"></a>

```typescript
public readonly TagMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the TagMFADevice API call.

---

##### `TagOpenIDConnectProvider`<sup>Required</sup> <a name="TagOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.TagOpenIDConnectProvider"></a>

```typescript
public readonly TagOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the TagOpenIDConnectProvider API call.

---

##### `TagPolicy`<sup>Required</sup> <a name="TagPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.TagPolicy"></a>

```typescript
public readonly TagPolicy: string[];
```

- *Type:* string[]

IAM actions required for the TagPolicy API call.

---

##### `TagRole`<sup>Required</sup> <a name="TagRole" id="@cdk_utils/iam.iam.IAMOperations.property.TagRole"></a>

```typescript
public readonly TagRole: string[];
```

- *Type:* string[]

IAM actions required for the TagRole API call.

---

##### `TagSAMLProvider`<sup>Required</sup> <a name="TagSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.TagSAMLProvider"></a>

```typescript
public readonly TagSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the TagSAMLProvider API call.

---

##### `TagServerCertificate`<sup>Required</sup> <a name="TagServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.TagServerCertificate"></a>

```typescript
public readonly TagServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the TagServerCertificate API call.

---

##### `TagUser`<sup>Required</sup> <a name="TagUser" id="@cdk_utils/iam.iam.IAMOperations.property.TagUser"></a>

```typescript
public readonly TagUser: string[];
```

- *Type:* string[]

IAM actions required for the TagUser API call.

---

##### `UntagInstanceProfile`<sup>Required</sup> <a name="UntagInstanceProfile" id="@cdk_utils/iam.iam.IAMOperations.property.UntagInstanceProfile"></a>

```typescript
public readonly UntagInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the UntagInstanceProfile API call.

---

##### `UntagMFADevice`<sup>Required</sup> <a name="UntagMFADevice" id="@cdk_utils/iam.iam.IAMOperations.property.UntagMFADevice"></a>

```typescript
public readonly UntagMFADevice: string[];
```

- *Type:* string[]

IAM actions required for the UntagMFADevice API call.

---

##### `UntagOpenIDConnectProvider`<sup>Required</sup> <a name="UntagOpenIDConnectProvider" id="@cdk_utils/iam.iam.IAMOperations.property.UntagOpenIDConnectProvider"></a>

```typescript
public readonly UntagOpenIDConnectProvider: string[];
```

- *Type:* string[]

IAM actions required for the UntagOpenIDConnectProvider API call.

---

##### `UntagPolicy`<sup>Required</sup> <a name="UntagPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.UntagPolicy"></a>

```typescript
public readonly UntagPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UntagPolicy API call.

---

##### `UntagRole`<sup>Required</sup> <a name="UntagRole" id="@cdk_utils/iam.iam.IAMOperations.property.UntagRole"></a>

```typescript
public readonly UntagRole: string[];
```

- *Type:* string[]

IAM actions required for the UntagRole API call.

---

##### `UntagSAMLProvider`<sup>Required</sup> <a name="UntagSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.UntagSAMLProvider"></a>

```typescript
public readonly UntagSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the UntagSAMLProvider API call.

---

##### `UntagServerCertificate`<sup>Required</sup> <a name="UntagServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.UntagServerCertificate"></a>

```typescript
public readonly UntagServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UntagServerCertificate API call.

---

##### `UntagUser`<sup>Required</sup> <a name="UntagUser" id="@cdk_utils/iam.iam.IAMOperations.property.UntagUser"></a>

```typescript
public readonly UntagUser: string[];
```

- *Type:* string[]

IAM actions required for the UntagUser API call.

---

##### `UpdateAccessKey`<sup>Required</sup> <a name="UpdateAccessKey" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateAccessKey"></a>

```typescript
public readonly UpdateAccessKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessKey API call.

---

##### `UpdateAccountPasswordPolicy`<sup>Required</sup> <a name="UpdateAccountPasswordPolicy" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateAccountPasswordPolicy"></a>

```typescript
public readonly UpdateAccountPasswordPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountPasswordPolicy API call.

---

##### `UpdateAssumeRolePolicy`<sup>Required</sup> <a name="UpdateAssumeRolePolicy" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateAssumeRolePolicy"></a>

```typescript
public readonly UpdateAssumeRolePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssumeRolePolicy API call.

---

##### `UpdateDelegationRequest`<sup>Required</sup> <a name="UpdateDelegationRequest" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateDelegationRequest"></a>

```typescript
public readonly UpdateDelegationRequest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDelegationRequest API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateLoginProfile`<sup>Required</sup> <a name="UpdateLoginProfile" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateLoginProfile"></a>

```typescript
public readonly UpdateLoginProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoginProfile API call.

---

##### `UpdateOpenIDConnectProviderThumbprint`<sup>Required</sup> <a name="UpdateOpenIDConnectProviderThumbprint" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateOpenIDConnectProviderThumbprint"></a>

```typescript
public readonly UpdateOpenIDConnectProviderThumbprint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOpenIDConnectProviderThumbprint API call.

---

##### `UpdateRole`<sup>Required</sup> <a name="UpdateRole" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateRole"></a>

```typescript
public readonly UpdateRole: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRole API call.

---

##### `UpdateRoleDescription`<sup>Required</sup> <a name="UpdateRoleDescription" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateRoleDescription"></a>

```typescript
public readonly UpdateRoleDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoleDescription API call.

---

##### `UpdateSAMLProvider`<sup>Required</sup> <a name="UpdateSAMLProvider" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateSAMLProvider"></a>

```typescript
public readonly UpdateSAMLProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSAMLProvider API call.

---

##### `UpdateServerCertificate`<sup>Required</sup> <a name="UpdateServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateServerCertificate"></a>

```typescript
public readonly UpdateServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServerCertificate API call.

---

##### `UpdateServiceSpecificCredential`<sup>Required</sup> <a name="UpdateServiceSpecificCredential" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateServiceSpecificCredential"></a>

```typescript
public readonly UpdateServiceSpecificCredential: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSpecificCredential API call.

---

##### `UpdateSigningCertificate`<sup>Required</sup> <a name="UpdateSigningCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateSigningCertificate"></a>

```typescript
public readonly UpdateSigningCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSigningCertificate API call.

---

##### `UpdateSSHPublicKey`<sup>Required</sup> <a name="UpdateSSHPublicKey" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateSSHPublicKey"></a>

```typescript
public readonly UpdateSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSSHPublicKey API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.iam.IAMOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

##### `UploadServerCertificate`<sup>Required</sup> <a name="UploadServerCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.UploadServerCertificate"></a>

```typescript
public readonly UploadServerCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UploadServerCertificate API call.

---

##### `UploadSigningCertificate`<sup>Required</sup> <a name="UploadSigningCertificate" id="@cdk_utils/iam.iam.IAMOperations.property.UploadSigningCertificate"></a>

```typescript
public readonly UploadSigningCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UploadSigningCertificate API call.

---

##### `UploadSSHPublicKey`<sup>Required</sup> <a name="UploadSSHPublicKey" id="@cdk_utils/iam.iam.IAMOperations.property.UploadSSHPublicKey"></a>

```typescript
public readonly UploadSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the UploadSSHPublicKey API call.

---

### IAMResources <a name="IAMResources" id="@cdk_utils/iam.iam.IAMResources"></a>

ARN builders, validators, and parsers for iam resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iam.IAMResources.Initializer"></a>

```typescript
import { iam } from '@cdk_utils/iam'

new iam.IAMResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.accessReport">accessReport</a></code> | Builds an ARN for the access-report resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.assumedRole">assumedRole</a></code> | Builds an ARN for the assumed-role resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.delegationRequest">delegationRequest</a></code> | Builds an ARN for the delegation-request resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.federatedUser">federatedUser</a></code> | Builds an ARN for the federated-user resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.instanceProfile">instanceProfile</a></code> | Builds an ARN for the instance-profile resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidAccessReportArn">isValidAccessReportArn</a></code> | Validates whether a string is a valid ARN for the access-report resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidAssumedRoleArn">isValidAssumedRoleArn</a></code> | Validates whether a string is a valid ARN for the assumed-role resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidDelegationRequestArn">isValidDelegationRequestArn</a></code> | Validates whether a string is a valid ARN for the delegation-request resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidFederatedUserArn">isValidFederatedUserArn</a></code> | Validates whether a string is a valid ARN for the federated-user resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidInstanceProfileArn">isValidInstanceProfileArn</a></code> | Validates whether a string is a valid ARN for the instance-profile resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidMFAArn">isValidMFAArn</a></code> | Validates whether a string is a valid ARN for the mfa resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidOidcProviderArn">isValidOidcProviderArn</a></code> | Validates whether a string is a valid ARN for the oidc-provider resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidRoleArn">isValidRoleArn</a></code> | Validates whether a string is a valid ARN for the role resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidRoleTemplateArn">isValidRoleTemplateArn</a></code> | Validates whether a string is a valid ARN for the role-template resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidSamlProviderArn">isValidSamlProviderArn</a></code> | Validates whether a string is a valid ARN for the saml-provider resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidServerCertificateArn">isValidServerCertificateArn</a></code> | Validates whether a string is a valid ARN for the server-certificate resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidSMSMFAArn">isValidSMSMFAArn</a></code> | Validates whether a string is a valid ARN for the sms-mfa resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.mfa">mfa</a></code> | Builds an ARN for the mfa resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.oidcProvider">oidcProvider</a></code> | Builds an ARN for the oidc-provider resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseAccessReportArn">parseAccessReportArn</a></code> | Parses a access-report ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseAssumedRoleArn">parseAssumedRoleArn</a></code> | Parses a assumed-role ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseDelegationRequestArn">parseDelegationRequestArn</a></code> | Parses a delegation-request ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseFederatedUserArn">parseFederatedUserArn</a></code> | Parses a federated-user ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseInstanceProfileArn">parseInstanceProfileArn</a></code> | Parses a instance-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseMFAArn">parseMFAArn</a></code> | Parses a mfa ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseOidcProviderArn">parseOidcProviderArn</a></code> | Parses a oidc-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseRoleArn">parseRoleArn</a></code> | Parses a role ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseRoleTemplateArn">parseRoleTemplateArn</a></code> | Parses a role-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseSamlProviderArn">parseSamlProviderArn</a></code> | Parses a saml-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseServerCertificateArn">parseServerCertificateArn</a></code> | Parses a server-certificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseSMSMFAArn">parseSMSMFAArn</a></code> | Parses a sms-mfa ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.role">role</a></code> | Builds an ARN for the role resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.roleTemplate">roleTemplate</a></code> | Builds an ARN for the role-template resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.samlProvider">samlProvider</a></code> | Builds an ARN for the saml-provider resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.serverCertificate">serverCertificate</a></code> | Builds an ARN for the server-certificate resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.smsMFA">smsMFA</a></code> | Builds an ARN for the sms-mfa resource. |
| <code><a href="#@cdk_utils/iam.iam.IAMResources.user">user</a></code> | Builds an ARN for the user resource. |

---

##### `accessReport` <a name="accessReport" id="@cdk_utils/iam.iam.IAMResources.accessReport"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.accessReport(props: IAMAccessReportArnProps)
```

Builds an ARN for the access-report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.accessReport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMAccessReportArnProps">IAMAccessReportArnProps</a>

---

##### `assumedRole` <a name="assumedRole" id="@cdk_utils/iam.iam.IAMResources.assumedRole"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.assumedRole(props: IAMAssumedRoleArnProps)
```

Builds an ARN for the assumed-role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.assumedRole.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps">IAMAssumedRoleArnProps</a>

---

##### `delegationRequest` <a name="delegationRequest" id="@cdk_utils/iam.iam.IAMResources.delegationRequest"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.delegationRequest(props: IAMDelegationRequestArnProps)
```

Builds an ARN for the delegation-request resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.delegationRequest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnProps">IAMDelegationRequestArnProps</a>

---

##### `federatedUser` <a name="federatedUser" id="@cdk_utils/iam.iam.IAMResources.federatedUser"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.federatedUser(props: IAMFederatedUserArnProps)
```

Builds an ARN for the federated-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.federatedUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMFederatedUserArnProps">IAMFederatedUserArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.iam.IAMResources.group"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.group(props: IAMGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMGroupArnProps">IAMGroupArnProps</a>

---

##### `instanceProfile` <a name="instanceProfile" id="@cdk_utils/iam.iam.IAMResources.instanceProfile"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.instanceProfile(props: IAMInstanceProfileArnProps)
```

Builds an ARN for the instance-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.instanceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnProps">IAMInstanceProfileArnProps</a>

---

##### `isValidAccessReportArn` <a name="isValidAccessReportArn" id="@cdk_utils/iam.iam.IAMResources.isValidAccessReportArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidAccessReportArn(arn: string)
```

Validates whether a string is a valid ARN for the access-report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidAccessReportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssumedRoleArn` <a name="isValidAssumedRoleArn" id="@cdk_utils/iam.iam.IAMResources.isValidAssumedRoleArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidAssumedRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the assumed-role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidAssumedRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDelegationRequestArn` <a name="isValidDelegationRequestArn" id="@cdk_utils/iam.iam.IAMResources.isValidDelegationRequestArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidDelegationRequestArn(arn: string)
```

Validates whether a string is a valid ARN for the delegation-request resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidDelegationRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFederatedUserArn` <a name="isValidFederatedUserArn" id="@cdk_utils/iam.iam.IAMResources.isValidFederatedUserArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidFederatedUserArn(arn: string)
```

Validates whether a string is a valid ARN for the federated-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidFederatedUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.iam.IAMResources.isValidGroupArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceProfileArn` <a name="isValidInstanceProfileArn" id="@cdk_utils/iam.iam.IAMResources.isValidInstanceProfileArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidInstanceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the instance-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidInstanceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMFAArn` <a name="isValidMFAArn" id="@cdk_utils/iam.iam.IAMResources.isValidMFAArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidMFAArn(arn: string)
```

Validates whether a string is a valid ARN for the mfa resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidMFAArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOidcProviderArn` <a name="isValidOidcProviderArn" id="@cdk_utils/iam.iam.IAMResources.isValidOidcProviderArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidOidcProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the oidc-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidOidcProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.iam.IAMResources.isValidPolicyArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoleArn` <a name="isValidRoleArn" id="@cdk_utils/iam.iam.IAMResources.isValidRoleArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoleTemplateArn` <a name="isValidRoleTemplateArn" id="@cdk_utils/iam.iam.IAMResources.isValidRoleTemplateArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidRoleTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the role-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidRoleTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSamlProviderArn` <a name="isValidSamlProviderArn" id="@cdk_utils/iam.iam.IAMResources.isValidSamlProviderArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidSamlProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the saml-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidSamlProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServerCertificateArn` <a name="isValidServerCertificateArn" id="@cdk_utils/iam.iam.IAMResources.isValidServerCertificateArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidServerCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the server-certificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidServerCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSMSMFAArn` <a name="isValidSMSMFAArn" id="@cdk_utils/iam.iam.IAMResources.isValidSMSMFAArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidSMSMFAArn(arn: string)
```

Validates whether a string is a valid ARN for the sms-mfa resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidSMSMFAArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.iam.IAMResources.isValidUserArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `mfa` <a name="mfa" id="@cdk_utils/iam.iam.IAMResources.mfa"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.mfa(props: IAMMFAArnProps)
```

Builds an ARN for the mfa resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.mfa.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMMFAArnProps">IAMMFAArnProps</a>

---

##### `oidcProvider` <a name="oidcProvider" id="@cdk_utils/iam.iam.IAMResources.oidcProvider"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.oidcProvider(props: IAMOidcProviderArnProps)
```

Builds an ARN for the oidc-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.oidcProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMOidcProviderArnProps">IAMOidcProviderArnProps</a>

---

##### `parseAccessReportArn` <a name="parseAccessReportArn" id="@cdk_utils/iam.iam.IAMResources.parseAccessReportArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseAccessReportArn(arn: string)
```

Parses a access-report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseAccessReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssumedRoleArn` <a name="parseAssumedRoleArn" id="@cdk_utils/iam.iam.IAMResources.parseAssumedRoleArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseAssumedRoleArn(arn: string)
```

Parses a assumed-role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseAssumedRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDelegationRequestArn` <a name="parseDelegationRequestArn" id="@cdk_utils/iam.iam.IAMResources.parseDelegationRequestArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseDelegationRequestArn(arn: string)
```

Parses a delegation-request ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseDelegationRequestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFederatedUserArn` <a name="parseFederatedUserArn" id="@cdk_utils/iam.iam.IAMResources.parseFederatedUserArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseFederatedUserArn(arn: string)
```

Parses a federated-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseFederatedUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.iam.IAMResources.parseGroupArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceProfileArn` <a name="parseInstanceProfileArn" id="@cdk_utils/iam.iam.IAMResources.parseInstanceProfileArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseInstanceProfileArn(arn: string)
```

Parses a instance-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseInstanceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMFAArn` <a name="parseMFAArn" id="@cdk_utils/iam.iam.IAMResources.parseMFAArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseMFAArn(arn: string)
```

Parses a mfa ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseMFAArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOidcProviderArn` <a name="parseOidcProviderArn" id="@cdk_utils/iam.iam.IAMResources.parseOidcProviderArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseOidcProviderArn(arn: string)
```

Parses a oidc-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseOidcProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.iam.IAMResources.parsePolicyArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoleArn` <a name="parseRoleArn" id="@cdk_utils/iam.iam.IAMResources.parseRoleArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseRoleArn(arn: string)
```

Parses a role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoleTemplateArn` <a name="parseRoleTemplateArn" id="@cdk_utils/iam.iam.IAMResources.parseRoleTemplateArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseRoleTemplateArn(arn: string)
```

Parses a role-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseRoleTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSamlProviderArn` <a name="parseSamlProviderArn" id="@cdk_utils/iam.iam.IAMResources.parseSamlProviderArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseSamlProviderArn(arn: string)
```

Parses a saml-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseSamlProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServerCertificateArn` <a name="parseServerCertificateArn" id="@cdk_utils/iam.iam.IAMResources.parseServerCertificateArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseServerCertificateArn(arn: string)
```

Parses a server-certificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseServerCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSMSMFAArn` <a name="parseSMSMFAArn" id="@cdk_utils/iam.iam.IAMResources.parseSMSMFAArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseSMSMFAArn(arn: string)
```

Parses a sms-mfa ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseSMSMFAArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.iam.IAMResources.parseUserArn"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iam.IAMResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.iam.IAMResources.policy"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.policy(props: IAMPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMPolicyArnProps">IAMPolicyArnProps</a>

---

##### `role` <a name="role" id="@cdk_utils/iam.iam.IAMResources.role"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.role(props: IAMRoleArnProps)
```

Builds an ARN for the role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.role.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMRoleArnProps">IAMRoleArnProps</a>

---

##### `roleTemplate` <a name="roleTemplate" id="@cdk_utils/iam.iam.IAMResources.roleTemplate"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.roleTemplate(props: IAMRoleTemplateArnProps)
```

Builds an ARN for the role-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.roleTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps">IAMRoleTemplateArnProps</a>

---

##### `samlProvider` <a name="samlProvider" id="@cdk_utils/iam.iam.IAMResources.samlProvider"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.samlProvider(props: IAMSamlProviderArnProps)
```

Builds an ARN for the saml-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.samlProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMSamlProviderArnProps">IAMSamlProviderArnProps</a>

---

##### `serverCertificate` <a name="serverCertificate" id="@cdk_utils/iam.iam.IAMResources.serverCertificate"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.serverCertificate(props: IAMServerCertificateArnProps)
```

Builds an ARN for the server-certificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.serverCertificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMServerCertificateArnProps">IAMServerCertificateArnProps</a>

---

##### `smsMFA` <a name="smsMFA" id="@cdk_utils/iam.iam.IAMResources.smsMFA"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.smsMFA(props: IAMSMSMFAArnProps)
```

Builds an ARN for the sms-mfa resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.smsMFA.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMSMSMFAArnProps">IAMSMSMFAArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.iam.IAMResources.user"></a>

```typescript
import { iam } from '@cdk_utils/iam'

iam.IAMResources.user(props: IAMUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iam.IAMResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iam.IAMUserArnProps">IAMUserArnProps</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IAMAccessReportArnComponents <a name="IAMAccessReportArnComponents" id="@cdk_utils/iam.iam.IAMAccessReportArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMAccessReportArnComponents">IAMAccessReportArnComponents</a>

Parsed components of a access-report ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.entityPath">entityPath</a></code> | <code>string</code> | The EntityPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `entityPath`<sup>Required</sup> <a name="entityPath" id="@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.entityPath"></a>

```typescript
public readonly entityPath: string;
```

- *Type:* string

The EntityPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMAccessReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMAccessReportArnProps <a name="IAMAccessReportArnProps" id="@cdk_utils/iam.iam.IAMAccessReportArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMAccessReportArnProps">IAMAccessReportArnProps</a>

Properties for building a access-report ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnProps.property.entityPath">entityPath</a></code> | <code>string</code> | The EntityPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMAccessReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `entityPath`<sup>Required</sup> <a name="entityPath" id="@cdk_utils/iam.iam.IAMAccessReportArnProps.property.entityPath"></a>

```typescript
public readonly entityPath: string;
```

- *Type:* string

The EntityPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMAccessReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMAccessReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMAssumedRoleArnComponents <a name="IAMAssumedRoleArnComponents" id="@cdk_utils/iam.iam.IAMAssumedRoleArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnComponents">IAMAssumedRoleArnComponents</a>

Parsed components of a assumed-role ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | The RoleSessionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component.

---

##### `roleSessionName`<sup>Required</sup> <a name="roleSessionName" id="@cdk_utils/iam.iam.IAMAssumedRoleArnComponents.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

The RoleSessionName component.

---

### IAMAssumedRoleArnProps <a name="IAMAssumedRoleArnProps" id="@cdk_utils/iam.iam.IAMAssumedRoleArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps">IAMAssumedRoleArnProps</a>

Properties for building a assumed-role ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | The RoleSessionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component of the ARN.

---

##### `roleSessionName`<sup>Required</sup> <a name="roleSessionName" id="@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

The RoleSessionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMAssumedRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMDelegationRequestArnComponents <a name="IAMDelegationRequestArnComponents" id="@cdk_utils/iam.iam.IAMDelegationRequestArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnComponents">IAMDelegationRequestArnComponents</a>

Parsed components of a delegation-request ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.delegationRequestId">delegationRequestId</a></code> | <code>string</code> | The DelegationRequestId component. |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `delegationRequestId`<sup>Required</sup> <a name="delegationRequestId" id="@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.delegationRequestId"></a>

```typescript
public readonly delegationRequestId: string;
```

- *Type:* string

The DelegationRequestId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMDelegationRequestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMDelegationRequestArnProps <a name="IAMDelegationRequestArnProps" id="@cdk_utils/iam.iam.IAMDelegationRequestArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnProps">IAMDelegationRequestArnProps</a>

Properties for building a delegation-request ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.delegationRequestId">delegationRequestId</a></code> | <code>string</code> | The DelegationRequestId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `delegationRequestId`<sup>Required</sup> <a name="delegationRequestId" id="@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.delegationRequestId"></a>

```typescript
public readonly delegationRequestId: string;
```

- *Type:* string

The DelegationRequestId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMDelegationRequestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMFederatedUserArnComponents <a name="IAMFederatedUserArnComponents" id="@cdk_utils/iam.iam.IAMFederatedUserArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMFederatedUserArnComponents">IAMFederatedUserArnComponents</a>

Parsed components of a federated-user ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.userName">userName</a></code> | <code>string</code> | The UserName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.iam.IAMFederatedUserArnComponents.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component.

---

### IAMFederatedUserArnProps <a name="IAMFederatedUserArnProps" id="@cdk_utils/iam.iam.IAMFederatedUserArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMFederatedUserArnProps">IAMFederatedUserArnProps</a>

Properties for building a federated-user ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.userName">userName</a></code> | <code>string</code> | The UserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMFederatedUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMGroupArnComponents <a name="IAMGroupArnComponents" id="@cdk_utils/iam.iam.IAMGroupArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMGroupArnComponents">IAMGroupArnComponents</a>

Parsed components of a group ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnComponents.property.groupNameWithPath">groupNameWithPath</a></code> | <code>string</code> | The GroupNameWithPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupNameWithPath`<sup>Required</sup> <a name="groupNameWithPath" id="@cdk_utils/iam.iam.IAMGroupArnComponents.property.groupNameWithPath"></a>

```typescript
public readonly groupNameWithPath: string;
```

- *Type:* string

The GroupNameWithPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMGroupArnProps <a name="IAMGroupArnProps" id="@cdk_utils/iam.iam.IAMGroupArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMGroupArnProps">IAMGroupArnProps</a>

Properties for building a group ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnProps.property.groupNameWithPath">groupNameWithPath</a></code> | <code>string</code> | The GroupNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `groupNameWithPath`<sup>Required</sup> <a name="groupNameWithPath" id="@cdk_utils/iam.iam.IAMGroupArnProps.property.groupNameWithPath"></a>

```typescript
public readonly groupNameWithPath: string;
```

- *Type:* string

The GroupNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMInstanceProfileArnComponents <a name="IAMInstanceProfileArnComponents" id="@cdk_utils/iam.iam.IAMInstanceProfileArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnComponents">IAMInstanceProfileArnComponents</a>

Parsed components of a instance-profile ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.instanceProfileNameWithPath">instanceProfileNameWithPath</a></code> | <code>string</code> | The InstanceProfileNameWithPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceProfileNameWithPath`<sup>Required</sup> <a name="instanceProfileNameWithPath" id="@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.instanceProfileNameWithPath"></a>

```typescript
public readonly instanceProfileNameWithPath: string;
```

- *Type:* string

The InstanceProfileNameWithPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMInstanceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMInstanceProfileArnProps <a name="IAMInstanceProfileArnProps" id="@cdk_utils/iam.iam.IAMInstanceProfileArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnProps">IAMInstanceProfileArnProps</a>

Properties for building a instance-profile ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.instanceProfileNameWithPath">instanceProfileNameWithPath</a></code> | <code>string</code> | The InstanceProfileNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `instanceProfileNameWithPath`<sup>Required</sup> <a name="instanceProfileNameWithPath" id="@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.instanceProfileNameWithPath"></a>

```typescript
public readonly instanceProfileNameWithPath: string;
```

- *Type:* string

The InstanceProfileNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMInstanceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMMFAArnComponents <a name="IAMMFAArnComponents" id="@cdk_utils/iam.iam.IAMMFAArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMMFAArnComponents">IAMMFAArnComponents</a>

Parsed components of a mfa ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnComponents.property.mfaTokenIdWithPath">mfaTokenIdWithPath</a></code> | <code>string</code> | The MfaTokenIdWithPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMMFAArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mfaTokenIdWithPath`<sup>Required</sup> <a name="mfaTokenIdWithPath" id="@cdk_utils/iam.iam.IAMMFAArnComponents.property.mfaTokenIdWithPath"></a>

```typescript
public readonly mfaTokenIdWithPath: string;
```

- *Type:* string

The MfaTokenIdWithPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMMFAArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMMFAArnProps <a name="IAMMFAArnProps" id="@cdk_utils/iam.iam.IAMMFAArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMMFAArnProps">IAMMFAArnProps</a>

Properties for building a mfa ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnProps.property.mfaTokenIdWithPath">mfaTokenIdWithPath</a></code> | <code>string</code> | The MfaTokenIdWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMMFAArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `mfaTokenIdWithPath`<sup>Required</sup> <a name="mfaTokenIdWithPath" id="@cdk_utils/iam.iam.IAMMFAArnProps.property.mfaTokenIdWithPath"></a>

```typescript
public readonly mfaTokenIdWithPath: string;
```

- *Type:* string

The MfaTokenIdWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMMFAArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMMFAArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMOidcProviderArnComponents <a name="IAMOidcProviderArnComponents" id="@cdk_utils/iam.iam.IAMOidcProviderArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMOidcProviderArnComponents">IAMOidcProviderArnComponents</a>

Parsed components of a oidc-provider ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.oidcProviderName">oidcProviderName</a></code> | <code>string</code> | The OidcProviderName component. |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `oidcProviderName`<sup>Required</sup> <a name="oidcProviderName" id="@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.oidcProviderName"></a>

```typescript
public readonly oidcProviderName: string;
```

- *Type:* string

The OidcProviderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMOidcProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMOidcProviderArnProps <a name="IAMOidcProviderArnProps" id="@cdk_utils/iam.iam.IAMOidcProviderArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMOidcProviderArnProps">IAMOidcProviderArnProps</a>

Properties for building a oidc-provider ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.oidcProviderName">oidcProviderName</a></code> | <code>string</code> | The OidcProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `oidcProviderName`<sup>Required</sup> <a name="oidcProviderName" id="@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.oidcProviderName"></a>

```typescript
public readonly oidcProviderName: string;
```

- *Type:* string

The OidcProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMOidcProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMPolicyArnComponents <a name="IAMPolicyArnComponents" id="@cdk_utils/iam.iam.IAMPolicyArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMPolicyArnComponents">IAMPolicyArnComponents</a>

Parsed components of a policy ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnComponents.property.policyNameWithPath">policyNameWithPath</a></code> | <code>string</code> | The PolicyNameWithPath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyNameWithPath`<sup>Required</sup> <a name="policyNameWithPath" id="@cdk_utils/iam.iam.IAMPolicyArnComponents.property.policyNameWithPath"></a>

```typescript
public readonly policyNameWithPath: string;
```

- *Type:* string

The PolicyNameWithPath component.

---

### IAMPolicyArnProps <a name="IAMPolicyArnProps" id="@cdk_utils/iam.iam.IAMPolicyArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMPolicyArnProps">IAMPolicyArnProps</a>

Properties for building a policy ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnProps.property.policyNameWithPath">policyNameWithPath</a></code> | <code>string</code> | The PolicyNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `policyNameWithPath`<sup>Required</sup> <a name="policyNameWithPath" id="@cdk_utils/iam.iam.IAMPolicyArnProps.property.policyNameWithPath"></a>

```typescript
public readonly policyNameWithPath: string;
```

- *Type:* string

The PolicyNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMRoleArnComponents <a name="IAMRoleArnComponents" id="@cdk_utils/iam.iam.IAMRoleArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMRoleArnComponents">IAMRoleArnComponents</a>

Parsed components of a role ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnComponents.property.roleNameWithPath">roleNameWithPath</a></code> | <code>string</code> | The RoleNameWithPath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `roleNameWithPath`<sup>Required</sup> <a name="roleNameWithPath" id="@cdk_utils/iam.iam.IAMRoleArnComponents.property.roleNameWithPath"></a>

```typescript
public readonly roleNameWithPath: string;
```

- *Type:* string

The RoleNameWithPath component.

---

### IAMRoleArnProps <a name="IAMRoleArnProps" id="@cdk_utils/iam.iam.IAMRoleArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMRoleArnProps">IAMRoleArnProps</a>

Properties for building a role ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnProps.property.roleNameWithPath">roleNameWithPath</a></code> | <code>string</code> | The RoleNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `roleNameWithPath`<sup>Required</sup> <a name="roleNameWithPath" id="@cdk_utils/iam.iam.IAMRoleArnProps.property.roleNameWithPath"></a>

```typescript
public readonly roleNameWithPath: string;
```

- *Type:* string

The RoleNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMRoleTemplateArnComponents <a name="IAMRoleTemplateArnComponents" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents">IAMRoleTemplateArnComponents</a>

Parsed components of a role-template ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.awsServicePrincipal">awsServicePrincipal</a></code> | <code>string</code> | The AWSServicePrincipal component. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.roleTemplateMajorVersion">roleTemplateMajorVersion</a></code> | <code>string</code> | The RoleTemplateMajorVersion component. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.roleTemplateName">roleTemplateName</a></code> | <code>string</code> | The RoleTemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `awsServicePrincipal`<sup>Required</sup> <a name="awsServicePrincipal" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.awsServicePrincipal"></a>

```typescript
public readonly awsServicePrincipal: string;
```

- *Type:* string

The AWSServicePrincipal component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `roleTemplateMajorVersion`<sup>Required</sup> <a name="roleTemplateMajorVersion" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.roleTemplateMajorVersion"></a>

```typescript
public readonly roleTemplateMajorVersion: string;
```

- *Type:* string

The RoleTemplateMajorVersion component.

---

##### `roleTemplateName`<sup>Required</sup> <a name="roleTemplateName" id="@cdk_utils/iam.iam.IAMRoleTemplateArnComponents.property.roleTemplateName"></a>

```typescript
public readonly roleTemplateName: string;
```

- *Type:* string

The RoleTemplateName component.

---

### IAMRoleTemplateArnProps <a name="IAMRoleTemplateArnProps" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps">IAMRoleTemplateArnProps</a>

Properties for building a role-template ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.awsServicePrincipal">awsServicePrincipal</a></code> | <code>string</code> | The AWSServicePrincipal component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.roleTemplateMajorVersion">roleTemplateMajorVersion</a></code> | <code>string</code> | The RoleTemplateMajorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.roleTemplateName">roleTemplateName</a></code> | <code>string</code> | The RoleTemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `awsServicePrincipal`<sup>Required</sup> <a name="awsServicePrincipal" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.awsServicePrincipal"></a>

```typescript
public readonly awsServicePrincipal: string;
```

- *Type:* string

The AWSServicePrincipal component of the ARN.

---

##### `roleTemplateMajorVersion`<sup>Required</sup> <a name="roleTemplateMajorVersion" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.roleTemplateMajorVersion"></a>

```typescript
public readonly roleTemplateMajorVersion: string;
```

- *Type:* string

The RoleTemplateMajorVersion component of the ARN.

---

##### `roleTemplateName`<sup>Required</sup> <a name="roleTemplateName" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.roleTemplateName"></a>

```typescript
public readonly roleTemplateName: string;
```

- *Type:* string

The RoleTemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iam.IAMRoleTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IAMSamlProviderArnComponents <a name="IAMSamlProviderArnComponents" id="@cdk_utils/iam.iam.IAMSamlProviderArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMSamlProviderArnComponents">IAMSamlProviderArnComponents</a>

Parsed components of a saml-provider ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.samlProviderName">samlProviderName</a></code> | <code>string</code> | The SamlProviderName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `samlProviderName`<sup>Required</sup> <a name="samlProviderName" id="@cdk_utils/iam.iam.IAMSamlProviderArnComponents.property.samlProviderName"></a>

```typescript
public readonly samlProviderName: string;
```

- *Type:* string

The SamlProviderName component.

---

### IAMSamlProviderArnProps <a name="IAMSamlProviderArnProps" id="@cdk_utils/iam.iam.IAMSamlProviderArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMSamlProviderArnProps">IAMSamlProviderArnProps</a>

Properties for building a saml-provider ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.samlProviderName">samlProviderName</a></code> | <code>string</code> | The SamlProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `samlProviderName`<sup>Required</sup> <a name="samlProviderName" id="@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.samlProviderName"></a>

```typescript
public readonly samlProviderName: string;
```

- *Type:* string

The SamlProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMSamlProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMServerCertificateArnComponents <a name="IAMServerCertificateArnComponents" id="@cdk_utils/iam.iam.IAMServerCertificateArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMServerCertificateArnComponents">IAMServerCertificateArnComponents</a>

Parsed components of a server-certificate ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.certificateNameWithPath">certificateNameWithPath</a></code> | <code>string</code> | The CertificateNameWithPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateNameWithPath`<sup>Required</sup> <a name="certificateNameWithPath" id="@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.certificateNameWithPath"></a>

```typescript
public readonly certificateNameWithPath: string;
```

- *Type:* string

The CertificateNameWithPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMServerCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMServerCertificateArnProps <a name="IAMServerCertificateArnProps" id="@cdk_utils/iam.iam.IAMServerCertificateArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMServerCertificateArnProps">IAMServerCertificateArnProps</a>

Properties for building a server-certificate ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.certificateNameWithPath">certificateNameWithPath</a></code> | <code>string</code> | The CertificateNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `certificateNameWithPath`<sup>Required</sup> <a name="certificateNameWithPath" id="@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.certificateNameWithPath"></a>

```typescript
public readonly certificateNameWithPath: string;
```

- *Type:* string

The CertificateNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMServerCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMSMSMFAArnComponents <a name="IAMSMSMFAArnComponents" id="@cdk_utils/iam.iam.IAMSMSMFAArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMSMSMFAArnComponents">IAMSMSMFAArnComponents</a>

Parsed components of a sms-mfa ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.mfaTokenIdWithPath">mfaTokenIdWithPath</a></code> | <code>string</code> | The MfaTokenIdWithPath component. |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mfaTokenIdWithPath`<sup>Required</sup> <a name="mfaTokenIdWithPath" id="@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.mfaTokenIdWithPath"></a>

```typescript
public readonly mfaTokenIdWithPath: string;
```

- *Type:* string

The MfaTokenIdWithPath component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMSMSMFAArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IAMSMSMFAArnProps <a name="IAMSMSMFAArnProps" id="@cdk_utils/iam.iam.IAMSMSMFAArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMSMSMFAArnProps">IAMSMSMFAArnProps</a>

Properties for building a sms-mfa ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.mfaTokenIdWithPath">mfaTokenIdWithPath</a></code> | <code>string</code> | The MfaTokenIdWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `mfaTokenIdWithPath`<sup>Required</sup> <a name="mfaTokenIdWithPath" id="@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.mfaTokenIdWithPath"></a>

```typescript
public readonly mfaTokenIdWithPath: string;
```

- *Type:* string

The MfaTokenIdWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMSMSMFAArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IAMUserArnComponents <a name="IAMUserArnComponents" id="@cdk_utils/iam.iam.IAMUserArnComponents"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMUserArnComponents">IAMUserArnComponents</a>

Parsed components of a user ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnComponents.property.userNameWithPath">userNameWithPath</a></code> | <code>string</code> | The UserNameWithPath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iam.IAMUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `userNameWithPath`<sup>Required</sup> <a name="userNameWithPath" id="@cdk_utils/iam.iam.IAMUserArnComponents.property.userNameWithPath"></a>

```typescript
public readonly userNameWithPath: string;
```

- *Type:* string

The UserNameWithPath component.

---

### IAMUserArnProps <a name="IAMUserArnProps" id="@cdk_utils/iam.iam.IAMUserArnProps"></a>

- *Implemented By:* <a href="#@cdk_utils/iam.iam.IAMUserArnProps">IAMUserArnProps</a>

Properties for building a user ARN.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnProps.property.userNameWithPath">userNameWithPath</a></code> | <code>string</code> | The UserNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iam.IAMUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `userNameWithPath`<sup>Required</sup> <a name="userNameWithPath" id="@cdk_utils/iam.iam.IAMUserArnProps.property.userNameWithPath"></a>

```typescript
public readonly userNameWithPath: string;
```

- *Type:* string

The UserNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iam.IAMUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iam.IAMUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

