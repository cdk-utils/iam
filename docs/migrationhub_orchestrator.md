# `migrationhub_orchestrator` Submodule <a name="`migrationhub_orchestrator` Submodule" id="@cdk_utils/iam.migrationhub_orchestrator"></a>


## Structs <a name="Structs" id="Structs"></a>

### MigrationhubOrchestratorTemplateArnComponents <a name="MigrationhubOrchestratorTemplateArnComponents" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents"></a>

Parsed components of a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

const migrationhubOrchestratorTemplateArnComponents: migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### MigrationhubOrchestratorTemplateArnProps <a name="MigrationhubOrchestratorTemplateArnProps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps"></a>

Properties for building a template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

const migrationhubOrchestratorTemplateArnProps: migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MigrationhubOrchestratorWorkflowArnComponents <a name="MigrationhubOrchestratorWorkflowArnComponents" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents"></a>

Parsed components of a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

const migrationhubOrchestratorWorkflowArnComponents: migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### MigrationhubOrchestratorWorkflowArnProps <a name="MigrationhubOrchestratorWorkflowArnProps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps"></a>

Properties for building a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

const migrationhubOrchestratorWorkflowArnProps: migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationhubOrchestratorActions <a name="MigrationhubOrchestratorActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions"></a>

IAM action constants for the migrationhub-orchestrator service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

new migrationhub_orchestrator.MigrationhubOrchestratorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetMessage">actionGetMessage</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetMessage. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplate">actionGetTemplate</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetTemplate. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplateStep">actionGetTemplateStep</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetTemplateStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplateStepGroup">actionGetTemplateStepGroup</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetTemplateStepGroup. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflowStep">actionGetWorkflowStep</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetWorkflowStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflowStepGroup">actionGetWorkflowStepGroup</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:GetWorkflowStepGroup. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateTemplate">CreateTemplate</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:CreateTemplate. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflowStep">CreateWorkflowStep</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:CreateWorkflowStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflowStepGroup">CreateWorkflowStepGroup</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:CreateWorkflowStepGroup. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:DeleteTemplate. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflowStep">DeleteWorkflowStep</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:DeleteWorkflowStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflowStepGroup">DeleteWorkflowStepGroup</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:DeleteWorkflowStepGroup. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListPlugins">ListPlugins</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListPlugins. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] migrationhub-orchestrator:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplates">ListTemplates</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListTemplates. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplateStepGroups">ListTemplateStepGroups</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListTemplateStepGroups. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplateSteps">ListTemplateSteps</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListTemplateSteps. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflowStepGroups">ListWorkflowStepGroups</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListWorkflowStepGroups. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflowSteps">ListWorkflowSteps</a></code> | <code>string</code> | [List] migrationhub-orchestrator:ListWorkflowSteps. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.RegisterPlugin">RegisterPlugin</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:RegisterPlugin. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.RetryWorkflowStep">RetryWorkflowStep</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:RetryWorkflowStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:SendMessage. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.StartWorkflow">StartWorkflow</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:StartWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.StopWorkflow">StopWorkflow</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:StopWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] migrationhub-orchestrator:TagResource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] migrationhub-orchestrator:UntagResource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:UpdateTemplate. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:UpdateWorkflow. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflowStep">UpdateWorkflowStep</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:UpdateWorkflowStep. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflowStepGroup">UpdateWorkflowStepGroup</a></code> | <code>string</code> | [Write] migrationhub-orchestrator:UpdateWorkflowStepGroup. |

---

##### `actionGetMessage`<sup>Required</sup> <a name="actionGetMessage" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetMessage"></a>

```typescript
public readonly actionGetMessage: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetMessage.

---

##### `actionGetTemplate`<sup>Required</sup> <a name="actionGetTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplate"></a>

```typescript
public readonly actionGetTemplate: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetTemplate.

---

##### `actionGetTemplateStep`<sup>Required</sup> <a name="actionGetTemplateStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplateStep"></a>

```typescript
public readonly actionGetTemplateStep: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetTemplateStep.

---

##### `actionGetTemplateStepGroup`<sup>Required</sup> <a name="actionGetTemplateStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetTemplateStepGroup"></a>

```typescript
public readonly actionGetTemplateStepGroup: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetTemplateStepGroup.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetWorkflow.

---

##### `actionGetWorkflowStep`<sup>Required</sup> <a name="actionGetWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflowStep"></a>

```typescript
public readonly actionGetWorkflowStep: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetWorkflowStep.

---

##### `actionGetWorkflowStepGroup`<sup>Required</sup> <a name="actionGetWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.actionGetWorkflowStepGroup"></a>

```typescript
public readonly actionGetWorkflowStepGroup: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:GetWorkflowStepGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:CreateTemplate.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:CreateWorkflow.

---

##### `CreateWorkflowStep`<sup>Required</sup> <a name="CreateWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflowStep"></a>

```typescript
public readonly CreateWorkflowStep: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:CreateWorkflowStep.

---

##### `CreateWorkflowStepGroup`<sup>Required</sup> <a name="CreateWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.CreateWorkflowStepGroup"></a>

```typescript
public readonly CreateWorkflowStepGroup: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:CreateWorkflowStepGroup.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:DeleteTemplate.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:DeleteWorkflow.

---

##### `DeleteWorkflowStep`<sup>Required</sup> <a name="DeleteWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflowStep"></a>

```typescript
public readonly DeleteWorkflowStep: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:DeleteWorkflowStep.

---

##### `DeleteWorkflowStepGroup`<sup>Required</sup> <a name="DeleteWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.DeleteWorkflowStepGroup"></a>

```typescript
public readonly DeleteWorkflowStepGroup: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:DeleteWorkflowStepGroup.

---

##### `ListPlugins`<sup>Required</sup> <a name="ListPlugins" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListPlugins"></a>

```typescript
public readonly ListPlugins: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListPlugins.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] migrationhub-orchestrator:ListTagsForResource.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListTemplates.

---

##### `ListTemplateStepGroups`<sup>Required</sup> <a name="ListTemplateStepGroups" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplateStepGroups"></a>

```typescript
public readonly ListTemplateStepGroups: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListTemplateStepGroups.

---

##### `ListTemplateSteps`<sup>Required</sup> <a name="ListTemplateSteps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListTemplateSteps"></a>

```typescript
public readonly ListTemplateSteps: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListTemplateSteps.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListWorkflows.

---

##### `ListWorkflowStepGroups`<sup>Required</sup> <a name="ListWorkflowStepGroups" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflowStepGroups"></a>

```typescript
public readonly ListWorkflowStepGroups: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListWorkflowStepGroups.

---

##### `ListWorkflowSteps`<sup>Required</sup> <a name="ListWorkflowSteps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.ListWorkflowSteps"></a>

```typescript
public readonly ListWorkflowSteps: string;
```

- *Type:* string

[List] migrationhub-orchestrator:ListWorkflowSteps.

---

##### `RegisterPlugin`<sup>Required</sup> <a name="RegisterPlugin" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.RegisterPlugin"></a>

```typescript
public readonly RegisterPlugin: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:RegisterPlugin.

---

##### `RetryWorkflowStep`<sup>Required</sup> <a name="RetryWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.RetryWorkflowStep"></a>

```typescript
public readonly RetryWorkflowStep: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:RetryWorkflowStep.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartWorkflow`<sup>Required</sup> <a name="StartWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.StartWorkflow"></a>

```typescript
public readonly StartWorkflow: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:StartWorkflow.

---

##### `StopWorkflow`<sup>Required</sup> <a name="StopWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.StopWorkflow"></a>

```typescript
public readonly StopWorkflow: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:StopWorkflow.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] migrationhub-orchestrator:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] migrationhub-orchestrator:UntagResource.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:UpdateTemplate.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:UpdateWorkflow.

---

##### `UpdateWorkflowStep`<sup>Required</sup> <a name="UpdateWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflowStep"></a>

```typescript
public readonly UpdateWorkflowStep: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:UpdateWorkflowStep.

---

##### `UpdateWorkflowStepGroup`<sup>Required</sup> <a name="UpdateWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorActions.property.UpdateWorkflowStepGroup"></a>

```typescript
public readonly UpdateWorkflowStepGroup: string;
```

- *Type:* string

[Write] migrationhub-orchestrator:UpdateWorkflowStepGroup.

---

### MigrationhubOrchestratorConditions <a name="MigrationhubOrchestratorConditions" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions"></a>

Condition key constants and builders for migrationhub-orchestrator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

new migrationhub_orchestrator.MigrationhubOrchestratorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.requestTag"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.resourceTag"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.tagKeys"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MigrationhubOrchestratorOperations <a name="MigrationhubOrchestratorOperations" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations"></a>

API operation to required IAM actions mapping for migrationhub-orchestrator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

new migrationhub_orchestrator.MigrationhubOrchestratorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateTemplate">CreateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplate API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflowStep">CreateWorkflowStep</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflowStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflowStepGroup">CreateWorkflowStepGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflowStepGroup API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteTemplate">DeleteTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplate API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflowStep">DeleteWorkflowStep</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflowStepGroup">DeleteWorkflowStepGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowStepGroup API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListPlugins">ListPlugins</a></code> | <code>string[]</code> | IAM actions required for the ListPlugins API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplates">ListTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTemplates API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplateStepGroups">ListTemplateStepGroups</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateStepGroups API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplateSteps">ListTemplateSteps</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateSteps API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflowStepGroups">ListWorkflowStepGroups</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowStepGroups API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflowSteps">ListWorkflowSteps</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowSteps API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplate">opGetTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTemplate API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplateStep">opGetTemplateStep</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplateStepGroup">opGetTemplateStepGroup</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateStepGroup API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflowStep">opGetWorkflowStep</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflowStepGroup">opGetWorkflowStepGroup</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowStepGroup API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.RetryWorkflowStep">RetryWorkflowStep</a></code> | <code>string[]</code> | IAM actions required for the RetryWorkflowStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.StartWorkflow">StartWorkflow</a></code> | <code>string[]</code> | IAM actions required for the StartWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.StopWorkflow">StopWorkflow</a></code> | <code>string[]</code> | IAM actions required for the StopWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateTemplate">UpdateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplate API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflowStep">UpdateWorkflowStep</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflowStep API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflowStepGroup">UpdateWorkflowStepGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflowStepGroup API call. |

---

##### `CreateTemplate`<sup>Required</sup> <a name="CreateTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateTemplate"></a>

```typescript
public readonly CreateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplate API call.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `CreateWorkflowStep`<sup>Required</sup> <a name="CreateWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflowStep"></a>

```typescript
public readonly CreateWorkflowStep: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflowStep API call.

---

##### `CreateWorkflowStepGroup`<sup>Required</sup> <a name="CreateWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.CreateWorkflowStepGroup"></a>

```typescript
public readonly CreateWorkflowStepGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflowStepGroup API call.

---

##### `DeleteTemplate`<sup>Required</sup> <a name="DeleteTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteTemplate"></a>

```typescript
public readonly DeleteTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplate API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DeleteWorkflowStep`<sup>Required</sup> <a name="DeleteWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflowStep"></a>

```typescript
public readonly DeleteWorkflowStep: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowStep API call.

---

##### `DeleteWorkflowStepGroup`<sup>Required</sup> <a name="DeleteWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.DeleteWorkflowStepGroup"></a>

```typescript
public readonly DeleteWorkflowStepGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowStepGroup API call.

---

##### `ListPlugins`<sup>Required</sup> <a name="ListPlugins" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListPlugins"></a>

```typescript
public readonly ListPlugins: string[];
```

- *Type:* string[]

IAM actions required for the ListPlugins API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplates`<sup>Required</sup> <a name="ListTemplates" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplates"></a>

```typescript
public readonly ListTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplates API call.

---

##### `ListTemplateStepGroups`<sup>Required</sup> <a name="ListTemplateStepGroups" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplateStepGroups"></a>

```typescript
public readonly ListTemplateStepGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateStepGroups API call.

---

##### `ListTemplateSteps`<sup>Required</sup> <a name="ListTemplateSteps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListTemplateSteps"></a>

```typescript
public readonly ListTemplateSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateSteps API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `ListWorkflowStepGroups`<sup>Required</sup> <a name="ListWorkflowStepGroups" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflowStepGroups"></a>

```typescript
public readonly ListWorkflowStepGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowStepGroups API call.

---

##### `ListWorkflowSteps`<sup>Required</sup> <a name="ListWorkflowSteps" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.ListWorkflowSteps"></a>

```typescript
public readonly ListWorkflowSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowSteps API call.

---

##### `opGetTemplate`<sup>Required</sup> <a name="opGetTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplate"></a>

```typescript
public readonly opGetTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplate API call.

---

##### `opGetTemplateStep`<sup>Required</sup> <a name="opGetTemplateStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplateStep"></a>

```typescript
public readonly opGetTemplateStep: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateStep API call.

---

##### `opGetTemplateStepGroup`<sup>Required</sup> <a name="opGetTemplateStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetTemplateStepGroup"></a>

```typescript
public readonly opGetTemplateStepGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateStepGroup API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowStep`<sup>Required</sup> <a name="opGetWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflowStep"></a>

```typescript
public readonly opGetWorkflowStep: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowStep API call.

---

##### `opGetWorkflowStepGroup`<sup>Required</sup> <a name="opGetWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.opGetWorkflowStepGroup"></a>

```typescript
public readonly opGetWorkflowStepGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowStepGroup API call.

---

##### `RetryWorkflowStep`<sup>Required</sup> <a name="RetryWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.RetryWorkflowStep"></a>

```typescript
public readonly RetryWorkflowStep: string[];
```

- *Type:* string[]

IAM actions required for the RetryWorkflowStep API call.

---

##### `StartWorkflow`<sup>Required</sup> <a name="StartWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.StartWorkflow"></a>

```typescript
public readonly StartWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkflow API call.

---

##### `StopWorkflow`<sup>Required</sup> <a name="StopWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.StopWorkflow"></a>

```typescript
public readonly StopWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the StopWorkflow API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateTemplate`<sup>Required</sup> <a name="UpdateTemplate" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateTemplate"></a>

```typescript
public readonly UpdateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplate API call.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflow API call.

---

##### `UpdateWorkflowStep`<sup>Required</sup> <a name="UpdateWorkflowStep" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflowStep"></a>

```typescript
public readonly UpdateWorkflowStep: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflowStep API call.

---

##### `UpdateWorkflowStepGroup`<sup>Required</sup> <a name="UpdateWorkflowStepGroup" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorOperations.property.UpdateWorkflowStepGroup"></a>

```typescript
public readonly UpdateWorkflowStepGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflowStepGroup API call.

---

### MigrationhubOrchestratorResources <a name="MigrationhubOrchestratorResources" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources"></a>

ARN builders, validators, and parsers for migrationhub-orchestrator resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.Initializer"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

new migrationhub_orchestrator.MigrationhubOrchestratorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidTemplateArn">isValidTemplateArn</a></code> | Validates whether a string is a valid ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseTemplateArn">parseTemplateArn</a></code> | Parses a template ARN into its components. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.template">template</a></code> | Builds an ARN for the template resource. |
| <code><a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.workflow">workflow</a></code> | Builds an ARN for the workflow resource. |

---

##### `isValidTemplateArn` <a name="isValidTemplateArn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidTemplateArn"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidWorkflowArn"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTemplateArn` <a name="parseTemplateArn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseTemplateArn"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.parseTemplateArn(arn: string)
```

Parses a template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseWorkflowArn"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.parseWorkflowArn(arn: string)
```

Parses a workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `template` <a name="template" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.template"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.template(props: MigrationhubOrchestratorTemplateArnProps)
```

Builds an ARN for the template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.template.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorTemplateArnProps">MigrationhubOrchestratorTemplateArnProps</a>

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.workflow"></a>

```typescript
import { migrationhub_orchestrator } from '@cdk_utils/iam'

migrationhub_orchestrator.MigrationhubOrchestratorResources.workflow(props: MigrationhubOrchestratorWorkflowArnProps)
```

Builds an ARN for the workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.migrationhub_orchestrator.MigrationhubOrchestratorWorkflowArnProps">MigrationhubOrchestratorWorkflowArnProps</a>

---




