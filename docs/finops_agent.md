# `finops_agent` Submodule <a name="`finops_agent` Submodule" id="@cdk_utils/iam.finops_agent"></a>



## Classes <a name="Classes" id="Classes"></a>

### FinopsAgentActions <a name="FinopsAgentActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions"></a>

IAM action constants for the finops-agent service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.Initializer"></a>

```typescript
import { finops_agent } from '@cdk_utils/iam'

new finops_agent.FinopsAgentActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AcceptAgentRequest">AcceptAgentRequest</a></code> | <code>string</code> | [Write] finops-agent:AcceptAgentRequest. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAgentRequest">actionGetAgentRequest</a></code> | <code>string</code> | [Read] finops-agent:GetAgentRequest. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAgentSpace">actionGetAgentSpace</a></code> | <code>string</code> | [Read] finops-agent:GetAgentSpace. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetArtifactContent">actionGetArtifactContent</a></code> | <code>string</code> | [Read] finops-agent:GetArtifactContent. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetArtifactMetadata">actionGetArtifactMetadata</a></code> | <code>string</code> | [Read] finops-agent:GetArtifactMetadata. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAutomation">actionGetAutomation</a></code> | <code>string</code> | [Read] finops-agent:GetAutomation. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] finops-agent:GetConnection. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetDocumentContent">actionGetDocumentContent</a></code> | <code>string</code> | [Read] finops-agent:GetDocumentContent. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetDocumentMetadata">actionGetDocumentMetadata</a></code> | <code>string</code> | [Read] finops-agent:GetDocumentMetadata. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] finops-agent:GetIntegration. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetTask">actionGetTask</a></code> | <code>string</code> | [Read] finops-agent:GetTask. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetTurn">actionGetTurn</a></code> | <code>string</code> | [Read] finops-agent:GetTurn. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CancelTask">CancelTask</a></code> | <code>string</code> | [Write] finops-agent:CancelTask. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CancelTurn">CancelTurn</a></code> | <code>string</code> | [Write] finops-agent:CancelTurn. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateAgentSpace">CreateAgentSpace</a></code> | <code>string</code> | [Write] finops-agent:CreateAgentSpace. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateAutomation">CreateAutomation</a></code> | <code>string</code> | [Write] finops-agent:CreateAutomation. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] finops-agent:CreateConnection. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateConversation">CreateConversation</a></code> | <code>string</code> | [Write] finops-agent:CreateConversation. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateDocument">CreateDocument</a></code> | <code>string</code> | [Write] finops-agent:CreateDocument. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] finops-agent:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateOneTimeLoginSession">CreateOneTimeLoginSession</a></code> | <code>string</code> | [Write] finops-agent:CreateOneTimeLoginSession. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateTask">CreateTask</a></code> | <code>string</code> | [Write] finops-agent:CreateTask. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateTurn">CreateTurn</a></code> | <code>string</code> | [Write] finops-agent:CreateTurn. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteAgentSpace">DeleteAgentSpace</a></code> | <code>string</code> | [Write] finops-agent:DeleteAgentSpace. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteArtifact">DeleteArtifact</a></code> | <code>string</code> | [Write] finops-agent:DeleteArtifact. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteAutomation">DeleteAutomation</a></code> | <code>string</code> | [Write] finops-agent:DeleteAutomation. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] finops-agent:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteDocument">DeleteDocument</a></code> | <code>string</code> | [Write] finops-agent:DeleteDocument. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] finops-agent:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListAgentSpaces">ListAgentSpaces</a></code> | <code>string</code> | [List] finops-agent:ListAgentSpaces. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListArtifacts">ListArtifacts</a></code> | <code>string</code> | [List] finops-agent:ListArtifacts. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListAutomations">ListAutomations</a></code> | <code>string</code> | [List] finops-agent:ListAutomations. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] finops-agent:ListConnections. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListConversations">ListConversations</a></code> | <code>string</code> | [List] finops-agent:ListConversations. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListDocuments">ListDocuments</a></code> | <code>string</code> | [List] finops-agent:ListDocuments. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] finops-agent:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListRecords">ListRecords</a></code> | <code>string</code> | [List] finops-agent:ListRecords. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] finops-agent:ListTasks. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListTurns">ListTurns</a></code> | <code>string</code> | [List] finops-agent:ListTurns. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.RejectAgentRequest">RejectAgentRequest</a></code> | <code>string</code> | [Write] finops-agent:RejectAgentRequest. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.RestoreDocument">RestoreDocument</a></code> | <code>string</code> | [Write] finops-agent:RestoreDocument. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.SendFeedback">SendFeedback</a></code> | <code>string</code> | [Write] finops-agent:SendFeedback. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateAgentSpace">UpdateAgentSpace</a></code> | <code>string</code> | [Write] finops-agent:UpdateAgentSpace. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateAutomation">UpdateAutomation</a></code> | <code>string</code> | [Write] finops-agent:UpdateAutomation. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] finops-agent:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateDocument">UpdateDocument</a></code> | <code>string</code> | [Write] finops-agent:UpdateDocument. |

---

##### `AcceptAgentRequest`<sup>Required</sup> <a name="AcceptAgentRequest" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AcceptAgentRequest"></a>

```typescript
public readonly AcceptAgentRequest: string;
```

- *Type:* string

[Write] finops-agent:AcceptAgentRequest.

---

##### `actionGetAgentRequest`<sup>Required</sup> <a name="actionGetAgentRequest" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAgentRequest"></a>

```typescript
public readonly actionGetAgentRequest: string;
```

- *Type:* string

[Read] finops-agent:GetAgentRequest.

---

##### `actionGetAgentSpace`<sup>Required</sup> <a name="actionGetAgentSpace" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAgentSpace"></a>

```typescript
public readonly actionGetAgentSpace: string;
```

- *Type:* string

[Read] finops-agent:GetAgentSpace.

---

##### `actionGetArtifactContent`<sup>Required</sup> <a name="actionGetArtifactContent" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetArtifactContent"></a>

```typescript
public readonly actionGetArtifactContent: string;
```

- *Type:* string

[Read] finops-agent:GetArtifactContent.

---

##### `actionGetArtifactMetadata`<sup>Required</sup> <a name="actionGetArtifactMetadata" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetArtifactMetadata"></a>

```typescript
public readonly actionGetArtifactMetadata: string;
```

- *Type:* string

[Read] finops-agent:GetArtifactMetadata.

---

##### `actionGetAutomation`<sup>Required</sup> <a name="actionGetAutomation" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetAutomation"></a>

```typescript
public readonly actionGetAutomation: string;
```

- *Type:* string

[Read] finops-agent:GetAutomation.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] finops-agent:GetConnection.

---

##### `actionGetDocumentContent`<sup>Required</sup> <a name="actionGetDocumentContent" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetDocumentContent"></a>

```typescript
public readonly actionGetDocumentContent: string;
```

- *Type:* string

[Read] finops-agent:GetDocumentContent.

---

##### `actionGetDocumentMetadata`<sup>Required</sup> <a name="actionGetDocumentMetadata" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetDocumentMetadata"></a>

```typescript
public readonly actionGetDocumentMetadata: string;
```

- *Type:* string

[Read] finops-agent:GetDocumentMetadata.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] finops-agent:GetIntegration.

---

##### `actionGetTask`<sup>Required</sup> <a name="actionGetTask" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetTask"></a>

```typescript
public readonly actionGetTask: string;
```

- *Type:* string

[Read] finops-agent:GetTask.

---

##### `actionGetTurn`<sup>Required</sup> <a name="actionGetTurn" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.actionGetTurn"></a>

```typescript
public readonly actionGetTurn: string;
```

- *Type:* string

[Read] finops-agent:GetTurn.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelTask`<sup>Required</sup> <a name="CancelTask" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CancelTask"></a>

```typescript
public readonly CancelTask: string;
```

- *Type:* string

[Write] finops-agent:CancelTask.

---

##### `CancelTurn`<sup>Required</sup> <a name="CancelTurn" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CancelTurn"></a>

```typescript
public readonly CancelTurn: string;
```

- *Type:* string

[Write] finops-agent:CancelTurn.

---

##### `CreateAgentSpace`<sup>Required</sup> <a name="CreateAgentSpace" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateAgentSpace"></a>

```typescript
public readonly CreateAgentSpace: string;
```

- *Type:* string

[Write] finops-agent:CreateAgentSpace.

---

##### `CreateAutomation`<sup>Required</sup> <a name="CreateAutomation" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateAutomation"></a>

```typescript
public readonly CreateAutomation: string;
```

- *Type:* string

[Write] finops-agent:CreateAutomation.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] finops-agent:CreateConnection.

---

##### `CreateConversation`<sup>Required</sup> <a name="CreateConversation" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateConversation"></a>

```typescript
public readonly CreateConversation: string;
```

- *Type:* string

[Write] finops-agent:CreateConversation.

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateDocument"></a>

```typescript
public readonly CreateDocument: string;
```

- *Type:* string

[Write] finops-agent:CreateDocument.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] finops-agent:CreateIntegration.

---

##### `CreateOneTimeLoginSession`<sup>Required</sup> <a name="CreateOneTimeLoginSession" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateOneTimeLoginSession"></a>

```typescript
public readonly CreateOneTimeLoginSession: string;
```

- *Type:* string

[Write] finops-agent:CreateOneTimeLoginSession.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateTask"></a>

```typescript
public readonly CreateTask: string;
```

- *Type:* string

[Write] finops-agent:CreateTask.

---

##### `CreateTurn`<sup>Required</sup> <a name="CreateTurn" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.CreateTurn"></a>

```typescript
public readonly CreateTurn: string;
```

- *Type:* string

[Write] finops-agent:CreateTurn.

---

##### `DeleteAgentSpace`<sup>Required</sup> <a name="DeleteAgentSpace" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteAgentSpace"></a>

```typescript
public readonly DeleteAgentSpace: string;
```

- *Type:* string

[Write] finops-agent:DeleteAgentSpace.

---

##### `DeleteArtifact`<sup>Required</sup> <a name="DeleteArtifact" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteArtifact"></a>

```typescript
public readonly DeleteArtifact: string;
```

- *Type:* string

[Write] finops-agent:DeleteArtifact.

---

##### `DeleteAutomation`<sup>Required</sup> <a name="DeleteAutomation" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteAutomation"></a>

```typescript
public readonly DeleteAutomation: string;
```

- *Type:* string

[Write] finops-agent:DeleteAutomation.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] finops-agent:DeleteConnection.

---

##### `DeleteDocument`<sup>Required</sup> <a name="DeleteDocument" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteDocument"></a>

```typescript
public readonly DeleteDocument: string;
```

- *Type:* string

[Write] finops-agent:DeleteDocument.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] finops-agent:DeleteIntegration.

---

##### `ListAgentSpaces`<sup>Required</sup> <a name="ListAgentSpaces" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListAgentSpaces"></a>

```typescript
public readonly ListAgentSpaces: string;
```

- *Type:* string

[List] finops-agent:ListAgentSpaces.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string;
```

- *Type:* string

[List] finops-agent:ListArtifacts.

---

##### `ListAutomations`<sup>Required</sup> <a name="ListAutomations" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListAutomations"></a>

```typescript
public readonly ListAutomations: string;
```

- *Type:* string

[List] finops-agent:ListAutomations.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] finops-agent:ListConnections.

---

##### `ListConversations`<sup>Required</sup> <a name="ListConversations" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListConversations"></a>

```typescript
public readonly ListConversations: string;
```

- *Type:* string

[List] finops-agent:ListConversations.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string;
```

- *Type:* string

[List] finops-agent:ListDocuments.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] finops-agent:ListIntegrations.

---

##### `ListRecords`<sup>Required</sup> <a name="ListRecords" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListRecords"></a>

```typescript
public readonly ListRecords: string;
```

- *Type:* string

[List] finops-agent:ListRecords.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] finops-agent:ListTasks.

---

##### `ListTurns`<sup>Required</sup> <a name="ListTurns" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.ListTurns"></a>

```typescript
public readonly ListTurns: string;
```

- *Type:* string

[List] finops-agent:ListTurns.

---

##### `RejectAgentRequest`<sup>Required</sup> <a name="RejectAgentRequest" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.RejectAgentRequest"></a>

```typescript
public readonly RejectAgentRequest: string;
```

- *Type:* string

[Write] finops-agent:RejectAgentRequest.

---

##### `RestoreDocument`<sup>Required</sup> <a name="RestoreDocument" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.RestoreDocument"></a>

```typescript
public readonly RestoreDocument: string;
```

- *Type:* string

[Write] finops-agent:RestoreDocument.

---

##### `SendFeedback`<sup>Required</sup> <a name="SendFeedback" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.SendFeedback"></a>

```typescript
public readonly SendFeedback: string;
```

- *Type:* string

[Write] finops-agent:SendFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateAgentSpace`<sup>Required</sup> <a name="UpdateAgentSpace" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateAgentSpace"></a>

```typescript
public readonly UpdateAgentSpace: string;
```

- *Type:* string

[Write] finops-agent:UpdateAgentSpace.

---

##### `UpdateAutomation`<sup>Required</sup> <a name="UpdateAutomation" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateAutomation"></a>

```typescript
public readonly UpdateAutomation: string;
```

- *Type:* string

[Write] finops-agent:UpdateAutomation.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] finops-agent:UpdateConnection.

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdk_utils/iam.finops_agent.FinopsAgentActions.property.UpdateDocument"></a>

```typescript
public readonly UpdateDocument: string;
```

- *Type:* string

[Write] finops-agent:UpdateDocument.

---


