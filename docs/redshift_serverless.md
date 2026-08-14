# `redshift_serverless` Submodule <a name="`redshift_serverless` Submodule" id="@cdk_utils/iam.redshift_serverless"></a>


## Structs <a name="Structs" id="Structs"></a>

### RedshiftServerlessEndpointAccessArnComponents <a name="RedshiftServerlessEndpointAccessArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents"></a>

Parsed components of a endpointAccess ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessEndpointAccessArnComponents: redshift_serverless.RedshiftServerlessEndpointAccessArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.endpointAccessId">endpointAccessId</a></code> | <code>string</code> | The EndpointAccessId component. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointAccessId`<sup>Required</sup> <a name="endpointAccessId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.endpointAccessId"></a>

```typescript
public readonly endpointAccessId: string;
```

- *Type:* string

The EndpointAccessId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftServerlessEndpointAccessArnProps <a name="RedshiftServerlessEndpointAccessArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps"></a>

Properties for building a endpointAccess ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessEndpointAccessArnProps: redshift_serverless.RedshiftServerlessEndpointAccessArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.endpointAccessId">endpointAccessId</a></code> | <code>string</code> | The EndpointAccessId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `endpointAccessId`<sup>Required</sup> <a name="endpointAccessId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.endpointAccessId"></a>

```typescript
public readonly endpointAccessId: string;
```

- *Type:* string

The EndpointAccessId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftServerlessManagedWorkgroupArnComponents <a name="RedshiftServerlessManagedWorkgroupArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents"></a>

Parsed components of a managed-workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessManagedWorkgroupArnComponents: redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.managedWorkgroupName">managedWorkgroupName</a></code> | <code>string</code> | The ManagedWorkgroupName component. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `managedWorkgroupName`<sup>Required</sup> <a name="managedWorkgroupName" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.managedWorkgroupName"></a>

```typescript
public readonly managedWorkgroupName: string;
```

- *Type:* string

The ManagedWorkgroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftServerlessManagedWorkgroupArnProps <a name="RedshiftServerlessManagedWorkgroupArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps"></a>

Properties for building a managed-workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessManagedWorkgroupArnProps: redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.managedWorkgroupName">managedWorkgroupName</a></code> | <code>string</code> | The ManagedWorkgroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `managedWorkgroupName`<sup>Required</sup> <a name="managedWorkgroupName" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.managedWorkgroupName"></a>

```typescript
public readonly managedWorkgroupName: string;
```

- *Type:* string

The ManagedWorkgroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftServerlessNamespaceArnComponents <a name="RedshiftServerlessNamespaceArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents"></a>

Parsed components of a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessNamespaceArnComponents: redshift_serverless.RedshiftServerlessNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.namespaceId">namespaceId</a></code> | <code>string</code> | The NamespaceId component. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The NamespaceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftServerlessNamespaceArnProps <a name="RedshiftServerlessNamespaceArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps"></a>

Properties for building a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessNamespaceArnProps: redshift_serverless.RedshiftServerlessNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.namespaceId">namespaceId</a></code> | <code>string</code> | The NamespaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The NamespaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftServerlessRecoveryPointArnComponents <a name="RedshiftServerlessRecoveryPointArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents"></a>

Parsed components of a recoveryPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessRecoveryPointArnComponents: redshift_serverless.RedshiftServerlessRecoveryPointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | The RecoveryPointId component. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

The RecoveryPointId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftServerlessRecoveryPointArnProps <a name="RedshiftServerlessRecoveryPointArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps"></a>

Properties for building a recoveryPoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessRecoveryPointArnProps: redshift_serverless.RedshiftServerlessRecoveryPointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.recoveryPointId">recoveryPointId</a></code> | <code>string</code> | The RecoveryPointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recoveryPointId`<sup>Required</sup> <a name="recoveryPointId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.recoveryPointId"></a>

```typescript
public readonly recoveryPointId: string;
```

- *Type:* string

The RecoveryPointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftServerlessSnapshotArnComponents <a name="RedshiftServerlessSnapshotArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessSnapshotArnComponents: redshift_serverless.RedshiftServerlessSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnComponents.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component.

---

### RedshiftServerlessSnapshotArnProps <a name="RedshiftServerlessSnapshotArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessSnapshotArnProps: redshift_serverless.RedshiftServerlessSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.snapshotId">snapshotId</a></code> | <code>string</code> | The SnapshotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The SnapshotId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftServerlessWorkgroupArnComponents <a name="RedshiftServerlessWorkgroupArnComponents" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents"></a>

Parsed components of a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessWorkgroupArnComponents: redshift_serverless.RedshiftServerlessWorkgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.workgroupId">workgroupId</a></code> | <code>string</code> | The WorkgroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnComponents.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

The WorkgroupId component.

---

### RedshiftServerlessWorkgroupArnProps <a name="RedshiftServerlessWorkgroupArnProps" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps"></a>

Properties for building a workgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

const redshiftServerlessWorkgroupArnProps: redshift_serverless.RedshiftServerlessWorkgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.workgroupId">workgroupId</a></code> | <code>string</code> | The WorkgroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string

The WorkgroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftServerlessActions <a name="RedshiftServerlessActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions"></a>

IAM action constants for the redshift-serverless service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

new redshift_serverless.RedshiftServerlessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetCredentials">actionGetCredentials</a></code> | <code>string</code> | [Write] redshift-serverless:GetCredentials. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetCustomDomainAssociation">actionGetCustomDomainAssociation</a></code> | <code>string</code> | [Read] redshift-serverless:GetCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetEndpointAccess">actionGetEndpointAccess</a></code> | <code>string</code> | [Read] redshift-serverless:GetEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetIdentityCenterAuthToken">actionGetIdentityCenterAuthToken</a></code> | <code>string</code> | [Read] redshift-serverless:GetIdentityCenterAuthToken. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetManagedWorkgroup">actionGetManagedWorkgroup</a></code> | <code>string</code> | [Read] redshift-serverless:GetManagedWorkgroup. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetNamespace">actionGetNamespace</a></code> | <code>string</code> | [Read] redshift-serverless:GetNamespace. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetRecoveryPoint">actionGetRecoveryPoint</a></code> | <code>string</code> | [Read] redshift-serverless:GetRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetReservation">actionGetReservation</a></code> | <code>string</code> | [Read] redshift-serverless:GetReservation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetReservationOffering">actionGetReservationOffering</a></code> | <code>string</code> | [Read] redshift-serverless:GetReservationOffering. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] redshift-serverless:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetScheduledAction">actionGetScheduledAction</a></code> | <code>string</code> | [Read] redshift-serverless:GetScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetSnapshot">actionGetSnapshot</a></code> | <code>string</code> | [Read] redshift-serverless:GetSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetTableRestoreStatus">actionGetTableRestoreStatus</a></code> | <code>string</code> | [Read] redshift-serverless:GetTableRestoreStatus. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetTrack">actionGetTrack</a></code> | <code>string</code> | [Read] redshift-serverless:GetTrack. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetUsageLimit">actionGetUsageLimit</a></code> | <code>string</code> | [Read] redshift-serverless:GetUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetWorkgroup">actionGetWorkgroup</a></code> | <code>string</code> | [Read] redshift-serverless:GetWorkgroup. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ConvertRecoveryPointToSnapshot">ConvertRecoveryPointToSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:ConvertRecoveryPointToSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateCustomDomainAssociation">CreateCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift-serverless:CreateCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateEndpointAccess">CreateEndpointAccess</a></code> | <code>string</code> | [Write] redshift-serverless:CreateEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateNamespace">CreateNamespace</a></code> | <code>string</code> | [Write] redshift-serverless:CreateNamespace. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateReservation">CreateReservation</a></code> | <code>string</code> | [Write] redshift-serverless:CreateReservation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateScheduledAction">CreateScheduledAction</a></code> | <code>string</code> | [Write] redshift-serverless:CreateScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateSnapshotCopyConfiguration">CreateSnapshotCopyConfiguration</a></code> | <code>string</code> | [Write] redshift-serverless:CreateSnapshotCopyConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateUsageLimit">CreateUsageLimit</a></code> | <code>string</code> | [Write] redshift-serverless:CreateUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateWorkgroup">CreateWorkgroup</a></code> | <code>string</code> | [Write] redshift-serverless:CreateWorkgroup. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteCustomDomainAssociation">DeleteCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteEndpointAccess">DeleteEndpointAccess</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteNamespace. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteSnapshotCopyConfiguration">DeleteSnapshotCopyConfiguration</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteSnapshotCopyConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteUsageLimit">DeleteUsageLimit</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteWorkgroup">DeleteWorkgroup</a></code> | <code>string</code> | [Write] redshift-serverless:DeleteWorkgroup. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DescribeOneTimeCredit">DescribeOneTimeCredit</a></code> | <code>string</code> | [Read] redshift-serverless:DescribeOneTimeCredit. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListAutonomicsDenylist">ListAutonomicsDenylist</a></code> | <code>string</code> | [Read] redshift-serverless:ListAutonomicsDenylist. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListCustomDomainAssociations">ListCustomDomainAssociations</a></code> | <code>string</code> | [List] redshift-serverless:ListCustomDomainAssociations. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListEndpointAccess">ListEndpointAccess</a></code> | <code>string</code> | [List] redshift-serverless:ListEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListManagedWorkgroups">ListManagedWorkgroups</a></code> | <code>string</code> | [List] redshift-serverless:ListManagedWorkgroups. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListNamespaces">ListNamespaces</a></code> | <code>string</code> | [List] redshift-serverless:ListNamespaces. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListRecoveryPoints">ListRecoveryPoints</a></code> | <code>string</code> | [List] redshift-serverless:ListRecoveryPoints. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListReservationOfferings">ListReservationOfferings</a></code> | <code>string</code> | [List] redshift-serverless:ListReservationOfferings. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListReservations">ListReservations</a></code> | <code>string</code> | [List] redshift-serverless:ListReservations. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListScheduledActions">ListScheduledActions</a></code> | <code>string</code> | [List] redshift-serverless:ListScheduledActions. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListSnapshotCopyConfigurations">ListSnapshotCopyConfigurations</a></code> | <code>string</code> | [List] redshift-serverless:ListSnapshotCopyConfigurations. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListSnapshots">ListSnapshots</a></code> | <code>string</code> | [List] redshift-serverless:ListSnapshots. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTableRestoreStatus">ListTableRestoreStatus</a></code> | <code>string</code> | [List] redshift-serverless:ListTableRestoreStatus. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] redshift-serverless:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTracks">ListTracks</a></code> | <code>string</code> | [List] redshift-serverless:ListTracks. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListUsageLimits">ListUsageLimits</a></code> | <code>string</code> | [List] redshift-serverless:ListUsageLimits. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListWorkgroups">ListWorkgroups</a></code> | <code>string</code> | [List] redshift-serverless:ListWorkgroups. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] redshift-serverless:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreFromRecoveryPoint">RestoreFromRecoveryPoint</a></code> | <code>string</code> | [Write] redshift-serverless:RestoreFromRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreFromSnapshot">RestoreFromSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:RestoreFromSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreTableFromRecoveryPoint">RestoreTableFromRecoveryPoint</a></code> | <code>string</code> | [Write] redshift-serverless:RestoreTableFromRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreTableFromSnapshot">RestoreTableFromSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:RestoreTableFromSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] redshift-serverless:TagResource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] redshift-serverless:UntagResource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateAutonomicsDenylist">UpdateAutonomicsDenylist</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateAutonomicsDenylist. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateCustomDomainAssociation">UpdateCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateEndpointAccess">UpdateEndpointAccess</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateNamespace">UpdateNamespace</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateNamespace. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateScheduledAction">UpdateScheduledAction</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateSnapshot">UpdateSnapshot</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateSnapshotCopyConfiguration">UpdateSnapshotCopyConfiguration</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateSnapshotCopyConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateUsageLimit">UpdateUsageLimit</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateWorkgroup">UpdateWorkgroup</a></code> | <code>string</code> | [Write] redshift-serverless:UpdateWorkgroup. |

---

##### `actionGetCredentials`<sup>Required</sup> <a name="actionGetCredentials" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetCredentials"></a>

```typescript
public readonly actionGetCredentials: string;
```

- *Type:* string

[Write] redshift-serverless:GetCredentials.

---

##### `actionGetCustomDomainAssociation`<sup>Required</sup> <a name="actionGetCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetCustomDomainAssociation"></a>

```typescript
public readonly actionGetCustomDomainAssociation: string;
```

- *Type:* string

[Read] redshift-serverless:GetCustomDomainAssociation.

---

##### `actionGetEndpointAccess`<sup>Required</sup> <a name="actionGetEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetEndpointAccess"></a>

```typescript
public readonly actionGetEndpointAccess: string;
```

- *Type:* string

[Read] redshift-serverless:GetEndpointAccess.

---

##### `actionGetIdentityCenterAuthToken`<sup>Required</sup> <a name="actionGetIdentityCenterAuthToken" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetIdentityCenterAuthToken"></a>

```typescript
public readonly actionGetIdentityCenterAuthToken: string;
```

- *Type:* string

[Read] redshift-serverless:GetIdentityCenterAuthToken.

---

##### `actionGetManagedWorkgroup`<sup>Required</sup> <a name="actionGetManagedWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetManagedWorkgroup"></a>

```typescript
public readonly actionGetManagedWorkgroup: string;
```

- *Type:* string

[Read] redshift-serverless:GetManagedWorkgroup.

---

##### `actionGetNamespace`<sup>Required</sup> <a name="actionGetNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetNamespace"></a>

```typescript
public readonly actionGetNamespace: string;
```

- *Type:* string

[Read] redshift-serverless:GetNamespace.

---

##### `actionGetRecoveryPoint`<sup>Required</sup> <a name="actionGetRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetRecoveryPoint"></a>

```typescript
public readonly actionGetRecoveryPoint: string;
```

- *Type:* string

[Read] redshift-serverless:GetRecoveryPoint.

---

##### `actionGetReservation`<sup>Required</sup> <a name="actionGetReservation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetReservation"></a>

```typescript
public readonly actionGetReservation: string;
```

- *Type:* string

[Read] redshift-serverless:GetReservation.

---

##### `actionGetReservationOffering`<sup>Required</sup> <a name="actionGetReservationOffering" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetReservationOffering"></a>

```typescript
public readonly actionGetReservationOffering: string;
```

- *Type:* string

[Read] redshift-serverless:GetReservationOffering.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] redshift-serverless:GetResourcePolicy.

---

##### `actionGetScheduledAction`<sup>Required</sup> <a name="actionGetScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetScheduledAction"></a>

```typescript
public readonly actionGetScheduledAction: string;
```

- *Type:* string

[Read] redshift-serverless:GetScheduledAction.

---

##### `actionGetSnapshot`<sup>Required</sup> <a name="actionGetSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetSnapshot"></a>

```typescript
public readonly actionGetSnapshot: string;
```

- *Type:* string

[Read] redshift-serverless:GetSnapshot.

---

##### `actionGetTableRestoreStatus`<sup>Required</sup> <a name="actionGetTableRestoreStatus" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetTableRestoreStatus"></a>

```typescript
public readonly actionGetTableRestoreStatus: string;
```

- *Type:* string

[Read] redshift-serverless:GetTableRestoreStatus.

---

##### `actionGetTrack`<sup>Required</sup> <a name="actionGetTrack" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetTrack"></a>

```typescript
public readonly actionGetTrack: string;
```

- *Type:* string

[Read] redshift-serverless:GetTrack.

---

##### `actionGetUsageLimit`<sup>Required</sup> <a name="actionGetUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetUsageLimit"></a>

```typescript
public readonly actionGetUsageLimit: string;
```

- *Type:* string

[Read] redshift-serverless:GetUsageLimit.

---

##### `actionGetWorkgroup`<sup>Required</sup> <a name="actionGetWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.actionGetWorkgroup"></a>

```typescript
public readonly actionGetWorkgroup: string;
```

- *Type:* string

[Read] redshift-serverless:GetWorkgroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConvertRecoveryPointToSnapshot`<sup>Required</sup> <a name="ConvertRecoveryPointToSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ConvertRecoveryPointToSnapshot"></a>

```typescript
public readonly ConvertRecoveryPointToSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:ConvertRecoveryPointToSnapshot.

---

##### `CreateCustomDomainAssociation`<sup>Required</sup> <a name="CreateCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateCustomDomainAssociation"></a>

```typescript
public readonly CreateCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift-serverless:CreateCustomDomainAssociation.

---

##### `CreateEndpointAccess`<sup>Required</sup> <a name="CreateEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateEndpointAccess"></a>

```typescript
public readonly CreateEndpointAccess: string;
```

- *Type:* string

[Write] redshift-serverless:CreateEndpointAccess.

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string;
```

- *Type:* string

[Write] redshift-serverless:CreateNamespace.

---

##### `CreateReservation`<sup>Required</sup> <a name="CreateReservation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateReservation"></a>

```typescript
public readonly CreateReservation: string;
```

- *Type:* string

[Write] redshift-serverless:CreateReservation.

---

##### `CreateScheduledAction`<sup>Required</sup> <a name="CreateScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateScheduledAction"></a>

```typescript
public readonly CreateScheduledAction: string;
```

- *Type:* string

[Write] redshift-serverless:CreateScheduledAction.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:CreateSnapshot.

---

##### `CreateSnapshotCopyConfiguration`<sup>Required</sup> <a name="CreateSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateSnapshotCopyConfiguration"></a>

```typescript
public readonly CreateSnapshotCopyConfiguration: string;
```

- *Type:* string

[Write] redshift-serverless:CreateSnapshotCopyConfiguration.

---

##### `CreateUsageLimit`<sup>Required</sup> <a name="CreateUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateUsageLimit"></a>

```typescript
public readonly CreateUsageLimit: string;
```

- *Type:* string

[Write] redshift-serverless:CreateUsageLimit.

---

##### `CreateWorkgroup`<sup>Required</sup> <a name="CreateWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.CreateWorkgroup"></a>

```typescript
public readonly CreateWorkgroup: string;
```

- *Type:* string

[Write] redshift-serverless:CreateWorkgroup.

---

##### `DeleteCustomDomainAssociation`<sup>Required</sup> <a name="DeleteCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteCustomDomainAssociation"></a>

```typescript
public readonly DeleteCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteCustomDomainAssociation.

---

##### `DeleteEndpointAccess`<sup>Required</sup> <a name="DeleteEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteEndpointAccess"></a>

```typescript
public readonly DeleteEndpointAccess: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteEndpointAccess.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteNamespace.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteResourcePolicy.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteScheduledAction.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteSnapshot.

---

##### `DeleteSnapshotCopyConfiguration`<sup>Required</sup> <a name="DeleteSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteSnapshotCopyConfiguration"></a>

```typescript
public readonly DeleteSnapshotCopyConfiguration: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteSnapshotCopyConfiguration.

---

##### `DeleteUsageLimit`<sup>Required</sup> <a name="DeleteUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteUsageLimit"></a>

```typescript
public readonly DeleteUsageLimit: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteUsageLimit.

---

##### `DeleteWorkgroup`<sup>Required</sup> <a name="DeleteWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DeleteWorkgroup"></a>

```typescript
public readonly DeleteWorkgroup: string;
```

- *Type:* string

[Write] redshift-serverless:DeleteWorkgroup.

---

##### `DescribeOneTimeCredit`<sup>Required</sup> <a name="DescribeOneTimeCredit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.DescribeOneTimeCredit"></a>

```typescript
public readonly DescribeOneTimeCredit: string;
```

- *Type:* string

[Read] redshift-serverless:DescribeOneTimeCredit.

---

##### `ListAutonomicsDenylist`<sup>Required</sup> <a name="ListAutonomicsDenylist" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListAutonomicsDenylist"></a>

```typescript
public readonly ListAutonomicsDenylist: string;
```

- *Type:* string

[Read] redshift-serverless:ListAutonomicsDenylist.

---

##### `ListCustomDomainAssociations`<sup>Required</sup> <a name="ListCustomDomainAssociations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListCustomDomainAssociations"></a>

```typescript
public readonly ListCustomDomainAssociations: string;
```

- *Type:* string

[List] redshift-serverless:ListCustomDomainAssociations.

---

##### `ListEndpointAccess`<sup>Required</sup> <a name="ListEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListEndpointAccess"></a>

```typescript
public readonly ListEndpointAccess: string;
```

- *Type:* string

[List] redshift-serverless:ListEndpointAccess.

---

##### `ListManagedWorkgroups`<sup>Required</sup> <a name="ListManagedWorkgroups" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListManagedWorkgroups"></a>

```typescript
public readonly ListManagedWorkgroups: string;
```

- *Type:* string

[List] redshift-serverless:ListManagedWorkgroups.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string;
```

- *Type:* string

[List] redshift-serverless:ListNamespaces.

---

##### `ListRecoveryPoints`<sup>Required</sup> <a name="ListRecoveryPoints" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListRecoveryPoints"></a>

```typescript
public readonly ListRecoveryPoints: string;
```

- *Type:* string

[List] redshift-serverless:ListRecoveryPoints.

---

##### `ListReservationOfferings`<sup>Required</sup> <a name="ListReservationOfferings" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListReservationOfferings"></a>

```typescript
public readonly ListReservationOfferings: string;
```

- *Type:* string

[List] redshift-serverless:ListReservationOfferings.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListReservations"></a>

```typescript
public readonly ListReservations: string;
```

- *Type:* string

[List] redshift-serverless:ListReservations.

---

##### `ListScheduledActions`<sup>Required</sup> <a name="ListScheduledActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListScheduledActions"></a>

```typescript
public readonly ListScheduledActions: string;
```

- *Type:* string

[List] redshift-serverless:ListScheduledActions.

---

##### `ListSnapshotCopyConfigurations`<sup>Required</sup> <a name="ListSnapshotCopyConfigurations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListSnapshotCopyConfigurations"></a>

```typescript
public readonly ListSnapshotCopyConfigurations: string;
```

- *Type:* string

[List] redshift-serverless:ListSnapshotCopyConfigurations.

---

##### `ListSnapshots`<sup>Required</sup> <a name="ListSnapshots" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListSnapshots"></a>

```typescript
public readonly ListSnapshots: string;
```

- *Type:* string

[List] redshift-serverless:ListSnapshots.

---

##### `ListTableRestoreStatus`<sup>Required</sup> <a name="ListTableRestoreStatus" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTableRestoreStatus"></a>

```typescript
public readonly ListTableRestoreStatus: string;
```

- *Type:* string

[List] redshift-serverless:ListTableRestoreStatus.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] redshift-serverless:ListTagsForResource.

---

##### `ListTracks`<sup>Required</sup> <a name="ListTracks" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListTracks"></a>

```typescript
public readonly ListTracks: string;
```

- *Type:* string

[List] redshift-serverless:ListTracks.

---

##### `ListUsageLimits`<sup>Required</sup> <a name="ListUsageLimits" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListUsageLimits"></a>

```typescript
public readonly ListUsageLimits: string;
```

- *Type:* string

[List] redshift-serverless:ListUsageLimits.

---

##### `ListWorkgroups`<sup>Required</sup> <a name="ListWorkgroups" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.ListWorkgroups"></a>

```typescript
public readonly ListWorkgroups: string;
```

- *Type:* string

[List] redshift-serverless:ListWorkgroups.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] redshift-serverless:PutResourcePolicy.

---

##### `RestoreFromRecoveryPoint`<sup>Required</sup> <a name="RestoreFromRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreFromRecoveryPoint"></a>

```typescript
public readonly RestoreFromRecoveryPoint: string;
```

- *Type:* string

[Write] redshift-serverless:RestoreFromRecoveryPoint.

---

##### `RestoreFromSnapshot`<sup>Required</sup> <a name="RestoreFromSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreFromSnapshot"></a>

```typescript
public readonly RestoreFromSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:RestoreFromSnapshot.

---

##### `RestoreTableFromRecoveryPoint`<sup>Required</sup> <a name="RestoreTableFromRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreTableFromRecoveryPoint"></a>

```typescript
public readonly RestoreTableFromRecoveryPoint: string;
```

- *Type:* string

[Write] redshift-serverless:RestoreTableFromRecoveryPoint.

---

##### `RestoreTableFromSnapshot`<sup>Required</sup> <a name="RestoreTableFromSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.RestoreTableFromSnapshot"></a>

```typescript
public readonly RestoreTableFromSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:RestoreTableFromSnapshot.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] redshift-serverless:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] redshift-serverless:UntagResource.

---

##### `UpdateAutonomicsDenylist`<sup>Required</sup> <a name="UpdateAutonomicsDenylist" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateAutonomicsDenylist"></a>

```typescript
public readonly UpdateAutonomicsDenylist: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateAutonomicsDenylist.

---

##### `UpdateCustomDomainAssociation`<sup>Required</sup> <a name="UpdateCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateCustomDomainAssociation"></a>

```typescript
public readonly UpdateCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateCustomDomainAssociation.

---

##### `UpdateEndpointAccess`<sup>Required</sup> <a name="UpdateEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateEndpointAccess"></a>

```typescript
public readonly UpdateEndpointAccess: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateEndpointAccess.

---

##### `UpdateNamespace`<sup>Required</sup> <a name="UpdateNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateNamespace"></a>

```typescript
public readonly UpdateNamespace: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateNamespace.

---

##### `UpdateScheduledAction`<sup>Required</sup> <a name="UpdateScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateScheduledAction"></a>

```typescript
public readonly UpdateScheduledAction: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateScheduledAction.

---

##### `UpdateSnapshot`<sup>Required</sup> <a name="UpdateSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateSnapshot"></a>

```typescript
public readonly UpdateSnapshot: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateSnapshot.

---

##### `UpdateSnapshotCopyConfiguration`<sup>Required</sup> <a name="UpdateSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateSnapshotCopyConfiguration"></a>

```typescript
public readonly UpdateSnapshotCopyConfiguration: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateSnapshotCopyConfiguration.

---

##### `UpdateUsageLimit`<sup>Required</sup> <a name="UpdateUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateUsageLimit"></a>

```typescript
public readonly UpdateUsageLimit: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateUsageLimit.

---

##### `UpdateWorkgroup`<sup>Required</sup> <a name="UpdateWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessActions.property.UpdateWorkgroup"></a>

```typescript
public readonly UpdateWorkgroup: string;
```

- *Type:* string

[Write] redshift-serverless:UpdateWorkgroup.

---

### RedshiftServerlessConditions <a name="RedshiftServerlessConditions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions"></a>

Condition key constants and builders for redshift-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

new redshift_serverless.RedshiftServerlessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.endpointAccessId">endpointAccessId</a></code> | Generates a condition block for `redshift-serverless:endpointAccessId`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.managedWorkgroupName">managedWorkgroupName</a></code> | Generates a condition block for `redshift-serverless:managedWorkgroupName`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.namespaceId">namespaceId</a></code> | Generates a condition block for `redshift-serverless:namespaceId`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.recoveryPointId">recoveryPointId</a></code> | Generates a condition block for `redshift-serverless:recoveryPointId`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.snapshotId">snapshotId</a></code> | Generates a condition block for `redshift-serverless:snapshotId`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tableRestoreRequestId">tableRestoreRequestId</a></code> | Generates a condition block for `redshift-serverless:tableRestoreRequestId`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.workgroupId">workgroupId</a></code> | Generates a condition block for `redshift-serverless:workgroupId`. |

---

##### `endpointAccessId` <a name="endpointAccessId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.endpointAccessId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.endpointAccessId(value: string)
```

Generates a condition block for `redshift-serverless:endpointAccessId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.endpointAccessId.parameter.value"></a>

- *Type:* string

---

##### `managedWorkgroupName` <a name="managedWorkgroupName" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.managedWorkgroupName"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.managedWorkgroupName(value: string)
```

Generates a condition block for `redshift-serverless:managedWorkgroupName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.managedWorkgroupName.parameter.value"></a>

- *Type:* string

---

##### `namespaceId` <a name="namespaceId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.namespaceId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.namespaceId(value: string)
```

Generates a condition block for `redshift-serverless:namespaceId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.namespaceId.parameter.value"></a>

- *Type:* string

---

##### `recoveryPointId` <a name="recoveryPointId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.recoveryPointId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.recoveryPointId(value: string)
```

Generates a condition block for `redshift-serverless:recoveryPointId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.recoveryPointId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.requestTag"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.resourceTag"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `snapshotId` <a name="snapshotId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.snapshotId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.snapshotId(value: string)
```

Generates a condition block for `redshift-serverless:snapshotId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.snapshotId.parameter.value"></a>

- *Type:* string

---

##### `tableRestoreRequestId` <a name="tableRestoreRequestId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tableRestoreRequestId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.tableRestoreRequestId(value: string)
```

Generates a condition block for `redshift-serverless:tableRestoreRequestId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tableRestoreRequestId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tagKeys"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `workgroupId` <a name="workgroupId" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.workgroupId"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessConditions.workgroupId(value: string)
```

Generates a condition block for `redshift-serverless:workgroupId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.workgroupId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ConvertRecoveryPointToSnapshotConditionKeys">ConvertRecoveryPointToSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ConvertRecoveryPointToSnapshot action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateNamespaceConditionKeys">CreateNamespaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNamespace action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateSnapshotConditionKeys">CreateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshot action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateWorkgroupConditionKeys">CreateWorkgroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkgroup action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ENDPOINT_ACCESS_ID">ENDPOINT_ACCESS_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:endpointAccessId (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.MANAGED_WORKGROUP_NAME">MANAGED_WORKGROUP_NAME</a></code> | <code>string</code> | Condition key: redshift-serverless:managedWorkgroupName (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.NAMESPACE_ID">NAMESPACE_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:namespaceId (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.RECOVERY_POINT_ID">RECOVERY_POINT_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:recoveryPointId (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.SNAPSHOT_ID">SNAPSHOT_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:snapshotId (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.TABLE_RESTORE_REQUEST_ID">TABLE_RESTORE_REQUEST_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:tableRestoreRequestId (String). |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.WORKGROUP_ID">WORKGROUP_ID</a></code> | <code>string</code> | Condition key: redshift-serverless:workgroupId (String). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ConvertRecoveryPointToSnapshotConditionKeys`<sup>Required</sup> <a name="ConvertRecoveryPointToSnapshotConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ConvertRecoveryPointToSnapshotConditionKeys"></a>

```typescript
public readonly ConvertRecoveryPointToSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ConvertRecoveryPointToSnapshot action.

---

##### `CreateNamespaceConditionKeys`<sup>Required</sup> <a name="CreateNamespaceConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateNamespaceConditionKeys"></a>

```typescript
public readonly CreateNamespaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNamespace action.

---

##### `CreateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateSnapshotConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateSnapshotConditionKeys"></a>

```typescript
public readonly CreateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshot action.

---

##### `CreateWorkgroupConditionKeys`<sup>Required</sup> <a name="CreateWorkgroupConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.CreateWorkgroupConditionKeys"></a>

```typescript
public readonly CreateWorkgroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkgroup action.

---

##### `ENDPOINT_ACCESS_ID`<sup>Required</sup> <a name="ENDPOINT_ACCESS_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ENDPOINT_ACCESS_ID"></a>

```typescript
public readonly ENDPOINT_ACCESS_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:endpointAccessId (String).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `MANAGED_WORKGROUP_NAME`<sup>Required</sup> <a name="MANAGED_WORKGROUP_NAME" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.MANAGED_WORKGROUP_NAME"></a>

```typescript
public readonly MANAGED_WORKGROUP_NAME: string;
```

- *Type:* string

Condition key: redshift-serverless:managedWorkgroupName (String).

---

##### `NAMESPACE_ID`<sup>Required</sup> <a name="NAMESPACE_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.NAMESPACE_ID"></a>

```typescript
public readonly NAMESPACE_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:namespaceId (String).

---

##### `RECOVERY_POINT_ID`<sup>Required</sup> <a name="RECOVERY_POINT_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.RECOVERY_POINT_ID"></a>

```typescript
public readonly RECOVERY_POINT_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:recoveryPointId (String).

---

##### `SNAPSHOT_ID`<sup>Required</sup> <a name="SNAPSHOT_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.SNAPSHOT_ID"></a>

```typescript
public readonly SNAPSHOT_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:snapshotId (String).

---

##### `TABLE_RESTORE_REQUEST_ID`<sup>Required</sup> <a name="TABLE_RESTORE_REQUEST_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.TABLE_RESTORE_REQUEST_ID"></a>

```typescript
public readonly TABLE_RESTORE_REQUEST_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:tableRestoreRequestId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `WORKGROUP_ID`<sup>Required</sup> <a name="WORKGROUP_ID" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessConditions.property.WORKGROUP_ID"></a>

```typescript
public readonly WORKGROUP_ID: string;
```

- *Type:* string

Condition key: redshift-serverless:workgroupId (String).

---

### RedshiftServerlessOperations <a name="RedshiftServerlessOperations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations"></a>

API operation to required IAM actions mapping for redshift-serverless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

new redshift_serverless.RedshiftServerlessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ConvertRecoveryPointToSnapshot">ConvertRecoveryPointToSnapshot</a></code> | <code>string[]</code> | IAM actions required for the ConvertRecoveryPointToSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateCustomDomainAssociation">CreateCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateEndpointAccess">CreateEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateNamespace">CreateNamespace</a></code> | <code>string[]</code> | IAM actions required for the CreateNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateReservation">CreateReservation</a></code> | <code>string[]</code> | IAM actions required for the CreateReservation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateScheduledAction">CreateScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateSnapshotCopyConfiguration">CreateSnapshotCopyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshotCopyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateUsageLimit">CreateUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the CreateUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateWorkgroup">CreateWorkgroup</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkgroup API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteCustomDomainAssociation">DeleteCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteEndpointAccess">DeleteEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteNamespace">DeleteNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeleteNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteSnapshotCopyConfiguration">DeleteSnapshotCopyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshotCopyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteUsageLimit">DeleteUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteWorkgroup">DeleteWorkgroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkgroup API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListCustomDomainAssociations">ListCustomDomainAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCustomDomainAssociations API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListEndpointAccess">ListEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the ListEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListManagedWorkgroups">ListManagedWorkgroups</a></code> | <code>string[]</code> | IAM actions required for the ListManagedWorkgroups API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListNamespaces">ListNamespaces</a></code> | <code>string[]</code> | IAM actions required for the ListNamespaces API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListRecoveryPoints">ListRecoveryPoints</a></code> | <code>string[]</code> | IAM actions required for the ListRecoveryPoints API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListReservationOfferings">ListReservationOfferings</a></code> | <code>string[]</code> | IAM actions required for the ListReservationOfferings API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListReservations">ListReservations</a></code> | <code>string[]</code> | IAM actions required for the ListReservations API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListScheduledActions">ListScheduledActions</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledActions API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListSnapshotCopyConfigurations">ListSnapshotCopyConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSnapshotCopyConfigurations API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListSnapshots">ListSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListSnapshots API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTableRestoreStatus">ListTableRestoreStatus</a></code> | <code>string[]</code> | IAM actions required for the ListTableRestoreStatus API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTracks">ListTracks</a></code> | <code>string[]</code> | IAM actions required for the ListTracks API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListUsageLimits">ListUsageLimits</a></code> | <code>string[]</code> | IAM actions required for the ListUsageLimits API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListWorkgroups">ListWorkgroups</a></code> | <code>string[]</code> | IAM actions required for the ListWorkgroups API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetCredentials">opGetCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetCredentials API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetCustomDomainAssociation">opGetCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetEndpointAccess">opGetEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the GetEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetIdentityCenterAuthToken">opGetIdentityCenterAuthToken</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityCenterAuthToken API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetNamespace">opGetNamespace</a></code> | <code>string[]</code> | IAM actions required for the GetNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetRecoveryPoint">opGetRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the GetRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetReservation">opGetReservation</a></code> | <code>string[]</code> | IAM actions required for the GetReservation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetReservationOffering">opGetReservationOffering</a></code> | <code>string[]</code> | IAM actions required for the GetReservationOffering API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetScheduledAction">opGetScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the GetScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetSnapshot">opGetSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetTableRestoreStatus">opGetTableRestoreStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTableRestoreStatus API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetTrack">opGetTrack</a></code> | <code>string[]</code> | IAM actions required for the GetTrack API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetUsageLimit">opGetUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the GetUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetWorkgroup">opGetWorkgroup</a></code> | <code>string[]</code> | IAM actions required for the GetWorkgroup API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreFromRecoveryPoint">RestoreFromRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the RestoreFromRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreFromSnapshot">RestoreFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreTableFromRecoveryPoint">RestoreTableFromRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the RestoreTableFromRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreTableFromSnapshot">RestoreTableFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreTableFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateCustomDomainAssociation">UpdateCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateEndpointAccess">UpdateEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateLakehouseConfiguration">UpdateLakehouseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLakehouseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateNamespace">UpdateNamespace</a></code> | <code>string[]</code> | IAM actions required for the UpdateNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateScheduledAction">UpdateScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateSnapshot">UpdateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateSnapshotCopyConfiguration">UpdateSnapshotCopyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapshotCopyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateUsageLimit">UpdateUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateWorkgroup">UpdateWorkgroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkgroup API call. |

---

##### `ConvertRecoveryPointToSnapshot`<sup>Required</sup> <a name="ConvertRecoveryPointToSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ConvertRecoveryPointToSnapshot"></a>

```typescript
public readonly ConvertRecoveryPointToSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the ConvertRecoveryPointToSnapshot API call.

---

##### `CreateCustomDomainAssociation`<sup>Required</sup> <a name="CreateCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateCustomDomainAssociation"></a>

```typescript
public readonly CreateCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDomainAssociation API call.

---

##### `CreateEndpointAccess`<sup>Required</sup> <a name="CreateEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateEndpointAccess"></a>

```typescript
public readonly CreateEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpointAccess API call.

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateNamespace"></a>

```typescript
public readonly CreateNamespace: string[];
```

- *Type:* string[]

IAM actions required for the CreateNamespace API call.

---

##### `CreateReservation`<sup>Required</sup> <a name="CreateReservation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateReservation"></a>

```typescript
public readonly CreateReservation: string[];
```

- *Type:* string[]

IAM actions required for the CreateReservation API call.

---

##### `CreateScheduledAction`<sup>Required</sup> <a name="CreateScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateScheduledAction"></a>

```typescript
public readonly CreateScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledAction API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateSnapshotCopyConfiguration`<sup>Required</sup> <a name="CreateSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateSnapshotCopyConfiguration"></a>

```typescript
public readonly CreateSnapshotCopyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshotCopyConfiguration API call.

---

##### `CreateUsageLimit`<sup>Required</sup> <a name="CreateUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateUsageLimit"></a>

```typescript
public readonly CreateUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsageLimit API call.

---

##### `CreateWorkgroup`<sup>Required</sup> <a name="CreateWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.CreateWorkgroup"></a>

```typescript
public readonly CreateWorkgroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkgroup API call.

---

##### `DeleteCustomDomainAssociation`<sup>Required</sup> <a name="DeleteCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteCustomDomainAssociation"></a>

```typescript
public readonly DeleteCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDomainAssociation API call.

---

##### `DeleteEndpointAccess`<sup>Required</sup> <a name="DeleteEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteEndpointAccess"></a>

```typescript
public readonly DeleteEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpointAccess API call.

---

##### `DeleteNamespace`<sup>Required</sup> <a name="DeleteNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteNamespace"></a>

```typescript
public readonly DeleteNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNamespace API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledAction API call.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshot API call.

---

##### `DeleteSnapshotCopyConfiguration`<sup>Required</sup> <a name="DeleteSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteSnapshotCopyConfiguration"></a>

```typescript
public readonly DeleteSnapshotCopyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshotCopyConfiguration API call.

---

##### `DeleteUsageLimit`<sup>Required</sup> <a name="DeleteUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteUsageLimit"></a>

```typescript
public readonly DeleteUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsageLimit API call.

---

##### `DeleteWorkgroup`<sup>Required</sup> <a name="DeleteWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.DeleteWorkgroup"></a>

```typescript
public readonly DeleteWorkgroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkgroup API call.

---

##### `ListCustomDomainAssociations`<sup>Required</sup> <a name="ListCustomDomainAssociations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListCustomDomainAssociations"></a>

```typescript
public readonly ListCustomDomainAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomDomainAssociations API call.

---

##### `ListEndpointAccess`<sup>Required</sup> <a name="ListEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListEndpointAccess"></a>

```typescript
public readonly ListEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpointAccess API call.

---

##### `ListManagedWorkgroups`<sup>Required</sup> <a name="ListManagedWorkgroups" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListManagedWorkgroups"></a>

```typescript
public readonly ListManagedWorkgroups: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedWorkgroups API call.

---

##### `ListNamespaces`<sup>Required</sup> <a name="ListNamespaces" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListNamespaces"></a>

```typescript
public readonly ListNamespaces: string[];
```

- *Type:* string[]

IAM actions required for the ListNamespaces API call.

---

##### `ListRecoveryPoints`<sup>Required</sup> <a name="ListRecoveryPoints" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListRecoveryPoints"></a>

```typescript
public readonly ListRecoveryPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListRecoveryPoints API call.

---

##### `ListReservationOfferings`<sup>Required</sup> <a name="ListReservationOfferings" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListReservationOfferings"></a>

```typescript
public readonly ListReservationOfferings: string[];
```

- *Type:* string[]

IAM actions required for the ListReservationOfferings API call.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListReservations"></a>

```typescript
public readonly ListReservations: string[];
```

- *Type:* string[]

IAM actions required for the ListReservations API call.

---

##### `ListScheduledActions`<sup>Required</sup> <a name="ListScheduledActions" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListScheduledActions"></a>

```typescript
public readonly ListScheduledActions: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledActions API call.

---

##### `ListSnapshotCopyConfigurations`<sup>Required</sup> <a name="ListSnapshotCopyConfigurations" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListSnapshotCopyConfigurations"></a>

```typescript
public readonly ListSnapshotCopyConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSnapshotCopyConfigurations API call.

---

##### `ListSnapshots`<sup>Required</sup> <a name="ListSnapshots" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListSnapshots"></a>

```typescript
public readonly ListSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListSnapshots API call.

---

##### `ListTableRestoreStatus`<sup>Required</sup> <a name="ListTableRestoreStatus" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTableRestoreStatus"></a>

```typescript
public readonly ListTableRestoreStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListTableRestoreStatus API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTracks`<sup>Required</sup> <a name="ListTracks" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListTracks"></a>

```typescript
public readonly ListTracks: string[];
```

- *Type:* string[]

IAM actions required for the ListTracks API call.

---

##### `ListUsageLimits`<sup>Required</sup> <a name="ListUsageLimits" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListUsageLimits"></a>

```typescript
public readonly ListUsageLimits: string[];
```

- *Type:* string[]

IAM actions required for the ListUsageLimits API call.

---

##### `ListWorkgroups`<sup>Required</sup> <a name="ListWorkgroups" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.ListWorkgroups"></a>

```typescript
public readonly ListWorkgroups: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkgroups API call.

---

##### `opGetCredentials`<sup>Required</sup> <a name="opGetCredentials" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetCredentials"></a>

```typescript
public readonly opGetCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetCredentials API call.

---

##### `opGetCustomDomainAssociation`<sup>Required</sup> <a name="opGetCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetCustomDomainAssociation"></a>

```typescript
public readonly opGetCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomDomainAssociation API call.

---

##### `opGetEndpointAccess`<sup>Required</sup> <a name="opGetEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetEndpointAccess"></a>

```typescript
public readonly opGetEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the GetEndpointAccess API call.

---

##### `opGetIdentityCenterAuthToken`<sup>Required</sup> <a name="opGetIdentityCenterAuthToken" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetIdentityCenterAuthToken"></a>

```typescript
public readonly opGetIdentityCenterAuthToken: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityCenterAuthToken API call.

---

##### `opGetNamespace`<sup>Required</sup> <a name="opGetNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetNamespace"></a>

```typescript
public readonly opGetNamespace: string[];
```

- *Type:* string[]

IAM actions required for the GetNamespace API call.

---

##### `opGetRecoveryPoint`<sup>Required</sup> <a name="opGetRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetRecoveryPoint"></a>

```typescript
public readonly opGetRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the GetRecoveryPoint API call.

---

##### `opGetReservation`<sup>Required</sup> <a name="opGetReservation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetReservation"></a>

```typescript
public readonly opGetReservation: string[];
```

- *Type:* string[]

IAM actions required for the GetReservation API call.

---

##### `opGetReservationOffering`<sup>Required</sup> <a name="opGetReservationOffering" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetReservationOffering"></a>

```typescript
public readonly opGetReservationOffering: string[];
```

- *Type:* string[]

IAM actions required for the GetReservationOffering API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetScheduledAction`<sup>Required</sup> <a name="opGetScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetScheduledAction"></a>

```typescript
public readonly opGetScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the GetScheduledAction API call.

---

##### `opGetSnapshot`<sup>Required</sup> <a name="opGetSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetSnapshot"></a>

```typescript
public readonly opGetSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetSnapshot API call.

---

##### `opGetTableRestoreStatus`<sup>Required</sup> <a name="opGetTableRestoreStatus" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetTableRestoreStatus"></a>

```typescript
public readonly opGetTableRestoreStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTableRestoreStatus API call.

---

##### `opGetTrack`<sup>Required</sup> <a name="opGetTrack" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetTrack"></a>

```typescript
public readonly opGetTrack: string[];
```

- *Type:* string[]

IAM actions required for the GetTrack API call.

---

##### `opGetUsageLimit`<sup>Required</sup> <a name="opGetUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetUsageLimit"></a>

```typescript
public readonly opGetUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetUsageLimit API call.

---

##### `opGetWorkgroup`<sup>Required</sup> <a name="opGetWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.opGetWorkgroup"></a>

```typescript
public readonly opGetWorkgroup: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkgroup API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RestoreFromRecoveryPoint`<sup>Required</sup> <a name="RestoreFromRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreFromRecoveryPoint"></a>

```typescript
public readonly RestoreFromRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the RestoreFromRecoveryPoint API call.

---

##### `RestoreFromSnapshot`<sup>Required</sup> <a name="RestoreFromSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreFromSnapshot"></a>

```typescript
public readonly RestoreFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreFromSnapshot API call.

---

##### `RestoreTableFromRecoveryPoint`<sup>Required</sup> <a name="RestoreTableFromRecoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreTableFromRecoveryPoint"></a>

```typescript
public readonly RestoreTableFromRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTableFromRecoveryPoint API call.

---

##### `RestoreTableFromSnapshot`<sup>Required</sup> <a name="RestoreTableFromSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.RestoreTableFromSnapshot"></a>

```typescript
public readonly RestoreTableFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTableFromSnapshot API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCustomDomainAssociation`<sup>Required</sup> <a name="UpdateCustomDomainAssociation" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateCustomDomainAssociation"></a>

```typescript
public readonly UpdateCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomDomainAssociation API call.

---

##### `UpdateEndpointAccess`<sup>Required</sup> <a name="UpdateEndpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateEndpointAccess"></a>

```typescript
public readonly UpdateEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpointAccess API call.

---

##### `UpdateLakehouseConfiguration`<sup>Required</sup> <a name="UpdateLakehouseConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateLakehouseConfiguration"></a>

```typescript
public readonly UpdateLakehouseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLakehouseConfiguration API call.

---

##### `UpdateNamespace`<sup>Required</sup> <a name="UpdateNamespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateNamespace"></a>

```typescript
public readonly UpdateNamespace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNamespace API call.

---

##### `UpdateScheduledAction`<sup>Required</sup> <a name="UpdateScheduledAction" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateScheduledAction"></a>

```typescript
public readonly UpdateScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledAction API call.

---

##### `UpdateSnapshot`<sup>Required</sup> <a name="UpdateSnapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateSnapshot"></a>

```typescript
public readonly UpdateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapshot API call.

---

##### `UpdateSnapshotCopyConfiguration`<sup>Required</sup> <a name="UpdateSnapshotCopyConfiguration" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateSnapshotCopyConfiguration"></a>

```typescript
public readonly UpdateSnapshotCopyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapshotCopyConfiguration API call.

---

##### `UpdateUsageLimit`<sup>Required</sup> <a name="UpdateUsageLimit" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateUsageLimit"></a>

```typescript
public readonly UpdateUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUsageLimit API call.

---

##### `UpdateWorkgroup`<sup>Required</sup> <a name="UpdateWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessOperations.property.UpdateWorkgroup"></a>

```typescript
public readonly UpdateWorkgroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkgroup API call.

---

### RedshiftServerlessResources <a name="RedshiftServerlessResources" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources"></a>

ARN builders, validators, and parsers for redshift-serverless resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.Initializer"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

new redshift_serverless.RedshiftServerlessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.endpointAccess">endpointAccess</a></code> | Builds an ARN for the endpointAccess resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidEndpointAccessArn">isValidEndpointAccessArn</a></code> | Validates whether a string is a valid ARN for the endpointAccess resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidManagedWorkgroupArn">isValidManagedWorkgroupArn</a></code> | Validates whether a string is a valid ARN for the managed-workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidNamespaceArn">isValidNamespaceArn</a></code> | Validates whether a string is a valid ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidRecoveryPointArn">isValidRecoveryPointArn</a></code> | Validates whether a string is a valid ARN for the recoveryPoint resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidWorkgroupArn">isValidWorkgroupArn</a></code> | Validates whether a string is a valid ARN for the workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.managedWorkgroup">managedWorkgroup</a></code> | Builds an ARN for the managed-workgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.namespace">namespace</a></code> | Builds an ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseEndpointAccessArn">parseEndpointAccessArn</a></code> | Parses a endpointAccess ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseManagedWorkgroupArn">parseManagedWorkgroupArn</a></code> | Parses a managed-workgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseNamespaceArn">parseNamespaceArn</a></code> | Parses a namespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseRecoveryPointArn">parseRecoveryPointArn</a></code> | Parses a recoveryPoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseWorkgroupArn">parseWorkgroupArn</a></code> | Parses a workgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.recoveryPoint">recoveryPoint</a></code> | Builds an ARN for the recoveryPoint resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.workgroup">workgroup</a></code> | Builds an ARN for the workgroup resource. |

---

##### `endpointAccess` <a name="endpointAccess" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.endpointAccess"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.endpointAccess(props: RedshiftServerlessEndpointAccessArnProps)
```

Builds an ARN for the endpointAccess resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.endpointAccess.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessEndpointAccessArnProps">RedshiftServerlessEndpointAccessArnProps</a>

---

##### `isValidEndpointAccessArn` <a name="isValidEndpointAccessArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidEndpointAccessArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidEndpointAccessArn(arn: string)
```

Validates whether a string is a valid ARN for the endpointAccess resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidEndpointAccessArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedWorkgroupArn` <a name="isValidManagedWorkgroupArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidManagedWorkgroupArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidManagedWorkgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-workgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidManagedWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNamespaceArn` <a name="isValidNamespaceArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidNamespaceArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the namespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecoveryPointArn` <a name="isValidRecoveryPointArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidRecoveryPointArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidRecoveryPointArn(arn: string)
```

Validates whether a string is a valid ARN for the recoveryPoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidRecoveryPointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidSnapshotArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkgroupArn` <a name="isValidWorkgroupArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidWorkgroupArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.isValidWorkgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the workgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.isValidWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `managedWorkgroup` <a name="managedWorkgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.managedWorkgroup"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.managedWorkgroup(props: RedshiftServerlessManagedWorkgroupArnProps)
```

Builds an ARN for the managed-workgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.managedWorkgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessManagedWorkgroupArnProps">RedshiftServerlessManagedWorkgroupArnProps</a>

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.namespace"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.namespace(props: RedshiftServerlessNamespaceArnProps)
```

Builds an ARN for the namespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.namespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessNamespaceArnProps">RedshiftServerlessNamespaceArnProps</a>

---

##### `parseEndpointAccessArn` <a name="parseEndpointAccessArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseEndpointAccessArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseEndpointAccessArn(arn: string)
```

Parses a endpointAccess ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseEndpointAccessArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedWorkgroupArn` <a name="parseManagedWorkgroupArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseManagedWorkgroupArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseManagedWorkgroupArn(arn: string)
```

Parses a managed-workgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseManagedWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNamespaceArn` <a name="parseNamespaceArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseNamespaceArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseNamespaceArn(arn: string)
```

Parses a namespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecoveryPointArn` <a name="parseRecoveryPointArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseRecoveryPointArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseRecoveryPointArn(arn: string)
```

Parses a recoveryPoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseRecoveryPointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseSnapshotArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkgroupArn` <a name="parseWorkgroupArn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseWorkgroupArn"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.parseWorkgroupArn(arn: string)
```

Parses a workgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.parseWorkgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `recoveryPoint` <a name="recoveryPoint" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.recoveryPoint"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.recoveryPoint(props: RedshiftServerlessRecoveryPointArnProps)
```

Builds an ARN for the recoveryPoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.recoveryPoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessRecoveryPointArnProps">RedshiftServerlessRecoveryPointArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.snapshot"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.snapshot(props: RedshiftServerlessSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessSnapshotArnProps">RedshiftServerlessSnapshotArnProps</a>

---

##### `workgroup` <a name="workgroup" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.workgroup"></a>

```typescript
import { redshift_serverless } from '@cdk_utils/iam'

redshift_serverless.RedshiftServerlessResources.workgroup(props: RedshiftServerlessWorkgroupArnProps)
```

Builds an ARN for the workgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift_serverless.RedshiftServerlessResources.workgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift_serverless.RedshiftServerlessWorkgroupArnProps">RedshiftServerlessWorkgroupArnProps</a>

---




