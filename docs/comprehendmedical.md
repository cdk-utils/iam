# `comprehendmedical` Submodule <a name="`comprehendmedical` Submodule" id="@cdk_utils/iam.comprehendmedical"></a>



## Classes <a name="Classes" id="Classes"></a>

### ComprehendmedicalActions <a name="ComprehendmedicalActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions"></a>

IAM action constants for the comprehendmedical service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.Initializer"></a>

```typescript
import { comprehendmedical } from '@cdk_utils/iam'

new comprehendmedical.ComprehendmedicalActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeEntitiesDetectionV2Job">DescribeEntitiesDetectionV2Job</a></code> | <code>string</code> | [Read] comprehendmedical:DescribeEntitiesDetectionV2Job. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeICD10CMInferenceJob">DescribeICD10CMInferenceJob</a></code> | <code>string</code> | [Read] comprehendmedical:DescribeICD10CMInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribePHIDetectionJob">DescribePHIDetectionJob</a></code> | <code>string</code> | [Read] comprehendmedical:DescribePHIDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeRxNormInferenceJob">DescribeRxNormInferenceJob</a></code> | <code>string</code> | [Read] comprehendmedical:DescribeRxNormInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeSNOMEDCTInferenceJob">DescribeSNOMEDCTInferenceJob</a></code> | <code>string</code> | [Read] comprehendmedical:DescribeSNOMEDCTInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DetectEntitiesV2">DetectEntitiesV2</a></code> | <code>string</code> | [Read] comprehendmedical:DetectEntitiesV2. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DetectPHI">DetectPHI</a></code> | <code>string</code> | [Read] comprehendmedical:DetectPHI. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferICD10CM">InferICD10CM</a></code> | <code>string</code> | [Read] comprehendmedical:InferICD10CM. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferRxNorm">InferRxNorm</a></code> | <code>string</code> | [Read] comprehendmedical:InferRxNorm. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferSNOMEDCT">InferSNOMEDCT</a></code> | <code>string</code> | [Read] comprehendmedical:InferSNOMEDCT. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListEntitiesDetectionV2Jobs">ListEntitiesDetectionV2Jobs</a></code> | <code>string</code> | [Read] comprehendmedical:ListEntitiesDetectionV2Jobs. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListICD10CMInferenceJobs">ListICD10CMInferenceJobs</a></code> | <code>string</code> | [Read] comprehendmedical:ListICD10CMInferenceJobs. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListPHIDetectionJobs">ListPHIDetectionJobs</a></code> | <code>string</code> | [Read] comprehendmedical:ListPHIDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListRxNormInferenceJobs">ListRxNormInferenceJobs</a></code> | <code>string</code> | [Read] comprehendmedical:ListRxNormInferenceJobs. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListSNOMEDCTInferenceJobs">ListSNOMEDCTInferenceJobs</a></code> | <code>string</code> | [Read] comprehendmedical:ListSNOMEDCTInferenceJobs. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartEntitiesDetectionV2Job">StartEntitiesDetectionV2Job</a></code> | <code>string</code> | [Write] comprehendmedical:StartEntitiesDetectionV2Job. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartICD10CMInferenceJob">StartICD10CMInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StartICD10CMInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartPHIDetectionJob">StartPHIDetectionJob</a></code> | <code>string</code> | [Write] comprehendmedical:StartPHIDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartRxNormInferenceJob">StartRxNormInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StartRxNormInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartSNOMEDCTInferenceJob">StartSNOMEDCTInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StartSNOMEDCTInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopEntitiesDetectionV2Job">StopEntitiesDetectionV2Job</a></code> | <code>string</code> | [Write] comprehendmedical:StopEntitiesDetectionV2Job. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopICD10CMInferenceJob">StopICD10CMInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StopICD10CMInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopPHIDetectionJob">StopPHIDetectionJob</a></code> | <code>string</code> | [Write] comprehendmedical:StopPHIDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopRxNormInferenceJob">StopRxNormInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StopRxNormInferenceJob. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopSNOMEDCTInferenceJob">StopSNOMEDCTInferenceJob</a></code> | <code>string</code> | [Write] comprehendmedical:StopSNOMEDCTInferenceJob. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DescribeEntitiesDetectionV2Job`<sup>Required</sup> <a name="DescribeEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeEntitiesDetectionV2Job"></a>

```typescript
public readonly DescribeEntitiesDetectionV2Job: string;
```

- *Type:* string

[Read] comprehendmedical:DescribeEntitiesDetectionV2Job.

---

##### `DescribeICD10CMInferenceJob`<sup>Required</sup> <a name="DescribeICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeICD10CMInferenceJob"></a>

```typescript
public readonly DescribeICD10CMInferenceJob: string;
```

- *Type:* string

[Read] comprehendmedical:DescribeICD10CMInferenceJob.

---

##### `DescribePHIDetectionJob`<sup>Required</sup> <a name="DescribePHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribePHIDetectionJob"></a>

```typescript
public readonly DescribePHIDetectionJob: string;
```

- *Type:* string

[Read] comprehendmedical:DescribePHIDetectionJob.

---

##### `DescribeRxNormInferenceJob`<sup>Required</sup> <a name="DescribeRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeRxNormInferenceJob"></a>

```typescript
public readonly DescribeRxNormInferenceJob: string;
```

- *Type:* string

[Read] comprehendmedical:DescribeRxNormInferenceJob.

---

##### `DescribeSNOMEDCTInferenceJob`<sup>Required</sup> <a name="DescribeSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DescribeSNOMEDCTInferenceJob"></a>

```typescript
public readonly DescribeSNOMEDCTInferenceJob: string;
```

- *Type:* string

[Read] comprehendmedical:DescribeSNOMEDCTInferenceJob.

---

##### `DetectEntitiesV2`<sup>Required</sup> <a name="DetectEntitiesV2" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DetectEntitiesV2"></a>

```typescript
public readonly DetectEntitiesV2: string;
```

- *Type:* string

[Read] comprehendmedical:DetectEntitiesV2.

---

##### `DetectPHI`<sup>Required</sup> <a name="DetectPHI" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.DetectPHI"></a>

```typescript
public readonly DetectPHI: string;
```

- *Type:* string

[Read] comprehendmedical:DetectPHI.

---

##### `InferICD10CM`<sup>Required</sup> <a name="InferICD10CM" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferICD10CM"></a>

```typescript
public readonly InferICD10CM: string;
```

- *Type:* string

[Read] comprehendmedical:InferICD10CM.

---

##### `InferRxNorm`<sup>Required</sup> <a name="InferRxNorm" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferRxNorm"></a>

```typescript
public readonly InferRxNorm: string;
```

- *Type:* string

[Read] comprehendmedical:InferRxNorm.

---

##### `InferSNOMEDCT`<sup>Required</sup> <a name="InferSNOMEDCT" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.InferSNOMEDCT"></a>

```typescript
public readonly InferSNOMEDCT: string;
```

- *Type:* string

[Read] comprehendmedical:InferSNOMEDCT.

---

##### `ListEntitiesDetectionV2Jobs`<sup>Required</sup> <a name="ListEntitiesDetectionV2Jobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListEntitiesDetectionV2Jobs"></a>

```typescript
public readonly ListEntitiesDetectionV2Jobs: string;
```

- *Type:* string

[Read] comprehendmedical:ListEntitiesDetectionV2Jobs.

---

##### `ListICD10CMInferenceJobs`<sup>Required</sup> <a name="ListICD10CMInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListICD10CMInferenceJobs"></a>

```typescript
public readonly ListICD10CMInferenceJobs: string;
```

- *Type:* string

[Read] comprehendmedical:ListICD10CMInferenceJobs.

---

##### `ListPHIDetectionJobs`<sup>Required</sup> <a name="ListPHIDetectionJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListPHIDetectionJobs"></a>

```typescript
public readonly ListPHIDetectionJobs: string;
```

- *Type:* string

[Read] comprehendmedical:ListPHIDetectionJobs.

---

##### `ListRxNormInferenceJobs`<sup>Required</sup> <a name="ListRxNormInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListRxNormInferenceJobs"></a>

```typescript
public readonly ListRxNormInferenceJobs: string;
```

- *Type:* string

[Read] comprehendmedical:ListRxNormInferenceJobs.

---

##### `ListSNOMEDCTInferenceJobs`<sup>Required</sup> <a name="ListSNOMEDCTInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.ListSNOMEDCTInferenceJobs"></a>

```typescript
public readonly ListSNOMEDCTInferenceJobs: string;
```

- *Type:* string

[Read] comprehendmedical:ListSNOMEDCTInferenceJobs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEntitiesDetectionV2Job`<sup>Required</sup> <a name="StartEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartEntitiesDetectionV2Job"></a>

```typescript
public readonly StartEntitiesDetectionV2Job: string;
```

- *Type:* string

[Write] comprehendmedical:StartEntitiesDetectionV2Job.

---

##### `StartICD10CMInferenceJob`<sup>Required</sup> <a name="StartICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartICD10CMInferenceJob"></a>

```typescript
public readonly StartICD10CMInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StartICD10CMInferenceJob.

---

##### `StartPHIDetectionJob`<sup>Required</sup> <a name="StartPHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartPHIDetectionJob"></a>

```typescript
public readonly StartPHIDetectionJob: string;
```

- *Type:* string

[Write] comprehendmedical:StartPHIDetectionJob.

---

##### `StartRxNormInferenceJob`<sup>Required</sup> <a name="StartRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartRxNormInferenceJob"></a>

```typescript
public readonly StartRxNormInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StartRxNormInferenceJob.

---

##### `StartSNOMEDCTInferenceJob`<sup>Required</sup> <a name="StartSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StartSNOMEDCTInferenceJob"></a>

```typescript
public readonly StartSNOMEDCTInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StartSNOMEDCTInferenceJob.

---

##### `StopEntitiesDetectionV2Job`<sup>Required</sup> <a name="StopEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopEntitiesDetectionV2Job"></a>

```typescript
public readonly StopEntitiesDetectionV2Job: string;
```

- *Type:* string

[Write] comprehendmedical:StopEntitiesDetectionV2Job.

---

##### `StopICD10CMInferenceJob`<sup>Required</sup> <a name="StopICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopICD10CMInferenceJob"></a>

```typescript
public readonly StopICD10CMInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StopICD10CMInferenceJob.

---

##### `StopPHIDetectionJob`<sup>Required</sup> <a name="StopPHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopPHIDetectionJob"></a>

```typescript
public readonly StopPHIDetectionJob: string;
```

- *Type:* string

[Write] comprehendmedical:StopPHIDetectionJob.

---

##### `StopRxNormInferenceJob`<sup>Required</sup> <a name="StopRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopRxNormInferenceJob"></a>

```typescript
public readonly StopRxNormInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StopRxNormInferenceJob.

---

##### `StopSNOMEDCTInferenceJob`<sup>Required</sup> <a name="StopSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalActions.property.StopSNOMEDCTInferenceJob"></a>

```typescript
public readonly StopSNOMEDCTInferenceJob: string;
```

- *Type:* string

[Write] comprehendmedical:StopSNOMEDCTInferenceJob.

---

### ComprehendmedicalConditions <a name="ComprehendmedicalConditions" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions"></a>

Condition key constants and builders for comprehendmedical.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.Initializer"></a>

```typescript
import { comprehendmedical } from '@cdk_utils/iam'

new comprehendmedical.ComprehendmedicalConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.tagKeys"></a>

```typescript
import { comprehendmedical } from '@cdk_utils/iam'

comprehendmedical.ComprehendmedicalConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

### ComprehendmedicalOperations <a name="ComprehendmedicalOperations" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations"></a>

API operation to required IAM actions mapping for comprehendmedical.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.Initializer"></a>

```typescript
import { comprehendmedical } from '@cdk_utils/iam'

new comprehendmedical.ComprehendmedicalOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeEntitiesDetectionV2Job">DescribeEntitiesDetectionV2Job</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntitiesDetectionV2Job API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeICD10CMInferenceJob">DescribeICD10CMInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeICD10CMInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribePHIDetectionJob">DescribePHIDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribePHIDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeRxNormInferenceJob">DescribeRxNormInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeRxNormInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeSNOMEDCTInferenceJob">DescribeSNOMEDCTInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeSNOMEDCTInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectEntities">DetectEntities</a></code> | <code>string[]</code> | IAM actions required for the DetectEntities API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectEntitiesV2">DetectEntitiesV2</a></code> | <code>string[]</code> | IAM actions required for the DetectEntitiesV2 API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectPHI">DetectPHI</a></code> | <code>string[]</code> | IAM actions required for the DetectPHI API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferICD10CM">InferICD10CM</a></code> | <code>string[]</code> | IAM actions required for the InferICD10CM API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferRxNorm">InferRxNorm</a></code> | <code>string[]</code> | IAM actions required for the InferRxNorm API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferSNOMEDCT">InferSNOMEDCT</a></code> | <code>string[]</code> | IAM actions required for the InferSNOMEDCT API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListEntitiesDetectionV2Jobs">ListEntitiesDetectionV2Jobs</a></code> | <code>string[]</code> | IAM actions required for the ListEntitiesDetectionV2Jobs API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListICD10CMInferenceJobs">ListICD10CMInferenceJobs</a></code> | <code>string[]</code> | IAM actions required for the ListICD10CMInferenceJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListPHIDetectionJobs">ListPHIDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListPHIDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListRxNormInferenceJobs">ListRxNormInferenceJobs</a></code> | <code>string[]</code> | IAM actions required for the ListRxNormInferenceJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListSNOMEDCTInferenceJobs">ListSNOMEDCTInferenceJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSNOMEDCTInferenceJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartEntitiesDetectionV2Job">StartEntitiesDetectionV2Job</a></code> | <code>string[]</code> | IAM actions required for the StartEntitiesDetectionV2Job API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartICD10CMInferenceJob">StartICD10CMInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StartICD10CMInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartPHIDetectionJob">StartPHIDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartPHIDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartRxNormInferenceJob">StartRxNormInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StartRxNormInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartSNOMEDCTInferenceJob">StartSNOMEDCTInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StartSNOMEDCTInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopEntitiesDetectionV2Job">StopEntitiesDetectionV2Job</a></code> | <code>string[]</code> | IAM actions required for the StopEntitiesDetectionV2Job API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopICD10CMInferenceJob">StopICD10CMInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StopICD10CMInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopPHIDetectionJob">StopPHIDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopPHIDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopRxNormInferenceJob">StopRxNormInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StopRxNormInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopSNOMEDCTInferenceJob">StopSNOMEDCTInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the StopSNOMEDCTInferenceJob API call. |

---

##### `DescribeEntitiesDetectionV2Job`<sup>Required</sup> <a name="DescribeEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeEntitiesDetectionV2Job"></a>

```typescript
public readonly DescribeEntitiesDetectionV2Job: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntitiesDetectionV2Job API call.

---

##### `DescribeICD10CMInferenceJob`<sup>Required</sup> <a name="DescribeICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeICD10CMInferenceJob"></a>

```typescript
public readonly DescribeICD10CMInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeICD10CMInferenceJob API call.

---

##### `DescribePHIDetectionJob`<sup>Required</sup> <a name="DescribePHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribePHIDetectionJob"></a>

```typescript
public readonly DescribePHIDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribePHIDetectionJob API call.

---

##### `DescribeRxNormInferenceJob`<sup>Required</sup> <a name="DescribeRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeRxNormInferenceJob"></a>

```typescript
public readonly DescribeRxNormInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRxNormInferenceJob API call.

---

##### `DescribeSNOMEDCTInferenceJob`<sup>Required</sup> <a name="DescribeSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DescribeSNOMEDCTInferenceJob"></a>

```typescript
public readonly DescribeSNOMEDCTInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSNOMEDCTInferenceJob API call.

---

##### `DetectEntities`<sup>Required</sup> <a name="DetectEntities" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectEntities"></a>

```typescript
public readonly DetectEntities: string[];
```

- *Type:* string[]

IAM actions required for the DetectEntities API call.

---

##### `DetectEntitiesV2`<sup>Required</sup> <a name="DetectEntitiesV2" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectEntitiesV2"></a>

```typescript
public readonly DetectEntitiesV2: string[];
```

- *Type:* string[]

IAM actions required for the DetectEntitiesV2 API call.

---

##### `DetectPHI`<sup>Required</sup> <a name="DetectPHI" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.DetectPHI"></a>

```typescript
public readonly DetectPHI: string[];
```

- *Type:* string[]

IAM actions required for the DetectPHI API call.

---

##### `InferICD10CM`<sup>Required</sup> <a name="InferICD10CM" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferICD10CM"></a>

```typescript
public readonly InferICD10CM: string[];
```

- *Type:* string[]

IAM actions required for the InferICD10CM API call.

---

##### `InferRxNorm`<sup>Required</sup> <a name="InferRxNorm" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferRxNorm"></a>

```typescript
public readonly InferRxNorm: string[];
```

- *Type:* string[]

IAM actions required for the InferRxNorm API call.

---

##### `InferSNOMEDCT`<sup>Required</sup> <a name="InferSNOMEDCT" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.InferSNOMEDCT"></a>

```typescript
public readonly InferSNOMEDCT: string[];
```

- *Type:* string[]

IAM actions required for the InferSNOMEDCT API call.

---

##### `ListEntitiesDetectionV2Jobs`<sup>Required</sup> <a name="ListEntitiesDetectionV2Jobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListEntitiesDetectionV2Jobs"></a>

```typescript
public readonly ListEntitiesDetectionV2Jobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitiesDetectionV2Jobs API call.

---

##### `ListICD10CMInferenceJobs`<sup>Required</sup> <a name="ListICD10CMInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListICD10CMInferenceJobs"></a>

```typescript
public readonly ListICD10CMInferenceJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListICD10CMInferenceJobs API call.

---

##### `ListPHIDetectionJobs`<sup>Required</sup> <a name="ListPHIDetectionJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListPHIDetectionJobs"></a>

```typescript
public readonly ListPHIDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListPHIDetectionJobs API call.

---

##### `ListRxNormInferenceJobs`<sup>Required</sup> <a name="ListRxNormInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListRxNormInferenceJobs"></a>

```typescript
public readonly ListRxNormInferenceJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListRxNormInferenceJobs API call.

---

##### `ListSNOMEDCTInferenceJobs`<sup>Required</sup> <a name="ListSNOMEDCTInferenceJobs" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.ListSNOMEDCTInferenceJobs"></a>

```typescript
public readonly ListSNOMEDCTInferenceJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSNOMEDCTInferenceJobs API call.

---

##### `StartEntitiesDetectionV2Job`<sup>Required</sup> <a name="StartEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartEntitiesDetectionV2Job"></a>

```typescript
public readonly StartEntitiesDetectionV2Job: string[];
```

- *Type:* string[]

IAM actions required for the StartEntitiesDetectionV2Job API call.

---

##### `StartICD10CMInferenceJob`<sup>Required</sup> <a name="StartICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartICD10CMInferenceJob"></a>

```typescript
public readonly StartICD10CMInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StartICD10CMInferenceJob API call.

---

##### `StartPHIDetectionJob`<sup>Required</sup> <a name="StartPHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartPHIDetectionJob"></a>

```typescript
public readonly StartPHIDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartPHIDetectionJob API call.

---

##### `StartRxNormInferenceJob`<sup>Required</sup> <a name="StartRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartRxNormInferenceJob"></a>

```typescript
public readonly StartRxNormInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StartRxNormInferenceJob API call.

---

##### `StartSNOMEDCTInferenceJob`<sup>Required</sup> <a name="StartSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StartSNOMEDCTInferenceJob"></a>

```typescript
public readonly StartSNOMEDCTInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSNOMEDCTInferenceJob API call.

---

##### `StopEntitiesDetectionV2Job`<sup>Required</sup> <a name="StopEntitiesDetectionV2Job" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopEntitiesDetectionV2Job"></a>

```typescript
public readonly StopEntitiesDetectionV2Job: string[];
```

- *Type:* string[]

IAM actions required for the StopEntitiesDetectionV2Job API call.

---

##### `StopICD10CMInferenceJob`<sup>Required</sup> <a name="StopICD10CMInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopICD10CMInferenceJob"></a>

```typescript
public readonly StopICD10CMInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StopICD10CMInferenceJob API call.

---

##### `StopPHIDetectionJob`<sup>Required</sup> <a name="StopPHIDetectionJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopPHIDetectionJob"></a>

```typescript
public readonly StopPHIDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopPHIDetectionJob API call.

---

##### `StopRxNormInferenceJob`<sup>Required</sup> <a name="StopRxNormInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopRxNormInferenceJob"></a>

```typescript
public readonly StopRxNormInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StopRxNormInferenceJob API call.

---

##### `StopSNOMEDCTInferenceJob`<sup>Required</sup> <a name="StopSNOMEDCTInferenceJob" id="@cdk_utils/iam.comprehendmedical.ComprehendmedicalOperations.property.StopSNOMEDCTInferenceJob"></a>

```typescript
public readonly StopSNOMEDCTInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the StopSNOMEDCTInferenceJob API call.

---


