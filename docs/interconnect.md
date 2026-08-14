# `interconnect` Submodule <a name="`interconnect` Submodule" id="@cdk_utils/iam.interconnect"></a>


## Structs <a name="Structs" id="Structs"></a>

### InterconnectConnectionArnComponents <a name="InterconnectConnectionArnComponents" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

const interconnectConnectionArnComponents: interconnect.InterconnectConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### InterconnectConnectionArnProps <a name="InterconnectConnectionArnProps" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

const interconnectConnectionArnProps: interconnect.InterconnectConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.interconnect.InterconnectConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### InterconnectEnvironmentArnComponents <a name="InterconnectEnvironmentArnComponents" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

const interconnectEnvironmentArnComponents: interconnect.InterconnectEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### InterconnectEnvironmentArnProps <a name="InterconnectEnvironmentArnProps" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

const interconnectEnvironmentArnProps: interconnect.InterconnectEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### InterconnectActions <a name="InterconnectActions" id="@cdk_utils/iam.interconnect.InterconnectActions"></a>

IAM action constants for the interconnect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.interconnect.InterconnectActions.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

new interconnect.InterconnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AcceptConnectionProposal">AcceptConnectionProposal</a></code> | <code>string</code> | [Write] interconnect:AcceptConnectionProposal. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] interconnect:GetConnection. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] interconnect:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] interconnect:CreateConnection. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] interconnect:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.DescribeConnectionProposal">DescribeConnectionProposal</a></code> | <code>string</code> | [Read] interconnect:DescribeConnectionProposal. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.ListAttachPoints">ListAttachPoints</a></code> | <code>string</code> | [Read] interconnect:ListAttachPoints. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] interconnect:ListConnections. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] interconnect:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] interconnect:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] interconnect:TagResource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] interconnect:UntagResource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] interconnect:UpdateConnection. |

---

##### `AcceptConnectionProposal`<sup>Required</sup> <a name="AcceptConnectionProposal" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AcceptConnectionProposal"></a>

```typescript
public readonly AcceptConnectionProposal: string;
```

- *Type:* string

[Write] interconnect:AcceptConnectionProposal.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.interconnect.InterconnectActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] interconnect:GetConnection.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.interconnect.InterconnectActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] interconnect:GetEnvironment.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.interconnect.InterconnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.interconnect.InterconnectActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] interconnect:CreateConnection.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.interconnect.InterconnectActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] interconnect:DeleteConnection.

---

##### `DescribeConnectionProposal`<sup>Required</sup> <a name="DescribeConnectionProposal" id="@cdk_utils/iam.interconnect.InterconnectActions.property.DescribeConnectionProposal"></a>

```typescript
public readonly DescribeConnectionProposal: string;
```

- *Type:* string

[Read] interconnect:DescribeConnectionProposal.

---

##### `ListAttachPoints`<sup>Required</sup> <a name="ListAttachPoints" id="@cdk_utils/iam.interconnect.InterconnectActions.property.ListAttachPoints"></a>

```typescript
public readonly ListAttachPoints: string;
```

- *Type:* string

[Read] interconnect:ListAttachPoints.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.interconnect.InterconnectActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] interconnect:ListConnections.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.interconnect.InterconnectActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] interconnect:ListEnvironments.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.interconnect.InterconnectActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] interconnect:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.interconnect.InterconnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.interconnect.InterconnectActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] interconnect:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.interconnect.InterconnectActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] interconnect:UntagResource.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.interconnect.InterconnectActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] interconnect:UpdateConnection.

---

### InterconnectConditions <a name="InterconnectConditions" id="@cdk_utils/iam.interconnect.InterconnectConditions"></a>

Condition key constants and builders for interconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.interconnect.InterconnectConditions.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

new interconnect.InterconnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.interconnect.InterconnectConditions.requestTag"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.interconnect.InterconnectConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.interconnect.InterconnectConditions.resourceTag"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.interconnect.InterconnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.interconnect.InterconnectConditions.tagKeys"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.interconnect.InterconnectConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.AcceptConnectionProposalConditionKeys">AcceptConnectionProposalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptConnectionProposal action. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AcceptConnectionProposalConditionKeys`<sup>Required</sup> <a name="AcceptConnectionProposalConditionKeys" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.AcceptConnectionProposalConditionKeys"></a>

```typescript
public readonly AcceptConnectionProposalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptConnectionProposal action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.interconnect.InterconnectConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### InterconnectOperations <a name="InterconnectOperations" id="@cdk_utils/iam.interconnect.InterconnectOperations"></a>

API operation to required IAM actions mapping for interconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.interconnect.InterconnectOperations.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

new interconnect.InterconnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.AcceptConnectionProposal">AcceptConnectionProposal</a></code> | <code>string[]</code> | IAM actions required for the AcceptConnectionProposal API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.DescribeConnectionProposal">DescribeConnectionProposal</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionProposal API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.ListAttachPoints">ListAttachPoints</a></code> | <code>string[]</code> | IAM actions required for the ListAttachPoints API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |

---

##### `AcceptConnectionProposal`<sup>Required</sup> <a name="AcceptConnectionProposal" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.AcceptConnectionProposal"></a>

```typescript
public readonly AcceptConnectionProposal: string[];
```

- *Type:* string[]

IAM actions required for the AcceptConnectionProposal API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DescribeConnectionProposal`<sup>Required</sup> <a name="DescribeConnectionProposal" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.DescribeConnectionProposal"></a>

```typescript
public readonly DescribeConnectionProposal: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionProposal API call.

---

##### `ListAttachPoints`<sup>Required</sup> <a name="ListAttachPoints" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.ListAttachPoints"></a>

```typescript
public readonly ListAttachPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachPoints API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.interconnect.InterconnectOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

### InterconnectResources <a name="InterconnectResources" id="@cdk_utils/iam.interconnect.InterconnectResources"></a>

ARN builders, validators, and parsers for interconnect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.interconnect.InterconnectResources.Initializer"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

new interconnect.InterconnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.interconnect.InterconnectResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |

---

##### `connection` <a name="connection" id="@cdk_utils/iam.interconnect.InterconnectResources.connection"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.connection(props: InterconnectConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.interconnect.InterconnectResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.interconnect.InterconnectConnectionArnProps">InterconnectConnectionArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.interconnect.InterconnectResources.environment"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.environment(props: InterconnectEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.interconnect.InterconnectResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.interconnect.InterconnectEnvironmentArnProps">InterconnectEnvironmentArnProps</a>

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.interconnect.InterconnectResources.isValidConnectionArn"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.interconnect.InterconnectResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.interconnect.InterconnectResources.isValidEnvironmentArn"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.interconnect.InterconnectResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.interconnect.InterconnectResources.parseConnectionArn"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.interconnect.InterconnectResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.interconnect.InterconnectResources.parseEnvironmentArn"></a>

```typescript
import { interconnect } from '@cdk_utils/iam'

interconnect.InterconnectResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.interconnect.InterconnectResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---




