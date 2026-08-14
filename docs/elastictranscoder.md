# `elastictranscoder` Submodule <a name="`elastictranscoder` Submodule" id="@cdk_utils/iam.elastictranscoder"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderJobArnComponents <a name="ElastictranscoderJobArnComponents" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderJobArnComponents: elastictranscoder.ElastictranscoderJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastictranscoderJobArnProps <a name="ElastictranscoderJobArnProps" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderJobArnProps: elastictranscoder.ElastictranscoderJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastictranscoderPipelineArnComponents <a name="ElastictranscoderPipelineArnComponents" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderPipelineArnComponents: elastictranscoder.ElastictranscoderPipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.pipelineId">pipelineId</a></code> | <code>string</code> | The PipelineId component. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

The PipelineId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastictranscoderPipelineArnProps <a name="ElastictranscoderPipelineArnProps" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderPipelineArnProps: elastictranscoder.ElastictranscoderPipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.pipelineId">pipelineId</a></code> | <code>string</code> | The PipelineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

The PipelineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastictranscoderPresetArnComponents <a name="ElastictranscoderPresetArnComponents" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents"></a>

Parsed components of a preset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderPresetArnComponents: elastictranscoder.ElastictranscoderPresetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.presetId">presetId</a></code> | <code>string</code> | The PresetId component. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `presetId`<sup>Required</sup> <a name="presetId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.presetId"></a>

```typescript
public readonly presetId: string;
```

- *Type:* string

The PresetId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastictranscoderPresetArnProps <a name="ElastictranscoderPresetArnProps" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps"></a>

Properties for building a preset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

const elastictranscoderPresetArnProps: elastictranscoder.ElastictranscoderPresetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.presetId">presetId</a></code> | <code>string</code> | The PresetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `presetId`<sup>Required</sup> <a name="presetId" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.presetId"></a>

```typescript
public readonly presetId: string;
```

- *Type:* string

The PresetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderActions <a name="ElastictranscoderActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions"></a>

IAM action constants for the elastictranscoder service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

new elastictranscoder.ElastictranscoderActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] elastictranscoder:CancelJob. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] elastictranscoder:CreateJob. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] elastictranscoder:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreatePreset">CreatePreset</a></code> | <code>string</code> | [Write] elastictranscoder:CreatePreset. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] elastictranscoder:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.DeletePreset">DeletePreset</a></code> | <code>string</code> | [Write] elastictranscoder:DeletePreset. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListJobsByPipeline">ListJobsByPipeline</a></code> | <code>string</code> | [List] elastictranscoder:ListJobsByPipeline. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListJobsByStatus">ListJobsByStatus</a></code> | <code>string</code> | [List] elastictranscoder:ListJobsByStatus. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] elastictranscoder:ListPipelines. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListPresets">ListPresets</a></code> | <code>string</code> | [List] elastictranscoder:ListPresets. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadJob">ReadJob</a></code> | <code>string</code> | [Read] elastictranscoder:ReadJob. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadPipeline">ReadPipeline</a></code> | <code>string</code> | [Read] elastictranscoder:ReadPipeline. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadPreset">ReadPreset</a></code> | <code>string</code> | [Read] elastictranscoder:ReadPreset. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.TestRole">TestRole</a></code> | <code>string</code> | [Write] elastictranscoder:TestRole. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string</code> | [Write] elastictranscoder:UpdatePipeline. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipelineNotifications">UpdatePipelineNotifications</a></code> | <code>string</code> | [Write] elastictranscoder:UpdatePipelineNotifications. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipelineStatus">UpdatePipelineStatus</a></code> | <code>string</code> | [Write] elastictranscoder:UpdatePipelineStatus. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] elastictranscoder:CancelJob.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] elastictranscoder:CreateJob.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] elastictranscoder:CreatePipeline.

---

##### `CreatePreset`<sup>Required</sup> <a name="CreatePreset" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.CreatePreset"></a>

```typescript
public readonly CreatePreset: string;
```

- *Type:* string

[Write] elastictranscoder:CreatePreset.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] elastictranscoder:DeletePipeline.

---

##### `DeletePreset`<sup>Required</sup> <a name="DeletePreset" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.DeletePreset"></a>

```typescript
public readonly DeletePreset: string;
```

- *Type:* string

[Write] elastictranscoder:DeletePreset.

---

##### `ListJobsByPipeline`<sup>Required</sup> <a name="ListJobsByPipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListJobsByPipeline"></a>

```typescript
public readonly ListJobsByPipeline: string;
```

- *Type:* string

[List] elastictranscoder:ListJobsByPipeline.

---

##### `ListJobsByStatus`<sup>Required</sup> <a name="ListJobsByStatus" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListJobsByStatus"></a>

```typescript
public readonly ListJobsByStatus: string;
```

- *Type:* string

[List] elastictranscoder:ListJobsByStatus.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] elastictranscoder:ListPipelines.

---

##### `ListPresets`<sup>Required</sup> <a name="ListPresets" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ListPresets"></a>

```typescript
public readonly ListPresets: string;
```

- *Type:* string

[List] elastictranscoder:ListPresets.

---

##### `ReadJob`<sup>Required</sup> <a name="ReadJob" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadJob"></a>

```typescript
public readonly ReadJob: string;
```

- *Type:* string

[Read] elastictranscoder:ReadJob.

---

##### `ReadPipeline`<sup>Required</sup> <a name="ReadPipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadPipeline"></a>

```typescript
public readonly ReadPipeline: string;
```

- *Type:* string

[Read] elastictranscoder:ReadPipeline.

---

##### `ReadPreset`<sup>Required</sup> <a name="ReadPreset" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.ReadPreset"></a>

```typescript
public readonly ReadPreset: string;
```

- *Type:* string

[Read] elastictranscoder:ReadPreset.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TestRole`<sup>Required</sup> <a name="TestRole" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.TestRole"></a>

```typescript
public readonly TestRole: string;
```

- *Type:* string

[Write] elastictranscoder:TestRole.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string;
```

- *Type:* string

[Write] elastictranscoder:UpdatePipeline.

---

##### `UpdatePipelineNotifications`<sup>Required</sup> <a name="UpdatePipelineNotifications" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipelineNotifications"></a>

```typescript
public readonly UpdatePipelineNotifications: string;
```

- *Type:* string

[Write] elastictranscoder:UpdatePipelineNotifications.

---

##### `UpdatePipelineStatus`<sup>Required</sup> <a name="UpdatePipelineStatus" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderActions.property.UpdatePipelineStatus"></a>

```typescript
public readonly UpdatePipelineStatus: string;
```

- *Type:* string

[Write] elastictranscoder:UpdatePipelineStatus.

---

### ElastictranscoderResources <a name="ElastictranscoderResources" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources"></a>

ARN builders, validators, and parsers for elastictranscoder resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.Initializer"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

new elastictranscoder.ElastictranscoderResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPresetArn">isValidPresetArn</a></code> | Validates whether a string is a valid ARN for the preset resource. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePresetArn">parsePresetArn</a></code> | Parses a preset ARN into its components. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.preset">preset</a></code> | Builds an ARN for the preset resource. |

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidJobArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPipelineArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPresetArn` <a name="isValidPresetArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPresetArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.isValidPresetArn(arn: string)
```

Validates whether a string is a valid ARN for the preset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.isValidPresetArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.job"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.job(props: ElastictranscoderJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderJobArnProps">ElastictranscoderJobArnProps</a>

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parseJobArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePipelineArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePresetArn` <a name="parsePresetArn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePresetArn"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.parsePresetArn(arn: string)
```

Parses a preset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.parsePresetArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.pipeline"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.pipeline(props: ElastictranscoderPipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPipelineArnProps">ElastictranscoderPipelineArnProps</a>

---

##### `preset` <a name="preset" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.preset"></a>

```typescript
import { elastictranscoder } from '@cdk_utils/iam'

elastictranscoder.ElastictranscoderResources.preset(props: ElastictranscoderPresetArnProps)
```

Builds an ARN for the preset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elastictranscoder.ElastictranscoderResources.preset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elastictranscoder.ElastictranscoderPresetArnProps">ElastictranscoderPresetArnProps</a>

---




