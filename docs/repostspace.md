# `repostspace` Submodule <a name="`repostspace` Submodule" id="@cdk_utils/iam.repostspace"></a>


## Structs <a name="Structs" id="Structs"></a>

### RepostspaceSpaceArnComponents <a name="RepostspaceSpaceArnComponents" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents"></a>

Parsed components of a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

const repostspaceSpaceArnComponents: repostspace.RepostspaceSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### RepostspaceSpaceArnProps <a name="RepostspaceSpaceArnProps" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps"></a>

Properties for building a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

const repostspaceSpaceArnProps: repostspace.RepostspaceSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RepostspaceActions <a name="RepostspaceActions" id="@cdk_utils/iam.repostspace.RepostspaceActions"></a>

IAM action constants for the repostspace service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.repostspace.RepostspaceActions.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

new repostspace.RepostspaceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.actionGetChannel">actionGetChannel</a></code> | <code>string</code> | [Read] repostspace:GetChannel. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.actionGetSpace">actionGetSpace</a></code> | <code>string</code> | [Read] repostspace:GetSpace. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchAddChannelRoleToAccessors">BatchAddChannelRoleToAccessors</a></code> | <code>string</code> | [Write] repostspace:BatchAddChannelRoleToAccessors. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchAddRole">BatchAddRole</a></code> | <code>string</code> | [Write] repostspace:BatchAddRole. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchRemoveChannelRoleFromAccessors">BatchRemoveChannelRoleFromAccessors</a></code> | <code>string</code> | [Write] repostspace:BatchRemoveChannelRoleFromAccessors. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchRemoveRole">BatchRemoveRole</a></code> | <code>string</code> | [Write] repostspace:BatchRemoveRole. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] repostspace:CreateChannel. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.CreateSpace">CreateSpace</a></code> | <code>string</code> | [Write] repostspace:CreateSpace. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.DeleteSpace">DeleteSpace</a></code> | <code>string</code> | [Write] repostspace:DeleteSpace. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.DeregisterAdmin">DeregisterAdmin</a></code> | <code>string</code> | [Write] repostspace:DeregisterAdmin. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [Read] repostspace:ListChannels. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.ListSpaces">ListSpaces</a></code> | <code>string</code> | [Read] repostspace:ListSpaces. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] repostspace:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.RegisterAdmin">RegisterAdmin</a></code> | <code>string</code> | [Write] repostspace:RegisterAdmin. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.SendInvites">SendInvites</a></code> | <code>string</code> | [Write] repostspace:SendInvites. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] repostspace:TagResource. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] repostspace:UntagResource. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] repostspace:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceActions.property.UpdateSpace">UpdateSpace</a></code> | <code>string</code> | [Write] repostspace:UpdateSpace. |

---

##### `actionGetChannel`<sup>Required</sup> <a name="actionGetChannel" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.actionGetChannel"></a>

```typescript
public readonly actionGetChannel: string;
```

- *Type:* string

[Read] repostspace:GetChannel.

---

##### `actionGetSpace`<sup>Required</sup> <a name="actionGetSpace" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.actionGetSpace"></a>

```typescript
public readonly actionGetSpace: string;
```

- *Type:* string

[Read] repostspace:GetSpace.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchAddChannelRoleToAccessors`<sup>Required</sup> <a name="BatchAddChannelRoleToAccessors" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchAddChannelRoleToAccessors"></a>

```typescript
public readonly BatchAddChannelRoleToAccessors: string;
```

- *Type:* string

[Write] repostspace:BatchAddChannelRoleToAccessors.

---

##### `BatchAddRole`<sup>Required</sup> <a name="BatchAddRole" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchAddRole"></a>

```typescript
public readonly BatchAddRole: string;
```

- *Type:* string

[Write] repostspace:BatchAddRole.

---

##### `BatchRemoveChannelRoleFromAccessors`<sup>Required</sup> <a name="BatchRemoveChannelRoleFromAccessors" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchRemoveChannelRoleFromAccessors"></a>

```typescript
public readonly BatchRemoveChannelRoleFromAccessors: string;
```

- *Type:* string

[Write] repostspace:BatchRemoveChannelRoleFromAccessors.

---

##### `BatchRemoveRole`<sup>Required</sup> <a name="BatchRemoveRole" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.BatchRemoveRole"></a>

```typescript
public readonly BatchRemoveRole: string;
```

- *Type:* string

[Write] repostspace:BatchRemoveRole.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] repostspace:CreateChannel.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string;
```

- *Type:* string

[Write] repostspace:CreateSpace.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string;
```

- *Type:* string

[Write] repostspace:DeleteSpace.

---

##### `DeregisterAdmin`<sup>Required</sup> <a name="DeregisterAdmin" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.DeregisterAdmin"></a>

```typescript
public readonly DeregisterAdmin: string;
```

- *Type:* string

[Write] repostspace:DeregisterAdmin.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[Read] repostspace:ListChannels.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string;
```

- *Type:* string

[Read] repostspace:ListSpaces.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] repostspace:ListTagsForResource.

---

##### `RegisterAdmin`<sup>Required</sup> <a name="RegisterAdmin" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.RegisterAdmin"></a>

```typescript
public readonly RegisterAdmin: string;
```

- *Type:* string

[Write] repostspace:RegisterAdmin.

---

##### `SendInvites`<sup>Required</sup> <a name="SendInvites" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.SendInvites"></a>

```typescript
public readonly SendInvites: string;
```

- *Type:* string

[Write] repostspace:SendInvites.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] repostspace:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] repostspace:UntagResource.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] repostspace:UpdateChannel.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.repostspace.RepostspaceActions.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string;
```

- *Type:* string

[Write] repostspace:UpdateSpace.

---

### RepostspaceConditions <a name="RepostspaceConditions" id="@cdk_utils/iam.repostspace.RepostspaceConditions"></a>

Condition key constants and builders for repostspace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.repostspace.RepostspaceConditions.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

new repostspace.RepostspaceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.repostspace.RepostspaceConditions.requestTag"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.repostspace.RepostspaceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.repostspace.RepostspaceConditions.resourceTag"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.repostspace.RepostspaceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.repostspace.RepostspaceConditions.tagKeys"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.repostspace.RepostspaceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.CreateSpaceConditionKeys">CreateSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSpace action. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSpaceConditionKeys`<sup>Required</sup> <a name="CreateSpaceConditionKeys" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.CreateSpaceConditionKeys"></a>

```typescript
public readonly CreateSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSpace action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.repostspace.RepostspaceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RepostspaceOperations <a name="RepostspaceOperations" id="@cdk_utils/iam.repostspace.RepostspaceOperations"></a>

API operation to required IAM actions mapping for repostspace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.repostspace.RepostspaceOperations.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

new repostspace.RepostspaceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchAddChannelRoleToAccessors">BatchAddChannelRoleToAccessors</a></code> | <code>string[]</code> | IAM actions required for the BatchAddChannelRoleToAccessors API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchAddRole">BatchAddRole</a></code> | <code>string[]</code> | IAM actions required for the BatchAddRole API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchRemoveChannelRoleFromAccessors">BatchRemoveChannelRoleFromAccessors</a></code> | <code>string[]</code> | IAM actions required for the BatchRemoveChannelRoleFromAccessors API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchRemoveRole">BatchRemoveRole</a></code> | <code>string[]</code> | IAM actions required for the BatchRemoveRole API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.CreateSpace">CreateSpace</a></code> | <code>string[]</code> | IAM actions required for the CreateSpace API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.DeleteSpace">DeleteSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpace API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.DeregisterAdmin">DeregisterAdmin</a></code> | <code>string[]</code> | IAM actions required for the DeregisterAdmin API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListSpaces">ListSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListSpaces API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.opGetChannel">opGetChannel</a></code> | <code>string[]</code> | IAM actions required for the GetChannel API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.opGetSpace">opGetSpace</a></code> | <code>string[]</code> | IAM actions required for the GetSpace API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.RegisterAdmin">RegisterAdmin</a></code> | <code>string[]</code> | IAM actions required for the RegisterAdmin API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.SendInvites">SendInvites</a></code> | <code>string[]</code> | IAM actions required for the SendInvites API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceOperations.property.UpdateSpace">UpdateSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpace API call. |

---

##### `BatchAddChannelRoleToAccessors`<sup>Required</sup> <a name="BatchAddChannelRoleToAccessors" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchAddChannelRoleToAccessors"></a>

```typescript
public readonly BatchAddChannelRoleToAccessors: string[];
```

- *Type:* string[]

IAM actions required for the BatchAddChannelRoleToAccessors API call.

---

##### `BatchAddRole`<sup>Required</sup> <a name="BatchAddRole" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchAddRole"></a>

```typescript
public readonly BatchAddRole: string[];
```

- *Type:* string[]

IAM actions required for the BatchAddRole API call.

---

##### `BatchRemoveChannelRoleFromAccessors`<sup>Required</sup> <a name="BatchRemoveChannelRoleFromAccessors" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchRemoveChannelRoleFromAccessors"></a>

```typescript
public readonly BatchRemoveChannelRoleFromAccessors: string[];
```

- *Type:* string[]

IAM actions required for the BatchRemoveChannelRoleFromAccessors API call.

---

##### `BatchRemoveRole`<sup>Required</sup> <a name="BatchRemoveRole" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.BatchRemoveRole"></a>

```typescript
public readonly BatchRemoveRole: string[];
```

- *Type:* string[]

IAM actions required for the BatchRemoveRole API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string[];
```

- *Type:* string[]

IAM actions required for the CreateSpace API call.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpace API call.

---

##### `DeregisterAdmin`<sup>Required</sup> <a name="DeregisterAdmin" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.DeregisterAdmin"></a>

```typescript
public readonly DeregisterAdmin: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterAdmin API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListSpaces API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetChannel`<sup>Required</sup> <a name="opGetChannel" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.opGetChannel"></a>

```typescript
public readonly opGetChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetChannel API call.

---

##### `opGetSpace`<sup>Required</sup> <a name="opGetSpace" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.opGetSpace"></a>

```typescript
public readonly opGetSpace: string[];
```

- *Type:* string[]

IAM actions required for the GetSpace API call.

---

##### `RegisterAdmin`<sup>Required</sup> <a name="RegisterAdmin" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.RegisterAdmin"></a>

```typescript
public readonly RegisterAdmin: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAdmin API call.

---

##### `SendInvites`<sup>Required</sup> <a name="SendInvites" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.SendInvites"></a>

```typescript
public readonly SendInvites: string[];
```

- *Type:* string[]

IAM actions required for the SendInvites API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.repostspace.RepostspaceOperations.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpace API call.

---

### RepostspaceResources <a name="RepostspaceResources" id="@cdk_utils/iam.repostspace.RepostspaceResources"></a>

ARN builders, validators, and parsers for repostspace resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.repostspace.RepostspaceResources.Initializer"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

new repostspace.RepostspaceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceResources.isValidSpaceArn">isValidSpaceArn</a></code> | Validates whether a string is a valid ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceResources.parseSpaceArn">parseSpaceArn</a></code> | Parses a space ARN into its components. |
| <code><a href="#@cdk_utils/iam.repostspace.RepostspaceResources.space">space</a></code> | Builds an ARN for the space resource. |

---

##### `isValidSpaceArn` <a name="isValidSpaceArn" id="@cdk_utils/iam.repostspace.RepostspaceResources.isValidSpaceArn"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceResources.isValidSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the space resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.repostspace.RepostspaceResources.isValidSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpaceArn` <a name="parseSpaceArn" id="@cdk_utils/iam.repostspace.RepostspaceResources.parseSpaceArn"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceResources.parseSpaceArn(arn: string)
```

Parses a space ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.repostspace.RepostspaceResources.parseSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `space` <a name="space" id="@cdk_utils/iam.repostspace.RepostspaceResources.space"></a>

```typescript
import { repostspace } from '@cdk_utils/iam'

repostspace.RepostspaceResources.space(props: RepostspaceSpaceArnProps)
```

Builds an ARN for the space resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.repostspace.RepostspaceResources.space.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.repostspace.RepostspaceSpaceArnProps">RepostspaceSpaceArnProps</a>

---




