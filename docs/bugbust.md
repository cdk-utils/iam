# `bugbust` Submodule <a name="`bugbust` Submodule" id="@cdk_utils/iam.bugbust"></a>


## Structs <a name="Structs" id="Structs"></a>

### BugbustEventArnComponents <a name="BugbustEventArnComponents" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents"></a>

Parsed components of a Event ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents.Initializer"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

const bugbustEventArnComponents: bugbust.BugbustEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.eventId">eventId</a></code> | <code>string</code> | The EventId component. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

The EventId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bugbust.BugbustEventArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BugbustEventArnProps <a name="BugbustEventArnProps" id="@cdk_utils/iam.bugbust.BugbustEventArnProps"></a>

Properties for building a Event ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bugbust.BugbustEventArnProps.Initializer"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

const bugbustEventArnProps: bugbust.BugbustEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnProps.property.eventId">eventId</a></code> | <code>string</code> | The EventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustEventArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdk_utils/iam.bugbust.BugbustEventArnProps.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

The EventId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bugbust.BugbustEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bugbust.BugbustEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bugbust.BugbustEventArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BugbustActions <a name="BugbustActions" id="@cdk_utils/iam.bugbust.BugbustActions"></a>

IAM action constants for the bugbust service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bugbust.BugbustActions.Initializer"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

new bugbust.BugbustActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.actionGetEvent">actionGetEvent</a></code> | <code>string</code> | [Read] bugbust:GetEvent. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.actionGetJoinEventStatus">actionGetJoinEventStatus</a></code> | <code>string</code> | [Read] bugbust:GetJoinEventStatus. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.CreateEvent">CreateEvent</a></code> | <code>string</code> | [Write] bugbust:CreateEvent. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.EvaluateProfilingGroups">EvaluateProfilingGroups</a></code> | <code>string</code> | [Write] bugbust:EvaluateProfilingGroups. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.JoinEvent">JoinEvent</a></code> | <code>string</code> | [Write] bugbust:JoinEvent. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListBugs">ListBugs</a></code> | <code>string</code> | [Read] bugbust:ListBugs. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListEventParticipants">ListEventParticipants</a></code> | <code>string</code> | [Read] bugbust:ListEventParticipants. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListEvents">ListEvents</a></code> | <code>string</code> | [List] bugbust:ListEvents. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListEventScores">ListEventScores</a></code> | <code>string</code> | [Read] bugbust:ListEventScores. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListProfilingGroups">ListProfilingGroups</a></code> | <code>string</code> | [Read] bugbust:ListProfilingGroups. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListPullRequests">ListPullRequests</a></code> | <code>string</code> | [Read] bugbust:ListPullRequests. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bugbust:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bugbust:TagResource. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bugbust:UntagResource. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.UpdateEvent">UpdateEvent</a></code> | <code>string</code> | [Write] bugbust:UpdateEvent. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.UpdateWorkItem">UpdateWorkItem</a></code> | <code>string</code> | [Write] bugbust:UpdateWorkItem. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustActions.property.UpdateWorkItemAdmin">UpdateWorkItemAdmin</a></code> | <code>string</code> | [Write] bugbust:UpdateWorkItemAdmin. |

---

##### `actionGetEvent`<sup>Required</sup> <a name="actionGetEvent" id="@cdk_utils/iam.bugbust.BugbustActions.property.actionGetEvent"></a>

```typescript
public readonly actionGetEvent: string;
```

- *Type:* string

[Read] bugbust:GetEvent.

---

##### `actionGetJoinEventStatus`<sup>Required</sup> <a name="actionGetJoinEventStatus" id="@cdk_utils/iam.bugbust.BugbustActions.property.actionGetJoinEventStatus"></a>

```typescript
public readonly actionGetJoinEventStatus: string;
```

- *Type:* string

[Read] bugbust:GetJoinEventStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bugbust.BugbustActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bugbust.BugbustActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bugbust.BugbustActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bugbust.BugbustActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bugbust.BugbustActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateEvent`<sup>Required</sup> <a name="CreateEvent" id="@cdk_utils/iam.bugbust.BugbustActions.property.CreateEvent"></a>

```typescript
public readonly CreateEvent: string;
```

- *Type:* string

[Write] bugbust:CreateEvent.

---

##### `EvaluateProfilingGroups`<sup>Required</sup> <a name="EvaluateProfilingGroups" id="@cdk_utils/iam.bugbust.BugbustActions.property.EvaluateProfilingGroups"></a>

```typescript
public readonly EvaluateProfilingGroups: string;
```

- *Type:* string

[Write] bugbust:EvaluateProfilingGroups.

---

##### `JoinEvent`<sup>Required</sup> <a name="JoinEvent" id="@cdk_utils/iam.bugbust.BugbustActions.property.JoinEvent"></a>

```typescript
public readonly JoinEvent: string;
```

- *Type:* string

[Write] bugbust:JoinEvent.

---

##### `ListBugs`<sup>Required</sup> <a name="ListBugs" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListBugs"></a>

```typescript
public readonly ListBugs: string;
```

- *Type:* string

[Read] bugbust:ListBugs.

---

##### `ListEventParticipants`<sup>Required</sup> <a name="ListEventParticipants" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListEventParticipants"></a>

```typescript
public readonly ListEventParticipants: string;
```

- *Type:* string

[Read] bugbust:ListEventParticipants.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListEvents"></a>

```typescript
public readonly ListEvents: string;
```

- *Type:* string

[List] bugbust:ListEvents.

---

##### `ListEventScores`<sup>Required</sup> <a name="ListEventScores" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListEventScores"></a>

```typescript
public readonly ListEventScores: string;
```

- *Type:* string

[Read] bugbust:ListEventScores.

---

##### `ListProfilingGroups`<sup>Required</sup> <a name="ListProfilingGroups" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListProfilingGroups"></a>

```typescript
public readonly ListProfilingGroups: string;
```

- *Type:* string

[Read] bugbust:ListProfilingGroups.

---

##### `ListPullRequests`<sup>Required</sup> <a name="ListPullRequests" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListPullRequests"></a>

```typescript
public readonly ListPullRequests: string;
```

- *Type:* string

[Read] bugbust:ListPullRequests.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bugbust.BugbustActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bugbust:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bugbust.BugbustActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bugbust.BugbustActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bugbust:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bugbust.BugbustActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bugbust:UntagResource.

---

##### `UpdateEvent`<sup>Required</sup> <a name="UpdateEvent" id="@cdk_utils/iam.bugbust.BugbustActions.property.UpdateEvent"></a>

```typescript
public readonly UpdateEvent: string;
```

- *Type:* string

[Write] bugbust:UpdateEvent.

---

##### `UpdateWorkItem`<sup>Required</sup> <a name="UpdateWorkItem" id="@cdk_utils/iam.bugbust.BugbustActions.property.UpdateWorkItem"></a>

```typescript
public readonly UpdateWorkItem: string;
```

- *Type:* string

[Write] bugbust:UpdateWorkItem.

---

##### `UpdateWorkItemAdmin`<sup>Required</sup> <a name="UpdateWorkItemAdmin" id="@cdk_utils/iam.bugbust.BugbustActions.property.UpdateWorkItemAdmin"></a>

```typescript
public readonly UpdateWorkItemAdmin: string;
```

- *Type:* string

[Write] bugbust:UpdateWorkItemAdmin.

---

### BugbustConditions <a name="BugbustConditions" id="@cdk_utils/iam.bugbust.BugbustConditions"></a>

Condition key constants and builders for bugbust.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bugbust.BugbustConditions.Initializer"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

new bugbust.BugbustConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bugbust.BugbustConditions.requestTag"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bugbust.BugbustConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bugbust.BugbustConditions.resourceTag"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bugbust.BugbustConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.tagKeys"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bugbust.BugbustConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.actionGetEventConditionKeys">actionGetEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEvent action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.actionGetJoinEventStatusConditionKeys">actionGetJoinEventStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetJoinEventStatus action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.CreateEventConditionKeys">CreateEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvent action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.EvaluateProfilingGroupsConditionKeys">EvaluateProfilingGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EvaluateProfilingGroups action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.JoinEventConditionKeys">JoinEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the JoinEvent action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListBugsConditionKeys">ListBugsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBugs action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventParticipantsConditionKeys">ListEventParticipantsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEventParticipants action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventsConditionKeys">ListEventsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEvents action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventScoresConditionKeys">ListEventScoresConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEventScores action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListProfilingGroupsConditionKeys">ListProfilingGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListProfilingGroups action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListPullRequestsConditionKeys">ListPullRequestsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPullRequests action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateEventConditionKeys">UpdateEventConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEvent action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateWorkItemAdminConditionKeys">UpdateWorkItemAdminConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkItemAdmin action. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateWorkItemConditionKeys">UpdateWorkItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkItem action. |

---

##### `actionGetEventConditionKeys`<sup>Required</sup> <a name="actionGetEventConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.actionGetEventConditionKeys"></a>

```typescript
public readonly actionGetEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEvent action.

---

##### `actionGetJoinEventStatusConditionKeys`<sup>Required</sup> <a name="actionGetJoinEventStatusConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.actionGetJoinEventStatusConditionKeys"></a>

```typescript
public readonly actionGetJoinEventStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetJoinEventStatus action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bugbust.BugbustConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEventConditionKeys`<sup>Required</sup> <a name="CreateEventConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.CreateEventConditionKeys"></a>

```typescript
public readonly CreateEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvent action.

---

##### `EvaluateProfilingGroupsConditionKeys`<sup>Required</sup> <a name="EvaluateProfilingGroupsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.EvaluateProfilingGroupsConditionKeys"></a>

```typescript
public readonly EvaluateProfilingGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EvaluateProfilingGroups action.

---

##### `JoinEventConditionKeys`<sup>Required</sup> <a name="JoinEventConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.JoinEventConditionKeys"></a>

```typescript
public readonly JoinEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the JoinEvent action.

---

##### `ListBugsConditionKeys`<sup>Required</sup> <a name="ListBugsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListBugsConditionKeys"></a>

```typescript
public readonly ListBugsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBugs action.

---

##### `ListEventParticipantsConditionKeys`<sup>Required</sup> <a name="ListEventParticipantsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventParticipantsConditionKeys"></a>

```typescript
public readonly ListEventParticipantsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEventParticipants action.

---

##### `ListEventsConditionKeys`<sup>Required</sup> <a name="ListEventsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventsConditionKeys"></a>

```typescript
public readonly ListEventsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEvents action.

---

##### `ListEventScoresConditionKeys`<sup>Required</sup> <a name="ListEventScoresConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListEventScoresConditionKeys"></a>

```typescript
public readonly ListEventScoresConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEventScores action.

---

##### `ListProfilingGroupsConditionKeys`<sup>Required</sup> <a name="ListProfilingGroupsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListProfilingGroupsConditionKeys"></a>

```typescript
public readonly ListProfilingGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListProfilingGroups action.

---

##### `ListPullRequestsConditionKeys`<sup>Required</sup> <a name="ListPullRequestsConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListPullRequestsConditionKeys"></a>

```typescript
public readonly ListPullRequestsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPullRequests action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEventConditionKeys`<sup>Required</sup> <a name="UpdateEventConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateEventConditionKeys"></a>

```typescript
public readonly UpdateEventConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEvent action.

---

##### `UpdateWorkItemAdminConditionKeys`<sup>Required</sup> <a name="UpdateWorkItemAdminConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateWorkItemAdminConditionKeys"></a>

```typescript
public readonly UpdateWorkItemAdminConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkItemAdmin action.

---

##### `UpdateWorkItemConditionKeys`<sup>Required</sup> <a name="UpdateWorkItemConditionKeys" id="@cdk_utils/iam.bugbust.BugbustConditions.property.UpdateWorkItemConditionKeys"></a>

```typescript
public readonly UpdateWorkItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkItem action.

---

### BugbustResources <a name="BugbustResources" id="@cdk_utils/iam.bugbust.BugbustResources"></a>

ARN builders, validators, and parsers for bugbust resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bugbust.BugbustResources.Initializer"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

new bugbust.BugbustResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustResources.event">event</a></code> | Builds an ARN for the Event resource. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustResources.isValidEventArn">isValidEventArn</a></code> | Validates whether a string is a valid ARN for the Event resource. |
| <code><a href="#@cdk_utils/iam.bugbust.BugbustResources.parseEventArn">parseEventArn</a></code> | Parses a Event ARN into its components. |

---

##### `event` <a name="event" id="@cdk_utils/iam.bugbust.BugbustResources.event"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustResources.event(props: BugbustEventArnProps)
```

Builds an ARN for the Event resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bugbust.BugbustResources.event.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bugbust.BugbustEventArnProps">BugbustEventArnProps</a>

---

##### `isValidEventArn` <a name="isValidEventArn" id="@cdk_utils/iam.bugbust.BugbustResources.isValidEventArn"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustResources.isValidEventArn(arn: string)
```

Validates whether a string is a valid ARN for the Event resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bugbust.BugbustResources.isValidEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventArn` <a name="parseEventArn" id="@cdk_utils/iam.bugbust.BugbustResources.parseEventArn"></a>

```typescript
import { bugbust } from '@cdk_utils/iam'

bugbust.BugbustResources.parseEventArn(arn: string)
```

Parses a Event ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bugbust.BugbustResources.parseEventArn.parameter.arn"></a>

- *Type:* string

---




