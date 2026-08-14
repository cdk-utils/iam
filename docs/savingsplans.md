# `savingsplans` Submodule <a name="`savingsplans` Submodule" id="@cdk_utils/iam.savingsplans"></a>


## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsplanArnComponents <a name="SavingsplansSavingsplanArnComponents" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents"></a>

Parsed components of a savingsplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

const savingsplansSavingsplanArnComponents: savingsplans.SavingsplansSavingsplanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SavingsplansSavingsplanArnProps <a name="SavingsplansSavingsplanArnProps" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps"></a>

Properties for building a savingsplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

const savingsplansSavingsplanArnProps: savingsplans.SavingsplansSavingsplanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansActions <a name="SavingsplansActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions"></a>

IAM action constants for the savingsplans service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.savingsplans.SavingsplansActions.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

new savingsplans.SavingsplansActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.CreateSavingsPlan">CreateSavingsPlan</a></code> | <code>string</code> | [Write] savingsplans:CreateSavingsPlan. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.DeleteQueuedSavingsPlan">DeleteQueuedSavingsPlan</a></code> | <code>string</code> | [Write] savingsplans:DeleteQueuedSavingsPlan. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlanRates">DescribeSavingsPlanRates</a></code> | <code>string</code> | [Read] savingsplans:DescribeSavingsPlanRates. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlans">DescribeSavingsPlans</a></code> | <code>string</code> | [Read] savingsplans:DescribeSavingsPlans. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlansOfferingRates">DescribeSavingsPlansOfferingRates</a></code> | <code>string</code> | [Read] savingsplans:DescribeSavingsPlansOfferingRates. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlansOfferings">DescribeSavingsPlansOfferings</a></code> | <code>string</code> | [Read] savingsplans:DescribeSavingsPlansOfferings. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] savingsplans:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.ReturnSavingsPlan">ReturnSavingsPlan</a></code> | <code>string</code> | [Write] savingsplans:ReturnSavingsPlan. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] savingsplans:TagResource. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] savingsplans:UntagResource. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSavingsPlan`<sup>Required</sup> <a name="CreateSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.CreateSavingsPlan"></a>

```typescript
public readonly CreateSavingsPlan: string;
```

- *Type:* string

[Write] savingsplans:CreateSavingsPlan.

---

##### `DeleteQueuedSavingsPlan`<sup>Required</sup> <a name="DeleteQueuedSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.DeleteQueuedSavingsPlan"></a>

```typescript
public readonly DeleteQueuedSavingsPlan: string;
```

- *Type:* string

[Write] savingsplans:DeleteQueuedSavingsPlan.

---

##### `DescribeSavingsPlanRates`<sup>Required</sup> <a name="DescribeSavingsPlanRates" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlanRates"></a>

```typescript
public readonly DescribeSavingsPlanRates: string;
```

- *Type:* string

[Read] savingsplans:DescribeSavingsPlanRates.

---

##### `DescribeSavingsPlans`<sup>Required</sup> <a name="DescribeSavingsPlans" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlans"></a>

```typescript
public readonly DescribeSavingsPlans: string;
```

- *Type:* string

[Read] savingsplans:DescribeSavingsPlans.

---

##### `DescribeSavingsPlansOfferingRates`<sup>Required</sup> <a name="DescribeSavingsPlansOfferingRates" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlansOfferingRates"></a>

```typescript
public readonly DescribeSavingsPlansOfferingRates: string;
```

- *Type:* string

[Read] savingsplans:DescribeSavingsPlansOfferingRates.

---

##### `DescribeSavingsPlansOfferings`<sup>Required</sup> <a name="DescribeSavingsPlansOfferings" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.DescribeSavingsPlansOfferings"></a>

```typescript
public readonly DescribeSavingsPlansOfferings: string;
```

- *Type:* string

[Read] savingsplans:DescribeSavingsPlansOfferings.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] savingsplans:ListTagsForResource.

---

##### `ReturnSavingsPlan`<sup>Required</sup> <a name="ReturnSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.ReturnSavingsPlan"></a>

```typescript
public readonly ReturnSavingsPlan: string;
```

- *Type:* string

[Write] savingsplans:ReturnSavingsPlan.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] savingsplans:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.savingsplans.SavingsplansActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] savingsplans:UntagResource.

---

### SavingsplansConditions <a name="SavingsplansConditions" id="@cdk_utils/iam.savingsplans.SavingsplansConditions"></a>

Condition key constants and builders for savingsplans.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

new savingsplans.SavingsplansConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.requestTag"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.resourceTag"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.tagKeys"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.CreateSavingsPlanConditionKeys">CreateSavingsPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSavingsPlan action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DeleteQueuedSavingsPlanConditionKeys">DeleteQueuedSavingsPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteQueuedSavingsPlan action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DescribeSavingsPlanRatesConditionKeys">DescribeSavingsPlanRatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSavingsPlanRates action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DescribeSavingsPlansConditionKeys">DescribeSavingsPlansConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSavingsPlans action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.ReturnSavingsPlanConditionKeys">ReturnSavingsPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReturnSavingsPlan action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSavingsPlanConditionKeys`<sup>Required</sup> <a name="CreateSavingsPlanConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.CreateSavingsPlanConditionKeys"></a>

```typescript
public readonly CreateSavingsPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSavingsPlan action.

---

##### `DeleteQueuedSavingsPlanConditionKeys`<sup>Required</sup> <a name="DeleteQueuedSavingsPlanConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DeleteQueuedSavingsPlanConditionKeys"></a>

```typescript
public readonly DeleteQueuedSavingsPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteQueuedSavingsPlan action.

---

##### `DescribeSavingsPlanRatesConditionKeys`<sup>Required</sup> <a name="DescribeSavingsPlanRatesConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DescribeSavingsPlanRatesConditionKeys"></a>

```typescript
public readonly DescribeSavingsPlanRatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSavingsPlanRates action.

---

##### `DescribeSavingsPlansConditionKeys`<sup>Required</sup> <a name="DescribeSavingsPlansConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.DescribeSavingsPlansConditionKeys"></a>

```typescript
public readonly DescribeSavingsPlansConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSavingsPlans action.

---

##### `ReturnSavingsPlanConditionKeys`<sup>Required</sup> <a name="ReturnSavingsPlanConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.ReturnSavingsPlanConditionKeys"></a>

```typescript
public readonly ReturnSavingsPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReturnSavingsPlan action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.savingsplans.SavingsplansConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SavingsplansOperations <a name="SavingsplansOperations" id="@cdk_utils/iam.savingsplans.SavingsplansOperations"></a>

API operation to required IAM actions mapping for savingsplans.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

new savingsplans.SavingsplansOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.CreateSavingsPlan">CreateSavingsPlan</a></code> | <code>string[]</code> | IAM actions required for the CreateSavingsPlan API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DeleteQueuedSavingsPlan">DeleteQueuedSavingsPlan</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueuedSavingsPlan API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlanRates">DescribeSavingsPlanRates</a></code> | <code>string[]</code> | IAM actions required for the DescribeSavingsPlanRates API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlans">DescribeSavingsPlans</a></code> | <code>string[]</code> | IAM actions required for the DescribeSavingsPlans API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlansOfferingRates">DescribeSavingsPlansOfferingRates</a></code> | <code>string[]</code> | IAM actions required for the DescribeSavingsPlansOfferingRates API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlansOfferings">DescribeSavingsPlansOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeSavingsPlansOfferings API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.ReturnSavingsPlan">ReturnSavingsPlan</a></code> | <code>string[]</code> | IAM actions required for the ReturnSavingsPlan API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateSavingsPlan`<sup>Required</sup> <a name="CreateSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.CreateSavingsPlan"></a>

```typescript
public readonly CreateSavingsPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreateSavingsPlan API call.

---

##### `DeleteQueuedSavingsPlan`<sup>Required</sup> <a name="DeleteQueuedSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DeleteQueuedSavingsPlan"></a>

```typescript
public readonly DeleteQueuedSavingsPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueuedSavingsPlan API call.

---

##### `DescribeSavingsPlanRates`<sup>Required</sup> <a name="DescribeSavingsPlanRates" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlanRates"></a>

```typescript
public readonly DescribeSavingsPlanRates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSavingsPlanRates API call.

---

##### `DescribeSavingsPlans`<sup>Required</sup> <a name="DescribeSavingsPlans" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlans"></a>

```typescript
public readonly DescribeSavingsPlans: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSavingsPlans API call.

---

##### `DescribeSavingsPlansOfferingRates`<sup>Required</sup> <a name="DescribeSavingsPlansOfferingRates" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlansOfferingRates"></a>

```typescript
public readonly DescribeSavingsPlansOfferingRates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSavingsPlansOfferingRates API call.

---

##### `DescribeSavingsPlansOfferings`<sup>Required</sup> <a name="DescribeSavingsPlansOfferings" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.DescribeSavingsPlansOfferings"></a>

```typescript
public readonly DescribeSavingsPlansOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSavingsPlansOfferings API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ReturnSavingsPlan`<sup>Required</sup> <a name="ReturnSavingsPlan" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.ReturnSavingsPlan"></a>

```typescript
public readonly ReturnSavingsPlan: string[];
```

- *Type:* string[]

IAM actions required for the ReturnSavingsPlan API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.savingsplans.SavingsplansOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SavingsplansResources <a name="SavingsplansResources" id="@cdk_utils/iam.savingsplans.SavingsplansResources"></a>

ARN builders, validators, and parsers for savingsplans resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.savingsplans.SavingsplansResources.Initializer"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

new savingsplans.SavingsplansResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansResources.isValidSavingsplanArn">isValidSavingsplanArn</a></code> | Validates whether a string is a valid ARN for the savingsplan resource. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansResources.parseSavingsplanArn">parseSavingsplanArn</a></code> | Parses a savingsplan ARN into its components. |
| <code><a href="#@cdk_utils/iam.savingsplans.SavingsplansResources.savingsplan">savingsplan</a></code> | Builds an ARN for the savingsplan resource. |

---

##### `isValidSavingsplanArn` <a name="isValidSavingsplanArn" id="@cdk_utils/iam.savingsplans.SavingsplansResources.isValidSavingsplanArn"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansResources.isValidSavingsplanArn(arn: string)
```

Validates whether a string is a valid ARN for the savingsplan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.savingsplans.SavingsplansResources.isValidSavingsplanArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSavingsplanArn` <a name="parseSavingsplanArn" id="@cdk_utils/iam.savingsplans.SavingsplansResources.parseSavingsplanArn"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansResources.parseSavingsplanArn(arn: string)
```

Parses a savingsplan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.savingsplans.SavingsplansResources.parseSavingsplanArn.parameter.arn"></a>

- *Type:* string

---

##### `savingsplan` <a name="savingsplan" id="@cdk_utils/iam.savingsplans.SavingsplansResources.savingsplan"></a>

```typescript
import { savingsplans } from '@cdk_utils/iam'

savingsplans.SavingsplansResources.savingsplan(props: SavingsplansSavingsplanArnProps)
```

Builds an ARN for the savingsplan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.savingsplans.SavingsplansResources.savingsplan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.savingsplans.SavingsplansSavingsplanArnProps">SavingsplansSavingsplanArnProps</a>

---




