# `grafana` Submodule <a name="`grafana` Submodule" id="@cdk_utils/iam.grafana"></a>


## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceArnComponents <a name="GrafanaWorkspaceArnComponents" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

const grafanaWorkspaceArnComponents: grafana.GrafanaWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### GrafanaWorkspaceArnProps <a name="GrafanaWorkspaceArnProps" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

const grafanaWorkspaceArnProps: grafana.GrafanaWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaActions <a name="GrafanaActions" id="@cdk_utils/iam.grafana.GrafanaActions"></a>

IAM action constants for the grafana service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.grafana.GrafanaActions.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

new grafana.GrafanaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.AssociateLicense">AssociateLicense</a></code> | <code>string</code> | [Write] grafana:AssociateLicense. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] grafana:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceApiKey">CreateWorkspaceApiKey</a></code> | <code>string</code> | [Write] grafana:CreateWorkspaceApiKey. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceServiceAccount">CreateWorkspaceServiceAccount</a></code> | <code>string</code> | [Write] grafana:CreateWorkspaceServiceAccount. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceServiceAccountToken">CreateWorkspaceServiceAccountToken</a></code> | <code>string</code> | [Write] grafana:CreateWorkspaceServiceAccountToken. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string</code> | [Write] grafana:DeleteWorkspace. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceApiKey">DeleteWorkspaceApiKey</a></code> | <code>string</code> | [Write] grafana:DeleteWorkspaceApiKey. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceServiceAccount">DeleteWorkspaceServiceAccount</a></code> | <code>string</code> | [Write] grafana:DeleteWorkspaceServiceAccount. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceServiceAccountToken">DeleteWorkspaceServiceAccountToken</a></code> | <code>string</code> | [Write] grafana:DeleteWorkspaceServiceAccountToken. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string</code> | [Read] grafana:DescribeWorkspace. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspaceAuthentication">DescribeWorkspaceAuthentication</a></code> | <code>string</code> | [Read] grafana:DescribeWorkspaceAuthentication. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspaceConfiguration">DescribeWorkspaceConfiguration</a></code> | <code>string</code> | [Read] grafana:DescribeWorkspaceConfiguration. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.DisassociateLicense">DisassociateLicense</a></code> | <code>string</code> | [Write] grafana:DisassociateLicense. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListPermissions">ListPermissions</a></code> | <code>string</code> | [List] grafana:ListPermissions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] grafana:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListVersions">ListVersions</a></code> | <code>string</code> | [List] grafana:ListVersions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [Read] grafana:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaceServiceAccounts">ListWorkspaceServiceAccounts</a></code> | <code>string</code> | [Read] grafana:ListWorkspaceServiceAccounts. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaceServiceAccountTokens">ListWorkspaceServiceAccountTokens</a></code> | <code>string</code> | [Read] grafana:ListWorkspaceServiceAccountTokens. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] grafana:TagResource. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] grafana:UntagResource. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.UpdatePermissions">UpdatePermissions</a></code> | <code>string</code> | [PermissionManagement] grafana:UpdatePermissions. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string</code> | [Write] grafana:UpdateWorkspace. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspaceAuthentication">UpdateWorkspaceAuthentication</a></code> | <code>string</code> | [Write] grafana:UpdateWorkspaceAuthentication. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspaceConfiguration">UpdateWorkspaceConfiguration</a></code> | <code>string</code> | [Write] grafana:UpdateWorkspaceConfiguration. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.grafana.GrafanaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.grafana.GrafanaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.grafana.GrafanaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.grafana.GrafanaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.grafana.GrafanaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateLicense`<sup>Required</sup> <a name="AssociateLicense" id="@cdk_utils/iam.grafana.GrafanaActions.property.AssociateLicense"></a>

```typescript
public readonly AssociateLicense: string;
```

- *Type:* string

[Write] grafana:AssociateLicense.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] grafana:CreateWorkspace.

---

##### `CreateWorkspaceApiKey`<sup>Required</sup> <a name="CreateWorkspaceApiKey" id="@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceApiKey"></a>

```typescript
public readonly CreateWorkspaceApiKey: string;
```

- *Type:* string

[Write] grafana:CreateWorkspaceApiKey.

---

##### `CreateWorkspaceServiceAccount`<sup>Required</sup> <a name="CreateWorkspaceServiceAccount" id="@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceServiceAccount"></a>

```typescript
public readonly CreateWorkspaceServiceAccount: string;
```

- *Type:* string

[Write] grafana:CreateWorkspaceServiceAccount.

---

##### `CreateWorkspaceServiceAccountToken`<sup>Required</sup> <a name="CreateWorkspaceServiceAccountToken" id="@cdk_utils/iam.grafana.GrafanaActions.property.CreateWorkspaceServiceAccountToken"></a>

```typescript
public readonly CreateWorkspaceServiceAccountToken: string;
```

- *Type:* string

[Write] grafana:CreateWorkspaceServiceAccountToken.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string;
```

- *Type:* string

[Write] grafana:DeleteWorkspace.

---

##### `DeleteWorkspaceApiKey`<sup>Required</sup> <a name="DeleteWorkspaceApiKey" id="@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceApiKey"></a>

```typescript
public readonly DeleteWorkspaceApiKey: string;
```

- *Type:* string

[Write] grafana:DeleteWorkspaceApiKey.

---

##### `DeleteWorkspaceServiceAccount`<sup>Required</sup> <a name="DeleteWorkspaceServiceAccount" id="@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceServiceAccount"></a>

```typescript
public readonly DeleteWorkspaceServiceAccount: string;
```

- *Type:* string

[Write] grafana:DeleteWorkspaceServiceAccount.

---

##### `DeleteWorkspaceServiceAccountToken`<sup>Required</sup> <a name="DeleteWorkspaceServiceAccountToken" id="@cdk_utils/iam.grafana.GrafanaActions.property.DeleteWorkspaceServiceAccountToken"></a>

```typescript
public readonly DeleteWorkspaceServiceAccountToken: string;
```

- *Type:* string

[Write] grafana:DeleteWorkspaceServiceAccountToken.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string;
```

- *Type:* string

[Read] grafana:DescribeWorkspace.

---

##### `DescribeWorkspaceAuthentication`<sup>Required</sup> <a name="DescribeWorkspaceAuthentication" id="@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspaceAuthentication"></a>

```typescript
public readonly DescribeWorkspaceAuthentication: string;
```

- *Type:* string

[Read] grafana:DescribeWorkspaceAuthentication.

---

##### `DescribeWorkspaceConfiguration`<sup>Required</sup> <a name="DescribeWorkspaceConfiguration" id="@cdk_utils/iam.grafana.GrafanaActions.property.DescribeWorkspaceConfiguration"></a>

```typescript
public readonly DescribeWorkspaceConfiguration: string;
```

- *Type:* string

[Read] grafana:DescribeWorkspaceConfiguration.

---

##### `DisassociateLicense`<sup>Required</sup> <a name="DisassociateLicense" id="@cdk_utils/iam.grafana.GrafanaActions.property.DisassociateLicense"></a>

```typescript
public readonly DisassociateLicense: string;
```

- *Type:* string

[Write] grafana:DisassociateLicense.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string;
```

- *Type:* string

[List] grafana:ListPermissions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] grafana:ListTagsForResource.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListVersions"></a>

```typescript
public readonly ListVersions: string;
```

- *Type:* string

[List] grafana:ListVersions.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[Read] grafana:ListWorkspaces.

---

##### `ListWorkspaceServiceAccounts`<sup>Required</sup> <a name="ListWorkspaceServiceAccounts" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaceServiceAccounts"></a>

```typescript
public readonly ListWorkspaceServiceAccounts: string;
```

- *Type:* string

[Read] grafana:ListWorkspaceServiceAccounts.

---

##### `ListWorkspaceServiceAccountTokens`<sup>Required</sup> <a name="ListWorkspaceServiceAccountTokens" id="@cdk_utils/iam.grafana.GrafanaActions.property.ListWorkspaceServiceAccountTokens"></a>

```typescript
public readonly ListWorkspaceServiceAccountTokens: string;
```

- *Type:* string

[Read] grafana:ListWorkspaceServiceAccountTokens.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.grafana.GrafanaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.grafana.GrafanaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] grafana:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.grafana.GrafanaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] grafana:UntagResource.

---

##### `UpdatePermissions`<sup>Required</sup> <a name="UpdatePermissions" id="@cdk_utils/iam.grafana.GrafanaActions.property.UpdatePermissions"></a>

```typescript
public readonly UpdatePermissions: string;
```

- *Type:* string

[PermissionManagement] grafana:UpdatePermissions.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string;
```

- *Type:* string

[Write] grafana:UpdateWorkspace.

---

##### `UpdateWorkspaceAuthentication`<sup>Required</sup> <a name="UpdateWorkspaceAuthentication" id="@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspaceAuthentication"></a>

```typescript
public readonly UpdateWorkspaceAuthentication: string;
```

- *Type:* string

[Write] grafana:UpdateWorkspaceAuthentication.

---

##### `UpdateWorkspaceConfiguration`<sup>Required</sup> <a name="UpdateWorkspaceConfiguration" id="@cdk_utils/iam.grafana.GrafanaActions.property.UpdateWorkspaceConfiguration"></a>

```typescript
public readonly UpdateWorkspaceConfiguration: string;
```

- *Type:* string

[Write] grafana:UpdateWorkspaceConfiguration.

---

### GrafanaConditions <a name="GrafanaConditions" id="@cdk_utils/iam.grafana.GrafanaConditions"></a>

Condition key constants and builders for grafana.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.grafana.GrafanaConditions.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

new grafana.GrafanaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.grafana.GrafanaConditions.requestTag"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.grafana.GrafanaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.grafana.GrafanaConditions.resourceTag"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.grafana.GrafanaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.grafana.GrafanaConditions.tagKeys"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.grafana.GrafanaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.grafana.GrafanaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.grafana.GrafanaConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.grafana.GrafanaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.grafana.GrafanaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GrafanaOperations <a name="GrafanaOperations" id="@cdk_utils/iam.grafana.GrafanaOperations"></a>

API operation to required IAM actions mapping for grafana.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.grafana.GrafanaOperations.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

new grafana.GrafanaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.AssociateLicense">AssociateLicense</a></code> | <code>string[]</code> | IAM actions required for the AssociateLicense API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceApiKey">CreateWorkspaceApiKey</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceApiKey API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceServiceAccount">CreateWorkspaceServiceAccount</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceServiceAccount API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceServiceAccountToken">CreateWorkspaceServiceAccountToken</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspaceServiceAccountToken API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspace API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceApiKey">DeleteWorkspaceApiKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceApiKey API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceServiceAccount">DeleteWorkspaceServiceAccount</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceServiceAccount API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceServiceAccountToken">DeleteWorkspaceServiceAccountToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceServiceAccountToken API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspace API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspaceAuthentication">DescribeWorkspaceAuthentication</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceAuthentication API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspaceConfiguration">DescribeWorkspaceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspaceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.DisassociateLicense">DisassociateLicense</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLicense API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListPermissions">ListPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListPermissions API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListVersions">ListVersions</a></code> | <code>string[]</code> | IAM actions required for the ListVersions API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaceServiceAccounts">ListWorkspaceServiceAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaceServiceAccounts API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaceServiceAccountTokens">ListWorkspaceServiceAccountTokens</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaceServiceAccountTokens API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.UpdatePermissions">UpdatePermissions</a></code> | <code>string[]</code> | IAM actions required for the UpdatePermissions API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspace">UpdateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspaceAuthentication">UpdateWorkspaceAuthentication</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceAuthentication API call. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspaceConfiguration">UpdateWorkspaceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceConfiguration API call. |

---

##### `AssociateLicense`<sup>Required</sup> <a name="AssociateLicense" id="@cdk_utils/iam.grafana.GrafanaOperations.property.AssociateLicense"></a>

```typescript
public readonly AssociateLicense: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLicense API call.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspace API call.

---

##### `CreateWorkspaceApiKey`<sup>Required</sup> <a name="CreateWorkspaceApiKey" id="@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceApiKey"></a>

```typescript
public readonly CreateWorkspaceApiKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceApiKey API call.

---

##### `CreateWorkspaceServiceAccount`<sup>Required</sup> <a name="CreateWorkspaceServiceAccount" id="@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceServiceAccount"></a>

```typescript
public readonly CreateWorkspaceServiceAccount: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceServiceAccount API call.

---

##### `CreateWorkspaceServiceAccountToken`<sup>Required</sup> <a name="CreateWorkspaceServiceAccountToken" id="@cdk_utils/iam.grafana.GrafanaOperations.property.CreateWorkspaceServiceAccountToken"></a>

```typescript
public readonly CreateWorkspaceServiceAccountToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspaceServiceAccountToken API call.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspace API call.

---

##### `DeleteWorkspaceApiKey`<sup>Required</sup> <a name="DeleteWorkspaceApiKey" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceApiKey"></a>

```typescript
public readonly DeleteWorkspaceApiKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceApiKey API call.

---

##### `DeleteWorkspaceServiceAccount`<sup>Required</sup> <a name="DeleteWorkspaceServiceAccount" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceServiceAccount"></a>

```typescript
public readonly DeleteWorkspaceServiceAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceServiceAccount API call.

---

##### `DeleteWorkspaceServiceAccountToken`<sup>Required</sup> <a name="DeleteWorkspaceServiceAccountToken" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DeleteWorkspaceServiceAccountToken"></a>

```typescript
public readonly DeleteWorkspaceServiceAccountToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceServiceAccountToken API call.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspace API call.

---

##### `DescribeWorkspaceAuthentication`<sup>Required</sup> <a name="DescribeWorkspaceAuthentication" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspaceAuthentication"></a>

```typescript
public readonly DescribeWorkspaceAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceAuthentication API call.

---

##### `DescribeWorkspaceConfiguration`<sup>Required</sup> <a name="DescribeWorkspaceConfiguration" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DescribeWorkspaceConfiguration"></a>

```typescript
public readonly DescribeWorkspaceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspaceConfiguration API call.

---

##### `DisassociateLicense`<sup>Required</sup> <a name="DisassociateLicense" id="@cdk_utils/iam.grafana.GrafanaOperations.property.DisassociateLicense"></a>

```typescript
public readonly DisassociateLicense: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLicense API call.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListVersions"></a>

```typescript
public readonly ListVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListVersions API call.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaces API call.

---

##### `ListWorkspaceServiceAccounts`<sup>Required</sup> <a name="ListWorkspaceServiceAccounts" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaceServiceAccounts"></a>

```typescript
public readonly ListWorkspaceServiceAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaceServiceAccounts API call.

---

##### `ListWorkspaceServiceAccountTokens`<sup>Required</sup> <a name="ListWorkspaceServiceAccountTokens" id="@cdk_utils/iam.grafana.GrafanaOperations.property.ListWorkspaceServiceAccountTokens"></a>

```typescript
public readonly ListWorkspaceServiceAccountTokens: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaceServiceAccountTokens API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.grafana.GrafanaOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.grafana.GrafanaOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePermissions`<sup>Required</sup> <a name="UpdatePermissions" id="@cdk_utils/iam.grafana.GrafanaOperations.property.UpdatePermissions"></a>

```typescript
public readonly UpdatePermissions: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePermissions API call.

---

##### `UpdateWorkspace`<sup>Required</sup> <a name="UpdateWorkspace" id="@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspace"></a>

```typescript
public readonly UpdateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspace API call.

---

##### `UpdateWorkspaceAuthentication`<sup>Required</sup> <a name="UpdateWorkspaceAuthentication" id="@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspaceAuthentication"></a>

```typescript
public readonly UpdateWorkspaceAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceAuthentication API call.

---

##### `UpdateWorkspaceConfiguration`<sup>Required</sup> <a name="UpdateWorkspaceConfiguration" id="@cdk_utils/iam.grafana.GrafanaOperations.property.UpdateWorkspaceConfiguration"></a>

```typescript
public readonly UpdateWorkspaceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceConfiguration API call.

---

### GrafanaResources <a name="GrafanaResources" id="@cdk_utils/iam.grafana.GrafanaResources"></a>

ARN builders, validators, and parsers for grafana resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.grafana.GrafanaResources.Initializer"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

new grafana.GrafanaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.grafana.GrafanaResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.grafana.GrafanaResources.isValidWorkspaceArn"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.grafana.GrafanaResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.grafana.GrafanaResources.parseWorkspaceArn"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.grafana.GrafanaResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.grafana.GrafanaResources.workspace"></a>

```typescript
import { grafana } from '@cdk_utils/iam'

grafana.GrafanaResources.workspace(props: GrafanaWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.grafana.GrafanaResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.grafana.GrafanaWorkspaceArnProps">GrafanaWorkspaceArnProps</a>

---




