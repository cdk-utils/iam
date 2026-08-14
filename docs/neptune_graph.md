# `neptune_graph` Submodule <a name="`neptune_graph` Submodule" id="@cdk_utils/iam.neptune_graph"></a>


## Structs <a name="Structs" id="Structs"></a>

### NeptuneGraphExportTaskArnComponents <a name="NeptuneGraphExportTaskArnComponents" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents"></a>

Parsed components of a export-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphExportTaskArnComponents: neptune_graph.NeptuneGraphExportTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NeptuneGraphExportTaskArnProps <a name="NeptuneGraphExportTaskArnProps" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps"></a>

Properties for building a export-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphExportTaskArnProps: neptune_graph.NeptuneGraphExportTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NeptuneGraphGraphArnComponents <a name="NeptuneGraphGraphArnComponents" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents"></a>

Parsed components of a graph ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphGraphArnComponents: neptune_graph.NeptuneGraphGraphArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NeptuneGraphGraphArnProps <a name="NeptuneGraphGraphArnProps" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps"></a>

Properties for building a graph ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphGraphArnProps: neptune_graph.NeptuneGraphGraphArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NeptuneGraphGraphSnapshotArnComponents <a name="NeptuneGraphGraphSnapshotArnComponents" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents"></a>

Parsed components of a graph-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphGraphSnapshotArnComponents: neptune_graph.NeptuneGraphGraphSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NeptuneGraphGraphSnapshotArnProps <a name="NeptuneGraphGraphSnapshotArnProps" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps"></a>

Properties for building a graph-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphGraphSnapshotArnProps: neptune_graph.NeptuneGraphGraphSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NeptuneGraphImportTaskArnComponents <a name="NeptuneGraphImportTaskArnComponents" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents"></a>

Parsed components of a import-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphImportTaskArnComponents: neptune_graph.NeptuneGraphImportTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NeptuneGraphImportTaskArnProps <a name="NeptuneGraphImportTaskArnProps" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps"></a>

Properties for building a import-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

const neptuneGraphImportTaskArnProps: neptune_graph.NeptuneGraphImportTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneGraphActions <a name="NeptuneGraphActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions"></a>

IAM action constants for the neptune-graph service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

new neptune_graph.NeptuneGraphActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetEngineStatus">actionGetEngineStatus</a></code> | <code>string</code> | [Read] neptune-graph:GetEngineStatus. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetExportTask">actionGetExportTask</a></code> | <code>string</code> | [Read] neptune-graph:GetExportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraph">actionGetGraph</a></code> | <code>string</code> | [Read] neptune-graph:GetGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraphSnapshot">actionGetGraphSnapshot</a></code> | <code>string</code> | [Read] neptune-graph:GetGraphSnapshot. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraphSummary">actionGetGraphSummary</a></code> | <code>string</code> | [Read] neptune-graph:GetGraphSummary. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetImportTask">actionGetImportTask</a></code> | <code>string</code> | [Read] neptune-graph:GetImportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetPrivateGraphEndpoint">actionGetPrivateGraphEndpoint</a></code> | <code>string</code> | [Read] neptune-graph:GetPrivateGraphEndpoint. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetQueryStatus">actionGetQueryStatus</a></code> | <code>string</code> | [Read] neptune-graph:GetQueryStatus. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetStatisticsStatus">actionGetStatisticsStatus</a></code> | <code>string</code> | [Read] neptune-graph:GetStatisticsStatus. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelExportTask">CancelExportTask</a></code> | <code>string</code> | [Write] neptune-graph:CancelExportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelImportTask">CancelImportTask</a></code> | <code>string</code> | [Write] neptune-graph:CancelImportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] neptune-graph:CancelQuery. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraph">CreateGraph</a></code> | <code>string</code> | [Write] neptune-graph:CreateGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraphSnapshot">CreateGraphSnapshot</a></code> | <code>string</code> | [Write] neptune-graph:CreateGraphSnapshot. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraphUsingImportTask">CreateGraphUsingImportTask</a></code> | <code>string</code> | [Write] neptune-graph:CreateGraphUsingImportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreatePrivateGraphEndpoint">CreatePrivateGraphEndpoint</a></code> | <code>string</code> | [Write] neptune-graph:CreatePrivateGraphEndpoint. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteDataViaQuery">DeleteDataViaQuery</a></code> | <code>string</code> | [Write] neptune-graph:DeleteDataViaQuery. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteGraph">DeleteGraph</a></code> | <code>string</code> | [Write] neptune-graph:DeleteGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteGraphSnapshot">DeleteGraphSnapshot</a></code> | <code>string</code> | [Write] neptune-graph:DeleteGraphSnapshot. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeletePrivateGraphEndpoint">DeletePrivateGraphEndpoint</a></code> | <code>string</code> | [Write] neptune-graph:DeletePrivateGraphEndpoint. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListExportTasks">ListExportTasks</a></code> | <code>string</code> | [Read] neptune-graph:ListExportTasks. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListGraphs">ListGraphs</a></code> | <code>string</code> | [Read] neptune-graph:ListGraphs. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListGraphSnapshots">ListGraphSnapshots</a></code> | <code>string</code> | [Read] neptune-graph:ListGraphSnapshots. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListImportTasks">ListImportTasks</a></code> | <code>string</code> | [Read] neptune-graph:ListImportTasks. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListPrivateGraphEndpoints">ListPrivateGraphEndpoints</a></code> | <code>string</code> | [Read] neptune-graph:ListPrivateGraphEndpoints. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListQueries">ListQueries</a></code> | <code>string</code> | [Read] neptune-graph:ListQueries. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] neptune-graph:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ReadDataViaQuery">ReadDataViaQuery</a></code> | <code>string</code> | [Read] neptune-graph:ReadDataViaQuery. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ResetGraph">ResetGraph</a></code> | <code>string</code> | [Write] neptune-graph:ResetGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.RestoreGraphFromSnapshot">RestoreGraphFromSnapshot</a></code> | <code>string</code> | [Write] neptune-graph:RestoreGraphFromSnapshot. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartExportTask">StartExportTask</a></code> | <code>string</code> | [Write] neptune-graph:StartExportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartGraph">StartGraph</a></code> | <code>string</code> | [Write] neptune-graph:StartGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartImportTask">StartImportTask</a></code> | <code>string</code> | [Write] neptune-graph:StartImportTask. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StopGraph">StopGraph</a></code> | <code>string</code> | [Write] neptune-graph:StopGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] neptune-graph:TagResource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] neptune-graph:UntagResource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.UpdateGraph">UpdateGraph</a></code> | <code>string</code> | [Write] neptune-graph:UpdateGraph. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.WriteDataViaQuery">WriteDataViaQuery</a></code> | <code>string</code> | [Write] neptune-graph:WriteDataViaQuery. |

---

##### `actionGetEngineStatus`<sup>Required</sup> <a name="actionGetEngineStatus" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetEngineStatus"></a>

```typescript
public readonly actionGetEngineStatus: string;
```

- *Type:* string

[Read] neptune-graph:GetEngineStatus.

---

##### `actionGetExportTask`<sup>Required</sup> <a name="actionGetExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetExportTask"></a>

```typescript
public readonly actionGetExportTask: string;
```

- *Type:* string

[Read] neptune-graph:GetExportTask.

---

##### `actionGetGraph`<sup>Required</sup> <a name="actionGetGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraph"></a>

```typescript
public readonly actionGetGraph: string;
```

- *Type:* string

[Read] neptune-graph:GetGraph.

---

##### `actionGetGraphSnapshot`<sup>Required</sup> <a name="actionGetGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraphSnapshot"></a>

```typescript
public readonly actionGetGraphSnapshot: string;
```

- *Type:* string

[Read] neptune-graph:GetGraphSnapshot.

---

##### `actionGetGraphSummary`<sup>Required</sup> <a name="actionGetGraphSummary" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetGraphSummary"></a>

```typescript
public readonly actionGetGraphSummary: string;
```

- *Type:* string

[Read] neptune-graph:GetGraphSummary.

---

##### `actionGetImportTask`<sup>Required</sup> <a name="actionGetImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetImportTask"></a>

```typescript
public readonly actionGetImportTask: string;
```

- *Type:* string

[Read] neptune-graph:GetImportTask.

---

##### `actionGetPrivateGraphEndpoint`<sup>Required</sup> <a name="actionGetPrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetPrivateGraphEndpoint"></a>

```typescript
public readonly actionGetPrivateGraphEndpoint: string;
```

- *Type:* string

[Read] neptune-graph:GetPrivateGraphEndpoint.

---

##### `actionGetQueryStatus`<sup>Required</sup> <a name="actionGetQueryStatus" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetQueryStatus"></a>

```typescript
public readonly actionGetQueryStatus: string;
```

- *Type:* string

[Read] neptune-graph:GetQueryStatus.

---

##### `actionGetStatisticsStatus`<sup>Required</sup> <a name="actionGetStatisticsStatus" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.actionGetStatisticsStatus"></a>

```typescript
public readonly actionGetStatisticsStatus: string;
```

- *Type:* string

[Read] neptune-graph:GetStatisticsStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string;
```

- *Type:* string

[Write] neptune-graph:CancelExportTask.

---

##### `CancelImportTask`<sup>Required</sup> <a name="CancelImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelImportTask"></a>

```typescript
public readonly CancelImportTask: string;
```

- *Type:* string

[Write] neptune-graph:CancelImportTask.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] neptune-graph:CancelQuery.

---

##### `CreateGraph`<sup>Required</sup> <a name="CreateGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraph"></a>

```typescript
public readonly CreateGraph: string;
```

- *Type:* string

[Write] neptune-graph:CreateGraph.

---

##### `CreateGraphSnapshot`<sup>Required</sup> <a name="CreateGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraphSnapshot"></a>

```typescript
public readonly CreateGraphSnapshot: string;
```

- *Type:* string

[Write] neptune-graph:CreateGraphSnapshot.

---

##### `CreateGraphUsingImportTask`<sup>Required</sup> <a name="CreateGraphUsingImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreateGraphUsingImportTask"></a>

```typescript
public readonly CreateGraphUsingImportTask: string;
```

- *Type:* string

[Write] neptune-graph:CreateGraphUsingImportTask.

---

##### `CreatePrivateGraphEndpoint`<sup>Required</sup> <a name="CreatePrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.CreatePrivateGraphEndpoint"></a>

```typescript
public readonly CreatePrivateGraphEndpoint: string;
```

- *Type:* string

[Write] neptune-graph:CreatePrivateGraphEndpoint.

---

##### `DeleteDataViaQuery`<sup>Required</sup> <a name="DeleteDataViaQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteDataViaQuery"></a>

```typescript
public readonly DeleteDataViaQuery: string;
```

- *Type:* string

[Write] neptune-graph:DeleteDataViaQuery.

---

##### `DeleteGraph`<sup>Required</sup> <a name="DeleteGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteGraph"></a>

```typescript
public readonly DeleteGraph: string;
```

- *Type:* string

[Write] neptune-graph:DeleteGraph.

---

##### `DeleteGraphSnapshot`<sup>Required</sup> <a name="DeleteGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeleteGraphSnapshot"></a>

```typescript
public readonly DeleteGraphSnapshot: string;
```

- *Type:* string

[Write] neptune-graph:DeleteGraphSnapshot.

---

##### `DeletePrivateGraphEndpoint`<sup>Required</sup> <a name="DeletePrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.DeletePrivateGraphEndpoint"></a>

```typescript
public readonly DeletePrivateGraphEndpoint: string;
```

- *Type:* string

[Write] neptune-graph:DeletePrivateGraphEndpoint.

---

##### `ListExportTasks`<sup>Required</sup> <a name="ListExportTasks" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListExportTasks"></a>

```typescript
public readonly ListExportTasks: string;
```

- *Type:* string

[Read] neptune-graph:ListExportTasks.

---

##### `ListGraphs`<sup>Required</sup> <a name="ListGraphs" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListGraphs"></a>

```typescript
public readonly ListGraphs: string;
```

- *Type:* string

[Read] neptune-graph:ListGraphs.

---

##### `ListGraphSnapshots`<sup>Required</sup> <a name="ListGraphSnapshots" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListGraphSnapshots"></a>

```typescript
public readonly ListGraphSnapshots: string;
```

- *Type:* string

[Read] neptune-graph:ListGraphSnapshots.

---

##### `ListImportTasks`<sup>Required</sup> <a name="ListImportTasks" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListImportTasks"></a>

```typescript
public readonly ListImportTasks: string;
```

- *Type:* string

[Read] neptune-graph:ListImportTasks.

---

##### `ListPrivateGraphEndpoints`<sup>Required</sup> <a name="ListPrivateGraphEndpoints" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListPrivateGraphEndpoints"></a>

```typescript
public readonly ListPrivateGraphEndpoints: string;
```

- *Type:* string

[Read] neptune-graph:ListPrivateGraphEndpoints.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListQueries"></a>

```typescript
public readonly ListQueries: string;
```

- *Type:* string

[Read] neptune-graph:ListQueries.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] neptune-graph:ListTagsForResource.

---

##### `ReadDataViaQuery`<sup>Required</sup> <a name="ReadDataViaQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ReadDataViaQuery"></a>

```typescript
public readonly ReadDataViaQuery: string;
```

- *Type:* string

[Read] neptune-graph:ReadDataViaQuery.

---

##### `ResetGraph`<sup>Required</sup> <a name="ResetGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.ResetGraph"></a>

```typescript
public readonly ResetGraph: string;
```

- *Type:* string

[Write] neptune-graph:ResetGraph.

---

##### `RestoreGraphFromSnapshot`<sup>Required</sup> <a name="RestoreGraphFromSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.RestoreGraphFromSnapshot"></a>

```typescript
public readonly RestoreGraphFromSnapshot: string;
```

- *Type:* string

[Write] neptune-graph:RestoreGraphFromSnapshot.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string;
```

- *Type:* string

[Write] neptune-graph:StartExportTask.

---

##### `StartGraph`<sup>Required</sup> <a name="StartGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartGraph"></a>

```typescript
public readonly StartGraph: string;
```

- *Type:* string

[Write] neptune-graph:StartGraph.

---

##### `StartImportTask`<sup>Required</sup> <a name="StartImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StartImportTask"></a>

```typescript
public readonly StartImportTask: string;
```

- *Type:* string

[Write] neptune-graph:StartImportTask.

---

##### `StopGraph`<sup>Required</sup> <a name="StopGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.StopGraph"></a>

```typescript
public readonly StopGraph: string;
```

- *Type:* string

[Write] neptune-graph:StopGraph.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] neptune-graph:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] neptune-graph:UntagResource.

---

##### `UpdateGraph`<sup>Required</sup> <a name="UpdateGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.UpdateGraph"></a>

```typescript
public readonly UpdateGraph: string;
```

- *Type:* string

[Write] neptune-graph:UpdateGraph.

---

##### `WriteDataViaQuery`<sup>Required</sup> <a name="WriteDataViaQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphActions.property.WriteDataViaQuery"></a>

```typescript
public readonly WriteDataViaQuery: string;
```

- *Type:* string

[Write] neptune-graph:WriteDataViaQuery.

---

### NeptuneGraphConditions <a name="NeptuneGraphConditions" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions"></a>

Condition key constants and builders for neptune-graph.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

new neptune_graph.NeptuneGraphConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.publicConnectivity">publicConnectivity</a></code> | Generates a condition block for `neptune-graph:PublicConnectivity`. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `publicConnectivity` <a name="publicConnectivity" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.publicConnectivity"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphConditions.publicConnectivity(value: boolean)
```

Generates a condition block for `neptune-graph:PublicConnectivity`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.publicConnectivity.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.requestTag"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.resourceTag"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.tagKeys"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetEngineStatusConditionKeys">actionGetEngineStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEngineStatus action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetExportTaskConditionKeys">actionGetExportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExportTask action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphConditionKeys">actionGetGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphSnapshotConditionKeys">actionGetGraphSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGraphSnapshot action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphSummaryConditionKeys">actionGetGraphSummaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGraphSummary action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetPrivateGraphEndpointConditionKeys">actionGetPrivateGraphEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPrivateGraphEndpoint action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetQueryStatusConditionKeys">actionGetQueryStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQueryStatus action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetStatisticsStatusConditionKeys">actionGetStatisticsStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStatisticsStatus action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CancelExportTaskConditionKeys">CancelExportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelExportTask action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CancelQueryConditionKeys">CancelQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelQuery action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphConditionKeys">CreateGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphSnapshotConditionKeys">CreateGraphSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGraphSnapshot action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphUsingImportTaskConditionKeys">CreateGraphUsingImportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGraphUsingImportTask action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreatePrivateGraphEndpointConditionKeys">CreatePrivateGraphEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrivateGraphEndpoint action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteDataViaQueryConditionKeys">DeleteDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataViaQuery action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteGraphConditionKeys">DeleteGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteGraphSnapshotConditionKeys">DeleteGraphSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGraphSnapshot action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeletePrivateGraphEndpointConditionKeys">DeletePrivateGraphEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePrivateGraphEndpoint action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListPrivateGraphEndpointsConditionKeys">ListPrivateGraphEndpointsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPrivateGraphEndpoints action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListQueriesConditionKeys">ListQueriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListQueries action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.PUBLIC_CONNECTIVITY">PUBLIC_CONNECTIVITY</a></code> | <code>string</code> | Condition key: neptune-graph:PublicConnectivity (Bool). |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ReadDataViaQueryConditionKeys">ReadDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReadDataViaQuery action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ResetGraphConditionKeys">ResetGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResetGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.RestoreGraphFromSnapshotConditionKeys">RestoreGraphFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreGraphFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StartExportTaskConditionKeys">StartExportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExportTask action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StartGraphConditionKeys">StartGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StopGraphConditionKeys">StopGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.UpdateGraphConditionKeys">UpdateGraphConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGraph action. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.WriteDataViaQueryConditionKeys">WriteDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the WriteDataViaQuery action. |

---

##### `actionGetEngineStatusConditionKeys`<sup>Required</sup> <a name="actionGetEngineStatusConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetEngineStatusConditionKeys"></a>

```typescript
public readonly actionGetEngineStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEngineStatus action.

---

##### `actionGetExportTaskConditionKeys`<sup>Required</sup> <a name="actionGetExportTaskConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetExportTaskConditionKeys"></a>

```typescript
public readonly actionGetExportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExportTask action.

---

##### `actionGetGraphConditionKeys`<sup>Required</sup> <a name="actionGetGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphConditionKeys"></a>

```typescript
public readonly actionGetGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGraph action.

---

##### `actionGetGraphSnapshotConditionKeys`<sup>Required</sup> <a name="actionGetGraphSnapshotConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphSnapshotConditionKeys"></a>

```typescript
public readonly actionGetGraphSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGraphSnapshot action.

---

##### `actionGetGraphSummaryConditionKeys`<sup>Required</sup> <a name="actionGetGraphSummaryConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetGraphSummaryConditionKeys"></a>

```typescript
public readonly actionGetGraphSummaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGraphSummary action.

---

##### `actionGetPrivateGraphEndpointConditionKeys`<sup>Required</sup> <a name="actionGetPrivateGraphEndpointConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetPrivateGraphEndpointConditionKeys"></a>

```typescript
public readonly actionGetPrivateGraphEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPrivateGraphEndpoint action.

---

##### `actionGetQueryStatusConditionKeys`<sup>Required</sup> <a name="actionGetQueryStatusConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetQueryStatusConditionKeys"></a>

```typescript
public readonly actionGetQueryStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQueryStatus action.

---

##### `actionGetStatisticsStatusConditionKeys`<sup>Required</sup> <a name="actionGetStatisticsStatusConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.actionGetStatisticsStatusConditionKeys"></a>

```typescript
public readonly actionGetStatisticsStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStatisticsStatus action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelExportTaskConditionKeys`<sup>Required</sup> <a name="CancelExportTaskConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CancelExportTaskConditionKeys"></a>

```typescript
public readonly CancelExportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelExportTask action.

---

##### `CancelQueryConditionKeys`<sup>Required</sup> <a name="CancelQueryConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CancelQueryConditionKeys"></a>

```typescript
public readonly CancelQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelQuery action.

---

##### `CreateGraphConditionKeys`<sup>Required</sup> <a name="CreateGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphConditionKeys"></a>

```typescript
public readonly CreateGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGraph action.

---

##### `CreateGraphSnapshotConditionKeys`<sup>Required</sup> <a name="CreateGraphSnapshotConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphSnapshotConditionKeys"></a>

```typescript
public readonly CreateGraphSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGraphSnapshot action.

---

##### `CreateGraphUsingImportTaskConditionKeys`<sup>Required</sup> <a name="CreateGraphUsingImportTaskConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreateGraphUsingImportTaskConditionKeys"></a>

```typescript
public readonly CreateGraphUsingImportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGraphUsingImportTask action.

---

##### `CreatePrivateGraphEndpointConditionKeys`<sup>Required</sup> <a name="CreatePrivateGraphEndpointConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.CreatePrivateGraphEndpointConditionKeys"></a>

```typescript
public readonly CreatePrivateGraphEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrivateGraphEndpoint action.

---

##### `DeleteDataViaQueryConditionKeys`<sup>Required</sup> <a name="DeleteDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteDataViaQueryConditionKeys"></a>

```typescript
public readonly DeleteDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataViaQuery action.

---

##### `DeleteGraphConditionKeys`<sup>Required</sup> <a name="DeleteGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteGraphConditionKeys"></a>

```typescript
public readonly DeleteGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGraph action.

---

##### `DeleteGraphSnapshotConditionKeys`<sup>Required</sup> <a name="DeleteGraphSnapshotConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeleteGraphSnapshotConditionKeys"></a>

```typescript
public readonly DeleteGraphSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGraphSnapshot action.

---

##### `DeletePrivateGraphEndpointConditionKeys`<sup>Required</sup> <a name="DeletePrivateGraphEndpointConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.DeletePrivateGraphEndpointConditionKeys"></a>

```typescript
public readonly DeletePrivateGraphEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePrivateGraphEndpoint action.

---

##### `ListPrivateGraphEndpointsConditionKeys`<sup>Required</sup> <a name="ListPrivateGraphEndpointsConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListPrivateGraphEndpointsConditionKeys"></a>

```typescript
public readonly ListPrivateGraphEndpointsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPrivateGraphEndpoints action.

---

##### `ListQueriesConditionKeys`<sup>Required</sup> <a name="ListQueriesConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListQueriesConditionKeys"></a>

```typescript
public readonly ListQueriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListQueries action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PUBLIC_CONNECTIVITY`<sup>Required</sup> <a name="PUBLIC_CONNECTIVITY" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.PUBLIC_CONNECTIVITY"></a>

```typescript
public readonly PUBLIC_CONNECTIVITY: string;
```

- *Type:* string

Condition key: neptune-graph:PublicConnectivity (Bool).

---

##### `ReadDataViaQueryConditionKeys`<sup>Required</sup> <a name="ReadDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ReadDataViaQueryConditionKeys"></a>

```typescript
public readonly ReadDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReadDataViaQuery action.

---

##### `ResetGraphConditionKeys`<sup>Required</sup> <a name="ResetGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.ResetGraphConditionKeys"></a>

```typescript
public readonly ResetGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResetGraph action.

---

##### `RestoreGraphFromSnapshotConditionKeys`<sup>Required</sup> <a name="RestoreGraphFromSnapshotConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.RestoreGraphFromSnapshotConditionKeys"></a>

```typescript
public readonly RestoreGraphFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreGraphFromSnapshot action.

---

##### `StartExportTaskConditionKeys`<sup>Required</sup> <a name="StartExportTaskConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StartExportTaskConditionKeys"></a>

```typescript
public readonly StartExportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExportTask action.

---

##### `StartGraphConditionKeys`<sup>Required</sup> <a name="StartGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StartGraphConditionKeys"></a>

```typescript
public readonly StartGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartGraph action.

---

##### `StopGraphConditionKeys`<sup>Required</sup> <a name="StopGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.StopGraphConditionKeys"></a>

```typescript
public readonly StopGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopGraph action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateGraphConditionKeys`<sup>Required</sup> <a name="UpdateGraphConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.UpdateGraphConditionKeys"></a>

```typescript
public readonly UpdateGraphConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGraph action.

---

##### `WriteDataViaQueryConditionKeys`<sup>Required</sup> <a name="WriteDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_graph.NeptuneGraphConditions.property.WriteDataViaQueryConditionKeys"></a>

```typescript
public readonly WriteDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the WriteDataViaQuery action.

---

### NeptuneGraphOperations <a name="NeptuneGraphOperations" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations"></a>

API operation to required IAM actions mapping for neptune-graph.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

new neptune_graph.NeptuneGraphOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelExportTask">CancelExportTask</a></code> | <code>string[]</code> | IAM actions required for the CancelExportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelImportTask">CancelImportTask</a></code> | <code>string[]</code> | IAM actions required for the CancelImportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelQuery">CancelQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraph">CreateGraph</a></code> | <code>string[]</code> | IAM actions required for the CreateGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraphSnapshot">CreateGraphSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateGraphSnapshot API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraphUsingImportTask">CreateGraphUsingImportTask</a></code> | <code>string[]</code> | IAM actions required for the CreateGraphUsingImportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreatePrivateGraphEndpoint">CreatePrivateGraphEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivateGraphEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeleteGraph">DeleteGraph</a></code> | <code>string[]</code> | IAM actions required for the DeleteGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeleteGraphSnapshot">DeleteGraphSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteGraphSnapshot API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeletePrivateGraphEndpoint">DeletePrivateGraphEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeletePrivateGraphEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListExportTasks">ListExportTasks</a></code> | <code>string[]</code> | IAM actions required for the ListExportTasks API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListGraphs">ListGraphs</a></code> | <code>string[]</code> | IAM actions required for the ListGraphs API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListGraphSnapshots">ListGraphSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListGraphSnapshots API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListImportTasks">ListImportTasks</a></code> | <code>string[]</code> | IAM actions required for the ListImportTasks API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListPrivateGraphEndpoints">ListPrivateGraphEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListPrivateGraphEndpoints API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListQueries">ListQueries</a></code> | <code>string[]</code> | IAM actions required for the ListQueries API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetExportTask">opGetExportTask</a></code> | <code>string[]</code> | IAM actions required for the GetExportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraph">opGetGraph</a></code> | <code>string[]</code> | IAM actions required for the GetGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraphSnapshot">opGetGraphSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetGraphSnapshot API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraphSummary">opGetGraphSummary</a></code> | <code>string[]</code> | IAM actions required for the GetGraphSummary API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetImportTask">opGetImportTask</a></code> | <code>string[]</code> | IAM actions required for the GetImportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetPrivateGraphEndpoint">opGetPrivateGraphEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetPrivateGraphEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetQuery">opGetQuery</a></code> | <code>string[]</code> | IAM actions required for the GetQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ResetGraph">ResetGraph</a></code> | <code>string[]</code> | IAM actions required for the ResetGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.RestoreGraphFromSnapshot">RestoreGraphFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreGraphFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartExportTask">StartExportTask</a></code> | <code>string[]</code> | IAM actions required for the StartExportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartGraph">StartGraph</a></code> | <code>string[]</code> | IAM actions required for the StartGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartImportTask">StartImportTask</a></code> | <code>string[]</code> | IAM actions required for the StartImportTask API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StopGraph">StopGraph</a></code> | <code>string[]</code> | IAM actions required for the StopGraph API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.UpdateGraph">UpdateGraph</a></code> | <code>string[]</code> | IAM actions required for the UpdateGraph API call. |

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelExportTask API call.

---

##### `CancelImportTask`<sup>Required</sup> <a name="CancelImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelImportTask"></a>

```typescript
public readonly CancelImportTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelImportTask API call.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelQuery API call.

---

##### `CreateGraph`<sup>Required</sup> <a name="CreateGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraph"></a>

```typescript
public readonly CreateGraph: string[];
```

- *Type:* string[]

IAM actions required for the CreateGraph API call.

---

##### `CreateGraphSnapshot`<sup>Required</sup> <a name="CreateGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraphSnapshot"></a>

```typescript
public readonly CreateGraphSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateGraphSnapshot API call.

---

##### `CreateGraphUsingImportTask`<sup>Required</sup> <a name="CreateGraphUsingImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreateGraphUsingImportTask"></a>

```typescript
public readonly CreateGraphUsingImportTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateGraphUsingImportTask API call.

---

##### `CreatePrivateGraphEndpoint`<sup>Required</sup> <a name="CreatePrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.CreatePrivateGraphEndpoint"></a>

```typescript
public readonly CreatePrivateGraphEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivateGraphEndpoint API call.

---

##### `DeleteGraph`<sup>Required</sup> <a name="DeleteGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeleteGraph"></a>

```typescript
public readonly DeleteGraph: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGraph API call.

---

##### `DeleteGraphSnapshot`<sup>Required</sup> <a name="DeleteGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeleteGraphSnapshot"></a>

```typescript
public readonly DeleteGraphSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGraphSnapshot API call.

---

##### `DeletePrivateGraphEndpoint`<sup>Required</sup> <a name="DeletePrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.DeletePrivateGraphEndpoint"></a>

```typescript
public readonly DeletePrivateGraphEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrivateGraphEndpoint API call.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteQuery API call.

---

##### `ListExportTasks`<sup>Required</sup> <a name="ListExportTasks" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListExportTasks"></a>

```typescript
public readonly ListExportTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListExportTasks API call.

---

##### `ListGraphs`<sup>Required</sup> <a name="ListGraphs" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListGraphs"></a>

```typescript
public readonly ListGraphs: string[];
```

- *Type:* string[]

IAM actions required for the ListGraphs API call.

---

##### `ListGraphSnapshots`<sup>Required</sup> <a name="ListGraphSnapshots" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListGraphSnapshots"></a>

```typescript
public readonly ListGraphSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListGraphSnapshots API call.

---

##### `ListImportTasks`<sup>Required</sup> <a name="ListImportTasks" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListImportTasks"></a>

```typescript
public readonly ListImportTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListImportTasks API call.

---

##### `ListPrivateGraphEndpoints`<sup>Required</sup> <a name="ListPrivateGraphEndpoints" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListPrivateGraphEndpoints"></a>

```typescript
public readonly ListPrivateGraphEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListPrivateGraphEndpoints API call.

---

##### `ListQueries`<sup>Required</sup> <a name="ListQueries" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListQueries"></a>

```typescript
public readonly ListQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListQueries API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetExportTask`<sup>Required</sup> <a name="opGetExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetExportTask"></a>

```typescript
public readonly opGetExportTask: string[];
```

- *Type:* string[]

IAM actions required for the GetExportTask API call.

---

##### `opGetGraph`<sup>Required</sup> <a name="opGetGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraph"></a>

```typescript
public readonly opGetGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetGraph API call.

---

##### `opGetGraphSnapshot`<sup>Required</sup> <a name="opGetGraphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraphSnapshot"></a>

```typescript
public readonly opGetGraphSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetGraphSnapshot API call.

---

##### `opGetGraphSummary`<sup>Required</sup> <a name="opGetGraphSummary" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetGraphSummary"></a>

```typescript
public readonly opGetGraphSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetGraphSummary API call.

---

##### `opGetImportTask`<sup>Required</sup> <a name="opGetImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetImportTask"></a>

```typescript
public readonly opGetImportTask: string[];
```

- *Type:* string[]

IAM actions required for the GetImportTask API call.

---

##### `opGetPrivateGraphEndpoint`<sup>Required</sup> <a name="opGetPrivateGraphEndpoint" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetPrivateGraphEndpoint"></a>

```typescript
public readonly opGetPrivateGraphEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetPrivateGraphEndpoint API call.

---

##### `opGetQuery`<sup>Required</sup> <a name="opGetQuery" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.opGetQuery"></a>

```typescript
public readonly opGetQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetQuery API call.

---

##### `ResetGraph`<sup>Required</sup> <a name="ResetGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.ResetGraph"></a>

```typescript
public readonly ResetGraph: string[];
```

- *Type:* string[]

IAM actions required for the ResetGraph API call.

---

##### `RestoreGraphFromSnapshot`<sup>Required</sup> <a name="RestoreGraphFromSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.RestoreGraphFromSnapshot"></a>

```typescript
public readonly RestoreGraphFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreGraphFromSnapshot API call.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartExportTask API call.

---

##### `StartGraph`<sup>Required</sup> <a name="StartGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartGraph"></a>

```typescript
public readonly StartGraph: string[];
```

- *Type:* string[]

IAM actions required for the StartGraph API call.

---

##### `StartImportTask`<sup>Required</sup> <a name="StartImportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StartImportTask"></a>

```typescript
public readonly StartImportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartImportTask API call.

---

##### `StopGraph`<sup>Required</sup> <a name="StopGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.StopGraph"></a>

```typescript
public readonly StopGraph: string[];
```

- *Type:* string[]

IAM actions required for the StopGraph API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateGraph`<sup>Required</sup> <a name="UpdateGraph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphOperations.property.UpdateGraph"></a>

```typescript
public readonly UpdateGraph: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGraph API call.

---

### NeptuneGraphResources <a name="NeptuneGraphResources" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources"></a>

ARN builders, validators, and parsers for neptune-graph resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.Initializer"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

new neptune_graph.NeptuneGraphResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.exportTask">exportTask</a></code> | Builds an ARN for the export-task resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graph">graph</a></code> | Builds an ARN for the graph resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graphSnapshot">graphSnapshot</a></code> | Builds an ARN for the graph-snapshot resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.importTask">importTask</a></code> | Builds an ARN for the import-task resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidExportTaskArn">isValidExportTaskArn</a></code> | Validates whether a string is a valid ARN for the export-task resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphArn">isValidGraphArn</a></code> | Validates whether a string is a valid ARN for the graph resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphSnapshotArn">isValidGraphSnapshotArn</a></code> | Validates whether a string is a valid ARN for the graph-snapshot resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidImportTaskArn">isValidImportTaskArn</a></code> | Validates whether a string is a valid ARN for the import-task resource. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseExportTaskArn">parseExportTaskArn</a></code> | Parses a export-task ARN into its components. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphArn">parseGraphArn</a></code> | Parses a graph ARN into its components. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphSnapshotArn">parseGraphSnapshotArn</a></code> | Parses a graph-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseImportTaskArn">parseImportTaskArn</a></code> | Parses a import-task ARN into its components. |

---

##### `exportTask` <a name="exportTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.exportTask"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.exportTask(props: NeptuneGraphExportTaskArnProps)
```

Builds an ARN for the export-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.exportTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphExportTaskArnProps">NeptuneGraphExportTaskArnProps</a>

---

##### `graph` <a name="graph" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graph"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.graph(props: NeptuneGraphGraphArnProps)
```

Builds an ARN for the graph resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graph.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphArnProps">NeptuneGraphGraphArnProps</a>

---

##### `graphSnapshot` <a name="graphSnapshot" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graphSnapshot"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.graphSnapshot(props: NeptuneGraphGraphSnapshotArnProps)
```

Builds an ARN for the graph-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.graphSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphGraphSnapshotArnProps">NeptuneGraphGraphSnapshotArnProps</a>

---

##### `importTask` <a name="importTask" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.importTask"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.importTask(props: NeptuneGraphImportTaskArnProps)
```

Builds an ARN for the import-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.importTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.neptune_graph.NeptuneGraphImportTaskArnProps">NeptuneGraphImportTaskArnProps</a>

---

##### `isValidExportTaskArn` <a name="isValidExportTaskArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidExportTaskArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.isValidExportTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the export-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidExportTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGraphArn` <a name="isValidGraphArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.isValidGraphArn(arn: string)
```

Validates whether a string is a valid ARN for the graph resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGraphSnapshotArn` <a name="isValidGraphSnapshotArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphSnapshotArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.isValidGraphSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the graph-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidGraphSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportTaskArn` <a name="isValidImportTaskArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidImportTaskArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.isValidImportTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the import-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.isValidImportTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportTaskArn` <a name="parseExportTaskArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseExportTaskArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.parseExportTaskArn(arn: string)
```

Parses a export-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseExportTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGraphArn` <a name="parseGraphArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.parseGraphArn(arn: string)
```

Parses a graph ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGraphSnapshotArn` <a name="parseGraphSnapshotArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphSnapshotArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.parseGraphSnapshotArn(arn: string)
```

Parses a graph-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseGraphSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportTaskArn` <a name="parseImportTaskArn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseImportTaskArn"></a>

```typescript
import { neptune_graph } from '@cdk_utils/iam'

neptune_graph.NeptuneGraphResources.parseImportTaskArn(arn: string)
```

Parses a import-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_graph.NeptuneGraphResources.parseImportTaskArn.parameter.arn"></a>

- *Type:* string

---




