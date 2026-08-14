# `kafka` Submodule <a name="`kafka` Submodule" id="@cdk_utils/iam.kafka"></a>


## Structs <a name="Structs" id="Structs"></a>

### KafkaChannelArnComponents <a name="KafkaChannelArnComponents" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaChannelArnComponents: kafka.KafkaChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaChannelArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

### KafkaChannelArnProps <a name="KafkaChannelArnProps" id="@cdk_utils/iam.kafka.KafkaChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaChannelArnProps: kafka.KafkaChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaClusterArnComponents <a name="KafkaClusterArnComponents" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaClusterArnComponents: kafka.KafkaClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaClusterArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

### KafkaClusterArnProps <a name="KafkaClusterArnProps" id="@cdk_utils/iam.kafka.KafkaClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaClusterArnProps: kafka.KafkaClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaConfigurationArnComponents <a name="KafkaConfigurationArnComponents" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents"></a>

Parsed components of a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaConfigurationArnComponents: kafka.KafkaConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaConfigurationArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

### KafkaConfigurationArnProps <a name="KafkaConfigurationArnProps" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps"></a>

Properties for building a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaConfigurationArnProps: kafka.KafkaConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaGroupArnComponents <a name="KafkaGroupArnComponents" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaGroupArnComponents: kafka.KafkaGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KafkaGroupArnProps <a name="KafkaGroupArnProps" id="@cdk_utils/iam.kafka.KafkaGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaGroupArnProps: kafka.KafkaGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaReplicatorArnComponents <a name="KafkaReplicatorArnComponents" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents"></a>

Parsed components of a replicator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaReplicatorArnComponents: kafka.KafkaReplicatorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.replicatorName">replicatorName</a></code> | <code>string</code> | The ReplicatorName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

The ReplicatorName component.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaReplicatorArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

### KafkaReplicatorArnProps <a name="KafkaReplicatorArnProps" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps"></a>

Properties for building a replicator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaReplicatorArnProps: kafka.KafkaReplicatorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.replicatorName">replicatorName</a></code> | <code>string</code> | The ReplicatorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.replicatorName"></a>

```typescript
public readonly replicatorName: string;
```

- *Type:* string

The ReplicatorName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaReplicatorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaTopicArnComponents <a name="KafkaTopicArnComponents" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaTopicArnComponents: kafka.KafkaTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.kafka.KafkaTopicArnComponents.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component.

---

### KafkaTopicArnProps <a name="KafkaTopicArnProps" id="@cdk_utils/iam.kafka.KafkaTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaTopicArnProps: kafka.KafkaTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaTransactionalIdArnComponents <a name="KafkaTransactionalIdArnComponents" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents"></a>

Parsed components of a transactional-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaTransactionalIdArnComponents: kafka.KafkaTransactionalIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.transactionalId">transactionalId</a></code> | <code>string</code> | The TransactionalId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `transactionalId`<sup>Required</sup> <a name="transactionalId" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnComponents.property.transactionalId"></a>

```typescript
public readonly transactionalId: string;
```

- *Type:* string

The TransactionalId component.

---

### KafkaTransactionalIdArnProps <a name="KafkaTransactionalIdArnProps" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps"></a>

Properties for building a transactional-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaTransactionalIdArnProps: kafka.KafkaTransactionalIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.clusterUuid">clusterUuid</a></code> | <code>string</code> | The ClusterUuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.transactionalId">transactionalId</a></code> | <code>string</code> | The TransactionalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterUuid`<sup>Required</sup> <a name="clusterUuid" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.clusterUuid"></a>

```typescript
public readonly clusterUuid: string;
```

- *Type:* string

The ClusterUuid component of the ARN.

---

##### `transactionalId`<sup>Required</sup> <a name="transactionalId" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.transactionalId"></a>

```typescript
public readonly transactionalId: string;
```

- *Type:* string

The TransactionalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaVPCConnectionArnComponents <a name="KafkaVPCConnectionArnComponents" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents"></a>

Parsed components of a vpc-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaVPCConnectionArnComponents: kafka.KafkaVPCConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.clusterOwnerAccount">clusterOwnerAccount</a></code> | <code>string</code> | The ClusterOwnerAccount component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.vpcOwnerAccount">vpcOwnerAccount</a></code> | <code>string</code> | The VpcOwnerAccount component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `clusterOwnerAccount`<sup>Required</sup> <a name="clusterOwnerAccount" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.clusterOwnerAccount"></a>

```typescript
public readonly clusterOwnerAccount: string;
```

- *Type:* string

The ClusterOwnerAccount component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component.

---

##### `vpcOwnerAccount`<sup>Required</sup> <a name="vpcOwnerAccount" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnComponents.property.vpcOwnerAccount"></a>

```typescript
public readonly vpcOwnerAccount: string;
```

- *Type:* string

The VpcOwnerAccount component.

---

### KafkaVPCConnectionArnProps <a name="KafkaVPCConnectionArnProps" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps"></a>

Properties for building a vpc-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

const kafkaVPCConnectionArnProps: kafka.KafkaVPCConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.clusterOwnerAccount">clusterOwnerAccount</a></code> | <code>string</code> | The ClusterOwnerAccount component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.uuid">uuid</a></code> | <code>string</code> | The Uuid component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.vpcOwnerAccount">vpcOwnerAccount</a></code> | <code>string</code> | The VpcOwnerAccount component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `clusterOwnerAccount`<sup>Required</sup> <a name="clusterOwnerAccount" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.clusterOwnerAccount"></a>

```typescript
public readonly clusterOwnerAccount: string;
```

- *Type:* string

The ClusterOwnerAccount component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The Uuid component of the ARN.

---

##### `vpcOwnerAccount`<sup>Required</sup> <a name="vpcOwnerAccount" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.vpcOwnerAccount"></a>

```typescript
public readonly vpcOwnerAccount: string;
```

- *Type:* string

The VpcOwnerAccount component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaActions <a name="KafkaActions" id="@cdk_utils/iam.kafka.KafkaActions"></a>

IAM action constants for the kafka service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka.KafkaActions.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

new kafka.KafkaActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.actionGetBootstrapBrokers">actionGetBootstrapBrokers</a></code> | <code>string</code> | [Read] kafka:GetBootstrapBrokers. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.actionGetClusterPolicy">actionGetClusterPolicy</a></code> | <code>string</code> | [Read] kafka:GetClusterPolicy. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.actionGetCompatibleKafkaVersions">actionGetCompatibleKafkaVersions</a></code> | <code>string</code> | [List] kafka:GetCompatibleKafkaVersions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.BatchAssociateScramSecret">BatchAssociateScramSecret</a></code> | <code>string</code> | [Write] kafka:BatchAssociateScramSecret. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.BatchDisassociateScramSecret">BatchDisassociateScramSecret</a></code> | <code>string</code> | [Write] kafka:BatchDisassociateScramSecret. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] kafka:CreateChannel. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] kafka:CreateCluster. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateClusterV2">CreateClusterV2</a></code> | <code>string</code> | [Write] kafka:CreateClusterV2. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string</code> | [Write] kafka:CreateConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateReplicator">CreateReplicator</a></code> | <code>string</code> | [Write] kafka:CreateReplicator. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateTopic">CreateTopic</a></code> | <code>string</code> | [Write] kafka:CreateTopic. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.CreateVpcConnection">CreateVpcConnection</a></code> | <code>string</code> | [Write] kafka:CreateVpcConnection. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] kafka:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] kafka:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteClusterPolicy">DeleteClusterPolicy</a></code> | <code>string</code> | [Write] kafka:DeleteClusterPolicy. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string</code> | [Write] kafka:DeleteConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteReplicator">DeleteReplicator</a></code> | <code>string</code> | [Write] kafka:DeleteReplicator. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteTopic">DeleteTopic</a></code> | <code>string</code> | [Write] kafka:DeleteTopic. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DeleteVpcConnection">DeleteVpcConnection</a></code> | <code>string</code> | [Write] kafka:DeleteVpcConnection. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] kafka:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] kafka:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterOperation">DescribeClusterOperation</a></code> | <code>string</code> | [Read] kafka:DescribeClusterOperation. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterOperationV2">DescribeClusterOperationV2</a></code> | <code>string</code> | [Read] kafka:DescribeClusterOperationV2. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterV2">DescribeClusterV2</a></code> | <code>string</code> | [Read] kafka:DescribeClusterV2. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeConfiguration">DescribeConfiguration</a></code> | <code>string</code> | [Read] kafka:DescribeConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeConfigurationRevision">DescribeConfigurationRevision</a></code> | <code>string</code> | [Read] kafka:DescribeConfigurationRevision. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeReplicator">DescribeReplicator</a></code> | <code>string</code> | [Read] kafka:DescribeReplicator. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeTopic">DescribeTopic</a></code> | <code>string</code> | [Read] kafka:DescribeTopic. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeTopicPartitions">DescribeTopicPartitions</a></code> | <code>string</code> | [Read] kafka:DescribeTopicPartitions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.DescribeVpcConnection">DescribeVpcConnection</a></code> | <code>string</code> | [Read] kafka:DescribeVpcConnection. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] kafka:ListChannels. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListClientVpcConnections">ListClientVpcConnections</a></code> | <code>string</code> | [List] kafka:ListClientVpcConnections. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListClusterOperations">ListClusterOperations</a></code> | <code>string</code> | [List] kafka:ListClusterOperations. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListClusterOperationsV2">ListClusterOperationsV2</a></code> | <code>string</code> | [List] kafka:ListClusterOperationsV2. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] kafka:ListClusters. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListClustersV2">ListClustersV2</a></code> | <code>string</code> | [List] kafka:ListClustersV2. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListConfigurationRevisions">ListConfigurationRevisions</a></code> | <code>string</code> | [List] kafka:ListConfigurationRevisions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListConfigurations">ListConfigurations</a></code> | <code>string</code> | [List] kafka:ListConfigurations. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListKafkaVersions">ListKafkaVersions</a></code> | <code>string</code> | [List] kafka:ListKafkaVersions. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListNodes">ListNodes</a></code> | <code>string</code> | [List] kafka:ListNodes. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListReplicators">ListReplicators</a></code> | <code>string</code> | [List] kafka:ListReplicators. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListScramSecrets">ListScramSecrets</a></code> | <code>string</code> | [List] kafka:ListScramSecrets. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kafka:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListTopics">ListTopics</a></code> | <code>string</code> | [List] kafka:ListTopics. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.ListVpcConnections">ListVpcConnections</a></code> | <code>string</code> | [List] kafka:ListVpcConnections. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.PutClusterPolicy">PutClusterPolicy</a></code> | <code>string</code> | [Write] kafka:PutClusterPolicy. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.RebootBroker">RebootBroker</a></code> | <code>string</code> | [Write] kafka:RebootBroker. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.RejectClientVpcConnection">RejectClientVpcConnection</a></code> | <code>string</code> | [Write] kafka:RejectClientVpcConnection. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kafka:TagResource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kafka:UntagResource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerCount">UpdateBrokerCount</a></code> | <code>string</code> | [Write] kafka:UpdateBrokerCount. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerStorage">UpdateBrokerStorage</a></code> | <code>string</code> | [Write] kafka:UpdateBrokerStorage. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerType">UpdateBrokerType</a></code> | <code>string</code> | [Write] kafka:UpdateBrokerType. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] kafka:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateClusterConfiguration">UpdateClusterConfiguration</a></code> | <code>string</code> | [Write] kafka:UpdateClusterConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateClusterKafkaVersion">UpdateClusterKafkaVersion</a></code> | <code>string</code> | [Write] kafka:UpdateClusterKafkaVersion. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string</code> | [Write] kafka:UpdateConfiguration. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateConnectivity">UpdateConnectivity</a></code> | <code>string</code> | [Write] kafka:UpdateConnectivity. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateMonitoring">UpdateMonitoring</a></code> | <code>string</code> | [Write] kafka:UpdateMonitoring. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateRebalancing">UpdateRebalancing</a></code> | <code>string</code> | [Write] kafka:UpdateRebalancing. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateReplicationInfo">UpdateReplicationInfo</a></code> | <code>string</code> | [Write] kafka:UpdateReplicationInfo. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateSecurity">UpdateSecurity</a></code> | <code>string</code> | [Write] kafka:UpdateSecurity. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateStorage">UpdateStorage</a></code> | <code>string</code> | [Write] kafka:UpdateStorage. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaActions.property.UpdateTopic">UpdateTopic</a></code> | <code>string</code> | [Write] kafka:UpdateTopic. |

---

##### `actionGetBootstrapBrokers`<sup>Required</sup> <a name="actionGetBootstrapBrokers" id="@cdk_utils/iam.kafka.KafkaActions.property.actionGetBootstrapBrokers"></a>

```typescript
public readonly actionGetBootstrapBrokers: string;
```

- *Type:* string

[Read] kafka:GetBootstrapBrokers.

---

##### `actionGetClusterPolicy`<sup>Required</sup> <a name="actionGetClusterPolicy" id="@cdk_utils/iam.kafka.KafkaActions.property.actionGetClusterPolicy"></a>

```typescript
public readonly actionGetClusterPolicy: string;
```

- *Type:* string

[Read] kafka:GetClusterPolicy.

---

##### `actionGetCompatibleKafkaVersions`<sup>Required</sup> <a name="actionGetCompatibleKafkaVersions" id="@cdk_utils/iam.kafka.KafkaActions.property.actionGetCompatibleKafkaVersions"></a>

```typescript
public readonly actionGetCompatibleKafkaVersions: string;
```

- *Type:* string

[List] kafka:GetCompatibleKafkaVersions.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kafka.KafkaActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kafka.KafkaActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kafka.KafkaActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kafka.KafkaActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kafka.KafkaActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchAssociateScramSecret`<sup>Required</sup> <a name="BatchAssociateScramSecret" id="@cdk_utils/iam.kafka.KafkaActions.property.BatchAssociateScramSecret"></a>

```typescript
public readonly BatchAssociateScramSecret: string;
```

- *Type:* string

[Write] kafka:BatchAssociateScramSecret.

---

##### `BatchDisassociateScramSecret`<sup>Required</sup> <a name="BatchDisassociateScramSecret" id="@cdk_utils/iam.kafka.KafkaActions.property.BatchDisassociateScramSecret"></a>

```typescript
public readonly BatchDisassociateScramSecret: string;
```

- *Type:* string

[Write] kafka:BatchDisassociateScramSecret.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] kafka:CreateChannel.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] kafka:CreateCluster.

---

##### `CreateClusterV2`<sup>Required</sup> <a name="CreateClusterV2" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateClusterV2"></a>

```typescript
public readonly CreateClusterV2: string;
```

- *Type:* string

[Write] kafka:CreateClusterV2.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string;
```

- *Type:* string

[Write] kafka:CreateConfiguration.

---

##### `CreateReplicator`<sup>Required</sup> <a name="CreateReplicator" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateReplicator"></a>

```typescript
public readonly CreateReplicator: string;
```

- *Type:* string

[Write] kafka:CreateReplicator.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string;
```

- *Type:* string

[Write] kafka:CreateTopic.

---

##### `CreateVpcConnection`<sup>Required</sup> <a name="CreateVpcConnection" id="@cdk_utils/iam.kafka.KafkaActions.property.CreateVpcConnection"></a>

```typescript
public readonly CreateVpcConnection: string;
```

- *Type:* string

[Write] kafka:CreateVpcConnection.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] kafka:DeleteChannel.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] kafka:DeleteCluster.

---

##### `DeleteClusterPolicy`<sup>Required</sup> <a name="DeleteClusterPolicy" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteClusterPolicy"></a>

```typescript
public readonly DeleteClusterPolicy: string;
```

- *Type:* string

[Write] kafka:DeleteClusterPolicy.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string;
```

- *Type:* string

[Write] kafka:DeleteConfiguration.

---

##### `DeleteReplicator`<sup>Required</sup> <a name="DeleteReplicator" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteReplicator"></a>

```typescript
public readonly DeleteReplicator: string;
```

- *Type:* string

[Write] kafka:DeleteReplicator.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string;
```

- *Type:* string

[Write] kafka:DeleteTopic.

---

##### `DeleteVpcConnection`<sup>Required</sup> <a name="DeleteVpcConnection" id="@cdk_utils/iam.kafka.KafkaActions.property.DeleteVpcConnection"></a>

```typescript
public readonly DeleteVpcConnection: string;
```

- *Type:* string

[Write] kafka:DeleteVpcConnection.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] kafka:DescribeChannel.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] kafka:DescribeCluster.

---

##### `DescribeClusterOperation`<sup>Required</sup> <a name="DescribeClusterOperation" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterOperation"></a>

```typescript
public readonly DescribeClusterOperation: string;
```

- *Type:* string

[Read] kafka:DescribeClusterOperation.

---

##### `DescribeClusterOperationV2`<sup>Required</sup> <a name="DescribeClusterOperationV2" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterOperationV2"></a>

```typescript
public readonly DescribeClusterOperationV2: string;
```

- *Type:* string

[Read] kafka:DescribeClusterOperationV2.

---

##### `DescribeClusterV2`<sup>Required</sup> <a name="DescribeClusterV2" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeClusterV2"></a>

```typescript
public readonly DescribeClusterV2: string;
```

- *Type:* string

[Read] kafka:DescribeClusterV2.

---

##### `DescribeConfiguration`<sup>Required</sup> <a name="DescribeConfiguration" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeConfiguration"></a>

```typescript
public readonly DescribeConfiguration: string;
```

- *Type:* string

[Read] kafka:DescribeConfiguration.

---

##### `DescribeConfigurationRevision`<sup>Required</sup> <a name="DescribeConfigurationRevision" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeConfigurationRevision"></a>

```typescript
public readonly DescribeConfigurationRevision: string;
```

- *Type:* string

[Read] kafka:DescribeConfigurationRevision.

---

##### `DescribeReplicator`<sup>Required</sup> <a name="DescribeReplicator" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeReplicator"></a>

```typescript
public readonly DescribeReplicator: string;
```

- *Type:* string

[Read] kafka:DescribeReplicator.

---

##### `DescribeTopic`<sup>Required</sup> <a name="DescribeTopic" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeTopic"></a>

```typescript
public readonly DescribeTopic: string;
```

- *Type:* string

[Read] kafka:DescribeTopic.

---

##### `DescribeTopicPartitions`<sup>Required</sup> <a name="DescribeTopicPartitions" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeTopicPartitions"></a>

```typescript
public readonly DescribeTopicPartitions: string;
```

- *Type:* string

[Read] kafka:DescribeTopicPartitions.

---

##### `DescribeVpcConnection`<sup>Required</sup> <a name="DescribeVpcConnection" id="@cdk_utils/iam.kafka.KafkaActions.property.DescribeVpcConnection"></a>

```typescript
public readonly DescribeVpcConnection: string;
```

- *Type:* string

[Read] kafka:DescribeVpcConnection.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.kafka.KafkaActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] kafka:ListChannels.

---

##### `ListClientVpcConnections`<sup>Required</sup> <a name="ListClientVpcConnections" id="@cdk_utils/iam.kafka.KafkaActions.property.ListClientVpcConnections"></a>

```typescript
public readonly ListClientVpcConnections: string;
```

- *Type:* string

[List] kafka:ListClientVpcConnections.

---

##### `ListClusterOperations`<sup>Required</sup> <a name="ListClusterOperations" id="@cdk_utils/iam.kafka.KafkaActions.property.ListClusterOperations"></a>

```typescript
public readonly ListClusterOperations: string;
```

- *Type:* string

[List] kafka:ListClusterOperations.

---

##### `ListClusterOperationsV2`<sup>Required</sup> <a name="ListClusterOperationsV2" id="@cdk_utils/iam.kafka.KafkaActions.property.ListClusterOperationsV2"></a>

```typescript
public readonly ListClusterOperationsV2: string;
```

- *Type:* string

[List] kafka:ListClusterOperationsV2.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.kafka.KafkaActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] kafka:ListClusters.

---

##### `ListClustersV2`<sup>Required</sup> <a name="ListClustersV2" id="@cdk_utils/iam.kafka.KafkaActions.property.ListClustersV2"></a>

```typescript
public readonly ListClustersV2: string;
```

- *Type:* string

[List] kafka:ListClustersV2.

---

##### `ListConfigurationRevisions`<sup>Required</sup> <a name="ListConfigurationRevisions" id="@cdk_utils/iam.kafka.KafkaActions.property.ListConfigurationRevisions"></a>

```typescript
public readonly ListConfigurationRevisions: string;
```

- *Type:* string

[List] kafka:ListConfigurationRevisions.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.kafka.KafkaActions.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string;
```

- *Type:* string

[List] kafka:ListConfigurations.

---

##### `ListKafkaVersions`<sup>Required</sup> <a name="ListKafkaVersions" id="@cdk_utils/iam.kafka.KafkaActions.property.ListKafkaVersions"></a>

```typescript
public readonly ListKafkaVersions: string;
```

- *Type:* string

[List] kafka:ListKafkaVersions.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.kafka.KafkaActions.property.ListNodes"></a>

```typescript
public readonly ListNodes: string;
```

- *Type:* string

[List] kafka:ListNodes.

---

##### `ListReplicators`<sup>Required</sup> <a name="ListReplicators" id="@cdk_utils/iam.kafka.KafkaActions.property.ListReplicators"></a>

```typescript
public readonly ListReplicators: string;
```

- *Type:* string

[List] kafka:ListReplicators.

---

##### `ListScramSecrets`<sup>Required</sup> <a name="ListScramSecrets" id="@cdk_utils/iam.kafka.KafkaActions.property.ListScramSecrets"></a>

```typescript
public readonly ListScramSecrets: string;
```

- *Type:* string

[List] kafka:ListScramSecrets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kafka.KafkaActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kafka:ListTagsForResource.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.kafka.KafkaActions.property.ListTopics"></a>

```typescript
public readonly ListTopics: string;
```

- *Type:* string

[List] kafka:ListTopics.

---

##### `ListVpcConnections`<sup>Required</sup> <a name="ListVpcConnections" id="@cdk_utils/iam.kafka.KafkaActions.property.ListVpcConnections"></a>

```typescript
public readonly ListVpcConnections: string;
```

- *Type:* string

[List] kafka:ListVpcConnections.

---

##### `PutClusterPolicy`<sup>Required</sup> <a name="PutClusterPolicy" id="@cdk_utils/iam.kafka.KafkaActions.property.PutClusterPolicy"></a>

```typescript
public readonly PutClusterPolicy: string;
```

- *Type:* string

[Write] kafka:PutClusterPolicy.

---

##### `RebootBroker`<sup>Required</sup> <a name="RebootBroker" id="@cdk_utils/iam.kafka.KafkaActions.property.RebootBroker"></a>

```typescript
public readonly RebootBroker: string;
```

- *Type:* string

[Write] kafka:RebootBroker.

---

##### `RejectClientVpcConnection`<sup>Required</sup> <a name="RejectClientVpcConnection" id="@cdk_utils/iam.kafka.KafkaActions.property.RejectClientVpcConnection"></a>

```typescript
public readonly RejectClientVpcConnection: string;
```

- *Type:* string

[Write] kafka:RejectClientVpcConnection.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kafka.KafkaActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kafka.KafkaActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kafka:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kafka.KafkaActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kafka:UntagResource.

---

##### `UpdateBrokerCount`<sup>Required</sup> <a name="UpdateBrokerCount" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerCount"></a>

```typescript
public readonly UpdateBrokerCount: string;
```

- *Type:* string

[Write] kafka:UpdateBrokerCount.

---

##### `UpdateBrokerStorage`<sup>Required</sup> <a name="UpdateBrokerStorage" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerStorage"></a>

```typescript
public readonly UpdateBrokerStorage: string;
```

- *Type:* string

[Write] kafka:UpdateBrokerStorage.

---

##### `UpdateBrokerType`<sup>Required</sup> <a name="UpdateBrokerType" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateBrokerType"></a>

```typescript
public readonly UpdateBrokerType: string;
```

- *Type:* string

[Write] kafka:UpdateBrokerType.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] kafka:UpdateChannel.

---

##### `UpdateClusterConfiguration`<sup>Required</sup> <a name="UpdateClusterConfiguration" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateClusterConfiguration"></a>

```typescript
public readonly UpdateClusterConfiguration: string;
```

- *Type:* string

[Write] kafka:UpdateClusterConfiguration.

---

##### `UpdateClusterKafkaVersion`<sup>Required</sup> <a name="UpdateClusterKafkaVersion" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateClusterKafkaVersion"></a>

```typescript
public readonly UpdateClusterKafkaVersion: string;
```

- *Type:* string

[Write] kafka:UpdateClusterKafkaVersion.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string;
```

- *Type:* string

[Write] kafka:UpdateConfiguration.

---

##### `UpdateConnectivity`<sup>Required</sup> <a name="UpdateConnectivity" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateConnectivity"></a>

```typescript
public readonly UpdateConnectivity: string;
```

- *Type:* string

[Write] kafka:UpdateConnectivity.

---

##### `UpdateMonitoring`<sup>Required</sup> <a name="UpdateMonitoring" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateMonitoring"></a>

```typescript
public readonly UpdateMonitoring: string;
```

- *Type:* string

[Write] kafka:UpdateMonitoring.

---

##### `UpdateRebalancing`<sup>Required</sup> <a name="UpdateRebalancing" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateRebalancing"></a>

```typescript
public readonly UpdateRebalancing: string;
```

- *Type:* string

[Write] kafka:UpdateRebalancing.

---

##### `UpdateReplicationInfo`<sup>Required</sup> <a name="UpdateReplicationInfo" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateReplicationInfo"></a>

```typescript
public readonly UpdateReplicationInfo: string;
```

- *Type:* string

[Write] kafka:UpdateReplicationInfo.

---

##### `UpdateSecurity`<sup>Required</sup> <a name="UpdateSecurity" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateSecurity"></a>

```typescript
public readonly UpdateSecurity: string;
```

- *Type:* string

[Write] kafka:UpdateSecurity.

---

##### `UpdateStorage`<sup>Required</sup> <a name="UpdateStorage" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateStorage"></a>

```typescript
public readonly UpdateStorage: string;
```

- *Type:* string

[Write] kafka:UpdateStorage.

---

##### `UpdateTopic`<sup>Required</sup> <a name="UpdateTopic" id="@cdk_utils/iam.kafka.KafkaActions.property.UpdateTopic"></a>

```typescript
public readonly UpdateTopic: string;
```

- *Type:* string

[Write] kafka:UpdateTopic.

---

### KafkaConditions <a name="KafkaConditions" id="@cdk_utils/iam.kafka.KafkaConditions"></a>

Condition key constants and builders for kafka.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka.KafkaConditions.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

new kafka.KafkaConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.publicAccessEnabled">publicAccessEnabled</a></code> | Generates a condition block for `kafka:publicAccessEnabled`. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `publicAccessEnabled` <a name="publicAccessEnabled" id="@cdk_utils/iam.kafka.KafkaConditions.publicAccessEnabled"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaConditions.publicAccessEnabled(value: boolean)
```

Generates a condition block for `kafka:publicAccessEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafka.KafkaConditions.publicAccessEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kafka.KafkaConditions.requestTag"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafka.KafkaConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kafka.KafkaConditions.resourceTag"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafka.KafkaConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kafka.KafkaConditions.tagKeys"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kafka.KafkaConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.CreateClusterV2ConditionKeys">CreateClusterV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClusterV2 action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.CreateReplicatorConditionKeys">CreateReplicatorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReplicator action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.CreateVpcConnectionConditionKeys">CreateVpcConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcConnection action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.PUBLIC_ACCESS_ENABLED">PUBLIC_ACCESS_ENABLED</a></code> | <code>string</code> | Condition key: kafka:publicAccessEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaConditions.property.UpdateConnectivityConditionKeys">UpdateConnectivityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnectivity action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kafka.KafkaConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kafka.KafkaConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kafka.KafkaConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateClusterV2ConditionKeys`<sup>Required</sup> <a name="CreateClusterV2ConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.CreateClusterV2ConditionKeys"></a>

```typescript
public readonly CreateClusterV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClusterV2 action.

---

##### `CreateReplicatorConditionKeys`<sup>Required</sup> <a name="CreateReplicatorConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.CreateReplicatorConditionKeys"></a>

```typescript
public readonly CreateReplicatorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReplicator action.

---

##### `CreateVpcConnectionConditionKeys`<sup>Required</sup> <a name="CreateVpcConnectionConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.CreateVpcConnectionConditionKeys"></a>

```typescript
public readonly CreateVpcConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcConnection action.

---

##### `PUBLIC_ACCESS_ENABLED`<sup>Required</sup> <a name="PUBLIC_ACCESS_ENABLED" id="@cdk_utils/iam.kafka.KafkaConditions.property.PUBLIC_ACCESS_ENABLED"></a>

```typescript
public readonly PUBLIC_ACCESS_ENABLED: string;
```

- *Type:* string

Condition key: kafka:publicAccessEnabled (Bool).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateConnectivityConditionKeys`<sup>Required</sup> <a name="UpdateConnectivityConditionKeys" id="@cdk_utils/iam.kafka.KafkaConditions.property.UpdateConnectivityConditionKeys"></a>

```typescript
public readonly UpdateConnectivityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnectivity action.

---

### KafkaOperations <a name="KafkaOperations" id="@cdk_utils/iam.kafka.KafkaOperations"></a>

API operation to required IAM actions mapping for kafka.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka.KafkaOperations.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

new kafka.KafkaOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.BatchAssociateScramSecret">BatchAssociateScramSecret</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateScramSecret API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.BatchDisassociateScramSecret">BatchDisassociateScramSecret</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateScramSecret API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateClusterV2">CreateClusterV2</a></code> | <code>string[]</code> | IAM actions required for the CreateClusterV2 API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateReplicator">CreateReplicator</a></code> | <code>string[]</code> | IAM actions required for the CreateReplicator API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateTopic">CreateTopic</a></code> | <code>string[]</code> | IAM actions required for the CreateTopic API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.CreateVpcConnection">CreateVpcConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcConnection API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteClusterPolicy">DeleteClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteReplicator">DeleteReplicator</a></code> | <code>string[]</code> | IAM actions required for the DeleteReplicator API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteTopic">DeleteTopic</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopic API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DeleteVpcConnection">DeleteVpcConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcConnection API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeChannel">DescribeChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannel API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterOperation">DescribeClusterOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterOperation API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterOperationV2">DescribeClusterOperationV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterOperationV2 API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterV2">DescribeClusterV2</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterV2 API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeConfiguration">DescribeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeConfigurationRevision">DescribeConfigurationRevision</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationRevision API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeReplicator">DescribeReplicator</a></code> | <code>string[]</code> | IAM actions required for the DescribeReplicator API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeTopic">DescribeTopic</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopic API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeTopicPartitions">DescribeTopicPartitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicPartitions API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.DescribeVpcConnection">DescribeVpcConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcConnection API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListClientVpcConnections">ListClientVpcConnections</a></code> | <code>string[]</code> | IAM actions required for the ListClientVpcConnections API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListClusterOperations">ListClusterOperations</a></code> | <code>string[]</code> | IAM actions required for the ListClusterOperations API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListClusterOperationsV2">ListClusterOperationsV2</a></code> | <code>string[]</code> | IAM actions required for the ListClusterOperationsV2 API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListClustersV2">ListClustersV2</a></code> | <code>string[]</code> | IAM actions required for the ListClustersV2 API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListConfigurationRevisions">ListConfigurationRevisions</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationRevisions API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListConfigurations">ListConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurations API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListKafkaVersions">ListKafkaVersions</a></code> | <code>string[]</code> | IAM actions required for the ListKafkaVersions API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListNodes">ListNodes</a></code> | <code>string[]</code> | IAM actions required for the ListNodes API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListReplicators">ListReplicators</a></code> | <code>string[]</code> | IAM actions required for the ListReplicators API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListScramSecrets">ListScramSecrets</a></code> | <code>string[]</code> | IAM actions required for the ListScramSecrets API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListTopics">ListTopics</a></code> | <code>string[]</code> | IAM actions required for the ListTopics API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.ListVpcConnections">ListVpcConnections</a></code> | <code>string[]</code> | IAM actions required for the ListVpcConnections API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.opGetBootstrapBrokers">opGetBootstrapBrokers</a></code> | <code>string[]</code> | IAM actions required for the GetBootstrapBrokers API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.opGetClusterPolicy">opGetClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.opGetCompatibleKafkaVersions">opGetCompatibleKafkaVersions</a></code> | <code>string[]</code> | IAM actions required for the GetCompatibleKafkaVersions API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.PutClusterPolicy">PutClusterPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutClusterPolicy API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.RebootBroker">RebootBroker</a></code> | <code>string[]</code> | IAM actions required for the RebootBroker API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.RejectClientVpcConnection">RejectClientVpcConnection</a></code> | <code>string[]</code> | IAM actions required for the RejectClientVpcConnection API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerCount">UpdateBrokerCount</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrokerCount API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerStorage">UpdateBrokerStorage</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrokerStorage API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerType">UpdateBrokerType</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrokerType API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateClusterConfiguration">UpdateClusterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateClusterKafkaVersion">UpdateClusterKafkaVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterKafkaVersion API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateConfiguration">UpdateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateConnectivity">UpdateConnectivity</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectivity API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateMonitoring">UpdateMonitoring</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitoring API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateRebalancing">UpdateRebalancing</a></code> | <code>string[]</code> | IAM actions required for the UpdateRebalancing API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateReplicationInfo">UpdateReplicationInfo</a></code> | <code>string[]</code> | IAM actions required for the UpdateReplicationInfo API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateSecurity">UpdateSecurity</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurity API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateStorage">UpdateStorage</a></code> | <code>string[]</code> | IAM actions required for the UpdateStorage API call. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaOperations.property.UpdateTopic">UpdateTopic</a></code> | <code>string[]</code> | IAM actions required for the UpdateTopic API call. |

---

##### `BatchAssociateScramSecret`<sup>Required</sup> <a name="BatchAssociateScramSecret" id="@cdk_utils/iam.kafka.KafkaOperations.property.BatchAssociateScramSecret"></a>

```typescript
public readonly BatchAssociateScramSecret: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateScramSecret API call.

---

##### `BatchDisassociateScramSecret`<sup>Required</sup> <a name="BatchDisassociateScramSecret" id="@cdk_utils/iam.kafka.KafkaOperations.property.BatchDisassociateScramSecret"></a>

```typescript
public readonly BatchDisassociateScramSecret: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateScramSecret API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateClusterV2`<sup>Required</sup> <a name="CreateClusterV2" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateClusterV2"></a>

```typescript
public readonly CreateClusterV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateClusterV2 API call.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguration API call.

---

##### `CreateReplicator`<sup>Required</sup> <a name="CreateReplicator" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateReplicator"></a>

```typescript
public readonly CreateReplicator: string[];
```

- *Type:* string[]

IAM actions required for the CreateReplicator API call.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopic API call.

---

##### `CreateVpcConnection`<sup>Required</sup> <a name="CreateVpcConnection" id="@cdk_utils/iam.kafka.KafkaOperations.property.CreateVpcConnection"></a>

```typescript
public readonly CreateVpcConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcConnection API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteClusterPolicy`<sup>Required</sup> <a name="DeleteClusterPolicy" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteClusterPolicy"></a>

```typescript
public readonly DeleteClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteClusterPolicy API call.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguration API call.

---

##### `DeleteReplicator`<sup>Required</sup> <a name="DeleteReplicator" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteReplicator"></a>

```typescript
public readonly DeleteReplicator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReplicator API call.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopic API call.

---

##### `DeleteVpcConnection`<sup>Required</sup> <a name="DeleteVpcConnection" id="@cdk_utils/iam.kafka.KafkaOperations.property.DeleteVpcConnection"></a>

```typescript
public readonly DeleteVpcConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcConnection API call.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannel API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeClusterOperation`<sup>Required</sup> <a name="DescribeClusterOperation" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterOperation"></a>

```typescript
public readonly DescribeClusterOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterOperation API call.

---

##### `DescribeClusterOperationV2`<sup>Required</sup> <a name="DescribeClusterOperationV2" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterOperationV2"></a>

```typescript
public readonly DescribeClusterOperationV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterOperationV2 API call.

---

##### `DescribeClusterV2`<sup>Required</sup> <a name="DescribeClusterV2" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeClusterV2"></a>

```typescript
public readonly DescribeClusterV2: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterV2 API call.

---

##### `DescribeConfiguration`<sup>Required</sup> <a name="DescribeConfiguration" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeConfiguration"></a>

```typescript
public readonly DescribeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfiguration API call.

---

##### `DescribeConfigurationRevision`<sup>Required</sup> <a name="DescribeConfigurationRevision" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeConfigurationRevision"></a>

```typescript
public readonly DescribeConfigurationRevision: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationRevision API call.

---

##### `DescribeReplicator`<sup>Required</sup> <a name="DescribeReplicator" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeReplicator"></a>

```typescript
public readonly DescribeReplicator: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReplicator API call.

---

##### `DescribeTopic`<sup>Required</sup> <a name="DescribeTopic" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeTopic"></a>

```typescript
public readonly DescribeTopic: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopic API call.

---

##### `DescribeTopicPartitions`<sup>Required</sup> <a name="DescribeTopicPartitions" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeTopicPartitions"></a>

```typescript
public readonly DescribeTopicPartitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicPartitions API call.

---

##### `DescribeVpcConnection`<sup>Required</sup> <a name="DescribeVpcConnection" id="@cdk_utils/iam.kafka.KafkaOperations.property.DescribeVpcConnection"></a>

```typescript
public readonly DescribeVpcConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcConnection API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListClientVpcConnections`<sup>Required</sup> <a name="ListClientVpcConnections" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListClientVpcConnections"></a>

```typescript
public readonly ListClientVpcConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListClientVpcConnections API call.

---

##### `ListClusterOperations`<sup>Required</sup> <a name="ListClusterOperations" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListClusterOperations"></a>

```typescript
public readonly ListClusterOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListClusterOperations API call.

---

##### `ListClusterOperationsV2`<sup>Required</sup> <a name="ListClusterOperationsV2" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListClusterOperationsV2"></a>

```typescript
public readonly ListClusterOperationsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListClusterOperationsV2 API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListClustersV2`<sup>Required</sup> <a name="ListClustersV2" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListClustersV2"></a>

```typescript
public readonly ListClustersV2: string[];
```

- *Type:* string[]

IAM actions required for the ListClustersV2 API call.

---

##### `ListConfigurationRevisions`<sup>Required</sup> <a name="ListConfigurationRevisions" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListConfigurationRevisions"></a>

```typescript
public readonly ListConfigurationRevisions: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationRevisions API call.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurations API call.

---

##### `ListKafkaVersions`<sup>Required</sup> <a name="ListKafkaVersions" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListKafkaVersions"></a>

```typescript
public readonly ListKafkaVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListKafkaVersions API call.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListNodes"></a>

```typescript
public readonly ListNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListNodes API call.

---

##### `ListReplicators`<sup>Required</sup> <a name="ListReplicators" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListReplicators"></a>

```typescript
public readonly ListReplicators: string[];
```

- *Type:* string[]

IAM actions required for the ListReplicators API call.

---

##### `ListScramSecrets`<sup>Required</sup> <a name="ListScramSecrets" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListScramSecrets"></a>

```typescript
public readonly ListScramSecrets: string[];
```

- *Type:* string[]

IAM actions required for the ListScramSecrets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListTopics"></a>

```typescript
public readonly ListTopics: string[];
```

- *Type:* string[]

IAM actions required for the ListTopics API call.

---

##### `ListVpcConnections`<sup>Required</sup> <a name="ListVpcConnections" id="@cdk_utils/iam.kafka.KafkaOperations.property.ListVpcConnections"></a>

```typescript
public readonly ListVpcConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcConnections API call.

---

##### `opGetBootstrapBrokers`<sup>Required</sup> <a name="opGetBootstrapBrokers" id="@cdk_utils/iam.kafka.KafkaOperations.property.opGetBootstrapBrokers"></a>

```typescript
public readonly opGetBootstrapBrokers: string[];
```

- *Type:* string[]

IAM actions required for the GetBootstrapBrokers API call.

---

##### `opGetClusterPolicy`<sup>Required</sup> <a name="opGetClusterPolicy" id="@cdk_utils/iam.kafka.KafkaOperations.property.opGetClusterPolicy"></a>

```typescript
public readonly opGetClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetClusterPolicy API call.

---

##### `opGetCompatibleKafkaVersions`<sup>Required</sup> <a name="opGetCompatibleKafkaVersions" id="@cdk_utils/iam.kafka.KafkaOperations.property.opGetCompatibleKafkaVersions"></a>

```typescript
public readonly opGetCompatibleKafkaVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetCompatibleKafkaVersions API call.

---

##### `PutClusterPolicy`<sup>Required</sup> <a name="PutClusterPolicy" id="@cdk_utils/iam.kafka.KafkaOperations.property.PutClusterPolicy"></a>

```typescript
public readonly PutClusterPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutClusterPolicy API call.

---

##### `RebootBroker`<sup>Required</sup> <a name="RebootBroker" id="@cdk_utils/iam.kafka.KafkaOperations.property.RebootBroker"></a>

```typescript
public readonly RebootBroker: string[];
```

- *Type:* string[]

IAM actions required for the RebootBroker API call.

---

##### `RejectClientVpcConnection`<sup>Required</sup> <a name="RejectClientVpcConnection" id="@cdk_utils/iam.kafka.KafkaOperations.property.RejectClientVpcConnection"></a>

```typescript
public readonly RejectClientVpcConnection: string[];
```

- *Type:* string[]

IAM actions required for the RejectClientVpcConnection API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kafka.KafkaOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kafka.KafkaOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBrokerCount`<sup>Required</sup> <a name="UpdateBrokerCount" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerCount"></a>

```typescript
public readonly UpdateBrokerCount: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrokerCount API call.

---

##### `UpdateBrokerStorage`<sup>Required</sup> <a name="UpdateBrokerStorage" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerStorage"></a>

```typescript
public readonly UpdateBrokerStorage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrokerStorage API call.

---

##### `UpdateBrokerType`<sup>Required</sup> <a name="UpdateBrokerType" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateBrokerType"></a>

```typescript
public readonly UpdateBrokerType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrokerType API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateClusterConfiguration`<sup>Required</sup> <a name="UpdateClusterConfiguration" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateClusterConfiguration"></a>

```typescript
public readonly UpdateClusterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterConfiguration API call.

---

##### `UpdateClusterKafkaVersion`<sup>Required</sup> <a name="UpdateClusterKafkaVersion" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateClusterKafkaVersion"></a>

```typescript
public readonly UpdateClusterKafkaVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterKafkaVersion API call.

---

##### `UpdateConfiguration`<sup>Required</sup> <a name="UpdateConfiguration" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateConfiguration"></a>

```typescript
public readonly UpdateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfiguration API call.

---

##### `UpdateConnectivity`<sup>Required</sup> <a name="UpdateConnectivity" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateConnectivity"></a>

```typescript
public readonly UpdateConnectivity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectivity API call.

---

##### `UpdateMonitoring`<sup>Required</sup> <a name="UpdateMonitoring" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateMonitoring"></a>

```typescript
public readonly UpdateMonitoring: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitoring API call.

---

##### `UpdateRebalancing`<sup>Required</sup> <a name="UpdateRebalancing" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateRebalancing"></a>

```typescript
public readonly UpdateRebalancing: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRebalancing API call.

---

##### `UpdateReplicationInfo`<sup>Required</sup> <a name="UpdateReplicationInfo" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateReplicationInfo"></a>

```typescript
public readonly UpdateReplicationInfo: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReplicationInfo API call.

---

##### `UpdateSecurity`<sup>Required</sup> <a name="UpdateSecurity" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateSecurity"></a>

```typescript
public readonly UpdateSecurity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurity API call.

---

##### `UpdateStorage`<sup>Required</sup> <a name="UpdateStorage" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateStorage"></a>

```typescript
public readonly UpdateStorage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStorage API call.

---

##### `UpdateTopic`<sup>Required</sup> <a name="UpdateTopic" id="@cdk_utils/iam.kafka.KafkaOperations.property.UpdateTopic"></a>

```typescript
public readonly UpdateTopic: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTopic API call.

---

### KafkaResources <a name="KafkaResources" id="@cdk_utils/iam.kafka.KafkaResources"></a>

ARN builders, validators, and parsers for kafka resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafka.KafkaResources.Initializer"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

new kafka.KafkaResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.configuration">configuration</a></code> | Builds an ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidConfigurationArn">isValidConfigurationArn</a></code> | Validates whether a string is a valid ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidReplicatorArn">isValidReplicatorArn</a></code> | Validates whether a string is a valid ARN for the replicator resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidTransactionalIdArn">isValidTransactionalIdArn</a></code> | Validates whether a string is a valid ARN for the transactional-id resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.isValidVPCConnectionArn">isValidVPCConnectionArn</a></code> | Validates whether a string is a valid ARN for the vpc-connection resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseConfigurationArn">parseConfigurationArn</a></code> | Parses a configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseReplicatorArn">parseReplicatorArn</a></code> | Parses a replicator ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseTransactionalIdArn">parseTransactionalIdArn</a></code> | Parses a transactional-id ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.parseVPCConnectionArn">parseVPCConnectionArn</a></code> | Parses a vpc-connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.replicator">replicator</a></code> | Builds an ARN for the replicator resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.topic">topic</a></code> | Builds an ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.transactionalId">transactionalId</a></code> | Builds an ARN for the transactional-id resource. |
| <code><a href="#@cdk_utils/iam.kafka.KafkaResources.vpcConnection">vpcConnection</a></code> | Builds an ARN for the vpc-connection resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.kafka.KafkaResources.channel"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.channel(props: KafkaChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaChannelArnProps">KafkaChannelArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.kafka.KafkaResources.cluster"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.cluster(props: KafkaClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaClusterArnProps">KafkaClusterArnProps</a>

---

##### `configuration` <a name="configuration" id="@cdk_utils/iam.kafka.KafkaResources.configuration"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.configuration(props: KafkaConfigurationArnProps)
```

Builds an ARN for the configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.configuration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaConfigurationArnProps">KafkaConfigurationArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.kafka.KafkaResources.group"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.group(props: KafkaGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaGroupArnProps">KafkaGroupArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidChannelArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidClusterArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationArn` <a name="isValidConfigurationArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidConfigurationArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidGroupArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReplicatorArn` <a name="isValidReplicatorArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidReplicatorArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidReplicatorArn(arn: string)
```

Validates whether a string is a valid ARN for the replicator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidReplicatorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidTopicArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTransactionalIdArn` <a name="isValidTransactionalIdArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidTransactionalIdArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidTransactionalIdArn(arn: string)
```

Validates whether a string is a valid ARN for the transactional-id resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidTransactionalIdArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCConnectionArn` <a name="isValidVPCConnectionArn" id="@cdk_utils/iam.kafka.KafkaResources.isValidVPCConnectionArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.isValidVPCConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the vpc-connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.isValidVPCConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.kafka.KafkaResources.parseChannelArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.kafka.KafkaResources.parseClusterArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationArn` <a name="parseConfigurationArn" id="@cdk_utils/iam.kafka.KafkaResources.parseConfigurationArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseConfigurationArn(arn: string)
```

Parses a configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.kafka.KafkaResources.parseGroupArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReplicatorArn` <a name="parseReplicatorArn" id="@cdk_utils/iam.kafka.KafkaResources.parseReplicatorArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseReplicatorArn(arn: string)
```

Parses a replicator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseReplicatorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.kafka.KafkaResources.parseTopicArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTransactionalIdArn` <a name="parseTransactionalIdArn" id="@cdk_utils/iam.kafka.KafkaResources.parseTransactionalIdArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseTransactionalIdArn(arn: string)
```

Parses a transactional-id ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseTransactionalIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCConnectionArn` <a name="parseVPCConnectionArn" id="@cdk_utils/iam.kafka.KafkaResources.parseVPCConnectionArn"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.parseVPCConnectionArn(arn: string)
```

Parses a vpc-connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafka.KafkaResources.parseVPCConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `replicator` <a name="replicator" id="@cdk_utils/iam.kafka.KafkaResources.replicator"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.replicator(props: KafkaReplicatorArnProps)
```

Builds an ARN for the replicator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.replicator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaReplicatorArnProps">KafkaReplicatorArnProps</a>

---

##### `topic` <a name="topic" id="@cdk_utils/iam.kafka.KafkaResources.topic"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.topic(props: KafkaTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaTopicArnProps">KafkaTopicArnProps</a>

---

##### `transactionalId` <a name="transactionalId" id="@cdk_utils/iam.kafka.KafkaResources.transactionalId"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.transactionalId(props: KafkaTransactionalIdArnProps)
```

Builds an ARN for the transactional-id resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.transactionalId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaTransactionalIdArnProps">KafkaTransactionalIdArnProps</a>

---

##### `vpcConnection` <a name="vpcConnection" id="@cdk_utils/iam.kafka.KafkaResources.vpcConnection"></a>

```typescript
import { kafka } from '@cdk_utils/iam'

kafka.KafkaResources.vpcConnection(props: KafkaVPCConnectionArnProps)
```

Builds an ARN for the vpc-connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafka.KafkaResources.vpcConnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafka.KafkaVPCConnectionArnProps">KafkaVPCConnectionArnProps</a>

---




