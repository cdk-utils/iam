# `scheduler` Submodule <a name="`scheduler` Submodule" id="@cdk_utils/iam.scheduler"></a>


## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleArnComponents <a name="SchedulerScheduleArnComponents" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents"></a>

Parsed components of a schedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

const schedulerScheduleArnComponents: scheduler.SchedulerScheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.scheduleName">scheduleName</a></code> | <code>string</code> | The ScheduleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnComponents.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

The ScheduleName component.

---

### SchedulerScheduleArnProps <a name="SchedulerScheduleArnProps" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps"></a>

Properties for building a schedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

const schedulerScheduleArnProps: scheduler.SchedulerScheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.scheduleName">scheduleName</a></code> | <code>string</code> | The ScheduleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `scheduleName`<sup>Required</sup> <a name="scheduleName" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.scheduleName"></a>

```typescript
public readonly scheduleName: string;
```

- *Type:* string

The ScheduleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scheduler.SchedulerScheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SchedulerScheduleGroupArnComponents <a name="SchedulerScheduleGroupArnComponents" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents"></a>

Parsed components of a schedule-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

const schedulerScheduleGroupArnComponents: scheduler.SchedulerScheduleGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SchedulerScheduleGroupArnProps <a name="SchedulerScheduleGroupArnProps" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps"></a>

Properties for building a schedule-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

const schedulerScheduleGroupArnProps: scheduler.SchedulerScheduleGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerActions <a name="SchedulerActions" id="@cdk_utils/iam.scheduler.SchedulerActions"></a>

IAM action constants for the scheduler service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scheduler.SchedulerActions.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

new scheduler.SchedulerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.actionGetSchedule">actionGetSchedule</a></code> | <code>string</code> | [Read] scheduler:GetSchedule. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.actionGetScheduleGroup">actionGetScheduleGroup</a></code> | <code>string</code> | [Read] scheduler:GetScheduleGroup. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.CreateSchedule">CreateSchedule</a></code> | <code>string</code> | [Write] scheduler:CreateSchedule. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.CreateScheduleGroup">CreateScheduleGroup</a></code> | <code>string</code> | [Write] scheduler:CreateScheduleGroup. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string</code> | [Write] scheduler:DeleteSchedule. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.DeleteScheduleGroup">DeleteScheduleGroup</a></code> | <code>string</code> | [Write] scheduler:DeleteScheduleGroup. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.ListScheduleGroups">ListScheduleGroups</a></code> | <code>string</code> | [List] scheduler:ListScheduleGroups. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.ListSchedules">ListSchedules</a></code> | <code>string</code> | [List] scheduler:ListSchedules. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.ListSchedulesByTarget">ListSchedulesByTarget</a></code> | <code>string</code> | [List] scheduler:ListSchedulesByTarget. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] scheduler:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] scheduler:TagResource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] scheduler:UntagResource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerActions.property.UpdateSchedule">UpdateSchedule</a></code> | <code>string</code> | [Write] scheduler:UpdateSchedule. |

---

##### `actionGetSchedule`<sup>Required</sup> <a name="actionGetSchedule" id="@cdk_utils/iam.scheduler.SchedulerActions.property.actionGetSchedule"></a>

```typescript
public readonly actionGetSchedule: string;
```

- *Type:* string

[Read] scheduler:GetSchedule.

---

##### `actionGetScheduleGroup`<sup>Required</sup> <a name="actionGetScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerActions.property.actionGetScheduleGroup"></a>

```typescript
public readonly actionGetScheduleGroup: string;
```

- *Type:* string

[Read] scheduler:GetScheduleGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.scheduler.SchedulerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.scheduler.SchedulerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.scheduler.SchedulerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.scheduler.SchedulerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.scheduler.SchedulerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSchedule`<sup>Required</sup> <a name="CreateSchedule" id="@cdk_utils/iam.scheduler.SchedulerActions.property.CreateSchedule"></a>

```typescript
public readonly CreateSchedule: string;
```

- *Type:* string

[Write] scheduler:CreateSchedule.

---

##### `CreateScheduleGroup`<sup>Required</sup> <a name="CreateScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerActions.property.CreateScheduleGroup"></a>

```typescript
public readonly CreateScheduleGroup: string;
```

- *Type:* string

[Write] scheduler:CreateScheduleGroup.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.scheduler.SchedulerActions.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string;
```

- *Type:* string

[Write] scheduler:DeleteSchedule.

---

##### `DeleteScheduleGroup`<sup>Required</sup> <a name="DeleteScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerActions.property.DeleteScheduleGroup"></a>

```typescript
public readonly DeleteScheduleGroup: string;
```

- *Type:* string

[Write] scheduler:DeleteScheduleGroup.

---

##### `ListScheduleGroups`<sup>Required</sup> <a name="ListScheduleGroups" id="@cdk_utils/iam.scheduler.SchedulerActions.property.ListScheduleGroups"></a>

```typescript
public readonly ListScheduleGroups: string;
```

- *Type:* string

[List] scheduler:ListScheduleGroups.

---

##### `ListSchedules`<sup>Required</sup> <a name="ListSchedules" id="@cdk_utils/iam.scheduler.SchedulerActions.property.ListSchedules"></a>

```typescript
public readonly ListSchedules: string;
```

- *Type:* string

[List] scheduler:ListSchedules.

---

##### `ListSchedulesByTarget`<sup>Required</sup> <a name="ListSchedulesByTarget" id="@cdk_utils/iam.scheduler.SchedulerActions.property.ListSchedulesByTarget"></a>

```typescript
public readonly ListSchedulesByTarget: string;
```

- *Type:* string

[List] scheduler:ListSchedulesByTarget.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.scheduler.SchedulerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] scheduler:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.scheduler.SchedulerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.scheduler.SchedulerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] scheduler:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.scheduler.SchedulerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] scheduler:UntagResource.

---

##### `UpdateSchedule`<sup>Required</sup> <a name="UpdateSchedule" id="@cdk_utils/iam.scheduler.SchedulerActions.property.UpdateSchedule"></a>

```typescript
public readonly UpdateSchedule: string;
```

- *Type:* string

[Write] scheduler:UpdateSchedule.

---

### SchedulerConditions <a name="SchedulerConditions" id="@cdk_utils/iam.scheduler.SchedulerConditions"></a>

Condition key constants and builders for scheduler.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scheduler.SchedulerConditions.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

new scheduler.SchedulerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.scheduler.SchedulerConditions.requestTag"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.scheduler.SchedulerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.scheduler.SchedulerConditions.resourceTag"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.scheduler.SchedulerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.tagKeys"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.scheduler.SchedulerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.actionGetScheduleConditionKeys">actionGetScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSchedule action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.actionGetScheduleGroupConditionKeys">actionGetScheduleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetScheduleGroup action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.CreateScheduleConditionKeys">CreateScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchedule action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.CreateScheduleGroupConditionKeys">CreateScheduleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScheduleGroup action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.DeleteScheduleConditionKeys">DeleteScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSchedule action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.DeleteScheduleGroupConditionKeys">DeleteScheduleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteScheduleGroup action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerConditions.property.UpdateScheduleConditionKeys">UpdateScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSchedule action. |

---

##### `actionGetScheduleConditionKeys`<sup>Required</sup> <a name="actionGetScheduleConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.actionGetScheduleConditionKeys"></a>

```typescript
public readonly actionGetScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSchedule action.

---

##### `actionGetScheduleGroupConditionKeys`<sup>Required</sup> <a name="actionGetScheduleGroupConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.actionGetScheduleGroupConditionKeys"></a>

```typescript
public readonly actionGetScheduleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetScheduleGroup action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateScheduleConditionKeys`<sup>Required</sup> <a name="CreateScheduleConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.CreateScheduleConditionKeys"></a>

```typescript
public readonly CreateScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchedule action.

---

##### `CreateScheduleGroupConditionKeys`<sup>Required</sup> <a name="CreateScheduleGroupConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.CreateScheduleGroupConditionKeys"></a>

```typescript
public readonly CreateScheduleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScheduleGroup action.

---

##### `DeleteScheduleConditionKeys`<sup>Required</sup> <a name="DeleteScheduleConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.DeleteScheduleConditionKeys"></a>

```typescript
public readonly DeleteScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSchedule action.

---

##### `DeleteScheduleGroupConditionKeys`<sup>Required</sup> <a name="DeleteScheduleGroupConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.DeleteScheduleGroupConditionKeys"></a>

```typescript
public readonly DeleteScheduleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteScheduleGroup action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateScheduleConditionKeys`<sup>Required</sup> <a name="UpdateScheduleConditionKeys" id="@cdk_utils/iam.scheduler.SchedulerConditions.property.UpdateScheduleConditionKeys"></a>

```typescript
public readonly UpdateScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSchedule action.

---

### SchedulerOperations <a name="SchedulerOperations" id="@cdk_utils/iam.scheduler.SchedulerOperations"></a>

API operation to required IAM actions mapping for scheduler.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scheduler.SchedulerOperations.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

new scheduler.SchedulerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.CreateSchedule">CreateSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreateSchedule API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.CreateScheduleGroup">CreateScheduleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduleGroup API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchedule API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.DeleteScheduleGroup">DeleteScheduleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduleGroup API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.ListScheduleGroups">ListScheduleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListScheduleGroups API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.ListSchedules">ListSchedules</a></code> | <code>string[]</code> | IAM actions required for the ListSchedules API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.opGetSchedule">opGetSchedule</a></code> | <code>string[]</code> | IAM actions required for the GetSchedule API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.opGetScheduleGroup">opGetScheduleGroup</a></code> | <code>string[]</code> | IAM actions required for the GetScheduleGroup API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerOperations.property.UpdateSchedule">UpdateSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchedule API call. |

---

##### `CreateSchedule`<sup>Required</sup> <a name="CreateSchedule" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.CreateSchedule"></a>

```typescript
public readonly CreateSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchedule API call.

---

##### `CreateScheduleGroup`<sup>Required</sup> <a name="CreateScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.CreateScheduleGroup"></a>

```typescript
public readonly CreateScheduleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduleGroup API call.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchedule API call.

---

##### `DeleteScheduleGroup`<sup>Required</sup> <a name="DeleteScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.DeleteScheduleGroup"></a>

```typescript
public readonly DeleteScheduleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduleGroup API call.

---

##### `ListScheduleGroups`<sup>Required</sup> <a name="ListScheduleGroups" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.ListScheduleGroups"></a>

```typescript
public readonly ListScheduleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduleGroups API call.

---

##### `ListSchedules`<sup>Required</sup> <a name="ListSchedules" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.ListSchedules"></a>

```typescript
public readonly ListSchedules: string[];
```

- *Type:* string[]

IAM actions required for the ListSchedules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetSchedule`<sup>Required</sup> <a name="opGetSchedule" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.opGetSchedule"></a>

```typescript
public readonly opGetSchedule: string[];
```

- *Type:* string[]

IAM actions required for the GetSchedule API call.

---

##### `opGetScheduleGroup`<sup>Required</sup> <a name="opGetScheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.opGetScheduleGroup"></a>

```typescript
public readonly opGetScheduleGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetScheduleGroup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateSchedule`<sup>Required</sup> <a name="UpdateSchedule" id="@cdk_utils/iam.scheduler.SchedulerOperations.property.UpdateSchedule"></a>

```typescript
public readonly UpdateSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchedule API call.

---

### SchedulerResources <a name="SchedulerResources" id="@cdk_utils/iam.scheduler.SchedulerResources"></a>

ARN builders, validators, and parsers for scheduler resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scheduler.SchedulerResources.Initializer"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

new scheduler.SchedulerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleArn">isValidScheduleArn</a></code> | Validates whether a string is a valid ARN for the schedule resource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleGroupArn">isValidScheduleGroupArn</a></code> | Validates whether a string is a valid ARN for the schedule-group resource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleArn">parseScheduleArn</a></code> | Parses a schedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleGroupArn">parseScheduleGroupArn</a></code> | Parses a schedule-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.schedule">schedule</a></code> | Builds an ARN for the schedule resource. |
| <code><a href="#@cdk_utils/iam.scheduler.SchedulerResources.scheduleGroup">scheduleGroup</a></code> | Builds an ARN for the schedule-group resource. |

---

##### `isValidScheduleArn` <a name="isValidScheduleArn" id="@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleArn"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.isValidScheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the schedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduleGroupArn` <a name="isValidScheduleGroupArn" id="@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleGroupArn"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.isValidScheduleGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the schedule-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scheduler.SchedulerResources.isValidScheduleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduleArn` <a name="parseScheduleArn" id="@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleArn"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.parseScheduleArn(arn: string)
```

Parses a schedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduleGroupArn` <a name="parseScheduleGroupArn" id="@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleGroupArn"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.parseScheduleGroupArn(arn: string)
```

Parses a schedule-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scheduler.SchedulerResources.parseScheduleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `schedule` <a name="schedule" id="@cdk_utils/iam.scheduler.SchedulerResources.schedule"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.schedule(props: SchedulerScheduleArnProps)
```

Builds an ARN for the schedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scheduler.SchedulerResources.schedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scheduler.SchedulerScheduleArnProps">SchedulerScheduleArnProps</a>

---

##### `scheduleGroup` <a name="scheduleGroup" id="@cdk_utils/iam.scheduler.SchedulerResources.scheduleGroup"></a>

```typescript
import { scheduler } from '@cdk_utils/iam'

scheduler.SchedulerResources.scheduleGroup(props: SchedulerScheduleGroupArnProps)
```

Builds an ARN for the schedule-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scheduler.SchedulerResources.scheduleGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scheduler.SchedulerScheduleGroupArnProps">SchedulerScheduleGroupArnProps</a>

---




