# `aco_automation` Submodule <a name="`aco_automation` Submodule" id="@cdk_utils/iam.aco_automation"></a>


## Structs <a name="Structs" id="Structs"></a>

### AcoAutomationAutomationRuleArnComponents <a name="AcoAutomationAutomationRuleArnComponents" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents"></a>

Parsed components of a AutomationRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

const acoAutomationAutomationRuleArnComponents: aco_automation.AcoAutomationAutomationRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### AcoAutomationAutomationRuleArnProps <a name="AcoAutomationAutomationRuleArnProps" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps"></a>

Properties for building a AutomationRule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

const acoAutomationAutomationRuleArnProps: aco_automation.AcoAutomationAutomationRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### AcoAutomationActions <a name="AcoAutomationActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions"></a>

IAM action constants for the aco-automation service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

new aco_automation.AcoAutomationActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetAutomationEvent">actionGetAutomationEvent</a></code> | <code>string</code> | [Read] aco-automation:GetAutomationEvent. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetAutomationRule">actionGetAutomationRule</a></code> | <code>string</code> | [Read] aco-automation:GetAutomationRule. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetEnrollmentConfiguration">actionGetEnrollmentConfiguration</a></code> | <code>string</code> | [Read] aco-automation:GetEnrollmentConfiguration. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AssociateAccounts">AssociateAccounts</a></code> | <code>string</code> | [Write] aco-automation:AssociateAccounts. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.CreateAutomationRule">CreateAutomationRule</a></code> | <code>string</code> | [Write] aco-automation:CreateAutomationRule. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.DeleteAutomationRule">DeleteAutomationRule</a></code> | <code>string</code> | [Write] aco-automation:DeleteAutomationRule. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.DisassociateAccounts">DisassociateAccounts</a></code> | <code>string</code> | [Write] aco-automation:DisassociateAccounts. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAccounts">ListAccounts</a></code> | <code>string</code> | [List] aco-automation:ListAccounts. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEvents">ListAutomationEvents</a></code> | <code>string</code> | [List] aco-automation:ListAutomationEvents. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEventSteps">ListAutomationEventSteps</a></code> | <code>string</code> | [List] aco-automation:ListAutomationEventSteps. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEventSummaries">ListAutomationEventSummaries</a></code> | <code>string</code> | [List] aco-automation:ListAutomationEventSummaries. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRulePreview">ListAutomationRulePreview</a></code> | <code>string</code> | [List] aco-automation:ListAutomationRulePreview. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRulePreviewSummaries">ListAutomationRulePreviewSummaries</a></code> | <code>string</code> | [List] aco-automation:ListAutomationRulePreviewSummaries. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRules">ListAutomationRules</a></code> | <code>string</code> | [List] aco-automation:ListAutomationRules. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListRecommendedActions">ListRecommendedActions</a></code> | <code>string</code> | [List] aco-automation:ListRecommendedActions. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListRecommendedActionSummaries">ListRecommendedActionSummaries</a></code> | <code>string</code> | [List] aco-automation:ListRecommendedActionSummaries. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] aco-automation:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.RollbackAutomationEvent">RollbackAutomationEvent</a></code> | <code>string</code> | [Write] aco-automation:RollbackAutomationEvent. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.StartAutomationEvent">StartAutomationEvent</a></code> | <code>string</code> | [Write] aco-automation:StartAutomationEvent. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aco-automation:TagResource. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aco-automation:UntagResource. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UpdateAutomationRule">UpdateAutomationRule</a></code> | <code>string</code> | [Write] aco-automation:UpdateAutomationRule. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UpdateEnrollmentConfiguration">UpdateEnrollmentConfiguration</a></code> | <code>string</code> | [Write] aco-automation:UpdateEnrollmentConfiguration. |

---

##### `actionGetAutomationEvent`<sup>Required</sup> <a name="actionGetAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetAutomationEvent"></a>

```typescript
public readonly actionGetAutomationEvent: string;
```

- *Type:* string

[Read] aco-automation:GetAutomationEvent.

---

##### `actionGetAutomationRule`<sup>Required</sup> <a name="actionGetAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetAutomationRule"></a>

```typescript
public readonly actionGetAutomationRule: string;
```

- *Type:* string

[Read] aco-automation:GetAutomationRule.

---

##### `actionGetEnrollmentConfiguration`<sup>Required</sup> <a name="actionGetEnrollmentConfiguration" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.actionGetEnrollmentConfiguration"></a>

```typescript
public readonly actionGetEnrollmentConfiguration: string;
```

- *Type:* string

[Read] aco-automation:GetEnrollmentConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAccounts`<sup>Required</sup> <a name="AssociateAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.AssociateAccounts"></a>

```typescript
public readonly AssociateAccounts: string;
```

- *Type:* string

[Write] aco-automation:AssociateAccounts.

---

##### `CreateAutomationRule`<sup>Required</sup> <a name="CreateAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.CreateAutomationRule"></a>

```typescript
public readonly CreateAutomationRule: string;
```

- *Type:* string

[Write] aco-automation:CreateAutomationRule.

---

##### `DeleteAutomationRule`<sup>Required</sup> <a name="DeleteAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.DeleteAutomationRule"></a>

```typescript
public readonly DeleteAutomationRule: string;
```

- *Type:* string

[Write] aco-automation:DeleteAutomationRule.

---

##### `DisassociateAccounts`<sup>Required</sup> <a name="DisassociateAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.DisassociateAccounts"></a>

```typescript
public readonly DisassociateAccounts: string;
```

- *Type:* string

[Write] aco-automation:DisassociateAccounts.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string;
```

- *Type:* string

[List] aco-automation:ListAccounts.

---

##### `ListAutomationEvents`<sup>Required</sup> <a name="ListAutomationEvents" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEvents"></a>

```typescript
public readonly ListAutomationEvents: string;
```

- *Type:* string

[List] aco-automation:ListAutomationEvents.

---

##### `ListAutomationEventSteps`<sup>Required</sup> <a name="ListAutomationEventSteps" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEventSteps"></a>

```typescript
public readonly ListAutomationEventSteps: string;
```

- *Type:* string

[List] aco-automation:ListAutomationEventSteps.

---

##### `ListAutomationEventSummaries`<sup>Required</sup> <a name="ListAutomationEventSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationEventSummaries"></a>

```typescript
public readonly ListAutomationEventSummaries: string;
```

- *Type:* string

[List] aco-automation:ListAutomationEventSummaries.

---

##### `ListAutomationRulePreview`<sup>Required</sup> <a name="ListAutomationRulePreview" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRulePreview"></a>

```typescript
public readonly ListAutomationRulePreview: string;
```

- *Type:* string

[List] aco-automation:ListAutomationRulePreview.

---

##### `ListAutomationRulePreviewSummaries`<sup>Required</sup> <a name="ListAutomationRulePreviewSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRulePreviewSummaries"></a>

```typescript
public readonly ListAutomationRulePreviewSummaries: string;
```

- *Type:* string

[List] aco-automation:ListAutomationRulePreviewSummaries.

---

##### `ListAutomationRules`<sup>Required</sup> <a name="ListAutomationRules" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListAutomationRules"></a>

```typescript
public readonly ListAutomationRules: string;
```

- *Type:* string

[List] aco-automation:ListAutomationRules.

---

##### `ListRecommendedActions`<sup>Required</sup> <a name="ListRecommendedActions" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListRecommendedActions"></a>

```typescript
public readonly ListRecommendedActions: string;
```

- *Type:* string

[List] aco-automation:ListRecommendedActions.

---

##### `ListRecommendedActionSummaries`<sup>Required</sup> <a name="ListRecommendedActionSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListRecommendedActionSummaries"></a>

```typescript
public readonly ListRecommendedActionSummaries: string;
```

- *Type:* string

[List] aco-automation:ListRecommendedActionSummaries.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] aco-automation:ListTagsForResource.

---

##### `RollbackAutomationEvent`<sup>Required</sup> <a name="RollbackAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.RollbackAutomationEvent"></a>

```typescript
public readonly RollbackAutomationEvent: string;
```

- *Type:* string

[Write] aco-automation:RollbackAutomationEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAutomationEvent`<sup>Required</sup> <a name="StartAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.StartAutomationEvent"></a>

```typescript
public readonly StartAutomationEvent: string;
```

- *Type:* string

[Write] aco-automation:StartAutomationEvent.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aco-automation:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aco-automation:UntagResource.

---

##### `UpdateAutomationRule`<sup>Required</sup> <a name="UpdateAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UpdateAutomationRule"></a>

```typescript
public readonly UpdateAutomationRule: string;
```

- *Type:* string

[Write] aco-automation:UpdateAutomationRule.

---

##### `UpdateEnrollmentConfiguration`<sup>Required</sup> <a name="UpdateEnrollmentConfiguration" id="@cdk_utils/iam.aco_automation.AcoAutomationActions.property.UpdateEnrollmentConfiguration"></a>

```typescript
public readonly UpdateEnrollmentConfiguration: string;
```

- *Type:* string

[Write] aco-automation:UpdateEnrollmentConfiguration.

---

### AcoAutomationConditions <a name="AcoAutomationConditions" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions"></a>

Condition key constants and builders for aco-automation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

new aco_automation.AcoAutomationConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.requestTag"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.resourceTag"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.tagKeys"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.CreateAutomationRuleConditionKeys">CreateAutomationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutomationRule action. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAutomationRuleConditionKeys`<sup>Required</sup> <a name="CreateAutomationRuleConditionKeys" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.CreateAutomationRuleConditionKeys"></a>

```typescript
public readonly CreateAutomationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutomationRule action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aco_automation.AcoAutomationConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AcoAutomationOperations <a name="AcoAutomationOperations" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations"></a>

API operation to required IAM actions mapping for aco-automation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

new aco_automation.AcoAutomationOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.AssociateAccounts">AssociateAccounts</a></code> | <code>string[]</code> | IAM actions required for the AssociateAccounts API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.CreateAutomationRule">CreateAutomationRule</a></code> | <code>string[]</code> | IAM actions required for the CreateAutomationRule API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.DeleteAutomationRule">DeleteAutomationRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomationRule API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.DisassociateAccounts">DisassociateAccounts</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAccounts API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAccounts">ListAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAccounts API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEvents">ListAutomationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationEvents API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEventSteps">ListAutomationEventSteps</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationEventSteps API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEventSummaries">ListAutomationEventSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationEventSummaries API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRulePreview">ListAutomationRulePreview</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationRulePreview API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRulePreviewSummaries">ListAutomationRulePreviewSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationRulePreviewSummaries API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRules">ListAutomationRules</a></code> | <code>string[]</code> | IAM actions required for the ListAutomationRules API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListRecommendedActions">ListRecommendedActions</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendedActions API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListRecommendedActionSummaries">ListRecommendedActionSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendedActionSummaries API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetAutomationEvent">opGetAutomationEvent</a></code> | <code>string[]</code> | IAM actions required for the GetAutomationEvent API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetAutomationRule">opGetAutomationRule</a></code> | <code>string[]</code> | IAM actions required for the GetAutomationRule API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetEnrollmentConfiguration">opGetEnrollmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEnrollmentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.RollbackAutomationEvent">RollbackAutomationEvent</a></code> | <code>string[]</code> | IAM actions required for the RollbackAutomationEvent API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.StartAutomationEvent">StartAutomationEvent</a></code> | <code>string[]</code> | IAM actions required for the StartAutomationEvent API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UpdateAutomationRule">UpdateAutomationRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomationRule API call. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UpdateEnrollmentConfiguration">UpdateEnrollmentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnrollmentConfiguration API call. |

---

##### `AssociateAccounts`<sup>Required</sup> <a name="AssociateAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.AssociateAccounts"></a>

```typescript
public readonly AssociateAccounts: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAccounts API call.

---

##### `CreateAutomationRule`<sup>Required</sup> <a name="CreateAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.CreateAutomationRule"></a>

```typescript
public readonly CreateAutomationRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutomationRule API call.

---

##### `DeleteAutomationRule`<sup>Required</sup> <a name="DeleteAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.DeleteAutomationRule"></a>

```typescript
public readonly DeleteAutomationRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomationRule API call.

---

##### `DisassociateAccounts`<sup>Required</sup> <a name="DisassociateAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.DisassociateAccounts"></a>

```typescript
public readonly DisassociateAccounts: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAccounts API call.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAccounts API call.

---

##### `ListAutomationEvents`<sup>Required</sup> <a name="ListAutomationEvents" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEvents"></a>

```typescript
public readonly ListAutomationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationEvents API call.

---

##### `ListAutomationEventSteps`<sup>Required</sup> <a name="ListAutomationEventSteps" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEventSteps"></a>

```typescript
public readonly ListAutomationEventSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationEventSteps API call.

---

##### `ListAutomationEventSummaries`<sup>Required</sup> <a name="ListAutomationEventSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationEventSummaries"></a>

```typescript
public readonly ListAutomationEventSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationEventSummaries API call.

---

##### `ListAutomationRulePreview`<sup>Required</sup> <a name="ListAutomationRulePreview" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRulePreview"></a>

```typescript
public readonly ListAutomationRulePreview: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationRulePreview API call.

---

##### `ListAutomationRulePreviewSummaries`<sup>Required</sup> <a name="ListAutomationRulePreviewSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRulePreviewSummaries"></a>

```typescript
public readonly ListAutomationRulePreviewSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationRulePreviewSummaries API call.

---

##### `ListAutomationRules`<sup>Required</sup> <a name="ListAutomationRules" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListAutomationRules"></a>

```typescript
public readonly ListAutomationRules: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomationRules API call.

---

##### `ListRecommendedActions`<sup>Required</sup> <a name="ListRecommendedActions" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListRecommendedActions"></a>

```typescript
public readonly ListRecommendedActions: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendedActions API call.

---

##### `ListRecommendedActionSummaries`<sup>Required</sup> <a name="ListRecommendedActionSummaries" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListRecommendedActionSummaries"></a>

```typescript
public readonly ListRecommendedActionSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendedActionSummaries API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAutomationEvent`<sup>Required</sup> <a name="opGetAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetAutomationEvent"></a>

```typescript
public readonly opGetAutomationEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomationEvent API call.

---

##### `opGetAutomationRule`<sup>Required</sup> <a name="opGetAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetAutomationRule"></a>

```typescript
public readonly opGetAutomationRule: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomationRule API call.

---

##### `opGetEnrollmentConfiguration`<sup>Required</sup> <a name="opGetEnrollmentConfiguration" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.opGetEnrollmentConfiguration"></a>

```typescript
public readonly opGetEnrollmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEnrollmentConfiguration API call.

---

##### `RollbackAutomationEvent`<sup>Required</sup> <a name="RollbackAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.RollbackAutomationEvent"></a>

```typescript
public readonly RollbackAutomationEvent: string[];
```

- *Type:* string[]

IAM actions required for the RollbackAutomationEvent API call.

---

##### `StartAutomationEvent`<sup>Required</sup> <a name="StartAutomationEvent" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.StartAutomationEvent"></a>

```typescript
public readonly StartAutomationEvent: string[];
```

- *Type:* string[]

IAM actions required for the StartAutomationEvent API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAutomationRule`<sup>Required</sup> <a name="UpdateAutomationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UpdateAutomationRule"></a>

```typescript
public readonly UpdateAutomationRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomationRule API call.

---

##### `UpdateEnrollmentConfiguration`<sup>Required</sup> <a name="UpdateEnrollmentConfiguration" id="@cdk_utils/iam.aco_automation.AcoAutomationOperations.property.UpdateEnrollmentConfiguration"></a>

```typescript
public readonly UpdateEnrollmentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnrollmentConfiguration API call.

---

### AcoAutomationResources <a name="AcoAutomationResources" id="@cdk_utils/iam.aco_automation.AcoAutomationResources"></a>

ARN builders, validators, and parsers for aco-automation resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.Initializer"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

new aco_automation.AcoAutomationResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationResources.automationRule">automationRule</a></code> | Builds an ARN for the AutomationRule resource. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationResources.isValidAutomationRuleArn">isValidAutomationRuleArn</a></code> | Validates whether a string is a valid ARN for the AutomationRule resource. |
| <code><a href="#@cdk_utils/iam.aco_automation.AcoAutomationResources.parseAutomationRuleArn">parseAutomationRuleArn</a></code> | Parses a AutomationRule ARN into its components. |

---

##### `automationRule` <a name="automationRule" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.automationRule"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationResources.automationRule(props: AcoAutomationAutomationRuleArnProps)
```

Builds an ARN for the AutomationRule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.automationRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aco_automation.AcoAutomationAutomationRuleArnProps">AcoAutomationAutomationRuleArnProps</a>

---

##### `isValidAutomationRuleArn` <a name="isValidAutomationRuleArn" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.isValidAutomationRuleArn"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationResources.isValidAutomationRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the AutomationRule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.isValidAutomationRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationRuleArn` <a name="parseAutomationRuleArn" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.parseAutomationRuleArn"></a>

```typescript
import { aco_automation } from '@cdk_utils/iam'

aco_automation.AcoAutomationResources.parseAutomationRuleArn(arn: string)
```

Parses a AutomationRule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aco_automation.AcoAutomationResources.parseAutomationRuleArn.parameter.arn"></a>

- *Type:* string

---




