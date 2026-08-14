# `codedeploy_commands_secure` Submodule <a name="`codedeploy_commands_secure` Submodule" id="@cdk_utils/iam.codedeploy_commands_secure"></a>



## Classes <a name="Classes" id="Classes"></a>

### CodedeployCommandsSecureActions <a name="CodedeployCommandsSecureActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions"></a>

IAM action constants for the codedeploy-commands-secure service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.Initializer"></a>

```typescript
import { codedeploy_commands_secure } from '@cdk_utils/iam'

new codedeploy_commands_secure.CodedeployCommandsSecureActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.actionGetDeploymentSpecification">actionGetDeploymentSpecification</a></code> | <code>string</code> | [Read] codedeploy-commands-secure:GetDeploymentSpecification. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PollHostCommand">PollHostCommand</a></code> | <code>string</code> | [Read] codedeploy-commands-secure:PollHostCommand. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PutHostCommandAcknowledgement">PutHostCommandAcknowledgement</a></code> | <code>string</code> | [Write] codedeploy-commands-secure:PutHostCommandAcknowledgement. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PutHostCommandComplete">PutHostCommandComplete</a></code> | <code>string</code> | [Write] codedeploy-commands-secure:PutHostCommandComplete. |
| <code><a href="#@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetDeploymentSpecification`<sup>Required</sup> <a name="actionGetDeploymentSpecification" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.actionGetDeploymentSpecification"></a>

```typescript
public readonly actionGetDeploymentSpecification: string;
```

- *Type:* string

[Read] codedeploy-commands-secure:GetDeploymentSpecification.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `PollHostCommand`<sup>Required</sup> <a name="PollHostCommand" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PollHostCommand"></a>

```typescript
public readonly PollHostCommand: string;
```

- *Type:* string

[Read] codedeploy-commands-secure:PollHostCommand.

---

##### `PutHostCommandAcknowledgement`<sup>Required</sup> <a name="PutHostCommandAcknowledgement" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PutHostCommandAcknowledgement"></a>

```typescript
public readonly PutHostCommandAcknowledgement: string;
```

- *Type:* string

[Write] codedeploy-commands-secure:PutHostCommandAcknowledgement.

---

##### `PutHostCommandComplete`<sup>Required</sup> <a name="PutHostCommandComplete" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.PutHostCommandComplete"></a>

```typescript
public readonly PutHostCommandComplete: string;
```

- *Type:* string

[Write] codedeploy-commands-secure:PutHostCommandComplete.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codedeploy_commands_secure.CodedeployCommandsSecureActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---


