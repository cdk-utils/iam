# `snowball` Submodule <a name="`snowball` Submodule" id="@cdk_utils/iam.snowball"></a>



## Classes <a name="Classes" id="Classes"></a>

### SnowballActions <a name="SnowballActions" id="@cdk_utils/iam.snowball.SnowballActions"></a>

IAM action constants for the snowball service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snowball.SnowballActions.Initializer"></a>

```typescript
import { snowball } from '@cdk_utils/iam'

new snowball.SnowballActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.actionGetJobManifest">actionGetJobManifest</a></code> | <code>string</code> | [Read] snowball:GetJobManifest. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.actionGetJobUnlockCode">actionGetJobUnlockCode</a></code> | <code>string</code> | [Read] snowball:GetJobUnlockCode. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.actionGetSnowballUsage">actionGetSnowballUsage</a></code> | <code>string</code> | [Read] snowball:GetSnowballUsage. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.actionGetSoftwareUpdates">actionGetSoftwareUpdates</a></code> | <code>string</code> | [Read] snowball:GetSoftwareUpdates. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CancelCluster">CancelCluster</a></code> | <code>string</code> | [Write] snowball:CancelCluster. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] snowball:CancelJob. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CreateAddress">CreateAddress</a></code> | <code>string</code> | [Write] snowball:CreateAddress. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] snowball:CreateCluster. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] snowball:CreateJob. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CreateLongTermPricing">CreateLongTermPricing</a></code> | <code>string</code> | [Write] snowball:CreateLongTermPricing. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.CreateReturnShippingLabel">CreateReturnShippingLabel</a></code> | <code>string</code> | [Write] snowball:CreateReturnShippingLabel. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.DescribeAddress">DescribeAddress</a></code> | <code>string</code> | [Read] snowball:DescribeAddress. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.DescribeAddresses">DescribeAddresses</a></code> | <code>string</code> | [List] snowball:DescribeAddresses. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] snowball:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.DescribeJob">DescribeJob</a></code> | <code>string</code> | [Read] snowball:DescribeJob. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.DescribeReturnShippingLabel">DescribeReturnShippingLabel</a></code> | <code>string</code> | [Read] snowball:DescribeReturnShippingLabel. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListClusterJobs">ListClusterJobs</a></code> | <code>string</code> | [List] snowball:ListClusterJobs. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] snowball:ListClusters. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListCompatibleImages">ListCompatibleImages</a></code> | <code>string</code> | [List] snowball:ListCompatibleImages. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] snowball:ListJobs. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListLongTermPricing">ListLongTermPricing</a></code> | <code>string</code> | [Read] snowball:ListLongTermPricing. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListPickupLocations">ListPickupLocations</a></code> | <code>string</code> | [List] snowball:ListPickupLocations. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.ListServiceVersions">ListServiceVersions</a></code> | <code>string</code> | [List] snowball:ListServiceVersions. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] snowball:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.UpdateJob">UpdateJob</a></code> | <code>string</code> | [Write] snowball:UpdateJob. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.UpdateJobShipmentState">UpdateJobShipmentState</a></code> | <code>string</code> | [Write] snowball:UpdateJobShipmentState. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballActions.property.UpdateLongTermPricing">UpdateLongTermPricing</a></code> | <code>string</code> | [Write] snowball:UpdateLongTermPricing. |

---

##### `actionGetJobManifest`<sup>Required</sup> <a name="actionGetJobManifest" id="@cdk_utils/iam.snowball.SnowballActions.property.actionGetJobManifest"></a>

```typescript
public readonly actionGetJobManifest: string;
```

- *Type:* string

[Read] snowball:GetJobManifest.

---

##### `actionGetJobUnlockCode`<sup>Required</sup> <a name="actionGetJobUnlockCode" id="@cdk_utils/iam.snowball.SnowballActions.property.actionGetJobUnlockCode"></a>

```typescript
public readonly actionGetJobUnlockCode: string;
```

- *Type:* string

[Read] snowball:GetJobUnlockCode.

---

##### `actionGetSnowballUsage`<sup>Required</sup> <a name="actionGetSnowballUsage" id="@cdk_utils/iam.snowball.SnowballActions.property.actionGetSnowballUsage"></a>

```typescript
public readonly actionGetSnowballUsage: string;
```

- *Type:* string

[Read] snowball:GetSnowballUsage.

---

##### `actionGetSoftwareUpdates`<sup>Required</sup> <a name="actionGetSoftwareUpdates" id="@cdk_utils/iam.snowball.SnowballActions.property.actionGetSoftwareUpdates"></a>

```typescript
public readonly actionGetSoftwareUpdates: string;
```

- *Type:* string

[Read] snowball:GetSoftwareUpdates.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.snowball.SnowballActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.snowball.SnowballActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.snowball.SnowballActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.snowball.SnowballActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.snowball.SnowballActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelCluster`<sup>Required</sup> <a name="CancelCluster" id="@cdk_utils/iam.snowball.SnowballActions.property.CancelCluster"></a>

```typescript
public readonly CancelCluster: string;
```

- *Type:* string

[Write] snowball:CancelCluster.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.snowball.SnowballActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] snowball:CancelJob.

---

##### `CreateAddress`<sup>Required</sup> <a name="CreateAddress" id="@cdk_utils/iam.snowball.SnowballActions.property.CreateAddress"></a>

```typescript
public readonly CreateAddress: string;
```

- *Type:* string

[Write] snowball:CreateAddress.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.snowball.SnowballActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] snowball:CreateCluster.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.snowball.SnowballActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] snowball:CreateJob.

---

##### `CreateLongTermPricing`<sup>Required</sup> <a name="CreateLongTermPricing" id="@cdk_utils/iam.snowball.SnowballActions.property.CreateLongTermPricing"></a>

```typescript
public readonly CreateLongTermPricing: string;
```

- *Type:* string

[Write] snowball:CreateLongTermPricing.

---

##### `CreateReturnShippingLabel`<sup>Required</sup> <a name="CreateReturnShippingLabel" id="@cdk_utils/iam.snowball.SnowballActions.property.CreateReturnShippingLabel"></a>

```typescript
public readonly CreateReturnShippingLabel: string;
```

- *Type:* string

[Write] snowball:CreateReturnShippingLabel.

---

##### `DescribeAddress`<sup>Required</sup> <a name="DescribeAddress" id="@cdk_utils/iam.snowball.SnowballActions.property.DescribeAddress"></a>

```typescript
public readonly DescribeAddress: string;
```

- *Type:* string

[Read] snowball:DescribeAddress.

---

##### `DescribeAddresses`<sup>Required</sup> <a name="DescribeAddresses" id="@cdk_utils/iam.snowball.SnowballActions.property.DescribeAddresses"></a>

```typescript
public readonly DescribeAddresses: string;
```

- *Type:* string

[List] snowball:DescribeAddresses.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.snowball.SnowballActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] snowball:DescribeCluster.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.snowball.SnowballActions.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string;
```

- *Type:* string

[Read] snowball:DescribeJob.

---

##### `DescribeReturnShippingLabel`<sup>Required</sup> <a name="DescribeReturnShippingLabel" id="@cdk_utils/iam.snowball.SnowballActions.property.DescribeReturnShippingLabel"></a>

```typescript
public readonly DescribeReturnShippingLabel: string;
```

- *Type:* string

[Read] snowball:DescribeReturnShippingLabel.

---

##### `ListClusterJobs`<sup>Required</sup> <a name="ListClusterJobs" id="@cdk_utils/iam.snowball.SnowballActions.property.ListClusterJobs"></a>

```typescript
public readonly ListClusterJobs: string;
```

- *Type:* string

[List] snowball:ListClusterJobs.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.snowball.SnowballActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] snowball:ListClusters.

---

##### `ListCompatibleImages`<sup>Required</sup> <a name="ListCompatibleImages" id="@cdk_utils/iam.snowball.SnowballActions.property.ListCompatibleImages"></a>

```typescript
public readonly ListCompatibleImages: string;
```

- *Type:* string

[List] snowball:ListCompatibleImages.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.snowball.SnowballActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] snowball:ListJobs.

---

##### `ListLongTermPricing`<sup>Required</sup> <a name="ListLongTermPricing" id="@cdk_utils/iam.snowball.SnowballActions.property.ListLongTermPricing"></a>

```typescript
public readonly ListLongTermPricing: string;
```

- *Type:* string

[Read] snowball:ListLongTermPricing.

---

##### `ListPickupLocations`<sup>Required</sup> <a name="ListPickupLocations" id="@cdk_utils/iam.snowball.SnowballActions.property.ListPickupLocations"></a>

```typescript
public readonly ListPickupLocations: string;
```

- *Type:* string

[List] snowball:ListPickupLocations.

---

##### `ListServiceVersions`<sup>Required</sup> <a name="ListServiceVersions" id="@cdk_utils/iam.snowball.SnowballActions.property.ListServiceVersions"></a>

```typescript
public readonly ListServiceVersions: string;
```

- *Type:* string

[List] snowball:ListServiceVersions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.snowball.SnowballActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.snowball.SnowballActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] snowball:UpdateCluster.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.snowball.SnowballActions.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string;
```

- *Type:* string

[Write] snowball:UpdateJob.

---

##### `UpdateJobShipmentState`<sup>Required</sup> <a name="UpdateJobShipmentState" id="@cdk_utils/iam.snowball.SnowballActions.property.UpdateJobShipmentState"></a>

```typescript
public readonly UpdateJobShipmentState: string;
```

- *Type:* string

[Write] snowball:UpdateJobShipmentState.

---

##### `UpdateLongTermPricing`<sup>Required</sup> <a name="UpdateLongTermPricing" id="@cdk_utils/iam.snowball.SnowballActions.property.UpdateLongTermPricing"></a>

```typescript
public readonly UpdateLongTermPricing: string;
```

- *Type:* string

[Write] snowball:UpdateLongTermPricing.

---

### SnowballOperations <a name="SnowballOperations" id="@cdk_utils/iam.snowball.SnowballOperations"></a>

API operation to required IAM actions mapping for snowball.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.snowball.SnowballOperations.Initializer"></a>

```typescript
import { snowball } from '@cdk_utils/iam'

new snowball.SnowballOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CancelCluster">CancelCluster</a></code> | <code>string[]</code> | IAM actions required for the CancelCluster API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CreateAddress">CreateAddress</a></code> | <code>string[]</code> | IAM actions required for the CreateAddress API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CreateLongTermPricing">CreateLongTermPricing</a></code> | <code>string[]</code> | IAM actions required for the CreateLongTermPricing API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.CreateReturnShippingLabel">CreateReturnShippingLabel</a></code> | <code>string[]</code> | IAM actions required for the CreateReturnShippingLabel API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.DescribeAddress">DescribeAddress</a></code> | <code>string[]</code> | IAM actions required for the DescribeAddress API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.DescribeAddresses">DescribeAddresses</a></code> | <code>string[]</code> | IAM actions required for the DescribeAddresses API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.DescribeJob">DescribeJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeJob API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.DescribeReturnShippingLabel">DescribeReturnShippingLabel</a></code> | <code>string[]</code> | IAM actions required for the DescribeReturnShippingLabel API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListClusterJobs">ListClusterJobs</a></code> | <code>string[]</code> | IAM actions required for the ListClusterJobs API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListCompatibleImages">ListCompatibleImages</a></code> | <code>string[]</code> | IAM actions required for the ListCompatibleImages API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListLongTermPricing">ListLongTermPricing</a></code> | <code>string[]</code> | IAM actions required for the ListLongTermPricing API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListPickupLocations">ListPickupLocations</a></code> | <code>string[]</code> | IAM actions required for the ListPickupLocations API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.ListServiceVersions">ListServiceVersions</a></code> | <code>string[]</code> | IAM actions required for the ListServiceVersions API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.opGetJobManifest">opGetJobManifest</a></code> | <code>string[]</code> | IAM actions required for the GetJobManifest API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.opGetJobUnlockCode">opGetJobUnlockCode</a></code> | <code>string[]</code> | IAM actions required for the GetJobUnlockCode API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.opGetSnowballUsage">opGetSnowballUsage</a></code> | <code>string[]</code> | IAM actions required for the GetSnowballUsage API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.opGetSoftwareUpdates">opGetSoftwareUpdates</a></code> | <code>string[]</code> | IAM actions required for the GetSoftwareUpdates API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.UpdateJob">UpdateJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateJob API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.UpdateJobShipmentState">UpdateJobShipmentState</a></code> | <code>string[]</code> | IAM actions required for the UpdateJobShipmentState API call. |
| <code><a href="#@cdk_utils/iam.snowball.SnowballOperations.property.UpdateLongTermPricing">UpdateLongTermPricing</a></code> | <code>string[]</code> | IAM actions required for the UpdateLongTermPricing API call. |

---

##### `CancelCluster`<sup>Required</sup> <a name="CancelCluster" id="@cdk_utils/iam.snowball.SnowballOperations.property.CancelCluster"></a>

```typescript
public readonly CancelCluster: string[];
```

- *Type:* string[]

IAM actions required for the CancelCluster API call.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.snowball.SnowballOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateAddress`<sup>Required</sup> <a name="CreateAddress" id="@cdk_utils/iam.snowball.SnowballOperations.property.CreateAddress"></a>

```typescript
public readonly CreateAddress: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddress API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.snowball.SnowballOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.snowball.SnowballOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateLongTermPricing`<sup>Required</sup> <a name="CreateLongTermPricing" id="@cdk_utils/iam.snowball.SnowballOperations.property.CreateLongTermPricing"></a>

```typescript
public readonly CreateLongTermPricing: string[];
```

- *Type:* string[]

IAM actions required for the CreateLongTermPricing API call.

---

##### `CreateReturnShippingLabel`<sup>Required</sup> <a name="CreateReturnShippingLabel" id="@cdk_utils/iam.snowball.SnowballOperations.property.CreateReturnShippingLabel"></a>

```typescript
public readonly CreateReturnShippingLabel: string[];
```

- *Type:* string[]

IAM actions required for the CreateReturnShippingLabel API call.

---

##### `DescribeAddress`<sup>Required</sup> <a name="DescribeAddress" id="@cdk_utils/iam.snowball.SnowballOperations.property.DescribeAddress"></a>

```typescript
public readonly DescribeAddress: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAddress API call.

---

##### `DescribeAddresses`<sup>Required</sup> <a name="DescribeAddresses" id="@cdk_utils/iam.snowball.SnowballOperations.property.DescribeAddresses"></a>

```typescript
public readonly DescribeAddresses: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAddresses API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.snowball.SnowballOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeJob`<sup>Required</sup> <a name="DescribeJob" id="@cdk_utils/iam.snowball.SnowballOperations.property.DescribeJob"></a>

```typescript
public readonly DescribeJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJob API call.

---

##### `DescribeReturnShippingLabel`<sup>Required</sup> <a name="DescribeReturnShippingLabel" id="@cdk_utils/iam.snowball.SnowballOperations.property.DescribeReturnShippingLabel"></a>

```typescript
public readonly DescribeReturnShippingLabel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReturnShippingLabel API call.

---

##### `ListClusterJobs`<sup>Required</sup> <a name="ListClusterJobs" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListClusterJobs"></a>

```typescript
public readonly ListClusterJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListClusterJobs API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListCompatibleImages`<sup>Required</sup> <a name="ListCompatibleImages" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListCompatibleImages"></a>

```typescript
public readonly ListCompatibleImages: string[];
```

- *Type:* string[]

IAM actions required for the ListCompatibleImages API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListLongTermPricing`<sup>Required</sup> <a name="ListLongTermPricing" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListLongTermPricing"></a>

```typescript
public readonly ListLongTermPricing: string[];
```

- *Type:* string[]

IAM actions required for the ListLongTermPricing API call.

---

##### `ListPickupLocations`<sup>Required</sup> <a name="ListPickupLocations" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListPickupLocations"></a>

```typescript
public readonly ListPickupLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListPickupLocations API call.

---

##### `ListServiceVersions`<sup>Required</sup> <a name="ListServiceVersions" id="@cdk_utils/iam.snowball.SnowballOperations.property.ListServiceVersions"></a>

```typescript
public readonly ListServiceVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceVersions API call.

---

##### `opGetJobManifest`<sup>Required</sup> <a name="opGetJobManifest" id="@cdk_utils/iam.snowball.SnowballOperations.property.opGetJobManifest"></a>

```typescript
public readonly opGetJobManifest: string[];
```

- *Type:* string[]

IAM actions required for the GetJobManifest API call.

---

##### `opGetJobUnlockCode`<sup>Required</sup> <a name="opGetJobUnlockCode" id="@cdk_utils/iam.snowball.SnowballOperations.property.opGetJobUnlockCode"></a>

```typescript
public readonly opGetJobUnlockCode: string[];
```

- *Type:* string[]

IAM actions required for the GetJobUnlockCode API call.

---

##### `opGetSnowballUsage`<sup>Required</sup> <a name="opGetSnowballUsage" id="@cdk_utils/iam.snowball.SnowballOperations.property.opGetSnowballUsage"></a>

```typescript
public readonly opGetSnowballUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetSnowballUsage API call.

---

##### `opGetSoftwareUpdates`<sup>Required</sup> <a name="opGetSoftwareUpdates" id="@cdk_utils/iam.snowball.SnowballOperations.property.opGetSoftwareUpdates"></a>

```typescript
public readonly opGetSoftwareUpdates: string[];
```

- *Type:* string[]

IAM actions required for the GetSoftwareUpdates API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.snowball.SnowballOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.snowball.SnowballOperations.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJob API call.

---

##### `UpdateJobShipmentState`<sup>Required</sup> <a name="UpdateJobShipmentState" id="@cdk_utils/iam.snowball.SnowballOperations.property.UpdateJobShipmentState"></a>

```typescript
public readonly UpdateJobShipmentState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJobShipmentState API call.

---

##### `UpdateLongTermPricing`<sup>Required</sup> <a name="UpdateLongTermPricing" id="@cdk_utils/iam.snowball.SnowballOperations.property.UpdateLongTermPricing"></a>

```typescript
public readonly UpdateLongTermPricing: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLongTermPricing API call.

---


