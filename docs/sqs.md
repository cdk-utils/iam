# `sqs` Submodule <a name="`sqs` Submodule" id="@cdk_utils/iam.sqs"></a>


## Structs <a name="Structs" id="Structs"></a>

### SQSQueueArnComponents <a name="SQSQueueArnComponents" id="@cdk_utils/iam.sqs.SQSQueueArnComponents"></a>

Parsed components of a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqs.SQSQueueArnComponents.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

const sQSQueueArnComponents: sqs.SQSQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnComponents.property.queueName">queueName</a></code> | <code>string</code> | The QueueName component. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sqs.SQSQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sqs.SQSQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdk_utils/iam.sqs.SQSQueueArnComponents.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The QueueName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sqs.SQSQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SQSQueueArnProps <a name="SQSQueueArnProps" id="@cdk_utils/iam.sqs.SQSQueueArnProps"></a>

Properties for building a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sqs.SQSQueueArnProps.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

const sQSQueueArnProps: sqs.SQSQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnProps.property.queueName">queueName</a></code> | <code>string</code> | The QueueName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sqs.SQSQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdk_utils/iam.sqs.SQSQueueArnProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The QueueName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sqs.SQSQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sqs.SQSQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sqs.SQSQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SQSActions <a name="SQSActions" id="@cdk_utils/iam.sqs.SQSActions"></a>

IAM action constants for the sqs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqs.SQSActions.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

new sqs.SQSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.actionGetQueueAttributes">actionGetQueueAttributes</a></code> | <code>string</code> | [Read] sqs:GetQueueAttributes. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.actionGetQueueUrl">actionGetQueueUrl</a></code> | <code>string</code> | [Read] sqs:GetQueueUrl. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.actionSetQueueAttributes">actionSetQueueAttributes</a></code> | <code>string</code> | [PermissionManagement] sqs:SetQueueAttributes. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AddPermission">AddPermission</a></code> | <code>string</code> | [PermissionManagement] sqs:AddPermission. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.CancelMessageMoveTask">CancelMessageMoveTask</a></code> | <code>string</code> | [Write] sqs:CancelMessageMoveTask. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ChangeMessageVisibility">ChangeMessageVisibility</a></code> | <code>string</code> | [Write] sqs:ChangeMessageVisibility. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.CreateQueue">CreateQueue</a></code> | <code>string</code> | [Write] sqs:CreateQueue. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.DeleteMessage">DeleteMessage</a></code> | <code>string</code> | [Write] sqs:DeleteMessage. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.DeleteQueue">DeleteQueue</a></code> | <code>string</code> | [Write] sqs:DeleteQueue. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ListDeadLetterSourceQueues">ListDeadLetterSourceQueues</a></code> | <code>string</code> | [Read] sqs:ListDeadLetterSourceQueues. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ListMessageMoveTasks">ListMessageMoveTasks</a></code> | <code>string</code> | [Read] sqs:ListMessageMoveTasks. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ListQueues">ListQueues</a></code> | <code>string</code> | [Read] sqs:ListQueues. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ListQueueTags">ListQueueTags</a></code> | <code>string</code> | [Read] sqs:ListQueueTags. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.PurgeQueue">PurgeQueue</a></code> | <code>string</code> | [Write] sqs:PurgeQueue. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.ReceiveMessage">ReceiveMessage</a></code> | <code>string</code> | [Read] sqs:ReceiveMessage. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.RemovePermission">RemovePermission</a></code> | <code>string</code> | [PermissionManagement] sqs:RemovePermission. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] sqs:SendMessage. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.StartMessageMoveTask">StartMessageMoveTask</a></code> | <code>string</code> | [Write] sqs:StartMessageMoveTask. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.TagQueue">TagQueue</a></code> | <code>string</code> | [Tagging] sqs:TagQueue. |
| <code><a href="#@cdk_utils/iam.sqs.SQSActions.property.UntagQueue">UntagQueue</a></code> | <code>string</code> | [Tagging] sqs:UntagQueue. |

---

##### `actionGetQueueAttributes`<sup>Required</sup> <a name="actionGetQueueAttributes" id="@cdk_utils/iam.sqs.SQSActions.property.actionGetQueueAttributes"></a>

```typescript
public readonly actionGetQueueAttributes: string;
```

- *Type:* string

[Read] sqs:GetQueueAttributes.

---

##### `actionGetQueueUrl`<sup>Required</sup> <a name="actionGetQueueUrl" id="@cdk_utils/iam.sqs.SQSActions.property.actionGetQueueUrl"></a>

```typescript
public readonly actionGetQueueUrl: string;
```

- *Type:* string

[Read] sqs:GetQueueUrl.

---

##### `actionSetQueueAttributes`<sup>Required</sup> <a name="actionSetQueueAttributes" id="@cdk_utils/iam.sqs.SQSActions.property.actionSetQueueAttributes"></a>

```typescript
public readonly actionSetQueueAttributes: string;
```

- *Type:* string

[PermissionManagement] sqs:SetQueueAttributes.

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.sqs.SQSActions.property.AddPermission"></a>

```typescript
public readonly AddPermission: string;
```

- *Type:* string

[PermissionManagement] sqs:AddPermission.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sqs.SQSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sqs.SQSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sqs.SQSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sqs.SQSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sqs.SQSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelMessageMoveTask`<sup>Required</sup> <a name="CancelMessageMoveTask" id="@cdk_utils/iam.sqs.SQSActions.property.CancelMessageMoveTask"></a>

```typescript
public readonly CancelMessageMoveTask: string;
```

- *Type:* string

[Write] sqs:CancelMessageMoveTask.

---

##### `ChangeMessageVisibility`<sup>Required</sup> <a name="ChangeMessageVisibility" id="@cdk_utils/iam.sqs.SQSActions.property.ChangeMessageVisibility"></a>

```typescript
public readonly ChangeMessageVisibility: string;
```

- *Type:* string

[Write] sqs:ChangeMessageVisibility.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.sqs.SQSActions.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string;
```

- *Type:* string

[Write] sqs:CreateQueue.

---

##### `DeleteMessage`<sup>Required</sup> <a name="DeleteMessage" id="@cdk_utils/iam.sqs.SQSActions.property.DeleteMessage"></a>

```typescript
public readonly DeleteMessage: string;
```

- *Type:* string

[Write] sqs:DeleteMessage.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.sqs.SQSActions.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string;
```

- *Type:* string

[Write] sqs:DeleteQueue.

---

##### `ListDeadLetterSourceQueues`<sup>Required</sup> <a name="ListDeadLetterSourceQueues" id="@cdk_utils/iam.sqs.SQSActions.property.ListDeadLetterSourceQueues"></a>

```typescript
public readonly ListDeadLetterSourceQueues: string;
```

- *Type:* string

[Read] sqs:ListDeadLetterSourceQueues.

---

##### `ListMessageMoveTasks`<sup>Required</sup> <a name="ListMessageMoveTasks" id="@cdk_utils/iam.sqs.SQSActions.property.ListMessageMoveTasks"></a>

```typescript
public readonly ListMessageMoveTasks: string;
```

- *Type:* string

[Read] sqs:ListMessageMoveTasks.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.sqs.SQSActions.property.ListQueues"></a>

```typescript
public readonly ListQueues: string;
```

- *Type:* string

[Read] sqs:ListQueues.

---

##### `ListQueueTags`<sup>Required</sup> <a name="ListQueueTags" id="@cdk_utils/iam.sqs.SQSActions.property.ListQueueTags"></a>

```typescript
public readonly ListQueueTags: string;
```

- *Type:* string

[Read] sqs:ListQueueTags.

---

##### `PurgeQueue`<sup>Required</sup> <a name="PurgeQueue" id="@cdk_utils/iam.sqs.SQSActions.property.PurgeQueue"></a>

```typescript
public readonly PurgeQueue: string;
```

- *Type:* string

[Write] sqs:PurgeQueue.

---

##### `ReceiveMessage`<sup>Required</sup> <a name="ReceiveMessage" id="@cdk_utils/iam.sqs.SQSActions.property.ReceiveMessage"></a>

```typescript
public readonly ReceiveMessage: string;
```

- *Type:* string

[Read] sqs:ReceiveMessage.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.sqs.SQSActions.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string;
```

- *Type:* string

[PermissionManagement] sqs:RemovePermission.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.sqs.SQSActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] sqs:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sqs.SQSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMessageMoveTask`<sup>Required</sup> <a name="StartMessageMoveTask" id="@cdk_utils/iam.sqs.SQSActions.property.StartMessageMoveTask"></a>

```typescript
public readonly StartMessageMoveTask: string;
```

- *Type:* string

[Write] sqs:StartMessageMoveTask.

---

##### `TagQueue`<sup>Required</sup> <a name="TagQueue" id="@cdk_utils/iam.sqs.SQSActions.property.TagQueue"></a>

```typescript
public readonly TagQueue: string;
```

- *Type:* string

[Tagging] sqs:TagQueue.

---

##### `UntagQueue`<sup>Required</sup> <a name="UntagQueue" id="@cdk_utils/iam.sqs.SQSActions.property.UntagQueue"></a>

```typescript
public readonly UntagQueue: string;
```

- *Type:* string

[Tagging] sqs:UntagQueue.

---

### SQSConditions <a name="SQSConditions" id="@cdk_utils/iam.sqs.SQSConditions"></a>

Condition key constants and builders for sqs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqs.SQSConditions.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

new sqs.SQSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sqs.SQSConditions.requestTag"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sqs.SQSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sqs.SQSConditions.resourceTag"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sqs.SQSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sqs.SQSConditions.tagKeys"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sqs.SQSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.CreateQueueConditionKeys">CreateQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueue action. |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.TagQueueConditionKeys">TagQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagQueue action. |
| <code><a href="#@cdk_utils/iam.sqs.SQSConditions.property.UntagQueueConditionKeys">UntagQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagQueue action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sqs.SQSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sqs.SQSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sqs.SQSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateQueueConditionKeys`<sup>Required</sup> <a name="CreateQueueConditionKeys" id="@cdk_utils/iam.sqs.SQSConditions.property.CreateQueueConditionKeys"></a>

```typescript
public readonly CreateQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueue action.

---

##### `TagQueueConditionKeys`<sup>Required</sup> <a name="TagQueueConditionKeys" id="@cdk_utils/iam.sqs.SQSConditions.property.TagQueueConditionKeys"></a>

```typescript
public readonly TagQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagQueue action.

---

##### `UntagQueueConditionKeys`<sup>Required</sup> <a name="UntagQueueConditionKeys" id="@cdk_utils/iam.sqs.SQSConditions.property.UntagQueueConditionKeys"></a>

```typescript
public readonly UntagQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagQueue action.

---

### SQSOperations <a name="SQSOperations" id="@cdk_utils/iam.sqs.SQSOperations"></a>

API operation to required IAM actions mapping for sqs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqs.SQSOperations.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

new sqs.SQSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.AddPermission">AddPermission</a></code> | <code>string[]</code> | IAM actions required for the AddPermission API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.CancelMessageMoveTask">CancelMessageMoveTask</a></code> | <code>string[]</code> | IAM actions required for the CancelMessageMoveTask API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ChangeMessageVisibility">ChangeMessageVisibility</a></code> | <code>string[]</code> | IAM actions required for the ChangeMessageVisibility API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ChangeMessageVisibilityBatch">ChangeMessageVisibilityBatch</a></code> | <code>string[]</code> | IAM actions required for the ChangeMessageVisibilityBatch API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.CreateQueue">CreateQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateQueue API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.DeleteMessage">DeleteMessage</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessage API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.DeleteMessageBatch">DeleteMessageBatch</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessageBatch API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.DeleteQueue">DeleteQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueue API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ListDeadLetterSourceQueues">ListDeadLetterSourceQueues</a></code> | <code>string[]</code> | IAM actions required for the ListDeadLetterSourceQueues API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ListMessageMoveTasks">ListMessageMoveTasks</a></code> | <code>string[]</code> | IAM actions required for the ListMessageMoveTasks API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ListQueues">ListQueues</a></code> | <code>string[]</code> | IAM actions required for the ListQueues API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ListQueueTags">ListQueueTags</a></code> | <code>string[]</code> | IAM actions required for the ListQueueTags API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.opGetQueueAttributes">opGetQueueAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetQueueAttributes API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.opGetQueueUrl">opGetQueueUrl</a></code> | <code>string[]</code> | IAM actions required for the GetQueueUrl API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.opSetQueueAttributes">opSetQueueAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetQueueAttributes API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.PurgeQueue">PurgeQueue</a></code> | <code>string[]</code> | IAM actions required for the PurgeQueue API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.ReceiveMessage">ReceiveMessage</a></code> | <code>string[]</code> | IAM actions required for the ReceiveMessage API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.RemovePermission">RemovePermission</a></code> | <code>string[]</code> | IAM actions required for the RemovePermission API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.SendMessage">SendMessage</a></code> | <code>string[]</code> | IAM actions required for the SendMessage API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.SendMessageBatch">SendMessageBatch</a></code> | <code>string[]</code> | IAM actions required for the SendMessageBatch API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.StartMessageMoveTask">StartMessageMoveTask</a></code> | <code>string[]</code> | IAM actions required for the StartMessageMoveTask API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.TagQueue">TagQueue</a></code> | <code>string[]</code> | IAM actions required for the TagQueue API call. |
| <code><a href="#@cdk_utils/iam.sqs.SQSOperations.property.UntagQueue">UntagQueue</a></code> | <code>string[]</code> | IAM actions required for the UntagQueue API call. |

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.sqs.SQSOperations.property.AddPermission"></a>

```typescript
public readonly AddPermission: string[];
```

- *Type:* string[]

IAM actions required for the AddPermission API call.

---

##### `CancelMessageMoveTask`<sup>Required</sup> <a name="CancelMessageMoveTask" id="@cdk_utils/iam.sqs.SQSOperations.property.CancelMessageMoveTask"></a>

```typescript
public readonly CancelMessageMoveTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelMessageMoveTask API call.

---

##### `ChangeMessageVisibility`<sup>Required</sup> <a name="ChangeMessageVisibility" id="@cdk_utils/iam.sqs.SQSOperations.property.ChangeMessageVisibility"></a>

```typescript
public readonly ChangeMessageVisibility: string[];
```

- *Type:* string[]

IAM actions required for the ChangeMessageVisibility API call.

---

##### `ChangeMessageVisibilityBatch`<sup>Required</sup> <a name="ChangeMessageVisibilityBatch" id="@cdk_utils/iam.sqs.SQSOperations.property.ChangeMessageVisibilityBatch"></a>

```typescript
public readonly ChangeMessageVisibilityBatch: string[];
```

- *Type:* string[]

IAM actions required for the ChangeMessageVisibilityBatch API call.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.sqs.SQSOperations.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueue API call.

---

##### `DeleteMessage`<sup>Required</sup> <a name="DeleteMessage" id="@cdk_utils/iam.sqs.SQSOperations.property.DeleteMessage"></a>

```typescript
public readonly DeleteMessage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessage API call.

---

##### `DeleteMessageBatch`<sup>Required</sup> <a name="DeleteMessageBatch" id="@cdk_utils/iam.sqs.SQSOperations.property.DeleteMessageBatch"></a>

```typescript
public readonly DeleteMessageBatch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessageBatch API call.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.sqs.SQSOperations.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueue API call.

---

##### `ListDeadLetterSourceQueues`<sup>Required</sup> <a name="ListDeadLetterSourceQueues" id="@cdk_utils/iam.sqs.SQSOperations.property.ListDeadLetterSourceQueues"></a>

```typescript
public readonly ListDeadLetterSourceQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListDeadLetterSourceQueues API call.

---

##### `ListMessageMoveTasks`<sup>Required</sup> <a name="ListMessageMoveTasks" id="@cdk_utils/iam.sqs.SQSOperations.property.ListMessageMoveTasks"></a>

```typescript
public readonly ListMessageMoveTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListMessageMoveTasks API call.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.sqs.SQSOperations.property.ListQueues"></a>

```typescript
public readonly ListQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListQueues API call.

---

##### `ListQueueTags`<sup>Required</sup> <a name="ListQueueTags" id="@cdk_utils/iam.sqs.SQSOperations.property.ListQueueTags"></a>

```typescript
public readonly ListQueueTags: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueTags API call.

---

##### `opGetQueueAttributes`<sup>Required</sup> <a name="opGetQueueAttributes" id="@cdk_utils/iam.sqs.SQSOperations.property.opGetQueueAttributes"></a>

```typescript
public readonly opGetQueueAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetQueueAttributes API call.

---

##### `opGetQueueUrl`<sup>Required</sup> <a name="opGetQueueUrl" id="@cdk_utils/iam.sqs.SQSOperations.property.opGetQueueUrl"></a>

```typescript
public readonly opGetQueueUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetQueueUrl API call.

---

##### `opSetQueueAttributes`<sup>Required</sup> <a name="opSetQueueAttributes" id="@cdk_utils/iam.sqs.SQSOperations.property.opSetQueueAttributes"></a>

```typescript
public readonly opSetQueueAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetQueueAttributes API call.

---

##### `PurgeQueue`<sup>Required</sup> <a name="PurgeQueue" id="@cdk_utils/iam.sqs.SQSOperations.property.PurgeQueue"></a>

```typescript
public readonly PurgeQueue: string[];
```

- *Type:* string[]

IAM actions required for the PurgeQueue API call.

---

##### `ReceiveMessage`<sup>Required</sup> <a name="ReceiveMessage" id="@cdk_utils/iam.sqs.SQSOperations.property.ReceiveMessage"></a>

```typescript
public readonly ReceiveMessage: string[];
```

- *Type:* string[]

IAM actions required for the ReceiveMessage API call.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.sqs.SQSOperations.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemovePermission API call.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.sqs.SQSOperations.property.SendMessage"></a>

```typescript
public readonly SendMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendMessage API call.

---

##### `SendMessageBatch`<sup>Required</sup> <a name="SendMessageBatch" id="@cdk_utils/iam.sqs.SQSOperations.property.SendMessageBatch"></a>

```typescript
public readonly SendMessageBatch: string[];
```

- *Type:* string[]

IAM actions required for the SendMessageBatch API call.

---

##### `StartMessageMoveTask`<sup>Required</sup> <a name="StartMessageMoveTask" id="@cdk_utils/iam.sqs.SQSOperations.property.StartMessageMoveTask"></a>

```typescript
public readonly StartMessageMoveTask: string[];
```

- *Type:* string[]

IAM actions required for the StartMessageMoveTask API call.

---

##### `TagQueue`<sup>Required</sup> <a name="TagQueue" id="@cdk_utils/iam.sqs.SQSOperations.property.TagQueue"></a>

```typescript
public readonly TagQueue: string[];
```

- *Type:* string[]

IAM actions required for the TagQueue API call.

---

##### `UntagQueue`<sup>Required</sup> <a name="UntagQueue" id="@cdk_utils/iam.sqs.SQSOperations.property.UntagQueue"></a>

```typescript
public readonly UntagQueue: string[];
```

- *Type:* string[]

IAM actions required for the UntagQueue API call.

---

### SQSResources <a name="SQSResources" id="@cdk_utils/iam.sqs.SQSResources"></a>

ARN builders, validators, and parsers for sqs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sqs.SQSResources.Initializer"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

new sqs.SQSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sqs.SQSResources.isValidQueueArn">isValidQueueArn</a></code> | Validates whether a string is a valid ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.sqs.SQSResources.parseQueueArn">parseQueueArn</a></code> | Parses a queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.sqs.SQSResources.queue">queue</a></code> | Builds an ARN for the queue resource. |

---

##### `isValidQueueArn` <a name="isValidQueueArn" id="@cdk_utils/iam.sqs.SQSResources.isValidQueueArn"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSResources.isValidQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqs.SQSResources.isValidQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueueArn` <a name="parseQueueArn" id="@cdk_utils/iam.sqs.SQSResources.parseQueueArn"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSResources.parseQueueArn(arn: string)
```

Parses a queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sqs.SQSResources.parseQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `queue` <a name="queue" id="@cdk_utils/iam.sqs.SQSResources.queue"></a>

```typescript
import { sqs } from '@cdk_utils/iam'

sqs.SQSResources.queue(props: SQSQueueArnProps)
```

Builds an ARN for the queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sqs.SQSResources.queue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sqs.SQSQueueArnProps">SQSQueueArnProps</a>

---




