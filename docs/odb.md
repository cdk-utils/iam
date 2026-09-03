# `odb` Submodule <a name="`odb` Submodule" id="@cdk_utils/iam.odb"></a>


## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseArnComponents <a name="OdbAutonomousDatabaseArnComponents" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents"></a>

Parsed components of a autonomous-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbAutonomousDatabaseArnComponents: odb.OdbAutonomousDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | The AutonomousDatabaseId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

The AutonomousDatabaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbAutonomousDatabaseArnProps <a name="OdbAutonomousDatabaseArnProps" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps"></a>

Properties for building a autonomous-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbAutonomousDatabaseArnProps: odb.OdbAutonomousDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | The AutonomousDatabaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

The AutonomousDatabaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbAutonomousDatabaseBackupArnComponents <a name="OdbAutonomousDatabaseBackupArnComponents" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents"></a>

Parsed components of a autonomous-database-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbAutonomousDatabaseBackupArnComponents: odb.OdbAutonomousDatabaseBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | The AutonomousDatabaseBackupId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

The AutonomousDatabaseBackupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbAutonomousDatabaseBackupArnProps <a name="OdbAutonomousDatabaseBackupArnProps" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps"></a>

Properties for building a autonomous-database-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbAutonomousDatabaseBackupArnProps: odb.OdbAutonomousDatabaseBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | The AutonomousDatabaseBackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

The AutonomousDatabaseBackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbCloudAutonomousVmClusterArnComponents <a name="OdbCloudAutonomousVmClusterArnComponents" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents"></a>

Parsed components of a cloud-autonomous-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudAutonomousVmClusterArnComponents: odb.OdbCloudAutonomousVmClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | The CloudAutonomousVmClusterId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

The CloudAutonomousVmClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbCloudAutonomousVmClusterArnProps <a name="OdbCloudAutonomousVmClusterArnProps" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps"></a>

Properties for building a cloud-autonomous-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudAutonomousVmClusterArnProps: odb.OdbCloudAutonomousVmClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.cloudAutonomousVmClusterId">cloudAutonomousVmClusterId</a></code> | <code>string</code> | The CloudAutonomousVmClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudAutonomousVmClusterId`<sup>Required</sup> <a name="cloudAutonomousVmClusterId" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.cloudAutonomousVmClusterId"></a>

```typescript
public readonly cloudAutonomousVmClusterId: string;
```

- *Type:* string

The CloudAutonomousVmClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbCloudExadataInfrastructureArnComponents <a name="OdbCloudExadataInfrastructureArnComponents" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents"></a>

Parsed components of a cloud-exadata-infrastructure ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudExadataInfrastructureArnComponents: odb.OdbCloudExadataInfrastructureArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The CloudExadataInfrastructureId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The CloudExadataInfrastructureId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbCloudExadataInfrastructureArnProps <a name="OdbCloudExadataInfrastructureArnProps" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps"></a>

Properties for building a cloud-exadata-infrastructure ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudExadataInfrastructureArnProps: odb.OdbCloudExadataInfrastructureArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The CloudExadataInfrastructureId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The CloudExadataInfrastructureId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbCloudVmClusterArnComponents <a name="OdbCloudVmClusterArnComponents" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents"></a>

Parsed components of a cloud-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudVmClusterArnComponents: odb.OdbCloudVmClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | The CloudVmClusterId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

The CloudVmClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbCloudVmClusterArnProps <a name="OdbCloudVmClusterArnProps" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps"></a>

Properties for building a cloud-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbCloudVmClusterArnProps: odb.OdbCloudVmClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | The CloudVmClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

The CloudVmClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbCloudVmClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbDBNodeArnComponents <a name="OdbDBNodeArnComponents" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents"></a>

Parsed components of a db-node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbDBNodeArnComponents: odb.OdbDBNodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | The DbNodeId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

The DbNodeId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbDBNodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbDBNodeArnProps <a name="OdbDBNodeArnProps" id="@cdk_utils/iam.odb.OdbDBNodeArnProps"></a>

Properties for building a db-node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbDBNodeArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbDBNodeArnProps: odb.OdbDBNodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnProps.property.dbNodeId">dbNodeId</a></code> | <code>string</code> | The DbNodeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbDBNodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbNodeId`<sup>Required</sup> <a name="dbNodeId" id="@cdk_utils/iam.odb.OdbDBNodeArnProps.property.dbNodeId"></a>

```typescript
public readonly dbNodeId: string;
```

- *Type:* string

The DbNodeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbDBNodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbDBNodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbDBNodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbExadbVmClusterArnComponents <a name="OdbExadbVmClusterArnComponents" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents"></a>

Parsed components of a exadb-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbExadbVmClusterArnComponents: odb.OdbExadbVmClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>string</code> | The ExadbVmClusterId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.exadbVmClusterId"></a>

```typescript
public readonly exadbVmClusterId: string;
```

- *Type:* string

The ExadbVmClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbExadbVmClusterArnProps <a name="OdbExadbVmClusterArnProps" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps"></a>

Properties for building a exadb-vm-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbExadbVmClusterArnProps: odb.OdbExadbVmClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>string</code> | The ExadbVmClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.exadbVmClusterId"></a>

```typescript
public readonly exadbVmClusterId: string;
```

- *Type:* string

The ExadbVmClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbExadbVmClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbExascaleDBStorageVaultArnComponents <a name="OdbExascaleDBStorageVaultArnComponents" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents"></a>

Parsed components of a exascale-db-storage-vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbExascaleDBStorageVaultArnComponents: odb.OdbExascaleDBStorageVaultArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.exascaleDBStorageVaultId">exascaleDBStorageVaultId</a></code> | <code>string</code> | The ExascaleDbStorageVaultId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `exascaleDBStorageVaultId`<sup>Required</sup> <a name="exascaleDBStorageVaultId" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.exascaleDBStorageVaultId"></a>

```typescript
public readonly exascaleDBStorageVaultId: string;
```

- *Type:* string

The ExascaleDbStorageVaultId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbExascaleDBStorageVaultArnProps <a name="OdbExascaleDBStorageVaultArnProps" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps"></a>

Properties for building a exascale-db-storage-vault ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbExascaleDBStorageVaultArnProps: odb.OdbExascaleDBStorageVaultArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.exascaleDBStorageVaultId">exascaleDBStorageVaultId</a></code> | <code>string</code> | The ExascaleDbStorageVaultId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `exascaleDBStorageVaultId`<sup>Required</sup> <a name="exascaleDBStorageVaultId" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.exascaleDBStorageVaultId"></a>

```typescript
public readonly exascaleDBStorageVaultId: string;
```

- *Type:* string

The ExascaleDbStorageVaultId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbOdbNetworkArnComponents <a name="OdbOdbNetworkArnComponents" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents"></a>

Parsed components of a odb-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbOdbNetworkArnComponents: odb.OdbOdbNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The OdbNetworkId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The OdbNetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbOdbNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbOdbNetworkArnProps <a name="OdbOdbNetworkArnProps" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps"></a>

Properties for building a odb-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbOdbNetworkArnProps: odb.OdbOdbNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | The OdbNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

The OdbNetworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbOdbNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OdbOdbPeeringConnectionArnComponents <a name="OdbOdbPeeringConnectionArnComponents" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents"></a>

Parsed components of a odb-peering-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbOdbPeeringConnectionArnComponents: odb.OdbOdbPeeringConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.odbPeeringConnectionId">odbPeeringConnectionId</a></code> | <code>string</code> | The OdbPeeringConnectionId component. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `odbPeeringConnectionId`<sup>Required</sup> <a name="odbPeeringConnectionId" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.odbPeeringConnectionId"></a>

```typescript
public readonly odbPeeringConnectionId: string;
```

- *Type:* string

The OdbPeeringConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OdbOdbPeeringConnectionArnProps <a name="OdbOdbPeeringConnectionArnProps" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps"></a>

Properties for building a odb-peering-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

const odbOdbPeeringConnectionArnProps: odb.OdbOdbPeeringConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.odbPeeringConnectionId">odbPeeringConnectionId</a></code> | <code>string</code> | The OdbPeeringConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `odbPeeringConnectionId`<sup>Required</sup> <a name="odbPeeringConnectionId" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.odbPeeringConnectionId"></a>

```typescript
public readonly odbPeeringConnectionId: string;
```

- *Type:* string

The OdbPeeringConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OdbActions <a name="OdbActions" id="@cdk_utils/iam.odb.OdbActions"></a>

IAM action constants for the odb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.odb.OdbActions.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

new odb.OdbActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AcceptMarketplaceRegistration">AcceptMarketplaceRegistration</a></code> | <code>string</code> | [Write] odb:AcceptMarketplaceRegistration. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabase">actionGetAutonomousDatabase</a></code> | <code>string</code> | [Read] odb:GetAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabaseBackup">actionGetAutonomousDatabaseBackup</a></code> | <code>string</code> | [Read] odb:GetAutonomousDatabaseBackup. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabaseWalletDetails">actionGetAutonomousDatabaseWalletDetails</a></code> | <code>string</code> | [Read] odb:GetAutonomousDatabaseWalletDetails. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetCloudAutonomousVmCluster">actionGetCloudAutonomousVmCluster</a></code> | <code>string</code> | [Read] odb:GetCloudAutonomousVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetCloudExadataInfrastructure">actionGetCloudExadataInfrastructure</a></code> | <code>string</code> | [Read] odb:GetCloudExadataInfrastructure. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetCloudExadataInfrastructureUnallocatedResources">actionGetCloudExadataInfrastructureUnallocatedResources</a></code> | <code>string</code> | [Read] odb:GetCloudExadataInfrastructureUnallocatedResources. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetCloudVmCluster">actionGetCloudVmCluster</a></code> | <code>string</code> | [Read] odb:GetCloudVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetDbNode">actionGetDbNode</a></code> | <code>string</code> | [Read] odb:GetDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetDbServer">actionGetDbServer</a></code> | <code>string</code> | [Read] odb:GetDbServer. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetExadbVmCluster">actionGetExadbVmCluster</a></code> | <code>string</code> | [Read] odb:GetExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetExascaleDbStorageVault">actionGetExascaleDbStorageVault</a></code> | <code>string</code> | [Read] odb:GetExascaleDbStorageVault. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetOciOnboardingStatus">actionGetOciOnboardingStatus</a></code> | <code>string</code> | [Read] odb:GetOciOnboardingStatus. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetOdbNetwork">actionGetOdbNetwork</a></code> | <code>string</code> | [Read] odb:GetOdbNetwork. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetOdbPeeringConnection">actionGetOdbPeeringConnection</a></code> | <code>string</code> | [Read] odb:GetOdbPeeringConnection. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] odb:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AssociateIamRoleToResource">AssociateIamRoleToResource</a></code> | <code>string</code> | [Write] odb:AssociateIamRoleToResource. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.AssociateVirtualMachinesToExadbVmCluster">AssociateVirtualMachinesToExadbVmCluster</a></code> | <code>string</code> | [Write] odb:AssociateVirtualMachinesToExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabase">CreateAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:CreateAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabaseBackup">CreateAutonomousDatabaseBackup</a></code> | <code>string</code> | [Write] odb:CreateAutonomousDatabaseBackup. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabaseWallet">CreateAutonomousDatabaseWallet</a></code> | <code>string</code> | [Write] odb:CreateAutonomousDatabaseWallet. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateCloudAutonomousVmCluster">CreateCloudAutonomousVmCluster</a></code> | <code>string</code> | [Write] odb:CreateCloudAutonomousVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateCloudExadataInfrastructure">CreateCloudExadataInfrastructure</a></code> | <code>string</code> | [Write] odb:CreateCloudExadataInfrastructure. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateCloudVmCluster">CreateCloudVmCluster</a></code> | <code>string</code> | [Write] odb:CreateCloudVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateDbNode">CreateDbNode</a></code> | <code>string</code> | [Write] odb:CreateDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateExadbVmCluster">CreateExadbVmCluster</a></code> | <code>string</code> | [Write] odb:CreateExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateExascaleDbStorageVault">CreateExascaleDbStorageVault</a></code> | <code>string</code> | [Write] odb:CreateExascaleDbStorageVault. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateGrantShare">CreateGrantShare</a></code> | <code>string</code> | [Write] odb:CreateGrantShare. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateOdbNetwork">CreateOdbNetwork</a></code> | <code>string</code> | [Write] odb:CreateOdbNetwork. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateOdbPeeringConnection">CreateOdbPeeringConnection</a></code> | <code>string</code> | [Write] odb:CreateOdbPeeringConnection. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.CreateOutboundIntegration">CreateOutboundIntegration</a></code> | <code>string</code> | [Write] odb:CreateOutboundIntegration. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteAutonomousDatabase">DeleteAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:DeleteAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteAutonomousDatabaseBackup">DeleteAutonomousDatabaseBackup</a></code> | <code>string</code> | [Write] odb:DeleteAutonomousDatabaseBackup. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteCloudAutonomousVmCluster">DeleteCloudAutonomousVmCluster</a></code> | <code>string</code> | [Write] odb:DeleteCloudAutonomousVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteCloudExadataInfrastructure">DeleteCloudExadataInfrastructure</a></code> | <code>string</code> | [Write] odb:DeleteCloudExadataInfrastructure. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteCloudVmCluster">DeleteCloudVmCluster</a></code> | <code>string</code> | [Write] odb:DeleteCloudVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteDbNode">DeleteDbNode</a></code> | <code>string</code> | [Write] odb:DeleteDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteExadbVmCluster">DeleteExadbVmCluster</a></code> | <code>string</code> | [Write] odb:DeleteExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteExascaleDbStorageVault">DeleteExascaleDbStorageVault</a></code> | <code>string</code> | [Write] odb:DeleteExascaleDbStorageVault. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteGrantShare">DeleteGrantShare</a></code> | <code>string</code> | [Write] odb:DeleteGrantShare. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteOdbNetwork">DeleteOdbNetwork</a></code> | <code>string</code> | [Write] odb:DeleteOdbNetwork. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteOdbPeeringConnection">DeleteOdbPeeringConnection</a></code> | <code>string</code> | [Write] odb:DeleteOdbPeeringConnection. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] odb:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DisassociateIamRoleFromResource">DisassociateIamRoleFromResource</a></code> | <code>string</code> | [Write] odb:DisassociateIamRoleFromResource. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.DisassociateVirtualMachinesFromExadbVmCluster">DisassociateVirtualMachinesFromExadbVmCluster</a></code> | <code>string</code> | [Write] odb:DisassociateVirtualMachinesFromExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.FailoverAutonomousDatabase">FailoverAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:FailoverAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.InitializeService">InitializeService</a></code> | <code>string</code> | [Write] odb:InitializeService. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseBackups">ListAutonomousDatabaseBackups</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabaseBackups. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseCharacterSets">ListAutonomousDatabaseCharacterSets</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabaseCharacterSets. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseClones">ListAutonomousDatabaseClones</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabaseClones. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabasePeers">ListAutonomousDatabasePeers</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabasePeers. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabases">ListAutonomousDatabases</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabases. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseVersions">ListAutonomousDatabaseVersions</a></code> | <code>string</code> | [List] odb:ListAutonomousDatabaseVersions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListAutonomousVirtualMachines">ListAutonomousVirtualMachines</a></code> | <code>string</code> | [List] odb:ListAutonomousVirtualMachines. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListCloudAutonomousVmClusters">ListCloudAutonomousVmClusters</a></code> | <code>string</code> | [List] odb:ListCloudAutonomousVmClusters. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListCloudExadataInfrastructures">ListCloudExadataInfrastructures</a></code> | <code>string</code> | [List] odb:ListCloudExadataInfrastructures. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListCloudVmClusters">ListCloudVmClusters</a></code> | <code>string</code> | [List] odb:ListCloudVmClusters. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListDbNodes">ListDbNodes</a></code> | <code>string</code> | [List] odb:ListDbNodes. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListDbServers">ListDbServers</a></code> | <code>string</code> | [List] odb:ListDbServers. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListDbSystemShapes">ListDbSystemShapes</a></code> | <code>string</code> | [List] odb:ListDbSystemShapes. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListExadbVmClusters">ListExadbVmClusters</a></code> | <code>string</code> | [List] odb:ListExadbVmClusters. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListExascaleDbStorageVaults">ListExascaleDbStorageVaults</a></code> | <code>string</code> | [List] odb:ListExascaleDbStorageVaults. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListFlexComponents">ListFlexComponents</a></code> | <code>string</code> | [List] odb:ListFlexComponents. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListGiMinorVersions">ListGiMinorVersions</a></code> | <code>string</code> | [List] odb:ListGiMinorVersions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListGiVersions">ListGiVersions</a></code> | <code>string</code> | [List] odb:ListGiVersions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListOdbNetworks">ListOdbNetworks</a></code> | <code>string</code> | [List] odb:ListOdbNetworks. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListOdbPeeringConnections">ListOdbPeeringConnections</a></code> | <code>string</code> | [List] odb:ListOdbPeeringConnections. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListSystemVersions">ListSystemVersions</a></code> | <code>string</code> | [List] odb:ListSystemVersions. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] odb:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] odb:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.RebootAutonomousDatabase">RebootAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:RebootAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.RebootDbNode">RebootDbNode</a></code> | <code>string</code> | [Write] odb:RebootDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.RestoreAutonomousDatabase">RestoreAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:RestoreAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.ShrinkAutonomousDatabase">ShrinkAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:ShrinkAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.StartAutonomousDatabase">StartAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:StartAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.StartDbNode">StartDbNode</a></code> | <code>string</code> | [Write] odb:StartDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.StopAutonomousDatabase">StopAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:StopAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.StopDbNode">StopDbNode</a></code> | <code>string</code> | [Write] odb:StopDbNode. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.SwitchoverAutonomousDatabase">SwitchoverAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:SwitchoverAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] odb:TagResource. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] odb:UntagResource. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateAutonomousDatabase">UpdateAutonomousDatabase</a></code> | <code>string</code> | [Write] odb:UpdateAutonomousDatabase. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateAutonomousDatabaseBackup">UpdateAutonomousDatabaseBackup</a></code> | <code>string</code> | [Write] odb:UpdateAutonomousDatabaseBackup. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateCloudExadataInfrastructure">UpdateCloudExadataInfrastructure</a></code> | <code>string</code> | [Write] odb:UpdateCloudExadataInfrastructure. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateExadbVmCluster">UpdateExadbVmCluster</a></code> | <code>string</code> | [Write] odb:UpdateExadbVmCluster. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateExascaleDbStorageVault">UpdateExascaleDbStorageVault</a></code> | <code>string</code> | [Write] odb:UpdateExascaleDbStorageVault. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateGrantShare">UpdateGrantShare</a></code> | <code>string</code> | [Write] odb:UpdateGrantShare. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateOdbNetwork">UpdateOdbNetwork</a></code> | <code>string</code> | [Write] odb:UpdateOdbNetwork. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateOdbPeeringConnection">UpdateOdbPeeringConnection</a></code> | <code>string</code> | [Write] odb:UpdateOdbPeeringConnection. |
| <code><a href="#@cdk_utils/iam.odb.OdbActions.property.UpdateOutboundIntegration">UpdateOutboundIntegration</a></code> | <code>string</code> | [Write] odb:UpdateOutboundIntegration. |

---

##### `AcceptMarketplaceRegistration`<sup>Required</sup> <a name="AcceptMarketplaceRegistration" id="@cdk_utils/iam.odb.OdbActions.property.AcceptMarketplaceRegistration"></a>

```typescript
public readonly AcceptMarketplaceRegistration: string;
```

- *Type:* string

[Write] odb:AcceptMarketplaceRegistration.

---

##### `actionGetAutonomousDatabase`<sup>Required</sup> <a name="actionGetAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabase"></a>

```typescript
public readonly actionGetAutonomousDatabase: string;
```

- *Type:* string

[Read] odb:GetAutonomousDatabase.

---

##### `actionGetAutonomousDatabaseBackup`<sup>Required</sup> <a name="actionGetAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabaseBackup"></a>

```typescript
public readonly actionGetAutonomousDatabaseBackup: string;
```

- *Type:* string

[Read] odb:GetAutonomousDatabaseBackup.

---

##### `actionGetAutonomousDatabaseWalletDetails`<sup>Required</sup> <a name="actionGetAutonomousDatabaseWalletDetails" id="@cdk_utils/iam.odb.OdbActions.property.actionGetAutonomousDatabaseWalletDetails"></a>

```typescript
public readonly actionGetAutonomousDatabaseWalletDetails: string;
```

- *Type:* string

[Read] odb:GetAutonomousDatabaseWalletDetails.

---

##### `actionGetCloudAutonomousVmCluster`<sup>Required</sup> <a name="actionGetCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.actionGetCloudAutonomousVmCluster"></a>

```typescript
public readonly actionGetCloudAutonomousVmCluster: string;
```

- *Type:* string

[Read] odb:GetCloudAutonomousVmCluster.

---

##### `actionGetCloudExadataInfrastructure`<sup>Required</sup> <a name="actionGetCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbActions.property.actionGetCloudExadataInfrastructure"></a>

```typescript
public readonly actionGetCloudExadataInfrastructure: string;
```

- *Type:* string

[Read] odb:GetCloudExadataInfrastructure.

---

##### `actionGetCloudExadataInfrastructureUnallocatedResources`<sup>Required</sup> <a name="actionGetCloudExadataInfrastructureUnallocatedResources" id="@cdk_utils/iam.odb.OdbActions.property.actionGetCloudExadataInfrastructureUnallocatedResources"></a>

```typescript
public readonly actionGetCloudExadataInfrastructureUnallocatedResources: string;
```

- *Type:* string

[Read] odb:GetCloudExadataInfrastructureUnallocatedResources.

---

##### `actionGetCloudVmCluster`<sup>Required</sup> <a name="actionGetCloudVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.actionGetCloudVmCluster"></a>

```typescript
public readonly actionGetCloudVmCluster: string;
```

- *Type:* string

[Read] odb:GetCloudVmCluster.

---

##### `actionGetDbNode`<sup>Required</sup> <a name="actionGetDbNode" id="@cdk_utils/iam.odb.OdbActions.property.actionGetDbNode"></a>

```typescript
public readonly actionGetDbNode: string;
```

- *Type:* string

[Read] odb:GetDbNode.

---

##### `actionGetDbServer`<sup>Required</sup> <a name="actionGetDbServer" id="@cdk_utils/iam.odb.OdbActions.property.actionGetDbServer"></a>

```typescript
public readonly actionGetDbServer: string;
```

- *Type:* string

[Read] odb:GetDbServer.

---

##### `actionGetExadbVmCluster`<sup>Required</sup> <a name="actionGetExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.actionGetExadbVmCluster"></a>

```typescript
public readonly actionGetExadbVmCluster: string;
```

- *Type:* string

[Read] odb:GetExadbVmCluster.

---

##### `actionGetExascaleDbStorageVault`<sup>Required</sup> <a name="actionGetExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbActions.property.actionGetExascaleDbStorageVault"></a>

```typescript
public readonly actionGetExascaleDbStorageVault: string;
```

- *Type:* string

[Read] odb:GetExascaleDbStorageVault.

---

##### `actionGetOciOnboardingStatus`<sup>Required</sup> <a name="actionGetOciOnboardingStatus" id="@cdk_utils/iam.odb.OdbActions.property.actionGetOciOnboardingStatus"></a>

```typescript
public readonly actionGetOciOnboardingStatus: string;
```

- *Type:* string

[Read] odb:GetOciOnboardingStatus.

---

##### `actionGetOdbNetwork`<sup>Required</sup> <a name="actionGetOdbNetwork" id="@cdk_utils/iam.odb.OdbActions.property.actionGetOdbNetwork"></a>

```typescript
public readonly actionGetOdbNetwork: string;
```

- *Type:* string

[Read] odb:GetOdbNetwork.

---

##### `actionGetOdbPeeringConnection`<sup>Required</sup> <a name="actionGetOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbActions.property.actionGetOdbPeeringConnection"></a>

```typescript
public readonly actionGetOdbPeeringConnection: string;
```

- *Type:* string

[Read] odb:GetOdbPeeringConnection.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.odb.OdbActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] odb:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.odb.OdbActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.odb.OdbActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.odb.OdbActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.odb.OdbActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.odb.OdbActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateIamRoleToResource`<sup>Required</sup> <a name="AssociateIamRoleToResource" id="@cdk_utils/iam.odb.OdbActions.property.AssociateIamRoleToResource"></a>

```typescript
public readonly AssociateIamRoleToResource: string;
```

- *Type:* string

[Write] odb:AssociateIamRoleToResource.

---

##### `AssociateVirtualMachinesToExadbVmCluster`<sup>Required</sup> <a name="AssociateVirtualMachinesToExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.AssociateVirtualMachinesToExadbVmCluster"></a>

```typescript
public readonly AssociateVirtualMachinesToExadbVmCluster: string;
```

- *Type:* string

[Write] odb:AssociateVirtualMachinesToExadbVmCluster.

---

##### `CreateAutonomousDatabase`<sup>Required</sup> <a name="CreateAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabase"></a>

```typescript
public readonly CreateAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:CreateAutonomousDatabase.

---

##### `CreateAutonomousDatabaseBackup`<sup>Required</sup> <a name="CreateAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabaseBackup"></a>

```typescript
public readonly CreateAutonomousDatabaseBackup: string;
```

- *Type:* string

[Write] odb:CreateAutonomousDatabaseBackup.

---

##### `CreateAutonomousDatabaseWallet`<sup>Required</sup> <a name="CreateAutonomousDatabaseWallet" id="@cdk_utils/iam.odb.OdbActions.property.CreateAutonomousDatabaseWallet"></a>

```typescript
public readonly CreateAutonomousDatabaseWallet: string;
```

- *Type:* string

[Write] odb:CreateAutonomousDatabaseWallet.

---

##### `CreateCloudAutonomousVmCluster`<sup>Required</sup> <a name="CreateCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.CreateCloudAutonomousVmCluster"></a>

```typescript
public readonly CreateCloudAutonomousVmCluster: string;
```

- *Type:* string

[Write] odb:CreateCloudAutonomousVmCluster.

---

##### `CreateCloudExadataInfrastructure`<sup>Required</sup> <a name="CreateCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbActions.property.CreateCloudExadataInfrastructure"></a>

```typescript
public readonly CreateCloudExadataInfrastructure: string;
```

- *Type:* string

[Write] odb:CreateCloudExadataInfrastructure.

---

##### `CreateCloudVmCluster`<sup>Required</sup> <a name="CreateCloudVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.CreateCloudVmCluster"></a>

```typescript
public readonly CreateCloudVmCluster: string;
```

- *Type:* string

[Write] odb:CreateCloudVmCluster.

---

##### `CreateDbNode`<sup>Required</sup> <a name="CreateDbNode" id="@cdk_utils/iam.odb.OdbActions.property.CreateDbNode"></a>

```typescript
public readonly CreateDbNode: string;
```

- *Type:* string

[Write] odb:CreateDbNode.

---

##### `CreateExadbVmCluster`<sup>Required</sup> <a name="CreateExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.CreateExadbVmCluster"></a>

```typescript
public readonly CreateExadbVmCluster: string;
```

- *Type:* string

[Write] odb:CreateExadbVmCluster.

---

##### `CreateExascaleDbStorageVault`<sup>Required</sup> <a name="CreateExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbActions.property.CreateExascaleDbStorageVault"></a>

```typescript
public readonly CreateExascaleDbStorageVault: string;
```

- *Type:* string

[Write] odb:CreateExascaleDbStorageVault.

---

##### `CreateGrantShare`<sup>Required</sup> <a name="CreateGrantShare" id="@cdk_utils/iam.odb.OdbActions.property.CreateGrantShare"></a>

```typescript
public readonly CreateGrantShare: string;
```

- *Type:* string

[Write] odb:CreateGrantShare.

---

##### `CreateOdbNetwork`<sup>Required</sup> <a name="CreateOdbNetwork" id="@cdk_utils/iam.odb.OdbActions.property.CreateOdbNetwork"></a>

```typescript
public readonly CreateOdbNetwork: string;
```

- *Type:* string

[Write] odb:CreateOdbNetwork.

---

##### `CreateOdbPeeringConnection`<sup>Required</sup> <a name="CreateOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbActions.property.CreateOdbPeeringConnection"></a>

```typescript
public readonly CreateOdbPeeringConnection: string;
```

- *Type:* string

[Write] odb:CreateOdbPeeringConnection.

---

##### `CreateOutboundIntegration`<sup>Required</sup> <a name="CreateOutboundIntegration" id="@cdk_utils/iam.odb.OdbActions.property.CreateOutboundIntegration"></a>

```typescript
public readonly CreateOutboundIntegration: string;
```

- *Type:* string

[Write] odb:CreateOutboundIntegration.

---

##### `DeleteAutonomousDatabase`<sup>Required</sup> <a name="DeleteAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.DeleteAutonomousDatabase"></a>

```typescript
public readonly DeleteAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:DeleteAutonomousDatabase.

---

##### `DeleteAutonomousDatabaseBackup`<sup>Required</sup> <a name="DeleteAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbActions.property.DeleteAutonomousDatabaseBackup"></a>

```typescript
public readonly DeleteAutonomousDatabaseBackup: string;
```

- *Type:* string

[Write] odb:DeleteAutonomousDatabaseBackup.

---

##### `DeleteCloudAutonomousVmCluster`<sup>Required</sup> <a name="DeleteCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.DeleteCloudAutonomousVmCluster"></a>

```typescript
public readonly DeleteCloudAutonomousVmCluster: string;
```

- *Type:* string

[Write] odb:DeleteCloudAutonomousVmCluster.

---

##### `DeleteCloudExadataInfrastructure`<sup>Required</sup> <a name="DeleteCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbActions.property.DeleteCloudExadataInfrastructure"></a>

```typescript
public readonly DeleteCloudExadataInfrastructure: string;
```

- *Type:* string

[Write] odb:DeleteCloudExadataInfrastructure.

---

##### `DeleteCloudVmCluster`<sup>Required</sup> <a name="DeleteCloudVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.DeleteCloudVmCluster"></a>

```typescript
public readonly DeleteCloudVmCluster: string;
```

- *Type:* string

[Write] odb:DeleteCloudVmCluster.

---

##### `DeleteDbNode`<sup>Required</sup> <a name="DeleteDbNode" id="@cdk_utils/iam.odb.OdbActions.property.DeleteDbNode"></a>

```typescript
public readonly DeleteDbNode: string;
```

- *Type:* string

[Write] odb:DeleteDbNode.

---

##### `DeleteExadbVmCluster`<sup>Required</sup> <a name="DeleteExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.DeleteExadbVmCluster"></a>

```typescript
public readonly DeleteExadbVmCluster: string;
```

- *Type:* string

[Write] odb:DeleteExadbVmCluster.

---

##### `DeleteExascaleDbStorageVault`<sup>Required</sup> <a name="DeleteExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbActions.property.DeleteExascaleDbStorageVault"></a>

```typescript
public readonly DeleteExascaleDbStorageVault: string;
```

- *Type:* string

[Write] odb:DeleteExascaleDbStorageVault.

---

##### `DeleteGrantShare`<sup>Required</sup> <a name="DeleteGrantShare" id="@cdk_utils/iam.odb.OdbActions.property.DeleteGrantShare"></a>

```typescript
public readonly DeleteGrantShare: string;
```

- *Type:* string

[Write] odb:DeleteGrantShare.

---

##### `DeleteOdbNetwork`<sup>Required</sup> <a name="DeleteOdbNetwork" id="@cdk_utils/iam.odb.OdbActions.property.DeleteOdbNetwork"></a>

```typescript
public readonly DeleteOdbNetwork: string;
```

- *Type:* string

[Write] odb:DeleteOdbNetwork.

---

##### `DeleteOdbPeeringConnection`<sup>Required</sup> <a name="DeleteOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbActions.property.DeleteOdbPeeringConnection"></a>

```typescript
public readonly DeleteOdbPeeringConnection: string;
```

- *Type:* string

[Write] odb:DeleteOdbPeeringConnection.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.odb.OdbActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] odb:DeleteResourcePolicy.

---

##### `DisassociateIamRoleFromResource`<sup>Required</sup> <a name="DisassociateIamRoleFromResource" id="@cdk_utils/iam.odb.OdbActions.property.DisassociateIamRoleFromResource"></a>

```typescript
public readonly DisassociateIamRoleFromResource: string;
```

- *Type:* string

[Write] odb:DisassociateIamRoleFromResource.

---

##### `DisassociateVirtualMachinesFromExadbVmCluster`<sup>Required</sup> <a name="DisassociateVirtualMachinesFromExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.DisassociateVirtualMachinesFromExadbVmCluster"></a>

```typescript
public readonly DisassociateVirtualMachinesFromExadbVmCluster: string;
```

- *Type:* string

[Write] odb:DisassociateVirtualMachinesFromExadbVmCluster.

---

##### `FailoverAutonomousDatabase`<sup>Required</sup> <a name="FailoverAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.FailoverAutonomousDatabase"></a>

```typescript
public readonly FailoverAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:FailoverAutonomousDatabase.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.odb.OdbActions.property.InitializeService"></a>

```typescript
public readonly InitializeService: string;
```

- *Type:* string

[Write] odb:InitializeService.

---

##### `ListAutonomousDatabaseBackups`<sup>Required</sup> <a name="ListAutonomousDatabaseBackups" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseBackups"></a>

```typescript
public readonly ListAutonomousDatabaseBackups: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabaseBackups.

---

##### `ListAutonomousDatabaseCharacterSets`<sup>Required</sup> <a name="ListAutonomousDatabaseCharacterSets" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseCharacterSets"></a>

```typescript
public readonly ListAutonomousDatabaseCharacterSets: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabaseCharacterSets.

---

##### `ListAutonomousDatabaseClones`<sup>Required</sup> <a name="ListAutonomousDatabaseClones" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseClones"></a>

```typescript
public readonly ListAutonomousDatabaseClones: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabaseClones.

---

##### `ListAutonomousDatabasePeers`<sup>Required</sup> <a name="ListAutonomousDatabasePeers" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabasePeers"></a>

```typescript
public readonly ListAutonomousDatabasePeers: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabasePeers.

---

##### `ListAutonomousDatabases`<sup>Required</sup> <a name="ListAutonomousDatabases" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabases"></a>

```typescript
public readonly ListAutonomousDatabases: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabases.

---

##### `ListAutonomousDatabaseVersions`<sup>Required</sup> <a name="ListAutonomousDatabaseVersions" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousDatabaseVersions"></a>

```typescript
public readonly ListAutonomousDatabaseVersions: string;
```

- *Type:* string

[List] odb:ListAutonomousDatabaseVersions.

---

##### `ListAutonomousVirtualMachines`<sup>Required</sup> <a name="ListAutonomousVirtualMachines" id="@cdk_utils/iam.odb.OdbActions.property.ListAutonomousVirtualMachines"></a>

```typescript
public readonly ListAutonomousVirtualMachines: string;
```

- *Type:* string

[List] odb:ListAutonomousVirtualMachines.

---

##### `ListCloudAutonomousVmClusters`<sup>Required</sup> <a name="ListCloudAutonomousVmClusters" id="@cdk_utils/iam.odb.OdbActions.property.ListCloudAutonomousVmClusters"></a>

```typescript
public readonly ListCloudAutonomousVmClusters: string;
```

- *Type:* string

[List] odb:ListCloudAutonomousVmClusters.

---

##### `ListCloudExadataInfrastructures`<sup>Required</sup> <a name="ListCloudExadataInfrastructures" id="@cdk_utils/iam.odb.OdbActions.property.ListCloudExadataInfrastructures"></a>

```typescript
public readonly ListCloudExadataInfrastructures: string;
```

- *Type:* string

[List] odb:ListCloudExadataInfrastructures.

---

##### `ListCloudVmClusters`<sup>Required</sup> <a name="ListCloudVmClusters" id="@cdk_utils/iam.odb.OdbActions.property.ListCloudVmClusters"></a>

```typescript
public readonly ListCloudVmClusters: string;
```

- *Type:* string

[List] odb:ListCloudVmClusters.

---

##### `ListDbNodes`<sup>Required</sup> <a name="ListDbNodes" id="@cdk_utils/iam.odb.OdbActions.property.ListDbNodes"></a>

```typescript
public readonly ListDbNodes: string;
```

- *Type:* string

[List] odb:ListDbNodes.

---

##### `ListDbServers`<sup>Required</sup> <a name="ListDbServers" id="@cdk_utils/iam.odb.OdbActions.property.ListDbServers"></a>

```typescript
public readonly ListDbServers: string;
```

- *Type:* string

[List] odb:ListDbServers.

---

##### `ListDbSystemShapes`<sup>Required</sup> <a name="ListDbSystemShapes" id="@cdk_utils/iam.odb.OdbActions.property.ListDbSystemShapes"></a>

```typescript
public readonly ListDbSystemShapes: string;
```

- *Type:* string

[List] odb:ListDbSystemShapes.

---

##### `ListExadbVmClusters`<sup>Required</sup> <a name="ListExadbVmClusters" id="@cdk_utils/iam.odb.OdbActions.property.ListExadbVmClusters"></a>

```typescript
public readonly ListExadbVmClusters: string;
```

- *Type:* string

[List] odb:ListExadbVmClusters.

---

##### `ListExascaleDbStorageVaults`<sup>Required</sup> <a name="ListExascaleDbStorageVaults" id="@cdk_utils/iam.odb.OdbActions.property.ListExascaleDbStorageVaults"></a>

```typescript
public readonly ListExascaleDbStorageVaults: string;
```

- *Type:* string

[List] odb:ListExascaleDbStorageVaults.

---

##### `ListFlexComponents`<sup>Required</sup> <a name="ListFlexComponents" id="@cdk_utils/iam.odb.OdbActions.property.ListFlexComponents"></a>

```typescript
public readonly ListFlexComponents: string;
```

- *Type:* string

[List] odb:ListFlexComponents.

---

##### `ListGiMinorVersions`<sup>Required</sup> <a name="ListGiMinorVersions" id="@cdk_utils/iam.odb.OdbActions.property.ListGiMinorVersions"></a>

```typescript
public readonly ListGiMinorVersions: string;
```

- *Type:* string

[List] odb:ListGiMinorVersions.

---

##### `ListGiVersions`<sup>Required</sup> <a name="ListGiVersions" id="@cdk_utils/iam.odb.OdbActions.property.ListGiVersions"></a>

```typescript
public readonly ListGiVersions: string;
```

- *Type:* string

[List] odb:ListGiVersions.

---

##### `ListOdbNetworks`<sup>Required</sup> <a name="ListOdbNetworks" id="@cdk_utils/iam.odb.OdbActions.property.ListOdbNetworks"></a>

```typescript
public readonly ListOdbNetworks: string;
```

- *Type:* string

[List] odb:ListOdbNetworks.

---

##### `ListOdbPeeringConnections`<sup>Required</sup> <a name="ListOdbPeeringConnections" id="@cdk_utils/iam.odb.OdbActions.property.ListOdbPeeringConnections"></a>

```typescript
public readonly ListOdbPeeringConnections: string;
```

- *Type:* string

[List] odb:ListOdbPeeringConnections.

---

##### `ListSystemVersions`<sup>Required</sup> <a name="ListSystemVersions" id="@cdk_utils/iam.odb.OdbActions.property.ListSystemVersions"></a>

```typescript
public readonly ListSystemVersions: string;
```

- *Type:* string

[List] odb:ListSystemVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.odb.OdbActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] odb:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.odb.OdbActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] odb:PutResourcePolicy.

---

##### `RebootAutonomousDatabase`<sup>Required</sup> <a name="RebootAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.RebootAutonomousDatabase"></a>

```typescript
public readonly RebootAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:RebootAutonomousDatabase.

---

##### `RebootDbNode`<sup>Required</sup> <a name="RebootDbNode" id="@cdk_utils/iam.odb.OdbActions.property.RebootDbNode"></a>

```typescript
public readonly RebootDbNode: string;
```

- *Type:* string

[Write] odb:RebootDbNode.

---

##### `RestoreAutonomousDatabase`<sup>Required</sup> <a name="RestoreAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.RestoreAutonomousDatabase"></a>

```typescript
public readonly RestoreAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:RestoreAutonomousDatabase.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.odb.OdbActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ShrinkAutonomousDatabase`<sup>Required</sup> <a name="ShrinkAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.ShrinkAutonomousDatabase"></a>

```typescript
public readonly ShrinkAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:ShrinkAutonomousDatabase.

---

##### `StartAutonomousDatabase`<sup>Required</sup> <a name="StartAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.StartAutonomousDatabase"></a>

```typescript
public readonly StartAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:StartAutonomousDatabase.

---

##### `StartDbNode`<sup>Required</sup> <a name="StartDbNode" id="@cdk_utils/iam.odb.OdbActions.property.StartDbNode"></a>

```typescript
public readonly StartDbNode: string;
```

- *Type:* string

[Write] odb:StartDbNode.

---

##### `StopAutonomousDatabase`<sup>Required</sup> <a name="StopAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.StopAutonomousDatabase"></a>

```typescript
public readonly StopAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:StopAutonomousDatabase.

---

##### `StopDbNode`<sup>Required</sup> <a name="StopDbNode" id="@cdk_utils/iam.odb.OdbActions.property.StopDbNode"></a>

```typescript
public readonly StopDbNode: string;
```

- *Type:* string

[Write] odb:StopDbNode.

---

##### `SwitchoverAutonomousDatabase`<sup>Required</sup> <a name="SwitchoverAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.SwitchoverAutonomousDatabase"></a>

```typescript
public readonly SwitchoverAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:SwitchoverAutonomousDatabase.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.odb.OdbActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] odb:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.odb.OdbActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] odb:UntagResource.

---

##### `UpdateAutonomousDatabase`<sup>Required</sup> <a name="UpdateAutonomousDatabase" id="@cdk_utils/iam.odb.OdbActions.property.UpdateAutonomousDatabase"></a>

```typescript
public readonly UpdateAutonomousDatabase: string;
```

- *Type:* string

[Write] odb:UpdateAutonomousDatabase.

---

##### `UpdateAutonomousDatabaseBackup`<sup>Required</sup> <a name="UpdateAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbActions.property.UpdateAutonomousDatabaseBackup"></a>

```typescript
public readonly UpdateAutonomousDatabaseBackup: string;
```

- *Type:* string

[Write] odb:UpdateAutonomousDatabaseBackup.

---

##### `UpdateCloudExadataInfrastructure`<sup>Required</sup> <a name="UpdateCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbActions.property.UpdateCloudExadataInfrastructure"></a>

```typescript
public readonly UpdateCloudExadataInfrastructure: string;
```

- *Type:* string

[Write] odb:UpdateCloudExadataInfrastructure.

---

##### `UpdateExadbVmCluster`<sup>Required</sup> <a name="UpdateExadbVmCluster" id="@cdk_utils/iam.odb.OdbActions.property.UpdateExadbVmCluster"></a>

```typescript
public readonly UpdateExadbVmCluster: string;
```

- *Type:* string

[Write] odb:UpdateExadbVmCluster.

---

##### `UpdateExascaleDbStorageVault`<sup>Required</sup> <a name="UpdateExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbActions.property.UpdateExascaleDbStorageVault"></a>

```typescript
public readonly UpdateExascaleDbStorageVault: string;
```

- *Type:* string

[Write] odb:UpdateExascaleDbStorageVault.

---

##### `UpdateGrantShare`<sup>Required</sup> <a name="UpdateGrantShare" id="@cdk_utils/iam.odb.OdbActions.property.UpdateGrantShare"></a>

```typescript
public readonly UpdateGrantShare: string;
```

- *Type:* string

[Write] odb:UpdateGrantShare.

---

##### `UpdateOdbNetwork`<sup>Required</sup> <a name="UpdateOdbNetwork" id="@cdk_utils/iam.odb.OdbActions.property.UpdateOdbNetwork"></a>

```typescript
public readonly UpdateOdbNetwork: string;
```

- *Type:* string

[Write] odb:UpdateOdbNetwork.

---

##### `UpdateOdbPeeringConnection`<sup>Required</sup> <a name="UpdateOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbActions.property.UpdateOdbPeeringConnection"></a>

```typescript
public readonly UpdateOdbPeeringConnection: string;
```

- *Type:* string

[Write] odb:UpdateOdbPeeringConnection.

---

##### `UpdateOutboundIntegration`<sup>Required</sup> <a name="UpdateOutboundIntegration" id="@cdk_utils/iam.odb.OdbActions.property.UpdateOutboundIntegration"></a>

```typescript
public readonly UpdateOutboundIntegration: string;
```

- *Type:* string

[Write] odb:UpdateOutboundIntegration.

---

### OdbConditions <a name="OdbConditions" id="@cdk_utils/iam.odb.OdbConditions"></a>

Condition key constants and builders for odb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.odb.OdbConditions.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

new odb.OdbConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.odb.OdbConditions.requestTag"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.odb.OdbConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.odb.OdbConditions.resourceTag"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.odb.OdbConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.odb.OdbConditions.tagKeys"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.odb.OdbConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateAutonomousDatabaseBackupConditionKeys">CreateAutonomousDatabaseBackupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutonomousDatabaseBackup action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateAutonomousDatabaseConditionKeys">CreateAutonomousDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutonomousDatabase action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateCloudAutonomousVmClusterConditionKeys">CreateCloudAutonomousVmClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudAutonomousVmCluster action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateCloudExadataInfrastructureConditionKeys">CreateCloudExadataInfrastructureConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudExadataInfrastructure action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateCloudVmClusterConditionKeys">CreateCloudVmClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudVmCluster action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateExadbVmClusterConditionKeys">CreateExadbVmClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExadbVmCluster action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateExascaleDbStorageVaultConditionKeys">CreateExascaleDbStorageVaultConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExascaleDbStorageVault action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateOdbNetworkConditionKeys">CreateOdbNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOdbNetwork action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.CreateOdbPeeringConnectionConditionKeys">CreateOdbPeeringConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOdbPeeringConnection action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.odb.OdbConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.odb.OdbConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.odb.OdbConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.odb.OdbConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAutonomousDatabaseBackupConditionKeys`<sup>Required</sup> <a name="CreateAutonomousDatabaseBackupConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateAutonomousDatabaseBackupConditionKeys"></a>

```typescript
public readonly CreateAutonomousDatabaseBackupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutonomousDatabaseBackup action.

---

##### `CreateAutonomousDatabaseConditionKeys`<sup>Required</sup> <a name="CreateAutonomousDatabaseConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateAutonomousDatabaseConditionKeys"></a>

```typescript
public readonly CreateAutonomousDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutonomousDatabase action.

---

##### `CreateCloudAutonomousVmClusterConditionKeys`<sup>Required</sup> <a name="CreateCloudAutonomousVmClusterConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateCloudAutonomousVmClusterConditionKeys"></a>

```typescript
public readonly CreateCloudAutonomousVmClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudAutonomousVmCluster action.

---

##### `CreateCloudExadataInfrastructureConditionKeys`<sup>Required</sup> <a name="CreateCloudExadataInfrastructureConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateCloudExadataInfrastructureConditionKeys"></a>

```typescript
public readonly CreateCloudExadataInfrastructureConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudExadataInfrastructure action.

---

##### `CreateCloudVmClusterConditionKeys`<sup>Required</sup> <a name="CreateCloudVmClusterConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateCloudVmClusterConditionKeys"></a>

```typescript
public readonly CreateCloudVmClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudVmCluster action.

---

##### `CreateExadbVmClusterConditionKeys`<sup>Required</sup> <a name="CreateExadbVmClusterConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateExadbVmClusterConditionKeys"></a>

```typescript
public readonly CreateExadbVmClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExadbVmCluster action.

---

##### `CreateExascaleDbStorageVaultConditionKeys`<sup>Required</sup> <a name="CreateExascaleDbStorageVaultConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateExascaleDbStorageVaultConditionKeys"></a>

```typescript
public readonly CreateExascaleDbStorageVaultConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExascaleDbStorageVault action.

---

##### `CreateOdbNetworkConditionKeys`<sup>Required</sup> <a name="CreateOdbNetworkConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateOdbNetworkConditionKeys"></a>

```typescript
public readonly CreateOdbNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOdbNetwork action.

---

##### `CreateOdbPeeringConnectionConditionKeys`<sup>Required</sup> <a name="CreateOdbPeeringConnectionConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.CreateOdbPeeringConnectionConditionKeys"></a>

```typescript
public readonly CreateOdbPeeringConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOdbPeeringConnection action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.odb.OdbConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### OdbOperations <a name="OdbOperations" id="@cdk_utils/iam.odb.OdbOperations"></a>

API operation to required IAM actions mapping for odb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.odb.OdbOperations.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

new odb.OdbOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.AcceptMarketplaceRegistration">AcceptMarketplaceRegistration</a></code> | <code>string[]</code> | IAM actions required for the AcceptMarketplaceRegistration API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.AssociateIamRoleToResource">AssociateIamRoleToResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateIamRoleToResource API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.AssociateVirtualMachinesToExadbVmCluster">AssociateVirtualMachinesToExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the AssociateVirtualMachinesToExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabase">CreateAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabaseBackup">CreateAutonomousDatabaseBackup</a></code> | <code>string[]</code> | IAM actions required for the CreateAutonomousDatabaseBackup API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabaseWallet">CreateAutonomousDatabaseWallet</a></code> | <code>string[]</code> | IAM actions required for the CreateAutonomousDatabaseWallet API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateCloudAutonomousVmCluster">CreateCloudAutonomousVmCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudAutonomousVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateCloudExadataInfrastructure">CreateCloudExadataInfrastructure</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudExadataInfrastructure API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateCloudVmCluster">CreateCloudVmCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateExadbVmCluster">CreateExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateExascaleDbStorageVault">CreateExascaleDbStorageVault</a></code> | <code>string[]</code> | IAM actions required for the CreateExascaleDbStorageVault API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateOdbNetwork">CreateOdbNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateOdbNetwork API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.CreateOdbPeeringConnection">CreateOdbPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateOdbPeeringConnection API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteAutonomousDatabase">DeleteAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteAutonomousDatabaseBackup">DeleteAutonomousDatabaseBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutonomousDatabaseBackup API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudAutonomousVmCluster">DeleteCloudAutonomousVmCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudAutonomousVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudExadataInfrastructure">DeleteCloudExadataInfrastructure</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudExadataInfrastructure API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudVmCluster">DeleteCloudVmCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteExadbVmCluster">DeleteExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteExascaleDbStorageVault">DeleteExascaleDbStorageVault</a></code> | <code>string[]</code> | IAM actions required for the DeleteExascaleDbStorageVault API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteOdbNetwork">DeleteOdbNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteOdbNetwork API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DeleteOdbPeeringConnection">DeleteOdbPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteOdbPeeringConnection API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DisassociateIamRoleFromResource">DisassociateIamRoleFromResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateIamRoleFromResource API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.DisassociateVirtualMachinesFromExadbVmCluster">DisassociateVirtualMachinesFromExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the DisassociateVirtualMachinesFromExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.FailoverAutonomousDatabase">FailoverAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the FailoverAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.InitializeService">InitializeService</a></code> | <code>string[]</code> | IAM actions required for the InitializeService API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseBackups">ListAutonomousDatabaseBackups</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabaseBackups API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseCharacterSets">ListAutonomousDatabaseCharacterSets</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabaseCharacterSets API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseClones">ListAutonomousDatabaseClones</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabaseClones API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabasePeers">ListAutonomousDatabasePeers</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabasePeers API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabases">ListAutonomousDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabases API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseVersions">ListAutonomousDatabaseVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousDatabaseVersions API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousVirtualMachines">ListAutonomousVirtualMachines</a></code> | <code>string[]</code> | IAM actions required for the ListAutonomousVirtualMachines API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListCloudAutonomousVmClusters">ListCloudAutonomousVmClusters</a></code> | <code>string[]</code> | IAM actions required for the ListCloudAutonomousVmClusters API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListCloudExadataInfrastructures">ListCloudExadataInfrastructures</a></code> | <code>string[]</code> | IAM actions required for the ListCloudExadataInfrastructures API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListCloudVmClusters">ListCloudVmClusters</a></code> | <code>string[]</code> | IAM actions required for the ListCloudVmClusters API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListDbNodes">ListDbNodes</a></code> | <code>string[]</code> | IAM actions required for the ListDbNodes API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListDbServers">ListDbServers</a></code> | <code>string[]</code> | IAM actions required for the ListDbServers API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListDbSystemShapes">ListDbSystemShapes</a></code> | <code>string[]</code> | IAM actions required for the ListDbSystemShapes API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListExadbVmClusters">ListExadbVmClusters</a></code> | <code>string[]</code> | IAM actions required for the ListExadbVmClusters API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListExascaleDbStorageVaults">ListExascaleDbStorageVaults</a></code> | <code>string[]</code> | IAM actions required for the ListExascaleDbStorageVaults API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListFlexComponents">ListFlexComponents</a></code> | <code>string[]</code> | IAM actions required for the ListFlexComponents API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListGiMinorVersions">ListGiMinorVersions</a></code> | <code>string[]</code> | IAM actions required for the ListGiMinorVersions API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListGiVersions">ListGiVersions</a></code> | <code>string[]</code> | IAM actions required for the ListGiVersions API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListOdbNetworks">ListOdbNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListOdbNetworks API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListOdbPeeringConnections">ListOdbPeeringConnections</a></code> | <code>string[]</code> | IAM actions required for the ListOdbPeeringConnections API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListSystemVersions">ListSystemVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSystemVersions API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabase">opGetAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabaseBackup">opGetAutonomousDatabaseBackup</a></code> | <code>string[]</code> | IAM actions required for the GetAutonomousDatabaseBackup API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabaseWalletDetails">opGetAutonomousDatabaseWalletDetails</a></code> | <code>string[]</code> | IAM actions required for the GetAutonomousDatabaseWalletDetails API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetCloudAutonomousVmCluster">opGetCloudAutonomousVmCluster</a></code> | <code>string[]</code> | IAM actions required for the GetCloudAutonomousVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetCloudExadataInfrastructure">opGetCloudExadataInfrastructure</a></code> | <code>string[]</code> | IAM actions required for the GetCloudExadataInfrastructure API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetCloudExadataInfrastructureUnallocatedResources">opGetCloudExadataInfrastructureUnallocatedResources</a></code> | <code>string[]</code> | IAM actions required for the GetCloudExadataInfrastructureUnallocatedResources API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetCloudVmCluster">opGetCloudVmCluster</a></code> | <code>string[]</code> | IAM actions required for the GetCloudVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetDbNode">opGetDbNode</a></code> | <code>string[]</code> | IAM actions required for the GetDbNode API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetDbServer">opGetDbServer</a></code> | <code>string[]</code> | IAM actions required for the GetDbServer API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetExadbVmCluster">opGetExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the GetExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetExascaleDbStorageVault">opGetExascaleDbStorageVault</a></code> | <code>string[]</code> | IAM actions required for the GetExascaleDbStorageVault API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetOciOnboardingStatus">opGetOciOnboardingStatus</a></code> | <code>string[]</code> | IAM actions required for the GetOciOnboardingStatus API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetOdbNetwork">opGetOdbNetwork</a></code> | <code>string[]</code> | IAM actions required for the GetOdbNetwork API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.opGetOdbPeeringConnection">opGetOdbPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the GetOdbPeeringConnection API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.RebootAutonomousDatabase">RebootAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the RebootAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.RebootDbNode">RebootDbNode</a></code> | <code>string[]</code> | IAM actions required for the RebootDbNode API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.RestoreAutonomousDatabase">RestoreAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the RestoreAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.ShrinkAutonomousDatabase">ShrinkAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the ShrinkAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.StartAutonomousDatabase">StartAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the StartAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.StartDbNode">StartDbNode</a></code> | <code>string[]</code> | IAM actions required for the StartDbNode API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.StopAutonomousDatabase">StopAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the StopAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.StopDbNode">StopDbNode</a></code> | <code>string[]</code> | IAM actions required for the StopDbNode API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.SwitchoverAutonomousDatabase">SwitchoverAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the SwitchoverAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateAutonomousDatabase">UpdateAutonomousDatabase</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutonomousDatabase API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateAutonomousDatabaseBackup">UpdateAutonomousDatabaseBackup</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutonomousDatabaseBackup API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateCloudExadataInfrastructure">UpdateCloudExadataInfrastructure</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudExadataInfrastructure API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateExadbVmCluster">UpdateExadbVmCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateExadbVmCluster API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateExascaleDbStorageVault">UpdateExascaleDbStorageVault</a></code> | <code>string[]</code> | IAM actions required for the UpdateExascaleDbStorageVault API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateOdbNetwork">UpdateOdbNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateOdbNetwork API call. |
| <code><a href="#@cdk_utils/iam.odb.OdbOperations.property.UpdateOdbPeeringConnection">UpdateOdbPeeringConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateOdbPeeringConnection API call. |

---

##### `AcceptMarketplaceRegistration`<sup>Required</sup> <a name="AcceptMarketplaceRegistration" id="@cdk_utils/iam.odb.OdbOperations.property.AcceptMarketplaceRegistration"></a>

```typescript
public readonly AcceptMarketplaceRegistration: string[];
```

- *Type:* string[]

IAM actions required for the AcceptMarketplaceRegistration API call.

---

##### `AssociateIamRoleToResource`<sup>Required</sup> <a name="AssociateIamRoleToResource" id="@cdk_utils/iam.odb.OdbOperations.property.AssociateIamRoleToResource"></a>

```typescript
public readonly AssociateIamRoleToResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateIamRoleToResource API call.

---

##### `AssociateVirtualMachinesToExadbVmCluster`<sup>Required</sup> <a name="AssociateVirtualMachinesToExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.AssociateVirtualMachinesToExadbVmCluster"></a>

```typescript
public readonly AssociateVirtualMachinesToExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the AssociateVirtualMachinesToExadbVmCluster API call.

---

##### `CreateAutonomousDatabase`<sup>Required</sup> <a name="CreateAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabase"></a>

```typescript
public readonly CreateAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutonomousDatabase API call.

---

##### `CreateAutonomousDatabaseBackup`<sup>Required</sup> <a name="CreateAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabaseBackup"></a>

```typescript
public readonly CreateAutonomousDatabaseBackup: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutonomousDatabaseBackup API call.

---

##### `CreateAutonomousDatabaseWallet`<sup>Required</sup> <a name="CreateAutonomousDatabaseWallet" id="@cdk_utils/iam.odb.OdbOperations.property.CreateAutonomousDatabaseWallet"></a>

```typescript
public readonly CreateAutonomousDatabaseWallet: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutonomousDatabaseWallet API call.

---

##### `CreateCloudAutonomousVmCluster`<sup>Required</sup> <a name="CreateCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.CreateCloudAutonomousVmCluster"></a>

```typescript
public readonly CreateCloudAutonomousVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudAutonomousVmCluster API call.

---

##### `CreateCloudExadataInfrastructure`<sup>Required</sup> <a name="CreateCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbOperations.property.CreateCloudExadataInfrastructure"></a>

```typescript
public readonly CreateCloudExadataInfrastructure: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudExadataInfrastructure API call.

---

##### `CreateCloudVmCluster`<sup>Required</sup> <a name="CreateCloudVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.CreateCloudVmCluster"></a>

```typescript
public readonly CreateCloudVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudVmCluster API call.

---

##### `CreateExadbVmCluster`<sup>Required</sup> <a name="CreateExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.CreateExadbVmCluster"></a>

```typescript
public readonly CreateExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateExadbVmCluster API call.

---

##### `CreateExascaleDbStorageVault`<sup>Required</sup> <a name="CreateExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbOperations.property.CreateExascaleDbStorageVault"></a>

```typescript
public readonly CreateExascaleDbStorageVault: string[];
```

- *Type:* string[]

IAM actions required for the CreateExascaleDbStorageVault API call.

---

##### `CreateOdbNetwork`<sup>Required</sup> <a name="CreateOdbNetwork" id="@cdk_utils/iam.odb.OdbOperations.property.CreateOdbNetwork"></a>

```typescript
public readonly CreateOdbNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateOdbNetwork API call.

---

##### `CreateOdbPeeringConnection`<sup>Required</sup> <a name="CreateOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbOperations.property.CreateOdbPeeringConnection"></a>

```typescript
public readonly CreateOdbPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateOdbPeeringConnection API call.

---

##### `DeleteAutonomousDatabase`<sup>Required</sup> <a name="DeleteAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteAutonomousDatabase"></a>

```typescript
public readonly DeleteAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutonomousDatabase API call.

---

##### `DeleteAutonomousDatabaseBackup`<sup>Required</sup> <a name="DeleteAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteAutonomousDatabaseBackup"></a>

```typescript
public readonly DeleteAutonomousDatabaseBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutonomousDatabaseBackup API call.

---

##### `DeleteCloudAutonomousVmCluster`<sup>Required</sup> <a name="DeleteCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudAutonomousVmCluster"></a>

```typescript
public readonly DeleteCloudAutonomousVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudAutonomousVmCluster API call.

---

##### `DeleteCloudExadataInfrastructure`<sup>Required</sup> <a name="DeleteCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudExadataInfrastructure"></a>

```typescript
public readonly DeleteCloudExadataInfrastructure: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudExadataInfrastructure API call.

---

##### `DeleteCloudVmCluster`<sup>Required</sup> <a name="DeleteCloudVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteCloudVmCluster"></a>

```typescript
public readonly DeleteCloudVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudVmCluster API call.

---

##### `DeleteExadbVmCluster`<sup>Required</sup> <a name="DeleteExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteExadbVmCluster"></a>

```typescript
public readonly DeleteExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExadbVmCluster API call.

---

##### `DeleteExascaleDbStorageVault`<sup>Required</sup> <a name="DeleteExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteExascaleDbStorageVault"></a>

```typescript
public readonly DeleteExascaleDbStorageVault: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExascaleDbStorageVault API call.

---

##### `DeleteOdbNetwork`<sup>Required</sup> <a name="DeleteOdbNetwork" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteOdbNetwork"></a>

```typescript
public readonly DeleteOdbNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOdbNetwork API call.

---

##### `DeleteOdbPeeringConnection`<sup>Required</sup> <a name="DeleteOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbOperations.property.DeleteOdbPeeringConnection"></a>

```typescript
public readonly DeleteOdbPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOdbPeeringConnection API call.

---

##### `DisassociateIamRoleFromResource`<sup>Required</sup> <a name="DisassociateIamRoleFromResource" id="@cdk_utils/iam.odb.OdbOperations.property.DisassociateIamRoleFromResource"></a>

```typescript
public readonly DisassociateIamRoleFromResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateIamRoleFromResource API call.

---

##### `DisassociateVirtualMachinesFromExadbVmCluster`<sup>Required</sup> <a name="DisassociateVirtualMachinesFromExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.DisassociateVirtualMachinesFromExadbVmCluster"></a>

```typescript
public readonly DisassociateVirtualMachinesFromExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateVirtualMachinesFromExadbVmCluster API call.

---

##### `FailoverAutonomousDatabase`<sup>Required</sup> <a name="FailoverAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.FailoverAutonomousDatabase"></a>

```typescript
public readonly FailoverAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the FailoverAutonomousDatabase API call.

---

##### `InitializeService`<sup>Required</sup> <a name="InitializeService" id="@cdk_utils/iam.odb.OdbOperations.property.InitializeService"></a>

```typescript
public readonly InitializeService: string[];
```

- *Type:* string[]

IAM actions required for the InitializeService API call.

---

##### `ListAutonomousDatabaseBackups`<sup>Required</sup> <a name="ListAutonomousDatabaseBackups" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseBackups"></a>

```typescript
public readonly ListAutonomousDatabaseBackups: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabaseBackups API call.

---

##### `ListAutonomousDatabaseCharacterSets`<sup>Required</sup> <a name="ListAutonomousDatabaseCharacterSets" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseCharacterSets"></a>

```typescript
public readonly ListAutonomousDatabaseCharacterSets: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabaseCharacterSets API call.

---

##### `ListAutonomousDatabaseClones`<sup>Required</sup> <a name="ListAutonomousDatabaseClones" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseClones"></a>

```typescript
public readonly ListAutonomousDatabaseClones: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabaseClones API call.

---

##### `ListAutonomousDatabasePeers`<sup>Required</sup> <a name="ListAutonomousDatabasePeers" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabasePeers"></a>

```typescript
public readonly ListAutonomousDatabasePeers: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabasePeers API call.

---

##### `ListAutonomousDatabases`<sup>Required</sup> <a name="ListAutonomousDatabases" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabases"></a>

```typescript
public readonly ListAutonomousDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabases API call.

---

##### `ListAutonomousDatabaseVersions`<sup>Required</sup> <a name="ListAutonomousDatabaseVersions" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousDatabaseVersions"></a>

```typescript
public readonly ListAutonomousDatabaseVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousDatabaseVersions API call.

---

##### `ListAutonomousVirtualMachines`<sup>Required</sup> <a name="ListAutonomousVirtualMachines" id="@cdk_utils/iam.odb.OdbOperations.property.ListAutonomousVirtualMachines"></a>

```typescript
public readonly ListAutonomousVirtualMachines: string[];
```

- *Type:* string[]

IAM actions required for the ListAutonomousVirtualMachines API call.

---

##### `ListCloudAutonomousVmClusters`<sup>Required</sup> <a name="ListCloudAutonomousVmClusters" id="@cdk_utils/iam.odb.OdbOperations.property.ListCloudAutonomousVmClusters"></a>

```typescript
public readonly ListCloudAutonomousVmClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudAutonomousVmClusters API call.

---

##### `ListCloudExadataInfrastructures`<sup>Required</sup> <a name="ListCloudExadataInfrastructures" id="@cdk_utils/iam.odb.OdbOperations.property.ListCloudExadataInfrastructures"></a>

```typescript
public readonly ListCloudExadataInfrastructures: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudExadataInfrastructures API call.

---

##### `ListCloudVmClusters`<sup>Required</sup> <a name="ListCloudVmClusters" id="@cdk_utils/iam.odb.OdbOperations.property.ListCloudVmClusters"></a>

```typescript
public readonly ListCloudVmClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudVmClusters API call.

---

##### `ListDbNodes`<sup>Required</sup> <a name="ListDbNodes" id="@cdk_utils/iam.odb.OdbOperations.property.ListDbNodes"></a>

```typescript
public readonly ListDbNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListDbNodes API call.

---

##### `ListDbServers`<sup>Required</sup> <a name="ListDbServers" id="@cdk_utils/iam.odb.OdbOperations.property.ListDbServers"></a>

```typescript
public readonly ListDbServers: string[];
```

- *Type:* string[]

IAM actions required for the ListDbServers API call.

---

##### `ListDbSystemShapes`<sup>Required</sup> <a name="ListDbSystemShapes" id="@cdk_utils/iam.odb.OdbOperations.property.ListDbSystemShapes"></a>

```typescript
public readonly ListDbSystemShapes: string[];
```

- *Type:* string[]

IAM actions required for the ListDbSystemShapes API call.

---

##### `ListExadbVmClusters`<sup>Required</sup> <a name="ListExadbVmClusters" id="@cdk_utils/iam.odb.OdbOperations.property.ListExadbVmClusters"></a>

```typescript
public readonly ListExadbVmClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListExadbVmClusters API call.

---

##### `ListExascaleDbStorageVaults`<sup>Required</sup> <a name="ListExascaleDbStorageVaults" id="@cdk_utils/iam.odb.OdbOperations.property.ListExascaleDbStorageVaults"></a>

```typescript
public readonly ListExascaleDbStorageVaults: string[];
```

- *Type:* string[]

IAM actions required for the ListExascaleDbStorageVaults API call.

---

##### `ListFlexComponents`<sup>Required</sup> <a name="ListFlexComponents" id="@cdk_utils/iam.odb.OdbOperations.property.ListFlexComponents"></a>

```typescript
public readonly ListFlexComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListFlexComponents API call.

---

##### `ListGiMinorVersions`<sup>Required</sup> <a name="ListGiMinorVersions" id="@cdk_utils/iam.odb.OdbOperations.property.ListGiMinorVersions"></a>

```typescript
public readonly ListGiMinorVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListGiMinorVersions API call.

---

##### `ListGiVersions`<sup>Required</sup> <a name="ListGiVersions" id="@cdk_utils/iam.odb.OdbOperations.property.ListGiVersions"></a>

```typescript
public readonly ListGiVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListGiVersions API call.

---

##### `ListOdbNetworks`<sup>Required</sup> <a name="ListOdbNetworks" id="@cdk_utils/iam.odb.OdbOperations.property.ListOdbNetworks"></a>

```typescript
public readonly ListOdbNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListOdbNetworks API call.

---

##### `ListOdbPeeringConnections`<sup>Required</sup> <a name="ListOdbPeeringConnections" id="@cdk_utils/iam.odb.OdbOperations.property.ListOdbPeeringConnections"></a>

```typescript
public readonly ListOdbPeeringConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListOdbPeeringConnections API call.

---

##### `ListSystemVersions`<sup>Required</sup> <a name="ListSystemVersions" id="@cdk_utils/iam.odb.OdbOperations.property.ListSystemVersions"></a>

```typescript
public readonly ListSystemVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSystemVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.odb.OdbOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAutonomousDatabase`<sup>Required</sup> <a name="opGetAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabase"></a>

```typescript
public readonly opGetAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetAutonomousDatabase API call.

---

##### `opGetAutonomousDatabaseBackup`<sup>Required</sup> <a name="opGetAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabaseBackup"></a>

```typescript
public readonly opGetAutonomousDatabaseBackup: string[];
```

- *Type:* string[]

IAM actions required for the GetAutonomousDatabaseBackup API call.

---

##### `opGetAutonomousDatabaseWalletDetails`<sup>Required</sup> <a name="opGetAutonomousDatabaseWalletDetails" id="@cdk_utils/iam.odb.OdbOperations.property.opGetAutonomousDatabaseWalletDetails"></a>

```typescript
public readonly opGetAutonomousDatabaseWalletDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetAutonomousDatabaseWalletDetails API call.

---

##### `opGetCloudAutonomousVmCluster`<sup>Required</sup> <a name="opGetCloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.opGetCloudAutonomousVmCluster"></a>

```typescript
public readonly opGetCloudAutonomousVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudAutonomousVmCluster API call.

---

##### `opGetCloudExadataInfrastructure`<sup>Required</sup> <a name="opGetCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbOperations.property.opGetCloudExadataInfrastructure"></a>

```typescript
public readonly opGetCloudExadataInfrastructure: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudExadataInfrastructure API call.

---

##### `opGetCloudExadataInfrastructureUnallocatedResources`<sup>Required</sup> <a name="opGetCloudExadataInfrastructureUnallocatedResources" id="@cdk_utils/iam.odb.OdbOperations.property.opGetCloudExadataInfrastructureUnallocatedResources"></a>

```typescript
public readonly opGetCloudExadataInfrastructureUnallocatedResources: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudExadataInfrastructureUnallocatedResources API call.

---

##### `opGetCloudVmCluster`<sup>Required</sup> <a name="opGetCloudVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.opGetCloudVmCluster"></a>

```typescript
public readonly opGetCloudVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudVmCluster API call.

---

##### `opGetDbNode`<sup>Required</sup> <a name="opGetDbNode" id="@cdk_utils/iam.odb.OdbOperations.property.opGetDbNode"></a>

```typescript
public readonly opGetDbNode: string[];
```

- *Type:* string[]

IAM actions required for the GetDbNode API call.

---

##### `opGetDbServer`<sup>Required</sup> <a name="opGetDbServer" id="@cdk_utils/iam.odb.OdbOperations.property.opGetDbServer"></a>

```typescript
public readonly opGetDbServer: string[];
```

- *Type:* string[]

IAM actions required for the GetDbServer API call.

---

##### `opGetExadbVmCluster`<sup>Required</sup> <a name="opGetExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.opGetExadbVmCluster"></a>

```typescript
public readonly opGetExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetExadbVmCluster API call.

---

##### `opGetExascaleDbStorageVault`<sup>Required</sup> <a name="opGetExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbOperations.property.opGetExascaleDbStorageVault"></a>

```typescript
public readonly opGetExascaleDbStorageVault: string[];
```

- *Type:* string[]

IAM actions required for the GetExascaleDbStorageVault API call.

---

##### `opGetOciOnboardingStatus`<sup>Required</sup> <a name="opGetOciOnboardingStatus" id="@cdk_utils/iam.odb.OdbOperations.property.opGetOciOnboardingStatus"></a>

```typescript
public readonly opGetOciOnboardingStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetOciOnboardingStatus API call.

---

##### `opGetOdbNetwork`<sup>Required</sup> <a name="opGetOdbNetwork" id="@cdk_utils/iam.odb.OdbOperations.property.opGetOdbNetwork"></a>

```typescript
public readonly opGetOdbNetwork: string[];
```

- *Type:* string[]

IAM actions required for the GetOdbNetwork API call.

---

##### `opGetOdbPeeringConnection`<sup>Required</sup> <a name="opGetOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbOperations.property.opGetOdbPeeringConnection"></a>

```typescript
public readonly opGetOdbPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetOdbPeeringConnection API call.

---

##### `RebootAutonomousDatabase`<sup>Required</sup> <a name="RebootAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.RebootAutonomousDatabase"></a>

```typescript
public readonly RebootAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the RebootAutonomousDatabase API call.

---

##### `RebootDbNode`<sup>Required</sup> <a name="RebootDbNode" id="@cdk_utils/iam.odb.OdbOperations.property.RebootDbNode"></a>

```typescript
public readonly RebootDbNode: string[];
```

- *Type:* string[]

IAM actions required for the RebootDbNode API call.

---

##### `RestoreAutonomousDatabase`<sup>Required</sup> <a name="RestoreAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.RestoreAutonomousDatabase"></a>

```typescript
public readonly RestoreAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the RestoreAutonomousDatabase API call.

---

##### `ShrinkAutonomousDatabase`<sup>Required</sup> <a name="ShrinkAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.ShrinkAutonomousDatabase"></a>

```typescript
public readonly ShrinkAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the ShrinkAutonomousDatabase API call.

---

##### `StartAutonomousDatabase`<sup>Required</sup> <a name="StartAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.StartAutonomousDatabase"></a>

```typescript
public readonly StartAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the StartAutonomousDatabase API call.

---

##### `StartDbNode`<sup>Required</sup> <a name="StartDbNode" id="@cdk_utils/iam.odb.OdbOperations.property.StartDbNode"></a>

```typescript
public readonly StartDbNode: string[];
```

- *Type:* string[]

IAM actions required for the StartDbNode API call.

---

##### `StopAutonomousDatabase`<sup>Required</sup> <a name="StopAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.StopAutonomousDatabase"></a>

```typescript
public readonly StopAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the StopAutonomousDatabase API call.

---

##### `StopDbNode`<sup>Required</sup> <a name="StopDbNode" id="@cdk_utils/iam.odb.OdbOperations.property.StopDbNode"></a>

```typescript
public readonly StopDbNode: string[];
```

- *Type:* string[]

IAM actions required for the StopDbNode API call.

---

##### `SwitchoverAutonomousDatabase`<sup>Required</sup> <a name="SwitchoverAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.SwitchoverAutonomousDatabase"></a>

```typescript
public readonly SwitchoverAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the SwitchoverAutonomousDatabase API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.odb.OdbOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.odb.OdbOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAutonomousDatabase`<sup>Required</sup> <a name="UpdateAutonomousDatabase" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateAutonomousDatabase"></a>

```typescript
public readonly UpdateAutonomousDatabase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutonomousDatabase API call.

---

##### `UpdateAutonomousDatabaseBackup`<sup>Required</sup> <a name="UpdateAutonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateAutonomousDatabaseBackup"></a>

```typescript
public readonly UpdateAutonomousDatabaseBackup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutonomousDatabaseBackup API call.

---

##### `UpdateCloudExadataInfrastructure`<sup>Required</sup> <a name="UpdateCloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateCloudExadataInfrastructure"></a>

```typescript
public readonly UpdateCloudExadataInfrastructure: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudExadataInfrastructure API call.

---

##### `UpdateExadbVmCluster`<sup>Required</sup> <a name="UpdateExadbVmCluster" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateExadbVmCluster"></a>

```typescript
public readonly UpdateExadbVmCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExadbVmCluster API call.

---

##### `UpdateExascaleDbStorageVault`<sup>Required</sup> <a name="UpdateExascaleDbStorageVault" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateExascaleDbStorageVault"></a>

```typescript
public readonly UpdateExascaleDbStorageVault: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExascaleDbStorageVault API call.

---

##### `UpdateOdbNetwork`<sup>Required</sup> <a name="UpdateOdbNetwork" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateOdbNetwork"></a>

```typescript
public readonly UpdateOdbNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOdbNetwork API call.

---

##### `UpdateOdbPeeringConnection`<sup>Required</sup> <a name="UpdateOdbPeeringConnection" id="@cdk_utils/iam.odb.OdbOperations.property.UpdateOdbPeeringConnection"></a>

```typescript
public readonly UpdateOdbPeeringConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOdbPeeringConnection API call.

---

### OdbResources <a name="OdbResources" id="@cdk_utils/iam.odb.OdbResources"></a>

ARN builders, validators, and parsers for odb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.odb.OdbResources.Initializer"></a>

```typescript
import { odb } from '@cdk_utils/iam'

new odb.OdbResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.autonomousDatabase">autonomousDatabase</a></code> | Builds an ARN for the autonomous-database resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.autonomousDatabaseBackup">autonomousDatabaseBackup</a></code> | Builds an ARN for the autonomous-database-backup resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.cloudAutonomousVmCluster">cloudAutonomousVmCluster</a></code> | Builds an ARN for the cloud-autonomous-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.cloudExadataInfrastructure">cloudExadataInfrastructure</a></code> | Builds an ARN for the cloud-exadata-infrastructure resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.cloudVmCluster">cloudVmCluster</a></code> | Builds an ARN for the cloud-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.dbNode">dbNode</a></code> | Builds an ARN for the db-node resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.exadbVmCluster">exadbVmCluster</a></code> | Builds an ARN for the exadb-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.exascaleDBStorageVault">exascaleDBStorageVault</a></code> | Builds an ARN for the exascale-db-storage-vault resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseArn">isValidAutonomousDatabaseArn</a></code> | Validates whether a string is a valid ARN for the autonomous-database resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseBackupArn">isValidAutonomousDatabaseBackupArn</a></code> | Validates whether a string is a valid ARN for the autonomous-database-backup resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidCloudAutonomousVmClusterArn">isValidCloudAutonomousVmClusterArn</a></code> | Validates whether a string is a valid ARN for the cloud-autonomous-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidCloudExadataInfrastructureArn">isValidCloudExadataInfrastructureArn</a></code> | Validates whether a string is a valid ARN for the cloud-exadata-infrastructure resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidCloudVmClusterArn">isValidCloudVmClusterArn</a></code> | Validates whether a string is a valid ARN for the cloud-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidDBNodeArn">isValidDBNodeArn</a></code> | Validates whether a string is a valid ARN for the db-node resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidExadbVmClusterArn">isValidExadbVmClusterArn</a></code> | Validates whether a string is a valid ARN for the exadb-vm-cluster resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidExascaleDBStorageVaultArn">isValidExascaleDBStorageVaultArn</a></code> | Validates whether a string is a valid ARN for the exascale-db-storage-vault resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidOdbNetworkArn">isValidOdbNetworkArn</a></code> | Validates whether a string is a valid ARN for the odb-network resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.isValidOdbPeeringConnectionArn">isValidOdbPeeringConnectionArn</a></code> | Validates whether a string is a valid ARN for the odb-peering-connection resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.odbNetwork">odbNetwork</a></code> | Builds an ARN for the odb-network resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.odbPeeringConnection">odbPeeringConnection</a></code> | Builds an ARN for the odb-peering-connection resource. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseArn">parseAutonomousDatabaseArn</a></code> | Parses a autonomous-database ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseBackupArn">parseAutonomousDatabaseBackupArn</a></code> | Parses a autonomous-database-backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseCloudAutonomousVmClusterArn">parseCloudAutonomousVmClusterArn</a></code> | Parses a cloud-autonomous-vm-cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseCloudExadataInfrastructureArn">parseCloudExadataInfrastructureArn</a></code> | Parses a cloud-exadata-infrastructure ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseCloudVmClusterArn">parseCloudVmClusterArn</a></code> | Parses a cloud-vm-cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseDBNodeArn">parseDBNodeArn</a></code> | Parses a db-node ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseExadbVmClusterArn">parseExadbVmClusterArn</a></code> | Parses a exadb-vm-cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseExascaleDBStorageVaultArn">parseExascaleDBStorageVaultArn</a></code> | Parses a exascale-db-storage-vault ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseOdbNetworkArn">parseOdbNetworkArn</a></code> | Parses a odb-network ARN into its components. |
| <code><a href="#@cdk_utils/iam.odb.OdbResources.parseOdbPeeringConnectionArn">parseOdbPeeringConnectionArn</a></code> | Parses a odb-peering-connection ARN into its components. |

---

##### `autonomousDatabase` <a name="autonomousDatabase" id="@cdk_utils/iam.odb.OdbResources.autonomousDatabase"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.autonomousDatabase(props: OdbAutonomousDatabaseArnProps)
```

Builds an ARN for the autonomous-database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.autonomousDatabase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseArnProps">OdbAutonomousDatabaseArnProps</a>

---

##### `autonomousDatabaseBackup` <a name="autonomousDatabaseBackup" id="@cdk_utils/iam.odb.OdbResources.autonomousDatabaseBackup"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.autonomousDatabaseBackup(props: OdbAutonomousDatabaseBackupArnProps)
```

Builds an ARN for the autonomous-database-backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.autonomousDatabaseBackup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbAutonomousDatabaseBackupArnProps">OdbAutonomousDatabaseBackupArnProps</a>

---

##### `cloudAutonomousVmCluster` <a name="cloudAutonomousVmCluster" id="@cdk_utils/iam.odb.OdbResources.cloudAutonomousVmCluster"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.cloudAutonomousVmCluster(props: OdbCloudAutonomousVmClusterArnProps)
```

Builds an ARN for the cloud-autonomous-vm-cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.cloudAutonomousVmCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbCloudAutonomousVmClusterArnProps">OdbCloudAutonomousVmClusterArnProps</a>

---

##### `cloudExadataInfrastructure` <a name="cloudExadataInfrastructure" id="@cdk_utils/iam.odb.OdbResources.cloudExadataInfrastructure"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.cloudExadataInfrastructure(props: OdbCloudExadataInfrastructureArnProps)
```

Builds an ARN for the cloud-exadata-infrastructure resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.cloudExadataInfrastructure.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbCloudExadataInfrastructureArnProps">OdbCloudExadataInfrastructureArnProps</a>

---

##### `cloudVmCluster` <a name="cloudVmCluster" id="@cdk_utils/iam.odb.OdbResources.cloudVmCluster"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.cloudVmCluster(props: OdbCloudVmClusterArnProps)
```

Builds an ARN for the cloud-vm-cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.cloudVmCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbCloudVmClusterArnProps">OdbCloudVmClusterArnProps</a>

---

##### `dbNode` <a name="dbNode" id="@cdk_utils/iam.odb.OdbResources.dbNode"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.dbNode(props: OdbDBNodeArnProps)
```

Builds an ARN for the db-node resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.dbNode.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbDBNodeArnProps">OdbDBNodeArnProps</a>

---

##### `exadbVmCluster` <a name="exadbVmCluster" id="@cdk_utils/iam.odb.OdbResources.exadbVmCluster"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.exadbVmCluster(props: OdbExadbVmClusterArnProps)
```

Builds an ARN for the exadb-vm-cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.exadbVmCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbExadbVmClusterArnProps">OdbExadbVmClusterArnProps</a>

---

##### `exascaleDBStorageVault` <a name="exascaleDBStorageVault" id="@cdk_utils/iam.odb.OdbResources.exascaleDBStorageVault"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.exascaleDBStorageVault(props: OdbExascaleDBStorageVaultArnProps)
```

Builds an ARN for the exascale-db-storage-vault resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.exascaleDBStorageVault.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbExascaleDBStorageVaultArnProps">OdbExascaleDBStorageVaultArnProps</a>

---

##### `isValidAutonomousDatabaseArn` <a name="isValidAutonomousDatabaseArn" id="@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidAutonomousDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the autonomous-database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutonomousDatabaseBackupArn` <a name="isValidAutonomousDatabaseBackupArn" id="@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseBackupArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidAutonomousDatabaseBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the autonomous-database-backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidAutonomousDatabaseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudAutonomousVmClusterArn` <a name="isValidCloudAutonomousVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudAutonomousVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidCloudAutonomousVmClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cloud-autonomous-vm-cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudAutonomousVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudExadataInfrastructureArn` <a name="isValidCloudExadataInfrastructureArn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudExadataInfrastructureArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidCloudExadataInfrastructureArn(arn: string)
```

Validates whether a string is a valid ARN for the cloud-exadata-infrastructure resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudExadataInfrastructureArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudVmClusterArn` <a name="isValidCloudVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidCloudVmClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cloud-vm-cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidCloudVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDBNodeArn` <a name="isValidDBNodeArn" id="@cdk_utils/iam.odb.OdbResources.isValidDBNodeArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidDBNodeArn(arn: string)
```

Validates whether a string is a valid ARN for the db-node resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidDBNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExadbVmClusterArn` <a name="isValidExadbVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.isValidExadbVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidExadbVmClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the exadb-vm-cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidExadbVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExascaleDBStorageVaultArn` <a name="isValidExascaleDBStorageVaultArn" id="@cdk_utils/iam.odb.OdbResources.isValidExascaleDBStorageVaultArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidExascaleDBStorageVaultArn(arn: string)
```

Validates whether a string is a valid ARN for the exascale-db-storage-vault resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidExascaleDBStorageVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOdbNetworkArn` <a name="isValidOdbNetworkArn" id="@cdk_utils/iam.odb.OdbResources.isValidOdbNetworkArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidOdbNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the odb-network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidOdbNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOdbPeeringConnectionArn` <a name="isValidOdbPeeringConnectionArn" id="@cdk_utils/iam.odb.OdbResources.isValidOdbPeeringConnectionArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.isValidOdbPeeringConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the odb-peering-connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.isValidOdbPeeringConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `odbNetwork` <a name="odbNetwork" id="@cdk_utils/iam.odb.OdbResources.odbNetwork"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.odbNetwork(props: OdbOdbNetworkArnProps)
```

Builds an ARN for the odb-network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.odbNetwork.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbOdbNetworkArnProps">OdbOdbNetworkArnProps</a>

---

##### `odbPeeringConnection` <a name="odbPeeringConnection" id="@cdk_utils/iam.odb.OdbResources.odbPeeringConnection"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.odbPeeringConnection(props: OdbOdbPeeringConnectionArnProps)
```

Builds an ARN for the odb-peering-connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.odb.OdbResources.odbPeeringConnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.odb.OdbOdbPeeringConnectionArnProps">OdbOdbPeeringConnectionArnProps</a>

---

##### `parseAutonomousDatabaseArn` <a name="parseAutonomousDatabaseArn" id="@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseAutonomousDatabaseArn(arn: string)
```

Parses a autonomous-database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutonomousDatabaseBackupArn` <a name="parseAutonomousDatabaseBackupArn" id="@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseBackupArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseAutonomousDatabaseBackupArn(arn: string)
```

Parses a autonomous-database-backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseAutonomousDatabaseBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudAutonomousVmClusterArn` <a name="parseCloudAutonomousVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.parseCloudAutonomousVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseCloudAutonomousVmClusterArn(arn: string)
```

Parses a cloud-autonomous-vm-cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseCloudAutonomousVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudExadataInfrastructureArn` <a name="parseCloudExadataInfrastructureArn" id="@cdk_utils/iam.odb.OdbResources.parseCloudExadataInfrastructureArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseCloudExadataInfrastructureArn(arn: string)
```

Parses a cloud-exadata-infrastructure ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseCloudExadataInfrastructureArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudVmClusterArn` <a name="parseCloudVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.parseCloudVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseCloudVmClusterArn(arn: string)
```

Parses a cloud-vm-cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseCloudVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBNodeArn` <a name="parseDBNodeArn" id="@cdk_utils/iam.odb.OdbResources.parseDBNodeArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseDBNodeArn(arn: string)
```

Parses a db-node ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseDBNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExadbVmClusterArn` <a name="parseExadbVmClusterArn" id="@cdk_utils/iam.odb.OdbResources.parseExadbVmClusterArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseExadbVmClusterArn(arn: string)
```

Parses a exadb-vm-cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseExadbVmClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExascaleDBStorageVaultArn` <a name="parseExascaleDBStorageVaultArn" id="@cdk_utils/iam.odb.OdbResources.parseExascaleDBStorageVaultArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseExascaleDBStorageVaultArn(arn: string)
```

Parses a exascale-db-storage-vault ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseExascaleDBStorageVaultArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOdbNetworkArn` <a name="parseOdbNetworkArn" id="@cdk_utils/iam.odb.OdbResources.parseOdbNetworkArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseOdbNetworkArn(arn: string)
```

Parses a odb-network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseOdbNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOdbPeeringConnectionArn` <a name="parseOdbPeeringConnectionArn" id="@cdk_utils/iam.odb.OdbResources.parseOdbPeeringConnectionArn"></a>

```typescript
import { odb } from '@cdk_utils/iam'

odb.OdbResources.parseOdbPeeringConnectionArn(arn: string)
```

Parses a odb-peering-connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.odb.OdbResources.parseOdbPeeringConnectionArn.parameter.arn"></a>

- *Type:* string

---




