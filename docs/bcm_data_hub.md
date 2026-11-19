# `bcm_data_hub` Submodule <a name="`bcm_data_hub` Submodule" id="@cdk_utils/iam.bcm_data_hub"></a>


## Structs <a name="Structs" id="Structs"></a>

### BcmDataHubDatasetArnComponents <a name="BcmDataHubDatasetArnComponents" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.Initializer"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

const bcmDataHubDatasetArnComponents: bcm_data_hub.BcmDataHubDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BcmDataHubDatasetArnProps <a name="BcmDataHubDatasetArnProps" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.Initializer"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

const bcmDataHubDatasetArnProps: bcm_data_hub.BcmDataHubDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BcmDataHubActions <a name="BcmDataHubActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions"></a>

IAM action constants for the bcm-data-hub service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.Initializer"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

new bcm_data_hub.BcmDataHubActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetDataset">actionGetDataset</a></code> | <code>string</code> | [Read] bcm-data-hub:GetDataset. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetDatasetSchema">actionGetDatasetSchema</a></code> | <code>string</code> | [Read] bcm-data-hub:GetDatasetSchema. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetQueryExecution">actionGetQueryExecution</a></code> | <code>string</code> | [Read] bcm-data-hub:GetQueryExecution. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetQueryExecutionResults">actionGetQueryExecutionResults</a></code> | <code>string</code> | [Read] bcm-data-hub:GetQueryExecutionResults. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.CancelQueryExecution">CancelQueryExecution</a></code> | <code>string</code> | [Write] bcm-data-hub:CancelQueryExecution. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] bcm-data-hub:CreateDataset. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] bcm-data-hub:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] bcm-data-hub:ListDatasets. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListQueryExecutions">ListQueryExecutions</a></code> | <code>string</code> | [List] bcm-data-hub:ListQueryExecutions. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bcm-data-hub:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.StartQueryExecution">StartQueryExecution</a></code> | <code>string</code> | [Write] bcm-data-hub:StartQueryExecution. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bcm-data-hub:TagResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bcm-data-hub:UntagResource. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] bcm-data-hub:UpdateDataset. |

---

##### `actionGetDataset`<sup>Required</sup> <a name="actionGetDataset" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetDataset"></a>

```typescript
public readonly actionGetDataset: string;
```

- *Type:* string

[Read] bcm-data-hub:GetDataset.

---

##### `actionGetDatasetSchema`<sup>Required</sup> <a name="actionGetDatasetSchema" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetDatasetSchema"></a>

```typescript
public readonly actionGetDatasetSchema: string;
```

- *Type:* string

[Read] bcm-data-hub:GetDatasetSchema.

---

##### `actionGetQueryExecution`<sup>Required</sup> <a name="actionGetQueryExecution" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetQueryExecution"></a>

```typescript
public readonly actionGetQueryExecution: string;
```

- *Type:* string

[Read] bcm-data-hub:GetQueryExecution.

---

##### `actionGetQueryExecutionResults`<sup>Required</sup> <a name="actionGetQueryExecutionResults" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.actionGetQueryExecutionResults"></a>

```typescript
public readonly actionGetQueryExecutionResults: string;
```

- *Type:* string

[Read] bcm-data-hub:GetQueryExecutionResults.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelQueryExecution`<sup>Required</sup> <a name="CancelQueryExecution" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.CancelQueryExecution"></a>

```typescript
public readonly CancelQueryExecution: string;
```

- *Type:* string

[Write] bcm-data-hub:CancelQueryExecution.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] bcm-data-hub:CreateDataset.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] bcm-data-hub:DeleteDataset.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] bcm-data-hub:ListDatasets.

---

##### `ListQueryExecutions`<sup>Required</sup> <a name="ListQueryExecutions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListQueryExecutions"></a>

```typescript
public readonly ListQueryExecutions: string;
```

- *Type:* string

[List] bcm-data-hub:ListQueryExecutions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bcm-data-hub:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartQueryExecution`<sup>Required</sup> <a name="StartQueryExecution" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.StartQueryExecution"></a>

```typescript
public readonly StartQueryExecution: string;
```

- *Type:* string

[Write] bcm-data-hub:StartQueryExecution.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bcm-data-hub:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bcm-data-hub:UntagResource.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] bcm-data-hub:UpdateDataset.

---

### BcmDataHubConditions <a name="BcmDataHubConditions" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions"></a>

Condition key constants and builders for bcm-data-hub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.Initializer"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

new bcm_data_hub.BcmDataHubConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.requestTag"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.resourceTag"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.tagKeys"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BcmDataHubResources <a name="BcmDataHubResources" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources"></a>

ARN builders, validators, and parsers for bcm-data-hub resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.Initializer"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

new bcm_data_hub.BcmDataHubResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.dataset"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubResources.dataset(props: BcmDataHubDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_data_hub.BcmDataHubDatasetArnProps">BcmDataHubDatasetArnProps</a>

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.isValidDatasetArn"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.parseDatasetArn"></a>

```typescript
import { bcm_data_hub } from '@cdk_utils/iam'

bcm_data_hub.BcmDataHubResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_data_hub.BcmDataHubResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---




