# `datapipeline` Submodule <a name="`datapipeline` Submodule" id="@cdk_utils/iam.datapipeline"></a>


## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineArnComponents <a name="DatapipelinePipelineArnComponents" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

const datapipelinePipelineArnComponents: datapipeline.DatapipelinePipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.pipelineId">pipelineId</a></code> | <code>string</code> | The PipelineId component. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

The PipelineId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DatapipelinePipelineArnProps <a name="DatapipelinePipelineArnProps" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

const datapipelinePipelineArnProps: datapipeline.DatapipelinePipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.pipelineId">pipelineId</a></code> | <code>string</code> | The PipelineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

The PipelineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelineActions <a name="DatapipelineActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions"></a>

IAM action constants for the datapipeline service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datapipeline.DatapipelineActions.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

new datapipeline.DatapipelineActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionGetAccountLimits">actionGetAccountLimits</a></code> | <code>string</code> | [List] datapipeline:GetAccountLimits. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionGetPipelineDefinition">actionGetPipelineDefinition</a></code> | <code>string</code> | [Read] datapipeline:GetPipelineDefinition. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionSetStatus">actionSetStatus</a></code> | <code>string</code> | [Write] datapipeline:SetStatus. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionSetTaskStatus">actionSetTaskStatus</a></code> | <code>string</code> | [Write] datapipeline:SetTaskStatus. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.ActivatePipeline">ActivatePipeline</a></code> | <code>string</code> | [Write] datapipeline:ActivatePipeline. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] datapipeline:AddTags. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] datapipeline:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.DeactivatePipeline">DeactivatePipeline</a></code> | <code>string</code> | [Write] datapipeline:DeactivatePipeline. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] datapipeline:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.DescribeObjects">DescribeObjects</a></code> | <code>string</code> | [Read] datapipeline:DescribeObjects. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.DescribePipelines">DescribePipelines</a></code> | <code>string</code> | [Read] datapipeline:DescribePipelines. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.EvaluateExpression">EvaluateExpression</a></code> | <code>string</code> | [Read] datapipeline:EvaluateExpression. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] datapipeline:ListPipelines. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.PollForTask">PollForTask</a></code> | <code>string</code> | [Write] datapipeline:PollForTask. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.PutAccountLimits">PutAccountLimits</a></code> | <code>string</code> | [Write] datapipeline:PutAccountLimits. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.PutPipelineDefinition">PutPipelineDefinition</a></code> | <code>string</code> | [Write] datapipeline:PutPipelineDefinition. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.QueryObjects">QueryObjects</a></code> | <code>string</code> | [Read] datapipeline:QueryObjects. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] datapipeline:RemoveTags. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.ReportTaskProgress">ReportTaskProgress</a></code> | <code>string</code> | [Write] datapipeline:ReportTaskProgress. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.ReportTaskRunnerHeartbeat">ReportTaskRunnerHeartbeat</a></code> | <code>string</code> | [Write] datapipeline:ReportTaskRunnerHeartbeat. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineActions.property.ValidatePipelineDefinition">ValidatePipelineDefinition</a></code> | <code>string</code> | [Read] datapipeline:ValidatePipelineDefinition. |

---

##### `actionGetAccountLimits`<sup>Required</sup> <a name="actionGetAccountLimits" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionGetAccountLimits"></a>

```typescript
public readonly actionGetAccountLimits: string;
```

- *Type:* string

[List] datapipeline:GetAccountLimits.

---

##### `actionGetPipelineDefinition`<sup>Required</sup> <a name="actionGetPipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionGetPipelineDefinition"></a>

```typescript
public readonly actionGetPipelineDefinition: string;
```

- *Type:* string

[Read] datapipeline:GetPipelineDefinition.

---

##### `actionSetStatus`<sup>Required</sup> <a name="actionSetStatus" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionSetStatus"></a>

```typescript
public readonly actionSetStatus: string;
```

- *Type:* string

[Write] datapipeline:SetStatus.

---

##### `actionSetTaskStatus`<sup>Required</sup> <a name="actionSetTaskStatus" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.actionSetTaskStatus"></a>

```typescript
public readonly actionSetTaskStatus: string;
```

- *Type:* string

[Write] datapipeline:SetTaskStatus.

---

##### `ActivatePipeline`<sup>Required</sup> <a name="ActivatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.ActivatePipeline"></a>

```typescript
public readonly ActivatePipeline: string;
```

- *Type:* string

[Write] datapipeline:ActivatePipeline.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] datapipeline:AddTags.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] datapipeline:CreatePipeline.

---

##### `DeactivatePipeline`<sup>Required</sup> <a name="DeactivatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.DeactivatePipeline"></a>

```typescript
public readonly DeactivatePipeline: string;
```

- *Type:* string

[Write] datapipeline:DeactivatePipeline.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] datapipeline:DeletePipeline.

---

##### `DescribeObjects`<sup>Required</sup> <a name="DescribeObjects" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.DescribeObjects"></a>

```typescript
public readonly DescribeObjects: string;
```

- *Type:* string

[Read] datapipeline:DescribeObjects.

---

##### `DescribePipelines`<sup>Required</sup> <a name="DescribePipelines" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.DescribePipelines"></a>

```typescript
public readonly DescribePipelines: string;
```

- *Type:* string

[Read] datapipeline:DescribePipelines.

---

##### `EvaluateExpression`<sup>Required</sup> <a name="EvaluateExpression" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.EvaluateExpression"></a>

```typescript
public readonly EvaluateExpression: string;
```

- *Type:* string

[Read] datapipeline:EvaluateExpression.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] datapipeline:ListPipelines.

---

##### `PollForTask`<sup>Required</sup> <a name="PollForTask" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.PollForTask"></a>

```typescript
public readonly PollForTask: string;
```

- *Type:* string

[Write] datapipeline:PollForTask.

---

##### `PutAccountLimits`<sup>Required</sup> <a name="PutAccountLimits" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.PutAccountLimits"></a>

```typescript
public readonly PutAccountLimits: string;
```

- *Type:* string

[Write] datapipeline:PutAccountLimits.

---

##### `PutPipelineDefinition`<sup>Required</sup> <a name="PutPipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.PutPipelineDefinition"></a>

```typescript
public readonly PutPipelineDefinition: string;
```

- *Type:* string

[Write] datapipeline:PutPipelineDefinition.

---

##### `QueryObjects`<sup>Required</sup> <a name="QueryObjects" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.QueryObjects"></a>

```typescript
public readonly QueryObjects: string;
```

- *Type:* string

[Read] datapipeline:QueryObjects.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] datapipeline:RemoveTags.

---

##### `ReportTaskProgress`<sup>Required</sup> <a name="ReportTaskProgress" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.ReportTaskProgress"></a>

```typescript
public readonly ReportTaskProgress: string;
```

- *Type:* string

[Write] datapipeline:ReportTaskProgress.

---

##### `ReportTaskRunnerHeartbeat`<sup>Required</sup> <a name="ReportTaskRunnerHeartbeat" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.ReportTaskRunnerHeartbeat"></a>

```typescript
public readonly ReportTaskRunnerHeartbeat: string;
```

- *Type:* string

[Write] datapipeline:ReportTaskRunnerHeartbeat.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ValidatePipelineDefinition`<sup>Required</sup> <a name="ValidatePipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineActions.property.ValidatePipelineDefinition"></a>

```typescript
public readonly ValidatePipelineDefinition: string;
```

- *Type:* string

[Read] datapipeline:ValidatePipelineDefinition.

---

### DatapipelineConditions <a name="DatapipelineConditions" id="@cdk_utils/iam.datapipeline.DatapipelineConditions"></a>

Condition key constants and builders for datapipeline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

new datapipeline.DatapipelineConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.pipelineCreator">pipelineCreator</a></code> | Generates a condition block for `datapipeline:PipelineCreator`. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.tag">tag</a></code> | Generates a condition block for `datapipeline:Tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.workerGroup">workerGroup</a></code> | Generates a condition block for `datapipeline:workerGroup`. |

---

##### `pipelineCreator` <a name="pipelineCreator" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.pipelineCreator"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.pipelineCreator(values: string[])
```

Generates a condition block for `datapipeline:PipelineCreator`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.pipelineCreator.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.requestTag"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.resourceTag"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tag` <a name="tag" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.tag"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.tag(value: string)
```

Generates a condition block for `datapipeline:Tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.tag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.tagKeys"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `workerGroup` <a name="workerGroup" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.workerGroup"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineConditions.workerGroup(values: string[])
```

Generates a condition block for `datapipeline:workerGroup`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.workerGroup.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.actionGetPipelineDefinitionConditionKeys">actionGetPipelineDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPipelineDefinition action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.actionSetStatusConditionKeys">actionSetStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetStatus action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.ActivatePipelineConditionKeys">ActivatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivatePipeline action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.CreatePipelineConditionKeys">CreatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipeline action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DeactivatePipelineConditionKeys">DeactivatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeactivatePipeline action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DeletePipelineConditionKeys">DeletePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePipeline action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DescribeObjectsConditionKeys">DescribeObjectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeObjects action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DescribePipelinesConditionKeys">DescribePipelinesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePipelines action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.EvaluateExpressionConditionKeys">EvaluateExpressionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EvaluateExpression action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PIPELINE_CREATOR">PIPELINE_CREATOR</a></code> | <code>string</code> | Condition key: datapipeline:PipelineCreator (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PollForTaskConditionKeys">PollForTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PollForTask action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PutPipelineDefinitionConditionKeys">PutPipelineDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutPipelineDefinition action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.QueryObjectsConditionKeys">QueryObjectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the QueryObjects action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.TAG">TAG</a></code> | <code>string</code> | Condition key: datapipeline:Tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.ValidatePipelineDefinitionConditionKeys">ValidatePipelineDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ValidatePipelineDefinition action. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineConditions.property.WORKER_GROUP">WORKER_GROUP</a></code> | <code>string</code> | Condition key: datapipeline:workerGroup (ArrayOfString). |

---

##### `actionGetPipelineDefinitionConditionKeys`<sup>Required</sup> <a name="actionGetPipelineDefinitionConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.actionGetPipelineDefinitionConditionKeys"></a>

```typescript
public readonly actionGetPipelineDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPipelineDefinition action.

---

##### `actionSetStatusConditionKeys`<sup>Required</sup> <a name="actionSetStatusConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.actionSetStatusConditionKeys"></a>

```typescript
public readonly actionSetStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetStatus action.

---

##### `ActivatePipelineConditionKeys`<sup>Required</sup> <a name="ActivatePipelineConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.ActivatePipelineConditionKeys"></a>

```typescript
public readonly ActivatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivatePipeline action.

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePipelineConditionKeys`<sup>Required</sup> <a name="CreatePipelineConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.CreatePipelineConditionKeys"></a>

```typescript
public readonly CreatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipeline action.

---

##### `DeactivatePipelineConditionKeys`<sup>Required</sup> <a name="DeactivatePipelineConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DeactivatePipelineConditionKeys"></a>

```typescript
public readonly DeactivatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeactivatePipeline action.

---

##### `DeletePipelineConditionKeys`<sup>Required</sup> <a name="DeletePipelineConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DeletePipelineConditionKeys"></a>

```typescript
public readonly DeletePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePipeline action.

---

##### `DescribeObjectsConditionKeys`<sup>Required</sup> <a name="DescribeObjectsConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DescribeObjectsConditionKeys"></a>

```typescript
public readonly DescribeObjectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeObjects action.

---

##### `DescribePipelinesConditionKeys`<sup>Required</sup> <a name="DescribePipelinesConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.DescribePipelinesConditionKeys"></a>

```typescript
public readonly DescribePipelinesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePipelines action.

---

##### `EvaluateExpressionConditionKeys`<sup>Required</sup> <a name="EvaluateExpressionConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.EvaluateExpressionConditionKeys"></a>

```typescript
public readonly EvaluateExpressionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EvaluateExpression action.

---

##### `PIPELINE_CREATOR`<sup>Required</sup> <a name="PIPELINE_CREATOR" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PIPELINE_CREATOR"></a>

```typescript
public readonly PIPELINE_CREATOR: string;
```

- *Type:* string

Condition key: datapipeline:PipelineCreator (ArrayOfString).

---

##### `PollForTaskConditionKeys`<sup>Required</sup> <a name="PollForTaskConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PollForTaskConditionKeys"></a>

```typescript
public readonly PollForTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PollForTask action.

---

##### `PutPipelineDefinitionConditionKeys`<sup>Required</sup> <a name="PutPipelineDefinitionConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.PutPipelineDefinitionConditionKeys"></a>

```typescript
public readonly PutPipelineDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutPipelineDefinition action.

---

##### `QueryObjectsConditionKeys`<sup>Required</sup> <a name="QueryObjectsConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.QueryObjectsConditionKeys"></a>

```typescript
public readonly QueryObjectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the QueryObjects action.

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

##### `TAG`<sup>Required</sup> <a name="TAG" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.TAG"></a>

```typescript
public readonly TAG: string;
```

- *Type:* string

Condition key: datapipeline:Tag/${TagKey} (String).

---

##### `ValidatePipelineDefinitionConditionKeys`<sup>Required</sup> <a name="ValidatePipelineDefinitionConditionKeys" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.ValidatePipelineDefinitionConditionKeys"></a>

```typescript
public readonly ValidatePipelineDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ValidatePipelineDefinition action.

---

##### `WORKER_GROUP`<sup>Required</sup> <a name="WORKER_GROUP" id="@cdk_utils/iam.datapipeline.DatapipelineConditions.property.WORKER_GROUP"></a>

```typescript
public readonly WORKER_GROUP: string;
```

- *Type:* string

Condition key: datapipeline:workerGroup (ArrayOfString).

---

### DatapipelineOperations <a name="DatapipelineOperations" id="@cdk_utils/iam.datapipeline.DatapipelineOperations"></a>

API operation to required IAM actions mapping for datapipeline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

new datapipeline.DatapipelineOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ActivatePipeline">ActivatePipeline</a></code> | <code>string[]</code> | IAM actions required for the ActivatePipeline API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.CreatePipeline">CreatePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreatePipeline API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DeactivatePipeline">DeactivatePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeactivatePipeline API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DeletePipeline">DeletePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeletePipeline API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DescribeObjects">DescribeObjects</a></code> | <code>string[]</code> | IAM actions required for the DescribeObjects API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DescribePipelines">DescribePipelines</a></code> | <code>string[]</code> | IAM actions required for the DescribePipelines API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.EvaluateExpression">EvaluateExpression</a></code> | <code>string[]</code> | IAM actions required for the EvaluateExpression API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ListPipelines">ListPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListPipelines API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opGetPipelineDefinition">opGetPipelineDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetPipelineDefinition API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opSetStatus">opSetStatus</a></code> | <code>string[]</code> | IAM actions required for the SetStatus API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opSetTaskStatus">opSetTaskStatus</a></code> | <code>string[]</code> | IAM actions required for the SetTaskStatus API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.PollForTask">PollForTask</a></code> | <code>string[]</code> | IAM actions required for the PollForTask API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.PutPipelineDefinition">PutPipelineDefinition</a></code> | <code>string[]</code> | IAM actions required for the PutPipelineDefinition API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.QueryObjects">QueryObjects</a></code> | <code>string[]</code> | IAM actions required for the QueryObjects API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ReportTaskProgress">ReportTaskProgress</a></code> | <code>string[]</code> | IAM actions required for the ReportTaskProgress API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ReportTaskRunnerHeartbeat">ReportTaskRunnerHeartbeat</a></code> | <code>string[]</code> | IAM actions required for the ReportTaskRunnerHeartbeat API call. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ValidatePipelineDefinition">ValidatePipelineDefinition</a></code> | <code>string[]</code> | IAM actions required for the ValidatePipelineDefinition API call. |

---

##### `ActivatePipeline`<sup>Required</sup> <a name="ActivatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ActivatePipeline"></a>

```typescript
public readonly ActivatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the ActivatePipeline API call.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreatePipeline API call.

---

##### `DeactivatePipeline`<sup>Required</sup> <a name="DeactivatePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DeactivatePipeline"></a>

```typescript
public readonly DeactivatePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeactivatePipeline API call.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeletePipeline API call.

---

##### `DescribeObjects`<sup>Required</sup> <a name="DescribeObjects" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DescribeObjects"></a>

```typescript
public readonly DescribeObjects: string[];
```

- *Type:* string[]

IAM actions required for the DescribeObjects API call.

---

##### `DescribePipelines`<sup>Required</sup> <a name="DescribePipelines" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.DescribePipelines"></a>

```typescript
public readonly DescribePipelines: string[];
```

- *Type:* string[]

IAM actions required for the DescribePipelines API call.

---

##### `EvaluateExpression`<sup>Required</sup> <a name="EvaluateExpression" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.EvaluateExpression"></a>

```typescript
public readonly EvaluateExpression: string[];
```

- *Type:* string[]

IAM actions required for the EvaluateExpression API call.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListPipelines API call.

---

##### `opGetPipelineDefinition`<sup>Required</sup> <a name="opGetPipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opGetPipelineDefinition"></a>

```typescript
public readonly opGetPipelineDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetPipelineDefinition API call.

---

##### `opSetStatus`<sup>Required</sup> <a name="opSetStatus" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opSetStatus"></a>

```typescript
public readonly opSetStatus: string[];
```

- *Type:* string[]

IAM actions required for the SetStatus API call.

---

##### `opSetTaskStatus`<sup>Required</sup> <a name="opSetTaskStatus" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.opSetTaskStatus"></a>

```typescript
public readonly opSetTaskStatus: string[];
```

- *Type:* string[]

IAM actions required for the SetTaskStatus API call.

---

##### `PollForTask`<sup>Required</sup> <a name="PollForTask" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.PollForTask"></a>

```typescript
public readonly PollForTask: string[];
```

- *Type:* string[]

IAM actions required for the PollForTask API call.

---

##### `PutPipelineDefinition`<sup>Required</sup> <a name="PutPipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.PutPipelineDefinition"></a>

```typescript
public readonly PutPipelineDefinition: string[];
```

- *Type:* string[]

IAM actions required for the PutPipelineDefinition API call.

---

##### `QueryObjects`<sup>Required</sup> <a name="QueryObjects" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.QueryObjects"></a>

```typescript
public readonly QueryObjects: string[];
```

- *Type:* string[]

IAM actions required for the QueryObjects API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `ReportTaskProgress`<sup>Required</sup> <a name="ReportTaskProgress" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ReportTaskProgress"></a>

```typescript
public readonly ReportTaskProgress: string[];
```

- *Type:* string[]

IAM actions required for the ReportTaskProgress API call.

---

##### `ReportTaskRunnerHeartbeat`<sup>Required</sup> <a name="ReportTaskRunnerHeartbeat" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ReportTaskRunnerHeartbeat"></a>

```typescript
public readonly ReportTaskRunnerHeartbeat: string[];
```

- *Type:* string[]

IAM actions required for the ReportTaskRunnerHeartbeat API call.

---

##### `ValidatePipelineDefinition`<sup>Required</sup> <a name="ValidatePipelineDefinition" id="@cdk_utils/iam.datapipeline.DatapipelineOperations.property.ValidatePipelineDefinition"></a>

```typescript
public readonly ValidatePipelineDefinition: string[];
```

- *Type:* string[]

IAM actions required for the ValidatePipelineDefinition API call.

---

### DatapipelineResources <a name="DatapipelineResources" id="@cdk_utils/iam.datapipeline.DatapipelineResources"></a>

ARN builders, validators, and parsers for datapipeline resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datapipeline.DatapipelineResources.Initializer"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

new datapipeline.DatapipelineResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.datapipeline.DatapipelineResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.datapipeline.DatapipelineResources.isValidPipelineArn"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datapipeline.DatapipelineResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.datapipeline.DatapipelineResources.parsePipelineArn"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datapipeline.DatapipelineResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.datapipeline.DatapipelineResources.pipeline"></a>

```typescript
import { datapipeline } from '@cdk_utils/iam'

datapipeline.DatapipelineResources.pipeline(props: DatapipelinePipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datapipeline.DatapipelineResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datapipeline.DatapipelinePipelineArnProps">DatapipelinePipelineArnProps</a>

---




