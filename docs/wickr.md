# `wickr` Submodule <a name="`wickr` Submodule" id="@cdk_utils/iam.wickr"></a>


## Structs <a name="Structs" id="Structs"></a>

### WickrNetworkArnComponents <a name="WickrNetworkArnComponents" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents"></a>

Parsed components of a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

const wickrNetworkArnComponents: wickr.WickrNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wickr.WickrNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WickrNetworkArnProps <a name="WickrNetworkArnProps" id="@cdk_utils/iam.wickr.WickrNetworkArnProps"></a>

Properties for building a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wickr.WickrNetworkArnProps.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

const wickrNetworkArnProps: wickr.WickrNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnProps.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wickr.WickrNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.wickr.WickrNetworkArnProps.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wickr.WickrNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wickr.WickrNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wickr.WickrNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WickrActions <a name="WickrActions" id="@cdk_utils/iam.wickr.WickrActions"></a>

IAM action constants for the wickr service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wickr.WickrActions.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

new wickr.WickrActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetBot">actionGetBot</a></code> | <code>string</code> | [Read] wickr:GetBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetBotsCount">actionGetBotsCount</a></code> | <code>string</code> | [Read] wickr:GetBotsCount. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetDataRetentionBot">actionGetDataRetentionBot</a></code> | <code>string</code> | [Read] wickr:GetDataRetentionBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetGuestUserHistoryCount">actionGetGuestUserHistoryCount</a></code> | <code>string</code> | [Read] wickr:GetGuestUserHistoryCount. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetNetwork">actionGetNetwork</a></code> | <code>string</code> | [Read] wickr:GetNetwork. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetNetworkSettings">actionGetNetworkSettings</a></code> | <code>string</code> | [Read] wickr:GetNetworkSettings. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetOidcInfo">actionGetOidcInfo</a></code> | <code>string</code> | [Read] wickr:GetOidcInfo. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetOpentdfConfig">actionGetOpentdfConfig</a></code> | <code>string</code> | [Read] wickr:GetOpentdfConfig. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetSecurityGroup">actionGetSecurityGroup</a></code> | <code>string</code> | [Read] wickr:GetSecurityGroup. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] wickr:GetUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.actionGetUsersCount">actionGetUsersCount</a></code> | <code>string</code> | [Read] wickr:GetUsersCount. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchCreateUser">BatchCreateUser</a></code> | <code>string</code> | [Write] wickr:BatchCreateUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchDeleteUser">BatchDeleteUser</a></code> | <code>string</code> | [Write] wickr:BatchDeleteUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchLookupUserUname">BatchLookupUserUname</a></code> | <code>string</code> | [Read] wickr:BatchLookupUserUname. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchReinviteUser">BatchReinviteUser</a></code> | <code>string</code> | [Write] wickr:BatchReinviteUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchResetDevicesForUser">BatchResetDevicesForUser</a></code> | <code>string</code> | [Write] wickr:BatchResetDevicesForUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.BatchToggleUserSuspendStatus">BatchToggleUserSuspendStatus</a></code> | <code>string</code> | [Write] wickr:BatchToggleUserSuspendStatus. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateAdminSession">CreateAdminSession</a></code> | <code>string</code> | [Write] wickr:CreateAdminSession. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateBot">CreateBot</a></code> | <code>string</code> | [Write] wickr:CreateBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateDataRetentionBot">CreateDataRetentionBot</a></code> | <code>string</code> | [Write] wickr:CreateDataRetentionBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateDataRetentionBotChallenge">CreateDataRetentionBotChallenge</a></code> | <code>string</code> | [Write] wickr:CreateDataRetentionBotChallenge. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateNetwork">CreateNetwork</a></code> | <code>string</code> | [Write] wickr:CreateNetwork. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.CreateSecurityGroup">CreateSecurityGroup</a></code> | <code>string</code> | [Write] wickr:CreateSecurityGroup. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.DeleteBot">DeleteBot</a></code> | <code>string</code> | [Write] wickr:DeleteBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.DeleteDataRetentionBot">DeleteDataRetentionBot</a></code> | <code>string</code> | [Write] wickr:DeleteDataRetentionBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.DeleteNetwork">DeleteNetwork</a></code> | <code>string</code> | [Write] wickr:DeleteNetwork. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.DeleteSecurityGroup">DeleteSecurityGroup</a></code> | <code>string</code> | [Write] wickr:DeleteSecurityGroup. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListBlockedGuestUsers">ListBlockedGuestUsers</a></code> | <code>string</code> | [Read] wickr:ListBlockedGuestUsers. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListBots">ListBots</a></code> | <code>string</code> | [Read] wickr:ListBots. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListDevicesForUser">ListDevicesForUser</a></code> | <code>string</code> | [Read] wickr:ListDevicesForUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListGuestUsers">ListGuestUsers</a></code> | <code>string</code> | [Read] wickr:ListGuestUsers. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListNetworks">ListNetworks</a></code> | <code>string</code> | [Read] wickr:ListNetworks. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListSecurityGroups">ListSecurityGroups</a></code> | <code>string</code> | [Read] wickr:ListSecurityGroups. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListSecurityGroupUsers">ListSecurityGroupUsers</a></code> | <code>string</code> | [Read] wickr:ListSecurityGroupUsers. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] wickr:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [Read] wickr:ListUsers. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.RegisterOidcConfig">RegisterOidcConfig</a></code> | <code>string</code> | [Write] wickr:RegisterOidcConfig. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.RegisterOidcConfigTest">RegisterOidcConfigTest</a></code> | <code>string</code> | [Write] wickr:RegisterOidcConfigTest. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.RegisterOpentdfConfig">RegisterOpentdfConfig</a></code> | <code>string</code> | [Write] wickr:RegisterOpentdfConfig. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] wickr:TagResource. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] wickr:UntagResource. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateBot">UpdateBot</a></code> | <code>string</code> | [Write] wickr:UpdateBot. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateDataRetention">UpdateDataRetention</a></code> | <code>string</code> | [Write] wickr:UpdateDataRetention. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateGuestUser">UpdateGuestUser</a></code> | <code>string</code> | [Write] wickr:UpdateGuestUser. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateNetworkDetails">UpdateNetworkDetails</a></code> | <code>string</code> | [Write] wickr:UpdateNetworkDetails. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateNetworkSettings">UpdateNetworkSettings</a></code> | <code>string</code> | [Write] wickr:UpdateNetworkSettings. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateSecurityGroup">UpdateSecurityGroup</a></code> | <code>string</code> | [Write] wickr:UpdateSecurityGroup. |
| <code><a href="#@cdk_utils/iam.wickr.WickrActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] wickr:UpdateUser. |

---

##### `actionGetBot`<sup>Required</sup> <a name="actionGetBot" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetBot"></a>

```typescript
public readonly actionGetBot: string;
```

- *Type:* string

[Read] wickr:GetBot.

---

##### `actionGetBotsCount`<sup>Required</sup> <a name="actionGetBotsCount" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetBotsCount"></a>

```typescript
public readonly actionGetBotsCount: string;
```

- *Type:* string

[Read] wickr:GetBotsCount.

---

##### `actionGetDataRetentionBot`<sup>Required</sup> <a name="actionGetDataRetentionBot" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetDataRetentionBot"></a>

```typescript
public readonly actionGetDataRetentionBot: string;
```

- *Type:* string

[Read] wickr:GetDataRetentionBot.

---

##### `actionGetGuestUserHistoryCount`<sup>Required</sup> <a name="actionGetGuestUserHistoryCount" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetGuestUserHistoryCount"></a>

```typescript
public readonly actionGetGuestUserHistoryCount: string;
```

- *Type:* string

[Read] wickr:GetGuestUserHistoryCount.

---

##### `actionGetNetwork`<sup>Required</sup> <a name="actionGetNetwork" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetNetwork"></a>

```typescript
public readonly actionGetNetwork: string;
```

- *Type:* string

[Read] wickr:GetNetwork.

---

##### `actionGetNetworkSettings`<sup>Required</sup> <a name="actionGetNetworkSettings" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetNetworkSettings"></a>

```typescript
public readonly actionGetNetworkSettings: string;
```

- *Type:* string

[Read] wickr:GetNetworkSettings.

---

##### `actionGetOidcInfo`<sup>Required</sup> <a name="actionGetOidcInfo" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetOidcInfo"></a>

```typescript
public readonly actionGetOidcInfo: string;
```

- *Type:* string

[Read] wickr:GetOidcInfo.

---

##### `actionGetOpentdfConfig`<sup>Required</sup> <a name="actionGetOpentdfConfig" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetOpentdfConfig"></a>

```typescript
public readonly actionGetOpentdfConfig: string;
```

- *Type:* string

[Read] wickr:GetOpentdfConfig.

---

##### `actionGetSecurityGroup`<sup>Required</sup> <a name="actionGetSecurityGroup" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetSecurityGroup"></a>

```typescript
public readonly actionGetSecurityGroup: string;
```

- *Type:* string

[Read] wickr:GetSecurityGroup.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] wickr:GetUser.

---

##### `actionGetUsersCount`<sup>Required</sup> <a name="actionGetUsersCount" id="@cdk_utils/iam.wickr.WickrActions.property.actionGetUsersCount"></a>

```typescript
public readonly actionGetUsersCount: string;
```

- *Type:* string

[Read] wickr:GetUsersCount.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.wickr.WickrActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.wickr.WickrActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.wickr.WickrActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.wickr.WickrActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.wickr.WickrActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateUser`<sup>Required</sup> <a name="BatchCreateUser" id="@cdk_utils/iam.wickr.WickrActions.property.BatchCreateUser"></a>

```typescript
public readonly BatchCreateUser: string;
```

- *Type:* string

[Write] wickr:BatchCreateUser.

---

##### `BatchDeleteUser`<sup>Required</sup> <a name="BatchDeleteUser" id="@cdk_utils/iam.wickr.WickrActions.property.BatchDeleteUser"></a>

```typescript
public readonly BatchDeleteUser: string;
```

- *Type:* string

[Write] wickr:BatchDeleteUser.

---

##### `BatchLookupUserUname`<sup>Required</sup> <a name="BatchLookupUserUname" id="@cdk_utils/iam.wickr.WickrActions.property.BatchLookupUserUname"></a>

```typescript
public readonly BatchLookupUserUname: string;
```

- *Type:* string

[Read] wickr:BatchLookupUserUname.

---

##### `BatchReinviteUser`<sup>Required</sup> <a name="BatchReinviteUser" id="@cdk_utils/iam.wickr.WickrActions.property.BatchReinviteUser"></a>

```typescript
public readonly BatchReinviteUser: string;
```

- *Type:* string

[Write] wickr:BatchReinviteUser.

---

##### `BatchResetDevicesForUser`<sup>Required</sup> <a name="BatchResetDevicesForUser" id="@cdk_utils/iam.wickr.WickrActions.property.BatchResetDevicesForUser"></a>

```typescript
public readonly BatchResetDevicesForUser: string;
```

- *Type:* string

[Write] wickr:BatchResetDevicesForUser.

---

##### `BatchToggleUserSuspendStatus`<sup>Required</sup> <a name="BatchToggleUserSuspendStatus" id="@cdk_utils/iam.wickr.WickrActions.property.BatchToggleUserSuspendStatus"></a>

```typescript
public readonly BatchToggleUserSuspendStatus: string;
```

- *Type:* string

[Write] wickr:BatchToggleUserSuspendStatus.

---

##### `CreateAdminSession`<sup>Required</sup> <a name="CreateAdminSession" id="@cdk_utils/iam.wickr.WickrActions.property.CreateAdminSession"></a>

```typescript
public readonly CreateAdminSession: string;
```

- *Type:* string

[Write] wickr:CreateAdminSession.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.wickr.WickrActions.property.CreateBot"></a>

```typescript
public readonly CreateBot: string;
```

- *Type:* string

[Write] wickr:CreateBot.

---

##### `CreateDataRetentionBot`<sup>Required</sup> <a name="CreateDataRetentionBot" id="@cdk_utils/iam.wickr.WickrActions.property.CreateDataRetentionBot"></a>

```typescript
public readonly CreateDataRetentionBot: string;
```

- *Type:* string

[Write] wickr:CreateDataRetentionBot.

---

##### `CreateDataRetentionBotChallenge`<sup>Required</sup> <a name="CreateDataRetentionBotChallenge" id="@cdk_utils/iam.wickr.WickrActions.property.CreateDataRetentionBotChallenge"></a>

```typescript
public readonly CreateDataRetentionBotChallenge: string;
```

- *Type:* string

[Write] wickr:CreateDataRetentionBotChallenge.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.wickr.WickrActions.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string;
```

- *Type:* string

[Write] wickr:CreateNetwork.

---

##### `CreateSecurityGroup`<sup>Required</sup> <a name="CreateSecurityGroup" id="@cdk_utils/iam.wickr.WickrActions.property.CreateSecurityGroup"></a>

```typescript
public readonly CreateSecurityGroup: string;
```

- *Type:* string

[Write] wickr:CreateSecurityGroup.

---

##### `DeleteBot`<sup>Required</sup> <a name="DeleteBot" id="@cdk_utils/iam.wickr.WickrActions.property.DeleteBot"></a>

```typescript
public readonly DeleteBot: string;
```

- *Type:* string

[Write] wickr:DeleteBot.

---

##### `DeleteDataRetentionBot`<sup>Required</sup> <a name="DeleteDataRetentionBot" id="@cdk_utils/iam.wickr.WickrActions.property.DeleteDataRetentionBot"></a>

```typescript
public readonly DeleteDataRetentionBot: string;
```

- *Type:* string

[Write] wickr:DeleteDataRetentionBot.

---

##### `DeleteNetwork`<sup>Required</sup> <a name="DeleteNetwork" id="@cdk_utils/iam.wickr.WickrActions.property.DeleteNetwork"></a>

```typescript
public readonly DeleteNetwork: string;
```

- *Type:* string

[Write] wickr:DeleteNetwork.

---

##### `DeleteSecurityGroup`<sup>Required</sup> <a name="DeleteSecurityGroup" id="@cdk_utils/iam.wickr.WickrActions.property.DeleteSecurityGroup"></a>

```typescript
public readonly DeleteSecurityGroup: string;
```

- *Type:* string

[Write] wickr:DeleteSecurityGroup.

---

##### `ListBlockedGuestUsers`<sup>Required</sup> <a name="ListBlockedGuestUsers" id="@cdk_utils/iam.wickr.WickrActions.property.ListBlockedGuestUsers"></a>

```typescript
public readonly ListBlockedGuestUsers: string;
```

- *Type:* string

[Read] wickr:ListBlockedGuestUsers.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.wickr.WickrActions.property.ListBots"></a>

```typescript
public readonly ListBots: string;
```

- *Type:* string

[Read] wickr:ListBots.

---

##### `ListDevicesForUser`<sup>Required</sup> <a name="ListDevicesForUser" id="@cdk_utils/iam.wickr.WickrActions.property.ListDevicesForUser"></a>

```typescript
public readonly ListDevicesForUser: string;
```

- *Type:* string

[Read] wickr:ListDevicesForUser.

---

##### `ListGuestUsers`<sup>Required</sup> <a name="ListGuestUsers" id="@cdk_utils/iam.wickr.WickrActions.property.ListGuestUsers"></a>

```typescript
public readonly ListGuestUsers: string;
```

- *Type:* string

[Read] wickr:ListGuestUsers.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.wickr.WickrActions.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string;
```

- *Type:* string

[Read] wickr:ListNetworks.

---

##### `ListSecurityGroups`<sup>Required</sup> <a name="ListSecurityGroups" id="@cdk_utils/iam.wickr.WickrActions.property.ListSecurityGroups"></a>

```typescript
public readonly ListSecurityGroups: string;
```

- *Type:* string

[Read] wickr:ListSecurityGroups.

---

##### `ListSecurityGroupUsers`<sup>Required</sup> <a name="ListSecurityGroupUsers" id="@cdk_utils/iam.wickr.WickrActions.property.ListSecurityGroupUsers"></a>

```typescript
public readonly ListSecurityGroupUsers: string;
```

- *Type:* string

[Read] wickr:ListSecurityGroupUsers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wickr.WickrActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] wickr:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.wickr.WickrActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[Read] wickr:ListUsers.

---

##### `RegisterOidcConfig`<sup>Required</sup> <a name="RegisterOidcConfig" id="@cdk_utils/iam.wickr.WickrActions.property.RegisterOidcConfig"></a>

```typescript
public readonly RegisterOidcConfig: string;
```

- *Type:* string

[Write] wickr:RegisterOidcConfig.

---

##### `RegisterOidcConfigTest`<sup>Required</sup> <a name="RegisterOidcConfigTest" id="@cdk_utils/iam.wickr.WickrActions.property.RegisterOidcConfigTest"></a>

```typescript
public readonly RegisterOidcConfigTest: string;
```

- *Type:* string

[Write] wickr:RegisterOidcConfigTest.

---

##### `RegisterOpentdfConfig`<sup>Required</sup> <a name="RegisterOpentdfConfig" id="@cdk_utils/iam.wickr.WickrActions.property.RegisterOpentdfConfig"></a>

```typescript
public readonly RegisterOpentdfConfig: string;
```

- *Type:* string

[Write] wickr:RegisterOpentdfConfig.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.wickr.WickrActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wickr.WickrActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] wickr:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wickr.WickrActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] wickr:UntagResource.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string;
```

- *Type:* string

[Write] wickr:UpdateBot.

---

##### `UpdateDataRetention`<sup>Required</sup> <a name="UpdateDataRetention" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateDataRetention"></a>

```typescript
public readonly UpdateDataRetention: string;
```

- *Type:* string

[Write] wickr:UpdateDataRetention.

---

##### `UpdateGuestUser`<sup>Required</sup> <a name="UpdateGuestUser" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateGuestUser"></a>

```typescript
public readonly UpdateGuestUser: string;
```

- *Type:* string

[Write] wickr:UpdateGuestUser.

---

##### `UpdateNetworkDetails`<sup>Required</sup> <a name="UpdateNetworkDetails" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateNetworkDetails"></a>

```typescript
public readonly UpdateNetworkDetails: string;
```

- *Type:* string

[Write] wickr:UpdateNetworkDetails.

---

##### `UpdateNetworkSettings`<sup>Required</sup> <a name="UpdateNetworkSettings" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateNetworkSettings"></a>

```typescript
public readonly UpdateNetworkSettings: string;
```

- *Type:* string

[Write] wickr:UpdateNetworkSettings.

---

##### `UpdateSecurityGroup`<sup>Required</sup> <a name="UpdateSecurityGroup" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateSecurityGroup"></a>

```typescript
public readonly UpdateSecurityGroup: string;
```

- *Type:* string

[Write] wickr:UpdateSecurityGroup.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.wickr.WickrActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] wickr:UpdateUser.

---

### WickrConditions <a name="WickrConditions" id="@cdk_utils/iam.wickr.WickrConditions"></a>

Condition key constants and builders for wickr.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wickr.WickrConditions.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

new wickr.WickrConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.wickr.WickrConditions.requestTag"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wickr.WickrConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.wickr.WickrConditions.resourceTag"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wickr.WickrConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.wickr.WickrConditions.tagKeys"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wickr.WickrConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.CreateNetworkConditionKeys">CreateNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetwork action. |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.wickr.WickrConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.wickr.WickrConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.wickr.WickrConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.wickr.WickrConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateNetworkConditionKeys`<sup>Required</sup> <a name="CreateNetworkConditionKeys" id="@cdk_utils/iam.wickr.WickrConditions.property.CreateNetworkConditionKeys"></a>

```typescript
public readonly CreateNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetwork action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.wickr.WickrConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.wickr.WickrConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WickrOperations <a name="WickrOperations" id="@cdk_utils/iam.wickr.WickrOperations"></a>

API operation to required IAM actions mapping for wickr.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wickr.WickrOperations.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

new wickr.WickrOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchCreateUser">BatchCreateUser</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchDeleteUser">BatchDeleteUser</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchLookupUserUname">BatchLookupUserUname</a></code> | <code>string[]</code> | IAM actions required for the BatchLookupUserUname API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchReinviteUser">BatchReinviteUser</a></code> | <code>string[]</code> | IAM actions required for the BatchReinviteUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchResetDevicesForUser">BatchResetDevicesForUser</a></code> | <code>string[]</code> | IAM actions required for the BatchResetDevicesForUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.BatchToggleUserSuspendStatus">BatchToggleUserSuspendStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchToggleUserSuspendStatus API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.CreateBot">CreateBot</a></code> | <code>string[]</code> | IAM actions required for the CreateBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.CreateDataRetentionBot">CreateDataRetentionBot</a></code> | <code>string[]</code> | IAM actions required for the CreateDataRetentionBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.CreateDataRetentionBotChallenge">CreateDataRetentionBotChallenge</a></code> | <code>string[]</code> | IAM actions required for the CreateDataRetentionBotChallenge API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.CreateNetwork">CreateNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateNetwork API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.CreateSecurityGroup">CreateSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.DeleteBot">DeleteBot</a></code> | <code>string[]</code> | IAM actions required for the DeleteBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.DeleteDataRetentionBot">DeleteDataRetentionBot</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataRetentionBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.DeleteNetwork">DeleteNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetwork API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.DeleteSecurityGroup">DeleteSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListBlockedGuestUsers">ListBlockedGuestUsers</a></code> | <code>string[]</code> | IAM actions required for the ListBlockedGuestUsers API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListBots">ListBots</a></code> | <code>string[]</code> | IAM actions required for the ListBots API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListDevicesForUser">ListDevicesForUser</a></code> | <code>string[]</code> | IAM actions required for the ListDevicesForUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListGuestUsers">ListGuestUsers</a></code> | <code>string[]</code> | IAM actions required for the ListGuestUsers API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListNetworks">ListNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListNetworks API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListSecurityGroups">ListSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListSecurityGroupUsers">ListSecurityGroupUsers</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityGroupUsers API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetBot">opGetBot</a></code> | <code>string[]</code> | IAM actions required for the GetBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetBotsCount">opGetBotsCount</a></code> | <code>string[]</code> | IAM actions required for the GetBotsCount API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetDataRetentionBot">opGetDataRetentionBot</a></code> | <code>string[]</code> | IAM actions required for the GetDataRetentionBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetGuestUserHistoryCount">opGetGuestUserHistoryCount</a></code> | <code>string[]</code> | IAM actions required for the GetGuestUserHistoryCount API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetNetwork">opGetNetwork</a></code> | <code>string[]</code> | IAM actions required for the GetNetwork API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetNetworkSettings">opGetNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetOidcInfo">opGetOidcInfo</a></code> | <code>string[]</code> | IAM actions required for the GetOidcInfo API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetOpentdfConfig">opGetOpentdfConfig</a></code> | <code>string[]</code> | IAM actions required for the GetOpentdfConfig API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetSecurityGroup">opGetSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the GetSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.opGetUsersCount">opGetUsersCount</a></code> | <code>string[]</code> | IAM actions required for the GetUsersCount API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.RegisterOidcConfig">RegisterOidcConfig</a></code> | <code>string[]</code> | IAM actions required for the RegisterOidcConfig API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.RegisterOidcConfigTest">RegisterOidcConfigTest</a></code> | <code>string[]</code> | IAM actions required for the RegisterOidcConfigTest API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.RegisterOpentdfConfig">RegisterOpentdfConfig</a></code> | <code>string[]</code> | IAM actions required for the RegisterOpentdfConfig API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateBot">UpdateBot</a></code> | <code>string[]</code> | IAM actions required for the UpdateBot API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateDataRetention">UpdateDataRetention</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataRetention API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateGuestUser">UpdateGuestUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateGuestUser API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateNetwork">UpdateNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetwork API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateNetworkSettings">UpdateNetworkSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkSettings API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateSecurityGroup">UpdateSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.wickr.WickrOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `BatchCreateUser`<sup>Required</sup> <a name="BatchCreateUser" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchCreateUser"></a>

```typescript
public readonly BatchCreateUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateUser API call.

---

##### `BatchDeleteUser`<sup>Required</sup> <a name="BatchDeleteUser" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchDeleteUser"></a>

```typescript
public readonly BatchDeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteUser API call.

---

##### `BatchLookupUserUname`<sup>Required</sup> <a name="BatchLookupUserUname" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchLookupUserUname"></a>

```typescript
public readonly BatchLookupUserUname: string[];
```

- *Type:* string[]

IAM actions required for the BatchLookupUserUname API call.

---

##### `BatchReinviteUser`<sup>Required</sup> <a name="BatchReinviteUser" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchReinviteUser"></a>

```typescript
public readonly BatchReinviteUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchReinviteUser API call.

---

##### `BatchResetDevicesForUser`<sup>Required</sup> <a name="BatchResetDevicesForUser" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchResetDevicesForUser"></a>

```typescript
public readonly BatchResetDevicesForUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchResetDevicesForUser API call.

---

##### `BatchToggleUserSuspendStatus`<sup>Required</sup> <a name="BatchToggleUserSuspendStatus" id="@cdk_utils/iam.wickr.WickrOperations.property.BatchToggleUserSuspendStatus"></a>

```typescript
public readonly BatchToggleUserSuspendStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchToggleUserSuspendStatus API call.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.wickr.WickrOperations.property.CreateBot"></a>

```typescript
public readonly CreateBot: string[];
```

- *Type:* string[]

IAM actions required for the CreateBot API call.

---

##### `CreateDataRetentionBot`<sup>Required</sup> <a name="CreateDataRetentionBot" id="@cdk_utils/iam.wickr.WickrOperations.property.CreateDataRetentionBot"></a>

```typescript
public readonly CreateDataRetentionBot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataRetentionBot API call.

---

##### `CreateDataRetentionBotChallenge`<sup>Required</sup> <a name="CreateDataRetentionBotChallenge" id="@cdk_utils/iam.wickr.WickrOperations.property.CreateDataRetentionBotChallenge"></a>

```typescript
public readonly CreateDataRetentionBotChallenge: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataRetentionBotChallenge API call.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.wickr.WickrOperations.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetwork API call.

---

##### `CreateSecurityGroup`<sup>Required</sup> <a name="CreateSecurityGroup" id="@cdk_utils/iam.wickr.WickrOperations.property.CreateSecurityGroup"></a>

```typescript
public readonly CreateSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityGroup API call.

---

##### `DeleteBot`<sup>Required</sup> <a name="DeleteBot" id="@cdk_utils/iam.wickr.WickrOperations.property.DeleteBot"></a>

```typescript
public readonly DeleteBot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBot API call.

---

##### `DeleteDataRetentionBot`<sup>Required</sup> <a name="DeleteDataRetentionBot" id="@cdk_utils/iam.wickr.WickrOperations.property.DeleteDataRetentionBot"></a>

```typescript
public readonly DeleteDataRetentionBot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataRetentionBot API call.

---

##### `DeleteNetwork`<sup>Required</sup> <a name="DeleteNetwork" id="@cdk_utils/iam.wickr.WickrOperations.property.DeleteNetwork"></a>

```typescript
public readonly DeleteNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetwork API call.

---

##### `DeleteSecurityGroup`<sup>Required</sup> <a name="DeleteSecurityGroup" id="@cdk_utils/iam.wickr.WickrOperations.property.DeleteSecurityGroup"></a>

```typescript
public readonly DeleteSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityGroup API call.

---

##### `ListBlockedGuestUsers`<sup>Required</sup> <a name="ListBlockedGuestUsers" id="@cdk_utils/iam.wickr.WickrOperations.property.ListBlockedGuestUsers"></a>

```typescript
public readonly ListBlockedGuestUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListBlockedGuestUsers API call.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.wickr.WickrOperations.property.ListBots"></a>

```typescript
public readonly ListBots: string[];
```

- *Type:* string[]

IAM actions required for the ListBots API call.

---

##### `ListDevicesForUser`<sup>Required</sup> <a name="ListDevicesForUser" id="@cdk_utils/iam.wickr.WickrOperations.property.ListDevicesForUser"></a>

```typescript
public readonly ListDevicesForUser: string[];
```

- *Type:* string[]

IAM actions required for the ListDevicesForUser API call.

---

##### `ListGuestUsers`<sup>Required</sup> <a name="ListGuestUsers" id="@cdk_utils/iam.wickr.WickrOperations.property.ListGuestUsers"></a>

```typescript
public readonly ListGuestUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListGuestUsers API call.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.wickr.WickrOperations.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworks API call.

---

##### `ListSecurityGroups`<sup>Required</sup> <a name="ListSecurityGroups" id="@cdk_utils/iam.wickr.WickrOperations.property.ListSecurityGroups"></a>

```typescript
public readonly ListSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityGroups API call.

---

##### `ListSecurityGroupUsers`<sup>Required</sup> <a name="ListSecurityGroupUsers" id="@cdk_utils/iam.wickr.WickrOperations.property.ListSecurityGroupUsers"></a>

```typescript
public readonly ListSecurityGroupUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityGroupUsers API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.wickr.WickrOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `opGetBot`<sup>Required</sup> <a name="opGetBot" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetBot"></a>

```typescript
public readonly opGetBot: string[];
```

- *Type:* string[]

IAM actions required for the GetBot API call.

---

##### `opGetBotsCount`<sup>Required</sup> <a name="opGetBotsCount" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetBotsCount"></a>

```typescript
public readonly opGetBotsCount: string[];
```

- *Type:* string[]

IAM actions required for the GetBotsCount API call.

---

##### `opGetDataRetentionBot`<sup>Required</sup> <a name="opGetDataRetentionBot" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetDataRetentionBot"></a>

```typescript
public readonly opGetDataRetentionBot: string[];
```

- *Type:* string[]

IAM actions required for the GetDataRetentionBot API call.

---

##### `opGetGuestUserHistoryCount`<sup>Required</sup> <a name="opGetGuestUserHistoryCount" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetGuestUserHistoryCount"></a>

```typescript
public readonly opGetGuestUserHistoryCount: string[];
```

- *Type:* string[]

IAM actions required for the GetGuestUserHistoryCount API call.

---

##### `opGetNetwork`<sup>Required</sup> <a name="opGetNetwork" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetNetwork"></a>

```typescript
public readonly opGetNetwork: string[];
```

- *Type:* string[]

IAM actions required for the GetNetwork API call.

---

##### `opGetNetworkSettings`<sup>Required</sup> <a name="opGetNetworkSettings" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetNetworkSettings"></a>

```typescript
public readonly opGetNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkSettings API call.

---

##### `opGetOidcInfo`<sup>Required</sup> <a name="opGetOidcInfo" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetOidcInfo"></a>

```typescript
public readonly opGetOidcInfo: string[];
```

- *Type:* string[]

IAM actions required for the GetOidcInfo API call.

---

##### `opGetOpentdfConfig`<sup>Required</sup> <a name="opGetOpentdfConfig" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetOpentdfConfig"></a>

```typescript
public readonly opGetOpentdfConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetOpentdfConfig API call.

---

##### `opGetSecurityGroup`<sup>Required</sup> <a name="opGetSecurityGroup" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetSecurityGroup"></a>

```typescript
public readonly opGetSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetSecurityGroup API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetUsersCount`<sup>Required</sup> <a name="opGetUsersCount" id="@cdk_utils/iam.wickr.WickrOperations.property.opGetUsersCount"></a>

```typescript
public readonly opGetUsersCount: string[];
```

- *Type:* string[]

IAM actions required for the GetUsersCount API call.

---

##### `RegisterOidcConfig`<sup>Required</sup> <a name="RegisterOidcConfig" id="@cdk_utils/iam.wickr.WickrOperations.property.RegisterOidcConfig"></a>

```typescript
public readonly RegisterOidcConfig: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOidcConfig API call.

---

##### `RegisterOidcConfigTest`<sup>Required</sup> <a name="RegisterOidcConfigTest" id="@cdk_utils/iam.wickr.WickrOperations.property.RegisterOidcConfigTest"></a>

```typescript
public readonly RegisterOidcConfigTest: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOidcConfigTest API call.

---

##### `RegisterOpentdfConfig`<sup>Required</sup> <a name="RegisterOpentdfConfig" id="@cdk_utils/iam.wickr.WickrOperations.property.RegisterOpentdfConfig"></a>

```typescript
public readonly RegisterOpentdfConfig: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOpentdfConfig API call.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBot API call.

---

##### `UpdateDataRetention`<sup>Required</sup> <a name="UpdateDataRetention" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateDataRetention"></a>

```typescript
public readonly UpdateDataRetention: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataRetention API call.

---

##### `UpdateGuestUser`<sup>Required</sup> <a name="UpdateGuestUser" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateGuestUser"></a>

```typescript
public readonly UpdateGuestUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGuestUser API call.

---

##### `UpdateNetwork`<sup>Required</sup> <a name="UpdateNetwork" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateNetwork"></a>

```typescript
public readonly UpdateNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetwork API call.

---

##### `UpdateNetworkSettings`<sup>Required</sup> <a name="UpdateNetworkSettings" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateNetworkSettings"></a>

```typescript
public readonly UpdateNetworkSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkSettings API call.

---

##### `UpdateSecurityGroup`<sup>Required</sup> <a name="UpdateSecurityGroup" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateSecurityGroup"></a>

```typescript
public readonly UpdateSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityGroup API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.wickr.WickrOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### WickrResources <a name="WickrResources" id="@cdk_utils/iam.wickr.WickrResources"></a>

ARN builders, validators, and parsers for wickr resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wickr.WickrResources.Initializer"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

new wickr.WickrResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wickr.WickrResources.isValidNetworkArn">isValidNetworkArn</a></code> | Validates whether a string is a valid ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.wickr.WickrResources.network">network</a></code> | Builds an ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.wickr.WickrResources.parseNetworkArn">parseNetworkArn</a></code> | Parses a network ARN into its components. |

---

##### `isValidNetworkArn` <a name="isValidNetworkArn" id="@cdk_utils/iam.wickr.WickrResources.isValidNetworkArn"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrResources.isValidNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wickr.WickrResources.isValidNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `network` <a name="network" id="@cdk_utils/iam.wickr.WickrResources.network"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrResources.network(props: WickrNetworkArnProps)
```

Builds an ARN for the network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wickr.WickrResources.network.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wickr.WickrNetworkArnProps">WickrNetworkArnProps</a>

---

##### `parseNetworkArn` <a name="parseNetworkArn" id="@cdk_utils/iam.wickr.WickrResources.parseNetworkArn"></a>

```typescript
import { wickr } from '@cdk_utils/iam'

wickr.WickrResources.parseNetworkArn(arn: string)
```

Parses a network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wickr.WickrResources.parseNetworkArn.parameter.arn"></a>

- *Type:* string

---




