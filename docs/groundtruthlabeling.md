# `groundtruthlabeling` Submodule <a name="`groundtruthlabeling` Submodule" id="@cdk_utils/iam.groundtruthlabeling"></a>



## Classes <a name="Classes" id="Classes"></a>

### GroundtruthlabelingActions <a name="GroundtruthlabelingActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions"></a>

IAM action constants for the groundtruthlabeling service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.Initializer"></a>

```typescript
import { groundtruthlabeling } from '@cdk_utils/iam'

new groundtruthlabeling.GroundtruthlabelingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.actionGetBatch">actionGetBatch</a></code> | <code>string</code> | [Read] groundtruthlabeling:GetBatch. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.actionGetIntakeFormStatus">actionGetIntakeFormStatus</a></code> | <code>string</code> | [Read] groundtruthlabeling:GetIntakeFormStatus. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AssociatePatchToManifestJob">AssociatePatchToManifestJob</a></code> | <code>string</code> | [Write] groundtruthlabeling:AssociatePatchToManifestJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateBatch">CreateBatch</a></code> | <code>string</code> | [Write] groundtruthlabeling:CreateBatch. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateIntakeForm">CreateIntakeForm</a></code> | <code>string</code> | [Write] groundtruthlabeling:CreateIntakeForm. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] groundtruthlabeling:CreateProject. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateWorkflowDefinition">CreateWorkflowDefinition</a></code> | <code>string</code> | [Write] groundtruthlabeling:CreateWorkflowDefinition. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.DescribeConsoleJob">DescribeConsoleJob</a></code> | <code>string</code> | [Read] groundtruthlabeling:DescribeConsoleJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.GenerateLIDARPreviewTaskConfigJob">GenerateLIDARPreviewTaskConfigJob</a></code> | <code>string</code> | [Write] groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListBatches">ListBatches</a></code> | <code>string</code> | [Read] groundtruthlabeling:ListBatches. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListDatasetObjects">ListDatasetObjects</a></code> | <code>string</code> | [Read] groundtruthlabeling:ListDatasetObjects. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [Read] groundtruthlabeling:ListProjects. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunFilterOrSampleDatasetJob">RunFilterOrSampleDatasetJob</a></code> | <code>string</code> | [Write] groundtruthlabeling:RunFilterOrSampleDatasetJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunGenerateManifestByCrawlingJob">RunGenerateManifestByCrawlingJob</a></code> | <code>string</code> | [Write] groundtruthlabeling:RunGenerateManifestByCrawlingJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunGenerateManifestMetricsJob">RunGenerateManifestMetricsJob</a></code> | <code>string</code> | [Write] groundtruthlabeling:RunGenerateManifestMetricsJob. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.UpdateBatch">UpdateBatch</a></code> | <code>string</code> | [Write] groundtruthlabeling:UpdateBatch. |

---

##### `actionGetBatch`<sup>Required</sup> <a name="actionGetBatch" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.actionGetBatch"></a>

```typescript
public readonly actionGetBatch: string;
```

- *Type:* string

[Read] groundtruthlabeling:GetBatch.

---

##### `actionGetIntakeFormStatus`<sup>Required</sup> <a name="actionGetIntakeFormStatus" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.actionGetIntakeFormStatus"></a>

```typescript
public readonly actionGetIntakeFormStatus: string;
```

- *Type:* string

[Read] groundtruthlabeling:GetIntakeFormStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociatePatchToManifestJob`<sup>Required</sup> <a name="AssociatePatchToManifestJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.AssociatePatchToManifestJob"></a>

```typescript
public readonly AssociatePatchToManifestJob: string;
```

- *Type:* string

[Write] groundtruthlabeling:AssociatePatchToManifestJob.

---

##### `CreateBatch`<sup>Required</sup> <a name="CreateBatch" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateBatch"></a>

```typescript
public readonly CreateBatch: string;
```

- *Type:* string

[Write] groundtruthlabeling:CreateBatch.

---

##### `CreateIntakeForm`<sup>Required</sup> <a name="CreateIntakeForm" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateIntakeForm"></a>

```typescript
public readonly CreateIntakeForm: string;
```

- *Type:* string

[Write] groundtruthlabeling:CreateIntakeForm.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] groundtruthlabeling:CreateProject.

---

##### `CreateWorkflowDefinition`<sup>Required</sup> <a name="CreateWorkflowDefinition" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.CreateWorkflowDefinition"></a>

```typescript
public readonly CreateWorkflowDefinition: string;
```

- *Type:* string

[Write] groundtruthlabeling:CreateWorkflowDefinition.

---

##### `DescribeConsoleJob`<sup>Required</sup> <a name="DescribeConsoleJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.DescribeConsoleJob"></a>

```typescript
public readonly DescribeConsoleJob: string;
```

- *Type:* string

[Read] groundtruthlabeling:DescribeConsoleJob.

---

##### `GenerateLIDARPreviewTaskConfigJob`<sup>Required</sup> <a name="GenerateLIDARPreviewTaskConfigJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.GenerateLIDARPreviewTaskConfigJob"></a>

```typescript
public readonly GenerateLIDARPreviewTaskConfigJob: string;
```

- *Type:* string

[Write] groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob.

---

##### `ListBatches`<sup>Required</sup> <a name="ListBatches" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListBatches"></a>

```typescript
public readonly ListBatches: string;
```

- *Type:* string

[Read] groundtruthlabeling:ListBatches.

---

##### `ListDatasetObjects`<sup>Required</sup> <a name="ListDatasetObjects" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListDatasetObjects"></a>

```typescript
public readonly ListDatasetObjects: string;
```

- *Type:* string

[Read] groundtruthlabeling:ListDatasetObjects.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[Read] groundtruthlabeling:ListProjects.

---

##### `RunFilterOrSampleDatasetJob`<sup>Required</sup> <a name="RunFilterOrSampleDatasetJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunFilterOrSampleDatasetJob"></a>

```typescript
public readonly RunFilterOrSampleDatasetJob: string;
```

- *Type:* string

[Write] groundtruthlabeling:RunFilterOrSampleDatasetJob.

---

##### `RunGenerateManifestByCrawlingJob`<sup>Required</sup> <a name="RunGenerateManifestByCrawlingJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunGenerateManifestByCrawlingJob"></a>

```typescript
public readonly RunGenerateManifestByCrawlingJob: string;
```

- *Type:* string

[Write] groundtruthlabeling:RunGenerateManifestByCrawlingJob.

---

##### `RunGenerateManifestMetricsJob`<sup>Required</sup> <a name="RunGenerateManifestMetricsJob" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.RunGenerateManifestMetricsJob"></a>

```typescript
public readonly RunGenerateManifestMetricsJob: string;
```

- *Type:* string

[Write] groundtruthlabeling:RunGenerateManifestMetricsJob.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateBatch`<sup>Required</sup> <a name="UpdateBatch" id="@cdk_utils/iam.groundtruthlabeling.GroundtruthlabelingActions.property.UpdateBatch"></a>

```typescript
public readonly UpdateBatch: string;
```

- *Type:* string

[Write] groundtruthlabeling:UpdateBatch.

---


