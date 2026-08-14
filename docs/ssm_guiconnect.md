# `ssm_guiconnect` Submodule <a name="`ssm_guiconnect` Submodule" id="@cdk_utils/iam.ssm_guiconnect"></a>



## Classes <a name="Classes" id="Classes"></a>

### SSMGuiconnectActions <a name="SSMGuiconnectActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions"></a>

IAM action constants for the ssm-guiconnect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.Initializer"></a>

```typescript
import { ssm_guiconnect } from '@cdk_utils/iam'

new ssm_guiconnect.SSMGuiconnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] ssm-guiconnect:GetConnection. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.actionGetConnectionRecordingPreferences">actionGetConnectionRecordingPreferences</a></code> | <code>string</code> | [Read] ssm-guiconnect:GetConnectionRecordingPreferences. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.CancelConnection">CancelConnection</a></code> | <code>string</code> | [Write] ssm-guiconnect:CancelConnection. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.DeleteConnectionRecordingPreferences">DeleteConnectionRecordingPreferences</a></code> | <code>string</code> | [Write] ssm-guiconnect:DeleteConnectionRecordingPreferences. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] ssm-guiconnect:ListConnections. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.StartConnection">StartConnection</a></code> | <code>string</code> | [Write] ssm-guiconnect:StartConnection. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.UpdateConnectionRecordingPreferences">UpdateConnectionRecordingPreferences</a></code> | <code>string</code> | [Write] ssm-guiconnect:UpdateConnectionRecordingPreferences. |

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] ssm-guiconnect:GetConnection.

---

##### `actionGetConnectionRecordingPreferences`<sup>Required</sup> <a name="actionGetConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.actionGetConnectionRecordingPreferences"></a>

```typescript
public readonly actionGetConnectionRecordingPreferences: string;
```

- *Type:* string

[Read] ssm-guiconnect:GetConnectionRecordingPreferences.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelConnection`<sup>Required</sup> <a name="CancelConnection" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.CancelConnection"></a>

```typescript
public readonly CancelConnection: string;
```

- *Type:* string

[Write] ssm-guiconnect:CancelConnection.

---

##### `DeleteConnectionRecordingPreferences`<sup>Required</sup> <a name="DeleteConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.DeleteConnectionRecordingPreferences"></a>

```typescript
public readonly DeleteConnectionRecordingPreferences: string;
```

- *Type:* string

[Write] ssm-guiconnect:DeleteConnectionRecordingPreferences.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] ssm-guiconnect:ListConnections.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartConnection`<sup>Required</sup> <a name="StartConnection" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.StartConnection"></a>

```typescript
public readonly StartConnection: string;
```

- *Type:* string

[Write] ssm-guiconnect:StartConnection.

---

##### `UpdateConnectionRecordingPreferences`<sup>Required</sup> <a name="UpdateConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectActions.property.UpdateConnectionRecordingPreferences"></a>

```typescript
public readonly UpdateConnectionRecordingPreferences: string;
```

- *Type:* string

[Write] ssm-guiconnect:UpdateConnectionRecordingPreferences.

---

### SSMGuiconnectOperations <a name="SSMGuiconnectOperations" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations"></a>

API operation to required IAM actions mapping for ssm-guiconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.Initializer"></a>

```typescript
import { ssm_guiconnect } from '@cdk_utils/iam'

new ssm_guiconnect.SSMGuiconnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.DeleteConnectionRecordingPreferences">DeleteConnectionRecordingPreferences</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectionRecordingPreferences API call. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.opGetConnectionRecordingPreferences">opGetConnectionRecordingPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionRecordingPreferences API call. |
| <code><a href="#@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.UpdateConnectionRecordingPreferences">UpdateConnectionRecordingPreferences</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectionRecordingPreferences API call. |

---

##### `DeleteConnectionRecordingPreferences`<sup>Required</sup> <a name="DeleteConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.DeleteConnectionRecordingPreferences"></a>

```typescript
public readonly DeleteConnectionRecordingPreferences: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectionRecordingPreferences API call.

---

##### `opGetConnectionRecordingPreferences`<sup>Required</sup> <a name="opGetConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.opGetConnectionRecordingPreferences"></a>

```typescript
public readonly opGetConnectionRecordingPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionRecordingPreferences API call.

---

##### `UpdateConnectionRecordingPreferences`<sup>Required</sup> <a name="UpdateConnectionRecordingPreferences" id="@cdk_utils/iam.ssm_guiconnect.SSMGuiconnectOperations.property.UpdateConnectionRecordingPreferences"></a>

```typescript
public readonly UpdateConnectionRecordingPreferences: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectionRecordingPreferences API call.

---


