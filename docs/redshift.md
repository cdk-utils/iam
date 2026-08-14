# `redshift` Submodule <a name="`redshift` Submodule" id="@cdk_utils/iam.redshift"></a>


## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterArnComponents <a name="RedshiftClusterArnComponents" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftClusterArnComponents: redshift.RedshiftClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftClusterArnProps <a name="RedshiftClusterArnProps" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftClusterArnProps: redshift.RedshiftClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDatashareArnComponents <a name="RedshiftDatashareArnComponents" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents"></a>

Parsed components of a datashare ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDatashareArnComponents: redshift.RedshiftDatashareArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.dataShareName">dataShareName</a></code> | <code>string</code> | The DataShareName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.producerClusterNamespace">producerClusterNamespace</a></code> | <code>string</code> | The ProducerClusterNamespace component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The DataShareName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `producerClusterNamespace`<sup>Required</sup> <a name="producerClusterNamespace" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.producerClusterNamespace"></a>

```typescript
public readonly producerClusterNamespace: string;
```

- *Type:* string

The ProducerClusterNamespace component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDatashareArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDatashareArnProps <a name="RedshiftDatashareArnProps" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps"></a>

Properties for building a datashare ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDatashareArnProps: redshift.RedshiftDatashareArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.dataShareName">dataShareName</a></code> | <code>string</code> | The DataShareName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.producerClusterNamespace">producerClusterNamespace</a></code> | <code>string</code> | The ProducerClusterNamespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The DataShareName component of the ARN.

---

##### `producerClusterNamespace`<sup>Required</sup> <a name="producerClusterNamespace" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.producerClusterNamespace"></a>

```typescript
public readonly producerClusterNamespace: string;
```

- *Type:* string

The ProducerClusterNamespace component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDatashareArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDbgroupArnComponents <a name="RedshiftDbgroupArnComponents" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents"></a>

Parsed components of a dbgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbgroupArnComponents: redshift.RedshiftDbgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.dbGroup">dbGroup</a></code> | <code>string</code> | The DbGroup component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `dbGroup`<sup>Required</sup> <a name="dbGroup" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.dbGroup"></a>

```typescript
public readonly dbGroup: string;
```

- *Type:* string

The DbGroup component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDbgroupArnProps <a name="RedshiftDbgroupArnProps" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps"></a>

Properties for building a dbgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbgroupArnProps: redshift.RedshiftDbgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.dbGroup">dbGroup</a></code> | <code>string</code> | The DbGroup component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `dbGroup`<sup>Required</sup> <a name="dbGroup" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.dbGroup"></a>

```typescript
public readonly dbGroup: string;
```

- *Type:* string

The DbGroup component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDbnameArnComponents <a name="RedshiftDbnameArnComponents" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents"></a>

Parsed components of a dbname ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbnameArnComponents: redshift.RedshiftDbnameArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.dbName">dbName</a></code> | <code>string</code> | The DbName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The DbName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbnameArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDbnameArnProps <a name="RedshiftDbnameArnProps" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps"></a>

Properties for building a dbname ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbnameArnProps: redshift.RedshiftDbnameArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.dbName">dbName</a></code> | <code>string</code> | The DbName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The DbName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbnameArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftDbuserArnComponents <a name="RedshiftDbuserArnComponents" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents"></a>

Parsed components of a dbuser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbuserArnComponents: redshift.RedshiftDbuserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.dbUser">dbUser</a></code> | <code>string</code> | The DbUser component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

The DbUser component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbuserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftDbuserArnProps <a name="RedshiftDbuserArnProps" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps"></a>

Properties for building a dbuser ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftDbuserArnProps: redshift.RedshiftDbuserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.dbUser">dbUser</a></code> | <code>string</code> | The DbUser component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

The DbUser component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftDbuserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftEventsubscriptionArnComponents <a name="RedshiftEventsubscriptionArnComponents" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents"></a>

Parsed components of a eventsubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftEventsubscriptionArnComponents: redshift.RedshiftEventsubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.eventSubscriptionName">eventSubscriptionName</a></code> | <code>string</code> | The EventSubscriptionName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventSubscriptionName`<sup>Required</sup> <a name="eventSubscriptionName" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.eventSubscriptionName"></a>

```typescript
public readonly eventSubscriptionName: string;
```

- *Type:* string

The EventSubscriptionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftEventsubscriptionArnProps <a name="RedshiftEventsubscriptionArnProps" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps"></a>

Properties for building a eventsubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftEventsubscriptionArnProps: redshift.RedshiftEventsubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.eventSubscriptionName">eventSubscriptionName</a></code> | <code>string</code> | The EventSubscriptionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventSubscriptionName`<sup>Required</sup> <a name="eventSubscriptionName" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.eventSubscriptionName"></a>

```typescript
public readonly eventSubscriptionName: string;
```

- *Type:* string

The EventSubscriptionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftHsmclientcertificateArnComponents <a name="RedshiftHsmclientcertificateArnComponents" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents"></a>

Parsed components of a hsmclientcertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftHsmclientcertificateArnComponents: redshift.RedshiftHsmclientcertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.hsmClientCertificateId">hsmClientCertificateId</a></code> | <code>string</code> | The HSMClientCertificateId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hsmClientCertificateId`<sup>Required</sup> <a name="hsmClientCertificateId" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.hsmClientCertificateId"></a>

```typescript
public readonly hsmClientCertificateId: string;
```

- *Type:* string

The HSMClientCertificateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftHsmclientcertificateArnProps <a name="RedshiftHsmclientcertificateArnProps" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps"></a>

Properties for building a hsmclientcertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftHsmclientcertificateArnProps: redshift.RedshiftHsmclientcertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.hsmClientCertificateId">hsmClientCertificateId</a></code> | <code>string</code> | The HSMClientCertificateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hsmClientCertificateId`<sup>Required</sup> <a name="hsmClientCertificateId" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.hsmClientCertificateId"></a>

```typescript
public readonly hsmClientCertificateId: string;
```

- *Type:* string

The HSMClientCertificateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftHsmconfigurationArnComponents <a name="RedshiftHsmconfigurationArnComponents" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents"></a>

Parsed components of a hsmconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftHsmconfigurationArnComponents: redshift.RedshiftHsmconfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.hsmConfigurationId">hsmConfigurationId</a></code> | <code>string</code> | The HSMConfigurationId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hsmConfigurationId`<sup>Required</sup> <a name="hsmConfigurationId" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.hsmConfigurationId"></a>

```typescript
public readonly hsmConfigurationId: string;
```

- *Type:* string

The HSMConfigurationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftHsmconfigurationArnProps <a name="RedshiftHsmconfigurationArnProps" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps"></a>

Properties for building a hsmconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftHsmconfigurationArnProps: redshift.RedshiftHsmconfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.hsmConfigurationId">hsmConfigurationId</a></code> | <code>string</code> | The HSMConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hsmConfigurationId`<sup>Required</sup> <a name="hsmConfigurationId" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.hsmConfigurationId"></a>

```typescript
public readonly hsmConfigurationId: string;
```

- *Type:* string

The HSMConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftIntegrationArnComponents <a name="RedshiftIntegrationArnComponents" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents"></a>

Parsed components of a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftIntegrationArnComponents: redshift.RedshiftIntegrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.integrationIdentifier">integrationIdentifier</a></code> | <code>string</code> | The IntegrationIdentifier component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `integrationIdentifier`<sup>Required</sup> <a name="integrationIdentifier" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.integrationIdentifier"></a>

```typescript
public readonly integrationIdentifier: string;
```

- *Type:* string

The IntegrationIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftIntegrationArnProps <a name="RedshiftIntegrationArnProps" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps"></a>

Properties for building a integration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftIntegrationArnProps: redshift.RedshiftIntegrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.integrationIdentifier">integrationIdentifier</a></code> | <code>string</code> | The IntegrationIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `integrationIdentifier`<sup>Required</sup> <a name="integrationIdentifier" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.integrationIdentifier"></a>

```typescript
public readonly integrationIdentifier: string;
```

- *Type:* string

The IntegrationIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftIntegrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftNamespaceArnComponents <a name="RedshiftNamespaceArnComponents" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents"></a>

Parsed components of a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftNamespaceArnComponents: redshift.RedshiftNamespaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.clusterNamespace">clusterNamespace</a></code> | <code>string</code> | The ClusterNamespace component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterNamespace`<sup>Required</sup> <a name="clusterNamespace" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.clusterNamespace"></a>

```typescript
public readonly clusterNamespace: string;
```

- *Type:* string

The ClusterNamespace component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftNamespaceArnProps <a name="RedshiftNamespaceArnProps" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps"></a>

Properties for building a namespace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftNamespaceArnProps: redshift.RedshiftNamespaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.clusterNamespace">clusterNamespace</a></code> | <code>string</code> | The ClusterNamespace component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterNamespace`<sup>Required</sup> <a name="clusterNamespace" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.clusterNamespace"></a>

```typescript
public readonly clusterNamespace: string;
```

- *Type:* string

The ClusterNamespace component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftNamespaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftParametergroupArnComponents <a name="RedshiftParametergroupArnComponents" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents"></a>

Parsed components of a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftParametergroupArnComponents: redshift.RedshiftParametergroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftParametergroupArnProps <a name="RedshiftParametergroupArnProps" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps"></a>

Properties for building a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftParametergroupArnProps: redshift.RedshiftParametergroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftParametergroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftQev2idcapplicationArnComponents <a name="RedshiftQev2idcapplicationArnComponents" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents"></a>

Parsed components of a qev2idcapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftQev2idcapplicationArnComponents: redshift.RedshiftQev2idcapplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.qev2IdcApplicationId">qev2IdcApplicationId</a></code> | <code>string</code> | The Qev2IdcApplicationId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `qev2IdcApplicationId`<sup>Required</sup> <a name="qev2IdcApplicationId" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.qev2IdcApplicationId"></a>

```typescript
public readonly qev2IdcApplicationId: string;
```

- *Type:* string

The Qev2IdcApplicationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftQev2idcapplicationArnProps <a name="RedshiftQev2idcapplicationArnProps" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps"></a>

Properties for building a qev2idcapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftQev2idcapplicationArnProps: redshift.RedshiftQev2idcapplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.qev2IdcApplicationId">qev2IdcApplicationId</a></code> | <code>string</code> | The Qev2IdcApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `qev2IdcApplicationId`<sup>Required</sup> <a name="qev2IdcApplicationId" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.qev2IdcApplicationId"></a>

```typescript
public readonly qev2IdcApplicationId: string;
```

- *Type:* string

The Qev2IdcApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftRedshiftidcapplicationArnComponents <a name="RedshiftRedshiftidcapplicationArnComponents" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents"></a>

Parsed components of a redshiftidcapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftRedshiftidcapplicationArnComponents: redshift.RedshiftRedshiftidcapplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.redshiftIdcApplicationId">redshiftIdcApplicationId</a></code> | <code>string</code> | The RedshiftIdcApplicationId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `redshiftIdcApplicationId`<sup>Required</sup> <a name="redshiftIdcApplicationId" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.redshiftIdcApplicationId"></a>

```typescript
public readonly redshiftIdcApplicationId: string;
```

- *Type:* string

The RedshiftIdcApplicationId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RedshiftRedshiftidcapplicationArnProps <a name="RedshiftRedshiftidcapplicationArnProps" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps"></a>

Properties for building a redshiftidcapplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftRedshiftidcapplicationArnProps: redshift.RedshiftRedshiftidcapplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.redshiftIdcApplicationId">redshiftIdcApplicationId</a></code> | <code>string</code> | The RedshiftIdcApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `redshiftIdcApplicationId`<sup>Required</sup> <a name="redshiftIdcApplicationId" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.redshiftIdcApplicationId"></a>

```typescript
public readonly redshiftIdcApplicationId: string;
```

- *Type:* string

The RedshiftIdcApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSecuritygroupArnComponents <a name="RedshiftSecuritygroupArnComponents" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents"></a>

Parsed components of a securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupArnComponents: redshift.RedshiftSecuritygroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.ec2SecurityGroupId">ec2SecurityGroupId</a></code> | <code>string</code> | The Ec2SecurityGroupId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.owner">owner</a></code> | <code>string</code> | The Owner component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ec2SecurityGroupId`<sup>Required</sup> <a name="ec2SecurityGroupId" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.ec2SecurityGroupId"></a>

```typescript
public readonly ec2SecurityGroupId: string;
```

- *Type:* string

The Ec2SecurityGroupId component.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnComponents.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component.

---

### RedshiftSecuritygroupArnProps <a name="RedshiftSecuritygroupArnProps" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps"></a>

Properties for building a securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupArnProps: redshift.RedshiftSecuritygroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.ec2SecurityGroupId">ec2SecurityGroupId</a></code> | <code>string</code> | The Ec2SecurityGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.owner">owner</a></code> | <code>string</code> | The Owner component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ec2SecurityGroupId`<sup>Required</sup> <a name="ec2SecurityGroupId" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.ec2SecurityGroupId"></a>

```typescript
public readonly ec2SecurityGroupId: string;
```

- *Type:* string

The Ec2SecurityGroupId component of the ARN.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component of the ARN.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSecuritygroupingressCidrArnComponents <a name="RedshiftSecuritygroupingressCidrArnComponents" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents"></a>

Parsed components of a securitygroupingress-cidr ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupingressCidrArnComponents: redshift.RedshiftSecuritygroupingressCidrArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.ipRange">ipRange</a></code> | <code>string</code> | The IpRange component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

The IpRange component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnComponents.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component.

---

### RedshiftSecuritygroupingressCidrArnProps <a name="RedshiftSecuritygroupingressCidrArnProps" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps"></a>

Properties for building a securitygroupingress-cidr ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupingressCidrArnProps: redshift.RedshiftSecuritygroupingressCidrArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.ipRange">ipRange</a></code> | <code>string</code> | The IpRange component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

The IpRange component of the ARN.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSecuritygroupingressEc2securitygroupArnComponents <a name="RedshiftSecuritygroupingressEc2securitygroupArnComponents" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents"></a>

Parsed components of a securitygroupingress-ec2securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupingressEc2securitygroupArnComponents: redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.ece2SecuritygroupId">ece2SecuritygroupId</a></code> | <code>string</code> | The Ece2SecuritygroupId component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.owner">owner</a></code> | <code>string</code> | The Owner component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ece2SecuritygroupId`<sup>Required</sup> <a name="ece2SecuritygroupId" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.ece2SecuritygroupId"></a>

```typescript
public readonly ece2SecuritygroupId: string;
```

- *Type:* string

The Ece2SecuritygroupId component.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnComponents.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component.

---

### RedshiftSecuritygroupingressEc2securitygroupArnProps <a name="RedshiftSecuritygroupingressEc2securitygroupArnProps" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps"></a>

Properties for building a securitygroupingress-ec2securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSecuritygroupingressEc2securitygroupArnProps: redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.ece2SecuritygroupId">ece2SecuritygroupId</a></code> | <code>string</code> | The Ece2SecuritygroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.owner">owner</a></code> | <code>string</code> | The Owner component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The SecurityGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ece2SecuritygroupId`<sup>Required</sup> <a name="ece2SecuritygroupId" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.ece2SecuritygroupId"></a>

```typescript
public readonly ece2SecuritygroupId: string;
```

- *Type:* string

The Ece2SecuritygroupId component of the ARN.

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The Owner component of the ARN.

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

The SecurityGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSnapshotArnComponents <a name="RedshiftSnapshotArnComponents" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotArnComponents: redshift.RedshiftSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnComponents.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component.

---

### RedshiftSnapshotArnProps <a name="RedshiftSnapshotArnProps" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotArnProps: redshift.RedshiftSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSnapshotcopygrantArnComponents <a name="RedshiftSnapshotcopygrantArnComponents" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents"></a>

Parsed components of a snapshotcopygrant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotcopygrantArnComponents: redshift.RedshiftSnapshotcopygrantArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | The SnapshotCopyGrantName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnComponents.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

The SnapshotCopyGrantName component.

---

### RedshiftSnapshotcopygrantArnProps <a name="RedshiftSnapshotcopygrantArnProps" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps"></a>

Properties for building a snapshotcopygrant ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotcopygrantArnProps: redshift.RedshiftSnapshotcopygrantArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>string</code> | The SnapshotCopyGrantName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.snapshotCopyGrantName"></a>

```typescript
public readonly snapshotCopyGrantName: string;
```

- *Type:* string

The SnapshotCopyGrantName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSnapshotscheduleArnComponents <a name="RedshiftSnapshotscheduleArnComponents" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents"></a>

Parsed components of a snapshotschedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotscheduleArnComponents: redshift.RedshiftSnapshotscheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.scheduleIdentifier">scheduleIdentifier</a></code> | <code>string</code> | The ScheduleIdentifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="scheduleIdentifier" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnComponents.property.scheduleIdentifier"></a>

```typescript
public readonly scheduleIdentifier: string;
```

- *Type:* string

The ScheduleIdentifier component.

---

### RedshiftSnapshotscheduleArnProps <a name="RedshiftSnapshotscheduleArnProps" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps"></a>

Properties for building a snapshotschedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSnapshotscheduleArnProps: redshift.RedshiftSnapshotscheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.scheduleIdentifier">scheduleIdentifier</a></code> | <code>string</code> | The ScheduleIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="scheduleIdentifier" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.scheduleIdentifier"></a>

```typescript
public readonly scheduleIdentifier: string;
```

- *Type:* string

The ScheduleIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftSubnetgroupArnComponents <a name="RedshiftSubnetgroupArnComponents" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents"></a>

Parsed components of a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSubnetgroupArnComponents: redshift.RedshiftSubnetgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnComponents.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component.

---

### RedshiftSubnetgroupArnProps <a name="RedshiftSubnetgroupArnProps" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps"></a>

Properties for building a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftSubnetgroupArnProps: redshift.RedshiftSubnetgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RedshiftUsagelimitArnComponents <a name="RedshiftUsagelimitArnComponents" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents"></a>

Parsed components of a usagelimit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftUsagelimitArnComponents: redshift.RedshiftUsagelimitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.usageLimitId">usageLimitId</a></code> | <code>string</code> | The UsageLimitId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `usageLimitId`<sup>Required</sup> <a name="usageLimitId" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnComponents.property.usageLimitId"></a>

```typescript
public readonly usageLimitId: string;
```

- *Type:* string

The UsageLimitId component.

---

### RedshiftUsagelimitArnProps <a name="RedshiftUsagelimitArnProps" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps"></a>

Properties for building a usagelimit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

const redshiftUsagelimitArnProps: redshift.RedshiftUsagelimitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.usageLimitId">usageLimitId</a></code> | <code>string</code> | The UsageLimitId component of the ARN. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `usageLimitId`<sup>Required</sup> <a name="usageLimitId" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.usageLimitId"></a>

```typescript
public readonly usageLimitId: string;
```

- *Type:* string

The UsageLimitId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftActions <a name="RedshiftActions" id="@cdk_utils/iam.redshift.RedshiftActions"></a>

IAM action constants for the redshift service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift.RedshiftActions.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

new redshift.RedshiftActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AcceptReservedNodeExchange">AcceptReservedNodeExchange</a></code> | <code>string</code> | [Write] redshift:AcceptReservedNodeExchange. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetClusterCredentials">actionGetClusterCredentials</a></code> | <code>string</code> | [Write] redshift:GetClusterCredentials. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetClusterCredentialsWithIAM">actionGetClusterCredentialsWithIAM</a></code> | <code>string</code> | [Write] redshift:GetClusterCredentialsWithIAM. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetIdentityCenterAuthToken">actionGetIdentityCenterAuthToken</a></code> | <code>string</code> | [Read] redshift:GetIdentityCenterAuthToken. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetReservedNodeExchangeConfigurationOptions">actionGetReservedNodeExchangeConfigurationOptions</a></code> | <code>string</code> | [Read] redshift:GetReservedNodeExchangeConfigurationOptions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetReservedNodeExchangeOfferings">actionGetReservedNodeExchangeOfferings</a></code> | <code>string</code> | [Read] redshift:GetReservedNodeExchangeOfferings. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] redshift:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AddPartner">AddPartner</a></code> | <code>string</code> | [Write] redshift:AddPartner. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AssociateDataShareConsumer">AssociateDataShareConsumer</a></code> | <code>string</code> | [Write] redshift:AssociateDataShareConsumer. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeClusterSecurityGroupIngress">AuthorizeClusterSecurityGroupIngress</a></code> | <code>string</code> | [Write] redshift:AuthorizeClusterSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeDataShare">AuthorizeDataShare</a></code> | <code>string</code> | [PermissionManagement] redshift:AuthorizeDataShare. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeEndpointAccess">AuthorizeEndpointAccess</a></code> | <code>string</code> | [PermissionManagement] redshift:AuthorizeEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeInboundIntegration">AuthorizeInboundIntegration</a></code> | <code>string</code> | [Write] redshift:AuthorizeInboundIntegration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeSnapshotAccess">AuthorizeSnapshotAccess</a></code> | <code>string</code> | [PermissionManagement] redshift:AuthorizeSnapshotAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.BatchDeleteClusterSnapshots">BatchDeleteClusterSnapshots</a></code> | <code>string</code> | [Write] redshift:BatchDeleteClusterSnapshots. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.BatchModifyClusterSnapshots">BatchModifyClusterSnapshots</a></code> | <code>string</code> | [Write] redshift:BatchModifyClusterSnapshots. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CancelQuery">CancelQuery</a></code> | <code>string</code> | [Write] redshift:CancelQuery. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CancelQuerySession">CancelQuerySession</a></code> | <code>string</code> | [Write] redshift:CancelQuerySession. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CancelResize">CancelResize</a></code> | <code>string</code> | [Write] redshift:CancelResize. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CopyClusterSnapshot">CopyClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:CopyClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateAuthenticationProfile">CreateAuthenticationProfile</a></code> | <code>string</code> | [Write] redshift:CreateAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] redshift:CreateCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterParameterGroup">CreateClusterParameterGroup</a></code> | <code>string</code> | [Write] redshift:CreateClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSecurityGroup">CreateClusterSecurityGroup</a></code> | <code>string</code> | [Write] redshift:CreateClusterSecurityGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSnapshot">CreateClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:CreateClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSubnetGroup">CreateClusterSubnetGroup</a></code> | <code>string</code> | [Write] redshift:CreateClusterSubnetGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterUser">CreateClusterUser</a></code> | <code>string</code> | [PermissionManagement] redshift:CreateClusterUser. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateCustomDomainAssociation">CreateCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift:CreateCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateEndpointAccess">CreateEndpointAccess</a></code> | <code>string</code> | [Write] redshift:CreateEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string</code> | [Write] redshift:CreateEventSubscription. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateHsmClientCertificate">CreateHsmClientCertificate</a></code> | <code>string</code> | [Write] redshift:CreateHsmClientCertificate. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateHsmConfiguration">CreateHsmConfiguration</a></code> | <code>string</code> | [Write] redshift:CreateHsmConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateInboundIntegration">CreateInboundIntegration</a></code> | <code>string</code> | [Write] redshift:CreateInboundIntegration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateIntegration">CreateIntegration</a></code> | <code>string</code> | [Write] redshift:CreateIntegration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateQev2IdcApplication">CreateQev2IdcApplication</a></code> | <code>string</code> | [Write] redshift:CreateQev2IdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateRedshiftIdcApplication">CreateRedshiftIdcApplication</a></code> | <code>string</code> | [Write] redshift:CreateRedshiftIdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateSavedQuery">CreateSavedQuery</a></code> | <code>string</code> | [Write] redshift:CreateSavedQuery. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateScheduledAction">CreateScheduledAction</a></code> | <code>string</code> | [Write] redshift:CreateScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateSnapshotCopyGrant">CreateSnapshotCopyGrant</a></code> | <code>string</code> | [PermissionManagement] redshift:CreateSnapshotCopyGrant. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateSnapshotSchedule">CreateSnapshotSchedule</a></code> | <code>string</code> | [Write] redshift:CreateSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] redshift:CreateTags. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.CreateUsageLimit">CreateUsageLimit</a></code> | <code>string</code> | [Write] redshift:CreateUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeauthorizeDataShare">DeauthorizeDataShare</a></code> | <code>string</code> | [PermissionManagement] redshift:DeauthorizeDataShare. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteAuthenticationProfile">DeleteAuthenticationProfile</a></code> | <code>string</code> | [Write] redshift:DeleteAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] redshift:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterParameterGroup">DeleteClusterParameterGroup</a></code> | <code>string</code> | [Write] redshift:DeleteClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSecurityGroup">DeleteClusterSecurityGroup</a></code> | <code>string</code> | [Write] redshift:DeleteClusterSecurityGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSnapshot">DeleteClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:DeleteClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSubnetGroup">DeleteClusterSubnetGroup</a></code> | <code>string</code> | [Write] redshift:DeleteClusterSubnetGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteCustomDomainAssociation">DeleteCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift:DeleteCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteEndpointAccess">DeleteEndpointAccess</a></code> | <code>string</code> | [Write] redshift:DeleteEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string</code> | [Write] redshift:DeleteEventSubscription. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteHsmClientCertificate">DeleteHsmClientCertificate</a></code> | <code>string</code> | [Write] redshift:DeleteHsmClientCertificate. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteHsmConfiguration">DeleteHsmConfiguration</a></code> | <code>string</code> | [Write] redshift:DeleteHsmConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] redshift:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeletePartner">DeletePartner</a></code> | <code>string</code> | [Write] redshift:DeletePartner. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteQev2IdcApplication">DeleteQev2IdcApplication</a></code> | <code>string</code> | [Write] redshift:DeleteQev2IdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteRedshiftIdcApplication">DeleteRedshiftIdcApplication</a></code> | <code>string</code> | [Write] redshift:DeleteRedshiftIdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] redshift:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSavedQueries">DeleteSavedQueries</a></code> | <code>string</code> | [Write] redshift:DeleteSavedQueries. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string</code> | [Write] redshift:DeleteScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSnapshotCopyGrant">DeleteSnapshotCopyGrant</a></code> | <code>string</code> | [Write] redshift:DeleteSnapshotCopyGrant. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSnapshotSchedule">DeleteSnapshotSchedule</a></code> | <code>string</code> | [Write] redshift:DeleteSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] redshift:DeleteTags. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeleteUsageLimit">DeleteUsageLimit</a></code> | <code>string</code> | [Write] redshift:DeleteUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DeregisterNamespace">DeregisterNamespace</a></code> | <code>string</code> | [Write] redshift:DeregisterNamespace. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string</code> | [Read] redshift:DescribeAccountAttributes. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAuthenticationProfiles">DescribeAuthenticationProfiles</a></code> | <code>string</code> | [Read] redshift:DescribeAuthenticationProfiles. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAutonomicsDenylist">DescribeAutonomicsDenylist</a></code> | <code>string</code> | [Read] redshift:DescribeAutonomicsDenylist. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterDbRevisions">DescribeClusterDbRevisions</a></code> | <code>string</code> | [List] redshift:DescribeClusterDbRevisions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterParameterGroups">DescribeClusterParameterGroups</a></code> | <code>string</code> | [Read] redshift:DescribeClusterParameterGroups. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterParameters">DescribeClusterParameters</a></code> | <code>string</code> | [Read] redshift:DescribeClusterParameters. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusters">DescribeClusters</a></code> | <code>string</code> | [List] redshift:DescribeClusters. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSecurityGroups">DescribeClusterSecurityGroups</a></code> | <code>string</code> | [Read] redshift:DescribeClusterSecurityGroups. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSnapshots">DescribeClusterSnapshots</a></code> | <code>string</code> | [Read] redshift:DescribeClusterSnapshots. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSubnetGroups">DescribeClusterSubnetGroups</a></code> | <code>string</code> | [Read] redshift:DescribeClusterSubnetGroups. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterTracks">DescribeClusterTracks</a></code> | <code>string</code> | [List] redshift:DescribeClusterTracks. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterVersions">DescribeClusterVersions</a></code> | <code>string</code> | [Read] redshift:DescribeClusterVersions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeCustomDomainAssociations">DescribeCustomDomainAssociations</a></code> | <code>string</code> | [List] redshift:DescribeCustomDomainAssociations. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataShares">DescribeDataShares</a></code> | <code>string</code> | [Read] redshift:DescribeDataShares. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataSharesForConsumer">DescribeDataSharesForConsumer</a></code> | <code>string</code> | [Read] redshift:DescribeDataSharesForConsumer. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataSharesForProducer">DescribeDataSharesForProducer</a></code> | <code>string</code> | [Read] redshift:DescribeDataSharesForProducer. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDefaultClusterParameters">DescribeDefaultClusterParameters</a></code> | <code>string</code> | [Read] redshift:DescribeDefaultClusterParameters. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEndpointAccess">DescribeEndpointAccess</a></code> | <code>string</code> | [Read] redshift:DescribeEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEndpointAuthorization">DescribeEndpointAuthorization</a></code> | <code>string</code> | [List] redshift:DescribeEndpointAuthorization. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string</code> | [Read] redshift:DescribeEventCategories. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [List] redshift:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string</code> | [Read] redshift:DescribeEventSubscriptions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeHsmClientCertificates">DescribeHsmClientCertificates</a></code> | <code>string</code> | [Read] redshift:DescribeHsmClientCertificates. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeHsmConfigurations">DescribeHsmConfigurations</a></code> | <code>string</code> | [Read] redshift:DescribeHsmConfigurations. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeInboundIntegrations">DescribeInboundIntegrations</a></code> | <code>string</code> | [List] redshift:DescribeInboundIntegrations. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string</code> | [List] redshift:DescribeIntegrations. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeLoggingStatus">DescribeLoggingStatus</a></code> | <code>string</code> | [Read] redshift:DescribeLoggingStatus. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeNodeConfigurationOptions">DescribeNodeConfigurationOptions</a></code> | <code>string</code> | [List] redshift:DescribeNodeConfigurationOptions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeOrderableClusterOptions">DescribeOrderableClusterOptions</a></code> | <code>string</code> | [Read] redshift:DescribeOrderableClusterOptions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribePartners">DescribePartners</a></code> | <code>string</code> | [Read] redshift:DescribePartners. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeQev2IdcApplications">DescribeQev2IdcApplications</a></code> | <code>string</code> | [List] redshift:DescribeQev2IdcApplications. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeQuery">DescribeQuery</a></code> | <code>string</code> | [Read] redshift:DescribeQuery. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeRedshiftIdcApplications">DescribeRedshiftIdcApplications</a></code> | <code>string</code> | [List] redshift:DescribeRedshiftIdcApplications. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodeExchangeStatus">DescribeReservedNodeExchangeStatus</a></code> | <code>string</code> | [Read] redshift:DescribeReservedNodeExchangeStatus. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodeOfferings">DescribeReservedNodeOfferings</a></code> | <code>string</code> | [Read] redshift:DescribeReservedNodeOfferings. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodes">DescribeReservedNodes</a></code> | <code>string</code> | [Read] redshift:DescribeReservedNodes. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeResize">DescribeResize</a></code> | <code>string</code> | [Read] redshift:DescribeResize. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSavedQueries">DescribeSavedQueries</a></code> | <code>string</code> | [Read] redshift:DescribeSavedQueries. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string</code> | [Read] redshift:DescribeScheduledActions. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSnapshotCopyGrants">DescribeSnapshotCopyGrants</a></code> | <code>string</code> | [Read] redshift:DescribeSnapshotCopyGrants. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSnapshotSchedules">DescribeSnapshotSchedules</a></code> | <code>string</code> | [Read] redshift:DescribeSnapshotSchedules. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeStorage">DescribeStorage</a></code> | <code>string</code> | [Read] redshift:DescribeStorage. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTable">DescribeTable</a></code> | <code>string</code> | [Read] redshift:DescribeTable. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTableRestoreStatus">DescribeTableRestoreStatus</a></code> | <code>string</code> | [Read] redshift:DescribeTableRestoreStatus. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] redshift:DescribeTags. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DescribeUsageLimits">DescribeUsageLimits</a></code> | <code>string</code> | [Read] redshift:DescribeUsageLimits. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DisableLogging">DisableLogging</a></code> | <code>string</code> | [Write] redshift:DisableLogging. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DisableSnapshotCopy">DisableSnapshotCopy</a></code> | <code>string</code> | [Write] redshift:DisableSnapshotCopy. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.DisassociateDataShareConsumer">DisassociateDataShareConsumer</a></code> | <code>string</code> | [Write] redshift:DisassociateDataShareConsumer. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.EnableLogging">EnableLogging</a></code> | <code>string</code> | [Write] redshift:EnableLogging. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.EnableSnapshotCopy">EnableSnapshotCopy</a></code> | <code>string</code> | [Write] redshift:EnableSnapshotCopy. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ExecuteQuery">ExecuteQuery</a></code> | <code>string</code> | [Write] redshift:ExecuteQuery. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.FailoverPrimaryCompute">FailoverPrimaryCompute</a></code> | <code>string</code> | [Write] redshift:FailoverPrimaryCompute. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.FetchResults">FetchResults</a></code> | <code>string</code> | [Read] redshift:FetchResults. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.JoinGroup">JoinGroup</a></code> | <code>string</code> | [PermissionManagement] redshift:JoinGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ListDatabases">ListDatabases</a></code> | <code>string</code> | [List] redshift:ListDatabases. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] redshift:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ListSavedQueries">ListSavedQueries</a></code> | <code>string</code> | [List] redshift:ListSavedQueries. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [List] redshift:ListSchemas. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ListTables">ListTables</a></code> | <code>string</code> | [List] redshift:ListTables. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAquaConfiguration">ModifyAquaConfiguration</a></code> | <code>string</code> | [Write] redshift:ModifyAquaConfiguration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAuthenticationProfile">ModifyAuthenticationProfile</a></code> | <code>string</code> | [Write] redshift:ModifyAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAutonomicsDenylist">ModifyAutonomicsDenylist</a></code> | <code>string</code> | [Write] redshift:ModifyAutonomicsDenylist. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyCluster">ModifyCluster</a></code> | <code>string</code> | [Write] redshift:ModifyCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterDbRevision">ModifyClusterDbRevision</a></code> | <code>string</code> | [Write] redshift:ModifyClusterDbRevision. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterIamRoles">ModifyClusterIamRoles</a></code> | <code>string</code> | [PermissionManagement] redshift:ModifyClusterIamRoles. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterMaintenance">ModifyClusterMaintenance</a></code> | <code>string</code> | [Write] redshift:ModifyClusterMaintenance. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterParameterGroup">ModifyClusterParameterGroup</a></code> | <code>string</code> | [Write] redshift:ModifyClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSnapshot">ModifyClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:ModifyClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSnapshotSchedule">ModifyClusterSnapshotSchedule</a></code> | <code>string</code> | [Write] redshift:ModifyClusterSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSubnetGroup">ModifyClusterSubnetGroup</a></code> | <code>string</code> | [Write] redshift:ModifyClusterSubnetGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyCustomDomainAssociation">ModifyCustomDomainAssociation</a></code> | <code>string</code> | [Write] redshift:ModifyCustomDomainAssociation. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyEndpointAccess">ModifyEndpointAccess</a></code> | <code>string</code> | [Write] redshift:ModifyEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string</code> | [Write] redshift:ModifyEventSubscription. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string</code> | [Write] redshift:ModifyIntegration. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyQev2IdcApplication">ModifyQev2IdcApplication</a></code> | <code>string</code> | [Write] redshift:ModifyQev2IdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyRedshiftIdcApplication">ModifyRedshiftIdcApplication</a></code> | <code>string</code> | [Write] redshift:ModifyRedshiftIdcApplication. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifySavedQuery">ModifySavedQuery</a></code> | <code>string</code> | [Write] redshift:ModifySavedQuery. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyScheduledAction">ModifyScheduledAction</a></code> | <code>string</code> | [Write] redshift:ModifyScheduledAction. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifySnapshotCopyRetentionPeriod">ModifySnapshotCopyRetentionPeriod</a></code> | <code>string</code> | [Write] redshift:ModifySnapshotCopyRetentionPeriod. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifySnapshotSchedule">ModifySnapshotSchedule</a></code> | <code>string</code> | [Write] redshift:ModifySnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ModifyUsageLimit">ModifyUsageLimit</a></code> | <code>string</code> | [Write] redshift:ModifyUsageLimit. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.PauseCluster">PauseCluster</a></code> | <code>string</code> | [Write] redshift:PauseCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.PurchaseReservedNodeOffering">PurchaseReservedNodeOffering</a></code> | <code>string</code> | [Write] redshift:PurchaseReservedNodeOffering. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] redshift:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RebootCluster">RebootCluster</a></code> | <code>string</code> | [Write] redshift:RebootCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RegisterNamespace">RegisterNamespace</a></code> | <code>string</code> | [Write] redshift:RegisterNamespace. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RejectDataShare">RejectDataShare</a></code> | <code>string</code> | [PermissionManagement] redshift:RejectDataShare. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ResetClusterParameterGroup">ResetClusterParameterGroup</a></code> | <code>string</code> | [Write] redshift:ResetClusterParameterGroup. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ResizeCluster">ResizeCluster</a></code> | <code>string</code> | [Write] redshift:ResizeCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RestoreFromClusterSnapshot">RestoreFromClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:RestoreFromClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RestoreTableFromClusterSnapshot">RestoreTableFromClusterSnapshot</a></code> | <code>string</code> | [Write] redshift:RestoreTableFromClusterSnapshot. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ResumeCluster">ResumeCluster</a></code> | <code>string</code> | [Write] redshift:ResumeCluster. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RevokeClusterSecurityGroupIngress">RevokeClusterSecurityGroupIngress</a></code> | <code>string</code> | [Write] redshift:RevokeClusterSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RevokeEndpointAccess">RevokeEndpointAccess</a></code> | <code>string</code> | [PermissionManagement] redshift:RevokeEndpointAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RevokeSnapshotAccess">RevokeSnapshotAccess</a></code> | <code>string</code> | [PermissionManagement] redshift:RevokeSnapshotAccess. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.RotateEncryptionKey">RotateEncryptionKey</a></code> | <code>string</code> | [Write] redshift:RotateEncryptionKey. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.UpdatePartnerStatus">UpdatePartnerStatus</a></code> | <code>string</code> | [Write] redshift:UpdatePartnerStatus. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ViewQueriesFromConsole">ViewQueriesFromConsole</a></code> | <code>string</code> | [List] redshift:ViewQueriesFromConsole. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftActions.property.ViewQueriesInConsole">ViewQueriesInConsole</a></code> | <code>string</code> | [List] redshift:ViewQueriesInConsole. |

---

##### `AcceptReservedNodeExchange`<sup>Required</sup> <a name="AcceptReservedNodeExchange" id="@cdk_utils/iam.redshift.RedshiftActions.property.AcceptReservedNodeExchange"></a>

```typescript
public readonly AcceptReservedNodeExchange: string;
```

- *Type:* string

[Write] redshift:AcceptReservedNodeExchange.

---

##### `actionGetClusterCredentials`<sup>Required</sup> <a name="actionGetClusterCredentials" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetClusterCredentials"></a>

```typescript
public readonly actionGetClusterCredentials: string;
```

- *Type:* string

[Write] redshift:GetClusterCredentials.

---

##### `actionGetClusterCredentialsWithIAM`<sup>Required</sup> <a name="actionGetClusterCredentialsWithIAM" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetClusterCredentialsWithIAM"></a>

```typescript
public readonly actionGetClusterCredentialsWithIAM: string;
```

- *Type:* string

[Write] redshift:GetClusterCredentialsWithIAM.

---

##### `actionGetIdentityCenterAuthToken`<sup>Required</sup> <a name="actionGetIdentityCenterAuthToken" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetIdentityCenterAuthToken"></a>

```typescript
public readonly actionGetIdentityCenterAuthToken: string;
```

- *Type:* string

[Read] redshift:GetIdentityCenterAuthToken.

---

##### `actionGetReservedNodeExchangeConfigurationOptions`<sup>Required</sup> <a name="actionGetReservedNodeExchangeConfigurationOptions" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetReservedNodeExchangeConfigurationOptions"></a>

```typescript
public readonly actionGetReservedNodeExchangeConfigurationOptions: string;
```

- *Type:* string

[Read] redshift:GetReservedNodeExchangeConfigurationOptions.

---

##### `actionGetReservedNodeExchangeOfferings`<sup>Required</sup> <a name="actionGetReservedNodeExchangeOfferings" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetReservedNodeExchangeOfferings"></a>

```typescript
public readonly actionGetReservedNodeExchangeOfferings: string;
```

- *Type:* string

[Read] redshift:GetReservedNodeExchangeOfferings.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] redshift:GetResourcePolicy.

---

##### `AddPartner`<sup>Required</sup> <a name="AddPartner" id="@cdk_utils/iam.redshift.RedshiftActions.property.AddPartner"></a>

```typescript
public readonly AddPartner: string;
```

- *Type:* string

[Write] redshift:AddPartner.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDataShareConsumer`<sup>Required</sup> <a name="AssociateDataShareConsumer" id="@cdk_utils/iam.redshift.RedshiftActions.property.AssociateDataShareConsumer"></a>

```typescript
public readonly AssociateDataShareConsumer: string;
```

- *Type:* string

[Write] redshift:AssociateDataShareConsumer.

---

##### `AuthorizeClusterSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeClusterSecurityGroupIngress" id="@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeClusterSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeClusterSecurityGroupIngress: string;
```

- *Type:* string

[Write] redshift:AuthorizeClusterSecurityGroupIngress.

---

##### `AuthorizeDataShare`<sup>Required</sup> <a name="AuthorizeDataShare" id="@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeDataShare"></a>

```typescript
public readonly AuthorizeDataShare: string;
```

- *Type:* string

[PermissionManagement] redshift:AuthorizeDataShare.

---

##### `AuthorizeEndpointAccess`<sup>Required</sup> <a name="AuthorizeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeEndpointAccess"></a>

```typescript
public readonly AuthorizeEndpointAccess: string;
```

- *Type:* string

[PermissionManagement] redshift:AuthorizeEndpointAccess.

---

##### `AuthorizeInboundIntegration`<sup>Required</sup> <a name="AuthorizeInboundIntegration" id="@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeInboundIntegration"></a>

```typescript
public readonly AuthorizeInboundIntegration: string;
```

- *Type:* string

[Write] redshift:AuthorizeInboundIntegration.

---

##### `AuthorizeSnapshotAccess`<sup>Required</sup> <a name="AuthorizeSnapshotAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.AuthorizeSnapshotAccess"></a>

```typescript
public readonly AuthorizeSnapshotAccess: string;
```

- *Type:* string

[PermissionManagement] redshift:AuthorizeSnapshotAccess.

---

##### `BatchDeleteClusterSnapshots`<sup>Required</sup> <a name="BatchDeleteClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftActions.property.BatchDeleteClusterSnapshots"></a>

```typescript
public readonly BatchDeleteClusterSnapshots: string;
```

- *Type:* string

[Write] redshift:BatchDeleteClusterSnapshots.

---

##### `BatchModifyClusterSnapshots`<sup>Required</sup> <a name="BatchModifyClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftActions.property.BatchModifyClusterSnapshots"></a>

```typescript
public readonly BatchModifyClusterSnapshots: string;
```

- *Type:* string

[Write] redshift:BatchModifyClusterSnapshots.

---

##### `CancelQuery`<sup>Required</sup> <a name="CancelQuery" id="@cdk_utils/iam.redshift.RedshiftActions.property.CancelQuery"></a>

```typescript
public readonly CancelQuery: string;
```

- *Type:* string

[Write] redshift:CancelQuery.

---

##### `CancelQuerySession`<sup>Required</sup> <a name="CancelQuerySession" id="@cdk_utils/iam.redshift.RedshiftActions.property.CancelQuerySession"></a>

```typescript
public readonly CancelQuerySession: string;
```

- *Type:* string

[Write] redshift:CancelQuerySession.

---

##### `CancelResize`<sup>Required</sup> <a name="CancelResize" id="@cdk_utils/iam.redshift.RedshiftActions.property.CancelResize"></a>

```typescript
public readonly CancelResize: string;
```

- *Type:* string

[Write] redshift:CancelResize.

---

##### `CopyClusterSnapshot`<sup>Required</sup> <a name="CopyClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.CopyClusterSnapshot"></a>

```typescript
public readonly CopyClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:CopyClusterSnapshot.

---

##### `CreateAuthenticationProfile`<sup>Required</sup> <a name="CreateAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateAuthenticationProfile"></a>

```typescript
public readonly CreateAuthenticationProfile: string;
```

- *Type:* string

[Write] redshift:CreateAuthenticationProfile.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] redshift:CreateCluster.

---

##### `CreateClusterParameterGroup`<sup>Required</sup> <a name="CreateClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterParameterGroup"></a>

```typescript
public readonly CreateClusterParameterGroup: string;
```

- *Type:* string

[Write] redshift:CreateClusterParameterGroup.

---

##### `CreateClusterSecurityGroup`<sup>Required</sup> <a name="CreateClusterSecurityGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSecurityGroup"></a>

```typescript
public readonly CreateClusterSecurityGroup: string;
```

- *Type:* string

[Write] redshift:CreateClusterSecurityGroup.

---

##### `CreateClusterSnapshot`<sup>Required</sup> <a name="CreateClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSnapshot"></a>

```typescript
public readonly CreateClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:CreateClusterSnapshot.

---

##### `CreateClusterSubnetGroup`<sup>Required</sup> <a name="CreateClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterSubnetGroup"></a>

```typescript
public readonly CreateClusterSubnetGroup: string;
```

- *Type:* string

[Write] redshift:CreateClusterSubnetGroup.

---

##### `CreateClusterUser`<sup>Required</sup> <a name="CreateClusterUser" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateClusterUser"></a>

```typescript
public readonly CreateClusterUser: string;
```

- *Type:* string

[PermissionManagement] redshift:CreateClusterUser.

---

##### `CreateCustomDomainAssociation`<sup>Required</sup> <a name="CreateCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateCustomDomainAssociation"></a>

```typescript
public readonly CreateCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift:CreateCustomDomainAssociation.

---

##### `CreateEndpointAccess`<sup>Required</sup> <a name="CreateEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateEndpointAccess"></a>

```typescript
public readonly CreateEndpointAccess: string;
```

- *Type:* string

[Write] redshift:CreateEndpointAccess.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string;
```

- *Type:* string

[Write] redshift:CreateEventSubscription.

---

##### `CreateHsmClientCertificate`<sup>Required</sup> <a name="CreateHsmClientCertificate" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateHsmClientCertificate"></a>

```typescript
public readonly CreateHsmClientCertificate: string;
```

- *Type:* string

[Write] redshift:CreateHsmClientCertificate.

---

##### `CreateHsmConfiguration`<sup>Required</sup> <a name="CreateHsmConfiguration" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateHsmConfiguration"></a>

```typescript
public readonly CreateHsmConfiguration: string;
```

- *Type:* string

[Write] redshift:CreateHsmConfiguration.

---

##### `CreateInboundIntegration`<sup>Required</sup> <a name="CreateInboundIntegration" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateInboundIntegration"></a>

```typescript
public readonly CreateInboundIntegration: string;
```

- *Type:* string

[Write] redshift:CreateInboundIntegration.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string;
```

- *Type:* string

[Write] redshift:CreateIntegration.

---

##### `CreateQev2IdcApplication`<sup>Required</sup> <a name="CreateQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateQev2IdcApplication"></a>

```typescript
public readonly CreateQev2IdcApplication: string;
```

- *Type:* string

[Write] redshift:CreateQev2IdcApplication.

---

##### `CreateRedshiftIdcApplication`<sup>Required</sup> <a name="CreateRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateRedshiftIdcApplication"></a>

```typescript
public readonly CreateRedshiftIdcApplication: string;
```

- *Type:* string

[Write] redshift:CreateRedshiftIdcApplication.

---

##### `CreateSavedQuery`<sup>Required</sup> <a name="CreateSavedQuery" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateSavedQuery"></a>

```typescript
public readonly CreateSavedQuery: string;
```

- *Type:* string

[Write] redshift:CreateSavedQuery.

---

##### `CreateScheduledAction`<sup>Required</sup> <a name="CreateScheduledAction" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateScheduledAction"></a>

```typescript
public readonly CreateScheduledAction: string;
```

- *Type:* string

[Write] redshift:CreateScheduledAction.

---

##### `CreateSnapshotCopyGrant`<sup>Required</sup> <a name="CreateSnapshotCopyGrant" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateSnapshotCopyGrant"></a>

```typescript
public readonly CreateSnapshotCopyGrant: string;
```

- *Type:* string

[PermissionManagement] redshift:CreateSnapshotCopyGrant.

---

##### `CreateSnapshotSchedule`<sup>Required</sup> <a name="CreateSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateSnapshotSchedule"></a>

```typescript
public readonly CreateSnapshotSchedule: string;
```

- *Type:* string

[Write] redshift:CreateSnapshotSchedule.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] redshift:CreateTags.

---

##### `CreateUsageLimit`<sup>Required</sup> <a name="CreateUsageLimit" id="@cdk_utils/iam.redshift.RedshiftActions.property.CreateUsageLimit"></a>

```typescript
public readonly CreateUsageLimit: string;
```

- *Type:* string

[Write] redshift:CreateUsageLimit.

---

##### `DeauthorizeDataShare`<sup>Required</sup> <a name="DeauthorizeDataShare" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeauthorizeDataShare"></a>

```typescript
public readonly DeauthorizeDataShare: string;
```

- *Type:* string

[PermissionManagement] redshift:DeauthorizeDataShare.

---

##### `DeleteAuthenticationProfile`<sup>Required</sup> <a name="DeleteAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteAuthenticationProfile"></a>

```typescript
public readonly DeleteAuthenticationProfile: string;
```

- *Type:* string

[Write] redshift:DeleteAuthenticationProfile.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] redshift:DeleteCluster.

---

##### `DeleteClusterParameterGroup`<sup>Required</sup> <a name="DeleteClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterParameterGroup"></a>

```typescript
public readonly DeleteClusterParameterGroup: string;
```

- *Type:* string

[Write] redshift:DeleteClusterParameterGroup.

---

##### `DeleteClusterSecurityGroup`<sup>Required</sup> <a name="DeleteClusterSecurityGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSecurityGroup"></a>

```typescript
public readonly DeleteClusterSecurityGroup: string;
```

- *Type:* string

[Write] redshift:DeleteClusterSecurityGroup.

---

##### `DeleteClusterSnapshot`<sup>Required</sup> <a name="DeleteClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSnapshot"></a>

```typescript
public readonly DeleteClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:DeleteClusterSnapshot.

---

##### `DeleteClusterSubnetGroup`<sup>Required</sup> <a name="DeleteClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteClusterSubnetGroup"></a>

```typescript
public readonly DeleteClusterSubnetGroup: string;
```

- *Type:* string

[Write] redshift:DeleteClusterSubnetGroup.

---

##### `DeleteCustomDomainAssociation`<sup>Required</sup> <a name="DeleteCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteCustomDomainAssociation"></a>

```typescript
public readonly DeleteCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift:DeleteCustomDomainAssociation.

---

##### `DeleteEndpointAccess`<sup>Required</sup> <a name="DeleteEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteEndpointAccess"></a>

```typescript
public readonly DeleteEndpointAccess: string;
```

- *Type:* string

[Write] redshift:DeleteEndpointAccess.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string;
```

- *Type:* string

[Write] redshift:DeleteEventSubscription.

---

##### `DeleteHsmClientCertificate`<sup>Required</sup> <a name="DeleteHsmClientCertificate" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteHsmClientCertificate"></a>

```typescript
public readonly DeleteHsmClientCertificate: string;
```

- *Type:* string

[Write] redshift:DeleteHsmClientCertificate.

---

##### `DeleteHsmConfiguration`<sup>Required</sup> <a name="DeleteHsmConfiguration" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteHsmConfiguration"></a>

```typescript
public readonly DeleteHsmConfiguration: string;
```

- *Type:* string

[Write] redshift:DeleteHsmConfiguration.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] redshift:DeleteIntegration.

---

##### `DeletePartner`<sup>Required</sup> <a name="DeletePartner" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeletePartner"></a>

```typescript
public readonly DeletePartner: string;
```

- *Type:* string

[Write] redshift:DeletePartner.

---

##### `DeleteQev2IdcApplication`<sup>Required</sup> <a name="DeleteQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteQev2IdcApplication"></a>

```typescript
public readonly DeleteQev2IdcApplication: string;
```

- *Type:* string

[Write] redshift:DeleteQev2IdcApplication.

---

##### `DeleteRedshiftIdcApplication`<sup>Required</sup> <a name="DeleteRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteRedshiftIdcApplication"></a>

```typescript
public readonly DeleteRedshiftIdcApplication: string;
```

- *Type:* string

[Write] redshift:DeleteRedshiftIdcApplication.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] redshift:DeleteResourcePolicy.

---

##### `DeleteSavedQueries`<sup>Required</sup> <a name="DeleteSavedQueries" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSavedQueries"></a>

```typescript
public readonly DeleteSavedQueries: string;
```

- *Type:* string

[Write] redshift:DeleteSavedQueries.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string;
```

- *Type:* string

[Write] redshift:DeleteScheduledAction.

---

##### `DeleteSnapshotCopyGrant`<sup>Required</sup> <a name="DeleteSnapshotCopyGrant" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSnapshotCopyGrant"></a>

```typescript
public readonly DeleteSnapshotCopyGrant: string;
```

- *Type:* string

[Write] redshift:DeleteSnapshotCopyGrant.

---

##### `DeleteSnapshotSchedule`<sup>Required</sup> <a name="DeleteSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteSnapshotSchedule"></a>

```typescript
public readonly DeleteSnapshotSchedule: string;
```

- *Type:* string

[Write] redshift:DeleteSnapshotSchedule.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] redshift:DeleteTags.

---

##### `DeleteUsageLimit`<sup>Required</sup> <a name="DeleteUsageLimit" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeleteUsageLimit"></a>

```typescript
public readonly DeleteUsageLimit: string;
```

- *Type:* string

[Write] redshift:DeleteUsageLimit.

---

##### `DeregisterNamespace`<sup>Required</sup> <a name="DeregisterNamespace" id="@cdk_utils/iam.redshift.RedshiftActions.property.DeregisterNamespace"></a>

```typescript
public readonly DeregisterNamespace: string;
```

- *Type:* string

[Write] redshift:DeregisterNamespace.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string;
```

- *Type:* string

[Read] redshift:DescribeAccountAttributes.

---

##### `DescribeAuthenticationProfiles`<sup>Required</sup> <a name="DescribeAuthenticationProfiles" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAuthenticationProfiles"></a>

```typescript
public readonly DescribeAuthenticationProfiles: string;
```

- *Type:* string

[Read] redshift:DescribeAuthenticationProfiles.

---

##### `DescribeAutonomicsDenylist`<sup>Required</sup> <a name="DescribeAutonomicsDenylist" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeAutonomicsDenylist"></a>

```typescript
public readonly DescribeAutonomicsDenylist: string;
```

- *Type:* string

[Read] redshift:DescribeAutonomicsDenylist.

---

##### `DescribeClusterDbRevisions`<sup>Required</sup> <a name="DescribeClusterDbRevisions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterDbRevisions"></a>

```typescript
public readonly DescribeClusterDbRevisions: string;
```

- *Type:* string

[List] redshift:DescribeClusterDbRevisions.

---

##### `DescribeClusterParameterGroups`<sup>Required</sup> <a name="DescribeClusterParameterGroups" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterParameterGroups"></a>

```typescript
public readonly DescribeClusterParameterGroups: string;
```

- *Type:* string

[Read] redshift:DescribeClusterParameterGroups.

---

##### `DescribeClusterParameters`<sup>Required</sup> <a name="DescribeClusterParameters" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterParameters"></a>

```typescript
public readonly DescribeClusterParameters: string;
```

- *Type:* string

[Read] redshift:DescribeClusterParameters.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string;
```

- *Type:* string

[List] redshift:DescribeClusters.

---

##### `DescribeClusterSecurityGroups`<sup>Required</sup> <a name="DescribeClusterSecurityGroups" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSecurityGroups"></a>

```typescript
public readonly DescribeClusterSecurityGroups: string;
```

- *Type:* string

[Read] redshift:DescribeClusterSecurityGroups.

---

##### `DescribeClusterSnapshots`<sup>Required</sup> <a name="DescribeClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSnapshots"></a>

```typescript
public readonly DescribeClusterSnapshots: string;
```

- *Type:* string

[Read] redshift:DescribeClusterSnapshots.

---

##### `DescribeClusterSubnetGroups`<sup>Required</sup> <a name="DescribeClusterSubnetGroups" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterSubnetGroups"></a>

```typescript
public readonly DescribeClusterSubnetGroups: string;
```

- *Type:* string

[Read] redshift:DescribeClusterSubnetGroups.

---

##### `DescribeClusterTracks`<sup>Required</sup> <a name="DescribeClusterTracks" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterTracks"></a>

```typescript
public readonly DescribeClusterTracks: string;
```

- *Type:* string

[List] redshift:DescribeClusterTracks.

---

##### `DescribeClusterVersions`<sup>Required</sup> <a name="DescribeClusterVersions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeClusterVersions"></a>

```typescript
public readonly DescribeClusterVersions: string;
```

- *Type:* string

[Read] redshift:DescribeClusterVersions.

---

##### `DescribeCustomDomainAssociations`<sup>Required</sup> <a name="DescribeCustomDomainAssociations" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeCustomDomainAssociations"></a>

```typescript
public readonly DescribeCustomDomainAssociations: string;
```

- *Type:* string

[List] redshift:DescribeCustomDomainAssociations.

---

##### `DescribeDataShares`<sup>Required</sup> <a name="DescribeDataShares" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataShares"></a>

```typescript
public readonly DescribeDataShares: string;
```

- *Type:* string

[Read] redshift:DescribeDataShares.

---

##### `DescribeDataSharesForConsumer`<sup>Required</sup> <a name="DescribeDataSharesForConsumer" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataSharesForConsumer"></a>

```typescript
public readonly DescribeDataSharesForConsumer: string;
```

- *Type:* string

[Read] redshift:DescribeDataSharesForConsumer.

---

##### `DescribeDataSharesForProducer`<sup>Required</sup> <a name="DescribeDataSharesForProducer" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDataSharesForProducer"></a>

```typescript
public readonly DescribeDataSharesForProducer: string;
```

- *Type:* string

[Read] redshift:DescribeDataSharesForProducer.

---

##### `DescribeDefaultClusterParameters`<sup>Required</sup> <a name="DescribeDefaultClusterParameters" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeDefaultClusterParameters"></a>

```typescript
public readonly DescribeDefaultClusterParameters: string;
```

- *Type:* string

[Read] redshift:DescribeDefaultClusterParameters.

---

##### `DescribeEndpointAccess`<sup>Required</sup> <a name="DescribeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEndpointAccess"></a>

```typescript
public readonly DescribeEndpointAccess: string;
```

- *Type:* string

[Read] redshift:DescribeEndpointAccess.

---

##### `DescribeEndpointAuthorization`<sup>Required</sup> <a name="DescribeEndpointAuthorization" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEndpointAuthorization"></a>

```typescript
public readonly DescribeEndpointAuthorization: string;
```

- *Type:* string

[List] redshift:DescribeEndpointAuthorization.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string;
```

- *Type:* string

[Read] redshift:DescribeEventCategories.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[List] redshift:DescribeEvents.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string;
```

- *Type:* string

[Read] redshift:DescribeEventSubscriptions.

---

##### `DescribeHsmClientCertificates`<sup>Required</sup> <a name="DescribeHsmClientCertificates" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeHsmClientCertificates"></a>

```typescript
public readonly DescribeHsmClientCertificates: string;
```

- *Type:* string

[Read] redshift:DescribeHsmClientCertificates.

---

##### `DescribeHsmConfigurations`<sup>Required</sup> <a name="DescribeHsmConfigurations" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeHsmConfigurations"></a>

```typescript
public readonly DescribeHsmConfigurations: string;
```

- *Type:* string

[Read] redshift:DescribeHsmConfigurations.

---

##### `DescribeInboundIntegrations`<sup>Required</sup> <a name="DescribeInboundIntegrations" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeInboundIntegrations"></a>

```typescript
public readonly DescribeInboundIntegrations: string;
```

- *Type:* string

[List] redshift:DescribeInboundIntegrations.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string;
```

- *Type:* string

[List] redshift:DescribeIntegrations.

---

##### `DescribeLoggingStatus`<sup>Required</sup> <a name="DescribeLoggingStatus" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeLoggingStatus"></a>

```typescript
public readonly DescribeLoggingStatus: string;
```

- *Type:* string

[Read] redshift:DescribeLoggingStatus.

---

##### `DescribeNodeConfigurationOptions`<sup>Required</sup> <a name="DescribeNodeConfigurationOptions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeNodeConfigurationOptions"></a>

```typescript
public readonly DescribeNodeConfigurationOptions: string;
```

- *Type:* string

[List] redshift:DescribeNodeConfigurationOptions.

---

##### `DescribeOrderableClusterOptions`<sup>Required</sup> <a name="DescribeOrderableClusterOptions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeOrderableClusterOptions"></a>

```typescript
public readonly DescribeOrderableClusterOptions: string;
```

- *Type:* string

[Read] redshift:DescribeOrderableClusterOptions.

---

##### `DescribePartners`<sup>Required</sup> <a name="DescribePartners" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribePartners"></a>

```typescript
public readonly DescribePartners: string;
```

- *Type:* string

[Read] redshift:DescribePartners.

---

##### `DescribeQev2IdcApplications`<sup>Required</sup> <a name="DescribeQev2IdcApplications" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeQev2IdcApplications"></a>

```typescript
public readonly DescribeQev2IdcApplications: string;
```

- *Type:* string

[List] redshift:DescribeQev2IdcApplications.

---

##### `DescribeQuery`<sup>Required</sup> <a name="DescribeQuery" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeQuery"></a>

```typescript
public readonly DescribeQuery: string;
```

- *Type:* string

[Read] redshift:DescribeQuery.

---

##### `DescribeRedshiftIdcApplications`<sup>Required</sup> <a name="DescribeRedshiftIdcApplications" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeRedshiftIdcApplications"></a>

```typescript
public readonly DescribeRedshiftIdcApplications: string;
```

- *Type:* string

[List] redshift:DescribeRedshiftIdcApplications.

---

##### `DescribeReservedNodeExchangeStatus`<sup>Required</sup> <a name="DescribeReservedNodeExchangeStatus" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodeExchangeStatus"></a>

```typescript
public readonly DescribeReservedNodeExchangeStatus: string;
```

- *Type:* string

[Read] redshift:DescribeReservedNodeExchangeStatus.

---

##### `DescribeReservedNodeOfferings`<sup>Required</sup> <a name="DescribeReservedNodeOfferings" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodeOfferings"></a>

```typescript
public readonly DescribeReservedNodeOfferings: string;
```

- *Type:* string

[Read] redshift:DescribeReservedNodeOfferings.

---

##### `DescribeReservedNodes`<sup>Required</sup> <a name="DescribeReservedNodes" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeReservedNodes"></a>

```typescript
public readonly DescribeReservedNodes: string;
```

- *Type:* string

[Read] redshift:DescribeReservedNodes.

---

##### `DescribeResize`<sup>Required</sup> <a name="DescribeResize" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeResize"></a>

```typescript
public readonly DescribeResize: string;
```

- *Type:* string

[Read] redshift:DescribeResize.

---

##### `DescribeSavedQueries`<sup>Required</sup> <a name="DescribeSavedQueries" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSavedQueries"></a>

```typescript
public readonly DescribeSavedQueries: string;
```

- *Type:* string

[Read] redshift:DescribeSavedQueries.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string;
```

- *Type:* string

[Read] redshift:DescribeScheduledActions.

---

##### `DescribeSnapshotCopyGrants`<sup>Required</sup> <a name="DescribeSnapshotCopyGrants" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSnapshotCopyGrants"></a>

```typescript
public readonly DescribeSnapshotCopyGrants: string;
```

- *Type:* string

[Read] redshift:DescribeSnapshotCopyGrants.

---

##### `DescribeSnapshotSchedules`<sup>Required</sup> <a name="DescribeSnapshotSchedules" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeSnapshotSchedules"></a>

```typescript
public readonly DescribeSnapshotSchedules: string;
```

- *Type:* string

[Read] redshift:DescribeSnapshotSchedules.

---

##### `DescribeStorage`<sup>Required</sup> <a name="DescribeStorage" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeStorage"></a>

```typescript
public readonly DescribeStorage: string;
```

- *Type:* string

[Read] redshift:DescribeStorage.

---

##### `DescribeTable`<sup>Required</sup> <a name="DescribeTable" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTable"></a>

```typescript
public readonly DescribeTable: string;
```

- *Type:* string

[Read] redshift:DescribeTable.

---

##### `DescribeTableRestoreStatus`<sup>Required</sup> <a name="DescribeTableRestoreStatus" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTableRestoreStatus"></a>

```typescript
public readonly DescribeTableRestoreStatus: string;
```

- *Type:* string

[Read] redshift:DescribeTableRestoreStatus.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] redshift:DescribeTags.

---

##### `DescribeUsageLimits`<sup>Required</sup> <a name="DescribeUsageLimits" id="@cdk_utils/iam.redshift.RedshiftActions.property.DescribeUsageLimits"></a>

```typescript
public readonly DescribeUsageLimits: string;
```

- *Type:* string

[Read] redshift:DescribeUsageLimits.

---

##### `DisableLogging`<sup>Required</sup> <a name="DisableLogging" id="@cdk_utils/iam.redshift.RedshiftActions.property.DisableLogging"></a>

```typescript
public readonly DisableLogging: string;
```

- *Type:* string

[Write] redshift:DisableLogging.

---

##### `DisableSnapshotCopy`<sup>Required</sup> <a name="DisableSnapshotCopy" id="@cdk_utils/iam.redshift.RedshiftActions.property.DisableSnapshotCopy"></a>

```typescript
public readonly DisableSnapshotCopy: string;
```

- *Type:* string

[Write] redshift:DisableSnapshotCopy.

---

##### `DisassociateDataShareConsumer`<sup>Required</sup> <a name="DisassociateDataShareConsumer" id="@cdk_utils/iam.redshift.RedshiftActions.property.DisassociateDataShareConsumer"></a>

```typescript
public readonly DisassociateDataShareConsumer: string;
```

- *Type:* string

[Write] redshift:DisassociateDataShareConsumer.

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdk_utils/iam.redshift.RedshiftActions.property.EnableLogging"></a>

```typescript
public readonly EnableLogging: string;
```

- *Type:* string

[Write] redshift:EnableLogging.

---

##### `EnableSnapshotCopy`<sup>Required</sup> <a name="EnableSnapshotCopy" id="@cdk_utils/iam.redshift.RedshiftActions.property.EnableSnapshotCopy"></a>

```typescript
public readonly EnableSnapshotCopy: string;
```

- *Type:* string

[Write] redshift:EnableSnapshotCopy.

---

##### `ExecuteQuery`<sup>Required</sup> <a name="ExecuteQuery" id="@cdk_utils/iam.redshift.RedshiftActions.property.ExecuteQuery"></a>

```typescript
public readonly ExecuteQuery: string;
```

- *Type:* string

[Write] redshift:ExecuteQuery.

---

##### `FailoverPrimaryCompute`<sup>Required</sup> <a name="FailoverPrimaryCompute" id="@cdk_utils/iam.redshift.RedshiftActions.property.FailoverPrimaryCompute"></a>

```typescript
public readonly FailoverPrimaryCompute: string;
```

- *Type:* string

[Write] redshift:FailoverPrimaryCompute.

---

##### `FetchResults`<sup>Required</sup> <a name="FetchResults" id="@cdk_utils/iam.redshift.RedshiftActions.property.FetchResults"></a>

```typescript
public readonly FetchResults: string;
```

- *Type:* string

[Read] redshift:FetchResults.

---

##### `JoinGroup`<sup>Required</sup> <a name="JoinGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.JoinGroup"></a>

```typescript
public readonly JoinGroup: string;
```

- *Type:* string

[PermissionManagement] redshift:JoinGroup.

---

##### `ListDatabases`<sup>Required</sup> <a name="ListDatabases" id="@cdk_utils/iam.redshift.RedshiftActions.property.ListDatabases"></a>

```typescript
public readonly ListDatabases: string;
```

- *Type:* string

[List] redshift:ListDatabases.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.redshift.RedshiftActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] redshift:ListRecommendations.

---

##### `ListSavedQueries`<sup>Required</sup> <a name="ListSavedQueries" id="@cdk_utils/iam.redshift.RedshiftActions.property.ListSavedQueries"></a>

```typescript
public readonly ListSavedQueries: string;
```

- *Type:* string

[List] redshift:ListSavedQueries.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.redshift.RedshiftActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[List] redshift:ListSchemas.

---

##### `ListTables`<sup>Required</sup> <a name="ListTables" id="@cdk_utils/iam.redshift.RedshiftActions.property.ListTables"></a>

```typescript
public readonly ListTables: string;
```

- *Type:* string

[List] redshift:ListTables.

---

##### `ModifyAquaConfiguration`<sup>Required</sup> <a name="ModifyAquaConfiguration" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAquaConfiguration"></a>

```typescript
public readonly ModifyAquaConfiguration: string;
```

- *Type:* string

[Write] redshift:ModifyAquaConfiguration.

---

##### `ModifyAuthenticationProfile`<sup>Required</sup> <a name="ModifyAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAuthenticationProfile"></a>

```typescript
public readonly ModifyAuthenticationProfile: string;
```

- *Type:* string

[Write] redshift:ModifyAuthenticationProfile.

---

##### `ModifyAutonomicsDenylist`<sup>Required</sup> <a name="ModifyAutonomicsDenylist" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyAutonomicsDenylist"></a>

```typescript
public readonly ModifyAutonomicsDenylist: string;
```

- *Type:* string

[Write] redshift:ModifyAutonomicsDenylist.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string;
```

- *Type:* string

[Write] redshift:ModifyCluster.

---

##### `ModifyClusterDbRevision`<sup>Required</sup> <a name="ModifyClusterDbRevision" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterDbRevision"></a>

```typescript
public readonly ModifyClusterDbRevision: string;
```

- *Type:* string

[Write] redshift:ModifyClusterDbRevision.

---

##### `ModifyClusterIamRoles`<sup>Required</sup> <a name="ModifyClusterIamRoles" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterIamRoles"></a>

```typescript
public readonly ModifyClusterIamRoles: string;
```

- *Type:* string

[PermissionManagement] redshift:ModifyClusterIamRoles.

---

##### `ModifyClusterMaintenance`<sup>Required</sup> <a name="ModifyClusterMaintenance" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterMaintenance"></a>

```typescript
public readonly ModifyClusterMaintenance: string;
```

- *Type:* string

[Write] redshift:ModifyClusterMaintenance.

---

##### `ModifyClusterParameterGroup`<sup>Required</sup> <a name="ModifyClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterParameterGroup"></a>

```typescript
public readonly ModifyClusterParameterGroup: string;
```

- *Type:* string

[Write] redshift:ModifyClusterParameterGroup.

---

##### `ModifyClusterSnapshot`<sup>Required</sup> <a name="ModifyClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSnapshot"></a>

```typescript
public readonly ModifyClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:ModifyClusterSnapshot.

---

##### `ModifyClusterSnapshotSchedule`<sup>Required</sup> <a name="ModifyClusterSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSnapshotSchedule"></a>

```typescript
public readonly ModifyClusterSnapshotSchedule: string;
```

- *Type:* string

[Write] redshift:ModifyClusterSnapshotSchedule.

---

##### `ModifyClusterSubnetGroup`<sup>Required</sup> <a name="ModifyClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyClusterSubnetGroup"></a>

```typescript
public readonly ModifyClusterSubnetGroup: string;
```

- *Type:* string

[Write] redshift:ModifyClusterSubnetGroup.

---

##### `ModifyCustomDomainAssociation`<sup>Required</sup> <a name="ModifyCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyCustomDomainAssociation"></a>

```typescript
public readonly ModifyCustomDomainAssociation: string;
```

- *Type:* string

[Write] redshift:ModifyCustomDomainAssociation.

---

##### `ModifyEndpointAccess`<sup>Required</sup> <a name="ModifyEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyEndpointAccess"></a>

```typescript
public readonly ModifyEndpointAccess: string;
```

- *Type:* string

[Write] redshift:ModifyEndpointAccess.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string;
```

- *Type:* string

[Write] redshift:ModifyEventSubscription.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string;
```

- *Type:* string

[Write] redshift:ModifyIntegration.

---

##### `ModifyQev2IdcApplication`<sup>Required</sup> <a name="ModifyQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyQev2IdcApplication"></a>

```typescript
public readonly ModifyQev2IdcApplication: string;
```

- *Type:* string

[Write] redshift:ModifyQev2IdcApplication.

---

##### `ModifyRedshiftIdcApplication`<sup>Required</sup> <a name="ModifyRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyRedshiftIdcApplication"></a>

```typescript
public readonly ModifyRedshiftIdcApplication: string;
```

- *Type:* string

[Write] redshift:ModifyRedshiftIdcApplication.

---

##### `ModifySavedQuery`<sup>Required</sup> <a name="ModifySavedQuery" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifySavedQuery"></a>

```typescript
public readonly ModifySavedQuery: string;
```

- *Type:* string

[Write] redshift:ModifySavedQuery.

---

##### `ModifyScheduledAction`<sup>Required</sup> <a name="ModifyScheduledAction" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyScheduledAction"></a>

```typescript
public readonly ModifyScheduledAction: string;
```

- *Type:* string

[Write] redshift:ModifyScheduledAction.

---

##### `ModifySnapshotCopyRetentionPeriod`<sup>Required</sup> <a name="ModifySnapshotCopyRetentionPeriod" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifySnapshotCopyRetentionPeriod"></a>

```typescript
public readonly ModifySnapshotCopyRetentionPeriod: string;
```

- *Type:* string

[Write] redshift:ModifySnapshotCopyRetentionPeriod.

---

##### `ModifySnapshotSchedule`<sup>Required</sup> <a name="ModifySnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifySnapshotSchedule"></a>

```typescript
public readonly ModifySnapshotSchedule: string;
```

- *Type:* string

[Write] redshift:ModifySnapshotSchedule.

---

##### `ModifyUsageLimit`<sup>Required</sup> <a name="ModifyUsageLimit" id="@cdk_utils/iam.redshift.RedshiftActions.property.ModifyUsageLimit"></a>

```typescript
public readonly ModifyUsageLimit: string;
```

- *Type:* string

[Write] redshift:ModifyUsageLimit.

---

##### `PauseCluster`<sup>Required</sup> <a name="PauseCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.PauseCluster"></a>

```typescript
public readonly PauseCluster: string;
```

- *Type:* string

[Write] redshift:PauseCluster.

---

##### `PurchaseReservedNodeOffering`<sup>Required</sup> <a name="PurchaseReservedNodeOffering" id="@cdk_utils/iam.redshift.RedshiftActions.property.PurchaseReservedNodeOffering"></a>

```typescript
public readonly PurchaseReservedNodeOffering: string;
```

- *Type:* string

[Write] redshift:PurchaseReservedNodeOffering.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] redshift:PutResourcePolicy.

---

##### `RebootCluster`<sup>Required</sup> <a name="RebootCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.RebootCluster"></a>

```typescript
public readonly RebootCluster: string;
```

- *Type:* string

[Write] redshift:RebootCluster.

---

##### `RegisterNamespace`<sup>Required</sup> <a name="RegisterNamespace" id="@cdk_utils/iam.redshift.RedshiftActions.property.RegisterNamespace"></a>

```typescript
public readonly RegisterNamespace: string;
```

- *Type:* string

[Write] redshift:RegisterNamespace.

---

##### `RejectDataShare`<sup>Required</sup> <a name="RejectDataShare" id="@cdk_utils/iam.redshift.RedshiftActions.property.RejectDataShare"></a>

```typescript
public readonly RejectDataShare: string;
```

- *Type:* string

[PermissionManagement] redshift:RejectDataShare.

---

##### `ResetClusterParameterGroup`<sup>Required</sup> <a name="ResetClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftActions.property.ResetClusterParameterGroup"></a>

```typescript
public readonly ResetClusterParameterGroup: string;
```

- *Type:* string

[Write] redshift:ResetClusterParameterGroup.

---

##### `ResizeCluster`<sup>Required</sup> <a name="ResizeCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.ResizeCluster"></a>

```typescript
public readonly ResizeCluster: string;
```

- *Type:* string

[Write] redshift:ResizeCluster.

---

##### `RestoreFromClusterSnapshot`<sup>Required</sup> <a name="RestoreFromClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.RestoreFromClusterSnapshot"></a>

```typescript
public readonly RestoreFromClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:RestoreFromClusterSnapshot.

---

##### `RestoreTableFromClusterSnapshot`<sup>Required</sup> <a name="RestoreTableFromClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftActions.property.RestoreTableFromClusterSnapshot"></a>

```typescript
public readonly RestoreTableFromClusterSnapshot: string;
```

- *Type:* string

[Write] redshift:RestoreTableFromClusterSnapshot.

---

##### `ResumeCluster`<sup>Required</sup> <a name="ResumeCluster" id="@cdk_utils/iam.redshift.RedshiftActions.property.ResumeCluster"></a>

```typescript
public readonly ResumeCluster: string;
```

- *Type:* string

[Write] redshift:ResumeCluster.

---

##### `RevokeClusterSecurityGroupIngress`<sup>Required</sup> <a name="RevokeClusterSecurityGroupIngress" id="@cdk_utils/iam.redshift.RedshiftActions.property.RevokeClusterSecurityGroupIngress"></a>

```typescript
public readonly RevokeClusterSecurityGroupIngress: string;
```

- *Type:* string

[Write] redshift:RevokeClusterSecurityGroupIngress.

---

##### `RevokeEndpointAccess`<sup>Required</sup> <a name="RevokeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.RevokeEndpointAccess"></a>

```typescript
public readonly RevokeEndpointAccess: string;
```

- *Type:* string

[PermissionManagement] redshift:RevokeEndpointAccess.

---

##### `RevokeSnapshotAccess`<sup>Required</sup> <a name="RevokeSnapshotAccess" id="@cdk_utils/iam.redshift.RedshiftActions.property.RevokeSnapshotAccess"></a>

```typescript
public readonly RevokeSnapshotAccess: string;
```

- *Type:* string

[PermissionManagement] redshift:RevokeSnapshotAccess.

---

##### `RotateEncryptionKey`<sup>Required</sup> <a name="RotateEncryptionKey" id="@cdk_utils/iam.redshift.RedshiftActions.property.RotateEncryptionKey"></a>

```typescript
public readonly RotateEncryptionKey: string;
```

- *Type:* string

[Write] redshift:RotateEncryptionKey.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.redshift.RedshiftActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdatePartnerStatus`<sup>Required</sup> <a name="UpdatePartnerStatus" id="@cdk_utils/iam.redshift.RedshiftActions.property.UpdatePartnerStatus"></a>

```typescript
public readonly UpdatePartnerStatus: string;
```

- *Type:* string

[Write] redshift:UpdatePartnerStatus.

---

##### `ViewQueriesFromConsole`<sup>Required</sup> <a name="ViewQueriesFromConsole" id="@cdk_utils/iam.redshift.RedshiftActions.property.ViewQueriesFromConsole"></a>

```typescript
public readonly ViewQueriesFromConsole: string;
```

- *Type:* string

[List] redshift:ViewQueriesFromConsole.

---

##### `ViewQueriesInConsole`<sup>Required</sup> <a name="ViewQueriesInConsole" id="@cdk_utils/iam.redshift.RedshiftActions.property.ViewQueriesInConsole"></a>

```typescript
public readonly ViewQueriesInConsole: string;
```

- *Type:* string

[List] redshift:ViewQueriesInConsole.

---

### RedshiftConditions <a name="RedshiftConditions" id="@cdk_utils/iam.redshift.RedshiftConditions"></a>

Condition key constants and builders for redshift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift.RedshiftConditions.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

new redshift.RedshiftConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.allowWrites">allowWrites</a></code> | Generates a condition block for `redshift:AllowWrites`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.consumerARN">consumerARN</a></code> | Generates a condition block for `redshift:ConsumerArn`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.consumerIdentifier">consumerIdentifier</a></code> | Generates a condition block for `redshift:ConsumerIdentifier`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.dbName">dbName</a></code> | Generates a condition block for `redshift:DbName`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.dbUser">dbUser</a></code> | Generates a condition block for `redshift:DbUser`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.durationSeconds">durationSeconds</a></code> | Generates a condition block for `redshift:DurationSeconds`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.inboundIntegrationARN">inboundIntegrationARN</a></code> | Generates a condition block for `redshift:InboundIntegrationArn`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.integrationSourceARN">integrationSourceARN</a></code> | Generates a condition block for `redshift:IntegrationSourceArn`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.integrationTargetARN">integrationTargetARN</a></code> | Generates a condition block for `redshift:IntegrationTargetArn`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `allowWrites` <a name="allowWrites" id="@cdk_utils/iam.redshift.RedshiftConditions.allowWrites"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.allowWrites(value: boolean)
```

Generates a condition block for `redshift:AllowWrites`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.allowWrites.parameter.value"></a>

- *Type:* boolean

---

##### `consumerARN` <a name="consumerARN" id="@cdk_utils/iam.redshift.RedshiftConditions.consumerARN"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.consumerARN(value: string)
```

Generates a condition block for `redshift:ConsumerArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.consumerARN.parameter.value"></a>

- *Type:* string

---

##### `consumerIdentifier` <a name="consumerIdentifier" id="@cdk_utils/iam.redshift.RedshiftConditions.consumerIdentifier"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.consumerIdentifier(value: string)
```

Generates a condition block for `redshift:ConsumerIdentifier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.consumerIdentifier.parameter.value"></a>

- *Type:* string

---

##### `dbName` <a name="dbName" id="@cdk_utils/iam.redshift.RedshiftConditions.dbName"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.dbName(value: string)
```

Generates a condition block for `redshift:DbName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.dbName.parameter.value"></a>

- *Type:* string

---

##### `dbUser` <a name="dbUser" id="@cdk_utils/iam.redshift.RedshiftConditions.dbUser"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.dbUser(value: string)
```

Generates a condition block for `redshift:DbUser`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.dbUser.parameter.value"></a>

- *Type:* string

---

##### `durationSeconds` <a name="durationSeconds" id="@cdk_utils/iam.redshift.RedshiftConditions.durationSeconds"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.durationSeconds(value: string)
```

Generates a condition block for `redshift:DurationSeconds`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.durationSeconds.parameter.value"></a>

- *Type:* string

---

##### `inboundIntegrationARN` <a name="inboundIntegrationARN" id="@cdk_utils/iam.redshift.RedshiftConditions.inboundIntegrationARN"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.inboundIntegrationARN(value: string)
```

Generates a condition block for `redshift:InboundIntegrationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.inboundIntegrationARN.parameter.value"></a>

- *Type:* string

---

##### `integrationSourceARN` <a name="integrationSourceARN" id="@cdk_utils/iam.redshift.RedshiftConditions.integrationSourceARN"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.integrationSourceARN(value: string)
```

Generates a condition block for `redshift:IntegrationSourceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.integrationSourceARN.parameter.value"></a>

- *Type:* string

---

##### `integrationTargetARN` <a name="integrationTargetARN" id="@cdk_utils/iam.redshift.RedshiftConditions.integrationTargetARN"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.integrationTargetARN(value: string)
```

Generates a condition block for `redshift:IntegrationTargetArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.integrationTargetARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.redshift.RedshiftConditions.requestTag"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.redshift.RedshiftConditions.resourceTag"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.redshift.RedshiftConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.tagKeys"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.redshift.RedshiftConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.actionGetClusterCredentialsConditionKeys">actionGetClusterCredentialsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetClusterCredentials action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.actionGetClusterCredentialsWithIAMConditionKeys">actionGetClusterCredentialsWithIAMConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetClusterCredentialsWithIAM action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.ALLOW_WRITES">ALLOW_WRITES</a></code> | <code>string</code> | Condition key: redshift:AllowWrites (Bool). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.AssociateDataShareConsumerConditionKeys">AssociateDataShareConsumerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateDataShareConsumer action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.AuthorizeDataShareConditionKeys">AuthorizeDataShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AuthorizeDataShare action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CONSUMER_ARN">CONSUMER_ARN</a></code> | <code>string</code> | Condition key: redshift:ConsumerArn (ARN). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CONSUMER_IDENTIFIER">CONSUMER_IDENTIFIER</a></code> | <code>string</code> | Condition key: redshift:ConsumerIdentifier (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CopyClusterSnapshotConditionKeys">CopyClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterParameterGroupConditionKeys">CreateClusterParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterParameterGroup action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSecurityGroupConditionKeys">CreateClusterSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSnapshotConditionKeys">CreateClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterSnapshot action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSubnetGroupConditionKeys">CreateClusterSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterUserConditionKeys">CreateClusterUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterUser action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateEventSubscriptionConditionKeys">CreateEventSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventSubscription action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateHsmClientCertificateConditionKeys">CreateHsmClientCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHsmClientCertificate action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateHsmConfigurationConditionKeys">CreateHsmConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHsmConfiguration action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateIntegrationConditionKeys">CreateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegration action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateSnapshotCopyGrantConditionKeys">CreateSnapshotCopyGrantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshotCopyGrant action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateSnapshotScheduleConditionKeys">CreateSnapshotScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshotSchedule action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateTagsConditionKeys">CreateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTags action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.CreateUsageLimitConditionKeys">CreateUsageLimitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUsageLimit action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DB_NAME">DB_NAME</a></code> | <code>string</code> | Condition key: redshift:DbName (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DB_USER">DB_USER</a></code> | <code>string</code> | Condition key: redshift:DbUser (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DeauthorizeDataShareConditionKeys">DeauthorizeDataShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeauthorizeDataShare action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DeleteIntegrationConditionKeys">DeleteIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIntegration action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DescribeInboundIntegrationsConditionKeys">DescribeInboundIntegrationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInboundIntegrations action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DescribeIntegrationsConditionKeys">DescribeIntegrationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeIntegrations action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DisassociateDataShareConsumerConditionKeys">DisassociateDataShareConsumerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateDataShareConsumer action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.DURATION_SECONDS">DURATION_SECONDS</a></code> | <code>string</code> | Condition key: redshift:DurationSeconds (String). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.INBOUND_INTEGRATION_ARN">INBOUND_INTEGRATION_ARN</a></code> | <code>string</code> | Condition key: redshift:InboundIntegrationArn (ARN). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.INTEGRATION_SOURCE_ARN">INTEGRATION_SOURCE_ARN</a></code> | <code>string</code> | Condition key: redshift:IntegrationSourceArn (ARN). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.INTEGRATION_TARGET_ARN">INTEGRATION_TARGET_ARN</a></code> | <code>string</code> | Condition key: redshift:IntegrationTargetArn (ARN). |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.ModifyIntegrationConditionKeys">ModifyIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyIntegration action. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftConditions.property.RestoreFromClusterSnapshotConditionKeys">RestoreFromClusterSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RestoreFromClusterSnapshot action. |

---

##### `actionGetClusterCredentialsConditionKeys`<sup>Required</sup> <a name="actionGetClusterCredentialsConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.actionGetClusterCredentialsConditionKeys"></a>

```typescript
public readonly actionGetClusterCredentialsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetClusterCredentials action.

---

##### `actionGetClusterCredentialsWithIAMConditionKeys`<sup>Required</sup> <a name="actionGetClusterCredentialsWithIAMConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.actionGetClusterCredentialsWithIAMConditionKeys"></a>

```typescript
public readonly actionGetClusterCredentialsWithIAMConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetClusterCredentialsWithIAM action.

---

##### `ALLOW_WRITES`<sup>Required</sup> <a name="ALLOW_WRITES" id="@cdk_utils/iam.redshift.RedshiftConditions.property.ALLOW_WRITES"></a>

```typescript
public readonly ALLOW_WRITES: string;
```

- *Type:* string

Condition key: redshift:AllowWrites (Bool).

---

##### `AssociateDataShareConsumerConditionKeys`<sup>Required</sup> <a name="AssociateDataShareConsumerConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.AssociateDataShareConsumerConditionKeys"></a>

```typescript
public readonly AssociateDataShareConsumerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateDataShareConsumer action.

---

##### `AuthorizeDataShareConditionKeys`<sup>Required</sup> <a name="AuthorizeDataShareConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.AuthorizeDataShareConditionKeys"></a>

```typescript
public readonly AuthorizeDataShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AuthorizeDataShare action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.redshift.RedshiftConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CONSUMER_ARN`<sup>Required</sup> <a name="CONSUMER_ARN" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CONSUMER_ARN"></a>

```typescript
public readonly CONSUMER_ARN: string;
```

- *Type:* string

Condition key: redshift:ConsumerArn (ARN).

---

##### `CONSUMER_IDENTIFIER`<sup>Required</sup> <a name="CONSUMER_IDENTIFIER" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CONSUMER_IDENTIFIER"></a>

```typescript
public readonly CONSUMER_IDENTIFIER: string;
```

- *Type:* string

Condition key: redshift:ConsumerIdentifier (String).

---

##### `CopyClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CopyClusterSnapshotConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CopyClusterSnapshotConditionKeys"></a>

```typescript
public readonly CopyClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyClusterSnapshot action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateClusterParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateClusterParameterGroupConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterParameterGroupConditionKeys"></a>

```typescript
public readonly CreateClusterParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterParameterGroup action.

---

##### `CreateClusterSecurityGroupConditionKeys`<sup>Required</sup> <a name="CreateClusterSecurityGroupConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSecurityGroupConditionKeys"></a>

```typescript
public readonly CreateClusterSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterSecurityGroup action.

---

##### `CreateClusterSnapshotConditionKeys`<sup>Required</sup> <a name="CreateClusterSnapshotConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSnapshotConditionKeys"></a>

```typescript
public readonly CreateClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterSnapshot action.

---

##### `CreateClusterSubnetGroupConditionKeys`<sup>Required</sup> <a name="CreateClusterSubnetGroupConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterSubnetGroupConditionKeys"></a>

```typescript
public readonly CreateClusterSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterSubnetGroup action.

---

##### `CreateClusterUserConditionKeys`<sup>Required</sup> <a name="CreateClusterUserConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateClusterUserConditionKeys"></a>

```typescript
public readonly CreateClusterUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterUser action.

---

##### `CreateEventSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateEventSubscriptionConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateEventSubscriptionConditionKeys"></a>

```typescript
public readonly CreateEventSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventSubscription action.

---

##### `CreateHsmClientCertificateConditionKeys`<sup>Required</sup> <a name="CreateHsmClientCertificateConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateHsmClientCertificateConditionKeys"></a>

```typescript
public readonly CreateHsmClientCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHsmClientCertificate action.

---

##### `CreateHsmConfigurationConditionKeys`<sup>Required</sup> <a name="CreateHsmConfigurationConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateHsmConfigurationConditionKeys"></a>

```typescript
public readonly CreateHsmConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHsmConfiguration action.

---

##### `CreateIntegrationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateIntegrationConditionKeys"></a>

```typescript
public readonly CreateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegration action.

---

##### `CreateSnapshotCopyGrantConditionKeys`<sup>Required</sup> <a name="CreateSnapshotCopyGrantConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateSnapshotCopyGrantConditionKeys"></a>

```typescript
public readonly CreateSnapshotCopyGrantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshotCopyGrant action.

---

##### `CreateSnapshotScheduleConditionKeys`<sup>Required</sup> <a name="CreateSnapshotScheduleConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateSnapshotScheduleConditionKeys"></a>

```typescript
public readonly CreateSnapshotScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshotSchedule action.

---

##### `CreateTagsConditionKeys`<sup>Required</sup> <a name="CreateTagsConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateTagsConditionKeys"></a>

```typescript
public readonly CreateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTags action.

---

##### `CreateUsageLimitConditionKeys`<sup>Required</sup> <a name="CreateUsageLimitConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.CreateUsageLimitConditionKeys"></a>

```typescript
public readonly CreateUsageLimitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUsageLimit action.

---

##### `DB_NAME`<sup>Required</sup> <a name="DB_NAME" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DB_NAME"></a>

```typescript
public readonly DB_NAME: string;
```

- *Type:* string

Condition key: redshift:DbName (String).

---

##### `DB_USER`<sup>Required</sup> <a name="DB_USER" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DB_USER"></a>

```typescript
public readonly DB_USER: string;
```

- *Type:* string

Condition key: redshift:DbUser (String).

---

##### `DeauthorizeDataShareConditionKeys`<sup>Required</sup> <a name="DeauthorizeDataShareConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DeauthorizeDataShareConditionKeys"></a>

```typescript
public readonly DeauthorizeDataShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeauthorizeDataShare action.

---

##### `DeleteIntegrationConditionKeys`<sup>Required</sup> <a name="DeleteIntegrationConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DeleteIntegrationConditionKeys"></a>

```typescript
public readonly DeleteIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIntegration action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

##### `DescribeInboundIntegrationsConditionKeys`<sup>Required</sup> <a name="DescribeInboundIntegrationsConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DescribeInboundIntegrationsConditionKeys"></a>

```typescript
public readonly DescribeInboundIntegrationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInboundIntegrations action.

---

##### `DescribeIntegrationsConditionKeys`<sup>Required</sup> <a name="DescribeIntegrationsConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DescribeIntegrationsConditionKeys"></a>

```typescript
public readonly DescribeIntegrationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeIntegrations action.

---

##### `DisassociateDataShareConsumerConditionKeys`<sup>Required</sup> <a name="DisassociateDataShareConsumerConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DisassociateDataShareConsumerConditionKeys"></a>

```typescript
public readonly DisassociateDataShareConsumerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateDataShareConsumer action.

---

##### `DURATION_SECONDS`<sup>Required</sup> <a name="DURATION_SECONDS" id="@cdk_utils/iam.redshift.RedshiftConditions.property.DURATION_SECONDS"></a>

```typescript
public readonly DURATION_SECONDS: string;
```

- *Type:* string

Condition key: redshift:DurationSeconds (String).

---

##### `INBOUND_INTEGRATION_ARN`<sup>Required</sup> <a name="INBOUND_INTEGRATION_ARN" id="@cdk_utils/iam.redshift.RedshiftConditions.property.INBOUND_INTEGRATION_ARN"></a>

```typescript
public readonly INBOUND_INTEGRATION_ARN: string;
```

- *Type:* string

Condition key: redshift:InboundIntegrationArn (ARN).

---

##### `INTEGRATION_SOURCE_ARN`<sup>Required</sup> <a name="INTEGRATION_SOURCE_ARN" id="@cdk_utils/iam.redshift.RedshiftConditions.property.INTEGRATION_SOURCE_ARN"></a>

```typescript
public readonly INTEGRATION_SOURCE_ARN: string;
```

- *Type:* string

Condition key: redshift:IntegrationSourceArn (ARN).

---

##### `INTEGRATION_TARGET_ARN`<sup>Required</sup> <a name="INTEGRATION_TARGET_ARN" id="@cdk_utils/iam.redshift.RedshiftConditions.property.INTEGRATION_TARGET_ARN"></a>

```typescript
public readonly INTEGRATION_TARGET_ARN: string;
```

- *Type:* string

Condition key: redshift:IntegrationTargetArn (ARN).

---

##### `ModifyIntegrationConditionKeys`<sup>Required</sup> <a name="ModifyIntegrationConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.ModifyIntegrationConditionKeys"></a>

```typescript
public readonly ModifyIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyIntegration action.

---

##### `RestoreFromClusterSnapshotConditionKeys`<sup>Required</sup> <a name="RestoreFromClusterSnapshotConditionKeys" id="@cdk_utils/iam.redshift.RedshiftConditions.property.RestoreFromClusterSnapshotConditionKeys"></a>

```typescript
public readonly RestoreFromClusterSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RestoreFromClusterSnapshot action.

---

### RedshiftOperations <a name="RedshiftOperations" id="@cdk_utils/iam.redshift.RedshiftOperations"></a>

API operation to required IAM actions mapping for redshift.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift.RedshiftOperations.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

new redshift.RedshiftOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AcceptReservedNodeExchange">AcceptReservedNodeExchange</a></code> | <code>string[]</code> | IAM actions required for the AcceptReservedNodeExchange API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AddPartner">AddPartner</a></code> | <code>string[]</code> | IAM actions required for the AddPartner API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AssociateDataShareConsumer">AssociateDataShareConsumer</a></code> | <code>string[]</code> | IAM actions required for the AssociateDataShareConsumer API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeClusterSecurityGroupIngress">AuthorizeClusterSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeClusterSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeDataShare">AuthorizeDataShare</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeDataShare API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeEndpointAccess">AuthorizeEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeSnapshotAccess">AuthorizeSnapshotAccess</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeSnapshotAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.BatchDeleteClusterSnapshots">BatchDeleteClusterSnapshots</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteClusterSnapshots API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.BatchModifyClusterSnapshots">BatchModifyClusterSnapshots</a></code> | <code>string[]</code> | IAM actions required for the BatchModifyClusterSnapshots API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CancelResize">CancelResize</a></code> | <code>string[]</code> | IAM actions required for the CancelResize API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CopyClusterSnapshot">CopyClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopyClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateAuthenticationProfile">CreateAuthenticationProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateAuthenticationProfile API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterParameterGroup">CreateClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSecurityGroup">CreateClusterSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSnapshot">CreateClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSubnetGroup">CreateClusterSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateCustomDomainAssociation">CreateCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateEndpointAccess">CreateEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateEventSubscription">CreateEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateHsmClientCertificate">CreateHsmClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the CreateHsmClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateHsmConfiguration">CreateHsmConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateHsmConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateIntegration">CreateIntegration</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateQev2IdcApplication">CreateQev2IdcApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateQev2IdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateRedshiftIdcApplication">CreateRedshiftIdcApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateRedshiftIdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateScheduledAction">CreateScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateSnapshotCopyGrant">CreateSnapshotCopyGrant</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshotCopyGrant API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateSnapshotSchedule">CreateSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.CreateUsageLimit">CreateUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the CreateUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeauthorizeDataShare">DeauthorizeDataShare</a></code> | <code>string[]</code> | IAM actions required for the DeauthorizeDataShare API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteAuthenticationProfile">DeleteAuthenticationProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteAuthenticationProfile API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterParameterGroup">DeleteClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSecurityGroup">DeleteClusterSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSnapshot">DeleteClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSubnetGroup">DeleteClusterSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteCustomDomainAssociation">DeleteCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteEndpointAccess">DeleteEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteEventSubscription">DeleteEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteHsmClientCertificate">DeleteHsmClientCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteHsmClientCertificate API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteHsmConfiguration">DeleteHsmConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteHsmConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeletePartner">DeletePartner</a></code> | <code>string[]</code> | IAM actions required for the DeletePartner API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteQev2IdcApplication">DeleteQev2IdcApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteQev2IdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteRedshiftIdcApplication">DeleteRedshiftIdcApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteRedshiftIdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteSnapshotCopyGrant">DeleteSnapshotCopyGrant</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshotCopyGrant API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteSnapshotSchedule">DeleteSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteUsageLimit">DeleteUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DeregisterNamespace">DeregisterNamespace</a></code> | <code>string[]</code> | IAM actions required for the DeregisterNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeAccountAttributes">DescribeAccountAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountAttributes API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeAuthenticationProfiles">DescribeAuthenticationProfiles</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuthenticationProfiles API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterDbRevisions">DescribeClusterDbRevisions</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterDbRevisions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterParameterGroups">DescribeClusterParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterParameters">DescribeClusterParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterParameters API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusters">DescribeClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusters API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSecurityGroups">DescribeClusterSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSnapshots">DescribeClusterSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterSnapshots API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSubnetGroups">DescribeClusterSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterTracks">DescribeClusterTracks</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterTracks API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterVersions">DescribeClusterVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterVersions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeCustomDomainAssociations">DescribeCustomDomainAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomDomainAssociations API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataShares">DescribeDataShares</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataShares API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataSharesForConsumer">DescribeDataSharesForConsumer</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSharesForConsumer API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataSharesForProducer">DescribeDataSharesForProducer</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataSharesForProducer API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDefaultClusterParameters">DescribeDefaultClusterParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeDefaultClusterParameters API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEndpointAccess">DescribeEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEndpointAuthorization">DescribeEndpointAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpointAuthorization API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEventCategories">DescribeEventCategories</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventCategories API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEventSubscriptions">DescribeEventSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeHsmClientCertificates">DescribeHsmClientCertificates</a></code> | <code>string[]</code> | IAM actions required for the DescribeHsmClientCertificates API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeHsmConfigurations">DescribeHsmConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeHsmConfigurations API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeInboundIntegrations">DescribeInboundIntegrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeInboundIntegrations API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeIntegrations">DescribeIntegrations</a></code> | <code>string[]</code> | IAM actions required for the DescribeIntegrations API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeLoggingStatus">DescribeLoggingStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoggingStatus API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeNodeConfigurationOptions">DescribeNodeConfigurationOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeNodeConfigurationOptions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeOrderableClusterOptions">DescribeOrderableClusterOptions</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrderableClusterOptions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribePartners">DescribePartners</a></code> | <code>string[]</code> | IAM actions required for the DescribePartners API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeQev2IdcApplications">DescribeQev2IdcApplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeQev2IdcApplications API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeRedshiftIdcApplications">DescribeRedshiftIdcApplications</a></code> | <code>string[]</code> | IAM actions required for the DescribeRedshiftIdcApplications API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodeExchangeStatus">DescribeReservedNodeExchangeStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedNodeExchangeStatus API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodeOfferings">DescribeReservedNodeOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedNodeOfferings API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodes">DescribeReservedNodes</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedNodes API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeResize">DescribeResize</a></code> | <code>string[]</code> | IAM actions required for the DescribeResize API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string[]</code> | IAM actions required for the DescribeScheduledActions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeSnapshotCopyGrants">DescribeSnapshotCopyGrants</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshotCopyGrants API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeSnapshotSchedules">DescribeSnapshotSchedules</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshotSchedules API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeStorage">DescribeStorage</a></code> | <code>string[]</code> | IAM actions required for the DescribeStorage API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeTableRestoreStatus">DescribeTableRestoreStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeTableRestoreStatus API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeUsageLimits">DescribeUsageLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsageLimits API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DisableLogging">DisableLogging</a></code> | <code>string[]</code> | IAM actions required for the DisableLogging API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DisableSnapshotCopy">DisableSnapshotCopy</a></code> | <code>string[]</code> | IAM actions required for the DisableSnapshotCopy API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.DisassociateDataShareConsumer">DisassociateDataShareConsumer</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDataShareConsumer API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.EnableLogging">EnableLogging</a></code> | <code>string[]</code> | IAM actions required for the EnableLogging API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.EnableSnapshotCopy">EnableSnapshotCopy</a></code> | <code>string[]</code> | IAM actions required for the EnableSnapshotCopy API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.FailoverPrimaryCompute">FailoverPrimaryCompute</a></code> | <code>string[]</code> | IAM actions required for the FailoverPrimaryCompute API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyAquaConfiguration">ModifyAquaConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ModifyAquaConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyAuthenticationProfile">ModifyAuthenticationProfile</a></code> | <code>string[]</code> | IAM actions required for the ModifyAuthenticationProfile API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyCluster">ModifyCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterDbRevision">ModifyClusterDbRevision</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterDbRevision API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterIamRoles">ModifyClusterIamRoles</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterIamRoles API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterMaintenance">ModifyClusterMaintenance</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterMaintenance API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterParameterGroup">ModifyClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSnapshot">ModifyClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSnapshotSchedule">ModifyClusterSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSubnetGroup">ModifyClusterSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyClusterSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyCustomDomainAssociation">ModifyCustomDomainAssociation</a></code> | <code>string[]</code> | IAM actions required for the ModifyCustomDomainAssociation API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyEndpointAccess">ModifyEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the ModifyEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyEventSubscription">ModifyEventSubscription</a></code> | <code>string[]</code> | IAM actions required for the ModifyEventSubscription API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyIntegration">ModifyIntegration</a></code> | <code>string[]</code> | IAM actions required for the ModifyIntegration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyLakehouseConfiguration">ModifyLakehouseConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ModifyLakehouseConfiguration API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyQev2IdcApplication">ModifyQev2IdcApplication</a></code> | <code>string[]</code> | IAM actions required for the ModifyQev2IdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyRedshiftIdcApplication">ModifyRedshiftIdcApplication</a></code> | <code>string[]</code> | IAM actions required for the ModifyRedshiftIdcApplication API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyScheduledAction">ModifyScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the ModifyScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifySnapshotCopyRetentionPeriod">ModifySnapshotCopyRetentionPeriod</a></code> | <code>string[]</code> | IAM actions required for the ModifySnapshotCopyRetentionPeriod API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifySnapshotSchedule">ModifySnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the ModifySnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyUsageLimit">ModifyUsageLimit</a></code> | <code>string[]</code> | IAM actions required for the ModifyUsageLimit API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetClusterCredentials">opGetClusterCredentials</a></code> | <code>string[]</code> | IAM actions required for the GetClusterCredentials API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetClusterCredentialsWithIAM">opGetClusterCredentialsWithIAM</a></code> | <code>string[]</code> | IAM actions required for the GetClusterCredentialsWithIAM API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetIdentityCenterAuthToken">opGetIdentityCenterAuthToken</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityCenterAuthToken API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetReservedNodeExchangeConfigurationOptions">opGetReservedNodeExchangeConfigurationOptions</a></code> | <code>string[]</code> | IAM actions required for the GetReservedNodeExchangeConfigurationOptions API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetReservedNodeExchangeOfferings">opGetReservedNodeExchangeOfferings</a></code> | <code>string[]</code> | IAM actions required for the GetReservedNodeExchangeOfferings API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.PauseCluster">PauseCluster</a></code> | <code>string[]</code> | IAM actions required for the PauseCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.PurchaseReservedNodeOffering">PurchaseReservedNodeOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedNodeOffering API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RebootCluster">RebootCluster</a></code> | <code>string[]</code> | IAM actions required for the RebootCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RegisterNamespace">RegisterNamespace</a></code> | <code>string[]</code> | IAM actions required for the RegisterNamespace API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RejectDataShare">RejectDataShare</a></code> | <code>string[]</code> | IAM actions required for the RejectDataShare API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ResetClusterParameterGroup">ResetClusterParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ResetClusterParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ResizeCluster">ResizeCluster</a></code> | <code>string[]</code> | IAM actions required for the ResizeCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RestoreFromClusterSnapshot">RestoreFromClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreFromClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RestoreTableFromClusterSnapshot">RestoreTableFromClusterSnapshot</a></code> | <code>string[]</code> | IAM actions required for the RestoreTableFromClusterSnapshot API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.ResumeCluster">ResumeCluster</a></code> | <code>string[]</code> | IAM actions required for the ResumeCluster API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeClusterSecurityGroupIngress">RevokeClusterSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the RevokeClusterSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeEndpointAccess">RevokeEndpointAccess</a></code> | <code>string[]</code> | IAM actions required for the RevokeEndpointAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeSnapshotAccess">RevokeSnapshotAccess</a></code> | <code>string[]</code> | IAM actions required for the RevokeSnapshotAccess API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.RotateEncryptionKey">RotateEncryptionKey</a></code> | <code>string[]</code> | IAM actions required for the RotateEncryptionKey API call. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftOperations.property.UpdatePartnerStatus">UpdatePartnerStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdatePartnerStatus API call. |

---

##### `AcceptReservedNodeExchange`<sup>Required</sup> <a name="AcceptReservedNodeExchange" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AcceptReservedNodeExchange"></a>

```typescript
public readonly AcceptReservedNodeExchange: string[];
```

- *Type:* string[]

IAM actions required for the AcceptReservedNodeExchange API call.

---

##### `AddPartner`<sup>Required</sup> <a name="AddPartner" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AddPartner"></a>

```typescript
public readonly AddPartner: string[];
```

- *Type:* string[]

IAM actions required for the AddPartner API call.

---

##### `AssociateDataShareConsumer`<sup>Required</sup> <a name="AssociateDataShareConsumer" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AssociateDataShareConsumer"></a>

```typescript
public readonly AssociateDataShareConsumer: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDataShareConsumer API call.

---

##### `AuthorizeClusterSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeClusterSecurityGroupIngress" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeClusterSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeClusterSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeClusterSecurityGroupIngress API call.

---

##### `AuthorizeDataShare`<sup>Required</sup> <a name="AuthorizeDataShare" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeDataShare"></a>

```typescript
public readonly AuthorizeDataShare: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeDataShare API call.

---

##### `AuthorizeEndpointAccess`<sup>Required</sup> <a name="AuthorizeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeEndpointAccess"></a>

```typescript
public readonly AuthorizeEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeEndpointAccess API call.

---

##### `AuthorizeSnapshotAccess`<sup>Required</sup> <a name="AuthorizeSnapshotAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.AuthorizeSnapshotAccess"></a>

```typescript
public readonly AuthorizeSnapshotAccess: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeSnapshotAccess API call.

---

##### `BatchDeleteClusterSnapshots`<sup>Required</sup> <a name="BatchDeleteClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftOperations.property.BatchDeleteClusterSnapshots"></a>

```typescript
public readonly BatchDeleteClusterSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteClusterSnapshots API call.

---

##### `BatchModifyClusterSnapshots`<sup>Required</sup> <a name="BatchModifyClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftOperations.property.BatchModifyClusterSnapshots"></a>

```typescript
public readonly BatchModifyClusterSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the BatchModifyClusterSnapshots API call.

---

##### `CancelResize`<sup>Required</sup> <a name="CancelResize" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CancelResize"></a>

```typescript
public readonly CancelResize: string[];
```

- *Type:* string[]

IAM actions required for the CancelResize API call.

---

##### `CopyClusterSnapshot`<sup>Required</sup> <a name="CopyClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CopyClusterSnapshot"></a>

```typescript
public readonly CopyClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopyClusterSnapshot API call.

---

##### `CreateAuthenticationProfile`<sup>Required</sup> <a name="CreateAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateAuthenticationProfile"></a>

```typescript
public readonly CreateAuthenticationProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateAuthenticationProfile API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateClusterParameterGroup`<sup>Required</sup> <a name="CreateClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterParameterGroup"></a>

```typescript
public readonly CreateClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterParameterGroup API call.

---

##### `CreateClusterSecurityGroup`<sup>Required</sup> <a name="CreateClusterSecurityGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSecurityGroup"></a>

```typescript
public readonly CreateClusterSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterSecurityGroup API call.

---

##### `CreateClusterSnapshot`<sup>Required</sup> <a name="CreateClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSnapshot"></a>

```typescript
public readonly CreateClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterSnapshot API call.

---

##### `CreateClusterSubnetGroup`<sup>Required</sup> <a name="CreateClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateClusterSubnetGroup"></a>

```typescript
public readonly CreateClusterSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterSubnetGroup API call.

---

##### `CreateCustomDomainAssociation`<sup>Required</sup> <a name="CreateCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateCustomDomainAssociation"></a>

```typescript
public readonly CreateCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomDomainAssociation API call.

---

##### `CreateEndpointAccess`<sup>Required</sup> <a name="CreateEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateEndpointAccess"></a>

```typescript
public readonly CreateEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpointAccess API call.

---

##### `CreateEventSubscription`<sup>Required</sup> <a name="CreateEventSubscription" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateEventSubscription"></a>

```typescript
public readonly CreateEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventSubscription API call.

---

##### `CreateHsmClientCertificate`<sup>Required</sup> <a name="CreateHsmClientCertificate" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateHsmClientCertificate"></a>

```typescript
public readonly CreateHsmClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the CreateHsmClientCertificate API call.

---

##### `CreateHsmConfiguration`<sup>Required</sup> <a name="CreateHsmConfiguration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateHsmConfiguration"></a>

```typescript
public readonly CreateHsmConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateHsmConfiguration API call.

---

##### `CreateIntegration`<sup>Required</sup> <a name="CreateIntegration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateIntegration"></a>

```typescript
public readonly CreateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegration API call.

---

##### `CreateQev2IdcApplication`<sup>Required</sup> <a name="CreateQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateQev2IdcApplication"></a>

```typescript
public readonly CreateQev2IdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateQev2IdcApplication API call.

---

##### `CreateRedshiftIdcApplication`<sup>Required</sup> <a name="CreateRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateRedshiftIdcApplication"></a>

```typescript
public readonly CreateRedshiftIdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateRedshiftIdcApplication API call.

---

##### `CreateScheduledAction`<sup>Required</sup> <a name="CreateScheduledAction" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateScheduledAction"></a>

```typescript
public readonly CreateScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledAction API call.

---

##### `CreateSnapshotCopyGrant`<sup>Required</sup> <a name="CreateSnapshotCopyGrant" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateSnapshotCopyGrant"></a>

```typescript
public readonly CreateSnapshotCopyGrant: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshotCopyGrant API call.

---

##### `CreateSnapshotSchedule`<sup>Required</sup> <a name="CreateSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateSnapshotSchedule"></a>

```typescript
public readonly CreateSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshotSchedule API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `CreateUsageLimit`<sup>Required</sup> <a name="CreateUsageLimit" id="@cdk_utils/iam.redshift.RedshiftOperations.property.CreateUsageLimit"></a>

```typescript
public readonly CreateUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the CreateUsageLimit API call.

---

##### `DeauthorizeDataShare`<sup>Required</sup> <a name="DeauthorizeDataShare" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeauthorizeDataShare"></a>

```typescript
public readonly DeauthorizeDataShare: string[];
```

- *Type:* string[]

IAM actions required for the DeauthorizeDataShare API call.

---

##### `DeleteAuthenticationProfile`<sup>Required</sup> <a name="DeleteAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteAuthenticationProfile"></a>

```typescript
public readonly DeleteAuthenticationProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAuthenticationProfile API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteClusterParameterGroup`<sup>Required</sup> <a name="DeleteClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterParameterGroup"></a>

```typescript
public readonly DeleteClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterParameterGroup API call.

---

##### `DeleteClusterSecurityGroup`<sup>Required</sup> <a name="DeleteClusterSecurityGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSecurityGroup"></a>

```typescript
public readonly DeleteClusterSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterSecurityGroup API call.

---

##### `DeleteClusterSnapshot`<sup>Required</sup> <a name="DeleteClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSnapshot"></a>

```typescript
public readonly DeleteClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterSnapshot API call.

---

##### `DeleteClusterSubnetGroup`<sup>Required</sup> <a name="DeleteClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteClusterSubnetGroup"></a>

```typescript
public readonly DeleteClusterSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterSubnetGroup API call.

---

##### `DeleteCustomDomainAssociation`<sup>Required</sup> <a name="DeleteCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteCustomDomainAssociation"></a>

```typescript
public readonly DeleteCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomDomainAssociation API call.

---

##### `DeleteEndpointAccess`<sup>Required</sup> <a name="DeleteEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteEndpointAccess"></a>

```typescript
public readonly DeleteEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpointAccess API call.

---

##### `DeleteEventSubscription`<sup>Required</sup> <a name="DeleteEventSubscription" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteEventSubscription"></a>

```typescript
public readonly DeleteEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventSubscription API call.

---

##### `DeleteHsmClientCertificate`<sup>Required</sup> <a name="DeleteHsmClientCertificate" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteHsmClientCertificate"></a>

```typescript
public readonly DeleteHsmClientCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHsmClientCertificate API call.

---

##### `DeleteHsmConfiguration`<sup>Required</sup> <a name="DeleteHsmConfiguration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteHsmConfiguration"></a>

```typescript
public readonly DeleteHsmConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHsmConfiguration API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeletePartner`<sup>Required</sup> <a name="DeletePartner" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeletePartner"></a>

```typescript
public readonly DeletePartner: string[];
```

- *Type:* string[]

IAM actions required for the DeletePartner API call.

---

##### `DeleteQev2IdcApplication`<sup>Required</sup> <a name="DeleteQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteQev2IdcApplication"></a>

```typescript
public readonly DeleteQev2IdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQev2IdcApplication API call.

---

##### `DeleteRedshiftIdcApplication`<sup>Required</sup> <a name="DeleteRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteRedshiftIdcApplication"></a>

```typescript
public readonly DeleteRedshiftIdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRedshiftIdcApplication API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledAction API call.

---

##### `DeleteSnapshotCopyGrant`<sup>Required</sup> <a name="DeleteSnapshotCopyGrant" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteSnapshotCopyGrant"></a>

```typescript
public readonly DeleteSnapshotCopyGrant: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshotCopyGrant API call.

---

##### `DeleteSnapshotSchedule`<sup>Required</sup> <a name="DeleteSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteSnapshotSchedule"></a>

```typescript
public readonly DeleteSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshotSchedule API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DeleteUsageLimit`<sup>Required</sup> <a name="DeleteUsageLimit" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeleteUsageLimit"></a>

```typescript
public readonly DeleteUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUsageLimit API call.

---

##### `DeregisterNamespace`<sup>Required</sup> <a name="DeregisterNamespace" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DeregisterNamespace"></a>

```typescript
public readonly DeregisterNamespace: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterNamespace API call.

---

##### `DescribeAccountAttributes`<sup>Required</sup> <a name="DescribeAccountAttributes" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeAccountAttributes"></a>

```typescript
public readonly DescribeAccountAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountAttributes API call.

---

##### `DescribeAuthenticationProfiles`<sup>Required</sup> <a name="DescribeAuthenticationProfiles" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeAuthenticationProfiles"></a>

```typescript
public readonly DescribeAuthenticationProfiles: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuthenticationProfiles API call.

---

##### `DescribeClusterDbRevisions`<sup>Required</sup> <a name="DescribeClusterDbRevisions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterDbRevisions"></a>

```typescript
public readonly DescribeClusterDbRevisions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterDbRevisions API call.

---

##### `DescribeClusterParameterGroups`<sup>Required</sup> <a name="DescribeClusterParameterGroups" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterParameterGroups"></a>

```typescript
public readonly DescribeClusterParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterParameterGroups API call.

---

##### `DescribeClusterParameters`<sup>Required</sup> <a name="DescribeClusterParameters" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterParameters"></a>

```typescript
public readonly DescribeClusterParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterParameters API call.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusters API call.

---

##### `DescribeClusterSecurityGroups`<sup>Required</sup> <a name="DescribeClusterSecurityGroups" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSecurityGroups"></a>

```typescript
public readonly DescribeClusterSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterSecurityGroups API call.

---

##### `DescribeClusterSnapshots`<sup>Required</sup> <a name="DescribeClusterSnapshots" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSnapshots"></a>

```typescript
public readonly DescribeClusterSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterSnapshots API call.

---

##### `DescribeClusterSubnetGroups`<sup>Required</sup> <a name="DescribeClusterSubnetGroups" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterSubnetGroups"></a>

```typescript
public readonly DescribeClusterSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterSubnetGroups API call.

---

##### `DescribeClusterTracks`<sup>Required</sup> <a name="DescribeClusterTracks" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterTracks"></a>

```typescript
public readonly DescribeClusterTracks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterTracks API call.

---

##### `DescribeClusterVersions`<sup>Required</sup> <a name="DescribeClusterVersions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeClusterVersions"></a>

```typescript
public readonly DescribeClusterVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterVersions API call.

---

##### `DescribeCustomDomainAssociations`<sup>Required</sup> <a name="DescribeCustomDomainAssociations" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeCustomDomainAssociations"></a>

```typescript
public readonly DescribeCustomDomainAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomDomainAssociations API call.

---

##### `DescribeDataShares`<sup>Required</sup> <a name="DescribeDataShares" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataShares"></a>

```typescript
public readonly DescribeDataShares: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataShares API call.

---

##### `DescribeDataSharesForConsumer`<sup>Required</sup> <a name="DescribeDataSharesForConsumer" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataSharesForConsumer"></a>

```typescript
public readonly DescribeDataSharesForConsumer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSharesForConsumer API call.

---

##### `DescribeDataSharesForProducer`<sup>Required</sup> <a name="DescribeDataSharesForProducer" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDataSharesForProducer"></a>

```typescript
public readonly DescribeDataSharesForProducer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataSharesForProducer API call.

---

##### `DescribeDefaultClusterParameters`<sup>Required</sup> <a name="DescribeDefaultClusterParameters" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeDefaultClusterParameters"></a>

```typescript
public readonly DescribeDefaultClusterParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDefaultClusterParameters API call.

---

##### `DescribeEndpointAccess`<sup>Required</sup> <a name="DescribeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEndpointAccess"></a>

```typescript
public readonly DescribeEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpointAccess API call.

---

##### `DescribeEndpointAuthorization`<sup>Required</sup> <a name="DescribeEndpointAuthorization" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEndpointAuthorization"></a>

```typescript
public readonly DescribeEndpointAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpointAuthorization API call.

---

##### `DescribeEventCategories`<sup>Required</sup> <a name="DescribeEventCategories" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEventCategories"></a>

```typescript
public readonly DescribeEventCategories: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventCategories API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeEventSubscriptions`<sup>Required</sup> <a name="DescribeEventSubscriptions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeEventSubscriptions"></a>

```typescript
public readonly DescribeEventSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventSubscriptions API call.

---

##### `DescribeHsmClientCertificates`<sup>Required</sup> <a name="DescribeHsmClientCertificates" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeHsmClientCertificates"></a>

```typescript
public readonly DescribeHsmClientCertificates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHsmClientCertificates API call.

---

##### `DescribeHsmConfigurations`<sup>Required</sup> <a name="DescribeHsmConfigurations" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeHsmConfigurations"></a>

```typescript
public readonly DescribeHsmConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHsmConfigurations API call.

---

##### `DescribeInboundIntegrations`<sup>Required</sup> <a name="DescribeInboundIntegrations" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeInboundIntegrations"></a>

```typescript
public readonly DescribeInboundIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInboundIntegrations API call.

---

##### `DescribeIntegrations`<sup>Required</sup> <a name="DescribeIntegrations" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeIntegrations"></a>

```typescript
public readonly DescribeIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIntegrations API call.

---

##### `DescribeLoggingStatus`<sup>Required</sup> <a name="DescribeLoggingStatus" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeLoggingStatus"></a>

```typescript
public readonly DescribeLoggingStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoggingStatus API call.

---

##### `DescribeNodeConfigurationOptions`<sup>Required</sup> <a name="DescribeNodeConfigurationOptions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeNodeConfigurationOptions"></a>

```typescript
public readonly DescribeNodeConfigurationOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNodeConfigurationOptions API call.

---

##### `DescribeOrderableClusterOptions`<sup>Required</sup> <a name="DescribeOrderableClusterOptions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeOrderableClusterOptions"></a>

```typescript
public readonly DescribeOrderableClusterOptions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrderableClusterOptions API call.

---

##### `DescribePartners`<sup>Required</sup> <a name="DescribePartners" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribePartners"></a>

```typescript
public readonly DescribePartners: string[];
```

- *Type:* string[]

IAM actions required for the DescribePartners API call.

---

##### `DescribeQev2IdcApplications`<sup>Required</sup> <a name="DescribeQev2IdcApplications" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeQev2IdcApplications"></a>

```typescript
public readonly DescribeQev2IdcApplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQev2IdcApplications API call.

---

##### `DescribeRedshiftIdcApplications`<sup>Required</sup> <a name="DescribeRedshiftIdcApplications" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeRedshiftIdcApplications"></a>

```typescript
public readonly DescribeRedshiftIdcApplications: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRedshiftIdcApplications API call.

---

##### `DescribeReservedNodeExchangeStatus`<sup>Required</sup> <a name="DescribeReservedNodeExchangeStatus" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodeExchangeStatus"></a>

```typescript
public readonly DescribeReservedNodeExchangeStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedNodeExchangeStatus API call.

---

##### `DescribeReservedNodeOfferings`<sup>Required</sup> <a name="DescribeReservedNodeOfferings" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodeOfferings"></a>

```typescript
public readonly DescribeReservedNodeOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedNodeOfferings API call.

---

##### `DescribeReservedNodes`<sup>Required</sup> <a name="DescribeReservedNodes" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeReservedNodes"></a>

```typescript
public readonly DescribeReservedNodes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedNodes API call.

---

##### `DescribeResize`<sup>Required</sup> <a name="DescribeResize" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeResize"></a>

```typescript
public readonly DescribeResize: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResize API call.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScheduledActions API call.

---

##### `DescribeSnapshotCopyGrants`<sup>Required</sup> <a name="DescribeSnapshotCopyGrants" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeSnapshotCopyGrants"></a>

```typescript
public readonly DescribeSnapshotCopyGrants: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshotCopyGrants API call.

---

##### `DescribeSnapshotSchedules`<sup>Required</sup> <a name="DescribeSnapshotSchedules" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeSnapshotSchedules"></a>

```typescript
public readonly DescribeSnapshotSchedules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshotSchedules API call.

---

##### `DescribeStorage`<sup>Required</sup> <a name="DescribeStorage" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeStorage"></a>

```typescript
public readonly DescribeStorage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStorage API call.

---

##### `DescribeTableRestoreStatus`<sup>Required</sup> <a name="DescribeTableRestoreStatus" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeTableRestoreStatus"></a>

```typescript
public readonly DescribeTableRestoreStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTableRestoreStatus API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DescribeUsageLimits`<sup>Required</sup> <a name="DescribeUsageLimits" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DescribeUsageLimits"></a>

```typescript
public readonly DescribeUsageLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsageLimits API call.

---

##### `DisableLogging`<sup>Required</sup> <a name="DisableLogging" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DisableLogging"></a>

```typescript
public readonly DisableLogging: string[];
```

- *Type:* string[]

IAM actions required for the DisableLogging API call.

---

##### `DisableSnapshotCopy`<sup>Required</sup> <a name="DisableSnapshotCopy" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DisableSnapshotCopy"></a>

```typescript
public readonly DisableSnapshotCopy: string[];
```

- *Type:* string[]

IAM actions required for the DisableSnapshotCopy API call.

---

##### `DisassociateDataShareConsumer`<sup>Required</sup> <a name="DisassociateDataShareConsumer" id="@cdk_utils/iam.redshift.RedshiftOperations.property.DisassociateDataShareConsumer"></a>

```typescript
public readonly DisassociateDataShareConsumer: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDataShareConsumer API call.

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdk_utils/iam.redshift.RedshiftOperations.property.EnableLogging"></a>

```typescript
public readonly EnableLogging: string[];
```

- *Type:* string[]

IAM actions required for the EnableLogging API call.

---

##### `EnableSnapshotCopy`<sup>Required</sup> <a name="EnableSnapshotCopy" id="@cdk_utils/iam.redshift.RedshiftOperations.property.EnableSnapshotCopy"></a>

```typescript
public readonly EnableSnapshotCopy: string[];
```

- *Type:* string[]

IAM actions required for the EnableSnapshotCopy API call.

---

##### `FailoverPrimaryCompute`<sup>Required</sup> <a name="FailoverPrimaryCompute" id="@cdk_utils/iam.redshift.RedshiftOperations.property.FailoverPrimaryCompute"></a>

```typescript
public readonly FailoverPrimaryCompute: string[];
```

- *Type:* string[]

IAM actions required for the FailoverPrimaryCompute API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ModifyAquaConfiguration`<sup>Required</sup> <a name="ModifyAquaConfiguration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyAquaConfiguration"></a>

```typescript
public readonly ModifyAquaConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyAquaConfiguration API call.

---

##### `ModifyAuthenticationProfile`<sup>Required</sup> <a name="ModifyAuthenticationProfile" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyAuthenticationProfile"></a>

```typescript
public readonly ModifyAuthenticationProfile: string[];
```

- *Type:* string[]

IAM actions required for the ModifyAuthenticationProfile API call.

---

##### `ModifyCluster`<sup>Required</sup> <a name="ModifyCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyCluster"></a>

```typescript
public readonly ModifyCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCluster API call.

---

##### `ModifyClusterDbRevision`<sup>Required</sup> <a name="ModifyClusterDbRevision" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterDbRevision"></a>

```typescript
public readonly ModifyClusterDbRevision: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterDbRevision API call.

---

##### `ModifyClusterIamRoles`<sup>Required</sup> <a name="ModifyClusterIamRoles" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterIamRoles"></a>

```typescript
public readonly ModifyClusterIamRoles: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterIamRoles API call.

---

##### `ModifyClusterMaintenance`<sup>Required</sup> <a name="ModifyClusterMaintenance" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterMaintenance"></a>

```typescript
public readonly ModifyClusterMaintenance: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterMaintenance API call.

---

##### `ModifyClusterParameterGroup`<sup>Required</sup> <a name="ModifyClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterParameterGroup"></a>

```typescript
public readonly ModifyClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterParameterGroup API call.

---

##### `ModifyClusterSnapshot`<sup>Required</sup> <a name="ModifyClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSnapshot"></a>

```typescript
public readonly ModifyClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterSnapshot API call.

---

##### `ModifyClusterSnapshotSchedule`<sup>Required</sup> <a name="ModifyClusterSnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSnapshotSchedule"></a>

```typescript
public readonly ModifyClusterSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterSnapshotSchedule API call.

---

##### `ModifyClusterSubnetGroup`<sup>Required</sup> <a name="ModifyClusterSubnetGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyClusterSubnetGroup"></a>

```typescript
public readonly ModifyClusterSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyClusterSubnetGroup API call.

---

##### `ModifyCustomDomainAssociation`<sup>Required</sup> <a name="ModifyCustomDomainAssociation" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyCustomDomainAssociation"></a>

```typescript
public readonly ModifyCustomDomainAssociation: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCustomDomainAssociation API call.

---

##### `ModifyEndpointAccess`<sup>Required</sup> <a name="ModifyEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyEndpointAccess"></a>

```typescript
public readonly ModifyEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEndpointAccess API call.

---

##### `ModifyEventSubscription`<sup>Required</sup> <a name="ModifyEventSubscription" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyEventSubscription"></a>

```typescript
public readonly ModifyEventSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ModifyEventSubscription API call.

---

##### `ModifyIntegration`<sup>Required</sup> <a name="ModifyIntegration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyIntegration"></a>

```typescript
public readonly ModifyIntegration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyIntegration API call.

---

##### `ModifyLakehouseConfiguration`<sup>Required</sup> <a name="ModifyLakehouseConfiguration" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyLakehouseConfiguration"></a>

```typescript
public readonly ModifyLakehouseConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyLakehouseConfiguration API call.

---

##### `ModifyQev2IdcApplication`<sup>Required</sup> <a name="ModifyQev2IdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyQev2IdcApplication"></a>

```typescript
public readonly ModifyQev2IdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the ModifyQev2IdcApplication API call.

---

##### `ModifyRedshiftIdcApplication`<sup>Required</sup> <a name="ModifyRedshiftIdcApplication" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyRedshiftIdcApplication"></a>

```typescript
public readonly ModifyRedshiftIdcApplication: string[];
```

- *Type:* string[]

IAM actions required for the ModifyRedshiftIdcApplication API call.

---

##### `ModifyScheduledAction`<sup>Required</sup> <a name="ModifyScheduledAction" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyScheduledAction"></a>

```typescript
public readonly ModifyScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the ModifyScheduledAction API call.

---

##### `ModifySnapshotCopyRetentionPeriod`<sup>Required</sup> <a name="ModifySnapshotCopyRetentionPeriod" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifySnapshotCopyRetentionPeriod"></a>

```typescript
public readonly ModifySnapshotCopyRetentionPeriod: string[];
```

- *Type:* string[]

IAM actions required for the ModifySnapshotCopyRetentionPeriod API call.

---

##### `ModifySnapshotSchedule`<sup>Required</sup> <a name="ModifySnapshotSchedule" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifySnapshotSchedule"></a>

```typescript
public readonly ModifySnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the ModifySnapshotSchedule API call.

---

##### `ModifyUsageLimit`<sup>Required</sup> <a name="ModifyUsageLimit" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ModifyUsageLimit"></a>

```typescript
public readonly ModifyUsageLimit: string[];
```

- *Type:* string[]

IAM actions required for the ModifyUsageLimit API call.

---

##### `opGetClusterCredentials`<sup>Required</sup> <a name="opGetClusterCredentials" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetClusterCredentials"></a>

```typescript
public readonly opGetClusterCredentials: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterCredentials API call.

---

##### `opGetClusterCredentialsWithIAM`<sup>Required</sup> <a name="opGetClusterCredentialsWithIAM" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetClusterCredentialsWithIAM"></a>

```typescript
public readonly opGetClusterCredentialsWithIAM: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterCredentialsWithIAM API call.

---

##### `opGetIdentityCenterAuthToken`<sup>Required</sup> <a name="opGetIdentityCenterAuthToken" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetIdentityCenterAuthToken"></a>

```typescript
public readonly opGetIdentityCenterAuthToken: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityCenterAuthToken API call.

---

##### `opGetReservedNodeExchangeConfigurationOptions`<sup>Required</sup> <a name="opGetReservedNodeExchangeConfigurationOptions" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetReservedNodeExchangeConfigurationOptions"></a>

```typescript
public readonly opGetReservedNodeExchangeConfigurationOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetReservedNodeExchangeConfigurationOptions API call.

---

##### `opGetReservedNodeExchangeOfferings`<sup>Required</sup> <a name="opGetReservedNodeExchangeOfferings" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetReservedNodeExchangeOfferings"></a>

```typescript
public readonly opGetReservedNodeExchangeOfferings: string[];
```

- *Type:* string[]

IAM actions required for the GetReservedNodeExchangeOfferings API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PauseCluster`<sup>Required</sup> <a name="PauseCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.PauseCluster"></a>

```typescript
public readonly PauseCluster: string[];
```

- *Type:* string[]

IAM actions required for the PauseCluster API call.

---

##### `PurchaseReservedNodeOffering`<sup>Required</sup> <a name="PurchaseReservedNodeOffering" id="@cdk_utils/iam.redshift.RedshiftOperations.property.PurchaseReservedNodeOffering"></a>

```typescript
public readonly PurchaseReservedNodeOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedNodeOffering API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.redshift.RedshiftOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RebootCluster`<sup>Required</sup> <a name="RebootCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RebootCluster"></a>

```typescript
public readonly RebootCluster: string[];
```

- *Type:* string[]

IAM actions required for the RebootCluster API call.

---

##### `RegisterNamespace`<sup>Required</sup> <a name="RegisterNamespace" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RegisterNamespace"></a>

```typescript
public readonly RegisterNamespace: string[];
```

- *Type:* string[]

IAM actions required for the RegisterNamespace API call.

---

##### `RejectDataShare`<sup>Required</sup> <a name="RejectDataShare" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RejectDataShare"></a>

```typescript
public readonly RejectDataShare: string[];
```

- *Type:* string[]

IAM actions required for the RejectDataShare API call.

---

##### `ResetClusterParameterGroup`<sup>Required</sup> <a name="ResetClusterParameterGroup" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ResetClusterParameterGroup"></a>

```typescript
public readonly ResetClusterParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResetClusterParameterGroup API call.

---

##### `ResizeCluster`<sup>Required</sup> <a name="ResizeCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ResizeCluster"></a>

```typescript
public readonly ResizeCluster: string[];
```

- *Type:* string[]

IAM actions required for the ResizeCluster API call.

---

##### `RestoreFromClusterSnapshot`<sup>Required</sup> <a name="RestoreFromClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RestoreFromClusterSnapshot"></a>

```typescript
public readonly RestoreFromClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreFromClusterSnapshot API call.

---

##### `RestoreTableFromClusterSnapshot`<sup>Required</sup> <a name="RestoreTableFromClusterSnapshot" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RestoreTableFromClusterSnapshot"></a>

```typescript
public readonly RestoreTableFromClusterSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the RestoreTableFromClusterSnapshot API call.

---

##### `ResumeCluster`<sup>Required</sup> <a name="ResumeCluster" id="@cdk_utils/iam.redshift.RedshiftOperations.property.ResumeCluster"></a>

```typescript
public readonly ResumeCluster: string[];
```

- *Type:* string[]

IAM actions required for the ResumeCluster API call.

---

##### `RevokeClusterSecurityGroupIngress`<sup>Required</sup> <a name="RevokeClusterSecurityGroupIngress" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeClusterSecurityGroupIngress"></a>

```typescript
public readonly RevokeClusterSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the RevokeClusterSecurityGroupIngress API call.

---

##### `RevokeEndpointAccess`<sup>Required</sup> <a name="RevokeEndpointAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeEndpointAccess"></a>

```typescript
public readonly RevokeEndpointAccess: string[];
```

- *Type:* string[]

IAM actions required for the RevokeEndpointAccess API call.

---

##### `RevokeSnapshotAccess`<sup>Required</sup> <a name="RevokeSnapshotAccess" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RevokeSnapshotAccess"></a>

```typescript
public readonly RevokeSnapshotAccess: string[];
```

- *Type:* string[]

IAM actions required for the RevokeSnapshotAccess API call.

---

##### `RotateEncryptionKey`<sup>Required</sup> <a name="RotateEncryptionKey" id="@cdk_utils/iam.redshift.RedshiftOperations.property.RotateEncryptionKey"></a>

```typescript
public readonly RotateEncryptionKey: string[];
```

- *Type:* string[]

IAM actions required for the RotateEncryptionKey API call.

---

##### `UpdatePartnerStatus`<sup>Required</sup> <a name="UpdatePartnerStatus" id="@cdk_utils/iam.redshift.RedshiftOperations.property.UpdatePartnerStatus"></a>

```typescript
public readonly UpdatePartnerStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePartnerStatus API call.

---

### RedshiftResources <a name="RedshiftResources" id="@cdk_utils/iam.redshift.RedshiftResources"></a>

ARN builders, validators, and parsers for redshift resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.redshift.RedshiftResources.Initializer"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

new redshift.RedshiftResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.datashare">datashare</a></code> | Builds an ARN for the datashare resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.dbgroup">dbgroup</a></code> | Builds an ARN for the dbgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.dbname">dbname</a></code> | Builds an ARN for the dbname resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.dbuser">dbuser</a></code> | Builds an ARN for the dbuser resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.eventsubscription">eventsubscription</a></code> | Builds an ARN for the eventsubscription resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.hsmclientcertificate">hsmclientcertificate</a></code> | Builds an ARN for the hsmclientcertificate resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.hsmconfiguration">hsmconfiguration</a></code> | Builds an ARN for the hsmconfiguration resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.integration">integration</a></code> | Builds an ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidDatashareArn">isValidDatashareArn</a></code> | Validates whether a string is a valid ARN for the datashare resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidDbgroupArn">isValidDbgroupArn</a></code> | Validates whether a string is a valid ARN for the dbgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidDbnameArn">isValidDbnameArn</a></code> | Validates whether a string is a valid ARN for the dbname resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidDbuserArn">isValidDbuserArn</a></code> | Validates whether a string is a valid ARN for the dbuser resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidEventsubscriptionArn">isValidEventsubscriptionArn</a></code> | Validates whether a string is a valid ARN for the eventsubscription resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidHsmclientcertificateArn">isValidHsmclientcertificateArn</a></code> | Validates whether a string is a valid ARN for the hsmclientcertificate resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidHsmconfigurationArn">isValidHsmconfigurationArn</a></code> | Validates whether a string is a valid ARN for the hsmconfiguration resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidIntegrationArn">isValidIntegrationArn</a></code> | Validates whether a string is a valid ARN for the integration resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidNamespaceArn">isValidNamespaceArn</a></code> | Validates whether a string is a valid ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidParametergroupArn">isValidParametergroupArn</a></code> | Validates whether a string is a valid ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidQev2idcapplicationArn">isValidQev2idcapplicationArn</a></code> | Validates whether a string is a valid ARN for the qev2idcapplication resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidRedshiftidcapplicationArn">isValidRedshiftidcapplicationArn</a></code> | Validates whether a string is a valid ARN for the redshiftidcapplication resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupArn">isValidSecuritygroupArn</a></code> | Validates whether a string is a valid ARN for the securitygroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressCidrArn">isValidSecuritygroupingressCidrArn</a></code> | Validates whether a string is a valid ARN for the securitygroupingress-cidr resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressEc2securitygroupArn">isValidSecuritygroupingressEc2securitygroupArn</a></code> | Validates whether a string is a valid ARN for the securitygroupingress-ec2securitygroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotcopygrantArn">isValidSnapshotcopygrantArn</a></code> | Validates whether a string is a valid ARN for the snapshotcopygrant resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotscheduleArn">isValidSnapshotscheduleArn</a></code> | Validates whether a string is a valid ARN for the snapshotschedule resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidSubnetgroupArn">isValidSubnetgroupArn</a></code> | Validates whether a string is a valid ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.isValidUsagelimitArn">isValidUsagelimitArn</a></code> | Validates whether a string is a valid ARN for the usagelimit resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.namespace">namespace</a></code> | Builds an ARN for the namespace resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parametergroup">parametergroup</a></code> | Builds an ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseDatashareArn">parseDatashareArn</a></code> | Parses a datashare ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseDbgroupArn">parseDbgroupArn</a></code> | Parses a dbgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseDbnameArn">parseDbnameArn</a></code> | Parses a dbname ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseDbuserArn">parseDbuserArn</a></code> | Parses a dbuser ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseEventsubscriptionArn">parseEventsubscriptionArn</a></code> | Parses a eventsubscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseHsmclientcertificateArn">parseHsmclientcertificateArn</a></code> | Parses a hsmclientcertificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseHsmconfigurationArn">parseHsmconfigurationArn</a></code> | Parses a hsmconfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseIntegrationArn">parseIntegrationArn</a></code> | Parses a integration ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseNamespaceArn">parseNamespaceArn</a></code> | Parses a namespace ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseParametergroupArn">parseParametergroupArn</a></code> | Parses a parametergroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseQev2idcapplicationArn">parseQev2idcapplicationArn</a></code> | Parses a qev2idcapplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseRedshiftidcapplicationArn">parseRedshiftidcapplicationArn</a></code> | Parses a redshiftidcapplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupArn">parseSecuritygroupArn</a></code> | Parses a securitygroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressCidrArn">parseSecuritygroupingressCidrArn</a></code> | Parses a securitygroupingress-cidr ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressEc2securitygroupArn">parseSecuritygroupingressEc2securitygroupArn</a></code> | Parses a securitygroupingress-ec2securitygroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotcopygrantArn">parseSnapshotcopygrantArn</a></code> | Parses a snapshotcopygrant ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotscheduleArn">parseSnapshotscheduleArn</a></code> | Parses a snapshotschedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseSubnetgroupArn">parseSubnetgroupArn</a></code> | Parses a subnetgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.parseUsagelimitArn">parseUsagelimitArn</a></code> | Parses a usagelimit ARN into its components. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.qev2idcapplication">qev2idcapplication</a></code> | Builds an ARN for the qev2idcapplication resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.redshiftidcapplication">redshiftidcapplication</a></code> | Builds an ARN for the redshiftidcapplication resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.securitygroup">securitygroup</a></code> | Builds an ARN for the securitygroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressCidr">securitygroupingressCidr</a></code> | Builds an ARN for the securitygroupingress-cidr resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressEc2securitygroup">securitygroupingressEc2securitygroup</a></code> | Builds an ARN for the securitygroupingress-ec2securitygroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.snapshotcopygrant">snapshotcopygrant</a></code> | Builds an ARN for the snapshotcopygrant resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.snapshotschedule">snapshotschedule</a></code> | Builds an ARN for the snapshotschedule resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.subnetgroup">subnetgroup</a></code> | Builds an ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.redshift.RedshiftResources.usagelimit">usagelimit</a></code> | Builds an ARN for the usagelimit resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.redshift.RedshiftResources.cluster"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.cluster(props: RedshiftClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftClusterArnProps">RedshiftClusterArnProps</a>

---

##### `datashare` <a name="datashare" id="@cdk_utils/iam.redshift.RedshiftResources.datashare"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.datashare(props: RedshiftDatashareArnProps)
```

Builds an ARN for the datashare resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.datashare.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftDatashareArnProps">RedshiftDatashareArnProps</a>

---

##### `dbgroup` <a name="dbgroup" id="@cdk_utils/iam.redshift.RedshiftResources.dbgroup"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.dbgroup(props: RedshiftDbgroupArnProps)
```

Builds an ARN for the dbgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.dbgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftDbgroupArnProps">RedshiftDbgroupArnProps</a>

---

##### `dbname` <a name="dbname" id="@cdk_utils/iam.redshift.RedshiftResources.dbname"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.dbname(props: RedshiftDbnameArnProps)
```

Builds an ARN for the dbname resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.dbname.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftDbnameArnProps">RedshiftDbnameArnProps</a>

---

##### `dbuser` <a name="dbuser" id="@cdk_utils/iam.redshift.RedshiftResources.dbuser"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.dbuser(props: RedshiftDbuserArnProps)
```

Builds an ARN for the dbuser resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.dbuser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftDbuserArnProps">RedshiftDbuserArnProps</a>

---

##### `eventsubscription` <a name="eventsubscription" id="@cdk_utils/iam.redshift.RedshiftResources.eventsubscription"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.eventsubscription(props: RedshiftEventsubscriptionArnProps)
```

Builds an ARN for the eventsubscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.eventsubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftEventsubscriptionArnProps">RedshiftEventsubscriptionArnProps</a>

---

##### `hsmclientcertificate` <a name="hsmclientcertificate" id="@cdk_utils/iam.redshift.RedshiftResources.hsmclientcertificate"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.hsmclientcertificate(props: RedshiftHsmclientcertificateArnProps)
```

Builds an ARN for the hsmclientcertificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.hsmclientcertificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftHsmclientcertificateArnProps">RedshiftHsmclientcertificateArnProps</a>

---

##### `hsmconfiguration` <a name="hsmconfiguration" id="@cdk_utils/iam.redshift.RedshiftResources.hsmconfiguration"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.hsmconfiguration(props: RedshiftHsmconfigurationArnProps)
```

Builds an ARN for the hsmconfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.hsmconfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftHsmconfigurationArnProps">RedshiftHsmconfigurationArnProps</a>

---

##### `integration` <a name="integration" id="@cdk_utils/iam.redshift.RedshiftResources.integration"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.integration(props: RedshiftIntegrationArnProps)
```

Builds an ARN for the integration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.integration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftIntegrationArnProps">RedshiftIntegrationArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidClusterArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatashareArn` <a name="isValidDatashareArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDatashareArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidDatashareArn(arn: string)
```

Validates whether a string is a valid ARN for the datashare resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDatashareArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDbgroupArn` <a name="isValidDbgroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbgroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidDbgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the dbgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDbnameArn` <a name="isValidDbnameArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbnameArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidDbnameArn(arn: string)
```

Validates whether a string is a valid ARN for the dbname resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbnameArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDbuserArn` <a name="isValidDbuserArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbuserArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidDbuserArn(arn: string)
```

Validates whether a string is a valid ARN for the dbuser resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidDbuserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventsubscriptionArn` <a name="isValidEventsubscriptionArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidEventsubscriptionArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidEventsubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the eventsubscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidEventsubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHsmclientcertificateArn` <a name="isValidHsmclientcertificateArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidHsmclientcertificateArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidHsmclientcertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the hsmclientcertificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidHsmclientcertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHsmconfigurationArn` <a name="isValidHsmconfigurationArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidHsmconfigurationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidHsmconfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the hsmconfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidHsmconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationArn` <a name="isValidIntegrationArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidIntegrationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidIntegrationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNamespaceArn` <a name="isValidNamespaceArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidNamespaceArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidNamespaceArn(arn: string)
```

Validates whether a string is a valid ARN for the namespace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidParametergroupArn` <a name="isValidParametergroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidParametergroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidParametergroupArn(arn: string)
```

Validates whether a string is a valid ARN for the parametergroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQev2idcapplicationArn` <a name="isValidQev2idcapplicationArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidQev2idcapplicationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidQev2idcapplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the qev2idcapplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidQev2idcapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRedshiftidcapplicationArn` <a name="isValidRedshiftidcapplicationArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidRedshiftidcapplicationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidRedshiftidcapplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the redshiftidcapplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidRedshiftidcapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecuritygroupArn` <a name="isValidSecuritygroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSecuritygroupArn(arn: string)
```

Validates whether a string is a valid ARN for the securitygroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecuritygroupingressCidrArn` <a name="isValidSecuritygroupingressCidrArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressCidrArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSecuritygroupingressCidrArn(arn: string)
```

Validates whether a string is a valid ARN for the securitygroupingress-cidr resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressCidrArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecuritygroupingressEc2securitygroupArn` <a name="isValidSecuritygroupingressEc2securitygroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressEc2securitygroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSecuritygroupingressEc2securitygroupArn(arn: string)
```

Validates whether a string is a valid ARN for the securitygroupingress-ec2securitygroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSecuritygroupingressEc2securitygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotcopygrantArn` <a name="isValidSnapshotcopygrantArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotcopygrantArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSnapshotcopygrantArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshotcopygrant resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotcopygrantArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotscheduleArn` <a name="isValidSnapshotscheduleArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotscheduleArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSnapshotscheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshotschedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSnapshotscheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubnetgroupArn` <a name="isValidSubnetgroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSubnetgroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidSubnetgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the subnetgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsagelimitArn` <a name="isValidUsagelimitArn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidUsagelimitArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.isValidUsagelimitArn(arn: string)
```

Validates whether a string is a valid ARN for the usagelimit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.isValidUsagelimitArn.parameter.arn"></a>

- *Type:* string

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.redshift.RedshiftResources.namespace"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.namespace(props: RedshiftNamespaceArnProps)
```

Builds an ARN for the namespace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.namespace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftNamespaceArnProps">RedshiftNamespaceArnProps</a>

---

##### `parametergroup` <a name="parametergroup" id="@cdk_utils/iam.redshift.RedshiftResources.parametergroup"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parametergroup(props: RedshiftParametergroupArnProps)
```

Builds an ARN for the parametergroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.parametergroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftParametergroupArnProps">RedshiftParametergroupArnProps</a>

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseClusterArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatashareArn` <a name="parseDatashareArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDatashareArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseDatashareArn(arn: string)
```

Parses a datashare ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDatashareArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDbgroupArn` <a name="parseDbgroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbgroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseDbgroupArn(arn: string)
```

Parses a dbgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDbnameArn` <a name="parseDbnameArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbnameArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseDbnameArn(arn: string)
```

Parses a dbname ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbnameArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDbuserArn` <a name="parseDbuserArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbuserArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseDbuserArn(arn: string)
```

Parses a dbuser ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseDbuserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventsubscriptionArn` <a name="parseEventsubscriptionArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseEventsubscriptionArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseEventsubscriptionArn(arn: string)
```

Parses a eventsubscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseEventsubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHsmclientcertificateArn` <a name="parseHsmclientcertificateArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseHsmclientcertificateArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseHsmclientcertificateArn(arn: string)
```

Parses a hsmclientcertificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseHsmclientcertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHsmconfigurationArn` <a name="parseHsmconfigurationArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseHsmconfigurationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseHsmconfigurationArn(arn: string)
```

Parses a hsmconfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseHsmconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationArn` <a name="parseIntegrationArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseIntegrationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseIntegrationArn(arn: string)
```

Parses a integration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseIntegrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNamespaceArn` <a name="parseNamespaceArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseNamespaceArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseNamespaceArn(arn: string)
```

Parses a namespace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseNamespaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseParametergroupArn` <a name="parseParametergroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseParametergroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseParametergroupArn(arn: string)
```

Parses a parametergroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQev2idcapplicationArn` <a name="parseQev2idcapplicationArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseQev2idcapplicationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseQev2idcapplicationArn(arn: string)
```

Parses a qev2idcapplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseQev2idcapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRedshiftidcapplicationArn` <a name="parseRedshiftidcapplicationArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseRedshiftidcapplicationArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseRedshiftidcapplicationArn(arn: string)
```

Parses a redshiftidcapplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseRedshiftidcapplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecuritygroupArn` <a name="parseSecuritygroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSecuritygroupArn(arn: string)
```

Parses a securitygroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecuritygroupingressCidrArn` <a name="parseSecuritygroupingressCidrArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressCidrArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSecuritygroupingressCidrArn(arn: string)
```

Parses a securitygroupingress-cidr ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressCidrArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecuritygroupingressEc2securitygroupArn` <a name="parseSecuritygroupingressEc2securitygroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressEc2securitygroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSecuritygroupingressEc2securitygroupArn(arn: string)
```

Parses a securitygroupingress-ec2securitygroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSecuritygroupingressEc2securitygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotcopygrantArn` <a name="parseSnapshotcopygrantArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotcopygrantArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSnapshotcopygrantArn(arn: string)
```

Parses a snapshotcopygrant ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotcopygrantArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotscheduleArn` <a name="parseSnapshotscheduleArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotscheduleArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSnapshotscheduleArn(arn: string)
```

Parses a snapshotschedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSnapshotscheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubnetgroupArn` <a name="parseSubnetgroupArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSubnetgroupArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseSubnetgroupArn(arn: string)
```

Parses a subnetgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsagelimitArn` <a name="parseUsagelimitArn" id="@cdk_utils/iam.redshift.RedshiftResources.parseUsagelimitArn"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.parseUsagelimitArn(arn: string)
```

Parses a usagelimit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.redshift.RedshiftResources.parseUsagelimitArn.parameter.arn"></a>

- *Type:* string

---

##### `qev2idcapplication` <a name="qev2idcapplication" id="@cdk_utils/iam.redshift.RedshiftResources.qev2idcapplication"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.qev2idcapplication(props: RedshiftQev2idcapplicationArnProps)
```

Builds an ARN for the qev2idcapplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.qev2idcapplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftQev2idcapplicationArnProps">RedshiftQev2idcapplicationArnProps</a>

---

##### `redshiftidcapplication` <a name="redshiftidcapplication" id="@cdk_utils/iam.redshift.RedshiftResources.redshiftidcapplication"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.redshiftidcapplication(props: RedshiftRedshiftidcapplicationArnProps)
```

Builds an ARN for the redshiftidcapplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.redshiftidcapplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftRedshiftidcapplicationArnProps">RedshiftRedshiftidcapplicationArnProps</a>

---

##### `securitygroup` <a name="securitygroup" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroup"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.securitygroup(props: RedshiftSecuritygroupArnProps)
```

Builds an ARN for the securitygroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupArnProps">RedshiftSecuritygroupArnProps</a>

---

##### `securitygroupingressCidr` <a name="securitygroupingressCidr" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressCidr"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.securitygroupingressCidr(props: RedshiftSecuritygroupingressCidrArnProps)
```

Builds an ARN for the securitygroupingress-cidr resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressCidr.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressCidrArnProps">RedshiftSecuritygroupingressCidrArnProps</a>

---

##### `securitygroupingressEc2securitygroup` <a name="securitygroupingressEc2securitygroup" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressEc2securitygroup"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.securitygroupingressEc2securitygroup(props: RedshiftSecuritygroupingressEc2securitygroupArnProps)
```

Builds an ARN for the securitygroupingress-ec2securitygroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.securitygroupingressEc2securitygroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSecuritygroupingressEc2securitygroupArnProps">RedshiftSecuritygroupingressEc2securitygroupArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.redshift.RedshiftResources.snapshot"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.snapshot(props: RedshiftSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSnapshotArnProps">RedshiftSnapshotArnProps</a>

---

##### `snapshotcopygrant` <a name="snapshotcopygrant" id="@cdk_utils/iam.redshift.RedshiftResources.snapshotcopygrant"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.snapshotcopygrant(props: RedshiftSnapshotcopygrantArnProps)
```

Builds an ARN for the snapshotcopygrant resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.snapshotcopygrant.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSnapshotcopygrantArnProps">RedshiftSnapshotcopygrantArnProps</a>

---

##### `snapshotschedule` <a name="snapshotschedule" id="@cdk_utils/iam.redshift.RedshiftResources.snapshotschedule"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.snapshotschedule(props: RedshiftSnapshotscheduleArnProps)
```

Builds an ARN for the snapshotschedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.snapshotschedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSnapshotscheduleArnProps">RedshiftSnapshotscheduleArnProps</a>

---

##### `subnetgroup` <a name="subnetgroup" id="@cdk_utils/iam.redshift.RedshiftResources.subnetgroup"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.subnetgroup(props: RedshiftSubnetgroupArnProps)
```

Builds an ARN for the subnetgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.subnetgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftSubnetgroupArnProps">RedshiftSubnetgroupArnProps</a>

---

##### `usagelimit` <a name="usagelimit" id="@cdk_utils/iam.redshift.RedshiftResources.usagelimit"></a>

```typescript
import { redshift } from '@cdk_utils/iam'

redshift.RedshiftResources.usagelimit(props: RedshiftUsagelimitArnProps)
```

Builds an ARN for the usagelimit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.redshift.RedshiftResources.usagelimit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.redshift.RedshiftUsagelimitArnProps">RedshiftUsagelimitArnProps</a>

---




