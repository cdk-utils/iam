# `neptune_db` Submodule <a name="`neptune_db` Submodule" id="@cdk_utils/iam.neptune_db"></a>


## Structs <a name="Structs" id="Structs"></a>

### NeptuneDBDatabaseArnComponents <a name="NeptuneDBDatabaseArnComponents" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents"></a>

Parsed components of a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

const neptuneDBDatabaseArnComponents: neptune_db.NeptuneDBDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | The ClusterResourceId component. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

The ClusterResourceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NeptuneDBDatabaseArnProps <a name="NeptuneDBDatabaseArnProps" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps"></a>

Properties for building a database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

const neptuneDBDatabaseArnProps: neptune_db.NeptuneDBDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | The ClusterResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

The ClusterResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDBActions <a name="NeptuneDBActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions"></a>

IAM action constants for the neptune-db service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

new neptune_db.NeptuneDBActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetEngineStatus">actionGetEngineStatus</a></code> | <code>string</code> | [Read] neptune-db:GetEngineStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetGraphSummary">actionGetGraphSummary</a></code> | <code>string</code> | [Read] neptune-db:GetGraphSummary. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetLoaderJobStatus">actionGetLoaderJobStatus</a></code> | <code>string</code> | [Read] neptune-db:GetLoaderJobStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLDataProcessingJobStatus">actionGetMLDataProcessingJobStatus</a></code> | <code>string</code> | [Read] neptune-db:GetMLDataProcessingJobStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLEndpointStatus">actionGetMLEndpointStatus</a></code> | <code>string</code> | [Read] neptune-db:GetMLEndpointStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLModelTrainingJobStatus">actionGetMLModelTrainingJobStatus</a></code> | <code>string</code> | [Read] neptune-db:GetMLModelTrainingJobStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLModelTransformJobStatus">actionGetMLModelTransformJobStatus</a></code> | <code>string</code> | [Read] neptune-db:GetMLModelTransformJobStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetQueryStatus">actionGetQueryStatus</a></code> | <code>string</code> | [Read] neptune-db:GetQueryStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetStatisticsStatus">actionGetStatisticsStatus</a></code> | <code>string</code> | [Read] neptune-db:GetStatisticsStatus. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetStreamRecords">actionGetStreamRecords</a></code> | <code>string</code> | [Read] neptune-db:GetStreamRecords. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelLoaderJob">CancelLoaderJob</a></code> | <code>string</code> | [Write] neptune-db:CancelLoaderJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLDataProcessingJob">CancelMLDataProcessingJob</a></code> | <code>string</code> | [Write] neptune-db:CancelMLDataProcessingJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLModelTrainingJob">CancelMLModelTrainingJob</a></code> | <code>string</code> | [Write] neptune-db:CancelMLModelTrainingJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLModelTransformJob">CancelMLModelTransformJob</a></code> | <code>string</code> | [Write] neptune-db:CancelMLModelTransformJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] neptune-db:CancelQuery. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.connect">connect</a></code> | <code>string</code> | [Write] neptune-db:connect. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CreateMLEndpoint">CreateMLEndpoint</a></code> | <code>string</code> | [Write] neptune-db:CreateMLEndpoint. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteDataViaQuery">DeleteDataViaQuery</a></code> | <code>string</code> | [Write] neptune-db:DeleteDataViaQuery. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteMLEndpoint">DeleteMLEndpoint</a></code> | <code>string</code> | [Write] neptune-db:DeleteMLEndpoint. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteStatistics">DeleteStatistics</a></code> | <code>string</code> | [Write] neptune-db:DeleteStatistics. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListLoaderJobs">ListLoaderJobs</a></code> | <code>string</code> | [List] neptune-db:ListLoaderJobs. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLDataProcessingJobs">ListMLDataProcessingJobs</a></code> | <code>string</code> | [List] neptune-db:ListMLDataProcessingJobs. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLEndpoints">ListMLEndpoints</a></code> | <code>string</code> | [List] neptune-db:ListMLEndpoints. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLModelTrainingJobs">ListMLModelTrainingJobs</a></code> | <code>string</code> | [List] neptune-db:ListMLModelTrainingJobs. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLModelTransformJobs">ListMLModelTransformJobs</a></code> | <code>string</code> | [List] neptune-db:ListMLModelTransformJobs. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ManageStatistics">ManageStatistics</a></code> | <code>string</code> | [Write] neptune-db:ManageStatistics. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ReadDataViaQuery">ReadDataViaQuery</a></code> | <code>string</code> | [Read] neptune-db:ReadDataViaQuery. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ResetDatabase">ResetDatabase</a></code> | <code>string</code> | [Write] neptune-db:ResetDatabase. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartLoaderJob">StartLoaderJob</a></code> | <code>string</code> | [Write] neptune-db:StartLoaderJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLDataProcessingJob">StartMLDataProcessingJob</a></code> | <code>string</code> | [Write] neptune-db:StartMLDataProcessingJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLModelTrainingJob">StartMLModelTrainingJob</a></code> | <code>string</code> | [Write] neptune-db:StartMLModelTrainingJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLModelTransformJob">StartMLModelTransformJob</a></code> | <code>string</code> | [Write] neptune-db:StartMLModelTransformJob. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBActions.property.WriteDataViaQuery">WriteDataViaQuery</a></code> | <code>string</code> | [Write] neptune-db:WriteDataViaQuery. |

---

##### `actionGetEngineStatus`<sup>Required</sup> <a name="actionGetEngineStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetEngineStatus"></a>

```typescript
public readonly actionGetEngineStatus: string;
```

- *Type:* string

[Read] neptune-db:GetEngineStatus.

---

##### `actionGetGraphSummary`<sup>Required</sup> <a name="actionGetGraphSummary" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetGraphSummary"></a>

```typescript
public readonly actionGetGraphSummary: string;
```

- *Type:* string

[Read] neptune-db:GetGraphSummary.

---

##### `actionGetLoaderJobStatus`<sup>Required</sup> <a name="actionGetLoaderJobStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetLoaderJobStatus"></a>

```typescript
public readonly actionGetLoaderJobStatus: string;
```

- *Type:* string

[Read] neptune-db:GetLoaderJobStatus.

---

##### `actionGetMLDataProcessingJobStatus`<sup>Required</sup> <a name="actionGetMLDataProcessingJobStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLDataProcessingJobStatus"></a>

```typescript
public readonly actionGetMLDataProcessingJobStatus: string;
```

- *Type:* string

[Read] neptune-db:GetMLDataProcessingJobStatus.

---

##### `actionGetMLEndpointStatus`<sup>Required</sup> <a name="actionGetMLEndpointStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLEndpointStatus"></a>

```typescript
public readonly actionGetMLEndpointStatus: string;
```

- *Type:* string

[Read] neptune-db:GetMLEndpointStatus.

---

##### `actionGetMLModelTrainingJobStatus`<sup>Required</sup> <a name="actionGetMLModelTrainingJobStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLModelTrainingJobStatus"></a>

```typescript
public readonly actionGetMLModelTrainingJobStatus: string;
```

- *Type:* string

[Read] neptune-db:GetMLModelTrainingJobStatus.

---

##### `actionGetMLModelTransformJobStatus`<sup>Required</sup> <a name="actionGetMLModelTransformJobStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetMLModelTransformJobStatus"></a>

```typescript
public readonly actionGetMLModelTransformJobStatus: string;
```

- *Type:* string

[Read] neptune-db:GetMLModelTransformJobStatus.

---

##### `actionGetQueryStatus`<sup>Required</sup> <a name="actionGetQueryStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetQueryStatus"></a>

```typescript
public readonly actionGetQueryStatus: string;
```

- *Type:* string

[Read] neptune-db:GetQueryStatus.

---

##### `actionGetStatisticsStatus`<sup>Required</sup> <a name="actionGetStatisticsStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetStatisticsStatus"></a>

```typescript
public readonly actionGetStatisticsStatus: string;
```

- *Type:* string

[Read] neptune-db:GetStatisticsStatus.

---

##### `actionGetStreamRecords`<sup>Required</sup> <a name="actionGetStreamRecords" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.actionGetStreamRecords"></a>

```typescript
public readonly actionGetStreamRecords: string;
```

- *Type:* string

[Read] neptune-db:GetStreamRecords.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelLoaderJob`<sup>Required</sup> <a name="CancelLoaderJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelLoaderJob"></a>

```typescript
public readonly CancelLoaderJob: string;
```

- *Type:* string

[Write] neptune-db:CancelLoaderJob.

---

##### `CancelMLDataProcessingJob`<sup>Required</sup> <a name="CancelMLDataProcessingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLDataProcessingJob"></a>

```typescript
public readonly CancelMLDataProcessingJob: string;
```

- *Type:* string

[Write] neptune-db:CancelMLDataProcessingJob.

---

##### `CancelMLModelTrainingJob`<sup>Required</sup> <a name="CancelMLModelTrainingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLModelTrainingJob"></a>

```typescript
public readonly CancelMLModelTrainingJob: string;
```

- *Type:* string

[Write] neptune-db:CancelMLModelTrainingJob.

---

##### `CancelMLModelTransformJob`<sup>Required</sup> <a name="CancelMLModelTransformJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelMLModelTransformJob"></a>

```typescript
public readonly CancelMLModelTransformJob: string;
```

- *Type:* string

[Write] neptune-db:CancelMLModelTransformJob.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] neptune-db:CancelQuery.

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.connect"></a>

```typescript
public readonly connect: string;
```

- *Type:* string

[Write] neptune-db:connect.

---

##### `CreateMLEndpoint`<sup>Required</sup> <a name="CreateMLEndpoint" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.CreateMLEndpoint"></a>

```typescript
public readonly CreateMLEndpoint: string;
```

- *Type:* string

[Write] neptune-db:CreateMLEndpoint.

---

##### `DeleteDataViaQuery`<sup>Required</sup> <a name="DeleteDataViaQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteDataViaQuery"></a>

```typescript
public readonly DeleteDataViaQuery: string;
```

- *Type:* string

[Write] neptune-db:DeleteDataViaQuery.

---

##### `DeleteMLEndpoint`<sup>Required</sup> <a name="DeleteMLEndpoint" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteMLEndpoint"></a>

```typescript
public readonly DeleteMLEndpoint: string;
```

- *Type:* string

[Write] neptune-db:DeleteMLEndpoint.

---

##### `DeleteStatistics`<sup>Required</sup> <a name="DeleteStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.DeleteStatistics"></a>

```typescript
public readonly DeleteStatistics: string;
```

- *Type:* string

[Write] neptune-db:DeleteStatistics.

---

##### `ListLoaderJobs`<sup>Required</sup> <a name="ListLoaderJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListLoaderJobs"></a>

```typescript
public readonly ListLoaderJobs: string;
```

- *Type:* string

[List] neptune-db:ListLoaderJobs.

---

##### `ListMLDataProcessingJobs`<sup>Required</sup> <a name="ListMLDataProcessingJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLDataProcessingJobs"></a>

```typescript
public readonly ListMLDataProcessingJobs: string;
```

- *Type:* string

[List] neptune-db:ListMLDataProcessingJobs.

---

##### `ListMLEndpoints`<sup>Required</sup> <a name="ListMLEndpoints" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLEndpoints"></a>

```typescript
public readonly ListMLEndpoints: string;
```

- *Type:* string

[List] neptune-db:ListMLEndpoints.

---

##### `ListMLModelTrainingJobs`<sup>Required</sup> <a name="ListMLModelTrainingJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLModelTrainingJobs"></a>

```typescript
public readonly ListMLModelTrainingJobs: string;
```

- *Type:* string

[List] neptune-db:ListMLModelTrainingJobs.

---

##### `ListMLModelTransformJobs`<sup>Required</sup> <a name="ListMLModelTransformJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ListMLModelTransformJobs"></a>

```typescript
public readonly ListMLModelTransformJobs: string;
```

- *Type:* string

[List] neptune-db:ListMLModelTransformJobs.

---

##### `ManageStatistics`<sup>Required</sup> <a name="ManageStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ManageStatistics"></a>

```typescript
public readonly ManageStatistics: string;
```

- *Type:* string

[Write] neptune-db:ManageStatistics.

---

##### `ReadDataViaQuery`<sup>Required</sup> <a name="ReadDataViaQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ReadDataViaQuery"></a>

```typescript
public readonly ReadDataViaQuery: string;
```

- *Type:* string

[Read] neptune-db:ReadDataViaQuery.

---

##### `ResetDatabase`<sup>Required</sup> <a name="ResetDatabase" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.ResetDatabase"></a>

```typescript
public readonly ResetDatabase: string;
```

- *Type:* string

[Write] neptune-db:ResetDatabase.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartLoaderJob`<sup>Required</sup> <a name="StartLoaderJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartLoaderJob"></a>

```typescript
public readonly StartLoaderJob: string;
```

- *Type:* string

[Write] neptune-db:StartLoaderJob.

---

##### `StartMLDataProcessingJob`<sup>Required</sup> <a name="StartMLDataProcessingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLDataProcessingJob"></a>

```typescript
public readonly StartMLDataProcessingJob: string;
```

- *Type:* string

[Write] neptune-db:StartMLDataProcessingJob.

---

##### `StartMLModelTrainingJob`<sup>Required</sup> <a name="StartMLModelTrainingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLModelTrainingJob"></a>

```typescript
public readonly StartMLModelTrainingJob: string;
```

- *Type:* string

[Write] neptune-db:StartMLModelTrainingJob.

---

##### `StartMLModelTransformJob`<sup>Required</sup> <a name="StartMLModelTransformJob" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.StartMLModelTransformJob"></a>

```typescript
public readonly StartMLModelTransformJob: string;
```

- *Type:* string

[Write] neptune-db:StartMLModelTransformJob.

---

##### `WriteDataViaQuery`<sup>Required</sup> <a name="WriteDataViaQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBActions.property.WriteDataViaQuery"></a>

```typescript
public readonly WriteDataViaQuery: string;
```

- *Type:* string

[Write] neptune-db:WriteDataViaQuery.

---

### NeptuneDBConditions <a name="NeptuneDBConditions" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions"></a>

Condition key constants and builders for neptune-db.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

new neptune_db.NeptuneDBConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.queryLanguage">queryLanguage</a></code> | Generates a condition block for `neptune-db:QueryLanguage`. |

---

##### `queryLanguage` <a name="queryLanguage" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.queryLanguage"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

neptune_db.NeptuneDBConditions.queryLanguage(value: string)
```

Generates a condition block for `neptune-db:QueryLanguage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.queryLanguage.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.actionGetQueryStatusConditionKeys">actionGetQueryStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQueryStatus action. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.actionGetStreamRecordsConditionKeys">actionGetStreamRecordsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetStreamRecords action. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.DeleteDataViaQueryConditionKeys">DeleteDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataViaQuery action. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.QUERY_LANGUAGE">QUERY_LANGUAGE</a></code> | <code>string</code> | Condition key: neptune-db:QueryLanguage (String). |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.ReadDataViaQueryConditionKeys">ReadDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReadDataViaQuery action. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.WriteDataViaQueryConditionKeys">WriteDataViaQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the WriteDataViaQuery action. |

---

##### `actionGetQueryStatusConditionKeys`<sup>Required</sup> <a name="actionGetQueryStatusConditionKeys" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.actionGetQueryStatusConditionKeys"></a>

```typescript
public readonly actionGetQueryStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQueryStatus action.

---

##### `actionGetStreamRecordsConditionKeys`<sup>Required</sup> <a name="actionGetStreamRecordsConditionKeys" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.actionGetStreamRecordsConditionKeys"></a>

```typescript
public readonly actionGetStreamRecordsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetStreamRecords action.

---

##### `DeleteDataViaQueryConditionKeys`<sup>Required</sup> <a name="DeleteDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.DeleteDataViaQueryConditionKeys"></a>

```typescript
public readonly DeleteDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataViaQuery action.

---

##### `QUERY_LANGUAGE`<sup>Required</sup> <a name="QUERY_LANGUAGE" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.QUERY_LANGUAGE"></a>

```typescript
public readonly QUERY_LANGUAGE: string;
```

- *Type:* string

Condition key: neptune-db:QueryLanguage (String).

---

##### `ReadDataViaQueryConditionKeys`<sup>Required</sup> <a name="ReadDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.ReadDataViaQueryConditionKeys"></a>

```typescript
public readonly ReadDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReadDataViaQuery action.

---

##### `WriteDataViaQueryConditionKeys`<sup>Required</sup> <a name="WriteDataViaQueryConditionKeys" id="@cdk_utils/iam.neptune_db.NeptuneDBConditions.property.WriteDataViaQueryConditionKeys"></a>

```typescript
public readonly WriteDataViaQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the WriteDataViaQuery action.

---

### NeptuneDBOperations <a name="NeptuneDBOperations" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations"></a>

API operation to required IAM actions mapping for neptune-db.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

new neptune_db.NeptuneDBOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelGremlinQuery">CancelGremlinQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelGremlinQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelLoaderJob">CancelLoaderJob</a></code> | <code>string[]</code> | IAM actions required for the CancelLoaderJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLDataProcessingJob">CancelMLDataProcessingJob</a></code> | <code>string[]</code> | IAM actions required for the CancelMLDataProcessingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLModelTrainingJob">CancelMLModelTrainingJob</a></code> | <code>string[]</code> | IAM actions required for the CancelMLModelTrainingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLModelTransformJob">CancelMLModelTransformJob</a></code> | <code>string[]</code> | IAM actions required for the CancelMLModelTransformJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelOpenCypherQuery">CancelOpenCypherQuery</a></code> | <code>string[]</code> | IAM actions required for the CancelOpenCypherQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CreateMLEndpoint">CreateMLEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateMLEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeleteMLEndpoint">DeleteMLEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteMLEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeletePropertygraphStatistics">DeletePropertygraphStatistics</a></code> | <code>string[]</code> | IAM actions required for the DeletePropertygraphStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeleteSparqlStatistics">DeleteSparqlStatistics</a></code> | <code>string[]</code> | IAM actions required for the DeleteSparqlStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteFastReset">ExecuteFastReset</a></code> | <code>string[]</code> | IAM actions required for the ExecuteFastReset API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinExplainQuery">ExecuteGremlinExplainQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteGremlinExplainQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinProfileQuery">ExecuteGremlinProfileQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteGremlinProfileQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinQuery">ExecuteGremlinQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteGremlinQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteOpenCypherExplainQuery">ExecuteOpenCypherExplainQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteOpenCypherExplainQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteOpenCypherQuery">ExecuteOpenCypherQuery</a></code> | <code>string[]</code> | IAM actions required for the ExecuteOpenCypherQuery API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListGremlinQueries">ListGremlinQueries</a></code> | <code>string[]</code> | IAM actions required for the ListGremlinQueries API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListLoaderJobs">ListLoaderJobs</a></code> | <code>string[]</code> | IAM actions required for the ListLoaderJobs API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLDataProcessingJobs">ListMLDataProcessingJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMLDataProcessingJobs API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLEndpoints">ListMLEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListMLEndpoints API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLModelTrainingJobs">ListMLModelTrainingJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMLModelTrainingJobs API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLModelTransformJobs">ListMLModelTransformJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMLModelTransformJobs API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListOpenCypherQueries">ListOpenCypherQueries</a></code> | <code>string[]</code> | IAM actions required for the ListOpenCypherQueries API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ManagePropertygraphStatistics">ManagePropertygraphStatistics</a></code> | <code>string[]</code> | IAM actions required for the ManagePropertygraphStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ManageSparqlStatistics">ManageSparqlStatistics</a></code> | <code>string[]</code> | IAM actions required for the ManageSparqlStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetEngineStatus">opGetEngineStatus</a></code> | <code>string[]</code> | IAM actions required for the GetEngineStatus API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetGremlinQueryStatus">opGetGremlinQueryStatus</a></code> | <code>string[]</code> | IAM actions required for the GetGremlinQueryStatus API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetLoaderJobStatus">opGetLoaderJobStatus</a></code> | <code>string[]</code> | IAM actions required for the GetLoaderJobStatus API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLDataProcessingJob">opGetMLDataProcessingJob</a></code> | <code>string[]</code> | IAM actions required for the GetMLDataProcessingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLEndpoint">opGetMLEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetMLEndpoint API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLModelTrainingJob">opGetMLModelTrainingJob</a></code> | <code>string[]</code> | IAM actions required for the GetMLModelTrainingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLModelTransformJob">opGetMLModelTransformJob</a></code> | <code>string[]</code> | IAM actions required for the GetMLModelTransformJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetOpenCypherQueryStatus">opGetOpenCypherQueryStatus</a></code> | <code>string[]</code> | IAM actions required for the GetOpenCypherQueryStatus API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphStatistics">opGetPropertygraphStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetPropertygraphStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphStream">opGetPropertygraphStream</a></code> | <code>string[]</code> | IAM actions required for the GetPropertygraphStream API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphSummary">opGetPropertygraphSummary</a></code> | <code>string[]</code> | IAM actions required for the GetPropertygraphSummary API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetRDFGraphSummary">opGetRDFGraphSummary</a></code> | <code>string[]</code> | IAM actions required for the GetRDFGraphSummary API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetSparqlStatistics">opGetSparqlStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetSparqlStatistics API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetSparqlStream">opGetSparqlStream</a></code> | <code>string[]</code> | IAM actions required for the GetSparqlStream API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartLoaderJob">StartLoaderJob</a></code> | <code>string[]</code> | IAM actions required for the StartLoaderJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLDataProcessingJob">StartMLDataProcessingJob</a></code> | <code>string[]</code> | IAM actions required for the StartMLDataProcessingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLModelTrainingJob">StartMLModelTrainingJob</a></code> | <code>string[]</code> | IAM actions required for the StartMLModelTrainingJob API call. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLModelTransformJob">StartMLModelTransformJob</a></code> | <code>string[]</code> | IAM actions required for the StartMLModelTransformJob API call. |

---

##### `CancelGremlinQuery`<sup>Required</sup> <a name="CancelGremlinQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelGremlinQuery"></a>

```typescript
public readonly CancelGremlinQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelGremlinQuery API call.

---

##### `CancelLoaderJob`<sup>Required</sup> <a name="CancelLoaderJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelLoaderJob"></a>

```typescript
public readonly CancelLoaderJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelLoaderJob API call.

---

##### `CancelMLDataProcessingJob`<sup>Required</sup> <a name="CancelMLDataProcessingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLDataProcessingJob"></a>

```typescript
public readonly CancelMLDataProcessingJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelMLDataProcessingJob API call.

---

##### `CancelMLModelTrainingJob`<sup>Required</sup> <a name="CancelMLModelTrainingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLModelTrainingJob"></a>

```typescript
public readonly CancelMLModelTrainingJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelMLModelTrainingJob API call.

---

##### `CancelMLModelTransformJob`<sup>Required</sup> <a name="CancelMLModelTransformJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelMLModelTransformJob"></a>

```typescript
public readonly CancelMLModelTransformJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelMLModelTransformJob API call.

---

##### `CancelOpenCypherQuery`<sup>Required</sup> <a name="CancelOpenCypherQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CancelOpenCypherQuery"></a>

```typescript
public readonly CancelOpenCypherQuery: string[];
```

- *Type:* string[]

IAM actions required for the CancelOpenCypherQuery API call.

---

##### `CreateMLEndpoint`<sup>Required</sup> <a name="CreateMLEndpoint" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.CreateMLEndpoint"></a>

```typescript
public readonly CreateMLEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateMLEndpoint API call.

---

##### `DeleteMLEndpoint`<sup>Required</sup> <a name="DeleteMLEndpoint" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeleteMLEndpoint"></a>

```typescript
public readonly DeleteMLEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMLEndpoint API call.

---

##### `DeletePropertygraphStatistics`<sup>Required</sup> <a name="DeletePropertygraphStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeletePropertygraphStatistics"></a>

```typescript
public readonly DeletePropertygraphStatistics: string[];
```

- *Type:* string[]

IAM actions required for the DeletePropertygraphStatistics API call.

---

##### `DeleteSparqlStatistics`<sup>Required</sup> <a name="DeleteSparqlStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.DeleteSparqlStatistics"></a>

```typescript
public readonly DeleteSparqlStatistics: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSparqlStatistics API call.

---

##### `ExecuteFastReset`<sup>Required</sup> <a name="ExecuteFastReset" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteFastReset"></a>

```typescript
public readonly ExecuteFastReset: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteFastReset API call.

---

##### `ExecuteGremlinExplainQuery`<sup>Required</sup> <a name="ExecuteGremlinExplainQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinExplainQuery"></a>

```typescript
public readonly ExecuteGremlinExplainQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteGremlinExplainQuery API call.

---

##### `ExecuteGremlinProfileQuery`<sup>Required</sup> <a name="ExecuteGremlinProfileQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinProfileQuery"></a>

```typescript
public readonly ExecuteGremlinProfileQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteGremlinProfileQuery API call.

---

##### `ExecuteGremlinQuery`<sup>Required</sup> <a name="ExecuteGremlinQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteGremlinQuery"></a>

```typescript
public readonly ExecuteGremlinQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteGremlinQuery API call.

---

##### `ExecuteOpenCypherExplainQuery`<sup>Required</sup> <a name="ExecuteOpenCypherExplainQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteOpenCypherExplainQuery"></a>

```typescript
public readonly ExecuteOpenCypherExplainQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteOpenCypherExplainQuery API call.

---

##### `ExecuteOpenCypherQuery`<sup>Required</sup> <a name="ExecuteOpenCypherQuery" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ExecuteOpenCypherQuery"></a>

```typescript
public readonly ExecuteOpenCypherQuery: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteOpenCypherQuery API call.

---

##### `ListGremlinQueries`<sup>Required</sup> <a name="ListGremlinQueries" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListGremlinQueries"></a>

```typescript
public readonly ListGremlinQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListGremlinQueries API call.

---

##### `ListLoaderJobs`<sup>Required</sup> <a name="ListLoaderJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListLoaderJobs"></a>

```typescript
public readonly ListLoaderJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListLoaderJobs API call.

---

##### `ListMLDataProcessingJobs`<sup>Required</sup> <a name="ListMLDataProcessingJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLDataProcessingJobs"></a>

```typescript
public readonly ListMLDataProcessingJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMLDataProcessingJobs API call.

---

##### `ListMLEndpoints`<sup>Required</sup> <a name="ListMLEndpoints" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLEndpoints"></a>

```typescript
public readonly ListMLEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListMLEndpoints API call.

---

##### `ListMLModelTrainingJobs`<sup>Required</sup> <a name="ListMLModelTrainingJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLModelTrainingJobs"></a>

```typescript
public readonly ListMLModelTrainingJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMLModelTrainingJobs API call.

---

##### `ListMLModelTransformJobs`<sup>Required</sup> <a name="ListMLModelTransformJobs" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListMLModelTransformJobs"></a>

```typescript
public readonly ListMLModelTransformJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMLModelTransformJobs API call.

---

##### `ListOpenCypherQueries`<sup>Required</sup> <a name="ListOpenCypherQueries" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ListOpenCypherQueries"></a>

```typescript
public readonly ListOpenCypherQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListOpenCypherQueries API call.

---

##### `ManagePropertygraphStatistics`<sup>Required</sup> <a name="ManagePropertygraphStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ManagePropertygraphStatistics"></a>

```typescript
public readonly ManagePropertygraphStatistics: string[];
```

- *Type:* string[]

IAM actions required for the ManagePropertygraphStatistics API call.

---

##### `ManageSparqlStatistics`<sup>Required</sup> <a name="ManageSparqlStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.ManageSparqlStatistics"></a>

```typescript
public readonly ManageSparqlStatistics: string[];
```

- *Type:* string[]

IAM actions required for the ManageSparqlStatistics API call.

---

##### `opGetEngineStatus`<sup>Required</sup> <a name="opGetEngineStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetEngineStatus"></a>

```typescript
public readonly opGetEngineStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetEngineStatus API call.

---

##### `opGetGremlinQueryStatus`<sup>Required</sup> <a name="opGetGremlinQueryStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetGremlinQueryStatus"></a>

```typescript
public readonly opGetGremlinQueryStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetGremlinQueryStatus API call.

---

##### `opGetLoaderJobStatus`<sup>Required</sup> <a name="opGetLoaderJobStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetLoaderJobStatus"></a>

```typescript
public readonly opGetLoaderJobStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetLoaderJobStatus API call.

---

##### `opGetMLDataProcessingJob`<sup>Required</sup> <a name="opGetMLDataProcessingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLDataProcessingJob"></a>

```typescript
public readonly opGetMLDataProcessingJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMLDataProcessingJob API call.

---

##### `opGetMLEndpoint`<sup>Required</sup> <a name="opGetMLEndpoint" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLEndpoint"></a>

```typescript
public readonly opGetMLEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetMLEndpoint API call.

---

##### `opGetMLModelTrainingJob`<sup>Required</sup> <a name="opGetMLModelTrainingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLModelTrainingJob"></a>

```typescript
public readonly opGetMLModelTrainingJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMLModelTrainingJob API call.

---

##### `opGetMLModelTransformJob`<sup>Required</sup> <a name="opGetMLModelTransformJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetMLModelTransformJob"></a>

```typescript
public readonly opGetMLModelTransformJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMLModelTransformJob API call.

---

##### `opGetOpenCypherQueryStatus`<sup>Required</sup> <a name="opGetOpenCypherQueryStatus" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetOpenCypherQueryStatus"></a>

```typescript
public readonly opGetOpenCypherQueryStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetOpenCypherQueryStatus API call.

---

##### `opGetPropertygraphStatistics`<sup>Required</sup> <a name="opGetPropertygraphStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphStatistics"></a>

```typescript
public readonly opGetPropertygraphStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetPropertygraphStatistics API call.

---

##### `opGetPropertygraphStream`<sup>Required</sup> <a name="opGetPropertygraphStream" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphStream"></a>

```typescript
public readonly opGetPropertygraphStream: string[];
```

- *Type:* string[]

IAM actions required for the GetPropertygraphStream API call.

---

##### `opGetPropertygraphSummary`<sup>Required</sup> <a name="opGetPropertygraphSummary" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetPropertygraphSummary"></a>

```typescript
public readonly opGetPropertygraphSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetPropertygraphSummary API call.

---

##### `opGetRDFGraphSummary`<sup>Required</sup> <a name="opGetRDFGraphSummary" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetRDFGraphSummary"></a>

```typescript
public readonly opGetRDFGraphSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetRDFGraphSummary API call.

---

##### `opGetSparqlStatistics`<sup>Required</sup> <a name="opGetSparqlStatistics" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetSparqlStatistics"></a>

```typescript
public readonly opGetSparqlStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetSparqlStatistics API call.

---

##### `opGetSparqlStream`<sup>Required</sup> <a name="opGetSparqlStream" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.opGetSparqlStream"></a>

```typescript
public readonly opGetSparqlStream: string[];
```

- *Type:* string[]

IAM actions required for the GetSparqlStream API call.

---

##### `StartLoaderJob`<sup>Required</sup> <a name="StartLoaderJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartLoaderJob"></a>

```typescript
public readonly StartLoaderJob: string[];
```

- *Type:* string[]

IAM actions required for the StartLoaderJob API call.

---

##### `StartMLDataProcessingJob`<sup>Required</sup> <a name="StartMLDataProcessingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLDataProcessingJob"></a>

```typescript
public readonly StartMLDataProcessingJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMLDataProcessingJob API call.

---

##### `StartMLModelTrainingJob`<sup>Required</sup> <a name="StartMLModelTrainingJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLModelTrainingJob"></a>

```typescript
public readonly StartMLModelTrainingJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMLModelTrainingJob API call.

---

##### `StartMLModelTransformJob`<sup>Required</sup> <a name="StartMLModelTransformJob" id="@cdk_utils/iam.neptune_db.NeptuneDBOperations.property.StartMLModelTransformJob"></a>

```typescript
public readonly StartMLModelTransformJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMLModelTransformJob API call.

---

### NeptuneDBResources <a name="NeptuneDBResources" id="@cdk_utils/iam.neptune_db.NeptuneDBResources"></a>

ARN builders, validators, and parsers for neptune-db resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.Initializer"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

new neptune_db.NeptuneDBResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBResources.database">database</a></code> | Builds an ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBResources.isValidDatabaseArn">isValidDatabaseArn</a></code> | Validates whether a string is a valid ARN for the database resource. |
| <code><a href="#@cdk_utils/iam.neptune_db.NeptuneDBResources.parseDatabaseArn">parseDatabaseArn</a></code> | Parses a database ARN into its components. |

---

##### `database` <a name="database" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.database"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

neptune_db.NeptuneDBResources.database(props: NeptuneDBDatabaseArnProps)
```

Builds an ARN for the database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.database.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.neptune_db.NeptuneDBDatabaseArnProps">NeptuneDBDatabaseArnProps</a>

---

##### `isValidDatabaseArn` <a name="isValidDatabaseArn" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.isValidDatabaseArn"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

neptune_db.NeptuneDBResources.isValidDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.isValidDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatabaseArn` <a name="parseDatabaseArn" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.parseDatabaseArn"></a>

```typescript
import { neptune_db } from '@cdk_utils/iam'

neptune_db.NeptuneDBResources.parseDatabaseArn(arn: string)
```

Parses a database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.neptune_db.NeptuneDBResources.parseDatabaseArn.parameter.arn"></a>

- *Type:* string

---




