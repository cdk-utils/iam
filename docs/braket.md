# `braket` Submodule <a name="`braket` Submodule" id="@cdk_utils/iam.braket"></a>


## Structs <a name="Structs" id="Structs"></a>

### BraketDeviceArnComponents <a name="BraketDeviceArnComponents" id="@cdk_utils/iam.braket.BraketDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketDeviceArnComponents: braket.BraketDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.deviceType">deviceType</a></code> | <code>string</code> | The DeviceType component. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.provider">provider</a></code> | <code>string</code> | The Provider component. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

The DeviceType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.braket.BraketDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BraketDeviceArnProps <a name="BraketDeviceArnProps" id="@cdk_utils/iam.braket.BraketDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketDeviceArnProps.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketDeviceArnProps: braket.BraketDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.deviceType">deviceType</a></code> | <code>string</code> | The DeviceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.provider">provider</a></code> | <code>string</code> | The Provider component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

The DeviceType component of the ARN.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.braket.BraketDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BraketJobArnComponents <a name="BraketJobArnComponents" id="@cdk_utils/iam.braket.BraketJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketJobArnComponents.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketJobArnComponents: braket.BraketJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnComponents.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.braket.BraketJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketJobArnComponents.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.braket.BraketJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BraketJobArnProps <a name="BraketJobArnProps" id="@cdk_utils/iam.braket.BraketJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketJobArnProps.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketJobArnProps: braket.BraketJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnProps.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketJobArnProps.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.braket.BraketJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.braket.BraketJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BraketQuantumTaskArnComponents <a name="BraketQuantumTaskArnComponents" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents"></a>

Parsed components of a quantum-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketQuantumTaskArnComponents: braket.BraketQuantumTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.braket.BraketQuantumTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BraketQuantumTaskArnProps <a name="BraketQuantumTaskArnProps" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps"></a>

Properties for building a quantum-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketQuantumTaskArnProps: braket.BraketQuantumTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.braket.BraketQuantumTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BraketSpendingLimitArnComponents <a name="BraketSpendingLimitArnComponents" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents"></a>

Parsed components of a spending-limit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketSpendingLimitArnComponents: braket.BraketSpendingLimitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.braket.BraketSpendingLimitArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BraketSpendingLimitArnProps <a name="BraketSpendingLimitArnProps" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps"></a>

Properties for building a spending-limit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

const braketSpendingLimitArnProps: braket.BraketSpendingLimitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.randomId">randomId</a></code> | <code>string</code> | The RandomId component of the ARN. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `randomId`<sup>Required</sup> <a name="randomId" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.randomId"></a>

```typescript
public readonly randomId: string;
```

- *Type:* string

The RandomId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.braket.BraketSpendingLimitArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BraketActions <a name="BraketActions" id="@cdk_utils/iam.braket.BraketActions"></a>

IAM action constants for the braket service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.braket.BraketActions.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

new braket.BraketActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AcceptUserAgreement">AcceptUserAgreement</a></code> | <code>string</code> | [Write] braket:AcceptUserAgreement. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.actionGetDevice">actionGetDevice</a></code> | <code>string</code> | [Read] braket:GetDevice. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] braket:GetJob. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.actionGetQuantumTask">actionGetQuantumTask</a></code> | <code>string</code> | [Read] braket:GetQuantumTask. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.actionGetServiceLinkedRoleStatus">actionGetServiceLinkedRoleStatus</a></code> | <code>string</code> | [Read] braket:GetServiceLinkedRoleStatus. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.actionGetUserAgreementStatus">actionGetUserAgreementStatus</a></code> | <code>string</code> | [Read] braket:GetUserAgreementStatus. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] braket:CancelJob. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.CancelQuantumTask">CancelQuantumTask</a></code> | <code>string</code> | [Write] braket:CancelQuantumTask. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] braket:CreateJob. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.CreateQuantumTask">CreateQuantumTask</a></code> | <code>string</code> | [Write] braket:CreateQuantumTask. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.CreateSpendingLimit">CreateSpendingLimit</a></code> | <code>string</code> | [Write] braket:CreateSpendingLimit. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.DeleteSpendingLimit">DeleteSpendingLimit</a></code> | <code>string</code> | [Write] braket:DeleteSpendingLimit. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] braket:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.SearchDevices">SearchDevices</a></code> | <code>string</code> | [List] braket:SearchDevices. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.SearchJobs">SearchJobs</a></code> | <code>string</code> | [List] braket:SearchJobs. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.SearchQuantumTasks">SearchQuantumTasks</a></code> | <code>string</code> | [List] braket:SearchQuantumTasks. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.SearchSpendingLimits">SearchSpendingLimits</a></code> | <code>string</code> | [Read] braket:SearchSpendingLimits. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] braket:TagResource. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] braket:UntagResource. |
| <code><a href="#@cdk_utils/iam.braket.BraketActions.property.UpdateSpendingLimit">UpdateSpendingLimit</a></code> | <code>string</code> | [Write] braket:UpdateSpendingLimit. |

---

##### `AcceptUserAgreement`<sup>Required</sup> <a name="AcceptUserAgreement" id="@cdk_utils/iam.braket.BraketActions.property.AcceptUserAgreement"></a>

```typescript
public readonly AcceptUserAgreement: string;
```

- *Type:* string

[Write] braket:AcceptUserAgreement.

---

##### `actionGetDevice`<sup>Required</sup> <a name="actionGetDevice" id="@cdk_utils/iam.braket.BraketActions.property.actionGetDevice"></a>

```typescript
public readonly actionGetDevice: string;
```

- *Type:* string

[Read] braket:GetDevice.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.braket.BraketActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] braket:GetJob.

---

##### `actionGetQuantumTask`<sup>Required</sup> <a name="actionGetQuantumTask" id="@cdk_utils/iam.braket.BraketActions.property.actionGetQuantumTask"></a>

```typescript
public readonly actionGetQuantumTask: string;
```

- *Type:* string

[Read] braket:GetQuantumTask.

---

##### `actionGetServiceLinkedRoleStatus`<sup>Required</sup> <a name="actionGetServiceLinkedRoleStatus" id="@cdk_utils/iam.braket.BraketActions.property.actionGetServiceLinkedRoleStatus"></a>

```typescript
public readonly actionGetServiceLinkedRoleStatus: string;
```

- *Type:* string

[Read] braket:GetServiceLinkedRoleStatus.

---

##### `actionGetUserAgreementStatus`<sup>Required</sup> <a name="actionGetUserAgreementStatus" id="@cdk_utils/iam.braket.BraketActions.property.actionGetUserAgreementStatus"></a>

```typescript
public readonly actionGetUserAgreementStatus: string;
```

- *Type:* string

[Read] braket:GetUserAgreementStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.braket.BraketActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.braket.BraketActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.braket.BraketActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.braket.BraketActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.braket.BraketActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.braket.BraketActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] braket:CancelJob.

---

##### `CancelQuantumTask`<sup>Required</sup> <a name="CancelQuantumTask" id="@cdk_utils/iam.braket.BraketActions.property.CancelQuantumTask"></a>

```typescript
public readonly CancelQuantumTask: string;
```

- *Type:* string

[Write] braket:CancelQuantumTask.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.braket.BraketActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] braket:CreateJob.

---

##### `CreateQuantumTask`<sup>Required</sup> <a name="CreateQuantumTask" id="@cdk_utils/iam.braket.BraketActions.property.CreateQuantumTask"></a>

```typescript
public readonly CreateQuantumTask: string;
```

- *Type:* string

[Write] braket:CreateQuantumTask.

---

##### `CreateSpendingLimit`<sup>Required</sup> <a name="CreateSpendingLimit" id="@cdk_utils/iam.braket.BraketActions.property.CreateSpendingLimit"></a>

```typescript
public readonly CreateSpendingLimit: string;
```

- *Type:* string

[Write] braket:CreateSpendingLimit.

---

##### `DeleteSpendingLimit`<sup>Required</sup> <a name="DeleteSpendingLimit" id="@cdk_utils/iam.braket.BraketActions.property.DeleteSpendingLimit"></a>

```typescript
public readonly DeleteSpendingLimit: string;
```

- *Type:* string

[Write] braket:DeleteSpendingLimit.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.braket.BraketActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] braket:ListTagsForResource.

---

##### `SearchDevices`<sup>Required</sup> <a name="SearchDevices" id="@cdk_utils/iam.braket.BraketActions.property.SearchDevices"></a>

```typescript
public readonly SearchDevices: string;
```

- *Type:* string

[List] braket:SearchDevices.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.braket.BraketActions.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string;
```

- *Type:* string

[List] braket:SearchJobs.

---

##### `SearchQuantumTasks`<sup>Required</sup> <a name="SearchQuantumTasks" id="@cdk_utils/iam.braket.BraketActions.property.SearchQuantumTasks"></a>

```typescript
public readonly SearchQuantumTasks: string;
```

- *Type:* string

[List] braket:SearchQuantumTasks.

---

##### `SearchSpendingLimits`<sup>Required</sup> <a name="SearchSpendingLimits" id="@cdk_utils/iam.braket.BraketActions.property.SearchSpendingLimits"></a>

```typescript
public readonly SearchSpendingLimits: string;
```

- *Type:* string

[Read] braket:SearchSpendingLimits.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.braket.BraketActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.braket.BraketActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] braket:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.braket.BraketActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] braket:UntagResource.

---

##### `UpdateSpendingLimit`<sup>Required</sup> <a name="UpdateSpendingLimit" id="@cdk_utils/iam.braket.BraketActions.property.UpdateSpendingLimit"></a>

```typescript
public readonly UpdateSpendingLimit: string;
```

- *Type:* string

[Write] braket:UpdateSpendingLimit.

---

### BraketConditions <a name="BraketConditions" id="@cdk_utils/iam.braket.BraketConditions"></a>

Condition key constants and builders for braket.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.braket.BraketConditions.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

new braket.BraketConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.braket.BraketConditions.requestTag"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.braket.BraketConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.braket.BraketConditions.resourceTag"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.braket.BraketConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.braket.BraketConditions.tagKeys"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.braket.BraketConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.CreateQuantumTaskConditionKeys">CreateQuantumTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQuantumTask action. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.CreateSpendingLimitConditionKeys">CreateSpendingLimitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSpendingLimit action. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.braket.BraketConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.braket.BraketConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.braket.BraketConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.braket.BraketConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.braket.BraketConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateQuantumTaskConditionKeys`<sup>Required</sup> <a name="CreateQuantumTaskConditionKeys" id="@cdk_utils/iam.braket.BraketConditions.property.CreateQuantumTaskConditionKeys"></a>

```typescript
public readonly CreateQuantumTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQuantumTask action.

---

##### `CreateSpendingLimitConditionKeys`<sup>Required</sup> <a name="CreateSpendingLimitConditionKeys" id="@cdk_utils/iam.braket.BraketConditions.property.CreateSpendingLimitConditionKeys"></a>

```typescript
public readonly CreateSpendingLimitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSpendingLimit action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.braket.BraketConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.braket.BraketConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BraketOperations <a name="BraketOperations" id="@cdk_utils/iam.braket.BraketOperations"></a>

API operation to required IAM actions mapping for braket.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.braket.BraketOperations.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

new braket.BraketOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.CancelQuantumTask">CancelQuantumTask</a></code> | <code>string[]</code> | IAM actions required for the CancelQuantumTask API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.CreateQuantumTask">CreateQuantumTask</a></code> | <code>string[]</code> | IAM actions required for the CreateQuantumTask API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.CreateSpendingLimit">CreateSpendingLimit</a></code> | <code>string[]</code> | IAM actions required for the CreateSpendingLimit API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.DeleteSpendingLimit">DeleteSpendingLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpendingLimit API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.opGetDevice">opGetDevice</a></code> | <code>string[]</code> | IAM actions required for the GetDevice API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.opGetQuantumTask">opGetQuantumTask</a></code> | <code>string[]</code> | IAM actions required for the GetQuantumTask API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.SearchDevices">SearchDevices</a></code> | <code>string[]</code> | IAM actions required for the SearchDevices API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.SearchJobs">SearchJobs</a></code> | <code>string[]</code> | IAM actions required for the SearchJobs API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.SearchQuantumTasks">SearchQuantumTasks</a></code> | <code>string[]</code> | IAM actions required for the SearchQuantumTasks API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.SearchSpendingLimits">SearchSpendingLimits</a></code> | <code>string[]</code> | IAM actions required for the SearchSpendingLimits API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.braket.BraketOperations.property.UpdateSpendingLimit">UpdateSpendingLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpendingLimit API call. |

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.braket.BraketOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CancelQuantumTask`<sup>Required</sup> <a name="CancelQuantumTask" id="@cdk_utils/iam.braket.BraketOperations.property.CancelQuantumTask"></a>

```typescript
public readonly CancelQuantumTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelQuantumTask API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.braket.BraketOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateQuantumTask`<sup>Required</sup> <a name="CreateQuantumTask" id="@cdk_utils/iam.braket.BraketOperations.property.CreateQuantumTask"></a>

```typescript
public readonly CreateQuantumTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuantumTask API call.

---

##### `CreateSpendingLimit`<sup>Required</sup> <a name="CreateSpendingLimit" id="@cdk_utils/iam.braket.BraketOperations.property.CreateSpendingLimit"></a>

```typescript
public readonly CreateSpendingLimit: string[];
```

- *Type:* string[]

IAM actions required for the CreateSpendingLimit API call.

---

##### `DeleteSpendingLimit`<sup>Required</sup> <a name="DeleteSpendingLimit" id="@cdk_utils/iam.braket.BraketOperations.property.DeleteSpendingLimit"></a>

```typescript
public readonly DeleteSpendingLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpendingLimit API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.braket.BraketOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDevice`<sup>Required</sup> <a name="opGetDevice" id="@cdk_utils/iam.braket.BraketOperations.property.opGetDevice"></a>

```typescript
public readonly opGetDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetDevice API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.braket.BraketOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetQuantumTask`<sup>Required</sup> <a name="opGetQuantumTask" id="@cdk_utils/iam.braket.BraketOperations.property.opGetQuantumTask"></a>

```typescript
public readonly opGetQuantumTask: string[];
```

- *Type:* string[]

IAM actions required for the GetQuantumTask API call.

---

##### `SearchDevices`<sup>Required</sup> <a name="SearchDevices" id="@cdk_utils/iam.braket.BraketOperations.property.SearchDevices"></a>

```typescript
public readonly SearchDevices: string[];
```

- *Type:* string[]

IAM actions required for the SearchDevices API call.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.braket.BraketOperations.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string[];
```

- *Type:* string[]

IAM actions required for the SearchJobs API call.

---

##### `SearchQuantumTasks`<sup>Required</sup> <a name="SearchQuantumTasks" id="@cdk_utils/iam.braket.BraketOperations.property.SearchQuantumTasks"></a>

```typescript
public readonly SearchQuantumTasks: string[];
```

- *Type:* string[]

IAM actions required for the SearchQuantumTasks API call.

---

##### `SearchSpendingLimits`<sup>Required</sup> <a name="SearchSpendingLimits" id="@cdk_utils/iam.braket.BraketOperations.property.SearchSpendingLimits"></a>

```typescript
public readonly SearchSpendingLimits: string[];
```

- *Type:* string[]

IAM actions required for the SearchSpendingLimits API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.braket.BraketOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.braket.BraketOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateSpendingLimit`<sup>Required</sup> <a name="UpdateSpendingLimit" id="@cdk_utils/iam.braket.BraketOperations.property.UpdateSpendingLimit"></a>

```typescript
public readonly UpdateSpendingLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpendingLimit API call.

---

### BraketResources <a name="BraketResources" id="@cdk_utils/iam.braket.BraketResources"></a>

ARN builders, validators, and parsers for braket resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.braket.BraketResources.Initializer"></a>

```typescript
import { braket } from '@cdk_utils/iam'

new braket.BraketResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.isValidQuantumTaskArn">isValidQuantumTaskArn</a></code> | Validates whether a string is a valid ARN for the quantum-task resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.isValidSpendingLimitArn">isValidSpendingLimitArn</a></code> | Validates whether a string is a valid ARN for the spending-limit resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.parseQuantumTaskArn">parseQuantumTaskArn</a></code> | Parses a quantum-task ARN into its components. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.parseSpendingLimitArn">parseSpendingLimitArn</a></code> | Parses a spending-limit ARN into its components. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.quantumTask">quantumTask</a></code> | Builds an ARN for the quantum-task resource. |
| <code><a href="#@cdk_utils/iam.braket.BraketResources.spendingLimit">spendingLimit</a></code> | Builds an ARN for the spending-limit resource. |

---

##### `device` <a name="device" id="@cdk_utils/iam.braket.BraketResources.device"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.device(props: BraketDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.braket.BraketResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.braket.BraketDeviceArnProps">BraketDeviceArnProps</a>

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.braket.BraketResources.isValidDeviceArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.braket.BraketResources.isValidJobArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQuantumTaskArn` <a name="isValidQuantumTaskArn" id="@cdk_utils/iam.braket.BraketResources.isValidQuantumTaskArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.isValidQuantumTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the quantum-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.isValidQuantumTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSpendingLimitArn` <a name="isValidSpendingLimitArn" id="@cdk_utils/iam.braket.BraketResources.isValidSpendingLimitArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.isValidSpendingLimitArn(arn: string)
```

Validates whether a string is a valid ARN for the spending-limit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.isValidSpendingLimitArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.braket.BraketResources.job"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.job(props: BraketJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.braket.BraketResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.braket.BraketJobArnProps">BraketJobArnProps</a>

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.braket.BraketResources.parseDeviceArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.braket.BraketResources.parseJobArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuantumTaskArn` <a name="parseQuantumTaskArn" id="@cdk_utils/iam.braket.BraketResources.parseQuantumTaskArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.parseQuantumTaskArn(arn: string)
```

Parses a quantum-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.parseQuantumTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpendingLimitArn` <a name="parseSpendingLimitArn" id="@cdk_utils/iam.braket.BraketResources.parseSpendingLimitArn"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.parseSpendingLimitArn(arn: string)
```

Parses a spending-limit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.braket.BraketResources.parseSpendingLimitArn.parameter.arn"></a>

- *Type:* string

---

##### `quantumTask` <a name="quantumTask" id="@cdk_utils/iam.braket.BraketResources.quantumTask"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.quantumTask(props: BraketQuantumTaskArnProps)
```

Builds an ARN for the quantum-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.braket.BraketResources.quantumTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.braket.BraketQuantumTaskArnProps">BraketQuantumTaskArnProps</a>

---

##### `spendingLimit` <a name="spendingLimit" id="@cdk_utils/iam.braket.BraketResources.spendingLimit"></a>

```typescript
import { braket } from '@cdk_utils/iam'

braket.BraketResources.spendingLimit(props: BraketSpendingLimitArnProps)
```

Builds an ARN for the spending-limit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.braket.BraketResources.spendingLimit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.braket.BraketSpendingLimitArnProps">BraketSpendingLimitArnProps</a>

---




