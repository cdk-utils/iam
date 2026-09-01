# `kafkaconnect` Submodule <a name="`kafkaconnect` Submodule" id="@cdk_utils/iam.kafkaconnect"></a>


## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorArnComponents <a name="KafkaconnectConnectorArnComponents" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectConnectorArnComponents: kafkaconnect.KafkaconnectConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.connectorName">connectorName</a></code> | <code>string</code> | The ConnectorName component. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The ConnectorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### KafkaconnectConnectorArnProps <a name="KafkaconnectConnectorArnProps" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectConnectorArnProps: kafkaconnect.KafkaconnectConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.connectorName">connectorName</a></code> | <code>string</code> | The ConnectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The ConnectorName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaconnectConnectorOperationArnComponents <a name="KafkaconnectConnectorOperationArnComponents" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents"></a>

Parsed components of a connector operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectConnectorOperationArnComponents: kafkaconnect.KafkaconnectConnectorOperationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.connectorName">connectorName</a></code> | <code>string</code> | The ConnectorName component. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.connectorUuid">connectorUuid</a></code> | <code>string</code> | The ConnectorUUID component. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The ConnectorName component.

---

##### `connectorUuid`<sup>Required</sup> <a name="connectorUuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.connectorUuid"></a>

```typescript
public readonly connectorUuid: string;
```

- *Type:* string

The ConnectorUUID component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### KafkaconnectConnectorOperationArnProps <a name="KafkaconnectConnectorOperationArnProps" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps"></a>

Properties for building a connector operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectConnectorOperationArnProps: kafkaconnect.KafkaconnectConnectorOperationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.connectorName">connectorName</a></code> | <code>string</code> | The ConnectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.connectorUuid">connectorUuid</a></code> | <code>string</code> | The ConnectorUUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The ConnectorName component of the ARN.

---

##### `connectorUuid`<sup>Required</sup> <a name="connectorUuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.connectorUuid"></a>

```typescript
public readonly connectorUuid: string;
```

- *Type:* string

The ConnectorUUID component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaconnectCustomPluginArnComponents <a name="KafkaconnectCustomPluginArnComponents" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents"></a>

Parsed components of a custom plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectCustomPluginArnComponents: kafkaconnect.KafkaconnectCustomPluginArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.customPluginName">customPluginName</a></code> | <code>string</code> | The CustomPluginName component. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `customPluginName`<sup>Required</sup> <a name="customPluginName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.customPluginName"></a>

```typescript
public readonly customPluginName: string;
```

- *Type:* string

The CustomPluginName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### KafkaconnectCustomPluginArnProps <a name="KafkaconnectCustomPluginArnProps" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps"></a>

Properties for building a custom plugin ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectCustomPluginArnProps: kafkaconnect.KafkaconnectCustomPluginArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.customPluginName">customPluginName</a></code> | <code>string</code> | The CustomPluginName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `customPluginName`<sup>Required</sup> <a name="customPluginName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.customPluginName"></a>

```typescript
public readonly customPluginName: string;
```

- *Type:* string

The CustomPluginName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KafkaconnectWorkerConfigurationArnComponents <a name="KafkaconnectWorkerConfigurationArnComponents" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents"></a>

Parsed components of a worker configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectWorkerConfigurationArnComponents: kafkaconnect.KafkaconnectWorkerConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.workerConfigurationName">workerConfigurationName</a></code> | <code>string</code> | The WorkerConfigurationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

##### `workerConfigurationName`<sup>Required</sup> <a name="workerConfigurationName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnComponents.property.workerConfigurationName"></a>

```typescript
public readonly workerConfigurationName: string;
```

- *Type:* string

The WorkerConfigurationName component.

---

### KafkaconnectWorkerConfigurationArnProps <a name="KafkaconnectWorkerConfigurationArnProps" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps"></a>

Properties for building a worker configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

const kafkaconnectWorkerConfigurationArnProps: kafkaconnect.KafkaconnectWorkerConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.workerConfigurationName">workerConfigurationName</a></code> | <code>string</code> | The WorkerConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `workerConfigurationName`<sup>Required</sup> <a name="workerConfigurationName" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.workerConfigurationName"></a>

```typescript
public readonly workerConfigurationName: string;
```

- *Type:* string

The WorkerConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectActions <a name="KafkaconnectActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions"></a>

IAM action constants for the kafkaconnect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

new kafkaconnect.KafkaconnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateConnector">CreateConnector</a></code> | <code>string</code> | [Write] kafkaconnect:CreateConnector. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateCustomPlugin">CreateCustomPlugin</a></code> | <code>string</code> | [Write] kafkaconnect:CreateCustomPlugin. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateWorkerConfiguration">CreateWorkerConfiguration</a></code> | <code>string</code> | [Write] kafkaconnect:CreateWorkerConfiguration. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteConnector">DeleteConnector</a></code> | <code>string</code> | [Write] kafkaconnect:DeleteConnector. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteCustomPlugin">DeleteCustomPlugin</a></code> | <code>string</code> | [Write] kafkaconnect:DeleteCustomPlugin. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteWorkerConfiguration">DeleteWorkerConfiguration</a></code> | <code>string</code> | [Write] kafkaconnect:DeleteWorkerConfiguration. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeConnector">DescribeConnector</a></code> | <code>string</code> | [Read] kafkaconnect:DescribeConnector. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeConnectorOperation">DescribeConnectorOperation</a></code> | <code>string</code> | [Read] kafkaconnect:DescribeConnectorOperation. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeCustomPlugin">DescribeCustomPlugin</a></code> | <code>string</code> | [Read] kafkaconnect:DescribeCustomPlugin. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeWorkerConfiguration">DescribeWorkerConfiguration</a></code> | <code>string</code> | [Read] kafkaconnect:DescribeWorkerConfiguration. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListConnectorOperations">ListConnectorOperations</a></code> | <code>string</code> | [Read] kafkaconnect:ListConnectorOperations. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [Read] kafkaconnect:ListConnectors. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListCustomPlugins">ListCustomPlugins</a></code> | <code>string</code> | [Read] kafkaconnect:ListCustomPlugins. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kafkaconnect:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListWorkerConfigurations">ListWorkerConfigurations</a></code> | <code>string</code> | [Read] kafkaconnect:ListWorkerConfigurations. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kafkaconnect:TagResource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kafkaconnect:UntagResource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.UpdateConnector">UpdateConnector</a></code> | <code>string</code> | [Write] kafkaconnect:UpdateConnector. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string;
```

- *Type:* string

[Write] kafkaconnect:CreateConnector.

---

##### `CreateCustomPlugin`<sup>Required</sup> <a name="CreateCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateCustomPlugin"></a>

```typescript
public readonly CreateCustomPlugin: string;
```

- *Type:* string

[Write] kafkaconnect:CreateCustomPlugin.

---

##### `CreateWorkerConfiguration`<sup>Required</sup> <a name="CreateWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.CreateWorkerConfiguration"></a>

```typescript
public readonly CreateWorkerConfiguration: string;
```

- *Type:* string

[Write] kafkaconnect:CreateWorkerConfiguration.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string;
```

- *Type:* string

[Write] kafkaconnect:DeleteConnector.

---

##### `DeleteCustomPlugin`<sup>Required</sup> <a name="DeleteCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteCustomPlugin"></a>

```typescript
public readonly DeleteCustomPlugin: string;
```

- *Type:* string

[Write] kafkaconnect:DeleteCustomPlugin.

---

##### `DeleteWorkerConfiguration`<sup>Required</sup> <a name="DeleteWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DeleteWorkerConfiguration"></a>

```typescript
public readonly DeleteWorkerConfiguration: string;
```

- *Type:* string

[Write] kafkaconnect:DeleteWorkerConfiguration.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string;
```

- *Type:* string

[Read] kafkaconnect:DescribeConnector.

---

##### `DescribeConnectorOperation`<sup>Required</sup> <a name="DescribeConnectorOperation" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeConnectorOperation"></a>

```typescript
public readonly DescribeConnectorOperation: string;
```

- *Type:* string

[Read] kafkaconnect:DescribeConnectorOperation.

---

##### `DescribeCustomPlugin`<sup>Required</sup> <a name="DescribeCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeCustomPlugin"></a>

```typescript
public readonly DescribeCustomPlugin: string;
```

- *Type:* string

[Read] kafkaconnect:DescribeCustomPlugin.

---

##### `DescribeWorkerConfiguration`<sup>Required</sup> <a name="DescribeWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.DescribeWorkerConfiguration"></a>

```typescript
public readonly DescribeWorkerConfiguration: string;
```

- *Type:* string

[Read] kafkaconnect:DescribeWorkerConfiguration.

---

##### `ListConnectorOperations`<sup>Required</sup> <a name="ListConnectorOperations" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListConnectorOperations"></a>

```typescript
public readonly ListConnectorOperations: string;
```

- *Type:* string

[Read] kafkaconnect:ListConnectorOperations.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[Read] kafkaconnect:ListConnectors.

---

##### `ListCustomPlugins`<sup>Required</sup> <a name="ListCustomPlugins" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListCustomPlugins"></a>

```typescript
public readonly ListCustomPlugins: string;
```

- *Type:* string

[Read] kafkaconnect:ListCustomPlugins.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kafkaconnect:ListTagsForResource.

---

##### `ListWorkerConfigurations`<sup>Required</sup> <a name="ListWorkerConfigurations" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.ListWorkerConfigurations"></a>

```typescript
public readonly ListWorkerConfigurations: string;
```

- *Type:* string

[Read] kafkaconnect:ListWorkerConfigurations.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kafkaconnect:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kafkaconnect:UntagResource.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectActions.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string;
```

- *Type:* string

[Write] kafkaconnect:UpdateConnector.

---

### KafkaconnectConditions <a name="KafkaconnectConditions" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions"></a>

Condition key constants and builders for kafkaconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

new kafkaconnect.KafkaconnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.requestTag"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.resourceTag"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.tagKeys"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kafkaconnect.KafkaconnectConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### KafkaconnectOperations <a name="KafkaconnectOperations" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations"></a>

API operation to required IAM actions mapping for kafkaconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

new kafkaconnect.KafkaconnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateConnector">CreateConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateConnector API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateCustomPlugin">CreateCustomPlugin</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomPlugin API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateWorkerConfiguration">CreateWorkerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteConnector">DeleteConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnector API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteCustomPlugin">DeleteCustomPlugin</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomPlugin API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteWorkerConfiguration">DeleteWorkerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeConnector">DescribeConnector</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnector API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeConnectorOperation">DescribeConnectorOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectorOperation API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeCustomPlugin">DescribeCustomPlugin</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomPlugin API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeWorkerConfiguration">DescribeWorkerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListConnectorOperations">ListConnectorOperations</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorOperations API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListCustomPlugins">ListCustomPlugins</a></code> | <code>string[]</code> | IAM actions required for the ListCustomPlugins API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListWorkerConfigurations">ListWorkerConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListWorkerConfigurations API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.RestartConnector">RestartConnector</a></code> | <code>string[]</code> | IAM actions required for the RestartConnector API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.UpdateConnector">UpdateConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnector API call. |

---

##### `CreateConnector`<sup>Required</sup> <a name="CreateConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateConnector"></a>

```typescript
public readonly CreateConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnector API call.

---

##### `CreateCustomPlugin`<sup>Required</sup> <a name="CreateCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateCustomPlugin"></a>

```typescript
public readonly CreateCustomPlugin: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomPlugin API call.

---

##### `CreateWorkerConfiguration`<sup>Required</sup> <a name="CreateWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.CreateWorkerConfiguration"></a>

```typescript
public readonly CreateWorkerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkerConfiguration API call.

---

##### `DeleteConnector`<sup>Required</sup> <a name="DeleteConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteConnector"></a>

```typescript
public readonly DeleteConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnector API call.

---

##### `DeleteCustomPlugin`<sup>Required</sup> <a name="DeleteCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteCustomPlugin"></a>

```typescript
public readonly DeleteCustomPlugin: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomPlugin API call.

---

##### `DeleteWorkerConfiguration`<sup>Required</sup> <a name="DeleteWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DeleteWorkerConfiguration"></a>

```typescript
public readonly DeleteWorkerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkerConfiguration API call.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnector API call.

---

##### `DescribeConnectorOperation`<sup>Required</sup> <a name="DescribeConnectorOperation" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeConnectorOperation"></a>

```typescript
public readonly DescribeConnectorOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectorOperation API call.

---

##### `DescribeCustomPlugin`<sup>Required</sup> <a name="DescribeCustomPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeCustomPlugin"></a>

```typescript
public readonly DescribeCustomPlugin: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomPlugin API call.

---

##### `DescribeWorkerConfiguration`<sup>Required</sup> <a name="DescribeWorkerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.DescribeWorkerConfiguration"></a>

```typescript
public readonly DescribeWorkerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkerConfiguration API call.

---

##### `ListConnectorOperations`<sup>Required</sup> <a name="ListConnectorOperations" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListConnectorOperations"></a>

```typescript
public readonly ListConnectorOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorOperations API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListCustomPlugins`<sup>Required</sup> <a name="ListCustomPlugins" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListCustomPlugins"></a>

```typescript
public readonly ListCustomPlugins: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomPlugins API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkerConfigurations`<sup>Required</sup> <a name="ListWorkerConfigurations" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.ListWorkerConfigurations"></a>

```typescript
public readonly ListWorkerConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkerConfigurations API call.

---

##### `RestartConnector`<sup>Required</sup> <a name="RestartConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.RestartConnector"></a>

```typescript
public readonly RestartConnector: string[];
```

- *Type:* string[]

IAM actions required for the RestartConnector API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnector`<sup>Required</sup> <a name="UpdateConnector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectOperations.property.UpdateConnector"></a>

```typescript
public readonly UpdateConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnector API call.

---

### KafkaconnectResources <a name="KafkaconnectResources" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources"></a>

ARN builders, validators, and parsers for kafkaconnect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.Initializer"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

new kafkaconnect.KafkaconnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connectorOperation">connectorOperation</a></code> | Builds an ARN for the connector operation resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.customPlugin">customPlugin</a></code> | Builds an ARN for the custom plugin resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorOperationArn">isValidConnectorOperationArn</a></code> | Validates whether a string is a valid ARN for the connector operation resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidCustomPluginArn">isValidCustomPluginArn</a></code> | Validates whether a string is a valid ARN for the custom plugin resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidWorkerConfigurationArn">isValidWorkerConfigurationArn</a></code> | Validates whether a string is a valid ARN for the worker configuration resource. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorOperationArn">parseConnectorOperationArn</a></code> | Parses a connector operation ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseCustomPluginArn">parseCustomPluginArn</a></code> | Parses a custom plugin ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseWorkerConfigurationArn">parseWorkerConfigurationArn</a></code> | Parses a worker configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectResources.workerConfiguration">workerConfiguration</a></code> | Builds an ARN for the worker configuration resource. |

---

##### `connector` <a name="connector" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connector"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.connector(props: KafkaconnectConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorArnProps">KafkaconnectConnectorArnProps</a>

---

##### `connectorOperation` <a name="connectorOperation" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connectorOperation"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.connectorOperation(props: KafkaconnectConnectorOperationArnProps)
```

Builds an ARN for the connector operation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.connectorOperation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectConnectorOperationArnProps">KafkaconnectConnectorOperationArnProps</a>

---

##### `customPlugin` <a name="customPlugin" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.customPlugin"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.customPlugin(props: KafkaconnectCustomPluginArnProps)
```

Builds an ARN for the custom plugin resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.customPlugin.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectCustomPluginArnProps">KafkaconnectCustomPluginArnProps</a>

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorOperationArn` <a name="isValidConnectorOperationArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorOperationArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.isValidConnectorOperationArn(arn: string)
```

Validates whether a string is a valid ARN for the connector operation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidConnectorOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomPluginArn` <a name="isValidCustomPluginArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidCustomPluginArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.isValidCustomPluginArn(arn: string)
```

Validates whether a string is a valid ARN for the custom plugin resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidCustomPluginArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkerConfigurationArn` <a name="isValidWorkerConfigurationArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidWorkerConfigurationArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.isValidWorkerConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the worker configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.isValidWorkerConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorOperationArn` <a name="parseConnectorOperationArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorOperationArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.parseConnectorOperationArn(arn: string)
```

Parses a connector operation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseConnectorOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomPluginArn` <a name="parseCustomPluginArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseCustomPluginArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.parseCustomPluginArn(arn: string)
```

Parses a custom plugin ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseCustomPluginArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkerConfigurationArn` <a name="parseWorkerConfigurationArn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseWorkerConfigurationArn"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.parseWorkerConfigurationArn(arn: string)
```

Parses a worker configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.parseWorkerConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `workerConfiguration` <a name="workerConfiguration" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.workerConfiguration"></a>

```typescript
import { kafkaconnect } from '@cdk_utils/iam'

kafkaconnect.KafkaconnectResources.workerConfiguration(props: KafkaconnectWorkerConfigurationArnProps)
```

Builds an ARN for the worker configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kafkaconnect.KafkaconnectResources.workerConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kafkaconnect.KafkaconnectWorkerConfigurationArnProps">KafkaconnectWorkerConfigurationArnProps</a>

---




