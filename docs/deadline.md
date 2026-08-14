# `deadline` Submodule <a name="`deadline` Submodule" id="@cdk_utils/iam.deadline"></a>


## Structs <a name="Structs" id="Structs"></a>

### DeadlineBudgetArnComponents <a name="DeadlineBudgetArnComponents" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents"></a>

Parsed components of a budget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineBudgetArnComponents: deadline.DeadlineBudgetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.budgetId">budgetId</a></code> | <code>string</code> | The BudgetId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `budgetId`<sup>Required</sup> <a name="budgetId" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.budgetId"></a>

```typescript
public readonly budgetId: string;
```

- *Type:* string

The BudgetId component.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineBudgetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineBudgetArnProps <a name="DeadlineBudgetArnProps" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps"></a>

Properties for building a budget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineBudgetArnProps: deadline.DeadlineBudgetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.budgetId">budgetId</a></code> | <code>string</code> | The BudgetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `budgetId`<sup>Required</sup> <a name="budgetId" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.budgetId"></a>

```typescript
public readonly budgetId: string;
```

- *Type:* string

The BudgetId component of the ARN.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineBudgetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineFarmArnComponents <a name="DeadlineFarmArnComponents" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents"></a>

Parsed components of a farm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineFarmArnComponents: deadline.DeadlineFarmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineFarmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineFarmArnProps <a name="DeadlineFarmArnProps" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps"></a>

Properties for building a farm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineFarmArnProps: deadline.DeadlineFarmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineFarmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineFleetArnComponents <a name="DeadlineFleetArnComponents" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineFleetArnComponents: deadline.DeadlineFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineFleetArnProps <a name="DeadlineFleetArnProps" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineFleetArnProps: deadline.DeadlineFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineJobArnComponents <a name="DeadlineJobArnComponents" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineJobArnComponents: deadline.DeadlineJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineJobArnProps <a name="DeadlineJobArnProps" id="@cdk_utils/iam.deadline.DeadlineJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineJobArnProps: deadline.DeadlineJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineLicenseEndpointArnComponents <a name="DeadlineLicenseEndpointArnComponents" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents"></a>

Parsed components of a license-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineLicenseEndpointArnComponents: deadline.DeadlineLicenseEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.licenseEndpointId">licenseEndpointId</a></code> | <code>string</code> | The LicenseEndpointId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `licenseEndpointId`<sup>Required</sup> <a name="licenseEndpointId" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.licenseEndpointId"></a>

```typescript
public readonly licenseEndpointId: string;
```

- *Type:* string

The LicenseEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineLicenseEndpointArnProps <a name="DeadlineLicenseEndpointArnProps" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps"></a>

Properties for building a license-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineLicenseEndpointArnProps: deadline.DeadlineLicenseEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.licenseEndpointId">licenseEndpointId</a></code> | <code>string</code> | The LicenseEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `licenseEndpointId`<sup>Required</sup> <a name="licenseEndpointId" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.licenseEndpointId"></a>

```typescript
public readonly licenseEndpointId: string;
```

- *Type:* string

The LicenseEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineMonitorArnComponents <a name="DeadlineMonitorArnComponents" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents"></a>

Parsed components of a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineMonitorArnComponents: deadline.DeadlineMonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.monitorId">monitorId</a></code> | <code>string</code> | The MonitorId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

The MonitorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineMonitorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineMonitorArnProps <a name="DeadlineMonitorArnProps" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps"></a>

Properties for building a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineMonitorArnProps: deadline.DeadlineMonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.monitorId">monitorId</a></code> | <code>string</code> | The MonitorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

The MonitorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineMonitorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineQueueArnComponents <a name="DeadlineQueueArnComponents" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents"></a>

Parsed components of a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineQueueArnComponents: deadline.DeadlineQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DeadlineQueueArnProps <a name="DeadlineQueueArnProps" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps"></a>

Properties for building a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineQueueArnProps: deadline.DeadlineQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineVolumeArnComponents <a name="DeadlineVolumeArnComponents" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents"></a>

Parsed components of a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineVolumeArnComponents: deadline.DeadlineVolumeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### DeadlineVolumeArnProps <a name="DeadlineVolumeArnProps" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps"></a>

Properties for building a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineVolumeArnProps: deadline.DeadlineVolumeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineVolumeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DeadlineWorkerArnComponents <a name="DeadlineWorkerArnComponents" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents"></a>

Parsed components of a worker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineWorkerArnComponents: deadline.DeadlineWorkerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.workerId">workerId</a></code> | <code>string</code> | The WorkerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnComponents.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

The WorkerId component.

---

### DeadlineWorkerArnProps <a name="DeadlineWorkerArnProps" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps"></a>

Properties for building a worker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

const deadlineWorkerArnProps: deadline.DeadlineWorkerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.farmId">farmId</a></code> | <code>string</code> | The FarmId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.workerId">workerId</a></code> | <code>string</code> | The WorkerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `farmId`<sup>Required</sup> <a name="farmId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.farmId"></a>

```typescript
public readonly farmId: string;
```

- *Type:* string

The FarmId component of the ARN.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

The WorkerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.deadline.DeadlineWorkerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineActions <a name="DeadlineActions" id="@cdk_utils/iam.deadline.DeadlineActions"></a>

IAM action constants for the deadline service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.deadline.DeadlineActions.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

new deadline.DeadlineActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetApplicationVersion">actionGetApplicationVersion</a></code> | <code>string</code> | [Read] deadline:GetApplicationVersion. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetBudget">actionGetBudget</a></code> | <code>string</code> | [Read] deadline:GetBudget. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetFarm">actionGetFarm</a></code> | <code>string</code> | [Read] deadline:GetFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetFleet">actionGetFleet</a></code> | <code>string</code> | [Read] deadline:GetFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] deadline:GetJob. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetJobTemplate">actionGetJobTemplate</a></code> | <code>string</code> | [Read] deadline:GetJobTemplate. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetLicenseEndpoint">actionGetLicenseEndpoint</a></code> | <code>string</code> | [Read] deadline:GetLicenseEndpoint. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetLimit">actionGetLimit</a></code> | <code>string</code> | [Read] deadline:GetLimit. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetMonitor">actionGetMonitor</a></code> | <code>string</code> | [Read] deadline:GetMonitor. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetMonitorSettings">actionGetMonitorSettings</a></code> | <code>string</code> | [Read] deadline:GetMonitorSettings. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueue">actionGetQueue</a></code> | <code>string</code> | [Read] deadline:GetQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueEnvironment">actionGetQueueEnvironment</a></code> | <code>string</code> | [Read] deadline:GetQueueEnvironment. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueFleetAssociation">actionGetQueueFleetAssociation</a></code> | <code>string</code> | [Read] deadline:GetQueueFleetAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueLimitAssociation">actionGetQueueLimitAssociation</a></code> | <code>string</code> | [Read] deadline:GetQueueLimitAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] deadline:GetSession. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSessionAction">actionGetSessionAction</a></code> | <code>string</code> | [Read] deadline:GetSessionAction. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSessionsStatisticsAggregation">actionGetSessionsStatisticsAggregation</a></code> | <code>string</code> | [Read] deadline:GetSessionsStatisticsAggregation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStep">actionGetStep</a></code> | <code>string</code> | [Read] deadline:GetStep. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStorageProfile">actionGetStorageProfile</a></code> | <code>string</code> | [Read] deadline:GetStorageProfile. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStorageProfileForQueue">actionGetStorageProfileForQueue</a></code> | <code>string</code> | [Read] deadline:GetStorageProfileForQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetTask">actionGetTask</a></code> | <code>string</code> | [Read] deadline:GetTask. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetVolume">actionGetVolume</a></code> | <code>string</code> | [Read] deadline:GetVolume. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.actionGetWorker">actionGetWorker</a></code> | <code>string</code> | [Read] deadline:GetWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToFarm">AssociateMemberToFarm</a></code> | <code>string</code> | [PermissionManagement] deadline:AssociateMemberToFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToFleet">AssociateMemberToFleet</a></code> | <code>string</code> | [PermissionManagement] deadline:AssociateMemberToFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToJob">AssociateMemberToJob</a></code> | <code>string</code> | [PermissionManagement] deadline:AssociateMemberToJob. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToQueue">AssociateMemberToQueue</a></code> | <code>string</code> | [PermissionManagement] deadline:AssociateMemberToQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssumeFleetRoleForRead">AssumeFleetRoleForRead</a></code> | <code>string</code> | [Write] deadline:AssumeFleetRoleForRead. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssumeFleetRoleForWorker">AssumeFleetRoleForWorker</a></code> | <code>string</code> | [Write] deadline:AssumeFleetRoleForWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForRead">AssumeQueueRoleForRead</a></code> | <code>string</code> | [Write] deadline:AssumeQueueRoleForRead. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForUser">AssumeQueueRoleForUser</a></code> | <code>string</code> | [Write] deadline:AssumeQueueRoleForUser. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForWorker">AssumeQueueRoleForWorker</a></code> | <code>string</code> | [Write] deadline:AssumeQueueRoleForWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.BatchGetJobEntity">BatchGetJobEntity</a></code> | <code>string</code> | [Read] deadline:BatchGetJobEntity. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CopyJobTemplate">CopyJobTemplate</a></code> | <code>string</code> | [Write] deadline:CopyJobTemplate. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateBudget">CreateBudget</a></code> | <code>string</code> | [Write] deadline:CreateBudget. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateFarm">CreateFarm</a></code> | <code>string</code> | [Write] deadline:CreateFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] deadline:CreateFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] deadline:CreateJob. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateLicenseEndpoint">CreateLicenseEndpoint</a></code> | <code>string</code> | [Write] deadline:CreateLicenseEndpoint. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateLimit">CreateLimit</a></code> | <code>string</code> | [Write] deadline:CreateLimit. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateMonitor">CreateMonitor</a></code> | <code>string</code> | [Write] deadline:CreateMonitor. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueue">CreateQueue</a></code> | <code>string</code> | [Write] deadline:CreateQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueEnvironment">CreateQueueEnvironment</a></code> | <code>string</code> | [Write] deadline:CreateQueueEnvironment. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueFleetAssociation">CreateQueueFleetAssociation</a></code> | <code>string</code> | [Write] deadline:CreateQueueFleetAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueLimitAssociation">CreateQueueLimitAssociation</a></code> | <code>string</code> | [Write] deadline:CreateQueueLimitAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateStorageProfile">CreateStorageProfile</a></code> | <code>string</code> | [Write] deadline:CreateStorageProfile. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.CreateWorker">CreateWorker</a></code> | <code>string</code> | [Write] deadline:CreateWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteBudget">DeleteBudget</a></code> | <code>string</code> | [Write] deadline:DeleteBudget. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteFarm">DeleteFarm</a></code> | <code>string</code> | [Write] deadline:DeleteFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] deadline:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteLicenseEndpoint">DeleteLicenseEndpoint</a></code> | <code>string</code> | [Write] deadline:DeleteLicenseEndpoint. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteLimit">DeleteLimit</a></code> | <code>string</code> | [Write] deadline:DeleteLimit. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteMeteredProduct">DeleteMeteredProduct</a></code> | <code>string</code> | [Write] deadline:DeleteMeteredProduct. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string</code> | [Write] deadline:DeleteMonitor. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueue">DeleteQueue</a></code> | <code>string</code> | [Write] deadline:DeleteQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueEnvironment">DeleteQueueEnvironment</a></code> | <code>string</code> | [Write] deadline:DeleteQueueEnvironment. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueFleetAssociation">DeleteQueueFleetAssociation</a></code> | <code>string</code> | [Write] deadline:DeleteQueueFleetAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueLimitAssociation">DeleteQueueLimitAssociation</a></code> | <code>string</code> | [Write] deadline:DeleteQueueLimitAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteStorageProfile">DeleteStorageProfile</a></code> | <code>string</code> | [Write] deadline:DeleteStorageProfile. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteVolume">DeleteVolume</a></code> | <code>string</code> | [Write] deadline:DeleteVolume. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DeleteWorker">DeleteWorker</a></code> | <code>string</code> | [Write] deadline:DeleteWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromFarm">DisassociateMemberFromFarm</a></code> | <code>string</code> | [PermissionManagement] deadline:DisassociateMemberFromFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromFleet">DisassociateMemberFromFleet</a></code> | <code>string</code> | [PermissionManagement] deadline:DisassociateMemberFromFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromJob">DisassociateMemberFromJob</a></code> | <code>string</code> | [PermissionManagement] deadline:DisassociateMemberFromJob. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromQueue">DisassociateMemberFromQueue</a></code> | <code>string</code> | [PermissionManagement] deadline:DisassociateMemberFromQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListAvailableMeteredProducts">ListAvailableMeteredProducts</a></code> | <code>string</code> | [List] deadline:ListAvailableMeteredProducts. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListBudgets">ListBudgets</a></code> | <code>string</code> | [List] deadline:ListBudgets. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListFarmMembers">ListFarmMembers</a></code> | <code>string</code> | [List] deadline:ListFarmMembers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListFarms">ListFarms</a></code> | <code>string</code> | [List] deadline:ListFarms. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListFleetMembers">ListFleetMembers</a></code> | <code>string</code> | [List] deadline:ListFleetMembers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [List] deadline:ListFleets. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListJobMembers">ListJobMembers</a></code> | <code>string</code> | [List] deadline:ListJobMembers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListJobParameterDefinitions">ListJobParameterDefinitions</a></code> | <code>string</code> | [List] deadline:ListJobParameterDefinitions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] deadline:ListJobs. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListLicenseEndpoints">ListLicenseEndpoints</a></code> | <code>string</code> | [List] deadline:ListLicenseEndpoints. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListLimits">ListLimits</a></code> | <code>string</code> | [List] deadline:ListLimits. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListMeteredProducts">ListMeteredProducts</a></code> | <code>string</code> | [List] deadline:ListMeteredProducts. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListMonitors">ListMonitors</a></code> | <code>string</code> | [List] deadline:ListMonitors. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueEnvironments">ListQueueEnvironments</a></code> | <code>string</code> | [List] deadline:ListQueueEnvironments. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueFleetAssociations">ListQueueFleetAssociations</a></code> | <code>string</code> | [List] deadline:ListQueueFleetAssociations. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueLimitAssociations">ListQueueLimitAssociations</a></code> | <code>string</code> | [List] deadline:ListQueueLimitAssociations. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueMembers">ListQueueMembers</a></code> | <code>string</code> | [List] deadline:ListQueueMembers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListQueues">ListQueues</a></code> | <code>string</code> | [List] deadline:ListQueues. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListSessionActions">ListSessionActions</a></code> | <code>string</code> | [List] deadline:ListSessionActions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListSessions">ListSessions</a></code> | <code>string</code> | [List] deadline:ListSessions. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListSessionsForWorker">ListSessionsForWorker</a></code> | <code>string</code> | [List] deadline:ListSessionsForWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListStepConsumers">ListStepConsumers</a></code> | <code>string</code> | [List] deadline:ListStepConsumers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListStepDependencies">ListStepDependencies</a></code> | <code>string</code> | [List] deadline:ListStepDependencies. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListSteps">ListSteps</a></code> | <code>string</code> | [List] deadline:ListSteps. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListStorageProfiles">ListStorageProfiles</a></code> | <code>string</code> | [List] deadline:ListStorageProfiles. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListStorageProfilesForQueue">ListStorageProfilesForQueue</a></code> | <code>string</code> | [List] deadline:ListStorageProfilesForQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] deadline:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] deadline:ListTasks. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListVolumes">ListVolumes</a></code> | <code>string</code> | [List] deadline:ListVolumes. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.ListWorkers">ListWorkers</a></code> | <code>string</code> | [List] deadline:ListWorkers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.PutMeteredProduct">PutMeteredProduct</a></code> | <code>string</code> | [Write] deadline:PutMeteredProduct. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.SearchJobs">SearchJobs</a></code> | <code>string</code> | [Read] deadline:SearchJobs. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.SearchSteps">SearchSteps</a></code> | <code>string</code> | [Read] deadline:SearchSteps. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.SearchTasks">SearchTasks</a></code> | <code>string</code> | [Read] deadline:SearchTasks. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.SearchWorkers">SearchWorkers</a></code> | <code>string</code> | [Read] deadline:SearchWorkers. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.StartSessionsStatisticsAggregation">StartSessionsStatisticsAggregation</a></code> | <code>string</code> | [Read] deadline:StartSessionsStatisticsAggregation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] deadline:TagResource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] deadline:UntagResource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateBudget">UpdateBudget</a></code> | <code>string</code> | [Write] deadline:UpdateBudget. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateFarm">UpdateFarm</a></code> | <code>string</code> | [Write] deadline:UpdateFarm. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateFleet">UpdateFleet</a></code> | <code>string</code> | [Write] deadline:UpdateFleet. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateJob">UpdateJob</a></code> | <code>string</code> | [Write] deadline:UpdateJob. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateLimit">UpdateLimit</a></code> | <code>string</code> | [Write] deadline:UpdateLimit. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string</code> | [Write] deadline:UpdateMonitor. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateMonitorSettings">UpdateMonitorSettings</a></code> | <code>string</code> | [Write] deadline:UpdateMonitorSettings. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueue">UpdateQueue</a></code> | <code>string</code> | [Write] deadline:UpdateQueue. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueEnvironment">UpdateQueueEnvironment</a></code> | <code>string</code> | [Write] deadline:UpdateQueueEnvironment. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueFleetAssociation">UpdateQueueFleetAssociation</a></code> | <code>string</code> | [Write] deadline:UpdateQueueFleetAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueLimitAssociation">UpdateQueueLimitAssociation</a></code> | <code>string</code> | [Write] deadline:UpdateQueueLimitAssociation. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateSession">UpdateSession</a></code> | <code>string</code> | [Write] deadline:UpdateSession. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateStep">UpdateStep</a></code> | <code>string</code> | [Write] deadline:UpdateStep. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateStorageProfile">UpdateStorageProfile</a></code> | <code>string</code> | [Write] deadline:UpdateStorageProfile. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateTask">UpdateTask</a></code> | <code>string</code> | [Write] deadline:UpdateTask. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateWorker">UpdateWorker</a></code> | <code>string</code> | [Write] deadline:UpdateWorker. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineActions.property.UpdateWorkerSchedule">UpdateWorkerSchedule</a></code> | <code>string</code> | [Write] deadline:UpdateWorkerSchedule. |

---

##### `actionGetApplicationVersion`<sup>Required</sup> <a name="actionGetApplicationVersion" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetApplicationVersion"></a>

```typescript
public readonly actionGetApplicationVersion: string;
```

- *Type:* string

[Read] deadline:GetApplicationVersion.

---

##### `actionGetBudget`<sup>Required</sup> <a name="actionGetBudget" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetBudget"></a>

```typescript
public readonly actionGetBudget: string;
```

- *Type:* string

[Read] deadline:GetBudget.

---

##### `actionGetFarm`<sup>Required</sup> <a name="actionGetFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetFarm"></a>

```typescript
public readonly actionGetFarm: string;
```

- *Type:* string

[Read] deadline:GetFarm.

---

##### `actionGetFleet`<sup>Required</sup> <a name="actionGetFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetFleet"></a>

```typescript
public readonly actionGetFleet: string;
```

- *Type:* string

[Read] deadline:GetFleet.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] deadline:GetJob.

---

##### `actionGetJobTemplate`<sup>Required</sup> <a name="actionGetJobTemplate" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetJobTemplate"></a>

```typescript
public readonly actionGetJobTemplate: string;
```

- *Type:* string

[Read] deadline:GetJobTemplate.

---

##### `actionGetLicenseEndpoint`<sup>Required</sup> <a name="actionGetLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetLicenseEndpoint"></a>

```typescript
public readonly actionGetLicenseEndpoint: string;
```

- *Type:* string

[Read] deadline:GetLicenseEndpoint.

---

##### `actionGetLimit`<sup>Required</sup> <a name="actionGetLimit" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetLimit"></a>

```typescript
public readonly actionGetLimit: string;
```

- *Type:* string

[Read] deadline:GetLimit.

---

##### `actionGetMonitor`<sup>Required</sup> <a name="actionGetMonitor" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetMonitor"></a>

```typescript
public readonly actionGetMonitor: string;
```

- *Type:* string

[Read] deadline:GetMonitor.

---

##### `actionGetMonitorSettings`<sup>Required</sup> <a name="actionGetMonitorSettings" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetMonitorSettings"></a>

```typescript
public readonly actionGetMonitorSettings: string;
```

- *Type:* string

[Read] deadline:GetMonitorSettings.

---

##### `actionGetQueue`<sup>Required</sup> <a name="actionGetQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueue"></a>

```typescript
public readonly actionGetQueue: string;
```

- *Type:* string

[Read] deadline:GetQueue.

---

##### `actionGetQueueEnvironment`<sup>Required</sup> <a name="actionGetQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueEnvironment"></a>

```typescript
public readonly actionGetQueueEnvironment: string;
```

- *Type:* string

[Read] deadline:GetQueueEnvironment.

---

##### `actionGetQueueFleetAssociation`<sup>Required</sup> <a name="actionGetQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueFleetAssociation"></a>

```typescript
public readonly actionGetQueueFleetAssociation: string;
```

- *Type:* string

[Read] deadline:GetQueueFleetAssociation.

---

##### `actionGetQueueLimitAssociation`<sup>Required</sup> <a name="actionGetQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetQueueLimitAssociation"></a>

```typescript
public readonly actionGetQueueLimitAssociation: string;
```

- *Type:* string

[Read] deadline:GetQueueLimitAssociation.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] deadline:GetSession.

---

##### `actionGetSessionAction`<sup>Required</sup> <a name="actionGetSessionAction" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSessionAction"></a>

```typescript
public readonly actionGetSessionAction: string;
```

- *Type:* string

[Read] deadline:GetSessionAction.

---

##### `actionGetSessionsStatisticsAggregation`<sup>Required</sup> <a name="actionGetSessionsStatisticsAggregation" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetSessionsStatisticsAggregation"></a>

```typescript
public readonly actionGetSessionsStatisticsAggregation: string;
```

- *Type:* string

[Read] deadline:GetSessionsStatisticsAggregation.

---

##### `actionGetStep`<sup>Required</sup> <a name="actionGetStep" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStep"></a>

```typescript
public readonly actionGetStep: string;
```

- *Type:* string

[Read] deadline:GetStep.

---

##### `actionGetStorageProfile`<sup>Required</sup> <a name="actionGetStorageProfile" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStorageProfile"></a>

```typescript
public readonly actionGetStorageProfile: string;
```

- *Type:* string

[Read] deadline:GetStorageProfile.

---

##### `actionGetStorageProfileForQueue`<sup>Required</sup> <a name="actionGetStorageProfileForQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetStorageProfileForQueue"></a>

```typescript
public readonly actionGetStorageProfileForQueue: string;
```

- *Type:* string

[Read] deadline:GetStorageProfileForQueue.

---

##### `actionGetTask`<sup>Required</sup> <a name="actionGetTask" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetTask"></a>

```typescript
public readonly actionGetTask: string;
```

- *Type:* string

[Read] deadline:GetTask.

---

##### `actionGetVolume`<sup>Required</sup> <a name="actionGetVolume" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetVolume"></a>

```typescript
public readonly actionGetVolume: string;
```

- *Type:* string

[Read] deadline:GetVolume.

---

##### `actionGetWorker`<sup>Required</sup> <a name="actionGetWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.actionGetWorker"></a>

```typescript
public readonly actionGetWorker: string;
```

- *Type:* string

[Read] deadline:GetWorker.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateMemberToFarm`<sup>Required</sup> <a name="AssociateMemberToFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToFarm"></a>

```typescript
public readonly AssociateMemberToFarm: string;
```

- *Type:* string

[PermissionManagement] deadline:AssociateMemberToFarm.

---

##### `AssociateMemberToFleet`<sup>Required</sup> <a name="AssociateMemberToFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToFleet"></a>

```typescript
public readonly AssociateMemberToFleet: string;
```

- *Type:* string

[PermissionManagement] deadline:AssociateMemberToFleet.

---

##### `AssociateMemberToJob`<sup>Required</sup> <a name="AssociateMemberToJob" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToJob"></a>

```typescript
public readonly AssociateMemberToJob: string;
```

- *Type:* string

[PermissionManagement] deadline:AssociateMemberToJob.

---

##### `AssociateMemberToQueue`<sup>Required</sup> <a name="AssociateMemberToQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssociateMemberToQueue"></a>

```typescript
public readonly AssociateMemberToQueue: string;
```

- *Type:* string

[PermissionManagement] deadline:AssociateMemberToQueue.

---

##### `AssumeFleetRoleForRead`<sup>Required</sup> <a name="AssumeFleetRoleForRead" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssumeFleetRoleForRead"></a>

```typescript
public readonly AssumeFleetRoleForRead: string;
```

- *Type:* string

[Write] deadline:AssumeFleetRoleForRead.

---

##### `AssumeFleetRoleForWorker`<sup>Required</sup> <a name="AssumeFleetRoleForWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssumeFleetRoleForWorker"></a>

```typescript
public readonly AssumeFleetRoleForWorker: string;
```

- *Type:* string

[Write] deadline:AssumeFleetRoleForWorker.

---

##### `AssumeQueueRoleForRead`<sup>Required</sup> <a name="AssumeQueueRoleForRead" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForRead"></a>

```typescript
public readonly AssumeQueueRoleForRead: string;
```

- *Type:* string

[Write] deadline:AssumeQueueRoleForRead.

---

##### `AssumeQueueRoleForUser`<sup>Required</sup> <a name="AssumeQueueRoleForUser" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForUser"></a>

```typescript
public readonly AssumeQueueRoleForUser: string;
```

- *Type:* string

[Write] deadline:AssumeQueueRoleForUser.

---

##### `AssumeQueueRoleForWorker`<sup>Required</sup> <a name="AssumeQueueRoleForWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.AssumeQueueRoleForWorker"></a>

```typescript
public readonly AssumeQueueRoleForWorker: string;
```

- *Type:* string

[Write] deadline:AssumeQueueRoleForWorker.

---

##### `BatchGetJobEntity`<sup>Required</sup> <a name="BatchGetJobEntity" id="@cdk_utils/iam.deadline.DeadlineActions.property.BatchGetJobEntity"></a>

```typescript
public readonly BatchGetJobEntity: string;
```

- *Type:* string

[Read] deadline:BatchGetJobEntity.

---

##### `CopyJobTemplate`<sup>Required</sup> <a name="CopyJobTemplate" id="@cdk_utils/iam.deadline.DeadlineActions.property.CopyJobTemplate"></a>

```typescript
public readonly CopyJobTemplate: string;
```

- *Type:* string

[Write] deadline:CopyJobTemplate.

---

##### `CreateBudget`<sup>Required</sup> <a name="CreateBudget" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateBudget"></a>

```typescript
public readonly CreateBudget: string;
```

- *Type:* string

[Write] deadline:CreateBudget.

---

##### `CreateFarm`<sup>Required</sup> <a name="CreateFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateFarm"></a>

```typescript
public readonly CreateFarm: string;
```

- *Type:* string

[Write] deadline:CreateFarm.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] deadline:CreateFleet.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] deadline:CreateJob.

---

##### `CreateLicenseEndpoint`<sup>Required</sup> <a name="CreateLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateLicenseEndpoint"></a>

```typescript
public readonly CreateLicenseEndpoint: string;
```

- *Type:* string

[Write] deadline:CreateLicenseEndpoint.

---

##### `CreateLimit`<sup>Required</sup> <a name="CreateLimit" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateLimit"></a>

```typescript
public readonly CreateLimit: string;
```

- *Type:* string

[Write] deadline:CreateLimit.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string;
```

- *Type:* string

[Write] deadline:CreateMonitor.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string;
```

- *Type:* string

[Write] deadline:CreateQueue.

---

##### `CreateQueueEnvironment`<sup>Required</sup> <a name="CreateQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueEnvironment"></a>

```typescript
public readonly CreateQueueEnvironment: string;
```

- *Type:* string

[Write] deadline:CreateQueueEnvironment.

---

##### `CreateQueueFleetAssociation`<sup>Required</sup> <a name="CreateQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueFleetAssociation"></a>

```typescript
public readonly CreateQueueFleetAssociation: string;
```

- *Type:* string

[Write] deadline:CreateQueueFleetAssociation.

---

##### `CreateQueueLimitAssociation`<sup>Required</sup> <a name="CreateQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateQueueLimitAssociation"></a>

```typescript
public readonly CreateQueueLimitAssociation: string;
```

- *Type:* string

[Write] deadline:CreateQueueLimitAssociation.

---

##### `CreateStorageProfile`<sup>Required</sup> <a name="CreateStorageProfile" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateStorageProfile"></a>

```typescript
public readonly CreateStorageProfile: string;
```

- *Type:* string

[Write] deadline:CreateStorageProfile.

---

##### `CreateWorker`<sup>Required</sup> <a name="CreateWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.CreateWorker"></a>

```typescript
public readonly CreateWorker: string;
```

- *Type:* string

[Write] deadline:CreateWorker.

---

##### `DeleteBudget`<sup>Required</sup> <a name="DeleteBudget" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteBudget"></a>

```typescript
public readonly DeleteBudget: string;
```

- *Type:* string

[Write] deadline:DeleteBudget.

---

##### `DeleteFarm`<sup>Required</sup> <a name="DeleteFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteFarm"></a>

```typescript
public readonly DeleteFarm: string;
```

- *Type:* string

[Write] deadline:DeleteFarm.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] deadline:DeleteFleet.

---

##### `DeleteLicenseEndpoint`<sup>Required</sup> <a name="DeleteLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteLicenseEndpoint"></a>

```typescript
public readonly DeleteLicenseEndpoint: string;
```

- *Type:* string

[Write] deadline:DeleteLicenseEndpoint.

---

##### `DeleteLimit`<sup>Required</sup> <a name="DeleteLimit" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteLimit"></a>

```typescript
public readonly DeleteLimit: string;
```

- *Type:* string

[Write] deadline:DeleteLimit.

---

##### `DeleteMeteredProduct`<sup>Required</sup> <a name="DeleteMeteredProduct" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteMeteredProduct"></a>

```typescript
public readonly DeleteMeteredProduct: string;
```

- *Type:* string

[Write] deadline:DeleteMeteredProduct.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string;
```

- *Type:* string

[Write] deadline:DeleteMonitor.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string;
```

- *Type:* string

[Write] deadline:DeleteQueue.

---

##### `DeleteQueueEnvironment`<sup>Required</sup> <a name="DeleteQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueEnvironment"></a>

```typescript
public readonly DeleteQueueEnvironment: string;
```

- *Type:* string

[Write] deadline:DeleteQueueEnvironment.

---

##### `DeleteQueueFleetAssociation`<sup>Required</sup> <a name="DeleteQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueFleetAssociation"></a>

```typescript
public readonly DeleteQueueFleetAssociation: string;
```

- *Type:* string

[Write] deadline:DeleteQueueFleetAssociation.

---

##### `DeleteQueueLimitAssociation`<sup>Required</sup> <a name="DeleteQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteQueueLimitAssociation"></a>

```typescript
public readonly DeleteQueueLimitAssociation: string;
```

- *Type:* string

[Write] deadline:DeleteQueueLimitAssociation.

---

##### `DeleteStorageProfile`<sup>Required</sup> <a name="DeleteStorageProfile" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteStorageProfile"></a>

```typescript
public readonly DeleteStorageProfile: string;
```

- *Type:* string

[Write] deadline:DeleteStorageProfile.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string;
```

- *Type:* string

[Write] deadline:DeleteVolume.

---

##### `DeleteWorker`<sup>Required</sup> <a name="DeleteWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.DeleteWorker"></a>

```typescript
public readonly DeleteWorker: string;
```

- *Type:* string

[Write] deadline:DeleteWorker.

---

##### `DisassociateMemberFromFarm`<sup>Required</sup> <a name="DisassociateMemberFromFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromFarm"></a>

```typescript
public readonly DisassociateMemberFromFarm: string;
```

- *Type:* string

[PermissionManagement] deadline:DisassociateMemberFromFarm.

---

##### `DisassociateMemberFromFleet`<sup>Required</sup> <a name="DisassociateMemberFromFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromFleet"></a>

```typescript
public readonly DisassociateMemberFromFleet: string;
```

- *Type:* string

[PermissionManagement] deadline:DisassociateMemberFromFleet.

---

##### `DisassociateMemberFromJob`<sup>Required</sup> <a name="DisassociateMemberFromJob" id="@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromJob"></a>

```typescript
public readonly DisassociateMemberFromJob: string;
```

- *Type:* string

[PermissionManagement] deadline:DisassociateMemberFromJob.

---

##### `DisassociateMemberFromQueue`<sup>Required</sup> <a name="DisassociateMemberFromQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.DisassociateMemberFromQueue"></a>

```typescript
public readonly DisassociateMemberFromQueue: string;
```

- *Type:* string

[PermissionManagement] deadline:DisassociateMemberFromQueue.

---

##### `ListAvailableMeteredProducts`<sup>Required</sup> <a name="ListAvailableMeteredProducts" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListAvailableMeteredProducts"></a>

```typescript
public readonly ListAvailableMeteredProducts: string;
```

- *Type:* string

[List] deadline:ListAvailableMeteredProducts.

---

##### `ListBudgets`<sup>Required</sup> <a name="ListBudgets" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListBudgets"></a>

```typescript
public readonly ListBudgets: string;
```

- *Type:* string

[List] deadline:ListBudgets.

---

##### `ListFarmMembers`<sup>Required</sup> <a name="ListFarmMembers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListFarmMembers"></a>

```typescript
public readonly ListFarmMembers: string;
```

- *Type:* string

[List] deadline:ListFarmMembers.

---

##### `ListFarms`<sup>Required</sup> <a name="ListFarms" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListFarms"></a>

```typescript
public readonly ListFarms: string;
```

- *Type:* string

[List] deadline:ListFarms.

---

##### `ListFleetMembers`<sup>Required</sup> <a name="ListFleetMembers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListFleetMembers"></a>

```typescript
public readonly ListFleetMembers: string;
```

- *Type:* string

[List] deadline:ListFleetMembers.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[List] deadline:ListFleets.

---

##### `ListJobMembers`<sup>Required</sup> <a name="ListJobMembers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListJobMembers"></a>

```typescript
public readonly ListJobMembers: string;
```

- *Type:* string

[List] deadline:ListJobMembers.

---

##### `ListJobParameterDefinitions`<sup>Required</sup> <a name="ListJobParameterDefinitions" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListJobParameterDefinitions"></a>

```typescript
public readonly ListJobParameterDefinitions: string;
```

- *Type:* string

[List] deadline:ListJobParameterDefinitions.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] deadline:ListJobs.

---

##### `ListLicenseEndpoints`<sup>Required</sup> <a name="ListLicenseEndpoints" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListLicenseEndpoints"></a>

```typescript
public readonly ListLicenseEndpoints: string;
```

- *Type:* string

[List] deadline:ListLicenseEndpoints.

---

##### `ListLimits`<sup>Required</sup> <a name="ListLimits" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListLimits"></a>

```typescript
public readonly ListLimits: string;
```

- *Type:* string

[List] deadline:ListLimits.

---

##### `ListMeteredProducts`<sup>Required</sup> <a name="ListMeteredProducts" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListMeteredProducts"></a>

```typescript
public readonly ListMeteredProducts: string;
```

- *Type:* string

[List] deadline:ListMeteredProducts.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string;
```

- *Type:* string

[List] deadline:ListMonitors.

---

##### `ListQueueEnvironments`<sup>Required</sup> <a name="ListQueueEnvironments" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueEnvironments"></a>

```typescript
public readonly ListQueueEnvironments: string;
```

- *Type:* string

[List] deadline:ListQueueEnvironments.

---

##### `ListQueueFleetAssociations`<sup>Required</sup> <a name="ListQueueFleetAssociations" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueFleetAssociations"></a>

```typescript
public readonly ListQueueFleetAssociations: string;
```

- *Type:* string

[List] deadline:ListQueueFleetAssociations.

---

##### `ListQueueLimitAssociations`<sup>Required</sup> <a name="ListQueueLimitAssociations" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueLimitAssociations"></a>

```typescript
public readonly ListQueueLimitAssociations: string;
```

- *Type:* string

[List] deadline:ListQueueLimitAssociations.

---

##### `ListQueueMembers`<sup>Required</sup> <a name="ListQueueMembers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListQueueMembers"></a>

```typescript
public readonly ListQueueMembers: string;
```

- *Type:* string

[List] deadline:ListQueueMembers.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListQueues"></a>

```typescript
public readonly ListQueues: string;
```

- *Type:* string

[List] deadline:ListQueues.

---

##### `ListSessionActions`<sup>Required</sup> <a name="ListSessionActions" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListSessionActions"></a>

```typescript
public readonly ListSessionActions: string;
```

- *Type:* string

[List] deadline:ListSessionActions.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListSessions"></a>

```typescript
public readonly ListSessions: string;
```

- *Type:* string

[List] deadline:ListSessions.

---

##### `ListSessionsForWorker`<sup>Required</sup> <a name="ListSessionsForWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListSessionsForWorker"></a>

```typescript
public readonly ListSessionsForWorker: string;
```

- *Type:* string

[List] deadline:ListSessionsForWorker.

---

##### `ListStepConsumers`<sup>Required</sup> <a name="ListStepConsumers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListStepConsumers"></a>

```typescript
public readonly ListStepConsumers: string;
```

- *Type:* string

[List] deadline:ListStepConsumers.

---

##### `ListStepDependencies`<sup>Required</sup> <a name="ListStepDependencies" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListStepDependencies"></a>

```typescript
public readonly ListStepDependencies: string;
```

- *Type:* string

[List] deadline:ListStepDependencies.

---

##### `ListSteps`<sup>Required</sup> <a name="ListSteps" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListSteps"></a>

```typescript
public readonly ListSteps: string;
```

- *Type:* string

[List] deadline:ListSteps.

---

##### `ListStorageProfiles`<sup>Required</sup> <a name="ListStorageProfiles" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListStorageProfiles"></a>

```typescript
public readonly ListStorageProfiles: string;
```

- *Type:* string

[List] deadline:ListStorageProfiles.

---

##### `ListStorageProfilesForQueue`<sup>Required</sup> <a name="ListStorageProfilesForQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListStorageProfilesForQueue"></a>

```typescript
public readonly ListStorageProfilesForQueue: string;
```

- *Type:* string

[List] deadline:ListStorageProfilesForQueue.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] deadline:ListTagsForResource.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] deadline:ListTasks.

---

##### `ListVolumes`<sup>Required</sup> <a name="ListVolumes" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListVolumes"></a>

```typescript
public readonly ListVolumes: string;
```

- *Type:* string

[List] deadline:ListVolumes.

---

##### `ListWorkers`<sup>Required</sup> <a name="ListWorkers" id="@cdk_utils/iam.deadline.DeadlineActions.property.ListWorkers"></a>

```typescript
public readonly ListWorkers: string;
```

- *Type:* string

[List] deadline:ListWorkers.

---

##### `PutMeteredProduct`<sup>Required</sup> <a name="PutMeteredProduct" id="@cdk_utils/iam.deadline.DeadlineActions.property.PutMeteredProduct"></a>

```typescript
public readonly PutMeteredProduct: string;
```

- *Type:* string

[Write] deadline:PutMeteredProduct.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.deadline.DeadlineActions.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string;
```

- *Type:* string

[Read] deadline:SearchJobs.

---

##### `SearchSteps`<sup>Required</sup> <a name="SearchSteps" id="@cdk_utils/iam.deadline.DeadlineActions.property.SearchSteps"></a>

```typescript
public readonly SearchSteps: string;
```

- *Type:* string

[Read] deadline:SearchSteps.

---

##### `SearchTasks`<sup>Required</sup> <a name="SearchTasks" id="@cdk_utils/iam.deadline.DeadlineActions.property.SearchTasks"></a>

```typescript
public readonly SearchTasks: string;
```

- *Type:* string

[Read] deadline:SearchTasks.

---

##### `SearchWorkers`<sup>Required</sup> <a name="SearchWorkers" id="@cdk_utils/iam.deadline.DeadlineActions.property.SearchWorkers"></a>

```typescript
public readonly SearchWorkers: string;
```

- *Type:* string

[Read] deadline:SearchWorkers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.deadline.DeadlineActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSessionsStatisticsAggregation`<sup>Required</sup> <a name="StartSessionsStatisticsAggregation" id="@cdk_utils/iam.deadline.DeadlineActions.property.StartSessionsStatisticsAggregation"></a>

```typescript
public readonly StartSessionsStatisticsAggregation: string;
```

- *Type:* string

[Read] deadline:StartSessionsStatisticsAggregation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.deadline.DeadlineActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] deadline:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.deadline.DeadlineActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] deadline:UntagResource.

---

##### `UpdateBudget`<sup>Required</sup> <a name="UpdateBudget" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateBudget"></a>

```typescript
public readonly UpdateBudget: string;
```

- *Type:* string

[Write] deadline:UpdateBudget.

---

##### `UpdateFarm`<sup>Required</sup> <a name="UpdateFarm" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateFarm"></a>

```typescript
public readonly UpdateFarm: string;
```

- *Type:* string

[Write] deadline:UpdateFarm.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string;
```

- *Type:* string

[Write] deadline:UpdateFleet.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string;
```

- *Type:* string

[Write] deadline:UpdateJob.

---

##### `UpdateLimit`<sup>Required</sup> <a name="UpdateLimit" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateLimit"></a>

```typescript
public readonly UpdateLimit: string;
```

- *Type:* string

[Write] deadline:UpdateLimit.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string;
```

- *Type:* string

[Write] deadline:UpdateMonitor.

---

##### `UpdateMonitorSettings`<sup>Required</sup> <a name="UpdateMonitorSettings" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateMonitorSettings"></a>

```typescript
public readonly UpdateMonitorSettings: string;
```

- *Type:* string

[Write] deadline:UpdateMonitorSettings.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string;
```

- *Type:* string

[Write] deadline:UpdateQueue.

---

##### `UpdateQueueEnvironment`<sup>Required</sup> <a name="UpdateQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueEnvironment"></a>

```typescript
public readonly UpdateQueueEnvironment: string;
```

- *Type:* string

[Write] deadline:UpdateQueueEnvironment.

---

##### `UpdateQueueFleetAssociation`<sup>Required</sup> <a name="UpdateQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueFleetAssociation"></a>

```typescript
public readonly UpdateQueueFleetAssociation: string;
```

- *Type:* string

[Write] deadline:UpdateQueueFleetAssociation.

---

##### `UpdateQueueLimitAssociation`<sup>Required</sup> <a name="UpdateQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateQueueLimitAssociation"></a>

```typescript
public readonly UpdateQueueLimitAssociation: string;
```

- *Type:* string

[Write] deadline:UpdateQueueLimitAssociation.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string;
```

- *Type:* string

[Write] deadline:UpdateSession.

---

##### `UpdateStep`<sup>Required</sup> <a name="UpdateStep" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateStep"></a>

```typescript
public readonly UpdateStep: string;
```

- *Type:* string

[Write] deadline:UpdateStep.

---

##### `UpdateStorageProfile`<sup>Required</sup> <a name="UpdateStorageProfile" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateStorageProfile"></a>

```typescript
public readonly UpdateStorageProfile: string;
```

- *Type:* string

[Write] deadline:UpdateStorageProfile.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string;
```

- *Type:* string

[Write] deadline:UpdateTask.

---

##### `UpdateWorker`<sup>Required</sup> <a name="UpdateWorker" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateWorker"></a>

```typescript
public readonly UpdateWorker: string;
```

- *Type:* string

[Write] deadline:UpdateWorker.

---

##### `UpdateWorkerSchedule`<sup>Required</sup> <a name="UpdateWorkerSchedule" id="@cdk_utils/iam.deadline.DeadlineActions.property.UpdateWorkerSchedule"></a>

```typescript
public readonly UpdateWorkerSchedule: string;
```

- *Type:* string

[Write] deadline:UpdateWorkerSchedule.

---

### DeadlineConditions <a name="DeadlineConditions" id="@cdk_utils/iam.deadline.DeadlineConditions"></a>

Condition key constants and builders for deadline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.deadline.DeadlineConditions.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

new deadline.DeadlineConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.associatedMembershipLevel">associatedMembershipLevel</a></code> | Generates a condition block for `deadline:AssociatedMembershipLevel`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.calledAction">calledAction</a></code> | Generates a condition block for `deadline:CalledAction`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.farmMembershipLevels">farmMembershipLevels</a></code> | Generates a condition block for `deadline:FarmMembershipLevels`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.fleetMembershipLevels">fleetMembershipLevels</a></code> | Generates a condition block for `deadline:FleetMembershipLevels`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.jobMembershipLevels">jobMembershipLevels</a></code> | Generates a condition block for `deadline:JobMembershipLevels`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.membershipLevel">membershipLevel</a></code> | Generates a condition block for `deadline:MembershipLevel`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.principalId">principalId</a></code> | Generates a condition block for `deadline:PrincipalId`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.queueMembershipLevels">queueMembershipLevels</a></code> | Generates a condition block for `deadline:QueueMembershipLevels`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.requesterPrincipalId">requesterPrincipalId</a></code> | Generates a condition block for `deadline:RequesterPrincipalId`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `associatedMembershipLevel` <a name="associatedMembershipLevel" id="@cdk_utils/iam.deadline.DeadlineConditions.associatedMembershipLevel"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.associatedMembershipLevel(value: string)
```

Generates a condition block for `deadline:AssociatedMembershipLevel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.associatedMembershipLevel.parameter.value"></a>

- *Type:* string

---

##### `calledAction` <a name="calledAction" id="@cdk_utils/iam.deadline.DeadlineConditions.calledAction"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.calledAction(value: string)
```

Generates a condition block for `deadline:CalledAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.calledAction.parameter.value"></a>

- *Type:* string

---

##### `farmMembershipLevels` <a name="farmMembershipLevels" id="@cdk_utils/iam.deadline.DeadlineConditions.farmMembershipLevels"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.farmMembershipLevels(values: string[])
```

Generates a condition block for `deadline:FarmMembershipLevels`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.deadline.DeadlineConditions.farmMembershipLevels.parameter.values"></a>

- *Type:* string[]

---

##### `fleetMembershipLevels` <a name="fleetMembershipLevels" id="@cdk_utils/iam.deadline.DeadlineConditions.fleetMembershipLevels"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.fleetMembershipLevels(values: string[])
```

Generates a condition block for `deadline:FleetMembershipLevels`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.deadline.DeadlineConditions.fleetMembershipLevels.parameter.values"></a>

- *Type:* string[]

---

##### `jobMembershipLevels` <a name="jobMembershipLevels" id="@cdk_utils/iam.deadline.DeadlineConditions.jobMembershipLevels"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.jobMembershipLevels(values: string[])
```

Generates a condition block for `deadline:JobMembershipLevels`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.deadline.DeadlineConditions.jobMembershipLevels.parameter.values"></a>

- *Type:* string[]

---

##### `membershipLevel` <a name="membershipLevel" id="@cdk_utils/iam.deadline.DeadlineConditions.membershipLevel"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.membershipLevel(value: string)
```

Generates a condition block for `deadline:MembershipLevel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.membershipLevel.parameter.value"></a>

- *Type:* string

---

##### `principalId` <a name="principalId" id="@cdk_utils/iam.deadline.DeadlineConditions.principalId"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.principalId(value: string)
```

Generates a condition block for `deadline:PrincipalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.principalId.parameter.value"></a>

- *Type:* string

---

##### `queueMembershipLevels` <a name="queueMembershipLevels" id="@cdk_utils/iam.deadline.DeadlineConditions.queueMembershipLevels"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.queueMembershipLevels(values: string[])
```

Generates a condition block for `deadline:QueueMembershipLevels`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.deadline.DeadlineConditions.queueMembershipLevels.parameter.values"></a>

- *Type:* string[]

---

##### `requesterPrincipalId` <a name="requesterPrincipalId" id="@cdk_utils/iam.deadline.DeadlineConditions.requesterPrincipalId"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.requesterPrincipalId(value: string)
```

Generates a condition block for `deadline:RequesterPrincipalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.requesterPrincipalId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.deadline.DeadlineConditions.requestTag"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.deadline.DeadlineConditions.resourceTag"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.deadline.DeadlineConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.tagKeys"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.deadline.DeadlineConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ASSOCIATED_MEMBERSHIP_LEVEL">ASSOCIATED_MEMBERSHIP_LEVEL</a></code> | <code>string</code> | Condition key: deadline:AssociatedMembershipLevel (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToFarmConditionKeys">AssociateMemberToFarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateMemberToFarm action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToFleetConditionKeys">AssociateMemberToFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateMemberToFleet action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToJobConditionKeys">AssociateMemberToJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateMemberToJob action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToQueueConditionKeys">AssociateMemberToQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateMemberToQueue action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CALLED_ACTION">CALLED_ACTION</a></code> | <code>string</code> | Condition key: deadline:CalledAction (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateBudgetConditionKeys">CreateBudgetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBudget action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateFarmConditionKeys">CreateFarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFarm action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateLicenseEndpointConditionKeys">CreateLicenseEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLicenseEndpoint action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateMonitorConditionKeys">CreateMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMonitor action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateQueueConditionKeys">CreateQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueue action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.CreateWorkerConditionKeys">CreateWorkerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorker action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromFarmConditionKeys">DisassociateMemberFromFarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateMemberFromFarm action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromFleetConditionKeys">DisassociateMemberFromFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateMemberFromFleet action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromJobConditionKeys">DisassociateMemberFromJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateMemberFromJob action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromQueueConditionKeys">DisassociateMemberFromQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateMemberFromQueue action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.FARM_MEMBERSHIP_LEVELS">FARM_MEMBERSHIP_LEVELS</a></code> | <code>string</code> | Condition key: deadline:FarmMembershipLevels (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.FLEET_MEMBERSHIP_LEVELS">FLEET_MEMBERSHIP_LEVELS</a></code> | <code>string</code> | Condition key: deadline:FleetMembershipLevels (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.JOB_MEMBERSHIP_LEVELS">JOB_MEMBERSHIP_LEVELS</a></code> | <code>string</code> | Condition key: deadline:JobMembershipLevels (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ListFarmsConditionKeys">ListFarmsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListFarms action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ListFleetsConditionKeys">ListFleetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListFleets action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ListJobsConditionKeys">ListJobsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListJobs action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ListQueuesConditionKeys">ListQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListQueues action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.MEMBERSHIP_LEVEL">MEMBERSHIP_LEVEL</a></code> | <code>string</code> | Condition key: deadline:MembershipLevel (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.PRINCIPAL_ID">PRINCIPAL_ID</a></code> | <code>string</code> | Condition key: deadline:PrincipalId (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.QUEUE_MEMBERSHIP_LEVELS">QUEUE_MEMBERSHIP_LEVELS</a></code> | <code>string</code> | Condition key: deadline:QueueMembershipLevels (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.REQUESTER_PRINCIPAL_ID">REQUESTER_PRINCIPAL_ID</a></code> | <code>string</code> | Condition key: deadline:RequesterPrincipalId (String). |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ASSOCIATED_MEMBERSHIP_LEVEL`<sup>Required</sup> <a name="ASSOCIATED_MEMBERSHIP_LEVEL" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ASSOCIATED_MEMBERSHIP_LEVEL"></a>

```typescript
public readonly ASSOCIATED_MEMBERSHIP_LEVEL: string;
```

- *Type:* string

Condition key: deadline:AssociatedMembershipLevel (String).

---

##### `AssociateMemberToFarmConditionKeys`<sup>Required</sup> <a name="AssociateMemberToFarmConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToFarmConditionKeys"></a>

```typescript
public readonly AssociateMemberToFarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateMemberToFarm action.

---

##### `AssociateMemberToFleetConditionKeys`<sup>Required</sup> <a name="AssociateMemberToFleetConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToFleetConditionKeys"></a>

```typescript
public readonly AssociateMemberToFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateMemberToFleet action.

---

##### `AssociateMemberToJobConditionKeys`<sup>Required</sup> <a name="AssociateMemberToJobConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToJobConditionKeys"></a>

```typescript
public readonly AssociateMemberToJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateMemberToJob action.

---

##### `AssociateMemberToQueueConditionKeys`<sup>Required</sup> <a name="AssociateMemberToQueueConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AssociateMemberToQueueConditionKeys"></a>

```typescript
public readonly AssociateMemberToQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateMemberToQueue action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.deadline.DeadlineConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CALLED_ACTION`<sup>Required</sup> <a name="CALLED_ACTION" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CALLED_ACTION"></a>

```typescript
public readonly CALLED_ACTION: string;
```

- *Type:* string

Condition key: deadline:CalledAction (String).

---

##### `CreateBudgetConditionKeys`<sup>Required</sup> <a name="CreateBudgetConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateBudgetConditionKeys"></a>

```typescript
public readonly CreateBudgetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBudget action.

---

##### `CreateFarmConditionKeys`<sup>Required</sup> <a name="CreateFarmConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateFarmConditionKeys"></a>

```typescript
public readonly CreateFarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFarm action.

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateLicenseEndpointConditionKeys`<sup>Required</sup> <a name="CreateLicenseEndpointConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateLicenseEndpointConditionKeys"></a>

```typescript
public readonly CreateLicenseEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLicenseEndpoint action.

---

##### `CreateMonitorConditionKeys`<sup>Required</sup> <a name="CreateMonitorConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateMonitorConditionKeys"></a>

```typescript
public readonly CreateMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMonitor action.

---

##### `CreateQueueConditionKeys`<sup>Required</sup> <a name="CreateQueueConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateQueueConditionKeys"></a>

```typescript
public readonly CreateQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueue action.

---

##### `CreateWorkerConditionKeys`<sup>Required</sup> <a name="CreateWorkerConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.CreateWorkerConditionKeys"></a>

```typescript
public readonly CreateWorkerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorker action.

---

##### `DisassociateMemberFromFarmConditionKeys`<sup>Required</sup> <a name="DisassociateMemberFromFarmConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromFarmConditionKeys"></a>

```typescript
public readonly DisassociateMemberFromFarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateMemberFromFarm action.

---

##### `DisassociateMemberFromFleetConditionKeys`<sup>Required</sup> <a name="DisassociateMemberFromFleetConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromFleetConditionKeys"></a>

```typescript
public readonly DisassociateMemberFromFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateMemberFromFleet action.

---

##### `DisassociateMemberFromJobConditionKeys`<sup>Required</sup> <a name="DisassociateMemberFromJobConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromJobConditionKeys"></a>

```typescript
public readonly DisassociateMemberFromJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateMemberFromJob action.

---

##### `DisassociateMemberFromQueueConditionKeys`<sup>Required</sup> <a name="DisassociateMemberFromQueueConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.DisassociateMemberFromQueueConditionKeys"></a>

```typescript
public readonly DisassociateMemberFromQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateMemberFromQueue action.

---

##### `FARM_MEMBERSHIP_LEVELS`<sup>Required</sup> <a name="FARM_MEMBERSHIP_LEVELS" id="@cdk_utils/iam.deadline.DeadlineConditions.property.FARM_MEMBERSHIP_LEVELS"></a>

```typescript
public readonly FARM_MEMBERSHIP_LEVELS: string;
```

- *Type:* string

Condition key: deadline:FarmMembershipLevels (ArrayOfString).

---

##### `FLEET_MEMBERSHIP_LEVELS`<sup>Required</sup> <a name="FLEET_MEMBERSHIP_LEVELS" id="@cdk_utils/iam.deadline.DeadlineConditions.property.FLEET_MEMBERSHIP_LEVELS"></a>

```typescript
public readonly FLEET_MEMBERSHIP_LEVELS: string;
```

- *Type:* string

Condition key: deadline:FleetMembershipLevels (ArrayOfString).

---

##### `JOB_MEMBERSHIP_LEVELS`<sup>Required</sup> <a name="JOB_MEMBERSHIP_LEVELS" id="@cdk_utils/iam.deadline.DeadlineConditions.property.JOB_MEMBERSHIP_LEVELS"></a>

```typescript
public readonly JOB_MEMBERSHIP_LEVELS: string;
```

- *Type:* string

Condition key: deadline:JobMembershipLevels (ArrayOfString).

---

##### `ListFarmsConditionKeys`<sup>Required</sup> <a name="ListFarmsConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ListFarmsConditionKeys"></a>

```typescript
public readonly ListFarmsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListFarms action.

---

##### `ListFleetsConditionKeys`<sup>Required</sup> <a name="ListFleetsConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ListFleetsConditionKeys"></a>

```typescript
public readonly ListFleetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListFleets action.

---

##### `ListJobsConditionKeys`<sup>Required</sup> <a name="ListJobsConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ListJobsConditionKeys"></a>

```typescript
public readonly ListJobsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListJobs action.

---

##### `ListQueuesConditionKeys`<sup>Required</sup> <a name="ListQueuesConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ListQueuesConditionKeys"></a>

```typescript
public readonly ListQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListQueues action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `MEMBERSHIP_LEVEL`<sup>Required</sup> <a name="MEMBERSHIP_LEVEL" id="@cdk_utils/iam.deadline.DeadlineConditions.property.MEMBERSHIP_LEVEL"></a>

```typescript
public readonly MEMBERSHIP_LEVEL: string;
```

- *Type:* string

Condition key: deadline:MembershipLevel (String).

---

##### `PRINCIPAL_ID`<sup>Required</sup> <a name="PRINCIPAL_ID" id="@cdk_utils/iam.deadline.DeadlineConditions.property.PRINCIPAL_ID"></a>

```typescript
public readonly PRINCIPAL_ID: string;
```

- *Type:* string

Condition key: deadline:PrincipalId (String).

---

##### `QUEUE_MEMBERSHIP_LEVELS`<sup>Required</sup> <a name="QUEUE_MEMBERSHIP_LEVELS" id="@cdk_utils/iam.deadline.DeadlineConditions.property.QUEUE_MEMBERSHIP_LEVELS"></a>

```typescript
public readonly QUEUE_MEMBERSHIP_LEVELS: string;
```

- *Type:* string

Condition key: deadline:QueueMembershipLevels (ArrayOfString).

---

##### `REQUESTER_PRINCIPAL_ID`<sup>Required</sup> <a name="REQUESTER_PRINCIPAL_ID" id="@cdk_utils/iam.deadline.DeadlineConditions.property.REQUESTER_PRINCIPAL_ID"></a>

```typescript
public readonly REQUESTER_PRINCIPAL_ID: string;
```

- *Type:* string

Condition key: deadline:RequesterPrincipalId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.deadline.DeadlineConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DeadlineOperations <a name="DeadlineOperations" id="@cdk_utils/iam.deadline.DeadlineOperations"></a>

API operation to required IAM actions mapping for deadline.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.deadline.DeadlineOperations.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

new deadline.DeadlineOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToFarm">AssociateMemberToFarm</a></code> | <code>string[]</code> | IAM actions required for the AssociateMemberToFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToFleet">AssociateMemberToFleet</a></code> | <code>string[]</code> | IAM actions required for the AssociateMemberToFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToJob">AssociateMemberToJob</a></code> | <code>string[]</code> | IAM actions required for the AssociateMemberToJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToQueue">AssociateMemberToQueue</a></code> | <code>string[]</code> | IAM actions required for the AssociateMemberToQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeFleetRoleForRead">AssumeFleetRoleForRead</a></code> | <code>string[]</code> | IAM actions required for the AssumeFleetRoleForRead API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeFleetRoleForWorker">AssumeFleetRoleForWorker</a></code> | <code>string[]</code> | IAM actions required for the AssumeFleetRoleForWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForRead">AssumeQueueRoleForRead</a></code> | <code>string[]</code> | IAM actions required for the AssumeQueueRoleForRead API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForUser">AssumeQueueRoleForUser</a></code> | <code>string[]</code> | IAM actions required for the AssumeQueueRoleForUser API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForWorker">AssumeQueueRoleForWorker</a></code> | <code>string[]</code> | IAM actions required for the AssumeQueueRoleForWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetJob">BatchGetJob</a></code> | <code>string[]</code> | IAM actions required for the BatchGetJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetJobEntity">BatchGetJobEntity</a></code> | <code>string[]</code> | IAM actions required for the BatchGetJobEntity API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetSession">BatchGetSession</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSession API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetSessionAction">BatchGetSessionAction</a></code> | <code>string[]</code> | IAM actions required for the BatchGetSessionAction API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetStep">BatchGetStep</a></code> | <code>string[]</code> | IAM actions required for the BatchGetStep API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetTask">BatchGetTask</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTask API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetWorker">BatchGetWorker</a></code> | <code>string[]</code> | IAM actions required for the BatchGetWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchUpdateJob">BatchUpdateJob</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.BatchUpdateTask">BatchUpdateTask</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateTask API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CopyJobTemplate">CopyJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the CopyJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateBudget">CreateBudget</a></code> | <code>string[]</code> | IAM actions required for the CreateBudget API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateFarm">CreateFarm</a></code> | <code>string[]</code> | IAM actions required for the CreateFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateFleet">CreateFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateLicenseEndpoint">CreateLicenseEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateLicenseEndpoint API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateLimit">CreateLimit</a></code> | <code>string[]</code> | IAM actions required for the CreateLimit API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateMonitor">CreateMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitor API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueue">CreateQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueEnvironment">CreateQueueEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateQueueEnvironment API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueFleetAssociation">CreateQueueFleetAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateQueueFleetAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueLimitAssociation">CreateQueueLimitAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateQueueLimitAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateStorageProfile">CreateStorageProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateStorageProfile API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.CreateWorker">CreateWorker</a></code> | <code>string[]</code> | IAM actions required for the CreateWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteBudget">DeleteBudget</a></code> | <code>string[]</code> | IAM actions required for the DeleteBudget API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteFarm">DeleteFarm</a></code> | <code>string[]</code> | IAM actions required for the DeleteFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteFleet">DeleteFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteLicenseEndpoint">DeleteLicenseEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteLicenseEndpoint API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteLimit">DeleteLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteLimit API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteMeteredProduct">DeleteMeteredProduct</a></code> | <code>string[]</code> | IAM actions required for the DeleteMeteredProduct API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitor API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueue">DeleteQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueEnvironment">DeleteQueueEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueueEnvironment API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueFleetAssociation">DeleteQueueFleetAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueueFleetAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueLimitAssociation">DeleteQueueLimitAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueueLimitAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteStorageProfile">DeleteStorageProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteStorageProfile API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteVolume">DeleteVolume</a></code> | <code>string[]</code> | IAM actions required for the DeleteVolume API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteWorker">DeleteWorker</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromFarm">DisassociateMemberFromFarm</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMemberFromFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromFleet">DisassociateMemberFromFleet</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMemberFromFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromJob">DisassociateMemberFromJob</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMemberFromJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromQueue">DisassociateMemberFromQueue</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMemberFromQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListAvailableMeteredProducts">ListAvailableMeteredProducts</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableMeteredProducts API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListBudgets">ListBudgets</a></code> | <code>string[]</code> | IAM actions required for the ListBudgets API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListFarmMembers">ListFarmMembers</a></code> | <code>string[]</code> | IAM actions required for the ListFarmMembers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListFarms">ListFarms</a></code> | <code>string[]</code> | IAM actions required for the ListFarms API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListFleetMembers">ListFleetMembers</a></code> | <code>string[]</code> | IAM actions required for the ListFleetMembers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListFleets">ListFleets</a></code> | <code>string[]</code> | IAM actions required for the ListFleets API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobMembers">ListJobMembers</a></code> | <code>string[]</code> | IAM actions required for the ListJobMembers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobParameterDefinitions">ListJobParameterDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListJobParameterDefinitions API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListLicenseEndpoints">ListLicenseEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListLicenseEndpoints API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListLimits">ListLimits</a></code> | <code>string[]</code> | IAM actions required for the ListLimits API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListMeteredProducts">ListMeteredProducts</a></code> | <code>string[]</code> | IAM actions required for the ListMeteredProducts API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListMonitors">ListMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListMonitors API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueEnvironments">ListQueueEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListQueueEnvironments API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueFleetAssociations">ListQueueFleetAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListQueueFleetAssociations API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueLimitAssociations">ListQueueLimitAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListQueueLimitAssociations API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueMembers">ListQueueMembers</a></code> | <code>string[]</code> | IAM actions required for the ListQueueMembers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueues">ListQueues</a></code> | <code>string[]</code> | IAM actions required for the ListQueues API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessionActions">ListSessionActions</a></code> | <code>string[]</code> | IAM actions required for the ListSessionActions API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessions">ListSessions</a></code> | <code>string[]</code> | IAM actions required for the ListSessions API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessionsForWorker">ListSessionsForWorker</a></code> | <code>string[]</code> | IAM actions required for the ListSessionsForWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListStepConsumers">ListStepConsumers</a></code> | <code>string[]</code> | IAM actions required for the ListStepConsumers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListStepDependencies">ListStepDependencies</a></code> | <code>string[]</code> | IAM actions required for the ListStepDependencies API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListSteps">ListSteps</a></code> | <code>string[]</code> | IAM actions required for the ListSteps API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListStorageProfiles">ListStorageProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListStorageProfiles API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListStorageProfilesForQueue">ListStorageProfilesForQueue</a></code> | <code>string[]</code> | IAM actions required for the ListStorageProfilesForQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListTasks">ListTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTasks API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListVolumes">ListVolumes</a></code> | <code>string[]</code> | IAM actions required for the ListVolumes API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.ListWorkers">ListWorkers</a></code> | <code>string[]</code> | IAM actions required for the ListWorkers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetBudget">opGetBudget</a></code> | <code>string[]</code> | IAM actions required for the GetBudget API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetFarm">opGetFarm</a></code> | <code>string[]</code> | IAM actions required for the GetFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetFleet">opGetFleet</a></code> | <code>string[]</code> | IAM actions required for the GetFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetLicenseEndpoint">opGetLicenseEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetLicenseEndpoint API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetLimit">opGetLimit</a></code> | <code>string[]</code> | IAM actions required for the GetLimit API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetMonitor">opGetMonitor</a></code> | <code>string[]</code> | IAM actions required for the GetMonitor API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetMonitorSettings">opGetMonitorSettings</a></code> | <code>string[]</code> | IAM actions required for the GetMonitorSettings API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueue">opGetQueue</a></code> | <code>string[]</code> | IAM actions required for the GetQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueEnvironment">opGetQueueEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetQueueEnvironment API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueFleetAssociation">opGetQueueFleetAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetQueueFleetAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueLimitAssociation">opGetQueueLimitAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetQueueLimitAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSessionAction">opGetSessionAction</a></code> | <code>string[]</code> | IAM actions required for the GetSessionAction API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSessionsStatisticsAggregation">opGetSessionsStatisticsAggregation</a></code> | <code>string[]</code> | IAM actions required for the GetSessionsStatisticsAggregation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStep">opGetStep</a></code> | <code>string[]</code> | IAM actions required for the GetStep API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStorageProfile">opGetStorageProfile</a></code> | <code>string[]</code> | IAM actions required for the GetStorageProfile API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStorageProfileForQueue">opGetStorageProfileForQueue</a></code> | <code>string[]</code> | IAM actions required for the GetStorageProfileForQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetTask">opGetTask</a></code> | <code>string[]</code> | IAM actions required for the GetTask API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetVolume">opGetVolume</a></code> | <code>string[]</code> | IAM actions required for the GetVolume API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.opGetWorker">opGetWorker</a></code> | <code>string[]</code> | IAM actions required for the GetWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.PutMeteredProduct">PutMeteredProduct</a></code> | <code>string[]</code> | IAM actions required for the PutMeteredProduct API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.SearchJobs">SearchJobs</a></code> | <code>string[]</code> | IAM actions required for the SearchJobs API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.SearchSteps">SearchSteps</a></code> | <code>string[]</code> | IAM actions required for the SearchSteps API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.SearchTasks">SearchTasks</a></code> | <code>string[]</code> | IAM actions required for the SearchTasks API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.SearchWorkers">SearchWorkers</a></code> | <code>string[]</code> | IAM actions required for the SearchWorkers API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.StartSessionsStatisticsAggregation">StartSessionsStatisticsAggregation</a></code> | <code>string[]</code> | IAM actions required for the StartSessionsStatisticsAggregation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateBudget">UpdateBudget</a></code> | <code>string[]</code> | IAM actions required for the UpdateBudget API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateFarm">UpdateFarm</a></code> | <code>string[]</code> | IAM actions required for the UpdateFarm API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateFleet">UpdateFleet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleet API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateJob">UpdateJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateJob API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateLimit">UpdateLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateLimit API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitor API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateMonitorSettings">UpdateMonitorSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitorSettings API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueue">UpdateQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueue API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueEnvironment">UpdateQueueEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueEnvironment API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueFleetAssociation">UpdateQueueFleetAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueFleetAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueLimitAssociation">UpdateQueueLimitAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueLimitAssociation API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateSession">UpdateSession</a></code> | <code>string[]</code> | IAM actions required for the UpdateSession API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateStep">UpdateStep</a></code> | <code>string[]</code> | IAM actions required for the UpdateStep API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateStorageProfile">UpdateStorageProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateStorageProfile API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateTask">UpdateTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateTask API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateWorker">UpdateWorker</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorker API call. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateWorkerSchedule">UpdateWorkerSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkerSchedule API call. |

---

##### `AssociateMemberToFarm`<sup>Required</sup> <a name="AssociateMemberToFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToFarm"></a>

```typescript
public readonly AssociateMemberToFarm: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMemberToFarm API call.

---

##### `AssociateMemberToFleet`<sup>Required</sup> <a name="AssociateMemberToFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToFleet"></a>

```typescript
public readonly AssociateMemberToFleet: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMemberToFleet API call.

---

##### `AssociateMemberToJob`<sup>Required</sup> <a name="AssociateMemberToJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToJob"></a>

```typescript
public readonly AssociateMemberToJob: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMemberToJob API call.

---

##### `AssociateMemberToQueue`<sup>Required</sup> <a name="AssociateMemberToQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssociateMemberToQueue"></a>

```typescript
public readonly AssociateMemberToQueue: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMemberToQueue API call.

---

##### `AssumeFleetRoleForRead`<sup>Required</sup> <a name="AssumeFleetRoleForRead" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeFleetRoleForRead"></a>

```typescript
public readonly AssumeFleetRoleForRead: string[];
```

- *Type:* string[]

IAM actions required for the AssumeFleetRoleForRead API call.

---

##### `AssumeFleetRoleForWorker`<sup>Required</sup> <a name="AssumeFleetRoleForWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeFleetRoleForWorker"></a>

```typescript
public readonly AssumeFleetRoleForWorker: string[];
```

- *Type:* string[]

IAM actions required for the AssumeFleetRoleForWorker API call.

---

##### `AssumeQueueRoleForRead`<sup>Required</sup> <a name="AssumeQueueRoleForRead" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForRead"></a>

```typescript
public readonly AssumeQueueRoleForRead: string[];
```

- *Type:* string[]

IAM actions required for the AssumeQueueRoleForRead API call.

---

##### `AssumeQueueRoleForUser`<sup>Required</sup> <a name="AssumeQueueRoleForUser" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForUser"></a>

```typescript
public readonly AssumeQueueRoleForUser: string[];
```

- *Type:* string[]

IAM actions required for the AssumeQueueRoleForUser API call.

---

##### `AssumeQueueRoleForWorker`<sup>Required</sup> <a name="AssumeQueueRoleForWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.AssumeQueueRoleForWorker"></a>

```typescript
public readonly AssumeQueueRoleForWorker: string[];
```

- *Type:* string[]

IAM actions required for the AssumeQueueRoleForWorker API call.

---

##### `BatchGetJob`<sup>Required</sup> <a name="BatchGetJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetJob"></a>

```typescript
public readonly BatchGetJob: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetJob API call.

---

##### `BatchGetJobEntity`<sup>Required</sup> <a name="BatchGetJobEntity" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetJobEntity"></a>

```typescript
public readonly BatchGetJobEntity: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetJobEntity API call.

---

##### `BatchGetSession`<sup>Required</sup> <a name="BatchGetSession" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetSession"></a>

```typescript
public readonly BatchGetSession: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSession API call.

---

##### `BatchGetSessionAction`<sup>Required</sup> <a name="BatchGetSessionAction" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetSessionAction"></a>

```typescript
public readonly BatchGetSessionAction: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetSessionAction API call.

---

##### `BatchGetStep`<sup>Required</sup> <a name="BatchGetStep" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetStep"></a>

```typescript
public readonly BatchGetStep: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetStep API call.

---

##### `BatchGetTask`<sup>Required</sup> <a name="BatchGetTask" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetTask"></a>

```typescript
public readonly BatchGetTask: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTask API call.

---

##### `BatchGetWorker`<sup>Required</sup> <a name="BatchGetWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchGetWorker"></a>

```typescript
public readonly BatchGetWorker: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetWorker API call.

---

##### `BatchUpdateJob`<sup>Required</sup> <a name="BatchUpdateJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchUpdateJob"></a>

```typescript
public readonly BatchUpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateJob API call.

---

##### `BatchUpdateTask`<sup>Required</sup> <a name="BatchUpdateTask" id="@cdk_utils/iam.deadline.DeadlineOperations.property.BatchUpdateTask"></a>

```typescript
public readonly BatchUpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateTask API call.

---

##### `CopyJobTemplate`<sup>Required</sup> <a name="CopyJobTemplate" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CopyJobTemplate"></a>

```typescript
public readonly CopyJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CopyJobTemplate API call.

---

##### `CreateBudget`<sup>Required</sup> <a name="CreateBudget" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateBudget"></a>

```typescript
public readonly CreateBudget: string[];
```

- *Type:* string[]

IAM actions required for the CreateBudget API call.

---

##### `CreateFarm`<sup>Required</sup> <a name="CreateFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateFarm"></a>

```typescript
public readonly CreateFarm: string[];
```

- *Type:* string[]

IAM actions required for the CreateFarm API call.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleet API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateLicenseEndpoint`<sup>Required</sup> <a name="CreateLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateLicenseEndpoint"></a>

```typescript
public readonly CreateLicenseEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateLicenseEndpoint API call.

---

##### `CreateLimit`<sup>Required</sup> <a name="CreateLimit" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateLimit"></a>

```typescript
public readonly CreateLimit: string[];
```

- *Type:* string[]

IAM actions required for the CreateLimit API call.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitor API call.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueue API call.

---

##### `CreateQueueEnvironment`<sup>Required</sup> <a name="CreateQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueEnvironment"></a>

```typescript
public readonly CreateQueueEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueueEnvironment API call.

---

##### `CreateQueueFleetAssociation`<sup>Required</sup> <a name="CreateQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueFleetAssociation"></a>

```typescript
public readonly CreateQueueFleetAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueueFleetAssociation API call.

---

##### `CreateQueueLimitAssociation`<sup>Required</sup> <a name="CreateQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateQueueLimitAssociation"></a>

```typescript
public readonly CreateQueueLimitAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueueLimitAssociation API call.

---

##### `CreateStorageProfile`<sup>Required</sup> <a name="CreateStorageProfile" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateStorageProfile"></a>

```typescript
public readonly CreateStorageProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorageProfile API call.

---

##### `CreateWorker`<sup>Required</sup> <a name="CreateWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.CreateWorker"></a>

```typescript
public readonly CreateWorker: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorker API call.

---

##### `DeleteBudget`<sup>Required</sup> <a name="DeleteBudget" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteBudget"></a>

```typescript
public readonly DeleteBudget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBudget API call.

---

##### `DeleteFarm`<sup>Required</sup> <a name="DeleteFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteFarm"></a>

```typescript
public readonly DeleteFarm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFarm API call.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleet API call.

---

##### `DeleteLicenseEndpoint`<sup>Required</sup> <a name="DeleteLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteLicenseEndpoint"></a>

```typescript
public readonly DeleteLicenseEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLicenseEndpoint API call.

---

##### `DeleteLimit`<sup>Required</sup> <a name="DeleteLimit" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteLimit"></a>

```typescript
public readonly DeleteLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLimit API call.

---

##### `DeleteMeteredProduct`<sup>Required</sup> <a name="DeleteMeteredProduct" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteMeteredProduct"></a>

```typescript
public readonly DeleteMeteredProduct: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMeteredProduct API call.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitor API call.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueue API call.

---

##### `DeleteQueueEnvironment`<sup>Required</sup> <a name="DeleteQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueEnvironment"></a>

```typescript
public readonly DeleteQueueEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueueEnvironment API call.

---

##### `DeleteQueueFleetAssociation`<sup>Required</sup> <a name="DeleteQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueFleetAssociation"></a>

```typescript
public readonly DeleteQueueFleetAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueueFleetAssociation API call.

---

##### `DeleteQueueLimitAssociation`<sup>Required</sup> <a name="DeleteQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteQueueLimitAssociation"></a>

```typescript
public readonly DeleteQueueLimitAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueueLimitAssociation API call.

---

##### `DeleteStorageProfile`<sup>Required</sup> <a name="DeleteStorageProfile" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteStorageProfile"></a>

```typescript
public readonly DeleteStorageProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStorageProfile API call.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVolume API call.

---

##### `DeleteWorker`<sup>Required</sup> <a name="DeleteWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DeleteWorker"></a>

```typescript
public readonly DeleteWorker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorker API call.

---

##### `DisassociateMemberFromFarm`<sup>Required</sup> <a name="DisassociateMemberFromFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromFarm"></a>

```typescript
public readonly DisassociateMemberFromFarm: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMemberFromFarm API call.

---

##### `DisassociateMemberFromFleet`<sup>Required</sup> <a name="DisassociateMemberFromFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromFleet"></a>

```typescript
public readonly DisassociateMemberFromFleet: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMemberFromFleet API call.

---

##### `DisassociateMemberFromJob`<sup>Required</sup> <a name="DisassociateMemberFromJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromJob"></a>

```typescript
public readonly DisassociateMemberFromJob: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMemberFromJob API call.

---

##### `DisassociateMemberFromQueue`<sup>Required</sup> <a name="DisassociateMemberFromQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.DisassociateMemberFromQueue"></a>

```typescript
public readonly DisassociateMemberFromQueue: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMemberFromQueue API call.

---

##### `ListAvailableMeteredProducts`<sup>Required</sup> <a name="ListAvailableMeteredProducts" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListAvailableMeteredProducts"></a>

```typescript
public readonly ListAvailableMeteredProducts: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableMeteredProducts API call.

---

##### `ListBudgets`<sup>Required</sup> <a name="ListBudgets" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListBudgets"></a>

```typescript
public readonly ListBudgets: string[];
```

- *Type:* string[]

IAM actions required for the ListBudgets API call.

---

##### `ListFarmMembers`<sup>Required</sup> <a name="ListFarmMembers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListFarmMembers"></a>

```typescript
public readonly ListFarmMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListFarmMembers API call.

---

##### `ListFarms`<sup>Required</sup> <a name="ListFarms" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListFarms"></a>

```typescript
public readonly ListFarms: string[];
```

- *Type:* string[]

IAM actions required for the ListFarms API call.

---

##### `ListFleetMembers`<sup>Required</sup> <a name="ListFleetMembers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListFleetMembers"></a>

```typescript
public readonly ListFleetMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListFleetMembers API call.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListFleets"></a>

```typescript
public readonly ListFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListFleets API call.

---

##### `ListJobMembers`<sup>Required</sup> <a name="ListJobMembers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobMembers"></a>

```typescript
public readonly ListJobMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListJobMembers API call.

---

##### `ListJobParameterDefinitions`<sup>Required</sup> <a name="ListJobParameterDefinitions" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobParameterDefinitions"></a>

```typescript
public readonly ListJobParameterDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListJobParameterDefinitions API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListLicenseEndpoints`<sup>Required</sup> <a name="ListLicenseEndpoints" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListLicenseEndpoints"></a>

```typescript
public readonly ListLicenseEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListLicenseEndpoints API call.

---

##### `ListLimits`<sup>Required</sup> <a name="ListLimits" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListLimits"></a>

```typescript
public readonly ListLimits: string[];
```

- *Type:* string[]

IAM actions required for the ListLimits API call.

---

##### `ListMeteredProducts`<sup>Required</sup> <a name="ListMeteredProducts" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListMeteredProducts"></a>

```typescript
public readonly ListMeteredProducts: string[];
```

- *Type:* string[]

IAM actions required for the ListMeteredProducts API call.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitors API call.

---

##### `ListQueueEnvironments`<sup>Required</sup> <a name="ListQueueEnvironments" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueEnvironments"></a>

```typescript
public readonly ListQueueEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueEnvironments API call.

---

##### `ListQueueFleetAssociations`<sup>Required</sup> <a name="ListQueueFleetAssociations" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueFleetAssociations"></a>

```typescript
public readonly ListQueueFleetAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueFleetAssociations API call.

---

##### `ListQueueLimitAssociations`<sup>Required</sup> <a name="ListQueueLimitAssociations" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueLimitAssociations"></a>

```typescript
public readonly ListQueueLimitAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueLimitAssociations API call.

---

##### `ListQueueMembers`<sup>Required</sup> <a name="ListQueueMembers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueueMembers"></a>

```typescript
public readonly ListQueueMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueMembers API call.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListQueues"></a>

```typescript
public readonly ListQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListQueues API call.

---

##### `ListSessionActions`<sup>Required</sup> <a name="ListSessionActions" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessionActions"></a>

```typescript
public readonly ListSessionActions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessionActions API call.

---

##### `ListSessions`<sup>Required</sup> <a name="ListSessions" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessions"></a>

```typescript
public readonly ListSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListSessions API call.

---

##### `ListSessionsForWorker`<sup>Required</sup> <a name="ListSessionsForWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListSessionsForWorker"></a>

```typescript
public readonly ListSessionsForWorker: string[];
```

- *Type:* string[]

IAM actions required for the ListSessionsForWorker API call.

---

##### `ListStepConsumers`<sup>Required</sup> <a name="ListStepConsumers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListStepConsumers"></a>

```typescript
public readonly ListStepConsumers: string[];
```

- *Type:* string[]

IAM actions required for the ListStepConsumers API call.

---

##### `ListStepDependencies`<sup>Required</sup> <a name="ListStepDependencies" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListStepDependencies"></a>

```typescript
public readonly ListStepDependencies: string[];
```

- *Type:* string[]

IAM actions required for the ListStepDependencies API call.

---

##### `ListSteps`<sup>Required</sup> <a name="ListSteps" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListSteps"></a>

```typescript
public readonly ListSteps: string[];
```

- *Type:* string[]

IAM actions required for the ListSteps API call.

---

##### `ListStorageProfiles`<sup>Required</sup> <a name="ListStorageProfiles" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListStorageProfiles"></a>

```typescript
public readonly ListStorageProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListStorageProfiles API call.

---

##### `ListStorageProfilesForQueue`<sup>Required</sup> <a name="ListStorageProfilesForQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListStorageProfilesForQueue"></a>

```typescript
public readonly ListStorageProfilesForQueue: string[];
```

- *Type:* string[]

IAM actions required for the ListStorageProfilesForQueue API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListTasks"></a>

```typescript
public readonly ListTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTasks API call.

---

##### `ListVolumes`<sup>Required</sup> <a name="ListVolumes" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListVolumes"></a>

```typescript
public readonly ListVolumes: string[];
```

- *Type:* string[]

IAM actions required for the ListVolumes API call.

---

##### `ListWorkers`<sup>Required</sup> <a name="ListWorkers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.ListWorkers"></a>

```typescript
public readonly ListWorkers: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkers API call.

---

##### `opGetBudget`<sup>Required</sup> <a name="opGetBudget" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetBudget"></a>

```typescript
public readonly opGetBudget: string[];
```

- *Type:* string[]

IAM actions required for the GetBudget API call.

---

##### `opGetFarm`<sup>Required</sup> <a name="opGetFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetFarm"></a>

```typescript
public readonly opGetFarm: string[];
```

- *Type:* string[]

IAM actions required for the GetFarm API call.

---

##### `opGetFleet`<sup>Required</sup> <a name="opGetFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetFleet"></a>

```typescript
public readonly opGetFleet: string[];
```

- *Type:* string[]

IAM actions required for the GetFleet API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetLicenseEndpoint`<sup>Required</sup> <a name="opGetLicenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetLicenseEndpoint"></a>

```typescript
public readonly opGetLicenseEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetLicenseEndpoint API call.

---

##### `opGetLimit`<sup>Required</sup> <a name="opGetLimit" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetLimit"></a>

```typescript
public readonly opGetLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetLimit API call.

---

##### `opGetMonitor`<sup>Required</sup> <a name="opGetMonitor" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetMonitor"></a>

```typescript
public readonly opGetMonitor: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitor API call.

---

##### `opGetMonitorSettings`<sup>Required</sup> <a name="opGetMonitorSettings" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetMonitorSettings"></a>

```typescript
public readonly opGetMonitorSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitorSettings API call.

---

##### `opGetQueue`<sup>Required</sup> <a name="opGetQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueue"></a>

```typescript
public readonly opGetQueue: string[];
```

- *Type:* string[]

IAM actions required for the GetQueue API call.

---

##### `opGetQueueEnvironment`<sup>Required</sup> <a name="opGetQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueEnvironment"></a>

```typescript
public readonly opGetQueueEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetQueueEnvironment API call.

---

##### `opGetQueueFleetAssociation`<sup>Required</sup> <a name="opGetQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueFleetAssociation"></a>

```typescript
public readonly opGetQueueFleetAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetQueueFleetAssociation API call.

---

##### `opGetQueueLimitAssociation`<sup>Required</sup> <a name="opGetQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetQueueLimitAssociation"></a>

```typescript
public readonly opGetQueueLimitAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetQueueLimitAssociation API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSessionAction`<sup>Required</sup> <a name="opGetSessionAction" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSessionAction"></a>

```typescript
public readonly opGetSessionAction: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionAction API call.

---

##### `opGetSessionsStatisticsAggregation`<sup>Required</sup> <a name="opGetSessionsStatisticsAggregation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetSessionsStatisticsAggregation"></a>

```typescript
public readonly opGetSessionsStatisticsAggregation: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionsStatisticsAggregation API call.

---

##### `opGetStep`<sup>Required</sup> <a name="opGetStep" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStep"></a>

```typescript
public readonly opGetStep: string[];
```

- *Type:* string[]

IAM actions required for the GetStep API call.

---

##### `opGetStorageProfile`<sup>Required</sup> <a name="opGetStorageProfile" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStorageProfile"></a>

```typescript
public readonly opGetStorageProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetStorageProfile API call.

---

##### `opGetStorageProfileForQueue`<sup>Required</sup> <a name="opGetStorageProfileForQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetStorageProfileForQueue"></a>

```typescript
public readonly opGetStorageProfileForQueue: string[];
```

- *Type:* string[]

IAM actions required for the GetStorageProfileForQueue API call.

---

##### `opGetTask`<sup>Required</sup> <a name="opGetTask" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetTask"></a>

```typescript
public readonly opGetTask: string[];
```

- *Type:* string[]

IAM actions required for the GetTask API call.

---

##### `opGetVolume`<sup>Required</sup> <a name="opGetVolume" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetVolume"></a>

```typescript
public readonly opGetVolume: string[];
```

- *Type:* string[]

IAM actions required for the GetVolume API call.

---

##### `opGetWorker`<sup>Required</sup> <a name="opGetWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.opGetWorker"></a>

```typescript
public readonly opGetWorker: string[];
```

- *Type:* string[]

IAM actions required for the GetWorker API call.

---

##### `PutMeteredProduct`<sup>Required</sup> <a name="PutMeteredProduct" id="@cdk_utils/iam.deadline.DeadlineOperations.property.PutMeteredProduct"></a>

```typescript
public readonly PutMeteredProduct: string[];
```

- *Type:* string[]

IAM actions required for the PutMeteredProduct API call.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.deadline.DeadlineOperations.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string[];
```

- *Type:* string[]

IAM actions required for the SearchJobs API call.

---

##### `SearchSteps`<sup>Required</sup> <a name="SearchSteps" id="@cdk_utils/iam.deadline.DeadlineOperations.property.SearchSteps"></a>

```typescript
public readonly SearchSteps: string[];
```

- *Type:* string[]

IAM actions required for the SearchSteps API call.

---

##### `SearchTasks`<sup>Required</sup> <a name="SearchTasks" id="@cdk_utils/iam.deadline.DeadlineOperations.property.SearchTasks"></a>

```typescript
public readonly SearchTasks: string[];
```

- *Type:* string[]

IAM actions required for the SearchTasks API call.

---

##### `SearchWorkers`<sup>Required</sup> <a name="SearchWorkers" id="@cdk_utils/iam.deadline.DeadlineOperations.property.SearchWorkers"></a>

```typescript
public readonly SearchWorkers: string[];
```

- *Type:* string[]

IAM actions required for the SearchWorkers API call.

---

##### `StartSessionsStatisticsAggregation`<sup>Required</sup> <a name="StartSessionsStatisticsAggregation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.StartSessionsStatisticsAggregation"></a>

```typescript
public readonly StartSessionsStatisticsAggregation: string[];
```

- *Type:* string[]

IAM actions required for the StartSessionsStatisticsAggregation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.deadline.DeadlineOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBudget`<sup>Required</sup> <a name="UpdateBudget" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateBudget"></a>

```typescript
public readonly UpdateBudget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBudget API call.

---

##### `UpdateFarm`<sup>Required</sup> <a name="UpdateFarm" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateFarm"></a>

```typescript
public readonly UpdateFarm: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFarm API call.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleet API call.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJob API call.

---

##### `UpdateLimit`<sup>Required</sup> <a name="UpdateLimit" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateLimit"></a>

```typescript
public readonly UpdateLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLimit API call.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitor API call.

---

##### `UpdateMonitorSettings`<sup>Required</sup> <a name="UpdateMonitorSettings" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateMonitorSettings"></a>

```typescript
public readonly UpdateMonitorSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitorSettings API call.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueue API call.

---

##### `UpdateQueueEnvironment`<sup>Required</sup> <a name="UpdateQueueEnvironment" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueEnvironment"></a>

```typescript
public readonly UpdateQueueEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueEnvironment API call.

---

##### `UpdateQueueFleetAssociation`<sup>Required</sup> <a name="UpdateQueueFleetAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueFleetAssociation"></a>

```typescript
public readonly UpdateQueueFleetAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueFleetAssociation API call.

---

##### `UpdateQueueLimitAssociation`<sup>Required</sup> <a name="UpdateQueueLimitAssociation" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateQueueLimitAssociation"></a>

```typescript
public readonly UpdateQueueLimitAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueLimitAssociation API call.

---

##### `UpdateSession`<sup>Required</sup> <a name="UpdateSession" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateSession"></a>

```typescript
public readonly UpdateSession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSession API call.

---

##### `UpdateStep`<sup>Required</sup> <a name="UpdateStep" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateStep"></a>

```typescript
public readonly UpdateStep: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStep API call.

---

##### `UpdateStorageProfile`<sup>Required</sup> <a name="UpdateStorageProfile" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateStorageProfile"></a>

```typescript
public readonly UpdateStorageProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStorageProfile API call.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTask API call.

---

##### `UpdateWorker`<sup>Required</sup> <a name="UpdateWorker" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateWorker"></a>

```typescript
public readonly UpdateWorker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorker API call.

---

##### `UpdateWorkerSchedule`<sup>Required</sup> <a name="UpdateWorkerSchedule" id="@cdk_utils/iam.deadline.DeadlineOperations.property.UpdateWorkerSchedule"></a>

```typescript
public readonly UpdateWorkerSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkerSchedule API call.

---

### DeadlineResources <a name="DeadlineResources" id="@cdk_utils/iam.deadline.DeadlineResources"></a>

ARN builders, validators, and parsers for deadline resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.deadline.DeadlineResources.Initializer"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

new deadline.DeadlineResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.budget">budget</a></code> | Builds an ARN for the budget resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.farm">farm</a></code> | Builds an ARN for the farm resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidBudgetArn">isValidBudgetArn</a></code> | Validates whether a string is a valid ARN for the budget resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidFarmArn">isValidFarmArn</a></code> | Validates whether a string is a valid ARN for the farm resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidLicenseEndpointArn">isValidLicenseEndpointArn</a></code> | Validates whether a string is a valid ARN for the license-endpoint resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidMonitorArn">isValidMonitorArn</a></code> | Validates whether a string is a valid ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidQueueArn">isValidQueueArn</a></code> | Validates whether a string is a valid ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidVolumeArn">isValidVolumeArn</a></code> | Validates whether a string is a valid ARN for the volume resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.isValidWorkerArn">isValidWorkerArn</a></code> | Validates whether a string is a valid ARN for the worker resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.licenseEndpoint">licenseEndpoint</a></code> | Builds an ARN for the license-endpoint resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.monitor">monitor</a></code> | Builds an ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseBudgetArn">parseBudgetArn</a></code> | Parses a budget ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseFarmArn">parseFarmArn</a></code> | Parses a farm ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseLicenseEndpointArn">parseLicenseEndpointArn</a></code> | Parses a license-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseMonitorArn">parseMonitorArn</a></code> | Parses a monitor ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseQueueArn">parseQueueArn</a></code> | Parses a queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseVolumeArn">parseVolumeArn</a></code> | Parses a volume ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.parseWorkerArn">parseWorkerArn</a></code> | Parses a worker ARN into its components. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.queue">queue</a></code> | Builds an ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.volume">volume</a></code> | Builds an ARN for the volume resource. |
| <code><a href="#@cdk_utils/iam.deadline.DeadlineResources.worker">worker</a></code> | Builds an ARN for the worker resource. |

---

##### `budget` <a name="budget" id="@cdk_utils/iam.deadline.DeadlineResources.budget"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.budget(props: DeadlineBudgetArnProps)
```

Builds an ARN for the budget resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.budget.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineBudgetArnProps">DeadlineBudgetArnProps</a>

---

##### `farm` <a name="farm" id="@cdk_utils/iam.deadline.DeadlineResources.farm"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.farm(props: DeadlineFarmArnProps)
```

Builds an ARN for the farm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.farm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineFarmArnProps">DeadlineFarmArnProps</a>

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.deadline.DeadlineResources.fleet"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.fleet(props: DeadlineFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineFleetArnProps">DeadlineFleetArnProps</a>

---

##### `isValidBudgetArn` <a name="isValidBudgetArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidBudgetArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidBudgetArn(arn: string)
```

Validates whether a string is a valid ARN for the budget resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidBudgetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFarmArn` <a name="isValidFarmArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidFarmArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidFarmArn(arn: string)
```

Validates whether a string is a valid ARN for the farm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidFarmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidFleetArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidJobArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLicenseEndpointArn` <a name="isValidLicenseEndpointArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidLicenseEndpointArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidLicenseEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the license-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidLicenseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMonitorArn` <a name="isValidMonitorArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidMonitorArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidMonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the monitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueueArn` <a name="isValidQueueArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidQueueArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVolumeArn` <a name="isValidVolumeArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidVolumeArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidVolumeArn(arn: string)
```

Validates whether a string is a valid ARN for the volume resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkerArn` <a name="isValidWorkerArn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidWorkerArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.isValidWorkerArn(arn: string)
```

Validates whether a string is a valid ARN for the worker resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.isValidWorkerArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.deadline.DeadlineResources.job"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.job(props: DeadlineJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineJobArnProps">DeadlineJobArnProps</a>

---

##### `licenseEndpoint` <a name="licenseEndpoint" id="@cdk_utils/iam.deadline.DeadlineResources.licenseEndpoint"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.licenseEndpoint(props: DeadlineLicenseEndpointArnProps)
```

Builds an ARN for the license-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.licenseEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineLicenseEndpointArnProps">DeadlineLicenseEndpointArnProps</a>

---

##### `monitor` <a name="monitor" id="@cdk_utils/iam.deadline.DeadlineResources.monitor"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.monitor(props: DeadlineMonitorArnProps)
```

Builds an ARN for the monitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.monitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineMonitorArnProps">DeadlineMonitorArnProps</a>

---

##### `parseBudgetArn` <a name="parseBudgetArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseBudgetArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseBudgetArn(arn: string)
```

Parses a budget ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseBudgetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFarmArn` <a name="parseFarmArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseFarmArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseFarmArn(arn: string)
```

Parses a farm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseFarmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseFleetArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseJobArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLicenseEndpointArn` <a name="parseLicenseEndpointArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseLicenseEndpointArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseLicenseEndpointArn(arn: string)
```

Parses a license-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseLicenseEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMonitorArn` <a name="parseMonitorArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseMonitorArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseMonitorArn(arn: string)
```

Parses a monitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueueArn` <a name="parseQueueArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseQueueArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseQueueArn(arn: string)
```

Parses a queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVolumeArn` <a name="parseVolumeArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseVolumeArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseVolumeArn(arn: string)
```

Parses a volume ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkerArn` <a name="parseWorkerArn" id="@cdk_utils/iam.deadline.DeadlineResources.parseWorkerArn"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.parseWorkerArn(arn: string)
```

Parses a worker ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.deadline.DeadlineResources.parseWorkerArn.parameter.arn"></a>

- *Type:* string

---

##### `queue` <a name="queue" id="@cdk_utils/iam.deadline.DeadlineResources.queue"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.queue(props: DeadlineQueueArnProps)
```

Builds an ARN for the queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.queue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineQueueArnProps">DeadlineQueueArnProps</a>

---

##### `volume` <a name="volume" id="@cdk_utils/iam.deadline.DeadlineResources.volume"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.volume(props: DeadlineVolumeArnProps)
```

Builds an ARN for the volume resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.volume.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineVolumeArnProps">DeadlineVolumeArnProps</a>

---

##### `worker` <a name="worker" id="@cdk_utils/iam.deadline.DeadlineResources.worker"></a>

```typescript
import { deadline } from '@cdk_utils/iam'

deadline.DeadlineResources.worker(props: DeadlineWorkerArnProps)
```

Builds an ARN for the worker resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.deadline.DeadlineResources.worker.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.deadline.DeadlineWorkerArnProps">DeadlineWorkerArnProps</a>

---




