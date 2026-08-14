# `budgets` Submodule <a name="`budgets` Submodule" id="@cdk_utils/iam.budgets"></a>


## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetActionArnComponents <a name="BudgetsBudgetActionArnComponents" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents"></a>

Parsed components of a budgetAction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

const budgetsBudgetActionArnComponents: budgets.BudgetsBudgetActionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.actionId">actionId</a></code> | <code>string</code> | The ActionId component. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.budgetName">budgetName</a></code> | <code>string</code> | The BudgetName component. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

The ActionId component.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

The BudgetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BudgetsBudgetActionArnProps <a name="BudgetsBudgetActionArnProps" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps"></a>

Properties for building a budgetAction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

const budgetsBudgetActionArnProps: budgets.BudgetsBudgetActionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.actionId">actionId</a></code> | <code>string</code> | The ActionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.budgetName">budgetName</a></code> | <code>string</code> | The BudgetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

The ActionId component of the ARN.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

The BudgetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BudgetsBudgetArnComponents <a name="BudgetsBudgetArnComponents" id="@cdk_utils/iam.budgets.BudgetsBudgetArnComponents"></a>

Parsed components of a budget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

const budgetsBudgetArnComponents: budgets.BudgetsBudgetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.budgetName">budgetName</a></code> | <code>string</code> | The BudgetName component. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

The BudgetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.budgets.BudgetsBudgetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BudgetsBudgetArnProps <a name="BudgetsBudgetArnProps" id="@cdk_utils/iam.budgets.BudgetsBudgetArnProps"></a>

Properties for building a budget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.budgets.BudgetsBudgetArnProps.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

const budgetsBudgetArnProps: budgets.BudgetsBudgetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.budgetName">budgetName</a></code> | <code>string</code> | The BudgetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

The BudgetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.budgets.BudgetsBudgetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsActions <a name="BudgetsActions" id="@cdk_utils/iam.budgets.BudgetsActions"></a>

IAM action constants for the budgets service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.budgets.BudgetsActions.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

new budgets.BudgetsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.CreateBudgetAction">CreateBudgetAction</a></code> | <code>string</code> | [Write] budgets:CreateBudgetAction. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.DeleteBudgetAction">DeleteBudgetAction</a></code> | <code>string</code> | [Write] budgets:DeleteBudgetAction. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetAction">DescribeBudgetAction</a></code> | <code>string</code> | [Read] budgets:DescribeBudgetAction. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionHistories">DescribeBudgetActionHistories</a></code> | <code>string</code> | [Read] budgets:DescribeBudgetActionHistories. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionsForAccount">DescribeBudgetActionsForAccount</a></code> | <code>string</code> | [Read] budgets:DescribeBudgetActionsForAccount. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionsForBudget">DescribeBudgetActionsForBudget</a></code> | <code>string</code> | [Read] budgets:DescribeBudgetActionsForBudget. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.ExecuteBudgetAction">ExecuteBudgetAction</a></code> | <code>string</code> | [Write] budgets:ExecuteBudgetAction. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] budgets:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.ModifyBudget">ModifyBudget</a></code> | <code>string</code> | [Write] budgets:ModifyBudget. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] budgets:TagResource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] budgets:UntagResource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.UpdateBudgetAction">UpdateBudgetAction</a></code> | <code>string</code> | [Write] budgets:UpdateBudgetAction. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsActions.property.ViewBudget">ViewBudget</a></code> | <code>string</code> | [Read] budgets:ViewBudget. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.budgets.BudgetsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.budgets.BudgetsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.budgets.BudgetsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.budgets.BudgetsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.budgets.BudgetsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBudgetAction`<sup>Required</sup> <a name="CreateBudgetAction" id="@cdk_utils/iam.budgets.BudgetsActions.property.CreateBudgetAction"></a>

```typescript
public readonly CreateBudgetAction: string;
```

- *Type:* string

[Write] budgets:CreateBudgetAction.

---

##### `DeleteBudgetAction`<sup>Required</sup> <a name="DeleteBudgetAction" id="@cdk_utils/iam.budgets.BudgetsActions.property.DeleteBudgetAction"></a>

```typescript
public readonly DeleteBudgetAction: string;
```

- *Type:* string

[Write] budgets:DeleteBudgetAction.

---

##### `DescribeBudgetAction`<sup>Required</sup> <a name="DescribeBudgetAction" id="@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetAction"></a>

```typescript
public readonly DescribeBudgetAction: string;
```

- *Type:* string

[Read] budgets:DescribeBudgetAction.

---

##### `DescribeBudgetActionHistories`<sup>Required</sup> <a name="DescribeBudgetActionHistories" id="@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionHistories"></a>

```typescript
public readonly DescribeBudgetActionHistories: string;
```

- *Type:* string

[Read] budgets:DescribeBudgetActionHistories.

---

##### `DescribeBudgetActionsForAccount`<sup>Required</sup> <a name="DescribeBudgetActionsForAccount" id="@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionsForAccount"></a>

```typescript
public readonly DescribeBudgetActionsForAccount: string;
```

- *Type:* string

[Read] budgets:DescribeBudgetActionsForAccount.

---

##### `DescribeBudgetActionsForBudget`<sup>Required</sup> <a name="DescribeBudgetActionsForBudget" id="@cdk_utils/iam.budgets.BudgetsActions.property.DescribeBudgetActionsForBudget"></a>

```typescript
public readonly DescribeBudgetActionsForBudget: string;
```

- *Type:* string

[Read] budgets:DescribeBudgetActionsForBudget.

---

##### `ExecuteBudgetAction`<sup>Required</sup> <a name="ExecuteBudgetAction" id="@cdk_utils/iam.budgets.BudgetsActions.property.ExecuteBudgetAction"></a>

```typescript
public readonly ExecuteBudgetAction: string;
```

- *Type:* string

[Write] budgets:ExecuteBudgetAction.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.budgets.BudgetsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] budgets:ListTagsForResource.

---

##### `ModifyBudget`<sup>Required</sup> <a name="ModifyBudget" id="@cdk_utils/iam.budgets.BudgetsActions.property.ModifyBudget"></a>

```typescript
public readonly ModifyBudget: string;
```

- *Type:* string

[Write] budgets:ModifyBudget.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.budgets.BudgetsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.budgets.BudgetsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] budgets:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.budgets.BudgetsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] budgets:UntagResource.

---

##### `UpdateBudgetAction`<sup>Required</sup> <a name="UpdateBudgetAction" id="@cdk_utils/iam.budgets.BudgetsActions.property.UpdateBudgetAction"></a>

```typescript
public readonly UpdateBudgetAction: string;
```

- *Type:* string

[Write] budgets:UpdateBudgetAction.

---

##### `ViewBudget`<sup>Required</sup> <a name="ViewBudget" id="@cdk_utils/iam.budgets.BudgetsActions.property.ViewBudget"></a>

```typescript
public readonly ViewBudget: string;
```

- *Type:* string

[Read] budgets:ViewBudget.

---

### BudgetsConditions <a name="BudgetsConditions" id="@cdk_utils/iam.budgets.BudgetsConditions"></a>

Condition key constants and builders for budgets.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.budgets.BudgetsConditions.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

new budgets.BudgetsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.budgets.BudgetsConditions.requestTag"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.budgets.BudgetsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.budgets.BudgetsConditions.resourceTag"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.budgets.BudgetsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.budgets.BudgetsConditions.tagKeys"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.budgets.BudgetsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.CreateBudgetActionConditionKeys">CreateBudgetActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBudgetAction action. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.budgets.BudgetsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBudgetActionConditionKeys`<sup>Required</sup> <a name="CreateBudgetActionConditionKeys" id="@cdk_utils/iam.budgets.BudgetsConditions.property.CreateBudgetActionConditionKeys"></a>

```typescript
public readonly CreateBudgetActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBudgetAction action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.budgets.BudgetsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.budgets.BudgetsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BudgetsOperations <a name="BudgetsOperations" id="@cdk_utils/iam.budgets.BudgetsOperations"></a>

API operation to required IAM actions mapping for budgets.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.budgets.BudgetsOperations.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

new budgets.BudgetsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.CreateBudget">CreateBudget</a></code> | <code>string[]</code> | IAM actions required for the CreateBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.CreateBudgetAction">CreateBudgetAction</a></code> | <code>string[]</code> | IAM actions required for the CreateBudgetAction API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.CreateNotification">CreateNotification</a></code> | <code>string[]</code> | IAM actions required for the CreateNotification API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.CreateSubscriber">CreateSubscriber</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscriber API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteBudget">DeleteBudget</a></code> | <code>string[]</code> | IAM actions required for the DeleteBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteBudgetAction">DeleteBudgetAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteBudgetAction API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteNotification">DeleteNotification</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotification API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteSubscriber">DeleteSubscriber</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriber API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudget">DescribeBudget</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetAction">DescribeBudgetAction</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetAction API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionHistories">DescribeBudgetActionHistories</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetActionHistories API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionsForAccount">DescribeBudgetActionsForAccount</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetActionsForAccount API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionsForBudget">DescribeBudgetActionsForBudget</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetActionsForBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetNotificationsForAccount">DescribeBudgetNotificationsForAccount</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetNotificationsForAccount API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetPerformanceHistory">DescribeBudgetPerformanceHistory</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgetPerformanceHistory API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgets">DescribeBudgets</a></code> | <code>string[]</code> | IAM actions required for the DescribeBudgets API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeNotificationsForBudget">DescribeNotificationsForBudget</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotificationsForBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeSubscribersForNotification">DescribeSubscribersForNotification</a></code> | <code>string[]</code> | IAM actions required for the DescribeSubscribersForNotification API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.ExecuteBudgetAction">ExecuteBudgetAction</a></code> | <code>string[]</code> | IAM actions required for the ExecuteBudgetAction API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateBudget">UpdateBudget</a></code> | <code>string[]</code> | IAM actions required for the UpdateBudget API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateBudgetAction">UpdateBudgetAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateBudgetAction API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateNotification">UpdateNotification</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotification API call. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateSubscriber">UpdateSubscriber</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscriber API call. |

---

##### `CreateBudget`<sup>Required</sup> <a name="CreateBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.CreateBudget"></a>

```typescript
public readonly CreateBudget: string[];
```

- *Type:* string[]

IAM actions required for the CreateBudget API call.

---

##### `CreateBudgetAction`<sup>Required</sup> <a name="CreateBudgetAction" id="@cdk_utils/iam.budgets.BudgetsOperations.property.CreateBudgetAction"></a>

```typescript
public readonly CreateBudgetAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateBudgetAction API call.

---

##### `CreateNotification`<sup>Required</sup> <a name="CreateNotification" id="@cdk_utils/iam.budgets.BudgetsOperations.property.CreateNotification"></a>

```typescript
public readonly CreateNotification: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotification API call.

---

##### `CreateSubscriber`<sup>Required</sup> <a name="CreateSubscriber" id="@cdk_utils/iam.budgets.BudgetsOperations.property.CreateSubscriber"></a>

```typescript
public readonly CreateSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscriber API call.

---

##### `DeleteBudget`<sup>Required</sup> <a name="DeleteBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteBudget"></a>

```typescript
public readonly DeleteBudget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBudget API call.

---

##### `DeleteBudgetAction`<sup>Required</sup> <a name="DeleteBudgetAction" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteBudgetAction"></a>

```typescript
public readonly DeleteBudgetAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBudgetAction API call.

---

##### `DeleteNotification`<sup>Required</sup> <a name="DeleteNotification" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteNotification"></a>

```typescript
public readonly DeleteNotification: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotification API call.

---

##### `DeleteSubscriber`<sup>Required</sup> <a name="DeleteSubscriber" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DeleteSubscriber"></a>

```typescript
public readonly DeleteSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriber API call.

---

##### `DescribeBudget`<sup>Required</sup> <a name="DescribeBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudget"></a>

```typescript
public readonly DescribeBudget: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudget API call.

---

##### `DescribeBudgetAction`<sup>Required</sup> <a name="DescribeBudgetAction" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetAction"></a>

```typescript
public readonly DescribeBudgetAction: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetAction API call.

---

##### `DescribeBudgetActionHistories`<sup>Required</sup> <a name="DescribeBudgetActionHistories" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionHistories"></a>

```typescript
public readonly DescribeBudgetActionHistories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetActionHistories API call.

---

##### `DescribeBudgetActionsForAccount`<sup>Required</sup> <a name="DescribeBudgetActionsForAccount" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionsForAccount"></a>

```typescript
public readonly DescribeBudgetActionsForAccount: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetActionsForAccount API call.

---

##### `DescribeBudgetActionsForBudget`<sup>Required</sup> <a name="DescribeBudgetActionsForBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetActionsForBudget"></a>

```typescript
public readonly DescribeBudgetActionsForBudget: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetActionsForBudget API call.

---

##### `DescribeBudgetNotificationsForAccount`<sup>Required</sup> <a name="DescribeBudgetNotificationsForAccount" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetNotificationsForAccount"></a>

```typescript
public readonly DescribeBudgetNotificationsForAccount: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetNotificationsForAccount API call.

---

##### `DescribeBudgetPerformanceHistory`<sup>Required</sup> <a name="DescribeBudgetPerformanceHistory" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgetPerformanceHistory"></a>

```typescript
public readonly DescribeBudgetPerformanceHistory: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgetPerformanceHistory API call.

---

##### `DescribeBudgets`<sup>Required</sup> <a name="DescribeBudgets" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeBudgets"></a>

```typescript
public readonly DescribeBudgets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBudgets API call.

---

##### `DescribeNotificationsForBudget`<sup>Required</sup> <a name="DescribeNotificationsForBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeNotificationsForBudget"></a>

```typescript
public readonly DescribeNotificationsForBudget: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotificationsForBudget API call.

---

##### `DescribeSubscribersForNotification`<sup>Required</sup> <a name="DescribeSubscribersForNotification" id="@cdk_utils/iam.budgets.BudgetsOperations.property.DescribeSubscribersForNotification"></a>

```typescript
public readonly DescribeSubscribersForNotification: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSubscribersForNotification API call.

---

##### `ExecuteBudgetAction`<sup>Required</sup> <a name="ExecuteBudgetAction" id="@cdk_utils/iam.budgets.BudgetsOperations.property.ExecuteBudgetAction"></a>

```typescript
public readonly ExecuteBudgetAction: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteBudgetAction API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.budgets.BudgetsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.budgets.BudgetsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.budgets.BudgetsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBudget`<sup>Required</sup> <a name="UpdateBudget" id="@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateBudget"></a>

```typescript
public readonly UpdateBudget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBudget API call.

---

##### `UpdateBudgetAction`<sup>Required</sup> <a name="UpdateBudgetAction" id="@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateBudgetAction"></a>

```typescript
public readonly UpdateBudgetAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBudgetAction API call.

---

##### `UpdateNotification`<sup>Required</sup> <a name="UpdateNotification" id="@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateNotification"></a>

```typescript
public readonly UpdateNotification: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotification API call.

---

##### `UpdateSubscriber`<sup>Required</sup> <a name="UpdateSubscriber" id="@cdk_utils/iam.budgets.BudgetsOperations.property.UpdateSubscriber"></a>

```typescript
public readonly UpdateSubscriber: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscriber API call.

---

### BudgetsResources <a name="BudgetsResources" id="@cdk_utils/iam.budgets.BudgetsResources"></a>

ARN builders, validators, and parsers for budgets resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.budgets.BudgetsResources.Initializer"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

new budgets.BudgetsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.budget">budget</a></code> | Builds an ARN for the budget resource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.budgetAction">budgetAction</a></code> | Builds an ARN for the budgetAction resource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetActionArn">isValidBudgetActionArn</a></code> | Validates whether a string is a valid ARN for the budgetAction resource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetArn">isValidBudgetArn</a></code> | Validates whether a string is a valid ARN for the budget resource. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.parseBudgetActionArn">parseBudgetActionArn</a></code> | Parses a budgetAction ARN into its components. |
| <code><a href="#@cdk_utils/iam.budgets.BudgetsResources.parseBudgetArn">parseBudgetArn</a></code> | Parses a budget ARN into its components. |

---

##### `budget` <a name="budget" id="@cdk_utils/iam.budgets.BudgetsResources.budget"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.budget(props: BudgetsBudgetArnProps)
```

Builds an ARN for the budget resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.budgets.BudgetsResources.budget.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.budgets.BudgetsBudgetArnProps">BudgetsBudgetArnProps</a>

---

##### `budgetAction` <a name="budgetAction" id="@cdk_utils/iam.budgets.BudgetsResources.budgetAction"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.budgetAction(props: BudgetsBudgetActionArnProps)
```

Builds an ARN for the budgetAction resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.budgets.BudgetsResources.budgetAction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.budgets.BudgetsBudgetActionArnProps">BudgetsBudgetActionArnProps</a>

---

##### `isValidBudgetActionArn` <a name="isValidBudgetActionArn" id="@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetActionArn"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.isValidBudgetActionArn(arn: string)
```

Validates whether a string is a valid ARN for the budgetAction resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetActionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBudgetArn` <a name="isValidBudgetArn" id="@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetArn"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.isValidBudgetArn(arn: string)
```

Validates whether a string is a valid ARN for the budget resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.budgets.BudgetsResources.isValidBudgetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBudgetActionArn` <a name="parseBudgetActionArn" id="@cdk_utils/iam.budgets.BudgetsResources.parseBudgetActionArn"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.parseBudgetActionArn(arn: string)
```

Parses a budgetAction ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.budgets.BudgetsResources.parseBudgetActionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBudgetArn` <a name="parseBudgetArn" id="@cdk_utils/iam.budgets.BudgetsResources.parseBudgetArn"></a>

```typescript
import { budgets } from '@cdk_utils/iam'

budgets.BudgetsResources.parseBudgetArn(arn: string)
```

Parses a budget ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.budgets.BudgetsResources.parseBudgetArn.parameter.arn"></a>

- *Type:* string

---




