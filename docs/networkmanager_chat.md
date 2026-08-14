# `networkmanager_chat` Submodule <a name="`networkmanager_chat` Submodule" id="@cdk_utils/iam.networkmanager_chat"></a>



## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerChatActions <a name="NetworkmanagerChatActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions"></a>

IAM action constants for the networkmanager-chat service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.Initializer"></a>

```typescript
import { networkmanager_chat } from '@cdk_utils/iam'

new networkmanager_chat.NetworkmanagerChatActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.CancelMessageResponse">CancelMessageResponse</a></code> | <code>string</code> | [Write] networkmanager-chat:CancelMessageResponse. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.CreateConversation">CreateConversation</a></code> | <code>string</code> | [Write] networkmanager-chat:CreateConversation. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.DeleteConversation">DeleteConversation</a></code> | <code>string</code> | [Write] networkmanager-chat:DeleteConversation. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.ListConversationMessages">ListConversationMessages</a></code> | <code>string</code> | [List] networkmanager-chat:ListConversationMessages. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [List] networkmanager-chat:ListConversations. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.NotifyConversationIsActive">NotifyConversationIsActive</a></code> | <code>string</code> | [Write] networkmanager-chat:NotifyConversationIsActive. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.SendConversationMessage">SendConversationMessage</a></code> | <code>string</code> | [Write] networkmanager-chat:SendConversationMessage. |
| <code><a href="#@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelMessageResponse`<sup>Required</sup> <a name="CancelMessageResponse" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.CancelMessageResponse"></a>

```typescript
public readonly CancelMessageResponse: string;
```

- *Type:* string

[Write] networkmanager-chat:CancelMessageResponse.

---

##### `CreateConversation`<sup>Required</sup> <a name="CreateConversation" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.CreateConversation"></a>

```typescript
public readonly CreateConversation: string;
```

- *Type:* string

[Write] networkmanager-chat:CreateConversation.

---

##### `DeleteConversation`<sup>Required</sup> <a name="DeleteConversation" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.DeleteConversation"></a>

```typescript
public readonly DeleteConversation: string;
```

- *Type:* string

[Write] networkmanager-chat:DeleteConversation.

---

##### `ListConversationMessages`<sup>Required</sup> <a name="ListConversationMessages" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.ListConversationMessages"></a>

```typescript
public readonly ListConversationMessages: string;
```

- *Type:* string

[List] networkmanager-chat:ListConversationMessages.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[List] networkmanager-chat:ListConversations.

---

##### `NotifyConversationIsActive`<sup>Required</sup> <a name="NotifyConversationIsActive" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.NotifyConversationIsActive"></a>

```typescript
public readonly NotifyConversationIsActive: string;
```

- *Type:* string

[Write] networkmanager-chat:NotifyConversationIsActive.

---

##### `SendConversationMessage`<sup>Required</sup> <a name="SendConversationMessage" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.SendConversationMessage"></a>

```typescript
public readonly SendConversationMessage: string;
```

- *Type:* string

[Write] networkmanager-chat:SendConversationMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.networkmanager_chat.NetworkmanagerChatActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---


