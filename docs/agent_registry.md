# `agent_registry` Submodule <a name="`agent_registry` Submodule" id="@cdk_utils/iam.agent_registry"></a>


## Structs <a name="Structs" id="Structs"></a>

### AgentRegistryRegistryArnComponents <a name="AgentRegistryRegistryArnComponents" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents"></a>

Parsed components of a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

const agentRegistryRegistryArnComponents: agent_registry.AgentRegistryRegistryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnComponents.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component.

---

### AgentRegistryRegistryArnProps <a name="AgentRegistryRegistryArnProps" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps"></a>

Properties for building a registry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

const agentRegistryRegistryArnProps: agent_registry.AgentRegistryRegistryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AgentRegistryRegistryRecordArnComponents <a name="AgentRegistryRegistryRecordArnComponents" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents"></a>

Parsed components of a registry-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

const agentRegistryRegistryRecordArnComponents: agent_registry.AgentRegistryRegistryRecordArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.recordId">recordId</a></code> | <code>string</code> | The RecordId component. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

The RecordId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnComponents.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component.

---

### AgentRegistryRegistryRecordArnProps <a name="AgentRegistryRegistryRecordArnProps" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps"></a>

Properties for building a registry-record ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

const agentRegistryRegistryRecordArnProps: agent_registry.AgentRegistryRegistryRecordArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.recordId">recordId</a></code> | <code>string</code> | The RecordId component of the ARN. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.registryId">registryId</a></code> | <code>string</code> | The RegistryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

The RecordId component of the ARN.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

The RegistryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AgentRegistryActions <a name="AgentRegistryActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions"></a>

IAM action constants for the agent-registry service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

new agent_registry.AgentRegistryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetDiscoverableRegistryRecord">actionGetDiscoverableRegistryRecord</a></code> | <code>string</code> | [Read] agent-registry:GetDiscoverableRegistryRecord. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetRegistry">actionGetRegistry</a></code> | <code>string</code> | [Read] agent-registry:GetRegistry. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetRegistryRecord">actionGetRegistryRecord</a></code> | <code>string</code> | [Read] agent-registry:GetRegistryRecord. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] agent-registry:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.CreateRegistry">CreateRegistry</a></code> | <code>string</code> | [Write] agent-registry:CreateRegistry. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.CreateRegistryRecord">CreateRegistryRecord</a></code> | <code>string</code> | [Write] agent-registry:CreateRegistryRecord. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string</code> | [Write] agent-registry:DeleteRegistry. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteRegistryRecord">DeleteRegistryRecord</a></code> | <code>string</code> | [Write] agent-registry:DeleteRegistryRecord. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] agent-registry:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.InvokeRegistryMcp">InvokeRegistryMcp</a></code> | <code>string</code> | [Read] agent-registry:InvokeRegistryMcp. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListDiscoverableRegistryRecords">ListDiscoverableRegistryRecords</a></code> | <code>string</code> | [List] agent-registry:ListDiscoverableRegistryRecords. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListRegistries">ListRegistries</a></code> | <code>string</code> | [List] agent-registry:ListRegistries. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListRegistryRecords">ListRegistryRecords</a></code> | <code>string</code> | [List] agent-registry:ListRegistryRecords. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] agent-registry:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] agent-registry:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SearchDiscoverableRegistryRecords">SearchDiscoverableRegistryRecords</a></code> | <code>string</code> | [Read] agent-registry:SearchDiscoverableRegistryRecords. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SubmitRegistryRecordForApproval">SubmitRegistryRecordForApproval</a></code> | <code>string</code> | [Write] agent-registry:SubmitRegistryRecordForApproval. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] agent-registry:TagResource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] agent-registry:UntagResource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string</code> | [Write] agent-registry:UpdateRegistry. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistryRecord">UpdateRegistryRecord</a></code> | <code>string</code> | [Write] agent-registry:UpdateRegistryRecord. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistryRecordStatus">UpdateRegistryRecordStatus</a></code> | <code>string</code> | [Write] agent-registry:UpdateRegistryRecordStatus. |

---

##### `actionGetDiscoverableRegistryRecord`<sup>Required</sup> <a name="actionGetDiscoverableRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetDiscoverableRegistryRecord"></a>

```typescript
public readonly actionGetDiscoverableRegistryRecord: string;
```

- *Type:* string

[Read] agent-registry:GetDiscoverableRegistryRecord.

---

##### `actionGetRegistry`<sup>Required</sup> <a name="actionGetRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetRegistry"></a>

```typescript
public readonly actionGetRegistry: string;
```

- *Type:* string

[Read] agent-registry:GetRegistry.

---

##### `actionGetRegistryRecord`<sup>Required</sup> <a name="actionGetRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetRegistryRecord"></a>

```typescript
public readonly actionGetRegistryRecord: string;
```

- *Type:* string

[Read] agent-registry:GetRegistryRecord.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] agent-registry:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string;
```

- *Type:* string

[Write] agent-registry:CreateRegistry.

---

##### `CreateRegistryRecord`<sup>Required</sup> <a name="CreateRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.CreateRegistryRecord"></a>

```typescript
public readonly CreateRegistryRecord: string;
```

- *Type:* string

[Write] agent-registry:CreateRegistryRecord.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string;
```

- *Type:* string

[Write] agent-registry:DeleteRegistry.

---

##### `DeleteRegistryRecord`<sup>Required</sup> <a name="DeleteRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteRegistryRecord"></a>

```typescript
public readonly DeleteRegistryRecord: string;
```

- *Type:* string

[Write] agent-registry:DeleteRegistryRecord.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] agent-registry:DeleteResourcePolicy.

---

##### `InvokeRegistryMcp`<sup>Required</sup> <a name="InvokeRegistryMcp" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.InvokeRegistryMcp"></a>

```typescript
public readonly InvokeRegistryMcp: string;
```

- *Type:* string

[Read] agent-registry:InvokeRegistryMcp.

---

##### `ListDiscoverableRegistryRecords`<sup>Required</sup> <a name="ListDiscoverableRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListDiscoverableRegistryRecords"></a>

```typescript
public readonly ListDiscoverableRegistryRecords: string;
```

- *Type:* string

[List] agent-registry:ListDiscoverableRegistryRecords.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string;
```

- *Type:* string

[List] agent-registry:ListRegistries.

---

##### `ListRegistryRecords`<sup>Required</sup> <a name="ListRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListRegistryRecords"></a>

```typescript
public readonly ListRegistryRecords: string;
```

- *Type:* string

[List] agent-registry:ListRegistryRecords.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] agent-registry:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] agent-registry:PutResourcePolicy.

---

##### `SearchDiscoverableRegistryRecords`<sup>Required</sup> <a name="SearchDiscoverableRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SearchDiscoverableRegistryRecords"></a>

```typescript
public readonly SearchDiscoverableRegistryRecords: string;
```

- *Type:* string

[Read] agent-registry:SearchDiscoverableRegistryRecords.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SubmitRegistryRecordForApproval`<sup>Required</sup> <a name="SubmitRegistryRecordForApproval" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.SubmitRegistryRecordForApproval"></a>

```typescript
public readonly SubmitRegistryRecordForApproval: string;
```

- *Type:* string

[Write] agent-registry:SubmitRegistryRecordForApproval.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] agent-registry:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] agent-registry:UntagResource.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string;
```

- *Type:* string

[Write] agent-registry:UpdateRegistry.

---

##### `UpdateRegistryRecord`<sup>Required</sup> <a name="UpdateRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistryRecord"></a>

```typescript
public readonly UpdateRegistryRecord: string;
```

- *Type:* string

[Write] agent-registry:UpdateRegistryRecord.

---

##### `UpdateRegistryRecordStatus`<sup>Required</sup> <a name="UpdateRegistryRecordStatus" id="@cdk_utils/iam.agent_registry.AgentRegistryActions.property.UpdateRegistryRecordStatus"></a>

```typescript
public readonly UpdateRegistryRecordStatus: string;
```

- *Type:* string

[Write] agent-registry:UpdateRegistryRecordStatus.

---

### AgentRegistryConditions <a name="AgentRegistryConditions" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions"></a>

Condition key constants and builders for agent-registry.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

new agent_registry.AgentRegistryConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordCreatorAccount">recordCreatorAccount</a></code> | Generates a condition block for `agent-registry:RecordCreatorAccount`. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordSourceAccount">recordSourceAccount</a></code> | Generates a condition block for `agent-registry:RecordSourceAccount`. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `recordCreatorAccount` <a name="recordCreatorAccount" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordCreatorAccount"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryConditions.recordCreatorAccount(value: string)
```

Generates a condition block for `agent-registry:RecordCreatorAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordCreatorAccount.parameter.value"></a>

- *Type:* string

---

##### `recordSourceAccount` <a name="recordSourceAccount" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordSourceAccount"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryConditions.recordSourceAccount(value: string)
```

Generates a condition block for `agent-registry:RecordSourceAccount`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.recordSourceAccount.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.requestTag"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.resourceTag"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.tagKeys"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.CreateRegistryConditionKeys">CreateRegistryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistry action. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.CreateRegistryRecordConditionKeys">CreateRegistryRecordConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRegistryRecord action. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.RECORD_CREATOR_ACCOUNT">RECORD_CREATOR_ACCOUNT</a></code> | <code>string</code> | Condition key: agent-registry:RecordCreatorAccount (String). |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.RECORD_SOURCE_ACCOUNT">RECORD_SOURCE_ACCOUNT</a></code> | <code>string</code> | Condition key: agent-registry:RecordSourceAccount (String). |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRegistryConditionKeys`<sup>Required</sup> <a name="CreateRegistryConditionKeys" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.CreateRegistryConditionKeys"></a>

```typescript
public readonly CreateRegistryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistry action.

---

##### `CreateRegistryRecordConditionKeys`<sup>Required</sup> <a name="CreateRegistryRecordConditionKeys" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.CreateRegistryRecordConditionKeys"></a>

```typescript
public readonly CreateRegistryRecordConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRegistryRecord action.

---

##### `RECORD_CREATOR_ACCOUNT`<sup>Required</sup> <a name="RECORD_CREATOR_ACCOUNT" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.RECORD_CREATOR_ACCOUNT"></a>

```typescript
public readonly RECORD_CREATOR_ACCOUNT: string;
```

- *Type:* string

Condition key: agent-registry:RecordCreatorAccount (String).

---

##### `RECORD_SOURCE_ACCOUNT`<sup>Required</sup> <a name="RECORD_SOURCE_ACCOUNT" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.RECORD_SOURCE_ACCOUNT"></a>

```typescript
public readonly RECORD_SOURCE_ACCOUNT: string;
```

- *Type:* string

Condition key: agent-registry:RecordSourceAccount (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.agent_registry.AgentRegistryConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AgentRegistryOperations <a name="AgentRegistryOperations" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations"></a>

API operation to required IAM actions mapping for agent-registry.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

new agent_registry.AgentRegistryOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.BatchGetDiscoverableRegistryRecord">BatchGetDiscoverableRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the BatchGetDiscoverableRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.CreateRegistry">CreateRegistry</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistry API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.CreateRegistryRecord">CreateRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.DeleteRegistry">DeleteRegistry</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistry API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.DeleteRegistryRecord">DeleteRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListDiscoverableRegistryRecords">ListDiscoverableRegistryRecords</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoverableRegistryRecords API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListRegistries">ListRegistries</a></code> | <code>string[]</code> | IAM actions required for the ListRegistries API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListRegistryRecords">ListRegistryRecords</a></code> | <code>string[]</code> | IAM actions required for the ListRegistryRecords API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.opGetRegistry">opGetRegistry</a></code> | <code>string[]</code> | IAM actions required for the GetRegistry API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.opGetRegistryRecord">opGetRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the GetRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.SearchDiscoverableRegistryRecords">SearchDiscoverableRegistryRecords</a></code> | <code>string[]</code> | IAM actions required for the SearchDiscoverableRegistryRecords API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.SubmitRegistryRecordForApproval">SubmitRegistryRecordForApproval</a></code> | <code>string[]</code> | IAM actions required for the SubmitRegistryRecordForApproval API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistry">UpdateRegistry</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistry API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistryRecord">UpdateRegistryRecord</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistryRecord API call. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistryRecordStatus">UpdateRegistryRecordStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistryRecordStatus API call. |

---

##### `BatchGetDiscoverableRegistryRecord`<sup>Required</sup> <a name="BatchGetDiscoverableRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.BatchGetDiscoverableRegistryRecord"></a>

```typescript
public readonly BatchGetDiscoverableRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetDiscoverableRegistryRecord API call.

---

##### `CreateRegistry`<sup>Required</sup> <a name="CreateRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.CreateRegistry"></a>

```typescript
public readonly CreateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistry API call.

---

##### `CreateRegistryRecord`<sup>Required</sup> <a name="CreateRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.CreateRegistryRecord"></a>

```typescript
public readonly CreateRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistryRecord API call.

---

##### `DeleteRegistry`<sup>Required</sup> <a name="DeleteRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.DeleteRegistry"></a>

```typescript
public readonly DeleteRegistry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistry API call.

---

##### `DeleteRegistryRecord`<sup>Required</sup> <a name="DeleteRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.DeleteRegistryRecord"></a>

```typescript
public readonly DeleteRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegistryRecord API call.

---

##### `ListDiscoverableRegistryRecords`<sup>Required</sup> <a name="ListDiscoverableRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListDiscoverableRegistryRecords"></a>

```typescript
public readonly ListDiscoverableRegistryRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoverableRegistryRecords API call.

---

##### `ListRegistries`<sup>Required</sup> <a name="ListRegistries" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListRegistries"></a>

```typescript
public readonly ListRegistries: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistries API call.

---

##### `ListRegistryRecords`<sup>Required</sup> <a name="ListRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListRegistryRecords"></a>

```typescript
public readonly ListRegistryRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistryRecords API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetRegistry`<sup>Required</sup> <a name="opGetRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.opGetRegistry"></a>

```typescript
public readonly opGetRegistry: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistry API call.

---

##### `opGetRegistryRecord`<sup>Required</sup> <a name="opGetRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.opGetRegistryRecord"></a>

```typescript
public readonly opGetRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetRegistryRecord API call.

---

##### `SearchDiscoverableRegistryRecords`<sup>Required</sup> <a name="SearchDiscoverableRegistryRecords" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.SearchDiscoverableRegistryRecords"></a>

```typescript
public readonly SearchDiscoverableRegistryRecords: string[];
```

- *Type:* string[]

IAM actions required for the SearchDiscoverableRegistryRecords API call.

---

##### `SubmitRegistryRecordForApproval`<sup>Required</sup> <a name="SubmitRegistryRecordForApproval" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.SubmitRegistryRecordForApproval"></a>

```typescript
public readonly SubmitRegistryRecordForApproval: string[];
```

- *Type:* string[]

IAM actions required for the SubmitRegistryRecordForApproval API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateRegistry`<sup>Required</sup> <a name="UpdateRegistry" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistry"></a>

```typescript
public readonly UpdateRegistry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistry API call.

---

##### `UpdateRegistryRecord`<sup>Required</sup> <a name="UpdateRegistryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistryRecord"></a>

```typescript
public readonly UpdateRegistryRecord: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistryRecord API call.

---

##### `UpdateRegistryRecordStatus`<sup>Required</sup> <a name="UpdateRegistryRecordStatus" id="@cdk_utils/iam.agent_registry.AgentRegistryOperations.property.UpdateRegistryRecordStatus"></a>

```typescript
public readonly UpdateRegistryRecordStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistryRecordStatus API call.

---

### AgentRegistryResources <a name="AgentRegistryResources" id="@cdk_utils/iam.agent_registry.AgentRegistryResources"></a>

ARN builders, validators, and parsers for agent-registry resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.Initializer"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

new agent_registry.AgentRegistryResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryArn">isValidRegistryArn</a></code> | Validates whether a string is a valid ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryRecordArn">isValidRegistryRecordArn</a></code> | Validates whether a string is a valid ARN for the registry-record resource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryArn">parseRegistryArn</a></code> | Parses a registry ARN into its components. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryRecordArn">parseRegistryRecordArn</a></code> | Parses a registry-record ARN into its components. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.registry">registry</a></code> | Builds an ARN for the registry resource. |
| <code><a href="#@cdk_utils/iam.agent_registry.AgentRegistryResources.registryRecord">registryRecord</a></code> | Builds an ARN for the registry-record resource. |

---

##### `isValidRegistryArn` <a name="isValidRegistryArn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryArn"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.isValidRegistryArn(arn: string)
```

Validates whether a string is a valid ARN for the registry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegistryRecordArn` <a name="isValidRegistryRecordArn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryRecordArn"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.isValidRegistryRecordArn(arn: string)
```

Validates whether a string is a valid ARN for the registry-record resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.isValidRegistryRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryArn` <a name="parseRegistryArn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryArn"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.parseRegistryArn(arn: string)
```

Parses a registry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegistryRecordArn` <a name="parseRegistryRecordArn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryRecordArn"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.parseRegistryRecordArn(arn: string)
```

Parses a registry-record ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.parseRegistryRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `registry` <a name="registry" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.registry"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.registry(props: AgentRegistryRegistryArnProps)
```

Builds an ARN for the registry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.registry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryArnProps">AgentRegistryRegistryArnProps</a>

---

##### `registryRecord` <a name="registryRecord" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.registryRecord"></a>

```typescript
import { agent_registry } from '@cdk_utils/iam'

agent_registry.AgentRegistryResources.registryRecord(props: AgentRegistryRegistryRecordArnProps)
```

Builds an ARN for the registry-record resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.agent_registry.AgentRegistryResources.registryRecord.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.agent_registry.AgentRegistryRegistryRecordArnProps">AgentRegistryRegistryRecordArnProps</a>

---




