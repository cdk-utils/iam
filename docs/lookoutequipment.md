# `lookoutequipment` Submodule <a name="`lookoutequipment` Submodule" id="@cdk_utils/iam.lookoutequipment"></a>


## Structs <a name="Structs" id="Structs"></a>

### LookoutEquipmentDatasetArnComponents <a name="LookoutEquipmentDatasetArnComponents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentDatasetArnComponents: lookoutequipment.LookoutEquipmentDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutEquipmentDatasetArnProps <a name="LookoutEquipmentDatasetArnProps" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentDatasetArnProps: lookoutequipment.LookoutEquipmentDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutEquipmentInferenceSchedulerArnComponents <a name="LookoutEquipmentInferenceSchedulerArnComponents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents"></a>

Parsed components of a inference-scheduler ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentInferenceSchedulerArnComponents: lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.inferenceSchedulerId">inferenceSchedulerId</a></code> | <code>string</code> | The InferenceSchedulerId component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>string</code> | The InferenceSchedulerName component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `inferenceSchedulerId`<sup>Required</sup> <a name="inferenceSchedulerId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.inferenceSchedulerId"></a>

```typescript
public readonly inferenceSchedulerId: string;
```

- *Type:* string

The InferenceSchedulerId component.

---

##### `inferenceSchedulerName`<sup>Required</sup> <a name="inferenceSchedulerName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.inferenceSchedulerName"></a>

```typescript
public readonly inferenceSchedulerName: string;
```

- *Type:* string

The InferenceSchedulerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutEquipmentInferenceSchedulerArnProps <a name="LookoutEquipmentInferenceSchedulerArnProps" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps"></a>

Properties for building a inference-scheduler ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentInferenceSchedulerArnProps: lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.inferenceSchedulerId">inferenceSchedulerId</a></code> | <code>string</code> | The InferenceSchedulerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.inferenceSchedulerName">inferenceSchedulerName</a></code> | <code>string</code> | The InferenceSchedulerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `inferenceSchedulerId`<sup>Required</sup> <a name="inferenceSchedulerId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.inferenceSchedulerId"></a>

```typescript
public readonly inferenceSchedulerId: string;
```

- *Type:* string

The InferenceSchedulerId component of the ARN.

---

##### `inferenceSchedulerName`<sup>Required</sup> <a name="inferenceSchedulerName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.inferenceSchedulerName"></a>

```typescript
public readonly inferenceSchedulerName: string;
```

- *Type:* string

The InferenceSchedulerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutEquipmentLabelGroupArnComponents <a name="LookoutEquipmentLabelGroupArnComponents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents"></a>

Parsed components of a label-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentLabelGroupArnComponents: lookoutequipment.LookoutEquipmentLabelGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.labelGroupId">labelGroupId</a></code> | <code>string</code> | The LabelGroupId component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.labelGroupName">labelGroupName</a></code> | <code>string</code> | The LabelGroupName component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `labelGroupId`<sup>Required</sup> <a name="labelGroupId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.labelGroupId"></a>

```typescript
public readonly labelGroupId: string;
```

- *Type:* string

The LabelGroupId component.

---

##### `labelGroupName`<sup>Required</sup> <a name="labelGroupName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.labelGroupName"></a>

```typescript
public readonly labelGroupName: string;
```

- *Type:* string

The LabelGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutEquipmentLabelGroupArnProps <a name="LookoutEquipmentLabelGroupArnProps" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps"></a>

Properties for building a label-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentLabelGroupArnProps: lookoutequipment.LookoutEquipmentLabelGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.labelGroupId">labelGroupId</a></code> | <code>string</code> | The LabelGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.labelGroupName">labelGroupName</a></code> | <code>string</code> | The LabelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `labelGroupId`<sup>Required</sup> <a name="labelGroupId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.labelGroupId"></a>

```typescript
public readonly labelGroupId: string;
```

- *Type:* string

The LabelGroupId component of the ARN.

---

##### `labelGroupName`<sup>Required</sup> <a name="labelGroupName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.labelGroupName"></a>

```typescript
public readonly labelGroupName: string;
```

- *Type:* string

The LabelGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutEquipmentModelArnComponents <a name="LookoutEquipmentModelArnComponents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents"></a>

Parsed components of a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentModelArnComponents: lookoutequipment.LookoutEquipmentModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutEquipmentModelArnProps <a name="LookoutEquipmentModelArnProps" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps"></a>

Properties for building a model ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentModelArnProps: lookoutequipment.LookoutEquipmentModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component of the ARN.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutEquipmentModelVersionArnComponents <a name="LookoutEquipmentModelVersionArnComponents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents"></a>

Parsed components of a model-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentModelVersionArnComponents: lookoutequipment.LookoutEquipmentModelVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelVersionNumber">modelVersionNumber</a></code> | <code>string</code> | The ModelVersionNumber component. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component.

---

##### `modelVersionNumber`<sup>Required</sup> <a name="modelVersionNumber" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.modelVersionNumber"></a>

```typescript
public readonly modelVersionNumber: string;
```

- *Type:* string

The ModelVersionNumber component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutEquipmentModelVersionArnProps <a name="LookoutEquipmentModelVersionArnProps" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps"></a>

Properties for building a model-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

const lookoutEquipmentModelVersionArnProps: lookoutequipment.LookoutEquipmentModelVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelId">modelId</a></code> | <code>string</code> | The ModelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelVersionNumber">modelVersionNumber</a></code> | <code>string</code> | The ModelVersionNumber component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

The ModelId component of the ARN.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component of the ARN.

---

##### `modelVersionNumber`<sup>Required</sup> <a name="modelVersionNumber" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.modelVersionNumber"></a>

```typescript
public readonly modelVersionNumber: string;
```

- *Type:* string

The ModelVersionNumber component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutEquipmentActions <a name="LookoutEquipmentActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions"></a>

IAM action constants for the lookoutequipment service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

new lookoutequipment.LookoutEquipmentActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] lookoutequipment:CreateDataset. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateInferenceScheduler">CreateInferenceScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:CreateInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateLabel">CreateLabel</a></code> | <code>string</code> | [Write] lookoutequipment:CreateLabel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateLabelGroup">CreateLabelGroup</a></code> | <code>string</code> | [Write] lookoutequipment:CreateLabelGroup. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateModel">CreateModel</a></code> | <code>string</code> | [Write] lookoutequipment:CreateModel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateRetrainingScheduler">CreateRetrainingScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:CreateRetrainingScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteInferenceScheduler">DeleteInferenceScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteLabel">DeleteLabel</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteLabel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteLabelGroup">DeleteLabelGroup</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteLabelGroup. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteModel">DeleteModel</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteModel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteRetrainingScheduler">DeleteRetrainingScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:DeleteRetrainingScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeDataIngestionJob">DescribeDataIngestionJob</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeDataIngestionJob. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeInferenceScheduler">DescribeInferenceScheduler</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.Describelabel">Describelabel</a></code> | <code>string</code> | [Read] lookoutequipment:Describelabel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeLabelGroup">DescribeLabelGroup</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeLabelGroup. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeModel">DescribeModel</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeModel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeModelVersion">DescribeModelVersion</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeModelVersion. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeRetrainingScheduler">DescribeRetrainingScheduler</a></code> | <code>string</code> | [Read] lookoutequipment:DescribeRetrainingScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ImportDataset">ImportDataset</a></code> | <code>string</code> | [Write] lookoutequipment:ImportDataset. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ImportModelVersion">ImportModelVersion</a></code> | <code>string</code> | [Write] lookoutequipment:ImportModelVersion. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListDataIngestionJobs">ListDataIngestionJobs</a></code> | <code>string</code> | [List] lookoutequipment:ListDataIngestionJobs. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] lookoutequipment:ListDatasets. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceEvents">ListInferenceEvents</a></code> | <code>string</code> | [Read] lookoutequipment:ListInferenceEvents. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceExecutions">ListInferenceExecutions</a></code> | <code>string</code> | [Read] lookoutequipment:ListInferenceExecutions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceSchedulers">ListInferenceSchedulers</a></code> | <code>string</code> | [List] lookoutequipment:ListInferenceSchedulers. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListLabelGroups">ListLabelGroups</a></code> | <code>string</code> | [List] lookoutequipment:ListLabelGroups. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListLabels">ListLabels</a></code> | <code>string</code> | [List] lookoutequipment:ListLabels. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListModels">ListModels</a></code> | <code>string</code> | [List] lookoutequipment:ListModels. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListModelVersions">ListModelVersions</a></code> | <code>string</code> | [List] lookoutequipment:ListModelVersions. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListRetrainingSchedulers">ListRetrainingSchedulers</a></code> | <code>string</code> | [List] lookoutequipment:ListRetrainingSchedulers. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListSensorStatistics">ListSensorStatistics</a></code> | <code>string</code> | [List] lookoutequipment:ListSensorStatistics. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] lookoutequipment:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] lookoutequipment:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartDataIngestionJob">StartDataIngestionJob</a></code> | <code>string</code> | [Write] lookoutequipment:StartDataIngestionJob. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartInferenceScheduler">StartInferenceScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:StartInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartRetrainingScheduler">StartRetrainingScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:StartRetrainingScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StopInferenceScheduler">StopInferenceScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:StopInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StopRetrainingScheduler">StopRetrainingScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:StopRetrainingScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lookoutequipment:TagResource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lookoutequipment:UntagResource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateActiveModelVersion">UpdateActiveModelVersion</a></code> | <code>string</code> | [Write] lookoutequipment:UpdateActiveModelVersion. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateInferenceScheduler">UpdateInferenceScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:UpdateInferenceScheduler. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateLabelGroup">UpdateLabelGroup</a></code> | <code>string</code> | [Write] lookoutequipment:UpdateLabelGroup. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateModel">UpdateModel</a></code> | <code>string</code> | [Write] lookoutequipment:UpdateModel. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateRetrainingScheduler">UpdateRetrainingScheduler</a></code> | <code>string</code> | [Write] lookoutequipment:UpdateRetrainingScheduler. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] lookoutequipment:CreateDataset.

---

##### `CreateInferenceScheduler`<sup>Required</sup> <a name="CreateInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateInferenceScheduler"></a>

```typescript
public readonly CreateInferenceScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:CreateInferenceScheduler.

---

##### `CreateLabel`<sup>Required</sup> <a name="CreateLabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateLabel"></a>

```typescript
public readonly CreateLabel: string;
```

- *Type:* string

[Write] lookoutequipment:CreateLabel.

---

##### `CreateLabelGroup`<sup>Required</sup> <a name="CreateLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateLabelGroup"></a>

```typescript
public readonly CreateLabelGroup: string;
```

- *Type:* string

[Write] lookoutequipment:CreateLabelGroup.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateModel"></a>

```typescript
public readonly CreateModel: string;
```

- *Type:* string

[Write] lookoutequipment:CreateModel.

---

##### `CreateRetrainingScheduler`<sup>Required</sup> <a name="CreateRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.CreateRetrainingScheduler"></a>

```typescript
public readonly CreateRetrainingScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:CreateRetrainingScheduler.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteDataset.

---

##### `DeleteInferenceScheduler`<sup>Required</sup> <a name="DeleteInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteInferenceScheduler"></a>

```typescript
public readonly DeleteInferenceScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteInferenceScheduler.

---

##### `DeleteLabel`<sup>Required</sup> <a name="DeleteLabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteLabel"></a>

```typescript
public readonly DeleteLabel: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteLabel.

---

##### `DeleteLabelGroup`<sup>Required</sup> <a name="DeleteLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteLabelGroup"></a>

```typescript
public readonly DeleteLabelGroup: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteLabelGroup.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteModel.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteResourcePolicy.

---

##### `DeleteRetrainingScheduler`<sup>Required</sup> <a name="DeleteRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DeleteRetrainingScheduler"></a>

```typescript
public readonly DeleteRetrainingScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:DeleteRetrainingScheduler.

---

##### `DescribeDataIngestionJob`<sup>Required</sup> <a name="DescribeDataIngestionJob" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeDataIngestionJob"></a>

```typescript
public readonly DescribeDataIngestionJob: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeDataIngestionJob.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeDataset.

---

##### `DescribeInferenceScheduler`<sup>Required</sup> <a name="DescribeInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeInferenceScheduler"></a>

```typescript
public readonly DescribeInferenceScheduler: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeInferenceScheduler.

---

##### `Describelabel`<sup>Required</sup> <a name="Describelabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.Describelabel"></a>

```typescript
public readonly Describelabel: string;
```

- *Type:* string

[Read] lookoutequipment:Describelabel.

---

##### `DescribeLabelGroup`<sup>Required</sup> <a name="DescribeLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeLabelGroup"></a>

```typescript
public readonly DescribeLabelGroup: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeLabelGroup.

---

##### `DescribeModel`<sup>Required</sup> <a name="DescribeModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeModel"></a>

```typescript
public readonly DescribeModel: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeModel.

---

##### `DescribeModelVersion`<sup>Required</sup> <a name="DescribeModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeModelVersion"></a>

```typescript
public readonly DescribeModelVersion: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeModelVersion.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeResourcePolicy.

---

##### `DescribeRetrainingScheduler`<sup>Required</sup> <a name="DescribeRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.DescribeRetrainingScheduler"></a>

```typescript
public readonly DescribeRetrainingScheduler: string;
```

- *Type:* string

[Read] lookoutequipment:DescribeRetrainingScheduler.

---

##### `ImportDataset`<sup>Required</sup> <a name="ImportDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ImportDataset"></a>

```typescript
public readonly ImportDataset: string;
```

- *Type:* string

[Write] lookoutequipment:ImportDataset.

---

##### `ImportModelVersion`<sup>Required</sup> <a name="ImportModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ImportModelVersion"></a>

```typescript
public readonly ImportModelVersion: string;
```

- *Type:* string

[Write] lookoutequipment:ImportModelVersion.

---

##### `ListDataIngestionJobs`<sup>Required</sup> <a name="ListDataIngestionJobs" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListDataIngestionJobs"></a>

```typescript
public readonly ListDataIngestionJobs: string;
```

- *Type:* string

[List] lookoutequipment:ListDataIngestionJobs.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] lookoutequipment:ListDatasets.

---

##### `ListInferenceEvents`<sup>Required</sup> <a name="ListInferenceEvents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceEvents"></a>

```typescript
public readonly ListInferenceEvents: string;
```

- *Type:* string

[Read] lookoutequipment:ListInferenceEvents.

---

##### `ListInferenceExecutions`<sup>Required</sup> <a name="ListInferenceExecutions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceExecutions"></a>

```typescript
public readonly ListInferenceExecutions: string;
```

- *Type:* string

[Read] lookoutequipment:ListInferenceExecutions.

---

##### `ListInferenceSchedulers`<sup>Required</sup> <a name="ListInferenceSchedulers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListInferenceSchedulers"></a>

```typescript
public readonly ListInferenceSchedulers: string;
```

- *Type:* string

[List] lookoutequipment:ListInferenceSchedulers.

---

##### `ListLabelGroups`<sup>Required</sup> <a name="ListLabelGroups" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListLabelGroups"></a>

```typescript
public readonly ListLabelGroups: string;
```

- *Type:* string

[List] lookoutequipment:ListLabelGroups.

---

##### `ListLabels`<sup>Required</sup> <a name="ListLabels" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListLabels"></a>

```typescript
public readonly ListLabels: string;
```

- *Type:* string

[List] lookoutequipment:ListLabels.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListModels"></a>

```typescript
public readonly ListModels: string;
```

- *Type:* string

[List] lookoutequipment:ListModels.

---

##### `ListModelVersions`<sup>Required</sup> <a name="ListModelVersions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListModelVersions"></a>

```typescript
public readonly ListModelVersions: string;
```

- *Type:* string

[List] lookoutequipment:ListModelVersions.

---

##### `ListRetrainingSchedulers`<sup>Required</sup> <a name="ListRetrainingSchedulers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListRetrainingSchedulers"></a>

```typescript
public readonly ListRetrainingSchedulers: string;
```

- *Type:* string

[List] lookoutequipment:ListRetrainingSchedulers.

---

##### `ListSensorStatistics`<sup>Required</sup> <a name="ListSensorStatistics" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListSensorStatistics"></a>

```typescript
public readonly ListSensorStatistics: string;
```

- *Type:* string

[List] lookoutequipment:ListSensorStatistics.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] lookoutequipment:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] lookoutequipment:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataIngestionJob`<sup>Required</sup> <a name="StartDataIngestionJob" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartDataIngestionJob"></a>

```typescript
public readonly StartDataIngestionJob: string;
```

- *Type:* string

[Write] lookoutequipment:StartDataIngestionJob.

---

##### `StartInferenceScheduler`<sup>Required</sup> <a name="StartInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartInferenceScheduler"></a>

```typescript
public readonly StartInferenceScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:StartInferenceScheduler.

---

##### `StartRetrainingScheduler`<sup>Required</sup> <a name="StartRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StartRetrainingScheduler"></a>

```typescript
public readonly StartRetrainingScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:StartRetrainingScheduler.

---

##### `StopInferenceScheduler`<sup>Required</sup> <a name="StopInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StopInferenceScheduler"></a>

```typescript
public readonly StopInferenceScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:StopInferenceScheduler.

---

##### `StopRetrainingScheduler`<sup>Required</sup> <a name="StopRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.StopRetrainingScheduler"></a>

```typescript
public readonly StopRetrainingScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:StopRetrainingScheduler.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lookoutequipment:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lookoutequipment:UntagResource.

---

##### `UpdateActiveModelVersion`<sup>Required</sup> <a name="UpdateActiveModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateActiveModelVersion"></a>

```typescript
public readonly UpdateActiveModelVersion: string;
```

- *Type:* string

[Write] lookoutequipment:UpdateActiveModelVersion.

---

##### `UpdateInferenceScheduler`<sup>Required</sup> <a name="UpdateInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateInferenceScheduler"></a>

```typescript
public readonly UpdateInferenceScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:UpdateInferenceScheduler.

---

##### `UpdateLabelGroup`<sup>Required</sup> <a name="UpdateLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateLabelGroup"></a>

```typescript
public readonly UpdateLabelGroup: string;
```

- *Type:* string

[Write] lookoutequipment:UpdateLabelGroup.

---

##### `UpdateModel`<sup>Required</sup> <a name="UpdateModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateModel"></a>

```typescript
public readonly UpdateModel: string;
```

- *Type:* string

[Write] lookoutequipment:UpdateModel.

---

##### `UpdateRetrainingScheduler`<sup>Required</sup> <a name="UpdateRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentActions.property.UpdateRetrainingScheduler"></a>

```typescript
public readonly UpdateRetrainingScheduler: string;
```

- *Type:* string

[Write] lookoutequipment:UpdateRetrainingScheduler.

---

### LookoutEquipmentConditions <a name="LookoutEquipmentConditions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions"></a>

Condition key constants and builders for lookoutequipment.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

new lookoutequipment.LookoutEquipmentConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.isImportingData">isImportingData</a></code> | Generates a condition block for `lookoutequipment:IsImportingData`. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `isImportingData` <a name="isImportingData" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.isImportingData"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentConditions.isImportingData(value: boolean)
```

Generates a condition block for `lookoutequipment:IsImportingData`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.isImportingData.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.requestTag"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.resourceTag"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.tagKeys"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateInferenceSchedulerConditionKeys">CreateInferenceSchedulerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInferenceScheduler action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateLabelGroupConditionKeys">CreateLabelGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLabelGroup action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateModelConditionKeys">CreateModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModel action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.ImportDatasetConditionKeys">ImportDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportDataset action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.ImportModelVersionConditionKeys">ImportModelVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportModelVersion action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.IS_IMPORTING_DATA">IS_IMPORTING_DATA</a></code> | <code>string</code> | Condition key: lookoutequipment:IsImportingData (Bool). |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateInferenceSchedulerConditionKeys`<sup>Required</sup> <a name="CreateInferenceSchedulerConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateInferenceSchedulerConditionKeys"></a>

```typescript
public readonly CreateInferenceSchedulerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInferenceScheduler action.

---

##### `CreateLabelGroupConditionKeys`<sup>Required</sup> <a name="CreateLabelGroupConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateLabelGroupConditionKeys"></a>

```typescript
public readonly CreateLabelGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLabelGroup action.

---

##### `CreateModelConditionKeys`<sup>Required</sup> <a name="CreateModelConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.CreateModelConditionKeys"></a>

```typescript
public readonly CreateModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModel action.

---

##### `ImportDatasetConditionKeys`<sup>Required</sup> <a name="ImportDatasetConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.ImportDatasetConditionKeys"></a>

```typescript
public readonly ImportDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportDataset action.

---

##### `ImportModelVersionConditionKeys`<sup>Required</sup> <a name="ImportModelVersionConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.ImportModelVersionConditionKeys"></a>

```typescript
public readonly ImportModelVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportModelVersion action.

---

##### `IS_IMPORTING_DATA`<sup>Required</sup> <a name="IS_IMPORTING_DATA" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.IS_IMPORTING_DATA"></a>

```typescript
public readonly IS_IMPORTING_DATA: string;
```

- *Type:* string

Condition key: lookoutequipment:IsImportingData (Bool).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LookoutEquipmentOperations <a name="LookoutEquipmentOperations" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations"></a>

API operation to required IAM actions mapping for lookoutequipment.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

new lookoutequipment.LookoutEquipmentOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateInferenceScheduler">CreateInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the CreateInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateLabel">CreateLabel</a></code> | <code>string[]</code> | IAM actions required for the CreateLabel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateLabelGroup">CreateLabelGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateLabelGroup API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateModel">CreateModel</a></code> | <code>string[]</code> | IAM actions required for the CreateModel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateRetrainingScheduler">CreateRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the CreateRetrainingScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteInferenceScheduler">DeleteInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the DeleteInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteLabel">DeleteLabel</a></code> | <code>string[]</code> | IAM actions required for the DeleteLabel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteLabelGroup">DeleteLabelGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteLabelGroup API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteModel">DeleteModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteModel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteRetrainingScheduler">DeleteRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the DeleteRetrainingScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeDataIngestionJob">DescribeDataIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeInferenceScheduler">DescribeInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the DescribeInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeLabel">DescribeLabel</a></code> | <code>string[]</code> | IAM actions required for the DescribeLabel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeLabelGroup">DescribeLabelGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeLabelGroup API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeModel">DescribeModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeModel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeModelVersion">DescribeModelVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeModelVersion API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeRetrainingScheduler">DescribeRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the DescribeRetrainingScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ImportDataset">ImportDataset</a></code> | <code>string[]</code> | IAM actions required for the ImportDataset API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ImportModelVersion">ImportModelVersion</a></code> | <code>string[]</code> | IAM actions required for the ImportModelVersion API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListDataIngestionJobs">ListDataIngestionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataIngestionJobs API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceEvents">ListInferenceEvents</a></code> | <code>string[]</code> | IAM actions required for the ListInferenceEvents API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceExecutions">ListInferenceExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListInferenceExecutions API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceSchedulers">ListInferenceSchedulers</a></code> | <code>string[]</code> | IAM actions required for the ListInferenceSchedulers API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListLabelGroups">ListLabelGroups</a></code> | <code>string[]</code> | IAM actions required for the ListLabelGroups API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListLabels">ListLabels</a></code> | <code>string[]</code> | IAM actions required for the ListLabels API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListModels">ListModels</a></code> | <code>string[]</code> | IAM actions required for the ListModels API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListModelVersions">ListModelVersions</a></code> | <code>string[]</code> | IAM actions required for the ListModelVersions API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListRetrainingSchedulers">ListRetrainingSchedulers</a></code> | <code>string[]</code> | IAM actions required for the ListRetrainingSchedulers API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListSensorStatistics">ListSensorStatistics</a></code> | <code>string[]</code> | IAM actions required for the ListSensorStatistics API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartDataIngestionJob">StartDataIngestionJob</a></code> | <code>string[]</code> | IAM actions required for the StartDataIngestionJob API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartInferenceScheduler">StartInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the StartInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartRetrainingScheduler">StartRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the StartRetrainingScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StopInferenceScheduler">StopInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the StopInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StopRetrainingScheduler">StopRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the StopRetrainingScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateActiveModelVersion">UpdateActiveModelVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateActiveModelVersion API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateInferenceScheduler">UpdateInferenceScheduler</a></code> | <code>string[]</code> | IAM actions required for the UpdateInferenceScheduler API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateLabelGroup">UpdateLabelGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateLabelGroup API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateModel">UpdateModel</a></code> | <code>string[]</code> | IAM actions required for the UpdateModel API call. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateRetrainingScheduler">UpdateRetrainingScheduler</a></code> | <code>string[]</code> | IAM actions required for the UpdateRetrainingScheduler API call. |

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateInferenceScheduler`<sup>Required</sup> <a name="CreateInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateInferenceScheduler"></a>

```typescript
public readonly CreateInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the CreateInferenceScheduler API call.

---

##### `CreateLabel`<sup>Required</sup> <a name="CreateLabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateLabel"></a>

```typescript
public readonly CreateLabel: string[];
```

- *Type:* string[]

IAM actions required for the CreateLabel API call.

---

##### `CreateLabelGroup`<sup>Required</sup> <a name="CreateLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateLabelGroup"></a>

```typescript
public readonly CreateLabelGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateLabelGroup API call.

---

##### `CreateModel`<sup>Required</sup> <a name="CreateModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateModel"></a>

```typescript
public readonly CreateModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateModel API call.

---

##### `CreateRetrainingScheduler`<sup>Required</sup> <a name="CreateRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.CreateRetrainingScheduler"></a>

```typescript
public readonly CreateRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the CreateRetrainingScheduler API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteInferenceScheduler`<sup>Required</sup> <a name="DeleteInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteInferenceScheduler"></a>

```typescript
public readonly DeleteInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInferenceScheduler API call.

---

##### `DeleteLabel`<sup>Required</sup> <a name="DeleteLabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteLabel"></a>

```typescript
public readonly DeleteLabel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLabel API call.

---

##### `DeleteLabelGroup`<sup>Required</sup> <a name="DeleteLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteLabelGroup"></a>

```typescript
public readonly DeleteLabelGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLabelGroup API call.

---

##### `DeleteModel`<sup>Required</sup> <a name="DeleteModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteModel"></a>

```typescript
public readonly DeleteModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModel API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRetrainingScheduler`<sup>Required</sup> <a name="DeleteRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DeleteRetrainingScheduler"></a>

```typescript
public readonly DeleteRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRetrainingScheduler API call.

---

##### `DescribeDataIngestionJob`<sup>Required</sup> <a name="DescribeDataIngestionJob" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeDataIngestionJob"></a>

```typescript
public readonly DescribeDataIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataIngestionJob API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeInferenceScheduler`<sup>Required</sup> <a name="DescribeInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeInferenceScheduler"></a>

```typescript
public readonly DescribeInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInferenceScheduler API call.

---

##### `DescribeLabel`<sup>Required</sup> <a name="DescribeLabel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeLabel"></a>

```typescript
public readonly DescribeLabel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLabel API call.

---

##### `DescribeLabelGroup`<sup>Required</sup> <a name="DescribeLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeLabelGroup"></a>

```typescript
public readonly DescribeLabelGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLabelGroup API call.

---

##### `DescribeModel`<sup>Required</sup> <a name="DescribeModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeModel"></a>

```typescript
public readonly DescribeModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeModel API call.

---

##### `DescribeModelVersion`<sup>Required</sup> <a name="DescribeModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeModelVersion"></a>

```typescript
public readonly DescribeModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeModelVersion API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeRetrainingScheduler`<sup>Required</sup> <a name="DescribeRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.DescribeRetrainingScheduler"></a>

```typescript
public readonly DescribeRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRetrainingScheduler API call.

---

##### `ImportDataset`<sup>Required</sup> <a name="ImportDataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ImportDataset"></a>

```typescript
public readonly ImportDataset: string[];
```

- *Type:* string[]

IAM actions required for the ImportDataset API call.

---

##### `ImportModelVersion`<sup>Required</sup> <a name="ImportModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ImportModelVersion"></a>

```typescript
public readonly ImportModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the ImportModelVersion API call.

---

##### `ListDataIngestionJobs`<sup>Required</sup> <a name="ListDataIngestionJobs" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListDataIngestionJobs"></a>

```typescript
public readonly ListDataIngestionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIngestionJobs API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListInferenceEvents`<sup>Required</sup> <a name="ListInferenceEvents" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceEvents"></a>

```typescript
public readonly ListInferenceEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListInferenceEvents API call.

---

##### `ListInferenceExecutions`<sup>Required</sup> <a name="ListInferenceExecutions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceExecutions"></a>

```typescript
public readonly ListInferenceExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListInferenceExecutions API call.

---

##### `ListInferenceSchedulers`<sup>Required</sup> <a name="ListInferenceSchedulers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListInferenceSchedulers"></a>

```typescript
public readonly ListInferenceSchedulers: string[];
```

- *Type:* string[]

IAM actions required for the ListInferenceSchedulers API call.

---

##### `ListLabelGroups`<sup>Required</sup> <a name="ListLabelGroups" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListLabelGroups"></a>

```typescript
public readonly ListLabelGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListLabelGroups API call.

---

##### `ListLabels`<sup>Required</sup> <a name="ListLabels" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListLabels"></a>

```typescript
public readonly ListLabels: string[];
```

- *Type:* string[]

IAM actions required for the ListLabels API call.

---

##### `ListModels`<sup>Required</sup> <a name="ListModels" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListModels"></a>

```typescript
public readonly ListModels: string[];
```

- *Type:* string[]

IAM actions required for the ListModels API call.

---

##### `ListModelVersions`<sup>Required</sup> <a name="ListModelVersions" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListModelVersions"></a>

```typescript
public readonly ListModelVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListModelVersions API call.

---

##### `ListRetrainingSchedulers`<sup>Required</sup> <a name="ListRetrainingSchedulers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListRetrainingSchedulers"></a>

```typescript
public readonly ListRetrainingSchedulers: string[];
```

- *Type:* string[]

IAM actions required for the ListRetrainingSchedulers API call.

---

##### `ListSensorStatistics`<sup>Required</sup> <a name="ListSensorStatistics" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListSensorStatistics"></a>

```typescript
public readonly ListSensorStatistics: string[];
```

- *Type:* string[]

IAM actions required for the ListSensorStatistics API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `StartDataIngestionJob`<sup>Required</sup> <a name="StartDataIngestionJob" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartDataIngestionJob"></a>

```typescript
public readonly StartDataIngestionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDataIngestionJob API call.

---

##### `StartInferenceScheduler`<sup>Required</sup> <a name="StartInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartInferenceScheduler"></a>

```typescript
public readonly StartInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the StartInferenceScheduler API call.

---

##### `StartRetrainingScheduler`<sup>Required</sup> <a name="StartRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StartRetrainingScheduler"></a>

```typescript
public readonly StartRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the StartRetrainingScheduler API call.

---

##### `StopInferenceScheduler`<sup>Required</sup> <a name="StopInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StopInferenceScheduler"></a>

```typescript
public readonly StopInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the StopInferenceScheduler API call.

---

##### `StopRetrainingScheduler`<sup>Required</sup> <a name="StopRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.StopRetrainingScheduler"></a>

```typescript
public readonly StopRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the StopRetrainingScheduler API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateActiveModelVersion`<sup>Required</sup> <a name="UpdateActiveModelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateActiveModelVersion"></a>

```typescript
public readonly UpdateActiveModelVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateActiveModelVersion API call.

---

##### `UpdateInferenceScheduler`<sup>Required</sup> <a name="UpdateInferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateInferenceScheduler"></a>

```typescript
public readonly UpdateInferenceScheduler: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInferenceScheduler API call.

---

##### `UpdateLabelGroup`<sup>Required</sup> <a name="UpdateLabelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateLabelGroup"></a>

```typescript
public readonly UpdateLabelGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLabelGroup API call.

---

##### `UpdateModel`<sup>Required</sup> <a name="UpdateModel" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateModel"></a>

```typescript
public readonly UpdateModel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModel API call.

---

##### `UpdateRetrainingScheduler`<sup>Required</sup> <a name="UpdateRetrainingScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentOperations.property.UpdateRetrainingScheduler"></a>

```typescript
public readonly UpdateRetrainingScheduler: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRetrainingScheduler API call.

---

### LookoutEquipmentResources <a name="LookoutEquipmentResources" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources"></a>

ARN builders, validators, and parsers for lookoutequipment resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.Initializer"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

new lookoutequipment.LookoutEquipmentResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.inferenceScheduler">inferenceScheduler</a></code> | Builds an ARN for the inference-scheduler resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidInferenceSchedulerArn">isValidInferenceSchedulerArn</a></code> | Validates whether a string is a valid ARN for the inference-scheduler resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidLabelGroupArn">isValidLabelGroupArn</a></code> | Validates whether a string is a valid ARN for the label-group resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelArn">isValidModelArn</a></code> | Validates whether a string is a valid ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelVersionArn">isValidModelVersionArn</a></code> | Validates whether a string is a valid ARN for the model-version resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.labelGroup">labelGroup</a></code> | Builds an ARN for the label-group resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.model">model</a></code> | Builds an ARN for the model resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.modelVersion">modelVersion</a></code> | Builds an ARN for the model-version resource. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseInferenceSchedulerArn">parseInferenceSchedulerArn</a></code> | Parses a inference-scheduler ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseLabelGroupArn">parseLabelGroupArn</a></code> | Parses a label-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelArn">parseModelArn</a></code> | Parses a model ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelVersionArn">parseModelVersionArn</a></code> | Parses a model-version ARN into its components. |

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.dataset"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.dataset(props: LookoutEquipmentDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentDatasetArnProps">LookoutEquipmentDatasetArnProps</a>

---

##### `inferenceScheduler` <a name="inferenceScheduler" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.inferenceScheduler"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.inferenceScheduler(props: LookoutEquipmentInferenceSchedulerArnProps)
```

Builds an ARN for the inference-scheduler resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.inferenceScheduler.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentInferenceSchedulerArnProps">LookoutEquipmentInferenceSchedulerArnProps</a>

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidDatasetArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInferenceSchedulerArn` <a name="isValidInferenceSchedulerArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidInferenceSchedulerArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.isValidInferenceSchedulerArn(arn: string)
```

Validates whether a string is a valid ARN for the inference-scheduler resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidInferenceSchedulerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLabelGroupArn` <a name="isValidLabelGroupArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidLabelGroupArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.isValidLabelGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the label-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidLabelGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelArn` <a name="isValidModelArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.isValidModelArn(arn: string)
```

Validates whether a string is a valid ARN for the model resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelVersionArn` <a name="isValidModelVersionArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelVersionArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.isValidModelVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the model-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.isValidModelVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `labelGroup` <a name="labelGroup" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.labelGroup"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.labelGroup(props: LookoutEquipmentLabelGroupArnProps)
```

Builds an ARN for the label-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.labelGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentLabelGroupArnProps">LookoutEquipmentLabelGroupArnProps</a>

---

##### `model` <a name="model" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.model"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.model(props: LookoutEquipmentModelArnProps)
```

Builds an ARN for the model resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.model.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelArnProps">LookoutEquipmentModelArnProps</a>

---

##### `modelVersion` <a name="modelVersion" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.modelVersion"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.modelVersion(props: LookoutEquipmentModelVersionArnProps)
```

Builds an ARN for the model-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.modelVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutequipment.LookoutEquipmentModelVersionArnProps">LookoutEquipmentModelVersionArnProps</a>

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseDatasetArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInferenceSchedulerArn` <a name="parseInferenceSchedulerArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseInferenceSchedulerArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.parseInferenceSchedulerArn(arn: string)
```

Parses a inference-scheduler ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseInferenceSchedulerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLabelGroupArn` <a name="parseLabelGroupArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseLabelGroupArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.parseLabelGroupArn(arn: string)
```

Parses a label-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseLabelGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelArn` <a name="parseModelArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.parseModelArn(arn: string)
```

Parses a model ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelVersionArn` <a name="parseModelVersionArn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelVersionArn"></a>

```typescript
import { lookoutequipment } from '@cdk_utils/iam'

lookoutequipment.LookoutEquipmentResources.parseModelVersionArn(arn: string)
```

Parses a model-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutequipment.LookoutEquipmentResources.parseModelVersionArn.parameter.arn"></a>

- *Type:* string

---




