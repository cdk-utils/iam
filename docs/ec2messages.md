# `ec2messages` Submodule <a name="`ec2messages` Submodule" id="@cdk_utils/iam.ec2messages"></a>



## Classes <a name="Classes" id="Classes"></a>

### Ec2messagesActions <a name="Ec2messagesActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions"></a>

IAM action constants for the ec2messages service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.Initializer"></a>

```typescript
import { ec2messages } from '@cdk_utils/iam'

new ec2messages.Ec2messagesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AcknowledgeMessage">AcknowledgeMessage</a></code> | <code>string</code> | [Write] ec2messages:AcknowledgeMessage. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.actionGetEndpoint">actionGetEndpoint</a></code> | <code>string</code> | [Read] ec2messages:GetEndpoint. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.actionGetMessages">actionGetMessages</a></code> | <code>string</code> | [Read] ec2messages:GetMessages. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.DeleteMessage">DeleteMessage</a></code> | <code>string</code> | [Write] ec2messages:DeleteMessage. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.FailMessage">FailMessage</a></code> | <code>string</code> | [Write] ec2messages:FailMessage. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.SendReply">SendReply</a></code> | <code>string</code> | [Write] ec2messages:SendReply. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AcknowledgeMessage`<sup>Required</sup> <a name="AcknowledgeMessage" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AcknowledgeMessage"></a>

```typescript
public readonly AcknowledgeMessage: string;
```

- *Type:* string

[Write] ec2messages:AcknowledgeMessage.

---

##### `actionGetEndpoint`<sup>Required</sup> <a name="actionGetEndpoint" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.actionGetEndpoint"></a>

```typescript
public readonly actionGetEndpoint: string;
```

- *Type:* string

[Read] ec2messages:GetEndpoint.

---

##### `actionGetMessages`<sup>Required</sup> <a name="actionGetMessages" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.actionGetMessages"></a>

```typescript
public readonly actionGetMessages: string;
```

- *Type:* string

[Read] ec2messages:GetMessages.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteMessage`<sup>Required</sup> <a name="DeleteMessage" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.DeleteMessage"></a>

```typescript
public readonly DeleteMessage: string;
```

- *Type:* string

[Write] ec2messages:DeleteMessage.

---

##### `FailMessage`<sup>Required</sup> <a name="FailMessage" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.FailMessage"></a>

```typescript
public readonly FailMessage: string;
```

- *Type:* string

[Write] ec2messages:FailMessage.

---

##### `SendReply`<sup>Required</sup> <a name="SendReply" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.SendReply"></a>

```typescript
public readonly SendReply: string;
```

- *Type:* string

[Write] ec2messages:SendReply.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ec2messages.Ec2messagesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### Ec2messagesConditions <a name="Ec2messagesConditions" id="@cdk_utils/iam.ec2messages.Ec2messagesConditions"></a>

Condition key constants and builders for ec2messages.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2messages.Ec2messagesConditions.Initializer"></a>

```typescript
import { ec2messages } from '@cdk_utils/iam'

new ec2messages.Ec2messagesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.actionGetMessagesConditionKeys">actionGetMessagesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMessages action. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.SendReplyConditionKeys">SendReplyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendReply action. |
| <code><a href="#@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.SOURCE_INSTANCE_ARN">SOURCE_INSTANCE_ARN</a></code> | <code>string</code> | Condition key: ec2:SourceInstanceARN (ARN). |

---

##### `actionGetMessagesConditionKeys`<sup>Required</sup> <a name="actionGetMessagesConditionKeys" id="@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.actionGetMessagesConditionKeys"></a>

```typescript
public readonly actionGetMessagesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMessages action.

---

##### `SendReplyConditionKeys`<sup>Required</sup> <a name="SendReplyConditionKeys" id="@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.SendReplyConditionKeys"></a>

```typescript
public readonly SendReplyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendReply action.

---

##### `SOURCE_INSTANCE_ARN`<sup>Required</sup> <a name="SOURCE_INSTANCE_ARN" id="@cdk_utils/iam.ec2messages.Ec2messagesConditions.property.SOURCE_INSTANCE_ARN"></a>

```typescript
public readonly SOURCE_INSTANCE_ARN: string;
```

- *Type:* string

Condition key: ec2:SourceInstanceARN (ARN).

---


