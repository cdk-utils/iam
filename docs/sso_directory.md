# `sso_directory` Submodule <a name="`sso_directory` Submodule" id="@cdk_utils/iam.sso_directory"></a>



## Classes <a name="Classes" id="Classes"></a>

### SSODirectoryActions <a name="SSODirectoryActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions"></a>

IAM action constants for the sso-directory service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.Initializer"></a>

```typescript
import { sso_directory } from '@cdk_utils/iam'

new sso_directory.SSODirectoryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetAWSSPConfigurationForDirectory">actionGetAWSSPConfigurationForDirectory</a></code> | <code>string</code> | [Read] sso-directory:GetAWSSPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetGroupId">actionGetGroupId</a></code> | <code>string</code> | [Read] sso-directory:GetGroupId. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetUserId">actionGetUserId</a></code> | <code>string</code> | [Read] sso-directory:GetUserId. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetUserPoolInfo">actionGetUserPoolInfo</a></code> | <code>string</code> | [Read] sso-directory:GetUserPoolInfo. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AddMemberToGroup">AddMemberToGroup</a></code> | <code>string</code> | [Write] sso-directory:AddMemberToGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CompleteVirtualMfaDeviceRegistration">CompleteVirtualMfaDeviceRegistration</a></code> | <code>string</code> | [Write] sso-directory:CompleteVirtualMfaDeviceRegistration. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CompleteWebAuthnDeviceRegistration">CompleteWebAuthnDeviceRegistration</a></code> | <code>string</code> | [Write] sso-directory:CompleteWebAuthnDeviceRegistration. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateAlias">CreateAlias</a></code> | <code>string</code> | [Write] sso-directory:CreateAlias. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateBearerToken">CreateBearerToken</a></code> | <code>string</code> | [Write] sso-directory:CreateBearerToken. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateExternalIdPConfigurationForDirectory">CreateExternalIdPConfigurationForDirectory</a></code> | <code>string</code> | [Write] sso-directory:CreateExternalIdPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] sso-directory:CreateGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateProvisioningTenant">CreateProvisioningTenant</a></code> | <code>string</code> | [Write] sso-directory:CreateProvisioningTenant. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] sso-directory:CreateUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteBearerToken">DeleteBearerToken</a></code> | <code>string</code> | [Write] sso-directory:DeleteBearerToken. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteExternalIdPCertificate">DeleteExternalIdPCertificate</a></code> | <code>string</code> | [Write] sso-directory:DeleteExternalIdPCertificate. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteExternalIdPConfigurationForDirectory">DeleteExternalIdPConfigurationForDirectory</a></code> | <code>string</code> | [Write] sso-directory:DeleteExternalIdPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] sso-directory:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteMfaDeviceForUser">DeleteMfaDeviceForUser</a></code> | <code>string</code> | [Write] sso-directory:DeleteMfaDeviceForUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteProvisioningTenant">DeleteProvisioningTenant</a></code> | <code>string</code> | [Write] sso-directory:DeleteProvisioningTenant. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] sso-directory:DeleteUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeDirectory">DescribeDirectory</a></code> | <code>string</code> | [Read] sso-directory:DescribeDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [Read] sso-directory:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeGroups">DescribeGroups</a></code> | <code>string</code> | [Read] sso-directory:DescribeGroups. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeProvisioningTenant">DescribeProvisioningTenant</a></code> | <code>string</code> | [Read] sso-directory:DescribeProvisioningTenant. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] sso-directory:DescribeUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUserByUniqueAttribute">DescribeUserByUniqueAttribute</a></code> | <code>string</code> | [Read] sso-directory:DescribeUserByUniqueAttribute. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUsers">DescribeUsers</a></code> | <code>string</code> | [Read] sso-directory:DescribeUsers. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DisableExternalIdPConfigurationForDirectory">DisableExternalIdPConfigurationForDirectory</a></code> | <code>string</code> | [Write] sso-directory:DisableExternalIdPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DisableUser">DisableUser</a></code> | <code>string</code> | [Write] sso-directory:DisableUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.EnableExternalIdPConfigurationForDirectory">EnableExternalIdPConfigurationForDirectory</a></code> | <code>string</code> | [Write] sso-directory:EnableExternalIdPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.EnableUser">EnableUser</a></code> | <code>string</code> | [Write] sso-directory:EnableUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ImportExternalIdPCertificate">ImportExternalIdPCertificate</a></code> | <code>string</code> | [Write] sso-directory:ImportExternalIdPCertificate. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.IsMemberInGroup">IsMemberInGroup</a></code> | <code>string</code> | [Read] sso-directory:IsMemberInGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.IsMemberInGroups">IsMemberInGroups</a></code> | <code>string</code> | [Read] sso-directory:IsMemberInGroups. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListBearerTokens">ListBearerTokens</a></code> | <code>string</code> | [Read] sso-directory:ListBearerTokens. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListExternalIdPCertificates">ListExternalIdPCertificates</a></code> | <code>string</code> | [Read] sso-directory:ListExternalIdPCertificates. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListExternalIdPConfigurationsForDirectory">ListExternalIdPConfigurationsForDirectory</a></code> | <code>string</code> | [Read] sso-directory:ListExternalIdPConfigurationsForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [Read] sso-directory:ListGroups. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroupsForMember">ListGroupsForMember</a></code> | <code>string</code> | [Read] sso-directory:ListGroupsForMember. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroupsForUser">ListGroupsForUser</a></code> | <code>string</code> | [Read] sso-directory:ListGroupsForUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListMembersInGroup">ListMembersInGroup</a></code> | <code>string</code> | [Read] sso-directory:ListMembersInGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListMfaDevicesForUser">ListMfaDevicesForUser</a></code> | <code>string</code> | [Read] sso-directory:ListMfaDevicesForUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListProvisioningTenants">ListProvisioningTenants</a></code> | <code>string</code> | [Read] sso-directory:ListProvisioningTenants. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [Read] sso-directory:ListUsers. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.RemoveMemberFromGroup">RemoveMemberFromGroup</a></code> | <code>string</code> | [Write] sso-directory:RemoveMemberFromGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SearchGroups">SearchGroups</a></code> | <code>string</code> | [Read] sso-directory:SearchGroups. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [Read] sso-directory:SearchUsers. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.StartVirtualMfaDeviceRegistration">StartVirtualMfaDeviceRegistration</a></code> | <code>string</code> | [Write] sso-directory:StartVirtualMfaDeviceRegistration. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.StartWebAuthnDeviceRegistration">StartWebAuthnDeviceRegistration</a></code> | <code>string</code> | [Write] sso-directory:StartWebAuthnDeviceRegistration. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateExternalIdPConfigurationForDirectory">UpdateExternalIdPConfigurationForDirectory</a></code> | <code>string</code> | [Write] sso-directory:UpdateExternalIdPConfigurationForDirectory. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] sso-directory:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateGroupDisplayName">UpdateGroupDisplayName</a></code> | <code>string</code> | [Write] sso-directory:UpdateGroupDisplayName. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateMfaDeviceForUser">UpdateMfaDeviceForUser</a></code> | <code>string</code> | [Write] sso-directory:UpdateMfaDeviceForUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdatePassword">UpdatePassword</a></code> | <code>string</code> | [Write] sso-directory:UpdatePassword. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] sso-directory:UpdateUser. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateUserName">UpdateUserName</a></code> | <code>string</code> | [Write] sso-directory:UpdateUserName. |
| <code><a href="#@cdk_utils/iam.sso_directory.SSODirectoryActions.property.VerifyEmail">VerifyEmail</a></code> | <code>string</code> | [Write] sso-directory:VerifyEmail. |

---

##### `actionGetAWSSPConfigurationForDirectory`<sup>Required</sup> <a name="actionGetAWSSPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetAWSSPConfigurationForDirectory"></a>

```typescript
public readonly actionGetAWSSPConfigurationForDirectory: string;
```

- *Type:* string

[Read] sso-directory:GetAWSSPConfigurationForDirectory.

---

##### `actionGetGroupId`<sup>Required</sup> <a name="actionGetGroupId" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetGroupId"></a>

```typescript
public readonly actionGetGroupId: string;
```

- *Type:* string

[Read] sso-directory:GetGroupId.

---

##### `actionGetUserId`<sup>Required</sup> <a name="actionGetUserId" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetUserId"></a>

```typescript
public readonly actionGetUserId: string;
```

- *Type:* string

[Read] sso-directory:GetUserId.

---

##### `actionGetUserPoolInfo`<sup>Required</sup> <a name="actionGetUserPoolInfo" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.actionGetUserPoolInfo"></a>

```typescript
public readonly actionGetUserPoolInfo: string;
```

- *Type:* string

[Read] sso-directory:GetUserPoolInfo.

---

##### `AddMemberToGroup`<sup>Required</sup> <a name="AddMemberToGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AddMemberToGroup"></a>

```typescript
public readonly AddMemberToGroup: string;
```

- *Type:* string

[Write] sso-directory:AddMemberToGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CompleteVirtualMfaDeviceRegistration`<sup>Required</sup> <a name="CompleteVirtualMfaDeviceRegistration" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CompleteVirtualMfaDeviceRegistration"></a>

```typescript
public readonly CompleteVirtualMfaDeviceRegistration: string;
```

- *Type:* string

[Write] sso-directory:CompleteVirtualMfaDeviceRegistration.

---

##### `CompleteWebAuthnDeviceRegistration`<sup>Required</sup> <a name="CompleteWebAuthnDeviceRegistration" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CompleteWebAuthnDeviceRegistration"></a>

```typescript
public readonly CompleteWebAuthnDeviceRegistration: string;
```

- *Type:* string

[Write] sso-directory:CompleteWebAuthnDeviceRegistration.

---

##### `CreateAlias`<sup>Required</sup> <a name="CreateAlias" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateAlias"></a>

```typescript
public readonly CreateAlias: string;
```

- *Type:* string

[Write] sso-directory:CreateAlias.

---

##### `CreateBearerToken`<sup>Required</sup> <a name="CreateBearerToken" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateBearerToken"></a>

```typescript
public readonly CreateBearerToken: string;
```

- *Type:* string

[Write] sso-directory:CreateBearerToken.

---

##### `CreateExternalIdPConfigurationForDirectory`<sup>Required</sup> <a name="CreateExternalIdPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateExternalIdPConfigurationForDirectory"></a>

```typescript
public readonly CreateExternalIdPConfigurationForDirectory: string;
```

- *Type:* string

[Write] sso-directory:CreateExternalIdPConfigurationForDirectory.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] sso-directory:CreateGroup.

---

##### `CreateProvisioningTenant`<sup>Required</sup> <a name="CreateProvisioningTenant" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateProvisioningTenant"></a>

```typescript
public readonly CreateProvisioningTenant: string;
```

- *Type:* string

[Write] sso-directory:CreateProvisioningTenant.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] sso-directory:CreateUser.

---

##### `DeleteBearerToken`<sup>Required</sup> <a name="DeleteBearerToken" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteBearerToken"></a>

```typescript
public readonly DeleteBearerToken: string;
```

- *Type:* string

[Write] sso-directory:DeleteBearerToken.

---

##### `DeleteExternalIdPCertificate`<sup>Required</sup> <a name="DeleteExternalIdPCertificate" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteExternalIdPCertificate"></a>

```typescript
public readonly DeleteExternalIdPCertificate: string;
```

- *Type:* string

[Write] sso-directory:DeleteExternalIdPCertificate.

---

##### `DeleteExternalIdPConfigurationForDirectory`<sup>Required</sup> <a name="DeleteExternalIdPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteExternalIdPConfigurationForDirectory"></a>

```typescript
public readonly DeleteExternalIdPConfigurationForDirectory: string;
```

- *Type:* string

[Write] sso-directory:DeleteExternalIdPConfigurationForDirectory.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] sso-directory:DeleteGroup.

---

##### `DeleteMfaDeviceForUser`<sup>Required</sup> <a name="DeleteMfaDeviceForUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteMfaDeviceForUser"></a>

```typescript
public readonly DeleteMfaDeviceForUser: string;
```

- *Type:* string

[Write] sso-directory:DeleteMfaDeviceForUser.

---

##### `DeleteProvisioningTenant`<sup>Required</sup> <a name="DeleteProvisioningTenant" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteProvisioningTenant"></a>

```typescript
public readonly DeleteProvisioningTenant: string;
```

- *Type:* string

[Write] sso-directory:DeleteProvisioningTenant.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] sso-directory:DeleteUser.

---

##### `DescribeDirectory`<sup>Required</sup> <a name="DescribeDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeDirectory"></a>

```typescript
public readonly DescribeDirectory: string;
```

- *Type:* string

[Read] sso-directory:DescribeDirectory.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[Read] sso-directory:DescribeGroup.

---

##### `DescribeGroups`<sup>Required</sup> <a name="DescribeGroups" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeGroups"></a>

```typescript
public readonly DescribeGroups: string;
```

- *Type:* string

[Read] sso-directory:DescribeGroups.

---

##### `DescribeProvisioningTenant`<sup>Required</sup> <a name="DescribeProvisioningTenant" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeProvisioningTenant"></a>

```typescript
public readonly DescribeProvisioningTenant: string;
```

- *Type:* string

[Read] sso-directory:DescribeProvisioningTenant.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] sso-directory:DescribeUser.

---

##### `DescribeUserByUniqueAttribute`<sup>Required</sup> <a name="DescribeUserByUniqueAttribute" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUserByUniqueAttribute"></a>

```typescript
public readonly DescribeUserByUniqueAttribute: string;
```

- *Type:* string

[Read] sso-directory:DescribeUserByUniqueAttribute.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string;
```

- *Type:* string

[Read] sso-directory:DescribeUsers.

---

##### `DisableExternalIdPConfigurationForDirectory`<sup>Required</sup> <a name="DisableExternalIdPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DisableExternalIdPConfigurationForDirectory"></a>

```typescript
public readonly DisableExternalIdPConfigurationForDirectory: string;
```

- *Type:* string

[Write] sso-directory:DisableExternalIdPConfigurationForDirectory.

---

##### `DisableUser`<sup>Required</sup> <a name="DisableUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.DisableUser"></a>

```typescript
public readonly DisableUser: string;
```

- *Type:* string

[Write] sso-directory:DisableUser.

---

##### `EnableExternalIdPConfigurationForDirectory`<sup>Required</sup> <a name="EnableExternalIdPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.EnableExternalIdPConfigurationForDirectory"></a>

```typescript
public readonly EnableExternalIdPConfigurationForDirectory: string;
```

- *Type:* string

[Write] sso-directory:EnableExternalIdPConfigurationForDirectory.

---

##### `EnableUser`<sup>Required</sup> <a name="EnableUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.EnableUser"></a>

```typescript
public readonly EnableUser: string;
```

- *Type:* string

[Write] sso-directory:EnableUser.

---

##### `ImportExternalIdPCertificate`<sup>Required</sup> <a name="ImportExternalIdPCertificate" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ImportExternalIdPCertificate"></a>

```typescript
public readonly ImportExternalIdPCertificate: string;
```

- *Type:* string

[Write] sso-directory:ImportExternalIdPCertificate.

---

##### `IsMemberInGroup`<sup>Required</sup> <a name="IsMemberInGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.IsMemberInGroup"></a>

```typescript
public readonly IsMemberInGroup: string;
```

- *Type:* string

[Read] sso-directory:IsMemberInGroup.

---

##### `IsMemberInGroups`<sup>Required</sup> <a name="IsMemberInGroups" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.IsMemberInGroups"></a>

```typescript
public readonly IsMemberInGroups: string;
```

- *Type:* string

[Read] sso-directory:IsMemberInGroups.

---

##### `ListBearerTokens`<sup>Required</sup> <a name="ListBearerTokens" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListBearerTokens"></a>

```typescript
public readonly ListBearerTokens: string;
```

- *Type:* string

[Read] sso-directory:ListBearerTokens.

---

##### `ListExternalIdPCertificates`<sup>Required</sup> <a name="ListExternalIdPCertificates" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListExternalIdPCertificates"></a>

```typescript
public readonly ListExternalIdPCertificates: string;
```

- *Type:* string

[Read] sso-directory:ListExternalIdPCertificates.

---

##### `ListExternalIdPConfigurationsForDirectory`<sup>Required</sup> <a name="ListExternalIdPConfigurationsForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListExternalIdPConfigurationsForDirectory"></a>

```typescript
public readonly ListExternalIdPConfigurationsForDirectory: string;
```

- *Type:* string

[Read] sso-directory:ListExternalIdPConfigurationsForDirectory.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[Read] sso-directory:ListGroups.

---

##### `ListGroupsForMember`<sup>Required</sup> <a name="ListGroupsForMember" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroupsForMember"></a>

```typescript
public readonly ListGroupsForMember: string;
```

- *Type:* string

[Read] sso-directory:ListGroupsForMember.

---

##### `ListGroupsForUser`<sup>Required</sup> <a name="ListGroupsForUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListGroupsForUser"></a>

```typescript
public readonly ListGroupsForUser: string;
```

- *Type:* string

[Read] sso-directory:ListGroupsForUser.

---

##### `ListMembersInGroup`<sup>Required</sup> <a name="ListMembersInGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListMembersInGroup"></a>

```typescript
public readonly ListMembersInGroup: string;
```

- *Type:* string

[Read] sso-directory:ListMembersInGroup.

---

##### `ListMfaDevicesForUser`<sup>Required</sup> <a name="ListMfaDevicesForUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListMfaDevicesForUser"></a>

```typescript
public readonly ListMfaDevicesForUser: string;
```

- *Type:* string

[Read] sso-directory:ListMfaDevicesForUser.

---

##### `ListProvisioningTenants`<sup>Required</sup> <a name="ListProvisioningTenants" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListProvisioningTenants"></a>

```typescript
public readonly ListProvisioningTenants: string;
```

- *Type:* string

[Read] sso-directory:ListProvisioningTenants.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[Read] sso-directory:ListUsers.

---

##### `RemoveMemberFromGroup`<sup>Required</sup> <a name="RemoveMemberFromGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.RemoveMemberFromGroup"></a>

```typescript
public readonly RemoveMemberFromGroup: string;
```

- *Type:* string

[Write] sso-directory:RemoveMemberFromGroup.

---

##### `SearchGroups`<sup>Required</sup> <a name="SearchGroups" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SearchGroups"></a>

```typescript
public readonly SearchGroups: string;
```

- *Type:* string

[Read] sso-directory:SearchGroups.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[Read] sso-directory:SearchUsers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartVirtualMfaDeviceRegistration`<sup>Required</sup> <a name="StartVirtualMfaDeviceRegistration" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.StartVirtualMfaDeviceRegistration"></a>

```typescript
public readonly StartVirtualMfaDeviceRegistration: string;
```

- *Type:* string

[Write] sso-directory:StartVirtualMfaDeviceRegistration.

---

##### `StartWebAuthnDeviceRegistration`<sup>Required</sup> <a name="StartWebAuthnDeviceRegistration" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.StartWebAuthnDeviceRegistration"></a>

```typescript
public readonly StartWebAuthnDeviceRegistration: string;
```

- *Type:* string

[Write] sso-directory:StartWebAuthnDeviceRegistration.

---

##### `UpdateExternalIdPConfigurationForDirectory`<sup>Required</sup> <a name="UpdateExternalIdPConfigurationForDirectory" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateExternalIdPConfigurationForDirectory"></a>

```typescript
public readonly UpdateExternalIdPConfigurationForDirectory: string;
```

- *Type:* string

[Write] sso-directory:UpdateExternalIdPConfigurationForDirectory.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] sso-directory:UpdateGroup.

---

##### `UpdateGroupDisplayName`<sup>Required</sup> <a name="UpdateGroupDisplayName" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateGroupDisplayName"></a>

```typescript
public readonly UpdateGroupDisplayName: string;
```

- *Type:* string

[Write] sso-directory:UpdateGroupDisplayName.

---

##### `UpdateMfaDeviceForUser`<sup>Required</sup> <a name="UpdateMfaDeviceForUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateMfaDeviceForUser"></a>

```typescript
public readonly UpdateMfaDeviceForUser: string;
```

- *Type:* string

[Write] sso-directory:UpdateMfaDeviceForUser.

---

##### `UpdatePassword`<sup>Required</sup> <a name="UpdatePassword" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdatePassword"></a>

```typescript
public readonly UpdatePassword: string;
```

- *Type:* string

[Write] sso-directory:UpdatePassword.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] sso-directory:UpdateUser.

---

##### `UpdateUserName`<sup>Required</sup> <a name="UpdateUserName" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.UpdateUserName"></a>

```typescript
public readonly UpdateUserName: string;
```

- *Type:* string

[Write] sso-directory:UpdateUserName.

---

##### `VerifyEmail`<sup>Required</sup> <a name="VerifyEmail" id="@cdk_utils/iam.sso_directory.SSODirectoryActions.property.VerifyEmail"></a>

```typescript
public readonly VerifyEmail: string;
```

- *Type:* string

[Write] sso-directory:VerifyEmail.

---


