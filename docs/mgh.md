# `mgh` Submodule <a name="`mgh` Submodule" id="@cdk_utils/iam.mgh"></a>


## Structs <a name="Structs" id="Structs"></a>

### MghAutomationRunResourceArnComponents <a name="MghAutomationRunResourceArnComponents" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents"></a>

Parsed components of a AutomationRunResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghAutomationRunResourceArnComponents: mgh.MghAutomationRunResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.runId">runId</a></code> | <code>string</code> | The RunID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `runId`<sup>Required</sup> <a name="runId" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnComponents.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

The RunID component.

---

### MghAutomationRunResourceArnProps <a name="MghAutomationRunResourceArnProps" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps"></a>

Properties for building a AutomationRunResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghAutomationRunResourceArnProps: mgh.MghAutomationRunResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.runId">runId</a></code> | <code>string</code> | The RunID component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `runId`<sup>Required</sup> <a name="runId" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.runId"></a>

```typescript
public readonly runId: string;
```

- *Type:* string

The RunID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MghAutomationUnitResourceArnComponents <a name="MghAutomationUnitResourceArnComponents" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents"></a>

Parsed components of a AutomationUnitResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghAutomationUnitResourceArnComponents: mgh.MghAutomationUnitResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.automationUnitId">automationUnitId</a></code> | <code>string</code> | The AutomationUnitId component. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationUnitId`<sup>Required</sup> <a name="automationUnitId" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.automationUnitId"></a>

```typescript
public readonly automationUnitId: string;
```

- *Type:* string

The AutomationUnitId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MghAutomationUnitResourceArnProps <a name="MghAutomationUnitResourceArnProps" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps"></a>

Properties for building a AutomationUnitResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghAutomationUnitResourceArnProps: mgh.MghAutomationUnitResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.automationUnitId">automationUnitId</a></code> | <code>string</code> | The AutomationUnitId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationUnitId`<sup>Required</sup> <a name="automationUnitId" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.automationUnitId"></a>

```typescript
public readonly automationUnitId: string;
```

- *Type:* string

The AutomationUnitId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MghConnectionResourceArnComponents <a name="MghConnectionResourceArnComponents" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents"></a>

Parsed components of a ConnectionResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghConnectionResourceArnComponents: mgh.MghConnectionResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.connectionARN">connectionARN</a></code> | <code>string</code> | The ConnectionArn component. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionARN`<sup>Required</sup> <a name="connectionARN" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.connectionARN"></a>

```typescript
public readonly connectionARN: string;
```

- *Type:* string

The ConnectionArn component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgh.MghConnectionResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MghConnectionResourceArnProps <a name="MghConnectionResourceArnProps" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps"></a>

Properties for building a ConnectionResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghConnectionResourceArnProps: mgh.MghConnectionResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.connectionARN">connectionARN</a></code> | <code>string</code> | The ConnectionArn component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionARN`<sup>Required</sup> <a name="connectionARN" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.connectionARN"></a>

```typescript
public readonly connectionARN: string;
```

- *Type:* string

The ConnectionArn component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgh.MghConnectionResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MghMigrationTaskArnComponents <a name="MghMigrationTaskArnComponents" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents"></a>

Parsed components of a migrationTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghMigrationTaskArnComponents: mgh.MghMigrationTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.stream">stream</a></code> | <code>string</code> | The Stream component. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.task">task</a></code> | <code>string</code> | The Task component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

The Stream component.

---

##### `task`<sup>Required</sup> <a name="task" id="@cdk_utils/iam.mgh.MghMigrationTaskArnComponents.property.task"></a>

```typescript
public readonly task: string;
```

- *Type:* string

The Task component.

---

### MghMigrationTaskArnProps <a name="MghMigrationTaskArnProps" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps"></a>

Properties for building a migrationTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghMigrationTaskArnProps: mgh.MghMigrationTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.stream">stream</a></code> | <code>string</code> | The Stream component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.task">task</a></code> | <code>string</code> | The Task component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

The Stream component of the ARN.

---

##### `task`<sup>Required</sup> <a name="task" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.task"></a>

```typescript
public readonly task: string;
```

- *Type:* string

The Task component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgh.MghMigrationTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MghProgressUpdateStreamArnComponents <a name="MghProgressUpdateStreamArnComponents" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents"></a>

Parsed components of a progressUpdateStream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghProgressUpdateStreamArnComponents: mgh.MghProgressUpdateStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.stream">stream</a></code> | <code>string</code> | The Stream component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnComponents.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

The Stream component.

---

### MghProgressUpdateStreamArnProps <a name="MghProgressUpdateStreamArnProps" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps"></a>

Properties for building a progressUpdateStream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

const mghProgressUpdateStreamArnProps: mgh.MghProgressUpdateStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.stream">stream</a></code> | <code>string</code> | The Stream component of the ARN. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

The Stream component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MghActions <a name="MghActions" id="@cdk_utils/iam.mgh.MghActions"></a>

IAM action constants for the mgh service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgh.MghActions.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

new mgh.MghActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AcceptConnection">AcceptConnection</a></code> | <code>string</code> | [Write] mgh:AcceptConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] mgh:GetConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.actionGetHomeRegion">actionGetHomeRegion</a></code> | <code>string</code> | [Read] mgh:GetHomeRegion. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AssociateAutomationUnitRole">AssociateAutomationUnitRole</a></code> | <code>string</code> | [Write] mgh:AssociateAutomationUnitRole. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AssociateCreatedArtifact">AssociateCreatedArtifact</a></code> | <code>string</code> | [Write] mgh:AssociateCreatedArtifact. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AssociateDiscoveredResource">AssociateDiscoveredResource</a></code> | <code>string</code> | [Write] mgh:AssociateDiscoveredResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.AssociateSourceResource">AssociateSourceResource</a></code> | <code>string</code> | [Write] mgh:AssociateSourceResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.BatchAssociateIamRoleWithConnection">BatchAssociateIamRoleWithConnection</a></code> | <code>string</code> | [Write] mgh:BatchAssociateIamRoleWithConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.BatchDisassociateIamRoleFromConnection">BatchDisassociateIamRoleFromConnection</a></code> | <code>string</code> | [Write] mgh:BatchDisassociateIamRoleFromConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.CreateAutomationRun">CreateAutomationRun</a></code> | <code>string</code> | [Write] mgh:CreateAutomationRun. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.CreateAutomationUnit">CreateAutomationUnit</a></code> | <code>string</code> | [Write] mgh:CreateAutomationUnit. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.CreateHomeRegionControl">CreateHomeRegionControl</a></code> | <code>string</code> | [Write] mgh:CreateHomeRegionControl. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.CreateProgressUpdateStream">CreateProgressUpdateStream</a></code> | <code>string</code> | [Write] mgh:CreateProgressUpdateStream. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DeleteAutomationRun">DeleteAutomationRun</a></code> | <code>string</code> | [Write] mgh:DeleteAutomationRun. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DeleteAutomationUnit">DeleteAutomationUnit</a></code> | <code>string</code> | [Write] mgh:DeleteAutomationUnit. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] mgh:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DeleteHomeRegionControl">DeleteHomeRegionControl</a></code> | <code>string</code> | [Write] mgh:DeleteHomeRegionControl. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DeleteProgressUpdateStream">DeleteProgressUpdateStream</a></code> | <code>string</code> | [Write] mgh:DeleteProgressUpdateStream. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DescribeApplicationState">DescribeApplicationState</a></code> | <code>string</code> | [Read] mgh:DescribeApplicationState. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DescribeAutomationRun">DescribeAutomationRun</a></code> | <code>string</code> | [Read] mgh:DescribeAutomationRun. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DescribeAutomationUnit">DescribeAutomationUnit</a></code> | <code>string</code> | [Read] mgh:DescribeAutomationUnit. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DescribeHomeRegionControls">DescribeHomeRegionControls</a></code> | <code>string</code> | [List] mgh:DescribeHomeRegionControls. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DescribeMigrationTask">DescribeMigrationTask</a></code> | <code>string</code> | [Read] mgh:DescribeMigrationTask. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DisassociateAutomationUnitRole">DisassociateAutomationUnitRole</a></code> | <code>string</code> | [Write] mgh:DisassociateAutomationUnitRole. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DisassociateCreatedArtifact">DisassociateCreatedArtifact</a></code> | <code>string</code> | [Write] mgh:DisassociateCreatedArtifact. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DisassociateDiscoveredResource">DisassociateDiscoveredResource</a></code> | <code>string</code> | [Write] mgh:DisassociateDiscoveredResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.DisassociateSourceResource">DisassociateSourceResource</a></code> | <code>string</code> | [Write] mgh:DisassociateSourceResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ImportMigrationTask">ImportMigrationTask</a></code> | <code>string</code> | [Write] mgh:ImportMigrationTask. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListApplicationStates">ListApplicationStates</a></code> | <code>string</code> | [List] mgh:ListApplicationStates. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListAutomationRuns">ListAutomationRuns</a></code> | <code>string</code> | [List] mgh:ListAutomationRuns. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListAutomationUnits">ListAutomationUnits</a></code> | <code>string</code> | [List] mgh:ListAutomationUnits. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListConnectionRoles">ListConnectionRoles</a></code> | <code>string</code> | [List] mgh:ListConnectionRoles. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] mgh:ListConnections. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListCreatedArtifacts">ListCreatedArtifacts</a></code> | <code>string</code> | [List] mgh:ListCreatedArtifacts. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string</code> | [List] mgh:ListDiscoveredResources. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListMigrationTasks">ListMigrationTasks</a></code> | <code>string</code> | [List] mgh:ListMigrationTasks. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListMigrationTaskUpdates">ListMigrationTaskUpdates</a></code> | <code>string</code> | [List] mgh:ListMigrationTaskUpdates. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListProgressUpdateStreams">ListProgressUpdateStreams</a></code> | <code>string</code> | [List] mgh:ListProgressUpdateStreams. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListSourceResources">ListSourceResources</a></code> | <code>string</code> | [List] mgh:ListSourceResources. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] mgh:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.NotifyApplicationState">NotifyApplicationState</a></code> | <code>string</code> | [Write] mgh:NotifyApplicationState. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.NotifyMigrationTaskState">NotifyMigrationTaskState</a></code> | <code>string</code> | [Write] mgh:NotifyMigrationTaskState. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.PutResourceAttributes">PutResourceAttributes</a></code> | <code>string</code> | [Write] mgh:PutResourceAttributes. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.RejectConnection">RejectConnection</a></code> | <code>string</code> | [Write] mgh:RejectConnection. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mgh:TagResource. |
| <code><a href="#@cdk_utils/iam.mgh.MghActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mgh:UntagResource. |

---

##### `AcceptConnection`<sup>Required</sup> <a name="AcceptConnection" id="@cdk_utils/iam.mgh.MghActions.property.AcceptConnection"></a>

```typescript
public readonly AcceptConnection: string;
```

- *Type:* string

[Write] mgh:AcceptConnection.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.mgh.MghActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] mgh:GetConnection.

---

##### `actionGetHomeRegion`<sup>Required</sup> <a name="actionGetHomeRegion" id="@cdk_utils/iam.mgh.MghActions.property.actionGetHomeRegion"></a>

```typescript
public readonly actionGetHomeRegion: string;
```

- *Type:* string

[Read] mgh:GetHomeRegion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mgh.MghActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mgh.MghActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mgh.MghActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mgh.MghActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mgh.MghActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAutomationUnitRole`<sup>Required</sup> <a name="AssociateAutomationUnitRole" id="@cdk_utils/iam.mgh.MghActions.property.AssociateAutomationUnitRole"></a>

```typescript
public readonly AssociateAutomationUnitRole: string;
```

- *Type:* string

[Write] mgh:AssociateAutomationUnitRole.

---

##### `AssociateCreatedArtifact`<sup>Required</sup> <a name="AssociateCreatedArtifact" id="@cdk_utils/iam.mgh.MghActions.property.AssociateCreatedArtifact"></a>

```typescript
public readonly AssociateCreatedArtifact: string;
```

- *Type:* string

[Write] mgh:AssociateCreatedArtifact.

---

##### `AssociateDiscoveredResource`<sup>Required</sup> <a name="AssociateDiscoveredResource" id="@cdk_utils/iam.mgh.MghActions.property.AssociateDiscoveredResource"></a>

```typescript
public readonly AssociateDiscoveredResource: string;
```

- *Type:* string

[Write] mgh:AssociateDiscoveredResource.

---

##### `AssociateSourceResource`<sup>Required</sup> <a name="AssociateSourceResource" id="@cdk_utils/iam.mgh.MghActions.property.AssociateSourceResource"></a>

```typescript
public readonly AssociateSourceResource: string;
```

- *Type:* string

[Write] mgh:AssociateSourceResource.

---

##### `BatchAssociateIamRoleWithConnection`<sup>Required</sup> <a name="BatchAssociateIamRoleWithConnection" id="@cdk_utils/iam.mgh.MghActions.property.BatchAssociateIamRoleWithConnection"></a>

```typescript
public readonly BatchAssociateIamRoleWithConnection: string;
```

- *Type:* string

[Write] mgh:BatchAssociateIamRoleWithConnection.

---

##### `BatchDisassociateIamRoleFromConnection`<sup>Required</sup> <a name="BatchDisassociateIamRoleFromConnection" id="@cdk_utils/iam.mgh.MghActions.property.BatchDisassociateIamRoleFromConnection"></a>

```typescript
public readonly BatchDisassociateIamRoleFromConnection: string;
```

- *Type:* string

[Write] mgh:BatchDisassociateIamRoleFromConnection.

---

##### `CreateAutomationRun`<sup>Required</sup> <a name="CreateAutomationRun" id="@cdk_utils/iam.mgh.MghActions.property.CreateAutomationRun"></a>

```typescript
public readonly CreateAutomationRun: string;
```

- *Type:* string

[Write] mgh:CreateAutomationRun.

---

##### `CreateAutomationUnit`<sup>Required</sup> <a name="CreateAutomationUnit" id="@cdk_utils/iam.mgh.MghActions.property.CreateAutomationUnit"></a>

```typescript
public readonly CreateAutomationUnit: string;
```

- *Type:* string

[Write] mgh:CreateAutomationUnit.

---

##### `CreateHomeRegionControl`<sup>Required</sup> <a name="CreateHomeRegionControl" id="@cdk_utils/iam.mgh.MghActions.property.CreateHomeRegionControl"></a>

```typescript
public readonly CreateHomeRegionControl: string;
```

- *Type:* string

[Write] mgh:CreateHomeRegionControl.

---

##### `CreateProgressUpdateStream`<sup>Required</sup> <a name="CreateProgressUpdateStream" id="@cdk_utils/iam.mgh.MghActions.property.CreateProgressUpdateStream"></a>

```typescript
public readonly CreateProgressUpdateStream: string;
```

- *Type:* string

[Write] mgh:CreateProgressUpdateStream.

---

##### `DeleteAutomationRun`<sup>Required</sup> <a name="DeleteAutomationRun" id="@cdk_utils/iam.mgh.MghActions.property.DeleteAutomationRun"></a>

```typescript
public readonly DeleteAutomationRun: string;
```

- *Type:* string

[Write] mgh:DeleteAutomationRun.

---

##### `DeleteAutomationUnit`<sup>Required</sup> <a name="DeleteAutomationUnit" id="@cdk_utils/iam.mgh.MghActions.property.DeleteAutomationUnit"></a>

```typescript
public readonly DeleteAutomationUnit: string;
```

- *Type:* string

[Write] mgh:DeleteAutomationUnit.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.mgh.MghActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] mgh:DeleteConnection.

---

##### `DeleteHomeRegionControl`<sup>Required</sup> <a name="DeleteHomeRegionControl" id="@cdk_utils/iam.mgh.MghActions.property.DeleteHomeRegionControl"></a>

```typescript
public readonly DeleteHomeRegionControl: string;
```

- *Type:* string

[Write] mgh:DeleteHomeRegionControl.

---

##### `DeleteProgressUpdateStream`<sup>Required</sup> <a name="DeleteProgressUpdateStream" id="@cdk_utils/iam.mgh.MghActions.property.DeleteProgressUpdateStream"></a>

```typescript
public readonly DeleteProgressUpdateStream: string;
```

- *Type:* string

[Write] mgh:DeleteProgressUpdateStream.

---

##### `DescribeApplicationState`<sup>Required</sup> <a name="DescribeApplicationState" id="@cdk_utils/iam.mgh.MghActions.property.DescribeApplicationState"></a>

```typescript
public readonly DescribeApplicationState: string;
```

- *Type:* string

[Read] mgh:DescribeApplicationState.

---

##### `DescribeAutomationRun`<sup>Required</sup> <a name="DescribeAutomationRun" id="@cdk_utils/iam.mgh.MghActions.property.DescribeAutomationRun"></a>

```typescript
public readonly DescribeAutomationRun: string;
```

- *Type:* string

[Read] mgh:DescribeAutomationRun.

---

##### `DescribeAutomationUnit`<sup>Required</sup> <a name="DescribeAutomationUnit" id="@cdk_utils/iam.mgh.MghActions.property.DescribeAutomationUnit"></a>

```typescript
public readonly DescribeAutomationUnit: string;
```

- *Type:* string

[Read] mgh:DescribeAutomationUnit.

---

##### `DescribeHomeRegionControls`<sup>Required</sup> <a name="DescribeHomeRegionControls" id="@cdk_utils/iam.mgh.MghActions.property.DescribeHomeRegionControls"></a>

```typescript
public readonly DescribeHomeRegionControls: string;
```

- *Type:* string

[List] mgh:DescribeHomeRegionControls.

---

##### `DescribeMigrationTask`<sup>Required</sup> <a name="DescribeMigrationTask" id="@cdk_utils/iam.mgh.MghActions.property.DescribeMigrationTask"></a>

```typescript
public readonly DescribeMigrationTask: string;
```

- *Type:* string

[Read] mgh:DescribeMigrationTask.

---

##### `DisassociateAutomationUnitRole`<sup>Required</sup> <a name="DisassociateAutomationUnitRole" id="@cdk_utils/iam.mgh.MghActions.property.DisassociateAutomationUnitRole"></a>

```typescript
public readonly DisassociateAutomationUnitRole: string;
```

- *Type:* string

[Write] mgh:DisassociateAutomationUnitRole.

---

##### `DisassociateCreatedArtifact`<sup>Required</sup> <a name="DisassociateCreatedArtifact" id="@cdk_utils/iam.mgh.MghActions.property.DisassociateCreatedArtifact"></a>

```typescript
public readonly DisassociateCreatedArtifact: string;
```

- *Type:* string

[Write] mgh:DisassociateCreatedArtifact.

---

##### `DisassociateDiscoveredResource`<sup>Required</sup> <a name="DisassociateDiscoveredResource" id="@cdk_utils/iam.mgh.MghActions.property.DisassociateDiscoveredResource"></a>

```typescript
public readonly DisassociateDiscoveredResource: string;
```

- *Type:* string

[Write] mgh:DisassociateDiscoveredResource.

---

##### `DisassociateSourceResource`<sup>Required</sup> <a name="DisassociateSourceResource" id="@cdk_utils/iam.mgh.MghActions.property.DisassociateSourceResource"></a>

```typescript
public readonly DisassociateSourceResource: string;
```

- *Type:* string

[Write] mgh:DisassociateSourceResource.

---

##### `ImportMigrationTask`<sup>Required</sup> <a name="ImportMigrationTask" id="@cdk_utils/iam.mgh.MghActions.property.ImportMigrationTask"></a>

```typescript
public readonly ImportMigrationTask: string;
```

- *Type:* string

[Write] mgh:ImportMigrationTask.

---

##### `ListApplicationStates`<sup>Required</sup> <a name="ListApplicationStates" id="@cdk_utils/iam.mgh.MghActions.property.ListApplicationStates"></a>

```typescript
public readonly ListApplicationStates: string;
```

- *Type:* string

[List] mgh:ListApplicationStates.

---

##### `ListAutomationRuns`<sup>Required</sup> <a name="ListAutomationRuns" id="@cdk_utils/iam.mgh.MghActions.property.ListAutomationRuns"></a>

```typescript
public readonly ListAutomationRuns: string;
```

- *Type:* string

[List] mgh:ListAutomationRuns.

---

##### `ListAutomationUnits`<sup>Required</sup> <a name="ListAutomationUnits" id="@cdk_utils/iam.mgh.MghActions.property.ListAutomationUnits"></a>

```typescript
public readonly ListAutomationUnits: string;
```

- *Type:* string

[List] mgh:ListAutomationUnits.

---

##### `ListConnectionRoles`<sup>Required</sup> <a name="ListConnectionRoles" id="@cdk_utils/iam.mgh.MghActions.property.ListConnectionRoles"></a>

```typescript
public readonly ListConnectionRoles: string;
```

- *Type:* string

[List] mgh:ListConnectionRoles.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.mgh.MghActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] mgh:ListConnections.

---

##### `ListCreatedArtifacts`<sup>Required</sup> <a name="ListCreatedArtifacts" id="@cdk_utils/iam.mgh.MghActions.property.ListCreatedArtifacts"></a>

```typescript
public readonly ListCreatedArtifacts: string;
```

- *Type:* string

[List] mgh:ListCreatedArtifacts.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.mgh.MghActions.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string;
```

- *Type:* string

[List] mgh:ListDiscoveredResources.

---

##### `ListMigrationTasks`<sup>Required</sup> <a name="ListMigrationTasks" id="@cdk_utils/iam.mgh.MghActions.property.ListMigrationTasks"></a>

```typescript
public readonly ListMigrationTasks: string;
```

- *Type:* string

[List] mgh:ListMigrationTasks.

---

##### `ListMigrationTaskUpdates`<sup>Required</sup> <a name="ListMigrationTaskUpdates" id="@cdk_utils/iam.mgh.MghActions.property.ListMigrationTaskUpdates"></a>

```typescript
public readonly ListMigrationTaskUpdates: string;
```

- *Type:* string

[List] mgh:ListMigrationTaskUpdates.

---

##### `ListProgressUpdateStreams`<sup>Required</sup> <a name="ListProgressUpdateStreams" id="@cdk_utils/iam.mgh.MghActions.property.ListProgressUpdateStreams"></a>

```typescript
public readonly ListProgressUpdateStreams: string;
```

- *Type:* string

[List] mgh:ListProgressUpdateStreams.

---

##### `ListSourceResources`<sup>Required</sup> <a name="ListSourceResources" id="@cdk_utils/iam.mgh.MghActions.property.ListSourceResources"></a>

```typescript
public readonly ListSourceResources: string;
```

- *Type:* string

[List] mgh:ListSourceResources.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mgh.MghActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] mgh:ListTagsForResource.

---

##### `NotifyApplicationState`<sup>Required</sup> <a name="NotifyApplicationState" id="@cdk_utils/iam.mgh.MghActions.property.NotifyApplicationState"></a>

```typescript
public readonly NotifyApplicationState: string;
```

- *Type:* string

[Write] mgh:NotifyApplicationState.

---

##### `NotifyMigrationTaskState`<sup>Required</sup> <a name="NotifyMigrationTaskState" id="@cdk_utils/iam.mgh.MghActions.property.NotifyMigrationTaskState"></a>

```typescript
public readonly NotifyMigrationTaskState: string;
```

- *Type:* string

[Write] mgh:NotifyMigrationTaskState.

---

##### `PutResourceAttributes`<sup>Required</sup> <a name="PutResourceAttributes" id="@cdk_utils/iam.mgh.MghActions.property.PutResourceAttributes"></a>

```typescript
public readonly PutResourceAttributes: string;
```

- *Type:* string

[Write] mgh:PutResourceAttributes.

---

##### `RejectConnection`<sup>Required</sup> <a name="RejectConnection" id="@cdk_utils/iam.mgh.MghActions.property.RejectConnection"></a>

```typescript
public readonly RejectConnection: string;
```

- *Type:* string

[Write] mgh:RejectConnection.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mgh.MghActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mgh.MghActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mgh:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mgh.MghActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mgh:UntagResource.

---

### MghConditions <a name="MghConditions" id="@cdk_utils/iam.mgh.MghConditions"></a>

Condition key constants and builders for mgh.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgh.MghConditions.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

new mgh.MghConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.automationRunResourceRunId">automationRunResourceRunId</a></code> | Generates a condition block for `mgh:AutomationRunResourceRunID`. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.automationUnitResourceAutomationUnitARN">automationUnitResourceAutomationUnitARN</a></code> | Generates a condition block for `mgh:AutomationUnitResourceAutomationUnitArn`. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.connectionResourceConnectionARN">connectionResourceConnectionARN</a></code> | Generates a condition block for `mgh:ConnectionResourceConnectionArn`. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `automationRunResourceRunId` <a name="automationRunResourceRunId" id="@cdk_utils/iam.mgh.MghConditions.automationRunResourceRunId"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.automationRunResourceRunId(value: string)
```

Generates a condition block for `mgh:AutomationRunResourceRunID`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgh.MghConditions.automationRunResourceRunId.parameter.value"></a>

- *Type:* string

---

##### `automationUnitResourceAutomationUnitARN` <a name="automationUnitResourceAutomationUnitARN" id="@cdk_utils/iam.mgh.MghConditions.automationUnitResourceAutomationUnitARN"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.automationUnitResourceAutomationUnitARN(value: string)
```

Generates a condition block for `mgh:AutomationUnitResourceAutomationUnitArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgh.MghConditions.automationUnitResourceAutomationUnitARN.parameter.value"></a>

- *Type:* string

---

##### `connectionResourceConnectionARN` <a name="connectionResourceConnectionARN" id="@cdk_utils/iam.mgh.MghConditions.connectionResourceConnectionARN"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.connectionResourceConnectionARN(value: string)
```

Generates a condition block for `mgh:ConnectionResourceConnectionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgh.MghConditions.connectionResourceConnectionARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mgh.MghConditions.requestTag"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgh.MghConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mgh.MghConditions.resourceTag"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mgh.MghConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mgh.MghConditions.tagKeys"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mgh.MghConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AcceptConnectionConditionKeys">AcceptConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptConnection action. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AUTOMATION_RUN_RESOURCE_RUN_ID">AUTOMATION_RUN_RESOURCE_RUN_ID</a></code> | <code>string</code> | Condition key: mgh:AutomationRunResourceRunID (String). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN">AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN</a></code> | <code>string</code> | Condition key: mgh:AutomationUnitResourceAutomationUnitArn (ARN). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.CONNECTION_RESOURCE_CONNECTION_ARN">CONNECTION_RESOURCE_CONNECTION_ARN</a></code> | <code>string</code> | Condition key: mgh:ConnectionResourceConnectionArn (String). |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mgh.MghConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AcceptConnectionConditionKeys`<sup>Required</sup> <a name="AcceptConnectionConditionKeys" id="@cdk_utils/iam.mgh.MghConditions.property.AcceptConnectionConditionKeys"></a>

```typescript
public readonly AcceptConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptConnection action.

---

##### `AUTOMATION_RUN_RESOURCE_RUN_ID`<sup>Required</sup> <a name="AUTOMATION_RUN_RESOURCE_RUN_ID" id="@cdk_utils/iam.mgh.MghConditions.property.AUTOMATION_RUN_RESOURCE_RUN_ID"></a>

```typescript
public readonly AUTOMATION_RUN_RESOURCE_RUN_ID: string;
```

- *Type:* string

Condition key: mgh:AutomationRunResourceRunID (String).

---

##### `AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN`<sup>Required</sup> <a name="AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN" id="@cdk_utils/iam.mgh.MghConditions.property.AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN"></a>

```typescript
public readonly AUTOMATION_UNIT_RESOURCE_AUTOMATION_UNIT_ARN: string;
```

- *Type:* string

Condition key: mgh:AutomationUnitResourceAutomationUnitArn (ARN).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mgh.MghConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mgh.MghConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mgh.MghConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CONNECTION_RESOURCE_CONNECTION_ARN`<sup>Required</sup> <a name="CONNECTION_RESOURCE_CONNECTION_ARN" id="@cdk_utils/iam.mgh.MghConditions.property.CONNECTION_RESOURCE_CONNECTION_ARN"></a>

```typescript
public readonly CONNECTION_RESOURCE_CONNECTION_ARN: string;
```

- *Type:* string

Condition key: mgh:ConnectionResourceConnectionArn (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mgh.MghConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mgh.MghConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MghOperations <a name="MghOperations" id="@cdk_utils/iam.mgh.MghOperations"></a>

API operation to required IAM actions mapping for mgh.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgh.MghOperations.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

new mgh.MghOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.AssociateCreatedArtifact">AssociateCreatedArtifact</a></code> | <code>string[]</code> | IAM actions required for the AssociateCreatedArtifact API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.AssociateDiscoveredResource">AssociateDiscoveredResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateDiscoveredResource API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.AssociateSourceResource">AssociateSourceResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceResource API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.CreateHomeRegionControl">CreateHomeRegionControl</a></code> | <code>string[]</code> | IAM actions required for the CreateHomeRegionControl API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.CreateProgressUpdateStream">CreateProgressUpdateStream</a></code> | <code>string[]</code> | IAM actions required for the CreateProgressUpdateStream API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DeleteHomeRegionControl">DeleteHomeRegionControl</a></code> | <code>string[]</code> | IAM actions required for the DeleteHomeRegionControl API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DeleteProgressUpdateStream">DeleteProgressUpdateStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteProgressUpdateStream API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DescribeApplicationState">DescribeApplicationState</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplicationState API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DescribeHomeRegionControls">DescribeHomeRegionControls</a></code> | <code>string[]</code> | IAM actions required for the DescribeHomeRegionControls API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DescribeMigrationTask">DescribeMigrationTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeMigrationTask API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DisassociateCreatedArtifact">DisassociateCreatedArtifact</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCreatedArtifact API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DisassociateDiscoveredResource">DisassociateDiscoveredResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDiscoveredResource API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.DisassociateSourceResource">DisassociateSourceResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSourceResource API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ImportMigrationTask">ImportMigrationTask</a></code> | <code>string[]</code> | IAM actions required for the ImportMigrationTask API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListApplicationStates">ListApplicationStates</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationStates API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListCreatedArtifacts">ListCreatedArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListCreatedArtifacts API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveredResources API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListMigrationTasks">ListMigrationTasks</a></code> | <code>string[]</code> | IAM actions required for the ListMigrationTasks API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListMigrationTaskUpdates">ListMigrationTaskUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListMigrationTaskUpdates API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListProgressUpdateStreams">ListProgressUpdateStreams</a></code> | <code>string[]</code> | IAM actions required for the ListProgressUpdateStreams API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.ListSourceResources">ListSourceResources</a></code> | <code>string[]</code> | IAM actions required for the ListSourceResources API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.NotifyApplicationState">NotifyApplicationState</a></code> | <code>string[]</code> | IAM actions required for the NotifyApplicationState API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.NotifyMigrationTaskState">NotifyMigrationTaskState</a></code> | <code>string[]</code> | IAM actions required for the NotifyMigrationTaskState API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.opGetHomeRegion">opGetHomeRegion</a></code> | <code>string[]</code> | IAM actions required for the GetHomeRegion API call. |
| <code><a href="#@cdk_utils/iam.mgh.MghOperations.property.PutResourceAttributes">PutResourceAttributes</a></code> | <code>string[]</code> | IAM actions required for the PutResourceAttributes API call. |

---

##### `AssociateCreatedArtifact`<sup>Required</sup> <a name="AssociateCreatedArtifact" id="@cdk_utils/iam.mgh.MghOperations.property.AssociateCreatedArtifact"></a>

```typescript
public readonly AssociateCreatedArtifact: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCreatedArtifact API call.

---

##### `AssociateDiscoveredResource`<sup>Required</sup> <a name="AssociateDiscoveredResource" id="@cdk_utils/iam.mgh.MghOperations.property.AssociateDiscoveredResource"></a>

```typescript
public readonly AssociateDiscoveredResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDiscoveredResource API call.

---

##### `AssociateSourceResource`<sup>Required</sup> <a name="AssociateSourceResource" id="@cdk_utils/iam.mgh.MghOperations.property.AssociateSourceResource"></a>

```typescript
public readonly AssociateSourceResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceResource API call.

---

##### `CreateHomeRegionControl`<sup>Required</sup> <a name="CreateHomeRegionControl" id="@cdk_utils/iam.mgh.MghOperations.property.CreateHomeRegionControl"></a>

```typescript
public readonly CreateHomeRegionControl: string[];
```

- *Type:* string[]

IAM actions required for the CreateHomeRegionControl API call.

---

##### `CreateProgressUpdateStream`<sup>Required</sup> <a name="CreateProgressUpdateStream" id="@cdk_utils/iam.mgh.MghOperations.property.CreateProgressUpdateStream"></a>

```typescript
public readonly CreateProgressUpdateStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateProgressUpdateStream API call.

---

##### `DeleteHomeRegionControl`<sup>Required</sup> <a name="DeleteHomeRegionControl" id="@cdk_utils/iam.mgh.MghOperations.property.DeleteHomeRegionControl"></a>

```typescript
public readonly DeleteHomeRegionControl: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHomeRegionControl API call.

---

##### `DeleteProgressUpdateStream`<sup>Required</sup> <a name="DeleteProgressUpdateStream" id="@cdk_utils/iam.mgh.MghOperations.property.DeleteProgressUpdateStream"></a>

```typescript
public readonly DeleteProgressUpdateStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProgressUpdateStream API call.

---

##### `DescribeApplicationState`<sup>Required</sup> <a name="DescribeApplicationState" id="@cdk_utils/iam.mgh.MghOperations.property.DescribeApplicationState"></a>

```typescript
public readonly DescribeApplicationState: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplicationState API call.

---

##### `DescribeHomeRegionControls`<sup>Required</sup> <a name="DescribeHomeRegionControls" id="@cdk_utils/iam.mgh.MghOperations.property.DescribeHomeRegionControls"></a>

```typescript
public readonly DescribeHomeRegionControls: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHomeRegionControls API call.

---

##### `DescribeMigrationTask`<sup>Required</sup> <a name="DescribeMigrationTask" id="@cdk_utils/iam.mgh.MghOperations.property.DescribeMigrationTask"></a>

```typescript
public readonly DescribeMigrationTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMigrationTask API call.

---

##### `DisassociateCreatedArtifact`<sup>Required</sup> <a name="DisassociateCreatedArtifact" id="@cdk_utils/iam.mgh.MghOperations.property.DisassociateCreatedArtifact"></a>

```typescript
public readonly DisassociateCreatedArtifact: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCreatedArtifact API call.

---

##### `DisassociateDiscoveredResource`<sup>Required</sup> <a name="DisassociateDiscoveredResource" id="@cdk_utils/iam.mgh.MghOperations.property.DisassociateDiscoveredResource"></a>

```typescript
public readonly DisassociateDiscoveredResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDiscoveredResource API call.

---

##### `DisassociateSourceResource`<sup>Required</sup> <a name="DisassociateSourceResource" id="@cdk_utils/iam.mgh.MghOperations.property.DisassociateSourceResource"></a>

```typescript
public readonly DisassociateSourceResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSourceResource API call.

---

##### `ImportMigrationTask`<sup>Required</sup> <a name="ImportMigrationTask" id="@cdk_utils/iam.mgh.MghOperations.property.ImportMigrationTask"></a>

```typescript
public readonly ImportMigrationTask: string[];
```

- *Type:* string[]

IAM actions required for the ImportMigrationTask API call.

---

##### `ListApplicationStates`<sup>Required</sup> <a name="ListApplicationStates" id="@cdk_utils/iam.mgh.MghOperations.property.ListApplicationStates"></a>

```typescript
public readonly ListApplicationStates: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationStates API call.

---

##### `ListCreatedArtifacts`<sup>Required</sup> <a name="ListCreatedArtifacts" id="@cdk_utils/iam.mgh.MghOperations.property.ListCreatedArtifacts"></a>

```typescript
public readonly ListCreatedArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListCreatedArtifacts API call.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.mgh.MghOperations.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveredResources API call.

---

##### `ListMigrationTasks`<sup>Required</sup> <a name="ListMigrationTasks" id="@cdk_utils/iam.mgh.MghOperations.property.ListMigrationTasks"></a>

```typescript
public readonly ListMigrationTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListMigrationTasks API call.

---

##### `ListMigrationTaskUpdates`<sup>Required</sup> <a name="ListMigrationTaskUpdates" id="@cdk_utils/iam.mgh.MghOperations.property.ListMigrationTaskUpdates"></a>

```typescript
public readonly ListMigrationTaskUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListMigrationTaskUpdates API call.

---

##### `ListProgressUpdateStreams`<sup>Required</sup> <a name="ListProgressUpdateStreams" id="@cdk_utils/iam.mgh.MghOperations.property.ListProgressUpdateStreams"></a>

```typescript
public readonly ListProgressUpdateStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListProgressUpdateStreams API call.

---

##### `ListSourceResources`<sup>Required</sup> <a name="ListSourceResources" id="@cdk_utils/iam.mgh.MghOperations.property.ListSourceResources"></a>

```typescript
public readonly ListSourceResources: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceResources API call.

---

##### `NotifyApplicationState`<sup>Required</sup> <a name="NotifyApplicationState" id="@cdk_utils/iam.mgh.MghOperations.property.NotifyApplicationState"></a>

```typescript
public readonly NotifyApplicationState: string[];
```

- *Type:* string[]

IAM actions required for the NotifyApplicationState API call.

---

##### `NotifyMigrationTaskState`<sup>Required</sup> <a name="NotifyMigrationTaskState" id="@cdk_utils/iam.mgh.MghOperations.property.NotifyMigrationTaskState"></a>

```typescript
public readonly NotifyMigrationTaskState: string[];
```

- *Type:* string[]

IAM actions required for the NotifyMigrationTaskState API call.

---

##### `opGetHomeRegion`<sup>Required</sup> <a name="opGetHomeRegion" id="@cdk_utils/iam.mgh.MghOperations.property.opGetHomeRegion"></a>

```typescript
public readonly opGetHomeRegion: string[];
```

- *Type:* string[]

IAM actions required for the GetHomeRegion API call.

---

##### `PutResourceAttributes`<sup>Required</sup> <a name="PutResourceAttributes" id="@cdk_utils/iam.mgh.MghOperations.property.PutResourceAttributes"></a>

```typescript
public readonly PutResourceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the PutResourceAttributes API call.

---

### MghResources <a name="MghResources" id="@cdk_utils/iam.mgh.MghResources"></a>

ARN builders, validators, and parsers for mgh resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mgh.MghResources.Initializer"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

new mgh.MghResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.automationRunResource">automationRunResource</a></code> | Builds an ARN for the AutomationRunResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.automationUnitResource">automationUnitResource</a></code> | Builds an ARN for the AutomationUnitResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.connectionResource">connectionResource</a></code> | Builds an ARN for the ConnectionResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.isValidAutomationRunResourceArn">isValidAutomationRunResourceArn</a></code> | Validates whether a string is a valid ARN for the AutomationRunResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.isValidAutomationUnitResourceArn">isValidAutomationUnitResourceArn</a></code> | Validates whether a string is a valid ARN for the AutomationUnitResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.isValidConnectionResourceArn">isValidConnectionResourceArn</a></code> | Validates whether a string is a valid ARN for the ConnectionResource resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.isValidMigrationTaskArn">isValidMigrationTaskArn</a></code> | Validates whether a string is a valid ARN for the migrationTask resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.isValidProgressUpdateStreamArn">isValidProgressUpdateStreamArn</a></code> | Validates whether a string is a valid ARN for the progressUpdateStream resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.migrationTask">migrationTask</a></code> | Builds an ARN for the migrationTask resource. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.parseAutomationRunResourceArn">parseAutomationRunResourceArn</a></code> | Parses a AutomationRunResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.parseAutomationUnitResourceArn">parseAutomationUnitResourceArn</a></code> | Parses a AutomationUnitResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.parseConnectionResourceArn">parseConnectionResourceArn</a></code> | Parses a ConnectionResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.parseMigrationTaskArn">parseMigrationTaskArn</a></code> | Parses a migrationTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.parseProgressUpdateStreamArn">parseProgressUpdateStreamArn</a></code> | Parses a progressUpdateStream ARN into its components. |
| <code><a href="#@cdk_utils/iam.mgh.MghResources.progressUpdateStream">progressUpdateStream</a></code> | Builds an ARN for the progressUpdateStream resource. |

---

##### `automationRunResource` <a name="automationRunResource" id="@cdk_utils/iam.mgh.MghResources.automationRunResource"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.automationRunResource(props: MghAutomationRunResourceArnProps)
```

Builds an ARN for the AutomationRunResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgh.MghResources.automationRunResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgh.MghAutomationRunResourceArnProps">MghAutomationRunResourceArnProps</a>

---

##### `automationUnitResource` <a name="automationUnitResource" id="@cdk_utils/iam.mgh.MghResources.automationUnitResource"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.automationUnitResource(props: MghAutomationUnitResourceArnProps)
```

Builds an ARN for the AutomationUnitResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgh.MghResources.automationUnitResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgh.MghAutomationUnitResourceArnProps">MghAutomationUnitResourceArnProps</a>

---

##### `connectionResource` <a name="connectionResource" id="@cdk_utils/iam.mgh.MghResources.connectionResource"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.connectionResource(props: MghConnectionResourceArnProps)
```

Builds an ARN for the ConnectionResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgh.MghResources.connectionResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgh.MghConnectionResourceArnProps">MghConnectionResourceArnProps</a>

---

##### `isValidAutomationRunResourceArn` <a name="isValidAutomationRunResourceArn" id="@cdk_utils/iam.mgh.MghResources.isValidAutomationRunResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.isValidAutomationRunResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the AutomationRunResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.isValidAutomationRunResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationUnitResourceArn` <a name="isValidAutomationUnitResourceArn" id="@cdk_utils/iam.mgh.MghResources.isValidAutomationUnitResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.isValidAutomationUnitResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the AutomationUnitResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.isValidAutomationUnitResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionResourceArn` <a name="isValidConnectionResourceArn" id="@cdk_utils/iam.mgh.MghResources.isValidConnectionResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.isValidConnectionResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ConnectionResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.isValidConnectionResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMigrationTaskArn` <a name="isValidMigrationTaskArn" id="@cdk_utils/iam.mgh.MghResources.isValidMigrationTaskArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.isValidMigrationTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the migrationTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.isValidMigrationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProgressUpdateStreamArn` <a name="isValidProgressUpdateStreamArn" id="@cdk_utils/iam.mgh.MghResources.isValidProgressUpdateStreamArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.isValidProgressUpdateStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the progressUpdateStream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.isValidProgressUpdateStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `migrationTask` <a name="migrationTask" id="@cdk_utils/iam.mgh.MghResources.migrationTask"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.migrationTask(props: MghMigrationTaskArnProps)
```

Builds an ARN for the migrationTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgh.MghResources.migrationTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgh.MghMigrationTaskArnProps">MghMigrationTaskArnProps</a>

---

##### `parseAutomationRunResourceArn` <a name="parseAutomationRunResourceArn" id="@cdk_utils/iam.mgh.MghResources.parseAutomationRunResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.parseAutomationRunResourceArn(arn: string)
```

Parses a AutomationRunResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.parseAutomationRunResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationUnitResourceArn` <a name="parseAutomationUnitResourceArn" id="@cdk_utils/iam.mgh.MghResources.parseAutomationUnitResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.parseAutomationUnitResourceArn(arn: string)
```

Parses a AutomationUnitResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.parseAutomationUnitResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionResourceArn` <a name="parseConnectionResourceArn" id="@cdk_utils/iam.mgh.MghResources.parseConnectionResourceArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.parseConnectionResourceArn(arn: string)
```

Parses a ConnectionResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.parseConnectionResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMigrationTaskArn` <a name="parseMigrationTaskArn" id="@cdk_utils/iam.mgh.MghResources.parseMigrationTaskArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.parseMigrationTaskArn(arn: string)
```

Parses a migrationTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.parseMigrationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProgressUpdateStreamArn` <a name="parseProgressUpdateStreamArn" id="@cdk_utils/iam.mgh.MghResources.parseProgressUpdateStreamArn"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.parseProgressUpdateStreamArn(arn: string)
```

Parses a progressUpdateStream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mgh.MghResources.parseProgressUpdateStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `progressUpdateStream` <a name="progressUpdateStream" id="@cdk_utils/iam.mgh.MghResources.progressUpdateStream"></a>

```typescript
import { mgh } from '@cdk_utils/iam'

mgh.MghResources.progressUpdateStream(props: MghProgressUpdateStreamArnProps)
```

Builds an ARN for the progressUpdateStream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mgh.MghResources.progressUpdateStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mgh.MghProgressUpdateStreamArnProps">MghProgressUpdateStreamArnProps</a>

---




