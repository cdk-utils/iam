# `discovery` Submodule <a name="`discovery` Submodule" id="@cdk_utils/iam.discovery"></a>



## Classes <a name="Classes" id="Classes"></a>

### DiscoveryActions <a name="DiscoveryActions" id="@cdk_utils/iam.discovery.DiscoveryActions"></a>

IAM action constants for the discovery service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.discovery.DiscoveryActions.Initializer"></a>

```typescript
import { discovery } from '@cdk_utils/iam'

new discovery.DiscoveryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.actionGetDiscoverySummary">actionGetDiscoverySummary</a></code> | <code>string</code> | [Read] discovery:GetDiscoverySummary. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.actionGetNetworkConnectionGraph">actionGetNetworkConnectionGraph</a></code> | <code>string</code> | [Read] discovery:GetNetworkConnectionGraph. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.AssociateConfigurationItemsToApplication">AssociateConfigurationItemsToApplication</a></code> | <code>string</code> | [Write] discovery:AssociateConfigurationItemsToApplication. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.BatchDeleteAgents">BatchDeleteAgents</a></code> | <code>string</code> | [Write] discovery:BatchDeleteAgents. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.BatchDeleteImportData">BatchDeleteImportData</a></code> | <code>string</code> | [Write] discovery:BatchDeleteImportData. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] discovery:CreateApplication. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] discovery:CreateTags. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DeleteApplications">DeleteApplications</a></code> | <code>string</code> | [Write] discovery:DeleteApplications. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] discovery:DeleteTags. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeAgents">DescribeAgents</a></code> | <code>string</code> | [Read] discovery:DescribeAgents. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeBatchDeleteConfigurationTask">DescribeBatchDeleteConfigurationTask</a></code> | <code>string</code> | [Read] discovery:DescribeBatchDeleteConfigurationTask. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeConfigurations">DescribeConfigurations</a></code> | <code>string</code> | [Read] discovery:DescribeConfigurations. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeContinuousExports">DescribeContinuousExports</a></code> | <code>string</code> | [Read] discovery:DescribeContinuousExports. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeExportConfigurations">DescribeExportConfigurations</a></code> | <code>string</code> | [Read] discovery:DescribeExportConfigurations. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string</code> | [Read] discovery:DescribeExportTasks. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeImportTasks">DescribeImportTasks</a></code> | <code>string</code> | [List] discovery:DescribeImportTasks. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] discovery:DescribeTags. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.DisassociateConfigurationItemsFromApplication">DisassociateConfigurationItemsFromApplication</a></code> | <code>string</code> | [Write] discovery:DisassociateConfigurationItemsFromApplication. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.ExportConfigurations">ExportConfigurations</a></code> | <code>string</code> | [Write] discovery:ExportConfigurations. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.ListConfigurations">ListConfigurations</a></code> | <code>string</code> | [List] discovery:ListConfigurations. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.ListServerNeighbors">ListServerNeighbors</a></code> | <code>string</code> | [List] discovery:ListServerNeighbors. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StartBatchDeleteConfigurationTask">StartBatchDeleteConfigurationTask</a></code> | <code>string</code> | [Write] discovery:StartBatchDeleteConfigurationTask. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StartContinuousExport">StartContinuousExport</a></code> | <code>string</code> | [Write] discovery:StartContinuousExport. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StartDataCollectionByAgentIds">StartDataCollectionByAgentIds</a></code> | <code>string</code> | [Write] discovery:StartDataCollectionByAgentIds. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StartExportTask">StartExportTask</a></code> | <code>string</code> | [Write] discovery:StartExportTask. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StartImportTask">StartImportTask</a></code> | <code>string</code> | [Write] discovery:StartImportTask. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StopContinuousExport">StopContinuousExport</a></code> | <code>string</code> | [Write] discovery:StopContinuousExport. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.StopDataCollectionByAgentIds">StopDataCollectionByAgentIds</a></code> | <code>string</code> | [Write] discovery:StopDataCollectionByAgentIds. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] discovery:UpdateApplication. |

---

##### `actionGetDiscoverySummary`<sup>Required</sup> <a name="actionGetDiscoverySummary" id="@cdk_utils/iam.discovery.DiscoveryActions.property.actionGetDiscoverySummary"></a>

```typescript
public readonly actionGetDiscoverySummary: string;
```

- *Type:* string

[Read] discovery:GetDiscoverySummary.

---

##### `actionGetNetworkConnectionGraph`<sup>Required</sup> <a name="actionGetNetworkConnectionGraph" id="@cdk_utils/iam.discovery.DiscoveryActions.property.actionGetNetworkConnectionGraph"></a>

```typescript
public readonly actionGetNetworkConnectionGraph: string;
```

- *Type:* string

[Read] discovery:GetNetworkConnectionGraph.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConfigurationItemsToApplication`<sup>Required</sup> <a name="AssociateConfigurationItemsToApplication" id="@cdk_utils/iam.discovery.DiscoveryActions.property.AssociateConfigurationItemsToApplication"></a>

```typescript
public readonly AssociateConfigurationItemsToApplication: string;
```

- *Type:* string

[Write] discovery:AssociateConfigurationItemsToApplication.

---

##### `BatchDeleteAgents`<sup>Required</sup> <a name="BatchDeleteAgents" id="@cdk_utils/iam.discovery.DiscoveryActions.property.BatchDeleteAgents"></a>

```typescript
public readonly BatchDeleteAgents: string;
```

- *Type:* string

[Write] discovery:BatchDeleteAgents.

---

##### `BatchDeleteImportData`<sup>Required</sup> <a name="BatchDeleteImportData" id="@cdk_utils/iam.discovery.DiscoveryActions.property.BatchDeleteImportData"></a>

```typescript
public readonly BatchDeleteImportData: string;
```

- *Type:* string

[Write] discovery:BatchDeleteImportData.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.discovery.DiscoveryActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] discovery:CreateApplication.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.discovery.DiscoveryActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] discovery:CreateTags.

---

##### `DeleteApplications`<sup>Required</sup> <a name="DeleteApplications" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DeleteApplications"></a>

```typescript
public readonly DeleteApplications: string;
```

- *Type:* string

[Write] discovery:DeleteApplications.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] discovery:DeleteTags.

---

##### `DescribeAgents`<sup>Required</sup> <a name="DescribeAgents" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeAgents"></a>

```typescript
public readonly DescribeAgents: string;
```

- *Type:* string

[Read] discovery:DescribeAgents.

---

##### `DescribeBatchDeleteConfigurationTask`<sup>Required</sup> <a name="DescribeBatchDeleteConfigurationTask" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeBatchDeleteConfigurationTask"></a>

```typescript
public readonly DescribeBatchDeleteConfigurationTask: string;
```

- *Type:* string

[Read] discovery:DescribeBatchDeleteConfigurationTask.

---

##### `DescribeConfigurations`<sup>Required</sup> <a name="DescribeConfigurations" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeConfigurations"></a>

```typescript
public readonly DescribeConfigurations: string;
```

- *Type:* string

[Read] discovery:DescribeConfigurations.

---

##### `DescribeContinuousExports`<sup>Required</sup> <a name="DescribeContinuousExports" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeContinuousExports"></a>

```typescript
public readonly DescribeContinuousExports: string;
```

- *Type:* string

[Read] discovery:DescribeContinuousExports.

---

##### `DescribeExportConfigurations`<sup>Required</sup> <a name="DescribeExportConfigurations" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeExportConfigurations"></a>

```typescript
public readonly DescribeExportConfigurations: string;
```

- *Type:* string

[Read] discovery:DescribeExportConfigurations.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string;
```

- *Type:* string

[Read] discovery:DescribeExportTasks.

---

##### `DescribeImportTasks`<sup>Required</sup> <a name="DescribeImportTasks" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeImportTasks"></a>

```typescript
public readonly DescribeImportTasks: string;
```

- *Type:* string

[List] discovery:DescribeImportTasks.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] discovery:DescribeTags.

---

##### `DisassociateConfigurationItemsFromApplication`<sup>Required</sup> <a name="DisassociateConfigurationItemsFromApplication" id="@cdk_utils/iam.discovery.DiscoveryActions.property.DisassociateConfigurationItemsFromApplication"></a>

```typescript
public readonly DisassociateConfigurationItemsFromApplication: string;
```

- *Type:* string

[Write] discovery:DisassociateConfigurationItemsFromApplication.

---

##### `ExportConfigurations`<sup>Required</sup> <a name="ExportConfigurations" id="@cdk_utils/iam.discovery.DiscoveryActions.property.ExportConfigurations"></a>

```typescript
public readonly ExportConfigurations: string;
```

- *Type:* string

[Write] discovery:ExportConfigurations.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.discovery.DiscoveryActions.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string;
```

- *Type:* string

[List] discovery:ListConfigurations.

---

##### `ListServerNeighbors`<sup>Required</sup> <a name="ListServerNeighbors" id="@cdk_utils/iam.discovery.DiscoveryActions.property.ListServerNeighbors"></a>

```typescript
public readonly ListServerNeighbors: string;
```

- *Type:* string

[List] discovery:ListServerNeighbors.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.discovery.DiscoveryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBatchDeleteConfigurationTask`<sup>Required</sup> <a name="StartBatchDeleteConfigurationTask" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StartBatchDeleteConfigurationTask"></a>

```typescript
public readonly StartBatchDeleteConfigurationTask: string;
```

- *Type:* string

[Write] discovery:StartBatchDeleteConfigurationTask.

---

##### `StartContinuousExport`<sup>Required</sup> <a name="StartContinuousExport" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StartContinuousExport"></a>

```typescript
public readonly StartContinuousExport: string;
```

- *Type:* string

[Write] discovery:StartContinuousExport.

---

##### `StartDataCollectionByAgentIds`<sup>Required</sup> <a name="StartDataCollectionByAgentIds" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StartDataCollectionByAgentIds"></a>

```typescript
public readonly StartDataCollectionByAgentIds: string;
```

- *Type:* string

[Write] discovery:StartDataCollectionByAgentIds.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string;
```

- *Type:* string

[Write] discovery:StartExportTask.

---

##### `StartImportTask`<sup>Required</sup> <a name="StartImportTask" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StartImportTask"></a>

```typescript
public readonly StartImportTask: string;
```

- *Type:* string

[Write] discovery:StartImportTask.

---

##### `StopContinuousExport`<sup>Required</sup> <a name="StopContinuousExport" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StopContinuousExport"></a>

```typescript
public readonly StopContinuousExport: string;
```

- *Type:* string

[Write] discovery:StopContinuousExport.

---

##### `StopDataCollectionByAgentIds`<sup>Required</sup> <a name="StopDataCollectionByAgentIds" id="@cdk_utils/iam.discovery.DiscoveryActions.property.StopDataCollectionByAgentIds"></a>

```typescript
public readonly StopDataCollectionByAgentIds: string;
```

- *Type:* string

[Write] discovery:StopDataCollectionByAgentIds.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.discovery.DiscoveryActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] discovery:UpdateApplication.

---

### DiscoveryConditions <a name="DiscoveryConditions" id="@cdk_utils/iam.discovery.DiscoveryConditions"></a>

Condition key constants and builders for discovery.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.discovery.DiscoveryConditions.Initializer"></a>

```typescript
import { discovery } from '@cdk_utils/iam'

new discovery.DiscoveryConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.discovery.DiscoveryConditions.tagKeys"></a>

```typescript
import { discovery } from '@cdk_utils/iam'

discovery.DiscoveryConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.discovery.DiscoveryConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.discovery.DiscoveryConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.discovery.DiscoveryConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

### DiscoveryOperations <a name="DiscoveryOperations" id="@cdk_utils/iam.discovery.DiscoveryOperations"></a>

API operation to required IAM actions mapping for discovery.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.discovery.DiscoveryOperations.Initializer"></a>

```typescript
import { discovery } from '@cdk_utils/iam'

new discovery.DiscoveryOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.AssociateConfigurationItemsToApplication">AssociateConfigurationItemsToApplication</a></code> | <code>string[]</code> | IAM actions required for the AssociateConfigurationItemsToApplication API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.BatchDeleteAgents">BatchDeleteAgents</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteAgents API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.BatchDeleteImportData">BatchDeleteImportData</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteImportData API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DeleteApplications">DeleteApplications</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplications API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeAgents">DescribeAgents</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgents API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeBatchDeleteConfigurationTask">DescribeBatchDeleteConfigurationTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeBatchDeleteConfigurationTask API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeConfigurations">DescribeConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurations API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeContinuousExports">DescribeContinuousExports</a></code> | <code>string[]</code> | IAM actions required for the DescribeContinuousExports API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeExportConfigurations">DescribeExportConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeExportConfigurations API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeExportTasks API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeImportTasks">DescribeImportTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeImportTasks API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.DisassociateConfigurationItemsFromApplication">DisassociateConfigurationItemsFromApplication</a></code> | <code>string[]</code> | IAM actions required for the DisassociateConfigurationItemsFromApplication API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.ExportConfigurations">ExportConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ExportConfigurations API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.ListConfigurations">ListConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurations API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.ListServerNeighbors">ListServerNeighbors</a></code> | <code>string[]</code> | IAM actions required for the ListServerNeighbors API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.opGetDiscoverySummary">opGetDiscoverySummary</a></code> | <code>string[]</code> | IAM actions required for the GetDiscoverySummary API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StartBatchDeleteConfigurationTask">StartBatchDeleteConfigurationTask</a></code> | <code>string[]</code> | IAM actions required for the StartBatchDeleteConfigurationTask API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StartContinuousExport">StartContinuousExport</a></code> | <code>string[]</code> | IAM actions required for the StartContinuousExport API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StartDataCollectionByAgentIds">StartDataCollectionByAgentIds</a></code> | <code>string[]</code> | IAM actions required for the StartDataCollectionByAgentIds API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StartExportTask">StartExportTask</a></code> | <code>string[]</code> | IAM actions required for the StartExportTask API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StartImportTask">StartImportTask</a></code> | <code>string[]</code> | IAM actions required for the StartImportTask API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StopContinuousExport">StopContinuousExport</a></code> | <code>string[]</code> | IAM actions required for the StopContinuousExport API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.StopDataCollectionByAgentIds">StopDataCollectionByAgentIds</a></code> | <code>string[]</code> | IAM actions required for the StopDataCollectionByAgentIds API call. |
| <code><a href="#@cdk_utils/iam.discovery.DiscoveryOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |

---

##### `AssociateConfigurationItemsToApplication`<sup>Required</sup> <a name="AssociateConfigurationItemsToApplication" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.AssociateConfigurationItemsToApplication"></a>

```typescript
public readonly AssociateConfigurationItemsToApplication: string[];
```

- *Type:* string[]

IAM actions required for the AssociateConfigurationItemsToApplication API call.

---

##### `BatchDeleteAgents`<sup>Required</sup> <a name="BatchDeleteAgents" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.BatchDeleteAgents"></a>

```typescript
public readonly BatchDeleteAgents: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteAgents API call.

---

##### `BatchDeleteImportData`<sup>Required</sup> <a name="BatchDeleteImportData" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.BatchDeleteImportData"></a>

```typescript
public readonly BatchDeleteImportData: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteImportData API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `DeleteApplications`<sup>Required</sup> <a name="DeleteApplications" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DeleteApplications"></a>

```typescript
public readonly DeleteApplications: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplications API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DescribeAgents`<sup>Required</sup> <a name="DescribeAgents" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeAgents"></a>

```typescript
public readonly DescribeAgents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgents API call.

---

##### `DescribeBatchDeleteConfigurationTask`<sup>Required</sup> <a name="DescribeBatchDeleteConfigurationTask" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeBatchDeleteConfigurationTask"></a>

```typescript
public readonly DescribeBatchDeleteConfigurationTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBatchDeleteConfigurationTask API call.

---

##### `DescribeConfigurations`<sup>Required</sup> <a name="DescribeConfigurations" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeConfigurations"></a>

```typescript
public readonly DescribeConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurations API call.

---

##### `DescribeContinuousExports`<sup>Required</sup> <a name="DescribeContinuousExports" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeContinuousExports"></a>

```typescript
public readonly DescribeContinuousExports: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContinuousExports API call.

---

##### `DescribeExportConfigurations`<sup>Required</sup> <a name="DescribeExportConfigurations" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeExportConfigurations"></a>

```typescript
public readonly DescribeExportConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExportConfigurations API call.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExportTasks API call.

---

##### `DescribeImportTasks`<sup>Required</sup> <a name="DescribeImportTasks" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeImportTasks"></a>

```typescript
public readonly DescribeImportTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImportTasks API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DisassociateConfigurationItemsFromApplication`<sup>Required</sup> <a name="DisassociateConfigurationItemsFromApplication" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.DisassociateConfigurationItemsFromApplication"></a>

```typescript
public readonly DisassociateConfigurationItemsFromApplication: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateConfigurationItemsFromApplication API call.

---

##### `ExportConfigurations`<sup>Required</sup> <a name="ExportConfigurations" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.ExportConfigurations"></a>

```typescript
public readonly ExportConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ExportConfigurations API call.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurations API call.

---

##### `ListServerNeighbors`<sup>Required</sup> <a name="ListServerNeighbors" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.ListServerNeighbors"></a>

```typescript
public readonly ListServerNeighbors: string[];
```

- *Type:* string[]

IAM actions required for the ListServerNeighbors API call.

---

##### `opGetDiscoverySummary`<sup>Required</sup> <a name="opGetDiscoverySummary" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.opGetDiscoverySummary"></a>

```typescript
public readonly opGetDiscoverySummary: string[];
```

- *Type:* string[]

IAM actions required for the GetDiscoverySummary API call.

---

##### `StartBatchDeleteConfigurationTask`<sup>Required</sup> <a name="StartBatchDeleteConfigurationTask" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StartBatchDeleteConfigurationTask"></a>

```typescript
public readonly StartBatchDeleteConfigurationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartBatchDeleteConfigurationTask API call.

---

##### `StartContinuousExport`<sup>Required</sup> <a name="StartContinuousExport" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StartContinuousExport"></a>

```typescript
public readonly StartContinuousExport: string[];
```

- *Type:* string[]

IAM actions required for the StartContinuousExport API call.

---

##### `StartDataCollectionByAgentIds`<sup>Required</sup> <a name="StartDataCollectionByAgentIds" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StartDataCollectionByAgentIds"></a>

```typescript
public readonly StartDataCollectionByAgentIds: string[];
```

- *Type:* string[]

IAM actions required for the StartDataCollectionByAgentIds API call.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartExportTask API call.

---

##### `StartImportTask`<sup>Required</sup> <a name="StartImportTask" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StartImportTask"></a>

```typescript
public readonly StartImportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartImportTask API call.

---

##### `StopContinuousExport`<sup>Required</sup> <a name="StopContinuousExport" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StopContinuousExport"></a>

```typescript
public readonly StopContinuousExport: string[];
```

- *Type:* string[]

IAM actions required for the StopContinuousExport API call.

---

##### `StopDataCollectionByAgentIds`<sup>Required</sup> <a name="StopDataCollectionByAgentIds" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.StopDataCollectionByAgentIds"></a>

```typescript
public readonly StopDataCollectionByAgentIds: string[];
```

- *Type:* string[]

IAM actions required for the StopDataCollectionByAgentIds API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.discovery.DiscoveryOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---


