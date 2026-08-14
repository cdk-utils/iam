# `batch` Submodule <a name="`batch` Submodule" id="@cdk_utils/iam.batch"></a>


## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentArnComponents <a name="BatchComputeEnvironmentArnComponents" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents"></a>

Parsed components of a compute-environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchComputeEnvironmentArnComponents: batch.BatchComputeEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | The ComputeEnvironmentName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

The ComputeEnvironmentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchComputeEnvironmentArnProps <a name="BatchComputeEnvironmentArnProps" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps"></a>

Properties for building a compute-environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchComputeEnvironmentArnProps: batch.BatchComputeEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | The ComputeEnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

The ComputeEnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchConsumableResourceArnComponents <a name="BatchConsumableResourceArnComponents" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents"></a>

Parsed components of a consumable-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchConsumableResourceArnComponents: batch.BatchConsumableResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.consumableResourceName">consumableResourceName</a></code> | <code>string</code> | The ConsumableResourceName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `consumableResourceName`<sup>Required</sup> <a name="consumableResourceName" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.consumableResourceName"></a>

```typescript
public readonly consumableResourceName: string;
```

- *Type:* string

The ConsumableResourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchConsumableResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchConsumableResourceArnProps <a name="BatchConsumableResourceArnProps" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps"></a>

Properties for building a consumable-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchConsumableResourceArnProps: batch.BatchConsumableResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.consumableResourceName">consumableResourceName</a></code> | <code>string</code> | The ConsumableResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `consumableResourceName`<sup>Required</sup> <a name="consumableResourceName" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.consumableResourceName"></a>

```typescript
public readonly consumableResourceName: string;
```

- *Type:* string

The ConsumableResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchConsumableResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchJobArnComponents <a name="BatchJobArnComponents" id="@cdk_utils/iam.batch.BatchJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobArnComponents: batch.BatchJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.batch.BatchJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchJobArnProps <a name="BatchJobArnProps" id="@cdk_utils/iam.batch.BatchJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobArnProps: batch.BatchJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.batch.BatchJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchJobDefinitionArnComponents <a name="BatchJobDefinitionArnComponents" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents"></a>

Parsed components of a job-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobDefinitionArnComponents: batch.BatchJobDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The JobDefinitionName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The JobDefinitionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchJobDefinitionArnProps <a name="BatchJobDefinitionArnProps" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps"></a>

Properties for building a job-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobDefinitionArnProps: batch.BatchJobDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The JobDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The JobDefinitionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchJobDefinitionRevisionArnComponents <a name="BatchJobDefinitionRevisionArnComponents" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents"></a>

Parsed components of a job-definition-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobDefinitionRevisionArnComponents: batch.BatchJobDefinitionRevisionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The JobDefinitionName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.revision">revision</a></code> | <code>string</code> | The Revision component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The JobDefinitionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnComponents.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The Revision component.

---

### BatchJobDefinitionRevisionArnProps <a name="BatchJobDefinitionRevisionArnProps" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps"></a>

Properties for building a job-definition-revision ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobDefinitionRevisionArnProps: batch.BatchJobDefinitionRevisionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.jobDefinitionName">jobDefinitionName</a></code> | <code>string</code> | The JobDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.revision">revision</a></code> | <code>string</code> | The Revision component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobDefinitionName`<sup>Required</sup> <a name="jobDefinitionName" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.jobDefinitionName"></a>

```typescript
public readonly jobDefinitionName: string;
```

- *Type:* string

The JobDefinitionName component of the ARN.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The Revision component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchJobQueueArnComponents <a name="BatchJobQueueArnComponents" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents"></a>

Parsed components of a job-queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobQueueArnComponents: batch.BatchJobQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | The JobQueueName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobQueueName`<sup>Required</sup> <a name="jobQueueName" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

The JobQueueName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchJobQueueArnProps <a name="BatchJobQueueArnProps" id="@cdk_utils/iam.batch.BatchJobQueueArnProps"></a>

Properties for building a job-queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchJobQueueArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchJobQueueArnProps: batch.BatchJobQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnProps.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | The JobQueueName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchJobQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobQueueName`<sup>Required</sup> <a name="jobQueueName" id="@cdk_utils/iam.batch.BatchJobQueueArnProps.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

The JobQueueName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchJobQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchJobQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchJobQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchQuotaShareArnComponents <a name="BatchQuotaShareArnComponents" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents"></a>

Parsed components of a quota-share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchQuotaShareArnComponents: batch.BatchQuotaShareArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | The JobQueueName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.quotaShareName">quotaShareName</a></code> | <code>string</code> | The QuotaShareName component. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobQueueName`<sup>Required</sup> <a name="jobQueueName" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

The JobQueueName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.quotaShareName"></a>

```typescript
public readonly quotaShareName: string;
```

- *Type:* string

The QuotaShareName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchQuotaShareArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchQuotaShareArnProps <a name="BatchQuotaShareArnProps" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps"></a>

Properties for building a quota-share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchQuotaShareArnProps: batch.BatchQuotaShareArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.jobQueueName">jobQueueName</a></code> | <code>string</code> | The JobQueueName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.quotaShareName">quotaShareName</a></code> | <code>string</code> | The QuotaShareName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobQueueName`<sup>Required</sup> <a name="jobQueueName" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.jobQueueName"></a>

```typescript
public readonly jobQueueName: string;
```

- *Type:* string

The JobQueueName component of the ARN.

---

##### `quotaShareName`<sup>Required</sup> <a name="quotaShareName" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.quotaShareName"></a>

```typescript
public readonly quotaShareName: string;
```

- *Type:* string

The QuotaShareName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchQuotaShareArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchSchedulingPolicyArnComponents <a name="BatchSchedulingPolicyArnComponents" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents"></a>

Parsed components of a scheduling-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchSchedulingPolicyArnComponents: batch.BatchSchedulingPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.schedulingPolicyName">schedulingPolicyName</a></code> | <code>string</code> | The SchedulingPolicyName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `schedulingPolicyName`<sup>Required</sup> <a name="schedulingPolicyName" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnComponents.property.schedulingPolicyName"></a>

```typescript
public readonly schedulingPolicyName: string;
```

- *Type:* string

The SchedulingPolicyName component.

---

### BatchSchedulingPolicyArnProps <a name="BatchSchedulingPolicyArnProps" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps"></a>

Properties for building a scheduling-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchSchedulingPolicyArnProps: batch.BatchSchedulingPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.schedulingPolicyName">schedulingPolicyName</a></code> | <code>string</code> | The SchedulingPolicyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `schedulingPolicyName`<sup>Required</sup> <a name="schedulingPolicyName" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.schedulingPolicyName"></a>

```typescript
public readonly schedulingPolicyName: string;
```

- *Type:* string

The SchedulingPolicyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchServiceEnvironmentArnComponents <a name="BatchServiceEnvironmentArnComponents" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents"></a>

Parsed components of a service-environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchServiceEnvironmentArnComponents: batch.BatchServiceEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.serviceEnvironmentName">serviceEnvironmentName</a></code> | <code>string</code> | The ServiceEnvironmentName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceEnvironmentName`<sup>Required</sup> <a name="serviceEnvironmentName" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnComponents.property.serviceEnvironmentName"></a>

```typescript
public readonly serviceEnvironmentName: string;
```

- *Type:* string

The ServiceEnvironmentName component.

---

### BatchServiceEnvironmentArnProps <a name="BatchServiceEnvironmentArnProps" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps"></a>

Properties for building a service-environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchServiceEnvironmentArnProps: batch.BatchServiceEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.serviceEnvironmentName">serviceEnvironmentName</a></code> | <code>string</code> | The ServiceEnvironmentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceEnvironmentName`<sup>Required</sup> <a name="serviceEnvironmentName" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.serviceEnvironmentName"></a>

```typescript
public readonly serviceEnvironmentName: string;
```

- *Type:* string

The ServiceEnvironmentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BatchServiceJobArnComponents <a name="BatchServiceJobArnComponents" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents"></a>

Parsed components of a service-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchServiceJobArnComponents: batch.BatchServiceJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.batch.BatchServiceJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BatchServiceJobArnProps <a name="BatchServiceJobArnProps" id="@cdk_utils/iam.batch.BatchServiceJobArnProps"></a>

Properties for building a service-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.batch.BatchServiceJobArnProps.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

const batchServiceJobArnProps: batch.BatchServiceJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.batch.BatchServiceJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.batch.BatchServiceJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.batch.BatchServiceJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.batch.BatchServiceJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.batch.BatchServiceJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BatchActions <a name="BatchActions" id="@cdk_utils/iam.batch.BatchActions"></a>

IAM action constants for the batch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.batch.BatchActions.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

new batch.BatchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.actionGetJobQueueSnapshot">actionGetJobQueueSnapshot</a></code> | <code>string</code> | [Read] batch:GetJobQueueSnapshot. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] batch:CancelJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateComputeEnvironment">CreateComputeEnvironment</a></code> | <code>string</code> | [Write] batch:CreateComputeEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateConsumableResource">CreateConsumableResource</a></code> | <code>string</code> | [Write] batch:CreateConsumableResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateJobQueue">CreateJobQueue</a></code> | <code>string</code> | [Write] batch:CreateJobQueue. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateQuotaShare">CreateQuotaShare</a></code> | <code>string</code> | [Write] batch:CreateQuotaShare. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateSchedulingPolicy">CreateSchedulingPolicy</a></code> | <code>string</code> | [Write] batch:CreateSchedulingPolicy. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.CreateServiceEnvironment">CreateServiceEnvironment</a></code> | <code>string</code> | [Write] batch:CreateServiceEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteComputeEnvironment">DeleteComputeEnvironment</a></code> | <code>string</code> | [Write] batch:DeleteComputeEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteConsumableResource">DeleteConsumableResource</a></code> | <code>string</code> | [Write] batch:DeleteConsumableResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteJobQueue">DeleteJobQueue</a></code> | <code>string</code> | [Write] batch:DeleteJobQueue. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteQuotaShare">DeleteQuotaShare</a></code> | <code>string</code> | [Write] batch:DeleteQuotaShare. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteSchedulingPolicy">DeleteSchedulingPolicy</a></code> | <code>string</code> | [Write] batch:DeleteSchedulingPolicy. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeleteServiceEnvironment">DeleteServiceEnvironment</a></code> | <code>string</code> | [Write] batch:DeleteServiceEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DeregisterJobDefinition">DeregisterJobDefinition</a></code> | <code>string</code> | [Write] batch:DeregisterJobDefinition. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeComputeEnvironments">DescribeComputeEnvironments</a></code> | <code>string</code> | [Read] batch:DescribeComputeEnvironments. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeConsumableResource">DescribeConsumableResource</a></code> | <code>string</code> | [Read] batch:DescribeConsumableResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeJobDefinitions">DescribeJobDefinitions</a></code> | <code>string</code> | [Read] batch:DescribeJobDefinitions. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeJobQueues">DescribeJobQueues</a></code> | <code>string</code> | [Read] batch:DescribeJobQueues. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeJobs">DescribeJobs</a></code> | <code>string</code> | [Read] batch:DescribeJobs. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeQuotaShare">DescribeQuotaShare</a></code> | <code>string</code> | [Read] batch:DescribeQuotaShare. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeSchedulingPolicies">DescribeSchedulingPolicies</a></code> | <code>string</code> | [Read] batch:DescribeSchedulingPolicies. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeServiceEnvironments">DescribeServiceEnvironments</a></code> | <code>string</code> | [Read] batch:DescribeServiceEnvironments. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.DescribeServiceJob">DescribeServiceJob</a></code> | <code>string</code> | [Read] batch:DescribeServiceJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListConsumableResources">ListConsumableResources</a></code> | <code>string</code> | [List] batch:ListConsumableResources. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] batch:ListJobs. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListJobsByConsumableResource">ListJobsByConsumableResource</a></code> | <code>string</code> | [List] batch:ListJobsByConsumableResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListQuotaShares">ListQuotaShares</a></code> | <code>string</code> | [List] batch:ListQuotaShares. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListSchedulingPolicies">ListSchedulingPolicies</a></code> | <code>string</code> | [Read] batch:ListSchedulingPolicies. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListServiceJobs">ListServiceJobs</a></code> | <code>string</code> | [List] batch:ListServiceJobs. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] batch:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.RegisterJobDefinition">RegisterJobDefinition</a></code> | <code>string</code> | [Write] batch:RegisterJobDefinition. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.SubmitJob">SubmitJob</a></code> | <code>string</code> | [Write] batch:SubmitJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.SubmitServiceJob">SubmitServiceJob</a></code> | <code>string</code> | [Write] batch:SubmitServiceJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] batch:TagResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.TerminateJob">TerminateJob</a></code> | <code>string</code> | [Write] batch:TerminateJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.TerminateServiceJob">TerminateServiceJob</a></code> | <code>string</code> | [Write] batch:TerminateServiceJob. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] batch:UntagResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateComputeEnvironment">UpdateComputeEnvironment</a></code> | <code>string</code> | [Write] batch:UpdateComputeEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateConsumableResource">UpdateConsumableResource</a></code> | <code>string</code> | [Write] batch:UpdateConsumableResource. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateJobQueue">UpdateJobQueue</a></code> | <code>string</code> | [Write] batch:UpdateJobQueue. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateQuotaShare">UpdateQuotaShare</a></code> | <code>string</code> | [Write] batch:UpdateQuotaShare. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateSchedulingPolicy">UpdateSchedulingPolicy</a></code> | <code>string</code> | [Write] batch:UpdateSchedulingPolicy. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateServiceEnvironment">UpdateServiceEnvironment</a></code> | <code>string</code> | [Write] batch:UpdateServiceEnvironment. |
| <code><a href="#@cdk_utils/iam.batch.BatchActions.property.UpdateServiceJob">UpdateServiceJob</a></code> | <code>string</code> | [Write] batch:UpdateServiceJob. |

---

##### `actionGetJobQueueSnapshot`<sup>Required</sup> <a name="actionGetJobQueueSnapshot" id="@cdk_utils/iam.batch.BatchActions.property.actionGetJobQueueSnapshot"></a>

```typescript
public readonly actionGetJobQueueSnapshot: string;
```

- *Type:* string

[Read] batch:GetJobQueueSnapshot.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.batch.BatchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.batch.BatchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.batch.BatchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.batch.BatchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.batch.BatchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.batch.BatchActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] batch:CancelJob.

---

##### `CreateComputeEnvironment`<sup>Required</sup> <a name="CreateComputeEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.CreateComputeEnvironment"></a>

```typescript
public readonly CreateComputeEnvironment: string;
```

- *Type:* string

[Write] batch:CreateComputeEnvironment.

---

##### `CreateConsumableResource`<sup>Required</sup> <a name="CreateConsumableResource" id="@cdk_utils/iam.batch.BatchActions.property.CreateConsumableResource"></a>

```typescript
public readonly CreateConsumableResource: string;
```

- *Type:* string

[Write] batch:CreateConsumableResource.

---

##### `CreateJobQueue`<sup>Required</sup> <a name="CreateJobQueue" id="@cdk_utils/iam.batch.BatchActions.property.CreateJobQueue"></a>

```typescript
public readonly CreateJobQueue: string;
```

- *Type:* string

[Write] batch:CreateJobQueue.

---

##### `CreateQuotaShare`<sup>Required</sup> <a name="CreateQuotaShare" id="@cdk_utils/iam.batch.BatchActions.property.CreateQuotaShare"></a>

```typescript
public readonly CreateQuotaShare: string;
```

- *Type:* string

[Write] batch:CreateQuotaShare.

---

##### `CreateSchedulingPolicy`<sup>Required</sup> <a name="CreateSchedulingPolicy" id="@cdk_utils/iam.batch.BatchActions.property.CreateSchedulingPolicy"></a>

```typescript
public readonly CreateSchedulingPolicy: string;
```

- *Type:* string

[Write] batch:CreateSchedulingPolicy.

---

##### `CreateServiceEnvironment`<sup>Required</sup> <a name="CreateServiceEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.CreateServiceEnvironment"></a>

```typescript
public readonly CreateServiceEnvironment: string;
```

- *Type:* string

[Write] batch:CreateServiceEnvironment.

---

##### `DeleteComputeEnvironment`<sup>Required</sup> <a name="DeleteComputeEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.DeleteComputeEnvironment"></a>

```typescript
public readonly DeleteComputeEnvironment: string;
```

- *Type:* string

[Write] batch:DeleteComputeEnvironment.

---

##### `DeleteConsumableResource`<sup>Required</sup> <a name="DeleteConsumableResource" id="@cdk_utils/iam.batch.BatchActions.property.DeleteConsumableResource"></a>

```typescript
public readonly DeleteConsumableResource: string;
```

- *Type:* string

[Write] batch:DeleteConsumableResource.

---

##### `DeleteJobQueue`<sup>Required</sup> <a name="DeleteJobQueue" id="@cdk_utils/iam.batch.BatchActions.property.DeleteJobQueue"></a>

```typescript
public readonly DeleteJobQueue: string;
```

- *Type:* string

[Write] batch:DeleteJobQueue.

---

##### `DeleteQuotaShare`<sup>Required</sup> <a name="DeleteQuotaShare" id="@cdk_utils/iam.batch.BatchActions.property.DeleteQuotaShare"></a>

```typescript
public readonly DeleteQuotaShare: string;
```

- *Type:* string

[Write] batch:DeleteQuotaShare.

---

##### `DeleteSchedulingPolicy`<sup>Required</sup> <a name="DeleteSchedulingPolicy" id="@cdk_utils/iam.batch.BatchActions.property.DeleteSchedulingPolicy"></a>

```typescript
public readonly DeleteSchedulingPolicy: string;
```

- *Type:* string

[Write] batch:DeleteSchedulingPolicy.

---

##### `DeleteServiceEnvironment`<sup>Required</sup> <a name="DeleteServiceEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.DeleteServiceEnvironment"></a>

```typescript
public readonly DeleteServiceEnvironment: string;
```

- *Type:* string

[Write] batch:DeleteServiceEnvironment.

---

##### `DeregisterJobDefinition`<sup>Required</sup> <a name="DeregisterJobDefinition" id="@cdk_utils/iam.batch.BatchActions.property.DeregisterJobDefinition"></a>

```typescript
public readonly DeregisterJobDefinition: string;
```

- *Type:* string

[Write] batch:DeregisterJobDefinition.

---

##### `DescribeComputeEnvironments`<sup>Required</sup> <a name="DescribeComputeEnvironments" id="@cdk_utils/iam.batch.BatchActions.property.DescribeComputeEnvironments"></a>

```typescript
public readonly DescribeComputeEnvironments: string;
```

- *Type:* string

[Read] batch:DescribeComputeEnvironments.

---

##### `DescribeConsumableResource`<sup>Required</sup> <a name="DescribeConsumableResource" id="@cdk_utils/iam.batch.BatchActions.property.DescribeConsumableResource"></a>

```typescript
public readonly DescribeConsumableResource: string;
```

- *Type:* string

[Read] batch:DescribeConsumableResource.

---

##### `DescribeJobDefinitions`<sup>Required</sup> <a name="DescribeJobDefinitions" id="@cdk_utils/iam.batch.BatchActions.property.DescribeJobDefinitions"></a>

```typescript
public readonly DescribeJobDefinitions: string;
```

- *Type:* string

[Read] batch:DescribeJobDefinitions.

---

##### `DescribeJobQueues`<sup>Required</sup> <a name="DescribeJobQueues" id="@cdk_utils/iam.batch.BatchActions.property.DescribeJobQueues"></a>

```typescript
public readonly DescribeJobQueues: string;
```

- *Type:* string

[Read] batch:DescribeJobQueues.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.batch.BatchActions.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string;
```

- *Type:* string

[Read] batch:DescribeJobs.

---

##### `DescribeQuotaShare`<sup>Required</sup> <a name="DescribeQuotaShare" id="@cdk_utils/iam.batch.BatchActions.property.DescribeQuotaShare"></a>

```typescript
public readonly DescribeQuotaShare: string;
```

- *Type:* string

[Read] batch:DescribeQuotaShare.

---

##### `DescribeSchedulingPolicies`<sup>Required</sup> <a name="DescribeSchedulingPolicies" id="@cdk_utils/iam.batch.BatchActions.property.DescribeSchedulingPolicies"></a>

```typescript
public readonly DescribeSchedulingPolicies: string;
```

- *Type:* string

[Read] batch:DescribeSchedulingPolicies.

---

##### `DescribeServiceEnvironments`<sup>Required</sup> <a name="DescribeServiceEnvironments" id="@cdk_utils/iam.batch.BatchActions.property.DescribeServiceEnvironments"></a>

```typescript
public readonly DescribeServiceEnvironments: string;
```

- *Type:* string

[Read] batch:DescribeServiceEnvironments.

---

##### `DescribeServiceJob`<sup>Required</sup> <a name="DescribeServiceJob" id="@cdk_utils/iam.batch.BatchActions.property.DescribeServiceJob"></a>

```typescript
public readonly DescribeServiceJob: string;
```

- *Type:* string

[Read] batch:DescribeServiceJob.

---

##### `ListConsumableResources`<sup>Required</sup> <a name="ListConsumableResources" id="@cdk_utils/iam.batch.BatchActions.property.ListConsumableResources"></a>

```typescript
public readonly ListConsumableResources: string;
```

- *Type:* string

[List] batch:ListConsumableResources.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.batch.BatchActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] batch:ListJobs.

---

##### `ListJobsByConsumableResource`<sup>Required</sup> <a name="ListJobsByConsumableResource" id="@cdk_utils/iam.batch.BatchActions.property.ListJobsByConsumableResource"></a>

```typescript
public readonly ListJobsByConsumableResource: string;
```

- *Type:* string

[List] batch:ListJobsByConsumableResource.

---

##### `ListQuotaShares`<sup>Required</sup> <a name="ListQuotaShares" id="@cdk_utils/iam.batch.BatchActions.property.ListQuotaShares"></a>

```typescript
public readonly ListQuotaShares: string;
```

- *Type:* string

[List] batch:ListQuotaShares.

---

##### `ListSchedulingPolicies`<sup>Required</sup> <a name="ListSchedulingPolicies" id="@cdk_utils/iam.batch.BatchActions.property.ListSchedulingPolicies"></a>

```typescript
public readonly ListSchedulingPolicies: string;
```

- *Type:* string

[Read] batch:ListSchedulingPolicies.

---

##### `ListServiceJobs`<sup>Required</sup> <a name="ListServiceJobs" id="@cdk_utils/iam.batch.BatchActions.property.ListServiceJobs"></a>

```typescript
public readonly ListServiceJobs: string;
```

- *Type:* string

[List] batch:ListServiceJobs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.batch.BatchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] batch:ListTagsForResource.

---

##### `RegisterJobDefinition`<sup>Required</sup> <a name="RegisterJobDefinition" id="@cdk_utils/iam.batch.BatchActions.property.RegisterJobDefinition"></a>

```typescript
public readonly RegisterJobDefinition: string;
```

- *Type:* string

[Write] batch:RegisterJobDefinition.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.batch.BatchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SubmitJob`<sup>Required</sup> <a name="SubmitJob" id="@cdk_utils/iam.batch.BatchActions.property.SubmitJob"></a>

```typescript
public readonly SubmitJob: string;
```

- *Type:* string

[Write] batch:SubmitJob.

---

##### `SubmitServiceJob`<sup>Required</sup> <a name="SubmitServiceJob" id="@cdk_utils/iam.batch.BatchActions.property.SubmitServiceJob"></a>

```typescript
public readonly SubmitServiceJob: string;
```

- *Type:* string

[Write] batch:SubmitServiceJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.batch.BatchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] batch:TagResource.

---

##### `TerminateJob`<sup>Required</sup> <a name="TerminateJob" id="@cdk_utils/iam.batch.BatchActions.property.TerminateJob"></a>

```typescript
public readonly TerminateJob: string;
```

- *Type:* string

[Write] batch:TerminateJob.

---

##### `TerminateServiceJob`<sup>Required</sup> <a name="TerminateServiceJob" id="@cdk_utils/iam.batch.BatchActions.property.TerminateServiceJob"></a>

```typescript
public readonly TerminateServiceJob: string;
```

- *Type:* string

[Write] batch:TerminateServiceJob.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.batch.BatchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] batch:UntagResource.

---

##### `UpdateComputeEnvironment`<sup>Required</sup> <a name="UpdateComputeEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.UpdateComputeEnvironment"></a>

```typescript
public readonly UpdateComputeEnvironment: string;
```

- *Type:* string

[Write] batch:UpdateComputeEnvironment.

---

##### `UpdateConsumableResource`<sup>Required</sup> <a name="UpdateConsumableResource" id="@cdk_utils/iam.batch.BatchActions.property.UpdateConsumableResource"></a>

```typescript
public readonly UpdateConsumableResource: string;
```

- *Type:* string

[Write] batch:UpdateConsumableResource.

---

##### `UpdateJobQueue`<sup>Required</sup> <a name="UpdateJobQueue" id="@cdk_utils/iam.batch.BatchActions.property.UpdateJobQueue"></a>

```typescript
public readonly UpdateJobQueue: string;
```

- *Type:* string

[Write] batch:UpdateJobQueue.

---

##### `UpdateQuotaShare`<sup>Required</sup> <a name="UpdateQuotaShare" id="@cdk_utils/iam.batch.BatchActions.property.UpdateQuotaShare"></a>

```typescript
public readonly UpdateQuotaShare: string;
```

- *Type:* string

[Write] batch:UpdateQuotaShare.

---

##### `UpdateSchedulingPolicy`<sup>Required</sup> <a name="UpdateSchedulingPolicy" id="@cdk_utils/iam.batch.BatchActions.property.UpdateSchedulingPolicy"></a>

```typescript
public readonly UpdateSchedulingPolicy: string;
```

- *Type:* string

[Write] batch:UpdateSchedulingPolicy.

---

##### `UpdateServiceEnvironment`<sup>Required</sup> <a name="UpdateServiceEnvironment" id="@cdk_utils/iam.batch.BatchActions.property.UpdateServiceEnvironment"></a>

```typescript
public readonly UpdateServiceEnvironment: string;
```

- *Type:* string

[Write] batch:UpdateServiceEnvironment.

---

##### `UpdateServiceJob`<sup>Required</sup> <a name="UpdateServiceJob" id="@cdk_utils/iam.batch.BatchActions.property.UpdateServiceJob"></a>

```typescript
public readonly UpdateServiceJob: string;
```

- *Type:* string

[Write] batch:UpdateServiceJob.

---

### BatchConditions <a name="BatchConditions" id="@cdk_utils/iam.batch.BatchConditions"></a>

Condition key constants and builders for batch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.batch.BatchConditions.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

new batch.BatchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.awsLogsCreateGroup">awsLogsCreateGroup</a></code> | Generates a condition block for `batch:AWSLogsCreateGroup`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.awsLogsGroup">awsLogsGroup</a></code> | Generates a condition block for `batch:AWSLogsGroup`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.awsLogsRegion">awsLogsRegion</a></code> | Generates a condition block for `batch:AWSLogsRegion`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.awsLogsStreamPrefix">awsLogsStreamPrefix</a></code> | Generates a condition block for `batch:AWSLogsStreamPrefix`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksImage">eksImage</a></code> | Generates a condition block for `batch:EKSImage`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksNamespace">eksNamespace</a></code> | Generates a condition block for `batch:EKSNamespace`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksPrivileged">eksPrivileged</a></code> | Generates a condition block for `batch:EKSPrivileged`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksRunAsGroup">eksRunAsGroup</a></code> | Generates a condition block for `batch:EKSRunAsGroup`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksRunAsUser">eksRunAsUser</a></code> | Generates a condition block for `batch:EKSRunAsUser`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.eksServiceAccountName">eksServiceAccountName</a></code> | Generates a condition block for `batch:EKSServiceAccountName`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.image">image</a></code> | Generates a condition block for `batch:Image`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.logDriver">logDriver</a></code> | Generates a condition block for `batch:LogDriver`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.privileged">privileged</a></code> | Generates a condition block for `batch:Privileged`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.schedulingPriority">schedulingPriority</a></code> | Generates a condition block for `batch:SchedulingPriority`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.shareIdentifier">shareIdentifier</a></code> | Generates a condition block for `batch:ShareIdentifier`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.user">user</a></code> | Generates a condition block for `batch:User`. |

---

##### `awsLogsCreateGroup` <a name="awsLogsCreateGroup" id="@cdk_utils/iam.batch.BatchConditions.awsLogsCreateGroup"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.awsLogsCreateGroup(value: boolean)
```

Generates a condition block for `batch:AWSLogsCreateGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.awsLogsCreateGroup.parameter.value"></a>

- *Type:* boolean

---

##### `awsLogsGroup` <a name="awsLogsGroup" id="@cdk_utils/iam.batch.BatchConditions.awsLogsGroup"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.awsLogsGroup(value: string)
```

Generates a condition block for `batch:AWSLogsGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.awsLogsGroup.parameter.value"></a>

- *Type:* string

---

##### `awsLogsRegion` <a name="awsLogsRegion" id="@cdk_utils/iam.batch.BatchConditions.awsLogsRegion"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.awsLogsRegion(value: string)
```

Generates a condition block for `batch:AWSLogsRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.awsLogsRegion.parameter.value"></a>

- *Type:* string

---

##### `awsLogsStreamPrefix` <a name="awsLogsStreamPrefix" id="@cdk_utils/iam.batch.BatchConditions.awsLogsStreamPrefix"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.awsLogsStreamPrefix(value: string)
```

Generates a condition block for `batch:AWSLogsStreamPrefix`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.awsLogsStreamPrefix.parameter.value"></a>

- *Type:* string

---

##### `eksImage` <a name="eksImage" id="@cdk_utils/iam.batch.BatchConditions.eksImage"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksImage(value: string)
```

Generates a condition block for `batch:EKSImage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksImage.parameter.value"></a>

- *Type:* string

---

##### `eksNamespace` <a name="eksNamespace" id="@cdk_utils/iam.batch.BatchConditions.eksNamespace"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksNamespace(value: string)
```

Generates a condition block for `batch:EKSNamespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksNamespace.parameter.value"></a>

- *Type:* string

---

##### `eksPrivileged` <a name="eksPrivileged" id="@cdk_utils/iam.batch.BatchConditions.eksPrivileged"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksPrivileged(value: boolean)
```

Generates a condition block for `batch:EKSPrivileged`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksPrivileged.parameter.value"></a>

- *Type:* boolean

---

##### `eksRunAsGroup` <a name="eksRunAsGroup" id="@cdk_utils/iam.batch.BatchConditions.eksRunAsGroup"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksRunAsGroup(value: number)
```

Generates a condition block for `batch:EKSRunAsGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksRunAsGroup.parameter.value"></a>

- *Type:* number

---

##### `eksRunAsUser` <a name="eksRunAsUser" id="@cdk_utils/iam.batch.BatchConditions.eksRunAsUser"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksRunAsUser(value: number)
```

Generates a condition block for `batch:EKSRunAsUser`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksRunAsUser.parameter.value"></a>

- *Type:* number

---

##### `eksServiceAccountName` <a name="eksServiceAccountName" id="@cdk_utils/iam.batch.BatchConditions.eksServiceAccountName"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.eksServiceAccountName(value: string)
```

Generates a condition block for `batch:EKSServiceAccountName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.eksServiceAccountName.parameter.value"></a>

- *Type:* string

---

##### `image` <a name="image" id="@cdk_utils/iam.batch.BatchConditions.image"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.image(value: string)
```

Generates a condition block for `batch:Image`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.image.parameter.value"></a>

- *Type:* string

---

##### `logDriver` <a name="logDriver" id="@cdk_utils/iam.batch.BatchConditions.logDriver"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.logDriver(value: string)
```

Generates a condition block for `batch:LogDriver`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.logDriver.parameter.value"></a>

- *Type:* string

---

##### `privileged` <a name="privileged" id="@cdk_utils/iam.batch.BatchConditions.privileged"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.privileged(value: boolean)
```

Generates a condition block for `batch:Privileged`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.privileged.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.batch.BatchConditions.requestTag"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.batch.BatchConditions.resourceTag"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `schedulingPriority` <a name="schedulingPriority" id="@cdk_utils/iam.batch.BatchConditions.schedulingPriority"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.schedulingPriority(value: number)
```

Generates a condition block for `batch:SchedulingPriority`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.schedulingPriority.parameter.value"></a>

- *Type:* number

---

##### `shareIdentifier` <a name="shareIdentifier" id="@cdk_utils/iam.batch.BatchConditions.shareIdentifier"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.shareIdentifier(value: string)
```

Generates a condition block for `batch:ShareIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.shareIdentifier.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.batch.BatchConditions.tagKeys"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.batch.BatchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `user` <a name="user" id="@cdk_utils/iam.batch.BatchConditions.user"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchConditions.user(value: string)
```

Generates a condition block for `batch:User`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.batch.BatchConditions.user.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_CREATE_GROUP">AWS_LOGS_CREATE_GROUP</a></code> | <code>string</code> | Condition key: batch:AWSLogsCreateGroup (Bool). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_GROUP">AWS_LOGS_GROUP</a></code> | <code>string</code> | Condition key: batch:AWSLogsGroup (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_REGION">AWS_LOGS_REGION</a></code> | <code>string</code> | Condition key: batch:AWSLogsRegion (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_STREAM_PREFIX">AWS_LOGS_STREAM_PREFIX</a></code> | <code>string</code> | Condition key: batch:AWSLogsStreamPrefix (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateComputeEnvironmentConditionKeys">CreateComputeEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComputeEnvironment action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateConsumableResourceConditionKeys">CreateConsumableResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConsumableResource action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateJobQueueConditionKeys">CreateJobQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJobQueue action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateQuotaShareConditionKeys">CreateQuotaShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQuotaShare action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateSchedulingPolicyConditionKeys">CreateSchedulingPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSchedulingPolicy action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.CreateServiceEnvironmentConditionKeys">CreateServiceEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceEnvironment action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_IMAGE">EKS_IMAGE</a></code> | <code>string</code> | Condition key: batch:EKSImage (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_NAMESPACE">EKS_NAMESPACE</a></code> | <code>string</code> | Condition key: batch:EKSNamespace (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_PRIVILEGED">EKS_PRIVILEGED</a></code> | <code>string</code> | Condition key: batch:EKSPrivileged (Bool). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_RUN_AS_GROUP">EKS_RUN_AS_GROUP</a></code> | <code>string</code> | Condition key: batch:EKSRunAsGroup (Numeric). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_RUN_AS_USER">EKS_RUN_AS_USER</a></code> | <code>string</code> | Condition key: batch:EKSRunAsUser (Numeric). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.EKS_SERVICE_ACCOUNT_NAME">EKS_SERVICE_ACCOUNT_NAME</a></code> | <code>string</code> | Condition key: batch:EKSServiceAccountName (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.IMAGE">IMAGE</a></code> | <code>string</code> | Condition key: batch:Image (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.LOG_DRIVER">LOG_DRIVER</a></code> | <code>string</code> | Condition key: batch:LogDriver (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.PRIVILEGED">PRIVILEGED</a></code> | <code>string</code> | Condition key: batch:Privileged (Bool). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.RegisterJobDefinitionConditionKeys">RegisterJobDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterJobDefinition action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.SCHEDULING_PRIORITY">SCHEDULING_PRIORITY</a></code> | <code>string</code> | Condition key: batch:SchedulingPriority (Numeric). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.SHARE_IDENTIFIER">SHARE_IDENTIFIER</a></code> | <code>string</code> | Condition key: batch:ShareIdentifier (String). |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.SubmitJobConditionKeys">SubmitJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitJob action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.SubmitServiceJobConditionKeys">SubmitServiceJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitServiceJob action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.UpdateServiceJobConditionKeys">UpdateServiceJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceJob action. |
| <code><a href="#@cdk_utils/iam.batch.BatchConditions.property.USER">USER</a></code> | <code>string</code> | Condition key: batch:User (String). |

---

##### `AWS_LOGS_CREATE_GROUP`<sup>Required</sup> <a name="AWS_LOGS_CREATE_GROUP" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_CREATE_GROUP"></a>

```typescript
public readonly AWS_LOGS_CREATE_GROUP: string;
```

- *Type:* string

Condition key: batch:AWSLogsCreateGroup (Bool).

---

##### `AWS_LOGS_GROUP`<sup>Required</sup> <a name="AWS_LOGS_GROUP" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_GROUP"></a>

```typescript
public readonly AWS_LOGS_GROUP: string;
```

- *Type:* string

Condition key: batch:AWSLogsGroup (String).

---

##### `AWS_LOGS_REGION`<sup>Required</sup> <a name="AWS_LOGS_REGION" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_REGION"></a>

```typescript
public readonly AWS_LOGS_REGION: string;
```

- *Type:* string

Condition key: batch:AWSLogsRegion (String).

---

##### `AWS_LOGS_STREAM_PREFIX`<sup>Required</sup> <a name="AWS_LOGS_STREAM_PREFIX" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_LOGS_STREAM_PREFIX"></a>

```typescript
public readonly AWS_LOGS_STREAM_PREFIX: string;
```

- *Type:* string

Condition key: batch:AWSLogsStreamPrefix (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.batch.BatchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateComputeEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateComputeEnvironmentConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateComputeEnvironmentConditionKeys"></a>

```typescript
public readonly CreateComputeEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComputeEnvironment action.

---

##### `CreateConsumableResourceConditionKeys`<sup>Required</sup> <a name="CreateConsumableResourceConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateConsumableResourceConditionKeys"></a>

```typescript
public readonly CreateConsumableResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConsumableResource action.

---

##### `CreateJobQueueConditionKeys`<sup>Required</sup> <a name="CreateJobQueueConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateJobQueueConditionKeys"></a>

```typescript
public readonly CreateJobQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJobQueue action.

---

##### `CreateQuotaShareConditionKeys`<sup>Required</sup> <a name="CreateQuotaShareConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateQuotaShareConditionKeys"></a>

```typescript
public readonly CreateQuotaShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQuotaShare action.

---

##### `CreateSchedulingPolicyConditionKeys`<sup>Required</sup> <a name="CreateSchedulingPolicyConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateSchedulingPolicyConditionKeys"></a>

```typescript
public readonly CreateSchedulingPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSchedulingPolicy action.

---

##### `CreateServiceEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateServiceEnvironmentConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.CreateServiceEnvironmentConditionKeys"></a>

```typescript
public readonly CreateServiceEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceEnvironment action.

---

##### `EKS_IMAGE`<sup>Required</sup> <a name="EKS_IMAGE" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_IMAGE"></a>

```typescript
public readonly EKS_IMAGE: string;
```

- *Type:* string

Condition key: batch:EKSImage (String).

---

##### `EKS_NAMESPACE`<sup>Required</sup> <a name="EKS_NAMESPACE" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_NAMESPACE"></a>

```typescript
public readonly EKS_NAMESPACE: string;
```

- *Type:* string

Condition key: batch:EKSNamespace (String).

---

##### `EKS_PRIVILEGED`<sup>Required</sup> <a name="EKS_PRIVILEGED" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_PRIVILEGED"></a>

```typescript
public readonly EKS_PRIVILEGED: string;
```

- *Type:* string

Condition key: batch:EKSPrivileged (Bool).

---

##### `EKS_RUN_AS_GROUP`<sup>Required</sup> <a name="EKS_RUN_AS_GROUP" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_RUN_AS_GROUP"></a>

```typescript
public readonly EKS_RUN_AS_GROUP: string;
```

- *Type:* string

Condition key: batch:EKSRunAsGroup (Numeric).

---

##### `EKS_RUN_AS_USER`<sup>Required</sup> <a name="EKS_RUN_AS_USER" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_RUN_AS_USER"></a>

```typescript
public readonly EKS_RUN_AS_USER: string;
```

- *Type:* string

Condition key: batch:EKSRunAsUser (Numeric).

---

##### `EKS_SERVICE_ACCOUNT_NAME`<sup>Required</sup> <a name="EKS_SERVICE_ACCOUNT_NAME" id="@cdk_utils/iam.batch.BatchConditions.property.EKS_SERVICE_ACCOUNT_NAME"></a>

```typescript
public readonly EKS_SERVICE_ACCOUNT_NAME: string;
```

- *Type:* string

Condition key: batch:EKSServiceAccountName (String).

---

##### `IMAGE`<sup>Required</sup> <a name="IMAGE" id="@cdk_utils/iam.batch.BatchConditions.property.IMAGE"></a>

```typescript
public readonly IMAGE: string;
```

- *Type:* string

Condition key: batch:Image (String).

---

##### `LOG_DRIVER`<sup>Required</sup> <a name="LOG_DRIVER" id="@cdk_utils/iam.batch.BatchConditions.property.LOG_DRIVER"></a>

```typescript
public readonly LOG_DRIVER: string;
```

- *Type:* string

Condition key: batch:LogDriver (String).

---

##### `PRIVILEGED`<sup>Required</sup> <a name="PRIVILEGED" id="@cdk_utils/iam.batch.BatchConditions.property.PRIVILEGED"></a>

```typescript
public readonly PRIVILEGED: string;
```

- *Type:* string

Condition key: batch:Privileged (Bool).

---

##### `RegisterJobDefinitionConditionKeys`<sup>Required</sup> <a name="RegisterJobDefinitionConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.RegisterJobDefinitionConditionKeys"></a>

```typescript
public readonly RegisterJobDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterJobDefinition action.

---

##### `SCHEDULING_PRIORITY`<sup>Required</sup> <a name="SCHEDULING_PRIORITY" id="@cdk_utils/iam.batch.BatchConditions.property.SCHEDULING_PRIORITY"></a>

```typescript
public readonly SCHEDULING_PRIORITY: string;
```

- *Type:* string

Condition key: batch:SchedulingPriority (Numeric).

---

##### `SHARE_IDENTIFIER`<sup>Required</sup> <a name="SHARE_IDENTIFIER" id="@cdk_utils/iam.batch.BatchConditions.property.SHARE_IDENTIFIER"></a>

```typescript
public readonly SHARE_IDENTIFIER: string;
```

- *Type:* string

Condition key: batch:ShareIdentifier (String).

---

##### `SubmitJobConditionKeys`<sup>Required</sup> <a name="SubmitJobConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.SubmitJobConditionKeys"></a>

```typescript
public readonly SubmitJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitJob action.

---

##### `SubmitServiceJobConditionKeys`<sup>Required</sup> <a name="SubmitServiceJobConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.SubmitServiceJobConditionKeys"></a>

```typescript
public readonly SubmitServiceJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitServiceJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateServiceJobConditionKeys`<sup>Required</sup> <a name="UpdateServiceJobConditionKeys" id="@cdk_utils/iam.batch.BatchConditions.property.UpdateServiceJobConditionKeys"></a>

```typescript
public readonly UpdateServiceJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceJob action.

---

##### `USER`<sup>Required</sup> <a name="USER" id="@cdk_utils/iam.batch.BatchConditions.property.USER"></a>

```typescript
public readonly USER: string;
```

- *Type:* string

Condition key: batch:User (String).

---

### BatchOperations <a name="BatchOperations" id="@cdk_utils/iam.batch.BatchOperations"></a>

API operation to required IAM actions mapping for batch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.batch.BatchOperations.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

new batch.BatchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateComputeEnvironment">CreateComputeEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateComputeEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateConsumableResource">CreateConsumableResource</a></code> | <code>string[]</code> | IAM actions required for the CreateConsumableResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateJobQueue">CreateJobQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateJobQueue API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateQuotaShare">CreateQuotaShare</a></code> | <code>string[]</code> | IAM actions required for the CreateQuotaShare API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateSchedulingPolicy">CreateSchedulingPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateSchedulingPolicy API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.CreateServiceEnvironment">CreateServiceEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteComputeEnvironment">DeleteComputeEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteComputeEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteConsumableResource">DeleteConsumableResource</a></code> | <code>string[]</code> | IAM actions required for the DeleteConsumableResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteJobQueue">DeleteJobQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteJobQueue API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteQuotaShare">DeleteQuotaShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteQuotaShare API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteSchedulingPolicy">DeleteSchedulingPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchedulingPolicy API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeleteServiceEnvironment">DeleteServiceEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DeregisterJobDefinition">DeregisterJobDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeregisterJobDefinition API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeComputeEnvironments">DescribeComputeEnvironments</a></code> | <code>string[]</code> | IAM actions required for the DescribeComputeEnvironments API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeConsumableResource">DescribeConsumableResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeConsumableResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeJobDefinitions">DescribeJobDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobDefinitions API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeJobQueues">DescribeJobQueues</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobQueues API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeJobs">DescribeJobs</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobs API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeQuotaShare">DescribeQuotaShare</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuotaShare API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeSchedulingPolicies">DescribeSchedulingPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchedulingPolicies API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeServiceEnvironments">DescribeServiceEnvironments</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceEnvironments API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.DescribeServiceJob">DescribeServiceJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListConsumableResources">ListConsumableResources</a></code> | <code>string[]</code> | IAM actions required for the ListConsumableResources API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListJobsByConsumableResource">ListJobsByConsumableResource</a></code> | <code>string[]</code> | IAM actions required for the ListJobsByConsumableResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListQuotaShares">ListQuotaShares</a></code> | <code>string[]</code> | IAM actions required for the ListQuotaShares API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListSchedulingPolicies">ListSchedulingPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListSchedulingPolicies API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListServiceJobs">ListServiceJobs</a></code> | <code>string[]</code> | IAM actions required for the ListServiceJobs API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.opGetJobQueueSnapshot">opGetJobQueueSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetJobQueueSnapshot API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.RegisterJobDefinition">RegisterJobDefinition</a></code> | <code>string[]</code> | IAM actions required for the RegisterJobDefinition API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.SubmitJob">SubmitJob</a></code> | <code>string[]</code> | IAM actions required for the SubmitJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.SubmitServiceJob">SubmitServiceJob</a></code> | <code>string[]</code> | IAM actions required for the SubmitServiceJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.TerminateJob">TerminateJob</a></code> | <code>string[]</code> | IAM actions required for the TerminateJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.TerminateServiceJob">TerminateServiceJob</a></code> | <code>string[]</code> | IAM actions required for the TerminateServiceJob API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateComputeEnvironment">UpdateComputeEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateComputeEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateConsumableResource">UpdateConsumableResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateConsumableResource API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateJobQueue">UpdateJobQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateJobQueue API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateQuotaShare">UpdateQuotaShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuotaShare API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateSchedulingPolicy">UpdateSchedulingPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateSchedulingPolicy API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateServiceEnvironment">UpdateServiceEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceEnvironment API call. |
| <code><a href="#@cdk_utils/iam.batch.BatchOperations.property.UpdateServiceJob">UpdateServiceJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceJob API call. |

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.batch.BatchOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateComputeEnvironment`<sup>Required</sup> <a name="CreateComputeEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.CreateComputeEnvironment"></a>

```typescript
public readonly CreateComputeEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateComputeEnvironment API call.

---

##### `CreateConsumableResource`<sup>Required</sup> <a name="CreateConsumableResource" id="@cdk_utils/iam.batch.BatchOperations.property.CreateConsumableResource"></a>

```typescript
public readonly CreateConsumableResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateConsumableResource API call.

---

##### `CreateJobQueue`<sup>Required</sup> <a name="CreateJobQueue" id="@cdk_utils/iam.batch.BatchOperations.property.CreateJobQueue"></a>

```typescript
public readonly CreateJobQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateJobQueue API call.

---

##### `CreateQuotaShare`<sup>Required</sup> <a name="CreateQuotaShare" id="@cdk_utils/iam.batch.BatchOperations.property.CreateQuotaShare"></a>

```typescript
public readonly CreateQuotaShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuotaShare API call.

---

##### `CreateSchedulingPolicy`<sup>Required</sup> <a name="CreateSchedulingPolicy" id="@cdk_utils/iam.batch.BatchOperations.property.CreateSchedulingPolicy"></a>

```typescript
public readonly CreateSchedulingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchedulingPolicy API call.

---

##### `CreateServiceEnvironment`<sup>Required</sup> <a name="CreateServiceEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.CreateServiceEnvironment"></a>

```typescript
public readonly CreateServiceEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceEnvironment API call.

---

##### `DeleteComputeEnvironment`<sup>Required</sup> <a name="DeleteComputeEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteComputeEnvironment"></a>

```typescript
public readonly DeleteComputeEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComputeEnvironment API call.

---

##### `DeleteConsumableResource`<sup>Required</sup> <a name="DeleteConsumableResource" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteConsumableResource"></a>

```typescript
public readonly DeleteConsumableResource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConsumableResource API call.

---

##### `DeleteJobQueue`<sup>Required</sup> <a name="DeleteJobQueue" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteJobQueue"></a>

```typescript
public readonly DeleteJobQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJobQueue API call.

---

##### `DeleteQuotaShare`<sup>Required</sup> <a name="DeleteQuotaShare" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteQuotaShare"></a>

```typescript
public readonly DeleteQuotaShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQuotaShare API call.

---

##### `DeleteSchedulingPolicy`<sup>Required</sup> <a name="DeleteSchedulingPolicy" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteSchedulingPolicy"></a>

```typescript
public readonly DeleteSchedulingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchedulingPolicy API call.

---

##### `DeleteServiceEnvironment`<sup>Required</sup> <a name="DeleteServiceEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.DeleteServiceEnvironment"></a>

```typescript
public readonly DeleteServiceEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceEnvironment API call.

---

##### `DeregisterJobDefinition`<sup>Required</sup> <a name="DeregisterJobDefinition" id="@cdk_utils/iam.batch.BatchOperations.property.DeregisterJobDefinition"></a>

```typescript
public readonly DeregisterJobDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterJobDefinition API call.

---

##### `DescribeComputeEnvironments`<sup>Required</sup> <a name="DescribeComputeEnvironments" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeComputeEnvironments"></a>

```typescript
public readonly DescribeComputeEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComputeEnvironments API call.

---

##### `DescribeConsumableResource`<sup>Required</sup> <a name="DescribeConsumableResource" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeConsumableResource"></a>

```typescript
public readonly DescribeConsumableResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConsumableResource API call.

---

##### `DescribeJobDefinitions`<sup>Required</sup> <a name="DescribeJobDefinitions" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeJobDefinitions"></a>

```typescript
public readonly DescribeJobDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobDefinitions API call.

---

##### `DescribeJobQueues`<sup>Required</sup> <a name="DescribeJobQueues" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeJobQueues"></a>

```typescript
public readonly DescribeJobQueues: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobQueues API call.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobs API call.

---

##### `DescribeQuotaShare`<sup>Required</sup> <a name="DescribeQuotaShare" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeQuotaShare"></a>

```typescript
public readonly DescribeQuotaShare: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuotaShare API call.

---

##### `DescribeSchedulingPolicies`<sup>Required</sup> <a name="DescribeSchedulingPolicies" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeSchedulingPolicies"></a>

```typescript
public readonly DescribeSchedulingPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchedulingPolicies API call.

---

##### `DescribeServiceEnvironments`<sup>Required</sup> <a name="DescribeServiceEnvironments" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeServiceEnvironments"></a>

```typescript
public readonly DescribeServiceEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceEnvironments API call.

---

##### `DescribeServiceJob`<sup>Required</sup> <a name="DescribeServiceJob" id="@cdk_utils/iam.batch.BatchOperations.property.DescribeServiceJob"></a>

```typescript
public readonly DescribeServiceJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceJob API call.

---

##### `ListConsumableResources`<sup>Required</sup> <a name="ListConsumableResources" id="@cdk_utils/iam.batch.BatchOperations.property.ListConsumableResources"></a>

```typescript
public readonly ListConsumableResources: string[];
```

- *Type:* string[]

IAM actions required for the ListConsumableResources API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.batch.BatchOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListJobsByConsumableResource`<sup>Required</sup> <a name="ListJobsByConsumableResource" id="@cdk_utils/iam.batch.BatchOperations.property.ListJobsByConsumableResource"></a>

```typescript
public readonly ListJobsByConsumableResource: string[];
```

- *Type:* string[]

IAM actions required for the ListJobsByConsumableResource API call.

---

##### `ListQuotaShares`<sup>Required</sup> <a name="ListQuotaShares" id="@cdk_utils/iam.batch.BatchOperations.property.ListQuotaShares"></a>

```typescript
public readonly ListQuotaShares: string[];
```

- *Type:* string[]

IAM actions required for the ListQuotaShares API call.

---

##### `ListSchedulingPolicies`<sup>Required</sup> <a name="ListSchedulingPolicies" id="@cdk_utils/iam.batch.BatchOperations.property.ListSchedulingPolicies"></a>

```typescript
public readonly ListSchedulingPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListSchedulingPolicies API call.

---

##### `ListServiceJobs`<sup>Required</sup> <a name="ListServiceJobs" id="@cdk_utils/iam.batch.BatchOperations.property.ListServiceJobs"></a>

```typescript
public readonly ListServiceJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceJobs API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.batch.BatchOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetJobQueueSnapshot`<sup>Required</sup> <a name="opGetJobQueueSnapshot" id="@cdk_utils/iam.batch.BatchOperations.property.opGetJobQueueSnapshot"></a>

```typescript
public readonly opGetJobQueueSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetJobQueueSnapshot API call.

---

##### `RegisterJobDefinition`<sup>Required</sup> <a name="RegisterJobDefinition" id="@cdk_utils/iam.batch.BatchOperations.property.RegisterJobDefinition"></a>

```typescript
public readonly RegisterJobDefinition: string[];
```

- *Type:* string[]

IAM actions required for the RegisterJobDefinition API call.

---

##### `SubmitJob`<sup>Required</sup> <a name="SubmitJob" id="@cdk_utils/iam.batch.BatchOperations.property.SubmitJob"></a>

```typescript
public readonly SubmitJob: string[];
```

- *Type:* string[]

IAM actions required for the SubmitJob API call.

---

##### `SubmitServiceJob`<sup>Required</sup> <a name="SubmitServiceJob" id="@cdk_utils/iam.batch.BatchOperations.property.SubmitServiceJob"></a>

```typescript
public readonly SubmitServiceJob: string[];
```

- *Type:* string[]

IAM actions required for the SubmitServiceJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.batch.BatchOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateJob`<sup>Required</sup> <a name="TerminateJob" id="@cdk_utils/iam.batch.BatchOperations.property.TerminateJob"></a>

```typescript
public readonly TerminateJob: string[];
```

- *Type:* string[]

IAM actions required for the TerminateJob API call.

---

##### `TerminateServiceJob`<sup>Required</sup> <a name="TerminateServiceJob" id="@cdk_utils/iam.batch.BatchOperations.property.TerminateServiceJob"></a>

```typescript
public readonly TerminateServiceJob: string[];
```

- *Type:* string[]

IAM actions required for the TerminateServiceJob API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.batch.BatchOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateComputeEnvironment`<sup>Required</sup> <a name="UpdateComputeEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateComputeEnvironment"></a>

```typescript
public readonly UpdateComputeEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComputeEnvironment API call.

---

##### `UpdateConsumableResource`<sup>Required</sup> <a name="UpdateConsumableResource" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateConsumableResource"></a>

```typescript
public readonly UpdateConsumableResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConsumableResource API call.

---

##### `UpdateJobQueue`<sup>Required</sup> <a name="UpdateJobQueue" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateJobQueue"></a>

```typescript
public readonly UpdateJobQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJobQueue API call.

---

##### `UpdateQuotaShare`<sup>Required</sup> <a name="UpdateQuotaShare" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateQuotaShare"></a>

```typescript
public readonly UpdateQuotaShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuotaShare API call.

---

##### `UpdateSchedulingPolicy`<sup>Required</sup> <a name="UpdateSchedulingPolicy" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateSchedulingPolicy"></a>

```typescript
public readonly UpdateSchedulingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSchedulingPolicy API call.

---

##### `UpdateServiceEnvironment`<sup>Required</sup> <a name="UpdateServiceEnvironment" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateServiceEnvironment"></a>

```typescript
public readonly UpdateServiceEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceEnvironment API call.

---

##### `UpdateServiceJob`<sup>Required</sup> <a name="UpdateServiceJob" id="@cdk_utils/iam.batch.BatchOperations.property.UpdateServiceJob"></a>

```typescript
public readonly UpdateServiceJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceJob API call.

---

### BatchResources <a name="BatchResources" id="@cdk_utils/iam.batch.BatchResources"></a>

ARN builders, validators, and parsers for batch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.batch.BatchResources.Initializer"></a>

```typescript
import { batch } from '@cdk_utils/iam'

new batch.BatchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.computeEnvironment">computeEnvironment</a></code> | Builds an ARN for the compute-environment resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.consumableResource">consumableResource</a></code> | Builds an ARN for the consumable-resource resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidComputeEnvironmentArn">isValidComputeEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the compute-environment resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidConsumableResourceArn">isValidConsumableResourceArn</a></code> | Validates whether a string is a valid ARN for the consumable-resource resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionArn">isValidJobDefinitionArn</a></code> | Validates whether a string is a valid ARN for the job-definition resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionRevisionArn">isValidJobDefinitionRevisionArn</a></code> | Validates whether a string is a valid ARN for the job-definition-revision resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidJobQueueArn">isValidJobQueueArn</a></code> | Validates whether a string is a valid ARN for the job-queue resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidQuotaShareArn">isValidQuotaShareArn</a></code> | Validates whether a string is a valid ARN for the quota-share resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidSchedulingPolicyArn">isValidSchedulingPolicyArn</a></code> | Validates whether a string is a valid ARN for the scheduling-policy resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidServiceEnvironmentArn">isValidServiceEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the service-environment resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.isValidServiceJobArn">isValidServiceJobArn</a></code> | Validates whether a string is a valid ARN for the service-job resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.jobDefinition">jobDefinition</a></code> | Builds an ARN for the job-definition resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.jobDefinitionRevision">jobDefinitionRevision</a></code> | Builds an ARN for the job-definition-revision resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.jobQueue">jobQueue</a></code> | Builds an ARN for the job-queue resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseComputeEnvironmentArn">parseComputeEnvironmentArn</a></code> | Parses a compute-environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseConsumableResourceArn">parseConsumableResourceArn</a></code> | Parses a consumable-resource ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseJobDefinitionArn">parseJobDefinitionArn</a></code> | Parses a job-definition ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseJobDefinitionRevisionArn">parseJobDefinitionRevisionArn</a></code> | Parses a job-definition-revision ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseJobQueueArn">parseJobQueueArn</a></code> | Parses a job-queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseQuotaShareArn">parseQuotaShareArn</a></code> | Parses a quota-share ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseSchedulingPolicyArn">parseSchedulingPolicyArn</a></code> | Parses a scheduling-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseServiceEnvironmentArn">parseServiceEnvironmentArn</a></code> | Parses a service-environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.parseServiceJobArn">parseServiceJobArn</a></code> | Parses a service-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.quotaShare">quotaShare</a></code> | Builds an ARN for the quota-share resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.schedulingPolicy">schedulingPolicy</a></code> | Builds an ARN for the scheduling-policy resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.serviceEnvironment">serviceEnvironment</a></code> | Builds an ARN for the service-environment resource. |
| <code><a href="#@cdk_utils/iam.batch.BatchResources.serviceJob">serviceJob</a></code> | Builds an ARN for the service-job resource. |

---

##### `computeEnvironment` <a name="computeEnvironment" id="@cdk_utils/iam.batch.BatchResources.computeEnvironment"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.computeEnvironment(props: BatchComputeEnvironmentArnProps)
```

Builds an ARN for the compute-environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.computeEnvironment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchComputeEnvironmentArnProps">BatchComputeEnvironmentArnProps</a>

---

##### `consumableResource` <a name="consumableResource" id="@cdk_utils/iam.batch.BatchResources.consumableResource"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.consumableResource(props: BatchConsumableResourceArnProps)
```

Builds an ARN for the consumable-resource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.consumableResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchConsumableResourceArnProps">BatchConsumableResourceArnProps</a>

---

##### `isValidComputeEnvironmentArn` <a name="isValidComputeEnvironmentArn" id="@cdk_utils/iam.batch.BatchResources.isValidComputeEnvironmentArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidComputeEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the compute-environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidComputeEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConsumableResourceArn` <a name="isValidConsumableResourceArn" id="@cdk_utils/iam.batch.BatchResources.isValidConsumableResourceArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidConsumableResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the consumable-resource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidConsumableResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.batch.BatchResources.isValidJobArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobDefinitionArn` <a name="isValidJobDefinitionArn" id="@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidJobDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the job-definition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobDefinitionRevisionArn` <a name="isValidJobDefinitionRevisionArn" id="@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionRevisionArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidJobDefinitionRevisionArn(arn: string)
```

Validates whether a string is a valid ARN for the job-definition-revision resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidJobDefinitionRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobQueueArn` <a name="isValidJobQueueArn" id="@cdk_utils/iam.batch.BatchResources.isValidJobQueueArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidJobQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the job-queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidJobQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQuotaShareArn` <a name="isValidQuotaShareArn" id="@cdk_utils/iam.batch.BatchResources.isValidQuotaShareArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidQuotaShareArn(arn: string)
```

Validates whether a string is a valid ARN for the quota-share resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidQuotaShareArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSchedulingPolicyArn` <a name="isValidSchedulingPolicyArn" id="@cdk_utils/iam.batch.BatchResources.isValidSchedulingPolicyArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidSchedulingPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the scheduling-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidSchedulingPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceEnvironmentArn` <a name="isValidServiceEnvironmentArn" id="@cdk_utils/iam.batch.BatchResources.isValidServiceEnvironmentArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidServiceEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the service-environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidServiceEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceJobArn` <a name="isValidServiceJobArn" id="@cdk_utils/iam.batch.BatchResources.isValidServiceJobArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.isValidServiceJobArn(arn: string)
```

Validates whether a string is a valid ARN for the service-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.isValidServiceJobArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.batch.BatchResources.job"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.job(props: BatchJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchJobArnProps">BatchJobArnProps</a>

---

##### `jobDefinition` <a name="jobDefinition" id="@cdk_utils/iam.batch.BatchResources.jobDefinition"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.jobDefinition(props: BatchJobDefinitionArnProps)
```

Builds an ARN for the job-definition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.jobDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchJobDefinitionArnProps">BatchJobDefinitionArnProps</a>

---

##### `jobDefinitionRevision` <a name="jobDefinitionRevision" id="@cdk_utils/iam.batch.BatchResources.jobDefinitionRevision"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.jobDefinitionRevision(props: BatchJobDefinitionRevisionArnProps)
```

Builds an ARN for the job-definition-revision resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.jobDefinitionRevision.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchJobDefinitionRevisionArnProps">BatchJobDefinitionRevisionArnProps</a>

---

##### `jobQueue` <a name="jobQueue" id="@cdk_utils/iam.batch.BatchResources.jobQueue"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.jobQueue(props: BatchJobQueueArnProps)
```

Builds an ARN for the job-queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.jobQueue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchJobQueueArnProps">BatchJobQueueArnProps</a>

---

##### `parseComputeEnvironmentArn` <a name="parseComputeEnvironmentArn" id="@cdk_utils/iam.batch.BatchResources.parseComputeEnvironmentArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseComputeEnvironmentArn(arn: string)
```

Parses a compute-environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseComputeEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConsumableResourceArn` <a name="parseConsumableResourceArn" id="@cdk_utils/iam.batch.BatchResources.parseConsumableResourceArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseConsumableResourceArn(arn: string)
```

Parses a consumable-resource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseConsumableResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.batch.BatchResources.parseJobArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobDefinitionArn` <a name="parseJobDefinitionArn" id="@cdk_utils/iam.batch.BatchResources.parseJobDefinitionArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseJobDefinitionArn(arn: string)
```

Parses a job-definition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseJobDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobDefinitionRevisionArn` <a name="parseJobDefinitionRevisionArn" id="@cdk_utils/iam.batch.BatchResources.parseJobDefinitionRevisionArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseJobDefinitionRevisionArn(arn: string)
```

Parses a job-definition-revision ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseJobDefinitionRevisionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobQueueArn` <a name="parseJobQueueArn" id="@cdk_utils/iam.batch.BatchResources.parseJobQueueArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseJobQueueArn(arn: string)
```

Parses a job-queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseJobQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuotaShareArn` <a name="parseQuotaShareArn" id="@cdk_utils/iam.batch.BatchResources.parseQuotaShareArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseQuotaShareArn(arn: string)
```

Parses a quota-share ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseQuotaShareArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSchedulingPolicyArn` <a name="parseSchedulingPolicyArn" id="@cdk_utils/iam.batch.BatchResources.parseSchedulingPolicyArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseSchedulingPolicyArn(arn: string)
```

Parses a scheduling-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseSchedulingPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceEnvironmentArn` <a name="parseServiceEnvironmentArn" id="@cdk_utils/iam.batch.BatchResources.parseServiceEnvironmentArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseServiceEnvironmentArn(arn: string)
```

Parses a service-environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseServiceEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceJobArn` <a name="parseServiceJobArn" id="@cdk_utils/iam.batch.BatchResources.parseServiceJobArn"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.parseServiceJobArn(arn: string)
```

Parses a service-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.batch.BatchResources.parseServiceJobArn.parameter.arn"></a>

- *Type:* string

---

##### `quotaShare` <a name="quotaShare" id="@cdk_utils/iam.batch.BatchResources.quotaShare"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.quotaShare(props: BatchQuotaShareArnProps)
```

Builds an ARN for the quota-share resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.quotaShare.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchQuotaShareArnProps">BatchQuotaShareArnProps</a>

---

##### `schedulingPolicy` <a name="schedulingPolicy" id="@cdk_utils/iam.batch.BatchResources.schedulingPolicy"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.schedulingPolicy(props: BatchSchedulingPolicyArnProps)
```

Builds an ARN for the scheduling-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.schedulingPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchSchedulingPolicyArnProps">BatchSchedulingPolicyArnProps</a>

---

##### `serviceEnvironment` <a name="serviceEnvironment" id="@cdk_utils/iam.batch.BatchResources.serviceEnvironment"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.serviceEnvironment(props: BatchServiceEnvironmentArnProps)
```

Builds an ARN for the service-environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.serviceEnvironment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchServiceEnvironmentArnProps">BatchServiceEnvironmentArnProps</a>

---

##### `serviceJob` <a name="serviceJob" id="@cdk_utils/iam.batch.BatchResources.serviceJob"></a>

```typescript
import { batch } from '@cdk_utils/iam'

batch.BatchResources.serviceJob(props: BatchServiceJobArnProps)
```

Builds an ARN for the service-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.batch.BatchResources.serviceJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.batch.BatchServiceJobArnProps">BatchServiceJobArnProps</a>

---




