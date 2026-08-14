# `kendra_ranking` Submodule <a name="`kendra_ranking` Submodule" id="@cdk_utils/iam.kendra_ranking"></a>


## Structs <a name="Structs" id="Structs"></a>

### KendraRankingRescoreExecutionPlanArnComponents <a name="KendraRankingRescoreExecutionPlanArnComponents" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents"></a>

Parsed components of a rescore-execution-plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

const kendraRankingRescoreExecutionPlanArnComponents: kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.rescoreExecutionPlanId">rescoreExecutionPlanId</a></code> | <code>string</code> | The RescoreExecutionPlanId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `rescoreExecutionPlanId`<sup>Required</sup> <a name="rescoreExecutionPlanId" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnComponents.property.rescoreExecutionPlanId"></a>

```typescript
public readonly rescoreExecutionPlanId: string;
```

- *Type:* string

The RescoreExecutionPlanId component.

---

### KendraRankingRescoreExecutionPlanArnProps <a name="KendraRankingRescoreExecutionPlanArnProps" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps"></a>

Properties for building a rescore-execution-plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

const kendraRankingRescoreExecutionPlanArnProps: kendra_ranking.KendraRankingRescoreExecutionPlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.rescoreExecutionPlanId">rescoreExecutionPlanId</a></code> | <code>string</code> | The RescoreExecutionPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `rescoreExecutionPlanId`<sup>Required</sup> <a name="rescoreExecutionPlanId" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.rescoreExecutionPlanId"></a>

```typescript
public readonly rescoreExecutionPlanId: string;
```

- *Type:* string

The RescoreExecutionPlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KendraRankingActions <a name="KendraRankingActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions"></a>

IAM action constants for the kendra-ranking service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

new kendra_ranking.KendraRankingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.CreateRescoreExecutionPlan">CreateRescoreExecutionPlan</a></code> | <code>string</code> | [Write] kendra-ranking:CreateRescoreExecutionPlan. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.DeleteRescoreExecutionPlan">DeleteRescoreExecutionPlan</a></code> | <code>string</code> | [Write] kendra-ranking:DeleteRescoreExecutionPlan. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.DescribeRescoreExecutionPlan">DescribeRescoreExecutionPlan</a></code> | <code>string</code> | [Read] kendra-ranking:DescribeRescoreExecutionPlan. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.ListRescoreExecutionPlans">ListRescoreExecutionPlans</a></code> | <code>string</code> | [List] kendra-ranking:ListRescoreExecutionPlans. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kendra-ranking:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.Rescore">Rescore</a></code> | <code>string</code> | [Read] kendra-ranking:Rescore. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kendra-ranking:TagResource. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kendra-ranking:UntagResource. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.UpdateRescoreExecutionPlan">UpdateRescoreExecutionPlan</a></code> | <code>string</code> | [Write] kendra-ranking:UpdateRescoreExecutionPlan. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateRescoreExecutionPlan`<sup>Required</sup> <a name="CreateRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.CreateRescoreExecutionPlan"></a>

```typescript
public readonly CreateRescoreExecutionPlan: string;
```

- *Type:* string

[Write] kendra-ranking:CreateRescoreExecutionPlan.

---

##### `DeleteRescoreExecutionPlan`<sup>Required</sup> <a name="DeleteRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.DeleteRescoreExecutionPlan"></a>

```typescript
public readonly DeleteRescoreExecutionPlan: string;
```

- *Type:* string

[Write] kendra-ranking:DeleteRescoreExecutionPlan.

---

##### `DescribeRescoreExecutionPlan`<sup>Required</sup> <a name="DescribeRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.DescribeRescoreExecutionPlan"></a>

```typescript
public readonly DescribeRescoreExecutionPlan: string;
```

- *Type:* string

[Read] kendra-ranking:DescribeRescoreExecutionPlan.

---

##### `ListRescoreExecutionPlans`<sup>Required</sup> <a name="ListRescoreExecutionPlans" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.ListRescoreExecutionPlans"></a>

```typescript
public readonly ListRescoreExecutionPlans: string;
```

- *Type:* string

[List] kendra-ranking:ListRescoreExecutionPlans.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kendra-ranking:ListTagsForResource.

---

##### `Rescore`<sup>Required</sup> <a name="Rescore" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.Rescore"></a>

```typescript
public readonly Rescore: string;
```

- *Type:* string

[Read] kendra-ranking:Rescore.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kendra-ranking:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kendra-ranking:UntagResource.

---

##### `UpdateRescoreExecutionPlan`<sup>Required</sup> <a name="UpdateRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingActions.property.UpdateRescoreExecutionPlan"></a>

```typescript
public readonly UpdateRescoreExecutionPlan: string;
```

- *Type:* string

[Write] kendra-ranking:UpdateRescoreExecutionPlan.

---

### KendraRankingConditions <a name="KendraRankingConditions" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions"></a>

Condition key constants and builders for kendra-ranking.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

new kendra_ranking.KendraRankingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.requestTag"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.resourceTag"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.tagKeys"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.CreateRescoreExecutionPlanConditionKeys">CreateRescoreExecutionPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRescoreExecutionPlan action. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRescoreExecutionPlanConditionKeys`<sup>Required</sup> <a name="CreateRescoreExecutionPlanConditionKeys" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.CreateRescoreExecutionPlanConditionKeys"></a>

```typescript
public readonly CreateRescoreExecutionPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRescoreExecutionPlan action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kendra_ranking.KendraRankingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### KendraRankingOperations <a name="KendraRankingOperations" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations"></a>

API operation to required IAM actions mapping for kendra-ranking.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

new kendra_ranking.KendraRankingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.CreateRescoreExecutionPlan">CreateRescoreExecutionPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateRescoreExecutionPlan API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.DeleteRescoreExecutionPlan">DeleteRescoreExecutionPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteRescoreExecutionPlan API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.DescribeRescoreExecutionPlan">DescribeRescoreExecutionPlan</a></code> | <code>string[]</code> | IAM actions required for the DescribeRescoreExecutionPlan API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.ListRescoreExecutionPlans">ListRescoreExecutionPlans</a></code> | <code>string[]</code> | IAM actions required for the ListRescoreExecutionPlans API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.Rescore">Rescore</a></code> | <code>string[]</code> | IAM actions required for the Rescore API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.UpdateRescoreExecutionPlan">UpdateRescoreExecutionPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdateRescoreExecutionPlan API call. |

---

##### `CreateRescoreExecutionPlan`<sup>Required</sup> <a name="CreateRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.CreateRescoreExecutionPlan"></a>

```typescript
public readonly CreateRescoreExecutionPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateRescoreExecutionPlan API call.

---

##### `DeleteRescoreExecutionPlan`<sup>Required</sup> <a name="DeleteRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.DeleteRescoreExecutionPlan"></a>

```typescript
public readonly DeleteRescoreExecutionPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRescoreExecutionPlan API call.

---

##### `DescribeRescoreExecutionPlan`<sup>Required</sup> <a name="DescribeRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.DescribeRescoreExecutionPlan"></a>

```typescript
public readonly DescribeRescoreExecutionPlan: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRescoreExecutionPlan API call.

---

##### `ListRescoreExecutionPlans`<sup>Required</sup> <a name="ListRescoreExecutionPlans" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.ListRescoreExecutionPlans"></a>

```typescript
public readonly ListRescoreExecutionPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListRescoreExecutionPlans API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `Rescore`<sup>Required</sup> <a name="Rescore" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.Rescore"></a>

```typescript
public readonly Rescore: string[];
```

- *Type:* string[]

IAM actions required for the Rescore API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateRescoreExecutionPlan`<sup>Required</sup> <a name="UpdateRescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingOperations.property.UpdateRescoreExecutionPlan"></a>

```typescript
public readonly UpdateRescoreExecutionPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRescoreExecutionPlan API call.

---

### KendraRankingResources <a name="KendraRankingResources" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources"></a>

ARN builders, validators, and parsers for kendra-ranking resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.Initializer"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

new kendra_ranking.KendraRankingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingResources.isValidRescoreExecutionPlanArn">isValidRescoreExecutionPlanArn</a></code> | Validates whether a string is a valid ARN for the rescore-execution-plan resource. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingResources.parseRescoreExecutionPlanArn">parseRescoreExecutionPlanArn</a></code> | Parses a rescore-execution-plan ARN into its components. |
| <code><a href="#@cdk_utils/iam.kendra_ranking.KendraRankingResources.rescoreExecutionPlan">rescoreExecutionPlan</a></code> | Builds an ARN for the rescore-execution-plan resource. |

---

##### `isValidRescoreExecutionPlanArn` <a name="isValidRescoreExecutionPlanArn" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.isValidRescoreExecutionPlanArn"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingResources.isValidRescoreExecutionPlanArn(arn: string)
```

Validates whether a string is a valid ARN for the rescore-execution-plan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.isValidRescoreExecutionPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRescoreExecutionPlanArn` <a name="parseRescoreExecutionPlanArn" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.parseRescoreExecutionPlanArn"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingResources.parseRescoreExecutionPlanArn(arn: string)
```

Parses a rescore-execution-plan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.parseRescoreExecutionPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `rescoreExecutionPlan` <a name="rescoreExecutionPlan" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.rescoreExecutionPlan"></a>

```typescript
import { kendra_ranking } from '@cdk_utils/iam'

kendra_ranking.KendraRankingResources.rescoreExecutionPlan(props: KendraRankingRescoreExecutionPlanArnProps)
```

Builds an ARN for the rescore-execution-plan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kendra_ranking.KendraRankingResources.rescoreExecutionPlan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kendra_ranking.KendraRankingRescoreExecutionPlanArnProps">KendraRankingRescoreExecutionPlanArnProps</a>

---




