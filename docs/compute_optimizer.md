# `compute_optimizer` Submodule <a name="`compute_optimizer` Submodule" id="@cdk_utils/iam.compute_optimizer"></a>



## Classes <a name="Classes" id="Classes"></a>

### ComputeOptimizerActions <a name="ComputeOptimizerActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions"></a>

IAM action constants for the compute-optimizer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.Initializer"></a>

```typescript
import { compute_optimizer } from '@cdk_utils/iam'

new compute_optimizer.ComputeOptimizerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetAutoScalingGroupRecommendations">actionGetAutoScalingGroupRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetAutoScalingGroupRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEBSVolumeRecommendations">actionGetEBSVolumeRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetEBSVolumeRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEC2InstanceRecommendations">actionGetEC2InstanceRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetEC2InstanceRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEC2RecommendationProjectedMetrics">actionGetEC2RecommendationProjectedMetrics</a></code> | <code>string</code> | [List] compute-optimizer:GetEC2RecommendationProjectedMetrics. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetECSServiceRecommendationProjectedMetrics">actionGetECSServiceRecommendationProjectedMetrics</a></code> | <code>string</code> | [List] compute-optimizer:GetECSServiceRecommendationProjectedMetrics. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetECSServiceRecommendations">actionGetECSServiceRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetECSServiceRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEffectiveRecommendationPreferences">actionGetEffectiveRecommendationPreferences</a></code> | <code>string</code> | [Read] compute-optimizer:GetEffectiveRecommendationPreferences. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEnrollmentStatus">actionGetEnrollmentStatus</a></code> | <code>string</code> | [List] compute-optimizer:GetEnrollmentStatus. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEnrollmentStatusesForOrganization">actionGetEnrollmentStatusesForOrganization</a></code> | <code>string</code> | [List] compute-optimizer:GetEnrollmentStatusesForOrganization. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetIdleRecommendations">actionGetIdleRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetIdleRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetLambdaFunctionRecommendations">actionGetLambdaFunctionRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetLambdaFunctionRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetLicenseRecommendations">actionGetLicenseRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetLicenseRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRDSDatabaseRecommendationProjectedMetrics">actionGetRDSDatabaseRecommendationProjectedMetrics</a></code> | <code>string</code> | [List] compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRDSDatabaseRecommendations">actionGetRDSDatabaseRecommendations</a></code> | <code>string</code> | [List] compute-optimizer:GetRDSDatabaseRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRecommendationPreferences">actionGetRecommendationPreferences</a></code> | <code>string</code> | [Read] compute-optimizer:GetRecommendationPreferences. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRecommendationSummaries">actionGetRecommendationSummaries</a></code> | <code>string</code> | [List] compute-optimizer:GetRecommendationSummaries. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.DeleteRecommendationPreferences">DeleteRecommendationPreferences</a></code> | <code>string</code> | [Write] compute-optimizer:DeleteRecommendationPreferences. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.DescribeRecommendationExportJobs">DescribeRecommendationExportJobs</a></code> | <code>string</code> | [List] compute-optimizer:DescribeRecommendationExportJobs. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportAutoScalingGroupRecommendations">ExportAutoScalingGroupRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportAutoScalingGroupRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportEBSVolumeRecommendations">ExportEBSVolumeRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportEBSVolumeRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportEC2InstanceRecommendations">ExportEC2InstanceRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportEC2InstanceRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportECSServiceRecommendations">ExportECSServiceRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportECSServiceRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportIdleRecommendations">ExportIdleRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportIdleRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportLambdaFunctionRecommendations">ExportLambdaFunctionRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportLambdaFunctionRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportLicenseRecommendations">ExportLicenseRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportLicenseRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportRDSDatabaseRecommendations">ExportRDSDatabaseRecommendations</a></code> | <code>string</code> | [Write] compute-optimizer:ExportRDSDatabaseRecommendations. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.PutRecommendationPreferences">PutRecommendationPreferences</a></code> | <code>string</code> | [Write] compute-optimizer:PutRecommendationPreferences. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.UpdateEnrollmentStatus">UpdateEnrollmentStatus</a></code> | <code>string</code> | [Write] compute-optimizer:UpdateEnrollmentStatus. |

---

##### `actionGetAutoScalingGroupRecommendations`<sup>Required</sup> <a name="actionGetAutoScalingGroupRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetAutoScalingGroupRecommendations"></a>

```typescript
public readonly actionGetAutoScalingGroupRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetAutoScalingGroupRecommendations.

---

##### `actionGetEBSVolumeRecommendations`<sup>Required</sup> <a name="actionGetEBSVolumeRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEBSVolumeRecommendations"></a>

```typescript
public readonly actionGetEBSVolumeRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetEBSVolumeRecommendations.

---

##### `actionGetEC2InstanceRecommendations`<sup>Required</sup> <a name="actionGetEC2InstanceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEC2InstanceRecommendations"></a>

```typescript
public readonly actionGetEC2InstanceRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetEC2InstanceRecommendations.

---

##### `actionGetEC2RecommendationProjectedMetrics`<sup>Required</sup> <a name="actionGetEC2RecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEC2RecommendationProjectedMetrics"></a>

```typescript
public readonly actionGetEC2RecommendationProjectedMetrics: string;
```

- *Type:* string

[List] compute-optimizer:GetEC2RecommendationProjectedMetrics.

---

##### `actionGetECSServiceRecommendationProjectedMetrics`<sup>Required</sup> <a name="actionGetECSServiceRecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetECSServiceRecommendationProjectedMetrics"></a>

```typescript
public readonly actionGetECSServiceRecommendationProjectedMetrics: string;
```

- *Type:* string

[List] compute-optimizer:GetECSServiceRecommendationProjectedMetrics.

---

##### `actionGetECSServiceRecommendations`<sup>Required</sup> <a name="actionGetECSServiceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetECSServiceRecommendations"></a>

```typescript
public readonly actionGetECSServiceRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetECSServiceRecommendations.

---

##### `actionGetEffectiveRecommendationPreferences`<sup>Required</sup> <a name="actionGetEffectiveRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEffectiveRecommendationPreferences"></a>

```typescript
public readonly actionGetEffectiveRecommendationPreferences: string;
```

- *Type:* string

[Read] compute-optimizer:GetEffectiveRecommendationPreferences.

---

##### `actionGetEnrollmentStatus`<sup>Required</sup> <a name="actionGetEnrollmentStatus" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEnrollmentStatus"></a>

```typescript
public readonly actionGetEnrollmentStatus: string;
```

- *Type:* string

[List] compute-optimizer:GetEnrollmentStatus.

---

##### `actionGetEnrollmentStatusesForOrganization`<sup>Required</sup> <a name="actionGetEnrollmentStatusesForOrganization" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetEnrollmentStatusesForOrganization"></a>

```typescript
public readonly actionGetEnrollmentStatusesForOrganization: string;
```

- *Type:* string

[List] compute-optimizer:GetEnrollmentStatusesForOrganization.

---

##### `actionGetIdleRecommendations`<sup>Required</sup> <a name="actionGetIdleRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetIdleRecommendations"></a>

```typescript
public readonly actionGetIdleRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetIdleRecommendations.

---

##### `actionGetLambdaFunctionRecommendations`<sup>Required</sup> <a name="actionGetLambdaFunctionRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetLambdaFunctionRecommendations"></a>

```typescript
public readonly actionGetLambdaFunctionRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetLambdaFunctionRecommendations.

---

##### `actionGetLicenseRecommendations`<sup>Required</sup> <a name="actionGetLicenseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetLicenseRecommendations"></a>

```typescript
public readonly actionGetLicenseRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetLicenseRecommendations.

---

##### `actionGetRDSDatabaseRecommendationProjectedMetrics`<sup>Required</sup> <a name="actionGetRDSDatabaseRecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRDSDatabaseRecommendationProjectedMetrics"></a>

```typescript
public readonly actionGetRDSDatabaseRecommendationProjectedMetrics: string;
```

- *Type:* string

[List] compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics.

---

##### `actionGetRDSDatabaseRecommendations`<sup>Required</sup> <a name="actionGetRDSDatabaseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRDSDatabaseRecommendations"></a>

```typescript
public readonly actionGetRDSDatabaseRecommendations: string;
```

- *Type:* string

[List] compute-optimizer:GetRDSDatabaseRecommendations.

---

##### `actionGetRecommendationPreferences`<sup>Required</sup> <a name="actionGetRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRecommendationPreferences"></a>

```typescript
public readonly actionGetRecommendationPreferences: string;
```

- *Type:* string

[Read] compute-optimizer:GetRecommendationPreferences.

---

##### `actionGetRecommendationSummaries`<sup>Required</sup> <a name="actionGetRecommendationSummaries" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.actionGetRecommendationSummaries"></a>

```typescript
public readonly actionGetRecommendationSummaries: string;
```

- *Type:* string

[List] compute-optimizer:GetRecommendationSummaries.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteRecommendationPreferences`<sup>Required</sup> <a name="DeleteRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.DeleteRecommendationPreferences"></a>

```typescript
public readonly DeleteRecommendationPreferences: string;
```

- *Type:* string

[Write] compute-optimizer:DeleteRecommendationPreferences.

---

##### `DescribeRecommendationExportJobs`<sup>Required</sup> <a name="DescribeRecommendationExportJobs" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.DescribeRecommendationExportJobs"></a>

```typescript
public readonly DescribeRecommendationExportJobs: string;
```

- *Type:* string

[List] compute-optimizer:DescribeRecommendationExportJobs.

---

##### `ExportAutoScalingGroupRecommendations`<sup>Required</sup> <a name="ExportAutoScalingGroupRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportAutoScalingGroupRecommendations"></a>

```typescript
public readonly ExportAutoScalingGroupRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportAutoScalingGroupRecommendations.

---

##### `ExportEBSVolumeRecommendations`<sup>Required</sup> <a name="ExportEBSVolumeRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportEBSVolumeRecommendations"></a>

```typescript
public readonly ExportEBSVolumeRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportEBSVolumeRecommendations.

---

##### `ExportEC2InstanceRecommendations`<sup>Required</sup> <a name="ExportEC2InstanceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportEC2InstanceRecommendations"></a>

```typescript
public readonly ExportEC2InstanceRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportEC2InstanceRecommendations.

---

##### `ExportECSServiceRecommendations`<sup>Required</sup> <a name="ExportECSServiceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportECSServiceRecommendations"></a>

```typescript
public readonly ExportECSServiceRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportECSServiceRecommendations.

---

##### `ExportIdleRecommendations`<sup>Required</sup> <a name="ExportIdleRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportIdleRecommendations"></a>

```typescript
public readonly ExportIdleRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportIdleRecommendations.

---

##### `ExportLambdaFunctionRecommendations`<sup>Required</sup> <a name="ExportLambdaFunctionRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportLambdaFunctionRecommendations"></a>

```typescript
public readonly ExportLambdaFunctionRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportLambdaFunctionRecommendations.

---

##### `ExportLicenseRecommendations`<sup>Required</sup> <a name="ExportLicenseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportLicenseRecommendations"></a>

```typescript
public readonly ExportLicenseRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportLicenseRecommendations.

---

##### `ExportRDSDatabaseRecommendations`<sup>Required</sup> <a name="ExportRDSDatabaseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.ExportRDSDatabaseRecommendations"></a>

```typescript
public readonly ExportRDSDatabaseRecommendations: string;
```

- *Type:* string

[Write] compute-optimizer:ExportRDSDatabaseRecommendations.

---

##### `PutRecommendationPreferences`<sup>Required</sup> <a name="PutRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.PutRecommendationPreferences"></a>

```typescript
public readonly PutRecommendationPreferences: string;
```

- *Type:* string

[Write] compute-optimizer:PutRecommendationPreferences.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateEnrollmentStatus`<sup>Required</sup> <a name="UpdateEnrollmentStatus" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerActions.property.UpdateEnrollmentStatus"></a>

```typescript
public readonly UpdateEnrollmentStatus: string;
```

- *Type:* string

[Write] compute-optimizer:UpdateEnrollmentStatus.

---

### ComputeOptimizerConditions <a name="ComputeOptimizerConditions" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions"></a>

Condition key constants and builders for compute-optimizer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.Initializer"></a>

```typescript
import { compute_optimizer } from '@cdk_utils/iam'

new compute_optimizer.ComputeOptimizerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.resourceType">resourceType</a></code> | Generates a condition block for `compute-optimizer:ResourceType`. |

---

##### `resourceType` <a name="resourceType" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.resourceType"></a>

```typescript
import { compute_optimizer } from '@cdk_utils/iam'

compute_optimizer.ComputeOptimizerConditions.resourceType(value: string)
```

Generates a condition block for `compute-optimizer:ResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.resourceType.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.actionGetEffectiveRecommendationPreferencesConditionKeys">actionGetEffectiveRecommendationPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEffectiveRecommendationPreferences action. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.actionGetRecommendationPreferencesConditionKeys">actionGetRecommendationPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRecommendationPreferences action. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.DeleteRecommendationPreferencesConditionKeys">DeleteRecommendationPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRecommendationPreferences action. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.PutRecommendationPreferencesConditionKeys">PutRecommendationPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutRecommendationPreferences action. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.RESOURCE_TYPE">RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: compute-optimizer:ResourceType (String). |

---

##### `actionGetEffectiveRecommendationPreferencesConditionKeys`<sup>Required</sup> <a name="actionGetEffectiveRecommendationPreferencesConditionKeys" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.actionGetEffectiveRecommendationPreferencesConditionKeys"></a>

```typescript
public readonly actionGetEffectiveRecommendationPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEffectiveRecommendationPreferences action.

---

##### `actionGetRecommendationPreferencesConditionKeys`<sup>Required</sup> <a name="actionGetRecommendationPreferencesConditionKeys" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.actionGetRecommendationPreferencesConditionKeys"></a>

```typescript
public readonly actionGetRecommendationPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRecommendationPreferences action.

---

##### `DeleteRecommendationPreferencesConditionKeys`<sup>Required</sup> <a name="DeleteRecommendationPreferencesConditionKeys" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.DeleteRecommendationPreferencesConditionKeys"></a>

```typescript
public readonly DeleteRecommendationPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRecommendationPreferences action.

---

##### `PutRecommendationPreferencesConditionKeys`<sup>Required</sup> <a name="PutRecommendationPreferencesConditionKeys" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.PutRecommendationPreferencesConditionKeys"></a>

```typescript
public readonly PutRecommendationPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutRecommendationPreferences action.

---

##### `RESOURCE_TYPE`<sup>Required</sup> <a name="RESOURCE_TYPE" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerConditions.property.RESOURCE_TYPE"></a>

```typescript
public readonly RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: compute-optimizer:ResourceType (String).

---

### ComputeOptimizerOperations <a name="ComputeOptimizerOperations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations"></a>

API operation to required IAM actions mapping for compute-optimizer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.Initializer"></a>

```typescript
import { compute_optimizer } from '@cdk_utils/iam'

new compute_optimizer.ComputeOptimizerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.DeleteRecommendationPreferences">DeleteRecommendationPreferences</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommendationPreferences API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.DescribeRecommendationExportJobs">DescribeRecommendationExportJobs</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecommendationExportJobs API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportAutoScalingGroupRecommendations">ExportAutoScalingGroupRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportAutoScalingGroupRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportEBSVolumeRecommendations">ExportEBSVolumeRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportEBSVolumeRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportEC2InstanceRecommendations">ExportEC2InstanceRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportEC2InstanceRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportECSServiceRecommendations">ExportECSServiceRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportECSServiceRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportIdleRecommendations">ExportIdleRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportIdleRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportLambdaFunctionRecommendations">ExportLambdaFunctionRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportLambdaFunctionRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportLicenseRecommendations">ExportLicenseRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportLicenseRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportRDSDatabaseRecommendations">ExportRDSDatabaseRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ExportRDSDatabaseRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetAutoScalingGroupRecommendations">opGetAutoScalingGroupRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetAutoScalingGroupRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEBSVolumeRecommendations">opGetEBSVolumeRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetEBSVolumeRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEC2InstanceRecommendations">opGetEC2InstanceRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetEC2InstanceRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEC2RecommendationProjectedMetrics">opGetEC2RecommendationProjectedMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetEC2RecommendationProjectedMetrics API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetECSServiceRecommendationProjectedMetrics">opGetECSServiceRecommendationProjectedMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetECSServiceRecommendationProjectedMetrics API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetECSServiceRecommendations">opGetECSServiceRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetECSServiceRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEffectiveRecommendationPreferences">opGetEffectiveRecommendationPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetEffectiveRecommendationPreferences API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEnrollmentStatus">opGetEnrollmentStatus</a></code> | <code>string[]</code> | IAM actions required for the GetEnrollmentStatus API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEnrollmentStatusesForOrganization">opGetEnrollmentStatusesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the GetEnrollmentStatusesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetIdleRecommendations">opGetIdleRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetIdleRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetLambdaFunctionRecommendations">opGetLambdaFunctionRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetLambdaFunctionRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetLicenseRecommendations">opGetLicenseRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRDSDatabaseRecommendationProjectedMetrics">opGetRDSDatabaseRecommendationProjectedMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetRDSDatabaseRecommendationProjectedMetrics API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRDSDatabaseRecommendations">opGetRDSDatabaseRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetRDSDatabaseRecommendations API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRecommendationPreferences">opGetRecommendationPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendationPreferences API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRecommendationSummaries">opGetRecommendationSummaries</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendationSummaries API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.PutRecommendationPreferences">PutRecommendationPreferences</a></code> | <code>string[]</code> | IAM actions required for the PutRecommendationPreferences API call. |
| <code><a href="#@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.UpdateEnrollmentStatus">UpdateEnrollmentStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnrollmentStatus API call. |

---

##### `DeleteRecommendationPreferences`<sup>Required</sup> <a name="DeleteRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.DeleteRecommendationPreferences"></a>

```typescript
public readonly DeleteRecommendationPreferences: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommendationPreferences API call.

---

##### `DescribeRecommendationExportJobs`<sup>Required</sup> <a name="DescribeRecommendationExportJobs" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.DescribeRecommendationExportJobs"></a>

```typescript
public readonly DescribeRecommendationExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecommendationExportJobs API call.

---

##### `ExportAutoScalingGroupRecommendations`<sup>Required</sup> <a name="ExportAutoScalingGroupRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportAutoScalingGroupRecommendations"></a>

```typescript
public readonly ExportAutoScalingGroupRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportAutoScalingGroupRecommendations API call.

---

##### `ExportEBSVolumeRecommendations`<sup>Required</sup> <a name="ExportEBSVolumeRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportEBSVolumeRecommendations"></a>

```typescript
public readonly ExportEBSVolumeRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportEBSVolumeRecommendations API call.

---

##### `ExportEC2InstanceRecommendations`<sup>Required</sup> <a name="ExportEC2InstanceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportEC2InstanceRecommendations"></a>

```typescript
public readonly ExportEC2InstanceRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportEC2InstanceRecommendations API call.

---

##### `ExportECSServiceRecommendations`<sup>Required</sup> <a name="ExportECSServiceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportECSServiceRecommendations"></a>

```typescript
public readonly ExportECSServiceRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportECSServiceRecommendations API call.

---

##### `ExportIdleRecommendations`<sup>Required</sup> <a name="ExportIdleRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportIdleRecommendations"></a>

```typescript
public readonly ExportIdleRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportIdleRecommendations API call.

---

##### `ExportLambdaFunctionRecommendations`<sup>Required</sup> <a name="ExportLambdaFunctionRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportLambdaFunctionRecommendations"></a>

```typescript
public readonly ExportLambdaFunctionRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportLambdaFunctionRecommendations API call.

---

##### `ExportLicenseRecommendations`<sup>Required</sup> <a name="ExportLicenseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportLicenseRecommendations"></a>

```typescript
public readonly ExportLicenseRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportLicenseRecommendations API call.

---

##### `ExportRDSDatabaseRecommendations`<sup>Required</sup> <a name="ExportRDSDatabaseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.ExportRDSDatabaseRecommendations"></a>

```typescript
public readonly ExportRDSDatabaseRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ExportRDSDatabaseRecommendations API call.

---

##### `opGetAutoScalingGroupRecommendations`<sup>Required</sup> <a name="opGetAutoScalingGroupRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetAutoScalingGroupRecommendations"></a>

```typescript
public readonly opGetAutoScalingGroupRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoScalingGroupRecommendations API call.

---

##### `opGetEBSVolumeRecommendations`<sup>Required</sup> <a name="opGetEBSVolumeRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEBSVolumeRecommendations"></a>

```typescript
public readonly opGetEBSVolumeRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetEBSVolumeRecommendations API call.

---

##### `opGetEC2InstanceRecommendations`<sup>Required</sup> <a name="opGetEC2InstanceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEC2InstanceRecommendations"></a>

```typescript
public readonly opGetEC2InstanceRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetEC2InstanceRecommendations API call.

---

##### `opGetEC2RecommendationProjectedMetrics`<sup>Required</sup> <a name="opGetEC2RecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEC2RecommendationProjectedMetrics"></a>

```typescript
public readonly opGetEC2RecommendationProjectedMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetEC2RecommendationProjectedMetrics API call.

---

##### `opGetECSServiceRecommendationProjectedMetrics`<sup>Required</sup> <a name="opGetECSServiceRecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetECSServiceRecommendationProjectedMetrics"></a>

```typescript
public readonly opGetECSServiceRecommendationProjectedMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetECSServiceRecommendationProjectedMetrics API call.

---

##### `opGetECSServiceRecommendations`<sup>Required</sup> <a name="opGetECSServiceRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetECSServiceRecommendations"></a>

```typescript
public readonly opGetECSServiceRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetECSServiceRecommendations API call.

---

##### `opGetEffectiveRecommendationPreferences`<sup>Required</sup> <a name="opGetEffectiveRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEffectiveRecommendationPreferences"></a>

```typescript
public readonly opGetEffectiveRecommendationPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetEffectiveRecommendationPreferences API call.

---

##### `opGetEnrollmentStatus`<sup>Required</sup> <a name="opGetEnrollmentStatus" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEnrollmentStatus"></a>

```typescript
public readonly opGetEnrollmentStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetEnrollmentStatus API call.

---

##### `opGetEnrollmentStatusesForOrganization`<sup>Required</sup> <a name="opGetEnrollmentStatusesForOrganization" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetEnrollmentStatusesForOrganization"></a>

```typescript
public readonly opGetEnrollmentStatusesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the GetEnrollmentStatusesForOrganization API call.

---

##### `opGetIdleRecommendations`<sup>Required</sup> <a name="opGetIdleRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetIdleRecommendations"></a>

```typescript
public readonly opGetIdleRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetIdleRecommendations API call.

---

##### `opGetLambdaFunctionRecommendations`<sup>Required</sup> <a name="opGetLambdaFunctionRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetLambdaFunctionRecommendations"></a>

```typescript
public readonly opGetLambdaFunctionRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetLambdaFunctionRecommendations API call.

---

##### `opGetLicenseRecommendations`<sup>Required</sup> <a name="opGetLicenseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetLicenseRecommendations"></a>

```typescript
public readonly opGetLicenseRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseRecommendations API call.

---

##### `opGetRDSDatabaseRecommendationProjectedMetrics`<sup>Required</sup> <a name="opGetRDSDatabaseRecommendationProjectedMetrics" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRDSDatabaseRecommendationProjectedMetrics"></a>

```typescript
public readonly opGetRDSDatabaseRecommendationProjectedMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetRDSDatabaseRecommendationProjectedMetrics API call.

---

##### `opGetRDSDatabaseRecommendations`<sup>Required</sup> <a name="opGetRDSDatabaseRecommendations" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRDSDatabaseRecommendations"></a>

```typescript
public readonly opGetRDSDatabaseRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetRDSDatabaseRecommendations API call.

---

##### `opGetRecommendationPreferences`<sup>Required</sup> <a name="opGetRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRecommendationPreferences"></a>

```typescript
public readonly opGetRecommendationPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendationPreferences API call.

---

##### `opGetRecommendationSummaries`<sup>Required</sup> <a name="opGetRecommendationSummaries" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.opGetRecommendationSummaries"></a>

```typescript
public readonly opGetRecommendationSummaries: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendationSummaries API call.

---

##### `PutRecommendationPreferences`<sup>Required</sup> <a name="PutRecommendationPreferences" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.PutRecommendationPreferences"></a>

```typescript
public readonly PutRecommendationPreferences: string[];
```

- *Type:* string[]

IAM actions required for the PutRecommendationPreferences API call.

---

##### `UpdateEnrollmentStatus`<sup>Required</sup> <a name="UpdateEnrollmentStatus" id="@cdk_utils/iam.compute_optimizer.ComputeOptimizerOperations.property.UpdateEnrollmentStatus"></a>

```typescript
public readonly UpdateEnrollmentStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnrollmentStatus API call.

---


