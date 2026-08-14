# `memorydb` Submodule <a name="`memorydb` Submodule" id="@cdk_utils/iam.memorydb"></a>


## Structs <a name="Structs" id="Structs"></a>

### MemoryDBAclArnComponents <a name="MemoryDBAclArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents"></a>

Parsed components of a acl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBAclArnComponents: memorydb.MemoryDBAclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.aclName">aclName</a></code> | <code>string</code> | The AclName component. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.aclName"></a>

```typescript
public readonly aclName: string;
```

- *Type:* string

The AclName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBAclArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MemoryDBAclArnProps <a name="MemoryDBAclArnProps" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps"></a>

Properties for building a acl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBAclArnProps: memorydb.MemoryDBAclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.aclName">aclName</a></code> | <code>string</code> | The AclName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aclName`<sup>Required</sup> <a name="aclName" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.aclName"></a>

```typescript
public readonly aclName: string;
```

- *Type:* string

The AclName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBAclArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBClusterArnComponents <a name="MemoryDBClusterArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBClusterArnComponents: memorydb.MemoryDBClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MemoryDBClusterArnProps <a name="MemoryDBClusterArnProps" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBClusterArnProps: memorydb.MemoryDBClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBMultiregionclusterArnComponents <a name="MemoryDBMultiregionclusterArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents"></a>

Parsed components of a multiregioncluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBMultiregionclusterArnComponents: memorydb.MemoryDBMultiregionclusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### MemoryDBMultiregionclusterArnProps <a name="MemoryDBMultiregionclusterArnProps" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps"></a>

Properties for building a multiregioncluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBMultiregionclusterArnProps: memorydb.MemoryDBMultiregionclusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### MemoryDBMultiregionparametergroupArnComponents <a name="MemoryDBMultiregionparametergroupArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents"></a>

Parsed components of a multiregionparametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBMultiregionparametergroupArnComponents: memorydb.MemoryDBMultiregionparametergroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>string</code> | The MultiRegionParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `multiRegionParameterGroupName`<sup>Required</sup> <a name="multiRegionParameterGroupName" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.multiRegionParameterGroupName"></a>

```typescript
public readonly multiRegionParameterGroupName: string;
```

- *Type:* string

The MultiRegionParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### MemoryDBMultiregionparametergroupArnProps <a name="MemoryDBMultiregionparametergroupArnProps" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps"></a>

Properties for building a multiregionparametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBMultiregionparametergroupArnProps: memorydb.MemoryDBMultiregionparametergroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>string</code> | The MultiRegionParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `multiRegionParameterGroupName`<sup>Required</sup> <a name="multiRegionParameterGroupName" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.multiRegionParameterGroupName"></a>

```typescript
public readonly multiRegionParameterGroupName: string;
```

- *Type:* string

The MultiRegionParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### MemoryDBParametergroupArnComponents <a name="MemoryDBParametergroupArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents"></a>

Parsed components of a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBParametergroupArnComponents: memorydb.MemoryDBParametergroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MemoryDBParametergroupArnProps <a name="MemoryDBParametergroupArnProps" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps"></a>

Properties for building a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBParametergroupArnProps: memorydb.MemoryDBParametergroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.parameterGroupName">parameterGroupName</a></code> | <code>string</code> | The ParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.parameterGroupName"></a>

```typescript
public readonly parameterGroupName: string;
```

- *Type:* string

The ParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBReservednodeArnComponents <a name="MemoryDBReservednodeArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents"></a>

Parsed components of a reservednode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBReservednodeArnComponents: memorydb.MemoryDBReservednodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnComponents.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationID component.

---

### MemoryDBReservednodeArnProps <a name="MemoryDBReservednodeArnProps" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps"></a>

Properties for building a reservednode ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBReservednodeArnProps: memorydb.MemoryDBReservednodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationID component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBSnapshotArnComponents <a name="MemoryDBSnapshotArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBSnapshotArnComponents: memorydb.MemoryDBSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnComponents.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component.

---

### MemoryDBSnapshotArnProps <a name="MemoryDBSnapshotArnProps" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBSnapshotArnProps: memorydb.MemoryDBSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBSubnetgroupArnComponents <a name="MemoryDBSubnetgroupArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents"></a>

Parsed components of a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBSubnetgroupArnComponents: memorydb.MemoryDBSubnetgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnComponents.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component.

---

### MemoryDBSubnetgroupArnProps <a name="MemoryDBSubnetgroupArnProps" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps"></a>

Properties for building a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBSubnetgroupArnProps: memorydb.MemoryDBSubnetgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | The SubnetGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

The SubnetGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MemoryDBUserArnComponents <a name="MemoryDBUserArnComponents" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBUserArnComponents: memorydb.MemoryDBUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.userName">userName</a></code> | <code>string</code> | The UserName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.memorydb.MemoryDBUserArnComponents.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component.

---

### MemoryDBUserArnProps <a name="MemoryDBUserArnProps" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

const memoryDBUserArnProps: memorydb.MemoryDBUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.userName">userName</a></code> | <code>string</code> | The UserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The UserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.memorydb.MemoryDBUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MemoryDBActions <a name="MemoryDBActions" id="@cdk_utils/iam.memorydb.MemoryDBActions"></a>

IAM action constants for the memorydb service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.memorydb.MemoryDBActions.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

new memorydb.MemoryDBActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.BatchUpdateCluster">BatchUpdateCluster</a></code> | <code>string</code> | [Write] memorydb:BatchUpdateCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] memorydb:Connect. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CopySnapshot">CopySnapshot</a></code> | <code>string</code> | [Write] memorydb:CopySnapshot. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateAcl">CreateAcl</a></code> | <code>string</code> | [Write] memorydb:CreateAcl. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] memorydb:CreateCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateMultiRegionCluster">CreateMultiRegionCluster</a></code> | <code>string</code> | [Write] memorydb:CreateMultiRegionCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateParameterGroup">CreateParameterGroup</a></code> | <code>string</code> | [Write] memorydb:CreateParameterGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] memorydb:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateSubnetGroup">CreateSubnetGroup</a></code> | <code>string</code> | [Write] memorydb:CreateSubnetGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] memorydb:CreateUser. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteAcl">DeleteAcl</a></code> | <code>string</code> | [Write] memorydb:DeleteAcl. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] memorydb:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteMultiRegionCluster">DeleteMultiRegionCluster</a></code> | <code>string</code> | [Write] memorydb:DeleteMultiRegionCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteParameterGroup">DeleteParameterGroup</a></code> | <code>string</code> | [Write] memorydb:DeleteParameterGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string</code> | [Write] memorydb:DeleteSnapshot. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteSubnetGroup">DeleteSubnetGroup</a></code> | <code>string</code> | [Write] memorydb:DeleteSubnetGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] memorydb:DeleteUser. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeAcls">DescribeAcls</a></code> | <code>string</code> | [Read] memorydb:DescribeAcls. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeClusters">DescribeClusters</a></code> | <code>string</code> | [Read] memorydb:DescribeClusters. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeEngineVersions">DescribeEngineVersions</a></code> | <code>string</code> | [Read] memorydb:DescribeEngineVersions. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [Read] memorydb:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionClusters">DescribeMultiRegionClusters</a></code> | <code>string</code> | [Read] memorydb:DescribeMultiRegionClusters. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionParameterGroups">DescribeMultiRegionParameterGroups</a></code> | <code>string</code> | [Read] memorydb:DescribeMultiRegionParameterGroups. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionParameters">DescribeMultiRegionParameters</a></code> | <code>string</code> | [Read] memorydb:DescribeMultiRegionParameters. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeParameterGroups">DescribeParameterGroups</a></code> | <code>string</code> | [Read] memorydb:DescribeParameterGroups. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeParameters">DescribeParameters</a></code> | <code>string</code> | [Read] memorydb:DescribeParameters. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeReservedNodes">DescribeReservedNodes</a></code> | <code>string</code> | [Read] memorydb:DescribeReservedNodes. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeReservedNodesOfferings">DescribeReservedNodesOfferings</a></code> | <code>string</code> | [Read] memorydb:DescribeReservedNodesOfferings. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeServiceUpdates">DescribeServiceUpdates</a></code> | <code>string</code> | [Read] memorydb:DescribeServiceUpdates. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string</code> | [Read] memorydb:DescribeSnapshots. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeSubnetGroups">DescribeSubnetGroups</a></code> | <code>string</code> | [Read] memorydb:DescribeSubnetGroups. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeUsers">DescribeUsers</a></code> | <code>string</code> | [Read] memorydb:DescribeUsers. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.FailoverShard">FailoverShard</a></code> | <code>string</code> | [Write] memorydb:FailoverShard. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.ListAllowedMultiRegionClusterUpdates">ListAllowedMultiRegionClusterUpdates</a></code> | <code>string</code> | [Read] memorydb:ListAllowedMultiRegionClusterUpdates. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.ListAllowedNodeTypeUpdates">ListAllowedNodeTypeUpdates</a></code> | <code>string</code> | [Read] memorydb:ListAllowedNodeTypeUpdates. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] memorydb:ListTags. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.PauseMultiRegionClusterReplication">PauseMultiRegionClusterReplication</a></code> | <code>string</code> | [Write] memorydb:PauseMultiRegionClusterReplication. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.PurchaseReservedNodesOffering">PurchaseReservedNodesOffering</a></code> | <code>string</code> | [Write] memorydb:PurchaseReservedNodesOffering. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.ResetParameterGroup">ResetParameterGroup</a></code> | <code>string</code> | [Write] memorydb:ResetParameterGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] memorydb:TagResource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] memorydb:UntagResource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateAcl">UpdateAcl</a></code> | <code>string</code> | [Write] memorydb:UpdateAcl. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] memorydb:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateMultiRegionCluster">UpdateMultiRegionCluster</a></code> | <code>string</code> | [Write] memorydb:UpdateMultiRegionCluster. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateParameterGroup">UpdateParameterGroup</a></code> | <code>string</code> | [Write] memorydb:UpdateParameterGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateSubnetGroup">UpdateSubnetGroup</a></code> | <code>string</code> | [Write] memorydb:UpdateSubnetGroup. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] memorydb:UpdateUser. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchUpdateCluster`<sup>Required</sup> <a name="BatchUpdateCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.BatchUpdateCluster"></a>

```typescript
public readonly BatchUpdateCluster: string;
```

- *Type:* string

[Write] memorydb:BatchUpdateCluster.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] memorydb:Connect.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string;
```

- *Type:* string

[Write] memorydb:CopySnapshot.

---

##### `CreateAcl`<sup>Required</sup> <a name="CreateAcl" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateAcl"></a>

```typescript
public readonly CreateAcl: string;
```

- *Type:* string

[Write] memorydb:CreateAcl.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] memorydb:CreateCluster.

---

##### `CreateMultiRegionCluster`<sup>Required</sup> <a name="CreateMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateMultiRegionCluster"></a>

```typescript
public readonly CreateMultiRegionCluster: string;
```

- *Type:* string

[Write] memorydb:CreateMultiRegionCluster.

---

##### `CreateParameterGroup`<sup>Required</sup> <a name="CreateParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateParameterGroup"></a>

```typescript
public readonly CreateParameterGroup: string;
```

- *Type:* string

[Write] memorydb:CreateParameterGroup.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] memorydb:CreateSnapshot.

---

##### `CreateSubnetGroup`<sup>Required</sup> <a name="CreateSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateSubnetGroup"></a>

```typescript
public readonly CreateSubnetGroup: string;
```

- *Type:* string

[Write] memorydb:CreateSubnetGroup.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] memorydb:CreateUser.

---

##### `DeleteAcl`<sup>Required</sup> <a name="DeleteAcl" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteAcl"></a>

```typescript
public readonly DeleteAcl: string;
```

- *Type:* string

[Write] memorydb:DeleteAcl.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] memorydb:DeleteCluster.

---

##### `DeleteMultiRegionCluster`<sup>Required</sup> <a name="DeleteMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteMultiRegionCluster"></a>

```typescript
public readonly DeleteMultiRegionCluster: string;
```

- *Type:* string

[Write] memorydb:DeleteMultiRegionCluster.

---

##### `DeleteParameterGroup`<sup>Required</sup> <a name="DeleteParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteParameterGroup"></a>

```typescript
public readonly DeleteParameterGroup: string;
```

- *Type:* string

[Write] memorydb:DeleteParameterGroup.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string;
```

- *Type:* string

[Write] memorydb:DeleteSnapshot.

---

##### `DeleteSubnetGroup`<sup>Required</sup> <a name="DeleteSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteSubnetGroup"></a>

```typescript
public readonly DeleteSubnetGroup: string;
```

- *Type:* string

[Write] memorydb:DeleteSubnetGroup.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] memorydb:DeleteUser.

---

##### `DescribeAcls`<sup>Required</sup> <a name="DescribeAcls" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeAcls"></a>

```typescript
public readonly DescribeAcls: string;
```

- *Type:* string

[Read] memorydb:DescribeAcls.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string;
```

- *Type:* string

[Read] memorydb:DescribeClusters.

---

##### `DescribeEngineVersions`<sup>Required</sup> <a name="DescribeEngineVersions" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeEngineVersions"></a>

```typescript
public readonly DescribeEngineVersions: string;
```

- *Type:* string

[Read] memorydb:DescribeEngineVersions.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[Read] memorydb:DescribeEvents.

---

##### `DescribeMultiRegionClusters`<sup>Required</sup> <a name="DescribeMultiRegionClusters" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionClusters"></a>

```typescript
public readonly DescribeMultiRegionClusters: string;
```

- *Type:* string

[Read] memorydb:DescribeMultiRegionClusters.

---

##### `DescribeMultiRegionParameterGroups`<sup>Required</sup> <a name="DescribeMultiRegionParameterGroups" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionParameterGroups"></a>

```typescript
public readonly DescribeMultiRegionParameterGroups: string;
```

- *Type:* string

[Read] memorydb:DescribeMultiRegionParameterGroups.

---

##### `DescribeMultiRegionParameters`<sup>Required</sup> <a name="DescribeMultiRegionParameters" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeMultiRegionParameters"></a>

```typescript
public readonly DescribeMultiRegionParameters: string;
```

- *Type:* string

[Read] memorydb:DescribeMultiRegionParameters.

---

##### `DescribeParameterGroups`<sup>Required</sup> <a name="DescribeParameterGroups" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeParameterGroups"></a>

```typescript
public readonly DescribeParameterGroups: string;
```

- *Type:* string

[Read] memorydb:DescribeParameterGroups.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string;
```

- *Type:* string

[Read] memorydb:DescribeParameters.

---

##### `DescribeReservedNodes`<sup>Required</sup> <a name="DescribeReservedNodes" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeReservedNodes"></a>

```typescript
public readonly DescribeReservedNodes: string;
```

- *Type:* string

[Read] memorydb:DescribeReservedNodes.

---

##### `DescribeReservedNodesOfferings`<sup>Required</sup> <a name="DescribeReservedNodesOfferings" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeReservedNodesOfferings"></a>

```typescript
public readonly DescribeReservedNodesOfferings: string;
```

- *Type:* string

[Read] memorydb:DescribeReservedNodesOfferings.

---

##### `DescribeServiceUpdates`<sup>Required</sup> <a name="DescribeServiceUpdates" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeServiceUpdates"></a>

```typescript
public readonly DescribeServiceUpdates: string;
```

- *Type:* string

[Read] memorydb:DescribeServiceUpdates.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string;
```

- *Type:* string

[Read] memorydb:DescribeSnapshots.

---

##### `DescribeSubnetGroups`<sup>Required</sup> <a name="DescribeSubnetGroups" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeSubnetGroups"></a>

```typescript
public readonly DescribeSubnetGroups: string;
```

- *Type:* string

[Read] memorydb:DescribeSubnetGroups.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string;
```

- *Type:* string

[Read] memorydb:DescribeUsers.

---

##### `FailoverShard`<sup>Required</sup> <a name="FailoverShard" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.FailoverShard"></a>

```typescript
public readonly FailoverShard: string;
```

- *Type:* string

[Write] memorydb:FailoverShard.

---

##### `ListAllowedMultiRegionClusterUpdates`<sup>Required</sup> <a name="ListAllowedMultiRegionClusterUpdates" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.ListAllowedMultiRegionClusterUpdates"></a>

```typescript
public readonly ListAllowedMultiRegionClusterUpdates: string;
```

- *Type:* string

[Read] memorydb:ListAllowedMultiRegionClusterUpdates.

---

##### `ListAllowedNodeTypeUpdates`<sup>Required</sup> <a name="ListAllowedNodeTypeUpdates" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.ListAllowedNodeTypeUpdates"></a>

```typescript
public readonly ListAllowedNodeTypeUpdates: string;
```

- *Type:* string

[Read] memorydb:ListAllowedNodeTypeUpdates.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] memorydb:ListTags.

---

##### `PauseMultiRegionClusterReplication`<sup>Required</sup> <a name="PauseMultiRegionClusterReplication" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.PauseMultiRegionClusterReplication"></a>

```typescript
public readonly PauseMultiRegionClusterReplication: string;
```

- *Type:* string

[Write] memorydb:PauseMultiRegionClusterReplication.

---

##### `PurchaseReservedNodesOffering`<sup>Required</sup> <a name="PurchaseReservedNodesOffering" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.PurchaseReservedNodesOffering"></a>

```typescript
public readonly PurchaseReservedNodesOffering: string;
```

- *Type:* string

[Write] memorydb:PurchaseReservedNodesOffering.

---

##### `ResetParameterGroup`<sup>Required</sup> <a name="ResetParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.ResetParameterGroup"></a>

```typescript
public readonly ResetParameterGroup: string;
```

- *Type:* string

[Write] memorydb:ResetParameterGroup.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] memorydb:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] memorydb:UntagResource.

---

##### `UpdateAcl`<sup>Required</sup> <a name="UpdateAcl" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateAcl"></a>

```typescript
public readonly UpdateAcl: string;
```

- *Type:* string

[Write] memorydb:UpdateAcl.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] memorydb:UpdateCluster.

---

##### `UpdateMultiRegionCluster`<sup>Required</sup> <a name="UpdateMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateMultiRegionCluster"></a>

```typescript
public readonly UpdateMultiRegionCluster: string;
```

- *Type:* string

[Write] memorydb:UpdateMultiRegionCluster.

---

##### `UpdateParameterGroup`<sup>Required</sup> <a name="UpdateParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateParameterGroup"></a>

```typescript
public readonly UpdateParameterGroup: string;
```

- *Type:* string

[Write] memorydb:UpdateParameterGroup.

---

##### `UpdateSubnetGroup`<sup>Required</sup> <a name="UpdateSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateSubnetGroup"></a>

```typescript
public readonly UpdateSubnetGroup: string;
```

- *Type:* string

[Write] memorydb:UpdateSubnetGroup.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.memorydb.MemoryDBActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] memorydb:UpdateUser.

---

### MemoryDBConditions <a name="MemoryDBConditions" id="@cdk_utils/iam.memorydb.MemoryDBConditions"></a>

Condition key constants and builders for memorydb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.memorydb.MemoryDBConditions.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

new memorydb.MemoryDBConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.tlsEnabled">tlsEnabled</a></code> | Generates a condition block for `memorydb:TLSEnabled`. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.userAuthenticationMode">userAuthenticationMode</a></code> | Generates a condition block for `memorydb:UserAuthenticationMode`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.memorydb.MemoryDBConditions.requestTag"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.memorydb.MemoryDBConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.memorydb.MemoryDBConditions.resourceTag"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.memorydb.MemoryDBConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.tagKeys"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.memorydb.MemoryDBConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tlsEnabled` <a name="tlsEnabled" id="@cdk_utils/iam.memorydb.MemoryDBConditions.tlsEnabled"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBConditions.tlsEnabled(value: boolean)
```

Generates a condition block for `memorydb:TLSEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.memorydb.MemoryDBConditions.tlsEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `userAuthenticationMode` <a name="userAuthenticationMode" id="@cdk_utils/iam.memorydb.MemoryDBConditions.userAuthenticationMode"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBConditions.userAuthenticationMode(value: string)
```

Generates a condition block for `memorydb:UserAuthenticationMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.memorydb.MemoryDBConditions.userAuthenticationMode.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.BatchUpdateClusterConditionKeys">BatchUpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdateCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.ConnectConditionKeys">ConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Connect action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CopySnapshotConditionKeys">CopySnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopySnapshot action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateAclConditionKeys">CreateAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAcl action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateMultiRegionClusterConditionKeys">CreateMultiRegionClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMultiRegionCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateParameterGroupConditionKeys">CreateParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateParameterGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateSnapshotConditionKeys">CreateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshot action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateSubnetGroupConditionKeys">CreateSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteAclConditionKeys">DeleteAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAcl action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteClusterConditionKeys">DeleteClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteMultiRegionClusterConditionKeys">DeleteMultiRegionClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteMultiRegionCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteParameterGroupConditionKeys">DeleteParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteParameterGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteSnapshotConditionKeys">DeleteSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSnapshot action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteSubnetGroupConditionKeys">DeleteSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteUserConditionKeys">DeleteUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUser action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeAclsConditionKeys">DescribeAclsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAcls action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeClustersConditionKeys">DescribeClustersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeClusters action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeMultiRegionClustersConditionKeys">DescribeMultiRegionClustersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeMultiRegionClusters action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeParameterGroupsConditionKeys">DescribeParameterGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeParameterGroups action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeParametersConditionKeys">DescribeParametersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeParameters action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeReservedNodesConditionKeys">DescribeReservedNodesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReservedNodes action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeSnapshotsConditionKeys">DescribeSnapshotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSnapshots action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeSubnetGroupsConditionKeys">DescribeSubnetGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSubnetGroups action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeUsersConditionKeys">DescribeUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUsers action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.FailoverShardConditionKeys">FailoverShardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the FailoverShard action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListAllowedMultiRegionClusterUpdatesConditionKeys">ListAllowedMultiRegionClusterUpdatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAllowedMultiRegionClusterUpdates action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListAllowedNodeTypeUpdatesConditionKeys">ListAllowedNodeTypeUpdatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAllowedNodeTypeUpdates action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListTagsConditionKeys">ListTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTags action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.PauseMultiRegionClusterReplicationConditionKeys">PauseMultiRegionClusterReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PauseMultiRegionClusterReplication action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.PurchaseReservedNodesOfferingConditionKeys">PurchaseReservedNodesOfferingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PurchaseReservedNodesOffering action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.ResetParameterGroupConditionKeys">ResetParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResetParameterGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.TLS_ENABLED">TLS_ENABLED</a></code> | <code>string</code> | Condition key: memorydb:TLSEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateAclConditionKeys">UpdateAclConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAcl action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateClusterConditionKeys">UpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateMultiRegionClusterConditionKeys">UpdateMultiRegionClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMultiRegionCluster action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateParameterGroupConditionKeys">UpdateParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateParameterGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateSubnetGroupConditionKeys">UpdateSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateUserConditionKeys">UpdateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUser action. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBConditions.property.USER_AUTHENTICATION_MODE">USER_AUTHENTICATION_MODE</a></code> | <code>string</code> | Condition key: memorydb:UserAuthenticationMode (String). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchUpdateClusterConditionKeys`<sup>Required</sup> <a name="BatchUpdateClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.BatchUpdateClusterConditionKeys"></a>

```typescript
public readonly BatchUpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdateCluster action.

---

##### `ConnectConditionKeys`<sup>Required</sup> <a name="ConnectConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.ConnectConditionKeys"></a>

```typescript
public readonly ConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Connect action.

---

##### `CopySnapshotConditionKeys`<sup>Required</sup> <a name="CopySnapshotConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CopySnapshotConditionKeys"></a>

```typescript
public readonly CopySnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopySnapshot action.

---

##### `CreateAclConditionKeys`<sup>Required</sup> <a name="CreateAclConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateAclConditionKeys"></a>

```typescript
public readonly CreateAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAcl action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateMultiRegionClusterConditionKeys`<sup>Required</sup> <a name="CreateMultiRegionClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateMultiRegionClusterConditionKeys"></a>

```typescript
public readonly CreateMultiRegionClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMultiRegionCluster action.

---

##### `CreateParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateParameterGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateParameterGroupConditionKeys"></a>

```typescript
public readonly CreateParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateParameterGroup action.

---

##### `CreateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateSnapshotConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateSnapshotConditionKeys"></a>

```typescript
public readonly CreateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshot action.

---

##### `CreateSubnetGroupConditionKeys`<sup>Required</sup> <a name="CreateSubnetGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateSubnetGroupConditionKeys"></a>

```typescript
public readonly CreateSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSubnetGroup action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `DeleteAclConditionKeys`<sup>Required</sup> <a name="DeleteAclConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteAclConditionKeys"></a>

```typescript
public readonly DeleteAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAcl action.

---

##### `DeleteClusterConditionKeys`<sup>Required</sup> <a name="DeleteClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteClusterConditionKeys"></a>

```typescript
public readonly DeleteClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCluster action.

---

##### `DeleteMultiRegionClusterConditionKeys`<sup>Required</sup> <a name="DeleteMultiRegionClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteMultiRegionClusterConditionKeys"></a>

```typescript
public readonly DeleteMultiRegionClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteMultiRegionCluster action.

---

##### `DeleteParameterGroupConditionKeys`<sup>Required</sup> <a name="DeleteParameterGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteParameterGroupConditionKeys"></a>

```typescript
public readonly DeleteParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteParameterGroup action.

---

##### `DeleteSnapshotConditionKeys`<sup>Required</sup> <a name="DeleteSnapshotConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteSnapshotConditionKeys"></a>

```typescript
public readonly DeleteSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSnapshot action.

---

##### `DeleteSubnetGroupConditionKeys`<sup>Required</sup> <a name="DeleteSubnetGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteSubnetGroupConditionKeys"></a>

```typescript
public readonly DeleteSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSubnetGroup action.

---

##### `DeleteUserConditionKeys`<sup>Required</sup> <a name="DeleteUserConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DeleteUserConditionKeys"></a>

```typescript
public readonly DeleteUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUser action.

---

##### `DescribeAclsConditionKeys`<sup>Required</sup> <a name="DescribeAclsConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeAclsConditionKeys"></a>

```typescript
public readonly DescribeAclsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAcls action.

---

##### `DescribeClustersConditionKeys`<sup>Required</sup> <a name="DescribeClustersConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeClustersConditionKeys"></a>

```typescript
public readonly DescribeClustersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeClusters action.

---

##### `DescribeMultiRegionClustersConditionKeys`<sup>Required</sup> <a name="DescribeMultiRegionClustersConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeMultiRegionClustersConditionKeys"></a>

```typescript
public readonly DescribeMultiRegionClustersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeMultiRegionClusters action.

---

##### `DescribeParameterGroupsConditionKeys`<sup>Required</sup> <a name="DescribeParameterGroupsConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeParameterGroupsConditionKeys"></a>

```typescript
public readonly DescribeParameterGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeParameterGroups action.

---

##### `DescribeParametersConditionKeys`<sup>Required</sup> <a name="DescribeParametersConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeParametersConditionKeys"></a>

```typescript
public readonly DescribeParametersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeParameters action.

---

##### `DescribeReservedNodesConditionKeys`<sup>Required</sup> <a name="DescribeReservedNodesConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeReservedNodesConditionKeys"></a>

```typescript
public readonly DescribeReservedNodesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReservedNodes action.

---

##### `DescribeSnapshotsConditionKeys`<sup>Required</sup> <a name="DescribeSnapshotsConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeSnapshotsConditionKeys"></a>

```typescript
public readonly DescribeSnapshotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSnapshots action.

---

##### `DescribeSubnetGroupsConditionKeys`<sup>Required</sup> <a name="DescribeSubnetGroupsConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeSubnetGroupsConditionKeys"></a>

```typescript
public readonly DescribeSubnetGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSubnetGroups action.

---

##### `DescribeUsersConditionKeys`<sup>Required</sup> <a name="DescribeUsersConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.DescribeUsersConditionKeys"></a>

```typescript
public readonly DescribeUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUsers action.

---

##### `FailoverShardConditionKeys`<sup>Required</sup> <a name="FailoverShardConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.FailoverShardConditionKeys"></a>

```typescript
public readonly FailoverShardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the FailoverShard action.

---

##### `ListAllowedMultiRegionClusterUpdatesConditionKeys`<sup>Required</sup> <a name="ListAllowedMultiRegionClusterUpdatesConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListAllowedMultiRegionClusterUpdatesConditionKeys"></a>

```typescript
public readonly ListAllowedMultiRegionClusterUpdatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAllowedMultiRegionClusterUpdates action.

---

##### `ListAllowedNodeTypeUpdatesConditionKeys`<sup>Required</sup> <a name="ListAllowedNodeTypeUpdatesConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListAllowedNodeTypeUpdatesConditionKeys"></a>

```typescript
public readonly ListAllowedNodeTypeUpdatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAllowedNodeTypeUpdates action.

---

##### `ListTagsConditionKeys`<sup>Required</sup> <a name="ListTagsConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.ListTagsConditionKeys"></a>

```typescript
public readonly ListTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTags action.

---

##### `PauseMultiRegionClusterReplicationConditionKeys`<sup>Required</sup> <a name="PauseMultiRegionClusterReplicationConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.PauseMultiRegionClusterReplicationConditionKeys"></a>

```typescript
public readonly PauseMultiRegionClusterReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PauseMultiRegionClusterReplication action.

---

##### `PurchaseReservedNodesOfferingConditionKeys`<sup>Required</sup> <a name="PurchaseReservedNodesOfferingConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.PurchaseReservedNodesOfferingConditionKeys"></a>

```typescript
public readonly PurchaseReservedNodesOfferingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PurchaseReservedNodesOffering action.

---

##### `ResetParameterGroupConditionKeys`<sup>Required</sup> <a name="ResetParameterGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.ResetParameterGroupConditionKeys"></a>

```typescript
public readonly ResetParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResetParameterGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TLS_ENABLED`<sup>Required</sup> <a name="TLS_ENABLED" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.TLS_ENABLED"></a>

```typescript
public readonly TLS_ENABLED: string;
```

- *Type:* string

Condition key: memorydb:TLSEnabled (Bool).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAclConditionKeys`<sup>Required</sup> <a name="UpdateAclConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateAclConditionKeys"></a>

```typescript
public readonly UpdateAclConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAcl action.

---

##### `UpdateClusterConditionKeys`<sup>Required</sup> <a name="UpdateClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateClusterConditionKeys"></a>

```typescript
public readonly UpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCluster action.

---

##### `UpdateMultiRegionClusterConditionKeys`<sup>Required</sup> <a name="UpdateMultiRegionClusterConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateMultiRegionClusterConditionKeys"></a>

```typescript
public readonly UpdateMultiRegionClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMultiRegionCluster action.

---

##### `UpdateParameterGroupConditionKeys`<sup>Required</sup> <a name="UpdateParameterGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateParameterGroupConditionKeys"></a>

```typescript
public readonly UpdateParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateParameterGroup action.

---

##### `UpdateSubnetGroupConditionKeys`<sup>Required</sup> <a name="UpdateSubnetGroupConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateSubnetGroupConditionKeys"></a>

```typescript
public readonly UpdateSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSubnetGroup action.

---

##### `UpdateUserConditionKeys`<sup>Required</sup> <a name="UpdateUserConditionKeys" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.UpdateUserConditionKeys"></a>

```typescript
public readonly UpdateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUser action.

---

##### `USER_AUTHENTICATION_MODE`<sup>Required</sup> <a name="USER_AUTHENTICATION_MODE" id="@cdk_utils/iam.memorydb.MemoryDBConditions.property.USER_AUTHENTICATION_MODE"></a>

```typescript
public readonly USER_AUTHENTICATION_MODE: string;
```

- *Type:* string

Condition key: memorydb:UserAuthenticationMode (String).

---

### MemoryDBOperations <a name="MemoryDBOperations" id="@cdk_utils/iam.memorydb.MemoryDBOperations"></a>

API operation to required IAM actions mapping for memorydb.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.memorydb.MemoryDBOperations.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

new memorydb.MemoryDBOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.BatchUpdateCluster">BatchUpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CopySnapshot">CopySnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopySnapshot API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateACL">CreateACL</a></code> | <code>string[]</code> | IAM actions required for the CreateACL API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateMultiRegionCluster">CreateMultiRegionCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateMultiRegionCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateParameterGroup">CreateParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateSubnetGroup">CreateSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteACL">DeleteACL</a></code> | <code>string[]</code> | IAM actions required for the DeleteACL API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteMultiRegionCluster">DeleteMultiRegionCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteMultiRegionCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteParameterGroup">DeleteParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteSubnetGroup">DeleteSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeACLs">DescribeACLs</a></code> | <code>string[]</code> | IAM actions required for the DescribeACLs API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeClusters">DescribeClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusters API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeEngineVersions">DescribeEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionClusters">DescribeMultiRegionClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeMultiRegionClusters API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionParameterGroups">DescribeMultiRegionParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeMultiRegionParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionParameters">DescribeMultiRegionParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeMultiRegionParameters API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeParameterGroups">DescribeParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeParameters">DescribeParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeParameters API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeReservedNodes">DescribeReservedNodes</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedNodes API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeReservedNodesOfferings">DescribeReservedNodesOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedNodesOfferings API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeServiceUpdates">DescribeServiceUpdates</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceUpdates API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshots API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeSubnetGroups">DescribeSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeUsers">DescribeUsers</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsers API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.FailoverShard">FailoverShard</a></code> | <code>string[]</code> | IAM actions required for the FailoverShard API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListAllowedMultiRegionClusterUpdates">ListAllowedMultiRegionClusterUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListAllowedMultiRegionClusterUpdates API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListAllowedNodeTypeUpdates">ListAllowedNodeTypeUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListAllowedNodeTypeUpdates API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListTags">ListTags</a></code> | <code>string[]</code> | IAM actions required for the ListTags API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.PurchaseReservedNodesOffering">PurchaseReservedNodesOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedNodesOffering API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.ResetParameterGroup">ResetParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ResetParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateACL">UpdateACL</a></code> | <code>string[]</code> | IAM actions required for the UpdateACL API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateMultiRegionCluster">UpdateMultiRegionCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateMultiRegionCluster API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateParameterGroup">UpdateParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateSubnetGroup">UpdateSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `BatchUpdateCluster`<sup>Required</sup> <a name="BatchUpdateCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.BatchUpdateCluster"></a>

```typescript
public readonly BatchUpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateCluster API call.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopySnapshot API call.

---

##### `CreateACL`<sup>Required</sup> <a name="CreateACL" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateACL"></a>

```typescript
public readonly CreateACL: string[];
```

- *Type:* string[]

IAM actions required for the CreateACL API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateMultiRegionCluster`<sup>Required</sup> <a name="CreateMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateMultiRegionCluster"></a>

```typescript
public readonly CreateMultiRegionCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateMultiRegionCluster API call.

---

##### `CreateParameterGroup`<sup>Required</sup> <a name="CreateParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateParameterGroup"></a>

```typescript
public readonly CreateParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateParameterGroup API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateSubnetGroup`<sup>Required</sup> <a name="CreateSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateSubnetGroup"></a>

```typescript
public readonly CreateSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubnetGroup API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteACL`<sup>Required</sup> <a name="DeleteACL" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteACL"></a>

```typescript
public readonly DeleteACL: string[];
```

- *Type:* string[]

IAM actions required for the DeleteACL API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteMultiRegionCluster`<sup>Required</sup> <a name="DeleteMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteMultiRegionCluster"></a>

```typescript
public readonly DeleteMultiRegionCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMultiRegionCluster API call.

---

##### `DeleteParameterGroup`<sup>Required</sup> <a name="DeleteParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteParameterGroup"></a>

```typescript
public readonly DeleteParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteParameterGroup API call.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshot API call.

---

##### `DeleteSubnetGroup`<sup>Required</sup> <a name="DeleteSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteSubnetGroup"></a>

```typescript
public readonly DeleteSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubnetGroup API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeACLs`<sup>Required</sup> <a name="DescribeACLs" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeACLs"></a>

```typescript
public readonly DescribeACLs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeACLs API call.

---

##### `DescribeClusters`<sup>Required</sup> <a name="DescribeClusters" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeClusters"></a>

```typescript
public readonly DescribeClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusters API call.

---

##### `DescribeEngineVersions`<sup>Required</sup> <a name="DescribeEngineVersions" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeEngineVersions"></a>

```typescript
public readonly DescribeEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngineVersions API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeMultiRegionClusters`<sup>Required</sup> <a name="DescribeMultiRegionClusters" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionClusters"></a>

```typescript
public readonly DescribeMultiRegionClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMultiRegionClusters API call.

---

##### `DescribeMultiRegionParameterGroups`<sup>Required</sup> <a name="DescribeMultiRegionParameterGroups" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionParameterGroups"></a>

```typescript
public readonly DescribeMultiRegionParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMultiRegionParameterGroups API call.

---

##### `DescribeMultiRegionParameters`<sup>Required</sup> <a name="DescribeMultiRegionParameters" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeMultiRegionParameters"></a>

```typescript
public readonly DescribeMultiRegionParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMultiRegionParameters API call.

---

##### `DescribeParameterGroups`<sup>Required</sup> <a name="DescribeParameterGroups" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeParameterGroups"></a>

```typescript
public readonly DescribeParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeParameterGroups API call.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeParameters API call.

---

##### `DescribeReservedNodes`<sup>Required</sup> <a name="DescribeReservedNodes" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeReservedNodes"></a>

```typescript
public readonly DescribeReservedNodes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedNodes API call.

---

##### `DescribeReservedNodesOfferings`<sup>Required</sup> <a name="DescribeReservedNodesOfferings" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeReservedNodesOfferings"></a>

```typescript
public readonly DescribeReservedNodesOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedNodesOfferings API call.

---

##### `DescribeServiceUpdates`<sup>Required</sup> <a name="DescribeServiceUpdates" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeServiceUpdates"></a>

```typescript
public readonly DescribeServiceUpdates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceUpdates API call.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshots API call.

---

##### `DescribeSubnetGroups`<sup>Required</sup> <a name="DescribeSubnetGroups" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeSubnetGroups"></a>

```typescript
public readonly DescribeSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSubnetGroups API call.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsers API call.

---

##### `FailoverShard`<sup>Required</sup> <a name="FailoverShard" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.FailoverShard"></a>

```typescript
public readonly FailoverShard: string[];
```

- *Type:* string[]

IAM actions required for the FailoverShard API call.

---

##### `ListAllowedMultiRegionClusterUpdates`<sup>Required</sup> <a name="ListAllowedMultiRegionClusterUpdates" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListAllowedMultiRegionClusterUpdates"></a>

```typescript
public readonly ListAllowedMultiRegionClusterUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListAllowedMultiRegionClusterUpdates API call.

---

##### `ListAllowedNodeTypeUpdates`<sup>Required</sup> <a name="ListAllowedNodeTypeUpdates" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListAllowedNodeTypeUpdates"></a>

```typescript
public readonly ListAllowedNodeTypeUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListAllowedNodeTypeUpdates API call.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.ListTags"></a>

```typescript
public readonly ListTags: string[];
```

- *Type:* string[]

IAM actions required for the ListTags API call.

---

##### `PurchaseReservedNodesOffering`<sup>Required</sup> <a name="PurchaseReservedNodesOffering" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.PurchaseReservedNodesOffering"></a>

```typescript
public readonly PurchaseReservedNodesOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedNodesOffering API call.

---

##### `ResetParameterGroup`<sup>Required</sup> <a name="ResetParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.ResetParameterGroup"></a>

```typescript
public readonly ResetParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResetParameterGroup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateACL`<sup>Required</sup> <a name="UpdateACL" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateACL"></a>

```typescript
public readonly UpdateACL: string[];
```

- *Type:* string[]

IAM actions required for the UpdateACL API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateMultiRegionCluster`<sup>Required</sup> <a name="UpdateMultiRegionCluster" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateMultiRegionCluster"></a>

```typescript
public readonly UpdateMultiRegionCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMultiRegionCluster API call.

---

##### `UpdateParameterGroup`<sup>Required</sup> <a name="UpdateParameterGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateParameterGroup"></a>

```typescript
public readonly UpdateParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateParameterGroup API call.

---

##### `UpdateSubnetGroup`<sup>Required</sup> <a name="UpdateSubnetGroup" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateSubnetGroup"></a>

```typescript
public readonly UpdateSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubnetGroup API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.memorydb.MemoryDBOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### MemoryDBResources <a name="MemoryDBResources" id="@cdk_utils/iam.memorydb.MemoryDBResources"></a>

ARN builders, validators, and parsers for memorydb resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.memorydb.MemoryDBResources.Initializer"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

new memorydb.MemoryDBResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.acl">acl</a></code> | Builds an ARN for the acl resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidAclArn">isValidAclArn</a></code> | Validates whether a string is a valid ARN for the acl resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionclusterArn">isValidMultiregionclusterArn</a></code> | Validates whether a string is a valid ARN for the multiregioncluster resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionparametergroupArn">isValidMultiregionparametergroupArn</a></code> | Validates whether a string is a valid ARN for the multiregionparametergroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidParametergroupArn">isValidParametergroupArn</a></code> | Validates whether a string is a valid ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidReservednodeArn">isValidReservednodeArn</a></code> | Validates whether a string is a valid ARN for the reservednode resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidSubnetgroupArn">isValidSubnetgroupArn</a></code> | Validates whether a string is a valid ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.multiregioncluster">multiregioncluster</a></code> | Builds an ARN for the multiregioncluster resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.multiregionparametergroup">multiregionparametergroup</a></code> | Builds an ARN for the multiregionparametergroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parametergroup">parametergroup</a></code> | Builds an ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseAclArn">parseAclArn</a></code> | Parses a acl ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionclusterArn">parseMultiregionclusterArn</a></code> | Parses a multiregioncluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionparametergroupArn">parseMultiregionparametergroupArn</a></code> | Parses a multiregionparametergroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseParametergroupArn">parseParametergroupArn</a></code> | Parses a parametergroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseReservednodeArn">parseReservednodeArn</a></code> | Parses a reservednode ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseSubnetgroupArn">parseSubnetgroupArn</a></code> | Parses a subnetgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.reservednode">reservednode</a></code> | Builds an ARN for the reservednode resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.subnetgroup">subnetgroup</a></code> | Builds an ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.memorydb.MemoryDBResources.user">user</a></code> | Builds an ARN for the user resource. |

---

##### `acl` <a name="acl" id="@cdk_utils/iam.memorydb.MemoryDBResources.acl"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.acl(props: MemoryDBAclArnProps)
```

Builds an ARN for the acl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.acl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBAclArnProps">MemoryDBAclArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.memorydb.MemoryDBResources.cluster"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.cluster(props: MemoryDBClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBClusterArnProps">MemoryDBClusterArnProps</a>

---

##### `isValidAclArn` <a name="isValidAclArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidAclArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidAclArn(arn: string)
```

Validates whether a string is a valid ARN for the acl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidAclArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidClusterArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMultiregionclusterArn` <a name="isValidMultiregionclusterArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionclusterArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidMultiregionclusterArn(arn: string)
```

Validates whether a string is a valid ARN for the multiregioncluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionclusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMultiregionparametergroupArn` <a name="isValidMultiregionparametergroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionparametergroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidMultiregionparametergroupArn(arn: string)
```

Validates whether a string is a valid ARN for the multiregionparametergroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidMultiregionparametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidParametergroupArn` <a name="isValidParametergroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidParametergroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidParametergroupArn(arn: string)
```

Validates whether a string is a valid ARN for the parametergroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReservednodeArn` <a name="isValidReservednodeArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidReservednodeArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidReservednodeArn(arn: string)
```

Validates whether a string is a valid ARN for the reservednode resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidReservednodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidSnapshotArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubnetgroupArn` <a name="isValidSubnetgroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidSubnetgroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidSubnetgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the subnetgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidUserArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `multiregioncluster` <a name="multiregioncluster" id="@cdk_utils/iam.memorydb.MemoryDBResources.multiregioncluster"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.multiregioncluster(props: MemoryDBMultiregionclusterArnProps)
```

Builds an ARN for the multiregioncluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.multiregioncluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionclusterArnProps">MemoryDBMultiregionclusterArnProps</a>

---

##### `multiregionparametergroup` <a name="multiregionparametergroup" id="@cdk_utils/iam.memorydb.MemoryDBResources.multiregionparametergroup"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.multiregionparametergroup(props: MemoryDBMultiregionparametergroupArnProps)
```

Builds an ARN for the multiregionparametergroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.multiregionparametergroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBMultiregionparametergroupArnProps">MemoryDBMultiregionparametergroupArnProps</a>

---

##### `parametergroup` <a name="parametergroup" id="@cdk_utils/iam.memorydb.MemoryDBResources.parametergroup"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parametergroup(props: MemoryDBParametergroupArnProps)
```

Builds an ARN for the parametergroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.parametergroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBParametergroupArnProps">MemoryDBParametergroupArnProps</a>

---

##### `parseAclArn` <a name="parseAclArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseAclArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseAclArn(arn: string)
```

Parses a acl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseAclArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseClusterArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMultiregionclusterArn` <a name="parseMultiregionclusterArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionclusterArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseMultiregionclusterArn(arn: string)
```

Parses a multiregioncluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionclusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMultiregionparametergroupArn` <a name="parseMultiregionparametergroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionparametergroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseMultiregionparametergroupArn(arn: string)
```

Parses a multiregionparametergroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseMultiregionparametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseParametergroupArn` <a name="parseParametergroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseParametergroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseParametergroupArn(arn: string)
```

Parses a parametergroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReservednodeArn` <a name="parseReservednodeArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseReservednodeArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseReservednodeArn(arn: string)
```

Parses a reservednode ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseReservednodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseSnapshotArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubnetgroupArn` <a name="parseSubnetgroupArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseSubnetgroupArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseSubnetgroupArn(arn: string)
```

Parses a subnetgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseUserArn"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.memorydb.MemoryDBResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `reservednode` <a name="reservednode" id="@cdk_utils/iam.memorydb.MemoryDBResources.reservednode"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.reservednode(props: MemoryDBReservednodeArnProps)
```

Builds an ARN for the reservednode resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.reservednode.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBReservednodeArnProps">MemoryDBReservednodeArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.memorydb.MemoryDBResources.snapshot"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.snapshot(props: MemoryDBSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBSnapshotArnProps">MemoryDBSnapshotArnProps</a>

---

##### `subnetgroup` <a name="subnetgroup" id="@cdk_utils/iam.memorydb.MemoryDBResources.subnetgroup"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.subnetgroup(props: MemoryDBSubnetgroupArnProps)
```

Builds an ARN for the subnetgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.subnetgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBSubnetgroupArnProps">MemoryDBSubnetgroupArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.memorydb.MemoryDBResources.user"></a>

```typescript
import { memorydb } from '@cdk_utils/iam'

memorydb.MemoryDBResources.user(props: MemoryDBUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.memorydb.MemoryDBResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.memorydb.MemoryDBUserArnProps">MemoryDBUserArnProps</a>

---




