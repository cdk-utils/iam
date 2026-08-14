# `lookoutvision` Submodule <a name="`lookoutvision` Submodule" id="@cdk_utils/iam.lookoutvision"></a>


## Structs <a name="Structs" id="Structs"></a>

### LookoutVisionModelArnComponents <a name="LookoutVisionModelArnComponents" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents"></a>

Parsed components of a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

const lookoutVisionModelArnComponents: lookoutvision.LookoutVisionModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.modelVersion">modelVersion</a></code> | <code>string</code> | The ModelVersion component. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

The ModelVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutVisionModelArnProps <a name="LookoutVisionModelArnProps" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps"></a>

Properties for building a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

const lookoutVisionModelArnProps: lookoutvision.LookoutVisionModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.modelVersion">modelVersion</a></code> | <code>string</code> | The ModelVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

The ModelVersion component of the ARN.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutVisionProjectArnComponents <a name="LookoutVisionProjectArnComponents" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

const lookoutVisionProjectArnComponents: lookoutvision.LookoutVisionProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutVisionProjectArnProps <a name="LookoutVisionProjectArnProps" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

const lookoutVisionProjectArnProps: lookoutvision.LookoutVisionProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.projectName">projectName</a></code> | <code>string</code> | The ProjectName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The ProjectName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutVisionActions <a name="LookoutVisionActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions"></a>

IAM action constants for the lookoutvision service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

new lookoutvision.LookoutVisionActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] lookoutvision:CreateDataset. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateModel">CreateModel</a></code> | <code>string</code> | [Write] lookoutvision:CreateModel. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] lookoutvision:CreateProject. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] lookoutvision:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteModel">DeleteModel</a></code> | <code>string</code> | [Write] lookoutvision:DeleteModel. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] lookoutvision:DeleteProject. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] lookoutvision:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeModel">DescribeModel</a></code> | <code>string</code> | [Read] lookoutvision:DescribeModel. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeModelPackagingJob">DescribeModelPackagingJob</a></code> | <code>string</code> | [Read] lookoutvision:DescribeModelPackagingJob. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeProject">DescribeProject</a></code> | <code>string</code> | [Read] lookoutvision:DescribeProject. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeTrialDetection">DescribeTrialDetection</a></code> | <code>string</code> | [Read] lookoutvision:DescribeTrialDetection. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DetectAnomalies">DetectAnomalies</a></code> | <code>string</code> | [Write] lookoutvision:DetectAnomalies. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListDatasetEntries">ListDatasetEntries</a></code> | <code>string</code> | [Read] lookoutvision:ListDatasetEntries. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListModelPackagingJobs">ListModelPackagingJobs</a></code> | <code>string</code> | [List] lookoutvision:ListModelPackagingJobs. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListModels">ListModels</a></code> | <code>string</code> | [List] lookoutvision:ListModels. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] lookoutvision:ListProjects. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] lookoutvision:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListTrialDetections">ListTrialDetections</a></code> | <code>string</code> | [List] lookoutvision:ListTrialDetections. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartModel">StartModel</a></code> | <code>string</code> | [Write] lookoutvision:StartModel. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartModelPackagingJob">StartModelPackagingJob</a></code> | <code>string</code> | [Write] lookoutvision:StartModelPackagingJob. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartTrialDetection">StartTrialDetection</a></code> | <code>string</code> | [Write] lookoutvision:StartTrialDetection. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StopModel">StopModel</a></code> | <code>string</code> | [Write] lookoutvision:StopModel. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lookoutvision:TagResource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lookoutvision:UntagResource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.UpdateDatasetEntries">UpdateDatasetEntries</a></code> | <code>string</code> | [Write] lookoutvision:UpdateDatasetEntries. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] lookoutvision:CreateDataset.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateModel"></a>

```typescript
public readonly CreateModel: string;
```

- *Type:* string

[Write] lookoutvision:CreateModel.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] lookoutvision:CreateProject.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] lookoutvision:DeleteDataset.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string;
```

- *Type:* string

[Write] lookoutvision:DeleteModel.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] lookoutvision:DeleteProject.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] lookoutvision:DescribeDataset.

---

##### `DescribeModel`<sup>Required</sup> <a name="DescribeModel" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeModel"></a>

```typescript
public readonly DescribeModel: string;
```

- *Type:* string

[Read] lookoutvision:DescribeModel.

---

##### `DescribeModelPackagingJob`<sup>Required</sup> <a name="DescribeModelPackagingJob" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeModelPackagingJob"></a>

```typescript
public readonly DescribeModelPackagingJob: string;
```

- *Type:* string

[Read] lookoutvision:DescribeModelPackagingJob.

---

##### `DescribeProject`<sup>Required</sup> <a name="DescribeProject" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeProject"></a>

```typescript
public readonly DescribeProject: string;
```

- *Type:* string

[Read] lookoutvision:DescribeProject.

---

##### `DescribeTrialDetection`<sup>Required</sup> <a name="DescribeTrialDetection" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DescribeTrialDetection"></a>

```typescript
public readonly DescribeTrialDetection: string;
```

- *Type:* string

[Read] lookoutvision:DescribeTrialDetection.

---

##### `DetectAnomalies`<sup>Required</sup> <a name="DetectAnomalies" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.DetectAnomalies"></a>

```typescript
public readonly DetectAnomalies: string;
```

- *Type:* string

[Write] lookoutvision:DetectAnomalies.

---

##### `ListDatasetEntries`<sup>Required</sup> <a name="ListDatasetEntries" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListDatasetEntries"></a>

```typescript
public readonly ListDatasetEntries: string;
```

- *Type:* string

[Read] lookoutvision:ListDatasetEntries.

---

##### `ListModelPackagingJobs`<sup>Required</sup> <a name="ListModelPackagingJobs" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListModelPackagingJobs"></a>

```typescript
public readonly ListModelPackagingJobs: string;
```

- *Type:* string

[List] lookoutvision:ListModelPackagingJobs.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[List] lookoutvision:ListModels.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] lookoutvision:ListProjects.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] lookoutvision:ListTagsForResource.

---

##### `ListTrialDetections`<sup>Required</sup> <a name="ListTrialDetections" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.ListTrialDetections"></a>

```typescript
public readonly ListTrialDetections: string;
```

- *Type:* string

[List] lookoutvision:ListTrialDetections.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartModel`<sup>Required</sup> <a name="StartModel" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartModel"></a>

```typescript
public readonly StartModel: string;
```

- *Type:* string

[Write] lookoutvision:StartModel.

---

##### `StartModelPackagingJob`<sup>Required</sup> <a name="StartModelPackagingJob" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartModelPackagingJob"></a>

```typescript
public readonly StartModelPackagingJob: string;
```

- *Type:* string

[Write] lookoutvision:StartModelPackagingJob.

---

##### `StartTrialDetection`<sup>Required</sup> <a name="StartTrialDetection" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StartTrialDetection"></a>

```typescript
public readonly StartTrialDetection: string;
```

- *Type:* string

[Write] lookoutvision:StartTrialDetection.

---

##### `StopModel`<sup>Required</sup> <a name="StopModel" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.StopModel"></a>

```typescript
public readonly StopModel: string;
```

- *Type:* string

[Write] lookoutvision:StopModel.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lookoutvision:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lookoutvision:UntagResource.

---

##### `UpdateDatasetEntries`<sup>Required</sup> <a name="UpdateDatasetEntries" id="@cdk_utils/iam.lookoutvision.LookoutVisionActions.property.UpdateDatasetEntries"></a>

```typescript
public readonly UpdateDatasetEntries: string;
```

- *Type:* string

[Write] lookoutvision:UpdateDatasetEntries.

---

### LookoutVisionConditions <a name="LookoutVisionConditions" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions"></a>

Condition key constants and builders for lookoutvision.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

new lookoutvision.LookoutVisionConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.requestTag"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.resourceTag"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.tagKeys"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.CreateModelConditionKeys">CreateModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModel action. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateModelConditionKeys`<sup>Required</sup> <a name="CreateModelConditionKeys" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.CreateModelConditionKeys"></a>

```typescript
public readonly CreateModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModel action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lookoutvision.LookoutVisionConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LookoutVisionResources <a name="LookoutVisionResources" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources"></a>

ARN builders, validators, and parsers for lookoutvision resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.Initializer"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

new lookoutvision.LookoutVisionResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidModelArn">isValidModelArn</a></code> | Validates whether a string is a valid ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.model">model</a></code> | Builds an ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseModelArn">parseModelArn</a></code> | Parses a model ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutvision.LookoutVisionResources.project">project</a></code> | Builds an ARN for the project resource. |

---

##### `isValidModelArn` <a name="isValidModelArn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidModelArn"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.isValidModelArn(arn: string)
```

Validates whether a string is a valid ARN for the model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidProjectArn"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `model` <a name="model" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.model"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.model(props: LookoutVisionModelArnProps)
```

Builds an ARN for the model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.model.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutvision.LookoutVisionModelArnProps">LookoutVisionModelArnProps</a>

---

##### `parseModelArn` <a name="parseModelArn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseModelArn"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.parseModelArn(arn: string)
```

Parses a model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseProjectArn"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.project"></a>

```typescript
import { lookoutvision } from '@cdk_utils/iam'

lookoutvision.LookoutVisionResources.project(props: LookoutVisionProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutvision.LookoutVisionResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutvision.LookoutVisionProjectArnProps">LookoutVisionProjectArnProps</a>

---




