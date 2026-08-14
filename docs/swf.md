# `swf` Submodule <a name="`swf` Submodule" id="@cdk_utils/iam.swf"></a>


## Structs <a name="Structs" id="Structs"></a>

### SwfDomainArnComponents <a name="SwfDomainArnComponents" id="@cdk_utils/iam.swf.SwfDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.swf.SwfDomainArnComponents.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

const swfDomainArnComponents: swf.SwfDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnComponents.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component. |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.swf.SwfDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.swf.SwfDomainArnComponents.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.swf.SwfDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### SwfDomainArnProps <a name="SwfDomainArnProps" id="@cdk_utils/iam.swf.SwfDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.swf.SwfDomainArnProps.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

const swfDomainArnProps: swf.SwfDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnProps.property.domainName">domainName</a></code> | <code>string</code> | The DomainName component of the ARN. |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.swf.SwfDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdk_utils/iam.swf.SwfDomainArnProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The DomainName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.swf.SwfDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.swf.SwfDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### SwfActions <a name="SwfActions" id="@cdk_utils/iam.swf.SwfActions"></a>

IAM action constants for the swf service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.swf.SwfActions.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

new swf.SwfActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.actionGetWorkflowExecutionHistory">actionGetWorkflowExecutionHistory</a></code> | <code>string</code> | [Read] swf:GetWorkflowExecutionHistory. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CancelTimer">CancelTimer</a></code> | <code>string</code> | [Write] swf:CancelTimer. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CancelWorkflowExecution">CancelWorkflowExecution</a></code> | <code>string</code> | [Write] swf:CancelWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CompleteWorkflowExecution">CompleteWorkflowExecution</a></code> | <code>string</code> | [Write] swf:CompleteWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ContinueAsNewWorkflowExecution">ContinueAsNewWorkflowExecution</a></code> | <code>string</code> | [Write] swf:ContinueAsNewWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CountClosedWorkflowExecutions">CountClosedWorkflowExecutions</a></code> | <code>string</code> | [Read] swf:CountClosedWorkflowExecutions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CountOpenWorkflowExecutions">CountOpenWorkflowExecutions</a></code> | <code>string</code> | [Read] swf:CountOpenWorkflowExecutions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CountPendingActivityTasks">CountPendingActivityTasks</a></code> | <code>string</code> | [Read] swf:CountPendingActivityTasks. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.CountPendingDecisionTasks">CountPendingDecisionTasks</a></code> | <code>string</code> | [Read] swf:CountPendingDecisionTasks. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DeleteActivityType">DeleteActivityType</a></code> | <code>string</code> | [Write] swf:DeleteActivityType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DeleteWorkflowType">DeleteWorkflowType</a></code> | <code>string</code> | [Write] swf:DeleteWorkflowType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DeprecateActivityType">DeprecateActivityType</a></code> | <code>string</code> | [Write] swf:DeprecateActivityType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DeprecateDomain">DeprecateDomain</a></code> | <code>string</code> | [Write] swf:DeprecateDomain. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DeprecateWorkflowType">DeprecateWorkflowType</a></code> | <code>string</code> | [Write] swf:DeprecateWorkflowType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DescribeActivityType">DescribeActivityType</a></code> | <code>string</code> | [Read] swf:DescribeActivityType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DescribeDomain">DescribeDomain</a></code> | <code>string</code> | [Read] swf:DescribeDomain. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DescribeWorkflowExecution">DescribeWorkflowExecution</a></code> | <code>string</code> | [Read] swf:DescribeWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.DescribeWorkflowType">DescribeWorkflowType</a></code> | <code>string</code> | [Read] swf:DescribeWorkflowType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.FailWorkflowExecution">FailWorkflowExecution</a></code> | <code>string</code> | [Write] swf:FailWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListActivityTypes">ListActivityTypes</a></code> | <code>string</code> | [List] swf:ListActivityTypes. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListClosedWorkflowExecutions">ListClosedWorkflowExecutions</a></code> | <code>string</code> | [List] swf:ListClosedWorkflowExecutions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] swf:ListDomains. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListOpenWorkflowExecutions">ListOpenWorkflowExecutions</a></code> | <code>string</code> | [List] swf:ListOpenWorkflowExecutions. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] swf:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ListWorkflowTypes">ListWorkflowTypes</a></code> | <code>string</code> | [List] swf:ListWorkflowTypes. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.PollForActivityTask">PollForActivityTask</a></code> | <code>string</code> | [Write] swf:PollForActivityTask. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.PollForDecisionTask">PollForDecisionTask</a></code> | <code>string</code> | [Write] swf:PollForDecisionTask. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RecordActivityTaskHeartbeat">RecordActivityTaskHeartbeat</a></code> | <code>string</code> | [Write] swf:RecordActivityTaskHeartbeat. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RecordMarker">RecordMarker</a></code> | <code>string</code> | [Write] swf:RecordMarker. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RegisterActivityType">RegisterActivityType</a></code> | <code>string</code> | [Write] swf:RegisterActivityType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RegisterDomain">RegisterDomain</a></code> | <code>string</code> | [Write] swf:RegisterDomain. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RegisterWorkflowType">RegisterWorkflowType</a></code> | <code>string</code> | [Write] swf:RegisterWorkflowType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RequestCancelActivityTask">RequestCancelActivityTask</a></code> | <code>string</code> | [Write] swf:RequestCancelActivityTask. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RequestCancelExternalWorkflowExecution">RequestCancelExternalWorkflowExecution</a></code> | <code>string</code> | [Write] swf:RequestCancelExternalWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RequestCancelWorkflowExecution">RequestCancelWorkflowExecution</a></code> | <code>string</code> | [Write] swf:RequestCancelWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskCanceled">RespondActivityTaskCanceled</a></code> | <code>string</code> | [Write] swf:RespondActivityTaskCanceled. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskCompleted">RespondActivityTaskCompleted</a></code> | <code>string</code> | [Write] swf:RespondActivityTaskCompleted. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskFailed">RespondActivityTaskFailed</a></code> | <code>string</code> | [Write] swf:RespondActivityTaskFailed. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.RespondDecisionTaskCompleted">RespondDecisionTaskCompleted</a></code> | <code>string</code> | [Write] swf:RespondDecisionTaskCompleted. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.ScheduleActivityTask">ScheduleActivityTask</a></code> | <code>string</code> | [Write] swf:ScheduleActivityTask. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.SignalExternalWorkflowExecution">SignalExternalWorkflowExecution</a></code> | <code>string</code> | [Write] swf:SignalExternalWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.SignalWorkflowExecution">SignalWorkflowExecution</a></code> | <code>string</code> | [Write] swf:SignalWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.StartChildWorkflowExecution">StartChildWorkflowExecution</a></code> | <code>string</code> | [Write] swf:StartChildWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.StartTimer">StartTimer</a></code> | <code>string</code> | [Write] swf:StartTimer. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.StartWorkflowExecution">StartWorkflowExecution</a></code> | <code>string</code> | [Write] swf:StartWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] swf:TagResource. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.TerminateWorkflowExecution">TerminateWorkflowExecution</a></code> | <code>string</code> | [Write] swf:TerminateWorkflowExecution. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.UndeprecateActivityType">UndeprecateActivityType</a></code> | <code>string</code> | [Write] swf:UndeprecateActivityType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.UndeprecateDomain">UndeprecateDomain</a></code> | <code>string</code> | [Write] swf:UndeprecateDomain. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.UndeprecateWorkflowType">UndeprecateWorkflowType</a></code> | <code>string</code> | [Write] swf:UndeprecateWorkflowType. |
| <code><a href="#@cdk_utils/iam.swf.SwfActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] swf:UntagResource. |

---

##### `actionGetWorkflowExecutionHistory`<sup>Required</sup> <a name="actionGetWorkflowExecutionHistory" id="@cdk_utils/iam.swf.SwfActions.property.actionGetWorkflowExecutionHistory"></a>

```typescript
public readonly actionGetWorkflowExecutionHistory: string;
```

- *Type:* string

[Read] swf:GetWorkflowExecutionHistory.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.swf.SwfActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.swf.SwfActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.swf.SwfActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.swf.SwfActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.swf.SwfActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelTimer`<sup>Required</sup> <a name="CancelTimer" id="@cdk_utils/iam.swf.SwfActions.property.CancelTimer"></a>

```typescript
public readonly CancelTimer: string;
```

- *Type:* string

[Write] swf:CancelTimer.

---

##### `CancelWorkflowExecution`<sup>Required</sup> <a name="CancelWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.CancelWorkflowExecution"></a>

```typescript
public readonly CancelWorkflowExecution: string;
```

- *Type:* string

[Write] swf:CancelWorkflowExecution.

---

##### `CompleteWorkflowExecution`<sup>Required</sup> <a name="CompleteWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.CompleteWorkflowExecution"></a>

```typescript
public readonly CompleteWorkflowExecution: string;
```

- *Type:* string

[Write] swf:CompleteWorkflowExecution.

---

##### `ContinueAsNewWorkflowExecution`<sup>Required</sup> <a name="ContinueAsNewWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.ContinueAsNewWorkflowExecution"></a>

```typescript
public readonly ContinueAsNewWorkflowExecution: string;
```

- *Type:* string

[Write] swf:ContinueAsNewWorkflowExecution.

---

##### `CountClosedWorkflowExecutions`<sup>Required</sup> <a name="CountClosedWorkflowExecutions" id="@cdk_utils/iam.swf.SwfActions.property.CountClosedWorkflowExecutions"></a>

```typescript
public readonly CountClosedWorkflowExecutions: string;
```

- *Type:* string

[Read] swf:CountClosedWorkflowExecutions.

---

##### `CountOpenWorkflowExecutions`<sup>Required</sup> <a name="CountOpenWorkflowExecutions" id="@cdk_utils/iam.swf.SwfActions.property.CountOpenWorkflowExecutions"></a>

```typescript
public readonly CountOpenWorkflowExecutions: string;
```

- *Type:* string

[Read] swf:CountOpenWorkflowExecutions.

---

##### `CountPendingActivityTasks`<sup>Required</sup> <a name="CountPendingActivityTasks" id="@cdk_utils/iam.swf.SwfActions.property.CountPendingActivityTasks"></a>

```typescript
public readonly CountPendingActivityTasks: string;
```

- *Type:* string

[Read] swf:CountPendingActivityTasks.

---

##### `CountPendingDecisionTasks`<sup>Required</sup> <a name="CountPendingDecisionTasks" id="@cdk_utils/iam.swf.SwfActions.property.CountPendingDecisionTasks"></a>

```typescript
public readonly CountPendingDecisionTasks: string;
```

- *Type:* string

[Read] swf:CountPendingDecisionTasks.

---

##### `DeleteActivityType`<sup>Required</sup> <a name="DeleteActivityType" id="@cdk_utils/iam.swf.SwfActions.property.DeleteActivityType"></a>

```typescript
public readonly DeleteActivityType: string;
```

- *Type:* string

[Write] swf:DeleteActivityType.

---

##### `DeleteWorkflowType`<sup>Required</sup> <a name="DeleteWorkflowType" id="@cdk_utils/iam.swf.SwfActions.property.DeleteWorkflowType"></a>

```typescript
public readonly DeleteWorkflowType: string;
```

- *Type:* string

[Write] swf:DeleteWorkflowType.

---

##### `DeprecateActivityType`<sup>Required</sup> <a name="DeprecateActivityType" id="@cdk_utils/iam.swf.SwfActions.property.DeprecateActivityType"></a>

```typescript
public readonly DeprecateActivityType: string;
```

- *Type:* string

[Write] swf:DeprecateActivityType.

---

##### `DeprecateDomain`<sup>Required</sup> <a name="DeprecateDomain" id="@cdk_utils/iam.swf.SwfActions.property.DeprecateDomain"></a>

```typescript
public readonly DeprecateDomain: string;
```

- *Type:* string

[Write] swf:DeprecateDomain.

---

##### `DeprecateWorkflowType`<sup>Required</sup> <a name="DeprecateWorkflowType" id="@cdk_utils/iam.swf.SwfActions.property.DeprecateWorkflowType"></a>

```typescript
public readonly DeprecateWorkflowType: string;
```

- *Type:* string

[Write] swf:DeprecateWorkflowType.

---

##### `DescribeActivityType`<sup>Required</sup> <a name="DescribeActivityType" id="@cdk_utils/iam.swf.SwfActions.property.DescribeActivityType"></a>

```typescript
public readonly DescribeActivityType: string;
```

- *Type:* string

[Read] swf:DescribeActivityType.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.swf.SwfActions.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string;
```

- *Type:* string

[Read] swf:DescribeDomain.

---

##### `DescribeWorkflowExecution`<sup>Required</sup> <a name="DescribeWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.DescribeWorkflowExecution"></a>

```typescript
public readonly DescribeWorkflowExecution: string;
```

- *Type:* string

[Read] swf:DescribeWorkflowExecution.

---

##### `DescribeWorkflowType`<sup>Required</sup> <a name="DescribeWorkflowType" id="@cdk_utils/iam.swf.SwfActions.property.DescribeWorkflowType"></a>

```typescript
public readonly DescribeWorkflowType: string;
```

- *Type:* string

[Read] swf:DescribeWorkflowType.

---

##### `FailWorkflowExecution`<sup>Required</sup> <a name="FailWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.FailWorkflowExecution"></a>

```typescript
public readonly FailWorkflowExecution: string;
```

- *Type:* string

[Write] swf:FailWorkflowExecution.

---

##### `ListActivityTypes`<sup>Required</sup> <a name="ListActivityTypes" id="@cdk_utils/iam.swf.SwfActions.property.ListActivityTypes"></a>

```typescript
public readonly ListActivityTypes: string;
```

- *Type:* string

[List] swf:ListActivityTypes.

---

##### `ListClosedWorkflowExecutions`<sup>Required</sup> <a name="ListClosedWorkflowExecutions" id="@cdk_utils/iam.swf.SwfActions.property.ListClosedWorkflowExecutions"></a>

```typescript
public readonly ListClosedWorkflowExecutions: string;
```

- *Type:* string

[List] swf:ListClosedWorkflowExecutions.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.swf.SwfActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] swf:ListDomains.

---

##### `ListOpenWorkflowExecutions`<sup>Required</sup> <a name="ListOpenWorkflowExecutions" id="@cdk_utils/iam.swf.SwfActions.property.ListOpenWorkflowExecutions"></a>

```typescript
public readonly ListOpenWorkflowExecutions: string;
```

- *Type:* string

[List] swf:ListOpenWorkflowExecutions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.swf.SwfActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] swf:ListTagsForResource.

---

##### `ListWorkflowTypes`<sup>Required</sup> <a name="ListWorkflowTypes" id="@cdk_utils/iam.swf.SwfActions.property.ListWorkflowTypes"></a>

```typescript
public readonly ListWorkflowTypes: string;
```

- *Type:* string

[List] swf:ListWorkflowTypes.

---

##### `PollForActivityTask`<sup>Required</sup> <a name="PollForActivityTask" id="@cdk_utils/iam.swf.SwfActions.property.PollForActivityTask"></a>

```typescript
public readonly PollForActivityTask: string;
```

- *Type:* string

[Write] swf:PollForActivityTask.

---

##### `PollForDecisionTask`<sup>Required</sup> <a name="PollForDecisionTask" id="@cdk_utils/iam.swf.SwfActions.property.PollForDecisionTask"></a>

```typescript
public readonly PollForDecisionTask: string;
```

- *Type:* string

[Write] swf:PollForDecisionTask.

---

##### `RecordActivityTaskHeartbeat`<sup>Required</sup> <a name="RecordActivityTaskHeartbeat" id="@cdk_utils/iam.swf.SwfActions.property.RecordActivityTaskHeartbeat"></a>

```typescript
public readonly RecordActivityTaskHeartbeat: string;
```

- *Type:* string

[Write] swf:RecordActivityTaskHeartbeat.

---

##### `RecordMarker`<sup>Required</sup> <a name="RecordMarker" id="@cdk_utils/iam.swf.SwfActions.property.RecordMarker"></a>

```typescript
public readonly RecordMarker: string;
```

- *Type:* string

[Write] swf:RecordMarker.

---

##### `RegisterActivityType`<sup>Required</sup> <a name="RegisterActivityType" id="@cdk_utils/iam.swf.SwfActions.property.RegisterActivityType"></a>

```typescript
public readonly RegisterActivityType: string;
```

- *Type:* string

[Write] swf:RegisterActivityType.

---

##### `RegisterDomain`<sup>Required</sup> <a name="RegisterDomain" id="@cdk_utils/iam.swf.SwfActions.property.RegisterDomain"></a>

```typescript
public readonly RegisterDomain: string;
```

- *Type:* string

[Write] swf:RegisterDomain.

---

##### `RegisterWorkflowType`<sup>Required</sup> <a name="RegisterWorkflowType" id="@cdk_utils/iam.swf.SwfActions.property.RegisterWorkflowType"></a>

```typescript
public readonly RegisterWorkflowType: string;
```

- *Type:* string

[Write] swf:RegisterWorkflowType.

---

##### `RequestCancelActivityTask`<sup>Required</sup> <a name="RequestCancelActivityTask" id="@cdk_utils/iam.swf.SwfActions.property.RequestCancelActivityTask"></a>

```typescript
public readonly RequestCancelActivityTask: string;
```

- *Type:* string

[Write] swf:RequestCancelActivityTask.

---

##### `RequestCancelExternalWorkflowExecution`<sup>Required</sup> <a name="RequestCancelExternalWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.RequestCancelExternalWorkflowExecution"></a>

```typescript
public readonly RequestCancelExternalWorkflowExecution: string;
```

- *Type:* string

[Write] swf:RequestCancelExternalWorkflowExecution.

---

##### `RequestCancelWorkflowExecution`<sup>Required</sup> <a name="RequestCancelWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.RequestCancelWorkflowExecution"></a>

```typescript
public readonly RequestCancelWorkflowExecution: string;
```

- *Type:* string

[Write] swf:RequestCancelWorkflowExecution.

---

##### `RespondActivityTaskCanceled`<sup>Required</sup> <a name="RespondActivityTaskCanceled" id="@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskCanceled"></a>

```typescript
public readonly RespondActivityTaskCanceled: string;
```

- *Type:* string

[Write] swf:RespondActivityTaskCanceled.

---

##### `RespondActivityTaskCompleted`<sup>Required</sup> <a name="RespondActivityTaskCompleted" id="@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskCompleted"></a>

```typescript
public readonly RespondActivityTaskCompleted: string;
```

- *Type:* string

[Write] swf:RespondActivityTaskCompleted.

---

##### `RespondActivityTaskFailed`<sup>Required</sup> <a name="RespondActivityTaskFailed" id="@cdk_utils/iam.swf.SwfActions.property.RespondActivityTaskFailed"></a>

```typescript
public readonly RespondActivityTaskFailed: string;
```

- *Type:* string

[Write] swf:RespondActivityTaskFailed.

---

##### `RespondDecisionTaskCompleted`<sup>Required</sup> <a name="RespondDecisionTaskCompleted" id="@cdk_utils/iam.swf.SwfActions.property.RespondDecisionTaskCompleted"></a>

```typescript
public readonly RespondDecisionTaskCompleted: string;
```

- *Type:* string

[Write] swf:RespondDecisionTaskCompleted.

---

##### `ScheduleActivityTask`<sup>Required</sup> <a name="ScheduleActivityTask" id="@cdk_utils/iam.swf.SwfActions.property.ScheduleActivityTask"></a>

```typescript
public readonly ScheduleActivityTask: string;
```

- *Type:* string

[Write] swf:ScheduleActivityTask.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.swf.SwfActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignalExternalWorkflowExecution`<sup>Required</sup> <a name="SignalExternalWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.SignalExternalWorkflowExecution"></a>

```typescript
public readonly SignalExternalWorkflowExecution: string;
```

- *Type:* string

[Write] swf:SignalExternalWorkflowExecution.

---

##### `SignalWorkflowExecution`<sup>Required</sup> <a name="SignalWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.SignalWorkflowExecution"></a>

```typescript
public readonly SignalWorkflowExecution: string;
```

- *Type:* string

[Write] swf:SignalWorkflowExecution.

---

##### `StartChildWorkflowExecution`<sup>Required</sup> <a name="StartChildWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.StartChildWorkflowExecution"></a>

```typescript
public readonly StartChildWorkflowExecution: string;
```

- *Type:* string

[Write] swf:StartChildWorkflowExecution.

---

##### `StartTimer`<sup>Required</sup> <a name="StartTimer" id="@cdk_utils/iam.swf.SwfActions.property.StartTimer"></a>

```typescript
public readonly StartTimer: string;
```

- *Type:* string

[Write] swf:StartTimer.

---

##### `StartWorkflowExecution`<sup>Required</sup> <a name="StartWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.StartWorkflowExecution"></a>

```typescript
public readonly StartWorkflowExecution: string;
```

- *Type:* string

[Write] swf:StartWorkflowExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.swf.SwfActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] swf:TagResource.

---

##### `TerminateWorkflowExecution`<sup>Required</sup> <a name="TerminateWorkflowExecution" id="@cdk_utils/iam.swf.SwfActions.property.TerminateWorkflowExecution"></a>

```typescript
public readonly TerminateWorkflowExecution: string;
```

- *Type:* string

[Write] swf:TerminateWorkflowExecution.

---

##### `UndeprecateActivityType`<sup>Required</sup> <a name="UndeprecateActivityType" id="@cdk_utils/iam.swf.SwfActions.property.UndeprecateActivityType"></a>

```typescript
public readonly UndeprecateActivityType: string;
```

- *Type:* string

[Write] swf:UndeprecateActivityType.

---

##### `UndeprecateDomain`<sup>Required</sup> <a name="UndeprecateDomain" id="@cdk_utils/iam.swf.SwfActions.property.UndeprecateDomain"></a>

```typescript
public readonly UndeprecateDomain: string;
```

- *Type:* string

[Write] swf:UndeprecateDomain.

---

##### `UndeprecateWorkflowType`<sup>Required</sup> <a name="UndeprecateWorkflowType" id="@cdk_utils/iam.swf.SwfActions.property.UndeprecateWorkflowType"></a>

```typescript
public readonly UndeprecateWorkflowType: string;
```

- *Type:* string

[Write] swf:UndeprecateWorkflowType.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.swf.SwfActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] swf:UntagResource.

---

### SwfConditions <a name="SwfConditions" id="@cdk_utils/iam.swf.SwfConditions"></a>

Condition key constants and builders for swf.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.swf.SwfConditions.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

new swf.SwfConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.activityTypeName">activityTypeName</a></code> | Generates a condition block for `swf:activityType.name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.activityTypeVersion">activityTypeVersion</a></code> | Generates a condition block for `swf:activityType.version`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.conditionName">conditionName</a></code> | Generates a condition block for `swf:name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.defaultTaskListName">defaultTaskListName</a></code> | Generates a condition block for `swf:defaultTaskList.name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagFilterTag">tagFilterTag</a></code> | Generates a condition block for `swf:tagFilter.tag`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagListMember0">tagListMember0</a></code> | Generates a condition block for `swf:tagList.member.0`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagListMember1">tagListMember1</a></code> | Generates a condition block for `swf:tagList.member.1`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagListMember2">tagListMember2</a></code> | Generates a condition block for `swf:tagList.member.2`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagListMember3">tagListMember3</a></code> | Generates a condition block for `swf:tagList.member.3`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.tagListMember4">tagListMember4</a></code> | Generates a condition block for `swf:tagList.member.4`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.taskListName">taskListName</a></code> | Generates a condition block for `swf:taskList.name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.typeFilterName">typeFilterName</a></code> | Generates a condition block for `swf:typeFilter.name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.typeFilterVersion">typeFilterVersion</a></code> | Generates a condition block for `swf:typeFilter.version`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.version">version</a></code> | Generates a condition block for `swf:version`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.workflowTypeName">workflowTypeName</a></code> | Generates a condition block for `swf:workflowType.name`. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.workflowTypeVersion">workflowTypeVersion</a></code> | Generates a condition block for `swf:workflowType.version`. |

---

##### `activityTypeName` <a name="activityTypeName" id="@cdk_utils/iam.swf.SwfConditions.activityTypeName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.activityTypeName(value: string)
```

Generates a condition block for `swf:activityType.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.activityTypeName.parameter.value"></a>

- *Type:* string

---

##### `activityTypeVersion` <a name="activityTypeVersion" id="@cdk_utils/iam.swf.SwfConditions.activityTypeVersion"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.activityTypeVersion(value: string)
```

Generates a condition block for `swf:activityType.version`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.activityTypeVersion.parameter.value"></a>

- *Type:* string

---

##### `conditionName` <a name="conditionName" id="@cdk_utils/iam.swf.SwfConditions.conditionName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.conditionName(value: string)
```

Generates a condition block for `swf:name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.conditionName.parameter.value"></a>

- *Type:* string

---

##### `defaultTaskListName` <a name="defaultTaskListName" id="@cdk_utils/iam.swf.SwfConditions.defaultTaskListName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.defaultTaskListName(value: string)
```

Generates a condition block for `swf:defaultTaskList.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.defaultTaskListName.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.swf.SwfConditions.requestTag"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.swf.SwfConditions.resourceTag"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagFilterTag` <a name="tagFilterTag" id="@cdk_utils/iam.swf.SwfConditions.tagFilterTag"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagFilterTag(value: string)
```

Generates a condition block for `swf:tagFilter.tag`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagFilterTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.swf.SwfConditions.tagKeys"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.swf.SwfConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tagListMember0` <a name="tagListMember0" id="@cdk_utils/iam.swf.SwfConditions.tagListMember0"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagListMember0(value: string)
```

Generates a condition block for `swf:tagList.member.0`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagListMember0.parameter.value"></a>

- *Type:* string

---

##### `tagListMember1` <a name="tagListMember1" id="@cdk_utils/iam.swf.SwfConditions.tagListMember1"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagListMember1(value: string)
```

Generates a condition block for `swf:tagList.member.1`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagListMember1.parameter.value"></a>

- *Type:* string

---

##### `tagListMember2` <a name="tagListMember2" id="@cdk_utils/iam.swf.SwfConditions.tagListMember2"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagListMember2(value: string)
```

Generates a condition block for `swf:tagList.member.2`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagListMember2.parameter.value"></a>

- *Type:* string

---

##### `tagListMember3` <a name="tagListMember3" id="@cdk_utils/iam.swf.SwfConditions.tagListMember3"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagListMember3(value: string)
```

Generates a condition block for `swf:tagList.member.3`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagListMember3.parameter.value"></a>

- *Type:* string

---

##### `tagListMember4` <a name="tagListMember4" id="@cdk_utils/iam.swf.SwfConditions.tagListMember4"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.tagListMember4(value: string)
```

Generates a condition block for `swf:tagList.member.4`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.tagListMember4.parameter.value"></a>

- *Type:* string

---

##### `taskListName` <a name="taskListName" id="@cdk_utils/iam.swf.SwfConditions.taskListName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.taskListName(value: string)
```

Generates a condition block for `swf:taskList.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.taskListName.parameter.value"></a>

- *Type:* string

---

##### `typeFilterName` <a name="typeFilterName" id="@cdk_utils/iam.swf.SwfConditions.typeFilterName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.typeFilterName(value: string)
```

Generates a condition block for `swf:typeFilter.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.typeFilterName.parameter.value"></a>

- *Type:* string

---

##### `typeFilterVersion` <a name="typeFilterVersion" id="@cdk_utils/iam.swf.SwfConditions.typeFilterVersion"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.typeFilterVersion(value: string)
```

Generates a condition block for `swf:typeFilter.version`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.typeFilterVersion.parameter.value"></a>

- *Type:* string

---

##### `version` <a name="version" id="@cdk_utils/iam.swf.SwfConditions.version"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.version(value: string)
```

Generates a condition block for `swf:version`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.version.parameter.value"></a>

- *Type:* string

---

##### `workflowTypeName` <a name="workflowTypeName" id="@cdk_utils/iam.swf.SwfConditions.workflowTypeName"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.workflowTypeName(value: string)
```

Generates a condition block for `swf:workflowType.name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.workflowTypeName.parameter.value"></a>

- *Type:* string

---

##### `workflowTypeVersion` <a name="workflowTypeVersion" id="@cdk_utils/iam.swf.SwfConditions.workflowTypeVersion"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfConditions.workflowTypeVersion(value: string)
```

Generates a condition block for `swf:workflowType.version`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.swf.SwfConditions.workflowTypeVersion.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.ACTIVITY_TYPE_NAME">ACTIVITY_TYPE_NAME</a></code> | <code>string</code> | Condition key: swf:activityType.name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.ACTIVITY_TYPE_VERSION">ACTIVITY_TYPE_VERSION</a></code> | <code>string</code> | Condition key: swf:activityType.version (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.CountClosedWorkflowExecutionsConditionKeys">CountClosedWorkflowExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CountClosedWorkflowExecutions action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.CountOpenWorkflowExecutionsConditionKeys">CountOpenWorkflowExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CountOpenWorkflowExecutions action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.CountPendingActivityTasksConditionKeys">CountPendingActivityTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CountPendingActivityTasks action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.CountPendingDecisionTasksConditionKeys">CountPendingDecisionTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CountPendingDecisionTasks action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DEFAULT_TASK_LIST_NAME">DEFAULT_TASK_LIST_NAME</a></code> | <code>string</code> | Condition key: swf:defaultTaskList.name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DeleteActivityTypeConditionKeys">DeleteActivityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteActivityType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DeleteWorkflowTypeConditionKeys">DeleteWorkflowTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkflowType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DeprecateActivityTypeConditionKeys">DeprecateActivityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeprecateActivityType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DeprecateWorkflowTypeConditionKeys">DeprecateWorkflowTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeprecateWorkflowType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DescribeActivityTypeConditionKeys">DescribeActivityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeActivityType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.DescribeWorkflowTypeConditionKeys">DescribeWorkflowTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeWorkflowType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.ListClosedWorkflowExecutionsConditionKeys">ListClosedWorkflowExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListClosedWorkflowExecutions action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.ListOpenWorkflowExecutionsConditionKeys">ListOpenWorkflowExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOpenWorkflowExecutions action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.NAME">NAME</a></code> | <code>string</code> | Condition key: swf:name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.PollForActivityTaskConditionKeys">PollForActivityTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PollForActivityTask action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.PollForDecisionTaskConditionKeys">PollForDecisionTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PollForDecisionTask action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.RegisterActivityTypeConditionKeys">RegisterActivityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterActivityType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.RegisterDomainConditionKeys">RegisterDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterDomain action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.RegisterWorkflowTypeConditionKeys">RegisterWorkflowTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterWorkflowType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.RespondActivityTaskCompletedConditionKeys">RespondActivityTaskCompletedConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RespondActivityTaskCompleted action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.StartWorkflowExecutionConditionKeys">StartWorkflowExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartWorkflowExecution action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_FILTER_TAG">TAG_FILTER_TAG</a></code> | <code>string</code> | Condition key: swf:tagFilter.tag (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_0">TAG_LIST_MEMBER_0</a></code> | <code>string</code> | Condition key: swf:tagList.member.0 (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_1">TAG_LIST_MEMBER_1</a></code> | <code>string</code> | Condition key: swf:tagList.member.1 (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_2">TAG_LIST_MEMBER_2</a></code> | <code>string</code> | Condition key: swf:tagList.member.2 (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_3">TAG_LIST_MEMBER_3</a></code> | <code>string</code> | Condition key: swf:tagList.member.3 (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_4">TAG_LIST_MEMBER_4</a></code> | <code>string</code> | Condition key: swf:tagList.member.4 (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TASK_LIST_NAME">TASK_LIST_NAME</a></code> | <code>string</code> | Condition key: swf:taskList.name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TYPE_FILTER_NAME">TYPE_FILTER_NAME</a></code> | <code>string</code> | Condition key: swf:typeFilter.name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.TYPE_FILTER_VERSION">TYPE_FILTER_VERSION</a></code> | <code>string</code> | Condition key: swf:typeFilter.version (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.UndeprecateActivityTypeConditionKeys">UndeprecateActivityTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UndeprecateActivityType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.UndeprecateWorkflowTypeConditionKeys">UndeprecateWorkflowTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UndeprecateWorkflowType action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.VERSION">VERSION</a></code> | <code>string</code> | Condition key: swf:version (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.WORKFLOW_TYPE_NAME">WORKFLOW_TYPE_NAME</a></code> | <code>string</code> | Condition key: swf:workflowType.name (String). |
| <code><a href="#@cdk_utils/iam.swf.SwfConditions.property.WORKFLOW_TYPE_VERSION">WORKFLOW_TYPE_VERSION</a></code> | <code>string</code> | Condition key: swf:workflowType.version (String). |

---

##### `ACTIVITY_TYPE_NAME`<sup>Required</sup> <a name="ACTIVITY_TYPE_NAME" id="@cdk_utils/iam.swf.SwfConditions.property.ACTIVITY_TYPE_NAME"></a>

```typescript
public readonly ACTIVITY_TYPE_NAME: string;
```

- *Type:* string

Condition key: swf:activityType.name (String).

---

##### `ACTIVITY_TYPE_VERSION`<sup>Required</sup> <a name="ACTIVITY_TYPE_VERSION" id="@cdk_utils/iam.swf.SwfConditions.property.ACTIVITY_TYPE_VERSION"></a>

```typescript
public readonly ACTIVITY_TYPE_VERSION: string;
```

- *Type:* string

Condition key: swf:activityType.version (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.swf.SwfConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.swf.SwfConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.swf.SwfConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CountClosedWorkflowExecutionsConditionKeys`<sup>Required</sup> <a name="CountClosedWorkflowExecutionsConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.CountClosedWorkflowExecutionsConditionKeys"></a>

```typescript
public readonly CountClosedWorkflowExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CountClosedWorkflowExecutions action.

---

##### `CountOpenWorkflowExecutionsConditionKeys`<sup>Required</sup> <a name="CountOpenWorkflowExecutionsConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.CountOpenWorkflowExecutionsConditionKeys"></a>

```typescript
public readonly CountOpenWorkflowExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CountOpenWorkflowExecutions action.

---

##### `CountPendingActivityTasksConditionKeys`<sup>Required</sup> <a name="CountPendingActivityTasksConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.CountPendingActivityTasksConditionKeys"></a>

```typescript
public readonly CountPendingActivityTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CountPendingActivityTasks action.

---

##### `CountPendingDecisionTasksConditionKeys`<sup>Required</sup> <a name="CountPendingDecisionTasksConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.CountPendingDecisionTasksConditionKeys"></a>

```typescript
public readonly CountPendingDecisionTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CountPendingDecisionTasks action.

---

##### `DEFAULT_TASK_LIST_NAME`<sup>Required</sup> <a name="DEFAULT_TASK_LIST_NAME" id="@cdk_utils/iam.swf.SwfConditions.property.DEFAULT_TASK_LIST_NAME"></a>

```typescript
public readonly DEFAULT_TASK_LIST_NAME: string;
```

- *Type:* string

Condition key: swf:defaultTaskList.name (String).

---

##### `DeleteActivityTypeConditionKeys`<sup>Required</sup> <a name="DeleteActivityTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DeleteActivityTypeConditionKeys"></a>

```typescript
public readonly DeleteActivityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteActivityType action.

---

##### `DeleteWorkflowTypeConditionKeys`<sup>Required</sup> <a name="DeleteWorkflowTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DeleteWorkflowTypeConditionKeys"></a>

```typescript
public readonly DeleteWorkflowTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkflowType action.

---

##### `DeprecateActivityTypeConditionKeys`<sup>Required</sup> <a name="DeprecateActivityTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DeprecateActivityTypeConditionKeys"></a>

```typescript
public readonly DeprecateActivityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeprecateActivityType action.

---

##### `DeprecateWorkflowTypeConditionKeys`<sup>Required</sup> <a name="DeprecateWorkflowTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DeprecateWorkflowTypeConditionKeys"></a>

```typescript
public readonly DeprecateWorkflowTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeprecateWorkflowType action.

---

##### `DescribeActivityTypeConditionKeys`<sup>Required</sup> <a name="DescribeActivityTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DescribeActivityTypeConditionKeys"></a>

```typescript
public readonly DescribeActivityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeActivityType action.

---

##### `DescribeWorkflowTypeConditionKeys`<sup>Required</sup> <a name="DescribeWorkflowTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.DescribeWorkflowTypeConditionKeys"></a>

```typescript
public readonly DescribeWorkflowTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeWorkflowType action.

---

##### `ListClosedWorkflowExecutionsConditionKeys`<sup>Required</sup> <a name="ListClosedWorkflowExecutionsConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.ListClosedWorkflowExecutionsConditionKeys"></a>

```typescript
public readonly ListClosedWorkflowExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListClosedWorkflowExecutions action.

---

##### `ListOpenWorkflowExecutionsConditionKeys`<sup>Required</sup> <a name="ListOpenWorkflowExecutionsConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.ListOpenWorkflowExecutionsConditionKeys"></a>

```typescript
public readonly ListOpenWorkflowExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOpenWorkflowExecutions action.

---

##### `NAME`<sup>Required</sup> <a name="NAME" id="@cdk_utils/iam.swf.SwfConditions.property.NAME"></a>

```typescript
public readonly NAME: string;
```

- *Type:* string

Condition key: swf:name (String).

---

##### `PollForActivityTaskConditionKeys`<sup>Required</sup> <a name="PollForActivityTaskConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.PollForActivityTaskConditionKeys"></a>

```typescript
public readonly PollForActivityTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PollForActivityTask action.

---

##### `PollForDecisionTaskConditionKeys`<sup>Required</sup> <a name="PollForDecisionTaskConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.PollForDecisionTaskConditionKeys"></a>

```typescript
public readonly PollForDecisionTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PollForDecisionTask action.

---

##### `RegisterActivityTypeConditionKeys`<sup>Required</sup> <a name="RegisterActivityTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.RegisterActivityTypeConditionKeys"></a>

```typescript
public readonly RegisterActivityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterActivityType action.

---

##### `RegisterDomainConditionKeys`<sup>Required</sup> <a name="RegisterDomainConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.RegisterDomainConditionKeys"></a>

```typescript
public readonly RegisterDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterDomain action.

---

##### `RegisterWorkflowTypeConditionKeys`<sup>Required</sup> <a name="RegisterWorkflowTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.RegisterWorkflowTypeConditionKeys"></a>

```typescript
public readonly RegisterWorkflowTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterWorkflowType action.

---

##### `RespondActivityTaskCompletedConditionKeys`<sup>Required</sup> <a name="RespondActivityTaskCompletedConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.RespondActivityTaskCompletedConditionKeys"></a>

```typescript
public readonly RespondActivityTaskCompletedConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RespondActivityTaskCompleted action.

---

##### `StartWorkflowExecutionConditionKeys`<sup>Required</sup> <a name="StartWorkflowExecutionConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.StartWorkflowExecutionConditionKeys"></a>

```typescript
public readonly StartWorkflowExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartWorkflowExecution action.

---

##### `TAG_FILTER_TAG`<sup>Required</sup> <a name="TAG_FILTER_TAG" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_FILTER_TAG"></a>

```typescript
public readonly TAG_FILTER_TAG: string;
```

- *Type:* string

Condition key: swf:tagFilter.tag (String).

---

##### `TAG_LIST_MEMBER_0`<sup>Required</sup> <a name="TAG_LIST_MEMBER_0" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_0"></a>

```typescript
public readonly TAG_LIST_MEMBER_0: string;
```

- *Type:* string

Condition key: swf:tagList.member.0 (String).

---

##### `TAG_LIST_MEMBER_1`<sup>Required</sup> <a name="TAG_LIST_MEMBER_1" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_1"></a>

```typescript
public readonly TAG_LIST_MEMBER_1: string;
```

- *Type:* string

Condition key: swf:tagList.member.1 (String).

---

##### `TAG_LIST_MEMBER_2`<sup>Required</sup> <a name="TAG_LIST_MEMBER_2" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_2"></a>

```typescript
public readonly TAG_LIST_MEMBER_2: string;
```

- *Type:* string

Condition key: swf:tagList.member.2 (String).

---

##### `TAG_LIST_MEMBER_3`<sup>Required</sup> <a name="TAG_LIST_MEMBER_3" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_3"></a>

```typescript
public readonly TAG_LIST_MEMBER_3: string;
```

- *Type:* string

Condition key: swf:tagList.member.3 (String).

---

##### `TAG_LIST_MEMBER_4`<sup>Required</sup> <a name="TAG_LIST_MEMBER_4" id="@cdk_utils/iam.swf.SwfConditions.property.TAG_LIST_MEMBER_4"></a>

```typescript
public readonly TAG_LIST_MEMBER_4: string;
```

- *Type:* string

Condition key: swf:tagList.member.4 (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TASK_LIST_NAME`<sup>Required</sup> <a name="TASK_LIST_NAME" id="@cdk_utils/iam.swf.SwfConditions.property.TASK_LIST_NAME"></a>

```typescript
public readonly TASK_LIST_NAME: string;
```

- *Type:* string

Condition key: swf:taskList.name (String).

---

##### `TYPE_FILTER_NAME`<sup>Required</sup> <a name="TYPE_FILTER_NAME" id="@cdk_utils/iam.swf.SwfConditions.property.TYPE_FILTER_NAME"></a>

```typescript
public readonly TYPE_FILTER_NAME: string;
```

- *Type:* string

Condition key: swf:typeFilter.name (String).

---

##### `TYPE_FILTER_VERSION`<sup>Required</sup> <a name="TYPE_FILTER_VERSION" id="@cdk_utils/iam.swf.SwfConditions.property.TYPE_FILTER_VERSION"></a>

```typescript
public readonly TYPE_FILTER_VERSION: string;
```

- *Type:* string

Condition key: swf:typeFilter.version (String).

---

##### `UndeprecateActivityTypeConditionKeys`<sup>Required</sup> <a name="UndeprecateActivityTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.UndeprecateActivityTypeConditionKeys"></a>

```typescript
public readonly UndeprecateActivityTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UndeprecateActivityType action.

---

##### `UndeprecateWorkflowTypeConditionKeys`<sup>Required</sup> <a name="UndeprecateWorkflowTypeConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.UndeprecateWorkflowTypeConditionKeys"></a>

```typescript
public readonly UndeprecateWorkflowTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UndeprecateWorkflowType action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.swf.SwfConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `VERSION`<sup>Required</sup> <a name="VERSION" id="@cdk_utils/iam.swf.SwfConditions.property.VERSION"></a>

```typescript
public readonly VERSION: string;
```

- *Type:* string

Condition key: swf:version (String).

---

##### `WORKFLOW_TYPE_NAME`<sup>Required</sup> <a name="WORKFLOW_TYPE_NAME" id="@cdk_utils/iam.swf.SwfConditions.property.WORKFLOW_TYPE_NAME"></a>

```typescript
public readonly WORKFLOW_TYPE_NAME: string;
```

- *Type:* string

Condition key: swf:workflowType.name (String).

---

##### `WORKFLOW_TYPE_VERSION`<sup>Required</sup> <a name="WORKFLOW_TYPE_VERSION" id="@cdk_utils/iam.swf.SwfConditions.property.WORKFLOW_TYPE_VERSION"></a>

```typescript
public readonly WORKFLOW_TYPE_VERSION: string;
```

- *Type:* string

Condition key: swf:workflowType.version (String).

---

### SwfOperations <a name="SwfOperations" id="@cdk_utils/iam.swf.SwfOperations"></a>

API operation to required IAM actions mapping for swf.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.swf.SwfOperations.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

new swf.SwfOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.CountClosedWorkflowExecutions">CountClosedWorkflowExecutions</a></code> | <code>string[]</code> | IAM actions required for the CountClosedWorkflowExecutions API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.CountOpenWorkflowExecutions">CountOpenWorkflowExecutions</a></code> | <code>string[]</code> | IAM actions required for the CountOpenWorkflowExecutions API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.CountPendingActivityTasks">CountPendingActivityTasks</a></code> | <code>string[]</code> | IAM actions required for the CountPendingActivityTasks API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.CountPendingDecisionTasks">CountPendingDecisionTasks</a></code> | <code>string[]</code> | IAM actions required for the CountPendingDecisionTasks API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DeleteActivityType">DeleteActivityType</a></code> | <code>string[]</code> | IAM actions required for the DeleteActivityType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DeleteWorkflowType">DeleteWorkflowType</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DeprecateActivityType">DeprecateActivityType</a></code> | <code>string[]</code> | IAM actions required for the DeprecateActivityType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DeprecateDomain">DeprecateDomain</a></code> | <code>string[]</code> | IAM actions required for the DeprecateDomain API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DeprecateWorkflowType">DeprecateWorkflowType</a></code> | <code>string[]</code> | IAM actions required for the DeprecateWorkflowType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DescribeActivityType">DescribeActivityType</a></code> | <code>string[]</code> | IAM actions required for the DescribeActivityType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DescribeDomain">DescribeDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomain API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DescribeWorkflowExecution">DescribeWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.DescribeWorkflowType">DescribeWorkflowType</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkflowType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListActivityTypes">ListActivityTypes</a></code> | <code>string[]</code> | IAM actions required for the ListActivityTypes API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListClosedWorkflowExecutions">ListClosedWorkflowExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListClosedWorkflowExecutions API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListOpenWorkflowExecutions">ListOpenWorkflowExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListOpenWorkflowExecutions API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.ListWorkflowTypes">ListWorkflowTypes</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowTypes API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.opGetWorkflowExecutionHistory">opGetWorkflowExecutionHistory</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowExecutionHistory API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.PollForActivityTask">PollForActivityTask</a></code> | <code>string[]</code> | IAM actions required for the PollForActivityTask API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.PollForDecisionTask">PollForDecisionTask</a></code> | <code>string[]</code> | IAM actions required for the PollForDecisionTask API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RecordActivityTaskHeartbeat">RecordActivityTaskHeartbeat</a></code> | <code>string[]</code> | IAM actions required for the RecordActivityTaskHeartbeat API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RegisterActivityType">RegisterActivityType</a></code> | <code>string[]</code> | IAM actions required for the RegisterActivityType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RegisterDomain">RegisterDomain</a></code> | <code>string[]</code> | IAM actions required for the RegisterDomain API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RegisterWorkflowType">RegisterWorkflowType</a></code> | <code>string[]</code> | IAM actions required for the RegisterWorkflowType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RequestCancelWorkflowExecution">RequestCancelWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the RequestCancelWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskCanceled">RespondActivityTaskCanceled</a></code> | <code>string[]</code> | IAM actions required for the RespondActivityTaskCanceled API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskCompleted">RespondActivityTaskCompleted</a></code> | <code>string[]</code> | IAM actions required for the RespondActivityTaskCompleted API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskFailed">RespondActivityTaskFailed</a></code> | <code>string[]</code> | IAM actions required for the RespondActivityTaskFailed API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.RespondDecisionTaskCompleted">RespondDecisionTaskCompleted</a></code> | <code>string[]</code> | IAM actions required for the RespondDecisionTaskCompleted API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.SignalWorkflowExecution">SignalWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the SignalWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.StartWorkflowExecution">StartWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the StartWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.TerminateWorkflowExecution">TerminateWorkflowExecution</a></code> | <code>string[]</code> | IAM actions required for the TerminateWorkflowExecution API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.UndeprecateActivityType">UndeprecateActivityType</a></code> | <code>string[]</code> | IAM actions required for the UndeprecateActivityType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.UndeprecateDomain">UndeprecateDomain</a></code> | <code>string[]</code> | IAM actions required for the UndeprecateDomain API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.UndeprecateWorkflowType">UndeprecateWorkflowType</a></code> | <code>string[]</code> | IAM actions required for the UndeprecateWorkflowType API call. |
| <code><a href="#@cdk_utils/iam.swf.SwfOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CountClosedWorkflowExecutions`<sup>Required</sup> <a name="CountClosedWorkflowExecutions" id="@cdk_utils/iam.swf.SwfOperations.property.CountClosedWorkflowExecutions"></a>

```typescript
public readonly CountClosedWorkflowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the CountClosedWorkflowExecutions API call.

---

##### `CountOpenWorkflowExecutions`<sup>Required</sup> <a name="CountOpenWorkflowExecutions" id="@cdk_utils/iam.swf.SwfOperations.property.CountOpenWorkflowExecutions"></a>

```typescript
public readonly CountOpenWorkflowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the CountOpenWorkflowExecutions API call.

---

##### `CountPendingActivityTasks`<sup>Required</sup> <a name="CountPendingActivityTasks" id="@cdk_utils/iam.swf.SwfOperations.property.CountPendingActivityTasks"></a>

```typescript
public readonly CountPendingActivityTasks: string[];
```

- *Type:* string[]

IAM actions required for the CountPendingActivityTasks API call.

---

##### `CountPendingDecisionTasks`<sup>Required</sup> <a name="CountPendingDecisionTasks" id="@cdk_utils/iam.swf.SwfOperations.property.CountPendingDecisionTasks"></a>

```typescript
public readonly CountPendingDecisionTasks: string[];
```

- *Type:* string[]

IAM actions required for the CountPendingDecisionTasks API call.

---

##### `DeleteActivityType`<sup>Required</sup> <a name="DeleteActivityType" id="@cdk_utils/iam.swf.SwfOperations.property.DeleteActivityType"></a>

```typescript
public readonly DeleteActivityType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteActivityType API call.

---

##### `DeleteWorkflowType`<sup>Required</sup> <a name="DeleteWorkflowType" id="@cdk_utils/iam.swf.SwfOperations.property.DeleteWorkflowType"></a>

```typescript
public readonly DeleteWorkflowType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowType API call.

---

##### `DeprecateActivityType`<sup>Required</sup> <a name="DeprecateActivityType" id="@cdk_utils/iam.swf.SwfOperations.property.DeprecateActivityType"></a>

```typescript
public readonly DeprecateActivityType: string[];
```

- *Type:* string[]

IAM actions required for the DeprecateActivityType API call.

---

##### `DeprecateDomain`<sup>Required</sup> <a name="DeprecateDomain" id="@cdk_utils/iam.swf.SwfOperations.property.DeprecateDomain"></a>

```typescript
public readonly DeprecateDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeprecateDomain API call.

---

##### `DeprecateWorkflowType`<sup>Required</sup> <a name="DeprecateWorkflowType" id="@cdk_utils/iam.swf.SwfOperations.property.DeprecateWorkflowType"></a>

```typescript
public readonly DeprecateWorkflowType: string[];
```

- *Type:* string[]

IAM actions required for the DeprecateWorkflowType API call.

---

##### `DescribeActivityType`<sup>Required</sup> <a name="DescribeActivityType" id="@cdk_utils/iam.swf.SwfOperations.property.DescribeActivityType"></a>

```typescript
public readonly DescribeActivityType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActivityType API call.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.swf.SwfOperations.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomain API call.

---

##### `DescribeWorkflowExecution`<sup>Required</sup> <a name="DescribeWorkflowExecution" id="@cdk_utils/iam.swf.SwfOperations.property.DescribeWorkflowExecution"></a>

```typescript
public readonly DescribeWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkflowExecution API call.

---

##### `DescribeWorkflowType`<sup>Required</sup> <a name="DescribeWorkflowType" id="@cdk_utils/iam.swf.SwfOperations.property.DescribeWorkflowType"></a>

```typescript
public readonly DescribeWorkflowType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkflowType API call.

---

##### `ListActivityTypes`<sup>Required</sup> <a name="ListActivityTypes" id="@cdk_utils/iam.swf.SwfOperations.property.ListActivityTypes"></a>

```typescript
public readonly ListActivityTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListActivityTypes API call.

---

##### `ListClosedWorkflowExecutions`<sup>Required</sup> <a name="ListClosedWorkflowExecutions" id="@cdk_utils/iam.swf.SwfOperations.property.ListClosedWorkflowExecutions"></a>

```typescript
public readonly ListClosedWorkflowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListClosedWorkflowExecutions API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.swf.SwfOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListOpenWorkflowExecutions`<sup>Required</sup> <a name="ListOpenWorkflowExecutions" id="@cdk_utils/iam.swf.SwfOperations.property.ListOpenWorkflowExecutions"></a>

```typescript
public readonly ListOpenWorkflowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListOpenWorkflowExecutions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.swf.SwfOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkflowTypes`<sup>Required</sup> <a name="ListWorkflowTypes" id="@cdk_utils/iam.swf.SwfOperations.property.ListWorkflowTypes"></a>

```typescript
public readonly ListWorkflowTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowTypes API call.

---

##### `opGetWorkflowExecutionHistory`<sup>Required</sup> <a name="opGetWorkflowExecutionHistory" id="@cdk_utils/iam.swf.SwfOperations.property.opGetWorkflowExecutionHistory"></a>

```typescript
public readonly opGetWorkflowExecutionHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowExecutionHistory API call.

---

##### `PollForActivityTask`<sup>Required</sup> <a name="PollForActivityTask" id="@cdk_utils/iam.swf.SwfOperations.property.PollForActivityTask"></a>

```typescript
public readonly PollForActivityTask: string[];
```

- *Type:* string[]

IAM actions required for the PollForActivityTask API call.

---

##### `PollForDecisionTask`<sup>Required</sup> <a name="PollForDecisionTask" id="@cdk_utils/iam.swf.SwfOperations.property.PollForDecisionTask"></a>

```typescript
public readonly PollForDecisionTask: string[];
```

- *Type:* string[]

IAM actions required for the PollForDecisionTask API call.

---

##### `RecordActivityTaskHeartbeat`<sup>Required</sup> <a name="RecordActivityTaskHeartbeat" id="@cdk_utils/iam.swf.SwfOperations.property.RecordActivityTaskHeartbeat"></a>

```typescript
public readonly RecordActivityTaskHeartbeat: string[];
```

- *Type:* string[]

IAM actions required for the RecordActivityTaskHeartbeat API call.

---

##### `RegisterActivityType`<sup>Required</sup> <a name="RegisterActivityType" id="@cdk_utils/iam.swf.SwfOperations.property.RegisterActivityType"></a>

```typescript
public readonly RegisterActivityType: string[];
```

- *Type:* string[]

IAM actions required for the RegisterActivityType API call.

---

##### `RegisterDomain`<sup>Required</sup> <a name="RegisterDomain" id="@cdk_utils/iam.swf.SwfOperations.property.RegisterDomain"></a>

```typescript
public readonly RegisterDomain: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDomain API call.

---

##### `RegisterWorkflowType`<sup>Required</sup> <a name="RegisterWorkflowType" id="@cdk_utils/iam.swf.SwfOperations.property.RegisterWorkflowType"></a>

```typescript
public readonly RegisterWorkflowType: string[];
```

- *Type:* string[]

IAM actions required for the RegisterWorkflowType API call.

---

##### `RequestCancelWorkflowExecution`<sup>Required</sup> <a name="RequestCancelWorkflowExecution" id="@cdk_utils/iam.swf.SwfOperations.property.RequestCancelWorkflowExecution"></a>

```typescript
public readonly RequestCancelWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the RequestCancelWorkflowExecution API call.

---

##### `RespondActivityTaskCanceled`<sup>Required</sup> <a name="RespondActivityTaskCanceled" id="@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskCanceled"></a>

```typescript
public readonly RespondActivityTaskCanceled: string[];
```

- *Type:* string[]

IAM actions required for the RespondActivityTaskCanceled API call.

---

##### `RespondActivityTaskCompleted`<sup>Required</sup> <a name="RespondActivityTaskCompleted" id="@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskCompleted"></a>

```typescript
public readonly RespondActivityTaskCompleted: string[];
```

- *Type:* string[]

IAM actions required for the RespondActivityTaskCompleted API call.

---

##### `RespondActivityTaskFailed`<sup>Required</sup> <a name="RespondActivityTaskFailed" id="@cdk_utils/iam.swf.SwfOperations.property.RespondActivityTaskFailed"></a>

```typescript
public readonly RespondActivityTaskFailed: string[];
```

- *Type:* string[]

IAM actions required for the RespondActivityTaskFailed API call.

---

##### `RespondDecisionTaskCompleted`<sup>Required</sup> <a name="RespondDecisionTaskCompleted" id="@cdk_utils/iam.swf.SwfOperations.property.RespondDecisionTaskCompleted"></a>

```typescript
public readonly RespondDecisionTaskCompleted: string[];
```

- *Type:* string[]

IAM actions required for the RespondDecisionTaskCompleted API call.

---

##### `SignalWorkflowExecution`<sup>Required</sup> <a name="SignalWorkflowExecution" id="@cdk_utils/iam.swf.SwfOperations.property.SignalWorkflowExecution"></a>

```typescript
public readonly SignalWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the SignalWorkflowExecution API call.

---

##### `StartWorkflowExecution`<sup>Required</sup> <a name="StartWorkflowExecution" id="@cdk_utils/iam.swf.SwfOperations.property.StartWorkflowExecution"></a>

```typescript
public readonly StartWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkflowExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.swf.SwfOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateWorkflowExecution`<sup>Required</sup> <a name="TerminateWorkflowExecution" id="@cdk_utils/iam.swf.SwfOperations.property.TerminateWorkflowExecution"></a>

```typescript
public readonly TerminateWorkflowExecution: string[];
```

- *Type:* string[]

IAM actions required for the TerminateWorkflowExecution API call.

---

##### `UndeprecateActivityType`<sup>Required</sup> <a name="UndeprecateActivityType" id="@cdk_utils/iam.swf.SwfOperations.property.UndeprecateActivityType"></a>

```typescript
public readonly UndeprecateActivityType: string[];
```

- *Type:* string[]

IAM actions required for the UndeprecateActivityType API call.

---

##### `UndeprecateDomain`<sup>Required</sup> <a name="UndeprecateDomain" id="@cdk_utils/iam.swf.SwfOperations.property.UndeprecateDomain"></a>

```typescript
public readonly UndeprecateDomain: string[];
```

- *Type:* string[]

IAM actions required for the UndeprecateDomain API call.

---

##### `UndeprecateWorkflowType`<sup>Required</sup> <a name="UndeprecateWorkflowType" id="@cdk_utils/iam.swf.SwfOperations.property.UndeprecateWorkflowType"></a>

```typescript
public readonly UndeprecateWorkflowType: string[];
```

- *Type:* string[]

IAM actions required for the UndeprecateWorkflowType API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.swf.SwfOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SwfResources <a name="SwfResources" id="@cdk_utils/iam.swf.SwfResources"></a>

ARN builders, validators, and parsers for swf resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.swf.SwfResources.Initializer"></a>

```typescript
import { swf } from '@cdk_utils/iam'

new swf.SwfResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.swf.SwfResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.swf.SwfResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.swf.SwfResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.swf.SwfResources.domain"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfResources.domain(props: SwfDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.swf.SwfResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.swf.SwfDomainArnProps">SwfDomainArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.swf.SwfResources.isValidDomainArn"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.swf.SwfResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.swf.SwfResources.parseDomainArn"></a>

```typescript
import { swf } from '@cdk_utils/iam'

swf.SwfResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.swf.SwfResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---




