# `rds` Submodule <a name="`rds` Submodule" id="@cdk_utils/iam.rds"></a>


## Structs <a name="Structs" id="Structs"></a>

### RDSAutoBackupArnComponents <a name="RDSAutoBackupArnComponents" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents"></a>

Parsed components of a auto-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSAutoBackupArnComponents: rds.RDSAutoBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.dbInstanceAutomatedBackupId">dbInstanceAutomatedBackupId</a></code> | <code>string</code> | The DbInstanceAutomatedBackupId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbInstanceAutomatedBackupId`<sup>Required</sup> <a name="dbInstanceAutomatedBackupId" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.dbInstanceAutomatedBackupId"></a>

```typescript
public readonly dbInstanceAutomatedBackupId: string;
```

- *Type:* string

The DbInstanceAutomatedBackupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSAutoBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSAutoBackupArnProps <a name="RDSAutoBackupArnProps" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps"></a>

Properties for building a auto-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSAutoBackupArnProps: rds.RDSAutoBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.dbInstanceAutomatedBackupId">dbInstanceAutomatedBackupId</a></code> | <code>string</code> | The DbInstanceAutomatedBackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbInstanceAutomatedBackupId`<sup>Required</sup> <a name="dbInstanceAutomatedBackupId" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.dbInstanceAutomatedBackupId"></a>

```typescript
public readonly dbInstanceAutomatedBackupId: string;
```

- *Type:* string

The DbInstanceAutomatedBackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSAutoBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSCevArnComponents <a name="RDSCevArnComponents" id="@cdk_utils/iam.rds.RDSCevArnComponents"></a>

Parsed components of a cev ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSCevArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSCevArnComponents: rds.RDSCevArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.customDBEngineVersionId">customDBEngineVersionId</a></code> | <code>string</code> | The CustomDbEngineVersionId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.engine">engine</a></code> | <code>string</code> | The Engine component. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.engineVersion">engineVersion</a></code> | <code>string</code> | The EngineVersion component. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `customDBEngineVersionId`<sup>Required</sup> <a name="customDBEngineVersionId" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.customDBEngineVersionId"></a>

```typescript
public readonly customDBEngineVersionId: string;
```

- *Type:* string

The CustomDbEngineVersionId component.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The Engine component.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The EngineVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSCevArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSCevArnProps <a name="RDSCevArnProps" id="@cdk_utils/iam.rds.RDSCevArnProps"></a>

Properties for building a cev ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSCevArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSCevArnProps: rds.RDSCevArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.customDBEngineVersionId">customDBEngineVersionId</a></code> | <code>string</code> | The CustomDbEngineVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.engine">engine</a></code> | <code>string</code> | The Engine component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.engineVersion">engineVersion</a></code> | <code>string</code> | The EngineVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSCevArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `customDBEngineVersionId`<sup>Required</sup> <a name="customDBEngineVersionId" id="@cdk_utils/iam.rds.RDSCevArnProps.property.customDBEngineVersionId"></a>

```typescript
public readonly customDBEngineVersionId: string;
```

- *Type:* string

The CustomDbEngineVersionId component of the ARN.

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdk_utils/iam.rds.RDSCevArnProps.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The Engine component of the ARN.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdk_utils/iam.rds.RDSCevArnProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The EngineVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSCevArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSCevArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSCevArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSClusterArnComponents <a name="RDSClusterArnComponents" id="@cdk_utils/iam.rds.RDSClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterArnComponents: rds.RDSClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnComponents.property.dbClusterInstanceName">dbClusterInstanceName</a></code> | <code>string</code> | The DbClusterInstanceName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbClusterInstanceName`<sup>Required</sup> <a name="dbClusterInstanceName" id="@cdk_utils/iam.rds.RDSClusterArnComponents.property.dbClusterInstanceName"></a>

```typescript
public readonly dbClusterInstanceName: string;
```

- *Type:* string

The DbClusterInstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSClusterArnProps <a name="RDSClusterArnProps" id="@cdk_utils/iam.rds.RDSClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterArnProps: rds.RDSClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnProps.property.dbClusterInstanceName">dbClusterInstanceName</a></code> | <code>string</code> | The DbClusterInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbClusterInstanceName`<sup>Required</sup> <a name="dbClusterInstanceName" id="@cdk_utils/iam.rds.RDSClusterArnProps.property.dbClusterInstanceName"></a>

```typescript
public readonly dbClusterInstanceName: string;
```

- *Type:* string

The DbClusterInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSClusterAutoBackupArnComponents <a name="RDSClusterAutoBackupArnComponents" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents"></a>

Parsed components of a cluster-auto-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterAutoBackupArnComponents: rds.RDSClusterAutoBackupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.dbClusterAutomatedBackupId">dbClusterAutomatedBackupId</a></code> | <code>string</code> | The DbClusterAutomatedBackupId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbClusterAutomatedBackupId`<sup>Required</sup> <a name="dbClusterAutomatedBackupId" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.dbClusterAutomatedBackupId"></a>

```typescript
public readonly dbClusterAutomatedBackupId: string;
```

- *Type:* string

The DbClusterAutomatedBackupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSClusterAutoBackupArnProps <a name="RDSClusterAutoBackupArnProps" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps"></a>

Properties for building a cluster-auto-backup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterAutoBackupArnProps: rds.RDSClusterAutoBackupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.dbClusterAutomatedBackupId">dbClusterAutomatedBackupId</a></code> | <code>string</code> | The DbClusterAutomatedBackupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbClusterAutomatedBackupId`<sup>Required</sup> <a name="dbClusterAutomatedBackupId" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.dbClusterAutomatedBackupId"></a>

```typescript
public readonly dbClusterAutomatedBackupId: string;
```

- *Type:* string

The DbClusterAutomatedBackupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSClusterEndpointArnComponents <a name="RDSClusterEndpointArnComponents" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents"></a>

Parsed components of a cluster-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterEndpointArnComponents: rds.RDSClusterEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.dbClusterEndpoint">dbClusterEndpoint</a></code> | <code>string</code> | The DbClusterEndpoint component. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbClusterEndpoint`<sup>Required</sup> <a name="dbClusterEndpoint" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.dbClusterEndpoint"></a>

```typescript
public readonly dbClusterEndpoint: string;
```

- *Type:* string

The DbClusterEndpoint component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSClusterEndpointArnProps <a name="RDSClusterEndpointArnProps" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps"></a>

Properties for building a cluster-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterEndpointArnProps: rds.RDSClusterEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.dbClusterEndpoint">dbClusterEndpoint</a></code> | <code>string</code> | The DbClusterEndpoint component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbClusterEndpoint`<sup>Required</sup> <a name="dbClusterEndpoint" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.dbClusterEndpoint"></a>

```typescript
public readonly dbClusterEndpoint: string;
```

- *Type:* string

The DbClusterEndpoint component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSClusterPgArnComponents <a name="RDSClusterPgArnComponents" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents"></a>

Parsed components of a cluster-pg ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterPgArnComponents: rds.RDSClusterPgArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>string</code> | The ClusterParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.clusterParameterGroupName"></a>

```typescript
public readonly clusterParameterGroupName: string;
```

- *Type:* string

The ClusterParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterPgArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSClusterPgArnProps <a name="RDSClusterPgArnProps" id="@cdk_utils/iam.rds.RDSClusterPgArnProps"></a>

Properties for building a cluster-pg ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterPgArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterPgArnProps: rds.RDSClusterPgArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnProps.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>string</code> | The ClusterParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterPgArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdk_utils/iam.rds.RDSClusterPgArnProps.property.clusterParameterGroupName"></a>

```typescript
public readonly clusterParameterGroupName: string;
```

- *Type:* string

The ClusterParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterPgArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterPgArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterPgArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSClusterSnapshotArnComponents <a name="RDSClusterSnapshotArnComponents" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents"></a>

Parsed components of a cluster-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterSnapshotArnComponents: rds.RDSClusterSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.clusterSnapshotName">clusterSnapshotName</a></code> | <code>string</code> | The ClusterSnapshotName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterSnapshotName`<sup>Required</sup> <a name="clusterSnapshotName" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.clusterSnapshotName"></a>

```typescript
public readonly clusterSnapshotName: string;
```

- *Type:* string

The ClusterSnapshotName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSClusterSnapshotArnProps <a name="RDSClusterSnapshotArnProps" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps"></a>

Properties for building a cluster-snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSClusterSnapshotArnProps: rds.RDSClusterSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.clusterSnapshotName">clusterSnapshotName</a></code> | <code>string</code> | The ClusterSnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterSnapshotName`<sup>Required</sup> <a name="clusterSnapshotName" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.clusterSnapshotName"></a>

```typescript
public readonly clusterSnapshotName: string;
```

- *Type:* string

The ClusterSnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSClusterSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSDBArnComponents <a name="RDSDBArnComponents" id="@cdk_utils/iam.rds.RDSDBArnComponents"></a>

Parsed components of a db ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSDBArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSDBArnComponents: rds.RDSDBArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnComponents.property.dbInstanceName">dbInstanceName</a></code> | <code>string</code> | The DbInstanceName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSDBArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbInstanceName`<sup>Required</sup> <a name="dbInstanceName" id="@cdk_utils/iam.rds.RDSDBArnComponents.property.dbInstanceName"></a>

```typescript
public readonly dbInstanceName: string;
```

- *Type:* string

The DbInstanceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSDBArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSDBArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSDBArnProps <a name="RDSDBArnProps" id="@cdk_utils/iam.rds.RDSDBArnProps"></a>

Properties for building a db ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSDBArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSDBArnProps: rds.RDSDBArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnProps.property.dbInstanceName">dbInstanceName</a></code> | <code>string</code> | The DbInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSDBArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbInstanceName`<sup>Required</sup> <a name="dbInstanceName" id="@cdk_utils/iam.rds.RDSDBArnProps.property.dbInstanceName"></a>

```typescript
public readonly dbInstanceName: string;
```

- *Type:* string

The DbInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSDBArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSDBArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSDBArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSDeploymentArnComponents <a name="RDSDeploymentArnComponents" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSDeploymentArnComponents: rds.RDSDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.blueGreenDeploymentIdentifier">blueGreenDeploymentIdentifier</a></code> | <code>string</code> | The BlueGreenDeploymentIdentifier component. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `blueGreenDeploymentIdentifier`<sup>Required</sup> <a name="blueGreenDeploymentIdentifier" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.blueGreenDeploymentIdentifier"></a>

```typescript
public readonly blueGreenDeploymentIdentifier: string;
```

- *Type:* string

The BlueGreenDeploymentIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSDeploymentArnProps <a name="RDSDeploymentArnProps" id="@cdk_utils/iam.rds.RDSDeploymentArnProps"></a>

Properties for building a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSDeploymentArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSDeploymentArnProps: rds.RDSDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnProps.property.blueGreenDeploymentIdentifier">blueGreenDeploymentIdentifier</a></code> | <code>string</code> | The BlueGreenDeploymentIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `blueGreenDeploymentIdentifier`<sup>Required</sup> <a name="blueGreenDeploymentIdentifier" id="@cdk_utils/iam.rds.RDSDeploymentArnProps.property.blueGreenDeploymentIdentifier"></a>

```typescript
public readonly blueGreenDeploymentIdentifier: string;
```

- *Type:* string

The BlueGreenDeploymentIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSEsArnComponents <a name="RDSEsArnComponents" id="@cdk_utils/iam.rds.RDSEsArnComponents"></a>

Parsed components of a es ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSEsArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSEsArnComponents: rds.RDSEsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnComponents.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | The SubscriptionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSEsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSEsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSEsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdk_utils/iam.rds.RDSEsArnComponents.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

The SubscriptionName component.

---

### RDSEsArnProps <a name="RDSEsArnProps" id="@cdk_utils/iam.rds.RDSEsArnProps"></a>

Properties for building a es ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSEsArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSEsArnProps: rds.RDSEsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnProps.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | The SubscriptionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSEsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="@cdk_utils/iam.rds.RDSEsArnProps.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

The SubscriptionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSEsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSEsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSEsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSGlobalClusterArnComponents <a name="RDSGlobalClusterArnComponents" id="@cdk_utils/iam.rds.RDSGlobalClusterArnComponents"></a>

Parsed components of a global-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSGlobalClusterArnComponents: rds.RDSGlobalClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.globalCluster">globalCluster</a></code> | <code>string</code> | The GlobalCluster component. |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalCluster`<sup>Required</sup> <a name="globalCluster" id="@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.globalCluster"></a>

```typescript
public readonly globalCluster: string;
```

- *Type:* string

The GlobalCluster component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSGlobalClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### RDSGlobalClusterArnProps <a name="RDSGlobalClusterArnProps" id="@cdk_utils/iam.rds.RDSGlobalClusterArnProps"></a>

Properties for building a global-cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSGlobalClusterArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSGlobalClusterArnProps: rds.RDSGlobalClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.globalCluster">globalCluster</a></code> | <code>string</code> | The GlobalCluster component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalCluster`<sup>Required</sup> <a name="globalCluster" id="@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.globalCluster"></a>

```typescript
public readonly globalCluster: string;
```

- *Type:* string

The GlobalCluster component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSGlobalClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### RDSIntegrationArnComponents <a name="RDSIntegrationArnComponents" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents"></a>

Parsed components of a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSIntegrationArnComponents: rds.RDSIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.integrationIdentifier">integrationIdentifier</a></code> | <code>string</code> | The IntegrationIdentifier component. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationIdentifier`<sup>Required</sup> <a name="integrationIdentifier" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.integrationIdentifier"></a>

```typescript
public readonly integrationIdentifier: string;
```

- *Type:* string

The IntegrationIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSIntegrationArnProps <a name="RDSIntegrationArnProps" id="@cdk_utils/iam.rds.RDSIntegrationArnProps"></a>

Properties for building a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSIntegrationArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSIntegrationArnProps: rds.RDSIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnProps.property.integrationIdentifier">integrationIdentifier</a></code> | <code>string</code> | The IntegrationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationIdentifier`<sup>Required</sup> <a name="integrationIdentifier" id="@cdk_utils/iam.rds.RDSIntegrationArnProps.property.integrationIdentifier"></a>

```typescript
public readonly integrationIdentifier: string;
```

- *Type:* string

The IntegrationIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSOgArnComponents <a name="RDSOgArnComponents" id="@cdk_utils/iam.rds.RDSOgArnComponents"></a>

Parsed components of a og ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSOgArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSOgArnComponents: rds.RDSOgArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnComponents.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | The OptionGroupName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSOgArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdk_utils/iam.rds.RDSOgArnComponents.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

The OptionGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSOgArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSOgArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSOgArnProps <a name="RDSOgArnProps" id="@cdk_utils/iam.rds.RDSOgArnProps"></a>

Properties for building a og ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSOgArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSOgArnProps: rds.RDSOgArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnProps.property.optionGroupName">optionGroupName</a></code> | <code>string</code> | The OptionGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSOgArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdk_utils/iam.rds.RDSOgArnProps.property.optionGroupName"></a>

```typescript
public readonly optionGroupName: string;
```

- *Type:* string

The OptionGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSOgArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSOgArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSOgArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSPgArnComponents <a name="RDSPgArnComponents" id="@cdk_utils/iam.rds.RDSPgArnComponents"></a>

Parsed components of a pg ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSPgArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSPgArnComponents: rds.RDSPgArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnComponents.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSPgArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.rds.RDSPgArnComponents.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSPgArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSPgArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSPgArnProps <a name="RDSPgArnProps" id="@cdk_utils/iam.rds.RDSPgArnProps"></a>

Properties for building a pg ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSPgArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSPgArnProps: rds.RDSPgArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnProps.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSPgArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.rds.RDSPgArnProps.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSPgArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSPgArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSPgArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSProxyArnComponents <a name="RDSProxyArnComponents" id="@cdk_utils/iam.rds.RDSProxyArnComponents"></a>

Parsed components of a proxy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSProxyArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSProxyArnComponents: rds.RDSProxyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnComponents.property.dbProxyId">dbProxyId</a></code> | <code>string</code> | The DbProxyId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSProxyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbProxyId`<sup>Required</sup> <a name="dbProxyId" id="@cdk_utils/iam.rds.RDSProxyArnComponents.property.dbProxyId"></a>

```typescript
public readonly dbProxyId: string;
```

- *Type:* string

The DbProxyId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSProxyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSProxyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSProxyArnProps <a name="RDSProxyArnProps" id="@cdk_utils/iam.rds.RDSProxyArnProps"></a>

Properties for building a proxy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSProxyArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSProxyArnProps: rds.RDSProxyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnProps.property.dbProxyId">dbProxyId</a></code> | <code>string</code> | The DbProxyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbProxyId`<sup>Required</sup> <a name="dbProxyId" id="@cdk_utils/iam.rds.RDSProxyArnProps.property.dbProxyId"></a>

```typescript
public readonly dbProxyId: string;
```

- *Type:* string

The DbProxyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSProxyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSProxyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSProxyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSProxyEndpointArnComponents <a name="RDSProxyEndpointArnComponents" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents"></a>

Parsed components of a proxy-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSProxyEndpointArnComponents: rds.RDSProxyEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.dbProxyEndpointId">dbProxyEndpointId</a></code> | <code>string</code> | The DbProxyEndpointId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbProxyEndpointId`<sup>Required</sup> <a name="dbProxyEndpointId" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.dbProxyEndpointId"></a>

```typescript
public readonly dbProxyEndpointId: string;
```

- *Type:* string

The DbProxyEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSProxyEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSProxyEndpointArnProps <a name="RDSProxyEndpointArnProps" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps"></a>

Properties for building a proxy-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSProxyEndpointArnProps: rds.RDSProxyEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.dbProxyEndpointId">dbProxyEndpointId</a></code> | <code>string</code> | The DbProxyEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbProxyEndpointId`<sup>Required</sup> <a name="dbProxyEndpointId" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.dbProxyEndpointId"></a>

```typescript
public readonly dbProxyEndpointId: string;
```

- *Type:* string

The DbProxyEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSProxyEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSRiArnComponents <a name="RDSRiArnComponents" id="@cdk_utils/iam.rds.RDSRiArnComponents"></a>

Parsed components of a ri ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSRiArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSRiArnComponents: rds.RDSRiArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnComponents.property.reservedDBInstanceName">reservedDBInstanceName</a></code> | <code>string</code> | The ReservedDbInstanceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSRiArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSRiArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSRiArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reservedDBInstanceName`<sup>Required</sup> <a name="reservedDBInstanceName" id="@cdk_utils/iam.rds.RDSRiArnComponents.property.reservedDBInstanceName"></a>

```typescript
public readonly reservedDBInstanceName: string;
```

- *Type:* string

The ReservedDbInstanceName component.

---

### RDSRiArnProps <a name="RDSRiArnProps" id="@cdk_utils/iam.rds.RDSRiArnProps"></a>

Properties for building a ri ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSRiArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSRiArnProps: rds.RDSRiArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnProps.property.reservedDBInstanceName">reservedDBInstanceName</a></code> | <code>string</code> | The ReservedDbInstanceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSRiArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reservedDBInstanceName`<sup>Required</sup> <a name="reservedDBInstanceName" id="@cdk_utils/iam.rds.RDSRiArnProps.property.reservedDBInstanceName"></a>

```typescript
public readonly reservedDBInstanceName: string;
```

- *Type:* string

The ReservedDbInstanceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSRiArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSRiArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSRiArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSSecgrpArnComponents <a name="RDSSecgrpArnComponents" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents"></a>

Parsed components of a secgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSecgrpArnComponents: rds.RDSSecgrpArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.rds.RDSSecgrpArnComponents.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component.

---

### RDSSecgrpArnProps <a name="RDSSecgrpArnProps" id="@cdk_utils/iam.rds.RDSSecgrpArnProps"></a>

Properties for building a secgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSecgrpArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSecgrpArnProps: rds.RDSSecgrpArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSecgrpArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.rds.RDSSecgrpArnProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSecgrpArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSecgrpArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSecgrpArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSShardgrpArnComponents <a name="RDSShardgrpArnComponents" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents"></a>

Parsed components of a shardgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSShardgrpArnComponents: rds.RDSShardgrpArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.dbShardGroupResourceId">dbShardGroupResourceId</a></code> | <code>string</code> | The DbShardGroupResourceId component. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dbShardGroupResourceId`<sup>Required</sup> <a name="dbShardGroupResourceId" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.dbShardGroupResourceId"></a>

```typescript
public readonly dbShardGroupResourceId: string;
```

- *Type:* string

The DbShardGroupResourceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSShardgrpArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RDSShardgrpArnProps <a name="RDSShardgrpArnProps" id="@cdk_utils/iam.rds.RDSShardgrpArnProps"></a>

Properties for building a shardgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSShardgrpArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSShardgrpArnProps: rds.RDSShardgrpArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnProps.property.dbShardGroupResourceId">dbShardGroupResourceId</a></code> | <code>string</code> | The DbShardGroupResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSShardgrpArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dbShardGroupResourceId`<sup>Required</sup> <a name="dbShardGroupResourceId" id="@cdk_utils/iam.rds.RDSShardgrpArnProps.property.dbShardGroupResourceId"></a>

```typescript
public readonly dbShardGroupResourceId: string;
```

- *Type:* string

The DbShardGroupResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSShardgrpArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSShardgrpArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSShardgrpArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSSnapshotArnComponents <a name="RDSSnapshotArnComponents" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSnapshotArnComponents: rds.RDSSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.rds.RDSSnapshotArnComponents.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component.

---

### RDSSnapshotArnProps <a name="RDSSnapshotArnProps" id="@cdk_utils/iam.rds.RDSSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSnapshotArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSnapshotArnProps: rds.RDSSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnProps.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.rds.RDSSnapshotArnProps.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSSnapshotTenantDatabaseArnComponents <a name="RDSSnapshotTenantDatabaseArnComponents" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents"></a>

Parsed components of a snapshot-tenant-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSnapshotTenantDatabaseArnComponents: rds.RDSSnapshotTenantDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.tenantResourceId">tenantResourceId</a></code> | <code>string</code> | The TenantResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component.

---

##### `tenantResourceId`<sup>Required</sup> <a name="tenantResourceId" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnComponents.property.tenantResourceId"></a>

```typescript
public readonly tenantResourceId: string;
```

- *Type:* string

The TenantResourceId component.

---

### RDSSnapshotTenantDatabaseArnProps <a name="RDSSnapshotTenantDatabaseArnProps" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps"></a>

Properties for building a snapshot-tenant-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSnapshotTenantDatabaseArnProps: rds.RDSSnapshotTenantDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.tenantResourceId">tenantResourceId</a></code> | <code>string</code> | The TenantResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component of the ARN.

---

##### `tenantResourceId`<sup>Required</sup> <a name="tenantResourceId" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.tenantResourceId"></a>

```typescript
public readonly tenantResourceId: string;
```

- *Type:* string

The TenantResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSSubgrpArnComponents <a name="RDSSubgrpArnComponents" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents"></a>

Parsed components of a subgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSubgrpArnComponents: rds.RDSSubgrpArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.rds.RDSSubgrpArnComponents.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component.

---

### RDSSubgrpArnProps <a name="RDSSubgrpArnProps" id="@cdk_utils/iam.rds.RDSSubgrpArnProps"></a>

Properties for building a subgrp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSSubgrpArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSSubgrpArnProps: rds.RDSSubgrpArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSSubgrpArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.rds.RDSSubgrpArnProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSSubgrpArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSSubgrpArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSSubgrpArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSTargetGroupArnComponents <a name="RDSTargetGroupArnComponents" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents"></a>

Parsed components of a target-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSTargetGroupArnComponents: rds.RDSTargetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.rds.RDSTargetGroupArnComponents.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component.

---

### RDSTargetGroupArnProps <a name="RDSTargetGroupArnProps" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps"></a>

Properties for building a target-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSTargetGroupArnProps: rds.RDSTargetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSTargetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RDSTenantDatabaseArnComponents <a name="RDSTenantDatabaseArnComponents" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents"></a>

Parsed components of a tenant-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSTenantDatabaseArnComponents: rds.RDSTenantDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.tenantResourceId">tenantResourceId</a></code> | <code>string</code> | The TenantResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tenantResourceId`<sup>Required</sup> <a name="tenantResourceId" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnComponents.property.tenantResourceId"></a>

```typescript
public readonly tenantResourceId: string;
```

- *Type:* string

The TenantResourceId component.

---

### RDSTenantDatabaseArnProps <a name="RDSTenantDatabaseArnProps" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps"></a>

Properties for building a tenant-database ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

const rDSTenantDatabaseArnProps: rds.RDSTenantDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.tenantResourceId">tenantResourceId</a></code> | <code>string</code> | The TenantResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tenantResourceId`<sup>Required</sup> <a name="tenantResourceId" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.tenantResourceId"></a>

```typescript
public readonly tenantResourceId: string;
```

- *Type:* string

The TenantResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rds.RDSTenantDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RDSActions <a name="RDSActions" id="@cdk_utils/iam.rds.RDSActions"></a>

IAM action constants for the rds service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds.RDSActions.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

new rds.RDSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AddRoleToDBCluster">AddRoleToDBCluster</a></code> | <code>string</code> | [Write] rds:AddRoleToDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AddRoleToDBInstance">AddRoleToDBInstance</a></code> | <code>string</code> | [Write] rds:AddRoleToDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AddSourceIdentifierToSubscription">AddSourceIdentifierToSubscription</a></code> | <code>string</code> | [Write] rds:AddSourceIdentifierToSubscription. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] rds:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string</code> | [Write] rds:ApplyPendingMaintenanceAction. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.AuthorizeDBSecurityGroupIngress">AuthorizeDBSecurityGroupIngress</a></code> | <code>string</code> | [PermissionManagement] rds:AuthorizeDBSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.BacktrackDBCluster">BacktrackDBCluster</a></code> | <code>string</code> | [Write] rds:BacktrackDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CancelExportTask">CancelExportTask</a></code> | <code>string</code> | [Write] rds:CancelExportTask. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyCustomDBEngineVersion">CopyCustomDBEngineVersion</a></code> | <code>string</code> | [Write] rds:CopyCustomDBEngineVersion. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyDBClusterParameterGroup">CopyDBClusterParameterGroup</a></code> | <code>string</code> | [Write] rds:CopyDBClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyDBClusterSnapshot">CopyDBClusterSnapshot</a></code> | <code>string</code> | [Write] rds:CopyDBClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyDBParameterGroup">CopyDBParameterGroup</a></code> | <code>string</code> | [Write] rds:CopyDBParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyDBSnapshot">CopyDBSnapshot</a></code> | <code>string</code> | [Write] rds:CopyDBSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CopyOptionGroup">CopyOptionGroup</a></code> | <code>string</code> | [Write] rds:CopyOptionGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateBlueGreenDeployment">CreateBlueGreenDeployment</a></code> | <code>string</code> | [Write] rds:CreateBlueGreenDeployment. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateCustomDBEngineVersion">CreateCustomDBEngineVersion</a></code> | <code>string</code> | [Write] rds:CreateCustomDBEngineVersion. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBCluster">CreateDBCluster</a></code> | <code>string</code> | [Write] rds:CreateDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterEndpoint">CreateDBClusterEndpoint</a></code> | <code>string</code> | [Write] rds:CreateDBClusterEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterParameterGroup">CreateDBClusterParameterGroup</a></code> | <code>string</code> | [Write] rds:CreateDBClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterSnapshot">CreateDBClusterSnapshot</a></code> | <code>string</code> | [Write] rds:CreateDBClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBInstance">CreateDBInstance</a></code> | <code>string</code> | [Write] rds:CreateDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBInstanceReadReplica">CreateDBInstanceReadReplica</a></code> | <code>string</code> | [Write] rds:CreateDBInstanceReadReplica. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBParameterGroup">CreateDBParameterGroup</a></code> | <code>string</code> | [Write] rds:CreateDBParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBProxy">CreateDBProxy</a></code> | <code>string</code> | [Write] rds:CreateDBProxy. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBProxyEndpoint">CreateDBProxyEndpoint</a></code> | <code>string</code> | [Write] rds:CreateDBProxyEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBSecurityGroup">CreateDBSecurityGroup</a></code> | <code>string</code> | [Write] rds:CreateDBSecurityGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBShardGroup">CreateDBShardGroup</a></code> | <code>string</code> | [Write] rds:CreateDBShardGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBSnapshot">CreateDBSnapshot</a></code> | <code>string</code> | [Write] rds:CreateDBSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateDBSubnetGroup">CreateDBSubnetGroup</a></code> | <code>string</code> | [Write] rds:CreateDBSubnetGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string</code> | [Write] rds:CreateEventSubscription. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateGlobalCluster">CreateGlobalCluster</a></code> | <code>string</code> | [Write] rds:CreateGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] rds:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateOptionGroup">CreateOptionGroup</a></code> | <code>string</code> | [Write] rds:CreateOptionGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CreateTenantDatabase">CreateTenantDatabase</a></code> | <code>string</code> | [Write] rds:CreateTenantDatabase. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.CrossRegionCommunication">CrossRegionCommunication</a></code> | <code>string</code> | [Write] rds:CrossRegionCommunication. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteBlueGreenDeployment">DeleteBlueGreenDeployment</a></code> | <code>string</code> | [Write] rds:DeleteBlueGreenDeployment. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteCustomDBEngineVersion">DeleteCustomDBEngineVersion</a></code> | <code>string</code> | [Write] rds:DeleteCustomDBEngineVersion. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBCluster">DeleteDBCluster</a></code> | <code>string</code> | [Write] rds:DeleteDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterAutomatedBackup">DeleteDBClusterAutomatedBackup</a></code> | <code>string</code> | [Write] rds:DeleteDBClusterAutomatedBackup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterEndpoint">DeleteDBClusterEndpoint</a></code> | <code>string</code> | [Write] rds:DeleteDBClusterEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterParameterGroup">DeleteDBClusterParameterGroup</a></code> | <code>string</code> | [Write] rds:DeleteDBClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterSnapshot">DeleteDBClusterSnapshot</a></code> | <code>string</code> | [Write] rds:DeleteDBClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBInstance">DeleteDBInstance</a></code> | <code>string</code> | [Write] rds:DeleteDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBInstanceAutomatedBackup">DeleteDBInstanceAutomatedBackup</a></code> | <code>string</code> | [Write] rds:DeleteDBInstanceAutomatedBackup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBParameterGroup">DeleteDBParameterGroup</a></code> | <code>string</code> | [Write] rds:DeleteDBParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBProxy">DeleteDBProxy</a></code> | <code>string</code> | [Write] rds:DeleteDBProxy. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBProxyEndpoint">DeleteDBProxyEndpoint</a></code> | <code>string</code> | [Write] rds:DeleteDBProxyEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBSecurityGroup">DeleteDBSecurityGroup</a></code> | <code>string</code> | [Write] rds:DeleteDBSecurityGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBShardGroup">DeleteDBShardGroup</a></code> | <code>string</code> | [Write] rds:DeleteDBShardGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBSnapshot">DeleteDBSnapshot</a></code> | <code>string</code> | [Write] rds:DeleteDBSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteDBSubnetGroup">DeleteDBSubnetGroup</a></code> | <code>string</code> | [Write] rds:DeleteDBSubnetGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string</code> | [Write] rds:DeleteEventSubscription. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteGlobalCluster">DeleteGlobalCluster</a></code> | <code>string</code> | [Write] rds:DeleteGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] rds:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteOptionGroup">DeleteOptionGroup</a></code> | <code>string</code> | [Write] rds:DeleteOptionGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeleteTenantDatabase">DeleteTenantDatabase</a></code> | <code>string</code> | [Write] rds:DeleteTenantDatabase. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DeregisterDBProxyTargets">DeregisterDBProxyTargets</a></code> | <code>string</code> | [Write] rds:DeregisterDBProxyTargets. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [List] rds:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeBlueGreenDeployments">DescribeBlueGreenDeployments</a></code> | <code>string</code> | [List] rds:DescribeBlueGreenDeployments. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeCertificates">DescribeCertificates</a></code> | <code>string</code> | [List] rds:DescribeCertificates. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterAutomatedBackups">DescribeDBClusterAutomatedBackups</a></code> | <code>string</code> | [List] rds:DescribeDBClusterAutomatedBackups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterBacktracks">DescribeDBClusterBacktracks</a></code> | <code>string</code> | [List] rds:DescribeDBClusterBacktracks. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterEndpoints">DescribeDBClusterEndpoints</a></code> | <code>string</code> | [List] rds:DescribeDBClusterEndpoints. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterParameterGroups">DescribeDBClusterParameterGroups</a></code> | <code>string</code> | [List] rds:DescribeDBClusterParameterGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterParameters">DescribeDBClusterParameters</a></code> | <code>string</code> | [List] rds:DescribeDBClusterParameters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusters">DescribeDBClusters</a></code> | <code>string</code> | [List] rds:DescribeDBClusters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterSnapshotAttributes">DescribeDBClusterSnapshotAttributes</a></code> | <code>string</code> | [List] rds:DescribeDBClusterSnapshotAttributes. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterSnapshots">DescribeDBClusterSnapshots</a></code> | <code>string</code> | [List] rds:DescribeDBClusterSnapshots. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBEngineVersions">DescribeDBEngineVersions</a></code> | <code>string</code> | [List] rds:DescribeDBEngineVersions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBInstanceAutomatedBackups">DescribeDBInstanceAutomatedBackups</a></code> | <code>string</code> | [List] rds:DescribeDBInstanceAutomatedBackups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBInstances">DescribeDBInstances</a></code> | <code>string</code> | [List] rds:DescribeDBInstances. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBLogFiles">DescribeDBLogFiles</a></code> | <code>string</code> | [List] rds:DescribeDBLogFiles. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBMajorEngineVersions">DescribeDBMajorEngineVersions</a></code> | <code>string</code> | [List] rds:DescribeDBMajorEngineVersions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBParameterGroups">DescribeDBParameterGroups</a></code> | <code>string</code> | [List] rds:DescribeDBParameterGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBParameters">DescribeDBParameters</a></code> | <code>string</code> | [List] rds:DescribeDBParameters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxies">DescribeDBProxies</a></code> | <code>string</code> | [List] rds:DescribeDBProxies. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyEndpoints">DescribeDBProxyEndpoints</a></code> | <code>string</code> | [List] rds:DescribeDBProxyEndpoints. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyTargetGroups">DescribeDBProxyTargetGroups</a></code> | <code>string</code> | [List] rds:DescribeDBProxyTargetGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyTargets">DescribeDBProxyTargets</a></code> | <code>string</code> | [List] rds:DescribeDBProxyTargets. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBRecommendations">DescribeDBRecommendations</a></code> | <code>string</code> | [List] rds:DescribeDBRecommendations. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBSecurityGroups">DescribeDBSecurityGroups</a></code> | <code>string</code> | [List] rds:DescribeDBSecurityGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBShardGroups">DescribeDBShardGroups</a></code> | <code>string</code> | [List] rds:DescribeDBShardGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshotAttributes">DescribeDBSnapshotAttributes</a></code> | <code>string</code> | [List] rds:DescribeDBSnapshotAttributes. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshots">DescribeDBSnapshots</a></code> | <code>string</code> | [List] rds:DescribeDBSnapshots. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshotTenantDatabases">DescribeDBSnapshotTenantDatabases</a></code> | <code>string</code> | [List] rds:DescribeDBSnapshotTenantDatabases. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeDBSubnetGroups">DescribeDBSubnetGroups</a></code> | <code>string</code> | [List] rds:DescribeDBSubnetGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeEngineDefaultClusterParameters">DescribeEngineDefaultClusterParameters</a></code> | <code>string</code> | [List] rds:DescribeEngineDefaultClusterParameters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeEngineDefaultParameters">DescribeEngineDefaultParameters</a></code> | <code>string</code> | [List] rds:DescribeEngineDefaultParameters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string</code> | [List] rds:DescribeEventCategories. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [List] rds:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string</code> | [List] rds:DescribeEventSubscriptions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string</code> | [List] rds:DescribeExportTasks. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeGlobalClusters">DescribeGlobalClusters</a></code> | <code>string</code> | [List] rds:DescribeGlobalClusters. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string</code> | [List] rds:DescribeIntegrations. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeOptionGroupOptions">DescribeOptionGroupOptions</a></code> | <code>string</code> | [List] rds:DescribeOptionGroupOptions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeOptionGroups">DescribeOptionGroups</a></code> | <code>string</code> | [List] rds:DescribeOptionGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeOrderableDBInstanceOptions">DescribeOrderableDBInstanceOptions</a></code> | <code>string</code> | [List] rds:DescribeOrderableDBInstanceOptions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribePendingMaintenanceActions">DescribePendingMaintenanceActions</a></code> | <code>string</code> | [List] rds:DescribePendingMaintenanceActions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeRecommendationGroups">DescribeRecommendationGroups</a></code> | <code>string</code> | [Read] rds:DescribeRecommendationGroups. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeRecommendations">DescribeRecommendations</a></code> | <code>string</code> | [Read] rds:DescribeRecommendations. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeReservedDBInstances">DescribeReservedDBInstances</a></code> | <code>string</code> | [List] rds:DescribeReservedDBInstances. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeReservedDBInstancesOfferings">DescribeReservedDBInstancesOfferings</a></code> | <code>string</code> | [List] rds:DescribeReservedDBInstancesOfferings. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeSourceRegions">DescribeSourceRegions</a></code> | <code>string</code> | [List] rds:DescribeSourceRegions. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeTenantDatabases">DescribeTenantDatabases</a></code> | <code>string</code> | [List] rds:DescribeTenantDatabases. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DescribeValidDBInstanceModifications">DescribeValidDBInstanceModifications</a></code> | <code>string</code> | [List] rds:DescribeValidDBInstanceModifications. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DisableHttpEndpoint">DisableHttpEndpoint</a></code> | <code>string</code> | [Write] rds:DisableHttpEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DownloadCompleteDBLogFile">DownloadCompleteDBLogFile</a></code> | <code>string</code> | [Read] rds:DownloadCompleteDBLogFile. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.DownloadDBLogFilePortion">DownloadDBLogFilePortion</a></code> | <code>string</code> | [Read] rds:DownloadDBLogFilePortion. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.EnableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>string</code> | [Write] rds:EnableHttpEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.FailoverDBCluster">FailoverDBCluster</a></code> | <code>string</code> | [Write] rds:FailoverDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.FailoverGlobalCluster">FailoverGlobalCluster</a></code> | <code>string</code> | [Write] rds:FailoverGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] rds:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyActivityStream">ModifyActivityStream</a></code> | <code>string</code> | [Write] rds:ModifyActivityStream. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyCertificates">ModifyCertificates</a></code> | <code>string</code> | [Write] rds:ModifyCertificates. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyCurrentDBClusterCapacity">ModifyCurrentDBClusterCapacity</a></code> | <code>string</code> | [Write] rds:ModifyCurrentDBClusterCapacity. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyCustomDBEngineVersion">ModifyCustomDBEngineVersion</a></code> | <code>string</code> | [Write] rds:ModifyCustomDBEngineVersion. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBCluster">ModifyDBCluster</a></code> | <code>string</code> | [Write] rds:ModifyDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterEndpoint">ModifyDBClusterEndpoint</a></code> | <code>string</code> | [Write] rds:ModifyDBClusterEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterParameterGroup">ModifyDBClusterParameterGroup</a></code> | <code>string</code> | [Write] rds:ModifyDBClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterSnapshotAttribute">ModifyDBClusterSnapshotAttribute</a></code> | <code>string</code> | [Write] rds:ModifyDBClusterSnapshotAttribute. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBInstance">ModifyDBInstance</a></code> | <code>string</code> | [Write] rds:ModifyDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBParameterGroup">ModifyDBParameterGroup</a></code> | <code>string</code> | [Write] rds:ModifyDBParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxy">ModifyDBProxy</a></code> | <code>string</code> | [Write] rds:ModifyDBProxy. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxyEndpoint">ModifyDBProxyEndpoint</a></code> | <code>string</code> | [Write] rds:ModifyDBProxyEndpoint. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxyTargetGroup">ModifyDBProxyTargetGroup</a></code> | <code>string</code> | [Write] rds:ModifyDBProxyTargetGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBRecommendation">ModifyDBRecommendation</a></code> | <code>string</code> | [Write] rds:ModifyDBRecommendation. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBShardGroup">ModifyDBShardGroup</a></code> | <code>string</code> | [Write] rds:ModifyDBShardGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBSnapshot">ModifyDBSnapshot</a></code> | <code>string</code> | [Write] rds:ModifyDBSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBSnapshotAttribute">ModifyDBSnapshotAttribute</a></code> | <code>string</code> | [Write] rds:ModifyDBSnapshotAttribute. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyDBSubnetGroup">ModifyDBSubnetGroup</a></code> | <code>string</code> | [Write] rds:ModifyDBSubnetGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string</code> | [Write] rds:ModifyEventSubscription. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyGlobalCluster">ModifyGlobalCluster</a></code> | <code>string</code> | [Write] rds:ModifyGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string</code> | [Write] rds:ModifyIntegration. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyOptionGroup">ModifyOptionGroup</a></code> | <code>string</code> | [Write] rds:ModifyOptionGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyRecommendation">ModifyRecommendation</a></code> | <code>string</code> | [Write] rds:ModifyRecommendation. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ModifyTenantDatabase">ModifyTenantDatabase</a></code> | <code>string</code> | [Write] rds:ModifyTenantDatabase. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.PromoteReadReplica">PromoteReadReplica</a></code> | <code>string</code> | [Write] rds:PromoteReadReplica. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.PromoteReadReplicaDBCluster">PromoteReadReplicaDBCluster</a></code> | <code>string</code> | [Write] rds:PromoteReadReplicaDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.PurchaseReservedDBInstancesOffering">PurchaseReservedDBInstancesOffering</a></code> | <code>string</code> | [Write] rds:PurchaseReservedDBInstancesOffering. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RebootDBCluster">RebootDBCluster</a></code> | <code>string</code> | [Write] rds:RebootDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RebootDBInstance">RebootDBInstance</a></code> | <code>string</code> | [Write] rds:RebootDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RebootDBShardGroup">RebootDBShardGroup</a></code> | <code>string</code> | [Write] rds:RebootDBShardGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RegisterDBProxyTargets">RegisterDBProxyTargets</a></code> | <code>string</code> | [Write] rds:RegisterDBProxyTargets. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RemoveFromGlobalCluster">RemoveFromGlobalCluster</a></code> | <code>string</code> | [Write] rds:RemoveFromGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RemoveRoleFromDBCluster">RemoveRoleFromDBCluster</a></code> | <code>string</code> | [Write] rds:RemoveRoleFromDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RemoveRoleFromDBInstance">RemoveRoleFromDBInstance</a></code> | <code>string</code> | [Write] rds:RemoveRoleFromDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RemoveSourceIdentifierFromSubscription">RemoveSourceIdentifierFromSubscription</a></code> | <code>string</code> | [Write] rds:RemoveSourceIdentifierFromSubscription. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] rds:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ResetDBClusterParameterGroup">ResetDBClusterParameterGroup</a></code> | <code>string</code> | [Write] rds:ResetDBClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.ResetDBParameterGroup">ResetDBParameterGroup</a></code> | <code>string</code> | [Write] rds:ResetDBParameterGroup. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterFromS3">RestoreDBClusterFromS3</a></code> | <code>string</code> | [Write] rds:RestoreDBClusterFromS3. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterFromSnapshot">RestoreDBClusterFromSnapshot</a></code> | <code>string</code> | [Write] rds:RestoreDBClusterFromSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterToPointInTime">RestoreDBClusterToPointInTime</a></code> | <code>string</code> | [Write] rds:RestoreDBClusterToPointInTime. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceFromDBSnapshot">RestoreDBInstanceFromDBSnapshot</a></code> | <code>string</code> | [Write] rds:RestoreDBInstanceFromDBSnapshot. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceFromS3">RestoreDBInstanceFromS3</a></code> | <code>string</code> | [Write] rds:RestoreDBInstanceFromS3. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceToPointInTime">RestoreDBInstanceToPointInTime</a></code> | <code>string</code> | [Write] rds:RestoreDBInstanceToPointInTime. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.RevokeDBSecurityGroupIngress">RevokeDBSecurityGroupIngress</a></code> | <code>string</code> | [Write] rds:RevokeDBSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StartActivityStream">StartActivityStream</a></code> | <code>string</code> | [Write] rds:StartActivityStream. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StartDBCluster">StartDBCluster</a></code> | <code>string</code> | [Write] rds:StartDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StartDBInstance">StartDBInstance</a></code> | <code>string</code> | [Write] rds:StartDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StartDBInstanceAutomatedBackupsReplication">StartDBInstanceAutomatedBackupsReplication</a></code> | <code>string</code> | [Write] rds:StartDBInstanceAutomatedBackupsReplication. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StartExportTask">StartExportTask</a></code> | <code>string</code> | [Write] rds:StartExportTask. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StopActivityStream">StopActivityStream</a></code> | <code>string</code> | [Write] rds:StopActivityStream. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StopDBCluster">StopDBCluster</a></code> | <code>string</code> | [Write] rds:StopDBCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StopDBInstance">StopDBInstance</a></code> | <code>string</code> | [Write] rds:StopDBInstance. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.StopDBInstanceAutomatedBackupsReplication">StopDBInstanceAutomatedBackupsReplication</a></code> | <code>string</code> | [Write] rds:StopDBInstanceAutomatedBackupsReplication. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.SwitchoverBlueGreenDeployment">SwitchoverBlueGreenDeployment</a></code> | <code>string</code> | [Write] rds:SwitchoverBlueGreenDeployment. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.SwitchoverGlobalCluster">SwitchoverGlobalCluster</a></code> | <code>string</code> | [Write] rds:SwitchoverGlobalCluster. |
| <code><a href="#@cdk_utils/iam.rds.RDSActions.property.SwitchoverReadReplica">SwitchoverReadReplica</a></code> | <code>string</code> | [Write] rds:SwitchoverReadReplica. |

---

##### `AddRoleToDBCluster`<sup>Required</sup> <a name="AddRoleToDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.AddRoleToDBCluster"></a>

```typescript
public readonly AddRoleToDBCluster: string;
```

- *Type:* string

[Write] rds:AddRoleToDBCluster.

---

##### `AddRoleToDBInstance`<sup>Required</sup> <a name="AddRoleToDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.AddRoleToDBInstance"></a>

```typescript
public readonly AddRoleToDBInstance: string;
```

- *Type:* string

[Write] rds:AddRoleToDBInstance.

---

##### `AddSourceIdentifierToSubscription`<sup>Required</sup> <a name="AddSourceIdentifierToSubscription" id="@cdk_utils/iam.rds.RDSActions.property.AddSourceIdentifierToSubscription"></a>

```typescript
public readonly AddSourceIdentifierToSubscription: string;
```

- *Type:* string

[Write] rds:AddSourceIdentifierToSubscription.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.rds.RDSActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] rds:AddTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rds.RDSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rds.RDSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rds.RDSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rds.RDSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rds.RDSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.rds.RDSActions.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string;
```

- *Type:* string

[Write] rds:ApplyPendingMaintenanceAction.

---

##### `AuthorizeDBSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeDBSecurityGroupIngress" id="@cdk_utils/iam.rds.RDSActions.property.AuthorizeDBSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeDBSecurityGroupIngress: string;
```

- *Type:* string

[PermissionManagement] rds:AuthorizeDBSecurityGroupIngress.

---

##### `BacktrackDBCluster`<sup>Required</sup> <a name="BacktrackDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.BacktrackDBCluster"></a>

```typescript
public readonly BacktrackDBCluster: string;
```

- *Type:* string

[Write] rds:BacktrackDBCluster.

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.rds.RDSActions.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string;
```

- *Type:* string

[Write] rds:CancelExportTask.

---

##### `CopyCustomDBEngineVersion`<sup>Required</sup> <a name="CopyCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSActions.property.CopyCustomDBEngineVersion"></a>

```typescript
public readonly CopyCustomDBEngineVersion: string;
```

- *Type:* string

[Write] rds:CopyCustomDBEngineVersion.

---

##### `CopyDBClusterParameterGroup`<sup>Required</sup> <a name="CopyDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.CopyDBClusterParameterGroup"></a>

```typescript
public readonly CopyDBClusterParameterGroup: string;
```

- *Type:* string

[Write] rds:CopyDBClusterParameterGroup.

---

##### `CopyDBClusterSnapshot`<sup>Required</sup> <a name="CopyDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.CopyDBClusterSnapshot"></a>

```typescript
public readonly CopyDBClusterSnapshot: string;
```

- *Type:* string

[Write] rds:CopyDBClusterSnapshot.

---

##### `CopyDBParameterGroup`<sup>Required</sup> <a name="CopyDBParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.CopyDBParameterGroup"></a>

```typescript
public readonly CopyDBParameterGroup: string;
```

- *Type:* string

[Write] rds:CopyDBParameterGroup.

---

##### `CopyDBSnapshot`<sup>Required</sup> <a name="CopyDBSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.CopyDBSnapshot"></a>

```typescript
public readonly CopyDBSnapshot: string;
```

- *Type:* string

[Write] rds:CopyDBSnapshot.

---

##### `CopyOptionGroup`<sup>Required</sup> <a name="CopyOptionGroup" id="@cdk_utils/iam.rds.RDSActions.property.CopyOptionGroup"></a>

```typescript
public readonly CopyOptionGroup: string;
```

- *Type:* string

[Write] rds:CopyOptionGroup.

---

##### `CreateBlueGreenDeployment`<sup>Required</sup> <a name="CreateBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSActions.property.CreateBlueGreenDeployment"></a>

```typescript
public readonly CreateBlueGreenDeployment: string;
```

- *Type:* string

[Write] rds:CreateBlueGreenDeployment.

---

##### `CreateCustomDBEngineVersion`<sup>Required</sup> <a name="CreateCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSActions.property.CreateCustomDBEngineVersion"></a>

```typescript
public readonly CreateCustomDBEngineVersion: string;
```

- *Type:* string

[Write] rds:CreateCustomDBEngineVersion.

---

##### `CreateDBCluster`<sup>Required</sup> <a name="CreateDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBCluster"></a>

```typescript
public readonly CreateDBCluster: string;
```

- *Type:* string

[Write] rds:CreateDBCluster.

---

##### `CreateDBClusterEndpoint`<sup>Required</sup> <a name="CreateDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterEndpoint"></a>

```typescript
public readonly CreateDBClusterEndpoint: string;
```

- *Type:* string

[Write] rds:CreateDBClusterEndpoint.

---

##### `CreateDBClusterParameterGroup`<sup>Required</sup> <a name="CreateDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterParameterGroup"></a>

```typescript
public readonly CreateDBClusterParameterGroup: string;
```

- *Type:* string

[Write] rds:CreateDBClusterParameterGroup.

---

##### `CreateDBClusterSnapshot`<sup>Required</sup> <a name="CreateDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBClusterSnapshot"></a>

```typescript
public readonly CreateDBClusterSnapshot: string;
```

- *Type:* string

[Write] rds:CreateDBClusterSnapshot.

---

##### `CreateDBInstance`<sup>Required</sup> <a name="CreateDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBInstance"></a>

```typescript
public readonly CreateDBInstance: string;
```

- *Type:* string

[Write] rds:CreateDBInstance.

---

##### `CreateDBInstanceReadReplica`<sup>Required</sup> <a name="CreateDBInstanceReadReplica" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBInstanceReadReplica"></a>

```typescript
public readonly CreateDBInstanceReadReplica: string;
```

- *Type:* string

[Write] rds:CreateDBInstanceReadReplica.

---

##### `CreateDBParameterGroup`<sup>Required</sup> <a name="CreateDBParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBParameterGroup"></a>

```typescript
public readonly CreateDBParameterGroup: string;
```

- *Type:* string

[Write] rds:CreateDBParameterGroup.

---

##### `CreateDBProxy`<sup>Required</sup> <a name="CreateDBProxy" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBProxy"></a>

```typescript
public readonly CreateDBProxy: string;
```

- *Type:* string

[Write] rds:CreateDBProxy.

---

##### `CreateDBProxyEndpoint`<sup>Required</sup> <a name="CreateDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBProxyEndpoint"></a>

```typescript
public readonly CreateDBProxyEndpoint: string;
```

- *Type:* string

[Write] rds:CreateDBProxyEndpoint.

---

##### `CreateDBSecurityGroup`<sup>Required</sup> <a name="CreateDBSecurityGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBSecurityGroup"></a>

```typescript
public readonly CreateDBSecurityGroup: string;
```

- *Type:* string

[Write] rds:CreateDBSecurityGroup.

---

##### `CreateDBShardGroup`<sup>Required</sup> <a name="CreateDBShardGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBShardGroup"></a>

```typescript
public readonly CreateDBShardGroup: string;
```

- *Type:* string

[Write] rds:CreateDBShardGroup.

---

##### `CreateDBSnapshot`<sup>Required</sup> <a name="CreateDBSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBSnapshot"></a>

```typescript
public readonly CreateDBSnapshot: string;
```

- *Type:* string

[Write] rds:CreateDBSnapshot.

---

##### `CreateDBSubnetGroup`<sup>Required</sup> <a name="CreateDBSubnetGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateDBSubnetGroup"></a>

```typescript
public readonly CreateDBSubnetGroup: string;
```

- *Type:* string

[Write] rds:CreateDBSubnetGroup.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.rds.RDSActions.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string;
```

- *Type:* string

[Write] rds:CreateEventSubscription.

---

##### `CreateGlobalCluster`<sup>Required</sup> <a name="CreateGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.CreateGlobalCluster"></a>

```typescript
public readonly CreateGlobalCluster: string;
```

- *Type:* string

[Write] rds:CreateGlobalCluster.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.rds.RDSActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] rds:CreateIntegration.

---

##### `CreateOptionGroup`<sup>Required</sup> <a name="CreateOptionGroup" id="@cdk_utils/iam.rds.RDSActions.property.CreateOptionGroup"></a>

```typescript
public readonly CreateOptionGroup: string;
```

- *Type:* string

[Write] rds:CreateOptionGroup.

---

##### `CreateTenantDatabase`<sup>Required</sup> <a name="CreateTenantDatabase" id="@cdk_utils/iam.rds.RDSActions.property.CreateTenantDatabase"></a>

```typescript
public readonly CreateTenantDatabase: string;
```

- *Type:* string

[Write] rds:CreateTenantDatabase.

---

##### `CrossRegionCommunication`<sup>Required</sup> <a name="CrossRegionCommunication" id="@cdk_utils/iam.rds.RDSActions.property.CrossRegionCommunication"></a>

```typescript
public readonly CrossRegionCommunication: string;
```

- *Type:* string

[Write] rds:CrossRegionCommunication.

---

##### `DeleteBlueGreenDeployment`<sup>Required</sup> <a name="DeleteBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSActions.property.DeleteBlueGreenDeployment"></a>

```typescript
public readonly DeleteBlueGreenDeployment: string;
```

- *Type:* string

[Write] rds:DeleteBlueGreenDeployment.

---

##### `DeleteCustomDBEngineVersion`<sup>Required</sup> <a name="DeleteCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSActions.property.DeleteCustomDBEngineVersion"></a>

```typescript
public readonly DeleteCustomDBEngineVersion: string;
```

- *Type:* string

[Write] rds:DeleteCustomDBEngineVersion.

---

##### `DeleteDBCluster`<sup>Required</sup> <a name="DeleteDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBCluster"></a>

```typescript
public readonly DeleteDBCluster: string;
```

- *Type:* string

[Write] rds:DeleteDBCluster.

---

##### `DeleteDBClusterAutomatedBackup`<sup>Required</sup> <a name="DeleteDBClusterAutomatedBackup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterAutomatedBackup"></a>

```typescript
public readonly DeleteDBClusterAutomatedBackup: string;
```

- *Type:* string

[Write] rds:DeleteDBClusterAutomatedBackup.

---

##### `DeleteDBClusterEndpoint`<sup>Required</sup> <a name="DeleteDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterEndpoint"></a>

```typescript
public readonly DeleteDBClusterEndpoint: string;
```

- *Type:* string

[Write] rds:DeleteDBClusterEndpoint.

---

##### `DeleteDBClusterParameterGroup`<sup>Required</sup> <a name="DeleteDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterParameterGroup"></a>

```typescript
public readonly DeleteDBClusterParameterGroup: string;
```

- *Type:* string

[Write] rds:DeleteDBClusterParameterGroup.

---

##### `DeleteDBClusterSnapshot`<sup>Required</sup> <a name="DeleteDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBClusterSnapshot"></a>

```typescript
public readonly DeleteDBClusterSnapshot: string;
```

- *Type:* string

[Write] rds:DeleteDBClusterSnapshot.

---

##### `DeleteDBInstance`<sup>Required</sup> <a name="DeleteDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBInstance"></a>

```typescript
public readonly DeleteDBInstance: string;
```

- *Type:* string

[Write] rds:DeleteDBInstance.

---

##### `DeleteDBInstanceAutomatedBackup`<sup>Required</sup> <a name="DeleteDBInstanceAutomatedBackup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBInstanceAutomatedBackup"></a>

```typescript
public readonly DeleteDBInstanceAutomatedBackup: string;
```

- *Type:* string

[Write] rds:DeleteDBInstanceAutomatedBackup.

---

##### `DeleteDBParameterGroup`<sup>Required</sup> <a name="DeleteDBParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBParameterGroup"></a>

```typescript
public readonly DeleteDBParameterGroup: string;
```

- *Type:* string

[Write] rds:DeleteDBParameterGroup.

---

##### `DeleteDBProxy`<sup>Required</sup> <a name="DeleteDBProxy" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBProxy"></a>

```typescript
public readonly DeleteDBProxy: string;
```

- *Type:* string

[Write] rds:DeleteDBProxy.

---

##### `DeleteDBProxyEndpoint`<sup>Required</sup> <a name="DeleteDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBProxyEndpoint"></a>

```typescript
public readonly DeleteDBProxyEndpoint: string;
```

- *Type:* string

[Write] rds:DeleteDBProxyEndpoint.

---

##### `DeleteDBSecurityGroup`<sup>Required</sup> <a name="DeleteDBSecurityGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBSecurityGroup"></a>

```typescript
public readonly DeleteDBSecurityGroup: string;
```

- *Type:* string

[Write] rds:DeleteDBSecurityGroup.

---

##### `DeleteDBShardGroup`<sup>Required</sup> <a name="DeleteDBShardGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBShardGroup"></a>

```typescript
public readonly DeleteDBShardGroup: string;
```

- *Type:* string

[Write] rds:DeleteDBShardGroup.

---

##### `DeleteDBSnapshot`<sup>Required</sup> <a name="DeleteDBSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBSnapshot"></a>

```typescript
public readonly DeleteDBSnapshot: string;
```

- *Type:* string

[Write] rds:DeleteDBSnapshot.

---

##### `DeleteDBSubnetGroup`<sup>Required</sup> <a name="DeleteDBSubnetGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteDBSubnetGroup"></a>

```typescript
public readonly DeleteDBSubnetGroup: string;
```

- *Type:* string

[Write] rds:DeleteDBSubnetGroup.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.rds.RDSActions.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string;
```

- *Type:* string

[Write] rds:DeleteEventSubscription.

---

##### `DeleteGlobalCluster`<sup>Required</sup> <a name="DeleteGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.DeleteGlobalCluster"></a>

```typescript
public readonly DeleteGlobalCluster: string;
```

- *Type:* string

[Write] rds:DeleteGlobalCluster.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.rds.RDSActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] rds:DeleteIntegration.

---

##### `DeleteOptionGroup`<sup>Required</sup> <a name="DeleteOptionGroup" id="@cdk_utils/iam.rds.RDSActions.property.DeleteOptionGroup"></a>

```typescript
public readonly DeleteOptionGroup: string;
```

- *Type:* string

[Write] rds:DeleteOptionGroup.

---

##### `DeleteTenantDatabase`<sup>Required</sup> <a name="DeleteTenantDatabase" id="@cdk_utils/iam.rds.RDSActions.property.DeleteTenantDatabase"></a>

```typescript
public readonly DeleteTenantDatabase: string;
```

- *Type:* string

[Write] rds:DeleteTenantDatabase.

---

##### `DeregisterDBProxyTargets`<sup>Required</sup> <a name="DeregisterDBProxyTargets" id="@cdk_utils/iam.rds.RDSActions.property.DeregisterDBProxyTargets"></a>

```typescript
public readonly DeregisterDBProxyTargets: string;
```

- *Type:* string

[Write] rds:DeregisterDBProxyTargets.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.rds.RDSActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[List] rds:DescribeAccountAttributes.

---

##### `DescribeBlueGreenDeployments`<sup>Required</sup> <a name="DescribeBlueGreenDeployments" id="@cdk_utils/iam.rds.RDSActions.property.DescribeBlueGreenDeployments"></a>

```typescript
public readonly DescribeBlueGreenDeployments: string;
```

- *Type:* string

[List] rds:DescribeBlueGreenDeployments.

---

##### `DescribeCertificates`<sup>Required</sup> <a name="DescribeCertificates" id="@cdk_utils/iam.rds.RDSActions.property.DescribeCertificates"></a>

```typescript
public readonly DescribeCertificates: string;
```

- *Type:* string

[List] rds:DescribeCertificates.

---

##### `DescribeDBClusterAutomatedBackups`<sup>Required</sup> <a name="DescribeDBClusterAutomatedBackups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterAutomatedBackups"></a>

```typescript
public readonly DescribeDBClusterAutomatedBackups: string;
```

- *Type:* string

[List] rds:DescribeDBClusterAutomatedBackups.

---

##### `DescribeDBClusterBacktracks`<sup>Required</sup> <a name="DescribeDBClusterBacktracks" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterBacktracks"></a>

```typescript
public readonly DescribeDBClusterBacktracks: string;
```

- *Type:* string

[List] rds:DescribeDBClusterBacktracks.

---

##### `DescribeDBClusterEndpoints`<sup>Required</sup> <a name="DescribeDBClusterEndpoints" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterEndpoints"></a>

```typescript
public readonly DescribeDBClusterEndpoints: string;
```

- *Type:* string

[List] rds:DescribeDBClusterEndpoints.

---

##### `DescribeDBClusterParameterGroups`<sup>Required</sup> <a name="DescribeDBClusterParameterGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterParameterGroups"></a>

```typescript
public readonly DescribeDBClusterParameterGroups: string;
```

- *Type:* string

[List] rds:DescribeDBClusterParameterGroups.

---

##### `DescribeDBClusterParameters`<sup>Required</sup> <a name="DescribeDBClusterParameters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterParameters"></a>

```typescript
public readonly DescribeDBClusterParameters: string;
```

- *Type:* string

[List] rds:DescribeDBClusterParameters.

---

##### `DescribeDBClusters`<sup>Required</sup> <a name="DescribeDBClusters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusters"></a>

```typescript
public readonly DescribeDBClusters: string;
```

- *Type:* string

[List] rds:DescribeDBClusters.

---

##### `DescribeDBClusterSnapshotAttributes`<sup>Required</sup> <a name="DescribeDBClusterSnapshotAttributes" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterSnapshotAttributes"></a>

```typescript
public readonly DescribeDBClusterSnapshotAttributes: string;
```

- *Type:* string

[List] rds:DescribeDBClusterSnapshotAttributes.

---

##### `DescribeDBClusterSnapshots`<sup>Required</sup> <a name="DescribeDBClusterSnapshots" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBClusterSnapshots"></a>

```typescript
public readonly DescribeDBClusterSnapshots: string;
```

- *Type:* string

[List] rds:DescribeDBClusterSnapshots.

---

##### `DescribeDBEngineVersions`<sup>Required</sup> <a name="DescribeDBEngineVersions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBEngineVersions"></a>

```typescript
public readonly DescribeDBEngineVersions: string;
```

- *Type:* string

[List] rds:DescribeDBEngineVersions.

---

##### `DescribeDBInstanceAutomatedBackups`<sup>Required</sup> <a name="DescribeDBInstanceAutomatedBackups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBInstanceAutomatedBackups"></a>

```typescript
public readonly DescribeDBInstanceAutomatedBackups: string;
```

- *Type:* string

[List] rds:DescribeDBInstanceAutomatedBackups.

---

##### `DescribeDBInstances`<sup>Required</sup> <a name="DescribeDBInstances" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBInstances"></a>

```typescript
public readonly DescribeDBInstances: string;
```

- *Type:* string

[List] rds:DescribeDBInstances.

---

##### `DescribeDBLogFiles`<sup>Required</sup> <a name="DescribeDBLogFiles" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBLogFiles"></a>

```typescript
public readonly DescribeDBLogFiles: string;
```

- *Type:* string

[List] rds:DescribeDBLogFiles.

---

##### `DescribeDBMajorEngineVersions`<sup>Required</sup> <a name="DescribeDBMajorEngineVersions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBMajorEngineVersions"></a>

```typescript
public readonly DescribeDBMajorEngineVersions: string;
```

- *Type:* string

[List] rds:DescribeDBMajorEngineVersions.

---

##### `DescribeDBParameterGroups`<sup>Required</sup> <a name="DescribeDBParameterGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBParameterGroups"></a>

```typescript
public readonly DescribeDBParameterGroups: string;
```

- *Type:* string

[List] rds:DescribeDBParameterGroups.

---

##### `DescribeDBParameters`<sup>Required</sup> <a name="DescribeDBParameters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBParameters"></a>

```typescript
public readonly DescribeDBParameters: string;
```

- *Type:* string

[List] rds:DescribeDBParameters.

---

##### `DescribeDBProxies`<sup>Required</sup> <a name="DescribeDBProxies" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxies"></a>

```typescript
public readonly DescribeDBProxies: string;
```

- *Type:* string

[List] rds:DescribeDBProxies.

---

##### `DescribeDBProxyEndpoints`<sup>Required</sup> <a name="DescribeDBProxyEndpoints" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyEndpoints"></a>

```typescript
public readonly DescribeDBProxyEndpoints: string;
```

- *Type:* string

[List] rds:DescribeDBProxyEndpoints.

---

##### `DescribeDBProxyTargetGroups`<sup>Required</sup> <a name="DescribeDBProxyTargetGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyTargetGroups"></a>

```typescript
public readonly DescribeDBProxyTargetGroups: string;
```

- *Type:* string

[List] rds:DescribeDBProxyTargetGroups.

---

##### `DescribeDBProxyTargets`<sup>Required</sup> <a name="DescribeDBProxyTargets" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBProxyTargets"></a>

```typescript
public readonly DescribeDBProxyTargets: string;
```

- *Type:* string

[List] rds:DescribeDBProxyTargets.

---

##### `DescribeDBRecommendations`<sup>Required</sup> <a name="DescribeDBRecommendations" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBRecommendations"></a>

```typescript
public readonly DescribeDBRecommendations: string;
```

- *Type:* string

[List] rds:DescribeDBRecommendations.

---

##### `DescribeDBSecurityGroups`<sup>Required</sup> <a name="DescribeDBSecurityGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBSecurityGroups"></a>

```typescript
public readonly DescribeDBSecurityGroups: string;
```

- *Type:* string

[List] rds:DescribeDBSecurityGroups.

---

##### `DescribeDBShardGroups`<sup>Required</sup> <a name="DescribeDBShardGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBShardGroups"></a>

```typescript
public readonly DescribeDBShardGroups: string;
```

- *Type:* string

[List] rds:DescribeDBShardGroups.

---

##### `DescribeDBSnapshotAttributes`<sup>Required</sup> <a name="DescribeDBSnapshotAttributes" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshotAttributes"></a>

```typescript
public readonly DescribeDBSnapshotAttributes: string;
```

- *Type:* string

[List] rds:DescribeDBSnapshotAttributes.

---

##### `DescribeDBSnapshots`<sup>Required</sup> <a name="DescribeDBSnapshots" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshots"></a>

```typescript
public readonly DescribeDBSnapshots: string;
```

- *Type:* string

[List] rds:DescribeDBSnapshots.

---

##### `DescribeDBSnapshotTenantDatabases`<sup>Required</sup> <a name="DescribeDBSnapshotTenantDatabases" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBSnapshotTenantDatabases"></a>

```typescript
public readonly DescribeDBSnapshotTenantDatabases: string;
```

- *Type:* string

[List] rds:DescribeDBSnapshotTenantDatabases.

---

##### `DescribeDBSubnetGroups`<sup>Required</sup> <a name="DescribeDBSubnetGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeDBSubnetGroups"></a>

```typescript
public readonly DescribeDBSubnetGroups: string;
```

- *Type:* string

[List] rds:DescribeDBSubnetGroups.

---

##### `DescribeEngineDefaultClusterParameters`<sup>Required</sup> <a name="DescribeEngineDefaultClusterParameters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeEngineDefaultClusterParameters"></a>

```typescript
public readonly DescribeEngineDefaultClusterParameters: string;
```

- *Type:* string

[List] rds:DescribeEngineDefaultClusterParameters.

---

##### `DescribeEngineDefaultParameters`<sup>Required</sup> <a name="DescribeEngineDefaultParameters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeEngineDefaultParameters"></a>

```typescript
public readonly DescribeEngineDefaultParameters: string;
```

- *Type:* string

[List] rds:DescribeEngineDefaultParameters.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.rds.RDSActions.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string;
```

- *Type:* string

[List] rds:DescribeEventCategories.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.rds.RDSActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[List] rds:DescribeEvents.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string;
```

- *Type:* string

[List] rds:DescribeEventSubscriptions.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.rds.RDSActions.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string;
```

- *Type:* string

[List] rds:DescribeExportTasks.

---

##### `DescribeGlobalClusters`<sup>Required</sup> <a name="DescribeGlobalClusters" id="@cdk_utils/iam.rds.RDSActions.property.DescribeGlobalClusters"></a>

```typescript
public readonly DescribeGlobalClusters: string;
```

- *Type:* string

[List] rds:DescribeGlobalClusters.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.rds.RDSActions.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string;
```

- *Type:* string

[List] rds:DescribeIntegrations.

---

##### `DescribeOptionGroupOptions`<sup>Required</sup> <a name="DescribeOptionGroupOptions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeOptionGroupOptions"></a>

```typescript
public readonly DescribeOptionGroupOptions: string;
```

- *Type:* string

[List] rds:DescribeOptionGroupOptions.

---

##### `DescribeOptionGroups`<sup>Required</sup> <a name="DescribeOptionGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeOptionGroups"></a>

```typescript
public readonly DescribeOptionGroups: string;
```

- *Type:* string

[List] rds:DescribeOptionGroups.

---

##### `DescribeOrderableDBInstanceOptions`<sup>Required</sup> <a name="DescribeOrderableDBInstanceOptions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeOrderableDBInstanceOptions"></a>

```typescript
public readonly DescribeOrderableDBInstanceOptions: string;
```

- *Type:* string

[List] rds:DescribeOrderableDBInstanceOptions.

---

##### `DescribePendingMaintenanceActions`<sup>Required</sup> <a name="DescribePendingMaintenanceActions" id="@cdk_utils/iam.rds.RDSActions.property.DescribePendingMaintenanceActions"></a>

```typescript
public readonly DescribePendingMaintenanceActions: string;
```

- *Type:* string

[List] rds:DescribePendingMaintenanceActions.

---

##### `DescribeRecommendationGroups`<sup>Required</sup> <a name="DescribeRecommendationGroups" id="@cdk_utils/iam.rds.RDSActions.property.DescribeRecommendationGroups"></a>

```typescript
public readonly DescribeRecommendationGroups: string;
```

- *Type:* string

[Read] rds:DescribeRecommendationGroups.

---

##### `DescribeRecommendations`<sup>Required</sup> <a name="DescribeRecommendations" id="@cdk_utils/iam.rds.RDSActions.property.DescribeRecommendations"></a>

```typescript
public readonly DescribeRecommendations: string;
```

- *Type:* string

[Read] rds:DescribeRecommendations.

---

##### `DescribeReservedDBInstances`<sup>Required</sup> <a name="DescribeReservedDBInstances" id="@cdk_utils/iam.rds.RDSActions.property.DescribeReservedDBInstances"></a>

```typescript
public readonly DescribeReservedDBInstances: string;
```

- *Type:* string

[List] rds:DescribeReservedDBInstances.

---

##### `DescribeReservedDBInstancesOfferings`<sup>Required</sup> <a name="DescribeReservedDBInstancesOfferings" id="@cdk_utils/iam.rds.RDSActions.property.DescribeReservedDBInstancesOfferings"></a>

```typescript
public readonly DescribeReservedDBInstancesOfferings: string;
```

- *Type:* string

[List] rds:DescribeReservedDBInstancesOfferings.

---

##### `DescribeSourceRegions`<sup>Required</sup> <a name="DescribeSourceRegions" id="@cdk_utils/iam.rds.RDSActions.property.DescribeSourceRegions"></a>

```typescript
public readonly DescribeSourceRegions: string;
```

- *Type:* string

[List] rds:DescribeSourceRegions.

---

##### `DescribeTenantDatabases`<sup>Required</sup> <a name="DescribeTenantDatabases" id="@cdk_utils/iam.rds.RDSActions.property.DescribeTenantDatabases"></a>

```typescript
public readonly DescribeTenantDatabases: string;
```

- *Type:* string

[List] rds:DescribeTenantDatabases.

---

##### `DescribeValidDBInstanceModifications`<sup>Required</sup> <a name="DescribeValidDBInstanceModifications" id="@cdk_utils/iam.rds.RDSActions.property.DescribeValidDBInstanceModifications"></a>

```typescript
public readonly DescribeValidDBInstanceModifications: string;
```

- *Type:* string

[List] rds:DescribeValidDBInstanceModifications.

---

##### `DisableHttpEndpoint`<sup>Required</sup> <a name="DisableHttpEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.DisableHttpEndpoint"></a>

```typescript
public readonly DisableHttpEndpoint: string;
```

- *Type:* string

[Write] rds:DisableHttpEndpoint.

---

##### `DownloadCompleteDBLogFile`<sup>Required</sup> <a name="DownloadCompleteDBLogFile" id="@cdk_utils/iam.rds.RDSActions.property.DownloadCompleteDBLogFile"></a>

```typescript
public readonly DownloadCompleteDBLogFile: string;
```

- *Type:* string

[Read] rds:DownloadCompleteDBLogFile.

---

##### `DownloadDBLogFilePortion`<sup>Required</sup> <a name="DownloadDBLogFilePortion" id="@cdk_utils/iam.rds.RDSActions.property.DownloadDBLogFilePortion"></a>

```typescript
public readonly DownloadDBLogFilePortion: string;
```

- *Type:* string

[Read] rds:DownloadDBLogFilePortion.

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.EnableHttpEndpoint"></a>

```typescript
public readonly EnableHttpEndpoint: string;
```

- *Type:* string

[Write] rds:EnableHttpEndpoint.

---

##### `FailoverDBCluster`<sup>Required</sup> <a name="FailoverDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.FailoverDBCluster"></a>

```typescript
public readonly FailoverDBCluster: string;
```

- *Type:* string

[Write] rds:FailoverDBCluster.

---

##### `FailoverGlobalCluster`<sup>Required</sup> <a name="FailoverGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.FailoverGlobalCluster"></a>

```typescript
public readonly FailoverGlobalCluster: string;
```

- *Type:* string

[Write] rds:FailoverGlobalCluster.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rds.RDSActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] rds:ListTagsForResource.

---

##### `ModifyActivityStream`<sup>Required</sup> <a name="ModifyActivityStream" id="@cdk_utils/iam.rds.RDSActions.property.ModifyActivityStream"></a>

```typescript
public readonly ModifyActivityStream: string;
```

- *Type:* string

[Write] rds:ModifyActivityStream.

---

##### `ModifyCertificates`<sup>Required</sup> <a name="ModifyCertificates" id="@cdk_utils/iam.rds.RDSActions.property.ModifyCertificates"></a>

```typescript
public readonly ModifyCertificates: string;
```

- *Type:* string

[Write] rds:ModifyCertificates.

---

##### `ModifyCurrentDBClusterCapacity`<sup>Required</sup> <a name="ModifyCurrentDBClusterCapacity" id="@cdk_utils/iam.rds.RDSActions.property.ModifyCurrentDBClusterCapacity"></a>

```typescript
public readonly ModifyCurrentDBClusterCapacity: string;
```

- *Type:* string

[Write] rds:ModifyCurrentDBClusterCapacity.

---

##### `ModifyCustomDBEngineVersion`<sup>Required</sup> <a name="ModifyCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSActions.property.ModifyCustomDBEngineVersion"></a>

```typescript
public readonly ModifyCustomDBEngineVersion: string;
```

- *Type:* string

[Write] rds:ModifyCustomDBEngineVersion.

---

##### `ModifyDBCluster`<sup>Required</sup> <a name="ModifyDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBCluster"></a>

```typescript
public readonly ModifyDBCluster: string;
```

- *Type:* string

[Write] rds:ModifyDBCluster.

---

##### `ModifyDBClusterEndpoint`<sup>Required</sup> <a name="ModifyDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterEndpoint"></a>

```typescript
public readonly ModifyDBClusterEndpoint: string;
```

- *Type:* string

[Write] rds:ModifyDBClusterEndpoint.

---

##### `ModifyDBClusterParameterGroup`<sup>Required</sup> <a name="ModifyDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterParameterGroup"></a>

```typescript
public readonly ModifyDBClusterParameterGroup: string;
```

- *Type:* string

[Write] rds:ModifyDBClusterParameterGroup.

---

##### `ModifyDBClusterSnapshotAttribute`<sup>Required</sup> <a name="ModifyDBClusterSnapshotAttribute" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBClusterSnapshotAttribute"></a>

```typescript
public readonly ModifyDBClusterSnapshotAttribute: string;
```

- *Type:* string

[Write] rds:ModifyDBClusterSnapshotAttribute.

---

##### `ModifyDBInstance`<sup>Required</sup> <a name="ModifyDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBInstance"></a>

```typescript
public readonly ModifyDBInstance: string;
```

- *Type:* string

[Write] rds:ModifyDBInstance.

---

##### `ModifyDBParameterGroup`<sup>Required</sup> <a name="ModifyDBParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBParameterGroup"></a>

```typescript
public readonly ModifyDBParameterGroup: string;
```

- *Type:* string

[Write] rds:ModifyDBParameterGroup.

---

##### `ModifyDBProxy`<sup>Required</sup> <a name="ModifyDBProxy" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxy"></a>

```typescript
public readonly ModifyDBProxy: string;
```

- *Type:* string

[Write] rds:ModifyDBProxy.

---

##### `ModifyDBProxyEndpoint`<sup>Required</sup> <a name="ModifyDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxyEndpoint"></a>

```typescript
public readonly ModifyDBProxyEndpoint: string;
```

- *Type:* string

[Write] rds:ModifyDBProxyEndpoint.

---

##### `ModifyDBProxyTargetGroup`<sup>Required</sup> <a name="ModifyDBProxyTargetGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBProxyTargetGroup"></a>

```typescript
public readonly ModifyDBProxyTargetGroup: string;
```

- *Type:* string

[Write] rds:ModifyDBProxyTargetGroup.

---

##### `ModifyDBRecommendation`<sup>Required</sup> <a name="ModifyDBRecommendation" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBRecommendation"></a>

```typescript
public readonly ModifyDBRecommendation: string;
```

- *Type:* string

[Write] rds:ModifyDBRecommendation.

---

##### `ModifyDBShardGroup`<sup>Required</sup> <a name="ModifyDBShardGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBShardGroup"></a>

```typescript
public readonly ModifyDBShardGroup: string;
```

- *Type:* string

[Write] rds:ModifyDBShardGroup.

---

##### `ModifyDBSnapshot`<sup>Required</sup> <a name="ModifyDBSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBSnapshot"></a>

```typescript
public readonly ModifyDBSnapshot: string;
```

- *Type:* string

[Write] rds:ModifyDBSnapshot.

---

##### `ModifyDBSnapshotAttribute`<sup>Required</sup> <a name="ModifyDBSnapshotAttribute" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBSnapshotAttribute"></a>

```typescript
public readonly ModifyDBSnapshotAttribute: string;
```

- *Type:* string

[Write] rds:ModifyDBSnapshotAttribute.

---

##### `ModifyDBSubnetGroup`<sup>Required</sup> <a name="ModifyDBSubnetGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyDBSubnetGroup"></a>

```typescript
public readonly ModifyDBSubnetGroup: string;
```

- *Type:* string

[Write] rds:ModifyDBSubnetGroup.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.rds.RDSActions.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string;
```

- *Type:* string

[Write] rds:ModifyEventSubscription.

---

##### `ModifyGlobalCluster`<sup>Required</sup> <a name="ModifyGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.ModifyGlobalCluster"></a>

```typescript
public readonly ModifyGlobalCluster: string;
```

- *Type:* string

[Write] rds:ModifyGlobalCluster.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.rds.RDSActions.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string;
```

- *Type:* string

[Write] rds:ModifyIntegration.

---

##### `ModifyOptionGroup`<sup>Required</sup> <a name="ModifyOptionGroup" id="@cdk_utils/iam.rds.RDSActions.property.ModifyOptionGroup"></a>

```typescript
public readonly ModifyOptionGroup: string;
```

- *Type:* string

[Write] rds:ModifyOptionGroup.

---

##### `ModifyRecommendation`<sup>Required</sup> <a name="ModifyRecommendation" id="@cdk_utils/iam.rds.RDSActions.property.ModifyRecommendation"></a>

```typescript
public readonly ModifyRecommendation: string;
```

- *Type:* string

[Write] rds:ModifyRecommendation.

---

##### `ModifyTenantDatabase`<sup>Required</sup> <a name="ModifyTenantDatabase" id="@cdk_utils/iam.rds.RDSActions.property.ModifyTenantDatabase"></a>

```typescript
public readonly ModifyTenantDatabase: string;
```

- *Type:* string

[Write] rds:ModifyTenantDatabase.

---

##### `PromoteReadReplica`<sup>Required</sup> <a name="PromoteReadReplica" id="@cdk_utils/iam.rds.RDSActions.property.PromoteReadReplica"></a>

```typescript
public readonly PromoteReadReplica: string;
```

- *Type:* string

[Write] rds:PromoteReadReplica.

---

##### `PromoteReadReplicaDBCluster`<sup>Required</sup> <a name="PromoteReadReplicaDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.PromoteReadReplicaDBCluster"></a>

```typescript
public readonly PromoteReadReplicaDBCluster: string;
```

- *Type:* string

[Write] rds:PromoteReadReplicaDBCluster.

---

##### `PurchaseReservedDBInstancesOffering`<sup>Required</sup> <a name="PurchaseReservedDBInstancesOffering" id="@cdk_utils/iam.rds.RDSActions.property.PurchaseReservedDBInstancesOffering"></a>

```typescript
public readonly PurchaseReservedDBInstancesOffering: string;
```

- *Type:* string

[Write] rds:PurchaseReservedDBInstancesOffering.

---

##### `RebootDBCluster`<sup>Required</sup> <a name="RebootDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.RebootDBCluster"></a>

```typescript
public readonly RebootDBCluster: string;
```

- *Type:* string

[Write] rds:RebootDBCluster.

---

##### `RebootDBInstance`<sup>Required</sup> <a name="RebootDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.RebootDBInstance"></a>

```typescript
public readonly RebootDBInstance: string;
```

- *Type:* string

[Write] rds:RebootDBInstance.

---

##### `RebootDBShardGroup`<sup>Required</sup> <a name="RebootDBShardGroup" id="@cdk_utils/iam.rds.RDSActions.property.RebootDBShardGroup"></a>

```typescript
public readonly RebootDBShardGroup: string;
```

- *Type:* string

[Write] rds:RebootDBShardGroup.

---

##### `RegisterDBProxyTargets`<sup>Required</sup> <a name="RegisterDBProxyTargets" id="@cdk_utils/iam.rds.RDSActions.property.RegisterDBProxyTargets"></a>

```typescript
public readonly RegisterDBProxyTargets: string;
```

- *Type:* string

[Write] rds:RegisterDBProxyTargets.

---

##### `RemoveFromGlobalCluster`<sup>Required</sup> <a name="RemoveFromGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.RemoveFromGlobalCluster"></a>

```typescript
public readonly RemoveFromGlobalCluster: string;
```

- *Type:* string

[Write] rds:RemoveFromGlobalCluster.

---

##### `RemoveRoleFromDBCluster`<sup>Required</sup> <a name="RemoveRoleFromDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.RemoveRoleFromDBCluster"></a>

```typescript
public readonly RemoveRoleFromDBCluster: string;
```

- *Type:* string

[Write] rds:RemoveRoleFromDBCluster.

---

##### `RemoveRoleFromDBInstance`<sup>Required</sup> <a name="RemoveRoleFromDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.RemoveRoleFromDBInstance"></a>

```typescript
public readonly RemoveRoleFromDBInstance: string;
```

- *Type:* string

[Write] rds:RemoveRoleFromDBInstance.

---

##### `RemoveSourceIdentifierFromSubscription`<sup>Required</sup> <a name="RemoveSourceIdentifierFromSubscription" id="@cdk_utils/iam.rds.RDSActions.property.RemoveSourceIdentifierFromSubscription"></a>

```typescript
public readonly RemoveSourceIdentifierFromSubscription: string;
```

- *Type:* string

[Write] rds:RemoveSourceIdentifierFromSubscription.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.rds.RDSActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] rds:RemoveTagsFromResource.

---

##### `ResetDBClusterParameterGroup`<sup>Required</sup> <a name="ResetDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.ResetDBClusterParameterGroup"></a>

```typescript
public readonly ResetDBClusterParameterGroup: string;
```

- *Type:* string

[Write] rds:ResetDBClusterParameterGroup.

---

##### `ResetDBParameterGroup`<sup>Required</sup> <a name="ResetDBParameterGroup" id="@cdk_utils/iam.rds.RDSActions.property.ResetDBParameterGroup"></a>

```typescript
public readonly ResetDBParameterGroup: string;
```

- *Type:* string

[Write] rds:ResetDBParameterGroup.

---

##### `RestoreDBClusterFromS3`<sup>Required</sup> <a name="RestoreDBClusterFromS3" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterFromS3"></a>

```typescript
public readonly RestoreDBClusterFromS3: string;
```

- *Type:* string

[Write] rds:RestoreDBClusterFromS3.

---

##### `RestoreDBClusterFromSnapshot`<sup>Required</sup> <a name="RestoreDBClusterFromSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterFromSnapshot"></a>

```typescript
public readonly RestoreDBClusterFromSnapshot: string;
```

- *Type:* string

[Write] rds:RestoreDBClusterFromSnapshot.

---

##### `RestoreDBClusterToPointInTime`<sup>Required</sup> <a name="RestoreDBClusterToPointInTime" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBClusterToPointInTime"></a>

```typescript
public readonly RestoreDBClusterToPointInTime: string;
```

- *Type:* string

[Write] rds:RestoreDBClusterToPointInTime.

---

##### `RestoreDBInstanceFromDBSnapshot`<sup>Required</sup> <a name="RestoreDBInstanceFromDBSnapshot" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceFromDBSnapshot"></a>

```typescript
public readonly RestoreDBInstanceFromDBSnapshot: string;
```

- *Type:* string

[Write] rds:RestoreDBInstanceFromDBSnapshot.

---

##### `RestoreDBInstanceFromS3`<sup>Required</sup> <a name="RestoreDBInstanceFromS3" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceFromS3"></a>

```typescript
public readonly RestoreDBInstanceFromS3: string;
```

- *Type:* string

[Write] rds:RestoreDBInstanceFromS3.

---

##### `RestoreDBInstanceToPointInTime`<sup>Required</sup> <a name="RestoreDBInstanceToPointInTime" id="@cdk_utils/iam.rds.RDSActions.property.RestoreDBInstanceToPointInTime"></a>

```typescript
public readonly RestoreDBInstanceToPointInTime: string;
```

- *Type:* string

[Write] rds:RestoreDBInstanceToPointInTime.

---

##### `RevokeDBSecurityGroupIngress`<sup>Required</sup> <a name="RevokeDBSecurityGroupIngress" id="@cdk_utils/iam.rds.RDSActions.property.RevokeDBSecurityGroupIngress"></a>

```typescript
public readonly RevokeDBSecurityGroupIngress: string;
```

- *Type:* string

[Write] rds:RevokeDBSecurityGroupIngress.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rds.RDSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartActivityStream`<sup>Required</sup> <a name="StartActivityStream" id="@cdk_utils/iam.rds.RDSActions.property.StartActivityStream"></a>

```typescript
public readonly StartActivityStream: string;
```

- *Type:* string

[Write] rds:StartActivityStream.

---

##### `StartDBCluster`<sup>Required</sup> <a name="StartDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.StartDBCluster"></a>

```typescript
public readonly StartDBCluster: string;
```

- *Type:* string

[Write] rds:StartDBCluster.

---

##### `StartDBInstance`<sup>Required</sup> <a name="StartDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.StartDBInstance"></a>

```typescript
public readonly StartDBInstance: string;
```

- *Type:* string

[Write] rds:StartDBInstance.

---

##### `StartDBInstanceAutomatedBackupsReplication`<sup>Required</sup> <a name="StartDBInstanceAutomatedBackupsReplication" id="@cdk_utils/iam.rds.RDSActions.property.StartDBInstanceAutomatedBackupsReplication"></a>

```typescript
public readonly StartDBInstanceAutomatedBackupsReplication: string;
```

- *Type:* string

[Write] rds:StartDBInstanceAutomatedBackupsReplication.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.rds.RDSActions.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string;
```

- *Type:* string

[Write] rds:StartExportTask.

---

##### `StopActivityStream`<sup>Required</sup> <a name="StopActivityStream" id="@cdk_utils/iam.rds.RDSActions.property.StopActivityStream"></a>

```typescript
public readonly StopActivityStream: string;
```

- *Type:* string

[Write] rds:StopActivityStream.

---

##### `StopDBCluster`<sup>Required</sup> <a name="StopDBCluster" id="@cdk_utils/iam.rds.RDSActions.property.StopDBCluster"></a>

```typescript
public readonly StopDBCluster: string;
```

- *Type:* string

[Write] rds:StopDBCluster.

---

##### `StopDBInstance`<sup>Required</sup> <a name="StopDBInstance" id="@cdk_utils/iam.rds.RDSActions.property.StopDBInstance"></a>

```typescript
public readonly StopDBInstance: string;
```

- *Type:* string

[Write] rds:StopDBInstance.

---

##### `StopDBInstanceAutomatedBackupsReplication`<sup>Required</sup> <a name="StopDBInstanceAutomatedBackupsReplication" id="@cdk_utils/iam.rds.RDSActions.property.StopDBInstanceAutomatedBackupsReplication"></a>

```typescript
public readonly StopDBInstanceAutomatedBackupsReplication: string;
```

- *Type:* string

[Write] rds:StopDBInstanceAutomatedBackupsReplication.

---

##### `SwitchoverBlueGreenDeployment`<sup>Required</sup> <a name="SwitchoverBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSActions.property.SwitchoverBlueGreenDeployment"></a>

```typescript
public readonly SwitchoverBlueGreenDeployment: string;
```

- *Type:* string

[Write] rds:SwitchoverBlueGreenDeployment.

---

##### `SwitchoverGlobalCluster`<sup>Required</sup> <a name="SwitchoverGlobalCluster" id="@cdk_utils/iam.rds.RDSActions.property.SwitchoverGlobalCluster"></a>

```typescript
public readonly SwitchoverGlobalCluster: string;
```

- *Type:* string

[Write] rds:SwitchoverGlobalCluster.

---

##### `SwitchoverReadReplica`<sup>Required</sup> <a name="SwitchoverReadReplica" id="@cdk_utils/iam.rds.RDSActions.property.SwitchoverReadReplica"></a>

```typescript
public readonly SwitchoverReadReplica: string;
```

- *Type:* string

[Write] rds:SwitchoverReadReplica.

---

### RDSConditions <a name="RDSConditions" id="@cdk_utils/iam.rds.RDSConditions"></a>

Condition key constants and builders for rds.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds.RDSConditions.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

new rds.RDSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.backupTarget">backupTarget</a></code> | Generates a condition block for `rds:BackupTarget`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.clusterPgTag">clusterPgTag</a></code> | Generates a condition block for `rds:cluster-pg-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.clusterSnapshotTag">clusterSnapshotTag</a></code> | Generates a condition block for `rds:cluster-snapshot-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.clusterTag">clusterTag</a></code> | Generates a condition block for `rds:cluster-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.copyOptionGroup">copyOptionGroup</a></code> | Generates a condition block for `rds:CopyOptionGroup`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.databaseClass">databaseClass</a></code> | Generates a condition block for `rds:DatabaseClass`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.databaseEngine">databaseEngine</a></code> | Generates a condition block for `rds:DatabaseEngine`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.databaseName">databaseName</a></code> | Generates a condition block for `rds:DatabaseName`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.dbTag">dbTag</a></code> | Generates a condition block for `rds:db-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.endpointType">endpointType</a></code> | Generates a condition block for `rds:EndpointType`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.esTag">esTag</a></code> | Generates a condition block for `rds:es-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.manageMasterUserPassword">manageMasterUserPassword</a></code> | Generates a condition block for `rds:ManageMasterUserPassword`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.multiAz">multiAz</a></code> | Generates a condition block for `rds:MultiAz`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.ogTag">ogTag</a></code> | Generates a condition block for `rds:og-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.pgTag">pgTag</a></code> | Generates a condition block for `rds:pg-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.piops">piops</a></code> | Generates a condition block for `rds:Piops`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.publiclyAccessible">publiclyAccessible</a></code> | Generates a condition block for `rds:PubliclyAccessible`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.reqTag">reqTag</a></code> | Generates a condition block for `rds:req-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.riTag">riTag</a></code> | Generates a condition block for `rds:ri-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.secgrpTag">secgrpTag</a></code> | Generates a condition block for `rds:secgrp-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.snapshotTag">snapshotTag</a></code> | Generates a condition block for `rds:snapshot-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.storageEncrypted">storageEncrypted</a></code> | Generates a condition block for `rds:StorageEncrypted`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.storageSize">storageSize</a></code> | Generates a condition block for `rds:StorageSize`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.subgrpTag">subgrpTag</a></code> | Generates a condition block for `rds:subgrp-tag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.tagsFromRequest">tagsFromRequest</a></code> | Generates a condition block for `rds:TagsFromRequest`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.tenantDatabaseName">tenantDatabaseName</a></code> | Generates a condition block for `rds:TenantDatabaseName`. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.vpc">vpc</a></code> | Generates a condition block for `rds:Vpc`. |

---

##### `backupTarget` <a name="backupTarget" id="@cdk_utils/iam.rds.RDSConditions.backupTarget"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.backupTarget(value: string)
```

Generates a condition block for `rds:BackupTarget`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.backupTarget.parameter.value"></a>

- *Type:* string

---

##### `clusterPgTag` <a name="clusterPgTag" id="@cdk_utils/iam.rds.RDSConditions.clusterPgTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.clusterPgTag(value: string)
```

Generates a condition block for `rds:cluster-pg-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.clusterPgTag.parameter.value"></a>

- *Type:* string

---

##### `clusterSnapshotTag` <a name="clusterSnapshotTag" id="@cdk_utils/iam.rds.RDSConditions.clusterSnapshotTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.clusterSnapshotTag(value: string)
```

Generates a condition block for `rds:cluster-snapshot-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.clusterSnapshotTag.parameter.value"></a>

- *Type:* string

---

##### `clusterTag` <a name="clusterTag" id="@cdk_utils/iam.rds.RDSConditions.clusterTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.clusterTag(value: string)
```

Generates a condition block for `rds:cluster-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.clusterTag.parameter.value"></a>

- *Type:* string

---

##### `copyOptionGroup` <a name="copyOptionGroup" id="@cdk_utils/iam.rds.RDSConditions.copyOptionGroup"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.copyOptionGroup(value: boolean)
```

Generates a condition block for `rds:CopyOptionGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.copyOptionGroup.parameter.value"></a>

- *Type:* boolean

---

##### `databaseClass` <a name="databaseClass" id="@cdk_utils/iam.rds.RDSConditions.databaseClass"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.databaseClass(value: string)
```

Generates a condition block for `rds:DatabaseClass`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.databaseClass.parameter.value"></a>

- *Type:* string

---

##### `databaseEngine` <a name="databaseEngine" id="@cdk_utils/iam.rds.RDSConditions.databaseEngine"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.databaseEngine(value: string)
```

Generates a condition block for `rds:DatabaseEngine`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.databaseEngine.parameter.value"></a>

- *Type:* string

---

##### `databaseName` <a name="databaseName" id="@cdk_utils/iam.rds.RDSConditions.databaseName"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.databaseName(value: string)
```

Generates a condition block for `rds:DatabaseName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.databaseName.parameter.value"></a>

- *Type:* string

---

##### `dbTag` <a name="dbTag" id="@cdk_utils/iam.rds.RDSConditions.dbTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.dbTag(value: string)
```

Generates a condition block for `rds:db-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.dbTag.parameter.value"></a>

- *Type:* string

---

##### `endpointType` <a name="endpointType" id="@cdk_utils/iam.rds.RDSConditions.endpointType"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.endpointType(value: string)
```

Generates a condition block for `rds:EndpointType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.endpointType.parameter.value"></a>

- *Type:* string

---

##### `esTag` <a name="esTag" id="@cdk_utils/iam.rds.RDSConditions.esTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.esTag(value: string)
```

Generates a condition block for `rds:es-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.esTag.parameter.value"></a>

- *Type:* string

---

##### `manageMasterUserPassword` <a name="manageMasterUserPassword" id="@cdk_utils/iam.rds.RDSConditions.manageMasterUserPassword"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.manageMasterUserPassword(value: boolean)
```

Generates a condition block for `rds:ManageMasterUserPassword`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.manageMasterUserPassword.parameter.value"></a>

- *Type:* boolean

---

##### `multiAz` <a name="multiAz" id="@cdk_utils/iam.rds.RDSConditions.multiAz"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.multiAz(value: boolean)
```

Generates a condition block for `rds:MultiAz`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.multiAz.parameter.value"></a>

- *Type:* boolean

---

##### `ogTag` <a name="ogTag" id="@cdk_utils/iam.rds.RDSConditions.ogTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.ogTag(value: string)
```

Generates a condition block for `rds:og-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.ogTag.parameter.value"></a>

- *Type:* string

---

##### `pgTag` <a name="pgTag" id="@cdk_utils/iam.rds.RDSConditions.pgTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.pgTag(value: string)
```

Generates a condition block for `rds:pg-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.pgTag.parameter.value"></a>

- *Type:* string

---

##### `piops` <a name="piops" id="@cdk_utils/iam.rds.RDSConditions.piops"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.piops(value: number)
```

Generates a condition block for `rds:Piops`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.piops.parameter.value"></a>

- *Type:* number

---

##### `publiclyAccessible` <a name="publiclyAccessible" id="@cdk_utils/iam.rds.RDSConditions.publiclyAccessible"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.publiclyAccessible(value: boolean)
```

Generates a condition block for `rds:PubliclyAccessible`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.publiclyAccessible.parameter.value"></a>

- *Type:* boolean

---

##### `reqTag` <a name="reqTag" id="@cdk_utils/iam.rds.RDSConditions.reqTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.reqTag(value: string)
```

Generates a condition block for `rds:req-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.reqTag.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rds.RDSConditions.requestTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rds.RDSConditions.resourceTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `riTag` <a name="riTag" id="@cdk_utils/iam.rds.RDSConditions.riTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.riTag(value: string)
```

Generates a condition block for `rds:ri-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.riTag.parameter.value"></a>

- *Type:* string

---

##### `secgrpTag` <a name="secgrpTag" id="@cdk_utils/iam.rds.RDSConditions.secgrpTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.secgrpTag(value: string)
```

Generates a condition block for `rds:secgrp-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.secgrpTag.parameter.value"></a>

- *Type:* string

---

##### `snapshotTag` <a name="snapshotTag" id="@cdk_utils/iam.rds.RDSConditions.snapshotTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.snapshotTag(value: string)
```

Generates a condition block for `rds:snapshot-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.snapshotTag.parameter.value"></a>

- *Type:* string

---

##### `storageEncrypted` <a name="storageEncrypted" id="@cdk_utils/iam.rds.RDSConditions.storageEncrypted"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.storageEncrypted(value: boolean)
```

Generates a condition block for `rds:StorageEncrypted`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.storageEncrypted.parameter.value"></a>

- *Type:* boolean

---

##### `storageSize` <a name="storageSize" id="@cdk_utils/iam.rds.RDSConditions.storageSize"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.storageSize(value: number)
```

Generates a condition block for `rds:StorageSize`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.storageSize.parameter.value"></a>

- *Type:* number

---

##### `subgrpTag` <a name="subgrpTag" id="@cdk_utils/iam.rds.RDSConditions.subgrpTag"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.subgrpTag(value: string)
```

Generates a condition block for `rds:subgrp-tag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.subgrpTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rds.RDSConditions.tagKeys"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rds.RDSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tagsFromRequest` <a name="tagsFromRequest" id="@cdk_utils/iam.rds.RDSConditions.tagsFromRequest"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.tagsFromRequest(value: boolean)
```

Generates a condition block for `rds:TagsFromRequest`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.tagsFromRequest.parameter.value"></a>

- *Type:* boolean

---

##### `tenantDatabaseName` <a name="tenantDatabaseName" id="@cdk_utils/iam.rds.RDSConditions.tenantDatabaseName"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.tenantDatabaseName(value: string)
```

Generates a condition block for `rds:TenantDatabaseName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.tenantDatabaseName.parameter.value"></a>

- *Type:* string

---

##### `vpc` <a name="vpc" id="@cdk_utils/iam.rds.RDSConditions.vpc"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSConditions.vpc(value: boolean)
```

Generates a condition block for `rds:Vpc`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rds.RDSConditions.vpc.parameter.value"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.BACKUP_TARGET">BACKUP_TARGET</a></code> | <code>string</code> | Condition key: rds:BackupTarget (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_PG_TAG">CLUSTER_PG_TAG</a></code> | <code>string</code> | Condition key: rds:cluster-pg-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_SNAPSHOT_TAG">CLUSTER_SNAPSHOT_TAG</a></code> | <code>string</code> | Condition key: rds:cluster-snapshot-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_TAG">CLUSTER_TAG</a></code> | <code>string</code> | Condition key: rds:cluster-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.COPY_OPTION_GROUP">COPY_OPTION_GROUP</a></code> | <code>string</code> | Condition key: rds:CopyOptionGroup (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CopyDBClusterParameterGroupConditionKeys">CopyDBClusterParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyDBClusterParameterGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CopyDBClusterSnapshotConditionKeys">CopyDBClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyDBClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CopyDBParameterGroupConditionKeys">CopyDBParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyDBParameterGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CopyDBSnapshotConditionKeys">CopyDBSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyDBSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CopyOptionGroupConditionKeys">CopyOptionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyOptionGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateBlueGreenDeploymentConditionKeys">CreateBlueGreenDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBlueGreenDeployment action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateCustomDBEngineVersionConditionKeys">CreateCustomDBEngineVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomDBEngineVersion action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterConditionKeys">CreateDBClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBCluster action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterEndpointConditionKeys">CreateDBClusterEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBClusterEndpoint action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterParameterGroupConditionKeys">CreateDBClusterParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBClusterParameterGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterSnapshotConditionKeys">CreateDBClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBInstanceConditionKeys">CreateDBInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBInstance action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBInstanceReadReplicaConditionKeys">CreateDBInstanceReadReplicaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBInstanceReadReplica action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBParameterGroupConditionKeys">CreateDBParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBParameterGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBProxyConditionKeys">CreateDBProxyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBProxy action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBProxyEndpointConditionKeys">CreateDBProxyEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBProxyEndpoint action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBSecurityGroupConditionKeys">CreateDBSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBShardGroupConditionKeys">CreateDBShardGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBShardGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBSnapshotConditionKeys">CreateDBSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateDBSubnetGroupConditionKeys">CreateDBSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDBSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateEventSubscriptionConditionKeys">CreateEventSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventSubscription action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateGlobalClusterConditionKeys">CreateGlobalClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGlobalCluster action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateOptionGroupConditionKeys">CreateOptionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOptionGroup action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.CreateTenantDatabaseConditionKeys">CreateTenantDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTenantDatabase action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DATABASE_CLASS">DATABASE_CLASS</a></code> | <code>string</code> | Condition key: rds:DatabaseClass (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DATABASE_ENGINE">DATABASE_ENGINE</a></code> | <code>string</code> | Condition key: rds:DatabaseEngine (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DATABASE_NAME">DATABASE_NAME</a></code> | <code>string</code> | Condition key: rds:DatabaseName (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DB_TAG">DB_TAG</a></code> | <code>string</code> | Condition key: rds:db-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DeleteBlueGreenDeploymentConditionKeys">DeleteBlueGreenDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBlueGreenDeployment action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.DescribeIntegrationsConditionKeys">DescribeIntegrationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeIntegrations action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.ENDPOINT_TYPE">ENDPOINT_TYPE</a></code> | <code>string</code> | Condition key: rds:EndpointType (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.ES_TAG">ES_TAG</a></code> | <code>string</code> | Condition key: rds:es-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.MANAGE_MASTER_USER_PASSWORD">MANAGE_MASTER_USER_PASSWORD</a></code> | <code>string</code> | Condition key: rds:ManageMasterUserPassword (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.ModifyDBClusterConditionKeys">ModifyDBClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyDBCluster action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.ModifyDBInstanceConditionKeys">ModifyDBInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyDBInstance action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.ModifyTenantDatabaseConditionKeys">ModifyTenantDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyTenantDatabase action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.MULTI_AZ">MULTI_AZ</a></code> | <code>string</code> | Condition key: rds:MultiAz (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.OG_TAG">OG_TAG</a></code> | <code>string</code> | Condition key: rds:og-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.PG_TAG">PG_TAG</a></code> | <code>string</code> | Condition key: rds:pg-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.PIOPS">PIOPS</a></code> | <code>string</code> | Condition key: rds:Piops (Numeric). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.PUBLICLY_ACCESSIBLE">PUBLICLY_ACCESSIBLE</a></code> | <code>string</code> | Condition key: rds:PubliclyAccessible (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.PurchaseReservedDBInstancesOfferingConditionKeys">PurchaseReservedDBInstancesOfferingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PurchaseReservedDBInstancesOffering action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.REQ_TAG">REQ_TAG</a></code> | <code>string</code> | Condition key: rds:req-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterFromS3ConditionKeys">RestoreDBClusterFromS3ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBClusterFromS3 action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterFromSnapshotConditionKeys">RestoreDBClusterFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBClusterFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterToPointInTimeConditionKeys">RestoreDBClusterToPointInTimeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBClusterToPointInTime action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceFromDBSnapshotConditionKeys">RestoreDBInstanceFromDBSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBInstanceFromDBSnapshot action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceFromS3ConditionKeys">RestoreDBInstanceFromS3ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBInstanceFromS3 action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceToPointInTimeConditionKeys">RestoreDBInstanceToPointInTimeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreDBInstanceToPointInTime action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.RI_TAG">RI_TAG</a></code> | <code>string</code> | Condition key: rds:ri-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.SECGRP_TAG">SECGRP_TAG</a></code> | <code>string</code> | Condition key: rds:secgrp-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.SNAPSHOT_TAG">SNAPSHOT_TAG</a></code> | <code>string</code> | Condition key: rds:snapshot-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.StartDBInstanceAutomatedBackupsReplicationConditionKeys">StartDBInstanceAutomatedBackupsReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartDBInstanceAutomatedBackupsReplication action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.STORAGE_ENCRYPTED">STORAGE_ENCRYPTED</a></code> | <code>string</code> | Condition key: rds:StorageEncrypted (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.STORAGE_SIZE">STORAGE_SIZE</a></code> | <code>string</code> | Condition key: rds:StorageSize (Numeric). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.SUBGRP_TAG">SUBGRP_TAG</a></code> | <code>string</code> | Condition key: rds:subgrp-tag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.SwitchoverBlueGreenDeploymentConditionKeys">SwitchoverBlueGreenDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SwitchoverBlueGreenDeployment action. |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.TAGS_FROM_REQUEST">TAGS_FROM_REQUEST</a></code> | <code>string</code> | Condition key: rds:TagsFromRequest (Bool). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.TENANT_DATABASE_NAME">TENANT_DATABASE_NAME</a></code> | <code>string</code> | Condition key: rds:TenantDatabaseName (String). |
| <code><a href="#@cdk_utils/iam.rds.RDSConditions.property.VPC">VPC</a></code> | <code>string</code> | Condition key: rds:Vpc (Bool). |

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rds.RDSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BACKUP_TARGET`<sup>Required</sup> <a name="BACKUP_TARGET" id="@cdk_utils/iam.rds.RDSConditions.property.BACKUP_TARGET"></a>

```typescript
public readonly BACKUP_TARGET: string;
```

- *Type:* string

Condition key: rds:BackupTarget (String).

---

##### `CLUSTER_PG_TAG`<sup>Required</sup> <a name="CLUSTER_PG_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_PG_TAG"></a>

```typescript
public readonly CLUSTER_PG_TAG: string;
```

- *Type:* string

Condition key: rds:cluster-pg-tag/${TagKey} (String).

---

##### `CLUSTER_SNAPSHOT_TAG`<sup>Required</sup> <a name="CLUSTER_SNAPSHOT_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_SNAPSHOT_TAG"></a>

```typescript
public readonly CLUSTER_SNAPSHOT_TAG: string;
```

- *Type:* string

Condition key: rds:cluster-snapshot-tag/${TagKey} (String).

---

##### `CLUSTER_TAG`<sup>Required</sup> <a name="CLUSTER_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.CLUSTER_TAG"></a>

```typescript
public readonly CLUSTER_TAG: string;
```

- *Type:* string

Condition key: rds:cluster-tag/${TagKey} (String).

---

##### `COPY_OPTION_GROUP`<sup>Required</sup> <a name="COPY_OPTION_GROUP" id="@cdk_utils/iam.rds.RDSConditions.property.COPY_OPTION_GROUP"></a>

```typescript
public readonly COPY_OPTION_GROUP: string;
```

- *Type:* string

Condition key: rds:CopyOptionGroup (Bool).

---

##### `CopyDBClusterParameterGroupConditionKeys`<sup>Required</sup> <a name="CopyDBClusterParameterGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CopyDBClusterParameterGroupConditionKeys"></a>

```typescript
public readonly CopyDBClusterParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyDBClusterParameterGroup action.

---

##### `CopyDBClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CopyDBClusterSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CopyDBClusterSnapshotConditionKeys"></a>

```typescript
public readonly CopyDBClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyDBClusterSnapshot action.

---

##### `CopyDBParameterGroupConditionKeys`<sup>Required</sup> <a name="CopyDBParameterGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CopyDBParameterGroupConditionKeys"></a>

```typescript
public readonly CopyDBParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyDBParameterGroup action.

---

##### `CopyDBSnapshotConditionKeys`<sup>Required</sup> <a name="CopyDBSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CopyDBSnapshotConditionKeys"></a>

```typescript
public readonly CopyDBSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyDBSnapshot action.

---

##### `CopyOptionGroupConditionKeys`<sup>Required</sup> <a name="CopyOptionGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CopyOptionGroupConditionKeys"></a>

```typescript
public readonly CopyOptionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyOptionGroup action.

---

##### `CreateBlueGreenDeploymentConditionKeys`<sup>Required</sup> <a name="CreateBlueGreenDeploymentConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateBlueGreenDeploymentConditionKeys"></a>

```typescript
public readonly CreateBlueGreenDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBlueGreenDeployment action.

---

##### `CreateCustomDBEngineVersionConditionKeys`<sup>Required</sup> <a name="CreateCustomDBEngineVersionConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateCustomDBEngineVersionConditionKeys"></a>

```typescript
public readonly CreateCustomDBEngineVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomDBEngineVersion action.

---

##### `CreateDBClusterConditionKeys`<sup>Required</sup> <a name="CreateDBClusterConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterConditionKeys"></a>

```typescript
public readonly CreateDBClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBCluster action.

---

##### `CreateDBClusterEndpointConditionKeys`<sup>Required</sup> <a name="CreateDBClusterEndpointConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterEndpointConditionKeys"></a>

```typescript
public readonly CreateDBClusterEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBClusterEndpoint action.

---

##### `CreateDBClusterParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateDBClusterParameterGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterParameterGroupConditionKeys"></a>

```typescript
public readonly CreateDBClusterParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBClusterParameterGroup action.

---

##### `CreateDBClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CreateDBClusterSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBClusterSnapshotConditionKeys"></a>

```typescript
public readonly CreateDBClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBClusterSnapshot action.

---

##### `CreateDBInstanceConditionKeys`<sup>Required</sup> <a name="CreateDBInstanceConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBInstanceConditionKeys"></a>

```typescript
public readonly CreateDBInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBInstance action.

---

##### `CreateDBInstanceReadReplicaConditionKeys`<sup>Required</sup> <a name="CreateDBInstanceReadReplicaConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBInstanceReadReplicaConditionKeys"></a>

```typescript
public readonly CreateDBInstanceReadReplicaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBInstanceReadReplica action.

---

##### `CreateDBParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateDBParameterGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBParameterGroupConditionKeys"></a>

```typescript
public readonly CreateDBParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBParameterGroup action.

---

##### `CreateDBProxyConditionKeys`<sup>Required</sup> <a name="CreateDBProxyConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBProxyConditionKeys"></a>

```typescript
public readonly CreateDBProxyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBProxy action.

---

##### `CreateDBProxyEndpointConditionKeys`<sup>Required</sup> <a name="CreateDBProxyEndpointConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBProxyEndpointConditionKeys"></a>

```typescript
public readonly CreateDBProxyEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBProxyEndpoint action.

---

##### `CreateDBSecurityGroupConditionKeys`<sup>Required</sup> <a name="CreateDBSecurityGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBSecurityGroupConditionKeys"></a>

```typescript
public readonly CreateDBSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBSecurityGroup action.

---

##### `CreateDBShardGroupConditionKeys`<sup>Required</sup> <a name="CreateDBShardGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBShardGroupConditionKeys"></a>

```typescript
public readonly CreateDBShardGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBShardGroup action.

---

##### `CreateDBSnapshotConditionKeys`<sup>Required</sup> <a name="CreateDBSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBSnapshotConditionKeys"></a>

```typescript
public readonly CreateDBSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBSnapshot action.

---

##### `CreateDBSubnetGroupConditionKeys`<sup>Required</sup> <a name="CreateDBSubnetGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateDBSubnetGroupConditionKeys"></a>

```typescript
public readonly CreateDBSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDBSubnetGroup action.

---

##### `CreateEventSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateEventSubscriptionConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateEventSubscriptionConditionKeys"></a>

```typescript
public readonly CreateEventSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventSubscription action.

---

##### `CreateGlobalClusterConditionKeys`<sup>Required</sup> <a name="CreateGlobalClusterConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateGlobalClusterConditionKeys"></a>

```typescript
public readonly CreateGlobalClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGlobalCluster action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreateOptionGroupConditionKeys`<sup>Required</sup> <a name="CreateOptionGroupConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateOptionGroupConditionKeys"></a>

```typescript
public readonly CreateOptionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOptionGroup action.

---

##### `CreateTenantDatabaseConditionKeys`<sup>Required</sup> <a name="CreateTenantDatabaseConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.CreateTenantDatabaseConditionKeys"></a>

```typescript
public readonly CreateTenantDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTenantDatabase action.

---

##### `DATABASE_CLASS`<sup>Required</sup> <a name="DATABASE_CLASS" id="@cdk_utils/iam.rds.RDSConditions.property.DATABASE_CLASS"></a>

```typescript
public readonly DATABASE_CLASS: string;
```

- *Type:* string

Condition key: rds:DatabaseClass (String).

---

##### `DATABASE_ENGINE`<sup>Required</sup> <a name="DATABASE_ENGINE" id="@cdk_utils/iam.rds.RDSConditions.property.DATABASE_ENGINE"></a>

```typescript
public readonly DATABASE_ENGINE: string;
```

- *Type:* string

Condition key: rds:DatabaseEngine (String).

---

##### `DATABASE_NAME`<sup>Required</sup> <a name="DATABASE_NAME" id="@cdk_utils/iam.rds.RDSConditions.property.DATABASE_NAME"></a>

```typescript
public readonly DATABASE_NAME: string;
```

- *Type:* string

Condition key: rds:DatabaseName (String).

---

##### `DB_TAG`<sup>Required</sup> <a name="DB_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.DB_TAG"></a>

```typescript
public readonly DB_TAG: string;
```

- *Type:* string

Condition key: rds:db-tag/${TagKey} (String).

---

##### `DeleteBlueGreenDeploymentConditionKeys`<sup>Required</sup> <a name="DeleteBlueGreenDeploymentConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.DeleteBlueGreenDeploymentConditionKeys"></a>

```typescript
public readonly DeleteBlueGreenDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBlueGreenDeployment action.

---

##### `DescribeIntegrationsConditionKeys`<sup>Required</sup> <a name="DescribeIntegrationsConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.DescribeIntegrationsConditionKeys"></a>

```typescript
public readonly DescribeIntegrationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeIntegrations action.

---

##### `ENDPOINT_TYPE`<sup>Required</sup> <a name="ENDPOINT_TYPE" id="@cdk_utils/iam.rds.RDSConditions.property.ENDPOINT_TYPE"></a>

```typescript
public readonly ENDPOINT_TYPE: string;
```

- *Type:* string

Condition key: rds:EndpointType (String).

---

##### `ES_TAG`<sup>Required</sup> <a name="ES_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.ES_TAG"></a>

```typescript
public readonly ES_TAG: string;
```

- *Type:* string

Condition key: rds:es-tag/${TagKey} (String).

---

##### `MANAGE_MASTER_USER_PASSWORD`<sup>Required</sup> <a name="MANAGE_MASTER_USER_PASSWORD" id="@cdk_utils/iam.rds.RDSConditions.property.MANAGE_MASTER_USER_PASSWORD"></a>

```typescript
public readonly MANAGE_MASTER_USER_PASSWORD: string;
```

- *Type:* string

Condition key: rds:ManageMasterUserPassword (Bool).

---

##### `ModifyDBClusterConditionKeys`<sup>Required</sup> <a name="ModifyDBClusterConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.ModifyDBClusterConditionKeys"></a>

```typescript
public readonly ModifyDBClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyDBCluster action.

---

##### `ModifyDBInstanceConditionKeys`<sup>Required</sup> <a name="ModifyDBInstanceConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.ModifyDBInstanceConditionKeys"></a>

```typescript
public readonly ModifyDBInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyDBInstance action.

---

##### `ModifyTenantDatabaseConditionKeys`<sup>Required</sup> <a name="ModifyTenantDatabaseConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.ModifyTenantDatabaseConditionKeys"></a>

```typescript
public readonly ModifyTenantDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyTenantDatabase action.

---

##### `MULTI_AZ`<sup>Required</sup> <a name="MULTI_AZ" id="@cdk_utils/iam.rds.RDSConditions.property.MULTI_AZ"></a>

```typescript
public readonly MULTI_AZ: string;
```

- *Type:* string

Condition key: rds:MultiAz (Bool).

---

##### `OG_TAG`<sup>Required</sup> <a name="OG_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.OG_TAG"></a>

```typescript
public readonly OG_TAG: string;
```

- *Type:* string

Condition key: rds:og-tag/${TagKey} (String).

---

##### `PG_TAG`<sup>Required</sup> <a name="PG_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.PG_TAG"></a>

```typescript
public readonly PG_TAG: string;
```

- *Type:* string

Condition key: rds:pg-tag/${TagKey} (String).

---

##### `PIOPS`<sup>Required</sup> <a name="PIOPS" id="@cdk_utils/iam.rds.RDSConditions.property.PIOPS"></a>

```typescript
public readonly PIOPS: string;
```

- *Type:* string

Condition key: rds:Piops (Numeric).

---

##### `PUBLICLY_ACCESSIBLE`<sup>Required</sup> <a name="PUBLICLY_ACCESSIBLE" id="@cdk_utils/iam.rds.RDSConditions.property.PUBLICLY_ACCESSIBLE"></a>

```typescript
public readonly PUBLICLY_ACCESSIBLE: string;
```

- *Type:* string

Condition key: rds:PubliclyAccessible (Bool).

---

##### `PurchaseReservedDBInstancesOfferingConditionKeys`<sup>Required</sup> <a name="PurchaseReservedDBInstancesOfferingConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.PurchaseReservedDBInstancesOfferingConditionKeys"></a>

```typescript
public readonly PurchaseReservedDBInstancesOfferingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PurchaseReservedDBInstancesOffering action.

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

##### `REQ_TAG`<sup>Required</sup> <a name="REQ_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.REQ_TAG"></a>

```typescript
public readonly REQ_TAG: string;
```

- *Type:* string

Condition key: rds:req-tag/${TagKey} (String).

---

##### `RestoreDBClusterFromS3ConditionKeys`<sup>Required</sup> <a name="RestoreDBClusterFromS3ConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterFromS3ConditionKeys"></a>

```typescript
public readonly RestoreDBClusterFromS3ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBClusterFromS3 action.

---

##### `RestoreDBClusterFromSnapshotConditionKeys`<sup>Required</sup> <a name="RestoreDBClusterFromSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterFromSnapshotConditionKeys"></a>

```typescript
public readonly RestoreDBClusterFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBClusterFromSnapshot action.

---

##### `RestoreDBClusterToPointInTimeConditionKeys`<sup>Required</sup> <a name="RestoreDBClusterToPointInTimeConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBClusterToPointInTimeConditionKeys"></a>

```typescript
public readonly RestoreDBClusterToPointInTimeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBClusterToPointInTime action.

---

##### `RestoreDBInstanceFromDBSnapshotConditionKeys`<sup>Required</sup> <a name="RestoreDBInstanceFromDBSnapshotConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceFromDBSnapshotConditionKeys"></a>

```typescript
public readonly RestoreDBInstanceFromDBSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBInstanceFromDBSnapshot action.

---

##### `RestoreDBInstanceFromS3ConditionKeys`<sup>Required</sup> <a name="RestoreDBInstanceFromS3ConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceFromS3ConditionKeys"></a>

```typescript
public readonly RestoreDBInstanceFromS3ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBInstanceFromS3 action.

---

##### `RestoreDBInstanceToPointInTimeConditionKeys`<sup>Required</sup> <a name="RestoreDBInstanceToPointInTimeConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.RestoreDBInstanceToPointInTimeConditionKeys"></a>

```typescript
public readonly RestoreDBInstanceToPointInTimeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreDBInstanceToPointInTime action.

---

##### `RI_TAG`<sup>Required</sup> <a name="RI_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.RI_TAG"></a>

```typescript
public readonly RI_TAG: string;
```

- *Type:* string

Condition key: rds:ri-tag/${TagKey} (String).

---

##### `SECGRP_TAG`<sup>Required</sup> <a name="SECGRP_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.SECGRP_TAG"></a>

```typescript
public readonly SECGRP_TAG: string;
```

- *Type:* string

Condition key: rds:secgrp-tag/${TagKey} (String).

---

##### `SNAPSHOT_TAG`<sup>Required</sup> <a name="SNAPSHOT_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.SNAPSHOT_TAG"></a>

```typescript
public readonly SNAPSHOT_TAG: string;
```

- *Type:* string

Condition key: rds:snapshot-tag/${TagKey} (String).

---

##### `StartDBInstanceAutomatedBackupsReplicationConditionKeys`<sup>Required</sup> <a name="StartDBInstanceAutomatedBackupsReplicationConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.StartDBInstanceAutomatedBackupsReplicationConditionKeys"></a>

```typescript
public readonly StartDBInstanceAutomatedBackupsReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartDBInstanceAutomatedBackupsReplication action.

---

##### `STORAGE_ENCRYPTED`<sup>Required</sup> <a name="STORAGE_ENCRYPTED" id="@cdk_utils/iam.rds.RDSConditions.property.STORAGE_ENCRYPTED"></a>

```typescript
public readonly STORAGE_ENCRYPTED: string;
```

- *Type:* string

Condition key: rds:StorageEncrypted (Bool).

---

##### `STORAGE_SIZE`<sup>Required</sup> <a name="STORAGE_SIZE" id="@cdk_utils/iam.rds.RDSConditions.property.STORAGE_SIZE"></a>

```typescript
public readonly STORAGE_SIZE: string;
```

- *Type:* string

Condition key: rds:StorageSize (Numeric).

---

##### `SUBGRP_TAG`<sup>Required</sup> <a name="SUBGRP_TAG" id="@cdk_utils/iam.rds.RDSConditions.property.SUBGRP_TAG"></a>

```typescript
public readonly SUBGRP_TAG: string;
```

- *Type:* string

Condition key: rds:subgrp-tag/${TagKey} (String).

---

##### `SwitchoverBlueGreenDeploymentConditionKeys`<sup>Required</sup> <a name="SwitchoverBlueGreenDeploymentConditionKeys" id="@cdk_utils/iam.rds.RDSConditions.property.SwitchoverBlueGreenDeploymentConditionKeys"></a>

```typescript
public readonly SwitchoverBlueGreenDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SwitchoverBlueGreenDeployment action.

---

##### `TAGS_FROM_REQUEST`<sup>Required</sup> <a name="TAGS_FROM_REQUEST" id="@cdk_utils/iam.rds.RDSConditions.property.TAGS_FROM_REQUEST"></a>

```typescript
public readonly TAGS_FROM_REQUEST: string;
```

- *Type:* string

Condition key: rds:TagsFromRequest (Bool).

---

##### `TENANT_DATABASE_NAME`<sup>Required</sup> <a name="TENANT_DATABASE_NAME" id="@cdk_utils/iam.rds.RDSConditions.property.TENANT_DATABASE_NAME"></a>

```typescript
public readonly TENANT_DATABASE_NAME: string;
```

- *Type:* string

Condition key: rds:TenantDatabaseName (String).

---

##### `VPC`<sup>Required</sup> <a name="VPC" id="@cdk_utils/iam.rds.RDSConditions.property.VPC"></a>

```typescript
public readonly VPC: string;
```

- *Type:* string

Condition key: rds:Vpc (Bool).

---

### RDSOperations <a name="RDSOperations" id="@cdk_utils/iam.rds.RDSOperations"></a>

API operation to required IAM actions mapping for rds.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds.RDSOperations.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

new rds.RDSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.AddRoleToDBCluster">AddRoleToDBCluster</a></code> | <code>string[]</code> | IAM actions required for the AddRoleToDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.AddRoleToDBInstance">AddRoleToDBInstance</a></code> | <code>string[]</code> | IAM actions required for the AddRoleToDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.AddSourceIdentifierToSubscription">AddSourceIdentifierToSubscription</a></code> | <code>string[]</code> | IAM actions required for the AddSourceIdentifierToSubscription API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ApplyPendingMaintenanceAction">ApplyPendingMaintenanceAction</a></code> | <code>string[]</code> | IAM actions required for the ApplyPendingMaintenanceAction API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.AuthorizeDBSecurityGroupIngress">AuthorizeDBSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeDBSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.BacktrackDBCluster">BacktrackDBCluster</a></code> | <code>string[]</code> | IAM actions required for the BacktrackDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CancelExportTask">CancelExportTask</a></code> | <code>string[]</code> | IAM actions required for the CancelExportTask API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CopyDBClusterParameterGroup">CopyDBClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CopyDBClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CopyDBClusterSnapshot">CopyDBClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopyDBClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CopyDBParameterGroup">CopyDBParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CopyDBParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CopyDBSnapshot">CopyDBSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopyDBSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CopyOptionGroup">CopyOptionGroup</a></code> | <code>string[]</code> | IAM actions required for the CopyOptionGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateBlueGreenDeployment">CreateBlueGreenDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateBlueGreenDeployment API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateCustomDBEngineVersion">CreateCustomDBEngineVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDBEngineVersion API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBCluster">CreateDBCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterEndpoint">CreateDBClusterEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateDBClusterEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterParameterGroup">CreateDBClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDBClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterSnapshot">CreateDBClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateDBClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBInstance">CreateDBInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBInstanceReadReplica">CreateDBInstanceReadReplica</a></code> | <code>string[]</code> | IAM actions required for the CreateDBInstanceReadReplica API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBParameterGroup">CreateDBParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDBParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBProxy">CreateDBProxy</a></code> | <code>string[]</code> | IAM actions required for the CreateDBProxy API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBProxyEndpoint">CreateDBProxyEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateDBProxyEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBSecurityGroup">CreateDBSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDBSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBShardGroup">CreateDBShardGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDBShardGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBSnapshot">CreateDBSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateDBSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateDBSubnetGroup">CreateDBSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDBSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateGlobalCluster">CreateGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateOptionGroup">CreateOptionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateOptionGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.CreateTenantDatabase">CreateTenantDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateTenantDatabase API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteBlueGreenDeployment">DeleteBlueGreenDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteBlueGreenDeployment API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteCustomDBEngineVersion">DeleteCustomDBEngineVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDBEngineVersion API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBCluster">DeleteDBCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterAutomatedBackup">DeleteDBClusterAutomatedBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBClusterAutomatedBackup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterEndpoint">DeleteDBClusterEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBClusterEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterParameterGroup">DeleteDBClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterSnapshot">DeleteDBClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBInstance">DeleteDBInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBInstanceAutomatedBackup">DeleteDBInstanceAutomatedBackup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBInstanceAutomatedBackup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBParameterGroup">DeleteDBParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBProxy">DeleteDBProxy</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBProxy API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBProxyEndpoint">DeleteDBProxyEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBProxyEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSecurityGroup">DeleteDBSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBShardGroup">DeleteDBShardGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBShardGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSnapshot">DeleteDBSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSubnetGroup">DeleteDBSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDBSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteGlobalCluster">DeleteGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteOptionGroup">DeleteOptionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteOptionGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeleteTenantDatabase">DeleteTenantDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteTenantDatabase API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DeregisterDBProxyTargets">DeregisterDBProxyTargets</a></code> | <code>string[]</code> | IAM actions required for the DeregisterDBProxyTargets API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAttributes API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeBlueGreenDeployments">DescribeBlueGreenDeployments</a></code> | <code>string[]</code> | IAM actions required for the DescribeBlueGreenDeployments API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeCertificates">DescribeCertificates</a></code> | <code>string[]</code> | IAM actions required for the DescribeCertificates API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterAutomatedBackups">DescribeDBClusterAutomatedBackups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterAutomatedBackups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterBacktracks">DescribeDBClusterBacktracks</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterBacktracks API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterEndpoints">DescribeDBClusterEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterEndpoints API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterParameterGroups">DescribeDBClusterParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterParameters">DescribeDBClusterParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterParameters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusters">DescribeDBClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterSnapshotAttributes">DescribeDBClusterSnapshotAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterSnapshotAttributes API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterSnapshots">DescribeDBClusterSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBClusterSnapshots API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBEngineVersions">DescribeDBEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBInstanceAutomatedBackups">DescribeDBInstanceAutomatedBackups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBInstanceAutomatedBackups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBInstances">DescribeDBInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBInstances API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBLogFiles">DescribeDBLogFiles</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBLogFiles API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBMajorEngineVersions">DescribeDBMajorEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBMajorEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBParameterGroups">DescribeDBParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBParameters">DescribeDBParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBParameters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxies">DescribeDBProxies</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBProxies API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyEndpoints">DescribeDBProxyEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBProxyEndpoints API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyTargetGroups">DescribeDBProxyTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBProxyTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyTargets">DescribeDBProxyTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBProxyTargets API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBRecommendations">DescribeDBRecommendations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBRecommendations API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSecurityGroups">DescribeDBSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBShardGroups">DescribeDBShardGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBShardGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshotAttributes">DescribeDBSnapshotAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBSnapshotAttributes API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshots">DescribeDBSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBSnapshots API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshotTenantDatabases">DescribeDBSnapshotTenantDatabases</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBSnapshotTenantDatabases API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSubnetGroups">DescribeDBSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeDBSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeEngineDefaultClusterParameters">DescribeEngineDefaultClusterParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngineDefaultClusterParameters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeEngineDefaultParameters">DescribeEngineDefaultParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngineDefaultParameters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventCategories API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeExportTasks API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeGlobalClusters">DescribeGlobalClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalClusters API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeIntegrations API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeOptionGroupOptions">DescribeOptionGroupOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeOptionGroupOptions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeOptionGroups">DescribeOptionGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeOptionGroups API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeOrderableDBInstanceOptions">DescribeOrderableDBInstanceOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrderableDBInstanceOptions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribePendingMaintenanceActions">DescribePendingMaintenanceActions</a></code> | <code>string[]</code> | IAM actions required for the DescribePendingMaintenanceActions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeReservedDBInstances">DescribeReservedDBInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedDBInstances API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeReservedDBInstancesOfferings">DescribeReservedDBInstancesOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedDBInstancesOfferings API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeServerlessV2PlatformVersions">DescribeServerlessV2PlatformVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeServerlessV2PlatformVersions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeSourceRegions">DescribeSourceRegions</a></code> | <code>string[]</code> | IAM actions required for the DescribeSourceRegions API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeTenantDatabases">DescribeTenantDatabases</a></code> | <code>string[]</code> | IAM actions required for the DescribeTenantDatabases API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DescribeValidDBInstanceModifications">DescribeValidDBInstanceModifications</a></code> | <code>string[]</code> | IAM actions required for the DescribeValidDBInstanceModifications API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DisableHttpEndpoint">DisableHttpEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DisableHttpEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.DownloadDBLogFilePortion">DownloadDBLogFilePortion</a></code> | <code>string[]</code> | IAM actions required for the DownloadDBLogFilePortion API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.EnableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>string[]</code> | IAM actions required for the EnableHttpEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.FailoverDBCluster">FailoverDBCluster</a></code> | <code>string[]</code> | IAM actions required for the FailoverDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.FailoverGlobalCluster">FailoverGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the FailoverGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyActivityStream">ModifyActivityStream</a></code> | <code>string[]</code> | IAM actions required for the ModifyActivityStream API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyCertificates">ModifyCertificates</a></code> | <code>string[]</code> | IAM actions required for the ModifyCertificates API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyCurrentDBClusterCapacity">ModifyCurrentDBClusterCapacity</a></code> | <code>string[]</code> | IAM actions required for the ModifyCurrentDBClusterCapacity API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyCustomDBEngineVersion">ModifyCustomDBEngineVersion</a></code> | <code>string[]</code> | IAM actions required for the ModifyCustomDBEngineVersion API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBCluster">ModifyDBCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterEndpoint">ModifyDBClusterEndpoint</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBClusterEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterParameterGroup">ModifyDBClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterSnapshotAttribute">ModifyDBClusterSnapshotAttribute</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBClusterSnapshotAttribute API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBInstance">ModifyDBInstance</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBParameterGroup">ModifyDBParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxy">ModifyDBProxy</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBProxy API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxyEndpoint">ModifyDBProxyEndpoint</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBProxyEndpoint API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxyTargetGroup">ModifyDBProxyTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBProxyTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBRecommendation">ModifyDBRecommendation</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBRecommendation API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBShardGroup">ModifyDBShardGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBShardGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSnapshot">ModifyDBSnapshot</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSnapshotAttribute">ModifyDBSnapshotAttribute</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBSnapshotAttribute API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSubnetGroup">ModifyDBSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyDBSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the ModifyEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyGlobalCluster">ModifyGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string[]</code> | IAM actions required for the ModifyIntegration API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyOptionGroup">ModifyOptionGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyOptionGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ModifyTenantDatabase">ModifyTenantDatabase</a></code> | <code>string[]</code> | IAM actions required for the ModifyTenantDatabase API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.PromoteReadReplica">PromoteReadReplica</a></code> | <code>string[]</code> | IAM actions required for the PromoteReadReplica API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.PromoteReadReplicaDBCluster">PromoteReadReplicaDBCluster</a></code> | <code>string[]</code> | IAM actions required for the PromoteReadReplicaDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.PurchaseReservedDBInstancesOffering">PurchaseReservedDBInstancesOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedDBInstancesOffering API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RebootDBCluster">RebootDBCluster</a></code> | <code>string[]</code> | IAM actions required for the RebootDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RebootDBInstance">RebootDBInstance</a></code> | <code>string[]</code> | IAM actions required for the RebootDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RebootDBShardGroup">RebootDBShardGroup</a></code> | <code>string[]</code> | IAM actions required for the RebootDBShardGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RegisterDBProxyTargets">RegisterDBProxyTargets</a></code> | <code>string[]</code> | IAM actions required for the RegisterDBProxyTargets API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RemoveFromGlobalCluster">RemoveFromGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the RemoveFromGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RemoveRoleFromDBCluster">RemoveRoleFromDBCluster</a></code> | <code>string[]</code> | IAM actions required for the RemoveRoleFromDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RemoveRoleFromDBInstance">RemoveRoleFromDBInstance</a></code> | <code>string[]</code> | IAM actions required for the RemoveRoleFromDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RemoveSourceIdentifierFromSubscription">RemoveSourceIdentifierFromSubscription</a></code> | <code>string[]</code> | IAM actions required for the RemoveSourceIdentifierFromSubscription API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ResetDBClusterParameterGroup">ResetDBClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ResetDBClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.ResetDBParameterGroup">ResetDBParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ResetDBParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterFromS3">RestoreDBClusterFromS3</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBClusterFromS3 API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterFromSnapshot">RestoreDBClusterFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBClusterFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterToPointInTime">RestoreDBClusterToPointInTime</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBClusterToPointInTime API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceFromDBSnapshot">RestoreDBInstanceFromDBSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBInstanceFromDBSnapshot API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceFromS3">RestoreDBInstanceFromS3</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBInstanceFromS3 API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceToPointInTime">RestoreDBInstanceToPointInTime</a></code> | <code>string[]</code> | IAM actions required for the RestoreDBInstanceToPointInTime API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.RevokeDBSecurityGroupIngress">RevokeDBSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the RevokeDBSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StartActivityStream">StartActivityStream</a></code> | <code>string[]</code> | IAM actions required for the StartActivityStream API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StartDBCluster">StartDBCluster</a></code> | <code>string[]</code> | IAM actions required for the StartDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StartDBInstance">StartDBInstance</a></code> | <code>string[]</code> | IAM actions required for the StartDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StartDBInstanceAutomatedBackupsReplication">StartDBInstanceAutomatedBackupsReplication</a></code> | <code>string[]</code> | IAM actions required for the StartDBInstanceAutomatedBackupsReplication API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StartExportTask">StartExportTask</a></code> | <code>string[]</code> | IAM actions required for the StartExportTask API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StopActivityStream">StopActivityStream</a></code> | <code>string[]</code> | IAM actions required for the StopActivityStream API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StopDBCluster">StopDBCluster</a></code> | <code>string[]</code> | IAM actions required for the StopDBCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StopDBInstance">StopDBInstance</a></code> | <code>string[]</code> | IAM actions required for the StopDBInstance API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.StopDBInstanceAutomatedBackupsReplication">StopDBInstanceAutomatedBackupsReplication</a></code> | <code>string[]</code> | IAM actions required for the StopDBInstanceAutomatedBackupsReplication API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.SwitchoverBlueGreenDeployment">SwitchoverBlueGreenDeployment</a></code> | <code>string[]</code> | IAM actions required for the SwitchoverBlueGreenDeployment API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.SwitchoverGlobalCluster">SwitchoverGlobalCluster</a></code> | <code>string[]</code> | IAM actions required for the SwitchoverGlobalCluster API call. |
| <code><a href="#@cdk_utils/iam.rds.RDSOperations.property.SwitchoverReadReplica">SwitchoverReadReplica</a></code> | <code>string[]</code> | IAM actions required for the SwitchoverReadReplica API call. |

---

##### `AddRoleToDBCluster`<sup>Required</sup> <a name="AddRoleToDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.AddRoleToDBCluster"></a>

```typescript
public readonly AddRoleToDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the AddRoleToDBCluster API call.

---

##### `AddRoleToDBInstance`<sup>Required</sup> <a name="AddRoleToDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.AddRoleToDBInstance"></a>

```typescript
public readonly AddRoleToDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the AddRoleToDBInstance API call.

---

##### `AddSourceIdentifierToSubscription`<sup>Required</sup> <a name="AddSourceIdentifierToSubscription" id="@cdk_utils/iam.rds.RDSOperations.property.AddSourceIdentifierToSubscription"></a>

```typescript
public readonly AddSourceIdentifierToSubscription: string[];
```

- *Type:* string[]

IAM actions required for the AddSourceIdentifierToSubscription API call.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.rds.RDSOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `ApplyPendingMaintenanceAction`<sup>Required</sup> <a name="ApplyPendingMaintenanceAction" id="@cdk_utils/iam.rds.RDSOperations.property.ApplyPendingMaintenanceAction"></a>

```typescript
public readonly ApplyPendingMaintenanceAction: string[];
```

- *Type:* string[]

IAM actions required for the ApplyPendingMaintenanceAction API call.

---

##### `AuthorizeDBSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeDBSecurityGroupIngress" id="@cdk_utils/iam.rds.RDSOperations.property.AuthorizeDBSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeDBSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeDBSecurityGroupIngress API call.

---

##### `BacktrackDBCluster`<sup>Required</sup> <a name="BacktrackDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.BacktrackDBCluster"></a>

```typescript
public readonly BacktrackDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the BacktrackDBCluster API call.

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.rds.RDSOperations.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelExportTask API call.

---

##### `CopyDBClusterParameterGroup`<sup>Required</sup> <a name="CopyDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CopyDBClusterParameterGroup"></a>

```typescript
public readonly CopyDBClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CopyDBClusterParameterGroup API call.

---

##### `CopyDBClusterSnapshot`<sup>Required</sup> <a name="CopyDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.CopyDBClusterSnapshot"></a>

```typescript
public readonly CopyDBClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopyDBClusterSnapshot API call.

---

##### `CopyDBParameterGroup`<sup>Required</sup> <a name="CopyDBParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CopyDBParameterGroup"></a>

```typescript
public readonly CopyDBParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CopyDBParameterGroup API call.

---

##### `CopyDBSnapshot`<sup>Required</sup> <a name="CopyDBSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.CopyDBSnapshot"></a>

```typescript
public readonly CopyDBSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopyDBSnapshot API call.

---

##### `CopyOptionGroup`<sup>Required</sup> <a name="CopyOptionGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CopyOptionGroup"></a>

```typescript
public readonly CopyOptionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CopyOptionGroup API call.

---

##### `CreateBlueGreenDeployment`<sup>Required</sup> <a name="CreateBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSOperations.property.CreateBlueGreenDeployment"></a>

```typescript
public readonly CreateBlueGreenDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateBlueGreenDeployment API call.

---

##### `CreateCustomDBEngineVersion`<sup>Required</sup> <a name="CreateCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSOperations.property.CreateCustomDBEngineVersion"></a>

```typescript
public readonly CreateCustomDBEngineVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDBEngineVersion API call.

---

##### `CreateDBCluster`<sup>Required</sup> <a name="CreateDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBCluster"></a>

```typescript
public readonly CreateDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBCluster API call.

---

##### `CreateDBClusterEndpoint`<sup>Required</sup> <a name="CreateDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterEndpoint"></a>

```typescript
public readonly CreateDBClusterEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBClusterEndpoint API call.

---

##### `CreateDBClusterParameterGroup`<sup>Required</sup> <a name="CreateDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterParameterGroup"></a>

```typescript
public readonly CreateDBClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBClusterParameterGroup API call.

---

##### `CreateDBClusterSnapshot`<sup>Required</sup> <a name="CreateDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBClusterSnapshot"></a>

```typescript
public readonly CreateDBClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBClusterSnapshot API call.

---

##### `CreateDBInstance`<sup>Required</sup> <a name="CreateDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBInstance"></a>

```typescript
public readonly CreateDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBInstance API call.

---

##### `CreateDBInstanceReadReplica`<sup>Required</sup> <a name="CreateDBInstanceReadReplica" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBInstanceReadReplica"></a>

```typescript
public readonly CreateDBInstanceReadReplica: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBInstanceReadReplica API call.

---

##### `CreateDBParameterGroup`<sup>Required</sup> <a name="CreateDBParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBParameterGroup"></a>

```typescript
public readonly CreateDBParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBParameterGroup API call.

---

##### `CreateDBProxy`<sup>Required</sup> <a name="CreateDBProxy" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBProxy"></a>

```typescript
public readonly CreateDBProxy: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBProxy API call.

---

##### `CreateDBProxyEndpoint`<sup>Required</sup> <a name="CreateDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBProxyEndpoint"></a>

```typescript
public readonly CreateDBProxyEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBProxyEndpoint API call.

---

##### `CreateDBSecurityGroup`<sup>Required</sup> <a name="CreateDBSecurityGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBSecurityGroup"></a>

```typescript
public readonly CreateDBSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBSecurityGroup API call.

---

##### `CreateDBShardGroup`<sup>Required</sup> <a name="CreateDBShardGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBShardGroup"></a>

```typescript
public readonly CreateDBShardGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBShardGroup API call.

---

##### `CreateDBSnapshot`<sup>Required</sup> <a name="CreateDBSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBSnapshot"></a>

```typescript
public readonly CreateDBSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBSnapshot API call.

---

##### `CreateDBSubnetGroup`<sup>Required</sup> <a name="CreateDBSubnetGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateDBSubnetGroup"></a>

```typescript
public readonly CreateDBSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDBSubnetGroup API call.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.rds.RDSOperations.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventSubscription API call.

---

##### `CreateGlobalCluster`<sup>Required</sup> <a name="CreateGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.CreateGlobalCluster"></a>

```typescript
public readonly CreateGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlobalCluster API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.rds.RDSOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `CreateOptionGroup`<sup>Required</sup> <a name="CreateOptionGroup" id="@cdk_utils/iam.rds.RDSOperations.property.CreateOptionGroup"></a>

```typescript
public readonly CreateOptionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateOptionGroup API call.

---

##### `CreateTenantDatabase`<sup>Required</sup> <a name="CreateTenantDatabase" id="@cdk_utils/iam.rds.RDSOperations.property.CreateTenantDatabase"></a>

```typescript
public readonly CreateTenantDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateTenantDatabase API call.

---

##### `DeleteBlueGreenDeployment`<sup>Required</sup> <a name="DeleteBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteBlueGreenDeployment"></a>

```typescript
public readonly DeleteBlueGreenDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBlueGreenDeployment API call.

---

##### `DeleteCustomDBEngineVersion`<sup>Required</sup> <a name="DeleteCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteCustomDBEngineVersion"></a>

```typescript
public readonly DeleteCustomDBEngineVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDBEngineVersion API call.

---

##### `DeleteDBCluster`<sup>Required</sup> <a name="DeleteDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBCluster"></a>

```typescript
public readonly DeleteDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBCluster API call.

---

##### `DeleteDBClusterAutomatedBackup`<sup>Required</sup> <a name="DeleteDBClusterAutomatedBackup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterAutomatedBackup"></a>

```typescript
public readonly DeleteDBClusterAutomatedBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBClusterAutomatedBackup API call.

---

##### `DeleteDBClusterEndpoint`<sup>Required</sup> <a name="DeleteDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterEndpoint"></a>

```typescript
public readonly DeleteDBClusterEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBClusterEndpoint API call.

---

##### `DeleteDBClusterParameterGroup`<sup>Required</sup> <a name="DeleteDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterParameterGroup"></a>

```typescript
public readonly DeleteDBClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBClusterParameterGroup API call.

---

##### `DeleteDBClusterSnapshot`<sup>Required</sup> <a name="DeleteDBClusterSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBClusterSnapshot"></a>

```typescript
public readonly DeleteDBClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBClusterSnapshot API call.

---

##### `DeleteDBInstance`<sup>Required</sup> <a name="DeleteDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBInstance"></a>

```typescript
public readonly DeleteDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBInstance API call.

---

##### `DeleteDBInstanceAutomatedBackup`<sup>Required</sup> <a name="DeleteDBInstanceAutomatedBackup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBInstanceAutomatedBackup"></a>

```typescript
public readonly DeleteDBInstanceAutomatedBackup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBInstanceAutomatedBackup API call.

---

##### `DeleteDBParameterGroup`<sup>Required</sup> <a name="DeleteDBParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBParameterGroup"></a>

```typescript
public readonly DeleteDBParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBParameterGroup API call.

---

##### `DeleteDBProxy`<sup>Required</sup> <a name="DeleteDBProxy" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBProxy"></a>

```typescript
public readonly DeleteDBProxy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBProxy API call.

---

##### `DeleteDBProxyEndpoint`<sup>Required</sup> <a name="DeleteDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBProxyEndpoint"></a>

```typescript
public readonly DeleteDBProxyEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBProxyEndpoint API call.

---

##### `DeleteDBSecurityGroup`<sup>Required</sup> <a name="DeleteDBSecurityGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSecurityGroup"></a>

```typescript
public readonly DeleteDBSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBSecurityGroup API call.

---

##### `DeleteDBShardGroup`<sup>Required</sup> <a name="DeleteDBShardGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBShardGroup"></a>

```typescript
public readonly DeleteDBShardGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBShardGroup API call.

---

##### `DeleteDBSnapshot`<sup>Required</sup> <a name="DeleteDBSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSnapshot"></a>

```typescript
public readonly DeleteDBSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBSnapshot API call.

---

##### `DeleteDBSubnetGroup`<sup>Required</sup> <a name="DeleteDBSubnetGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteDBSubnetGroup"></a>

```typescript
public readonly DeleteDBSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDBSubnetGroup API call.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventSubscription API call.

---

##### `DeleteGlobalCluster`<sup>Required</sup> <a name="DeleteGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteGlobalCluster"></a>

```typescript
public readonly DeleteGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlobalCluster API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteOptionGroup`<sup>Required</sup> <a name="DeleteOptionGroup" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteOptionGroup"></a>

```typescript
public readonly DeleteOptionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOptionGroup API call.

---

##### `DeleteTenantDatabase`<sup>Required</sup> <a name="DeleteTenantDatabase" id="@cdk_utils/iam.rds.RDSOperations.property.DeleteTenantDatabase"></a>

```typescript
public readonly DeleteTenantDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTenantDatabase API call.

---

##### `DeregisterDBProxyTargets`<sup>Required</sup> <a name="DeregisterDBProxyTargets" id="@cdk_utils/iam.rds.RDSOperations.property.DeregisterDBProxyTargets"></a>

```typescript
public readonly DeregisterDBProxyTargets: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterDBProxyTargets API call.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAttributes API call.

---

##### `DescribeBlueGreenDeployments`<sup>Required</sup> <a name="DescribeBlueGreenDeployments" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeBlueGreenDeployments"></a>

```typescript
public readonly DescribeBlueGreenDeployments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBlueGreenDeployments API call.

---

##### `DescribeCertificates`<sup>Required</sup> <a name="DescribeCertificates" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeCertificates"></a>

```typescript
public readonly DescribeCertificates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCertificates API call.

---

##### `DescribeDBClusterAutomatedBackups`<sup>Required</sup> <a name="DescribeDBClusterAutomatedBackups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterAutomatedBackups"></a>

```typescript
public readonly DescribeDBClusterAutomatedBackups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterAutomatedBackups API call.

---

##### `DescribeDBClusterBacktracks`<sup>Required</sup> <a name="DescribeDBClusterBacktracks" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterBacktracks"></a>

```typescript
public readonly DescribeDBClusterBacktracks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterBacktracks API call.

---

##### `DescribeDBClusterEndpoints`<sup>Required</sup> <a name="DescribeDBClusterEndpoints" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterEndpoints"></a>

```typescript
public readonly DescribeDBClusterEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterEndpoints API call.

---

##### `DescribeDBClusterParameterGroups`<sup>Required</sup> <a name="DescribeDBClusterParameterGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterParameterGroups"></a>

```typescript
public readonly DescribeDBClusterParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterParameterGroups API call.

---

##### `DescribeDBClusterParameters`<sup>Required</sup> <a name="DescribeDBClusterParameters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterParameters"></a>

```typescript
public readonly DescribeDBClusterParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterParameters API call.

---

##### `DescribeDBClusters`<sup>Required</sup> <a name="DescribeDBClusters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusters"></a>

```typescript
public readonly DescribeDBClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusters API call.

---

##### `DescribeDBClusterSnapshotAttributes`<sup>Required</sup> <a name="DescribeDBClusterSnapshotAttributes" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterSnapshotAttributes"></a>

```typescript
public readonly DescribeDBClusterSnapshotAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterSnapshotAttributes API call.

---

##### `DescribeDBClusterSnapshots`<sup>Required</sup> <a name="DescribeDBClusterSnapshots" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBClusterSnapshots"></a>

```typescript
public readonly DescribeDBClusterSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBClusterSnapshots API call.

---

##### `DescribeDBEngineVersions`<sup>Required</sup> <a name="DescribeDBEngineVersions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBEngineVersions"></a>

```typescript
public readonly DescribeDBEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBEngineVersions API call.

---

##### `DescribeDBInstanceAutomatedBackups`<sup>Required</sup> <a name="DescribeDBInstanceAutomatedBackups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBInstanceAutomatedBackups"></a>

```typescript
public readonly DescribeDBInstanceAutomatedBackups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBInstanceAutomatedBackups API call.

---

##### `DescribeDBInstances`<sup>Required</sup> <a name="DescribeDBInstances" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBInstances"></a>

```typescript
public readonly DescribeDBInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBInstances API call.

---

##### `DescribeDBLogFiles`<sup>Required</sup> <a name="DescribeDBLogFiles" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBLogFiles"></a>

```typescript
public readonly DescribeDBLogFiles: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBLogFiles API call.

---

##### `DescribeDBMajorEngineVersions`<sup>Required</sup> <a name="DescribeDBMajorEngineVersions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBMajorEngineVersions"></a>

```typescript
public readonly DescribeDBMajorEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBMajorEngineVersions API call.

---

##### `DescribeDBParameterGroups`<sup>Required</sup> <a name="DescribeDBParameterGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBParameterGroups"></a>

```typescript
public readonly DescribeDBParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBParameterGroups API call.

---

##### `DescribeDBParameters`<sup>Required</sup> <a name="DescribeDBParameters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBParameters"></a>

```typescript
public readonly DescribeDBParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBParameters API call.

---

##### `DescribeDBProxies`<sup>Required</sup> <a name="DescribeDBProxies" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxies"></a>

```typescript
public readonly DescribeDBProxies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBProxies API call.

---

##### `DescribeDBProxyEndpoints`<sup>Required</sup> <a name="DescribeDBProxyEndpoints" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyEndpoints"></a>

```typescript
public readonly DescribeDBProxyEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBProxyEndpoints API call.

---

##### `DescribeDBProxyTargetGroups`<sup>Required</sup> <a name="DescribeDBProxyTargetGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyTargetGroups"></a>

```typescript
public readonly DescribeDBProxyTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBProxyTargetGroups API call.

---

##### `DescribeDBProxyTargets`<sup>Required</sup> <a name="DescribeDBProxyTargets" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBProxyTargets"></a>

```typescript
public readonly DescribeDBProxyTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBProxyTargets API call.

---

##### `DescribeDBRecommendations`<sup>Required</sup> <a name="DescribeDBRecommendations" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBRecommendations"></a>

```typescript
public readonly DescribeDBRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBRecommendations API call.

---

##### `DescribeDBSecurityGroups`<sup>Required</sup> <a name="DescribeDBSecurityGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSecurityGroups"></a>

```typescript
public readonly DescribeDBSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBSecurityGroups API call.

---

##### `DescribeDBShardGroups`<sup>Required</sup> <a name="DescribeDBShardGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBShardGroups"></a>

```typescript
public readonly DescribeDBShardGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBShardGroups API call.

---

##### `DescribeDBSnapshotAttributes`<sup>Required</sup> <a name="DescribeDBSnapshotAttributes" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshotAttributes"></a>

```typescript
public readonly DescribeDBSnapshotAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBSnapshotAttributes API call.

---

##### `DescribeDBSnapshots`<sup>Required</sup> <a name="DescribeDBSnapshots" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshots"></a>

```typescript
public readonly DescribeDBSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBSnapshots API call.

---

##### `DescribeDBSnapshotTenantDatabases`<sup>Required</sup> <a name="DescribeDBSnapshotTenantDatabases" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSnapshotTenantDatabases"></a>

```typescript
public readonly DescribeDBSnapshotTenantDatabases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBSnapshotTenantDatabases API call.

---

##### `DescribeDBSubnetGroups`<sup>Required</sup> <a name="DescribeDBSubnetGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeDBSubnetGroups"></a>

```typescript
public readonly DescribeDBSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDBSubnetGroups API call.

---

##### `DescribeEngineDefaultClusterParameters`<sup>Required</sup> <a name="DescribeEngineDefaultClusterParameters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeEngineDefaultClusterParameters"></a>

```typescript
public readonly DescribeEngineDefaultClusterParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngineDefaultClusterParameters API call.

---

##### `DescribeEngineDefaultParameters`<sup>Required</sup> <a name="DescribeEngineDefaultParameters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeEngineDefaultParameters"></a>

```typescript
public readonly DescribeEngineDefaultParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngineDefaultParameters API call.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventCategories API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventSubscriptions API call.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExportTasks API call.

---

##### `DescribeGlobalClusters`<sup>Required</sup> <a name="DescribeGlobalClusters" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeGlobalClusters"></a>

```typescript
public readonly DescribeGlobalClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalClusters API call.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIntegrations API call.

---

##### `DescribeOptionGroupOptions`<sup>Required</sup> <a name="DescribeOptionGroupOptions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeOptionGroupOptions"></a>

```typescript
public readonly DescribeOptionGroupOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOptionGroupOptions API call.

---

##### `DescribeOptionGroups`<sup>Required</sup> <a name="DescribeOptionGroups" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeOptionGroups"></a>

```typescript
public readonly DescribeOptionGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOptionGroups API call.

---

##### `DescribeOrderableDBInstanceOptions`<sup>Required</sup> <a name="DescribeOrderableDBInstanceOptions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeOrderableDBInstanceOptions"></a>

```typescript
public readonly DescribeOrderableDBInstanceOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrderableDBInstanceOptions API call.

---

##### `DescribePendingMaintenanceActions`<sup>Required</sup> <a name="DescribePendingMaintenanceActions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribePendingMaintenanceActions"></a>

```typescript
public readonly DescribePendingMaintenanceActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribePendingMaintenanceActions API call.

---

##### `DescribeReservedDBInstances`<sup>Required</sup> <a name="DescribeReservedDBInstances" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeReservedDBInstances"></a>

```typescript
public readonly DescribeReservedDBInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedDBInstances API call.

---

##### `DescribeReservedDBInstancesOfferings`<sup>Required</sup> <a name="DescribeReservedDBInstancesOfferings" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeReservedDBInstancesOfferings"></a>

```typescript
public readonly DescribeReservedDBInstancesOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedDBInstancesOfferings API call.

---

##### `DescribeServerlessV2PlatformVersions`<sup>Required</sup> <a name="DescribeServerlessV2PlatformVersions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeServerlessV2PlatformVersions"></a>

```typescript
public readonly DescribeServerlessV2PlatformVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServerlessV2PlatformVersions API call.

---

##### `DescribeSourceRegions`<sup>Required</sup> <a name="DescribeSourceRegions" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeSourceRegions"></a>

```typescript
public readonly DescribeSourceRegions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSourceRegions API call.

---

##### `DescribeTenantDatabases`<sup>Required</sup> <a name="DescribeTenantDatabases" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeTenantDatabases"></a>

```typescript
public readonly DescribeTenantDatabases: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTenantDatabases API call.

---

##### `DescribeValidDBInstanceModifications`<sup>Required</sup> <a name="DescribeValidDBInstanceModifications" id="@cdk_utils/iam.rds.RDSOperations.property.DescribeValidDBInstanceModifications"></a>

```typescript
public readonly DescribeValidDBInstanceModifications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeValidDBInstanceModifications API call.

---

##### `DisableHttpEndpoint`<sup>Required</sup> <a name="DisableHttpEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.DisableHttpEndpoint"></a>

```typescript
public readonly DisableHttpEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DisableHttpEndpoint API call.

---

##### `DownloadDBLogFilePortion`<sup>Required</sup> <a name="DownloadDBLogFilePortion" id="@cdk_utils/iam.rds.RDSOperations.property.DownloadDBLogFilePortion"></a>

```typescript
public readonly DownloadDBLogFilePortion: string[];
```

- *Type:* string[]

IAM actions required for the DownloadDBLogFilePortion API call.

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.EnableHttpEndpoint"></a>

```typescript
public readonly EnableHttpEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the EnableHttpEndpoint API call.

---

##### `FailoverDBCluster`<sup>Required</sup> <a name="FailoverDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.FailoverDBCluster"></a>

```typescript
public readonly FailoverDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the FailoverDBCluster API call.

---

##### `FailoverGlobalCluster`<sup>Required</sup> <a name="FailoverGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.FailoverGlobalCluster"></a>

```typescript
public readonly FailoverGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the FailoverGlobalCluster API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rds.RDSOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyActivityStream`<sup>Required</sup> <a name="ModifyActivityStream" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyActivityStream"></a>

```typescript
public readonly ModifyActivityStream: string[];
```

- *Type:* string[]

IAM actions required for the ModifyActivityStream API call.

---

##### `ModifyCertificates`<sup>Required</sup> <a name="ModifyCertificates" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyCertificates"></a>

```typescript
public readonly ModifyCertificates: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCertificates API call.

---

##### `ModifyCurrentDBClusterCapacity`<sup>Required</sup> <a name="ModifyCurrentDBClusterCapacity" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyCurrentDBClusterCapacity"></a>

```typescript
public readonly ModifyCurrentDBClusterCapacity: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCurrentDBClusterCapacity API call.

---

##### `ModifyCustomDBEngineVersion`<sup>Required</sup> <a name="ModifyCustomDBEngineVersion" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyCustomDBEngineVersion"></a>

```typescript
public readonly ModifyCustomDBEngineVersion: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCustomDBEngineVersion API call.

---

##### `ModifyDBCluster`<sup>Required</sup> <a name="ModifyDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBCluster"></a>

```typescript
public readonly ModifyDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBCluster API call.

---

##### `ModifyDBClusterEndpoint`<sup>Required</sup> <a name="ModifyDBClusterEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterEndpoint"></a>

```typescript
public readonly ModifyDBClusterEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBClusterEndpoint API call.

---

##### `ModifyDBClusterParameterGroup`<sup>Required</sup> <a name="ModifyDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterParameterGroup"></a>

```typescript
public readonly ModifyDBClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBClusterParameterGroup API call.

---

##### `ModifyDBClusterSnapshotAttribute`<sup>Required</sup> <a name="ModifyDBClusterSnapshotAttribute" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBClusterSnapshotAttribute"></a>

```typescript
public readonly ModifyDBClusterSnapshotAttribute: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBClusterSnapshotAttribute API call.

---

##### `ModifyDBInstance`<sup>Required</sup> <a name="ModifyDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBInstance"></a>

```typescript
public readonly ModifyDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBInstance API call.

---

##### `ModifyDBParameterGroup`<sup>Required</sup> <a name="ModifyDBParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBParameterGroup"></a>

```typescript
public readonly ModifyDBParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBParameterGroup API call.

---

##### `ModifyDBProxy`<sup>Required</sup> <a name="ModifyDBProxy" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxy"></a>

```typescript
public readonly ModifyDBProxy: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBProxy API call.

---

##### `ModifyDBProxyEndpoint`<sup>Required</sup> <a name="ModifyDBProxyEndpoint" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxyEndpoint"></a>

```typescript
public readonly ModifyDBProxyEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBProxyEndpoint API call.

---

##### `ModifyDBProxyTargetGroup`<sup>Required</sup> <a name="ModifyDBProxyTargetGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBProxyTargetGroup"></a>

```typescript
public readonly ModifyDBProxyTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBProxyTargetGroup API call.

---

##### `ModifyDBRecommendation`<sup>Required</sup> <a name="ModifyDBRecommendation" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBRecommendation"></a>

```typescript
public readonly ModifyDBRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBRecommendation API call.

---

##### `ModifyDBShardGroup`<sup>Required</sup> <a name="ModifyDBShardGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBShardGroup"></a>

```typescript
public readonly ModifyDBShardGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBShardGroup API call.

---

##### `ModifyDBSnapshot`<sup>Required</sup> <a name="ModifyDBSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSnapshot"></a>

```typescript
public readonly ModifyDBSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBSnapshot API call.

---

##### `ModifyDBSnapshotAttribute`<sup>Required</sup> <a name="ModifyDBSnapshotAttribute" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSnapshotAttribute"></a>

```typescript
public readonly ModifyDBSnapshotAttribute: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBSnapshotAttribute API call.

---

##### `ModifyDBSubnetGroup`<sup>Required</sup> <a name="ModifyDBSubnetGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyDBSubnetGroup"></a>

```typescript
public readonly ModifyDBSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDBSubnetGroup API call.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEventSubscription API call.

---

##### `ModifyGlobalCluster`<sup>Required</sup> <a name="ModifyGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyGlobalCluster"></a>

```typescript
public readonly ModifyGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyGlobalCluster API call.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyIntegration API call.

---

##### `ModifyOptionGroup`<sup>Required</sup> <a name="ModifyOptionGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyOptionGroup"></a>

```typescript
public readonly ModifyOptionGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyOptionGroup API call.

---

##### `ModifyTenantDatabase`<sup>Required</sup> <a name="ModifyTenantDatabase" id="@cdk_utils/iam.rds.RDSOperations.property.ModifyTenantDatabase"></a>

```typescript
public readonly ModifyTenantDatabase: string[];
```

- *Type:* string[]

IAM actions required for the ModifyTenantDatabase API call.

---

##### `PromoteReadReplica`<sup>Required</sup> <a name="PromoteReadReplica" id="@cdk_utils/iam.rds.RDSOperations.property.PromoteReadReplica"></a>

```typescript
public readonly PromoteReadReplica: string[];
```

- *Type:* string[]

IAM actions required for the PromoteReadReplica API call.

---

##### `PromoteReadReplicaDBCluster`<sup>Required</sup> <a name="PromoteReadReplicaDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.PromoteReadReplicaDBCluster"></a>

```typescript
public readonly PromoteReadReplicaDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the PromoteReadReplicaDBCluster API call.

---

##### `PurchaseReservedDBInstancesOffering`<sup>Required</sup> <a name="PurchaseReservedDBInstancesOffering" id="@cdk_utils/iam.rds.RDSOperations.property.PurchaseReservedDBInstancesOffering"></a>

```typescript
public readonly PurchaseReservedDBInstancesOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedDBInstancesOffering API call.

---

##### `RebootDBCluster`<sup>Required</sup> <a name="RebootDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.RebootDBCluster"></a>

```typescript
public readonly RebootDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the RebootDBCluster API call.

---

##### `RebootDBInstance`<sup>Required</sup> <a name="RebootDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.RebootDBInstance"></a>

```typescript
public readonly RebootDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the RebootDBInstance API call.

---

##### `RebootDBShardGroup`<sup>Required</sup> <a name="RebootDBShardGroup" id="@cdk_utils/iam.rds.RDSOperations.property.RebootDBShardGroup"></a>

```typescript
public readonly RebootDBShardGroup: string[];
```

- *Type:* string[]

IAM actions required for the RebootDBShardGroup API call.

---

##### `RegisterDBProxyTargets`<sup>Required</sup> <a name="RegisterDBProxyTargets" id="@cdk_utils/iam.rds.RDSOperations.property.RegisterDBProxyTargets"></a>

```typescript
public readonly RegisterDBProxyTargets: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDBProxyTargets API call.

---

##### `RemoveFromGlobalCluster`<sup>Required</sup> <a name="RemoveFromGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.RemoveFromGlobalCluster"></a>

```typescript
public readonly RemoveFromGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the RemoveFromGlobalCluster API call.

---

##### `RemoveRoleFromDBCluster`<sup>Required</sup> <a name="RemoveRoleFromDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.RemoveRoleFromDBCluster"></a>

```typescript
public readonly RemoveRoleFromDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRoleFromDBCluster API call.

---

##### `RemoveRoleFromDBInstance`<sup>Required</sup> <a name="RemoveRoleFromDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.RemoveRoleFromDBInstance"></a>

```typescript
public readonly RemoveRoleFromDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the RemoveRoleFromDBInstance API call.

---

##### `RemoveSourceIdentifierFromSubscription`<sup>Required</sup> <a name="RemoveSourceIdentifierFromSubscription" id="@cdk_utils/iam.rds.RDSOperations.property.RemoveSourceIdentifierFromSubscription"></a>

```typescript
public readonly RemoveSourceIdentifierFromSubscription: string[];
```

- *Type:* string[]

IAM actions required for the RemoveSourceIdentifierFromSubscription API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.rds.RDSOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `ResetDBClusterParameterGroup`<sup>Required</sup> <a name="ResetDBClusterParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ResetDBClusterParameterGroup"></a>

```typescript
public readonly ResetDBClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResetDBClusterParameterGroup API call.

---

##### `ResetDBParameterGroup`<sup>Required</sup> <a name="ResetDBParameterGroup" id="@cdk_utils/iam.rds.RDSOperations.property.ResetDBParameterGroup"></a>

```typescript
public readonly ResetDBParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResetDBParameterGroup API call.

---

##### `RestoreDBClusterFromS3`<sup>Required</sup> <a name="RestoreDBClusterFromS3" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterFromS3"></a>

```typescript
public readonly RestoreDBClusterFromS3: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBClusterFromS3 API call.

---

##### `RestoreDBClusterFromSnapshot`<sup>Required</sup> <a name="RestoreDBClusterFromSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterFromSnapshot"></a>

```typescript
public readonly RestoreDBClusterFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBClusterFromSnapshot API call.

---

##### `RestoreDBClusterToPointInTime`<sup>Required</sup> <a name="RestoreDBClusterToPointInTime" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBClusterToPointInTime"></a>

```typescript
public readonly RestoreDBClusterToPointInTime: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBClusterToPointInTime API call.

---

##### `RestoreDBInstanceFromDBSnapshot`<sup>Required</sup> <a name="RestoreDBInstanceFromDBSnapshot" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceFromDBSnapshot"></a>

```typescript
public readonly RestoreDBInstanceFromDBSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBInstanceFromDBSnapshot API call.

---

##### `RestoreDBInstanceFromS3`<sup>Required</sup> <a name="RestoreDBInstanceFromS3" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceFromS3"></a>

```typescript
public readonly RestoreDBInstanceFromS3: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBInstanceFromS3 API call.

---

##### `RestoreDBInstanceToPointInTime`<sup>Required</sup> <a name="RestoreDBInstanceToPointInTime" id="@cdk_utils/iam.rds.RDSOperations.property.RestoreDBInstanceToPointInTime"></a>

```typescript
public readonly RestoreDBInstanceToPointInTime: string[];
```

- *Type:* string[]

IAM actions required for the RestoreDBInstanceToPointInTime API call.

---

##### `RevokeDBSecurityGroupIngress`<sup>Required</sup> <a name="RevokeDBSecurityGroupIngress" id="@cdk_utils/iam.rds.RDSOperations.property.RevokeDBSecurityGroupIngress"></a>

```typescript
public readonly RevokeDBSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the RevokeDBSecurityGroupIngress API call.

---

##### `StartActivityStream`<sup>Required</sup> <a name="StartActivityStream" id="@cdk_utils/iam.rds.RDSOperations.property.StartActivityStream"></a>

```typescript
public readonly StartActivityStream: string[];
```

- *Type:* string[]

IAM actions required for the StartActivityStream API call.

---

##### `StartDBCluster`<sup>Required</sup> <a name="StartDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.StartDBCluster"></a>

```typescript
public readonly StartDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the StartDBCluster API call.

---

##### `StartDBInstance`<sup>Required</sup> <a name="StartDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.StartDBInstance"></a>

```typescript
public readonly StartDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the StartDBInstance API call.

---

##### `StartDBInstanceAutomatedBackupsReplication`<sup>Required</sup> <a name="StartDBInstanceAutomatedBackupsReplication" id="@cdk_utils/iam.rds.RDSOperations.property.StartDBInstanceAutomatedBackupsReplication"></a>

```typescript
public readonly StartDBInstanceAutomatedBackupsReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartDBInstanceAutomatedBackupsReplication API call.

---

##### `StartExportTask`<sup>Required</sup> <a name="StartExportTask" id="@cdk_utils/iam.rds.RDSOperations.property.StartExportTask"></a>

```typescript
public readonly StartExportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartExportTask API call.

---

##### `StopActivityStream`<sup>Required</sup> <a name="StopActivityStream" id="@cdk_utils/iam.rds.RDSOperations.property.StopActivityStream"></a>

```typescript
public readonly StopActivityStream: string[];
```

- *Type:* string[]

IAM actions required for the StopActivityStream API call.

---

##### `StopDBCluster`<sup>Required</sup> <a name="StopDBCluster" id="@cdk_utils/iam.rds.RDSOperations.property.StopDBCluster"></a>

```typescript
public readonly StopDBCluster: string[];
```

- *Type:* string[]

IAM actions required for the StopDBCluster API call.

---

##### `StopDBInstance`<sup>Required</sup> <a name="StopDBInstance" id="@cdk_utils/iam.rds.RDSOperations.property.StopDBInstance"></a>

```typescript
public readonly StopDBInstance: string[];
```

- *Type:* string[]

IAM actions required for the StopDBInstance API call.

---

##### `StopDBInstanceAutomatedBackupsReplication`<sup>Required</sup> <a name="StopDBInstanceAutomatedBackupsReplication" id="@cdk_utils/iam.rds.RDSOperations.property.StopDBInstanceAutomatedBackupsReplication"></a>

```typescript
public readonly StopDBInstanceAutomatedBackupsReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopDBInstanceAutomatedBackupsReplication API call.

---

##### `SwitchoverBlueGreenDeployment`<sup>Required</sup> <a name="SwitchoverBlueGreenDeployment" id="@cdk_utils/iam.rds.RDSOperations.property.SwitchoverBlueGreenDeployment"></a>

```typescript
public readonly SwitchoverBlueGreenDeployment: string[];
```

- *Type:* string[]

IAM actions required for the SwitchoverBlueGreenDeployment API call.

---

##### `SwitchoverGlobalCluster`<sup>Required</sup> <a name="SwitchoverGlobalCluster" id="@cdk_utils/iam.rds.RDSOperations.property.SwitchoverGlobalCluster"></a>

```typescript
public readonly SwitchoverGlobalCluster: string[];
```

- *Type:* string[]

IAM actions required for the SwitchoverGlobalCluster API call.

---

##### `SwitchoverReadReplica`<sup>Required</sup> <a name="SwitchoverReadReplica" id="@cdk_utils/iam.rds.RDSOperations.property.SwitchoverReadReplica"></a>

```typescript
public readonly SwitchoverReadReplica: string[];
```

- *Type:* string[]

IAM actions required for the SwitchoverReadReplica API call.

---

### RDSResources <a name="RDSResources" id="@cdk_utils/iam.rds.RDSResources"></a>

ARN builders, validators, and parsers for rds resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rds.RDSResources.Initializer"></a>

```typescript
import { rds } from '@cdk_utils/iam'

new rds.RDSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.autoBackup">autoBackup</a></code> | Builds an ARN for the auto-backup resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.cev">cev</a></code> | Builds an ARN for the cev resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.clusterAutoBackup">clusterAutoBackup</a></code> | Builds an ARN for the cluster-auto-backup resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.clusterEndpoint">clusterEndpoint</a></code> | Builds an ARN for the cluster-endpoint resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.clusterPg">clusterPg</a></code> | Builds an ARN for the cluster-pg resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.clusterSnapshot">clusterSnapshot</a></code> | Builds an ARN for the cluster-snapshot resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.db">db</a></code> | Builds an ARN for the db resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.deployment">deployment</a></code> | Builds an ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.es">es</a></code> | Builds an ARN for the es resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.globalCluster">globalCluster</a></code> | Builds an ARN for the global-cluster resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.integration">integration</a></code> | Builds an ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidAutoBackupArn">isValidAutoBackupArn</a></code> | Validates whether a string is a valid ARN for the auto-backup resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidCevArn">isValidCevArn</a></code> | Validates whether a string is a valid ARN for the cev resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidClusterAutoBackupArn">isValidClusterAutoBackupArn</a></code> | Validates whether a string is a valid ARN for the cluster-auto-backup resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidClusterEndpointArn">isValidClusterEndpointArn</a></code> | Validates whether a string is a valid ARN for the cluster-endpoint resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidClusterPgArn">isValidClusterPgArn</a></code> | Validates whether a string is a valid ARN for the cluster-pg resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidClusterSnapshotArn">isValidClusterSnapshotArn</a></code> | Validates whether a string is a valid ARN for the cluster-snapshot resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidDBArn">isValidDBArn</a></code> | Validates whether a string is a valid ARN for the db resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidEsArn">isValidEsArn</a></code> | Validates whether a string is a valid ARN for the es resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidGlobalClusterArn">isValidGlobalClusterArn</a></code> | Validates whether a string is a valid ARN for the global-cluster resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidOgArn">isValidOgArn</a></code> | Validates whether a string is a valid ARN for the og resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidPgArn">isValidPgArn</a></code> | Validates whether a string is a valid ARN for the pg resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidProxyArn">isValidProxyArn</a></code> | Validates whether a string is a valid ARN for the proxy resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidProxyEndpointArn">isValidProxyEndpointArn</a></code> | Validates whether a string is a valid ARN for the proxy-endpoint resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidRiArn">isValidRiArn</a></code> | Validates whether a string is a valid ARN for the ri resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidSecgrpArn">isValidSecgrpArn</a></code> | Validates whether a string is a valid ARN for the secgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidShardgrpArn">isValidShardgrpArn</a></code> | Validates whether a string is a valid ARN for the shardgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidSnapshotTenantDatabaseArn">isValidSnapshotTenantDatabaseArn</a></code> | Validates whether a string is a valid ARN for the snapshot-tenant-database resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidSubgrpArn">isValidSubgrpArn</a></code> | Validates whether a string is a valid ARN for the subgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidTargetGroupArn">isValidTargetGroupArn</a></code> | Validates whether a string is a valid ARN for the target-group resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.isValidTenantDatabaseArn">isValidTenantDatabaseArn</a></code> | Validates whether a string is a valid ARN for the tenant-database resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.og">og</a></code> | Builds an ARN for the og resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseAutoBackupArn">parseAutoBackupArn</a></code> | Parses a auto-backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseCevArn">parseCevArn</a></code> | Parses a cev ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseClusterAutoBackupArn">parseClusterAutoBackupArn</a></code> | Parses a cluster-auto-backup ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseClusterEndpointArn">parseClusterEndpointArn</a></code> | Parses a cluster-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseClusterPgArn">parseClusterPgArn</a></code> | Parses a cluster-pg ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseClusterSnapshotArn">parseClusterSnapshotArn</a></code> | Parses a cluster-snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseDBArn">parseDBArn</a></code> | Parses a db ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseEsArn">parseEsArn</a></code> | Parses a es ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseGlobalClusterArn">parseGlobalClusterArn</a></code> | Parses a global-cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseOgArn">parseOgArn</a></code> | Parses a og ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parsePgArn">parsePgArn</a></code> | Parses a pg ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseProxyArn">parseProxyArn</a></code> | Parses a proxy ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseProxyEndpointArn">parseProxyEndpointArn</a></code> | Parses a proxy-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseRiArn">parseRiArn</a></code> | Parses a ri ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseSecgrpArn">parseSecgrpArn</a></code> | Parses a secgrp ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseShardgrpArn">parseShardgrpArn</a></code> | Parses a shardgrp ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseSnapshotTenantDatabaseArn">parseSnapshotTenantDatabaseArn</a></code> | Parses a snapshot-tenant-database ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseSubgrpArn">parseSubgrpArn</a></code> | Parses a subgrp ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseTargetGroupArn">parseTargetGroupArn</a></code> | Parses a target-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.parseTenantDatabaseArn">parseTenantDatabaseArn</a></code> | Parses a tenant-database ARN into its components. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.pg">pg</a></code> | Builds an ARN for the pg resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.proxy">proxy</a></code> | Builds an ARN for the proxy resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.proxyEndpoint">proxyEndpoint</a></code> | Builds an ARN for the proxy-endpoint resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.ri">ri</a></code> | Builds an ARN for the ri resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.secgrp">secgrp</a></code> | Builds an ARN for the secgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.shardgrp">shardgrp</a></code> | Builds an ARN for the shardgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.snapshotTenantDatabase">snapshotTenantDatabase</a></code> | Builds an ARN for the snapshot-tenant-database resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.subgrp">subgrp</a></code> | Builds an ARN for the subgrp resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.targetGroup">targetGroup</a></code> | Builds an ARN for the target-group resource. |
| <code><a href="#@cdk_utils/iam.rds.RDSResources.tenantDatabase">tenantDatabase</a></code> | Builds an ARN for the tenant-database resource. |

---

##### `autoBackup` <a name="autoBackup" id="@cdk_utils/iam.rds.RDSResources.autoBackup"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.autoBackup(props: RDSAutoBackupArnProps)
```

Builds an ARN for the auto-backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.autoBackup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSAutoBackupArnProps">RDSAutoBackupArnProps</a>

---

##### `cev` <a name="cev" id="@cdk_utils/iam.rds.RDSResources.cev"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.cev(props: RDSCevArnProps)
```

Builds an ARN for the cev resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.cev.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSCevArnProps">RDSCevArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.rds.RDSResources.cluster"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.cluster(props: RDSClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSClusterArnProps">RDSClusterArnProps</a>

---

##### `clusterAutoBackup` <a name="clusterAutoBackup" id="@cdk_utils/iam.rds.RDSResources.clusterAutoBackup"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.clusterAutoBackup(props: RDSClusterAutoBackupArnProps)
```

Builds an ARN for the cluster-auto-backup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.clusterAutoBackup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSClusterAutoBackupArnProps">RDSClusterAutoBackupArnProps</a>

---

##### `clusterEndpoint` <a name="clusterEndpoint" id="@cdk_utils/iam.rds.RDSResources.clusterEndpoint"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.clusterEndpoint(props: RDSClusterEndpointArnProps)
```

Builds an ARN for the cluster-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.clusterEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSClusterEndpointArnProps">RDSClusterEndpointArnProps</a>

---

##### `clusterPg` <a name="clusterPg" id="@cdk_utils/iam.rds.RDSResources.clusterPg"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.clusterPg(props: RDSClusterPgArnProps)
```

Builds an ARN for the cluster-pg resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.clusterPg.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSClusterPgArnProps">RDSClusterPgArnProps</a>

---

##### `clusterSnapshot` <a name="clusterSnapshot" id="@cdk_utils/iam.rds.RDSResources.clusterSnapshot"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.clusterSnapshot(props: RDSClusterSnapshotArnProps)
```

Builds an ARN for the cluster-snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.clusterSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSClusterSnapshotArnProps">RDSClusterSnapshotArnProps</a>

---

##### `db` <a name="db" id="@cdk_utils/iam.rds.RDSResources.db"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.db(props: RDSDBArnProps)
```

Builds an ARN for the db resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.db.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSDBArnProps">RDSDBArnProps</a>

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.rds.RDSResources.deployment"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.deployment(props: RDSDeploymentArnProps)
```

Builds an ARN for the deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSDeploymentArnProps">RDSDeploymentArnProps</a>

---

##### `es` <a name="es" id="@cdk_utils/iam.rds.RDSResources.es"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.es(props: RDSEsArnProps)
```

Builds an ARN for the es resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.es.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSEsArnProps">RDSEsArnProps</a>

---

##### `globalCluster` <a name="globalCluster" id="@cdk_utils/iam.rds.RDSResources.globalCluster"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.globalCluster(props: RDSGlobalClusterArnProps)
```

Builds an ARN for the global-cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.globalCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSGlobalClusterArnProps">RDSGlobalClusterArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.rds.RDSResources.integration"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.integration(props: RDSIntegrationArnProps)
```

Builds an ARN for the integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSIntegrationArnProps">RDSIntegrationArnProps</a>

---

##### `isValidAutoBackupArn` <a name="isValidAutoBackupArn" id="@cdk_utils/iam.rds.RDSResources.isValidAutoBackupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidAutoBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the auto-backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidAutoBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCevArn` <a name="isValidCevArn" id="@cdk_utils/iam.rds.RDSResources.isValidCevArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidCevArn(arn: string)
```

Validates whether a string is a valid ARN for the cev resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidCevArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterAutoBackupArn` <a name="isValidClusterAutoBackupArn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterAutoBackupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidClusterAutoBackupArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-auto-backup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterAutoBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterEndpointArn` <a name="isValidClusterEndpointArn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterEndpointArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidClusterEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterPgArn` <a name="isValidClusterPgArn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterPgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidClusterPgArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-pg resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterPgArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterSnapshotArn` <a name="isValidClusterSnapshotArn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterSnapshotArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidClusterSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster-snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidClusterSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDBArn` <a name="isValidDBArn" id="@cdk_utils/iam.rds.RDSResources.isValidDBArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidDBArn(arn: string)
```

Validates whether a string is a valid ARN for the db resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidDBArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.rds.RDSResources.isValidDeploymentArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEsArn` <a name="isValidEsArn" id="@cdk_utils/iam.rds.RDSResources.isValidEsArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidEsArn(arn: string)
```

Validates whether a string is a valid ARN for the es resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidEsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGlobalClusterArn` <a name="isValidGlobalClusterArn" id="@cdk_utils/iam.rds.RDSResources.isValidGlobalClusterArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidGlobalClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the global-cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidGlobalClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.rds.RDSResources.isValidIntegrationArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOgArn` <a name="isValidOgArn" id="@cdk_utils/iam.rds.RDSResources.isValidOgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidOgArn(arn: string)
```

Validates whether a string is a valid ARN for the og resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidOgArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPgArn` <a name="isValidPgArn" id="@cdk_utils/iam.rds.RDSResources.isValidPgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidPgArn(arn: string)
```

Validates whether a string is a valid ARN for the pg resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidPgArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProxyArn` <a name="isValidProxyArn" id="@cdk_utils/iam.rds.RDSResources.isValidProxyArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidProxyArn(arn: string)
```

Validates whether a string is a valid ARN for the proxy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidProxyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProxyEndpointArn` <a name="isValidProxyEndpointArn" id="@cdk_utils/iam.rds.RDSResources.isValidProxyEndpointArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidProxyEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the proxy-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidProxyEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRiArn` <a name="isValidRiArn" id="@cdk_utils/iam.rds.RDSResources.isValidRiArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidRiArn(arn: string)
```

Validates whether a string is a valid ARN for the ri resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidRiArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecgrpArn` <a name="isValidSecgrpArn" id="@cdk_utils/iam.rds.RDSResources.isValidSecgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidSecgrpArn(arn: string)
```

Validates whether a string is a valid ARN for the secgrp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidSecgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidShardgrpArn` <a name="isValidShardgrpArn" id="@cdk_utils/iam.rds.RDSResources.isValidShardgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidShardgrpArn(arn: string)
```

Validates whether a string is a valid ARN for the shardgrp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidShardgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.rds.RDSResources.isValidSnapshotArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotTenantDatabaseArn` <a name="isValidSnapshotTenantDatabaseArn" id="@cdk_utils/iam.rds.RDSResources.isValidSnapshotTenantDatabaseArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidSnapshotTenantDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot-tenant-database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidSnapshotTenantDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubgrpArn` <a name="isValidSubgrpArn" id="@cdk_utils/iam.rds.RDSResources.isValidSubgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidSubgrpArn(arn: string)
```

Validates whether a string is a valid ARN for the subgrp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidSubgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetGroupArn` <a name="isValidTargetGroupArn" id="@cdk_utils/iam.rds.RDSResources.isValidTargetGroupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidTargetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the target-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidTargetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTenantDatabaseArn` <a name="isValidTenantDatabaseArn" id="@cdk_utils/iam.rds.RDSResources.isValidTenantDatabaseArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.isValidTenantDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the tenant-database resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.isValidTenantDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `og` <a name="og" id="@cdk_utils/iam.rds.RDSResources.og"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.og(props: RDSOgArnProps)
```

Builds an ARN for the og resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.og.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSOgArnProps">RDSOgArnProps</a>

---

##### `parseAutoBackupArn` <a name="parseAutoBackupArn" id="@cdk_utils/iam.rds.RDSResources.parseAutoBackupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseAutoBackupArn(arn: string)
```

Parses a auto-backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseAutoBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCevArn` <a name="parseCevArn" id="@cdk_utils/iam.rds.RDSResources.parseCevArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseCevArn(arn: string)
```

Parses a cev ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseCevArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.rds.RDSResources.parseClusterArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterAutoBackupArn` <a name="parseClusterAutoBackupArn" id="@cdk_utils/iam.rds.RDSResources.parseClusterAutoBackupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseClusterAutoBackupArn(arn: string)
```

Parses a cluster-auto-backup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseClusterAutoBackupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterEndpointArn` <a name="parseClusterEndpointArn" id="@cdk_utils/iam.rds.RDSResources.parseClusterEndpointArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseClusterEndpointArn(arn: string)
```

Parses a cluster-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseClusterEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterPgArn` <a name="parseClusterPgArn" id="@cdk_utils/iam.rds.RDSResources.parseClusterPgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseClusterPgArn(arn: string)
```

Parses a cluster-pg ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseClusterPgArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterSnapshotArn` <a name="parseClusterSnapshotArn" id="@cdk_utils/iam.rds.RDSResources.parseClusterSnapshotArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseClusterSnapshotArn(arn: string)
```

Parses a cluster-snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseClusterSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDBArn` <a name="parseDBArn" id="@cdk_utils/iam.rds.RDSResources.parseDBArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseDBArn(arn: string)
```

Parses a db ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseDBArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.rds.RDSResources.parseDeploymentArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEsArn` <a name="parseEsArn" id="@cdk_utils/iam.rds.RDSResources.parseEsArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseEsArn(arn: string)
```

Parses a es ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseEsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGlobalClusterArn` <a name="parseGlobalClusterArn" id="@cdk_utils/iam.rds.RDSResources.parseGlobalClusterArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseGlobalClusterArn(arn: string)
```

Parses a global-cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseGlobalClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.rds.RDSResources.parseIntegrationArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseIntegrationArn(arn: string)
```

Parses a integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOgArn` <a name="parseOgArn" id="@cdk_utils/iam.rds.RDSResources.parseOgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseOgArn(arn: string)
```

Parses a og ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseOgArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePgArn` <a name="parsePgArn" id="@cdk_utils/iam.rds.RDSResources.parsePgArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parsePgArn(arn: string)
```

Parses a pg ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parsePgArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProxyArn` <a name="parseProxyArn" id="@cdk_utils/iam.rds.RDSResources.parseProxyArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseProxyArn(arn: string)
```

Parses a proxy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseProxyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProxyEndpointArn` <a name="parseProxyEndpointArn" id="@cdk_utils/iam.rds.RDSResources.parseProxyEndpointArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseProxyEndpointArn(arn: string)
```

Parses a proxy-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseProxyEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRiArn` <a name="parseRiArn" id="@cdk_utils/iam.rds.RDSResources.parseRiArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseRiArn(arn: string)
```

Parses a ri ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseRiArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecgrpArn` <a name="parseSecgrpArn" id="@cdk_utils/iam.rds.RDSResources.parseSecgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseSecgrpArn(arn: string)
```

Parses a secgrp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseSecgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `parseShardgrpArn` <a name="parseShardgrpArn" id="@cdk_utils/iam.rds.RDSResources.parseShardgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseShardgrpArn(arn: string)
```

Parses a shardgrp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseShardgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.rds.RDSResources.parseSnapshotArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotTenantDatabaseArn` <a name="parseSnapshotTenantDatabaseArn" id="@cdk_utils/iam.rds.RDSResources.parseSnapshotTenantDatabaseArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseSnapshotTenantDatabaseArn(arn: string)
```

Parses a snapshot-tenant-database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseSnapshotTenantDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubgrpArn` <a name="parseSubgrpArn" id="@cdk_utils/iam.rds.RDSResources.parseSubgrpArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseSubgrpArn(arn: string)
```

Parses a subgrp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseSubgrpArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetGroupArn` <a name="parseTargetGroupArn" id="@cdk_utils/iam.rds.RDSResources.parseTargetGroupArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseTargetGroupArn(arn: string)
```

Parses a target-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseTargetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTenantDatabaseArn` <a name="parseTenantDatabaseArn" id="@cdk_utils/iam.rds.RDSResources.parseTenantDatabaseArn"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.parseTenantDatabaseArn(arn: string)
```

Parses a tenant-database ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rds.RDSResources.parseTenantDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `pg` <a name="pg" id="@cdk_utils/iam.rds.RDSResources.pg"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.pg(props: RDSPgArnProps)
```

Builds an ARN for the pg resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.pg.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSPgArnProps">RDSPgArnProps</a>

---

##### `proxy` <a name="proxy" id="@cdk_utils/iam.rds.RDSResources.proxy"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.proxy(props: RDSProxyArnProps)
```

Builds an ARN for the proxy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.proxy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSProxyArnProps">RDSProxyArnProps</a>

---

##### `proxyEndpoint` <a name="proxyEndpoint" id="@cdk_utils/iam.rds.RDSResources.proxyEndpoint"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.proxyEndpoint(props: RDSProxyEndpointArnProps)
```

Builds an ARN for the proxy-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.proxyEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSProxyEndpointArnProps">RDSProxyEndpointArnProps</a>

---

##### `ri` <a name="ri" id="@cdk_utils/iam.rds.RDSResources.ri"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.ri(props: RDSRiArnProps)
```

Builds an ARN for the ri resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.ri.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSRiArnProps">RDSRiArnProps</a>

---

##### `secgrp` <a name="secgrp" id="@cdk_utils/iam.rds.RDSResources.secgrp"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.secgrp(props: RDSSecgrpArnProps)
```

Builds an ARN for the secgrp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.secgrp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSSecgrpArnProps">RDSSecgrpArnProps</a>

---

##### `shardgrp` <a name="shardgrp" id="@cdk_utils/iam.rds.RDSResources.shardgrp"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.shardgrp(props: RDSShardgrpArnProps)
```

Builds an ARN for the shardgrp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.shardgrp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSShardgrpArnProps">RDSShardgrpArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.rds.RDSResources.snapshot"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.snapshot(props: RDSSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSSnapshotArnProps">RDSSnapshotArnProps</a>

---

##### `snapshotTenantDatabase` <a name="snapshotTenantDatabase" id="@cdk_utils/iam.rds.RDSResources.snapshotTenantDatabase"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.snapshotTenantDatabase(props: RDSSnapshotTenantDatabaseArnProps)
```

Builds an ARN for the snapshot-tenant-database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.snapshotTenantDatabase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSSnapshotTenantDatabaseArnProps">RDSSnapshotTenantDatabaseArnProps</a>

---

##### `subgrp` <a name="subgrp" id="@cdk_utils/iam.rds.RDSResources.subgrp"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.subgrp(props: RDSSubgrpArnProps)
```

Builds an ARN for the subgrp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.subgrp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSSubgrpArnProps">RDSSubgrpArnProps</a>

---

##### `targetGroup` <a name="targetGroup" id="@cdk_utils/iam.rds.RDSResources.targetGroup"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.targetGroup(props: RDSTargetGroupArnProps)
```

Builds an ARN for the target-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.targetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSTargetGroupArnProps">RDSTargetGroupArnProps</a>

---

##### `tenantDatabase` <a name="tenantDatabase" id="@cdk_utils/iam.rds.RDSResources.tenantDatabase"></a>

```typescript
import { rds } from '@cdk_utils/iam'

rds.RDSResources.tenantDatabase(props: RDSTenantDatabaseArnProps)
```

Builds an ARN for the tenant-database resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rds.RDSResources.tenantDatabase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rds.RDSTenantDatabaseArnProps">RDSTenantDatabaseArnProps</a>

---




