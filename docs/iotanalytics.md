# `iotanalytics` Submodule <a name="`iotanalytics` Submodule" id="@cdk_utils/iam.iotanalytics"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsChannelArnComponents <a name="IotanalyticsChannelArnComponents" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsChannelArnComponents: iotanalytics.IotanalyticsChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotanalyticsChannelArnProps <a name="IotanalyticsChannelArnProps" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsChannelArnProps: iotanalytics.IotanalyticsChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotanalyticsDatasetArnComponents <a name="IotanalyticsDatasetArnComponents" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsDatasetArnComponents: iotanalytics.IotanalyticsDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotanalyticsDatasetArnProps <a name="IotanalyticsDatasetArnProps" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsDatasetArnProps: iotanalytics.IotanalyticsDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotanalyticsDatastoreArnComponents <a name="IotanalyticsDatastoreArnComponents" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents"></a>

Parsed components of a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsDatastoreArnComponents: iotanalytics.IotanalyticsDatastoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.datastoreName">datastoreName</a></code> | <code>string</code> | The DatastoreName component. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

The DatastoreName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotanalyticsDatastoreArnProps <a name="IotanalyticsDatastoreArnProps" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps"></a>

Properties for building a datastore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsDatastoreArnProps: iotanalytics.IotanalyticsDatastoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.datastoreName">datastoreName</a></code> | <code>string</code> | The DatastoreName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

The DatastoreName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotanalyticsPipelineArnComponents <a name="IotanalyticsPipelineArnComponents" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents"></a>

Parsed components of a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsPipelineArnComponents: iotanalytics.IotanalyticsPipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotanalyticsPipelineArnProps <a name="IotanalyticsPipelineArnProps" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps"></a>

Properties for building a pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

const iotanalyticsPipelineArnProps: iotanalytics.IotanalyticsPipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The PipelineName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The PipelineName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsActions <a name="IotanalyticsActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions"></a>

IAM action constants for the iotanalytics service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

new iotanalytics.IotanalyticsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.actionGetDatasetContent">actionGetDatasetContent</a></code> | <code>string</code> | [Read] iotanalytics:GetDatasetContent. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.BatchPutMessage">BatchPutMessage</a></code> | <code>string</code> | [Write] iotanalytics:BatchPutMessage. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CancelPipelineReprocessing">CancelPipelineReprocessing</a></code> | <code>string</code> | [Write] iotanalytics:CancelPipelineReprocessing. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] iotanalytics:CreateChannel. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] iotanalytics:CreateDataset. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDatasetContent">CreateDatasetContent</a></code> | <code>string</code> | [Write] iotanalytics:CreateDatasetContent. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDatastore">CreateDatastore</a></code> | <code>string</code> | [Write] iotanalytics:CreateDatastore. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreatePipeline">CreatePipeline</a></code> | <code>string</code> | [Write] iotanalytics:CreatePipeline. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] iotanalytics:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] iotanalytics:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDatasetContent">DeleteDatasetContent</a></code> | <code>string</code> | [Write] iotanalytics:DeleteDatasetContent. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDatastore">DeleteDatastore</a></code> | <code>string</code> | [Write] iotanalytics:DeleteDatastore. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeletePipeline">DeletePipeline</a></code> | <code>string</code> | [Write] iotanalytics:DeletePipeline. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] iotanalytics:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] iotanalytics:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeDatastore">DescribeDatastore</a></code> | <code>string</code> | [Read] iotanalytics:DescribeDatastore. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeLoggingOptions">DescribeLoggingOptions</a></code> | <code>string</code> | [Read] iotanalytics:DescribeLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribePipeline">DescribePipeline</a></code> | <code>string</code> | [Read] iotanalytics:DescribePipeline. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] iotanalytics:ListChannels. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatasetContents">ListDatasetContents</a></code> | <code>string</code> | [List] iotanalytics:ListDatasetContents. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] iotanalytics:ListDatasets. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatastores">ListDatastores</a></code> | <code>string</code> | [List] iotanalytics:ListDatastores. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListPipelines">ListPipelines</a></code> | <code>string</code> | [List] iotanalytics:ListPipelines. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotanalytics:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string</code> | [Write] iotanalytics:PutLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.RunPipelineActivity">RunPipelineActivity</a></code> | <code>string</code> | [Read] iotanalytics:RunPipelineActivity. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.SampleChannelData">SampleChannelData</a></code> | <code>string</code> | [Read] iotanalytics:SampleChannelData. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.StartPipelineReprocessing">StartPipelineReprocessing</a></code> | <code>string</code> | [Write] iotanalytics:StartPipelineReprocessing. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotanalytics:TagResource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotanalytics:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] iotanalytics:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] iotanalytics:UpdateDataset. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateDatastore">UpdateDatastore</a></code> | <code>string</code> | [Write] iotanalytics:UpdateDatastore. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdatePipeline">UpdatePipeline</a></code> | <code>string</code> | [Write] iotanalytics:UpdatePipeline. |

---

##### `actionGetDatasetContent`<sup>Required</sup> <a name="actionGetDatasetContent" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.actionGetDatasetContent"></a>

```typescript
public readonly actionGetDatasetContent: string;
```

- *Type:* string

[Read] iotanalytics:GetDatasetContent.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchPutMessage`<sup>Required</sup> <a name="BatchPutMessage" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.BatchPutMessage"></a>

```typescript
public readonly BatchPutMessage: string;
```

- *Type:* string

[Write] iotanalytics:BatchPutMessage.

---

##### `CancelPipelineReprocessing`<sup>Required</sup> <a name="CancelPipelineReprocessing" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CancelPipelineReprocessing"></a>

```typescript
public readonly CancelPipelineReprocessing: string;
```

- *Type:* string

[Write] iotanalytics:CancelPipelineReprocessing.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] iotanalytics:CreateChannel.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] iotanalytics:CreateDataset.

---

##### `CreateDatasetContent`<sup>Required</sup> <a name="CreateDatasetContent" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDatasetContent"></a>

```typescript
public readonly CreateDatasetContent: string;
```

- *Type:* string

[Write] iotanalytics:CreateDatasetContent.

---

##### `CreateDatastore`<sup>Required</sup> <a name="CreateDatastore" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreateDatastore"></a>

```typescript
public readonly CreateDatastore: string;
```

- *Type:* string

[Write] iotanalytics:CreateDatastore.

---

##### `CreatePipeline`<sup>Required</sup> <a name="CreatePipeline" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.CreatePipeline"></a>

```typescript
public readonly CreatePipeline: string;
```

- *Type:* string

[Write] iotanalytics:CreatePipeline.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] iotanalytics:DeleteChannel.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] iotanalytics:DeleteDataset.

---

##### `DeleteDatasetContent`<sup>Required</sup> <a name="DeleteDatasetContent" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDatasetContent"></a>

```typescript
public readonly DeleteDatasetContent: string;
```

- *Type:* string

[Write] iotanalytics:DeleteDatasetContent.

---

##### `DeleteDatastore`<sup>Required</sup> <a name="DeleteDatastore" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeleteDatastore"></a>

```typescript
public readonly DeleteDatastore: string;
```

- *Type:* string

[Write] iotanalytics:DeleteDatastore.

---

##### `DeletePipeline`<sup>Required</sup> <a name="DeletePipeline" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DeletePipeline"></a>

```typescript
public readonly DeletePipeline: string;
```

- *Type:* string

[Write] iotanalytics:DeletePipeline.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] iotanalytics:DescribeChannel.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] iotanalytics:DescribeDataset.

---

##### `DescribeDatastore`<sup>Required</sup> <a name="DescribeDatastore" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeDatastore"></a>

```typescript
public readonly DescribeDatastore: string;
```

- *Type:* string

[Read] iotanalytics:DescribeDatastore.

---

##### `DescribeLoggingOptions`<sup>Required</sup> <a name="DescribeLoggingOptions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribeLoggingOptions"></a>

```typescript
public readonly DescribeLoggingOptions: string;
```

- *Type:* string

[Read] iotanalytics:DescribeLoggingOptions.

---

##### `DescribePipeline`<sup>Required</sup> <a name="DescribePipeline" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.DescribePipeline"></a>

```typescript
public readonly DescribePipeline: string;
```

- *Type:* string

[Read] iotanalytics:DescribePipeline.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] iotanalytics:ListChannels.

---

##### `ListDatasetContents`<sup>Required</sup> <a name="ListDatasetContents" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatasetContents"></a>

```typescript
public readonly ListDatasetContents: string;
```

- *Type:* string

[List] iotanalytics:ListDatasetContents.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] iotanalytics:ListDatasets.

---

##### `ListDatastores`<sup>Required</sup> <a name="ListDatastores" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListDatastores"></a>

```typescript
public readonly ListDatastores: string;
```

- *Type:* string

[List] iotanalytics:ListDatastores.

---

##### `ListPipelines`<sup>Required</sup> <a name="ListPipelines" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListPipelines"></a>

```typescript
public readonly ListPipelines: string;
```

- *Type:* string

[List] iotanalytics:ListPipelines.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotanalytics:ListTagsForResource.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string;
```

- *Type:* string

[Write] iotanalytics:PutLoggingOptions.

---

##### `RunPipelineActivity`<sup>Required</sup> <a name="RunPipelineActivity" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.RunPipelineActivity"></a>

```typescript
public readonly RunPipelineActivity: string;
```

- *Type:* string

[Read] iotanalytics:RunPipelineActivity.

---

##### `SampleChannelData`<sup>Required</sup> <a name="SampleChannelData" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.SampleChannelData"></a>

```typescript
public readonly SampleChannelData: string;
```

- *Type:* string

[Read] iotanalytics:SampleChannelData.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPipelineReprocessing`<sup>Required</sup> <a name="StartPipelineReprocessing" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.StartPipelineReprocessing"></a>

```typescript
public readonly StartPipelineReprocessing: string;
```

- *Type:* string

[Write] iotanalytics:StartPipelineReprocessing.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotanalytics:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotanalytics:UntagResource.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] iotanalytics:UpdateChannel.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] iotanalytics:UpdateDataset.

---

##### `UpdateDatastore`<sup>Required</sup> <a name="UpdateDatastore" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdateDatastore"></a>

```typescript
public readonly UpdateDatastore: string;
```

- *Type:* string

[Write] iotanalytics:UpdateDatastore.

---

##### `UpdatePipeline`<sup>Required</sup> <a name="UpdatePipeline" id="@cdk_utils/iam.iotanalytics.IotanalyticsActions.property.UpdatePipeline"></a>

```typescript
public readonly UpdatePipeline: string;
```

- *Type:* string

[Write] iotanalytics:UpdatePipeline.

---

### IotanalyticsConditions <a name="IotanalyticsConditions" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions"></a>

Condition key constants and builders for iotanalytics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

new iotanalytics.IotanalyticsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `iotanalytics:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.requestTag"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.resourceTag"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsConditions.resourceTag(value: string)
```

Generates a condition block for `iotanalytics:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.tagKeys"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateDatastoreConditionKeys">CreateDatastoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatastore action. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreatePipelineConditionKeys">CreatePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePipeline action. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: iotanalytics:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateDatastoreConditionKeys`<sup>Required</sup> <a name="CreateDatastoreConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreateDatastoreConditionKeys"></a>

```typescript
public readonly CreateDatastoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatastore action.

---

##### `CreatePipelineConditionKeys`<sup>Required</sup> <a name="CreatePipelineConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.CreatePipelineConditionKeys"></a>

```typescript
public readonly CreatePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePipeline action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: iotanalytics:ResourceTag/${TagKey} (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotanalytics.IotanalyticsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IotanalyticsResources <a name="IotanalyticsResources" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources"></a>

ARN builders, validators, and parsers for iotanalytics resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.Initializer"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

new iotanalytics.IotanalyticsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.datastore">datastore</a></code> | Builds an ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatastoreArn">isValidDatastoreArn</a></code> | Validates whether a string is a valid ARN for the datastore resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidPipelineArn">isValidPipelineArn</a></code> | Validates whether a string is a valid ARN for the pipeline resource. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatastoreArn">parseDatastoreArn</a></code> | Parses a datastore ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.parsePipelineArn">parsePipelineArn</a></code> | Parses a pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotanalytics.IotanalyticsResources.pipeline">pipeline</a></code> | Builds an ARN for the pipeline resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.channel"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.channel(props: IotanalyticsChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotanalytics.IotanalyticsChannelArnProps">IotanalyticsChannelArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.dataset"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.dataset(props: IotanalyticsDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatasetArnProps">IotanalyticsDatasetArnProps</a>

---

##### `datastore` <a name="datastore" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.datastore"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.datastore(props: IotanalyticsDatastoreArnProps)
```

Builds an ARN for the datastore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.datastore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotanalytics.IotanalyticsDatastoreArnProps">IotanalyticsDatastoreArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidChannelArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatasetArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatastoreArn` <a name="isValidDatastoreArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatastoreArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.isValidDatastoreArn(arn: string)
```

Validates whether a string is a valid ARN for the datastore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPipelineArn` <a name="isValidPipelineArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidPipelineArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.isValidPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.isValidPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseChannelArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatasetArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatastoreArn` <a name="parseDatastoreArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatastoreArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.parseDatastoreArn(arn: string)
```

Parses a datastore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parseDatastoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePipelineArn` <a name="parsePipelineArn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parsePipelineArn"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.parsePipelineArn(arn: string)
```

Parses a pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.parsePipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `pipeline` <a name="pipeline" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.pipeline"></a>

```typescript
import { iotanalytics } from '@cdk_utils/iam'

iotanalytics.IotanalyticsResources.pipeline(props: IotanalyticsPipelineArnProps)
```

Builds an ARN for the pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotanalytics.IotanalyticsResources.pipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotanalytics.IotanalyticsPipelineArnProps">IotanalyticsPipelineArnProps</a>

---




