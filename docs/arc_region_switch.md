# `arc_region_switch` Submodule <a name="`arc_region_switch` Submodule" id="@cdk_utils/iam.arc_region_switch"></a>


## Structs <a name="Structs" id="Structs"></a>

### ArcRegionSwitchPlanArnComponents <a name="ArcRegionSwitchPlanArnComponents" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents"></a>

Parsed components of a plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

const arcRegionSwitchPlanArnComponents: arc_region_switch.ArcRegionSwitchPlanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ArcRegionSwitchPlanArnProps <a name="ArcRegionSwitchPlanArnProps" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps"></a>

Properties for building a plan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

const arcRegionSwitchPlanArnProps: arc_region_switch.ArcRegionSwitchPlanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ArcRegionSwitchActions <a name="ArcRegionSwitchActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions"></a>

IAM action constants for the arc-region-switch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

new arc_region_switch.ArcRegionSwitchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlan">actionGetPlan</a></code> | <code>string</code> | [Read] arc-region-switch:GetPlan. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanEvaluationStatus">actionGetPlanEvaluationStatus</a></code> | <code>string</code> | [Read] arc-region-switch:GetPlanEvaluationStatus. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanExecution">actionGetPlanExecution</a></code> | <code>string</code> | [Read] arc-region-switch:GetPlanExecution. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanInRegion">actionGetPlanInRegion</a></code> | <code>string</code> | [Read] arc-region-switch:GetPlanInRegion. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] arc-region-switch:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ApprovePlanExecutionStep">ApprovePlanExecutionStep</a></code> | <code>string</code> | [Write] arc-region-switch:ApprovePlanExecutionStep. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.CancelPlanExecution">CancelPlanExecution</a></code> | <code>string</code> | [Write] arc-region-switch:CancelPlanExecution. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.CreatePlan">CreatePlan</a></code> | <code>string</code> | [Write] arc-region-switch:CreatePlan. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.DeletePlan">DeletePlan</a></code> | <code>string</code> | [Write] arc-region-switch:DeletePlan. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] arc-region-switch:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlanExecutionEvents">ListPlanExecutionEvents</a></code> | <code>string</code> | [List] arc-region-switch:ListPlanExecutionEvents. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlanExecutions">ListPlanExecutions</a></code> | <code>string</code> | [List] arc-region-switch:ListPlanExecutions. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlans">ListPlans</a></code> | <code>string</code> | [List] arc-region-switch:ListPlans. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlansInRegion">ListPlansInRegion</a></code> | <code>string</code> | [List] arc-region-switch:ListPlansInRegion. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListRoute53HealthChecks">ListRoute53HealthChecks</a></code> | <code>string</code> | [List] arc-region-switch:ListRoute53HealthChecks. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListRoute53HealthChecksInRegion">ListRoute53HealthChecksInRegion</a></code> | <code>string</code> | [List] arc-region-switch:ListRoute53HealthChecksInRegion. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] arc-region-switch:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] arc-region-switch:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.StartPlanExecution">StartPlanExecution</a></code> | <code>string</code> | [Write] arc-region-switch:StartPlanExecution. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] arc-region-switch:TagResource. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] arc-region-switch:UntagResource. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlan">UpdatePlan</a></code> | <code>string</code> | [Write] arc-region-switch:UpdatePlan. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlanExecution">UpdatePlanExecution</a></code> | <code>string</code> | [Write] arc-region-switch:UpdatePlanExecution. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlanExecutionStep">UpdatePlanExecutionStep</a></code> | <code>string</code> | [Write] arc-region-switch:UpdatePlanExecutionStep. |

---

##### `actionGetPlan`<sup>Required</sup> <a name="actionGetPlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlan"></a>

```typescript
public readonly actionGetPlan: string;
```

- *Type:* string

[Read] arc-region-switch:GetPlan.

---

##### `actionGetPlanEvaluationStatus`<sup>Required</sup> <a name="actionGetPlanEvaluationStatus" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanEvaluationStatus"></a>

```typescript
public readonly actionGetPlanEvaluationStatus: string;
```

- *Type:* string

[Read] arc-region-switch:GetPlanEvaluationStatus.

---

##### `actionGetPlanExecution`<sup>Required</sup> <a name="actionGetPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanExecution"></a>

```typescript
public readonly actionGetPlanExecution: string;
```

- *Type:* string

[Read] arc-region-switch:GetPlanExecution.

---

##### `actionGetPlanInRegion`<sup>Required</sup> <a name="actionGetPlanInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetPlanInRegion"></a>

```typescript
public readonly actionGetPlanInRegion: string;
```

- *Type:* string

[Read] arc-region-switch:GetPlanInRegion.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] arc-region-switch:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApprovePlanExecutionStep`<sup>Required</sup> <a name="ApprovePlanExecutionStep" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ApprovePlanExecutionStep"></a>

```typescript
public readonly ApprovePlanExecutionStep: string;
```

- *Type:* string

[Write] arc-region-switch:ApprovePlanExecutionStep.

---

##### `CancelPlanExecution`<sup>Required</sup> <a name="CancelPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.CancelPlanExecution"></a>

```typescript
public readonly CancelPlanExecution: string;
```

- *Type:* string

[Write] arc-region-switch:CancelPlanExecution.

---

##### `CreatePlan`<sup>Required</sup> <a name="CreatePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.CreatePlan"></a>

```typescript
public readonly CreatePlan: string;
```

- *Type:* string

[Write] arc-region-switch:CreatePlan.

---

##### `DeletePlan`<sup>Required</sup> <a name="DeletePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.DeletePlan"></a>

```typescript
public readonly DeletePlan: string;
```

- *Type:* string

[Write] arc-region-switch:DeletePlan.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] arc-region-switch:DeleteResourcePolicy.

---

##### `ListPlanExecutionEvents`<sup>Required</sup> <a name="ListPlanExecutionEvents" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlanExecutionEvents"></a>

```typescript
public readonly ListPlanExecutionEvents: string;
```

- *Type:* string

[List] arc-region-switch:ListPlanExecutionEvents.

---

##### `ListPlanExecutions`<sup>Required</sup> <a name="ListPlanExecutions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlanExecutions"></a>

```typescript
public readonly ListPlanExecutions: string;
```

- *Type:* string

[List] arc-region-switch:ListPlanExecutions.

---

##### `ListPlans`<sup>Required</sup> <a name="ListPlans" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlans"></a>

```typescript
public readonly ListPlans: string;
```

- *Type:* string

[List] arc-region-switch:ListPlans.

---

##### `ListPlansInRegion`<sup>Required</sup> <a name="ListPlansInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListPlansInRegion"></a>

```typescript
public readonly ListPlansInRegion: string;
```

- *Type:* string

[List] arc-region-switch:ListPlansInRegion.

---

##### `ListRoute53HealthChecks`<sup>Required</sup> <a name="ListRoute53HealthChecks" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListRoute53HealthChecks"></a>

```typescript
public readonly ListRoute53HealthChecks: string;
```

- *Type:* string

[List] arc-region-switch:ListRoute53HealthChecks.

---

##### `ListRoute53HealthChecksInRegion`<sup>Required</sup> <a name="ListRoute53HealthChecksInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListRoute53HealthChecksInRegion"></a>

```typescript
public readonly ListRoute53HealthChecksInRegion: string;
```

- *Type:* string

[List] arc-region-switch:ListRoute53HealthChecksInRegion.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] arc-region-switch:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] arc-region-switch:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPlanExecution`<sup>Required</sup> <a name="StartPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.StartPlanExecution"></a>

```typescript
public readonly StartPlanExecution: string;
```

- *Type:* string

[Write] arc-region-switch:StartPlanExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] arc-region-switch:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] arc-region-switch:UntagResource.

---

##### `UpdatePlan`<sup>Required</sup> <a name="UpdatePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlan"></a>

```typescript
public readonly UpdatePlan: string;
```

- *Type:* string

[Write] arc-region-switch:UpdatePlan.

---

##### `UpdatePlanExecution`<sup>Required</sup> <a name="UpdatePlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlanExecution"></a>

```typescript
public readonly UpdatePlanExecution: string;
```

- *Type:* string

[Write] arc-region-switch:UpdatePlanExecution.

---

##### `UpdatePlanExecutionStep`<sup>Required</sup> <a name="UpdatePlanExecutionStep" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchActions.property.UpdatePlanExecutionStep"></a>

```typescript
public readonly UpdatePlanExecutionStep: string;
```

- *Type:* string

[Write] arc-region-switch:UpdatePlanExecutionStep.

---

### ArcRegionSwitchConditions <a name="ArcRegionSwitchConditions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions"></a>

Condition key constants and builders for arc-region-switch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

new arc_region_switch.ArcRegionSwitchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.requestTag"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.resourceTag"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.tagKeys"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.CreatePlanConditionKeys">CreatePlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlan action. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePlanConditionKeys`<sup>Required</sup> <a name="CreatePlanConditionKeys" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.CreatePlanConditionKeys"></a>

```typescript
public readonly CreatePlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlan action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ArcRegionSwitchOperations <a name="ArcRegionSwitchOperations" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations"></a>

API operation to required IAM actions mapping for arc-region-switch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

new arc_region_switch.ArcRegionSwitchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ApprovePlanExecutionStep">ApprovePlanExecutionStep</a></code> | <code>string[]</code> | IAM actions required for the ApprovePlanExecutionStep API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.CancelPlanExecution">CancelPlanExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelPlanExecution API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.CreatePlan">CreatePlan</a></code> | <code>string[]</code> | IAM actions required for the CreatePlan API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.DeletePlan">DeletePlan</a></code> | <code>string[]</code> | IAM actions required for the DeletePlan API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlanExecutionEvents">ListPlanExecutionEvents</a></code> | <code>string[]</code> | IAM actions required for the ListPlanExecutionEvents API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlanExecutions">ListPlanExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListPlanExecutions API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlans">ListPlans</a></code> | <code>string[]</code> | IAM actions required for the ListPlans API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlansInRegion">ListPlansInRegion</a></code> | <code>string[]</code> | IAM actions required for the ListPlansInRegion API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListRoute53HealthChecks">ListRoute53HealthChecks</a></code> | <code>string[]</code> | IAM actions required for the ListRoute53HealthChecks API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListRoute53HealthChecksInRegion">ListRoute53HealthChecksInRegion</a></code> | <code>string[]</code> | IAM actions required for the ListRoute53HealthChecksInRegion API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlan">opGetPlan</a></code> | <code>string[]</code> | IAM actions required for the GetPlan API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanEvaluationStatus">opGetPlanEvaluationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetPlanEvaluationStatus API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanExecution">opGetPlanExecution</a></code> | <code>string[]</code> | IAM actions required for the GetPlanExecution API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanInRegion">opGetPlanInRegion</a></code> | <code>string[]</code> | IAM actions required for the GetPlanInRegion API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.StartPlanExecution">StartPlanExecution</a></code> | <code>string[]</code> | IAM actions required for the StartPlanExecution API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlan">UpdatePlan</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlan API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlanExecution">UpdatePlanExecution</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlanExecution API call. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlanExecutionStep">UpdatePlanExecutionStep</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlanExecutionStep API call. |

---

##### `ApprovePlanExecutionStep`<sup>Required</sup> <a name="ApprovePlanExecutionStep" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ApprovePlanExecutionStep"></a>

```typescript
public readonly ApprovePlanExecutionStep: string[];
```

- *Type:* string[]

IAM actions required for the ApprovePlanExecutionStep API call.

---

##### `CancelPlanExecution`<sup>Required</sup> <a name="CancelPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.CancelPlanExecution"></a>

```typescript
public readonly CancelPlanExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelPlanExecution API call.

---

##### `CreatePlan`<sup>Required</sup> <a name="CreatePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.CreatePlan"></a>

```typescript
public readonly CreatePlan: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlan API call.

---

##### `DeletePlan`<sup>Required</sup> <a name="DeletePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.DeletePlan"></a>

```typescript
public readonly DeletePlan: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlan API call.

---

##### `ListPlanExecutionEvents`<sup>Required</sup> <a name="ListPlanExecutionEvents" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlanExecutionEvents"></a>

```typescript
public readonly ListPlanExecutionEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListPlanExecutionEvents API call.

---

##### `ListPlanExecutions`<sup>Required</sup> <a name="ListPlanExecutions" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlanExecutions"></a>

```typescript
public readonly ListPlanExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListPlanExecutions API call.

---

##### `ListPlans`<sup>Required</sup> <a name="ListPlans" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlans"></a>

```typescript
public readonly ListPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListPlans API call.

---

##### `ListPlansInRegion`<sup>Required</sup> <a name="ListPlansInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListPlansInRegion"></a>

```typescript
public readonly ListPlansInRegion: string[];
```

- *Type:* string[]

IAM actions required for the ListPlansInRegion API call.

---

##### `ListRoute53HealthChecks`<sup>Required</sup> <a name="ListRoute53HealthChecks" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListRoute53HealthChecks"></a>

```typescript
public readonly ListRoute53HealthChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListRoute53HealthChecks API call.

---

##### `ListRoute53HealthChecksInRegion`<sup>Required</sup> <a name="ListRoute53HealthChecksInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListRoute53HealthChecksInRegion"></a>

```typescript
public readonly ListRoute53HealthChecksInRegion: string[];
```

- *Type:* string[]

IAM actions required for the ListRoute53HealthChecksInRegion API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetPlan`<sup>Required</sup> <a name="opGetPlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlan"></a>

```typescript
public readonly opGetPlan: string[];
```

- *Type:* string[]

IAM actions required for the GetPlan API call.

---

##### `opGetPlanEvaluationStatus`<sup>Required</sup> <a name="opGetPlanEvaluationStatus" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanEvaluationStatus"></a>

```typescript
public readonly opGetPlanEvaluationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetPlanEvaluationStatus API call.

---

##### `opGetPlanExecution`<sup>Required</sup> <a name="opGetPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanExecution"></a>

```typescript
public readonly opGetPlanExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetPlanExecution API call.

---

##### `opGetPlanInRegion`<sup>Required</sup> <a name="opGetPlanInRegion" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.opGetPlanInRegion"></a>

```typescript
public readonly opGetPlanInRegion: string[];
```

- *Type:* string[]

IAM actions required for the GetPlanInRegion API call.

---

##### `StartPlanExecution`<sup>Required</sup> <a name="StartPlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.StartPlanExecution"></a>

```typescript
public readonly StartPlanExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartPlanExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePlan`<sup>Required</sup> <a name="UpdatePlan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlan"></a>

```typescript
public readonly UpdatePlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlan API call.

---

##### `UpdatePlanExecution`<sup>Required</sup> <a name="UpdatePlanExecution" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlanExecution"></a>

```typescript
public readonly UpdatePlanExecution: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlanExecution API call.

---

##### `UpdatePlanExecutionStep`<sup>Required</sup> <a name="UpdatePlanExecutionStep" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchOperations.property.UpdatePlanExecutionStep"></a>

```typescript
public readonly UpdatePlanExecutionStep: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlanExecutionStep API call.

---

### ArcRegionSwitchResources <a name="ArcRegionSwitchResources" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources"></a>

ARN builders, validators, and parsers for arc-region-switch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.Initializer"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

new arc_region_switch.ArcRegionSwitchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.isValidPlanArn">isValidPlanArn</a></code> | Validates whether a string is a valid ARN for the plan resource. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.parsePlanArn">parsePlanArn</a></code> | Parses a plan ARN into its components. |
| <code><a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.plan">plan</a></code> | Builds an ARN for the plan resource. |

---

##### `isValidPlanArn` <a name="isValidPlanArn" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.isValidPlanArn"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchResources.isValidPlanArn(arn: string)
```

Validates whether a string is a valid ARN for the plan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.isValidPlanArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlanArn` <a name="parsePlanArn" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.parsePlanArn"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchResources.parsePlanArn(arn: string)
```

Parses a plan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.parsePlanArn.parameter.arn"></a>

- *Type:* string

---

##### `plan` <a name="plan" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.plan"></a>

```typescript
import { arc_region_switch } from '@cdk_utils/iam'

arc_region_switch.ArcRegionSwitchResources.plan(props: ArcRegionSwitchPlanArnProps)
```

Builds an ARN for the plan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.arc_region_switch.ArcRegionSwitchResources.plan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.arc_region_switch.ArcRegionSwitchPlanArnProps">ArcRegionSwitchPlanArnProps</a>

---




