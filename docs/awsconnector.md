# `awsconnector` Submodule <a name="`awsconnector` Submodule" id="@cdk_utils/iam.awsconnector"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsconnectorActions <a name="AwsconnectorActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions"></a>

IAM action constants for the awsconnector service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.Initializer"></a>

```typescript
import { awsconnector } from '@cdk_utils/iam'

new awsconnector.AwsconnectorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.actionGetConnectorHealth">actionGetConnectorHealth</a></code> | <code>string</code> | [Read] awsconnector:GetConnectorHealth. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.RegisterConnector">RegisterConnector</a></code> | <code>string</code> | [Write] awsconnector:RegisterConnector. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.awsconnector.AwsconnectorActions.property.ValidateConnectorId">ValidateConnectorId</a></code> | <code>string</code> | [Read] awsconnector:ValidateConnectorId. |

---

##### `actionGetConnectorHealth`<sup>Required</sup> <a name="actionGetConnectorHealth" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.actionGetConnectorHealth"></a>

```typescript
public readonly actionGetConnectorHealth: string;
```

- *Type:* string

[Read] awsconnector:GetConnectorHealth.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `RegisterConnector`<sup>Required</sup> <a name="RegisterConnector" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.RegisterConnector"></a>

```typescript
public readonly RegisterConnector: string;
```

- *Type:* string

[Write] awsconnector:RegisterConnector.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ValidateConnectorId`<sup>Required</sup> <a name="ValidateConnectorId" id="@cdk_utils/iam.awsconnector.AwsconnectorActions.property.ValidateConnectorId"></a>

```typescript
public readonly ValidateConnectorId: string;
```

- *Type:* string

[Read] awsconnector:ValidateConnectorId.

---


