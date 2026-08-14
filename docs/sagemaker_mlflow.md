# `sagemaker_mlflow` Submodule <a name="`sagemaker_mlflow` Submodule" id="@cdk_utils/iam.sagemaker_mlflow"></a>


## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowMlflowTrackingServerArnComponents <a name="SagemakerMlflowMlflowTrackingServerArnComponents" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents"></a>

Parsed components of a mlflow-tracking-server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.Initializer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

const sagemakerMlflowMlflowTrackingServerArnComponents: sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.mlflowTrackingServerName">mlflowTrackingServerName</a></code> | <code>string</code> | The MlflowTrackingServerName component. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `mlflowTrackingServerName`<sup>Required</sup> <a name="mlflowTrackingServerName" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.mlflowTrackingServerName"></a>

```typescript
public readonly mlflowTrackingServerName: string;
```

- *Type:* string

The MlflowTrackingServerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SagemakerMlflowMlflowTrackingServerArnProps <a name="SagemakerMlflowMlflowTrackingServerArnProps" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps"></a>

Properties for building a mlflow-tracking-server ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.Initializer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

const sagemakerMlflowMlflowTrackingServerArnProps: sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.mlflowTrackingServerName">mlflowTrackingServerName</a></code> | <code>string</code> | The MlflowTrackingServerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `mlflowTrackingServerName`<sup>Required</sup> <a name="mlflowTrackingServerName" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.mlflowTrackingServerName"></a>

```typescript
public readonly mlflowTrackingServerName: string;
```

- *Type:* string

The MlflowTrackingServerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowActions <a name="SagemakerMlflowActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions"></a>

IAM action constants for the sagemaker-mlflow service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.Initializer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

new sagemaker_mlflow.SagemakerMlflowActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AccessUI">AccessUI</a></code> | <code>string</code> | [Read] sagemaker-mlflow:AccessUI. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetDownloadURIForModelVersionArtifacts">actionGetDownloadURIForModelVersionArtifacts</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetExperiment">actionGetExperiment</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetExperiment. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetExperimentByName">actionGetExperimentByName</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetExperimentByName. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetLatestModelVersions">actionGetLatestModelVersions</a></code> | <code>string</code> | [List] sagemaker-mlflow:GetLatestModelVersions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetLoggedModel">actionGetLoggedModel</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetLoggedModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetMetricHistory">actionGetMetricHistory</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetMetricHistory. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetModelVersion">actionGetModelVersion</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetModelVersion. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetModelVersionByAlias">actionGetModelVersionByAlias</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetModelVersionByAlias. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetRegisteredModel">actionGetRegisteredModel</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetRegisteredModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetRun">actionGetRun</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetRun. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetTraceInfo">actionGetTraceInfo</a></code> | <code>string</code> | [Read] sagemaker-mlflow:GetTraceInfo. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetExperimentTag">actionSetExperimentTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetExperimentTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetLoggedModelTags">actionSetLoggedModelTags</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetLoggedModelTags. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetModelVersionTag">actionSetModelVersionTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetModelVersionTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetRegisteredModelAlias">actionSetRegisteredModelAlias</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetRegisteredModelAlias. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetRegisteredModelTag">actionSetRegisteredModelTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetRegisteredModelTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetTag">actionSetTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetTraceTag">actionSetTraceTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:SetTraceTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateExperiment">CreateExperiment</a></code> | <code>string</code> | [Write] sagemaker-mlflow:CreateExperiment. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateModelVersion">CreateModelVersion</a></code> | <code>string</code> | [Write] sagemaker-mlflow:CreateModelVersion. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateRegisteredModel">CreateRegisteredModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:CreateRegisteredModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateRun">CreateRun</a></code> | <code>string</code> | [Write] sagemaker-mlflow:CreateRun. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteExperiment">DeleteExperiment</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteExperiment. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteLoggedModel">DeleteLoggedModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteLoggedModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteLoggedModelTag">DeleteLoggedModelTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteLoggedModelTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteModelVersion">DeleteModelVersion</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteModelVersion. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteModelVersionTag">DeleteModelVersionTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteModelVersionTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModel">DeleteRegisteredModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteRegisteredModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModelAlias">DeleteRegisteredModelAlias</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteRegisteredModelAlias. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModelTag">DeleteRegisteredModelTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteRegisteredModelTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRun">DeleteRun</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteRun. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTag">DeleteTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTraces">DeleteTraces</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteTraces. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTraceTag">DeleteTraceTag</a></code> | <code>string</code> | [Write] sagemaker-mlflow:DeleteTraceTag. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.EndTrace">EndTrace</a></code> | <code>string</code> | [Write] sagemaker-mlflow:EndTrace. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.FinalizeLoggedModel">FinalizeLoggedModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:FinalizeLoggedModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.ListArtifacts">ListArtifacts</a></code> | <code>string</code> | [List] sagemaker-mlflow:ListArtifacts. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.ListLoggedModelArtifacts">ListLoggedModelArtifacts</a></code> | <code>string</code> | [List] sagemaker-mlflow:ListLoggedModelArtifacts. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogBatch">LogBatch</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogBatch. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogInputs">LogInputs</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogInputs. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogLoggedModelParams">LogLoggedModelParams</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogLoggedModelParams. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogMetric">LogMetric</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogMetric. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogModel">LogModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogOutputs">LogOutputs</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogOutputs. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogParam">LogParam</a></code> | <code>string</code> | [Write] sagemaker-mlflow:LogParam. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RenameRegisteredModel">RenameRegisteredModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:RenameRegisteredModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RestoreExperiment">RestoreExperiment</a></code> | <code>string</code> | [Write] sagemaker-mlflow:RestoreExperiment. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RestoreRun">RestoreRun</a></code> | <code>string</code> | [Write] sagemaker-mlflow:RestoreRun. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchExperiments">SearchExperiments</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchExperiments. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchLoggedModels">SearchLoggedModels</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchLoggedModels. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchModelVersions">SearchModelVersions</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchModelVersions. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchRegisteredModels">SearchRegisteredModels</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchRegisteredModels. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchRuns">SearchRuns</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchRuns. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchTraces">SearchTraces</a></code> | <code>string</code> | [Read] sagemaker-mlflow:SearchTraces. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.StartTrace">StartTrace</a></code> | <code>string</code> | [Write] sagemaker-mlflow:StartTrace. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.TransitionModelVersionStage">TransitionModelVersionStage</a></code> | <code>string</code> | [Write] sagemaker-mlflow:TransitionModelVersionStage. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateExperiment">UpdateExperiment</a></code> | <code>string</code> | [Write] sagemaker-mlflow:UpdateExperiment. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateModelVersion">UpdateModelVersion</a></code> | <code>string</code> | [Write] sagemaker-mlflow:UpdateModelVersion. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateRegisteredModel">UpdateRegisteredModel</a></code> | <code>string</code> | [Write] sagemaker-mlflow:UpdateRegisteredModel. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateRun">UpdateRun</a></code> | <code>string</code> | [Write] sagemaker-mlflow:UpdateRun. |

---

##### `AccessUI`<sup>Required</sup> <a name="AccessUI" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AccessUI"></a>

```typescript
public readonly AccessUI: string;
```

- *Type:* string

[Read] sagemaker-mlflow:AccessUI.

---

##### `actionGetDownloadURIForModelVersionArtifacts`<sup>Required</sup> <a name="actionGetDownloadURIForModelVersionArtifacts" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetDownloadURIForModelVersionArtifacts"></a>

```typescript
public readonly actionGetDownloadURIForModelVersionArtifacts: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetDownloadURIForModelVersionArtifacts.

---

##### `actionGetExperiment`<sup>Required</sup> <a name="actionGetExperiment" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetExperiment"></a>

```typescript
public readonly actionGetExperiment: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetExperiment.

---

##### `actionGetExperimentByName`<sup>Required</sup> <a name="actionGetExperimentByName" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetExperimentByName"></a>

```typescript
public readonly actionGetExperimentByName: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetExperimentByName.

---

##### `actionGetLatestModelVersions`<sup>Required</sup> <a name="actionGetLatestModelVersions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetLatestModelVersions"></a>

```typescript
public readonly actionGetLatestModelVersions: string;
```

- *Type:* string

[List] sagemaker-mlflow:GetLatestModelVersions.

---

##### `actionGetLoggedModel`<sup>Required</sup> <a name="actionGetLoggedModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetLoggedModel"></a>

```typescript
public readonly actionGetLoggedModel: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetLoggedModel.

---

##### `actionGetMetricHistory`<sup>Required</sup> <a name="actionGetMetricHistory" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetMetricHistory"></a>

```typescript
public readonly actionGetMetricHistory: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetMetricHistory.

---

##### `actionGetModelVersion`<sup>Required</sup> <a name="actionGetModelVersion" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetModelVersion"></a>

```typescript
public readonly actionGetModelVersion: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetModelVersion.

---

##### `actionGetModelVersionByAlias`<sup>Required</sup> <a name="actionGetModelVersionByAlias" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetModelVersionByAlias"></a>

```typescript
public readonly actionGetModelVersionByAlias: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetModelVersionByAlias.

---

##### `actionGetRegisteredModel`<sup>Required</sup> <a name="actionGetRegisteredModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetRegisteredModel"></a>

```typescript
public readonly actionGetRegisteredModel: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetRegisteredModel.

---

##### `actionGetRun`<sup>Required</sup> <a name="actionGetRun" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetRun"></a>

```typescript
public readonly actionGetRun: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetRun.

---

##### `actionGetTraceInfo`<sup>Required</sup> <a name="actionGetTraceInfo" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionGetTraceInfo"></a>

```typescript
public readonly actionGetTraceInfo: string;
```

- *Type:* string

[Read] sagemaker-mlflow:GetTraceInfo.

---

##### `actionSetExperimentTag`<sup>Required</sup> <a name="actionSetExperimentTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetExperimentTag"></a>

```typescript
public readonly actionSetExperimentTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetExperimentTag.

---

##### `actionSetLoggedModelTags`<sup>Required</sup> <a name="actionSetLoggedModelTags" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetLoggedModelTags"></a>

```typescript
public readonly actionSetLoggedModelTags: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetLoggedModelTags.

---

##### `actionSetModelVersionTag`<sup>Required</sup> <a name="actionSetModelVersionTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetModelVersionTag"></a>

```typescript
public readonly actionSetModelVersionTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetModelVersionTag.

---

##### `actionSetRegisteredModelAlias`<sup>Required</sup> <a name="actionSetRegisteredModelAlias" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetRegisteredModelAlias"></a>

```typescript
public readonly actionSetRegisteredModelAlias: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetRegisteredModelAlias.

---

##### `actionSetRegisteredModelTag`<sup>Required</sup> <a name="actionSetRegisteredModelTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetRegisteredModelTag"></a>

```typescript
public readonly actionSetRegisteredModelTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetRegisteredModelTag.

---

##### `actionSetTag`<sup>Required</sup> <a name="actionSetTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetTag"></a>

```typescript
public readonly actionSetTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetTag.

---

##### `actionSetTraceTag`<sup>Required</sup> <a name="actionSetTraceTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.actionSetTraceTag"></a>

```typescript
public readonly actionSetTraceTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:SetTraceTag.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateExperiment`<sup>Required</sup> <a name="CreateExperiment" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateExperiment"></a>

```typescript
public readonly CreateExperiment: string;
```

- *Type:* string

[Write] sagemaker-mlflow:CreateExperiment.

---

##### `CreateModelVersion`<sup>Required</sup> <a name="CreateModelVersion" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateModelVersion"></a>

```typescript
public readonly CreateModelVersion: string;
```

- *Type:* string

[Write] sagemaker-mlflow:CreateModelVersion.

---

##### `CreateRegisteredModel`<sup>Required</sup> <a name="CreateRegisteredModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateRegisteredModel"></a>

```typescript
public readonly CreateRegisteredModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:CreateRegisteredModel.

---

##### `CreateRun`<sup>Required</sup> <a name="CreateRun" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.CreateRun"></a>

```typescript
public readonly CreateRun: string;
```

- *Type:* string

[Write] sagemaker-mlflow:CreateRun.

---

##### `DeleteExperiment`<sup>Required</sup> <a name="DeleteExperiment" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteExperiment"></a>

```typescript
public readonly DeleteExperiment: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteExperiment.

---

##### `DeleteLoggedModel`<sup>Required</sup> <a name="DeleteLoggedModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteLoggedModel"></a>

```typescript
public readonly DeleteLoggedModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteLoggedModel.

---

##### `DeleteLoggedModelTag`<sup>Required</sup> <a name="DeleteLoggedModelTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteLoggedModelTag"></a>

```typescript
public readonly DeleteLoggedModelTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteLoggedModelTag.

---

##### `DeleteModelVersion`<sup>Required</sup> <a name="DeleteModelVersion" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteModelVersion"></a>

```typescript
public readonly DeleteModelVersion: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteModelVersion.

---

##### `DeleteModelVersionTag`<sup>Required</sup> <a name="DeleteModelVersionTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteModelVersionTag"></a>

```typescript
public readonly DeleteModelVersionTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteModelVersionTag.

---

##### `DeleteRegisteredModel`<sup>Required</sup> <a name="DeleteRegisteredModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModel"></a>

```typescript
public readonly DeleteRegisteredModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteRegisteredModel.

---

##### `DeleteRegisteredModelAlias`<sup>Required</sup> <a name="DeleteRegisteredModelAlias" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModelAlias"></a>

```typescript
public readonly DeleteRegisteredModelAlias: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteRegisteredModelAlias.

---

##### `DeleteRegisteredModelTag`<sup>Required</sup> <a name="DeleteRegisteredModelTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRegisteredModelTag"></a>

```typescript
public readonly DeleteRegisteredModelTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteRegisteredModelTag.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteRun.

---

##### `DeleteTag`<sup>Required</sup> <a name="DeleteTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTag"></a>

```typescript
public readonly DeleteTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteTag.

---

##### `DeleteTraces`<sup>Required</sup> <a name="DeleteTraces" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTraces"></a>

```typescript
public readonly DeleteTraces: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteTraces.

---

##### `DeleteTraceTag`<sup>Required</sup> <a name="DeleteTraceTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.DeleteTraceTag"></a>

```typescript
public readonly DeleteTraceTag: string;
```

- *Type:* string

[Write] sagemaker-mlflow:DeleteTraceTag.

---

##### `EndTrace`<sup>Required</sup> <a name="EndTrace" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.EndTrace"></a>

```typescript
public readonly EndTrace: string;
```

- *Type:* string

[Write] sagemaker-mlflow:EndTrace.

---

##### `FinalizeLoggedModel`<sup>Required</sup> <a name="FinalizeLoggedModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.FinalizeLoggedModel"></a>

```typescript
public readonly FinalizeLoggedModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:FinalizeLoggedModel.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string;
```

- *Type:* string

[List] sagemaker-mlflow:ListArtifacts.

---

##### `ListLoggedModelArtifacts`<sup>Required</sup> <a name="ListLoggedModelArtifacts" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.ListLoggedModelArtifacts"></a>

```typescript
public readonly ListLoggedModelArtifacts: string;
```

- *Type:* string

[List] sagemaker-mlflow:ListLoggedModelArtifacts.

---

##### `LogBatch`<sup>Required</sup> <a name="LogBatch" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogBatch"></a>

```typescript
public readonly LogBatch: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogBatch.

---

##### `LogInputs`<sup>Required</sup> <a name="LogInputs" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogInputs"></a>

```typescript
public readonly LogInputs: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogInputs.

---

##### `LogLoggedModelParams`<sup>Required</sup> <a name="LogLoggedModelParams" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogLoggedModelParams"></a>

```typescript
public readonly LogLoggedModelParams: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogLoggedModelParams.

---

##### `LogMetric`<sup>Required</sup> <a name="LogMetric" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogMetric"></a>

```typescript
public readonly LogMetric: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogMetric.

---

##### `LogModel`<sup>Required</sup> <a name="LogModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogModel"></a>

```typescript
public readonly LogModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogModel.

---

##### `LogOutputs`<sup>Required</sup> <a name="LogOutputs" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogOutputs"></a>

```typescript
public readonly LogOutputs: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogOutputs.

---

##### `LogParam`<sup>Required</sup> <a name="LogParam" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.LogParam"></a>

```typescript
public readonly LogParam: string;
```

- *Type:* string

[Write] sagemaker-mlflow:LogParam.

---

##### `RenameRegisteredModel`<sup>Required</sup> <a name="RenameRegisteredModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RenameRegisteredModel"></a>

```typescript
public readonly RenameRegisteredModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:RenameRegisteredModel.

---

##### `RestoreExperiment`<sup>Required</sup> <a name="RestoreExperiment" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RestoreExperiment"></a>

```typescript
public readonly RestoreExperiment: string;
```

- *Type:* string

[Write] sagemaker-mlflow:RestoreExperiment.

---

##### `RestoreRun`<sup>Required</sup> <a name="RestoreRun" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.RestoreRun"></a>

```typescript
public readonly RestoreRun: string;
```

- *Type:* string

[Write] sagemaker-mlflow:RestoreRun.

---

##### `SearchExperiments`<sup>Required</sup> <a name="SearchExperiments" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchExperiments"></a>

```typescript
public readonly SearchExperiments: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchExperiments.

---

##### `SearchLoggedModels`<sup>Required</sup> <a name="SearchLoggedModels" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchLoggedModels"></a>

```typescript
public readonly SearchLoggedModels: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchLoggedModels.

---

##### `SearchModelVersions`<sup>Required</sup> <a name="SearchModelVersions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchModelVersions"></a>

```typescript
public readonly SearchModelVersions: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchModelVersions.

---

##### `SearchRegisteredModels`<sup>Required</sup> <a name="SearchRegisteredModels" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchRegisteredModels"></a>

```typescript
public readonly SearchRegisteredModels: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchRegisteredModels.

---

##### `SearchRuns`<sup>Required</sup> <a name="SearchRuns" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchRuns"></a>

```typescript
public readonly SearchRuns: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchRuns.

---

##### `SearchTraces`<sup>Required</sup> <a name="SearchTraces" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SearchTraces"></a>

```typescript
public readonly SearchTraces: string;
```

- *Type:* string

[Read] sagemaker-mlflow:SearchTraces.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTrace`<sup>Required</sup> <a name="StartTrace" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.StartTrace"></a>

```typescript
public readonly StartTrace: string;
```

- *Type:* string

[Write] sagemaker-mlflow:StartTrace.

---

##### `TransitionModelVersionStage`<sup>Required</sup> <a name="TransitionModelVersionStage" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.TransitionModelVersionStage"></a>

```typescript
public readonly TransitionModelVersionStage: string;
```

- *Type:* string

[Write] sagemaker-mlflow:TransitionModelVersionStage.

---

##### `UpdateExperiment`<sup>Required</sup> <a name="UpdateExperiment" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateExperiment"></a>

```typescript
public readonly UpdateExperiment: string;
```

- *Type:* string

[Write] sagemaker-mlflow:UpdateExperiment.

---

##### `UpdateModelVersion`<sup>Required</sup> <a name="UpdateModelVersion" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateModelVersion"></a>

```typescript
public readonly UpdateModelVersion: string;
```

- *Type:* string

[Write] sagemaker-mlflow:UpdateModelVersion.

---

##### `UpdateRegisteredModel`<sup>Required</sup> <a name="UpdateRegisteredModel" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateRegisteredModel"></a>

```typescript
public readonly UpdateRegisteredModel: string;
```

- *Type:* string

[Write] sagemaker-mlflow:UpdateRegisteredModel.

---

##### `UpdateRun`<sup>Required</sup> <a name="UpdateRun" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowActions.property.UpdateRun"></a>

```typescript
public readonly UpdateRun: string;
```

- *Type:* string

[Write] sagemaker-mlflow:UpdateRun.

---

### SagemakerMlflowConditions <a name="SagemakerMlflowConditions" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions"></a>

Condition key constants and builders for sagemaker-mlflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.Initializer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

new sagemaker_mlflow.SagemakerMlflowConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.resourceTag"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

sagemaker_mlflow.SagemakerMlflowConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

### SagemakerMlflowResources <a name="SagemakerMlflowResources" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources"></a>

ARN builders, validators, and parsers for sagemaker-mlflow resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.Initializer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

new sagemaker_mlflow.SagemakerMlflowResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.isValidMlflowTrackingServerArn">isValidMlflowTrackingServerArn</a></code> | Validates whether a string is a valid ARN for the mlflow-tracking-server resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.mlflowTrackingServer">mlflowTrackingServer</a></code> | Builds an ARN for the mlflow-tracking-server resource. |
| <code><a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.parseMlflowTrackingServerArn">parseMlflowTrackingServerArn</a></code> | Parses a mlflow-tracking-server ARN into its components. |

---

##### `isValidMlflowTrackingServerArn` <a name="isValidMlflowTrackingServerArn" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.isValidMlflowTrackingServerArn"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

sagemaker_mlflow.SagemakerMlflowResources.isValidMlflowTrackingServerArn(arn: string)
```

Validates whether a string is a valid ARN for the mlflow-tracking-server resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.isValidMlflowTrackingServerArn.parameter.arn"></a>

- *Type:* string

---

##### `mlflowTrackingServer` <a name="mlflowTrackingServer" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.mlflowTrackingServer"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

sagemaker_mlflow.SagemakerMlflowResources.mlflowTrackingServer(props: SagemakerMlflowMlflowTrackingServerArnProps)
```

Builds an ARN for the mlflow-tracking-server resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.mlflowTrackingServer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowMlflowTrackingServerArnProps">SagemakerMlflowMlflowTrackingServerArnProps</a>

---

##### `parseMlflowTrackingServerArn` <a name="parseMlflowTrackingServerArn" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.parseMlflowTrackingServerArn"></a>

```typescript
import { sagemaker_mlflow } from '@cdk_utils/iam'

sagemaker_mlflow.SagemakerMlflowResources.parseMlflowTrackingServerArn(arn: string)
```

Parses a mlflow-tracking-server ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sagemaker_mlflow.SagemakerMlflowResources.parseMlflowTrackingServerArn.parameter.arn"></a>

- *Type:* string

---




