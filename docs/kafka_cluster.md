# `kafka_cluster` Submodule <a name="`kafka_cluster` Submodule" id="@cdk_utils/iam.kafka_cluster"></a>


## Structs <a name="Structs" id="Structs"></a>

### KafkaClusterClusterArnComponents <a name="KafkaClusterClusterArnComponents" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterClusterArnComponents: kafka_cluster.KafkaClusterClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KafkaClusterClusterArnProps <a name="KafkaClusterClusterArnProps" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterClusterArnProps: kafka_cluster.KafkaClusterClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaClusterGroupArnComponents <a name="KafkaClusterGroupArnComponents" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterGroupArnComponents: kafka_cluster.KafkaClusterGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KafkaClusterGroupArnProps <a name="KafkaClusterGroupArnProps" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterGroupArnProps: kafka_cluster.KafkaClusterGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaClusterTopicArnComponents <a name="KafkaClusterTopicArnComponents" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterTopicArnComponents: kafka_cluster.KafkaClusterTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnComponents.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component.

---

### KafkaClusterTopicArnProps <a name="KafkaClusterTopicArnProps" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterTopicArnProps: kafka_cluster.KafkaClusterTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaClusterTransactionalIdArnComponents <a name="KafkaClusterTransactionalIdArnComponents" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents"></a>

Parsed components of a transactional-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterTransactionalIdArnComponents: kafka_cluster.KafkaClusterTransactionalIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.transactionalId">transactionalId</a></code> | <code>string</code> | The TransactionalId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `transactionalId`<sup>Required</sup> <a name="transactionalId" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnComponents.property.transactionalId"></a>

```typescript
public readonly transactionalId: string;
```

- *Type:* string

The TransactionalId component.

---

### KafkaClusterTransactionalIdArnProps <a name="KafkaClusterTransactionalIdArnProps" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps"></a>

Properties for building a transactional-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

const kafkaClusterTransactionalIdArnProps: kafka_cluster.KafkaClusterTransactionalIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.transactionalId">transactionalId</a></code> | <code>string</code> | The TransactionalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `transactionalId`<sup>Required</sup> <a name="transactionalId" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.transactionalId"></a>

```typescript
public readonly transactionalId: string;
```

- *Type:* string

The TransactionalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaClusterActions <a name="KafkaClusterActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions"></a>

IAM action constants for the kafka-cluster service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

new kafka_cluster.KafkaClusterActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterCluster">AlterCluster</a></code> | <code>string</code> | [Write] kafka-cluster:AlterCluster. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterClusterDynamicConfiguration">AlterClusterDynamicConfiguration</a></code> | <code>string</code> | [Write] kafka-cluster:AlterClusterDynamicConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterGroup">AlterGroup</a></code> | <code>string</code> | [Write] kafka-cluster:AlterGroup. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTopic">AlterTopic</a></code> | <code>string</code> | [Write] kafka-cluster:AlterTopic. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTopicDynamicConfiguration">AlterTopicDynamicConfiguration</a></code> | <code>string</code> | [Write] kafka-cluster:AlterTopicDynamicConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTransactionalId">AlterTransactionalId</a></code> | <code>string</code> | [Write] kafka-cluster:AlterTransactionalId. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] kafka-cluster:Connect. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.CreateTopic">CreateTopic</a></code> | <code>string</code> | [Write] kafka-cluster:CreateTopic. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] kafka-cluster:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DeleteTopic">DeleteTopic</a></code> | <code>string</code> | [Write] kafka-cluster:DeleteTopic. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [List] kafka-cluster:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeClusterDynamicConfiguration">DescribeClusterDynamicConfiguration</a></code> | <code>string</code> | [List] kafka-cluster:DescribeClusterDynamicConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [List] kafka-cluster:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTopic">DescribeTopic</a></code> | <code>string</code> | [List] kafka-cluster:DescribeTopic. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTopicDynamicConfiguration">DescribeTopicDynamicConfiguration</a></code> | <code>string</code> | [List] kafka-cluster:DescribeTopicDynamicConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTransactionalId">DescribeTransactionalId</a></code> | <code>string</code> | [List] kafka-cluster:DescribeTransactionalId. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.ReadData">ReadData</a></code> | <code>string</code> | [Read] kafka-cluster:ReadData. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.WriteData">WriteData</a></code> | <code>string</code> | [Write] kafka-cluster:WriteData. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.WriteDataIdempotently">WriteDataIdempotently</a></code> | <code>string</code> | [Write] kafka-cluster:WriteDataIdempotently. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AlterCluster`<sup>Required</sup> <a name="AlterCluster" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterCluster"></a>

```typescript
public readonly AlterCluster: string;
```

- *Type:* string

[Write] kafka-cluster:AlterCluster.

---

##### `AlterClusterDynamicConfiguration`<sup>Required</sup> <a name="AlterClusterDynamicConfiguration" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterClusterDynamicConfiguration"></a>

```typescript
public readonly AlterClusterDynamicConfiguration: string;
```

- *Type:* string

[Write] kafka-cluster:AlterClusterDynamicConfiguration.

---

##### `AlterGroup`<sup>Required</sup> <a name="AlterGroup" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterGroup"></a>

```typescript
public readonly AlterGroup: string;
```

- *Type:* string

[Write] kafka-cluster:AlterGroup.

---

##### `AlterTopic`<sup>Required</sup> <a name="AlterTopic" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTopic"></a>

```typescript
public readonly AlterTopic: string;
```

- *Type:* string

[Write] kafka-cluster:AlterTopic.

---

##### `AlterTopicDynamicConfiguration`<sup>Required</sup> <a name="AlterTopicDynamicConfiguration" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTopicDynamicConfiguration"></a>

```typescript
public readonly AlterTopicDynamicConfiguration: string;
```

- *Type:* string

[Write] kafka-cluster:AlterTopicDynamicConfiguration.

---

##### `AlterTransactionalId`<sup>Required</sup> <a name="AlterTransactionalId" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.AlterTransactionalId"></a>

```typescript
public readonly AlterTransactionalId: string;
```

- *Type:* string

[Write] kafka-cluster:AlterTransactionalId.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] kafka-cluster:Connect.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string;
```

- *Type:* string

[Write] kafka-cluster:CreateTopic.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] kafka-cluster:DeleteGroup.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string;
```

- *Type:* string

[Write] kafka-cluster:DeleteTopic.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[List] kafka-cluster:DescribeCluster.

---

##### `DescribeClusterDynamicConfiguration`<sup>Required</sup> <a name="DescribeClusterDynamicConfiguration" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeClusterDynamicConfiguration"></a>

```typescript
public readonly DescribeClusterDynamicConfiguration: string;
```

- *Type:* string

[List] kafka-cluster:DescribeClusterDynamicConfiguration.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[List] kafka-cluster:DescribeGroup.

---

##### `DescribeTopic`<sup>Required</sup> <a name="DescribeTopic" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTopic"></a>

```typescript
public readonly DescribeTopic: string;
```

- *Type:* string

[List] kafka-cluster:DescribeTopic.

---

##### `DescribeTopicDynamicConfiguration`<sup>Required</sup> <a name="DescribeTopicDynamicConfiguration" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTopicDynamicConfiguration"></a>

```typescript
public readonly DescribeTopicDynamicConfiguration: string;
```

- *Type:* string

[List] kafka-cluster:DescribeTopicDynamicConfiguration.

---

##### `DescribeTransactionalId`<sup>Required</sup> <a name="DescribeTransactionalId" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.DescribeTransactionalId"></a>

```typescript
public readonly DescribeTransactionalId: string;
```

- *Type:* string

[List] kafka-cluster:DescribeTransactionalId.

---

##### `ReadData`<sup>Required</sup> <a name="ReadData" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.ReadData"></a>

```typescript
public readonly ReadData: string;
```

- *Type:* string

[Read] kafka-cluster:ReadData.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `WriteData`<sup>Required</sup> <a name="WriteData" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.WriteData"></a>

```typescript
public readonly WriteData: string;
```

- *Type:* string

[Write] kafka-cluster:WriteData.

---

##### `WriteDataIdempotently`<sup>Required</sup> <a name="WriteDataIdempotently" id="@cdk_utils/iam.kafka_cluster.KafkaClusterActions.property.WriteDataIdempotently"></a>

```typescript
public readonly WriteDataIdempotently: string;
```

- *Type:* string

[Write] kafka-cluster:WriteDataIdempotently.

---

### KafkaClusterConditions <a name="KafkaClusterConditions" id="@cdk_utils/iam.kafka_cluster.KafkaClusterConditions"></a>

Condition key constants and builders for kafka-cluster.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

new kafka_cluster.KafkaClusterConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.resourceTag"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kafka_cluster.KafkaClusterConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

### KafkaClusterResources <a name="KafkaClusterResources" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources"></a>

ARN builders, validators, and parsers for kafka-cluster resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.Initializer"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

new kafka_cluster.KafkaClusterResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTransactionalIdArn">isValidTransactionalIdArn</a></code> | Validates whether a string is a valid ARN for the transactional-id resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTransactionalIdArn">parseTransactionalIdArn</a></code> | Parses a transactional-id ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.topic">topic</a></code> | Builds an ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterResources.transactionalId">transactionalId</a></code> | Builds an ARN for the transactional-id resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.cluster"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.cluster(props: KafkaClusterClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterClusterArnProps">KafkaClusterClusterArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.group"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.group(props: KafkaClusterGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterGroupArnProps">KafkaClusterGroupArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidClusterArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidGroupArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTopicArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTransactionalIdArn` <a name="isValidTransactionalIdArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTransactionalIdArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.isValidTransactionalIdArn(arn: string)
```

Validates whether a string is a valid ARN for the transactional-id resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.isValidTransactionalIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseClusterArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseGroupArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTopicArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTransactionalIdArn` <a name="parseTransactionalIdArn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTransactionalIdArn"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.parseTransactionalIdArn(arn: string)
```

Parses a transactional-id ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.parseTransactionalIdArn.parameter.arn"></a>

- *Type:* string

---

##### `topic` <a name="topic" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.topic"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.topic(props: KafkaClusterTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTopicArnProps">KafkaClusterTopicArnProps</a>

---

##### `transactionalId` <a name="transactionalId" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.transactionalId"></a>

```typescript
import { kafka_cluster } from '@cdk_utils/iam'

kafka_cluster.KafkaClusterResources.transactionalId(props: KafkaClusterTransactionalIdArnProps)
```

Builds an ARN for the transactional-id resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka_cluster.KafkaClusterResources.transactionalId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka_cluster.KafkaClusterTransactionalIdArnProps">KafkaClusterTransactionalIdArnProps</a>

---




