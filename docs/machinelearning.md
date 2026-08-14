# `machinelearning` Submodule <a name="`machinelearning` Submodule" id="@cdk_utils/iam.machinelearning"></a>


## Structs <a name="Structs" id="Structs"></a>

### MachineLearningBatchpredictionArnComponents <a name="MachineLearningBatchpredictionArnComponents" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents"></a>

Parsed components of a batchprediction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningBatchpredictionArnComponents: machinelearning.MachineLearningBatchpredictionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.batchPredictionId">batchPredictionId</a></code> | <code>string</code> | The BatchPredictionId component. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `batchPredictionId`<sup>Required</sup> <a name="batchPredictionId" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.batchPredictionId"></a>

```typescript
public readonly batchPredictionId: string;
```

- *Type:* string

The BatchPredictionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MachineLearningBatchpredictionArnProps <a name="MachineLearningBatchpredictionArnProps" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps"></a>

Properties for building a batchprediction ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningBatchpredictionArnProps: machinelearning.MachineLearningBatchpredictionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.batchPredictionId">batchPredictionId</a></code> | <code>string</code> | The BatchPredictionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `batchPredictionId`<sup>Required</sup> <a name="batchPredictionId" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.batchPredictionId"></a>

```typescript
public readonly batchPredictionId: string;
```

- *Type:* string

The BatchPredictionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MachineLearningDatasourceArnComponents <a name="MachineLearningDatasourceArnComponents" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents"></a>

Parsed components of a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningDatasourceArnComponents: machinelearning.MachineLearningDatasourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.datasourceId">datasourceId</a></code> | <code>string</code> | The DatasourceId component. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.datasourceId"></a>

```typescript
public readonly datasourceId: string;
```

- *Type:* string

The DatasourceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MachineLearningDatasourceArnProps <a name="MachineLearningDatasourceArnProps" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps"></a>

Properties for building a datasource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningDatasourceArnProps: machinelearning.MachineLearningDatasourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.datasourceId">datasourceId</a></code> | <code>string</code> | The DatasourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasourceId`<sup>Required</sup> <a name="datasourceId" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.datasourceId"></a>

```typescript
public readonly datasourceId: string;
```

- *Type:* string

The DatasourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MachineLearningEvaluationArnComponents <a name="MachineLearningEvaluationArnComponents" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents"></a>

Parsed components of a evaluation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningEvaluationArnComponents: machinelearning.MachineLearningEvaluationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.evaluationId">evaluationId</a></code> | <code>string</code> | The EvaluationId component. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

The EvaluationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MachineLearningEvaluationArnProps <a name="MachineLearningEvaluationArnProps" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps"></a>

Properties for building a evaluation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningEvaluationArnProps: machinelearning.MachineLearningEvaluationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.evaluationId">evaluationId</a></code> | <code>string</code> | The EvaluationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

The EvaluationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MachineLearningMlmodelArnComponents <a name="MachineLearningMlmodelArnComponents" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents"></a>

Parsed components of a mlmodel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningMlmodelArnComponents: machinelearning.MachineLearningMlmodelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.mlModelId">mlModelId</a></code> | <code>string</code> | The MlModelId component. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mlModelId`<sup>Required</sup> <a name="mlModelId" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.mlModelId"></a>

```typescript
public readonly mlModelId: string;
```

- *Type:* string

The MlModelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MachineLearningMlmodelArnProps <a name="MachineLearningMlmodelArnProps" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps"></a>

Properties for building a mlmodel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

const machineLearningMlmodelArnProps: machinelearning.MachineLearningMlmodelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.mlModelId">mlModelId</a></code> | <code>string</code> | The MlModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `mlModelId`<sup>Required</sup> <a name="mlModelId" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.mlModelId"></a>

```typescript
public readonly mlModelId: string;
```

- *Type:* string

The MlModelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningActions <a name="MachineLearningActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions"></a>

IAM action constants for the machinelearning service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.machinelearning.MachineLearningActions.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

new machinelearning.MachineLearningActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetBatchPrediction">actionGetBatchPrediction</a></code> | <code>string</code> | [Read] machinelearning:GetBatchPrediction. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetDataSource">actionGetDataSource</a></code> | <code>string</code> | [Read] machinelearning:GetDataSource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetEvaluation">actionGetEvaluation</a></code> | <code>string</code> | [Read] machinelearning:GetEvaluation. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetMLModel">actionGetMLModel</a></code> | <code>string</code> | [Read] machinelearning:GetMLModel. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] machinelearning:AddTags. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateBatchPrediction">CreateBatchPrediction</a></code> | <code>string</code> | [Write] machinelearning:CreateBatchPrediction. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromRDS">CreateDataSourceFromRDS</a></code> | <code>string</code> | [Write] machinelearning:CreateDataSourceFromRDS. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromRedshift">CreateDataSourceFromRedshift</a></code> | <code>string</code> | [Write] machinelearning:CreateDataSourceFromRedshift. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromS3">CreateDataSourceFromS3</a></code> | <code>string</code> | [Write] machinelearning:CreateDataSourceFromS3. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateEvaluation">CreateEvaluation</a></code> | <code>string</code> | [Write] machinelearning:CreateEvaluation. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateMLModel">CreateMLModel</a></code> | <code>string</code> | [Write] machinelearning:CreateMLModel. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateRealtimeEndpoint">CreateRealtimeEndpoint</a></code> | <code>string</code> | [Write] machinelearning:CreateRealtimeEndpoint. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteBatchPrediction">DeleteBatchPrediction</a></code> | <code>string</code> | [Write] machinelearning:DeleteBatchPrediction. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string</code> | [Write] machinelearning:DeleteDataSource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteEvaluation">DeleteEvaluation</a></code> | <code>string</code> | [Write] machinelearning:DeleteEvaluation. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteMLModel">DeleteMLModel</a></code> | <code>string</code> | [Write] machinelearning:DeleteMLModel. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteRealtimeEndpoint">DeleteRealtimeEndpoint</a></code> | <code>string</code> | [Write] machinelearning:DeleteRealtimeEndpoint. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] machinelearning:DeleteTags. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeBatchPredictions">DescribeBatchPredictions</a></code> | <code>string</code> | [List] machinelearning:DescribeBatchPredictions. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeDataSources">DescribeDataSources</a></code> | <code>string</code> | [List] machinelearning:DescribeDataSources. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeEvaluations">DescribeEvaluations</a></code> | <code>string</code> | [List] machinelearning:DescribeEvaluations. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeMLModels">DescribeMLModels</a></code> | <code>string</code> | [List] machinelearning:DescribeMLModels. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [List] machinelearning:DescribeTags. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.Predict">Predict</a></code> | <code>string</code> | [Write] machinelearning:Predict. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateBatchPrediction">UpdateBatchPrediction</a></code> | <code>string</code> | [Write] machinelearning:UpdateBatchPrediction. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string</code> | [Write] machinelearning:UpdateDataSource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateEvaluation">UpdateEvaluation</a></code> | <code>string</code> | [Write] machinelearning:UpdateEvaluation. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateMLModel">UpdateMLModel</a></code> | <code>string</code> | [Write] machinelearning:UpdateMLModel. |

---

##### `actionGetBatchPrediction`<sup>Required</sup> <a name="actionGetBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetBatchPrediction"></a>

```typescript
public readonly actionGetBatchPrediction: string;
```

- *Type:* string

[Read] machinelearning:GetBatchPrediction.

---

##### `actionGetDataSource`<sup>Required</sup> <a name="actionGetDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetDataSource"></a>

```typescript
public readonly actionGetDataSource: string;
```

- *Type:* string

[Read] machinelearning:GetDataSource.

---

##### `actionGetEvaluation`<sup>Required</sup> <a name="actionGetEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetEvaluation"></a>

```typescript
public readonly actionGetEvaluation: string;
```

- *Type:* string

[Read] machinelearning:GetEvaluation.

---

##### `actionGetMLModel`<sup>Required</sup> <a name="actionGetMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.actionGetMLModel"></a>

```typescript
public readonly actionGetMLModel: string;
```

- *Type:* string

[Read] machinelearning:GetMLModel.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] machinelearning:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBatchPrediction`<sup>Required</sup> <a name="CreateBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateBatchPrediction"></a>

```typescript
public readonly CreateBatchPrediction: string;
```

- *Type:* string

[Write] machinelearning:CreateBatchPrediction.

---

##### `CreateDataSourceFromRDS`<sup>Required</sup> <a name="CreateDataSourceFromRDS" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromRDS"></a>

```typescript
public readonly CreateDataSourceFromRDS: string;
```

- *Type:* string

[Write] machinelearning:CreateDataSourceFromRDS.

---

##### `CreateDataSourceFromRedshift`<sup>Required</sup> <a name="CreateDataSourceFromRedshift" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromRedshift"></a>

```typescript
public readonly CreateDataSourceFromRedshift: string;
```

- *Type:* string

[Write] machinelearning:CreateDataSourceFromRedshift.

---

##### `CreateDataSourceFromS3`<sup>Required</sup> <a name="CreateDataSourceFromS3" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateDataSourceFromS3"></a>

```typescript
public readonly CreateDataSourceFromS3: string;
```

- *Type:* string

[Write] machinelearning:CreateDataSourceFromS3.

---

##### `CreateEvaluation`<sup>Required</sup> <a name="CreateEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateEvaluation"></a>

```typescript
public readonly CreateEvaluation: string;
```

- *Type:* string

[Write] machinelearning:CreateEvaluation.

---

##### `CreateMLModel`<sup>Required</sup> <a name="CreateMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateMLModel"></a>

```typescript
public readonly CreateMLModel: string;
```

- *Type:* string

[Write] machinelearning:CreateMLModel.

---

##### `CreateRealtimeEndpoint`<sup>Required</sup> <a name="CreateRealtimeEndpoint" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.CreateRealtimeEndpoint"></a>

```typescript
public readonly CreateRealtimeEndpoint: string;
```

- *Type:* string

[Write] machinelearning:CreateRealtimeEndpoint.

---

##### `DeleteBatchPrediction`<sup>Required</sup> <a name="DeleteBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteBatchPrediction"></a>

```typescript
public readonly DeleteBatchPrediction: string;
```

- *Type:* string

[Write] machinelearning:DeleteBatchPrediction.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string;
```

- *Type:* string

[Write] machinelearning:DeleteDataSource.

---

##### `DeleteEvaluation`<sup>Required</sup> <a name="DeleteEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteEvaluation"></a>

```typescript
public readonly DeleteEvaluation: string;
```

- *Type:* string

[Write] machinelearning:DeleteEvaluation.

---

##### `DeleteMLModel`<sup>Required</sup> <a name="DeleteMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteMLModel"></a>

```typescript
public readonly DeleteMLModel: string;
```

- *Type:* string

[Write] machinelearning:DeleteMLModel.

---

##### `DeleteRealtimeEndpoint`<sup>Required</sup> <a name="DeleteRealtimeEndpoint" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteRealtimeEndpoint"></a>

```typescript
public readonly DeleteRealtimeEndpoint: string;
```

- *Type:* string

[Write] machinelearning:DeleteRealtimeEndpoint.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] machinelearning:DeleteTags.

---

##### `DescribeBatchPredictions`<sup>Required</sup> <a name="DescribeBatchPredictions" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeBatchPredictions"></a>

```typescript
public readonly DescribeBatchPredictions: string;
```

- *Type:* string

[List] machinelearning:DescribeBatchPredictions.

---

##### `DescribeDataSources`<sup>Required</sup> <a name="DescribeDataSources" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeDataSources"></a>

```typescript
public readonly DescribeDataSources: string;
```

- *Type:* string

[List] machinelearning:DescribeDataSources.

---

##### `DescribeEvaluations`<sup>Required</sup> <a name="DescribeEvaluations" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeEvaluations"></a>

```typescript
public readonly DescribeEvaluations: string;
```

- *Type:* string

[List] machinelearning:DescribeEvaluations.

---

##### `DescribeMLModels`<sup>Required</sup> <a name="DescribeMLModels" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeMLModels"></a>

```typescript
public readonly DescribeMLModels: string;
```

- *Type:* string

[List] machinelearning:DescribeMLModels.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[List] machinelearning:DescribeTags.

---

##### `Predict`<sup>Required</sup> <a name="Predict" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.Predict"></a>

```typescript
public readonly Predict: string;
```

- *Type:* string

[Write] machinelearning:Predict.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateBatchPrediction`<sup>Required</sup> <a name="UpdateBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateBatchPrediction"></a>

```typescript
public readonly UpdateBatchPrediction: string;
```

- *Type:* string

[Write] machinelearning:UpdateBatchPrediction.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string;
```

- *Type:* string

[Write] machinelearning:UpdateDataSource.

---

##### `UpdateEvaluation`<sup>Required</sup> <a name="UpdateEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateEvaluation"></a>

```typescript
public readonly UpdateEvaluation: string;
```

- *Type:* string

[Write] machinelearning:UpdateEvaluation.

---

##### `UpdateMLModel`<sup>Required</sup> <a name="UpdateMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningActions.property.UpdateMLModel"></a>

```typescript
public readonly UpdateMLModel: string;
```

- *Type:* string

[Write] machinelearning:UpdateMLModel.

---

### MachineLearningOperations <a name="MachineLearningOperations" id="@cdk_utils/iam.machinelearning.MachineLearningOperations"></a>

API operation to required IAM actions mapping for machinelearning.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

new machinelearning.MachineLearningOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateBatchPrediction">CreateBatchPrediction</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchPrediction API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromRDS">CreateDataSourceFromRDS</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSourceFromRDS API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromRedshift">CreateDataSourceFromRedshift</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSourceFromRedshift API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromS3">CreateDataSourceFromS3</a></code> | <code>string[]</code> | IAM actions required for the CreateDataSourceFromS3 API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateEvaluation">CreateEvaluation</a></code> | <code>string[]</code> | IAM actions required for the CreateEvaluation API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateMLModel">CreateMLModel</a></code> | <code>string[]</code> | IAM actions required for the CreateMLModel API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateRealtimeEndpoint">CreateRealtimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateRealtimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteBatchPrediction">DeleteBatchPrediction</a></code> | <code>string[]</code> | IAM actions required for the DeleteBatchPrediction API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteDataSource">DeleteDataSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataSource API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteEvaluation">DeleteEvaluation</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvaluation API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteMLModel">DeleteMLModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteMLModel API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteRealtimeEndpoint">DeleteRealtimeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteRealtimeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeBatchPredictions">DescribeBatchPredictions</a></code> | <code>string[]</code> | IAM actions required for the DescribeBatchPredictions API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeDataSources">DescribeDataSources</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSources API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeEvaluations">DescribeEvaluations</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvaluations API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeMLModels">DescribeMLModels</a></code> | <code>string[]</code> | IAM actions required for the DescribeMLModels API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetBatchPrediction">opGetBatchPrediction</a></code> | <code>string[]</code> | IAM actions required for the GetBatchPrediction API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetDataSource">opGetDataSource</a></code> | <code>string[]</code> | IAM actions required for the GetDataSource API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetEvaluation">opGetEvaluation</a></code> | <code>string[]</code> | IAM actions required for the GetEvaluation API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetMLModel">opGetMLModel</a></code> | <code>string[]</code> | IAM actions required for the GetMLModel API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.Predict">Predict</a></code> | <code>string[]</code> | IAM actions required for the Predict API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateBatchPrediction">UpdateBatchPrediction</a></code> | <code>string[]</code> | IAM actions required for the UpdateBatchPrediction API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateDataSource">UpdateDataSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataSource API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateEvaluation">UpdateEvaluation</a></code> | <code>string[]</code> | IAM actions required for the UpdateEvaluation API call. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateMLModel">UpdateMLModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateMLModel API call. |

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `CreateBatchPrediction`<sup>Required</sup> <a name="CreateBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateBatchPrediction"></a>

```typescript
public readonly CreateBatchPrediction: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchPrediction API call.

---

##### `CreateDataSourceFromRDS`<sup>Required</sup> <a name="CreateDataSourceFromRDS" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromRDS"></a>

```typescript
public readonly CreateDataSourceFromRDS: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSourceFromRDS API call.

---

##### `CreateDataSourceFromRedshift`<sup>Required</sup> <a name="CreateDataSourceFromRedshift" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromRedshift"></a>

```typescript
public readonly CreateDataSourceFromRedshift: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSourceFromRedshift API call.

---

##### `CreateDataSourceFromS3`<sup>Required</sup> <a name="CreateDataSourceFromS3" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateDataSourceFromS3"></a>

```typescript
public readonly CreateDataSourceFromS3: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataSourceFromS3 API call.

---

##### `CreateEvaluation`<sup>Required</sup> <a name="CreateEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateEvaluation"></a>

```typescript
public readonly CreateEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvaluation API call.

---

##### `CreateMLModel`<sup>Required</sup> <a name="CreateMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateMLModel"></a>

```typescript
public readonly CreateMLModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateMLModel API call.

---

##### `CreateRealtimeEndpoint`<sup>Required</sup> <a name="CreateRealtimeEndpoint" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.CreateRealtimeEndpoint"></a>

```typescript
public readonly CreateRealtimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateRealtimeEndpoint API call.

---

##### `DeleteBatchPrediction`<sup>Required</sup> <a name="DeleteBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteBatchPrediction"></a>

```typescript
public readonly DeleteBatchPrediction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBatchPrediction API call.

---

##### `DeleteDataSource`<sup>Required</sup> <a name="DeleteDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteDataSource"></a>

```typescript
public readonly DeleteDataSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataSource API call.

---

##### `DeleteEvaluation`<sup>Required</sup> <a name="DeleteEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteEvaluation"></a>

```typescript
public readonly DeleteEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvaluation API call.

---

##### `DeleteMLModel`<sup>Required</sup> <a name="DeleteMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteMLModel"></a>

```typescript
public readonly DeleteMLModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMLModel API call.

---

##### `DeleteRealtimeEndpoint`<sup>Required</sup> <a name="DeleteRealtimeEndpoint" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteRealtimeEndpoint"></a>

```typescript
public readonly DeleteRealtimeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRealtimeEndpoint API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DescribeBatchPredictions`<sup>Required</sup> <a name="DescribeBatchPredictions" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeBatchPredictions"></a>

```typescript
public readonly DescribeBatchPredictions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBatchPredictions API call.

---

##### `DescribeDataSources`<sup>Required</sup> <a name="DescribeDataSources" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeDataSources"></a>

```typescript
public readonly DescribeDataSources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSources API call.

---

##### `DescribeEvaluations`<sup>Required</sup> <a name="DescribeEvaluations" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeEvaluations"></a>

```typescript
public readonly DescribeEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvaluations API call.

---

##### `DescribeMLModels`<sup>Required</sup> <a name="DescribeMLModels" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeMLModels"></a>

```typescript
public readonly DescribeMLModels: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMLModels API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `opGetBatchPrediction`<sup>Required</sup> <a name="opGetBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetBatchPrediction"></a>

```typescript
public readonly opGetBatchPrediction: string[];
```

- *Type:* string[]

IAM actions required for the GetBatchPrediction API call.

---

##### `opGetDataSource`<sup>Required</sup> <a name="opGetDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetDataSource"></a>

```typescript
public readonly opGetDataSource: string[];
```

- *Type:* string[]

IAM actions required for the GetDataSource API call.

---

##### `opGetEvaluation`<sup>Required</sup> <a name="opGetEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetEvaluation"></a>

```typescript
public readonly opGetEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the GetEvaluation API call.

---

##### `opGetMLModel`<sup>Required</sup> <a name="opGetMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.opGetMLModel"></a>

```typescript
public readonly opGetMLModel: string[];
```

- *Type:* string[]

IAM actions required for the GetMLModel API call.

---

##### `Predict`<sup>Required</sup> <a name="Predict" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.Predict"></a>

```typescript
public readonly Predict: string[];
```

- *Type:* string[]

IAM actions required for the Predict API call.

---

##### `UpdateBatchPrediction`<sup>Required</sup> <a name="UpdateBatchPrediction" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateBatchPrediction"></a>

```typescript
public readonly UpdateBatchPrediction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBatchPrediction API call.

---

##### `UpdateDataSource`<sup>Required</sup> <a name="UpdateDataSource" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateDataSource"></a>

```typescript
public readonly UpdateDataSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataSource API call.

---

##### `UpdateEvaluation`<sup>Required</sup> <a name="UpdateEvaluation" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateEvaluation"></a>

```typescript
public readonly UpdateEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEvaluation API call.

---

##### `UpdateMLModel`<sup>Required</sup> <a name="UpdateMLModel" id="@cdk_utils/iam.machinelearning.MachineLearningOperations.property.UpdateMLModel"></a>

```typescript
public readonly UpdateMLModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMLModel API call.

---

### MachineLearningResources <a name="MachineLearningResources" id="@cdk_utils/iam.machinelearning.MachineLearningResources"></a>

ARN builders, validators, and parsers for machinelearning resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.machinelearning.MachineLearningResources.Initializer"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

new machinelearning.MachineLearningResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.batchprediction">batchprediction</a></code> | Builds an ARN for the batchprediction resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.datasource">datasource</a></code> | Builds an ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.evaluation">evaluation</a></code> | Builds an ARN for the evaluation resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.isValidBatchpredictionArn">isValidBatchpredictionArn</a></code> | Validates whether a string is a valid ARN for the batchprediction resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.isValidDatasourceArn">isValidDatasourceArn</a></code> | Validates whether a string is a valid ARN for the datasource resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.isValidEvaluationArn">isValidEvaluationArn</a></code> | Validates whether a string is a valid ARN for the evaluation resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.isValidMlmodelArn">isValidMlmodelArn</a></code> | Validates whether a string is a valid ARN for the mlmodel resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.mlmodel">mlmodel</a></code> | Builds an ARN for the mlmodel resource. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.parseBatchpredictionArn">parseBatchpredictionArn</a></code> | Parses a batchprediction ARN into its components. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.parseDatasourceArn">parseDatasourceArn</a></code> | Parses a datasource ARN into its components. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.parseEvaluationArn">parseEvaluationArn</a></code> | Parses a evaluation ARN into its components. |
| <code><a href="#@cdk_utils/iam.machinelearning.MachineLearningResources.parseMlmodelArn">parseMlmodelArn</a></code> | Parses a mlmodel ARN into its components. |

---

##### `batchprediction` <a name="batchprediction" id="@cdk_utils/iam.machinelearning.MachineLearningResources.batchprediction"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.batchprediction(props: MachineLearningBatchpredictionArnProps)
```

Builds an ARN for the batchprediction resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.machinelearning.MachineLearningResources.batchprediction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.machinelearning.MachineLearningBatchpredictionArnProps">MachineLearningBatchpredictionArnProps</a>

---

##### `datasource` <a name="datasource" id="@cdk_utils/iam.machinelearning.MachineLearningResources.datasource"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.datasource(props: MachineLearningDatasourceArnProps)
```

Builds an ARN for the datasource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.machinelearning.MachineLearningResources.datasource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.machinelearning.MachineLearningDatasourceArnProps">MachineLearningDatasourceArnProps</a>

---

##### `evaluation` <a name="evaluation" id="@cdk_utils/iam.machinelearning.MachineLearningResources.evaluation"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.evaluation(props: MachineLearningEvaluationArnProps)
```

Builds an ARN for the evaluation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.machinelearning.MachineLearningResources.evaluation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.machinelearning.MachineLearningEvaluationArnProps">MachineLearningEvaluationArnProps</a>

---

##### `isValidBatchpredictionArn` <a name="isValidBatchpredictionArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidBatchpredictionArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.isValidBatchpredictionArn(arn: string)
```

Validates whether a string is a valid ARN for the batchprediction resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidBatchpredictionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasourceArn` <a name="isValidDatasourceArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidDatasourceArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.isValidDatasourceArn(arn: string)
```

Validates whether a string is a valid ARN for the datasource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEvaluationArn` <a name="isValidEvaluationArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidEvaluationArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.isValidEvaluationArn(arn: string)
```

Validates whether a string is a valid ARN for the evaluation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidEvaluationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMlmodelArn` <a name="isValidMlmodelArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidMlmodelArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.isValidMlmodelArn(arn: string)
```

Validates whether a string is a valid ARN for the mlmodel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.isValidMlmodelArn.parameter.arn"></a>

- *Type:* string

---

##### `mlmodel` <a name="mlmodel" id="@cdk_utils/iam.machinelearning.MachineLearningResources.mlmodel"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.mlmodel(props: MachineLearningMlmodelArnProps)
```

Builds an ARN for the mlmodel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.machinelearning.MachineLearningResources.mlmodel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.machinelearning.MachineLearningMlmodelArnProps">MachineLearningMlmodelArnProps</a>

---

##### `parseBatchpredictionArn` <a name="parseBatchpredictionArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseBatchpredictionArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.parseBatchpredictionArn(arn: string)
```

Parses a batchprediction ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseBatchpredictionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasourceArn` <a name="parseDatasourceArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseDatasourceArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.parseDatasourceArn(arn: string)
```

Parses a datasource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseDatasourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEvaluationArn` <a name="parseEvaluationArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseEvaluationArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.parseEvaluationArn(arn: string)
```

Parses a evaluation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseEvaluationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMlmodelArn` <a name="parseMlmodelArn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseMlmodelArn"></a>

```typescript
import { machinelearning } from '@cdk_utils/iam'

machinelearning.MachineLearningResources.parseMlmodelArn(arn: string)
```

Parses a mlmodel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.machinelearning.MachineLearningResources.parseMlmodelArn.parameter.arn"></a>

- *Type:* string

---




