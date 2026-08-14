# `supportapp` Submodule <a name="`supportapp` Submodule" id="@cdk_utils/iam.supportapp"></a>



## Classes <a name="Classes" id="Classes"></a>

### SupportappActions <a name="SupportappActions" id="@cdk_utils/iam.supportapp.SupportappActions"></a>

IAM action constants for the supportapp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportapp.SupportappActions.Initializer"></a>

```typescript
import { supportapp } from '@cdk_utils/iam'

new supportapp.SupportappActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.actionGetAccountAlias">actionGetAccountAlias</a></code> | <code>string</code> | [Read] supportapp:GetAccountAlias. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.actionGetSlackOauthParameters">actionGetSlackOauthParameters</a></code> | <code>string</code> | [Read] supportapp:GetSlackOauthParameters. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.CreateSlackChannelConfiguration">CreateSlackChannelConfiguration</a></code> | <code>string</code> | [Write] supportapp:CreateSlackChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.DeleteAccountAlias">DeleteAccountAlias</a></code> | <code>string</code> | [Write] supportapp:DeleteAccountAlias. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.DeleteSlackChannelConfiguration">DeleteSlackChannelConfiguration</a></code> | <code>string</code> | [Write] supportapp:DeleteSlackChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.DeleteSlackWorkspaceConfiguration">DeleteSlackWorkspaceConfiguration</a></code> | <code>string</code> | [Write] supportapp:DeleteSlackWorkspaceConfiguration. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.DescribeSlackChannels">DescribeSlackChannels</a></code> | <code>string</code> | [Read] supportapp:DescribeSlackChannels. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.ListSlackChannelConfigurations">ListSlackChannelConfigurations</a></code> | <code>string</code> | [Read] supportapp:ListSlackChannelConfigurations. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.ListSlackWorkspaceConfigurations">ListSlackWorkspaceConfigurations</a></code> | <code>string</code> | [Read] supportapp:ListSlackWorkspaceConfigurations. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.PutAccountAlias">PutAccountAlias</a></code> | <code>string</code> | [Write] supportapp:PutAccountAlias. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.RedeemSlackOauthCode">RedeemSlackOauthCode</a></code> | <code>string</code> | [Write] supportapp:RedeemSlackOauthCode. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.RegisterSlackWorkspaceForOrganization">RegisterSlackWorkspaceForOrganization</a></code> | <code>string</code> | [Write] supportapp:RegisterSlackWorkspaceForOrganization. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappActions.property.UpdateSlackChannelConfiguration">UpdateSlackChannelConfiguration</a></code> | <code>string</code> | [Write] supportapp:UpdateSlackChannelConfiguration. |

---

##### `actionGetAccountAlias`<sup>Required</sup> <a name="actionGetAccountAlias" id="@cdk_utils/iam.supportapp.SupportappActions.property.actionGetAccountAlias"></a>

```typescript
public readonly actionGetAccountAlias: string;
```

- *Type:* string

[Read] supportapp:GetAccountAlias.

---

##### `actionGetSlackOauthParameters`<sup>Required</sup> <a name="actionGetSlackOauthParameters" id="@cdk_utils/iam.supportapp.SupportappActions.property.actionGetSlackOauthParameters"></a>

```typescript
public readonly actionGetSlackOauthParameters: string;
```

- *Type:* string

[Read] supportapp:GetSlackOauthParameters.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.supportapp.SupportappActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.supportapp.SupportappActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.supportapp.SupportappActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.supportapp.SupportappActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.supportapp.SupportappActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSlackChannelConfiguration`<sup>Required</sup> <a name="CreateSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappActions.property.CreateSlackChannelConfiguration"></a>

```typescript
public readonly CreateSlackChannelConfiguration: string;
```

- *Type:* string

[Write] supportapp:CreateSlackChannelConfiguration.

---

##### `DeleteAccountAlias`<sup>Required</sup> <a name="DeleteAccountAlias" id="@cdk_utils/iam.supportapp.SupportappActions.property.DeleteAccountAlias"></a>

```typescript
public readonly DeleteAccountAlias: string;
```

- *Type:* string

[Write] supportapp:DeleteAccountAlias.

---

##### `DeleteSlackChannelConfiguration`<sup>Required</sup> <a name="DeleteSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappActions.property.DeleteSlackChannelConfiguration"></a>

```typescript
public readonly DeleteSlackChannelConfiguration: string;
```

- *Type:* string

[Write] supportapp:DeleteSlackChannelConfiguration.

---

##### `DeleteSlackWorkspaceConfiguration`<sup>Required</sup> <a name="DeleteSlackWorkspaceConfiguration" id="@cdk_utils/iam.supportapp.SupportappActions.property.DeleteSlackWorkspaceConfiguration"></a>

```typescript
public readonly DeleteSlackWorkspaceConfiguration: string;
```

- *Type:* string

[Write] supportapp:DeleteSlackWorkspaceConfiguration.

---

##### `DescribeSlackChannels`<sup>Required</sup> <a name="DescribeSlackChannels" id="@cdk_utils/iam.supportapp.SupportappActions.property.DescribeSlackChannels"></a>

```typescript
public readonly DescribeSlackChannels: string;
```

- *Type:* string

[Read] supportapp:DescribeSlackChannels.

---

##### `ListSlackChannelConfigurations`<sup>Required</sup> <a name="ListSlackChannelConfigurations" id="@cdk_utils/iam.supportapp.SupportappActions.property.ListSlackChannelConfigurations"></a>

```typescript
public readonly ListSlackChannelConfigurations: string;
```

- *Type:* string

[Read] supportapp:ListSlackChannelConfigurations.

---

##### `ListSlackWorkspaceConfigurations`<sup>Required</sup> <a name="ListSlackWorkspaceConfigurations" id="@cdk_utils/iam.supportapp.SupportappActions.property.ListSlackWorkspaceConfigurations"></a>

```typescript
public readonly ListSlackWorkspaceConfigurations: string;
```

- *Type:* string

[Read] supportapp:ListSlackWorkspaceConfigurations.

---

##### `PutAccountAlias`<sup>Required</sup> <a name="PutAccountAlias" id="@cdk_utils/iam.supportapp.SupportappActions.property.PutAccountAlias"></a>

```typescript
public readonly PutAccountAlias: string;
```

- *Type:* string

[Write] supportapp:PutAccountAlias.

---

##### `RedeemSlackOauthCode`<sup>Required</sup> <a name="RedeemSlackOauthCode" id="@cdk_utils/iam.supportapp.SupportappActions.property.RedeemSlackOauthCode"></a>

```typescript
public readonly RedeemSlackOauthCode: string;
```

- *Type:* string

[Write] supportapp:RedeemSlackOauthCode.

---

##### `RegisterSlackWorkspaceForOrganization`<sup>Required</sup> <a name="RegisterSlackWorkspaceForOrganization" id="@cdk_utils/iam.supportapp.SupportappActions.property.RegisterSlackWorkspaceForOrganization"></a>

```typescript
public readonly RegisterSlackWorkspaceForOrganization: string;
```

- *Type:* string

[Write] supportapp:RegisterSlackWorkspaceForOrganization.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.supportapp.SupportappActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateSlackChannelConfiguration`<sup>Required</sup> <a name="UpdateSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappActions.property.UpdateSlackChannelConfiguration"></a>

```typescript
public readonly UpdateSlackChannelConfiguration: string;
```

- *Type:* string

[Write] supportapp:UpdateSlackChannelConfiguration.

---

### SupportappOperations <a name="SupportappOperations" id="@cdk_utils/iam.supportapp.SupportappOperations"></a>

API operation to required IAM actions mapping for supportapp.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportapp.SupportappOperations.Initializer"></a>

```typescript
import { supportapp } from '@cdk_utils/iam'

new supportapp.SupportappOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.CreateSlackChannelConfiguration">CreateSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSlackChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteAccountAlias">DeleteAccountAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountAlias API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteSlackChannelConfiguration">DeleteSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlackChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteSlackWorkspaceConfiguration">DeleteSlackWorkspaceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlackWorkspaceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.ListSlackChannelConfigurations">ListSlackChannelConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSlackChannelConfigurations API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.ListSlackWorkspaceConfigurations">ListSlackWorkspaceConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSlackWorkspaceConfigurations API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.opGetAccountAlias">opGetAccountAlias</a></code> | <code>string[]</code> | IAM actions required for the GetAccountAlias API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.PutAccountAlias">PutAccountAlias</a></code> | <code>string[]</code> | IAM actions required for the PutAccountAlias API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.RegisterSlackWorkspaceForOrganization">RegisterSlackWorkspaceForOrganization</a></code> | <code>string[]</code> | IAM actions required for the RegisterSlackWorkspaceForOrganization API call. |
| <code><a href="#@cdk_utils/iam.supportapp.SupportappOperations.property.UpdateSlackChannelConfiguration">UpdateSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSlackChannelConfiguration API call. |

---

##### `CreateSlackChannelConfiguration`<sup>Required</sup> <a name="CreateSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappOperations.property.CreateSlackChannelConfiguration"></a>

```typescript
public readonly CreateSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSlackChannelConfiguration API call.

---

##### `DeleteAccountAlias`<sup>Required</sup> <a name="DeleteAccountAlias" id="@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteAccountAlias"></a>

```typescript
public readonly DeleteAccountAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountAlias API call.

---

##### `DeleteSlackChannelConfiguration`<sup>Required</sup> <a name="DeleteSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteSlackChannelConfiguration"></a>

```typescript
public readonly DeleteSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlackChannelConfiguration API call.

---

##### `DeleteSlackWorkspaceConfiguration`<sup>Required</sup> <a name="DeleteSlackWorkspaceConfiguration" id="@cdk_utils/iam.supportapp.SupportappOperations.property.DeleteSlackWorkspaceConfiguration"></a>

```typescript
public readonly DeleteSlackWorkspaceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlackWorkspaceConfiguration API call.

---

##### `ListSlackChannelConfigurations`<sup>Required</sup> <a name="ListSlackChannelConfigurations" id="@cdk_utils/iam.supportapp.SupportappOperations.property.ListSlackChannelConfigurations"></a>

```typescript
public readonly ListSlackChannelConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSlackChannelConfigurations API call.

---

##### `ListSlackWorkspaceConfigurations`<sup>Required</sup> <a name="ListSlackWorkspaceConfigurations" id="@cdk_utils/iam.supportapp.SupportappOperations.property.ListSlackWorkspaceConfigurations"></a>

```typescript
public readonly ListSlackWorkspaceConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSlackWorkspaceConfigurations API call.

---

##### `opGetAccountAlias`<sup>Required</sup> <a name="opGetAccountAlias" id="@cdk_utils/iam.supportapp.SupportappOperations.property.opGetAccountAlias"></a>

```typescript
public readonly opGetAccountAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountAlias API call.

---

##### `PutAccountAlias`<sup>Required</sup> <a name="PutAccountAlias" id="@cdk_utils/iam.supportapp.SupportappOperations.property.PutAccountAlias"></a>

```typescript
public readonly PutAccountAlias: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountAlias API call.

---

##### `RegisterSlackWorkspaceForOrganization`<sup>Required</sup> <a name="RegisterSlackWorkspaceForOrganization" id="@cdk_utils/iam.supportapp.SupportappOperations.property.RegisterSlackWorkspaceForOrganization"></a>

```typescript
public readonly RegisterSlackWorkspaceForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the RegisterSlackWorkspaceForOrganization API call.

---

##### `UpdateSlackChannelConfiguration`<sup>Required</sup> <a name="UpdateSlackChannelConfiguration" id="@cdk_utils/iam.supportapp.SupportappOperations.property.UpdateSlackChannelConfiguration"></a>

```typescript
public readonly UpdateSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSlackChannelConfiguration API call.

---


