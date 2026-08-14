# `scn` Submodule <a name="`scn` Submodule" id="@cdk_utils/iam.scn"></a>


## Structs <a name="Structs" id="Structs"></a>

### ScnBillOfMaterialsImportJobArnComponents <a name="ScnBillOfMaterialsImportJobArnComponents" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents"></a>

Parsed components of a bill-of-materials-import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnBillOfMaterialsImportJobArnComponents: scn.ScnBillOfMaterialsImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ScnBillOfMaterialsImportJobArnProps <a name="ScnBillOfMaterialsImportJobArnProps" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps"></a>

Properties for building a bill-of-materials-import-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnBillOfMaterialsImportJobArnProps: scn.ScnBillOfMaterialsImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ScnDataIntegrationFlowArnComponents <a name="ScnDataIntegrationFlowArnComponents" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents"></a>

Parsed components of a data-integration-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnDataIntegrationFlowArnComponents: scn.ScnDataIntegrationFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ScnDataIntegrationFlowArnProps <a name="ScnDataIntegrationFlowArnProps" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps"></a>

Properties for building a data-integration-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnDataIntegrationFlowArnProps: scn.ScnDataIntegrationFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ScnDatasetArnComponents <a name="ScnDatasetArnComponents" id="@cdk_utils/iam.scn.ScnDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnDatasetArnComponents: scn.ScnDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scn.ScnDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ScnDatasetArnProps <a name="ScnDatasetArnProps" id="@cdk_utils/iam.scn.ScnDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnDatasetArnProps.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnDatasetArnProps: scn.ScnDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scn.ScnDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ScnInstanceArnComponents <a name="ScnInstanceArnComponents" id="@cdk_utils/iam.scn.ScnInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnInstanceArnComponents.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnInstanceArnComponents: scn.ScnInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scn.ScnInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scn.ScnInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ScnInstanceArnProps <a name="ScnInstanceArnProps" id="@cdk_utils/iam.scn.ScnInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnInstanceArnProps.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnInstanceArnProps: scn.ScnInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scn.ScnInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scn.ScnInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ScnNamespaceArnComponents <a name="ScnNamespaceArnComponents" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents"></a>

Parsed components of a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnNamespaceArnComponents: scn.ScnNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.scn.ScnNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ScnNamespaceArnProps <a name="ScnNamespaceArnProps" id="@cdk_utils/iam.scn.ScnNamespaceArnProps"></a>

Properties for building a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

const scnNamespaceArnProps: scn.ScnNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps.property.namespace">namespace</a></code> | <code>string</code> | The Namespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The Namespace component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.scn.ScnNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ScnActions <a name="ScnActions" id="@cdk_utils/iam.scn.ScnActions"></a>

IAM action constants for the scn service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scn.ScnActions.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

new scn.ScnActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetBillOfMaterialsImportJob">actionGetBillOfMaterialsImportJob</a></code> | <code>string</code> | [Read] scn:GetBillOfMaterialsImportJob. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationEvent">actionGetDataIntegrationEvent</a></code> | <code>string</code> | [Read] scn:GetDataIntegrationEvent. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationFlow">actionGetDataIntegrationFlow</a></code> | <code>string</code> | [Read] scn:GetDataIntegrationFlow. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationFlowExecution">actionGetDataIntegrationFlowExecution</a></code> | <code>string</code> | [Read] scn:GetDataIntegrationFlowExecution. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetDataLakeDataset">actionGetDataLakeDataset</a></code> | <code>string</code> | [Read] scn:GetDataLakeDataset. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetDataLakeNamespace">actionGetDataLakeNamespace</a></code> | <code>string</code> | [Read] scn:GetDataLakeNamespace. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.actionGetInstance">actionGetInstance</a></code> | <code>string</code> | [Read] scn:GetInstance. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.AssignAdminPermissionsToUser">AssignAdminPermissionsToUser</a></code> | <code>string</code> | [Write] scn:AssignAdminPermissionsToUser. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateBillOfMaterialsImportJob">CreateBillOfMaterialsImportJob</a></code> | <code>string</code> | [Write] scn:CreateBillOfMaterialsImportJob. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateDataIntegrationFlow">CreateDataIntegrationFlow</a></code> | <code>string</code> | [Write] scn:CreateDataIntegrationFlow. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateDataLakeDataset">CreateDataLakeDataset</a></code> | <code>string</code> | [Write] scn:CreateDataLakeDataset. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateDataLakeNamespace">CreateDataLakeNamespace</a></code> | <code>string</code> | [Write] scn:CreateDataLakeNamespace. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateInstance">CreateInstance</a></code> | <code>string</code> | [Write] scn:CreateInstance. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.CreateSSOApplication">CreateSSOApplication</a></code> | <code>string</code> | [Write] scn:CreateSSOApplication. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DeleteDataIntegrationFlow">DeleteDataIntegrationFlow</a></code> | <code>string</code> | [Write] scn:DeleteDataIntegrationFlow. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DeleteDataLakeDataset">DeleteDataLakeDataset</a></code> | <code>string</code> | [Write] scn:DeleteDataLakeDataset. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DeleteDataLakeNamespace">DeleteDataLakeNamespace</a></code> | <code>string</code> | [Write] scn:DeleteDataLakeNamespace. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] scn:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DeleteSSOApplication">DeleteSSOApplication</a></code> | <code>string</code> | [Write] scn:DeleteSSOApplication. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.DescribeInstance">DescribeInstance</a></code> | <code>string</code> | [Read] scn:DescribeInstance. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListAdminUsers">ListAdminUsers</a></code> | <code>string</code> | [List] scn:ListAdminUsers. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationEvents">ListDataIntegrationEvents</a></code> | <code>string</code> | [List] scn:ListDataIntegrationEvents. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationFlowExecutions">ListDataIntegrationFlowExecutions</a></code> | <code>string</code> | [List] scn:ListDataIntegrationFlowExecutions. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationFlows">ListDataIntegrationFlows</a></code> | <code>string</code> | [List] scn:ListDataIntegrationFlows. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListDataLakeDatasets">ListDataLakeDatasets</a></code> | <code>string</code> | [List] scn:ListDataLakeDatasets. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListDataLakeNamespaces">ListDataLakeNamespaces</a></code> | <code>string</code> | [List] scn:ListDataLakeNamespaces. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [List] scn:ListInstances. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] scn:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.RemoveAdminPermissionsForUser">RemoveAdminPermissionsForUser</a></code> | <code>string</code> | [Write] scn:RemoveAdminPermissionsForUser. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.SendDataIntegrationEvent">SendDataIntegrationEvent</a></code> | <code>string</code> | [Write] scn:SendDataIntegrationEvent. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] scn:TagResource. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] scn:UntagResource. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.UpdateDataIntegrationFlow">UpdateDataIntegrationFlow</a></code> | <code>string</code> | [Write] scn:UpdateDataIntegrationFlow. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.UpdateDataLakeDataset">UpdateDataLakeDataset</a></code> | <code>string</code> | [Write] scn:UpdateDataLakeDataset. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.UpdateDataLakeNamespace">UpdateDataLakeNamespace</a></code> | <code>string</code> | [Write] scn:UpdateDataLakeNamespace. |
| <code><a href="#@cdk_utils/iam.scn.ScnActions.property.UpdateInstance">UpdateInstance</a></code> | <code>string</code> | [Write] scn:UpdateInstance. |

---

##### `actionGetBillOfMaterialsImportJob`<sup>Required</sup> <a name="actionGetBillOfMaterialsImportJob" id="@cdk_utils/iam.scn.ScnActions.property.actionGetBillOfMaterialsImportJob"></a>

```typescript
public readonly actionGetBillOfMaterialsImportJob: string;
```

- *Type:* string

[Read] scn:GetBillOfMaterialsImportJob.

---

##### `actionGetDataIntegrationEvent`<sup>Required</sup> <a name="actionGetDataIntegrationEvent" id="@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationEvent"></a>

```typescript
public readonly actionGetDataIntegrationEvent: string;
```

- *Type:* string

[Read] scn:GetDataIntegrationEvent.

---

##### `actionGetDataIntegrationFlow`<sup>Required</sup> <a name="actionGetDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationFlow"></a>

```typescript
public readonly actionGetDataIntegrationFlow: string;
```

- *Type:* string

[Read] scn:GetDataIntegrationFlow.

---

##### `actionGetDataIntegrationFlowExecution`<sup>Required</sup> <a name="actionGetDataIntegrationFlowExecution" id="@cdk_utils/iam.scn.ScnActions.property.actionGetDataIntegrationFlowExecution"></a>

```typescript
public readonly actionGetDataIntegrationFlowExecution: string;
```

- *Type:* string

[Read] scn:GetDataIntegrationFlowExecution.

---

##### `actionGetDataLakeDataset`<sup>Required</sup> <a name="actionGetDataLakeDataset" id="@cdk_utils/iam.scn.ScnActions.property.actionGetDataLakeDataset"></a>

```typescript
public readonly actionGetDataLakeDataset: string;
```

- *Type:* string

[Read] scn:GetDataLakeDataset.

---

##### `actionGetDataLakeNamespace`<sup>Required</sup> <a name="actionGetDataLakeNamespace" id="@cdk_utils/iam.scn.ScnActions.property.actionGetDataLakeNamespace"></a>

```typescript
public readonly actionGetDataLakeNamespace: string;
```

- *Type:* string

[Read] scn:GetDataLakeNamespace.

---

##### `actionGetInstance`<sup>Required</sup> <a name="actionGetInstance" id="@cdk_utils/iam.scn.ScnActions.property.actionGetInstance"></a>

```typescript
public readonly actionGetInstance: string;
```

- *Type:* string

[Read] scn:GetInstance.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.scn.ScnActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.scn.ScnActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.scn.ScnActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.scn.ScnActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.scn.ScnActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssignAdminPermissionsToUser`<sup>Required</sup> <a name="AssignAdminPermissionsToUser" id="@cdk_utils/iam.scn.ScnActions.property.AssignAdminPermissionsToUser"></a>

```typescript
public readonly AssignAdminPermissionsToUser: string;
```

- *Type:* string

[Write] scn:AssignAdminPermissionsToUser.

---

##### `CreateBillOfMaterialsImportJob`<sup>Required</sup> <a name="CreateBillOfMaterialsImportJob" id="@cdk_utils/iam.scn.ScnActions.property.CreateBillOfMaterialsImportJob"></a>

```typescript
public readonly CreateBillOfMaterialsImportJob: string;
```

- *Type:* string

[Write] scn:CreateBillOfMaterialsImportJob.

---

##### `CreateDataIntegrationFlow`<sup>Required</sup> <a name="CreateDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnActions.property.CreateDataIntegrationFlow"></a>

```typescript
public readonly CreateDataIntegrationFlow: string;
```

- *Type:* string

[Write] scn:CreateDataIntegrationFlow.

---

##### `CreateDataLakeDataset`<sup>Required</sup> <a name="CreateDataLakeDataset" id="@cdk_utils/iam.scn.ScnActions.property.CreateDataLakeDataset"></a>

```typescript
public readonly CreateDataLakeDataset: string;
```

- *Type:* string

[Write] scn:CreateDataLakeDataset.

---

##### `CreateDataLakeNamespace`<sup>Required</sup> <a name="CreateDataLakeNamespace" id="@cdk_utils/iam.scn.ScnActions.property.CreateDataLakeNamespace"></a>

```typescript
public readonly CreateDataLakeNamespace: string;
```

- *Type:* string

[Write] scn:CreateDataLakeNamespace.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.scn.ScnActions.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string;
```

- *Type:* string

[Write] scn:CreateInstance.

---

##### `CreateSSOApplication`<sup>Required</sup> <a name="CreateSSOApplication" id="@cdk_utils/iam.scn.ScnActions.property.CreateSSOApplication"></a>

```typescript
public readonly CreateSSOApplication: string;
```

- *Type:* string

[Write] scn:CreateSSOApplication.

---

##### `DeleteDataIntegrationFlow`<sup>Required</sup> <a name="DeleteDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnActions.property.DeleteDataIntegrationFlow"></a>

```typescript
public readonly DeleteDataIntegrationFlow: string;
```

- *Type:* string

[Write] scn:DeleteDataIntegrationFlow.

---

##### `DeleteDataLakeDataset`<sup>Required</sup> <a name="DeleteDataLakeDataset" id="@cdk_utils/iam.scn.ScnActions.property.DeleteDataLakeDataset"></a>

```typescript
public readonly DeleteDataLakeDataset: string;
```

- *Type:* string

[Write] scn:DeleteDataLakeDataset.

---

##### `DeleteDataLakeNamespace`<sup>Required</sup> <a name="DeleteDataLakeNamespace" id="@cdk_utils/iam.scn.ScnActions.property.DeleteDataLakeNamespace"></a>

```typescript
public readonly DeleteDataLakeNamespace: string;
```

- *Type:* string

[Write] scn:DeleteDataLakeNamespace.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.scn.ScnActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] scn:DeleteInstance.

---

##### `DeleteSSOApplication`<sup>Required</sup> <a name="DeleteSSOApplication" id="@cdk_utils/iam.scn.ScnActions.property.DeleteSSOApplication"></a>

```typescript
public readonly DeleteSSOApplication: string;
```

- *Type:* string

[Write] scn:DeleteSSOApplication.

---

##### `DescribeInstance`<sup>Required</sup> <a name="DescribeInstance" id="@cdk_utils/iam.scn.ScnActions.property.DescribeInstance"></a>

```typescript
public readonly DescribeInstance: string;
```

- *Type:* string

[Read] scn:DescribeInstance.

---

##### `ListAdminUsers`<sup>Required</sup> <a name="ListAdminUsers" id="@cdk_utils/iam.scn.ScnActions.property.ListAdminUsers"></a>

```typescript
public readonly ListAdminUsers: string;
```

- *Type:* string

[List] scn:ListAdminUsers.

---

##### `ListDataIntegrationEvents`<sup>Required</sup> <a name="ListDataIntegrationEvents" id="@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationEvents"></a>

```typescript
public readonly ListDataIntegrationEvents: string;
```

- *Type:* string

[List] scn:ListDataIntegrationEvents.

---

##### `ListDataIntegrationFlowExecutions`<sup>Required</sup> <a name="ListDataIntegrationFlowExecutions" id="@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationFlowExecutions"></a>

```typescript
public readonly ListDataIntegrationFlowExecutions: string;
```

- *Type:* string

[List] scn:ListDataIntegrationFlowExecutions.

---

##### `ListDataIntegrationFlows`<sup>Required</sup> <a name="ListDataIntegrationFlows" id="@cdk_utils/iam.scn.ScnActions.property.ListDataIntegrationFlows"></a>

```typescript
public readonly ListDataIntegrationFlows: string;
```

- *Type:* string

[List] scn:ListDataIntegrationFlows.

---

##### `ListDataLakeDatasets`<sup>Required</sup> <a name="ListDataLakeDatasets" id="@cdk_utils/iam.scn.ScnActions.property.ListDataLakeDatasets"></a>

```typescript
public readonly ListDataLakeDatasets: string;
```

- *Type:* string

[List] scn:ListDataLakeDatasets.

---

##### `ListDataLakeNamespaces`<sup>Required</sup> <a name="ListDataLakeNamespaces" id="@cdk_utils/iam.scn.ScnActions.property.ListDataLakeNamespaces"></a>

```typescript
public readonly ListDataLakeNamespaces: string;
```

- *Type:* string

[List] scn:ListDataLakeNamespaces.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.scn.ScnActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[List] scn:ListInstances.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.scn.ScnActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] scn:ListTagsForResource.

---

##### `RemoveAdminPermissionsForUser`<sup>Required</sup> <a name="RemoveAdminPermissionsForUser" id="@cdk_utils/iam.scn.ScnActions.property.RemoveAdminPermissionsForUser"></a>

```typescript
public readonly RemoveAdminPermissionsForUser: string;
```

- *Type:* string

[Write] scn:RemoveAdminPermissionsForUser.

---

##### `SendDataIntegrationEvent`<sup>Required</sup> <a name="SendDataIntegrationEvent" id="@cdk_utils/iam.scn.ScnActions.property.SendDataIntegrationEvent"></a>

```typescript
public readonly SendDataIntegrationEvent: string;
```

- *Type:* string

[Write] scn:SendDataIntegrationEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.scn.ScnActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.scn.ScnActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] scn:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.scn.ScnActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] scn:UntagResource.

---

##### `UpdateDataIntegrationFlow`<sup>Required</sup> <a name="UpdateDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnActions.property.UpdateDataIntegrationFlow"></a>

```typescript
public readonly UpdateDataIntegrationFlow: string;
```

- *Type:* string

[Write] scn:UpdateDataIntegrationFlow.

---

##### `UpdateDataLakeDataset`<sup>Required</sup> <a name="UpdateDataLakeDataset" id="@cdk_utils/iam.scn.ScnActions.property.UpdateDataLakeDataset"></a>

```typescript
public readonly UpdateDataLakeDataset: string;
```

- *Type:* string

[Write] scn:UpdateDataLakeDataset.

---

##### `UpdateDataLakeNamespace`<sup>Required</sup> <a name="UpdateDataLakeNamespace" id="@cdk_utils/iam.scn.ScnActions.property.UpdateDataLakeNamespace"></a>

```typescript
public readonly UpdateDataLakeNamespace: string;
```

- *Type:* string

[Write] scn:UpdateDataLakeNamespace.

---

##### `UpdateInstance`<sup>Required</sup> <a name="UpdateInstance" id="@cdk_utils/iam.scn.ScnActions.property.UpdateInstance"></a>

```typescript
public readonly UpdateInstance: string;
```

- *Type:* string

[Write] scn:UpdateInstance.

---

### ScnConditions <a name="ScnConditions" id="@cdk_utils/iam.scn.ScnConditions"></a>

Condition key constants and builders for scn.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scn.ScnConditions.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

new scn.ScnConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.scn.ScnConditions.requestTag"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.scn.ScnConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.scn.ScnConditions.resourceTag"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.scn.ScnConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.scn.ScnConditions.tagKeys"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.scn.ScnConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.CreateDataIntegrationFlowConditionKeys">CreateDataIntegrationFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataIntegrationFlow action. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.CreateDataLakeDatasetConditionKeys">CreateDataLakeDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataLakeDataset action. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.CreateDataLakeNamespaceConditionKeys">CreateDataLakeNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataLakeNamespace action. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.CreateInstanceConditionKeys">CreateInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstance action. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.scn.ScnConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.scn.ScnConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.scn.ScnConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.scn.ScnConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDataIntegrationFlowConditionKeys`<sup>Required</sup> <a name="CreateDataIntegrationFlowConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.CreateDataIntegrationFlowConditionKeys"></a>

```typescript
public readonly CreateDataIntegrationFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataIntegrationFlow action.

---

##### `CreateDataLakeDatasetConditionKeys`<sup>Required</sup> <a name="CreateDataLakeDatasetConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.CreateDataLakeDatasetConditionKeys"></a>

```typescript
public readonly CreateDataLakeDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataLakeDataset action.

---

##### `CreateDataLakeNamespaceConditionKeys`<sup>Required</sup> <a name="CreateDataLakeNamespaceConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.CreateDataLakeNamespaceConditionKeys"></a>

```typescript
public readonly CreateDataLakeNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataLakeNamespace action.

---

##### `CreateInstanceConditionKeys`<sup>Required</sup> <a name="CreateInstanceConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.CreateInstanceConditionKeys"></a>

```typescript
public readonly CreateInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstance action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.scn.ScnConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ScnOperations <a name="ScnOperations" id="@cdk_utils/iam.scn.ScnOperations"></a>

API operation to required IAM actions mapping for scn.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scn.ScnOperations.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

new scn.ScnOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.CreateBillOfMaterialsImportJob">CreateBillOfMaterialsImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBillOfMaterialsImportJob API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.CreateDataIntegrationFlow">CreateDataIntegrationFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateDataIntegrationFlow API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.CreateDataLakeDataset">CreateDataLakeDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataLakeDataset API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.CreateDataLakeNamespace">CreateDataLakeNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateDataLakeNamespace API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.CreateInstance">CreateInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateInstance API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.DeleteDataIntegrationFlow">DeleteDataIntegrationFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataIntegrationFlow API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.DeleteDataLakeDataset">DeleteDataLakeDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataLakeDataset API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.DeleteDataLakeNamespace">DeleteDataLakeNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataLakeNamespace API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.DeleteInstance">DeleteInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstance API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationEvents">ListDataIntegrationEvents</a></code> | <code>string[]</code> | IAM actions required for the ListDataIntegrationEvents API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationFlowExecutions">ListDataIntegrationFlowExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListDataIntegrationFlowExecutions API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationFlows">ListDataIntegrationFlows</a></code> | <code>string[]</code> | IAM actions required for the ListDataIntegrationFlows API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListDataLakeDatasets">ListDataLakeDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDataLakeDatasets API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListDataLakeNamespaces">ListDataLakeNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListDataLakeNamespaces API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetBillOfMaterialsImportJob">opGetBillOfMaterialsImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetBillOfMaterialsImportJob API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationEvent">opGetDataIntegrationEvent</a></code> | <code>string[]</code> | IAM actions required for the GetDataIntegrationEvent API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationFlow">opGetDataIntegrationFlow</a></code> | <code>string[]</code> | IAM actions required for the GetDataIntegrationFlow API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationFlowExecution">opGetDataIntegrationFlowExecution</a></code> | <code>string[]</code> | IAM actions required for the GetDataIntegrationFlowExecution API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetDataLakeDataset">opGetDataLakeDataset</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeDataset API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetDataLakeNamespace">opGetDataLakeNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetDataLakeNamespace API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.opGetInstance">opGetInstance</a></code> | <code>string[]</code> | IAM actions required for the GetInstance API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.SendDataIntegrationEvent">SendDataIntegrationEvent</a></code> | <code>string[]</code> | IAM actions required for the SendDataIntegrationEvent API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.UpdateDataIntegrationFlow">UpdateDataIntegrationFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataIntegrationFlow API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.UpdateDataLakeDataset">UpdateDataLakeDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataLakeDataset API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.UpdateDataLakeNamespace">UpdateDataLakeNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataLakeNamespace API call. |
| <code><a href="#@cdk_utils/iam.scn.ScnOperations.property.UpdateInstance">UpdateInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstance API call. |

---

##### `CreateBillOfMaterialsImportJob`<sup>Required</sup> <a name="CreateBillOfMaterialsImportJob" id="@cdk_utils/iam.scn.ScnOperations.property.CreateBillOfMaterialsImportJob"></a>

```typescript
public readonly CreateBillOfMaterialsImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillOfMaterialsImportJob API call.

---

##### `CreateDataIntegrationFlow`<sup>Required</sup> <a name="CreateDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnOperations.property.CreateDataIntegrationFlow"></a>

```typescript
public readonly CreateDataIntegrationFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataIntegrationFlow API call.

---

##### `CreateDataLakeDataset`<sup>Required</sup> <a name="CreateDataLakeDataset" id="@cdk_utils/iam.scn.ScnOperations.property.CreateDataLakeDataset"></a>

```typescript
public readonly CreateDataLakeDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataLakeDataset API call.

---

##### `CreateDataLakeNamespace`<sup>Required</sup> <a name="CreateDataLakeNamespace" id="@cdk_utils/iam.scn.ScnOperations.property.CreateDataLakeNamespace"></a>

```typescript
public readonly CreateDataLakeNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataLakeNamespace API call.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.scn.ScnOperations.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstance API call.

---

##### `DeleteDataIntegrationFlow`<sup>Required</sup> <a name="DeleteDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnOperations.property.DeleteDataIntegrationFlow"></a>

```typescript
public readonly DeleteDataIntegrationFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataIntegrationFlow API call.

---

##### `DeleteDataLakeDataset`<sup>Required</sup> <a name="DeleteDataLakeDataset" id="@cdk_utils/iam.scn.ScnOperations.property.DeleteDataLakeDataset"></a>

```typescript
public readonly DeleteDataLakeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataLakeDataset API call.

---

##### `DeleteDataLakeNamespace`<sup>Required</sup> <a name="DeleteDataLakeNamespace" id="@cdk_utils/iam.scn.ScnOperations.property.DeleteDataLakeNamespace"></a>

```typescript
public readonly DeleteDataLakeNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataLakeNamespace API call.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.scn.ScnOperations.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstance API call.

---

##### `ListDataIntegrationEvents`<sup>Required</sup> <a name="ListDataIntegrationEvents" id="@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationEvents"></a>

```typescript
public readonly ListDataIntegrationEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIntegrationEvents API call.

---

##### `ListDataIntegrationFlowExecutions`<sup>Required</sup> <a name="ListDataIntegrationFlowExecutions" id="@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationFlowExecutions"></a>

```typescript
public readonly ListDataIntegrationFlowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIntegrationFlowExecutions API call.

---

##### `ListDataIntegrationFlows`<sup>Required</sup> <a name="ListDataIntegrationFlows" id="@cdk_utils/iam.scn.ScnOperations.property.ListDataIntegrationFlows"></a>

```typescript
public readonly ListDataIntegrationFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListDataIntegrationFlows API call.

---

##### `ListDataLakeDatasets`<sup>Required</sup> <a name="ListDataLakeDatasets" id="@cdk_utils/iam.scn.ScnOperations.property.ListDataLakeDatasets"></a>

```typescript
public readonly ListDataLakeDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDataLakeDatasets API call.

---

##### `ListDataLakeNamespaces`<sup>Required</sup> <a name="ListDataLakeNamespaces" id="@cdk_utils/iam.scn.ScnOperations.property.ListDataLakeNamespaces"></a>

```typescript
public readonly ListDataLakeNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListDataLakeNamespaces API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.scn.ScnOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.scn.ScnOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBillOfMaterialsImportJob`<sup>Required</sup> <a name="opGetBillOfMaterialsImportJob" id="@cdk_utils/iam.scn.ScnOperations.property.opGetBillOfMaterialsImportJob"></a>

```typescript
public readonly opGetBillOfMaterialsImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetBillOfMaterialsImportJob API call.

---

##### `opGetDataIntegrationEvent`<sup>Required</sup> <a name="opGetDataIntegrationEvent" id="@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationEvent"></a>

```typescript
public readonly opGetDataIntegrationEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetDataIntegrationEvent API call.

---

##### `opGetDataIntegrationFlow`<sup>Required</sup> <a name="opGetDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationFlow"></a>

```typescript
public readonly opGetDataIntegrationFlow: string[];
```

- *Type:* string[]

IAM actions required for the GetDataIntegrationFlow API call.

---

##### `opGetDataIntegrationFlowExecution`<sup>Required</sup> <a name="opGetDataIntegrationFlowExecution" id="@cdk_utils/iam.scn.ScnOperations.property.opGetDataIntegrationFlowExecution"></a>

```typescript
public readonly opGetDataIntegrationFlowExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetDataIntegrationFlowExecution API call.

---

##### `opGetDataLakeDataset`<sup>Required</sup> <a name="opGetDataLakeDataset" id="@cdk_utils/iam.scn.ScnOperations.property.opGetDataLakeDataset"></a>

```typescript
public readonly opGetDataLakeDataset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeDataset API call.

---

##### `opGetDataLakeNamespace`<sup>Required</sup> <a name="opGetDataLakeNamespace" id="@cdk_utils/iam.scn.ScnOperations.property.opGetDataLakeNamespace"></a>

```typescript
public readonly opGetDataLakeNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetDataLakeNamespace API call.

---

##### `opGetInstance`<sup>Required</sup> <a name="opGetInstance" id="@cdk_utils/iam.scn.ScnOperations.property.opGetInstance"></a>

```typescript
public readonly opGetInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetInstance API call.

---

##### `SendDataIntegrationEvent`<sup>Required</sup> <a name="SendDataIntegrationEvent" id="@cdk_utils/iam.scn.ScnOperations.property.SendDataIntegrationEvent"></a>

```typescript
public readonly SendDataIntegrationEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendDataIntegrationEvent API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.scn.ScnOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.scn.ScnOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDataIntegrationFlow`<sup>Required</sup> <a name="UpdateDataIntegrationFlow" id="@cdk_utils/iam.scn.ScnOperations.property.UpdateDataIntegrationFlow"></a>

```typescript
public readonly UpdateDataIntegrationFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataIntegrationFlow API call.

---

##### `UpdateDataLakeDataset`<sup>Required</sup> <a name="UpdateDataLakeDataset" id="@cdk_utils/iam.scn.ScnOperations.property.UpdateDataLakeDataset"></a>

```typescript
public readonly UpdateDataLakeDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataLakeDataset API call.

---

##### `UpdateDataLakeNamespace`<sup>Required</sup> <a name="UpdateDataLakeNamespace" id="@cdk_utils/iam.scn.ScnOperations.property.UpdateDataLakeNamespace"></a>

```typescript
public readonly UpdateDataLakeNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataLakeNamespace API call.

---

##### `UpdateInstance`<sup>Required</sup> <a name="UpdateInstance" id="@cdk_utils/iam.scn.ScnOperations.property.UpdateInstance"></a>

```typescript
public readonly UpdateInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstance API call.

---

### ScnResources <a name="ScnResources" id="@cdk_utils/iam.scn.ScnResources"></a>

ARN builders, validators, and parsers for scn resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.scn.ScnResources.Initializer"></a>

```typescript
import { scn } from '@cdk_utils/iam'

new scn.ScnResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.billOfMaterialsImportJob">billOfMaterialsImportJob</a></code> | Builds an ARN for the bill-of-materials-import-job resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.dataIntegrationFlow">dataIntegrationFlow</a></code> | Builds an ARN for the data-integration-flow resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.isValidBillOfMaterialsImportJobArn">isValidBillOfMaterialsImportJobArn</a></code> | Validates whether a string is a valid ARN for the bill-of-materials-import-job resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.isValidDataIntegrationFlowArn">isValidDataIntegrationFlowArn</a></code> | Validates whether a string is a valid ARN for the data-integration-flow resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.isValidNamespaceArn">isValidNamespaceArn</a></code> | Validates whether a string is a valid ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.namespace">namespace</a></code> | Builds an ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.parseBillOfMaterialsImportJobArn">parseBillOfMaterialsImportJobArn</a></code> | Parses a bill-of-materials-import-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.parseDataIntegrationFlowArn">parseDataIntegrationFlowArn</a></code> | Parses a data-integration-flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.scn.ScnResources.parseNamespaceArn">parseNamespaceArn</a></code> | Parses a namespace ARN into its components. |

---

##### `billOfMaterialsImportJob` <a name="billOfMaterialsImportJob" id="@cdk_utils/iam.scn.ScnResources.billOfMaterialsImportJob"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.billOfMaterialsImportJob(props: ScnBillOfMaterialsImportJobArnProps)
```

Builds an ARN for the bill-of-materials-import-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scn.ScnResources.billOfMaterialsImportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scn.ScnBillOfMaterialsImportJobArnProps">ScnBillOfMaterialsImportJobArnProps</a>

---

##### `dataIntegrationFlow` <a name="dataIntegrationFlow" id="@cdk_utils/iam.scn.ScnResources.dataIntegrationFlow"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.dataIntegrationFlow(props: ScnDataIntegrationFlowArnProps)
```

Builds an ARN for the data-integration-flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scn.ScnResources.dataIntegrationFlow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scn.ScnDataIntegrationFlowArnProps">ScnDataIntegrationFlowArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.scn.ScnResources.dataset"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.dataset(props: ScnDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scn.ScnResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scn.ScnDatasetArnProps">ScnDatasetArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.scn.ScnResources.instance"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.instance(props: ScnInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scn.ScnResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scn.ScnInstanceArnProps">ScnInstanceArnProps</a>

---

##### `isValidBillOfMaterialsImportJobArn` <a name="isValidBillOfMaterialsImportJobArn" id="@cdk_utils/iam.scn.ScnResources.isValidBillOfMaterialsImportJobArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.isValidBillOfMaterialsImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the bill-of-materials-import-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.isValidBillOfMaterialsImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataIntegrationFlowArn` <a name="isValidDataIntegrationFlowArn" id="@cdk_utils/iam.scn.ScnResources.isValidDataIntegrationFlowArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.isValidDataIntegrationFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the data-integration-flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.isValidDataIntegrationFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.scn.ScnResources.isValidDatasetArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.scn.ScnResources.isValidInstanceArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNamespaceArn` <a name="isValidNamespaceArn" id="@cdk_utils/iam.scn.ScnResources.isValidNamespaceArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.isValidNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the namespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.isValidNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.scn.ScnResources.namespace"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.namespace(props: ScnNamespaceArnProps)
```

Builds an ARN for the namespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.scn.ScnResources.namespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.scn.ScnNamespaceArnProps">ScnNamespaceArnProps</a>

---

##### `parseBillOfMaterialsImportJobArn` <a name="parseBillOfMaterialsImportJobArn" id="@cdk_utils/iam.scn.ScnResources.parseBillOfMaterialsImportJobArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.parseBillOfMaterialsImportJobArn(arn: string)
```

Parses a bill-of-materials-import-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.parseBillOfMaterialsImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataIntegrationFlowArn` <a name="parseDataIntegrationFlowArn" id="@cdk_utils/iam.scn.ScnResources.parseDataIntegrationFlowArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.parseDataIntegrationFlowArn(arn: string)
```

Parses a data-integration-flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.parseDataIntegrationFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.scn.ScnResources.parseDatasetArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.scn.ScnResources.parseInstanceArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNamespaceArn` <a name="parseNamespaceArn" id="@cdk_utils/iam.scn.ScnResources.parseNamespaceArn"></a>

```typescript
import { scn } from '@cdk_utils/iam'

scn.ScnResources.parseNamespaceArn(arn: string)
```

Parses a namespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.scn.ScnResources.parseNamespaceArn.parameter.arn"></a>

- *Type:* string

---




