# `codeguru_profiler` Submodule <a name="`codeguru_profiler` Submodule" id="@cdk_utils/iam.codeguru_profiler"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeguruProfilerProfilingGroupArnComponents <a name="CodeguruProfilerProfilingGroupArnComponents" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents"></a>

Parsed components of a ProfilingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

const codeguruProfilerProfilingGroupArnComponents: codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.profilingGroupName">profilingGroupName</a></code> | <code>string</code> | The ProfilingGroupName component. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profilingGroupName`<sup>Required</sup> <a name="profilingGroupName" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.profilingGroupName"></a>

```typescript
public readonly profilingGroupName: string;
```

- *Type:* string

The ProfilingGroupName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeguruProfilerProfilingGroupArnProps <a name="CodeguruProfilerProfilingGroupArnProps" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps"></a>

Properties for building a ProfilingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

const codeguruProfilerProfilingGroupArnProps: codeguru_profiler.CodeguruProfilerProfilingGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.profilingGroupName">profilingGroupName</a></code> | <code>string</code> | The ProfilingGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profilingGroupName`<sup>Required</sup> <a name="profilingGroupName" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.profilingGroupName"></a>

```typescript
public readonly profilingGroupName: string;
```

- *Type:* string

The ProfilingGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruProfilerActions <a name="CodeguruProfilerActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions"></a>

IAM action constants for the codeguru-profiler service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

new codeguru_profiler.CodeguruProfilerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetFindingsReportAccountSummary">actionGetFindingsReportAccountSummary</a></code> | <code>string</code> | [Read] codeguru-profiler:GetFindingsReportAccountSummary. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetNotificationConfiguration">actionGetNotificationConfiguration</a></code> | <code>string</code> | [Read] codeguru-profiler:GetNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] codeguru-profiler:GetPolicy. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] codeguru-profiler:GetProfile. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetRecommendations">actionGetRecommendations</a></code> | <code>string</code> | [Read] codeguru-profiler:GetRecommendations. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AddNotificationChannels">AddNotificationChannels</a></code> | <code>string</code> | [Write] codeguru-profiler:AddNotificationChannels. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.BatchGetFrameMetricData">BatchGetFrameMetricData</a></code> | <code>string</code> | [List] codeguru-profiler:BatchGetFrameMetricData. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ConfigureAgent">ConfigureAgent</a></code> | <code>string</code> | [Write] codeguru-profiler:ConfigureAgent. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.CreateProfilingGroup">CreateProfilingGroup</a></code> | <code>string</code> | [Write] codeguru-profiler:CreateProfilingGroup. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.DeleteProfilingGroup">DeleteProfilingGroup</a></code> | <code>string</code> | [Write] codeguru-profiler:DeleteProfilingGroup. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.DescribeProfilingGroup">DescribeProfilingGroup</a></code> | <code>string</code> | [Read] codeguru-profiler:DescribeProfilingGroup. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListFindingsReports">ListFindingsReports</a></code> | <code>string</code> | [List] codeguru-profiler:ListFindingsReports. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListProfileTimes">ListProfileTimes</a></code> | <code>string</code> | [List] codeguru-profiler:ListProfileTimes. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListProfilingGroups">ListProfilingGroups</a></code> | <code>string</code> | [List] codeguru-profiler:ListProfilingGroups. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codeguru-profiler:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.PostAgentProfile">PostAgentProfile</a></code> | <code>string</code> | [Write] codeguru-profiler:PostAgentProfile. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.PutPermission">PutPermission</a></code> | <code>string</code> | [PermissionManagement] codeguru-profiler:PutPermission. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.RemoveNotificationChannel">RemoveNotificationChannel</a></code> | <code>string</code> | [Write] codeguru-profiler:RemoveNotificationChannel. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.RemovePermission">RemovePermission</a></code> | <code>string</code> | [PermissionManagement] codeguru-profiler:RemovePermission. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.SubmitFeedback">SubmitFeedback</a></code> | <code>string</code> | [Write] codeguru-profiler:SubmitFeedback. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codeguru-profiler:TagResource. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codeguru-profiler:UntagResource. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.UpdateProfilingGroup">UpdateProfilingGroup</a></code> | <code>string</code> | [Write] codeguru-profiler:UpdateProfilingGroup. |

---

##### `actionGetFindingsReportAccountSummary`<sup>Required</sup> <a name="actionGetFindingsReportAccountSummary" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetFindingsReportAccountSummary"></a>

```typescript
public readonly actionGetFindingsReportAccountSummary: string;
```

- *Type:* string

[Read] codeguru-profiler:GetFindingsReportAccountSummary.

---

##### `actionGetNotificationConfiguration`<sup>Required</sup> <a name="actionGetNotificationConfiguration" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetNotificationConfiguration"></a>

```typescript
public readonly actionGetNotificationConfiguration: string;
```

- *Type:* string

[Read] codeguru-profiler:GetNotificationConfiguration.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] codeguru-profiler:GetPolicy.

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] codeguru-profiler:GetProfile.

---

##### `actionGetRecommendations`<sup>Required</sup> <a name="actionGetRecommendations" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.actionGetRecommendations"></a>

```typescript
public readonly actionGetRecommendations: string;
```

- *Type:* string

[Read] codeguru-profiler:GetRecommendations.

---

##### `AddNotificationChannels`<sup>Required</sup> <a name="AddNotificationChannels" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AddNotificationChannels"></a>

```typescript
public readonly AddNotificationChannels: string;
```

- *Type:* string

[Write] codeguru-profiler:AddNotificationChannels.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetFrameMetricData`<sup>Required</sup> <a name="BatchGetFrameMetricData" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.BatchGetFrameMetricData"></a>

```typescript
public readonly BatchGetFrameMetricData: string;
```

- *Type:* string

[List] codeguru-profiler:BatchGetFrameMetricData.

---

##### `ConfigureAgent`<sup>Required</sup> <a name="ConfigureAgent" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ConfigureAgent"></a>

```typescript
public readonly ConfigureAgent: string;
```

- *Type:* string

[Write] codeguru-profiler:ConfigureAgent.

---

##### `CreateProfilingGroup`<sup>Required</sup> <a name="CreateProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.CreateProfilingGroup"></a>

```typescript
public readonly CreateProfilingGroup: string;
```

- *Type:* string

[Write] codeguru-profiler:CreateProfilingGroup.

---

##### `DeleteProfilingGroup`<sup>Required</sup> <a name="DeleteProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.DeleteProfilingGroup"></a>

```typescript
public readonly DeleteProfilingGroup: string;
```

- *Type:* string

[Write] codeguru-profiler:DeleteProfilingGroup.

---

##### `DescribeProfilingGroup`<sup>Required</sup> <a name="DescribeProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.DescribeProfilingGroup"></a>

```typescript
public readonly DescribeProfilingGroup: string;
```

- *Type:* string

[Read] codeguru-profiler:DescribeProfilingGroup.

---

##### `ListFindingsReports`<sup>Required</sup> <a name="ListFindingsReports" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListFindingsReports"></a>

```typescript
public readonly ListFindingsReports: string;
```

- *Type:* string

[List] codeguru-profiler:ListFindingsReports.

---

##### `ListProfileTimes`<sup>Required</sup> <a name="ListProfileTimes" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListProfileTimes"></a>

```typescript
public readonly ListProfileTimes: string;
```

- *Type:* string

[List] codeguru-profiler:ListProfileTimes.

---

##### `ListProfilingGroups`<sup>Required</sup> <a name="ListProfilingGroups" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListProfilingGroups"></a>

```typescript
public readonly ListProfilingGroups: string;
```

- *Type:* string

[List] codeguru-profiler:ListProfilingGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codeguru-profiler:ListTagsForResource.

---

##### `PostAgentProfile`<sup>Required</sup> <a name="PostAgentProfile" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.PostAgentProfile"></a>

```typescript
public readonly PostAgentProfile: string;
```

- *Type:* string

[Write] codeguru-profiler:PostAgentProfile.

---

##### `PutPermission`<sup>Required</sup> <a name="PutPermission" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.PutPermission"></a>

```typescript
public readonly PutPermission: string;
```

- *Type:* string

[PermissionManagement] codeguru-profiler:PutPermission.

---

##### `RemoveNotificationChannel`<sup>Required</sup> <a name="RemoveNotificationChannel" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.RemoveNotificationChannel"></a>

```typescript
public readonly RemoveNotificationChannel: string;
```

- *Type:* string

[Write] codeguru-profiler:RemoveNotificationChannel.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string;
```

- *Type:* string

[PermissionManagement] codeguru-profiler:RemovePermission.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SubmitFeedback`<sup>Required</sup> <a name="SubmitFeedback" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.SubmitFeedback"></a>

```typescript
public readonly SubmitFeedback: string;
```

- *Type:* string

[Write] codeguru-profiler:SubmitFeedback.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codeguru-profiler:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codeguru-profiler:UntagResource.

---

##### `UpdateProfilingGroup`<sup>Required</sup> <a name="UpdateProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerActions.property.UpdateProfilingGroup"></a>

```typescript
public readonly UpdateProfilingGroup: string;
```

- *Type:* string

[Write] codeguru-profiler:UpdateProfilingGroup.

---

### CodeguruProfilerConditions <a name="CodeguruProfilerConditions" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions"></a>

Condition key constants and builders for codeguru-profiler.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

new codeguru_profiler.CodeguruProfilerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.requestTag"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.resourceTag"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.tagKeys"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.CreateProfilingGroupConditionKeys">CreateProfilingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfilingGroup action. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProfilingGroupConditionKeys`<sup>Required</sup> <a name="CreateProfilingGroupConditionKeys" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.CreateProfilingGroupConditionKeys"></a>

```typescript
public readonly CreateProfilingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfilingGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodeguruProfilerOperations <a name="CodeguruProfilerOperations" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations"></a>

API operation to required IAM actions mapping for codeguru-profiler.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

new codeguru_profiler.CodeguruProfilerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.AddNotificationChannels">AddNotificationChannels</a></code> | <code>string[]</code> | IAM actions required for the AddNotificationChannels API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.BatchGetFrameMetricData">BatchGetFrameMetricData</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFrameMetricData API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ConfigureAgent">ConfigureAgent</a></code> | <code>string[]</code> | IAM actions required for the ConfigureAgent API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.CreateProfilingGroup">CreateProfilingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateProfilingGroup API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.DeleteProfilingGroup">DeleteProfilingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfilingGroup API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.DescribeProfilingGroup">DescribeProfilingGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeProfilingGroup API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListFindingsReports">ListFindingsReports</a></code> | <code>string[]</code> | IAM actions required for the ListFindingsReports API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListProfileTimes">ListProfileTimes</a></code> | <code>string[]</code> | IAM actions required for the ListProfileTimes API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListProfilingGroups">ListProfilingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListProfilingGroups API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetFindingsReportAccountSummary">opGetFindingsReportAccountSummary</a></code> | <code>string[]</code> | IAM actions required for the GetFindingsReportAccountSummary API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetNotificationConfiguration">opGetNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetProfile">opGetProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProfile API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetRecommendations">opGetRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendations API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.PostAgentProfile">PostAgentProfile</a></code> | <code>string[]</code> | IAM actions required for the PostAgentProfile API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.PutPermission">PutPermission</a></code> | <code>string[]</code> | IAM actions required for the PutPermission API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.RemoveNotificationChannel">RemoveNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the RemoveNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.RemovePermission">RemovePermission</a></code> | <code>string[]</code> | IAM actions required for the RemovePermission API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.SubmitFeedback">SubmitFeedback</a></code> | <code>string[]</code> | IAM actions required for the SubmitFeedback API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.UpdateProfilingGroup">UpdateProfilingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfilingGroup API call. |

---

##### `AddNotificationChannels`<sup>Required</sup> <a name="AddNotificationChannels" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.AddNotificationChannels"></a>

```typescript
public readonly AddNotificationChannels: string[];
```

- *Type:* string[]

IAM actions required for the AddNotificationChannels API call.

---

##### `BatchGetFrameMetricData`<sup>Required</sup> <a name="BatchGetFrameMetricData" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.BatchGetFrameMetricData"></a>

```typescript
public readonly BatchGetFrameMetricData: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFrameMetricData API call.

---

##### `ConfigureAgent`<sup>Required</sup> <a name="ConfigureAgent" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ConfigureAgent"></a>

```typescript
public readonly ConfigureAgent: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureAgent API call.

---

##### `CreateProfilingGroup`<sup>Required</sup> <a name="CreateProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.CreateProfilingGroup"></a>

```typescript
public readonly CreateProfilingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfilingGroup API call.

---

##### `DeleteProfilingGroup`<sup>Required</sup> <a name="DeleteProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.DeleteProfilingGroup"></a>

```typescript
public readonly DeleteProfilingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfilingGroup API call.

---

##### `DescribeProfilingGroup`<sup>Required</sup> <a name="DescribeProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.DescribeProfilingGroup"></a>

```typescript
public readonly DescribeProfilingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProfilingGroup API call.

---

##### `ListFindingsReports`<sup>Required</sup> <a name="ListFindingsReports" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListFindingsReports"></a>

```typescript
public readonly ListFindingsReports: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingsReports API call.

---

##### `ListProfileTimes`<sup>Required</sup> <a name="ListProfileTimes" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListProfileTimes"></a>

```typescript
public readonly ListProfileTimes: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileTimes API call.

---

##### `ListProfilingGroups`<sup>Required</sup> <a name="ListProfilingGroups" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListProfilingGroups"></a>

```typescript
public readonly ListProfilingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListProfilingGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetFindingsReportAccountSummary`<sup>Required</sup> <a name="opGetFindingsReportAccountSummary" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetFindingsReportAccountSummary"></a>

```typescript
public readonly opGetFindingsReportAccountSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetFindingsReportAccountSummary API call.

---

##### `opGetNotificationConfiguration`<sup>Required</sup> <a name="opGetNotificationConfiguration" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetNotificationConfiguration"></a>

```typescript
public readonly opGetNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationConfiguration API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetProfile`<sup>Required</sup> <a name="opGetProfile" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetProfile"></a>

```typescript
public readonly opGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProfile API call.

---

##### `opGetRecommendations`<sup>Required</sup> <a name="opGetRecommendations" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.opGetRecommendations"></a>

```typescript
public readonly opGetRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendations API call.

---

##### `PostAgentProfile`<sup>Required</sup> <a name="PostAgentProfile" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.PostAgentProfile"></a>

```typescript
public readonly PostAgentProfile: string[];
```

- *Type:* string[]

IAM actions required for the PostAgentProfile API call.

---

##### `PutPermission`<sup>Required</sup> <a name="PutPermission" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.PutPermission"></a>

```typescript
public readonly PutPermission: string[];
```

- *Type:* string[]

IAM actions required for the PutPermission API call.

---

##### `RemoveNotificationChannel`<sup>Required</sup> <a name="RemoveNotificationChannel" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.RemoveNotificationChannel"></a>

```typescript
public readonly RemoveNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the RemoveNotificationChannel API call.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemovePermission API call.

---

##### `SubmitFeedback`<sup>Required</sup> <a name="SubmitFeedback" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.SubmitFeedback"></a>

```typescript
public readonly SubmitFeedback: string[];
```

- *Type:* string[]

IAM actions required for the SubmitFeedback API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateProfilingGroup`<sup>Required</sup> <a name="UpdateProfilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerOperations.property.UpdateProfilingGroup"></a>

```typescript
public readonly UpdateProfilingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfilingGroup API call.

---

### CodeguruProfilerResources <a name="CodeguruProfilerResources" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources"></a>

ARN builders, validators, and parsers for codeguru-profiler resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.Initializer"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

new codeguru_profiler.CodeguruProfilerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.isValidProfilingGroupArn">isValidProfilingGroupArn</a></code> | Validates whether a string is a valid ARN for the ProfilingGroup resource. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.parseProfilingGroupArn">parseProfilingGroupArn</a></code> | Parses a ProfilingGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.profilingGroup">profilingGroup</a></code> | Builds an ARN for the ProfilingGroup resource. |

---

##### `isValidProfilingGroupArn` <a name="isValidProfilingGroupArn" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.isValidProfilingGroupArn"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerResources.isValidProfilingGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the ProfilingGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.isValidProfilingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfilingGroupArn` <a name="parseProfilingGroupArn" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.parseProfilingGroupArn"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerResources.parseProfilingGroupArn(arn: string)
```

Parses a ProfilingGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.parseProfilingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `profilingGroup` <a name="profilingGroup" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.profilingGroup"></a>

```typescript
import { codeguru_profiler } from '@cdk_utils/iam'

codeguru_profiler.CodeguruProfilerResources.profilingGroup(props: CodeguruProfilerProfilingGroupArnProps)
```

Builds an ARN for the ProfilingGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeguru_profiler.CodeguruProfilerResources.profilingGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeguru_profiler.CodeguruProfilerProfilingGroupArnProps">CodeguruProfilerProfilingGroupArnProps</a>

---




