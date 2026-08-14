# `finspace` Submodule <a name="`finspace` Submodule" id="@cdk_utils/iam.finspace"></a>


## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentArnComponents <a name="FinspaceEnvironmentArnComponents" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceEnvironmentArnComponents: finspace.FinspaceEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceEnvironmentArnProps <a name="FinspaceEnvironmentArnProps" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceEnvironmentArnProps: finspace.FinspaceEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxClusterArnComponents <a name="FinspaceKxClusterArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents"></a>

Parsed components of a kxCluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxClusterArnComponents: finspace.FinspaceKxClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.kxCluster">kxCluster</a></code> | <code>string</code> | The KxCluster component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `kxCluster`<sup>Required</sup> <a name="kxCluster" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.kxCluster"></a>

```typescript
public readonly kxCluster: string;
```

- *Type:* string

The KxCluster component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxClusterArnProps <a name="FinspaceKxClusterArnProps" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps"></a>

Properties for building a kxCluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxClusterArnProps: finspace.FinspaceKxClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.kxCluster">kxCluster</a></code> | <code>string</code> | The KxCluster component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `kxCluster`<sup>Required</sup> <a name="kxCluster" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.kxCluster"></a>

```typescript
public readonly kxCluster: string;
```

- *Type:* string

The KxCluster component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxDatabaseArnComponents <a name="FinspaceKxDatabaseArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents"></a>

Parsed components of a kxDatabase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxDatabaseArnComponents: finspace.FinspaceKxDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.kxDatabase">kxDatabase</a></code> | <code>string</code> | The KxDatabase component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `kxDatabase`<sup>Required</sup> <a name="kxDatabase" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.kxDatabase"></a>

```typescript
public readonly kxDatabase: string;
```

- *Type:* string

The KxDatabase component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxDatabaseArnProps <a name="FinspaceKxDatabaseArnProps" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps"></a>

Properties for building a kxDatabase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxDatabaseArnProps: finspace.FinspaceKxDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.kxDatabase">kxDatabase</a></code> | <code>string</code> | The KxDatabase component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `kxDatabase`<sup>Required</sup> <a name="kxDatabase" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.kxDatabase"></a>

```typescript
public readonly kxDatabase: string;
```

- *Type:* string

The KxDatabase component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxDataviewArnComponents <a name="FinspaceKxDataviewArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents"></a>

Parsed components of a kxDataview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxDataviewArnComponents: finspace.FinspaceKxDataviewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.kxDatabase">kxDatabase</a></code> | <code>string</code> | The KxDatabase component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.kxDataview">kxDataview</a></code> | <code>string</code> | The KxDataview component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `kxDatabase`<sup>Required</sup> <a name="kxDatabase" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.kxDatabase"></a>

```typescript
public readonly kxDatabase: string;
```

- *Type:* string

The KxDatabase component.

---

##### `kxDataview`<sup>Required</sup> <a name="kxDataview" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.kxDataview"></a>

```typescript
public readonly kxDataview: string;
```

- *Type:* string

The KxDataview component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxDataviewArnProps <a name="FinspaceKxDataviewArnProps" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps"></a>

Properties for building a kxDataview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxDataviewArnProps: finspace.FinspaceKxDataviewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.kxDatabase">kxDatabase</a></code> | <code>string</code> | The KxDatabase component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.kxDataview">kxDataview</a></code> | <code>string</code> | The KxDataview component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `kxDatabase`<sup>Required</sup> <a name="kxDatabase" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.kxDatabase"></a>

```typescript
public readonly kxDatabase: string;
```

- *Type:* string

The KxDatabase component of the ARN.

---

##### `kxDataview`<sup>Required</sup> <a name="kxDataview" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.kxDataview"></a>

```typescript
public readonly kxDataview: string;
```

- *Type:* string

The KxDataview component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxEnvironmentArnComponents <a name="FinspaceKxEnvironmentArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents"></a>

Parsed components of a kxEnvironment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxEnvironmentArnComponents: finspace.FinspaceKxEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxEnvironmentArnProps <a name="FinspaceKxEnvironmentArnProps" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps"></a>

Properties for building a kxEnvironment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxEnvironmentArnProps: finspace.FinspaceKxEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxScalingGroupArnComponents <a name="FinspaceKxScalingGroupArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents"></a>

Parsed components of a kxScalingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxScalingGroupArnComponents: finspace.FinspaceKxScalingGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.kxScalingGroup">kxScalingGroup</a></code> | <code>string</code> | The KxScalingGroup component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `kxScalingGroup`<sup>Required</sup> <a name="kxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.kxScalingGroup"></a>

```typescript
public readonly kxScalingGroup: string;
```

- *Type:* string

The KxScalingGroup component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxScalingGroupArnProps <a name="FinspaceKxScalingGroupArnProps" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps"></a>

Properties for building a kxScalingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxScalingGroupArnProps: finspace.FinspaceKxScalingGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.kxScalingGroup">kxScalingGroup</a></code> | <code>string</code> | The KxScalingGroup component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `kxScalingGroup`<sup>Required</sup> <a name="kxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.kxScalingGroup"></a>

```typescript
public readonly kxScalingGroup: string;
```

- *Type:* string

The KxScalingGroup component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxUserArnComponents <a name="FinspaceKxUserArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents"></a>

Parsed components of a kxUser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxUserArnComponents: finspace.FinspaceKxUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.userName">userName</a></code> | <code>string</code> | The UserName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.finspace.FinspaceKxUserArnComponents.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component.

---

### FinspaceKxUserArnProps <a name="FinspaceKxUserArnProps" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps"></a>

Properties for building a kxUser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxUserArnProps: finspace.FinspaceKxUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.userName">userName</a></code> | <code>string</code> | The UserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceKxVolumeArnComponents <a name="FinspaceKxVolumeArnComponents" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents"></a>

Parsed components of a kxVolume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxVolumeArnComponents: finspace.FinspaceKxVolumeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.kxVolume">kxVolume</a></code> | <code>string</code> | The KxVolume component. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `kxVolume`<sup>Required</sup> <a name="kxVolume" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.kxVolume"></a>

```typescript
public readonly kxVolume: string;
```

- *Type:* string

The KxVolume component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceKxVolumeArnProps <a name="FinspaceKxVolumeArnProps" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps"></a>

Properties for building a kxVolume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceKxVolumeArnProps: finspace.FinspaceKxVolumeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.kxVolume">kxVolume</a></code> | <code>string</code> | The KxVolume component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `kxVolume`<sup>Required</sup> <a name="kxVolume" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.kxVolume"></a>

```typescript
public readonly kxVolume: string;
```

- *Type:* string

The KxVolume component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FinspaceUserArnComponents <a name="FinspaceUserArnComponents" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceUserArnComponents: finspace.FinspaceUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.finspace.FinspaceUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### FinspaceUserArnProps <a name="FinspaceUserArnProps" id="@cdk_utils/iam.finspace.FinspaceUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace.FinspaceUserArnProps.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

const finspaceUserArnProps: finspace.FinspaceUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.finspace.FinspaceUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace.FinspaceUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace.FinspaceUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace.FinspaceUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceActions <a name="FinspaceActions" id="@cdk_utils/iam.finspace.FinspaceActions"></a>

IAM action constants for the finspace service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace.FinspaceActions.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

new finspace.FinspaceActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] finspace:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxChangeset">actionGetKxChangeset</a></code> | <code>string</code> | [Read] finspace:GetKxChangeset. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxCluster">actionGetKxCluster</a></code> | <code>string</code> | [Read] finspace:GetKxCluster. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxConnectionString">actionGetKxConnectionString</a></code> | <code>string</code> | [Read] finspace:GetKxConnectionString. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxDatabase">actionGetKxDatabase</a></code> | <code>string</code> | [Read] finspace:GetKxDatabase. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxDataview">actionGetKxDataview</a></code> | <code>string</code> | [Read] finspace:GetKxDataview. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxEnvironment">actionGetKxEnvironment</a></code> | <code>string</code> | [Read] finspace:GetKxEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxScalingGroup">actionGetKxScalingGroup</a></code> | <code>string</code> | [Read] finspace:GetKxScalingGroup. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxUser">actionGetKxUser</a></code> | <code>string</code> | [Read] finspace:GetKxUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxVolume">actionGetKxVolume</a></code> | <code>string</code> | [Read] finspace:GetKxVolume. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetLoadSampleDataSetGroupIntoEnvironmentStatus">actionGetLoadSampleDataSetGroupIntoEnvironmentStatus</a></code> | <code>string</code> | [Read] finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] finspace:GetUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ConnectKxCluster">ConnectKxCluster</a></code> | <code>string</code> | [Write] finspace:ConnectKxCluster. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] finspace:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxChangeset">CreateKxChangeset</a></code> | <code>string</code> | [Write] finspace:CreateKxChangeset. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxCluster">CreateKxCluster</a></code> | <code>string</code> | [Write] finspace:CreateKxCluster. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxDatabase">CreateKxDatabase</a></code> | <code>string</code> | [Write] finspace:CreateKxDatabase. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxDataview">CreateKxDataview</a></code> | <code>string</code> | [Write] finspace:CreateKxDataview. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxEnvironment">CreateKxEnvironment</a></code> | <code>string</code> | [Write] finspace:CreateKxEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxScalingGroup">CreateKxScalingGroup</a></code> | <code>string</code> | [Write] finspace:CreateKxScalingGroup. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxUser">CreateKxUser</a></code> | <code>string</code> | [Write] finspace:CreateKxUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxVolume">CreateKxVolume</a></code> | <code>string</code> | [Write] finspace:CreateKxVolume. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] finspace:CreateUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] finspace:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxCluster">DeleteKxCluster</a></code> | <code>string</code> | [Write] finspace:DeleteKxCluster. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxClusterNode">DeleteKxClusterNode</a></code> | <code>string</code> | [Write] finspace:DeleteKxClusterNode. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxDatabase">DeleteKxDatabase</a></code> | <code>string</code> | [Write] finspace:DeleteKxDatabase. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxDataview">DeleteKxDataview</a></code> | <code>string</code> | [Write] finspace:DeleteKxDataview. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxEnvironment">DeleteKxEnvironment</a></code> | <code>string</code> | [Write] finspace:DeleteKxEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxScalingGroup">DeleteKxScalingGroup</a></code> | <code>string</code> | [Write] finspace:DeleteKxScalingGroup. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxUser">DeleteKxUser</a></code> | <code>string</code> | [Write] finspace:DeleteKxUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxVolume">DeleteKxVolume</a></code> | <code>string</code> | [Write] finspace:DeleteKxVolume. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] finspace:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxChangesets">ListKxChangesets</a></code> | <code>string</code> | [List] finspace:ListKxChangesets. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxClusterNodes">ListKxClusterNodes</a></code> | <code>string</code> | [List] finspace:ListKxClusterNodes. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxClusters">ListKxClusters</a></code> | <code>string</code> | [List] finspace:ListKxClusters. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxDatabases">ListKxDatabases</a></code> | <code>string</code> | [List] finspace:ListKxDatabases. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxDataviews">ListKxDataviews</a></code> | <code>string</code> | [List] finspace:ListKxDataviews. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxEnvironments">ListKxEnvironments</a></code> | <code>string</code> | [List] finspace:ListKxEnvironments. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxScalingGroups">ListKxScalingGroups</a></code> | <code>string</code> | [List] finspace:ListKxScalingGroups. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxUsers">ListKxUsers</a></code> | <code>string</code> | [List] finspace:ListKxUsers. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListKxVolumes">ListKxVolumes</a></code> | <code>string</code> | [List] finspace:ListKxVolumes. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] finspace:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] finspace:ListUsers. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.LoadSampleDataSetGroupIntoEnvironment">LoadSampleDataSetGroupIntoEnvironment</a></code> | <code>string</code> | [Write] finspace:LoadSampleDataSetGroupIntoEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.MountKxDatabase">MountKxDatabase</a></code> | <code>string</code> | [Write] finspace:MountKxDatabase. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.ResetUserPassword">ResetUserPassword</a></code> | <code>string</code> | [Write] finspace:ResetUserPassword. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] finspace:TagResource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] finspace:UntagResource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] finspace:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxClusterCodeConfiguration">UpdateKxClusterCodeConfiguration</a></code> | <code>string</code> | [Write] finspace:UpdateKxClusterCodeConfiguration. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxClusterDatabases">UpdateKxClusterDatabases</a></code> | <code>string</code> | [Write] finspace:UpdateKxClusterDatabases. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxDatabase">UpdateKxDatabase</a></code> | <code>string</code> | [Write] finspace:UpdateKxDatabase. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxDataview">UpdateKxDataview</a></code> | <code>string</code> | [Write] finspace:UpdateKxDataview. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxEnvironment">UpdateKxEnvironment</a></code> | <code>string</code> | [Write] finspace:UpdateKxEnvironment. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxEnvironmentNetwork">UpdateKxEnvironmentNetwork</a></code> | <code>string</code> | [Write] finspace:UpdateKxEnvironmentNetwork. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxUser">UpdateKxUser</a></code> | <code>string</code> | [Write] finspace:UpdateKxUser. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxVolume">UpdateKxVolume</a></code> | <code>string</code> | [Write] finspace:UpdateKxVolume. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] finspace:UpdateUser. |

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] finspace:GetEnvironment.

---

##### `actionGetKxChangeset`<sup>Required</sup> <a name="actionGetKxChangeset" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxChangeset"></a>

```typescript
public readonly actionGetKxChangeset: string;
```

- *Type:* string

[Read] finspace:GetKxChangeset.

---

##### `actionGetKxCluster`<sup>Required</sup> <a name="actionGetKxCluster" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxCluster"></a>

```typescript
public readonly actionGetKxCluster: string;
```

- *Type:* string

[Read] finspace:GetKxCluster.

---

##### `actionGetKxConnectionString`<sup>Required</sup> <a name="actionGetKxConnectionString" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxConnectionString"></a>

```typescript
public readonly actionGetKxConnectionString: string;
```

- *Type:* string

[Read] finspace:GetKxConnectionString.

---

##### `actionGetKxDatabase`<sup>Required</sup> <a name="actionGetKxDatabase" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxDatabase"></a>

```typescript
public readonly actionGetKxDatabase: string;
```

- *Type:* string

[Read] finspace:GetKxDatabase.

---

##### `actionGetKxDataview`<sup>Required</sup> <a name="actionGetKxDataview" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxDataview"></a>

```typescript
public readonly actionGetKxDataview: string;
```

- *Type:* string

[Read] finspace:GetKxDataview.

---

##### `actionGetKxEnvironment`<sup>Required</sup> <a name="actionGetKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxEnvironment"></a>

```typescript
public readonly actionGetKxEnvironment: string;
```

- *Type:* string

[Read] finspace:GetKxEnvironment.

---

##### `actionGetKxScalingGroup`<sup>Required</sup> <a name="actionGetKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxScalingGroup"></a>

```typescript
public readonly actionGetKxScalingGroup: string;
```

- *Type:* string

[Read] finspace:GetKxScalingGroup.

---

##### `actionGetKxUser`<sup>Required</sup> <a name="actionGetKxUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxUser"></a>

```typescript
public readonly actionGetKxUser: string;
```

- *Type:* string

[Read] finspace:GetKxUser.

---

##### `actionGetKxVolume`<sup>Required</sup> <a name="actionGetKxVolume" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetKxVolume"></a>

```typescript
public readonly actionGetKxVolume: string;
```

- *Type:* string

[Read] finspace:GetKxVolume.

---

##### `actionGetLoadSampleDataSetGroupIntoEnvironmentStatus`<sup>Required</sup> <a name="actionGetLoadSampleDataSetGroupIntoEnvironmentStatus" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetLoadSampleDataSetGroupIntoEnvironmentStatus"></a>

```typescript
public readonly actionGetLoadSampleDataSetGroupIntoEnvironmentStatus: string;
```

- *Type:* string

[Read] finspace:GetLoadSampleDataSetGroupIntoEnvironmentStatus.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] finspace:GetUser.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.finspace.FinspaceActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.finspace.FinspaceActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.finspace.FinspaceActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.finspace.FinspaceActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.finspace.FinspaceActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConnectKxCluster`<sup>Required</sup> <a name="ConnectKxCluster" id="@cdk_utils/iam.finspace.FinspaceActions.property.ConnectKxCluster"></a>

```typescript
public readonly ConnectKxCluster: string;
```

- *Type:* string

[Write] finspace:ConnectKxCluster.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] finspace:CreateEnvironment.

---

##### `CreateKxChangeset`<sup>Required</sup> <a name="CreateKxChangeset" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxChangeset"></a>

```typescript
public readonly CreateKxChangeset: string;
```

- *Type:* string

[Write] finspace:CreateKxChangeset.

---

##### `CreateKxCluster`<sup>Required</sup> <a name="CreateKxCluster" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxCluster"></a>

```typescript
public readonly CreateKxCluster: string;
```

- *Type:* string

[Write] finspace:CreateKxCluster.

---

##### `CreateKxDatabase`<sup>Required</sup> <a name="CreateKxDatabase" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxDatabase"></a>

```typescript
public readonly CreateKxDatabase: string;
```

- *Type:* string

[Write] finspace:CreateKxDatabase.

---

##### `CreateKxDataview`<sup>Required</sup> <a name="CreateKxDataview" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxDataview"></a>

```typescript
public readonly CreateKxDataview: string;
```

- *Type:* string

[Write] finspace:CreateKxDataview.

---

##### `CreateKxEnvironment`<sup>Required</sup> <a name="CreateKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxEnvironment"></a>

```typescript
public readonly CreateKxEnvironment: string;
```

- *Type:* string

[Write] finspace:CreateKxEnvironment.

---

##### `CreateKxScalingGroup`<sup>Required</sup> <a name="CreateKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxScalingGroup"></a>

```typescript
public readonly CreateKxScalingGroup: string;
```

- *Type:* string

[Write] finspace:CreateKxScalingGroup.

---

##### `CreateKxUser`<sup>Required</sup> <a name="CreateKxUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxUser"></a>

```typescript
public readonly CreateKxUser: string;
```

- *Type:* string

[Write] finspace:CreateKxUser.

---

##### `CreateKxVolume`<sup>Required</sup> <a name="CreateKxVolume" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateKxVolume"></a>

```typescript
public readonly CreateKxVolume: string;
```

- *Type:* string

[Write] finspace:CreateKxVolume.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] finspace:CreateUser.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] finspace:DeleteEnvironment.

---

##### `DeleteKxCluster`<sup>Required</sup> <a name="DeleteKxCluster" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxCluster"></a>

```typescript
public readonly DeleteKxCluster: string;
```

- *Type:* string

[Write] finspace:DeleteKxCluster.

---

##### `DeleteKxClusterNode`<sup>Required</sup> <a name="DeleteKxClusterNode" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxClusterNode"></a>

```typescript
public readonly DeleteKxClusterNode: string;
```

- *Type:* string

[Write] finspace:DeleteKxClusterNode.

---

##### `DeleteKxDatabase`<sup>Required</sup> <a name="DeleteKxDatabase" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxDatabase"></a>

```typescript
public readonly DeleteKxDatabase: string;
```

- *Type:* string

[Write] finspace:DeleteKxDatabase.

---

##### `DeleteKxDataview`<sup>Required</sup> <a name="DeleteKxDataview" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxDataview"></a>

```typescript
public readonly DeleteKxDataview: string;
```

- *Type:* string

[Write] finspace:DeleteKxDataview.

---

##### `DeleteKxEnvironment`<sup>Required</sup> <a name="DeleteKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxEnvironment"></a>

```typescript
public readonly DeleteKxEnvironment: string;
```

- *Type:* string

[Write] finspace:DeleteKxEnvironment.

---

##### `DeleteKxScalingGroup`<sup>Required</sup> <a name="DeleteKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxScalingGroup"></a>

```typescript
public readonly DeleteKxScalingGroup: string;
```

- *Type:* string

[Write] finspace:DeleteKxScalingGroup.

---

##### `DeleteKxUser`<sup>Required</sup> <a name="DeleteKxUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxUser"></a>

```typescript
public readonly DeleteKxUser: string;
```

- *Type:* string

[Write] finspace:DeleteKxUser.

---

##### `DeleteKxVolume`<sup>Required</sup> <a name="DeleteKxVolume" id="@cdk_utils/iam.finspace.FinspaceActions.property.DeleteKxVolume"></a>

```typescript
public readonly DeleteKxVolume: string;
```

- *Type:* string

[Write] finspace:DeleteKxVolume.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] finspace:ListEnvironments.

---

##### `ListKxChangesets`<sup>Required</sup> <a name="ListKxChangesets" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxChangesets"></a>

```typescript
public readonly ListKxChangesets: string;
```

- *Type:* string

[List] finspace:ListKxChangesets.

---

##### `ListKxClusterNodes`<sup>Required</sup> <a name="ListKxClusterNodes" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxClusterNodes"></a>

```typescript
public readonly ListKxClusterNodes: string;
```

- *Type:* string

[List] finspace:ListKxClusterNodes.

---

##### `ListKxClusters`<sup>Required</sup> <a name="ListKxClusters" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxClusters"></a>

```typescript
public readonly ListKxClusters: string;
```

- *Type:* string

[List] finspace:ListKxClusters.

---

##### `ListKxDatabases`<sup>Required</sup> <a name="ListKxDatabases" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxDatabases"></a>

```typescript
public readonly ListKxDatabases: string;
```

- *Type:* string

[List] finspace:ListKxDatabases.

---

##### `ListKxDataviews`<sup>Required</sup> <a name="ListKxDataviews" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxDataviews"></a>

```typescript
public readonly ListKxDataviews: string;
```

- *Type:* string

[List] finspace:ListKxDataviews.

---

##### `ListKxEnvironments`<sup>Required</sup> <a name="ListKxEnvironments" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxEnvironments"></a>

```typescript
public readonly ListKxEnvironments: string;
```

- *Type:* string

[List] finspace:ListKxEnvironments.

---

##### `ListKxScalingGroups`<sup>Required</sup> <a name="ListKxScalingGroups" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxScalingGroups"></a>

```typescript
public readonly ListKxScalingGroups: string;
```

- *Type:* string

[List] finspace:ListKxScalingGroups.

---

##### `ListKxUsers`<sup>Required</sup> <a name="ListKxUsers" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxUsers"></a>

```typescript
public readonly ListKxUsers: string;
```

- *Type:* string

[List] finspace:ListKxUsers.

---

##### `ListKxVolumes`<sup>Required</sup> <a name="ListKxVolumes" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListKxVolumes"></a>

```typescript
public readonly ListKxVolumes: string;
```

- *Type:* string

[List] finspace:ListKxVolumes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] finspace:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.finspace.FinspaceActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] finspace:ListUsers.

---

##### `LoadSampleDataSetGroupIntoEnvironment`<sup>Required</sup> <a name="LoadSampleDataSetGroupIntoEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.LoadSampleDataSetGroupIntoEnvironment"></a>

```typescript
public readonly LoadSampleDataSetGroupIntoEnvironment: string;
```

- *Type:* string

[Write] finspace:LoadSampleDataSetGroupIntoEnvironment.

---

##### `MountKxDatabase`<sup>Required</sup> <a name="MountKxDatabase" id="@cdk_utils/iam.finspace.FinspaceActions.property.MountKxDatabase"></a>

```typescript
public readonly MountKxDatabase: string;
```

- *Type:* string

[Write] finspace:MountKxDatabase.

---

##### `ResetUserPassword`<sup>Required</sup> <a name="ResetUserPassword" id="@cdk_utils/iam.finspace.FinspaceActions.property.ResetUserPassword"></a>

```typescript
public readonly ResetUserPassword: string;
```

- *Type:* string

[Write] finspace:ResetUserPassword.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.finspace.FinspaceActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.finspace.FinspaceActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] finspace:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.finspace.FinspaceActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] finspace:UntagResource.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] finspace:UpdateEnvironment.

---

##### `UpdateKxClusterCodeConfiguration`<sup>Required</sup> <a name="UpdateKxClusterCodeConfiguration" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxClusterCodeConfiguration"></a>

```typescript
public readonly UpdateKxClusterCodeConfiguration: string;
```

- *Type:* string

[Write] finspace:UpdateKxClusterCodeConfiguration.

---

##### `UpdateKxClusterDatabases`<sup>Required</sup> <a name="UpdateKxClusterDatabases" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxClusterDatabases"></a>

```typescript
public readonly UpdateKxClusterDatabases: string;
```

- *Type:* string

[Write] finspace:UpdateKxClusterDatabases.

---

##### `UpdateKxDatabase`<sup>Required</sup> <a name="UpdateKxDatabase" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxDatabase"></a>

```typescript
public readonly UpdateKxDatabase: string;
```

- *Type:* string

[Write] finspace:UpdateKxDatabase.

---

##### `UpdateKxDataview`<sup>Required</sup> <a name="UpdateKxDataview" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxDataview"></a>

```typescript
public readonly UpdateKxDataview: string;
```

- *Type:* string

[Write] finspace:UpdateKxDataview.

---

##### `UpdateKxEnvironment`<sup>Required</sup> <a name="UpdateKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxEnvironment"></a>

```typescript
public readonly UpdateKxEnvironment: string;
```

- *Type:* string

[Write] finspace:UpdateKxEnvironment.

---

##### `UpdateKxEnvironmentNetwork`<sup>Required</sup> <a name="UpdateKxEnvironmentNetwork" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxEnvironmentNetwork"></a>

```typescript
public readonly UpdateKxEnvironmentNetwork: string;
```

- *Type:* string

[Write] finspace:UpdateKxEnvironmentNetwork.

---

##### `UpdateKxUser`<sup>Required</sup> <a name="UpdateKxUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxUser"></a>

```typescript
public readonly UpdateKxUser: string;
```

- *Type:* string

[Write] finspace:UpdateKxUser.

---

##### `UpdateKxVolume`<sup>Required</sup> <a name="UpdateKxVolume" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateKxVolume"></a>

```typescript
public readonly UpdateKxVolume: string;
```

- *Type:* string

[Write] finspace:UpdateKxVolume.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.finspace.FinspaceActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] finspace:UpdateUser.

---

### FinspaceConditions <a name="FinspaceConditions" id="@cdk_utils/iam.finspace.FinspaceConditions"></a>

Condition key constants and builders for finspace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace.FinspaceConditions.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

new finspace.FinspaceConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.finspace.FinspaceConditions.requestTag"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.finspace.FinspaceConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.finspace.FinspaceConditions.resourceTag"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.finspace.FinspaceConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.tagKeys"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.finspace.FinspaceConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxClusterConditionKeys">CreateKxClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxCluster action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxDatabaseConditionKeys">CreateKxDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxDatabase action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxDataviewConditionKeys">CreateKxDataviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxDataview action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxEnvironmentConditionKeys">CreateKxEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxEnvironment action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxScalingGroupConditionKeys">CreateKxScalingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxScalingGroup action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxUserConditionKeys">CreateKxUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxUser action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxVolumeConditionKeys">CreateKxVolumeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKxVolume action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.finspace.FinspaceConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateKxClusterConditionKeys`<sup>Required</sup> <a name="CreateKxClusterConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxClusterConditionKeys"></a>

```typescript
public readonly CreateKxClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxCluster action.

---

##### `CreateKxDatabaseConditionKeys`<sup>Required</sup> <a name="CreateKxDatabaseConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxDatabaseConditionKeys"></a>

```typescript
public readonly CreateKxDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxDatabase action.

---

##### `CreateKxDataviewConditionKeys`<sup>Required</sup> <a name="CreateKxDataviewConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxDataviewConditionKeys"></a>

```typescript
public readonly CreateKxDataviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxDataview action.

---

##### `CreateKxEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateKxEnvironmentConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxEnvironmentConditionKeys"></a>

```typescript
public readonly CreateKxEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxEnvironment action.

---

##### `CreateKxScalingGroupConditionKeys`<sup>Required</sup> <a name="CreateKxScalingGroupConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxScalingGroupConditionKeys"></a>

```typescript
public readonly CreateKxScalingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxScalingGroup action.

---

##### `CreateKxUserConditionKeys`<sup>Required</sup> <a name="CreateKxUserConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxUserConditionKeys"></a>

```typescript
public readonly CreateKxUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxUser action.

---

##### `CreateKxVolumeConditionKeys`<sup>Required</sup> <a name="CreateKxVolumeConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateKxVolumeConditionKeys"></a>

```typescript
public readonly CreateKxVolumeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKxVolume action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.finspace.FinspaceConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### FinspaceOperations <a name="FinspaceOperations" id="@cdk_utils/iam.finspace.FinspaceOperations"></a>

API operation to required IAM actions mapping for finspace.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace.FinspaceOperations.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

new finspace.FinspaceOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxChangeset">CreateKxChangeset</a></code> | <code>string[]</code> | IAM actions required for the CreateKxChangeset API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxCluster">CreateKxCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateKxCluster API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxDatabase">CreateKxDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateKxDatabase API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxDataview">CreateKxDataview</a></code> | <code>string[]</code> | IAM actions required for the CreateKxDataview API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxEnvironment">CreateKxEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateKxEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxScalingGroup">CreateKxScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateKxScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxUser">CreateKxUser</a></code> | <code>string[]</code> | IAM actions required for the CreateKxUser API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxVolume">CreateKxVolume</a></code> | <code>string[]</code> | IAM actions required for the CreateKxVolume API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxCluster">DeleteKxCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxCluster API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxClusterNode">DeleteKxClusterNode</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxClusterNode API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxDatabase">DeleteKxDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxDatabase API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxDataview">DeleteKxDataview</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxDataview API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxEnvironment">DeleteKxEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxScalingGroup">DeleteKxScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxUser">DeleteKxUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxUser API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxVolume">DeleteKxVolume</a></code> | <code>string[]</code> | IAM actions required for the DeleteKxVolume API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxChangesets">ListKxChangesets</a></code> | <code>string[]</code> | IAM actions required for the ListKxChangesets API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxClusterNodes">ListKxClusterNodes</a></code> | <code>string[]</code> | IAM actions required for the ListKxClusterNodes API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxClusters">ListKxClusters</a></code> | <code>string[]</code> | IAM actions required for the ListKxClusters API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxDatabases">ListKxDatabases</a></code> | <code>string[]</code> | IAM actions required for the ListKxDatabases API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxDataviews">ListKxDataviews</a></code> | <code>string[]</code> | IAM actions required for the ListKxDataviews API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxEnvironments">ListKxEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListKxEnvironments API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxScalingGroups">ListKxScalingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListKxScalingGroups API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxUsers">ListKxUsers</a></code> | <code>string[]</code> | IAM actions required for the ListKxUsers API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxVolumes">ListKxVolumes</a></code> | <code>string[]</code> | IAM actions required for the ListKxVolumes API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxChangeset">opGetKxChangeset</a></code> | <code>string[]</code> | IAM actions required for the GetKxChangeset API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxCluster">opGetKxCluster</a></code> | <code>string[]</code> | IAM actions required for the GetKxCluster API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxConnectionString">opGetKxConnectionString</a></code> | <code>string[]</code> | IAM actions required for the GetKxConnectionString API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxDatabase">opGetKxDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetKxDatabase API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxDataview">opGetKxDataview</a></code> | <code>string[]</code> | IAM actions required for the GetKxDataview API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxEnvironment">opGetKxEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetKxEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxScalingGroup">opGetKxScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the GetKxScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxUser">opGetKxUser</a></code> | <code>string[]</code> | IAM actions required for the GetKxUser API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxVolume">opGetKxVolume</a></code> | <code>string[]</code> | IAM actions required for the GetKxVolume API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxClusterCodeConfiguration">UpdateKxClusterCodeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxClusterCodeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxClusterDatabases">UpdateKxClusterDatabases</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxClusterDatabases API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxDatabase">UpdateKxDatabase</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxDatabase API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxDataview">UpdateKxDataview</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxDataview API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxEnvironment">UpdateKxEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxEnvironment API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxEnvironmentNetwork">UpdateKxEnvironmentNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxEnvironmentNetwork API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxUser">UpdateKxUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxUser API call. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxVolume">UpdateKxVolume</a></code> | <code>string[]</code> | IAM actions required for the UpdateKxVolume API call. |

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateKxChangeset`<sup>Required</sup> <a name="CreateKxChangeset" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxChangeset"></a>

```typescript
public readonly CreateKxChangeset: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxChangeset API call.

---

##### `CreateKxCluster`<sup>Required</sup> <a name="CreateKxCluster" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxCluster"></a>

```typescript
public readonly CreateKxCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxCluster API call.

---

##### `CreateKxDatabase`<sup>Required</sup> <a name="CreateKxDatabase" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxDatabase"></a>

```typescript
public readonly CreateKxDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxDatabase API call.

---

##### `CreateKxDataview`<sup>Required</sup> <a name="CreateKxDataview" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxDataview"></a>

```typescript
public readonly CreateKxDataview: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxDataview API call.

---

##### `CreateKxEnvironment`<sup>Required</sup> <a name="CreateKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxEnvironment"></a>

```typescript
public readonly CreateKxEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxEnvironment API call.

---

##### `CreateKxScalingGroup`<sup>Required</sup> <a name="CreateKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxScalingGroup"></a>

```typescript
public readonly CreateKxScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxScalingGroup API call.

---

##### `CreateKxUser`<sup>Required</sup> <a name="CreateKxUser" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxUser"></a>

```typescript
public readonly CreateKxUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxUser API call.

---

##### `CreateKxVolume`<sup>Required</sup> <a name="CreateKxVolume" id="@cdk_utils/iam.finspace.FinspaceOperations.property.CreateKxVolume"></a>

```typescript
public readonly CreateKxVolume: string[];
```

- *Type:* string[]

IAM actions required for the CreateKxVolume API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteKxCluster`<sup>Required</sup> <a name="DeleteKxCluster" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxCluster"></a>

```typescript
public readonly DeleteKxCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxCluster API call.

---

##### `DeleteKxClusterNode`<sup>Required</sup> <a name="DeleteKxClusterNode" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxClusterNode"></a>

```typescript
public readonly DeleteKxClusterNode: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxClusterNode API call.

---

##### `DeleteKxDatabase`<sup>Required</sup> <a name="DeleteKxDatabase" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxDatabase"></a>

```typescript
public readonly DeleteKxDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxDatabase API call.

---

##### `DeleteKxDataview`<sup>Required</sup> <a name="DeleteKxDataview" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxDataview"></a>

```typescript
public readonly DeleteKxDataview: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxDataview API call.

---

##### `DeleteKxEnvironment`<sup>Required</sup> <a name="DeleteKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxEnvironment"></a>

```typescript
public readonly DeleteKxEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxEnvironment API call.

---

##### `DeleteKxScalingGroup`<sup>Required</sup> <a name="DeleteKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxScalingGroup"></a>

```typescript
public readonly DeleteKxScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxScalingGroup API call.

---

##### `DeleteKxUser`<sup>Required</sup> <a name="DeleteKxUser" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxUser"></a>

```typescript
public readonly DeleteKxUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxUser API call.

---

##### `DeleteKxVolume`<sup>Required</sup> <a name="DeleteKxVolume" id="@cdk_utils/iam.finspace.FinspaceOperations.property.DeleteKxVolume"></a>

```typescript
public readonly DeleteKxVolume: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKxVolume API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListKxChangesets`<sup>Required</sup> <a name="ListKxChangesets" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxChangesets"></a>

```typescript
public readonly ListKxChangesets: string[];
```

- *Type:* string[]

IAM actions required for the ListKxChangesets API call.

---

##### `ListKxClusterNodes`<sup>Required</sup> <a name="ListKxClusterNodes" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxClusterNodes"></a>

```typescript
public readonly ListKxClusterNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListKxClusterNodes API call.

---

##### `ListKxClusters`<sup>Required</sup> <a name="ListKxClusters" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxClusters"></a>

```typescript
public readonly ListKxClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListKxClusters API call.

---

##### `ListKxDatabases`<sup>Required</sup> <a name="ListKxDatabases" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxDatabases"></a>

```typescript
public readonly ListKxDatabases: string[];
```

- *Type:* string[]

IAM actions required for the ListKxDatabases API call.

---

##### `ListKxDataviews`<sup>Required</sup> <a name="ListKxDataviews" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxDataviews"></a>

```typescript
public readonly ListKxDataviews: string[];
```

- *Type:* string[]

IAM actions required for the ListKxDataviews API call.

---

##### `ListKxEnvironments`<sup>Required</sup> <a name="ListKxEnvironments" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxEnvironments"></a>

```typescript
public readonly ListKxEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListKxEnvironments API call.

---

##### `ListKxScalingGroups`<sup>Required</sup> <a name="ListKxScalingGroups" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxScalingGroups"></a>

```typescript
public readonly ListKxScalingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListKxScalingGroups API call.

---

##### `ListKxUsers`<sup>Required</sup> <a name="ListKxUsers" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxUsers"></a>

```typescript
public readonly ListKxUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListKxUsers API call.

---

##### `ListKxVolumes`<sup>Required</sup> <a name="ListKxVolumes" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListKxVolumes"></a>

```typescript
public readonly ListKxVolumes: string[];
```

- *Type:* string[]

IAM actions required for the ListKxVolumes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.finspace.FinspaceOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetKxChangeset`<sup>Required</sup> <a name="opGetKxChangeset" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxChangeset"></a>

```typescript
public readonly opGetKxChangeset: string[];
```

- *Type:* string[]

IAM actions required for the GetKxChangeset API call.

---

##### `opGetKxCluster`<sup>Required</sup> <a name="opGetKxCluster" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxCluster"></a>

```typescript
public readonly opGetKxCluster: string[];
```

- *Type:* string[]

IAM actions required for the GetKxCluster API call.

---

##### `opGetKxConnectionString`<sup>Required</sup> <a name="opGetKxConnectionString" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxConnectionString"></a>

```typescript
public readonly opGetKxConnectionString: string[];
```

- *Type:* string[]

IAM actions required for the GetKxConnectionString API call.

---

##### `opGetKxDatabase`<sup>Required</sup> <a name="opGetKxDatabase" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxDatabase"></a>

```typescript
public readonly opGetKxDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetKxDatabase API call.

---

##### `opGetKxDataview`<sup>Required</sup> <a name="opGetKxDataview" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxDataview"></a>

```typescript
public readonly opGetKxDataview: string[];
```

- *Type:* string[]

IAM actions required for the GetKxDataview API call.

---

##### `opGetKxEnvironment`<sup>Required</sup> <a name="opGetKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxEnvironment"></a>

```typescript
public readonly opGetKxEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetKxEnvironment API call.

---

##### `opGetKxScalingGroup`<sup>Required</sup> <a name="opGetKxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxScalingGroup"></a>

```typescript
public readonly opGetKxScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetKxScalingGroup API call.

---

##### `opGetKxUser`<sup>Required</sup> <a name="opGetKxUser" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxUser"></a>

```typescript
public readonly opGetKxUser: string[];
```

- *Type:* string[]

IAM actions required for the GetKxUser API call.

---

##### `opGetKxVolume`<sup>Required</sup> <a name="opGetKxVolume" id="@cdk_utils/iam.finspace.FinspaceOperations.property.opGetKxVolume"></a>

```typescript
public readonly opGetKxVolume: string[];
```

- *Type:* string[]

IAM actions required for the GetKxVolume API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.finspace.FinspaceOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateKxClusterCodeConfiguration`<sup>Required</sup> <a name="UpdateKxClusterCodeConfiguration" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxClusterCodeConfiguration"></a>

```typescript
public readonly UpdateKxClusterCodeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxClusterCodeConfiguration API call.

---

##### `UpdateKxClusterDatabases`<sup>Required</sup> <a name="UpdateKxClusterDatabases" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxClusterDatabases"></a>

```typescript
public readonly UpdateKxClusterDatabases: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxClusterDatabases API call.

---

##### `UpdateKxDatabase`<sup>Required</sup> <a name="UpdateKxDatabase" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxDatabase"></a>

```typescript
public readonly UpdateKxDatabase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxDatabase API call.

---

##### `UpdateKxDataview`<sup>Required</sup> <a name="UpdateKxDataview" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxDataview"></a>

```typescript
public readonly UpdateKxDataview: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxDataview API call.

---

##### `UpdateKxEnvironment`<sup>Required</sup> <a name="UpdateKxEnvironment" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxEnvironment"></a>

```typescript
public readonly UpdateKxEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxEnvironment API call.

---

##### `UpdateKxEnvironmentNetwork`<sup>Required</sup> <a name="UpdateKxEnvironmentNetwork" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxEnvironmentNetwork"></a>

```typescript
public readonly UpdateKxEnvironmentNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxEnvironmentNetwork API call.

---

##### `UpdateKxUser`<sup>Required</sup> <a name="UpdateKxUser" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxUser"></a>

```typescript
public readonly UpdateKxUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxUser API call.

---

##### `UpdateKxVolume`<sup>Required</sup> <a name="UpdateKxVolume" id="@cdk_utils/iam.finspace.FinspaceOperations.property.UpdateKxVolume"></a>

```typescript
public readonly UpdateKxVolume: string[];
```

- *Type:* string[]

IAM actions required for the UpdateKxVolume API call.

---

### FinspaceResources <a name="FinspaceResources" id="@cdk_utils/iam.finspace.FinspaceResources"></a>

ARN builders, validators, and parsers for finspace resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace.FinspaceResources.Initializer"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

new finspace.FinspaceResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxClusterArn">isValidKxClusterArn</a></code> | Validates whether a string is a valid ARN for the kxCluster resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxDatabaseArn">isValidKxDatabaseArn</a></code> | Validates whether a string is a valid ARN for the kxDatabase resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxDataviewArn">isValidKxDataviewArn</a></code> | Validates whether a string is a valid ARN for the kxDataview resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxEnvironmentArn">isValidKxEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the kxEnvironment resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxScalingGroupArn">isValidKxScalingGroupArn</a></code> | Validates whether a string is a valid ARN for the kxScalingGroup resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxUserArn">isValidKxUserArn</a></code> | Validates whether a string is a valid ARN for the kxUser resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidKxVolumeArn">isValidKxVolumeArn</a></code> | Validates whether a string is a valid ARN for the kxVolume resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxCluster">kxCluster</a></code> | Builds an ARN for the kxCluster resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxDatabase">kxDatabase</a></code> | Builds an ARN for the kxDatabase resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxDataview">kxDataview</a></code> | Builds an ARN for the kxDataview resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxEnvironment">kxEnvironment</a></code> | Builds an ARN for the kxEnvironment resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxScalingGroup">kxScalingGroup</a></code> | Builds an ARN for the kxScalingGroup resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxUser">kxUser</a></code> | Builds an ARN for the kxUser resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.kxVolume">kxVolume</a></code> | Builds an ARN for the kxVolume resource. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxClusterArn">parseKxClusterArn</a></code> | Parses a kxCluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxDatabaseArn">parseKxDatabaseArn</a></code> | Parses a kxDatabase ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxDataviewArn">parseKxDataviewArn</a></code> | Parses a kxDataview ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxEnvironmentArn">parseKxEnvironmentArn</a></code> | Parses a kxEnvironment ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxScalingGroupArn">parseKxScalingGroupArn</a></code> | Parses a kxScalingGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxUserArn">parseKxUserArn</a></code> | Parses a kxUser ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseKxVolumeArn">parseKxVolumeArn</a></code> | Parses a kxVolume ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.finspace.FinspaceResources.user">user</a></code> | Builds an ARN for the user resource. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.finspace.FinspaceResources.environment"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.environment(props: FinspaceEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceEnvironmentArnProps">FinspaceEnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidEnvironmentArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxClusterArn` <a name="isValidKxClusterArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxClusterArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the kxCluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxDatabaseArn` <a name="isValidKxDatabaseArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxDatabaseArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the kxDatabase resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxDataviewArn` <a name="isValidKxDataviewArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxDataviewArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxDataviewArn(arn: string)
```

Validates whether a string is a valid ARN for the kxDataview resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxDataviewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxEnvironmentArn` <a name="isValidKxEnvironmentArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxEnvironmentArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the kxEnvironment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxScalingGroupArn` <a name="isValidKxScalingGroupArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxScalingGroupArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxScalingGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the kxScalingGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxScalingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxUserArn` <a name="isValidKxUserArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxUserArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxUserArn(arn: string)
```

Validates whether a string is a valid ARN for the kxUser resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKxVolumeArn` <a name="isValidKxVolumeArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxVolumeArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidKxVolumeArn(arn: string)
```

Validates whether a string is a valid ARN for the kxVolume resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidKxVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidUserArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `kxCluster` <a name="kxCluster" id="@cdk_utils/iam.finspace.FinspaceResources.kxCluster"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxCluster(props: FinspaceKxClusterArnProps)
```

Builds an ARN for the kxCluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxCluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxClusterArnProps">FinspaceKxClusterArnProps</a>

---

##### `kxDatabase` <a name="kxDatabase" id="@cdk_utils/iam.finspace.FinspaceResources.kxDatabase"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxDatabase(props: FinspaceKxDatabaseArnProps)
```

Builds an ARN for the kxDatabase resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxDatabase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxDatabaseArnProps">FinspaceKxDatabaseArnProps</a>

---

##### `kxDataview` <a name="kxDataview" id="@cdk_utils/iam.finspace.FinspaceResources.kxDataview"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxDataview(props: FinspaceKxDataviewArnProps)
```

Builds an ARN for the kxDataview resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxDataview.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxDataviewArnProps">FinspaceKxDataviewArnProps</a>

---

##### `kxEnvironment` <a name="kxEnvironment" id="@cdk_utils/iam.finspace.FinspaceResources.kxEnvironment"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxEnvironment(props: FinspaceKxEnvironmentArnProps)
```

Builds an ARN for the kxEnvironment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxEnvironment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxEnvironmentArnProps">FinspaceKxEnvironmentArnProps</a>

---

##### `kxScalingGroup` <a name="kxScalingGroup" id="@cdk_utils/iam.finspace.FinspaceResources.kxScalingGroup"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxScalingGroup(props: FinspaceKxScalingGroupArnProps)
```

Builds an ARN for the kxScalingGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxScalingGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxScalingGroupArnProps">FinspaceKxScalingGroupArnProps</a>

---

##### `kxUser` <a name="kxUser" id="@cdk_utils/iam.finspace.FinspaceResources.kxUser"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxUser(props: FinspaceKxUserArnProps)
```

Builds an ARN for the kxUser resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxUserArnProps">FinspaceKxUserArnProps</a>

---

##### `kxVolume` <a name="kxVolume" id="@cdk_utils/iam.finspace.FinspaceResources.kxVolume"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.kxVolume(props: FinspaceKxVolumeArnProps)
```

Builds an ARN for the kxVolume resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.kxVolume.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceKxVolumeArnProps">FinspaceKxVolumeArnProps</a>

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseEnvironmentArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxClusterArn` <a name="parseKxClusterArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxClusterArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxClusterArn(arn: string)
```

Parses a kxCluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxDatabaseArn` <a name="parseKxDatabaseArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxDatabaseArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxDatabaseArn(arn: string)
```

Parses a kxDatabase ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxDataviewArn` <a name="parseKxDataviewArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxDataviewArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxDataviewArn(arn: string)
```

Parses a kxDataview ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxDataviewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxEnvironmentArn` <a name="parseKxEnvironmentArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxEnvironmentArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxEnvironmentArn(arn: string)
```

Parses a kxEnvironment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxScalingGroupArn` <a name="parseKxScalingGroupArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxScalingGroupArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxScalingGroupArn(arn: string)
```

Parses a kxScalingGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxScalingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxUserArn` <a name="parseKxUserArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxUserArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxUserArn(arn: string)
```

Parses a kxUser ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKxVolumeArn` <a name="parseKxVolumeArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxVolumeArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseKxVolumeArn(arn: string)
```

Parses a kxVolume ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseKxVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.finspace.FinspaceResources.parseUserArn"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace.FinspaceResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `user` <a name="user" id="@cdk_utils/iam.finspace.FinspaceResources.user"></a>

```typescript
import { finspace } from '@cdk_utils/iam'

finspace.FinspaceResources.user(props: FinspaceUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace.FinspaceResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace.FinspaceUserArnProps">FinspaceUserArnProps</a>

---




