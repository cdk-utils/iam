# `airflow_serverless` Submodule <a name="`airflow_serverless` Submodule" id="@cdk_utils/iam.airflow_serverless"></a>


## Structs <a name="Structs" id="Structs"></a>

### AirflowServerlessWorkflowArnComponents <a name="AirflowServerlessWorkflowArnComponents" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents"></a>

Parsed components of a Workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

const airflowServerlessWorkflowArnComponents: airflow_serverless.AirflowServerlessWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.workflowId">workflowId</a></code> | <code>string</code> | The WorkflowId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnComponents.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

The WorkflowId component.

---

### AirflowServerlessWorkflowArnProps <a name="AirflowServerlessWorkflowArnProps" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps"></a>

Properties for building a Workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

const airflowServerlessWorkflowArnProps: airflow_serverless.AirflowServerlessWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.workflowId">workflowId</a></code> | <code>string</code> | The WorkflowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.workflowId"></a>

```typescript
public readonly workflowId: string;
```

- *Type:* string

The WorkflowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AirflowServerlessActions <a name="AirflowServerlessActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions"></a>

IAM action constants for the airflow-serverless service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

new airflow_serverless.AirflowServerlessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetTaskInstance">actionGetTaskInstance</a></code> | <code>string</code> | [Read] airflow-serverless:GetTaskInstance. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] airflow-serverless:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetWorkflowRun">actionGetWorkflowRun</a></code> | <code>string</code> | [Read] airflow-serverless:GetWorkflowRun. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] airflow-serverless:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] airflow-serverless:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] airflow-serverless:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListTaskInstances">ListTaskInstances</a></code> | <code>string</code> | [List] airflow-serverless:ListTaskInstances. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflowRuns">ListWorkflowRuns</a></code> | <code>string</code> | [List] airflow-serverless:ListWorkflowRuns. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] airflow-serverless:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflowVersions">ListWorkflowVersions</a></code> | <code>string</code> | [List] airflow-serverless:ListWorkflowVersions. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.StartWorkflowRun">StartWorkflowRun</a></code> | <code>string</code> | [Write] airflow-serverless:StartWorkflowRun. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.StopWorkflowRun">StopWorkflowRun</a></code> | <code>string</code> | [Write] airflow-serverless:StopWorkflowRun. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] airflow-serverless:TagResource. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] airflow-serverless:UntagResource. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string</code> | [Write] airflow-serverless:UpdateWorkflow. |

---

##### `actionGetTaskInstance`<sup>Required</sup> <a name="actionGetTaskInstance" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetTaskInstance"></a>

```typescript
public readonly actionGetTaskInstance: string;
```

- *Type:* string

[Read] airflow-serverless:GetTaskInstance.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] airflow-serverless:GetWorkflow.

---

##### `actionGetWorkflowRun`<sup>Required</sup> <a name="actionGetWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.actionGetWorkflowRun"></a>

```typescript
public readonly actionGetWorkflowRun: string;
```

- *Type:* string

[Read] airflow-serverless:GetWorkflowRun.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] airflow-serverless:CreateWorkflow.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] airflow-serverless:DeleteWorkflow.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] airflow-serverless:ListTagsForResource.

---

##### `ListTaskInstances`<sup>Required</sup> <a name="ListTaskInstances" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListTaskInstances"></a>

```typescript
public readonly ListTaskInstances: string;
```

- *Type:* string

[List] airflow-serverless:ListTaskInstances.

---

##### `ListWorkflowRuns`<sup>Required</sup> <a name="ListWorkflowRuns" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflowRuns"></a>

```typescript
public readonly ListWorkflowRuns: string;
```

- *Type:* string

[List] airflow-serverless:ListWorkflowRuns.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] airflow-serverless:ListWorkflows.

---

##### `ListWorkflowVersions`<sup>Required</sup> <a name="ListWorkflowVersions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.ListWorkflowVersions"></a>

```typescript
public readonly ListWorkflowVersions: string;
```

- *Type:* string

[List] airflow-serverless:ListWorkflowVersions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartWorkflowRun`<sup>Required</sup> <a name="StartWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.StartWorkflowRun"></a>

```typescript
public readonly StartWorkflowRun: string;
```

- *Type:* string

[Write] airflow-serverless:StartWorkflowRun.

---

##### `StopWorkflowRun`<sup>Required</sup> <a name="StopWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.StopWorkflowRun"></a>

```typescript
public readonly StopWorkflowRun: string;
```

- *Type:* string

[Write] airflow-serverless:StopWorkflowRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] airflow-serverless:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] airflow-serverless:UntagResource.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessActions.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string;
```

- *Type:* string

[Write] airflow-serverless:UpdateWorkflow.

---

### AirflowServerlessConditions <a name="AirflowServerlessConditions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions"></a>

Condition key constants and builders for airflow-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

new airflow_serverless.AirflowServerlessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.requestTag"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.resourceTag"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.tagKeys"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AirflowServerlessOperations <a name="AirflowServerlessOperations" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations"></a>

API operation to required IAM actions mapping for airflow-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

new airflow_serverless.AirflowServerlessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListTaskInstances">ListTaskInstances</a></code> | <code>string[]</code> | IAM actions required for the ListTaskInstances API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflowRuns">ListWorkflowRuns</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowRuns API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflowVersions">ListWorkflowVersions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowVersions API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetTaskInstance">opGetTaskInstance</a></code> | <code>string[]</code> | IAM actions required for the GetTaskInstance API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetWorkflowRun">opGetWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.StartWorkflowRun">StartWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the StartWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.StopWorkflowRun">StopWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the StopWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflow API call. |

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTaskInstances`<sup>Required</sup> <a name="ListTaskInstances" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListTaskInstances"></a>

```typescript
public readonly ListTaskInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListTaskInstances API call.

---

##### `ListWorkflowRuns`<sup>Required</sup> <a name="ListWorkflowRuns" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflowRuns"></a>

```typescript
public readonly ListWorkflowRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowRuns API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `ListWorkflowVersions`<sup>Required</sup> <a name="ListWorkflowVersions" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.ListWorkflowVersions"></a>

```typescript
public readonly ListWorkflowVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowVersions API call.

---

##### `opGetTaskInstance`<sup>Required</sup> <a name="opGetTaskInstance" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetTaskInstance"></a>

```typescript
public readonly opGetTaskInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetTaskInstance API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowRun`<sup>Required</sup> <a name="opGetWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.opGetWorkflowRun"></a>

```typescript
public readonly opGetWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRun API call.

---

##### `StartWorkflowRun`<sup>Required</sup> <a name="StartWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.StartWorkflowRun"></a>

```typescript
public readonly StartWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkflowRun API call.

---

##### `StopWorkflowRun`<sup>Required</sup> <a name="StopWorkflowRun" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.StopWorkflowRun"></a>

```typescript
public readonly StopWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the StopWorkflowRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessOperations.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflow API call.

---

### AirflowServerlessResources <a name="AirflowServerlessResources" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources"></a>

ARN builders, validators, and parsers for airflow-serverless resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.Initializer"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

new airflow_serverless.AirflowServerlessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the Workflow resource. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a Workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.workflow">workflow</a></code> | Builds an ARN for the Workflow resource. |

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.isValidWorkflowArn"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the Workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.parseWorkflowArn"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessResources.parseWorkflowArn(arn: string)
```

Parses a Workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.workflow"></a>

```typescript
import { airflow_serverless } from '@cdk_utils/iam'

airflow_serverless.AirflowServerlessResources.workflow(props: AirflowServerlessWorkflowArnProps)
```

Builds an ARN for the Workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.airflow_serverless.AirflowServerlessResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.airflow_serverless.AirflowServerlessWorkflowArnProps">AirflowServerlessWorkflowArnProps</a>

---




