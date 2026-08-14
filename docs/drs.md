# `drs` Submodule <a name="`drs` Submodule" id="@cdk_utils/iam.drs"></a>


## Structs <a name="Structs" id="Structs"></a>

### DRSJobResourceArnComponents <a name="DRSJobResourceArnComponents" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents"></a>

Parsed components of a JobResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSJobResourceArnComponents: drs.DRSJobResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobID component. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSJobResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DRSJobResourceArnProps <a name="DRSJobResourceArnProps" id="@cdk_utils/iam.drs.DRSJobResourceArnProps"></a>

Properties for building a JobResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSJobResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSJobResourceArnProps: drs.DRSJobResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSJobResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.drs.DRSJobResourceArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSJobResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSJobResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSJobResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DRSLaunchConfigurationTemplateResourceArnComponents <a name="DRSLaunchConfigurationTemplateResourceArnComponents" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents"></a>

Parsed components of a LaunchConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSLaunchConfigurationTemplateResourceArnComponents: drs.DRSLaunchConfigurationTemplateResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | The LaunchConfigurationTemplateID component. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

The LaunchConfigurationTemplateID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DRSLaunchConfigurationTemplateResourceArnProps <a name="DRSLaunchConfigurationTemplateResourceArnProps" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps"></a>

Properties for building a LaunchConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSLaunchConfigurationTemplateResourceArnProps: drs.DRSLaunchConfigurationTemplateResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | The LaunchConfigurationTemplateID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

The LaunchConfigurationTemplateID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DRSRecoveryInstanceResourceArnComponents <a name="DRSRecoveryInstanceResourceArnComponents" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents"></a>

Parsed components of a RecoveryInstanceResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSRecoveryInstanceResourceArnComponents: drs.DRSRecoveryInstanceResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.recoveryInstanceId">recoveryInstanceId</a></code> | <code>string</code> | The RecoveryInstanceID component. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recoveryInstanceId`<sup>Required</sup> <a name="recoveryInstanceId" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.recoveryInstanceId"></a>

```typescript
public readonly recoveryInstanceId: string;
```

- *Type:* string

The RecoveryInstanceID component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DRSRecoveryInstanceResourceArnProps <a name="DRSRecoveryInstanceResourceArnProps" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps"></a>

Properties for building a RecoveryInstanceResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSRecoveryInstanceResourceArnProps: drs.DRSRecoveryInstanceResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.recoveryInstanceId">recoveryInstanceId</a></code> | <code>string</code> | The RecoveryInstanceID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recoveryInstanceId`<sup>Required</sup> <a name="recoveryInstanceId" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.recoveryInstanceId"></a>

```typescript
public readonly recoveryInstanceId: string;
```

- *Type:* string

The RecoveryInstanceID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DRSReplicationConfigurationTemplateResourceArnComponents <a name="DRSReplicationConfigurationTemplateResourceArnComponents" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents"></a>

Parsed components of a ReplicationConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSReplicationConfigurationTemplateResourceArnComponents: drs.DRSReplicationConfigurationTemplateResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | The ReplicationConfigurationTemplateID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnComponents.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

The ReplicationConfigurationTemplateID component.

---

### DRSReplicationConfigurationTemplateResourceArnProps <a name="DRSReplicationConfigurationTemplateResourceArnProps" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps"></a>

Properties for building a ReplicationConfigurationTemplateResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSReplicationConfigurationTemplateResourceArnProps: drs.DRSReplicationConfigurationTemplateResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | The ReplicationConfigurationTemplateID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

The ReplicationConfigurationTemplateID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DRSSourceNetworkResourceArnComponents <a name="DRSSourceNetworkResourceArnComponents" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents"></a>

Parsed components of a SourceNetworkResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSSourceNetworkResourceArnComponents: drs.DRSSourceNetworkResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.sourceNetworkId">sourceNetworkId</a></code> | <code>string</code> | The SourceNetworkID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnComponents.property.sourceNetworkId"></a>

```typescript
public readonly sourceNetworkId: string;
```

- *Type:* string

The SourceNetworkID component.

---

### DRSSourceNetworkResourceArnProps <a name="DRSSourceNetworkResourceArnProps" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps"></a>

Properties for building a SourceNetworkResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSSourceNetworkResourceArnProps: drs.DRSSourceNetworkResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.sourceNetworkId">sourceNetworkId</a></code> | <code>string</code> | The SourceNetworkID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceNetworkId`<sup>Required</sup> <a name="sourceNetworkId" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.sourceNetworkId"></a>

```typescript
public readonly sourceNetworkId: string;
```

- *Type:* string

The SourceNetworkID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DRSSourceServerResourceArnComponents <a name="DRSSourceServerResourceArnComponents" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents"></a>

Parsed components of a SourceServerResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSSourceServerResourceArnComponents: drs.DRSSourceServerResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | The SourceServerID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnComponents.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

The SourceServerID component.

---

### DRSSourceServerResourceArnProps <a name="DRSSourceServerResourceArnProps" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps"></a>

Properties for building a SourceServerResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

const dRSSourceServerResourceArnProps: drs.DRSSourceServerResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.sourceServerId">sourceServerId</a></code> | <code>string</code> | The SourceServerID component of the ARN. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.sourceServerId"></a>

```typescript
public readonly sourceServerId: string;
```

- *Type:* string

The SourceServerID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.drs.DRSSourceServerResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DRSActions <a name="DRSActions" id="@cdk_utils/iam.drs.DRSActions"></a>

IAM action constants for the drs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.drs.DRSActions.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

new drs.DRSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentCommandForDrs">actionGetAgentCommandForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentCommandForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentConfirmedResumeInfoForDrs">actionGetAgentConfirmedResumeInfoForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentConfirmedResumeInfoForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentInstallationAssetsForDrs">actionGetAgentInstallationAssetsForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentInstallationAssetsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentReplicationInfoForDrs">actionGetAgentReplicationInfoForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentReplicationInfoForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentRuntimeConfigurationForDrs">actionGetAgentRuntimeConfigurationForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentRuntimeConfigurationForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetAgentSnapshotCreditsForDrs">actionGetAgentSnapshotCreditsForDrs</a></code> | <code>string</code> | [Read] drs:GetAgentSnapshotCreditsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetChannelCommandsForDrs">actionGetChannelCommandsForDrs</a></code> | <code>string</code> | [Read] drs:GetChannelCommandsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackCommandForDrs">actionGetFailbackCommandForDrs</a></code> | <code>string</code> | [Read] drs:GetFailbackCommandForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackLaunchRequestedForDrs">actionGetFailbackLaunchRequestedForDrs</a></code> | <code>string</code> | [Read] drs:GetFailbackLaunchRequestedForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackReplicationConfiguration">actionGetFailbackReplicationConfiguration</a></code> | <code>string</code> | [Read] drs:GetFailbackReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetLaunchConfiguration">actionGetLaunchConfiguration</a></code> | <code>string</code> | [Read] drs:GetLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetReplicationConfiguration">actionGetReplicationConfiguration</a></code> | <code>string</code> | [Read] drs:GetReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.actionGetSuggestedFailbackClientDeviceMappingForDrs">actionGetSuggestedFailbackClientDeviceMappingForDrs</a></code> | <code>string</code> | [Read] drs:GetSuggestedFailbackClientDeviceMappingForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AssociateFailbackClientToRecoveryInstanceForDrs">AssociateFailbackClientToRecoveryInstanceForDrs</a></code> | <code>string</code> | [Write] drs:AssociateFailbackClientToRecoveryInstanceForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.AssociateSourceNetworkStack">AssociateSourceNetworkStack</a></code> | <code>string</code> | [Write] drs:AssociateSourceNetworkStack. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.BatchCreateVolumeSnapshotGroupForDrs">BatchCreateVolumeSnapshotGroupForDrs</a></code> | <code>string</code> | [Write] drs:BatchCreateVolumeSnapshotGroupForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.BatchDeleteSnapshotRequestForDrs">BatchDeleteSnapshotRequestForDrs</a></code> | <code>string</code> | [Write] drs:BatchDeleteSnapshotRequestForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateConvertedSnapshotForDrs">CreateConvertedSnapshotForDrs</a></code> | <code>string</code> | [Write] drs:CreateConvertedSnapshotForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateExtendedSourceServer">CreateExtendedSourceServer</a></code> | <code>string</code> | [Write] drs:CreateExtendedSourceServer. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateLaunchConfigurationTemplate">CreateLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:CreateLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateRecoveryInstanceForDrs">CreateRecoveryInstanceForDrs</a></code> | <code>string</code> | [Write] drs:CreateRecoveryInstanceForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateReplicationConfigurationTemplate">CreateReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:CreateReplicationConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateSourceNetwork">CreateSourceNetwork</a></code> | <code>string</code> | [Write] drs:CreateSourceNetwork. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.CreateSourceServerForDrs">CreateSourceServerForDrs</a></code> | <code>string</code> | [Write] drs:CreateSourceServerForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteJob">DeleteJob</a></code> | <code>string</code> | [Write] drs:DeleteJob. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteLaunchAction">DeleteLaunchAction</a></code> | <code>string</code> | [Write] drs:DeleteLaunchAction. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteLaunchConfigurationTemplate">DeleteLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:DeleteLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteRecoveryInstance">DeleteRecoveryInstance</a></code> | <code>string</code> | [Write] drs:DeleteRecoveryInstance. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteReplicationConfigurationTemplate">DeleteReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:DeleteReplicationConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteSourceNetwork">DeleteSourceNetwork</a></code> | <code>string</code> | [Write] drs:DeleteSourceNetwork. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DeleteSourceServer">DeleteSourceServer</a></code> | <code>string</code> | [Write] drs:DeleteSourceServer. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeJobLogItems">DescribeJobLogItems</a></code> | <code>string</code> | [Read] drs:DescribeJobLogItems. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeJobs">DescribeJobs</a></code> | <code>string</code> | [Read] drs:DescribeJobs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeLaunchConfigurationTemplates">DescribeLaunchConfigurationTemplates</a></code> | <code>string</code> | [Read] drs:DescribeLaunchConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeRecoveryInstances">DescribeRecoveryInstances</a></code> | <code>string</code> | [Read] drs:DescribeRecoveryInstances. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeRecoverySnapshots">DescribeRecoverySnapshots</a></code> | <code>string</code> | [Read] drs:DescribeRecoverySnapshots. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeReplicationConfigurationTemplates">DescribeReplicationConfigurationTemplates</a></code> | <code>string</code> | [Read] drs:DescribeReplicationConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeReplicationServerAssociationsForDrs">DescribeReplicationServerAssociationsForDrs</a></code> | <code>string</code> | [Read] drs:DescribeReplicationServerAssociationsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeSnapshotRequestsForDrs">DescribeSnapshotRequestsForDrs</a></code> | <code>string</code> | [Read] drs:DescribeSnapshotRequestsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeSourceNetworks">DescribeSourceNetworks</a></code> | <code>string</code> | [Read] drs:DescribeSourceNetworks. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DescribeSourceServers">DescribeSourceServers</a></code> | <code>string</code> | [Read] drs:DescribeSourceServers. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DisconnectRecoveryInstance">DisconnectRecoveryInstance</a></code> | <code>string</code> | [Write] drs:DisconnectRecoveryInstance. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.DisconnectSourceServer">DisconnectSourceServer</a></code> | <code>string</code> | [Write] drs:DisconnectSourceServer. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ExportSourceNetworkCfnTemplate">ExportSourceNetworkCfnTemplate</a></code> | <code>string</code> | [Write] drs:ExportSourceNetworkCfnTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.InitializeService">InitializeService</a></code> | <code>string</code> | [Write] drs:InitializeService. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.IssueAgentCertificateForDrs">IssueAgentCertificateForDrs</a></code> | <code>string</code> | [Write] drs:IssueAgentCertificateForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ListExtensibleSourceServers">ListExtensibleSourceServers</a></code> | <code>string</code> | [Read] drs:ListExtensibleSourceServers. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ListLaunchActions">ListLaunchActions</a></code> | <code>string</code> | [Read] drs:ListLaunchActions. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ListStagingAccounts">ListStagingAccounts</a></code> | <code>string</code> | [Read] drs:ListStagingAccounts. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] drs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyAgentAuthenticationForDrs">NotifyAgentAuthenticationForDrs</a></code> | <code>string</code> | [Write] drs:NotifyAgentAuthenticationForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyAgentConnectedForDrs">NotifyAgentConnectedForDrs</a></code> | <code>string</code> | [Write] drs:NotifyAgentConnectedForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyAgentDisconnectedForDrs">NotifyAgentDisconnectedForDrs</a></code> | <code>string</code> | [Write] drs:NotifyAgentDisconnectedForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyAgentReplicationProgressForDrs">NotifyAgentReplicationProgressForDrs</a></code> | <code>string</code> | [Write] drs:NotifyAgentReplicationProgressForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyConsistencyAttainedForDrs">NotifyConsistencyAttainedForDrs</a></code> | <code>string</code> | [Write] drs:NotifyConsistencyAttainedForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyReplicationServerAuthenticationForDrs">NotifyReplicationServerAuthenticationForDrs</a></code> | <code>string</code> | [Write] drs:NotifyReplicationServerAuthenticationForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.NotifyVolumeEventForDrs">NotifyVolumeEventForDrs</a></code> | <code>string</code> | [Write] drs:NotifyVolumeEventForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.PutLaunchAction">PutLaunchAction</a></code> | <code>string</code> | [Write] drs:PutLaunchAction. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.RetryDataReplication">RetryDataReplication</a></code> | <code>string</code> | [Write] drs:RetryDataReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.ReverseReplication">ReverseReplication</a></code> | <code>string</code> | [Write] drs:ReverseReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendAgentLogsForDrs">SendAgentLogsForDrs</a></code> | <code>string</code> | [Write] drs:SendAgentLogsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendAgentMetricsForDrs">SendAgentMetricsForDrs</a></code> | <code>string</code> | [Write] drs:SendAgentMetricsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendChannelCommandResultForDrs">SendChannelCommandResultForDrs</a></code> | <code>string</code> | [Write] drs:SendChannelCommandResultForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendClientLogsForDrs">SendClientLogsForDrs</a></code> | <code>string</code> | [Write] drs:SendClientLogsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendClientMetricsForDrs">SendClientMetricsForDrs</a></code> | <code>string</code> | [Write] drs:SendClientMetricsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SendVolumeStatsForDrs">SendVolumeStatsForDrs</a></code> | <code>string</code> | [Write] drs:SendVolumeStatsForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StartFailbackLaunch">StartFailbackLaunch</a></code> | <code>string</code> | [Write] drs:StartFailbackLaunch. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StartRecovery">StartRecovery</a></code> | <code>string</code> | [Write] drs:StartRecovery. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StartReplication">StartReplication</a></code> | <code>string</code> | [Write] drs:StartReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StartSourceNetworkRecovery">StartSourceNetworkRecovery</a></code> | <code>string</code> | [Write] drs:StartSourceNetworkRecovery. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StartSourceNetworkReplication">StartSourceNetworkReplication</a></code> | <code>string</code> | [Write] drs:StartSourceNetworkReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StopFailback">StopFailback</a></code> | <code>string</code> | [Write] drs:StopFailback. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StopReplication">StopReplication</a></code> | <code>string</code> | [Write] drs:StopReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.StopSourceNetworkReplication">StopSourceNetworkReplication</a></code> | <code>string</code> | [Write] drs:StopSourceNetworkReplication. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] drs:TagResource. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.TerminateRecoveryInstances">TerminateRecoveryInstances</a></code> | <code>string</code> | [Write] drs:TerminateRecoveryInstances. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] drs:UntagResource. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateAgentBacklogForDrs">UpdateAgentBacklogForDrs</a></code> | <code>string</code> | [Write] drs:UpdateAgentBacklogForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateAgentConversionInfoForDrs">UpdateAgentConversionInfoForDrs</a></code> | <code>string</code> | [Write] drs:UpdateAgentConversionInfoForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateAgentReplicationInfoForDrs">UpdateAgentReplicationInfoForDrs</a></code> | <code>string</code> | [Write] drs:UpdateAgentReplicationInfoForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateAgentReplicationProcessStateForDrs">UpdateAgentReplicationProcessStateForDrs</a></code> | <code>string</code> | [Write] drs:UpdateAgentReplicationProcessStateForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateAgentSourcePropertiesForDrs">UpdateAgentSourcePropertiesForDrs</a></code> | <code>string</code> | [Write] drs:UpdateAgentSourcePropertiesForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackClientDeviceMappingForDrs">UpdateFailbackClientDeviceMappingForDrs</a></code> | <code>string</code> | [Write] drs:UpdateFailbackClientDeviceMappingForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackClientLastSeenForDrs">UpdateFailbackClientLastSeenForDrs</a></code> | <code>string</code> | [Write] drs:UpdateFailbackClientLastSeenForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackReplicationConfiguration">UpdateFailbackReplicationConfiguration</a></code> | <code>string</code> | [Write] drs:UpdateFailbackReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateLaunchConfiguration">UpdateLaunchConfiguration</a></code> | <code>string</code> | [Write] drs:UpdateLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateLaunchConfigurationTemplate">UpdateLaunchConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:UpdateLaunchConfigurationTemplate. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationCertificateForDrs">UpdateReplicationCertificateForDrs</a></code> | <code>string</code> | [Write] drs:UpdateReplicationCertificateForDrs. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationConfiguration">UpdateReplicationConfiguration</a></code> | <code>string</code> | [Write] drs:UpdateReplicationConfiguration. |
| <code><a href="#@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationConfigurationTemplate">UpdateReplicationConfigurationTemplate</a></code> | <code>string</code> | [Write] drs:UpdateReplicationConfigurationTemplate. |

---

##### `actionGetAgentCommandForDrs`<sup>Required</sup> <a name="actionGetAgentCommandForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentCommandForDrs"></a>

```typescript
public readonly actionGetAgentCommandForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentCommandForDrs.

---

##### `actionGetAgentConfirmedResumeInfoForDrs`<sup>Required</sup> <a name="actionGetAgentConfirmedResumeInfoForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentConfirmedResumeInfoForDrs"></a>

```typescript
public readonly actionGetAgentConfirmedResumeInfoForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentConfirmedResumeInfoForDrs.

---

##### `actionGetAgentInstallationAssetsForDrs`<sup>Required</sup> <a name="actionGetAgentInstallationAssetsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentInstallationAssetsForDrs"></a>

```typescript
public readonly actionGetAgentInstallationAssetsForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentInstallationAssetsForDrs.

---

##### `actionGetAgentReplicationInfoForDrs`<sup>Required</sup> <a name="actionGetAgentReplicationInfoForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentReplicationInfoForDrs"></a>

```typescript
public readonly actionGetAgentReplicationInfoForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentReplicationInfoForDrs.

---

##### `actionGetAgentRuntimeConfigurationForDrs`<sup>Required</sup> <a name="actionGetAgentRuntimeConfigurationForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentRuntimeConfigurationForDrs"></a>

```typescript
public readonly actionGetAgentRuntimeConfigurationForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentRuntimeConfigurationForDrs.

---

##### `actionGetAgentSnapshotCreditsForDrs`<sup>Required</sup> <a name="actionGetAgentSnapshotCreditsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetAgentSnapshotCreditsForDrs"></a>

```typescript
public readonly actionGetAgentSnapshotCreditsForDrs: string;
```

- *Type:* string

[Read] drs:GetAgentSnapshotCreditsForDrs.

---

##### `actionGetChannelCommandsForDrs`<sup>Required</sup> <a name="actionGetChannelCommandsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetChannelCommandsForDrs"></a>

```typescript
public readonly actionGetChannelCommandsForDrs: string;
```

- *Type:* string

[Read] drs:GetChannelCommandsForDrs.

---

##### `actionGetFailbackCommandForDrs`<sup>Required</sup> <a name="actionGetFailbackCommandForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackCommandForDrs"></a>

```typescript
public readonly actionGetFailbackCommandForDrs: string;
```

- *Type:* string

[Read] drs:GetFailbackCommandForDrs.

---

##### `actionGetFailbackLaunchRequestedForDrs`<sup>Required</sup> <a name="actionGetFailbackLaunchRequestedForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackLaunchRequestedForDrs"></a>

```typescript
public readonly actionGetFailbackLaunchRequestedForDrs: string;
```

- *Type:* string

[Read] drs:GetFailbackLaunchRequestedForDrs.

---

##### `actionGetFailbackReplicationConfiguration`<sup>Required</sup> <a name="actionGetFailbackReplicationConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.actionGetFailbackReplicationConfiguration"></a>

```typescript
public readonly actionGetFailbackReplicationConfiguration: string;
```

- *Type:* string

[Read] drs:GetFailbackReplicationConfiguration.

---

##### `actionGetLaunchConfiguration`<sup>Required</sup> <a name="actionGetLaunchConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.actionGetLaunchConfiguration"></a>

```typescript
public readonly actionGetLaunchConfiguration: string;
```

- *Type:* string

[Read] drs:GetLaunchConfiguration.

---

##### `actionGetReplicationConfiguration`<sup>Required</sup> <a name="actionGetReplicationConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.actionGetReplicationConfiguration"></a>

```typescript
public readonly actionGetReplicationConfiguration: string;
```

- *Type:* string

[Read] drs:GetReplicationConfiguration.

---

##### `actionGetSuggestedFailbackClientDeviceMappingForDrs`<sup>Required</sup> <a name="actionGetSuggestedFailbackClientDeviceMappingForDrs" id="@cdk_utils/iam.drs.DRSActions.property.actionGetSuggestedFailbackClientDeviceMappingForDrs"></a>

```typescript
public readonly actionGetSuggestedFailbackClientDeviceMappingForDrs: string;
```

- *Type:* string

[Read] drs:GetSuggestedFailbackClientDeviceMappingForDrs.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.drs.DRSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.drs.DRSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.drs.DRSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.drs.DRSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.drs.DRSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFailbackClientToRecoveryInstanceForDrs`<sup>Required</sup> <a name="AssociateFailbackClientToRecoveryInstanceForDrs" id="@cdk_utils/iam.drs.DRSActions.property.AssociateFailbackClientToRecoveryInstanceForDrs"></a>

```typescript
public readonly AssociateFailbackClientToRecoveryInstanceForDrs: string;
```

- *Type:* string

[Write] drs:AssociateFailbackClientToRecoveryInstanceForDrs.

---

##### `AssociateSourceNetworkStack`<sup>Required</sup> <a name="AssociateSourceNetworkStack" id="@cdk_utils/iam.drs.DRSActions.property.AssociateSourceNetworkStack"></a>

```typescript
public readonly AssociateSourceNetworkStack: string;
```

- *Type:* string

[Write] drs:AssociateSourceNetworkStack.

---

##### `BatchCreateVolumeSnapshotGroupForDrs`<sup>Required</sup> <a name="BatchCreateVolumeSnapshotGroupForDrs" id="@cdk_utils/iam.drs.DRSActions.property.BatchCreateVolumeSnapshotGroupForDrs"></a>

```typescript
public readonly BatchCreateVolumeSnapshotGroupForDrs: string;
```

- *Type:* string

[Write] drs:BatchCreateVolumeSnapshotGroupForDrs.

---

##### `BatchDeleteSnapshotRequestForDrs`<sup>Required</sup> <a name="BatchDeleteSnapshotRequestForDrs" id="@cdk_utils/iam.drs.DRSActions.property.BatchDeleteSnapshotRequestForDrs"></a>

```typescript
public readonly BatchDeleteSnapshotRequestForDrs: string;
```

- *Type:* string

[Write] drs:BatchDeleteSnapshotRequestForDrs.

---

##### `CreateConvertedSnapshotForDrs`<sup>Required</sup> <a name="CreateConvertedSnapshotForDrs" id="@cdk_utils/iam.drs.DRSActions.property.CreateConvertedSnapshotForDrs"></a>

```typescript
public readonly CreateConvertedSnapshotForDrs: string;
```

- *Type:* string

[Write] drs:CreateConvertedSnapshotForDrs.

---

##### `CreateExtendedSourceServer`<sup>Required</sup> <a name="CreateExtendedSourceServer" id="@cdk_utils/iam.drs.DRSActions.property.CreateExtendedSourceServer"></a>

```typescript
public readonly CreateExtendedSourceServer: string;
```

- *Type:* string

[Write] drs:CreateExtendedSourceServer.

---

##### `CreateLaunchConfigurationTemplate`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.CreateLaunchConfigurationTemplate"></a>

```typescript
public readonly CreateLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:CreateLaunchConfigurationTemplate.

---

##### `CreateRecoveryInstanceForDrs`<sup>Required</sup> <a name="CreateRecoveryInstanceForDrs" id="@cdk_utils/iam.drs.DRSActions.property.CreateRecoveryInstanceForDrs"></a>

```typescript
public readonly CreateRecoveryInstanceForDrs: string;
```

- *Type:* string

[Write] drs:CreateRecoveryInstanceForDrs.

---

##### `CreateReplicationConfigurationTemplate`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.CreateReplicationConfigurationTemplate"></a>

```typescript
public readonly CreateReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:CreateReplicationConfigurationTemplate.

---

##### `CreateSourceNetwork`<sup>Required</sup> <a name="CreateSourceNetwork" id="@cdk_utils/iam.drs.DRSActions.property.CreateSourceNetwork"></a>

```typescript
public readonly CreateSourceNetwork: string;
```

- *Type:* string

[Write] drs:CreateSourceNetwork.

---

##### `CreateSourceServerForDrs`<sup>Required</sup> <a name="CreateSourceServerForDrs" id="@cdk_utils/iam.drs.DRSActions.property.CreateSourceServerForDrs"></a>

```typescript
public readonly CreateSourceServerForDrs: string;
```

- *Type:* string

[Write] drs:CreateSourceServerForDrs.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.drs.DRSActions.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string;
```

- *Type:* string

[Write] drs:DeleteJob.

---

##### `DeleteLaunchAction`<sup>Required</sup> <a name="DeleteLaunchAction" id="@cdk_utils/iam.drs.DRSActions.property.DeleteLaunchAction"></a>

```typescript
public readonly DeleteLaunchAction: string;
```

- *Type:* string

[Write] drs:DeleteLaunchAction.

---

##### `DeleteLaunchConfigurationTemplate`<sup>Required</sup> <a name="DeleteLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.DeleteLaunchConfigurationTemplate"></a>

```typescript
public readonly DeleteLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:DeleteLaunchConfigurationTemplate.

---

##### `DeleteRecoveryInstance`<sup>Required</sup> <a name="DeleteRecoveryInstance" id="@cdk_utils/iam.drs.DRSActions.property.DeleteRecoveryInstance"></a>

```typescript
public readonly DeleteRecoveryInstance: string;
```

- *Type:* string

[Write] drs:DeleteRecoveryInstance.

---

##### `DeleteReplicationConfigurationTemplate`<sup>Required</sup> <a name="DeleteReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.DeleteReplicationConfigurationTemplate"></a>

```typescript
public readonly DeleteReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:DeleteReplicationConfigurationTemplate.

---

##### `DeleteSourceNetwork`<sup>Required</sup> <a name="DeleteSourceNetwork" id="@cdk_utils/iam.drs.DRSActions.property.DeleteSourceNetwork"></a>

```typescript
public readonly DeleteSourceNetwork: string;
```

- *Type:* string

[Write] drs:DeleteSourceNetwork.

---

##### `DeleteSourceServer`<sup>Required</sup> <a name="DeleteSourceServer" id="@cdk_utils/iam.drs.DRSActions.property.DeleteSourceServer"></a>

```typescript
public readonly DeleteSourceServer: string;
```

- *Type:* string

[Write] drs:DeleteSourceServer.

---

##### `DescribeJobLogItems`<sup>Required</sup> <a name="DescribeJobLogItems" id="@cdk_utils/iam.drs.DRSActions.property.DescribeJobLogItems"></a>

```typescript
public readonly DescribeJobLogItems: string;
```

- *Type:* string

[Read] drs:DescribeJobLogItems.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.drs.DRSActions.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string;
```

- *Type:* string

[Read] drs:DescribeJobs.

---

##### `DescribeLaunchConfigurationTemplates`<sup>Required</sup> <a name="DescribeLaunchConfigurationTemplates" id="@cdk_utils/iam.drs.DRSActions.property.DescribeLaunchConfigurationTemplates"></a>

```typescript
public readonly DescribeLaunchConfigurationTemplates: string;
```

- *Type:* string

[Read] drs:DescribeLaunchConfigurationTemplates.

---

##### `DescribeRecoveryInstances`<sup>Required</sup> <a name="DescribeRecoveryInstances" id="@cdk_utils/iam.drs.DRSActions.property.DescribeRecoveryInstances"></a>

```typescript
public readonly DescribeRecoveryInstances: string;
```

- *Type:* string

[Read] drs:DescribeRecoveryInstances.

---

##### `DescribeRecoverySnapshots`<sup>Required</sup> <a name="DescribeRecoverySnapshots" id="@cdk_utils/iam.drs.DRSActions.property.DescribeRecoverySnapshots"></a>

```typescript
public readonly DescribeRecoverySnapshots: string;
```

- *Type:* string

[Read] drs:DescribeRecoverySnapshots.

---

##### `DescribeReplicationConfigurationTemplates`<sup>Required</sup> <a name="DescribeReplicationConfigurationTemplates" id="@cdk_utils/iam.drs.DRSActions.property.DescribeReplicationConfigurationTemplates"></a>

```typescript
public readonly DescribeReplicationConfigurationTemplates: string;
```

- *Type:* string

[Read] drs:DescribeReplicationConfigurationTemplates.

---

##### `DescribeReplicationServerAssociationsForDrs`<sup>Required</sup> <a name="DescribeReplicationServerAssociationsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.DescribeReplicationServerAssociationsForDrs"></a>

```typescript
public readonly DescribeReplicationServerAssociationsForDrs: string;
```

- *Type:* string

[Read] drs:DescribeReplicationServerAssociationsForDrs.

---

##### `DescribeSnapshotRequestsForDrs`<sup>Required</sup> <a name="DescribeSnapshotRequestsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.DescribeSnapshotRequestsForDrs"></a>

```typescript
public readonly DescribeSnapshotRequestsForDrs: string;
```

- *Type:* string

[Read] drs:DescribeSnapshotRequestsForDrs.

---

##### `DescribeSourceNetworks`<sup>Required</sup> <a name="DescribeSourceNetworks" id="@cdk_utils/iam.drs.DRSActions.property.DescribeSourceNetworks"></a>

```typescript
public readonly DescribeSourceNetworks: string;
```

- *Type:* string

[Read] drs:DescribeSourceNetworks.

---

##### `DescribeSourceServers`<sup>Required</sup> <a name="DescribeSourceServers" id="@cdk_utils/iam.drs.DRSActions.property.DescribeSourceServers"></a>

```typescript
public readonly DescribeSourceServers: string;
```

- *Type:* string

[Read] drs:DescribeSourceServers.

---

##### `DisconnectRecoveryInstance`<sup>Required</sup> <a name="DisconnectRecoveryInstance" id="@cdk_utils/iam.drs.DRSActions.property.DisconnectRecoveryInstance"></a>

```typescript
public readonly DisconnectRecoveryInstance: string;
```

- *Type:* string

[Write] drs:DisconnectRecoveryInstance.

---

##### `DisconnectSourceServer`<sup>Required</sup> <a name="DisconnectSourceServer" id="@cdk_utils/iam.drs.DRSActions.property.DisconnectSourceServer"></a>

```typescript
public readonly DisconnectSourceServer: string;
```

- *Type:* string

[Write] drs:DisconnectSourceServer.

---

##### `ExportSourceNetworkCfnTemplate`<sup>Required</sup> <a name="ExportSourceNetworkCfnTemplate" id="@cdk_utils/iam.drs.DRSActions.property.ExportSourceNetworkCfnTemplate"></a>

```typescript
public readonly ExportSourceNetworkCfnTemplate: string;
```

- *Type:* string

[Write] drs:ExportSourceNetworkCfnTemplate.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.drs.DRSActions.property.InitializeService"></a>

```typescript
public readonly InitializeService: string;
```

- *Type:* string

[Write] drs:InitializeService.

---

##### `IssueAgentCertificateForDrs`<sup>Required</sup> <a name="IssueAgentCertificateForDrs" id="@cdk_utils/iam.drs.DRSActions.property.IssueAgentCertificateForDrs"></a>

```typescript
public readonly IssueAgentCertificateForDrs: string;
```

- *Type:* string

[Write] drs:IssueAgentCertificateForDrs.

---

##### `ListExtensibleSourceServers`<sup>Required</sup> <a name="ListExtensibleSourceServers" id="@cdk_utils/iam.drs.DRSActions.property.ListExtensibleSourceServers"></a>

```typescript
public readonly ListExtensibleSourceServers: string;
```

- *Type:* string

[Read] drs:ListExtensibleSourceServers.

---

##### `ListLaunchActions`<sup>Required</sup> <a name="ListLaunchActions" id="@cdk_utils/iam.drs.DRSActions.property.ListLaunchActions"></a>

```typescript
public readonly ListLaunchActions: string;
```

- *Type:* string

[Read] drs:ListLaunchActions.

---

##### `ListStagingAccounts`<sup>Required</sup> <a name="ListStagingAccounts" id="@cdk_utils/iam.drs.DRSActions.property.ListStagingAccounts"></a>

```typescript
public readonly ListStagingAccounts: string;
```

- *Type:* string

[Read] drs:ListStagingAccounts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.drs.DRSActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] drs:ListTagsForResource.

---

##### `NotifyAgentAuthenticationForDrs`<sup>Required</sup> <a name="NotifyAgentAuthenticationForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyAgentAuthenticationForDrs"></a>

```typescript
public readonly NotifyAgentAuthenticationForDrs: string;
```

- *Type:* string

[Write] drs:NotifyAgentAuthenticationForDrs.

---

##### `NotifyAgentConnectedForDrs`<sup>Required</sup> <a name="NotifyAgentConnectedForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyAgentConnectedForDrs"></a>

```typescript
public readonly NotifyAgentConnectedForDrs: string;
```

- *Type:* string

[Write] drs:NotifyAgentConnectedForDrs.

---

##### `NotifyAgentDisconnectedForDrs`<sup>Required</sup> <a name="NotifyAgentDisconnectedForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyAgentDisconnectedForDrs"></a>

```typescript
public readonly NotifyAgentDisconnectedForDrs: string;
```

- *Type:* string

[Write] drs:NotifyAgentDisconnectedForDrs.

---

##### `NotifyAgentReplicationProgressForDrs`<sup>Required</sup> <a name="NotifyAgentReplicationProgressForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyAgentReplicationProgressForDrs"></a>

```typescript
public readonly NotifyAgentReplicationProgressForDrs: string;
```

- *Type:* string

[Write] drs:NotifyAgentReplicationProgressForDrs.

---

##### `NotifyConsistencyAttainedForDrs`<sup>Required</sup> <a name="NotifyConsistencyAttainedForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyConsistencyAttainedForDrs"></a>

```typescript
public readonly NotifyConsistencyAttainedForDrs: string;
```

- *Type:* string

[Write] drs:NotifyConsistencyAttainedForDrs.

---

##### `NotifyReplicationServerAuthenticationForDrs`<sup>Required</sup> <a name="NotifyReplicationServerAuthenticationForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyReplicationServerAuthenticationForDrs"></a>

```typescript
public readonly NotifyReplicationServerAuthenticationForDrs: string;
```

- *Type:* string

[Write] drs:NotifyReplicationServerAuthenticationForDrs.

---

##### `NotifyVolumeEventForDrs`<sup>Required</sup> <a name="NotifyVolumeEventForDrs" id="@cdk_utils/iam.drs.DRSActions.property.NotifyVolumeEventForDrs"></a>

```typescript
public readonly NotifyVolumeEventForDrs: string;
```

- *Type:* string

[Write] drs:NotifyVolumeEventForDrs.

---

##### `PutLaunchAction`<sup>Required</sup> <a name="PutLaunchAction" id="@cdk_utils/iam.drs.DRSActions.property.PutLaunchAction"></a>

```typescript
public readonly PutLaunchAction: string;
```

- *Type:* string

[Write] drs:PutLaunchAction.

---

##### `RetryDataReplication`<sup>Required</sup> <a name="RetryDataReplication" id="@cdk_utils/iam.drs.DRSActions.property.RetryDataReplication"></a>

```typescript
public readonly RetryDataReplication: string;
```

- *Type:* string

[Write] drs:RetryDataReplication.

---

##### `ReverseReplication`<sup>Required</sup> <a name="ReverseReplication" id="@cdk_utils/iam.drs.DRSActions.property.ReverseReplication"></a>

```typescript
public readonly ReverseReplication: string;
```

- *Type:* string

[Write] drs:ReverseReplication.

---

##### `SendAgentLogsForDrs`<sup>Required</sup> <a name="SendAgentLogsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendAgentLogsForDrs"></a>

```typescript
public readonly SendAgentLogsForDrs: string;
```

- *Type:* string

[Write] drs:SendAgentLogsForDrs.

---

##### `SendAgentMetricsForDrs`<sup>Required</sup> <a name="SendAgentMetricsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendAgentMetricsForDrs"></a>

```typescript
public readonly SendAgentMetricsForDrs: string;
```

- *Type:* string

[Write] drs:SendAgentMetricsForDrs.

---

##### `SendChannelCommandResultForDrs`<sup>Required</sup> <a name="SendChannelCommandResultForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendChannelCommandResultForDrs"></a>

```typescript
public readonly SendChannelCommandResultForDrs: string;
```

- *Type:* string

[Write] drs:SendChannelCommandResultForDrs.

---

##### `SendClientLogsForDrs`<sup>Required</sup> <a name="SendClientLogsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendClientLogsForDrs"></a>

```typescript
public readonly SendClientLogsForDrs: string;
```

- *Type:* string

[Write] drs:SendClientLogsForDrs.

---

##### `SendClientMetricsForDrs`<sup>Required</sup> <a name="SendClientMetricsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendClientMetricsForDrs"></a>

```typescript
public readonly SendClientMetricsForDrs: string;
```

- *Type:* string

[Write] drs:SendClientMetricsForDrs.

---

##### `SendVolumeStatsForDrs`<sup>Required</sup> <a name="SendVolumeStatsForDrs" id="@cdk_utils/iam.drs.DRSActions.property.SendVolumeStatsForDrs"></a>

```typescript
public readonly SendVolumeStatsForDrs: string;
```

- *Type:* string

[Write] drs:SendVolumeStatsForDrs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.drs.DRSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartFailbackLaunch`<sup>Required</sup> <a name="StartFailbackLaunch" id="@cdk_utils/iam.drs.DRSActions.property.StartFailbackLaunch"></a>

```typescript
public readonly StartFailbackLaunch: string;
```

- *Type:* string

[Write] drs:StartFailbackLaunch.

---

##### `StartRecovery`<sup>Required</sup> <a name="StartRecovery" id="@cdk_utils/iam.drs.DRSActions.property.StartRecovery"></a>

```typescript
public readonly StartRecovery: string;
```

- *Type:* string

[Write] drs:StartRecovery.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.drs.DRSActions.property.StartReplication"></a>

```typescript
public readonly StartReplication: string;
```

- *Type:* string

[Write] drs:StartReplication.

---

##### `StartSourceNetworkRecovery`<sup>Required</sup> <a name="StartSourceNetworkRecovery" id="@cdk_utils/iam.drs.DRSActions.property.StartSourceNetworkRecovery"></a>

```typescript
public readonly StartSourceNetworkRecovery: string;
```

- *Type:* string

[Write] drs:StartSourceNetworkRecovery.

---

##### `StartSourceNetworkReplication`<sup>Required</sup> <a name="StartSourceNetworkReplication" id="@cdk_utils/iam.drs.DRSActions.property.StartSourceNetworkReplication"></a>

```typescript
public readonly StartSourceNetworkReplication: string;
```

- *Type:* string

[Write] drs:StartSourceNetworkReplication.

---

##### `StopFailback`<sup>Required</sup> <a name="StopFailback" id="@cdk_utils/iam.drs.DRSActions.property.StopFailback"></a>

```typescript
public readonly StopFailback: string;
```

- *Type:* string

[Write] drs:StopFailback.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.drs.DRSActions.property.StopReplication"></a>

```typescript
public readonly StopReplication: string;
```

- *Type:* string

[Write] drs:StopReplication.

---

##### `StopSourceNetworkReplication`<sup>Required</sup> <a name="StopSourceNetworkReplication" id="@cdk_utils/iam.drs.DRSActions.property.StopSourceNetworkReplication"></a>

```typescript
public readonly StopSourceNetworkReplication: string;
```

- *Type:* string

[Write] drs:StopSourceNetworkReplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.drs.DRSActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] drs:TagResource.

---

##### `TerminateRecoveryInstances`<sup>Required</sup> <a name="TerminateRecoveryInstances" id="@cdk_utils/iam.drs.DRSActions.property.TerminateRecoveryInstances"></a>

```typescript
public readonly TerminateRecoveryInstances: string;
```

- *Type:* string

[Write] drs:TerminateRecoveryInstances.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.drs.DRSActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] drs:UntagResource.

---

##### `UpdateAgentBacklogForDrs`<sup>Required</sup> <a name="UpdateAgentBacklogForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateAgentBacklogForDrs"></a>

```typescript
public readonly UpdateAgentBacklogForDrs: string;
```

- *Type:* string

[Write] drs:UpdateAgentBacklogForDrs.

---

##### `UpdateAgentConversionInfoForDrs`<sup>Required</sup> <a name="UpdateAgentConversionInfoForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateAgentConversionInfoForDrs"></a>

```typescript
public readonly UpdateAgentConversionInfoForDrs: string;
```

- *Type:* string

[Write] drs:UpdateAgentConversionInfoForDrs.

---

##### `UpdateAgentReplicationInfoForDrs`<sup>Required</sup> <a name="UpdateAgentReplicationInfoForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateAgentReplicationInfoForDrs"></a>

```typescript
public readonly UpdateAgentReplicationInfoForDrs: string;
```

- *Type:* string

[Write] drs:UpdateAgentReplicationInfoForDrs.

---

##### `UpdateAgentReplicationProcessStateForDrs`<sup>Required</sup> <a name="UpdateAgentReplicationProcessStateForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateAgentReplicationProcessStateForDrs"></a>

```typescript
public readonly UpdateAgentReplicationProcessStateForDrs: string;
```

- *Type:* string

[Write] drs:UpdateAgentReplicationProcessStateForDrs.

---

##### `UpdateAgentSourcePropertiesForDrs`<sup>Required</sup> <a name="UpdateAgentSourcePropertiesForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateAgentSourcePropertiesForDrs"></a>

```typescript
public readonly UpdateAgentSourcePropertiesForDrs: string;
```

- *Type:* string

[Write] drs:UpdateAgentSourcePropertiesForDrs.

---

##### `UpdateFailbackClientDeviceMappingForDrs`<sup>Required</sup> <a name="UpdateFailbackClientDeviceMappingForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackClientDeviceMappingForDrs"></a>

```typescript
public readonly UpdateFailbackClientDeviceMappingForDrs: string;
```

- *Type:* string

[Write] drs:UpdateFailbackClientDeviceMappingForDrs.

---

##### `UpdateFailbackClientLastSeenForDrs`<sup>Required</sup> <a name="UpdateFailbackClientLastSeenForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackClientLastSeenForDrs"></a>

```typescript
public readonly UpdateFailbackClientLastSeenForDrs: string;
```

- *Type:* string

[Write] drs:UpdateFailbackClientLastSeenForDrs.

---

##### `UpdateFailbackReplicationConfiguration`<sup>Required</sup> <a name="UpdateFailbackReplicationConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.UpdateFailbackReplicationConfiguration"></a>

```typescript
public readonly UpdateFailbackReplicationConfiguration: string;
```

- *Type:* string

[Write] drs:UpdateFailbackReplicationConfiguration.

---

##### `UpdateLaunchConfiguration`<sup>Required</sup> <a name="UpdateLaunchConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.UpdateLaunchConfiguration"></a>

```typescript
public readonly UpdateLaunchConfiguration: string;
```

- *Type:* string

[Write] drs:UpdateLaunchConfiguration.

---

##### `UpdateLaunchConfigurationTemplate`<sup>Required</sup> <a name="UpdateLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.UpdateLaunchConfigurationTemplate"></a>

```typescript
public readonly UpdateLaunchConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:UpdateLaunchConfigurationTemplate.

---

##### `UpdateReplicationCertificateForDrs`<sup>Required</sup> <a name="UpdateReplicationCertificateForDrs" id="@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationCertificateForDrs"></a>

```typescript
public readonly UpdateReplicationCertificateForDrs: string;
```

- *Type:* string

[Write] drs:UpdateReplicationCertificateForDrs.

---

##### `UpdateReplicationConfiguration`<sup>Required</sup> <a name="UpdateReplicationConfiguration" id="@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationConfiguration"></a>

```typescript
public readonly UpdateReplicationConfiguration: string;
```

- *Type:* string

[Write] drs:UpdateReplicationConfiguration.

---

##### `UpdateReplicationConfigurationTemplate`<sup>Required</sup> <a name="UpdateReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSActions.property.UpdateReplicationConfigurationTemplate"></a>

```typescript
public readonly UpdateReplicationConfigurationTemplate: string;
```

- *Type:* string

[Write] drs:UpdateReplicationConfigurationTemplate.

---

### DRSConditions <a name="DRSConditions" id="@cdk_utils/iam.drs.DRSConditions"></a>

Condition key constants and builders for drs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.drs.DRSConditions.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

new drs.DRSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.createAction">createAction</a></code> | Generates a condition block for `drs:CreateAction`. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.ec2InstanceARN">ec2InstanceARN</a></code> | Generates a condition block for `drs:EC2InstanceARN`. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.drs.DRSConditions.createAction"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSConditions.createAction(value: string)
```

Generates a condition block for `drs:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.drs.DRSConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `ec2InstanceARN` <a name="ec2InstanceARN" id="@cdk_utils/iam.drs.DRSConditions.ec2InstanceARN"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSConditions.ec2InstanceARN(value: string)
```

Generates a condition block for `drs:EC2InstanceARN`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.drs.DRSConditions.ec2InstanceARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.drs.DRSConditions.requestTag"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.drs.DRSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.drs.DRSConditions.resourceTag"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.drs.DRSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.drs.DRSConditions.tagKeys"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.drs.DRSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.AssociateSourceNetworkStackConditionKeys">AssociateSourceNetworkStackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateSourceNetworkStack action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: drs:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateConvertedSnapshotForDrsConditionKeys">CreateConvertedSnapshotForDrsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConvertedSnapshotForDrs action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateExtendedSourceServerConditionKeys">CreateExtendedSourceServerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExtendedSourceServer action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateLaunchConfigurationTemplateConditionKeys">CreateLaunchConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLaunchConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateRecoveryInstanceForDrsConditionKeys">CreateRecoveryInstanceForDrsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecoveryInstanceForDrs action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateReplicationConfigurationTemplateConditionKeys">CreateReplicationConfigurationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationConfigurationTemplate action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateSourceNetworkConditionKeys">CreateSourceNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSourceNetwork action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.CreateSourceServerForDrsConditionKeys">CreateSourceServerForDrsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSourceServerForDrs action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.EC2_INSTANCE_ARN">EC2_INSTANCE_ARN</a></code> | <code>string</code> | Condition key: drs:EC2InstanceARN (ARN). |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.ExportSourceNetworkCfnTemplateConditionKeys">ExportSourceNetworkCfnTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportSourceNetworkCfnTemplate action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.ReverseReplicationConditionKeys">ReverseReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReverseReplication action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.StartFailbackLaunchConditionKeys">StartFailbackLaunchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartFailbackLaunch action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.StartRecoveryConditionKeys">StartRecoveryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartRecovery action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.StartSourceNetworkRecoveryConditionKeys">StartSourceNetworkRecoveryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSourceNetworkRecovery action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.TerminateRecoveryInstancesConditionKeys">TerminateRecoveryInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateRecoveryInstances action. |
| <code><a href="#@cdk_utils/iam.drs.DRSConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateSourceNetworkStackConditionKeys`<sup>Required</sup> <a name="AssociateSourceNetworkStackConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.AssociateSourceNetworkStackConditionKeys"></a>

```typescript
public readonly AssociateSourceNetworkStackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateSourceNetworkStack action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.drs.DRSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.drs.DRSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.drs.DRSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.drs.DRSConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: drs:CreateAction (String).

---

##### `CreateConvertedSnapshotForDrsConditionKeys`<sup>Required</sup> <a name="CreateConvertedSnapshotForDrsConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateConvertedSnapshotForDrsConditionKeys"></a>

```typescript
public readonly CreateConvertedSnapshotForDrsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConvertedSnapshotForDrs action.

---

##### `CreateExtendedSourceServerConditionKeys`<sup>Required</sup> <a name="CreateExtendedSourceServerConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateExtendedSourceServerConditionKeys"></a>

```typescript
public readonly CreateExtendedSourceServerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExtendedSourceServer action.

---

##### `CreateLaunchConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplateConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateLaunchConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateLaunchConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLaunchConfigurationTemplate action.

---

##### `CreateRecoveryInstanceForDrsConditionKeys`<sup>Required</sup> <a name="CreateRecoveryInstanceForDrsConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateRecoveryInstanceForDrsConditionKeys"></a>

```typescript
public readonly CreateRecoveryInstanceForDrsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecoveryInstanceForDrs action.

---

##### `CreateReplicationConfigurationTemplateConditionKeys`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplateConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateReplicationConfigurationTemplateConditionKeys"></a>

```typescript
public readonly CreateReplicationConfigurationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationConfigurationTemplate action.

---

##### `CreateSourceNetworkConditionKeys`<sup>Required</sup> <a name="CreateSourceNetworkConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateSourceNetworkConditionKeys"></a>

```typescript
public readonly CreateSourceNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSourceNetwork action.

---

##### `CreateSourceServerForDrsConditionKeys`<sup>Required</sup> <a name="CreateSourceServerForDrsConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.CreateSourceServerForDrsConditionKeys"></a>

```typescript
public readonly CreateSourceServerForDrsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSourceServerForDrs action.

---

##### `EC2_INSTANCE_ARN`<sup>Required</sup> <a name="EC2_INSTANCE_ARN" id="@cdk_utils/iam.drs.DRSConditions.property.EC2_INSTANCE_ARN"></a>

```typescript
public readonly EC2_INSTANCE_ARN: string;
```

- *Type:* string

Condition key: drs:EC2InstanceARN (ARN).

---

##### `ExportSourceNetworkCfnTemplateConditionKeys`<sup>Required</sup> <a name="ExportSourceNetworkCfnTemplateConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.ExportSourceNetworkCfnTemplateConditionKeys"></a>

```typescript
public readonly ExportSourceNetworkCfnTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportSourceNetworkCfnTemplate action.

---

##### `ReverseReplicationConditionKeys`<sup>Required</sup> <a name="ReverseReplicationConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.ReverseReplicationConditionKeys"></a>

```typescript
public readonly ReverseReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReverseReplication action.

---

##### `StartFailbackLaunchConditionKeys`<sup>Required</sup> <a name="StartFailbackLaunchConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.StartFailbackLaunchConditionKeys"></a>

```typescript
public readonly StartFailbackLaunchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartFailbackLaunch action.

---

##### `StartRecoveryConditionKeys`<sup>Required</sup> <a name="StartRecoveryConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.StartRecoveryConditionKeys"></a>

```typescript
public readonly StartRecoveryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartRecovery action.

---

##### `StartSourceNetworkRecoveryConditionKeys`<sup>Required</sup> <a name="StartSourceNetworkRecoveryConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.StartSourceNetworkRecoveryConditionKeys"></a>

```typescript
public readonly StartSourceNetworkRecoveryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSourceNetworkRecovery action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TerminateRecoveryInstancesConditionKeys`<sup>Required</sup> <a name="TerminateRecoveryInstancesConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.TerminateRecoveryInstancesConditionKeys"></a>

```typescript
public readonly TerminateRecoveryInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateRecoveryInstances action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.drs.DRSConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DRSOperations <a name="DRSOperations" id="@cdk_utils/iam.drs.DRSOperations"></a>

API operation to required IAM actions mapping for drs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.drs.DRSOperations.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

new drs.DRSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.AssociateSourceNetworkStack">AssociateSourceNetworkStack</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceNetworkStack API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.CreateExtendedSourceServer">CreateExtendedSourceServer</a></code> | <code>string[]</code> | IAM actions required for the CreateExtendedSourceServer API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.CreateLaunchConfigurationTemplate">CreateLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.CreateReplicationConfigurationTemplate">CreateReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.CreateSourceNetwork">CreateSourceNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateSourceNetwork API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteJob">DeleteJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteJob API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteLaunchAction">DeleteLaunchAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteLaunchAction API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteLaunchConfigurationTemplate">DeleteLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteRecoveryInstance">DeleteRecoveryInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecoveryInstance API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteReplicationConfigurationTemplate">DeleteReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteSourceNetwork">DeleteSourceNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceNetwork API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DeleteSourceServer">DeleteSourceServer</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceServer API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeJobLogItems">DescribeJobLogItems</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobLogItems API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeJobs">DescribeJobs</a></code> | <code>string[]</code> | IAM actions required for the DescribeJobs API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeLaunchConfigurationTemplates">DescribeLaunchConfigurationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeLaunchConfigurationTemplates API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeRecoveryInstances">DescribeRecoveryInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecoveryInstances API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeRecoverySnapshots">DescribeRecoverySnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecoverySnapshots API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeReplicationConfigurationTemplates">DescribeReplicationConfigurationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationConfigurationTemplates API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeSourceNetworks">DescribeSourceNetworks</a></code> | <code>string[]</code> | IAM actions required for the DescribeSourceNetworks API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DescribeSourceServers">DescribeSourceServers</a></code> | <code>string[]</code> | IAM actions required for the DescribeSourceServers API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DisconnectRecoveryInstance">DisconnectRecoveryInstance</a></code> | <code>string[]</code> | IAM actions required for the DisconnectRecoveryInstance API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.DisconnectSourceServer">DisconnectSourceServer</a></code> | <code>string[]</code> | IAM actions required for the DisconnectSourceServer API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ExportSourceNetworkCfnTemplate">ExportSourceNetworkCfnTemplate</a></code> | <code>string[]</code> | IAM actions required for the ExportSourceNetworkCfnTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.InitializeService">InitializeService</a></code> | <code>string[]</code> | IAM actions required for the InitializeService API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ListExtensibleSourceServers">ListExtensibleSourceServers</a></code> | <code>string[]</code> | IAM actions required for the ListExtensibleSourceServers API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ListLaunchActions">ListLaunchActions</a></code> | <code>string[]</code> | IAM actions required for the ListLaunchActions API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ListStagingAccounts">ListStagingAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListStagingAccounts API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.opGetFailbackReplicationConfiguration">opGetFailbackReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetFailbackReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.opGetLaunchConfiguration">opGetLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.opGetReplicationConfiguration">opGetReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.PutLaunchAction">PutLaunchAction</a></code> | <code>string[]</code> | IAM actions required for the PutLaunchAction API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.RetryDataReplication">RetryDataReplication</a></code> | <code>string[]</code> | IAM actions required for the RetryDataReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.ReverseReplication">ReverseReplication</a></code> | <code>string[]</code> | IAM actions required for the ReverseReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StartFailbackLaunch">StartFailbackLaunch</a></code> | <code>string[]</code> | IAM actions required for the StartFailbackLaunch API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StartRecovery">StartRecovery</a></code> | <code>string[]</code> | IAM actions required for the StartRecovery API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StartReplication">StartReplication</a></code> | <code>string[]</code> | IAM actions required for the StartReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StartSourceNetworkRecovery">StartSourceNetworkRecovery</a></code> | <code>string[]</code> | IAM actions required for the StartSourceNetworkRecovery API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StartSourceNetworkReplication">StartSourceNetworkReplication</a></code> | <code>string[]</code> | IAM actions required for the StartSourceNetworkReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StopFailback">StopFailback</a></code> | <code>string[]</code> | IAM actions required for the StopFailback API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StopReplication">StopReplication</a></code> | <code>string[]</code> | IAM actions required for the StopReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.StopSourceNetworkReplication">StopSourceNetworkReplication</a></code> | <code>string[]</code> | IAM actions required for the StopSourceNetworkReplication API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.TerminateRecoveryInstances">TerminateRecoveryInstances</a></code> | <code>string[]</code> | IAM actions required for the TerminateRecoveryInstances API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UpdateFailbackReplicationConfiguration">UpdateFailbackReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateFailbackReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UpdateLaunchConfiguration">UpdateLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UpdateLaunchConfigurationTemplate">UpdateLaunchConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateLaunchConfigurationTemplate API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UpdateReplicationConfiguration">UpdateReplicationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.drs.DRSOperations.property.UpdateReplicationConfigurationTemplate">UpdateReplicationConfigurationTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationConfigurationTemplate API call. |

---

##### `AssociateSourceNetworkStack`<sup>Required</sup> <a name="AssociateSourceNetworkStack" id="@cdk_utils/iam.drs.DRSOperations.property.AssociateSourceNetworkStack"></a>

```typescript
public readonly AssociateSourceNetworkStack: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceNetworkStack API call.

---

##### `CreateExtendedSourceServer`<sup>Required</sup> <a name="CreateExtendedSourceServer" id="@cdk_utils/iam.drs.DRSOperations.property.CreateExtendedSourceServer"></a>

```typescript
public readonly CreateExtendedSourceServer: string[];
```

- *Type:* string[]

IAM actions required for the CreateExtendedSourceServer API call.

---

##### `CreateLaunchConfigurationTemplate`<sup>Required</sup> <a name="CreateLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.CreateLaunchConfigurationTemplate"></a>

```typescript
public readonly CreateLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateLaunchConfigurationTemplate API call.

---

##### `CreateReplicationConfigurationTemplate`<sup>Required</sup> <a name="CreateReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.CreateReplicationConfigurationTemplate"></a>

```typescript
public readonly CreateReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationConfigurationTemplate API call.

---

##### `CreateSourceNetwork`<sup>Required</sup> <a name="CreateSourceNetwork" id="@cdk_utils/iam.drs.DRSOperations.property.CreateSourceNetwork"></a>

```typescript
public readonly CreateSourceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateSourceNetwork API call.

---

##### `DeleteJob`<sup>Required</sup> <a name="DeleteJob" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteJob"></a>

```typescript
public readonly DeleteJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJob API call.

---

##### `DeleteLaunchAction`<sup>Required</sup> <a name="DeleteLaunchAction" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteLaunchAction"></a>

```typescript
public readonly DeleteLaunchAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLaunchAction API call.

---

##### `DeleteLaunchConfigurationTemplate`<sup>Required</sup> <a name="DeleteLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteLaunchConfigurationTemplate"></a>

```typescript
public readonly DeleteLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLaunchConfigurationTemplate API call.

---

##### `DeleteRecoveryInstance`<sup>Required</sup> <a name="DeleteRecoveryInstance" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteRecoveryInstance"></a>

```typescript
public readonly DeleteRecoveryInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecoveryInstance API call.

---

##### `DeleteReplicationConfigurationTemplate`<sup>Required</sup> <a name="DeleteReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteReplicationConfigurationTemplate"></a>

```typescript
public readonly DeleteReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationConfigurationTemplate API call.

---

##### `DeleteSourceNetwork`<sup>Required</sup> <a name="DeleteSourceNetwork" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteSourceNetwork"></a>

```typescript
public readonly DeleteSourceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceNetwork API call.

---

##### `DeleteSourceServer`<sup>Required</sup> <a name="DeleteSourceServer" id="@cdk_utils/iam.drs.DRSOperations.property.DeleteSourceServer"></a>

```typescript
public readonly DeleteSourceServer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceServer API call.

---

##### `DescribeJobLogItems`<sup>Required</sup> <a name="DescribeJobLogItems" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeJobLogItems"></a>

```typescript
public readonly DescribeJobLogItems: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobLogItems API call.

---

##### `DescribeJobs`<sup>Required</sup> <a name="DescribeJobs" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeJobs"></a>

```typescript
public readonly DescribeJobs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeJobs API call.

---

##### `DescribeLaunchConfigurationTemplates`<sup>Required</sup> <a name="DescribeLaunchConfigurationTemplates" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeLaunchConfigurationTemplates"></a>

```typescript
public readonly DescribeLaunchConfigurationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLaunchConfigurationTemplates API call.

---

##### `DescribeRecoveryInstances`<sup>Required</sup> <a name="DescribeRecoveryInstances" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeRecoveryInstances"></a>

```typescript
public readonly DescribeRecoveryInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecoveryInstances API call.

---

##### `DescribeRecoverySnapshots`<sup>Required</sup> <a name="DescribeRecoverySnapshots" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeRecoverySnapshots"></a>

```typescript
public readonly DescribeRecoverySnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecoverySnapshots API call.

---

##### `DescribeReplicationConfigurationTemplates`<sup>Required</sup> <a name="DescribeReplicationConfigurationTemplates" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeReplicationConfigurationTemplates"></a>

```typescript
public readonly DescribeReplicationConfigurationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationConfigurationTemplates API call.

---

##### `DescribeSourceNetworks`<sup>Required</sup> <a name="DescribeSourceNetworks" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeSourceNetworks"></a>

```typescript
public readonly DescribeSourceNetworks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSourceNetworks API call.

---

##### `DescribeSourceServers`<sup>Required</sup> <a name="DescribeSourceServers" id="@cdk_utils/iam.drs.DRSOperations.property.DescribeSourceServers"></a>

```typescript
public readonly DescribeSourceServers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSourceServers API call.

---

##### `DisconnectRecoveryInstance`<sup>Required</sup> <a name="DisconnectRecoveryInstance" id="@cdk_utils/iam.drs.DRSOperations.property.DisconnectRecoveryInstance"></a>

```typescript
public readonly DisconnectRecoveryInstance: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectRecoveryInstance API call.

---

##### `DisconnectSourceServer`<sup>Required</sup> <a name="DisconnectSourceServer" id="@cdk_utils/iam.drs.DRSOperations.property.DisconnectSourceServer"></a>

```typescript
public readonly DisconnectSourceServer: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectSourceServer API call.

---

##### `ExportSourceNetworkCfnTemplate`<sup>Required</sup> <a name="ExportSourceNetworkCfnTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.ExportSourceNetworkCfnTemplate"></a>

```typescript
public readonly ExportSourceNetworkCfnTemplate: string[];
```

- *Type:* string[]

IAM actions required for the ExportSourceNetworkCfnTemplate API call.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.drs.DRSOperations.property.InitializeService"></a>

```typescript
public readonly InitializeService: string[];
```

- *Type:* string[]

IAM actions required for the InitializeService API call.

---

##### `ListExtensibleSourceServers`<sup>Required</sup> <a name="ListExtensibleSourceServers" id="@cdk_utils/iam.drs.DRSOperations.property.ListExtensibleSourceServers"></a>

```typescript
public readonly ListExtensibleSourceServers: string[];
```

- *Type:* string[]

IAM actions required for the ListExtensibleSourceServers API call.

---

##### `ListLaunchActions`<sup>Required</sup> <a name="ListLaunchActions" id="@cdk_utils/iam.drs.DRSOperations.property.ListLaunchActions"></a>

```typescript
public readonly ListLaunchActions: string[];
```

- *Type:* string[]

IAM actions required for the ListLaunchActions API call.

---

##### `ListStagingAccounts`<sup>Required</sup> <a name="ListStagingAccounts" id="@cdk_utils/iam.drs.DRSOperations.property.ListStagingAccounts"></a>

```typescript
public readonly ListStagingAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListStagingAccounts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.drs.DRSOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetFailbackReplicationConfiguration`<sup>Required</sup> <a name="opGetFailbackReplicationConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.opGetFailbackReplicationConfiguration"></a>

```typescript
public readonly opGetFailbackReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetFailbackReplicationConfiguration API call.

---

##### `opGetLaunchConfiguration`<sup>Required</sup> <a name="opGetLaunchConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.opGetLaunchConfiguration"></a>

```typescript
public readonly opGetLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLaunchConfiguration API call.

---

##### `opGetReplicationConfiguration`<sup>Required</sup> <a name="opGetReplicationConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.opGetReplicationConfiguration"></a>

```typescript
public readonly opGetReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetReplicationConfiguration API call.

---

##### `PutLaunchAction`<sup>Required</sup> <a name="PutLaunchAction" id="@cdk_utils/iam.drs.DRSOperations.property.PutLaunchAction"></a>

```typescript
public readonly PutLaunchAction: string[];
```

- *Type:* string[]

IAM actions required for the PutLaunchAction API call.

---

##### `RetryDataReplication`<sup>Required</sup> <a name="RetryDataReplication" id="@cdk_utils/iam.drs.DRSOperations.property.RetryDataReplication"></a>

```typescript
public readonly RetryDataReplication: string[];
```

- *Type:* string[]

IAM actions required for the RetryDataReplication API call.

---

##### `ReverseReplication`<sup>Required</sup> <a name="ReverseReplication" id="@cdk_utils/iam.drs.DRSOperations.property.ReverseReplication"></a>

```typescript
public readonly ReverseReplication: string[];
```

- *Type:* string[]

IAM actions required for the ReverseReplication API call.

---

##### `StartFailbackLaunch`<sup>Required</sup> <a name="StartFailbackLaunch" id="@cdk_utils/iam.drs.DRSOperations.property.StartFailbackLaunch"></a>

```typescript
public readonly StartFailbackLaunch: string[];
```

- *Type:* string[]

IAM actions required for the StartFailbackLaunch API call.

---

##### `StartRecovery`<sup>Required</sup> <a name="StartRecovery" id="@cdk_utils/iam.drs.DRSOperations.property.StartRecovery"></a>

```typescript
public readonly StartRecovery: string[];
```

- *Type:* string[]

IAM actions required for the StartRecovery API call.

---

##### `StartReplication`<sup>Required</sup> <a name="StartReplication" id="@cdk_utils/iam.drs.DRSOperations.property.StartReplication"></a>

```typescript
public readonly StartReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartReplication API call.

---

##### `StartSourceNetworkRecovery`<sup>Required</sup> <a name="StartSourceNetworkRecovery" id="@cdk_utils/iam.drs.DRSOperations.property.StartSourceNetworkRecovery"></a>

```typescript
public readonly StartSourceNetworkRecovery: string[];
```

- *Type:* string[]

IAM actions required for the StartSourceNetworkRecovery API call.

---

##### `StartSourceNetworkReplication`<sup>Required</sup> <a name="StartSourceNetworkReplication" id="@cdk_utils/iam.drs.DRSOperations.property.StartSourceNetworkReplication"></a>

```typescript
public readonly StartSourceNetworkReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartSourceNetworkReplication API call.

---

##### `StopFailback`<sup>Required</sup> <a name="StopFailback" id="@cdk_utils/iam.drs.DRSOperations.property.StopFailback"></a>

```typescript
public readonly StopFailback: string[];
```

- *Type:* string[]

IAM actions required for the StopFailback API call.

---

##### `StopReplication`<sup>Required</sup> <a name="StopReplication" id="@cdk_utils/iam.drs.DRSOperations.property.StopReplication"></a>

```typescript
public readonly StopReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopReplication API call.

---

##### `StopSourceNetworkReplication`<sup>Required</sup> <a name="StopSourceNetworkReplication" id="@cdk_utils/iam.drs.DRSOperations.property.StopSourceNetworkReplication"></a>

```typescript
public readonly StopSourceNetworkReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopSourceNetworkReplication API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.drs.DRSOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateRecoveryInstances`<sup>Required</sup> <a name="TerminateRecoveryInstances" id="@cdk_utils/iam.drs.DRSOperations.property.TerminateRecoveryInstances"></a>

```typescript
public readonly TerminateRecoveryInstances: string[];
```

- *Type:* string[]

IAM actions required for the TerminateRecoveryInstances API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.drs.DRSOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateFailbackReplicationConfiguration`<sup>Required</sup> <a name="UpdateFailbackReplicationConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.UpdateFailbackReplicationConfiguration"></a>

```typescript
public readonly UpdateFailbackReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFailbackReplicationConfiguration API call.

---

##### `UpdateLaunchConfiguration`<sup>Required</sup> <a name="UpdateLaunchConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.UpdateLaunchConfiguration"></a>

```typescript
public readonly UpdateLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLaunchConfiguration API call.

---

##### `UpdateLaunchConfigurationTemplate`<sup>Required</sup> <a name="UpdateLaunchConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.UpdateLaunchConfigurationTemplate"></a>

```typescript
public readonly UpdateLaunchConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLaunchConfigurationTemplate API call.

---

##### `UpdateReplicationConfiguration`<sup>Required</sup> <a name="UpdateReplicationConfiguration" id="@cdk_utils/iam.drs.DRSOperations.property.UpdateReplicationConfiguration"></a>

```typescript
public readonly UpdateReplicationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationConfiguration API call.

---

##### `UpdateReplicationConfigurationTemplate`<sup>Required</sup> <a name="UpdateReplicationConfigurationTemplate" id="@cdk_utils/iam.drs.DRSOperations.property.UpdateReplicationConfigurationTemplate"></a>

```typescript
public readonly UpdateReplicationConfigurationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationConfigurationTemplate API call.

---

### DRSResources <a name="DRSResources" id="@cdk_utils/iam.drs.DRSResources"></a>

ARN builders, validators, and parsers for drs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.drs.DRSResources.Initializer"></a>

```typescript
import { drs } from '@cdk_utils/iam'

new drs.DRSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidJobResourceArn">isValidJobResourceArn</a></code> | Validates whether a string is a valid ARN for the JobResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidLaunchConfigurationTemplateResourceArn">isValidLaunchConfigurationTemplateResourceArn</a></code> | Validates whether a string is a valid ARN for the LaunchConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidRecoveryInstanceResourceArn">isValidRecoveryInstanceResourceArn</a></code> | Validates whether a string is a valid ARN for the RecoveryInstanceResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidReplicationConfigurationTemplateResourceArn">isValidReplicationConfigurationTemplateResourceArn</a></code> | Validates whether a string is a valid ARN for the ReplicationConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidSourceNetworkResourceArn">isValidSourceNetworkResourceArn</a></code> | Validates whether a string is a valid ARN for the SourceNetworkResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.isValidSourceServerResourceArn">isValidSourceServerResourceArn</a></code> | Validates whether a string is a valid ARN for the SourceServerResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.jobResource">jobResource</a></code> | Builds an ARN for the JobResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.launchConfigurationTemplateResource">launchConfigurationTemplateResource</a></code> | Builds an ARN for the LaunchConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseJobResourceArn">parseJobResourceArn</a></code> | Parses a JobResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseLaunchConfigurationTemplateResourceArn">parseLaunchConfigurationTemplateResourceArn</a></code> | Parses a LaunchConfigurationTemplateResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseRecoveryInstanceResourceArn">parseRecoveryInstanceResourceArn</a></code> | Parses a RecoveryInstanceResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseReplicationConfigurationTemplateResourceArn">parseReplicationConfigurationTemplateResourceArn</a></code> | Parses a ReplicationConfigurationTemplateResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseSourceNetworkResourceArn">parseSourceNetworkResourceArn</a></code> | Parses a SourceNetworkResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.parseSourceServerResourceArn">parseSourceServerResourceArn</a></code> | Parses a SourceServerResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.recoveryInstanceResource">recoveryInstanceResource</a></code> | Builds an ARN for the RecoveryInstanceResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.replicationConfigurationTemplateResource">replicationConfigurationTemplateResource</a></code> | Builds an ARN for the ReplicationConfigurationTemplateResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.sourceNetworkResource">sourceNetworkResource</a></code> | Builds an ARN for the SourceNetworkResource resource. |
| <code><a href="#@cdk_utils/iam.drs.DRSResources.sourceServerResource">sourceServerResource</a></code> | Builds an ARN for the SourceServerResource resource. |

---

##### `isValidJobResourceArn` <a name="isValidJobResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidJobResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidJobResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the JobResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidJobResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLaunchConfigurationTemplateResourceArn` <a name="isValidLaunchConfigurationTemplateResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidLaunchConfigurationTemplateResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidLaunchConfigurationTemplateResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the LaunchConfigurationTemplateResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidLaunchConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecoveryInstanceResourceArn` <a name="isValidRecoveryInstanceResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidRecoveryInstanceResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidRecoveryInstanceResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the RecoveryInstanceResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidRecoveryInstanceResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationConfigurationTemplateResourceArn` <a name="isValidReplicationConfigurationTemplateResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidReplicationConfigurationTemplateResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidReplicationConfigurationTemplateResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the ReplicationConfigurationTemplateResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidReplicationConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceNetworkResourceArn` <a name="isValidSourceNetworkResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidSourceNetworkResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidSourceNetworkResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the SourceNetworkResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidSourceNetworkResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceServerResourceArn` <a name="isValidSourceServerResourceArn" id="@cdk_utils/iam.drs.DRSResources.isValidSourceServerResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.isValidSourceServerResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the SourceServerResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.isValidSourceServerResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `jobResource` <a name="jobResource" id="@cdk_utils/iam.drs.DRSResources.jobResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.jobResource(props: DRSJobResourceArnProps)
```

Builds an ARN for the JobResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.jobResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSJobResourceArnProps">DRSJobResourceArnProps</a>

---

##### `launchConfigurationTemplateResource` <a name="launchConfigurationTemplateResource" id="@cdk_utils/iam.drs.DRSResources.launchConfigurationTemplateResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.launchConfigurationTemplateResource(props: DRSLaunchConfigurationTemplateResourceArnProps)
```

Builds an ARN for the LaunchConfigurationTemplateResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.launchConfigurationTemplateResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSLaunchConfigurationTemplateResourceArnProps">DRSLaunchConfigurationTemplateResourceArnProps</a>

---

##### `parseJobResourceArn` <a name="parseJobResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseJobResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseJobResourceArn(arn: string)
```

Parses a JobResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseJobResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLaunchConfigurationTemplateResourceArn` <a name="parseLaunchConfigurationTemplateResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseLaunchConfigurationTemplateResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseLaunchConfigurationTemplateResourceArn(arn: string)
```

Parses a LaunchConfigurationTemplateResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseLaunchConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecoveryInstanceResourceArn` <a name="parseRecoveryInstanceResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseRecoveryInstanceResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseRecoveryInstanceResourceArn(arn: string)
```

Parses a RecoveryInstanceResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseRecoveryInstanceResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationConfigurationTemplateResourceArn` <a name="parseReplicationConfigurationTemplateResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseReplicationConfigurationTemplateResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseReplicationConfigurationTemplateResourceArn(arn: string)
```

Parses a ReplicationConfigurationTemplateResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseReplicationConfigurationTemplateResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceNetworkResourceArn` <a name="parseSourceNetworkResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseSourceNetworkResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseSourceNetworkResourceArn(arn: string)
```

Parses a SourceNetworkResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseSourceNetworkResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceServerResourceArn` <a name="parseSourceServerResourceArn" id="@cdk_utils/iam.drs.DRSResources.parseSourceServerResourceArn"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.parseSourceServerResourceArn(arn: string)
```

Parses a SourceServerResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.drs.DRSResources.parseSourceServerResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `recoveryInstanceResource` <a name="recoveryInstanceResource" id="@cdk_utils/iam.drs.DRSResources.recoveryInstanceResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.recoveryInstanceResource(props: DRSRecoveryInstanceResourceArnProps)
```

Builds an ARN for the RecoveryInstanceResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.recoveryInstanceResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSRecoveryInstanceResourceArnProps">DRSRecoveryInstanceResourceArnProps</a>

---

##### `replicationConfigurationTemplateResource` <a name="replicationConfigurationTemplateResource" id="@cdk_utils/iam.drs.DRSResources.replicationConfigurationTemplateResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.replicationConfigurationTemplateResource(props: DRSReplicationConfigurationTemplateResourceArnProps)
```

Builds an ARN for the ReplicationConfigurationTemplateResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.replicationConfigurationTemplateResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSReplicationConfigurationTemplateResourceArnProps">DRSReplicationConfigurationTemplateResourceArnProps</a>

---

##### `sourceNetworkResource` <a name="sourceNetworkResource" id="@cdk_utils/iam.drs.DRSResources.sourceNetworkResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.sourceNetworkResource(props: DRSSourceNetworkResourceArnProps)
```

Builds an ARN for the SourceNetworkResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.sourceNetworkResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSSourceNetworkResourceArnProps">DRSSourceNetworkResourceArnProps</a>

---

##### `sourceServerResource` <a name="sourceServerResource" id="@cdk_utils/iam.drs.DRSResources.sourceServerResource"></a>

```typescript
import { drs } from '@cdk_utils/iam'

drs.DRSResources.sourceServerResource(props: DRSSourceServerResourceArnProps)
```

Builds an ARN for the SourceServerResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.drs.DRSResources.sourceServerResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.drs.DRSSourceServerResourceArnProps">DRSSourceServerResourceArnProps</a>

---




