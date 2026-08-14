# `nova_act` Submodule <a name="`nova_act` Submodule" id="@cdk_utils/iam.nova_act"></a>


## Structs <a name="Structs" id="Structs"></a>

### NovaActWorkflowDefinitionArnComponents <a name="NovaActWorkflowDefinitionArnComponents" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents"></a>

Parsed components of a workflow-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

const novaActWorkflowDefinitionArnComponents: nova_act.NovaActWorkflowDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.workflowDefinitionName">workflowDefinitionName</a></code> | <code>string</code> | The WorkflowDefinitionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowDefinitionName`<sup>Required</sup> <a name="workflowDefinitionName" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnComponents.property.workflowDefinitionName"></a>

```typescript
public readonly workflowDefinitionName: string;
```

- *Type:* string

The WorkflowDefinitionName component.

---

### NovaActWorkflowDefinitionArnProps <a name="NovaActWorkflowDefinitionArnProps" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps"></a>

Properties for building a workflow-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

const novaActWorkflowDefinitionArnProps: nova_act.NovaActWorkflowDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.workflowDefinitionName">workflowDefinitionName</a></code> | <code>string</code> | The WorkflowDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowDefinitionName`<sup>Required</sup> <a name="workflowDefinitionName" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.workflowDefinitionName"></a>

```typescript
public readonly workflowDefinitionName: string;
```

- *Type:* string

The WorkflowDefinitionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NovaActWorkflowRunArnComponents <a name="NovaActWorkflowRunArnComponents" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents"></a>

Parsed components of a workflow-run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

const novaActWorkflowRunArnComponents: nova_act.NovaActWorkflowRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.workflowDefinitionName">workflowDefinitionName</a></code> | <code>string</code> | The WorkflowDefinitionName component. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.workflowRunId">workflowRunId</a></code> | <code>string</code> | The WorkflowRunId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowDefinitionName`<sup>Required</sup> <a name="workflowDefinitionName" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.workflowDefinitionName"></a>

```typescript
public readonly workflowDefinitionName: string;
```

- *Type:* string

The WorkflowDefinitionName component.

---

##### `workflowRunId`<sup>Required</sup> <a name="workflowRunId" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnComponents.property.workflowRunId"></a>

```typescript
public readonly workflowRunId: string;
```

- *Type:* string

The WorkflowRunId component.

---

### NovaActWorkflowRunArnProps <a name="NovaActWorkflowRunArnProps" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps"></a>

Properties for building a workflow-run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

const novaActWorkflowRunArnProps: nova_act.NovaActWorkflowRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.workflowDefinitionName">workflowDefinitionName</a></code> | <code>string</code> | The WorkflowDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.workflowRunId">workflowRunId</a></code> | <code>string</code> | The WorkflowRunId component of the ARN. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowDefinitionName`<sup>Required</sup> <a name="workflowDefinitionName" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.workflowDefinitionName"></a>

```typescript
public readonly workflowDefinitionName: string;
```

- *Type:* string

The WorkflowDefinitionName component of the ARN.

---

##### `workflowRunId`<sup>Required</sup> <a name="workflowRunId" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.workflowRunId"></a>

```typescript
public readonly workflowRunId: string;
```

- *Type:* string

The WorkflowRunId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NovaActActions <a name="NovaActActions" id="@cdk_utils/iam.nova_act.NovaActActions"></a>

IAM action constants for the nova-act service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nova_act.NovaActActions.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

new nova_act.NovaActActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.actionGetWorkflowDefinition">actionGetWorkflowDefinition</a></code> | <code>string</code> | [Read] nova-act:GetWorkflowDefinition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.actionGetWorkflowRun">actionGetWorkflowRun</a></code> | <code>string</code> | [Read] nova-act:GetWorkflowRun. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.CreateAct">CreateAct</a></code> | <code>string</code> | [Write] nova-act:CreateAct. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.CreateSession">CreateSession</a></code> | <code>string</code> | [Write] nova-act:CreateSession. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.CreateWorkflowDefinition">CreateWorkflowDefinition</a></code> | <code>string</code> | [Write] nova-act:CreateWorkflowDefinition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.CreateWorkflowRun">CreateWorkflowRun</a></code> | <code>string</code> | [Write] nova-act:CreateWorkflowRun. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.DeleteWorkflowDefinition">DeleteWorkflowDefinition</a></code> | <code>string</code> | [Write] nova-act:DeleteWorkflowDefinition. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.DeleteWorkflowRun">DeleteWorkflowRun</a></code> | <code>string</code> | [Write] nova-act:DeleteWorkflowRun. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.InvokeActStep">InvokeActStep</a></code> | <code>string</code> | [Write] nova-act:InvokeActStep. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.ListActs">ListActs</a></code> | <code>string</code> | [Read] nova-act:ListActs. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.ListModels">ListModels</a></code> | <code>string</code> | [Read] nova-act:ListModels. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [Read] nova-act:ListSessions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.ListWorkflowDefinitions">ListWorkflowDefinitions</a></code> | <code>string</code> | [List] nova-act:ListWorkflowDefinitions. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.ListWorkflowRuns">ListWorkflowRuns</a></code> | <code>string</code> | [List] nova-act:ListWorkflowRuns. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.UpdateAct">UpdateAct</a></code> | <code>string</code> | [Write] nova-act:UpdateAct. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActActions.property.UpdateWorkflowRun">UpdateWorkflowRun</a></code> | <code>string</code> | [Write] nova-act:UpdateWorkflowRun. |

---

##### `actionGetWorkflowDefinition`<sup>Required</sup> <a name="actionGetWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActActions.property.actionGetWorkflowDefinition"></a>

```typescript
public readonly actionGetWorkflowDefinition: string;
```

- *Type:* string

[Read] nova-act:GetWorkflowDefinition.

---

##### `actionGetWorkflowRun`<sup>Required</sup> <a name="actionGetWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActActions.property.actionGetWorkflowRun"></a>

```typescript
public readonly actionGetWorkflowRun: string;
```

- *Type:* string

[Read] nova-act:GetWorkflowRun.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.nova_act.NovaActActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.nova_act.NovaActActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.nova_act.NovaActActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.nova_act.NovaActActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.nova_act.NovaActActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAct`<sup>Required</sup> <a name="CreateAct" id="@cdk_utils/iam.nova_act.NovaActActions.property.CreateAct"></a>

```typescript
public readonly CreateAct: string;
```

- *Type:* string

[Write] nova-act:CreateAct.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.nova_act.NovaActActions.property.CreateSession"></a>

```typescript
public readonly CreateSession: string;
```

- *Type:* string

[Write] nova-act:CreateSession.

---

##### `CreateWorkflowDefinition`<sup>Required</sup> <a name="CreateWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActActions.property.CreateWorkflowDefinition"></a>

```typescript
public readonly CreateWorkflowDefinition: string;
```

- *Type:* string

[Write] nova-act:CreateWorkflowDefinition.

---

##### `CreateWorkflowRun`<sup>Required</sup> <a name="CreateWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActActions.property.CreateWorkflowRun"></a>

```typescript
public readonly CreateWorkflowRun: string;
```

- *Type:* string

[Write] nova-act:CreateWorkflowRun.

---

##### `DeleteWorkflowDefinition`<sup>Required</sup> <a name="DeleteWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActActions.property.DeleteWorkflowDefinition"></a>

```typescript
public readonly DeleteWorkflowDefinition: string;
```

- *Type:* string

[Write] nova-act:DeleteWorkflowDefinition.

---

##### `DeleteWorkflowRun`<sup>Required</sup> <a name="DeleteWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActActions.property.DeleteWorkflowRun"></a>

```typescript
public readonly DeleteWorkflowRun: string;
```

- *Type:* string

[Write] nova-act:DeleteWorkflowRun.

---

##### `InvokeActStep`<sup>Required</sup> <a name="InvokeActStep" id="@cdk_utils/iam.nova_act.NovaActActions.property.InvokeActStep"></a>

```typescript
public readonly InvokeActStep: string;
```

- *Type:* string

[Write] nova-act:InvokeActStep.

---

##### `ListActs`<sup>Required</sup> <a name="ListActs" id="@cdk_utils/iam.nova_act.NovaActActions.property.ListActs"></a>

```typescript
public readonly ListActs: string;
```

- *Type:* string

[Read] nova-act:ListActs.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.nova_act.NovaActActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[Read] nova-act:ListModels.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.nova_act.NovaActActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[Read] nova-act:ListSessions.

---

##### `ListWorkflowDefinitions`<sup>Required</sup> <a name="ListWorkflowDefinitions" id="@cdk_utils/iam.nova_act.NovaActActions.property.ListWorkflowDefinitions"></a>

```typescript
public readonly ListWorkflowDefinitions: string;
```

- *Type:* string

[List] nova-act:ListWorkflowDefinitions.

---

##### `ListWorkflowRuns`<sup>Required</sup> <a name="ListWorkflowRuns" id="@cdk_utils/iam.nova_act.NovaActActions.property.ListWorkflowRuns"></a>

```typescript
public readonly ListWorkflowRuns: string;
```

- *Type:* string

[List] nova-act:ListWorkflowRuns.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.nova_act.NovaActActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateAct`<sup>Required</sup> <a name="UpdateAct" id="@cdk_utils/iam.nova_act.NovaActActions.property.UpdateAct"></a>

```typescript
public readonly UpdateAct: string;
```

- *Type:* string

[Write] nova-act:UpdateAct.

---

##### `UpdateWorkflowRun`<sup>Required</sup> <a name="UpdateWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActActions.property.UpdateWorkflowRun"></a>

```typescript
public readonly UpdateWorkflowRun: string;
```

- *Type:* string

[Write] nova-act:UpdateWorkflowRun.

---

### NovaActOperations <a name="NovaActOperations" id="@cdk_utils/iam.nova_act.NovaActOperations"></a>

API operation to required IAM actions mapping for nova-act.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nova_act.NovaActOperations.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

new nova_act.NovaActOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.CreateAct">CreateAct</a></code> | <code>string[]</code> | IAM actions required for the CreateAct API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.CreateSession">CreateSession</a></code> | <code>string[]</code> | IAM actions required for the CreateSession API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.CreateWorkflowDefinition">CreateWorkflowDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflowDefinition API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.CreateWorkflowRun">CreateWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.DeleteWorkflowDefinition">DeleteWorkflowDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowDefinition API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.DeleteWorkflowRun">DeleteWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.InvokeActStep">InvokeActStep</a></code> | <code>string[]</code> | IAM actions required for the InvokeActStep API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.ListActs">ListActs</a></code> | <code>string[]</code> | IAM actions required for the ListActs API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.ListModels">ListModels</a></code> | <code>string[]</code> | IAM actions required for the ListModels API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.ListWorkflowDefinitions">ListWorkflowDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowDefinitions API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.ListWorkflowRuns">ListWorkflowRuns</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowRuns API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.opGetWorkflowDefinition">opGetWorkflowDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowDefinition API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.opGetWorkflowRun">opGetWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.UpdateAct">UpdateAct</a></code> | <code>string[]</code> | IAM actions required for the UpdateAct API call. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActOperations.property.UpdateWorkflowRun">UpdateWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflowRun API call. |

---

##### `CreateAct`<sup>Required</sup> <a name="CreateAct" id="@cdk_utils/iam.nova_act.NovaActOperations.property.CreateAct"></a>

```typescript
public readonly CreateAct: string[];
```

- *Type:* string[]

IAM actions required for the CreateAct API call.

---

##### `CreateSession`<sup>Required</sup> <a name="CreateSession" id="@cdk_utils/iam.nova_act.NovaActOperations.property.CreateSession"></a>

```typescript
public readonly CreateSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateSession API call.

---

##### `CreateWorkflowDefinition`<sup>Required</sup> <a name="CreateWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActOperations.property.CreateWorkflowDefinition"></a>

```typescript
public readonly CreateWorkflowDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflowDefinition API call.

---

##### `CreateWorkflowRun`<sup>Required</sup> <a name="CreateWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActOperations.property.CreateWorkflowRun"></a>

```typescript
public readonly CreateWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflowRun API call.

---

##### `DeleteWorkflowDefinition`<sup>Required</sup> <a name="DeleteWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActOperations.property.DeleteWorkflowDefinition"></a>

```typescript
public readonly DeleteWorkflowDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowDefinition API call.

---

##### `DeleteWorkflowRun`<sup>Required</sup> <a name="DeleteWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActOperations.property.DeleteWorkflowRun"></a>

```typescript
public readonly DeleteWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowRun API call.

---

##### `InvokeActStep`<sup>Required</sup> <a name="InvokeActStep" id="@cdk_utils/iam.nova_act.NovaActOperations.property.InvokeActStep"></a>

```typescript
public readonly InvokeActStep: string[];
```

- *Type:* string[]

IAM actions required for the InvokeActStep API call.

---

##### `ListActs`<sup>Required</sup> <a name="ListActs" id="@cdk_utils/iam.nova_act.NovaActOperations.property.ListActs"></a>

```typescript
public readonly ListActs: string[];
```

- *Type:* string[]

IAM actions required for the ListActs API call.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.nova_act.NovaActOperations.property.ListModels"></a>

```typescript
public readonly ListModels: string[];
```

- *Type:* string[]

IAM actions required for the ListModels API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.nova_act.NovaActOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListWorkflowDefinitions`<sup>Required</sup> <a name="ListWorkflowDefinitions" id="@cdk_utils/iam.nova_act.NovaActOperations.property.ListWorkflowDefinitions"></a>

```typescript
public readonly ListWorkflowDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowDefinitions API call.

---

##### `ListWorkflowRuns`<sup>Required</sup> <a name="ListWorkflowRuns" id="@cdk_utils/iam.nova_act.NovaActOperations.property.ListWorkflowRuns"></a>

```typescript
public readonly ListWorkflowRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowRuns API call.

---

##### `opGetWorkflowDefinition`<sup>Required</sup> <a name="opGetWorkflowDefinition" id="@cdk_utils/iam.nova_act.NovaActOperations.property.opGetWorkflowDefinition"></a>

```typescript
public readonly opGetWorkflowDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowDefinition API call.

---

##### `opGetWorkflowRun`<sup>Required</sup> <a name="opGetWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActOperations.property.opGetWorkflowRun"></a>

```typescript
public readonly opGetWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRun API call.

---

##### `UpdateAct`<sup>Required</sup> <a name="UpdateAct" id="@cdk_utils/iam.nova_act.NovaActOperations.property.UpdateAct"></a>

```typescript
public readonly UpdateAct: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAct API call.

---

##### `UpdateWorkflowRun`<sup>Required</sup> <a name="UpdateWorkflowRun" id="@cdk_utils/iam.nova_act.NovaActOperations.property.UpdateWorkflowRun"></a>

```typescript
public readonly UpdateWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflowRun API call.

---

### NovaActResources <a name="NovaActResources" id="@cdk_utils/iam.nova_act.NovaActResources"></a>

ARN builders, validators, and parsers for nova-act resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.nova_act.NovaActResources.Initializer"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

new nova_act.NovaActResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowDefinitionArn">isValidWorkflowDefinitionArn</a></code> | Validates whether a string is a valid ARN for the workflow-definition resource. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowRunArn">isValidWorkflowRunArn</a></code> | Validates whether a string is a valid ARN for the workflow-run resource. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowDefinitionArn">parseWorkflowDefinitionArn</a></code> | Parses a workflow-definition ARN into its components. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowRunArn">parseWorkflowRunArn</a></code> | Parses a workflow-run ARN into its components. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.workflowDefinition">workflowDefinition</a></code> | Builds an ARN for the workflow-definition resource. |
| <code><a href="#@cdk_utils/iam.nova_act.NovaActResources.workflowRun">workflowRun</a></code> | Builds an ARN for the workflow-run resource. |

---

##### `isValidWorkflowDefinitionArn` <a name="isValidWorkflowDefinitionArn" id="@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowDefinitionArn"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.isValidWorkflowDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow-definition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowRunArn` <a name="isValidWorkflowRunArn" id="@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowRunArn"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.isValidWorkflowRunArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow-run resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nova_act.NovaActResources.isValidWorkflowRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowDefinitionArn` <a name="parseWorkflowDefinitionArn" id="@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowDefinitionArn"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.parseWorkflowDefinitionArn(arn: string)
```

Parses a workflow-definition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowRunArn` <a name="parseWorkflowRunArn" id="@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowRunArn"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.parseWorkflowRunArn(arn: string)
```

Parses a workflow-run ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.nova_act.NovaActResources.parseWorkflowRunArn.parameter.arn"></a>

- *Type:* string

---

##### `workflowDefinition` <a name="workflowDefinition" id="@cdk_utils/iam.nova_act.NovaActResources.workflowDefinition"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.workflowDefinition(props: NovaActWorkflowDefinitionArnProps)
```

Builds an ARN for the workflow-definition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nova_act.NovaActResources.workflowDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nova_act.NovaActWorkflowDefinitionArnProps">NovaActWorkflowDefinitionArnProps</a>

---

##### `workflowRun` <a name="workflowRun" id="@cdk_utils/iam.nova_act.NovaActResources.workflowRun"></a>

```typescript
import { nova_act } from '@cdk_utils/iam'

nova_act.NovaActResources.workflowRun(props: NovaActWorkflowRunArnProps)
```

Builds an ARN for the workflow-run resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.nova_act.NovaActResources.workflowRun.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.nova_act.NovaActWorkflowRunArnProps">NovaActWorkflowRunArnProps</a>

---




