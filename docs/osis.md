# `osis` Submodule <a name="`osis` Submodule" id="@cdk_utils/iam.osis"></a>


## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineArnComponents <a name="OsisPipelineArnComponents" id="@cdk_utils/iam.osis.OsisPipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineArnComponents.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineArnComponents: osis.OsisPipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.osis.OsisPipelineArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OsisPipelineArnProps <a name="OsisPipelineArnProps" id="@cdk_utils/iam.osis.OsisPipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineArnProps.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineArnProps: osis.OsisPipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.osis.OsisPipelineArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OsisPipelineBlueprintArnComponents <a name="OsisPipelineBlueprintArnComponents" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents"></a>

Parsed components of a pipeline-blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineBlueprintArnComponents: osis.OsisPipelineBlueprintArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.blueprintName">blueprintName</a></code> | <code>string</code> | The BlueprintName component. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

The BlueprintName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OsisPipelineBlueprintArnProps <a name="OsisPipelineBlueprintArnProps" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps"></a>

Properties for building a pipeline-blueprint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineBlueprintArnProps: osis.OsisPipelineBlueprintArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.blueprintName">blueprintName</a></code> | <code>string</code> | The BlueprintName component of the ARN. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `blueprintName`<sup>Required</sup> <a name="blueprintName" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.blueprintName"></a>

```typescript
public readonly blueprintName: string;
```

- *Type:* string

The BlueprintName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OsisPipelineEndpointArnComponents <a name="OsisPipelineEndpointArnComponents" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents"></a>

Parsed components of a pipeline-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineEndpointArnComponents: osis.OsisPipelineEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OsisPipelineEndpointArnProps <a name="OsisPipelineEndpointArnProps" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps"></a>

Properties for building a pipeline-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

const osisPipelineEndpointArnProps: osis.OsisPipelineEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.endpointId">endpointId</a></code> | <code>string</code> | The EndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

The EndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.osis.OsisPipelineEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OsisActions <a name="OsisActions" id="@cdk_utils/iam.osis.OsisActions"></a>

IAM action constants for the osis service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osis.OsisActions.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

new osis.OsisActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.actionGetPipeline">actionGetPipeline</a></code> | <code>string</code> | [Read] osis:GetPipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.actionGetPipelineBlueprint">actionGetPipelineBlueprint</a></code> | <code>string</code> | [Read] osis:GetPipelineBlueprint. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.actionGetPipelineChangeProgress">actionGetPipelineChangeProgress</a></code> | <code>string</code> | [Read] osis:GetPipelineChangeProgress. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] osis:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] osis:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.CreatePipelineEndpoint">CreatePipelineEndpoint</a></code> | <code>string</code> | [Write] osis:CreatePipelineEndpoint. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] osis:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.DeletePipelineEndpoint">DeletePipelineEndpoint</a></code> | <code>string</code> | [Write] osis:DeletePipelineEndpoint. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] osis:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.Ingest">Ingest</a></code> | <code>string</code> | [Write] osis:Ingest. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ListPipelineBlueprints">ListPipelineBlueprints</a></code> | <code>string</code> | [List] osis:ListPipelineBlueprints. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ListPipelineEndpointConnections">ListPipelineEndpointConnections</a></code> | <code>string</code> | [List] osis:ListPipelineEndpointConnections. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ListPipelineEndpoints">ListPipelineEndpoints</a></code> | <code>string</code> | [List] osis:ListPipelineEndpoints. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] osis:ListPipelines. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] osis:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] osis:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.RevokePipelineEndpointConnections">RevokePipelineEndpointConnections</a></code> | <code>string</code> | [Write] osis:RevokePipelineEndpointConnections. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.StartPipeline">StartPipeline</a></code> | <code>string</code> | [Write] osis:StartPipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.StopPipeline">StopPipeline</a></code> | <code>string</code> | [Write] osis:StopPipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] osis:TagResource. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] osis:UntagResource. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string</code> | [Write] osis:UpdatePipeline. |
| <code><a href="#@cdk_utils/iam.osis.OsisActions.property.ValidatePipeline">ValidatePipeline</a></code> | <code>string</code> | [Read] osis:ValidatePipeline. |

---

##### `actionGetPipeline`<sup>Required</sup> <a name="actionGetPipeline" id="@cdk_utils/iam.osis.OsisActions.property.actionGetPipeline"></a>

```typescript
public readonly actionGetPipeline: string;
```

- *Type:* string

[Read] osis:GetPipeline.

---

##### `actionGetPipelineBlueprint`<sup>Required</sup> <a name="actionGetPipelineBlueprint" id="@cdk_utils/iam.osis.OsisActions.property.actionGetPipelineBlueprint"></a>

```typescript
public readonly actionGetPipelineBlueprint: string;
```

- *Type:* string

[Read] osis:GetPipelineBlueprint.

---

##### `actionGetPipelineChangeProgress`<sup>Required</sup> <a name="actionGetPipelineChangeProgress" id="@cdk_utils/iam.osis.OsisActions.property.actionGetPipelineChangeProgress"></a>

```typescript
public readonly actionGetPipelineChangeProgress: string;
```

- *Type:* string

[Read] osis:GetPipelineChangeProgress.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.osis.OsisActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] osis:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.osis.OsisActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.osis.OsisActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.osis.OsisActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.osis.OsisActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.osis.OsisActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.osis.OsisActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] osis:CreatePipeline.

---

##### `CreatePipelineEndpoint`<sup>Required</sup> <a name="CreatePipelineEndpoint" id="@cdk_utils/iam.osis.OsisActions.property.CreatePipelineEndpoint"></a>

```typescript
public readonly CreatePipelineEndpoint: string;
```

- *Type:* string

[Write] osis:CreatePipelineEndpoint.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.osis.OsisActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] osis:DeletePipeline.

---

##### `DeletePipelineEndpoint`<sup>Required</sup> <a name="DeletePipelineEndpoint" id="@cdk_utils/iam.osis.OsisActions.property.DeletePipelineEndpoint"></a>

```typescript
public readonly DeletePipelineEndpoint: string;
```

- *Type:* string

[Write] osis:DeletePipelineEndpoint.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.osis.OsisActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] osis:DeleteResourcePolicy.

---

##### `Ingest`<sup>Required</sup> <a name="Ingest" id="@cdk_utils/iam.osis.OsisActions.property.Ingest"></a>

```typescript
public readonly Ingest: string;
```

- *Type:* string

[Write] osis:Ingest.

---

##### `ListPipelineBlueprints`<sup>Required</sup> <a name="ListPipelineBlueprints" id="@cdk_utils/iam.osis.OsisActions.property.ListPipelineBlueprints"></a>

```typescript
public readonly ListPipelineBlueprints: string;
```

- *Type:* string

[List] osis:ListPipelineBlueprints.

---

##### `ListPipelineEndpointConnections`<sup>Required</sup> <a name="ListPipelineEndpointConnections" id="@cdk_utils/iam.osis.OsisActions.property.ListPipelineEndpointConnections"></a>

```typescript
public readonly ListPipelineEndpointConnections: string;
```

- *Type:* string

[List] osis:ListPipelineEndpointConnections.

---

##### `ListPipelineEndpoints`<sup>Required</sup> <a name="ListPipelineEndpoints" id="@cdk_utils/iam.osis.OsisActions.property.ListPipelineEndpoints"></a>

```typescript
public readonly ListPipelineEndpoints: string;
```

- *Type:* string

[List] osis:ListPipelineEndpoints.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.osis.OsisActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] osis:ListPipelines.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.osis.OsisActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] osis:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.osis.OsisActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] osis:PutResourcePolicy.

---

##### `RevokePipelineEndpointConnections`<sup>Required</sup> <a name="RevokePipelineEndpointConnections" id="@cdk_utils/iam.osis.OsisActions.property.RevokePipelineEndpointConnections"></a>

```typescript
public readonly RevokePipelineEndpointConnections: string;
```

- *Type:* string

[Write] osis:RevokePipelineEndpointConnections.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.osis.OsisActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPipeline`<sup>Required</sup> <a name="StartPipeline" id="@cdk_utils/iam.osis.OsisActions.property.StartPipeline"></a>

```typescript
public readonly StartPipeline: string;
```

- *Type:* string

[Write] osis:StartPipeline.

---

##### `StopPipeline`<sup>Required</sup> <a name="StopPipeline" id="@cdk_utils/iam.osis.OsisActions.property.StopPipeline"></a>

```typescript
public readonly StopPipeline: string;
```

- *Type:* string

[Write] osis:StopPipeline.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.osis.OsisActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] osis:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.osis.OsisActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] osis:UntagResource.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.osis.OsisActions.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string;
```

- *Type:* string

[Write] osis:UpdatePipeline.

---

##### `ValidatePipeline`<sup>Required</sup> <a name="ValidatePipeline" id="@cdk_utils/iam.osis.OsisActions.property.ValidatePipeline"></a>

```typescript
public readonly ValidatePipeline: string;
```

- *Type:* string

[Read] osis:ValidatePipeline.

---

### OsisConditions <a name="OsisConditions" id="@cdk_utils/iam.osis.OsisConditions"></a>

Condition key constants and builders for osis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osis.OsisConditions.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

new osis.OsisConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.osis.OsisConditions.requestTag"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.osis.OsisConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.osis.OsisConditions.resourceTag"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.osis.OsisConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.osis.OsisConditions.tagKeys"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.osis.OsisConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.CreatePipelineConditionKeys">CreatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipeline action. |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.CreatePipelineEndpointConditionKeys">CreatePipelineEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipelineEndpoint action. |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.osis.OsisConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.osis.OsisConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.osis.OsisConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.osis.OsisConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePipelineConditionKeys`<sup>Required</sup> <a name="CreatePipelineConditionKeys" id="@cdk_utils/iam.osis.OsisConditions.property.CreatePipelineConditionKeys"></a>

```typescript
public readonly CreatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipeline action.

---

##### `CreatePipelineEndpointConditionKeys`<sup>Required</sup> <a name="CreatePipelineEndpointConditionKeys" id="@cdk_utils/iam.osis.OsisConditions.property.CreatePipelineEndpointConditionKeys"></a>

```typescript
public readonly CreatePipelineEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipelineEndpoint action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.osis.OsisConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.osis.OsisConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### OsisOperations <a name="OsisOperations" id="@cdk_utils/iam.osis.OsisOperations"></a>

API operation to required IAM actions mapping for osis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osis.OsisOperations.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

new osis.OsisOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.CreatePipeline">CreatePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreatePipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.CreatePipelineEndpoint">CreatePipelineEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreatePipelineEndpoint API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.DeletePipeline">DeletePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeletePipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.DeletePipelineEndpoint">DeletePipelineEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeletePipelineEndpoint API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ListPipelineBlueprints">ListPipelineBlueprints</a></code> | <code>string[]</code> | IAM actions required for the ListPipelineBlueprints API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ListPipelineEndpointConnections">ListPipelineEndpointConnections</a></code> | <code>string[]</code> | IAM actions required for the ListPipelineEndpointConnections API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ListPipelineEndpoints">ListPipelineEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListPipelineEndpoints API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ListPipelines">ListPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListPipelines API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.opGetPipeline">opGetPipeline</a></code> | <code>string[]</code> | IAM actions required for the GetPipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.opGetPipelineBlueprint">opGetPipelineBlueprint</a></code> | <code>string[]</code> | IAM actions required for the GetPipelineBlueprint API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.opGetPipelineChangeProgress">opGetPipelineChangeProgress</a></code> | <code>string[]</code> | IAM actions required for the GetPipelineChangeProgress API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.RevokePipelineEndpointConnections">RevokePipelineEndpointConnections</a></code> | <code>string[]</code> | IAM actions required for the RevokePipelineEndpointConnections API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.StartPipeline">StartPipeline</a></code> | <code>string[]</code> | IAM actions required for the StartPipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.StopPipeline">StopPipeline</a></code> | <code>string[]</code> | IAM actions required for the StopPipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdatePipeline API call. |
| <code><a href="#@cdk_utils/iam.osis.OsisOperations.property.ValidatePipeline">ValidatePipeline</a></code> | <code>string[]</code> | IAM actions required for the ValidatePipeline API call. |

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.osis.OsisOperations.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipeline API call.

---

##### `CreatePipelineEndpoint`<sup>Required</sup> <a name="CreatePipelineEndpoint" id="@cdk_utils/iam.osis.OsisOperations.property.CreatePipelineEndpoint"></a>

```typescript
public readonly CreatePipelineEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipelineEndpoint API call.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.osis.OsisOperations.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipeline API call.

---

##### `DeletePipelineEndpoint`<sup>Required</sup> <a name="DeletePipelineEndpoint" id="@cdk_utils/iam.osis.OsisOperations.property.DeletePipelineEndpoint"></a>

```typescript
public readonly DeletePipelineEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipelineEndpoint API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.osis.OsisOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `ListPipelineBlueprints`<sup>Required</sup> <a name="ListPipelineBlueprints" id="@cdk_utils/iam.osis.OsisOperations.property.ListPipelineBlueprints"></a>

```typescript
public readonly ListPipelineBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelineBlueprints API call.

---

##### `ListPipelineEndpointConnections`<sup>Required</sup> <a name="ListPipelineEndpointConnections" id="@cdk_utils/iam.osis.OsisOperations.property.ListPipelineEndpointConnections"></a>

```typescript
public readonly ListPipelineEndpointConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelineEndpointConnections API call.

---

##### `ListPipelineEndpoints`<sup>Required</sup> <a name="ListPipelineEndpoints" id="@cdk_utils/iam.osis.OsisOperations.property.ListPipelineEndpoints"></a>

```typescript
public readonly ListPipelineEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelineEndpoints API call.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.osis.OsisOperations.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelines API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.osis.OsisOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetPipeline`<sup>Required</sup> <a name="opGetPipeline" id="@cdk_utils/iam.osis.OsisOperations.property.opGetPipeline"></a>

```typescript
public readonly opGetPipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetPipeline API call.

---

##### `opGetPipelineBlueprint`<sup>Required</sup> <a name="opGetPipelineBlueprint" id="@cdk_utils/iam.osis.OsisOperations.property.opGetPipelineBlueprint"></a>

```typescript
public readonly opGetPipelineBlueprint: string[];
```

- *Type:* string[]

IAM actions required for the GetPipelineBlueprint API call.

---

##### `opGetPipelineChangeProgress`<sup>Required</sup> <a name="opGetPipelineChangeProgress" id="@cdk_utils/iam.osis.OsisOperations.property.opGetPipelineChangeProgress"></a>

```typescript
public readonly opGetPipelineChangeProgress: string[];
```

- *Type:* string[]

IAM actions required for the GetPipelineChangeProgress API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.osis.OsisOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.osis.OsisOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RevokePipelineEndpointConnections`<sup>Required</sup> <a name="RevokePipelineEndpointConnections" id="@cdk_utils/iam.osis.OsisOperations.property.RevokePipelineEndpointConnections"></a>

```typescript
public readonly RevokePipelineEndpointConnections: string[];
```

- *Type:* string[]

IAM actions required for the RevokePipelineEndpointConnections API call.

---

##### `StartPipeline`<sup>Required</sup> <a name="StartPipeline" id="@cdk_utils/iam.osis.OsisOperations.property.StartPipeline"></a>

```typescript
public readonly StartPipeline: string[];
```

- *Type:* string[]

IAM actions required for the StartPipeline API call.

---

##### `StopPipeline`<sup>Required</sup> <a name="StopPipeline" id="@cdk_utils/iam.osis.OsisOperations.property.StopPipeline"></a>

```typescript
public readonly StopPipeline: string[];
```

- *Type:* string[]

IAM actions required for the StopPipeline API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.osis.OsisOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.osis.OsisOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.osis.OsisOperations.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePipeline API call.

---

##### `ValidatePipeline`<sup>Required</sup> <a name="ValidatePipeline" id="@cdk_utils/iam.osis.OsisOperations.property.ValidatePipeline"></a>

```typescript
public readonly ValidatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the ValidatePipeline API call.

---

### OsisResources <a name="OsisResources" id="@cdk_utils/iam.osis.OsisResources"></a>

ARN builders, validators, and parsers for osis resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.osis.OsisResources.Initializer"></a>

```typescript
import { osis } from '@cdk_utils/iam'

new osis.OsisResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.isValidPipelineBlueprintArn">isValidPipelineBlueprintArn</a></code> | Validates whether a string is a valid ARN for the pipeline-blueprint resource. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.isValidPipelineEndpointArn">isValidPipelineEndpointArn</a></code> | Validates whether a string is a valid ARN for the pipeline-endpoint resource. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.parsePipelineBlueprintArn">parsePipelineBlueprintArn</a></code> | Parses a pipeline-blueprint ARN into its components. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.parsePipelineEndpointArn">parsePipelineEndpointArn</a></code> | Parses a pipeline-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.pipelineBlueprint">pipelineBlueprint</a></code> | Builds an ARN for the pipeline-blueprint resource. |
| <code><a href="#@cdk_utils/iam.osis.OsisResources.pipelineEndpoint">pipelineEndpoint</a></code> | Builds an ARN for the pipeline-endpoint resource. |

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineBlueprintArn` <a name="isValidPipelineBlueprintArn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineBlueprintArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.isValidPipelineBlueprintArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline-blueprint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineEndpointArn` <a name="isValidPipelineEndpointArn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineEndpointArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.isValidPipelineEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.isValidPipelineEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineBlueprintArn` <a name="parsePipelineBlueprintArn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineBlueprintArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.parsePipelineBlueprintArn(arn: string)
```

Parses a pipeline-blueprint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineBlueprintArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineEndpointArn` <a name="parsePipelineEndpointArn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineEndpointArn"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.parsePipelineEndpointArn(arn: string)
```

Parses a pipeline-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.osis.OsisResources.parsePipelineEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.osis.OsisResources.pipeline"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.pipeline(props: OsisPipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.osis.OsisResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.osis.OsisPipelineArnProps">OsisPipelineArnProps</a>

---

##### `pipelineBlueprint` <a name="pipelineBlueprint" id="@cdk_utils/iam.osis.OsisResources.pipelineBlueprint"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.pipelineBlueprint(props: OsisPipelineBlueprintArnProps)
```

Builds an ARN for the pipeline-blueprint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.osis.OsisResources.pipelineBlueprint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.osis.OsisPipelineBlueprintArnProps">OsisPipelineBlueprintArnProps</a>

---

##### `pipelineEndpoint` <a name="pipelineEndpoint" id="@cdk_utils/iam.osis.OsisResources.pipelineEndpoint"></a>

```typescript
import { osis } from '@cdk_utils/iam'

osis.OsisResources.pipelineEndpoint(props: OsisPipelineEndpointArnProps)
```

Builds an ARN for the pipeline-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.osis.OsisResources.pipelineEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.osis.OsisPipelineEndpointArnProps">OsisPipelineEndpointArnProps</a>

---




