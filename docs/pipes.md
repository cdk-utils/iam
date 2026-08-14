# `pipes` Submodule <a name="`pipes` Submodule" id="@cdk_utils/iam.pipes"></a>


## Structs <a name="Structs" id="Structs"></a>

### PipesPipeArnComponents <a name="PipesPipeArnComponents" id="@cdk_utils/iam.pipes.PipesPipeArnComponents"></a>

Parsed components of a pipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pipes.PipesPipeArnComponents.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

const pipesPipeArnComponents: pipes.PipesPipeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pipes.PipesPipeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.pipes.PipesPipeArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pipes.PipesPipeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pipes.PipesPipeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PipesPipeArnProps <a name="PipesPipeArnProps" id="@cdk_utils/iam.pipes.PipesPipeArnProps"></a>

Properties for building a pipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pipes.PipesPipeArnProps.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

const pipesPipeArnProps: pipes.PipesPipeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pipes.PipesPipeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.pipes.PipesPipeArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pipes.PipesPipeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pipes.PipesPipeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pipes.PipesPipeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PipesActions <a name="PipesActions" id="@cdk_utils/iam.pipes.PipesActions"></a>

IAM action constants for the pipes service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pipes.PipesActions.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

new pipes.PipesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.CreatePipe">CreatePipe</a></code> | <code>string</code> | [Write] pipes:CreatePipe. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.DeletePipe">DeletePipe</a></code> | <code>string</code> | [Write] pipes:DeletePipe. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.DescribePipe">DescribePipe</a></code> | <code>string</code> | [Read] pipes:DescribePipe. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.ListPipes">ListPipes</a></code> | <code>string</code> | [List] pipes:ListPipes. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] pipes:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.StartPipe">StartPipe</a></code> | <code>string</code> | [Write] pipes:StartPipe. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.StopPipe">StopPipe</a></code> | <code>string</code> | [Write] pipes:StopPipe. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] pipes:TagResource. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] pipes:UntagResource. |
| <code><a href="#@cdk_utils/iam.pipes.PipesActions.property.UpdatePipe">UpdatePipe</a></code> | <code>string</code> | [Write] pipes:UpdatePipe. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pipes.PipesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pipes.PipesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pipes.PipesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pipes.PipesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pipes.PipesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreatePipe`<sup>Required</sup> <a name="CreatePipe" id="@cdk_utils/iam.pipes.PipesActions.property.CreatePipe"></a>

```typescript
public readonly CreatePipe: string;
```

- *Type:* string

[Write] pipes:CreatePipe.

---

##### `DeletePipe`<sup>Required</sup> <a name="DeletePipe" id="@cdk_utils/iam.pipes.PipesActions.property.DeletePipe"></a>

```typescript
public readonly DeletePipe: string;
```

- *Type:* string

[Write] pipes:DeletePipe.

---

##### `DescribePipe`<sup>Required</sup> <a name="DescribePipe" id="@cdk_utils/iam.pipes.PipesActions.property.DescribePipe"></a>

```typescript
public readonly DescribePipe: string;
```

- *Type:* string

[Read] pipes:DescribePipe.

---

##### `ListPipes`<sup>Required</sup> <a name="ListPipes" id="@cdk_utils/iam.pipes.PipesActions.property.ListPipes"></a>

```typescript
public readonly ListPipes: string;
```

- *Type:* string

[List] pipes:ListPipes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pipes.PipesActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] pipes:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pipes.PipesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPipe`<sup>Required</sup> <a name="StartPipe" id="@cdk_utils/iam.pipes.PipesActions.property.StartPipe"></a>

```typescript
public readonly StartPipe: string;
```

- *Type:* string

[Write] pipes:StartPipe.

---

##### `StopPipe`<sup>Required</sup> <a name="StopPipe" id="@cdk_utils/iam.pipes.PipesActions.property.StopPipe"></a>

```typescript
public readonly StopPipe: string;
```

- *Type:* string

[Write] pipes:StopPipe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pipes.PipesActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] pipes:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pipes.PipesActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] pipes:UntagResource.

---

##### `UpdatePipe`<sup>Required</sup> <a name="UpdatePipe" id="@cdk_utils/iam.pipes.PipesActions.property.UpdatePipe"></a>

```typescript
public readonly UpdatePipe: string;
```

- *Type:* string

[Write] pipes:UpdatePipe.

---

### PipesConditions <a name="PipesConditions" id="@cdk_utils/iam.pipes.PipesConditions"></a>

Condition key constants and builders for pipes.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pipes.PipesConditions.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

new pipes.PipesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.pipes.PipesConditions.requestTag"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pipes.PipesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.pipes.PipesConditions.resourceTag"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pipes.PipesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.pipes.PipesConditions.tagKeys"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pipes.PipesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.CreatePipeConditionKeys">CreatePipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipe action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.DeletePipeConditionKeys">DeletePipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePipe action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.DescribePipeConditionKeys">DescribePipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePipe action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.StartPipeConditionKeys">StartPipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartPipe action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.StopPipeConditionKeys">StopPipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopPipe action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.pipes.PipesConditions.property.UpdatePipeConditionKeys">UpdatePipeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePipe action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.pipes.PipesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.pipes.PipesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.pipes.PipesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePipeConditionKeys`<sup>Required</sup> <a name="CreatePipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.CreatePipeConditionKeys"></a>

```typescript
public readonly CreatePipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipe action.

---

##### `DeletePipeConditionKeys`<sup>Required</sup> <a name="DeletePipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.DeletePipeConditionKeys"></a>

```typescript
public readonly DeletePipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePipe action.

---

##### `DescribePipeConditionKeys`<sup>Required</sup> <a name="DescribePipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.DescribePipeConditionKeys"></a>

```typescript
public readonly DescribePipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePipe action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartPipeConditionKeys`<sup>Required</sup> <a name="StartPipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.StartPipeConditionKeys"></a>

```typescript
public readonly StartPipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartPipe action.

---

##### `StopPipeConditionKeys`<sup>Required</sup> <a name="StopPipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.StopPipeConditionKeys"></a>

```typescript
public readonly StopPipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopPipe action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePipeConditionKeys`<sup>Required</sup> <a name="UpdatePipeConditionKeys" id="@cdk_utils/iam.pipes.PipesConditions.property.UpdatePipeConditionKeys"></a>

```typescript
public readonly UpdatePipeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePipe action.

---

### PipesOperations <a name="PipesOperations" id="@cdk_utils/iam.pipes.PipesOperations"></a>

API operation to required IAM actions mapping for pipes.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pipes.PipesOperations.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

new pipes.PipesOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.CreatePipe">CreatePipe</a></code> | <code>string[]</code> | IAM actions required for the CreatePipe API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.DeletePipe">DeletePipe</a></code> | <code>string[]</code> | IAM actions required for the DeletePipe API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.DescribePipe">DescribePipe</a></code> | <code>string[]</code> | IAM actions required for the DescribePipe API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.ListPipes">ListPipes</a></code> | <code>string[]</code> | IAM actions required for the ListPipes API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.StartPipe">StartPipe</a></code> | <code>string[]</code> | IAM actions required for the StartPipe API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.StopPipe">StopPipe</a></code> | <code>string[]</code> | IAM actions required for the StopPipe API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.pipes.PipesOperations.property.UpdatePipe">UpdatePipe</a></code> | <code>string[]</code> | IAM actions required for the UpdatePipe API call. |

---

##### `CreatePipe`<sup>Required</sup> <a name="CreatePipe" id="@cdk_utils/iam.pipes.PipesOperations.property.CreatePipe"></a>

```typescript
public readonly CreatePipe: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipe API call.

---

##### `DeletePipe`<sup>Required</sup> <a name="DeletePipe" id="@cdk_utils/iam.pipes.PipesOperations.property.DeletePipe"></a>

```typescript
public readonly DeletePipe: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipe API call.

---

##### `DescribePipe`<sup>Required</sup> <a name="DescribePipe" id="@cdk_utils/iam.pipes.PipesOperations.property.DescribePipe"></a>

```typescript
public readonly DescribePipe: string[];
```

- *Type:* string[]

IAM actions required for the DescribePipe API call.

---

##### `ListPipes`<sup>Required</sup> <a name="ListPipes" id="@cdk_utils/iam.pipes.PipesOperations.property.ListPipes"></a>

```typescript
public readonly ListPipes: string[];
```

- *Type:* string[]

IAM actions required for the ListPipes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pipes.PipesOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `StartPipe`<sup>Required</sup> <a name="StartPipe" id="@cdk_utils/iam.pipes.PipesOperations.property.StartPipe"></a>

```typescript
public readonly StartPipe: string[];
```

- *Type:* string[]

IAM actions required for the StartPipe API call.

---

##### `StopPipe`<sup>Required</sup> <a name="StopPipe" id="@cdk_utils/iam.pipes.PipesOperations.property.StopPipe"></a>

```typescript
public readonly StopPipe: string[];
```

- *Type:* string[]

IAM actions required for the StopPipe API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pipes.PipesOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pipes.PipesOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePipe`<sup>Required</sup> <a name="UpdatePipe" id="@cdk_utils/iam.pipes.PipesOperations.property.UpdatePipe"></a>

```typescript
public readonly UpdatePipe: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePipe API call.

---

### PipesResources <a name="PipesResources" id="@cdk_utils/iam.pipes.PipesResources"></a>

ARN builders, validators, and parsers for pipes resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pipes.PipesResources.Initializer"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

new pipes.PipesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pipes.PipesResources.isValidPipeArn">isValidPipeArn</a></code> | Validates whether a string is a valid ARN for the pipe resource. |
| <code><a href="#@cdk_utils/iam.pipes.PipesResources.parsePipeArn">parsePipeArn</a></code> | Parses a pipe ARN into its components. |
| <code><a href="#@cdk_utils/iam.pipes.PipesResources.pipe">pipe</a></code> | Builds an ARN for the pipe resource. |

---

##### `isValidPipeArn` <a name="isValidPipeArn" id="@cdk_utils/iam.pipes.PipesResources.isValidPipeArn"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesResources.isValidPipeArn(arn: string)
```

Validates whether a string is a valid ARN for the pipe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pipes.PipesResources.isValidPipeArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipeArn` <a name="parsePipeArn" id="@cdk_utils/iam.pipes.PipesResources.parsePipeArn"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesResources.parsePipeArn(arn: string)
```

Parses a pipe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pipes.PipesResources.parsePipeArn.parameter.arn"></a>

- *Type:* string

---

##### `pipe` <a name="pipe" id="@cdk_utils/iam.pipes.PipesResources.pipe"></a>

```typescript
import { pipes } from '@cdk_utils/iam'

pipes.PipesResources.pipe(props: PipesPipeArnProps)
```

Builds an ARN for the pipe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pipes.PipesResources.pipe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pipes.PipesPipeArnProps">PipesPipeArnProps</a>

---




