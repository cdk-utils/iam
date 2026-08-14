# `elasticache` Submodule <a name="`elasticache` Submodule" id="@cdk_utils/iam.elasticache"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElastiCacheClusterArnComponents <a name="ElastiCacheClusterArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheClusterArnComponents: elasticache.ElastiCacheClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.cacheClusterId">cacheClusterId</a></code> | <code>string</code> | The CacheClusterId component. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.cacheClusterId"></a>

```typescript
public readonly cacheClusterId: string;
```

- *Type:* string

The CacheClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastiCacheClusterArnProps <a name="ElastiCacheClusterArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheClusterArnProps: elasticache.ElastiCacheClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.cacheClusterId">cacheClusterId</a></code> | <code>string</code> | The CacheClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.cacheClusterId"></a>

```typescript
public readonly cacheClusterId: string;
```

- *Type:* string

The CacheClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheGlobalreplicationgroupArnComponents <a name="ElastiCacheGlobalreplicationgroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents"></a>

Parsed components of a globalreplicationgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheGlobalreplicationgroupArnComponents: elasticache.ElastiCacheGlobalreplicationgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | The GlobalReplicationGroupId component. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

The GlobalReplicationGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ElastiCacheGlobalreplicationgroupArnProps <a name="ElastiCacheGlobalreplicationgroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps"></a>

Properties for building a globalreplicationgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheGlobalreplicationgroupArnProps: elasticache.ElastiCacheGlobalreplicationgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>string</code> | The GlobalReplicationGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.globalReplicationGroupId"></a>

```typescript
public readonly globalReplicationGroupId: string;
```

- *Type:* string

The GlobalReplicationGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ElastiCacheParametergroupArnComponents <a name="ElastiCacheParametergroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents"></a>

Parsed components of a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheParametergroupArnComponents: elasticache.ElastiCacheParametergroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>string</code> | The CacheParameterGroupName component. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.cacheParameterGroupName"></a>

```typescript
public readonly cacheParameterGroupName: string;
```

- *Type:* string

The CacheParameterGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastiCacheParametergroupArnProps <a name="ElastiCacheParametergroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps"></a>

Properties for building a parametergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheParametergroupArnProps: elasticache.ElastiCacheParametergroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>string</code> | The CacheParameterGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.cacheParameterGroupName"></a>

```typescript
public readonly cacheParameterGroupName: string;
```

- *Type:* string

The CacheParameterGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheReplicationgroupArnComponents <a name="ElastiCacheReplicationgroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents"></a>

Parsed components of a replicationgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheReplicationgroupArnComponents: elasticache.ElastiCacheReplicationgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | The ReplicationGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnComponents.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

The ReplicationGroupId component.

---

### ElastiCacheReplicationgroupArnProps <a name="ElastiCacheReplicationgroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps"></a>

Properties for building a replicationgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheReplicationgroupArnProps: elasticache.ElastiCacheReplicationgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | The ReplicationGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

The ReplicationGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheReservedInstanceArnComponents <a name="ElastiCacheReservedInstanceArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents"></a>

Parsed components of a reserved-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheReservedInstanceArnComponents: elasticache.ElastiCacheReservedInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.reservedCacheNodeId">reservedCacheNodeId</a></code> | <code>string</code> | The ReservedCacheNodeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reservedCacheNodeId`<sup>Required</sup> <a name="reservedCacheNodeId" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnComponents.property.reservedCacheNodeId"></a>

```typescript
public readonly reservedCacheNodeId: string;
```

- *Type:* string

The ReservedCacheNodeId component.

---

### ElastiCacheReservedInstanceArnProps <a name="ElastiCacheReservedInstanceArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps"></a>

Properties for building a reserved-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheReservedInstanceArnProps: elasticache.ElastiCacheReservedInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.reservedCacheNodeId">reservedCacheNodeId</a></code> | <code>string</code> | The ReservedCacheNodeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reservedCacheNodeId`<sup>Required</sup> <a name="reservedCacheNodeId" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.reservedCacheNodeId"></a>

```typescript
public readonly reservedCacheNodeId: string;
```

- *Type:* string

The ReservedCacheNodeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheSecuritygroupArnComponents <a name="ElastiCacheSecuritygroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents"></a>

Parsed components of a securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSecuritygroupArnComponents: elasticache.ElastiCacheSecuritygroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.cacheSecurityGroupName">cacheSecurityGroupName</a></code> | <code>string</code> | The CacheSecurityGroupName component. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="cacheSecurityGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.cacheSecurityGroupName"></a>

```typescript
public readonly cacheSecurityGroupName: string;
```

- *Type:* string

The CacheSecurityGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastiCacheSecuritygroupArnProps <a name="ElastiCacheSecuritygroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps"></a>

Properties for building a securitygroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSecuritygroupArnProps: elasticache.ElastiCacheSecuritygroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.cacheSecurityGroupName">cacheSecurityGroupName</a></code> | <code>string</code> | The CacheSecurityGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cacheSecurityGroupName`<sup>Required</sup> <a name="cacheSecurityGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.cacheSecurityGroupName"></a>

```typescript
public readonly cacheSecurityGroupName: string;
```

- *Type:* string

The CacheSecurityGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheServerlesscacheArnComponents <a name="ElastiCacheServerlesscacheArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents"></a>

Parsed components of a serverlesscache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheServerlesscacheArnComponents: elasticache.ElastiCacheServerlesscacheArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | The ServerlessCacheName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnComponents.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

The ServerlessCacheName component.

---

### ElastiCacheServerlesscacheArnProps <a name="ElastiCacheServerlesscacheArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps"></a>

Properties for building a serverlesscache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheServerlesscacheArnProps: elasticache.ElastiCacheServerlesscacheArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | The ServerlessCacheName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

The ServerlessCacheName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheServerlesscachesnapshotArnComponents <a name="ElastiCacheServerlesscachesnapshotArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents"></a>

Parsed components of a serverlesscachesnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheServerlesscachesnapshotArnComponents: elasticache.ElastiCacheServerlesscachesnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.serverlessCacheSnapshotName">serverlessCacheSnapshotName</a></code> | <code>string</code> | The ServerlessCacheSnapshotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serverlessCacheSnapshotName`<sup>Required</sup> <a name="serverlessCacheSnapshotName" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnComponents.property.serverlessCacheSnapshotName"></a>

```typescript
public readonly serverlessCacheSnapshotName: string;
```

- *Type:* string

The ServerlessCacheSnapshotName component.

---

### ElastiCacheServerlesscachesnapshotArnProps <a name="ElastiCacheServerlesscachesnapshotArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps"></a>

Properties for building a serverlesscachesnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheServerlesscachesnapshotArnProps: elasticache.ElastiCacheServerlesscachesnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.serverlessCacheSnapshotName">serverlessCacheSnapshotName</a></code> | <code>string</code> | The ServerlessCacheSnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serverlessCacheSnapshotName`<sup>Required</sup> <a name="serverlessCacheSnapshotName" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.serverlessCacheSnapshotName"></a>

```typescript
public readonly serverlessCacheSnapshotName: string;
```

- *Type:* string

The ServerlessCacheSnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheSnapshotArnComponents <a name="ElastiCacheSnapshotArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents"></a>

Parsed components of a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSnapshotArnComponents: elasticache.ElastiCacheSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnComponents.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component.

---

### ElastiCacheSnapshotArnProps <a name="ElastiCacheSnapshotArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps"></a>

Properties for building a snapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSnapshotArnProps: elasticache.ElastiCacheSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.snapshotName">snapshotName</a></code> | <code>string</code> | The SnapshotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

The SnapshotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheSubnetgroupArnComponents <a name="ElastiCacheSubnetgroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents"></a>

Parsed components of a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSubnetgroupArnComponents: elasticache.ElastiCacheSubnetgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | The CacheSubnetGroupName component. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

The CacheSubnetGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElastiCacheSubnetgroupArnProps <a name="ElastiCacheSubnetgroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps"></a>

Properties for building a subnetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheSubnetgroupArnProps: elasticache.ElastiCacheSubnetgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | The CacheSubnetGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

The CacheSubnetGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheUserArnComponents <a name="ElastiCacheUserArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheUserArnComponents: elasticache.ElastiCacheUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### ElastiCacheUserArnProps <a name="ElastiCacheUserArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheUserArnProps: elasticache.ElastiCacheUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElastiCacheUsergroupArnComponents <a name="ElastiCacheUsergroupArnComponents" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents"></a>

Parsed components of a usergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheUsergroupArnComponents: elasticache.ElastiCacheUsergroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.userGroupId">userGroupId</a></code> | <code>string</code> | The UserGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnComponents.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

The UserGroupId component.

---

### ElastiCacheUsergroupArnProps <a name="ElastiCacheUsergroupArnProps" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps"></a>

Properties for building a usergroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

const elastiCacheUsergroupArnProps: elasticache.ElastiCacheUsergroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.userGroupId">userGroupId</a></code> | <code>string</code> | The UserGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.userGroupId"></a>

```typescript
public readonly userGroupId: string;
```

- *Type:* string

The UserGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElastiCacheActions <a name="ElastiCacheActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions"></a>

IAM action constants for the elasticache service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticache.ElastiCacheActions.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

new elasticache.ElastiCacheActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] elasticache:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.AuthorizeCacheSecurityGroupIngress">AuthorizeCacheSecurityGroupIngress</a></code> | <code>string</code> | [Write] elasticache:AuthorizeCacheSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.BatchApplyUpdateAction">BatchApplyUpdateAction</a></code> | <code>string</code> | [Write] elasticache:BatchApplyUpdateAction. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.BatchStopUpdateAction">BatchStopUpdateAction</a></code> | <code>string</code> | [Write] elasticache:BatchStopUpdateAction. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CompleteMigration">CompleteMigration</a></code> | <code>string</code> | [Write] elasticache:CompleteMigration. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] elasticache:Connect. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CopyServerlessCacheSnapshot">CopyServerlessCacheSnapshot</a></code> | <code>string</code> | [Write] elasticache:CopyServerlessCacheSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CopySnapshot">CopySnapshot</a></code> | <code>string</code> | [Write] elasticache:CopySnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheCluster">CreateCacheCluster</a></code> | <code>string</code> | [Write] elasticache:CreateCacheCluster. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheParameterGroup">CreateCacheParameterGroup</a></code> | <code>string</code> | [Write] elasticache:CreateCacheParameterGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheSecurityGroup">CreateCacheSecurityGroup</a></code> | <code>string</code> | [Write] elasticache:CreateCacheSecurityGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheSubnetGroup">CreateCacheSubnetGroup</a></code> | <code>string</code> | [Write] elasticache:CreateCacheSubnetGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateGlobalReplicationGroup">CreateGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:CreateGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateReplicationGroup">CreateReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:CreateReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateServerlessCache">CreateServerlessCache</a></code> | <code>string</code> | [Write] elasticache:CreateServerlessCache. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateServerlessCacheSnapshot">CreateServerlessCacheSnapshot</a></code> | <code>string</code> | [Write] elasticache:CreateServerlessCacheSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] elasticache:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] elasticache:CreateUser. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateUserGroup">CreateUserGroup</a></code> | <code>string</code> | [Write] elasticache:CreateUserGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DecreaseNodeGroupsInGlobalReplicationGroup">DecreaseNodeGroupsInGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:DecreaseNodeGroupsInGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DecreaseReplicaCount">DecreaseReplicaCount</a></code> | <code>string</code> | [Write] elasticache:DecreaseReplicaCount. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheCluster">DeleteCacheCluster</a></code> | <code>string</code> | [Write] elasticache:DeleteCacheCluster. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheParameterGroup">DeleteCacheParameterGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteCacheParameterGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheSecurityGroup">DeleteCacheSecurityGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteCacheSecurityGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheSubnetGroup">DeleteCacheSubnetGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteCacheSubnetGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteGlobalReplicationGroup">DeleteGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteReplicationGroup">DeleteReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteServerlessCache">DeleteServerlessCache</a></code> | <code>string</code> | [Write] elasticache:DeleteServerlessCache. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteServerlessCacheSnapshot">DeleteServerlessCacheSnapshot</a></code> | <code>string</code> | [Write] elasticache:DeleteServerlessCacheSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string</code> | [Write] elasticache:DeleteSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] elasticache:DeleteUser. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteUserGroup">DeleteUserGroup</a></code> | <code>string</code> | [Write] elasticache:DeleteUserGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheClusters">DescribeCacheClusters</a></code> | <code>string</code> | [List] elasticache:DescribeCacheClusters. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheEngineVersions">DescribeCacheEngineVersions</a></code> | <code>string</code> | [List] elasticache:DescribeCacheEngineVersions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheParameterGroups">DescribeCacheParameterGroups</a></code> | <code>string</code> | [List] elasticache:DescribeCacheParameterGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheParameters">DescribeCacheParameters</a></code> | <code>string</code> | [List] elasticache:DescribeCacheParameters. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheSecurityGroups">DescribeCacheSecurityGroups</a></code> | <code>string</code> | [List] elasticache:DescribeCacheSecurityGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheSubnetGroups">DescribeCacheSubnetGroups</a></code> | <code>string</code> | [List] elasticache:DescribeCacheSubnetGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeEngineDefaultParameters">DescribeEngineDefaultParameters</a></code> | <code>string</code> | [List] elasticache:DescribeEngineDefaultParameters. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeEvents">DescribeEvents</a></code> | <code>string</code> | [List] elasticache:DescribeEvents. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeGlobalReplicationGroups">DescribeGlobalReplicationGroups</a></code> | <code>string</code> | [List] elasticache:DescribeGlobalReplicationGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReplicationGroups">DescribeReplicationGroups</a></code> | <code>string</code> | [List] elasticache:DescribeReplicationGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReservedCacheNodes">DescribeReservedCacheNodes</a></code> | <code>string</code> | [List] elasticache:DescribeReservedCacheNodes. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReservedCacheNodesOfferings">DescribeReservedCacheNodesOfferings</a></code> | <code>string</code> | [List] elasticache:DescribeReservedCacheNodesOfferings. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServerlessCaches">DescribeServerlessCaches</a></code> | <code>string</code> | [List] elasticache:DescribeServerlessCaches. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServerlessCacheSnapshots">DescribeServerlessCacheSnapshots</a></code> | <code>string</code> | [List] elasticache:DescribeServerlessCacheSnapshots. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServiceUpdates">DescribeServiceUpdates</a></code> | <code>string</code> | [List] elasticache:DescribeServiceUpdates. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string</code> | [List] elasticache:DescribeSnapshots. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUpdateActions">DescribeUpdateActions</a></code> | <code>string</code> | [List] elasticache:DescribeUpdateActions. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUserGroups">DescribeUserGroups</a></code> | <code>string</code> | [List] elasticache:DescribeUserGroups. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUsers">DescribeUsers</a></code> | <code>string</code> | [List] elasticache:DescribeUsers. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.DisassociateGlobalReplicationGroup">DisassociateGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:DisassociateGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ExportServerlessCacheSnapshot">ExportServerlessCacheSnapshot</a></code> | <code>string</code> | [Write] elasticache:ExportServerlessCacheSnapshot. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.FailoverGlobalReplicationGroup">FailoverGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:FailoverGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.IncreaseNodeGroupsInGlobalReplicationGroup">IncreaseNodeGroupsInGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:IncreaseNodeGroupsInGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.IncreaseReplicaCount">IncreaseReplicaCount</a></code> | <code>string</code> | [Write] elasticache:IncreaseReplicaCount. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.InterruptClusterAzPower">InterruptClusterAzPower</a></code> | <code>string</code> | [Write] elasticache:InterruptClusterAzPower. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ListAllowedNodeTypeModifications">ListAllowedNodeTypeModifications</a></code> | <code>string</code> | [List] elasticache:ListAllowedNodeTypeModifications. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] elasticache:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheCluster">ModifyCacheCluster</a></code> | <code>string</code> | [Write] elasticache:ModifyCacheCluster. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheParameterGroup">ModifyCacheParameterGroup</a></code> | <code>string</code> | [Write] elasticache:ModifyCacheParameterGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheSubnetGroup">ModifyCacheSubnetGroup</a></code> | <code>string</code> | [Write] elasticache:ModifyCacheSubnetGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyGlobalReplicationGroup">ModifyGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:ModifyGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyReplicationGroup">ModifyReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:ModifyReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyReplicationGroupShardConfiguration">ModifyReplicationGroupShardConfiguration</a></code> | <code>string</code> | [Write] elasticache:ModifyReplicationGroupShardConfiguration. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyServerlessCache">ModifyServerlessCache</a></code> | <code>string</code> | [Write] elasticache:ModifyServerlessCache. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyUser">ModifyUser</a></code> | <code>string</code> | [Write] elasticache:ModifyUser. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyUserGroup">ModifyUserGroup</a></code> | <code>string</code> | [Write] elasticache:ModifyUserGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.PurchaseReservedCacheNodesOffering">PurchaseReservedCacheNodesOffering</a></code> | <code>string</code> | [Write] elasticache:PurchaseReservedCacheNodesOffering. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.RebalanceSlotsInGlobalReplicationGroup">RebalanceSlotsInGlobalReplicationGroup</a></code> | <code>string</code> | [Write] elasticache:RebalanceSlotsInGlobalReplicationGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.RebootCacheCluster">RebootCacheCluster</a></code> | <code>string</code> | [Write] elasticache:RebootCacheCluster. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] elasticache:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.ResetCacheParameterGroup">ResetCacheParameterGroup</a></code> | <code>string</code> | [Write] elasticache:ResetCacheParameterGroup. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.RevokeCacheSecurityGroupIngress">RevokeCacheSecurityGroupIngress</a></code> | <code>string</code> | [Write] elasticache:RevokeCacheSecurityGroupIngress. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.StartMigration">StartMigration</a></code> | <code>string</code> | [Write] elasticache:StartMigration. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.TestFailover">TestFailover</a></code> | <code>string</code> | [Write] elasticache:TestFailover. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheActions.property.TestMigration">TestMigration</a></code> | <code>string</code> | [Write] elasticache:TestMigration. |

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] elasticache:AddTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AuthorizeCacheSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeCacheSecurityGroupIngress" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.AuthorizeCacheSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeCacheSecurityGroupIngress: string;
```

- *Type:* string

[Write] elasticache:AuthorizeCacheSecurityGroupIngress.

---

##### `BatchApplyUpdateAction`<sup>Required</sup> <a name="BatchApplyUpdateAction" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.BatchApplyUpdateAction"></a>

```typescript
public readonly BatchApplyUpdateAction: string;
```

- *Type:* string

[Write] elasticache:BatchApplyUpdateAction.

---

##### `BatchStopUpdateAction`<sup>Required</sup> <a name="BatchStopUpdateAction" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.BatchStopUpdateAction"></a>

```typescript
public readonly BatchStopUpdateAction: string;
```

- *Type:* string

[Write] elasticache:BatchStopUpdateAction.

---

##### `CompleteMigration`<sup>Required</sup> <a name="CompleteMigration" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CompleteMigration"></a>

```typescript
public readonly CompleteMigration: string;
```

- *Type:* string

[Write] elasticache:CompleteMigration.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] elasticache:Connect.

---

##### `CopyServerlessCacheSnapshot`<sup>Required</sup> <a name="CopyServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CopyServerlessCacheSnapshot"></a>

```typescript
public readonly CopyServerlessCacheSnapshot: string;
```

- *Type:* string

[Write] elasticache:CopyServerlessCacheSnapshot.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string;
```

- *Type:* string

[Write] elasticache:CopySnapshot.

---

##### `CreateCacheCluster`<sup>Required</sup> <a name="CreateCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheCluster"></a>

```typescript
public readonly CreateCacheCluster: string;
```

- *Type:* string

[Write] elasticache:CreateCacheCluster.

---

##### `CreateCacheParameterGroup`<sup>Required</sup> <a name="CreateCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheParameterGroup"></a>

```typescript
public readonly CreateCacheParameterGroup: string;
```

- *Type:* string

[Write] elasticache:CreateCacheParameterGroup.

---

##### `CreateCacheSecurityGroup`<sup>Required</sup> <a name="CreateCacheSecurityGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheSecurityGroup"></a>

```typescript
public readonly CreateCacheSecurityGroup: string;
```

- *Type:* string

[Write] elasticache:CreateCacheSecurityGroup.

---

##### `CreateCacheSubnetGroup`<sup>Required</sup> <a name="CreateCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateCacheSubnetGroup"></a>

```typescript
public readonly CreateCacheSubnetGroup: string;
```

- *Type:* string

[Write] elasticache:CreateCacheSubnetGroup.

---

##### `CreateGlobalReplicationGroup`<sup>Required</sup> <a name="CreateGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateGlobalReplicationGroup"></a>

```typescript
public readonly CreateGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:CreateGlobalReplicationGroup.

---

##### `CreateReplicationGroup`<sup>Required</sup> <a name="CreateReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateReplicationGroup"></a>

```typescript
public readonly CreateReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:CreateReplicationGroup.

---

##### `CreateServerlessCache`<sup>Required</sup> <a name="CreateServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateServerlessCache"></a>

```typescript
public readonly CreateServerlessCache: string;
```

- *Type:* string

[Write] elasticache:CreateServerlessCache.

---

##### `CreateServerlessCacheSnapshot`<sup>Required</sup> <a name="CreateServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateServerlessCacheSnapshot"></a>

```typescript
public readonly CreateServerlessCacheSnapshot: string;
```

- *Type:* string

[Write] elasticache:CreateServerlessCacheSnapshot.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] elasticache:CreateSnapshot.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] elasticache:CreateUser.

---

##### `CreateUserGroup`<sup>Required</sup> <a name="CreateUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.CreateUserGroup"></a>

```typescript
public readonly CreateUserGroup: string;
```

- *Type:* string

[Write] elasticache:CreateUserGroup.

---

##### `DecreaseNodeGroupsInGlobalReplicationGroup`<sup>Required</sup> <a name="DecreaseNodeGroupsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DecreaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public readonly DecreaseNodeGroupsInGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:DecreaseNodeGroupsInGlobalReplicationGroup.

---

##### `DecreaseReplicaCount`<sup>Required</sup> <a name="DecreaseReplicaCount" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DecreaseReplicaCount"></a>

```typescript
public readonly DecreaseReplicaCount: string;
```

- *Type:* string

[Write] elasticache:DecreaseReplicaCount.

---

##### `DeleteCacheCluster`<sup>Required</sup> <a name="DeleteCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheCluster"></a>

```typescript
public readonly DeleteCacheCluster: string;
```

- *Type:* string

[Write] elasticache:DeleteCacheCluster.

---

##### `DeleteCacheParameterGroup`<sup>Required</sup> <a name="DeleteCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheParameterGroup"></a>

```typescript
public readonly DeleteCacheParameterGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteCacheParameterGroup.

---

##### `DeleteCacheSecurityGroup`<sup>Required</sup> <a name="DeleteCacheSecurityGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheSecurityGroup"></a>

```typescript
public readonly DeleteCacheSecurityGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteCacheSecurityGroup.

---

##### `DeleteCacheSubnetGroup`<sup>Required</sup> <a name="DeleteCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteCacheSubnetGroup"></a>

```typescript
public readonly DeleteCacheSubnetGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteCacheSubnetGroup.

---

##### `DeleteGlobalReplicationGroup`<sup>Required</sup> <a name="DeleteGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteGlobalReplicationGroup"></a>

```typescript
public readonly DeleteGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteGlobalReplicationGroup.

---

##### `DeleteReplicationGroup`<sup>Required</sup> <a name="DeleteReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteReplicationGroup"></a>

```typescript
public readonly DeleteReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteReplicationGroup.

---

##### `DeleteServerlessCache`<sup>Required</sup> <a name="DeleteServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteServerlessCache"></a>

```typescript
public readonly DeleteServerlessCache: string;
```

- *Type:* string

[Write] elasticache:DeleteServerlessCache.

---

##### `DeleteServerlessCacheSnapshot`<sup>Required</sup> <a name="DeleteServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteServerlessCacheSnapshot"></a>

```typescript
public readonly DeleteServerlessCacheSnapshot: string;
```

- *Type:* string

[Write] elasticache:DeleteServerlessCacheSnapshot.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string;
```

- *Type:* string

[Write] elasticache:DeleteSnapshot.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] elasticache:DeleteUser.

---

##### `DeleteUserGroup`<sup>Required</sup> <a name="DeleteUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DeleteUserGroup"></a>

```typescript
public readonly DeleteUserGroup: string;
```

- *Type:* string

[Write] elasticache:DeleteUserGroup.

---

##### `DescribeCacheClusters`<sup>Required</sup> <a name="DescribeCacheClusters" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheClusters"></a>

```typescript
public readonly DescribeCacheClusters: string;
```

- *Type:* string

[List] elasticache:DescribeCacheClusters.

---

##### `DescribeCacheEngineVersions`<sup>Required</sup> <a name="DescribeCacheEngineVersions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheEngineVersions"></a>

```typescript
public readonly DescribeCacheEngineVersions: string;
```

- *Type:* string

[List] elasticache:DescribeCacheEngineVersions.

---

##### `DescribeCacheParameterGroups`<sup>Required</sup> <a name="DescribeCacheParameterGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheParameterGroups"></a>

```typescript
public readonly DescribeCacheParameterGroups: string;
```

- *Type:* string

[List] elasticache:DescribeCacheParameterGroups.

---

##### `DescribeCacheParameters`<sup>Required</sup> <a name="DescribeCacheParameters" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheParameters"></a>

```typescript
public readonly DescribeCacheParameters: string;
```

- *Type:* string

[List] elasticache:DescribeCacheParameters.

---

##### `DescribeCacheSecurityGroups`<sup>Required</sup> <a name="DescribeCacheSecurityGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheSecurityGroups"></a>

```typescript
public readonly DescribeCacheSecurityGroups: string;
```

- *Type:* string

[List] elasticache:DescribeCacheSecurityGroups.

---

##### `DescribeCacheSubnetGroups`<sup>Required</sup> <a name="DescribeCacheSubnetGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeCacheSubnetGroups"></a>

```typescript
public readonly DescribeCacheSubnetGroups: string;
```

- *Type:* string

[List] elasticache:DescribeCacheSubnetGroups.

---

##### `DescribeEngineDefaultParameters`<sup>Required</sup> <a name="DescribeEngineDefaultParameters" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeEngineDefaultParameters"></a>

```typescript
public readonly DescribeEngineDefaultParameters: string;
```

- *Type:* string

[List] elasticache:DescribeEngineDefaultParameters.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string;
```

- *Type:* string

[List] elasticache:DescribeEvents.

---

##### `DescribeGlobalReplicationGroups`<sup>Required</sup> <a name="DescribeGlobalReplicationGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeGlobalReplicationGroups"></a>

```typescript
public readonly DescribeGlobalReplicationGroups: string;
```

- *Type:* string

[List] elasticache:DescribeGlobalReplicationGroups.

---

##### `DescribeReplicationGroups`<sup>Required</sup> <a name="DescribeReplicationGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReplicationGroups"></a>

```typescript
public readonly DescribeReplicationGroups: string;
```

- *Type:* string

[List] elasticache:DescribeReplicationGroups.

---

##### `DescribeReservedCacheNodes`<sup>Required</sup> <a name="DescribeReservedCacheNodes" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReservedCacheNodes"></a>

```typescript
public readonly DescribeReservedCacheNodes: string;
```

- *Type:* string

[List] elasticache:DescribeReservedCacheNodes.

---

##### `DescribeReservedCacheNodesOfferings`<sup>Required</sup> <a name="DescribeReservedCacheNodesOfferings" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeReservedCacheNodesOfferings"></a>

```typescript
public readonly DescribeReservedCacheNodesOfferings: string;
```

- *Type:* string

[List] elasticache:DescribeReservedCacheNodesOfferings.

---

##### `DescribeServerlessCaches`<sup>Required</sup> <a name="DescribeServerlessCaches" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServerlessCaches"></a>

```typescript
public readonly DescribeServerlessCaches: string;
```

- *Type:* string

[List] elasticache:DescribeServerlessCaches.

---

##### `DescribeServerlessCacheSnapshots`<sup>Required</sup> <a name="DescribeServerlessCacheSnapshots" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServerlessCacheSnapshots"></a>

```typescript
public readonly DescribeServerlessCacheSnapshots: string;
```

- *Type:* string

[List] elasticache:DescribeServerlessCacheSnapshots.

---

##### `DescribeServiceUpdates`<sup>Required</sup> <a name="DescribeServiceUpdates" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeServiceUpdates"></a>

```typescript
public readonly DescribeServiceUpdates: string;
```

- *Type:* string

[List] elasticache:DescribeServiceUpdates.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string;
```

- *Type:* string

[List] elasticache:DescribeSnapshots.

---

##### `DescribeUpdateActions`<sup>Required</sup> <a name="DescribeUpdateActions" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUpdateActions"></a>

```typescript
public readonly DescribeUpdateActions: string;
```

- *Type:* string

[List] elasticache:DescribeUpdateActions.

---

##### `DescribeUserGroups`<sup>Required</sup> <a name="DescribeUserGroups" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUserGroups"></a>

```typescript
public readonly DescribeUserGroups: string;
```

- *Type:* string

[List] elasticache:DescribeUserGroups.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string;
```

- *Type:* string

[List] elasticache:DescribeUsers.

---

##### `DisassociateGlobalReplicationGroup`<sup>Required</sup> <a name="DisassociateGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.DisassociateGlobalReplicationGroup"></a>

```typescript
public readonly DisassociateGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:DisassociateGlobalReplicationGroup.

---

##### `ExportServerlessCacheSnapshot`<sup>Required</sup> <a name="ExportServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ExportServerlessCacheSnapshot"></a>

```typescript
public readonly ExportServerlessCacheSnapshot: string;
```

- *Type:* string

[Write] elasticache:ExportServerlessCacheSnapshot.

---

##### `FailoverGlobalReplicationGroup`<sup>Required</sup> <a name="FailoverGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.FailoverGlobalReplicationGroup"></a>

```typescript
public readonly FailoverGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:FailoverGlobalReplicationGroup.

---

##### `IncreaseNodeGroupsInGlobalReplicationGroup`<sup>Required</sup> <a name="IncreaseNodeGroupsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.IncreaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public readonly IncreaseNodeGroupsInGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:IncreaseNodeGroupsInGlobalReplicationGroup.

---

##### `IncreaseReplicaCount`<sup>Required</sup> <a name="IncreaseReplicaCount" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.IncreaseReplicaCount"></a>

```typescript
public readonly IncreaseReplicaCount: string;
```

- *Type:* string

[Write] elasticache:IncreaseReplicaCount.

---

##### `InterruptClusterAzPower`<sup>Required</sup> <a name="InterruptClusterAzPower" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.InterruptClusterAzPower"></a>

```typescript
public readonly InterruptClusterAzPower: string;
```

- *Type:* string

[Write] elasticache:InterruptClusterAzPower.

---

##### `ListAllowedNodeTypeModifications`<sup>Required</sup> <a name="ListAllowedNodeTypeModifications" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ListAllowedNodeTypeModifications"></a>

```typescript
public readonly ListAllowedNodeTypeModifications: string;
```

- *Type:* string

[List] elasticache:ListAllowedNodeTypeModifications.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] elasticache:ListTagsForResource.

---

##### `ModifyCacheCluster`<sup>Required</sup> <a name="ModifyCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheCluster"></a>

```typescript
public readonly ModifyCacheCluster: string;
```

- *Type:* string

[Write] elasticache:ModifyCacheCluster.

---

##### `ModifyCacheParameterGroup`<sup>Required</sup> <a name="ModifyCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheParameterGroup"></a>

```typescript
public readonly ModifyCacheParameterGroup: string;
```

- *Type:* string

[Write] elasticache:ModifyCacheParameterGroup.

---

##### `ModifyCacheSubnetGroup`<sup>Required</sup> <a name="ModifyCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyCacheSubnetGroup"></a>

```typescript
public readonly ModifyCacheSubnetGroup: string;
```

- *Type:* string

[Write] elasticache:ModifyCacheSubnetGroup.

---

##### `ModifyGlobalReplicationGroup`<sup>Required</sup> <a name="ModifyGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyGlobalReplicationGroup"></a>

```typescript
public readonly ModifyGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:ModifyGlobalReplicationGroup.

---

##### `ModifyReplicationGroup`<sup>Required</sup> <a name="ModifyReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyReplicationGroup"></a>

```typescript
public readonly ModifyReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:ModifyReplicationGroup.

---

##### `ModifyReplicationGroupShardConfiguration`<sup>Required</sup> <a name="ModifyReplicationGroupShardConfiguration" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyReplicationGroupShardConfiguration"></a>

```typescript
public readonly ModifyReplicationGroupShardConfiguration: string;
```

- *Type:* string

[Write] elasticache:ModifyReplicationGroupShardConfiguration.

---

##### `ModifyServerlessCache`<sup>Required</sup> <a name="ModifyServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyServerlessCache"></a>

```typescript
public readonly ModifyServerlessCache: string;
```

- *Type:* string

[Write] elasticache:ModifyServerlessCache.

---

##### `ModifyUser`<sup>Required</sup> <a name="ModifyUser" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyUser"></a>

```typescript
public readonly ModifyUser: string;
```

- *Type:* string

[Write] elasticache:ModifyUser.

---

##### `ModifyUserGroup`<sup>Required</sup> <a name="ModifyUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ModifyUserGroup"></a>

```typescript
public readonly ModifyUserGroup: string;
```

- *Type:* string

[Write] elasticache:ModifyUserGroup.

---

##### `PurchaseReservedCacheNodesOffering`<sup>Required</sup> <a name="PurchaseReservedCacheNodesOffering" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.PurchaseReservedCacheNodesOffering"></a>

```typescript
public readonly PurchaseReservedCacheNodesOffering: string;
```

- *Type:* string

[Write] elasticache:PurchaseReservedCacheNodesOffering.

---

##### `RebalanceSlotsInGlobalReplicationGroup`<sup>Required</sup> <a name="RebalanceSlotsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.RebalanceSlotsInGlobalReplicationGroup"></a>

```typescript
public readonly RebalanceSlotsInGlobalReplicationGroup: string;
```

- *Type:* string

[Write] elasticache:RebalanceSlotsInGlobalReplicationGroup.

---

##### `RebootCacheCluster`<sup>Required</sup> <a name="RebootCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.RebootCacheCluster"></a>

```typescript
public readonly RebootCacheCluster: string;
```

- *Type:* string

[Write] elasticache:RebootCacheCluster.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] elasticache:RemoveTagsFromResource.

---

##### `ResetCacheParameterGroup`<sup>Required</sup> <a name="ResetCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.ResetCacheParameterGroup"></a>

```typescript
public readonly ResetCacheParameterGroup: string;
```

- *Type:* string

[Write] elasticache:ResetCacheParameterGroup.

---

##### `RevokeCacheSecurityGroupIngress`<sup>Required</sup> <a name="RevokeCacheSecurityGroupIngress" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.RevokeCacheSecurityGroupIngress"></a>

```typescript
public readonly RevokeCacheSecurityGroupIngress: string;
```

- *Type:* string

[Write] elasticache:RevokeCacheSecurityGroupIngress.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.StartMigration"></a>

```typescript
public readonly StartMigration: string;
```

- *Type:* string

[Write] elasticache:StartMigration.

---

##### `TestFailover`<sup>Required</sup> <a name="TestFailover" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.TestFailover"></a>

```typescript
public readonly TestFailover: string;
```

- *Type:* string

[Write] elasticache:TestFailover.

---

##### `TestMigration`<sup>Required</sup> <a name="TestMigration" id="@cdk_utils/iam.elasticache.ElastiCacheActions.property.TestMigration"></a>

```typescript
public readonly TestMigration: string;
```

- *Type:* string

[Write] elasticache:TestMigration.

---

### ElastiCacheConditions <a name="ElastiCacheConditions" id="@cdk_utils/iam.elasticache.ElastiCacheConditions"></a>

Condition key constants and builders for elasticache.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

new elasticache.ElastiCacheConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | Generates a condition block for `elasticache:AtRestEncryptionEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.authTokenEnabled">authTokenEnabled</a></code> | Generates a condition block for `elasticache:AuthTokenEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | Generates a condition block for `elasticache:AutomaticFailoverEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheNodeType">cacheNodeType</a></code> | Generates a condition block for `elasticache:CacheNodeType`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheParameterGroupName">cacheParameterGroupName</a></code> | Generates a condition block for `elasticache:CacheParameterGroupName`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.clusterModeEnabled">clusterModeEnabled</a></code> | Generates a condition block for `elasticache:ClusterModeEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.dataStorageUnit">dataStorageUnit</a></code> | Generates a condition block for `elasticache:DataStorageUnit`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.durability">durability</a></code> | Generates a condition block for `elasticache:Durability`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.engineType">engineType</a></code> | Generates a condition block for `elasticache:EngineType`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.engineVersion">engineVersion</a></code> | Generates a condition block for `elasticache:EngineVersion`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.kmsKeyId">kmsKeyId</a></code> | Generates a condition block for `elasticache:KmsKeyId`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumDataStorage">maximumDataStorage</a></code> | Generates a condition block for `elasticache:MaximumDataStorage`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumEcpuPerSecond">maximumEcpuPerSecond</a></code> | Generates a condition block for `elasticache:MaximumECPUPerSecond`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumDataStorage">minimumDataStorage</a></code> | Generates a condition block for `elasticache:MinimumDataStorage`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumEcpuPerSecond">minimumEcpuPerSecond</a></code> | Generates a condition block for `elasticache:MinimumECPUPerSecond`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.multiAzEnabled">multiAzEnabled</a></code> | Generates a condition block for `elasticache:MultiAZEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.numNodeGroups">numNodeGroups</a></code> | Generates a condition block for `elasticache:NumNodeGroups`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | Generates a condition block for `elasticache:ReplicasPerNodeGroup`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | Generates a condition block for `elasticache:SnapshotRetentionLimit`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | Generates a condition block for `elasticache:TransitEncryptionEnabled`. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.userAuthenticationMode">userAuthenticationMode</a></code> | Generates a condition block for `elasticache:UserAuthenticationMode`. |

---

##### `atRestEncryptionEnabled` <a name="atRestEncryptionEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.atRestEncryptionEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.atRestEncryptionEnabled(value: boolean)
```

Generates a condition block for `elasticache:AtRestEncryptionEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.atRestEncryptionEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `authTokenEnabled` <a name="authTokenEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.authTokenEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.authTokenEnabled(value: boolean)
```

Generates a condition block for `elasticache:AuthTokenEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.authTokenEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `automaticFailoverEnabled` <a name="automaticFailoverEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.automaticFailoverEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.automaticFailoverEnabled(value: boolean)
```

Generates a condition block for `elasticache:AutomaticFailoverEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.automaticFailoverEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `cacheNodeType` <a name="cacheNodeType" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheNodeType"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.cacheNodeType(value: string)
```

Generates a condition block for `elasticache:CacheNodeType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheNodeType.parameter.value"></a>

- *Type:* string

---

##### `cacheParameterGroupName` <a name="cacheParameterGroupName" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheParameterGroupName"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.cacheParameterGroupName(value: string)
```

Generates a condition block for `elasticache:CacheParameterGroupName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.cacheParameterGroupName.parameter.value"></a>

- *Type:* string

---

##### `clusterModeEnabled` <a name="clusterModeEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.clusterModeEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.clusterModeEnabled(value: boolean)
```

Generates a condition block for `elasticache:ClusterModeEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.clusterModeEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `dataStorageUnit` <a name="dataStorageUnit" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.dataStorageUnit"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.dataStorageUnit(value: string)
```

Generates a condition block for `elasticache:DataStorageUnit`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.dataStorageUnit.parameter.value"></a>

- *Type:* string

---

##### `durability` <a name="durability" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.durability"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.durability(value: string)
```

Generates a condition block for `elasticache:Durability`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.durability.parameter.value"></a>

- *Type:* string

---

##### `engineType` <a name="engineType" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.engineType"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.engineType(value: string)
```

Generates a condition block for `elasticache:EngineType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.engineType.parameter.value"></a>

- *Type:* string

---

##### `engineVersion` <a name="engineVersion" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.engineVersion"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.engineVersion(value: string)
```

Generates a condition block for `elasticache:EngineVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.engineVersion.parameter.value"></a>

- *Type:* string

---

##### `kmsKeyId` <a name="kmsKeyId" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.kmsKeyId"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.kmsKeyId(value: string)
```

Generates a condition block for `elasticache:KmsKeyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.kmsKeyId.parameter.value"></a>

- *Type:* string

---

##### `maximumDataStorage` <a name="maximumDataStorage" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumDataStorage"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.maximumDataStorage(value: number)
```

Generates a condition block for `elasticache:MaximumDataStorage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumDataStorage.parameter.value"></a>

- *Type:* number

---

##### `maximumEcpuPerSecond` <a name="maximumEcpuPerSecond" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumEcpuPerSecond"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.maximumEcpuPerSecond(value: number)
```

Generates a condition block for `elasticache:MaximumECPUPerSecond`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.maximumEcpuPerSecond.parameter.value"></a>

- *Type:* number

---

##### `minimumDataStorage` <a name="minimumDataStorage" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumDataStorage"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.minimumDataStorage(value: number)
```

Generates a condition block for `elasticache:MinimumDataStorage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumDataStorage.parameter.value"></a>

- *Type:* number

---

##### `minimumEcpuPerSecond` <a name="minimumEcpuPerSecond" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumEcpuPerSecond"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.minimumEcpuPerSecond(value: number)
```

Generates a condition block for `elasticache:MinimumECPUPerSecond`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.minimumEcpuPerSecond.parameter.value"></a>

- *Type:* number

---

##### `multiAzEnabled` <a name="multiAzEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.multiAzEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.multiAzEnabled(value: boolean)
```

Generates a condition block for `elasticache:MultiAZEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.multiAzEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `numNodeGroups` <a name="numNodeGroups" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.numNodeGroups"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.numNodeGroups(value: number)
```

Generates a condition block for `elasticache:NumNodeGroups`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.numNodeGroups.parameter.value"></a>

- *Type:* number

---

##### `replicasPerNodeGroup` <a name="replicasPerNodeGroup" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.replicasPerNodeGroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.replicasPerNodeGroup(value: number)
```

Generates a condition block for `elasticache:ReplicasPerNodeGroup`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.replicasPerNodeGroup.parameter.value"></a>

- *Type:* number

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.requestTag"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.resourceTag"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `snapshotRetentionLimit` <a name="snapshotRetentionLimit" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.snapshotRetentionLimit"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.snapshotRetentionLimit(value: number)
```

Generates a condition block for `elasticache:SnapshotRetentionLimit`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.snapshotRetentionLimit.parameter.value"></a>

- *Type:* number

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.tagKeys"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `transitEncryptionEnabled` <a name="transitEncryptionEnabled" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.transitEncryptionEnabled"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.transitEncryptionEnabled(value: boolean)
```

Generates a condition block for `elasticache:TransitEncryptionEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.transitEncryptionEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `userAuthenticationMode` <a name="userAuthenticationMode" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.userAuthenticationMode"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheConditions.userAuthenticationMode(value: string)
```

Generates a condition block for `elasticache:UserAuthenticationMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.userAuthenticationMode.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AT_REST_ENCRYPTION_ENABLED">AT_REST_ENCRYPTION_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:AtRestEncryptionEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AUTH_TOKEN_ENABLED">AUTH_TOKEN_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:AuthTokenEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AuthorizeCacheSecurityGroupIngressConditionKeys">AuthorizeCacheSecurityGroupIngressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AuthorizeCacheSecurityGroupIngress action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AUTOMATIC_FAILOVER_ENABLED">AUTOMATIC_FAILOVER_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:AutomaticFailoverEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.BatchApplyUpdateActionConditionKeys">BatchApplyUpdateActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchApplyUpdateAction action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.BatchStopUpdateActionConditionKeys">BatchStopUpdateActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchStopUpdateAction action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CACHE_NODE_TYPE">CACHE_NODE_TYPE</a></code> | <code>string</code> | Condition key: elasticache:CacheNodeType (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CACHE_PARAMETER_GROUP_NAME">CACHE_PARAMETER_GROUP_NAME</a></code> | <code>string</code> | Condition key: elasticache:CacheParameterGroupName (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CLUSTER_MODE_ENABLED">CLUSTER_MODE_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:ClusterModeEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CompleteMigrationConditionKeys">CompleteMigrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CompleteMigration action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ConnectConditionKeys">ConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Connect action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CopyServerlessCacheSnapshotConditionKeys">CopyServerlessCacheSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopyServerlessCacheSnapshot action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CopySnapshotConditionKeys">CopySnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CopySnapshot action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheClusterConditionKeys">CreateCacheClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCacheCluster action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheParameterGroupConditionKeys">CreateCacheParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCacheParameterGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheSecurityGroupConditionKeys">CreateCacheSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCacheSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheSubnetGroupConditionKeys">CreateCacheSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCacheSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateGlobalReplicationGroupConditionKeys">CreateGlobalReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGlobalReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateReplicationGroupConditionKeys">CreateReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateServerlessCacheConditionKeys">CreateServerlessCacheConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServerlessCache action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateServerlessCacheSnapshotConditionKeys">CreateServerlessCacheSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServerlessCacheSnapshot action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateSnapshotConditionKeys">CreateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshot action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateUserGroupConditionKeys">CreateUserGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DATA_STORAGE_UNIT">DATA_STORAGE_UNIT</a></code> | <code>string</code> | Condition key: elasticache:DataStorageUnit (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys">DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DecreaseNodeGroupsInGlobalReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DecreaseReplicaCountConditionKeys">DecreaseReplicaCountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DecreaseReplicaCount action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheParameterGroupConditionKeys">DeleteCacheParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCacheParameterGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheSecurityGroupConditionKeys">DeleteCacheSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCacheSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheSubnetGroupConditionKeys">DeleteCacheSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCacheSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteSnapshotConditionKeys">DeleteSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSnapshot action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteUserConditionKeys">DeleteUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUser action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteUserGroupConditionKeys">DeleteUserGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUserGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheClustersConditionKeys">DescribeCacheClustersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCacheClusters action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheParameterGroupsConditionKeys">DescribeCacheParameterGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCacheParameterGroups action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheParametersConditionKeys">DescribeCacheParametersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCacheParameters action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheSecurityGroupsConditionKeys">DescribeCacheSecurityGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCacheSecurityGroups action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheSubnetGroupsConditionKeys">DescribeCacheSubnetGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCacheSubnetGroups action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeReplicationGroupsConditionKeys">DescribeReplicationGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReplicationGroups action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeReservedCacheNodesConditionKeys">DescribeReservedCacheNodesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeReservedCacheNodes action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeSnapshotsConditionKeys">DescribeSnapshotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSnapshots action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUpdateActionsConditionKeys">DescribeUpdateActionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUpdateActions action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUserGroupsConditionKeys">DescribeUserGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUserGroups action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUsersConditionKeys">DescribeUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUsers action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DURABILITY">DURABILITY</a></code> | <code>string</code> | Condition key: elasticache:Durability (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ENGINE_TYPE">ENGINE_TYPE</a></code> | <code>string</code> | Condition key: elasticache:EngineType (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ENGINE_VERSION">ENGINE_VERSION</a></code> | <code>string</code> | Condition key: elasticache:EngineVersion (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys">IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IncreaseNodeGroupsInGlobalReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.IncreaseReplicaCountConditionKeys">IncreaseReplicaCountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IncreaseReplicaCount action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.InterruptClusterAzPowerConditionKeys">InterruptClusterAzPowerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InterruptClusterAzPower action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.KMS_KEY_ID">KMS_KEY_ID</a></code> | <code>string</code> | Condition key: elasticache:KmsKeyId (String). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ListAllowedNodeTypeModificationsConditionKeys">ListAllowedNodeTypeModificationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAllowedNodeTypeModifications action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MAXIMUM_DATA_STORAGE">MAXIMUM_DATA_STORAGE</a></code> | <code>string</code> | Condition key: elasticache:MaximumDataStorage (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MAXIMUM_ECPU_PER_SECOND">MAXIMUM_ECPU_PER_SECOND</a></code> | <code>string</code> | Condition key: elasticache:MaximumECPUPerSecond (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MINIMUM_DATA_STORAGE">MINIMUM_DATA_STORAGE</a></code> | <code>string</code> | Condition key: elasticache:MinimumDataStorage (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MINIMUM_ECPU_PER_SECOND">MINIMUM_ECPU_PER_SECOND</a></code> | <code>string</code> | Condition key: elasticache:MinimumECPUPerSecond (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheClusterConditionKeys">ModifyCacheClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyCacheCluster action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheParameterGroupConditionKeys">ModifyCacheParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyCacheParameterGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheSubnetGroupConditionKeys">ModifyCacheSubnetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyCacheSubnetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyGlobalReplicationGroupConditionKeys">ModifyGlobalReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyGlobalReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyReplicationGroupConditionKeys">ModifyReplicationGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyReplicationGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyReplicationGroupShardConfigurationConditionKeys">ModifyReplicationGroupShardConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyReplicationGroupShardConfiguration action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyUserConditionKeys">ModifyUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyUser action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyUserGroupConditionKeys">ModifyUserGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyUserGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MULTI_AZ_ENABLED">MULTI_AZ_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:MultiAZEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.NUM_NODE_GROUPS">NUM_NODE_GROUPS</a></code> | <code>string</code> | Condition key: elasticache:NumNodeGroups (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.PurchaseReservedCacheNodesOfferingConditionKeys">PurchaseReservedCacheNodesOfferingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PurchaseReservedCacheNodesOffering action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RebootCacheClusterConditionKeys">RebootCacheClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RebootCacheCluster action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.REPLICAS_PER_NODE_GROUP">REPLICAS_PER_NODE_GROUP</a></code> | <code>string</code> | Condition key: elasticache:ReplicasPerNodeGroup (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ResetCacheParameterGroupConditionKeys">ResetCacheParameterGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResetCacheParameterGroup action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RevokeCacheSecurityGroupIngressConditionKeys">RevokeCacheSecurityGroupIngressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeCacheSecurityGroupIngress action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.SNAPSHOT_RETENTION_LIMIT">SNAPSHOT_RETENTION_LIMIT</a></code> | <code>string</code> | Condition key: elasticache:SnapshotRetentionLimit (Numeric). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.StartMigrationConditionKeys">StartMigrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartMigration action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TestFailoverConditionKeys">TestFailoverConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TestFailover action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TestMigrationConditionKeys">TestMigrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TestMigration action. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TRANSIT_ENCRYPTION_ENABLED">TRANSIT_ENCRYPTION_ENABLED</a></code> | <code>string</code> | Condition key: elasticache:TransitEncryptionEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheConditions.property.USER_AUTHENTICATION_MODE">USER_AUTHENTICATION_MODE</a></code> | <code>string</code> | Condition key: elasticache:UserAuthenticationMode (String). |

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `AT_REST_ENCRYPTION_ENABLED`<sup>Required</sup> <a name="AT_REST_ENCRYPTION_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AT_REST_ENCRYPTION_ENABLED"></a>

```typescript
public readonly AT_REST_ENCRYPTION_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:AtRestEncryptionEnabled (Bool).

---

##### `AUTH_TOKEN_ENABLED`<sup>Required</sup> <a name="AUTH_TOKEN_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AUTH_TOKEN_ENABLED"></a>

```typescript
public readonly AUTH_TOKEN_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:AuthTokenEnabled (Bool).

---

##### `AuthorizeCacheSecurityGroupIngressConditionKeys`<sup>Required</sup> <a name="AuthorizeCacheSecurityGroupIngressConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AuthorizeCacheSecurityGroupIngressConditionKeys"></a>

```typescript
public readonly AuthorizeCacheSecurityGroupIngressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AuthorizeCacheSecurityGroupIngress action.

---

##### `AUTOMATIC_FAILOVER_ENABLED`<sup>Required</sup> <a name="AUTOMATIC_FAILOVER_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AUTOMATIC_FAILOVER_ENABLED"></a>

```typescript
public readonly AUTOMATIC_FAILOVER_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:AutomaticFailoverEnabled (Bool).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchApplyUpdateActionConditionKeys`<sup>Required</sup> <a name="BatchApplyUpdateActionConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.BatchApplyUpdateActionConditionKeys"></a>

```typescript
public readonly BatchApplyUpdateActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchApplyUpdateAction action.

---

##### `BatchStopUpdateActionConditionKeys`<sup>Required</sup> <a name="BatchStopUpdateActionConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.BatchStopUpdateActionConditionKeys"></a>

```typescript
public readonly BatchStopUpdateActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchStopUpdateAction action.

---

##### `CACHE_NODE_TYPE`<sup>Required</sup> <a name="CACHE_NODE_TYPE" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CACHE_NODE_TYPE"></a>

```typescript
public readonly CACHE_NODE_TYPE: string;
```

- *Type:* string

Condition key: elasticache:CacheNodeType (String).

---

##### `CACHE_PARAMETER_GROUP_NAME`<sup>Required</sup> <a name="CACHE_PARAMETER_GROUP_NAME" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CACHE_PARAMETER_GROUP_NAME"></a>

```typescript
public readonly CACHE_PARAMETER_GROUP_NAME: string;
```

- *Type:* string

Condition key: elasticache:CacheParameterGroupName (String).

---

##### `CLUSTER_MODE_ENABLED`<sup>Required</sup> <a name="CLUSTER_MODE_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CLUSTER_MODE_ENABLED"></a>

```typescript
public readonly CLUSTER_MODE_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:ClusterModeEnabled (Bool).

---

##### `CompleteMigrationConditionKeys`<sup>Required</sup> <a name="CompleteMigrationConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CompleteMigrationConditionKeys"></a>

```typescript
public readonly CompleteMigrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CompleteMigration action.

---

##### `ConnectConditionKeys`<sup>Required</sup> <a name="ConnectConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ConnectConditionKeys"></a>

```typescript
public readonly ConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Connect action.

---

##### `CopyServerlessCacheSnapshotConditionKeys`<sup>Required</sup> <a name="CopyServerlessCacheSnapshotConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CopyServerlessCacheSnapshotConditionKeys"></a>

```typescript
public readonly CopyServerlessCacheSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopyServerlessCacheSnapshot action.

---

##### `CopySnapshotConditionKeys`<sup>Required</sup> <a name="CopySnapshotConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CopySnapshotConditionKeys"></a>

```typescript
public readonly CopySnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CopySnapshot action.

---

##### `CreateCacheClusterConditionKeys`<sup>Required</sup> <a name="CreateCacheClusterConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheClusterConditionKeys"></a>

```typescript
public readonly CreateCacheClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCacheCluster action.

---

##### `CreateCacheParameterGroupConditionKeys`<sup>Required</sup> <a name="CreateCacheParameterGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheParameterGroupConditionKeys"></a>

```typescript
public readonly CreateCacheParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCacheParameterGroup action.

---

##### `CreateCacheSecurityGroupConditionKeys`<sup>Required</sup> <a name="CreateCacheSecurityGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheSecurityGroupConditionKeys"></a>

```typescript
public readonly CreateCacheSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCacheSecurityGroup action.

---

##### `CreateCacheSubnetGroupConditionKeys`<sup>Required</sup> <a name="CreateCacheSubnetGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateCacheSubnetGroupConditionKeys"></a>

```typescript
public readonly CreateCacheSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCacheSubnetGroup action.

---

##### `CreateGlobalReplicationGroupConditionKeys`<sup>Required</sup> <a name="CreateGlobalReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateGlobalReplicationGroupConditionKeys"></a>

```typescript
public readonly CreateGlobalReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGlobalReplicationGroup action.

---

##### `CreateReplicationGroupConditionKeys`<sup>Required</sup> <a name="CreateReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateReplicationGroupConditionKeys"></a>

```typescript
public readonly CreateReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicationGroup action.

---

##### `CreateServerlessCacheConditionKeys`<sup>Required</sup> <a name="CreateServerlessCacheConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateServerlessCacheConditionKeys"></a>

```typescript
public readonly CreateServerlessCacheConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServerlessCache action.

---

##### `CreateServerlessCacheSnapshotConditionKeys`<sup>Required</sup> <a name="CreateServerlessCacheSnapshotConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateServerlessCacheSnapshotConditionKeys"></a>

```typescript
public readonly CreateServerlessCacheSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServerlessCacheSnapshot action.

---

##### `CreateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateSnapshotConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateSnapshotConditionKeys"></a>

```typescript
public readonly CreateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshot action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `CreateUserGroupConditionKeys`<sup>Required</sup> <a name="CreateUserGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.CreateUserGroupConditionKeys"></a>

```typescript
public readonly CreateUserGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserGroup action.

---

##### `DATA_STORAGE_UNIT`<sup>Required</sup> <a name="DATA_STORAGE_UNIT" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DATA_STORAGE_UNIT"></a>

```typescript
public readonly DATA_STORAGE_UNIT: string;
```

- *Type:* string

Condition key: elasticache:DataStorageUnit (String).

---

##### `DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys`<sup>Required</sup> <a name="DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys"></a>

```typescript
public readonly DecreaseNodeGroupsInGlobalReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DecreaseNodeGroupsInGlobalReplicationGroup action.

---

##### `DecreaseReplicaCountConditionKeys`<sup>Required</sup> <a name="DecreaseReplicaCountConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DecreaseReplicaCountConditionKeys"></a>

```typescript
public readonly DecreaseReplicaCountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DecreaseReplicaCount action.

---

##### `DeleteCacheParameterGroupConditionKeys`<sup>Required</sup> <a name="DeleteCacheParameterGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheParameterGroupConditionKeys"></a>

```typescript
public readonly DeleteCacheParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCacheParameterGroup action.

---

##### `DeleteCacheSecurityGroupConditionKeys`<sup>Required</sup> <a name="DeleteCacheSecurityGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheSecurityGroupConditionKeys"></a>

```typescript
public readonly DeleteCacheSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCacheSecurityGroup action.

---

##### `DeleteCacheSubnetGroupConditionKeys`<sup>Required</sup> <a name="DeleteCacheSubnetGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteCacheSubnetGroupConditionKeys"></a>

```typescript
public readonly DeleteCacheSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCacheSubnetGroup action.

---

##### `DeleteSnapshotConditionKeys`<sup>Required</sup> <a name="DeleteSnapshotConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteSnapshotConditionKeys"></a>

```typescript
public readonly DeleteSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSnapshot action.

---

##### `DeleteUserConditionKeys`<sup>Required</sup> <a name="DeleteUserConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteUserConditionKeys"></a>

```typescript
public readonly DeleteUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUser action.

---

##### `DeleteUserGroupConditionKeys`<sup>Required</sup> <a name="DeleteUserGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DeleteUserGroupConditionKeys"></a>

```typescript
public readonly DeleteUserGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUserGroup action.

---

##### `DescribeCacheClustersConditionKeys`<sup>Required</sup> <a name="DescribeCacheClustersConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheClustersConditionKeys"></a>

```typescript
public readonly DescribeCacheClustersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCacheClusters action.

---

##### `DescribeCacheParameterGroupsConditionKeys`<sup>Required</sup> <a name="DescribeCacheParameterGroupsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheParameterGroupsConditionKeys"></a>

```typescript
public readonly DescribeCacheParameterGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCacheParameterGroups action.

---

##### `DescribeCacheParametersConditionKeys`<sup>Required</sup> <a name="DescribeCacheParametersConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheParametersConditionKeys"></a>

```typescript
public readonly DescribeCacheParametersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCacheParameters action.

---

##### `DescribeCacheSecurityGroupsConditionKeys`<sup>Required</sup> <a name="DescribeCacheSecurityGroupsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheSecurityGroupsConditionKeys"></a>

```typescript
public readonly DescribeCacheSecurityGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCacheSecurityGroups action.

---

##### `DescribeCacheSubnetGroupsConditionKeys`<sup>Required</sup> <a name="DescribeCacheSubnetGroupsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeCacheSubnetGroupsConditionKeys"></a>

```typescript
public readonly DescribeCacheSubnetGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCacheSubnetGroups action.

---

##### `DescribeReplicationGroupsConditionKeys`<sup>Required</sup> <a name="DescribeReplicationGroupsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeReplicationGroupsConditionKeys"></a>

```typescript
public readonly DescribeReplicationGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReplicationGroups action.

---

##### `DescribeReservedCacheNodesConditionKeys`<sup>Required</sup> <a name="DescribeReservedCacheNodesConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeReservedCacheNodesConditionKeys"></a>

```typescript
public readonly DescribeReservedCacheNodesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeReservedCacheNodes action.

---

##### `DescribeSnapshotsConditionKeys`<sup>Required</sup> <a name="DescribeSnapshotsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeSnapshotsConditionKeys"></a>

```typescript
public readonly DescribeSnapshotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSnapshots action.

---

##### `DescribeUpdateActionsConditionKeys`<sup>Required</sup> <a name="DescribeUpdateActionsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUpdateActionsConditionKeys"></a>

```typescript
public readonly DescribeUpdateActionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUpdateActions action.

---

##### `DescribeUserGroupsConditionKeys`<sup>Required</sup> <a name="DescribeUserGroupsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUserGroupsConditionKeys"></a>

```typescript
public readonly DescribeUserGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUserGroups action.

---

##### `DescribeUsersConditionKeys`<sup>Required</sup> <a name="DescribeUsersConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DescribeUsersConditionKeys"></a>

```typescript
public readonly DescribeUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUsers action.

---

##### `DURABILITY`<sup>Required</sup> <a name="DURABILITY" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.DURABILITY"></a>

```typescript
public readonly DURABILITY: string;
```

- *Type:* string

Condition key: elasticache:Durability (String).

---

##### `ENGINE_TYPE`<sup>Required</sup> <a name="ENGINE_TYPE" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ENGINE_TYPE"></a>

```typescript
public readonly ENGINE_TYPE: string;
```

- *Type:* string

Condition key: elasticache:EngineType (String).

---

##### `ENGINE_VERSION`<sup>Required</sup> <a name="ENGINE_VERSION" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ENGINE_VERSION"></a>

```typescript
public readonly ENGINE_VERSION: string;
```

- *Type:* string

Condition key: elasticache:EngineVersion (String).

---

##### `IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys`<sup>Required</sup> <a name="IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys"></a>

```typescript
public readonly IncreaseNodeGroupsInGlobalReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IncreaseNodeGroupsInGlobalReplicationGroup action.

---

##### `IncreaseReplicaCountConditionKeys`<sup>Required</sup> <a name="IncreaseReplicaCountConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.IncreaseReplicaCountConditionKeys"></a>

```typescript
public readonly IncreaseReplicaCountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IncreaseReplicaCount action.

---

##### `InterruptClusterAzPowerConditionKeys`<sup>Required</sup> <a name="InterruptClusterAzPowerConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.InterruptClusterAzPowerConditionKeys"></a>

```typescript
public readonly InterruptClusterAzPowerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InterruptClusterAzPower action.

---

##### `KMS_KEY_ID`<sup>Required</sup> <a name="KMS_KEY_ID" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.KMS_KEY_ID"></a>

```typescript
public readonly KMS_KEY_ID: string;
```

- *Type:* string

Condition key: elasticache:KmsKeyId (String).

---

##### `ListAllowedNodeTypeModificationsConditionKeys`<sup>Required</sup> <a name="ListAllowedNodeTypeModificationsConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ListAllowedNodeTypeModificationsConditionKeys"></a>

```typescript
public readonly ListAllowedNodeTypeModificationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAllowedNodeTypeModifications action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `MAXIMUM_DATA_STORAGE`<sup>Required</sup> <a name="MAXIMUM_DATA_STORAGE" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MAXIMUM_DATA_STORAGE"></a>

```typescript
public readonly MAXIMUM_DATA_STORAGE: string;
```

- *Type:* string

Condition key: elasticache:MaximumDataStorage (Numeric).

---

##### `MAXIMUM_ECPU_PER_SECOND`<sup>Required</sup> <a name="MAXIMUM_ECPU_PER_SECOND" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MAXIMUM_ECPU_PER_SECOND"></a>

```typescript
public readonly MAXIMUM_ECPU_PER_SECOND: string;
```

- *Type:* string

Condition key: elasticache:MaximumECPUPerSecond (Numeric).

---

##### `MINIMUM_DATA_STORAGE`<sup>Required</sup> <a name="MINIMUM_DATA_STORAGE" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MINIMUM_DATA_STORAGE"></a>

```typescript
public readonly MINIMUM_DATA_STORAGE: string;
```

- *Type:* string

Condition key: elasticache:MinimumDataStorage (Numeric).

---

##### `MINIMUM_ECPU_PER_SECOND`<sup>Required</sup> <a name="MINIMUM_ECPU_PER_SECOND" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MINIMUM_ECPU_PER_SECOND"></a>

```typescript
public readonly MINIMUM_ECPU_PER_SECOND: string;
```

- *Type:* string

Condition key: elasticache:MinimumECPUPerSecond (Numeric).

---

##### `ModifyCacheClusterConditionKeys`<sup>Required</sup> <a name="ModifyCacheClusterConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheClusterConditionKeys"></a>

```typescript
public readonly ModifyCacheClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyCacheCluster action.

---

##### `ModifyCacheParameterGroupConditionKeys`<sup>Required</sup> <a name="ModifyCacheParameterGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheParameterGroupConditionKeys"></a>

```typescript
public readonly ModifyCacheParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyCacheParameterGroup action.

---

##### `ModifyCacheSubnetGroupConditionKeys`<sup>Required</sup> <a name="ModifyCacheSubnetGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyCacheSubnetGroupConditionKeys"></a>

```typescript
public readonly ModifyCacheSubnetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyCacheSubnetGroup action.

---

##### `ModifyGlobalReplicationGroupConditionKeys`<sup>Required</sup> <a name="ModifyGlobalReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyGlobalReplicationGroupConditionKeys"></a>

```typescript
public readonly ModifyGlobalReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyGlobalReplicationGroup action.

---

##### `ModifyReplicationGroupConditionKeys`<sup>Required</sup> <a name="ModifyReplicationGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyReplicationGroupConditionKeys"></a>

```typescript
public readonly ModifyReplicationGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyReplicationGroup action.

---

##### `ModifyReplicationGroupShardConfigurationConditionKeys`<sup>Required</sup> <a name="ModifyReplicationGroupShardConfigurationConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyReplicationGroupShardConfigurationConditionKeys"></a>

```typescript
public readonly ModifyReplicationGroupShardConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyReplicationGroupShardConfiguration action.

---

##### `ModifyUserConditionKeys`<sup>Required</sup> <a name="ModifyUserConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyUserConditionKeys"></a>

```typescript
public readonly ModifyUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyUser action.

---

##### `ModifyUserGroupConditionKeys`<sup>Required</sup> <a name="ModifyUserGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ModifyUserGroupConditionKeys"></a>

```typescript
public readonly ModifyUserGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyUserGroup action.

---

##### `MULTI_AZ_ENABLED`<sup>Required</sup> <a name="MULTI_AZ_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.MULTI_AZ_ENABLED"></a>

```typescript
public readonly MULTI_AZ_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:MultiAZEnabled (Bool).

---

##### `NUM_NODE_GROUPS`<sup>Required</sup> <a name="NUM_NODE_GROUPS" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.NUM_NODE_GROUPS"></a>

```typescript
public readonly NUM_NODE_GROUPS: string;
```

- *Type:* string

Condition key: elasticache:NumNodeGroups (Numeric).

---

##### `PurchaseReservedCacheNodesOfferingConditionKeys`<sup>Required</sup> <a name="PurchaseReservedCacheNodesOfferingConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.PurchaseReservedCacheNodesOfferingConditionKeys"></a>

```typescript
public readonly PurchaseReservedCacheNodesOfferingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PurchaseReservedCacheNodesOffering action.

---

##### `RebootCacheClusterConditionKeys`<sup>Required</sup> <a name="RebootCacheClusterConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RebootCacheClusterConditionKeys"></a>

```typescript
public readonly RebootCacheClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RebootCacheCluster action.

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

##### `REPLICAS_PER_NODE_GROUP`<sup>Required</sup> <a name="REPLICAS_PER_NODE_GROUP" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.REPLICAS_PER_NODE_GROUP"></a>

```typescript
public readonly REPLICAS_PER_NODE_GROUP: string;
```

- *Type:* string

Condition key: elasticache:ReplicasPerNodeGroup (Numeric).

---

##### `ResetCacheParameterGroupConditionKeys`<sup>Required</sup> <a name="ResetCacheParameterGroupConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.ResetCacheParameterGroupConditionKeys"></a>

```typescript
public readonly ResetCacheParameterGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResetCacheParameterGroup action.

---

##### `RevokeCacheSecurityGroupIngressConditionKeys`<sup>Required</sup> <a name="RevokeCacheSecurityGroupIngressConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.RevokeCacheSecurityGroupIngressConditionKeys"></a>

```typescript
public readonly RevokeCacheSecurityGroupIngressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeCacheSecurityGroupIngress action.

---

##### `SNAPSHOT_RETENTION_LIMIT`<sup>Required</sup> <a name="SNAPSHOT_RETENTION_LIMIT" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.SNAPSHOT_RETENTION_LIMIT"></a>

```typescript
public readonly SNAPSHOT_RETENTION_LIMIT: string;
```

- *Type:* string

Condition key: elasticache:SnapshotRetentionLimit (Numeric).

---

##### `StartMigrationConditionKeys`<sup>Required</sup> <a name="StartMigrationConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.StartMigrationConditionKeys"></a>

```typescript
public readonly StartMigrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartMigration action.

---

##### `TestFailoverConditionKeys`<sup>Required</sup> <a name="TestFailoverConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TestFailoverConditionKeys"></a>

```typescript
public readonly TestFailoverConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TestFailover action.

---

##### `TestMigrationConditionKeys`<sup>Required</sup> <a name="TestMigrationConditionKeys" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TestMigrationConditionKeys"></a>

```typescript
public readonly TestMigrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TestMigration action.

---

##### `TRANSIT_ENCRYPTION_ENABLED`<sup>Required</sup> <a name="TRANSIT_ENCRYPTION_ENABLED" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.TRANSIT_ENCRYPTION_ENABLED"></a>

```typescript
public readonly TRANSIT_ENCRYPTION_ENABLED: string;
```

- *Type:* string

Condition key: elasticache:TransitEncryptionEnabled (Bool).

---

##### `USER_AUTHENTICATION_MODE`<sup>Required</sup> <a name="USER_AUTHENTICATION_MODE" id="@cdk_utils/iam.elasticache.ElastiCacheConditions.property.USER_AUTHENTICATION_MODE"></a>

```typescript
public readonly USER_AUTHENTICATION_MODE: string;
```

- *Type:* string

Condition key: elasticache:UserAuthenticationMode (String).

---

### ElastiCacheOperations <a name="ElastiCacheOperations" id="@cdk_utils/iam.elasticache.ElastiCacheOperations"></a>

API operation to required IAM actions mapping for elasticache.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

new elasticache.ElastiCacheOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.AuthorizeCacheSecurityGroupIngress">AuthorizeCacheSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the AuthorizeCacheSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.BatchApplyUpdateAction">BatchApplyUpdateAction</a></code> | <code>string[]</code> | IAM actions required for the BatchApplyUpdateAction API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.BatchStopUpdateAction">BatchStopUpdateAction</a></code> | <code>string[]</code> | IAM actions required for the BatchStopUpdateAction API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CompleteMigration">CompleteMigration</a></code> | <code>string[]</code> | IAM actions required for the CompleteMigration API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CopyServerlessCacheSnapshot">CopyServerlessCacheSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopyServerlessCacheSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CopySnapshot">CopySnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopySnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheCluster">CreateCacheCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCacheCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheParameterGroup">CreateCacheParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCacheParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheSecurityGroup">CreateCacheSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCacheSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheSubnetGroup">CreateCacheSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCacheSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateGlobalReplicationGroup">CreateGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateReplicationGroup">CreateReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateServerlessCache">CreateServerlessCache</a></code> | <code>string[]</code> | IAM actions required for the CreateServerlessCache API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateServerlessCacheSnapshot">CreateServerlessCacheSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateServerlessCacheSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateUserGroup">CreateUserGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateUserGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DecreaseNodeGroupsInGlobalReplicationGroup">DecreaseNodeGroupsInGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the DecreaseNodeGroupsInGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DecreaseReplicaCount">DecreaseReplicaCount</a></code> | <code>string[]</code> | IAM actions required for the DecreaseReplicaCount API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheCluster">DeleteCacheCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCacheCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheParameterGroup">DeleteCacheParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCacheParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheSecurityGroup">DeleteCacheSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCacheSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheSubnetGroup">DeleteCacheSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCacheSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteGlobalReplicationGroup">DeleteGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteReplicationGroup">DeleteReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteServerlessCache">DeleteServerlessCache</a></code> | <code>string[]</code> | IAM actions required for the DeleteServerlessCache API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteServerlessCacheSnapshot">DeleteServerlessCacheSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteServerlessCacheSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteSnapshot">DeleteSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteUserGroup">DeleteUserGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheClusters">DescribeCacheClusters</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheClusters API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheEngineVersions">DescribeCacheEngineVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheEngineVersions API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheParameterGroups">DescribeCacheParameterGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheParameterGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheParameters">DescribeCacheParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheParameters API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheSecurityGroups">DescribeCacheSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheSubnetGroups">DescribeCacheSubnetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheSubnetGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeEngineDefaultParameters">DescribeEngineDefaultParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeEngineDefaultParameters API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeEvents">DescribeEvents</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvents API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeGlobalReplicationGroups">DescribeGlobalReplicationGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalReplicationGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReplicationGroups">DescribeReplicationGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicationGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReservedCacheNodes">DescribeReservedCacheNodes</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedCacheNodes API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReservedCacheNodesOfferings">DescribeReservedCacheNodesOfferings</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservedCacheNodesOfferings API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServerlessCaches">DescribeServerlessCaches</a></code> | <code>string[]</code> | IAM actions required for the DescribeServerlessCaches API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServerlessCacheSnapshots">DescribeServerlessCacheSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeServerlessCacheSnapshots API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServiceUpdates">DescribeServiceUpdates</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceUpdates API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeSnapshots">DescribeSnapshots</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshots API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUpdateActions">DescribeUpdateActions</a></code> | <code>string[]</code> | IAM actions required for the DescribeUpdateActions API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUserGroups">DescribeUserGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUsers">DescribeUsers</a></code> | <code>string[]</code> | IAM actions required for the DescribeUsers API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DisassociateGlobalReplicationGroup">DisassociateGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ExportServerlessCacheSnapshot">ExportServerlessCacheSnapshot</a></code> | <code>string[]</code> | IAM actions required for the ExportServerlessCacheSnapshot API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.FailoverGlobalReplicationGroup">FailoverGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the FailoverGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.IncreaseNodeGroupsInGlobalReplicationGroup">IncreaseNodeGroupsInGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the IncreaseNodeGroupsInGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.IncreaseReplicaCount">IncreaseReplicaCount</a></code> | <code>string[]</code> | IAM actions required for the IncreaseReplicaCount API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ListAllowedNodeTypeModifications">ListAllowedNodeTypeModifications</a></code> | <code>string[]</code> | IAM actions required for the ListAllowedNodeTypeModifications API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheCluster">ModifyCacheCluster</a></code> | <code>string[]</code> | IAM actions required for the ModifyCacheCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheParameterGroup">ModifyCacheParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyCacheParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheSubnetGroup">ModifyCacheSubnetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyCacheSubnetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyGlobalReplicationGroup">ModifyGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyReplicationGroup">ModifyReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyReplicationGroupShardConfiguration">ModifyReplicationGroupShardConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ModifyReplicationGroupShardConfiguration API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyServerlessCache">ModifyServerlessCache</a></code> | <code>string[]</code> | IAM actions required for the ModifyServerlessCache API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyUser">ModifyUser</a></code> | <code>string[]</code> | IAM actions required for the ModifyUser API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyUserGroup">ModifyUserGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyUserGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.PurchaseReservedCacheNodesOffering">PurchaseReservedCacheNodesOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseReservedCacheNodesOffering API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RebalanceSlotsInGlobalReplicationGroup">RebalanceSlotsInGlobalReplicationGroup</a></code> | <code>string[]</code> | IAM actions required for the RebalanceSlotsInGlobalReplicationGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RebootCacheCluster">RebootCacheCluster</a></code> | <code>string[]</code> | IAM actions required for the RebootCacheCluster API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ResetCacheParameterGroup">ResetCacheParameterGroup</a></code> | <code>string[]</code> | IAM actions required for the ResetCacheParameterGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RevokeCacheSecurityGroupIngress">RevokeCacheSecurityGroupIngress</a></code> | <code>string[]</code> | IAM actions required for the RevokeCacheSecurityGroupIngress API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.StartMigration">StartMigration</a></code> | <code>string[]</code> | IAM actions required for the StartMigration API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.TestFailover">TestFailover</a></code> | <code>string[]</code> | IAM actions required for the TestFailover API call. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheOperations.property.TestMigration">TestMigration</a></code> | <code>string[]</code> | IAM actions required for the TestMigration API call. |

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `AuthorizeCacheSecurityGroupIngress`<sup>Required</sup> <a name="AuthorizeCacheSecurityGroupIngress" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.AuthorizeCacheSecurityGroupIngress"></a>

```typescript
public readonly AuthorizeCacheSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the AuthorizeCacheSecurityGroupIngress API call.

---

##### `BatchApplyUpdateAction`<sup>Required</sup> <a name="BatchApplyUpdateAction" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.BatchApplyUpdateAction"></a>

```typescript
public readonly BatchApplyUpdateAction: string[];
```

- *Type:* string[]

IAM actions required for the BatchApplyUpdateAction API call.

---

##### `BatchStopUpdateAction`<sup>Required</sup> <a name="BatchStopUpdateAction" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.BatchStopUpdateAction"></a>

```typescript
public readonly BatchStopUpdateAction: string[];
```

- *Type:* string[]

IAM actions required for the BatchStopUpdateAction API call.

---

##### `CompleteMigration`<sup>Required</sup> <a name="CompleteMigration" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CompleteMigration"></a>

```typescript
public readonly CompleteMigration: string[];
```

- *Type:* string[]

IAM actions required for the CompleteMigration API call.

---

##### `CopyServerlessCacheSnapshot`<sup>Required</sup> <a name="CopyServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CopyServerlessCacheSnapshot"></a>

```typescript
public readonly CopyServerlessCacheSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopyServerlessCacheSnapshot API call.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopySnapshot API call.

---

##### `CreateCacheCluster`<sup>Required</sup> <a name="CreateCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheCluster"></a>

```typescript
public readonly CreateCacheCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCacheCluster API call.

---

##### `CreateCacheParameterGroup`<sup>Required</sup> <a name="CreateCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheParameterGroup"></a>

```typescript
public readonly CreateCacheParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCacheParameterGroup API call.

---

##### `CreateCacheSecurityGroup`<sup>Required</sup> <a name="CreateCacheSecurityGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheSecurityGroup"></a>

```typescript
public readonly CreateCacheSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCacheSecurityGroup API call.

---

##### `CreateCacheSubnetGroup`<sup>Required</sup> <a name="CreateCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateCacheSubnetGroup"></a>

```typescript
public readonly CreateCacheSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCacheSubnetGroup API call.

---

##### `CreateGlobalReplicationGroup`<sup>Required</sup> <a name="CreateGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateGlobalReplicationGroup"></a>

```typescript
public readonly CreateGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlobalReplicationGroup API call.

---

##### `CreateReplicationGroup`<sup>Required</sup> <a name="CreateReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateReplicationGroup"></a>

```typescript
public readonly CreateReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicationGroup API call.

---

##### `CreateServerlessCache`<sup>Required</sup> <a name="CreateServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateServerlessCache"></a>

```typescript
public readonly CreateServerlessCache: string[];
```

- *Type:* string[]

IAM actions required for the CreateServerlessCache API call.

---

##### `CreateServerlessCacheSnapshot`<sup>Required</sup> <a name="CreateServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateServerlessCacheSnapshot"></a>

```typescript
public readonly CreateServerlessCacheSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateServerlessCacheSnapshot API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateUserGroup`<sup>Required</sup> <a name="CreateUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.CreateUserGroup"></a>

```typescript
public readonly CreateUserGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserGroup API call.

---

##### `DecreaseNodeGroupsInGlobalReplicationGroup`<sup>Required</sup> <a name="DecreaseNodeGroupsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DecreaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public readonly DecreaseNodeGroupsInGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the DecreaseNodeGroupsInGlobalReplicationGroup API call.

---

##### `DecreaseReplicaCount`<sup>Required</sup> <a name="DecreaseReplicaCount" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DecreaseReplicaCount"></a>

```typescript
public readonly DecreaseReplicaCount: string[];
```

- *Type:* string[]

IAM actions required for the DecreaseReplicaCount API call.

---

##### `DeleteCacheCluster`<sup>Required</sup> <a name="DeleteCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheCluster"></a>

```typescript
public readonly DeleteCacheCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCacheCluster API call.

---

##### `DeleteCacheParameterGroup`<sup>Required</sup> <a name="DeleteCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheParameterGroup"></a>

```typescript
public readonly DeleteCacheParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCacheParameterGroup API call.

---

##### `DeleteCacheSecurityGroup`<sup>Required</sup> <a name="DeleteCacheSecurityGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheSecurityGroup"></a>

```typescript
public readonly DeleteCacheSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCacheSecurityGroup API call.

---

##### `DeleteCacheSubnetGroup`<sup>Required</sup> <a name="DeleteCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteCacheSubnetGroup"></a>

```typescript
public readonly DeleteCacheSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCacheSubnetGroup API call.

---

##### `DeleteGlobalReplicationGroup`<sup>Required</sup> <a name="DeleteGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteGlobalReplicationGroup"></a>

```typescript
public readonly DeleteGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlobalReplicationGroup API call.

---

##### `DeleteReplicationGroup`<sup>Required</sup> <a name="DeleteReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteReplicationGroup"></a>

```typescript
public readonly DeleteReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicationGroup API call.

---

##### `DeleteServerlessCache`<sup>Required</sup> <a name="DeleteServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteServerlessCache"></a>

```typescript
public readonly DeleteServerlessCache: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServerlessCache API call.

---

##### `DeleteServerlessCacheSnapshot`<sup>Required</sup> <a name="DeleteServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteServerlessCacheSnapshot"></a>

```typescript
public readonly DeleteServerlessCacheSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServerlessCacheSnapshot API call.

---

##### `DeleteSnapshot`<sup>Required</sup> <a name="DeleteSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteSnapshot"></a>

```typescript
public readonly DeleteSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshot API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteUserGroup`<sup>Required</sup> <a name="DeleteUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DeleteUserGroup"></a>

```typescript
public readonly DeleteUserGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserGroup API call.

---

##### `DescribeCacheClusters`<sup>Required</sup> <a name="DescribeCacheClusters" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheClusters"></a>

```typescript
public readonly DescribeCacheClusters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheClusters API call.

---

##### `DescribeCacheEngineVersions`<sup>Required</sup> <a name="DescribeCacheEngineVersions" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheEngineVersions"></a>

```typescript
public readonly DescribeCacheEngineVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheEngineVersions API call.

---

##### `DescribeCacheParameterGroups`<sup>Required</sup> <a name="DescribeCacheParameterGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheParameterGroups"></a>

```typescript
public readonly DescribeCacheParameterGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheParameterGroups API call.

---

##### `DescribeCacheParameters`<sup>Required</sup> <a name="DescribeCacheParameters" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheParameters"></a>

```typescript
public readonly DescribeCacheParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheParameters API call.

---

##### `DescribeCacheSecurityGroups`<sup>Required</sup> <a name="DescribeCacheSecurityGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheSecurityGroups"></a>

```typescript
public readonly DescribeCacheSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheSecurityGroups API call.

---

##### `DescribeCacheSubnetGroups`<sup>Required</sup> <a name="DescribeCacheSubnetGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeCacheSubnetGroups"></a>

```typescript
public readonly DescribeCacheSubnetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheSubnetGroups API call.

---

##### `DescribeEngineDefaultParameters`<sup>Required</sup> <a name="DescribeEngineDefaultParameters" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeEngineDefaultParameters"></a>

```typescript
public readonly DescribeEngineDefaultParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEngineDefaultParameters API call.

---

##### `DescribeEvents`<sup>Required</sup> <a name="DescribeEvents" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeEvents"></a>

```typescript
public readonly DescribeEvents: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvents API call.

---

##### `DescribeGlobalReplicationGroups`<sup>Required</sup> <a name="DescribeGlobalReplicationGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeGlobalReplicationGroups"></a>

```typescript
public readonly DescribeGlobalReplicationGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalReplicationGroups API call.

---

##### `DescribeReplicationGroups`<sup>Required</sup> <a name="DescribeReplicationGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReplicationGroups"></a>

```typescript
public readonly DescribeReplicationGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicationGroups API call.

---

##### `DescribeReservedCacheNodes`<sup>Required</sup> <a name="DescribeReservedCacheNodes" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReservedCacheNodes"></a>

```typescript
public readonly DescribeReservedCacheNodes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedCacheNodes API call.

---

##### `DescribeReservedCacheNodesOfferings`<sup>Required</sup> <a name="DescribeReservedCacheNodesOfferings" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeReservedCacheNodesOfferings"></a>

```typescript
public readonly DescribeReservedCacheNodesOfferings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservedCacheNodesOfferings API call.

---

##### `DescribeServerlessCaches`<sup>Required</sup> <a name="DescribeServerlessCaches" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServerlessCaches"></a>

```typescript
public readonly DescribeServerlessCaches: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServerlessCaches API call.

---

##### `DescribeServerlessCacheSnapshots`<sup>Required</sup> <a name="DescribeServerlessCacheSnapshots" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServerlessCacheSnapshots"></a>

```typescript
public readonly DescribeServerlessCacheSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServerlessCacheSnapshots API call.

---

##### `DescribeServiceUpdates`<sup>Required</sup> <a name="DescribeServiceUpdates" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeServiceUpdates"></a>

```typescript
public readonly DescribeServiceUpdates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceUpdates API call.

---

##### `DescribeSnapshots`<sup>Required</sup> <a name="DescribeSnapshots" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeSnapshots"></a>

```typescript
public readonly DescribeSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshots API call.

---

##### `DescribeUpdateActions`<sup>Required</sup> <a name="DescribeUpdateActions" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUpdateActions"></a>

```typescript
public readonly DescribeUpdateActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUpdateActions API call.

---

##### `DescribeUserGroups`<sup>Required</sup> <a name="DescribeUserGroups" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUserGroups"></a>

```typescript
public readonly DescribeUserGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserGroups API call.

---

##### `DescribeUsers`<sup>Required</sup> <a name="DescribeUsers" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DescribeUsers"></a>

```typescript
public readonly DescribeUsers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUsers API call.

---

##### `DisassociateGlobalReplicationGroup`<sup>Required</sup> <a name="DisassociateGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.DisassociateGlobalReplicationGroup"></a>

```typescript
public readonly DisassociateGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateGlobalReplicationGroup API call.

---

##### `ExportServerlessCacheSnapshot`<sup>Required</sup> <a name="ExportServerlessCacheSnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ExportServerlessCacheSnapshot"></a>

```typescript
public readonly ExportServerlessCacheSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the ExportServerlessCacheSnapshot API call.

---

##### `FailoverGlobalReplicationGroup`<sup>Required</sup> <a name="FailoverGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.FailoverGlobalReplicationGroup"></a>

```typescript
public readonly FailoverGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the FailoverGlobalReplicationGroup API call.

---

##### `IncreaseNodeGroupsInGlobalReplicationGroup`<sup>Required</sup> <a name="IncreaseNodeGroupsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.IncreaseNodeGroupsInGlobalReplicationGroup"></a>

```typescript
public readonly IncreaseNodeGroupsInGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the IncreaseNodeGroupsInGlobalReplicationGroup API call.

---

##### `IncreaseReplicaCount`<sup>Required</sup> <a name="IncreaseReplicaCount" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.IncreaseReplicaCount"></a>

```typescript
public readonly IncreaseReplicaCount: string[];
```

- *Type:* string[]

IAM actions required for the IncreaseReplicaCount API call.

---

##### `ListAllowedNodeTypeModifications`<sup>Required</sup> <a name="ListAllowedNodeTypeModifications" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ListAllowedNodeTypeModifications"></a>

```typescript
public readonly ListAllowedNodeTypeModifications: string[];
```

- *Type:* string[]

IAM actions required for the ListAllowedNodeTypeModifications API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyCacheCluster`<sup>Required</sup> <a name="ModifyCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheCluster"></a>

```typescript
public readonly ModifyCacheCluster: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCacheCluster API call.

---

##### `ModifyCacheParameterGroup`<sup>Required</sup> <a name="ModifyCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheParameterGroup"></a>

```typescript
public readonly ModifyCacheParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCacheParameterGroup API call.

---

##### `ModifyCacheSubnetGroup`<sup>Required</sup> <a name="ModifyCacheSubnetGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyCacheSubnetGroup"></a>

```typescript
public readonly ModifyCacheSubnetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCacheSubnetGroup API call.

---

##### `ModifyGlobalReplicationGroup`<sup>Required</sup> <a name="ModifyGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyGlobalReplicationGroup"></a>

```typescript
public readonly ModifyGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyGlobalReplicationGroup API call.

---

##### `ModifyReplicationGroup`<sup>Required</sup> <a name="ModifyReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyReplicationGroup"></a>

```typescript
public readonly ModifyReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationGroup API call.

---

##### `ModifyReplicationGroupShardConfiguration`<sup>Required</sup> <a name="ModifyReplicationGroupShardConfiguration" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyReplicationGroupShardConfiguration"></a>

```typescript
public readonly ModifyReplicationGroupShardConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReplicationGroupShardConfiguration API call.

---

##### `ModifyServerlessCache`<sup>Required</sup> <a name="ModifyServerlessCache" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyServerlessCache"></a>

```typescript
public readonly ModifyServerlessCache: string[];
```

- *Type:* string[]

IAM actions required for the ModifyServerlessCache API call.

---

##### `ModifyUser`<sup>Required</sup> <a name="ModifyUser" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyUser"></a>

```typescript
public readonly ModifyUser: string[];
```

- *Type:* string[]

IAM actions required for the ModifyUser API call.

---

##### `ModifyUserGroup`<sup>Required</sup> <a name="ModifyUserGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ModifyUserGroup"></a>

```typescript
public readonly ModifyUserGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyUserGroup API call.

---

##### `PurchaseReservedCacheNodesOffering`<sup>Required</sup> <a name="PurchaseReservedCacheNodesOffering" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.PurchaseReservedCacheNodesOffering"></a>

```typescript
public readonly PurchaseReservedCacheNodesOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseReservedCacheNodesOffering API call.

---

##### `RebalanceSlotsInGlobalReplicationGroup`<sup>Required</sup> <a name="RebalanceSlotsInGlobalReplicationGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RebalanceSlotsInGlobalReplicationGroup"></a>

```typescript
public readonly RebalanceSlotsInGlobalReplicationGroup: string[];
```

- *Type:* string[]

IAM actions required for the RebalanceSlotsInGlobalReplicationGroup API call.

---

##### `RebootCacheCluster`<sup>Required</sup> <a name="RebootCacheCluster" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RebootCacheCluster"></a>

```typescript
public readonly RebootCacheCluster: string[];
```

- *Type:* string[]

IAM actions required for the RebootCacheCluster API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `ResetCacheParameterGroup`<sup>Required</sup> <a name="ResetCacheParameterGroup" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.ResetCacheParameterGroup"></a>

```typescript
public readonly ResetCacheParameterGroup: string[];
```

- *Type:* string[]

IAM actions required for the ResetCacheParameterGroup API call.

---

##### `RevokeCacheSecurityGroupIngress`<sup>Required</sup> <a name="RevokeCacheSecurityGroupIngress" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.RevokeCacheSecurityGroupIngress"></a>

```typescript
public readonly RevokeCacheSecurityGroupIngress: string[];
```

- *Type:* string[]

IAM actions required for the RevokeCacheSecurityGroupIngress API call.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.StartMigration"></a>

```typescript
public readonly StartMigration: string[];
```

- *Type:* string[]

IAM actions required for the StartMigration API call.

---

##### `TestFailover`<sup>Required</sup> <a name="TestFailover" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.TestFailover"></a>

```typescript
public readonly TestFailover: string[];
```

- *Type:* string[]

IAM actions required for the TestFailover API call.

---

##### `TestMigration`<sup>Required</sup> <a name="TestMigration" id="@cdk_utils/iam.elasticache.ElastiCacheOperations.property.TestMigration"></a>

```typescript
public readonly TestMigration: string[];
```

- *Type:* string[]

IAM actions required for the TestMigration API call.

---

### ElastiCacheResources <a name="ElastiCacheResources" id="@cdk_utils/iam.elasticache.ElastiCacheResources"></a>

ARN builders, validators, and parsers for elasticache resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticache.ElastiCacheResources.Initializer"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

new elasticache.ElastiCacheResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.globalreplicationgroup">globalreplicationgroup</a></code> | Builds an ARN for the globalreplicationgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidGlobalreplicationgroupArn">isValidGlobalreplicationgroupArn</a></code> | Validates whether a string is a valid ARN for the globalreplicationgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidParametergroupArn">isValidParametergroupArn</a></code> | Validates whether a string is a valid ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReplicationgroupArn">isValidReplicationgroupArn</a></code> | Validates whether a string is a valid ARN for the replicationgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReservedInstanceArn">isValidReservedInstanceArn</a></code> | Validates whether a string is a valid ARN for the reserved-instance resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSecuritygroupArn">isValidSecuritygroupArn</a></code> | Validates whether a string is a valid ARN for the securitygroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscacheArn">isValidServerlesscacheArn</a></code> | Validates whether a string is a valid ARN for the serverlesscache resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscachesnapshotArn">isValidServerlesscachesnapshotArn</a></code> | Validates whether a string is a valid ARN for the serverlesscachesnapshot resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSnapshotArn">isValidSnapshotArn</a></code> | Validates whether a string is a valid ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSubnetgroupArn">isValidSubnetgroupArn</a></code> | Validates whether a string is a valid ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUsergroupArn">isValidUsergroupArn</a></code> | Validates whether a string is a valid ARN for the usergroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parametergroup">parametergroup</a></code> | Builds an ARN for the parametergroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseGlobalreplicationgroupArn">parseGlobalreplicationgroupArn</a></code> | Parses a globalreplicationgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseParametergroupArn">parseParametergroupArn</a></code> | Parses a parametergroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseReplicationgroupArn">parseReplicationgroupArn</a></code> | Parses a replicationgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseReservedInstanceArn">parseReservedInstanceArn</a></code> | Parses a reserved-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseSecuritygroupArn">parseSecuritygroupArn</a></code> | Parses a securitygroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscacheArn">parseServerlesscacheArn</a></code> | Parses a serverlesscache ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscachesnapshotArn">parseServerlesscachesnapshotArn</a></code> | Parses a serverlesscachesnapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseSnapshotArn">parseSnapshotArn</a></code> | Parses a snapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseSubnetgroupArn">parseSubnetgroupArn</a></code> | Parses a subnetgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.parseUsergroupArn">parseUsergroupArn</a></code> | Parses a usergroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.replicationgroup">replicationgroup</a></code> | Builds an ARN for the replicationgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.reservedInstance">reservedInstance</a></code> | Builds an ARN for the reserved-instance resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.securitygroup">securitygroup</a></code> | Builds an ARN for the securitygroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscache">serverlesscache</a></code> | Builds an ARN for the serverlesscache resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscachesnapshot">serverlesscachesnapshot</a></code> | Builds an ARN for the serverlesscachesnapshot resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.snapshot">snapshot</a></code> | Builds an ARN for the snapshot resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.subnetgroup">subnetgroup</a></code> | Builds an ARN for the subnetgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.user">user</a></code> | Builds an ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.elasticache.ElastiCacheResources.usergroup">usergroup</a></code> | Builds an ARN for the usergroup resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.elasticache.ElastiCacheResources.cluster"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.cluster(props: ElastiCacheClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheClusterArnProps">ElastiCacheClusterArnProps</a>

---

##### `globalreplicationgroup` <a name="globalreplicationgroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.globalreplicationgroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.globalreplicationgroup(props: ElastiCacheGlobalreplicationgroupArnProps)
```

Builds an ARN for the globalreplicationgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.globalreplicationgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheGlobalreplicationgroupArnProps">ElastiCacheGlobalreplicationgroupArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidClusterArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGlobalreplicationgroupArn` <a name="isValidGlobalreplicationgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidGlobalreplicationgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidGlobalreplicationgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the globalreplicationgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidGlobalreplicationgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidParametergroupArn` <a name="isValidParametergroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidParametergroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidParametergroupArn(arn: string)
```

Validates whether a string is a valid ARN for the parametergroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicationgroupArn` <a name="isValidReplicationgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReplicationgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidReplicationgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the replicationgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReplicationgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReservedInstanceArn` <a name="isValidReservedInstanceArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReservedInstanceArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidReservedInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the reserved-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidReservedInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecuritygroupArn` <a name="isValidSecuritygroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSecuritygroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidSecuritygroupArn(arn: string)
```

Validates whether a string is a valid ARN for the securitygroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSecuritygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServerlesscacheArn` <a name="isValidServerlesscacheArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscacheArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidServerlesscacheArn(arn: string)
```

Validates whether a string is a valid ARN for the serverlesscache resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscacheArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServerlesscachesnapshotArn` <a name="isValidServerlesscachesnapshotArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscachesnapshotArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidServerlesscachesnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the serverlesscachesnapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidServerlesscachesnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSnapshotArn` <a name="isValidSnapshotArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSnapshotArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the snapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubnetgroupArn` <a name="isValidSubnetgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSubnetgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidSubnetgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the subnetgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUserArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUsergroupArn` <a name="isValidUsergroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUsergroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.isValidUsergroupArn(arn: string)
```

Validates whether a string is a valid ARN for the usergroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.isValidUsergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parametergroup` <a name="parametergroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parametergroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parametergroup(props: ElastiCacheParametergroupArnProps)
```

Builds an ARN for the parametergroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parametergroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheParametergroupArnProps">ElastiCacheParametergroupArnProps</a>

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseClusterArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGlobalreplicationgroupArn` <a name="parseGlobalreplicationgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseGlobalreplicationgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseGlobalreplicationgroupArn(arn: string)
```

Parses a globalreplicationgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseGlobalreplicationgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseParametergroupArn` <a name="parseParametergroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseParametergroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseParametergroupArn(arn: string)
```

Parses a parametergroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseParametergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicationgroupArn` <a name="parseReplicationgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseReplicationgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseReplicationgroupArn(arn: string)
```

Parses a replicationgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseReplicationgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReservedInstanceArn` <a name="parseReservedInstanceArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseReservedInstanceArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseReservedInstanceArn(arn: string)
```

Parses a reserved-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseReservedInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecuritygroupArn` <a name="parseSecuritygroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSecuritygroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseSecuritygroupArn(arn: string)
```

Parses a securitygroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSecuritygroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServerlesscacheArn` <a name="parseServerlesscacheArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscacheArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseServerlesscacheArn(arn: string)
```

Parses a serverlesscache ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscacheArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServerlesscachesnapshotArn` <a name="parseServerlesscachesnapshotArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscachesnapshotArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseServerlesscachesnapshotArn(arn: string)
```

Parses a serverlesscachesnapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseServerlesscachesnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSnapshotArn` <a name="parseSnapshotArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSnapshotArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseSnapshotArn(arn: string)
```

Parses a snapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubnetgroupArn` <a name="parseSubnetgroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSubnetgroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseSubnetgroupArn(arn: string)
```

Parses a subnetgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseSubnetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseUserArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUsergroupArn` <a name="parseUsergroupArn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseUsergroupArn"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.parseUsergroupArn(arn: string)
```

Parses a usergroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticache.ElastiCacheResources.parseUsergroupArn.parameter.arn"></a>

- *Type:* string

---

##### `replicationgroup` <a name="replicationgroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.replicationgroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.replicationgroup(props: ElastiCacheReplicationgroupArnProps)
```

Builds an ARN for the replicationgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.replicationgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheReplicationgroupArnProps">ElastiCacheReplicationgroupArnProps</a>

---

##### `reservedInstance` <a name="reservedInstance" id="@cdk_utils/iam.elasticache.ElastiCacheResources.reservedInstance"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.reservedInstance(props: ElastiCacheReservedInstanceArnProps)
```

Builds an ARN for the reserved-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.reservedInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheReservedInstanceArnProps">ElastiCacheReservedInstanceArnProps</a>

---

##### `securitygroup` <a name="securitygroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.securitygroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.securitygroup(props: ElastiCacheSecuritygroupArnProps)
```

Builds an ARN for the securitygroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.securitygroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheSecuritygroupArnProps">ElastiCacheSecuritygroupArnProps</a>

---

##### `serverlesscache` <a name="serverlesscache" id="@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscache"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.serverlesscache(props: ElastiCacheServerlesscacheArnProps)
```

Builds an ARN for the serverlesscache resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscache.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscacheArnProps">ElastiCacheServerlesscacheArnProps</a>

---

##### `serverlesscachesnapshot` <a name="serverlesscachesnapshot" id="@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscachesnapshot"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.serverlesscachesnapshot(props: ElastiCacheServerlesscachesnapshotArnProps)
```

Builds an ARN for the serverlesscachesnapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.serverlesscachesnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheServerlesscachesnapshotArnProps">ElastiCacheServerlesscachesnapshotArnProps</a>

---

##### `snapshot` <a name="snapshot" id="@cdk_utils/iam.elasticache.ElastiCacheResources.snapshot"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.snapshot(props: ElastiCacheSnapshotArnProps)
```

Builds an ARN for the snapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.snapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheSnapshotArnProps">ElastiCacheSnapshotArnProps</a>

---

##### `subnetgroup` <a name="subnetgroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.subnetgroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.subnetgroup(props: ElastiCacheSubnetgroupArnProps)
```

Builds an ARN for the subnetgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.subnetgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheSubnetgroupArnProps">ElastiCacheSubnetgroupArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.elasticache.ElastiCacheResources.user"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.user(props: ElastiCacheUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheUserArnProps">ElastiCacheUserArnProps</a>

---

##### `usergroup` <a name="usergroup" id="@cdk_utils/iam.elasticache.ElastiCacheResources.usergroup"></a>

```typescript
import { elasticache } from '@cdk_utils/iam'

elasticache.ElastiCacheResources.usergroup(props: ElastiCacheUsergroupArnProps)
```

Builds an ARN for the usergroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticache.ElastiCacheResources.usergroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticache.ElastiCacheUsergroupArnProps">ElastiCacheUsergroupArnProps</a>

---




