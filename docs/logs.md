# `logs` Submodule <a name="`logs` Submodule" id="@cdk_utils/iam.logs"></a>


## Structs <a name="Structs" id="Structs"></a>

### LogsAnomalyDetectorArnComponents <a name="LogsAnomalyDetectorArnComponents" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents"></a>

Parsed components of a anomaly-detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsAnomalyDetectorArnComponents: logs.LogsAnomalyDetectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsAnomalyDetectorArnProps <a name="LogsAnomalyDetectorArnProps" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps"></a>

Properties for building a anomaly-detector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsAnomalyDetectorArnProps: logs.LogsAnomalyDetectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.detectorId">detectorId</a></code> | <code>string</code> | The DetectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

The DetectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsDeliveryArnComponents <a name="LogsDeliveryArnComponents" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents"></a>

Parsed components of a delivery ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliveryArnComponents: logs.LogsDeliveryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.deliveryName">deliveryName</a></code> | <code>string</code> | The DeliveryName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deliveryName`<sup>Required</sup> <a name="deliveryName" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.deliveryName"></a>

```typescript
public readonly deliveryName: string;
```

- *Type:* string

The DeliveryName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliveryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsDeliveryArnProps <a name="LogsDeliveryArnProps" id="@cdk_utils/iam.logs.LogsDeliveryArnProps"></a>

Properties for building a delivery ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliveryArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliveryArnProps: logs.LogsDeliveryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnProps.property.deliveryName">deliveryName</a></code> | <code>string</code> | The DeliveryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deliveryName`<sup>Required</sup> <a name="deliveryName" id="@cdk_utils/iam.logs.LogsDeliveryArnProps.property.deliveryName"></a>

```typescript
public readonly deliveryName: string;
```

- *Type:* string

The DeliveryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliveryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliveryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliveryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsDeliveryDestinationArnComponents <a name="LogsDeliveryDestinationArnComponents" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents"></a>

Parsed components of a delivery-destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliveryDestinationArnComponents: logs.LogsDeliveryDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>string</code> | The DeliveryDestinationName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deliveryDestinationName`<sup>Required</sup> <a name="deliveryDestinationName" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.deliveryDestinationName"></a>

```typescript
public readonly deliveryDestinationName: string;
```

- *Type:* string

The DeliveryDestinationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsDeliveryDestinationArnProps <a name="LogsDeliveryDestinationArnProps" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps"></a>

Properties for building a delivery-destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliveryDestinationArnProps: logs.LogsDeliveryDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>string</code> | The DeliveryDestinationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deliveryDestinationName`<sup>Required</sup> <a name="deliveryDestinationName" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.deliveryDestinationName"></a>

```typescript
public readonly deliveryDestinationName: string;
```

- *Type:* string

The DeliveryDestinationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsDeliverySourceArnComponents <a name="LogsDeliverySourceArnComponents" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents"></a>

Parsed components of a delivery-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliverySourceArnComponents: logs.LogsDeliverySourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.deliverySourceName">deliverySourceName</a></code> | <code>string</code> | The DeliverySourceName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.deliverySourceName"></a>

```typescript
public readonly deliverySourceName: string;
```

- *Type:* string

The DeliverySourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliverySourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsDeliverySourceArnProps <a name="LogsDeliverySourceArnProps" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps"></a>

Properties for building a delivery-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDeliverySourceArnProps: logs.LogsDeliverySourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.deliverySourceName">deliverySourceName</a></code> | <code>string</code> | The DeliverySourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.deliverySourceName"></a>

```typescript
public readonly deliverySourceName: string;
```

- *Type:* string

The DeliverySourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDeliverySourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsDestinationArnComponents <a name="LogsDestinationArnComponents" id="@cdk_utils/iam.logs.LogsDestinationArnComponents"></a>

Parsed components of a destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDestinationArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDestinationArnComponents: logs.LogsDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnComponents.property.destinationName">destinationName</a></code> | <code>string</code> | The DestinationName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdk_utils/iam.logs.LogsDestinationArnComponents.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

The DestinationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsDestinationArnProps <a name="LogsDestinationArnProps" id="@cdk_utils/iam.logs.LogsDestinationArnProps"></a>

Properties for building a destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsDestinationArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsDestinationArnProps: logs.LogsDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnProps.property.destinationName">destinationName</a></code> | <code>string</code> | The DestinationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdk_utils/iam.logs.LogsDestinationArnProps.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

The DestinationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsLogGroupArnComponents <a name="LogsLogGroupArnComponents" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents"></a>

Parsed components of a log-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLogGroupArnComponents: logs.LogsLogGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.logGroupName">logGroupName</a></code> | <code>string</code> | The LogGroupName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The LogGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLogGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsLogGroupArnProps <a name="LogsLogGroupArnProps" id="@cdk_utils/iam.logs.LogsLogGroupArnProps"></a>

Properties for building a log-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLogGroupArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLogGroupArnProps: logs.LogsLogGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | The LogGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdk_utils/iam.logs.LogsLogGroupArnProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The LogGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLogGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLogGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLogGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsLogStreamArnComponents <a name="LogsLogStreamArnComponents" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents"></a>

Parsed components of a log-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLogStreamArnComponents: logs.LogsLogStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.logGroupName">logGroupName</a></code> | <code>string</code> | The LogGroupName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.logStreamName">logStreamName</a></code> | <code>string</code> | The LogStreamName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The LogGroupName component.

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

The LogStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLogStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsLogStreamArnProps <a name="LogsLogStreamArnProps" id="@cdk_utils/iam.logs.LogsLogStreamArnProps"></a>

Properties for building a log-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLogStreamArnProps: logs.LogsLogStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps.property.logGroupName">logGroupName</a></code> | <code>string</code> | The LogGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps.property.logStreamName">logStreamName</a></code> | <code>string</code> | The LogStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

The LogGroupName component of the ARN.

---

##### `logStreamName`<sup>Required</sup> <a name="logStreamName" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.property.logStreamName"></a>

```typescript
public readonly logStreamName: string;
```

- *Type:* string

The LogStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLogStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsLookupTableArnComponents <a name="LogsLookupTableArnComponents" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents"></a>

Parsed components of a lookup-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLookupTableArnComponents: logs.LogsLookupTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.lookupTableName">lookupTableName</a></code> | <code>string</code> | The LookupTableName component. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `lookupTableName`<sup>Required</sup> <a name="lookupTableName" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.lookupTableName"></a>

```typescript
public readonly lookupTableName: string;
```

- *Type:* string

The LookupTableName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLookupTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LogsLookupTableArnProps <a name="LogsLookupTableArnProps" id="@cdk_utils/iam.logs.LogsLookupTableArnProps"></a>

Properties for building a lookup-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsLookupTableArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsLookupTableArnProps: logs.LogsLookupTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnProps.property.lookupTableName">lookupTableName</a></code> | <code>string</code> | The LookupTableName component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsLookupTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `lookupTableName`<sup>Required</sup> <a name="lookupTableName" id="@cdk_utils/iam.logs.LogsLookupTableArnProps.property.lookupTableName"></a>

```typescript
public readonly lookupTableName: string;
```

- *Type:* string

The LookupTableName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsLookupTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsLookupTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsLookupTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LogsScheduledQueryArnComponents <a name="LogsScheduledQueryArnComponents" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents"></a>

Parsed components of a scheduled-query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsScheduledQueryArnComponents: logs.LogsScheduledQueryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.scheduledQueryId">scheduledQueryId</a></code> | <code>string</code> | The ScheduledQueryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scheduledQueryId`<sup>Required</sup> <a name="scheduledQueryId" id="@cdk_utils/iam.logs.LogsScheduledQueryArnComponents.property.scheduledQueryId"></a>

```typescript
public readonly scheduledQueryId: string;
```

- *Type:* string

The ScheduledQueryId component.

---

### LogsScheduledQueryArnProps <a name="LogsScheduledQueryArnProps" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps"></a>

Properties for building a scheduled-query ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

const logsScheduledQueryArnProps: logs.LogsScheduledQueryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.scheduledQueryId">scheduledQueryId</a></code> | <code>string</code> | The ScheduledQueryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scheduledQueryId`<sup>Required</sup> <a name="scheduledQueryId" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.scheduledQueryId"></a>

```typescript
public readonly scheduledQueryId: string;
```

- *Type:* string

The ScheduledQueryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.logs.LogsScheduledQueryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LogsActions <a name="LogsActions" id="@cdk_utils/iam.logs.LogsActions"></a>

IAM action constants for the logs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.logs.LogsActions.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

new logs.LogsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetDataProtectionPolicy">actionGetDataProtectionPolicy</a></code> | <code>string</code> | [Read] logs:GetDataProtectionPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetDelivery">actionGetDelivery</a></code> | <code>string</code> | [Read] logs:GetDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetDeliveryDestination">actionGetDeliveryDestination</a></code> | <code>string</code> | [Read] logs:GetDeliveryDestination. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetDeliveryDestinationPolicy">actionGetDeliveryDestinationPolicy</a></code> | <code>string</code> | [Read] logs:GetDeliveryDestinationPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetDeliverySource">actionGetDeliverySource</a></code> | <code>string</code> | [Read] logs:GetDeliverySource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetIntegration">actionGetIntegration</a></code> | <code>string</code> | [Read] logs:GetIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogAnomalyDetector">actionGetLogAnomalyDetector</a></code> | <code>string</code> | [Read] logs:GetLogAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogDelivery">actionGetLogDelivery</a></code> | <code>string</code> | [Read] logs:GetLogDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogEvents">actionGetLogEvents</a></code> | <code>string</code> | [Read] logs:GetLogEvents. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogFields">actionGetLogFields</a></code> | <code>string</code> | [Read] logs:GetLogFields. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogGroupFields">actionGetLogGroupFields</a></code> | <code>string</code> | [Read] logs:GetLogGroupFields. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLogRecord">actionGetLogRecord</a></code> | <code>string</code> | [Read] logs:GetLogRecord. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetLookupTable">actionGetLookupTable</a></code> | <code>string</code> | [Read] logs:GetLookupTable. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetQueryResults">actionGetQueryResults</a></code> | <code>string</code> | [Read] logs:GetQueryResults. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetScheduledQuery">actionGetScheduledQuery</a></code> | <code>string</code> | [Read] logs:GetScheduledQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetScheduledQueryHistory">actionGetScheduledQueryHistory</a></code> | <code>string</code> | [Read] logs:GetScheduledQueryHistory. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetStorageTierPolicy">actionGetStorageTierPolicy</a></code> | <code>string</code> | [Read] logs:GetStorageTierPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.actionGetTransformer">actionGetTransformer</a></code> | <code>string</code> | [Read] logs:GetTransformer. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AssociateKmsKey">AssociateKmsKey</a></code> | <code>string</code> | [Write] logs:AssociateKmsKey. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.AssociateSourceToS3TableIntegration">AssociateSourceToS3TableIntegration</a></code> | <code>string</code> | [Write] logs:AssociateSourceToS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [Write] logs:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CancelExportTask">CancelExportTask</a></code> | <code>string</code> | [Write] logs:CancelExportTask. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CancelImportTask">CancelImportTask</a></code> | <code>string</code> | [Write] logs:CancelImportTask. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateDelivery">CreateDelivery</a></code> | <code>string</code> | [Write] logs:CreateDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateExportTask">CreateExportTask</a></code> | <code>string</code> | [Write] logs:CreateExportTask. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateImportTask">CreateImportTask</a></code> | <code>string</code> | [Write] logs:CreateImportTask. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateLogAnomalyDetector">CreateLogAnomalyDetector</a></code> | <code>string</code> | [Write] logs:CreateLogAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateLogDelivery">CreateLogDelivery</a></code> | <code>string</code> | [Write] logs:CreateLogDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateLogGroup">CreateLogGroup</a></code> | <code>string</code> | [Write] logs:CreateLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateLogStream">CreateLogStream</a></code> | <code>string</code> | [Write] logs:CreateLogStream. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateLookupTable">CreateLookupTable</a></code> | <code>string</code> | [Write] logs:CreateLookupTable. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.CreateScheduledQuery">CreateScheduledQuery</a></code> | <code>string</code> | [Write] logs:CreateScheduledQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteAccountPolicy">DeleteAccountPolicy</a></code> | <code>string</code> | [Write] logs:DeleteAccountPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDataProtectionPolicy">DeleteDataProtectionPolicy</a></code> | <code>string</code> | [Write] logs:DeleteDataProtectionPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDelivery">DeleteDelivery</a></code> | <code>string</code> | [Write] logs:DeleteDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDeliveryDestination">DeleteDeliveryDestination</a></code> | <code>string</code> | [Write] logs:DeleteDeliveryDestination. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDeliveryDestinationPolicy">DeleteDeliveryDestinationPolicy</a></code> | <code>string</code> | [Write] logs:DeleteDeliveryDestinationPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDeliverySource">DeleteDeliverySource</a></code> | <code>string</code> | [Write] logs:DeleteDeliverySource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteDestination">DeleteDestination</a></code> | <code>string</code> | [Write] logs:DeleteDestination. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteIndexPolicy">DeleteIndexPolicy</a></code> | <code>string</code> | [Write] logs:DeleteIndexPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string</code> | [Write] logs:DeleteIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteLogAnomalyDetector">DeleteLogAnomalyDetector</a></code> | <code>string</code> | [Write] logs:DeleteLogAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteLogDelivery">DeleteLogDelivery</a></code> | <code>string</code> | [Write] logs:DeleteLogDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteLogGroup">DeleteLogGroup</a></code> | <code>string</code> | [Write] logs:DeleteLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteLogStream">DeleteLogStream</a></code> | <code>string</code> | [Write] logs:DeleteLogStream. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteLookupTable">DeleteLookupTable</a></code> | <code>string</code> | [Write] logs:DeleteLookupTable. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteMetricFilter">DeleteMetricFilter</a></code> | <code>string</code> | [Write] logs:DeleteMetricFilter. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeletePipelineRule">DeletePipelineRule</a></code> | <code>string</code> | [Write] logs:DeletePipelineRule. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteQueryDefinition">DeleteQueryDefinition</a></code> | <code>string</code> | [Write] logs:DeleteQueryDefinition. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] logs:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code>string</code> | [Write] logs:DeleteRetentionPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteScheduledQuery">DeleteScheduledQuery</a></code> | <code>string</code> | [Write] logs:DeleteScheduledQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteSubscriptionFilter">DeleteSubscriptionFilter</a></code> | <code>string</code> | [Write] logs:DeleteSubscriptionFilter. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteSyslogConfiguration">DeleteSyslogConfiguration</a></code> | <code>string</code> | [Write] logs:DeleteSyslogConfiguration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DeleteTransformer">DeleteTransformer</a></code> | <code>string</code> | [Write] logs:DeleteTransformer. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeAccountPolicies">DescribeAccountPolicies</a></code> | <code>string</code> | [List] logs:DescribeAccountPolicies. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeConfigurationTemplates">DescribeConfigurationTemplates</a></code> | <code>string</code> | [List] logs:DescribeConfigurationTemplates. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeDeliveries">DescribeDeliveries</a></code> | <code>string</code> | [List] logs:DescribeDeliveries. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeDeliveryDestinations">DescribeDeliveryDestinations</a></code> | <code>string</code> | [List] logs:DescribeDeliveryDestinations. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeDeliverySources">DescribeDeliverySources</a></code> | <code>string</code> | [List] logs:DescribeDeliverySources. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeDestinations">DescribeDestinations</a></code> | <code>string</code> | [List] logs:DescribeDestinations. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string</code> | [List] logs:DescribeExportTasks. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeFieldIndexes">DescribeFieldIndexes</a></code> | <code>string</code> | [List] logs:DescribeFieldIndexes. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeImportTaskBatches">DescribeImportTaskBatches</a></code> | <code>string</code> | [List] logs:DescribeImportTaskBatches. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeImportTasks">DescribeImportTasks</a></code> | <code>string</code> | [List] logs:DescribeImportTasks. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeIndexPolicies">DescribeIndexPolicies</a></code> | <code>string</code> | [List] logs:DescribeIndexPolicies. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeLogGroups">DescribeLogGroups</a></code> | <code>string</code> | [List] logs:DescribeLogGroups. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeLogStreams">DescribeLogStreams</a></code> | <code>string</code> | [List] logs:DescribeLogStreams. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeLookupTables">DescribeLookupTables</a></code> | <code>string</code> | [List] logs:DescribeLookupTables. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeMetricFilters">DescribeMetricFilters</a></code> | <code>string</code> | [List] logs:DescribeMetricFilters. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeQueries">DescribeQueries</a></code> | <code>string</code> | [List] logs:DescribeQueries. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeQueryDefinitions">DescribeQueryDefinitions</a></code> | <code>string</code> | [List] logs:DescribeQueryDefinitions. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeResourcePolicies">DescribeResourcePolicies</a></code> | <code>string</code> | [List] logs:DescribeResourcePolicies. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DescribeSubscriptionFilters">DescribeSubscriptionFilters</a></code> | <code>string</code> | [List] logs:DescribeSubscriptionFilters. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DisassociateKmsKey">DisassociateKmsKey</a></code> | <code>string</code> | [Write] logs:DisassociateKmsKey. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.DisassociateSourceFromS3TableIntegration">DisassociateSourceFromS3TableIntegration</a></code> | <code>string</code> | [Write] logs:DisassociateSourceFromS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.FilterLogEvents">FilterLogEvents</a></code> | <code>string</code> | [Read] logs:FilterLogEvents. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.IntegrateWithS3Table">IntegrateWithS3Table</a></code> | <code>string</code> | [Write] logs:IntegrateWithS3Table. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.Link">Link</a></code> | <code>string</code> | [Write] logs:Link. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListAggregateLogGroupSummaries">ListAggregateLogGroupSummaries</a></code> | <code>string</code> | [List] logs:ListAggregateLogGroupSummaries. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListAnomalies">ListAnomalies</a></code> | <code>string</code> | [List] logs:ListAnomalies. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListEntitiesForLogGroup">ListEntitiesForLogGroup</a></code> | <code>string</code> | [List] logs:ListEntitiesForLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListIntegrations">ListIntegrations</a></code> | <code>string</code> | [List] logs:ListIntegrations. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListLogAnomalyDetectors">ListLogAnomalyDetectors</a></code> | <code>string</code> | [List] logs:ListLogAnomalyDetectors. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListLogDeliveries">ListLogDeliveries</a></code> | <code>string</code> | [List] logs:ListLogDeliveries. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListLogGroups">ListLogGroups</a></code> | <code>string</code> | [List] logs:ListLogGroups. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListLogGroupsForEntity">ListLogGroupsForEntity</a></code> | <code>string</code> | [List] logs:ListLogGroupsForEntity. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListLogGroupsForQuery">ListLogGroupsForQuery</a></code> | <code>string</code> | [List] logs:ListLogGroupsForQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListScheduledQueries">ListScheduledQueries</a></code> | <code>string</code> | [List] logs:ListScheduledQueries. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListSourcesForS3TableIntegration">ListSourcesForS3TableIntegration</a></code> | <code>string</code> | [List] logs:ListSourcesForS3TableIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListSyslogConfigurations">ListSyslogConfigurations</a></code> | <code>string</code> | [List] logs:ListSyslogConfigurations. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] logs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ListTagsLogGroup">ListTagsLogGroup</a></code> | <code>string</code> | [List] logs:ListTagsLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.ProcessWithPipeline">ProcessWithPipeline</a></code> | <code>string</code> | [Write] logs:ProcessWithPipeline. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutAccountPolicy">PutAccountPolicy</a></code> | <code>string</code> | [Write] logs:PutAccountPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutBearerTokenAuthentication">PutBearerTokenAuthentication</a></code> | <code>string</code> | [Write] logs:PutBearerTokenAuthentication. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDataProtectionPolicy">PutDataProtectionPolicy</a></code> | <code>string</code> | [Write] logs:PutDataProtectionPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDeliveryDestination">PutDeliveryDestination</a></code> | <code>string</code> | [Write] logs:PutDeliveryDestination. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDeliveryDestinationPolicy">PutDeliveryDestinationPolicy</a></code> | <code>string</code> | [Write] logs:PutDeliveryDestinationPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDeliverySource">PutDeliverySource</a></code> | <code>string</code> | [Write] logs:PutDeliverySource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDestination">PutDestination</a></code> | <code>string</code> | [Write] logs:PutDestination. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutDestinationPolicy">PutDestinationPolicy</a></code> | <code>string</code> | [Write] logs:PutDestinationPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutIndexPolicy">PutIndexPolicy</a></code> | <code>string</code> | [Write] logs:PutIndexPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutIntegration">PutIntegration</a></code> | <code>string</code> | [Write] logs:PutIntegration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutLogEvents">PutLogEvents</a></code> | <code>string</code> | [Write] logs:PutLogEvents. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutLogGroupDeletionProtection">PutLogGroupDeletionProtection</a></code> | <code>string</code> | [Write] logs:PutLogGroupDeletionProtection. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutMetricFilter">PutMetricFilter</a></code> | <code>string</code> | [Write] logs:PutMetricFilter. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutPipelineRule">PutPipelineRule</a></code> | <code>string</code> | [Write] logs:PutPipelineRule. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutQueryDefinition">PutQueryDefinition</a></code> | <code>string</code> | [Write] logs:PutQueryDefinition. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] logs:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutRetentionPolicy">PutRetentionPolicy</a></code> | <code>string</code> | [Write] logs:PutRetentionPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutStorageTierPolicy">PutStorageTierPolicy</a></code> | <code>string</code> | [Write] logs:PutStorageTierPolicy. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutSubscriptionFilter">PutSubscriptionFilter</a></code> | <code>string</code> | [Write] logs:PutSubscriptionFilter. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutSyslogConfiguration">PutSyslogConfiguration</a></code> | <code>string</code> | [Write] logs:PutSyslogConfiguration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.PutTransformer">PutTransformer</a></code> | <code>string</code> | [Write] logs:PutTransformer. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.StartLiveTail">StartLiveTail</a></code> | <code>string</code> | [Read] logs:StartLiveTail. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.StartQuery">StartQuery</a></code> | <code>string</code> | [Read] logs:StartQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.StopLiveTail">StopLiveTail</a></code> | <code>string</code> | [Read] logs:StopLiveTail. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.StopQuery">StopQuery</a></code> | <code>string</code> | [Read] logs:StopQuery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.TagLogGroup">TagLogGroup</a></code> | <code>string</code> | [Tagging] logs:TagLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] logs:TagResource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.TestMetricFilter">TestMetricFilter</a></code> | <code>string</code> | [Read] logs:TestMetricFilter. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.TestTransformer">TestTransformer</a></code> | <code>string</code> | [Read] logs:TestTransformer. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.Unmask">Unmask</a></code> | <code>string</code> | [Read] logs:Unmask. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UntagLogGroup">UntagLogGroup</a></code> | <code>string</code> | [Tagging] logs:UntagLogGroup. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] logs:UntagResource. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateAnomaly">UpdateAnomaly</a></code> | <code>string</code> | [Write] logs:UpdateAnomaly. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateDeliveryConfiguration">UpdateDeliveryConfiguration</a></code> | <code>string</code> | [Write] logs:UpdateDeliveryConfiguration. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateLogAnomalyDetector">UpdateLogAnomalyDetector</a></code> | <code>string</code> | [Write] logs:UpdateLogAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateLogDelivery">UpdateLogDelivery</a></code> | <code>string</code> | [Write] logs:UpdateLogDelivery. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateLookupTable">UpdateLookupTable</a></code> | <code>string</code> | [Write] logs:UpdateLookupTable. |
| <code><a href="#@cdk_utils/iam.logs.LogsActions.property.UpdateScheduledQuery">UpdateScheduledQuery</a></code> | <code>string</code> | [Write] logs:UpdateScheduledQuery. |

---

##### `actionGetDataProtectionPolicy`<sup>Required</sup> <a name="actionGetDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsActions.property.actionGetDataProtectionPolicy"></a>

```typescript
public readonly actionGetDataProtectionPolicy: string;
```

- *Type:* string

[Read] logs:GetDataProtectionPolicy.

---

##### `actionGetDelivery`<sup>Required</sup> <a name="actionGetDelivery" id="@cdk_utils/iam.logs.LogsActions.property.actionGetDelivery"></a>

```typescript
public readonly actionGetDelivery: string;
```

- *Type:* string

[Read] logs:GetDelivery.

---

##### `actionGetDeliveryDestination`<sup>Required</sup> <a name="actionGetDeliveryDestination" id="@cdk_utils/iam.logs.LogsActions.property.actionGetDeliveryDestination"></a>

```typescript
public readonly actionGetDeliveryDestination: string;
```

- *Type:* string

[Read] logs:GetDeliveryDestination.

---

##### `actionGetDeliveryDestinationPolicy`<sup>Required</sup> <a name="actionGetDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsActions.property.actionGetDeliveryDestinationPolicy"></a>

```typescript
public readonly actionGetDeliveryDestinationPolicy: string;
```

- *Type:* string

[Read] logs:GetDeliveryDestinationPolicy.

---

##### `actionGetDeliverySource`<sup>Required</sup> <a name="actionGetDeliverySource" id="@cdk_utils/iam.logs.LogsActions.property.actionGetDeliverySource"></a>

```typescript
public readonly actionGetDeliverySource: string;
```

- *Type:* string

[Read] logs:GetDeliverySource.

---

##### `actionGetIntegration`<sup>Required</sup> <a name="actionGetIntegration" id="@cdk_utils/iam.logs.LogsActions.property.actionGetIntegration"></a>

```typescript
public readonly actionGetIntegration: string;
```

- *Type:* string

[Read] logs:GetIntegration.

---

##### `actionGetLogAnomalyDetector`<sup>Required</sup> <a name="actionGetLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogAnomalyDetector"></a>

```typescript
public readonly actionGetLogAnomalyDetector: string;
```

- *Type:* string

[Read] logs:GetLogAnomalyDetector.

---

##### `actionGetLogDelivery`<sup>Required</sup> <a name="actionGetLogDelivery" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogDelivery"></a>

```typescript
public readonly actionGetLogDelivery: string;
```

- *Type:* string

[Read] logs:GetLogDelivery.

---

##### `actionGetLogEvents`<sup>Required</sup> <a name="actionGetLogEvents" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogEvents"></a>

```typescript
public readonly actionGetLogEvents: string;
```

- *Type:* string

[Read] logs:GetLogEvents.

---

##### `actionGetLogFields`<sup>Required</sup> <a name="actionGetLogFields" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogFields"></a>

```typescript
public readonly actionGetLogFields: string;
```

- *Type:* string

[Read] logs:GetLogFields.

---

##### `actionGetLogGroupFields`<sup>Required</sup> <a name="actionGetLogGroupFields" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogGroupFields"></a>

```typescript
public readonly actionGetLogGroupFields: string;
```

- *Type:* string

[Read] logs:GetLogGroupFields.

---

##### `actionGetLogRecord`<sup>Required</sup> <a name="actionGetLogRecord" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLogRecord"></a>

```typescript
public readonly actionGetLogRecord: string;
```

- *Type:* string

[Read] logs:GetLogRecord.

---

##### `actionGetLookupTable`<sup>Required</sup> <a name="actionGetLookupTable" id="@cdk_utils/iam.logs.LogsActions.property.actionGetLookupTable"></a>

```typescript
public readonly actionGetLookupTable: string;
```

- *Type:* string

[Read] logs:GetLookupTable.

---

##### `actionGetQueryResults`<sup>Required</sup> <a name="actionGetQueryResults" id="@cdk_utils/iam.logs.LogsActions.property.actionGetQueryResults"></a>

```typescript
public readonly actionGetQueryResults: string;
```

- *Type:* string

[Read] logs:GetQueryResults.

---

##### `actionGetScheduledQuery`<sup>Required</sup> <a name="actionGetScheduledQuery" id="@cdk_utils/iam.logs.LogsActions.property.actionGetScheduledQuery"></a>

```typescript
public readonly actionGetScheduledQuery: string;
```

- *Type:* string

[Read] logs:GetScheduledQuery.

---

##### `actionGetScheduledQueryHistory`<sup>Required</sup> <a name="actionGetScheduledQueryHistory" id="@cdk_utils/iam.logs.LogsActions.property.actionGetScheduledQueryHistory"></a>

```typescript
public readonly actionGetScheduledQueryHistory: string;
```

- *Type:* string

[Read] logs:GetScheduledQueryHistory.

---

##### `actionGetStorageTierPolicy`<sup>Required</sup> <a name="actionGetStorageTierPolicy" id="@cdk_utils/iam.logs.LogsActions.property.actionGetStorageTierPolicy"></a>

```typescript
public readonly actionGetStorageTierPolicy: string;
```

- *Type:* string

[Read] logs:GetStorageTierPolicy.

---

##### `actionGetTransformer`<sup>Required</sup> <a name="actionGetTransformer" id="@cdk_utils/iam.logs.LogsActions.property.actionGetTransformer"></a>

```typescript
public readonly actionGetTransformer: string;
```

- *Type:* string

[Read] logs:GetTransformer.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.logs.LogsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.logs.LogsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.logs.LogsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.logs.LogsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.logs.LogsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateKmsKey`<sup>Required</sup> <a name="AssociateKmsKey" id="@cdk_utils/iam.logs.LogsActions.property.AssociateKmsKey"></a>

```typescript
public readonly AssociateKmsKey: string;
```

- *Type:* string

[Write] logs:AssociateKmsKey.

---

##### `AssociateSourceToS3TableIntegration`<sup>Required</sup> <a name="AssociateSourceToS3TableIntegration" id="@cdk_utils/iam.logs.LogsActions.property.AssociateSourceToS3TableIntegration"></a>

```typescript
public readonly AssociateSourceToS3TableIntegration: string;
```

- *Type:* string

[Write] logs:AssociateSourceToS3TableIntegration.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.logs.LogsActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[Write] logs:CallWithBearerToken.

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.logs.LogsActions.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string;
```

- *Type:* string

[Write] logs:CancelExportTask.

---

##### `CancelImportTask`<sup>Required</sup> <a name="CancelImportTask" id="@cdk_utils/iam.logs.LogsActions.property.CancelImportTask"></a>

```typescript
public readonly CancelImportTask: string;
```

- *Type:* string

[Write] logs:CancelImportTask.

---

##### `CreateDelivery`<sup>Required</sup> <a name="CreateDelivery" id="@cdk_utils/iam.logs.LogsActions.property.CreateDelivery"></a>

```typescript
public readonly CreateDelivery: string;
```

- *Type:* string

[Write] logs:CreateDelivery.

---

##### `CreateExportTask`<sup>Required</sup> <a name="CreateExportTask" id="@cdk_utils/iam.logs.LogsActions.property.CreateExportTask"></a>

```typescript
public readonly CreateExportTask: string;
```

- *Type:* string

[Write] logs:CreateExportTask.

---

##### `CreateImportTask`<sup>Required</sup> <a name="CreateImportTask" id="@cdk_utils/iam.logs.LogsActions.property.CreateImportTask"></a>

```typescript
public readonly CreateImportTask: string;
```

- *Type:* string

[Write] logs:CreateImportTask.

---

##### `CreateLogAnomalyDetector`<sup>Required</sup> <a name="CreateLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsActions.property.CreateLogAnomalyDetector"></a>

```typescript
public readonly CreateLogAnomalyDetector: string;
```

- *Type:* string

[Write] logs:CreateLogAnomalyDetector.

---

##### `CreateLogDelivery`<sup>Required</sup> <a name="CreateLogDelivery" id="@cdk_utils/iam.logs.LogsActions.property.CreateLogDelivery"></a>

```typescript
public readonly CreateLogDelivery: string;
```

- *Type:* string

[Write] logs:CreateLogDelivery.

---

##### `CreateLogGroup`<sup>Required</sup> <a name="CreateLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.CreateLogGroup"></a>

```typescript
public readonly CreateLogGroup: string;
```

- *Type:* string

[Write] logs:CreateLogGroup.

---

##### `CreateLogStream`<sup>Required</sup> <a name="CreateLogStream" id="@cdk_utils/iam.logs.LogsActions.property.CreateLogStream"></a>

```typescript
public readonly CreateLogStream: string;
```

- *Type:* string

[Write] logs:CreateLogStream.

---

##### `CreateLookupTable`<sup>Required</sup> <a name="CreateLookupTable" id="@cdk_utils/iam.logs.LogsActions.property.CreateLookupTable"></a>

```typescript
public readonly CreateLookupTable: string;
```

- *Type:* string

[Write] logs:CreateLookupTable.

---

##### `CreateScheduledQuery`<sup>Required</sup> <a name="CreateScheduledQuery" id="@cdk_utils/iam.logs.LogsActions.property.CreateScheduledQuery"></a>

```typescript
public readonly CreateScheduledQuery: string;
```

- *Type:* string

[Write] logs:CreateScheduledQuery.

---

##### `DeleteAccountPolicy`<sup>Required</sup> <a name="DeleteAccountPolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteAccountPolicy"></a>

```typescript
public readonly DeleteAccountPolicy: string;
```

- *Type:* string

[Write] logs:DeleteAccountPolicy.

---

##### `DeleteDataProtectionPolicy`<sup>Required</sup> <a name="DeleteDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDataProtectionPolicy"></a>

```typescript
public readonly DeleteDataProtectionPolicy: string;
```

- *Type:* string

[Write] logs:DeleteDataProtectionPolicy.

---

##### `DeleteDelivery`<sup>Required</sup> <a name="DeleteDelivery" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDelivery"></a>

```typescript
public readonly DeleteDelivery: string;
```

- *Type:* string

[Write] logs:DeleteDelivery.

---

##### `DeleteDeliveryDestination`<sup>Required</sup> <a name="DeleteDeliveryDestination" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDeliveryDestination"></a>

```typescript
public readonly DeleteDeliveryDestination: string;
```

- *Type:* string

[Write] logs:DeleteDeliveryDestination.

---

##### `DeleteDeliveryDestinationPolicy`<sup>Required</sup> <a name="DeleteDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDeliveryDestinationPolicy"></a>

```typescript
public readonly DeleteDeliveryDestinationPolicy: string;
```

- *Type:* string

[Write] logs:DeleteDeliveryDestinationPolicy.

---

##### `DeleteDeliverySource`<sup>Required</sup> <a name="DeleteDeliverySource" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDeliverySource"></a>

```typescript
public readonly DeleteDeliverySource: string;
```

- *Type:* string

[Write] logs:DeleteDeliverySource.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.logs.LogsActions.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string;
```

- *Type:* string

[Write] logs:DeleteDestination.

---

##### `DeleteIndexPolicy`<sup>Required</sup> <a name="DeleteIndexPolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteIndexPolicy"></a>

```typescript
public readonly DeleteIndexPolicy: string;
```

- *Type:* string

[Write] logs:DeleteIndexPolicy.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.logs.LogsActions.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string;
```

- *Type:* string

[Write] logs:DeleteIntegration.

---

##### `DeleteLogAnomalyDetector`<sup>Required</sup> <a name="DeleteLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsActions.property.DeleteLogAnomalyDetector"></a>

```typescript
public readonly DeleteLogAnomalyDetector: string;
```

- *Type:* string

[Write] logs:DeleteLogAnomalyDetector.

---

##### `DeleteLogDelivery`<sup>Required</sup> <a name="DeleteLogDelivery" id="@cdk_utils/iam.logs.LogsActions.property.DeleteLogDelivery"></a>

```typescript
public readonly DeleteLogDelivery: string;
```

- *Type:* string

[Write] logs:DeleteLogDelivery.

---

##### `DeleteLogGroup`<sup>Required</sup> <a name="DeleteLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.DeleteLogGroup"></a>

```typescript
public readonly DeleteLogGroup: string;
```

- *Type:* string

[Write] logs:DeleteLogGroup.

---

##### `DeleteLogStream`<sup>Required</sup> <a name="DeleteLogStream" id="@cdk_utils/iam.logs.LogsActions.property.DeleteLogStream"></a>

```typescript
public readonly DeleteLogStream: string;
```

- *Type:* string

[Write] logs:DeleteLogStream.

---

##### `DeleteLookupTable`<sup>Required</sup> <a name="DeleteLookupTable" id="@cdk_utils/iam.logs.LogsActions.property.DeleteLookupTable"></a>

```typescript
public readonly DeleteLookupTable: string;
```

- *Type:* string

[Write] logs:DeleteLookupTable.

---

##### `DeleteMetricFilter`<sup>Required</sup> <a name="DeleteMetricFilter" id="@cdk_utils/iam.logs.LogsActions.property.DeleteMetricFilter"></a>

```typescript
public readonly DeleteMetricFilter: string;
```

- *Type:* string

[Write] logs:DeleteMetricFilter.

---

##### `DeletePipelineRule`<sup>Required</sup> <a name="DeletePipelineRule" id="@cdk_utils/iam.logs.LogsActions.property.DeletePipelineRule"></a>

```typescript
public readonly DeletePipelineRule: string;
```

- *Type:* string

[Write] logs:DeletePipelineRule.

---

##### `DeleteQueryDefinition`<sup>Required</sup> <a name="DeleteQueryDefinition" id="@cdk_utils/iam.logs.LogsActions.property.DeleteQueryDefinition"></a>

```typescript
public readonly DeleteQueryDefinition: string;
```

- *Type:* string

[Write] logs:DeleteQueryDefinition.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] logs:DeleteResourcePolicy.

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdk_utils/iam.logs.LogsActions.property.DeleteRetentionPolicy"></a>

```typescript
public readonly DeleteRetentionPolicy: string;
```

- *Type:* string

[Write] logs:DeleteRetentionPolicy.

---

##### `DeleteScheduledQuery`<sup>Required</sup> <a name="DeleteScheduledQuery" id="@cdk_utils/iam.logs.LogsActions.property.DeleteScheduledQuery"></a>

```typescript
public readonly DeleteScheduledQuery: string;
```

- *Type:* string

[Write] logs:DeleteScheduledQuery.

---

##### `DeleteSubscriptionFilter`<sup>Required</sup> <a name="DeleteSubscriptionFilter" id="@cdk_utils/iam.logs.LogsActions.property.DeleteSubscriptionFilter"></a>

```typescript
public readonly DeleteSubscriptionFilter: string;
```

- *Type:* string

[Write] logs:DeleteSubscriptionFilter.

---

##### `DeleteSyslogConfiguration`<sup>Required</sup> <a name="DeleteSyslogConfiguration" id="@cdk_utils/iam.logs.LogsActions.property.DeleteSyslogConfiguration"></a>

```typescript
public readonly DeleteSyslogConfiguration: string;
```

- *Type:* string

[Write] logs:DeleteSyslogConfiguration.

---

##### `DeleteTransformer`<sup>Required</sup> <a name="DeleteTransformer" id="@cdk_utils/iam.logs.LogsActions.property.DeleteTransformer"></a>

```typescript
public readonly DeleteTransformer: string;
```

- *Type:* string

[Write] logs:DeleteTransformer.

---

##### `DescribeAccountPolicies`<sup>Required</sup> <a name="DescribeAccountPolicies" id="@cdk_utils/iam.logs.LogsActions.property.DescribeAccountPolicies"></a>

```typescript
public readonly DescribeAccountPolicies: string;
```

- *Type:* string

[List] logs:DescribeAccountPolicies.

---

##### `DescribeConfigurationTemplates`<sup>Required</sup> <a name="DescribeConfigurationTemplates" id="@cdk_utils/iam.logs.LogsActions.property.DescribeConfigurationTemplates"></a>

```typescript
public readonly DescribeConfigurationTemplates: string;
```

- *Type:* string

[List] logs:DescribeConfigurationTemplates.

---

##### `DescribeDeliveries`<sup>Required</sup> <a name="DescribeDeliveries" id="@cdk_utils/iam.logs.LogsActions.property.DescribeDeliveries"></a>

```typescript
public readonly DescribeDeliveries: string;
```

- *Type:* string

[List] logs:DescribeDeliveries.

---

##### `DescribeDeliveryDestinations`<sup>Required</sup> <a name="DescribeDeliveryDestinations" id="@cdk_utils/iam.logs.LogsActions.property.DescribeDeliveryDestinations"></a>

```typescript
public readonly DescribeDeliveryDestinations: string;
```

- *Type:* string

[List] logs:DescribeDeliveryDestinations.

---

##### `DescribeDeliverySources`<sup>Required</sup> <a name="DescribeDeliverySources" id="@cdk_utils/iam.logs.LogsActions.property.DescribeDeliverySources"></a>

```typescript
public readonly DescribeDeliverySources: string;
```

- *Type:* string

[List] logs:DescribeDeliverySources.

---

##### `DescribeDestinations`<sup>Required</sup> <a name="DescribeDestinations" id="@cdk_utils/iam.logs.LogsActions.property.DescribeDestinations"></a>

```typescript
public readonly DescribeDestinations: string;
```

- *Type:* string

[List] logs:DescribeDestinations.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.logs.LogsActions.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string;
```

- *Type:* string

[List] logs:DescribeExportTasks.

---

##### `DescribeFieldIndexes`<sup>Required</sup> <a name="DescribeFieldIndexes" id="@cdk_utils/iam.logs.LogsActions.property.DescribeFieldIndexes"></a>

```typescript
public readonly DescribeFieldIndexes: string;
```

- *Type:* string

[List] logs:DescribeFieldIndexes.

---

##### `DescribeImportTaskBatches`<sup>Required</sup> <a name="DescribeImportTaskBatches" id="@cdk_utils/iam.logs.LogsActions.property.DescribeImportTaskBatches"></a>

```typescript
public readonly DescribeImportTaskBatches: string;
```

- *Type:* string

[List] logs:DescribeImportTaskBatches.

---

##### `DescribeImportTasks`<sup>Required</sup> <a name="DescribeImportTasks" id="@cdk_utils/iam.logs.LogsActions.property.DescribeImportTasks"></a>

```typescript
public readonly DescribeImportTasks: string;
```

- *Type:* string

[List] logs:DescribeImportTasks.

---

##### `DescribeIndexPolicies`<sup>Required</sup> <a name="DescribeIndexPolicies" id="@cdk_utils/iam.logs.LogsActions.property.DescribeIndexPolicies"></a>

```typescript
public readonly DescribeIndexPolicies: string;
```

- *Type:* string

[List] logs:DescribeIndexPolicies.

---

##### `DescribeLogGroups`<sup>Required</sup> <a name="DescribeLogGroups" id="@cdk_utils/iam.logs.LogsActions.property.DescribeLogGroups"></a>

```typescript
public readonly DescribeLogGroups: string;
```

- *Type:* string

[List] logs:DescribeLogGroups.

---

##### `DescribeLogStreams`<sup>Required</sup> <a name="DescribeLogStreams" id="@cdk_utils/iam.logs.LogsActions.property.DescribeLogStreams"></a>

```typescript
public readonly DescribeLogStreams: string;
```

- *Type:* string

[List] logs:DescribeLogStreams.

---

##### `DescribeLookupTables`<sup>Required</sup> <a name="DescribeLookupTables" id="@cdk_utils/iam.logs.LogsActions.property.DescribeLookupTables"></a>

```typescript
public readonly DescribeLookupTables: string;
```

- *Type:* string

[List] logs:DescribeLookupTables.

---

##### `DescribeMetricFilters`<sup>Required</sup> <a name="DescribeMetricFilters" id="@cdk_utils/iam.logs.LogsActions.property.DescribeMetricFilters"></a>

```typescript
public readonly DescribeMetricFilters: string;
```

- *Type:* string

[List] logs:DescribeMetricFilters.

---

##### `DescribeQueries`<sup>Required</sup> <a name="DescribeQueries" id="@cdk_utils/iam.logs.LogsActions.property.DescribeQueries"></a>

```typescript
public readonly DescribeQueries: string;
```

- *Type:* string

[List] logs:DescribeQueries.

---

##### `DescribeQueryDefinitions`<sup>Required</sup> <a name="DescribeQueryDefinitions" id="@cdk_utils/iam.logs.LogsActions.property.DescribeQueryDefinitions"></a>

```typescript
public readonly DescribeQueryDefinitions: string;
```

- *Type:* string

[List] logs:DescribeQueryDefinitions.

---

##### `DescribeResourcePolicies`<sup>Required</sup> <a name="DescribeResourcePolicies" id="@cdk_utils/iam.logs.LogsActions.property.DescribeResourcePolicies"></a>

```typescript
public readonly DescribeResourcePolicies: string;
```

- *Type:* string

[List] logs:DescribeResourcePolicies.

---

##### `DescribeSubscriptionFilters`<sup>Required</sup> <a name="DescribeSubscriptionFilters" id="@cdk_utils/iam.logs.LogsActions.property.DescribeSubscriptionFilters"></a>

```typescript
public readonly DescribeSubscriptionFilters: string;
```

- *Type:* string

[List] logs:DescribeSubscriptionFilters.

---

##### `DisassociateKmsKey`<sup>Required</sup> <a name="DisassociateKmsKey" id="@cdk_utils/iam.logs.LogsActions.property.DisassociateKmsKey"></a>

```typescript
public readonly DisassociateKmsKey: string;
```

- *Type:* string

[Write] logs:DisassociateKmsKey.

---

##### `DisassociateSourceFromS3TableIntegration`<sup>Required</sup> <a name="DisassociateSourceFromS3TableIntegration" id="@cdk_utils/iam.logs.LogsActions.property.DisassociateSourceFromS3TableIntegration"></a>

```typescript
public readonly DisassociateSourceFromS3TableIntegration: string;
```

- *Type:* string

[Write] logs:DisassociateSourceFromS3TableIntegration.

---

##### `FilterLogEvents`<sup>Required</sup> <a name="FilterLogEvents" id="@cdk_utils/iam.logs.LogsActions.property.FilterLogEvents"></a>

```typescript
public readonly FilterLogEvents: string;
```

- *Type:* string

[Read] logs:FilterLogEvents.

---

##### `IntegrateWithS3Table`<sup>Required</sup> <a name="IntegrateWithS3Table" id="@cdk_utils/iam.logs.LogsActions.property.IntegrateWithS3Table"></a>

```typescript
public readonly IntegrateWithS3Table: string;
```

- *Type:* string

[Write] logs:IntegrateWithS3Table.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.logs.LogsActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] logs:Link.

---

##### `ListAggregateLogGroupSummaries`<sup>Required</sup> <a name="ListAggregateLogGroupSummaries" id="@cdk_utils/iam.logs.LogsActions.property.ListAggregateLogGroupSummaries"></a>

```typescript
public readonly ListAggregateLogGroupSummaries: string;
```

- *Type:* string

[List] logs:ListAggregateLogGroupSummaries.

---

##### `ListAnomalies`<sup>Required</sup> <a name="ListAnomalies" id="@cdk_utils/iam.logs.LogsActions.property.ListAnomalies"></a>

```typescript
public readonly ListAnomalies: string;
```

- *Type:* string

[List] logs:ListAnomalies.

---

##### `ListEntitiesForLogGroup`<sup>Required</sup> <a name="ListEntitiesForLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.ListEntitiesForLogGroup"></a>

```typescript
public readonly ListEntitiesForLogGroup: string;
```

- *Type:* string

[List] logs:ListEntitiesForLogGroup.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.logs.LogsActions.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string;
```

- *Type:* string

[List] logs:ListIntegrations.

---

##### `ListLogAnomalyDetectors`<sup>Required</sup> <a name="ListLogAnomalyDetectors" id="@cdk_utils/iam.logs.LogsActions.property.ListLogAnomalyDetectors"></a>

```typescript
public readonly ListLogAnomalyDetectors: string;
```

- *Type:* string

[List] logs:ListLogAnomalyDetectors.

---

##### `ListLogDeliveries`<sup>Required</sup> <a name="ListLogDeliveries" id="@cdk_utils/iam.logs.LogsActions.property.ListLogDeliveries"></a>

```typescript
public readonly ListLogDeliveries: string;
```

- *Type:* string

[List] logs:ListLogDeliveries.

---

##### `ListLogGroups`<sup>Required</sup> <a name="ListLogGroups" id="@cdk_utils/iam.logs.LogsActions.property.ListLogGroups"></a>

```typescript
public readonly ListLogGroups: string;
```

- *Type:* string

[List] logs:ListLogGroups.

---

##### `ListLogGroupsForEntity`<sup>Required</sup> <a name="ListLogGroupsForEntity" id="@cdk_utils/iam.logs.LogsActions.property.ListLogGroupsForEntity"></a>

```typescript
public readonly ListLogGroupsForEntity: string;
```

- *Type:* string

[List] logs:ListLogGroupsForEntity.

---

##### `ListLogGroupsForQuery`<sup>Required</sup> <a name="ListLogGroupsForQuery" id="@cdk_utils/iam.logs.LogsActions.property.ListLogGroupsForQuery"></a>

```typescript
public readonly ListLogGroupsForQuery: string;
```

- *Type:* string

[List] logs:ListLogGroupsForQuery.

---

##### `ListScheduledQueries`<sup>Required</sup> <a name="ListScheduledQueries" id="@cdk_utils/iam.logs.LogsActions.property.ListScheduledQueries"></a>

```typescript
public readonly ListScheduledQueries: string;
```

- *Type:* string

[List] logs:ListScheduledQueries.

---

##### `ListSourcesForS3TableIntegration`<sup>Required</sup> <a name="ListSourcesForS3TableIntegration" id="@cdk_utils/iam.logs.LogsActions.property.ListSourcesForS3TableIntegration"></a>

```typescript
public readonly ListSourcesForS3TableIntegration: string;
```

- *Type:* string

[List] logs:ListSourcesForS3TableIntegration.

---

##### `ListSyslogConfigurations`<sup>Required</sup> <a name="ListSyslogConfigurations" id="@cdk_utils/iam.logs.LogsActions.property.ListSyslogConfigurations"></a>

```typescript
public readonly ListSyslogConfigurations: string;
```

- *Type:* string

[List] logs:ListSyslogConfigurations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.logs.LogsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] logs:ListTagsForResource.

---

##### `ListTagsLogGroup`<sup>Required</sup> <a name="ListTagsLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.ListTagsLogGroup"></a>

```typescript
public readonly ListTagsLogGroup: string;
```

- *Type:* string

[List] logs:ListTagsLogGroup.

---

##### `ProcessWithPipeline`<sup>Required</sup> <a name="ProcessWithPipeline" id="@cdk_utils/iam.logs.LogsActions.property.ProcessWithPipeline"></a>

```typescript
public readonly ProcessWithPipeline: string;
```

- *Type:* string

[Write] logs:ProcessWithPipeline.

---

##### `PutAccountPolicy`<sup>Required</sup> <a name="PutAccountPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutAccountPolicy"></a>

```typescript
public readonly PutAccountPolicy: string;
```

- *Type:* string

[Write] logs:PutAccountPolicy.

---

##### `PutBearerTokenAuthentication`<sup>Required</sup> <a name="PutBearerTokenAuthentication" id="@cdk_utils/iam.logs.LogsActions.property.PutBearerTokenAuthentication"></a>

```typescript
public readonly PutBearerTokenAuthentication: string;
```

- *Type:* string

[Write] logs:PutBearerTokenAuthentication.

---

##### `PutDataProtectionPolicy`<sup>Required</sup> <a name="PutDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutDataProtectionPolicy"></a>

```typescript
public readonly PutDataProtectionPolicy: string;
```

- *Type:* string

[Write] logs:PutDataProtectionPolicy.

---

##### `PutDeliveryDestination`<sup>Required</sup> <a name="PutDeliveryDestination" id="@cdk_utils/iam.logs.LogsActions.property.PutDeliveryDestination"></a>

```typescript
public readonly PutDeliveryDestination: string;
```

- *Type:* string

[Write] logs:PutDeliveryDestination.

---

##### `PutDeliveryDestinationPolicy`<sup>Required</sup> <a name="PutDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutDeliveryDestinationPolicy"></a>

```typescript
public readonly PutDeliveryDestinationPolicy: string;
```

- *Type:* string

[Write] logs:PutDeliveryDestinationPolicy.

---

##### `PutDeliverySource`<sup>Required</sup> <a name="PutDeliverySource" id="@cdk_utils/iam.logs.LogsActions.property.PutDeliverySource"></a>

```typescript
public readonly PutDeliverySource: string;
```

- *Type:* string

[Write] logs:PutDeliverySource.

---

##### `PutDestination`<sup>Required</sup> <a name="PutDestination" id="@cdk_utils/iam.logs.LogsActions.property.PutDestination"></a>

```typescript
public readonly PutDestination: string;
```

- *Type:* string

[Write] logs:PutDestination.

---

##### `PutDestinationPolicy`<sup>Required</sup> <a name="PutDestinationPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutDestinationPolicy"></a>

```typescript
public readonly PutDestinationPolicy: string;
```

- *Type:* string

[Write] logs:PutDestinationPolicy.

---

##### `PutIndexPolicy`<sup>Required</sup> <a name="PutIndexPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutIndexPolicy"></a>

```typescript
public readonly PutIndexPolicy: string;
```

- *Type:* string

[Write] logs:PutIndexPolicy.

---

##### `PutIntegration`<sup>Required</sup> <a name="PutIntegration" id="@cdk_utils/iam.logs.LogsActions.property.PutIntegration"></a>

```typescript
public readonly PutIntegration: string;
```

- *Type:* string

[Write] logs:PutIntegration.

---

##### `PutLogEvents`<sup>Required</sup> <a name="PutLogEvents" id="@cdk_utils/iam.logs.LogsActions.property.PutLogEvents"></a>

```typescript
public readonly PutLogEvents: string;
```

- *Type:* string

[Write] logs:PutLogEvents.

---

##### `PutLogGroupDeletionProtection`<sup>Required</sup> <a name="PutLogGroupDeletionProtection" id="@cdk_utils/iam.logs.LogsActions.property.PutLogGroupDeletionProtection"></a>

```typescript
public readonly PutLogGroupDeletionProtection: string;
```

- *Type:* string

[Write] logs:PutLogGroupDeletionProtection.

---

##### `PutMetricFilter`<sup>Required</sup> <a name="PutMetricFilter" id="@cdk_utils/iam.logs.LogsActions.property.PutMetricFilter"></a>

```typescript
public readonly PutMetricFilter: string;
```

- *Type:* string

[Write] logs:PutMetricFilter.

---

##### `PutPipelineRule`<sup>Required</sup> <a name="PutPipelineRule" id="@cdk_utils/iam.logs.LogsActions.property.PutPipelineRule"></a>

```typescript
public readonly PutPipelineRule: string;
```

- *Type:* string

[Write] logs:PutPipelineRule.

---

##### `PutQueryDefinition`<sup>Required</sup> <a name="PutQueryDefinition" id="@cdk_utils/iam.logs.LogsActions.property.PutQueryDefinition"></a>

```typescript
public readonly PutQueryDefinition: string;
```

- *Type:* string

[Write] logs:PutQueryDefinition.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] logs:PutResourcePolicy.

---

##### `PutRetentionPolicy`<sup>Required</sup> <a name="PutRetentionPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutRetentionPolicy"></a>

```typescript
public readonly PutRetentionPolicy: string;
```

- *Type:* string

[Write] logs:PutRetentionPolicy.

---

##### `PutStorageTierPolicy`<sup>Required</sup> <a name="PutStorageTierPolicy" id="@cdk_utils/iam.logs.LogsActions.property.PutStorageTierPolicy"></a>

```typescript
public readonly PutStorageTierPolicy: string;
```

- *Type:* string

[Write] logs:PutStorageTierPolicy.

---

##### `PutSubscriptionFilter`<sup>Required</sup> <a name="PutSubscriptionFilter" id="@cdk_utils/iam.logs.LogsActions.property.PutSubscriptionFilter"></a>

```typescript
public readonly PutSubscriptionFilter: string;
```

- *Type:* string

[Write] logs:PutSubscriptionFilter.

---

##### `PutSyslogConfiguration`<sup>Required</sup> <a name="PutSyslogConfiguration" id="@cdk_utils/iam.logs.LogsActions.property.PutSyslogConfiguration"></a>

```typescript
public readonly PutSyslogConfiguration: string;
```

- *Type:* string

[Write] logs:PutSyslogConfiguration.

---

##### `PutTransformer`<sup>Required</sup> <a name="PutTransformer" id="@cdk_utils/iam.logs.LogsActions.property.PutTransformer"></a>

```typescript
public readonly PutTransformer: string;
```

- *Type:* string

[Write] logs:PutTransformer.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.logs.LogsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartLiveTail`<sup>Required</sup> <a name="StartLiveTail" id="@cdk_utils/iam.logs.LogsActions.property.StartLiveTail"></a>

```typescript
public readonly StartLiveTail: string;
```

- *Type:* string

[Read] logs:StartLiveTail.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.logs.LogsActions.property.StartQuery"></a>

```typescript
public readonly StartQuery: string;
```

- *Type:* string

[Read] logs:StartQuery.

---

##### `StopLiveTail`<sup>Required</sup> <a name="StopLiveTail" id="@cdk_utils/iam.logs.LogsActions.property.StopLiveTail"></a>

```typescript
public readonly StopLiveTail: string;
```

- *Type:* string

[Read] logs:StopLiveTail.

---

##### `StopQuery`<sup>Required</sup> <a name="StopQuery" id="@cdk_utils/iam.logs.LogsActions.property.StopQuery"></a>

```typescript
public readonly StopQuery: string;
```

- *Type:* string

[Read] logs:StopQuery.

---

##### `TagLogGroup`<sup>Required</sup> <a name="TagLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.TagLogGroup"></a>

```typescript
public readonly TagLogGroup: string;
```

- *Type:* string

[Tagging] logs:TagLogGroup.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.logs.LogsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] logs:TagResource.

---

##### `TestMetricFilter`<sup>Required</sup> <a name="TestMetricFilter" id="@cdk_utils/iam.logs.LogsActions.property.TestMetricFilter"></a>

```typescript
public readonly TestMetricFilter: string;
```

- *Type:* string

[Read] logs:TestMetricFilter.

---

##### `TestTransformer`<sup>Required</sup> <a name="TestTransformer" id="@cdk_utils/iam.logs.LogsActions.property.TestTransformer"></a>

```typescript
public readonly TestTransformer: string;
```

- *Type:* string

[Read] logs:TestTransformer.

---

##### `Unmask`<sup>Required</sup> <a name="Unmask" id="@cdk_utils/iam.logs.LogsActions.property.Unmask"></a>

```typescript
public readonly Unmask: string;
```

- *Type:* string

[Read] logs:Unmask.

---

##### `UntagLogGroup`<sup>Required</sup> <a name="UntagLogGroup" id="@cdk_utils/iam.logs.LogsActions.property.UntagLogGroup"></a>

```typescript
public readonly UntagLogGroup: string;
```

- *Type:* string

[Tagging] logs:UntagLogGroup.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.logs.LogsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] logs:UntagResource.

---

##### `UpdateAnomaly`<sup>Required</sup> <a name="UpdateAnomaly" id="@cdk_utils/iam.logs.LogsActions.property.UpdateAnomaly"></a>

```typescript
public readonly UpdateAnomaly: string;
```

- *Type:* string

[Write] logs:UpdateAnomaly.

---

##### `UpdateDeliveryConfiguration`<sup>Required</sup> <a name="UpdateDeliveryConfiguration" id="@cdk_utils/iam.logs.LogsActions.property.UpdateDeliveryConfiguration"></a>

```typescript
public readonly UpdateDeliveryConfiguration: string;
```

- *Type:* string

[Write] logs:UpdateDeliveryConfiguration.

---

##### `UpdateLogAnomalyDetector`<sup>Required</sup> <a name="UpdateLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsActions.property.UpdateLogAnomalyDetector"></a>

```typescript
public readonly UpdateLogAnomalyDetector: string;
```

- *Type:* string

[Write] logs:UpdateLogAnomalyDetector.

---

##### `UpdateLogDelivery`<sup>Required</sup> <a name="UpdateLogDelivery" id="@cdk_utils/iam.logs.LogsActions.property.UpdateLogDelivery"></a>

```typescript
public readonly UpdateLogDelivery: string;
```

- *Type:* string

[Write] logs:UpdateLogDelivery.

---

##### `UpdateLookupTable`<sup>Required</sup> <a name="UpdateLookupTable" id="@cdk_utils/iam.logs.LogsActions.property.UpdateLookupTable"></a>

```typescript
public readonly UpdateLookupTable: string;
```

- *Type:* string

[Write] logs:UpdateLookupTable.

---

##### `UpdateScheduledQuery`<sup>Required</sup> <a name="UpdateScheduledQuery" id="@cdk_utils/iam.logs.LogsActions.property.UpdateScheduledQuery"></a>

```typescript
public readonly UpdateScheduledQuery: string;
```

- *Type:* string

[Write] logs:UpdateScheduledQuery.

---

### LogsConditions <a name="LogsConditions" id="@cdk_utils/iam.logs.LogsConditions"></a>

Condition key constants and builders for logs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.logs.LogsConditions.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

new logs.LogsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.dataSourceName">dataSourceName</a></code> | Generates a condition block for `logs:data_source_name`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.dataSourceType">dataSourceType</a></code> | Generates a condition block for `logs:data_source_type`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.deliveryDestinationResourceARN">deliveryDestinationResourceARN</a></code> | Generates a condition block for `logs:DeliveryDestinationResourceArn`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.logGeneratingResourceArns">logGeneratingResourceArns</a></code> | Generates a condition block for `logs:LogGeneratingResourceArns`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `dataSourceName` <a name="dataSourceName" id="@cdk_utils/iam.logs.LogsConditions.dataSourceName"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.dataSourceName(value: string)
```

Generates a condition block for `logs:data_source_name`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.logs.LogsConditions.dataSourceName.parameter.value"></a>

- *Type:* string

---

##### `dataSourceType` <a name="dataSourceType" id="@cdk_utils/iam.logs.LogsConditions.dataSourceType"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.dataSourceType(value: string)
```

Generates a condition block for `logs:data_source_type`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.logs.LogsConditions.dataSourceType.parameter.value"></a>

- *Type:* string

---

##### `deliveryDestinationResourceARN` <a name="deliveryDestinationResourceARN" id="@cdk_utils/iam.logs.LogsConditions.deliveryDestinationResourceARN"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.deliveryDestinationResourceARN(value: string)
```

Generates a condition block for `logs:DeliveryDestinationResourceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.logs.LogsConditions.deliveryDestinationResourceARN.parameter.value"></a>

- *Type:* string

---

##### `logGeneratingResourceArns` <a name="logGeneratingResourceArns" id="@cdk_utils/iam.logs.LogsConditions.logGeneratingResourceArns"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.logGeneratingResourceArns(values: string[])
```

Generates a condition block for `logs:LogGeneratingResourceArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.logs.LogsConditions.logGeneratingResourceArns.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.logs.LogsConditions.requestTag"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.logs.LogsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.logs.LogsConditions.resourceTag"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.logs.LogsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.logs.LogsConditions.tagKeys"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.logs.LogsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.CreateDeliveryConditionKeys">CreateDeliveryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDelivery action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.CreateLogAnomalyDetectorConditionKeys">CreateLogAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLogAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.CreateLogGroupConditionKeys">CreateLogGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLogGroup action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.CreateLookupTableConditionKeys">CreateLookupTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLookupTable action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.CreateScheduledQueryConditionKeys">CreateScheduledQueryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScheduledQuery action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.DATA_SOURCE_NAME">DATA_SOURCE_NAME</a></code> | <code>string</code> | Condition key: logs:data_source_name (String). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.DATA_SOURCE_TYPE">DATA_SOURCE_TYPE</a></code> | <code>string</code> | Condition key: logs:data_source_type (String). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.DELIVERY_DESTINATION_RESOURCE_ARN">DELIVERY_DESTINATION_RESOURCE_ARN</a></code> | <code>string</code> | Condition key: logs:DeliveryDestinationResourceArn (ARN). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.IntegrateWithS3TableConditionKeys">IntegrateWithS3TableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IntegrateWithS3Table action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.LOG_GENERATING_RESOURCE_ARNS">LOG_GENERATING_RESOURCE_ARNS</a></code> | <code>string</code> | Condition key: logs:LogGeneratingResourceArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.ProcessWithPipelineConditionKeys">ProcessWithPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ProcessWithPipeline action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.PutDeliveryDestinationConditionKeys">PutDeliveryDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDeliveryDestination action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.PutDeliverySourceConditionKeys">PutDeliverySourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDeliverySource action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.PutDestinationConditionKeys">PutDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDestination action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.TagLogGroupConditionKeys">TagLogGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagLogGroup action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.UntagLogGroupConditionKeys">UntagLogGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagLogGroup action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.logs.LogsConditions.property.UpdateDeliveryConfigurationConditionKeys">UpdateDeliveryConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDeliveryConfiguration action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.logs.LogsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.logs.LogsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.logs.LogsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDeliveryConditionKeys`<sup>Required</sup> <a name="CreateDeliveryConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.CreateDeliveryConditionKeys"></a>

```typescript
public readonly CreateDeliveryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDelivery action.

---

##### `CreateLogAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="CreateLogAnomalyDetectorConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.CreateLogAnomalyDetectorConditionKeys"></a>

```typescript
public readonly CreateLogAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLogAnomalyDetector action.

---

##### `CreateLogGroupConditionKeys`<sup>Required</sup> <a name="CreateLogGroupConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.CreateLogGroupConditionKeys"></a>

```typescript
public readonly CreateLogGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLogGroup action.

---

##### `CreateLookupTableConditionKeys`<sup>Required</sup> <a name="CreateLookupTableConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.CreateLookupTableConditionKeys"></a>

```typescript
public readonly CreateLookupTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLookupTable action.

---

##### `CreateScheduledQueryConditionKeys`<sup>Required</sup> <a name="CreateScheduledQueryConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.CreateScheduledQueryConditionKeys"></a>

```typescript
public readonly CreateScheduledQueryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScheduledQuery action.

---

##### `DATA_SOURCE_NAME`<sup>Required</sup> <a name="DATA_SOURCE_NAME" id="@cdk_utils/iam.logs.LogsConditions.property.DATA_SOURCE_NAME"></a>

```typescript
public readonly DATA_SOURCE_NAME: string;
```

- *Type:* string

Condition key: logs:data_source_name (String).

---

##### `DATA_SOURCE_TYPE`<sup>Required</sup> <a name="DATA_SOURCE_TYPE" id="@cdk_utils/iam.logs.LogsConditions.property.DATA_SOURCE_TYPE"></a>

```typescript
public readonly DATA_SOURCE_TYPE: string;
```

- *Type:* string

Condition key: logs:data_source_type (String).

---

##### `DELIVERY_DESTINATION_RESOURCE_ARN`<sup>Required</sup> <a name="DELIVERY_DESTINATION_RESOURCE_ARN" id="@cdk_utils/iam.logs.LogsConditions.property.DELIVERY_DESTINATION_RESOURCE_ARN"></a>

```typescript
public readonly DELIVERY_DESTINATION_RESOURCE_ARN: string;
```

- *Type:* string

Condition key: logs:DeliveryDestinationResourceArn (ARN).

---

##### `IntegrateWithS3TableConditionKeys`<sup>Required</sup> <a name="IntegrateWithS3TableConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.IntegrateWithS3TableConditionKeys"></a>

```typescript
public readonly IntegrateWithS3TableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IntegrateWithS3Table action.

---

##### `LOG_GENERATING_RESOURCE_ARNS`<sup>Required</sup> <a name="LOG_GENERATING_RESOURCE_ARNS" id="@cdk_utils/iam.logs.LogsConditions.property.LOG_GENERATING_RESOURCE_ARNS"></a>

```typescript
public readonly LOG_GENERATING_RESOURCE_ARNS: string;
```

- *Type:* string

Condition key: logs:LogGeneratingResourceArns (ArrayOfARN).

---

##### `ProcessWithPipelineConditionKeys`<sup>Required</sup> <a name="ProcessWithPipelineConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.ProcessWithPipelineConditionKeys"></a>

```typescript
public readonly ProcessWithPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ProcessWithPipeline action.

---

##### `PutDeliveryDestinationConditionKeys`<sup>Required</sup> <a name="PutDeliveryDestinationConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.PutDeliveryDestinationConditionKeys"></a>

```typescript
public readonly PutDeliveryDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDeliveryDestination action.

---

##### `PutDeliverySourceConditionKeys`<sup>Required</sup> <a name="PutDeliverySourceConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.PutDeliverySourceConditionKeys"></a>

```typescript
public readonly PutDeliverySourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDeliverySource action.

---

##### `PutDestinationConditionKeys`<sup>Required</sup> <a name="PutDestinationConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.PutDestinationConditionKeys"></a>

```typescript
public readonly PutDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDestination action.

---

##### `TagLogGroupConditionKeys`<sup>Required</sup> <a name="TagLogGroupConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.TagLogGroupConditionKeys"></a>

```typescript
public readonly TagLogGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagLogGroup action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagLogGroupConditionKeys`<sup>Required</sup> <a name="UntagLogGroupConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.UntagLogGroupConditionKeys"></a>

```typescript
public readonly UntagLogGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagLogGroup action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDeliveryConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateDeliveryConfigurationConditionKeys" id="@cdk_utils/iam.logs.LogsConditions.property.UpdateDeliveryConfigurationConditionKeys"></a>

```typescript
public readonly UpdateDeliveryConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDeliveryConfiguration action.

---

### LogsOperations <a name="LogsOperations" id="@cdk_utils/iam.logs.LogsOperations"></a>

API operation to required IAM actions mapping for logs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.logs.LogsOperations.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

new logs.LogsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.AssociateKmsKey">AssociateKmsKey</a></code> | <code>string[]</code> | IAM actions required for the AssociateKmsKey API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.AssociateSourceToS3TableIntegration">AssociateSourceToS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceToS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CancelExportTask">CancelExportTask</a></code> | <code>string[]</code> | IAM actions required for the CancelExportTask API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CancelImportTask">CancelImportTask</a></code> | <code>string[]</code> | IAM actions required for the CancelImportTask API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateDelivery">CreateDelivery</a></code> | <code>string[]</code> | IAM actions required for the CreateDelivery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateExportTask">CreateExportTask</a></code> | <code>string[]</code> | IAM actions required for the CreateExportTask API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateImportTask">CreateImportTask</a></code> | <code>string[]</code> | IAM actions required for the CreateImportTask API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateLogAnomalyDetector">CreateLogAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the CreateLogAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateLogGroup">CreateLogGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateLogGroup API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateLogStream">CreateLogStream</a></code> | <code>string[]</code> | IAM actions required for the CreateLogStream API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateLookupTable">CreateLookupTable</a></code> | <code>string[]</code> | IAM actions required for the CreateLookupTable API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.CreateScheduledQuery">CreateScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteAccountPolicy">DeleteAccountPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDataProtectionPolicy">DeleteDataProtectionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataProtectionPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDelivery">DeleteDelivery</a></code> | <code>string[]</code> | IAM actions required for the DeleteDelivery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliveryDestination">DeleteDeliveryDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeliveryDestination API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliveryDestinationPolicy">DeleteDeliveryDestinationPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeliveryDestinationPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliverySource">DeleteDeliverySource</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeliverySource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteDestination">DeleteDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteDestination API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteIndexPolicy">DeleteIndexPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteIndexPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteIntegration">DeleteIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteLogAnomalyDetector">DeleteLogAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteLogAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteLogGroup">DeleteLogGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteLogGroup API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteLogStream">DeleteLogStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteLogStream API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteLookupTable">DeleteLookupTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteLookupTable API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteMetricFilter">DeleteMetricFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetricFilter API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteQueryDefinition">DeleteQueryDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueryDefinition API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteRetentionPolicy">DeleteRetentionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteRetentionPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteScheduledQuery">DeleteScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteSubscriptionFilter">DeleteSubscriptionFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscriptionFilter API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteSyslogConfiguration">DeleteSyslogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSyslogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DeleteTransformer">DeleteTransformer</a></code> | <code>string[]</code> | IAM actions required for the DeleteTransformer API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeAccountPolicies">DescribeAccountPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountPolicies API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeConfigurationTemplates">DescribeConfigurationTemplates</a></code> | <code>string[]</code> | IAM actions required for the DescribeConfigurationTemplates API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliveries">DescribeDeliveries</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliveries API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliveryDestinations">DescribeDeliveryDestinations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliveryDestinations API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliverySources">DescribeDeliverySources</a></code> | <code>string[]</code> | IAM actions required for the DescribeDeliverySources API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeDestinations">DescribeDestinations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDestinations API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeExportTasks">DescribeExportTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeExportTasks API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeFieldIndexes">DescribeFieldIndexes</a></code> | <code>string[]</code> | IAM actions required for the DescribeFieldIndexes API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeImportTaskBatches">DescribeImportTaskBatches</a></code> | <code>string[]</code> | IAM actions required for the DescribeImportTaskBatches API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeImportTasks">DescribeImportTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeImportTasks API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeIndexPolicies">DescribeIndexPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeIndexPolicies API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeLogGroups">DescribeLogGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeLogGroups API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeLogStreams">DescribeLogStreams</a></code> | <code>string[]</code> | IAM actions required for the DescribeLogStreams API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeLookupTables">DescribeLookupTables</a></code> | <code>string[]</code> | IAM actions required for the DescribeLookupTables API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeMetricFilters">DescribeMetricFilters</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetricFilters API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeQueries">DescribeQueries</a></code> | <code>string[]</code> | IAM actions required for the DescribeQueries API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeQueryDefinitions">DescribeQueryDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeQueryDefinitions API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeResourcePolicies">DescribeResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DescribeSubscriptionFilters">DescribeSubscriptionFilters</a></code> | <code>string[]</code> | IAM actions required for the DescribeSubscriptionFilters API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DisassociateKmsKey">DisassociateKmsKey</a></code> | <code>string[]</code> | IAM actions required for the DisassociateKmsKey API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.DisassociateSourceFromS3TableIntegration">DisassociateSourceFromS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSourceFromS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.FilterLogEvents">FilterLogEvents</a></code> | <code>string[]</code> | IAM actions required for the FilterLogEvents API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListAggregateLogGroupSummaries">ListAggregateLogGroupSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListAggregateLogGroupSummaries API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListAnomalies">ListAnomalies</a></code> | <code>string[]</code> | IAM actions required for the ListAnomalies API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListIntegrations">ListIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrations API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListLogAnomalyDetectors">ListLogAnomalyDetectors</a></code> | <code>string[]</code> | IAM actions required for the ListLogAnomalyDetectors API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListLogGroups">ListLogGroups</a></code> | <code>string[]</code> | IAM actions required for the ListLogGroups API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListLogGroupsForQuery">ListLogGroupsForQuery</a></code> | <code>string[]</code> | IAM actions required for the ListLogGroupsForQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListScheduledQueries">ListScheduledQueries</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledQueries API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListSourcesForS3TableIntegration">ListSourcesForS3TableIntegration</a></code> | <code>string[]</code> | IAM actions required for the ListSourcesForS3TableIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListSyslogConfigurations">ListSyslogConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListSyslogConfigurations API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.ListTagsLogGroup">ListTagsLogGroup</a></code> | <code>string[]</code> | IAM actions required for the ListTagsLogGroup API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetDataProtectionPolicy">opGetDataProtectionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDataProtectionPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetDelivery">opGetDelivery</a></code> | <code>string[]</code> | IAM actions required for the GetDelivery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetDeliveryDestination">opGetDeliveryDestination</a></code> | <code>string[]</code> | IAM actions required for the GetDeliveryDestination API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetDeliveryDestinationPolicy">opGetDeliveryDestinationPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDeliveryDestinationPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetDeliverySource">opGetDeliverySource</a></code> | <code>string[]</code> | IAM actions required for the GetDeliverySource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetIntegration">opGetIntegration</a></code> | <code>string[]</code> | IAM actions required for the GetIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogAnomalyDetector">opGetLogAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the GetLogAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogEvents">opGetLogEvents</a></code> | <code>string[]</code> | IAM actions required for the GetLogEvents API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogFields">opGetLogFields</a></code> | <code>string[]</code> | IAM actions required for the GetLogFields API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogGroupFields">opGetLogGroupFields</a></code> | <code>string[]</code> | IAM actions required for the GetLogGroupFields API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogObject">opGetLogObject</a></code> | <code>string[]</code> | IAM actions required for the GetLogObject API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLogRecord">opGetLogRecord</a></code> | <code>string[]</code> | IAM actions required for the GetLogRecord API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetLookupTable">opGetLookupTable</a></code> | <code>string[]</code> | IAM actions required for the GetLookupTable API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetQueryResults">opGetQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResults API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetScheduledQuery">opGetScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the GetScheduledQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetScheduledQueryHistory">opGetScheduledQueryHistory</a></code> | <code>string[]</code> | IAM actions required for the GetScheduledQueryHistory API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetStorageTierPolicy">opGetStorageTierPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetStorageTierPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.opGetTransformer">opGetTransformer</a></code> | <code>string[]</code> | IAM actions required for the GetTransformer API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutAccountPolicy">PutAccountPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutAccountPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutBearerTokenAuthentication">PutBearerTokenAuthentication</a></code> | <code>string[]</code> | IAM actions required for the PutBearerTokenAuthentication API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDataProtectionPolicy">PutDataProtectionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutDataProtectionPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDeliveryDestination">PutDeliveryDestination</a></code> | <code>string[]</code> | IAM actions required for the PutDeliveryDestination API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDeliveryDestinationPolicy">PutDeliveryDestinationPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutDeliveryDestinationPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDeliverySource">PutDeliverySource</a></code> | <code>string[]</code> | IAM actions required for the PutDeliverySource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDestination">PutDestination</a></code> | <code>string[]</code> | IAM actions required for the PutDestination API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutDestinationPolicy">PutDestinationPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutDestinationPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutIndexPolicy">PutIndexPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutIndexPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutIntegration">PutIntegration</a></code> | <code>string[]</code> | IAM actions required for the PutIntegration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutLogEvents">PutLogEvents</a></code> | <code>string[]</code> | IAM actions required for the PutLogEvents API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutLogGroupDeletionProtection">PutLogGroupDeletionProtection</a></code> | <code>string[]</code> | IAM actions required for the PutLogGroupDeletionProtection API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutMetricFilter">PutMetricFilter</a></code> | <code>string[]</code> | IAM actions required for the PutMetricFilter API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutQueryDefinition">PutQueryDefinition</a></code> | <code>string[]</code> | IAM actions required for the PutQueryDefinition API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutRetentionPolicy">PutRetentionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutRetentionPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutStorageTierPolicy">PutStorageTierPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutStorageTierPolicy API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutSubscriptionFilter">PutSubscriptionFilter</a></code> | <code>string[]</code> | IAM actions required for the PutSubscriptionFilter API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutSyslogConfiguration">PutSyslogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutSyslogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.PutTransformer">PutTransformer</a></code> | <code>string[]</code> | IAM actions required for the PutTransformer API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.StartLiveTail">StartLiveTail</a></code> | <code>string[]</code> | IAM actions required for the StartLiveTail API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.StartQuery">StartQuery</a></code> | <code>string[]</code> | IAM actions required for the StartQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.StopQuery">StopQuery</a></code> | <code>string[]</code> | IAM actions required for the StopQuery API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.TagLogGroup">TagLogGroup</a></code> | <code>string[]</code> | IAM actions required for the TagLogGroup API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.TestMetricFilter">TestMetricFilter</a></code> | <code>string[]</code> | IAM actions required for the TestMetricFilter API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.TestTransformer">TestTransformer</a></code> | <code>string[]</code> | IAM actions required for the TestTransformer API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UntagLogGroup">UntagLogGroup</a></code> | <code>string[]</code> | IAM actions required for the UntagLogGroup API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UpdateAnomaly">UpdateAnomaly</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnomaly API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UpdateDeliveryConfiguration">UpdateDeliveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeliveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UpdateLogAnomalyDetector">UpdateLogAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the UpdateLogAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UpdateLookupTable">UpdateLookupTable</a></code> | <code>string[]</code> | IAM actions required for the UpdateLookupTable API call. |
| <code><a href="#@cdk_utils/iam.logs.LogsOperations.property.UpdateScheduledQuery">UpdateScheduledQuery</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledQuery API call. |

---

##### `AssociateKmsKey`<sup>Required</sup> <a name="AssociateKmsKey" id="@cdk_utils/iam.logs.LogsOperations.property.AssociateKmsKey"></a>

```typescript
public readonly AssociateKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the AssociateKmsKey API call.

---

##### `AssociateSourceToS3TableIntegration`<sup>Required</sup> <a name="AssociateSourceToS3TableIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.AssociateSourceToS3TableIntegration"></a>

```typescript
public readonly AssociateSourceToS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceToS3TableIntegration API call.

---

##### `CancelExportTask`<sup>Required</sup> <a name="CancelExportTask" id="@cdk_utils/iam.logs.LogsOperations.property.CancelExportTask"></a>

```typescript
public readonly CancelExportTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelExportTask API call.

---

##### `CancelImportTask`<sup>Required</sup> <a name="CancelImportTask" id="@cdk_utils/iam.logs.LogsOperations.property.CancelImportTask"></a>

```typescript
public readonly CancelImportTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelImportTask API call.

---

##### `CreateDelivery`<sup>Required</sup> <a name="CreateDelivery" id="@cdk_utils/iam.logs.LogsOperations.property.CreateDelivery"></a>

```typescript
public readonly CreateDelivery: string[];
```

- *Type:* string[]

IAM actions required for the CreateDelivery API call.

---

##### `CreateExportTask`<sup>Required</sup> <a name="CreateExportTask" id="@cdk_utils/iam.logs.LogsOperations.property.CreateExportTask"></a>

```typescript
public readonly CreateExportTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateExportTask API call.

---

##### `CreateImportTask`<sup>Required</sup> <a name="CreateImportTask" id="@cdk_utils/iam.logs.LogsOperations.property.CreateImportTask"></a>

```typescript
public readonly CreateImportTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateImportTask API call.

---

##### `CreateLogAnomalyDetector`<sup>Required</sup> <a name="CreateLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsOperations.property.CreateLogAnomalyDetector"></a>

```typescript
public readonly CreateLogAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogAnomalyDetector API call.

---

##### `CreateLogGroup`<sup>Required</sup> <a name="CreateLogGroup" id="@cdk_utils/iam.logs.LogsOperations.property.CreateLogGroup"></a>

```typescript
public readonly CreateLogGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogGroup API call.

---

##### `CreateLogStream`<sup>Required</sup> <a name="CreateLogStream" id="@cdk_utils/iam.logs.LogsOperations.property.CreateLogStream"></a>

```typescript
public readonly CreateLogStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogStream API call.

---

##### `CreateLookupTable`<sup>Required</sup> <a name="CreateLookupTable" id="@cdk_utils/iam.logs.LogsOperations.property.CreateLookupTable"></a>

```typescript
public readonly CreateLookupTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateLookupTable API call.

---

##### `CreateScheduledQuery`<sup>Required</sup> <a name="CreateScheduledQuery" id="@cdk_utils/iam.logs.LogsOperations.property.CreateScheduledQuery"></a>

```typescript
public readonly CreateScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledQuery API call.

---

##### `DeleteAccountPolicy`<sup>Required</sup> <a name="DeleteAccountPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteAccountPolicy"></a>

```typescript
public readonly DeleteAccountPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountPolicy API call.

---

##### `DeleteDataProtectionPolicy`<sup>Required</sup> <a name="DeleteDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDataProtectionPolicy"></a>

```typescript
public readonly DeleteDataProtectionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataProtectionPolicy API call.

---

##### `DeleteDelivery`<sup>Required</sup> <a name="DeleteDelivery" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDelivery"></a>

```typescript
public readonly DeleteDelivery: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDelivery API call.

---

##### `DeleteDeliveryDestination`<sup>Required</sup> <a name="DeleteDeliveryDestination" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliveryDestination"></a>

```typescript
public readonly DeleteDeliveryDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeliveryDestination API call.

---

##### `DeleteDeliveryDestinationPolicy`<sup>Required</sup> <a name="DeleteDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliveryDestinationPolicy"></a>

```typescript
public readonly DeleteDeliveryDestinationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeliveryDestinationPolicy API call.

---

##### `DeleteDeliverySource`<sup>Required</sup> <a name="DeleteDeliverySource" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDeliverySource"></a>

```typescript
public readonly DeleteDeliverySource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeliverySource API call.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDestination API call.

---

##### `DeleteIndexPolicy`<sup>Required</sup> <a name="DeleteIndexPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteIndexPolicy"></a>

```typescript
public readonly DeleteIndexPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIndexPolicy API call.

---

##### `DeleteIntegration`<sup>Required</sup> <a name="DeleteIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteIntegration"></a>

```typescript
public readonly DeleteIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegration API call.

---

##### `DeleteLogAnomalyDetector`<sup>Required</sup> <a name="DeleteLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteLogAnomalyDetector"></a>

```typescript
public readonly DeleteLogAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLogAnomalyDetector API call.

---

##### `DeleteLogGroup`<sup>Required</sup> <a name="DeleteLogGroup" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteLogGroup"></a>

```typescript
public readonly DeleteLogGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLogGroup API call.

---

##### `DeleteLogStream`<sup>Required</sup> <a name="DeleteLogStream" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteLogStream"></a>

```typescript
public readonly DeleteLogStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLogStream API call.

---

##### `DeleteLookupTable`<sup>Required</sup> <a name="DeleteLookupTable" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteLookupTable"></a>

```typescript
public readonly DeleteLookupTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLookupTable API call.

---

##### `DeleteMetricFilter`<sup>Required</sup> <a name="DeleteMetricFilter" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteMetricFilter"></a>

```typescript
public readonly DeleteMetricFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetricFilter API call.

---

##### `DeleteQueryDefinition`<sup>Required</sup> <a name="DeleteQueryDefinition" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteQueryDefinition"></a>

```typescript
public readonly DeleteQueryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueryDefinition API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRetentionPolicy`<sup>Required</sup> <a name="DeleteRetentionPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteRetentionPolicy"></a>

```typescript
public readonly DeleteRetentionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRetentionPolicy API call.

---

##### `DeleteScheduledQuery`<sup>Required</sup> <a name="DeleteScheduledQuery" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteScheduledQuery"></a>

```typescript
public readonly DeleteScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledQuery API call.

---

##### `DeleteSubscriptionFilter`<sup>Required</sup> <a name="DeleteSubscriptionFilter" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteSubscriptionFilter"></a>

```typescript
public readonly DeleteSubscriptionFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscriptionFilter API call.

---

##### `DeleteSyslogConfiguration`<sup>Required</sup> <a name="DeleteSyslogConfiguration" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteSyslogConfiguration"></a>

```typescript
public readonly DeleteSyslogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSyslogConfiguration API call.

---

##### `DeleteTransformer`<sup>Required</sup> <a name="DeleteTransformer" id="@cdk_utils/iam.logs.LogsOperations.property.DeleteTransformer"></a>

```typescript
public readonly DeleteTransformer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTransformer API call.

---

##### `DescribeAccountPolicies`<sup>Required</sup> <a name="DescribeAccountPolicies" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeAccountPolicies"></a>

```typescript
public readonly DescribeAccountPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountPolicies API call.

---

##### `DescribeConfigurationTemplates`<sup>Required</sup> <a name="DescribeConfigurationTemplates" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeConfigurationTemplates"></a>

```typescript
public readonly DescribeConfigurationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConfigurationTemplates API call.

---

##### `DescribeDeliveries`<sup>Required</sup> <a name="DescribeDeliveries" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliveries"></a>

```typescript
public readonly DescribeDeliveries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliveries API call.

---

##### `DescribeDeliveryDestinations`<sup>Required</sup> <a name="DescribeDeliveryDestinations" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliveryDestinations"></a>

```typescript
public readonly DescribeDeliveryDestinations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliveryDestinations API call.

---

##### `DescribeDeliverySources`<sup>Required</sup> <a name="DescribeDeliverySources" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeDeliverySources"></a>

```typescript
public readonly DescribeDeliverySources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDeliverySources API call.

---

##### `DescribeDestinations`<sup>Required</sup> <a name="DescribeDestinations" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeDestinations"></a>

```typescript
public readonly DescribeDestinations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDestinations API call.

---

##### `DescribeExportTasks`<sup>Required</sup> <a name="DescribeExportTasks" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeExportTasks"></a>

```typescript
public readonly DescribeExportTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExportTasks API call.

---

##### `DescribeFieldIndexes`<sup>Required</sup> <a name="DescribeFieldIndexes" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeFieldIndexes"></a>

```typescript
public readonly DescribeFieldIndexes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFieldIndexes API call.

---

##### `DescribeImportTaskBatches`<sup>Required</sup> <a name="DescribeImportTaskBatches" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeImportTaskBatches"></a>

```typescript
public readonly DescribeImportTaskBatches: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImportTaskBatches API call.

---

##### `DescribeImportTasks`<sup>Required</sup> <a name="DescribeImportTasks" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeImportTasks"></a>

```typescript
public readonly DescribeImportTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImportTasks API call.

---

##### `DescribeIndexPolicies`<sup>Required</sup> <a name="DescribeIndexPolicies" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeIndexPolicies"></a>

```typescript
public readonly DescribeIndexPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIndexPolicies API call.

---

##### `DescribeLogGroups`<sup>Required</sup> <a name="DescribeLogGroups" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeLogGroups"></a>

```typescript
public readonly DescribeLogGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLogGroups API call.

---

##### `DescribeLogStreams`<sup>Required</sup> <a name="DescribeLogStreams" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeLogStreams"></a>

```typescript
public readonly DescribeLogStreams: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLogStreams API call.

---

##### `DescribeLookupTables`<sup>Required</sup> <a name="DescribeLookupTables" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeLookupTables"></a>

```typescript
public readonly DescribeLookupTables: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLookupTables API call.

---

##### `DescribeMetricFilters`<sup>Required</sup> <a name="DescribeMetricFilters" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeMetricFilters"></a>

```typescript
public readonly DescribeMetricFilters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetricFilters API call.

---

##### `DescribeQueries`<sup>Required</sup> <a name="DescribeQueries" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeQueries"></a>

```typescript
public readonly DescribeQueries: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQueries API call.

---

##### `DescribeQueryDefinitions`<sup>Required</sup> <a name="DescribeQueryDefinitions" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeQueryDefinitions"></a>

```typescript
public readonly DescribeQueryDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQueryDefinitions API call.

---

##### `DescribeResourcePolicies`<sup>Required</sup> <a name="DescribeResourcePolicies" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeResourcePolicies"></a>

```typescript
public readonly DescribeResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicies API call.

---

##### `DescribeSubscriptionFilters`<sup>Required</sup> <a name="DescribeSubscriptionFilters" id="@cdk_utils/iam.logs.LogsOperations.property.DescribeSubscriptionFilters"></a>

```typescript
public readonly DescribeSubscriptionFilters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSubscriptionFilters API call.

---

##### `DisassociateKmsKey`<sup>Required</sup> <a name="DisassociateKmsKey" id="@cdk_utils/iam.logs.LogsOperations.property.DisassociateKmsKey"></a>

```typescript
public readonly DisassociateKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateKmsKey API call.

---

##### `DisassociateSourceFromS3TableIntegration`<sup>Required</sup> <a name="DisassociateSourceFromS3TableIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.DisassociateSourceFromS3TableIntegration"></a>

```typescript
public readonly DisassociateSourceFromS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSourceFromS3TableIntegration API call.

---

##### `FilterLogEvents`<sup>Required</sup> <a name="FilterLogEvents" id="@cdk_utils/iam.logs.LogsOperations.property.FilterLogEvents"></a>

```typescript
public readonly FilterLogEvents: string[];
```

- *Type:* string[]

IAM actions required for the FilterLogEvents API call.

---

##### `ListAggregateLogGroupSummaries`<sup>Required</sup> <a name="ListAggregateLogGroupSummaries" id="@cdk_utils/iam.logs.LogsOperations.property.ListAggregateLogGroupSummaries"></a>

```typescript
public readonly ListAggregateLogGroupSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListAggregateLogGroupSummaries API call.

---

##### `ListAnomalies`<sup>Required</sup> <a name="ListAnomalies" id="@cdk_utils/iam.logs.LogsOperations.property.ListAnomalies"></a>

```typescript
public readonly ListAnomalies: string[];
```

- *Type:* string[]

IAM actions required for the ListAnomalies API call.

---

##### `ListIntegrations`<sup>Required</sup> <a name="ListIntegrations" id="@cdk_utils/iam.logs.LogsOperations.property.ListIntegrations"></a>

```typescript
public readonly ListIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrations API call.

---

##### `ListLogAnomalyDetectors`<sup>Required</sup> <a name="ListLogAnomalyDetectors" id="@cdk_utils/iam.logs.LogsOperations.property.ListLogAnomalyDetectors"></a>

```typescript
public readonly ListLogAnomalyDetectors: string[];
```

- *Type:* string[]

IAM actions required for the ListLogAnomalyDetectors API call.

---

##### `ListLogGroups`<sup>Required</sup> <a name="ListLogGroups" id="@cdk_utils/iam.logs.LogsOperations.property.ListLogGroups"></a>

```typescript
public readonly ListLogGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListLogGroups API call.

---

##### `ListLogGroupsForQuery`<sup>Required</sup> <a name="ListLogGroupsForQuery" id="@cdk_utils/iam.logs.LogsOperations.property.ListLogGroupsForQuery"></a>

```typescript
public readonly ListLogGroupsForQuery: string[];
```

- *Type:* string[]

IAM actions required for the ListLogGroupsForQuery API call.

---

##### `ListScheduledQueries`<sup>Required</sup> <a name="ListScheduledQueries" id="@cdk_utils/iam.logs.LogsOperations.property.ListScheduledQueries"></a>

```typescript
public readonly ListScheduledQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledQueries API call.

---

##### `ListSourcesForS3TableIntegration`<sup>Required</sup> <a name="ListSourcesForS3TableIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.ListSourcesForS3TableIntegration"></a>

```typescript
public readonly ListSourcesForS3TableIntegration: string[];
```

- *Type:* string[]

IAM actions required for the ListSourcesForS3TableIntegration API call.

---

##### `ListSyslogConfigurations`<sup>Required</sup> <a name="ListSyslogConfigurations" id="@cdk_utils/iam.logs.LogsOperations.property.ListSyslogConfigurations"></a>

```typescript
public readonly ListSyslogConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListSyslogConfigurations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.logs.LogsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTagsLogGroup`<sup>Required</sup> <a name="ListTagsLogGroup" id="@cdk_utils/iam.logs.LogsOperations.property.ListTagsLogGroup"></a>

```typescript
public readonly ListTagsLogGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsLogGroup API call.

---

##### `opGetDataProtectionPolicy`<sup>Required</sup> <a name="opGetDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.opGetDataProtectionPolicy"></a>

```typescript
public readonly opGetDataProtectionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDataProtectionPolicy API call.

---

##### `opGetDelivery`<sup>Required</sup> <a name="opGetDelivery" id="@cdk_utils/iam.logs.LogsOperations.property.opGetDelivery"></a>

```typescript
public readonly opGetDelivery: string[];
```

- *Type:* string[]

IAM actions required for the GetDelivery API call.

---

##### `opGetDeliveryDestination`<sup>Required</sup> <a name="opGetDeliveryDestination" id="@cdk_utils/iam.logs.LogsOperations.property.opGetDeliveryDestination"></a>

```typescript
public readonly opGetDeliveryDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetDeliveryDestination API call.

---

##### `opGetDeliveryDestinationPolicy`<sup>Required</sup> <a name="opGetDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.opGetDeliveryDestinationPolicy"></a>

```typescript
public readonly opGetDeliveryDestinationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDeliveryDestinationPolicy API call.

---

##### `opGetDeliverySource`<sup>Required</sup> <a name="opGetDeliverySource" id="@cdk_utils/iam.logs.LogsOperations.property.opGetDeliverySource"></a>

```typescript
public readonly opGetDeliverySource: string[];
```

- *Type:* string[]

IAM actions required for the GetDeliverySource API call.

---

##### `opGetIntegration`<sup>Required</sup> <a name="opGetIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.opGetIntegration"></a>

```typescript
public readonly opGetIntegration: string[];
```

- *Type:* string[]

IAM actions required for the GetIntegration API call.

---

##### `opGetLogAnomalyDetector`<sup>Required</sup> <a name="opGetLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogAnomalyDetector"></a>

```typescript
public readonly opGetLogAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the GetLogAnomalyDetector API call.

---

##### `opGetLogEvents`<sup>Required</sup> <a name="opGetLogEvents" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogEvents"></a>

```typescript
public readonly opGetLogEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetLogEvents API call.

---

##### `opGetLogFields`<sup>Required</sup> <a name="opGetLogFields" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogFields"></a>

```typescript
public readonly opGetLogFields: string[];
```

- *Type:* string[]

IAM actions required for the GetLogFields API call.

---

##### `opGetLogGroupFields`<sup>Required</sup> <a name="opGetLogGroupFields" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogGroupFields"></a>

```typescript
public readonly opGetLogGroupFields: string[];
```

- *Type:* string[]

IAM actions required for the GetLogGroupFields API call.

---

##### `opGetLogObject`<sup>Required</sup> <a name="opGetLogObject" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogObject"></a>

```typescript
public readonly opGetLogObject: string[];
```

- *Type:* string[]

IAM actions required for the GetLogObject API call.

---

##### `opGetLogRecord`<sup>Required</sup> <a name="opGetLogRecord" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLogRecord"></a>

```typescript
public readonly opGetLogRecord: string[];
```

- *Type:* string[]

IAM actions required for the GetLogRecord API call.

---

##### `opGetLookupTable`<sup>Required</sup> <a name="opGetLookupTable" id="@cdk_utils/iam.logs.LogsOperations.property.opGetLookupTable"></a>

```typescript
public readonly opGetLookupTable: string[];
```

- *Type:* string[]

IAM actions required for the GetLookupTable API call.

---

##### `opGetQueryResults`<sup>Required</sup> <a name="opGetQueryResults" id="@cdk_utils/iam.logs.LogsOperations.property.opGetQueryResults"></a>

```typescript
public readonly opGetQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResults API call.

---

##### `opGetScheduledQuery`<sup>Required</sup> <a name="opGetScheduledQuery" id="@cdk_utils/iam.logs.LogsOperations.property.opGetScheduledQuery"></a>

```typescript
public readonly opGetScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the GetScheduledQuery API call.

---

##### `opGetScheduledQueryHistory`<sup>Required</sup> <a name="opGetScheduledQueryHistory" id="@cdk_utils/iam.logs.LogsOperations.property.opGetScheduledQueryHistory"></a>

```typescript
public readonly opGetScheduledQueryHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetScheduledQueryHistory API call.

---

##### `opGetStorageTierPolicy`<sup>Required</sup> <a name="opGetStorageTierPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.opGetStorageTierPolicy"></a>

```typescript
public readonly opGetStorageTierPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetStorageTierPolicy API call.

---

##### `opGetTransformer`<sup>Required</sup> <a name="opGetTransformer" id="@cdk_utils/iam.logs.LogsOperations.property.opGetTransformer"></a>

```typescript
public readonly opGetTransformer: string[];
```

- *Type:* string[]

IAM actions required for the GetTransformer API call.

---

##### `PutAccountPolicy`<sup>Required</sup> <a name="PutAccountPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutAccountPolicy"></a>

```typescript
public readonly PutAccountPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountPolicy API call.

---

##### `PutBearerTokenAuthentication`<sup>Required</sup> <a name="PutBearerTokenAuthentication" id="@cdk_utils/iam.logs.LogsOperations.property.PutBearerTokenAuthentication"></a>

```typescript
public readonly PutBearerTokenAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the PutBearerTokenAuthentication API call.

---

##### `PutDataProtectionPolicy`<sup>Required</sup> <a name="PutDataProtectionPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutDataProtectionPolicy"></a>

```typescript
public readonly PutDataProtectionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutDataProtectionPolicy API call.

---

##### `PutDeliveryDestination`<sup>Required</sup> <a name="PutDeliveryDestination" id="@cdk_utils/iam.logs.LogsOperations.property.PutDeliveryDestination"></a>

```typescript
public readonly PutDeliveryDestination: string[];
```

- *Type:* string[]

IAM actions required for the PutDeliveryDestination API call.

---

##### `PutDeliveryDestinationPolicy`<sup>Required</sup> <a name="PutDeliveryDestinationPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutDeliveryDestinationPolicy"></a>

```typescript
public readonly PutDeliveryDestinationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutDeliveryDestinationPolicy API call.

---

##### `PutDeliverySource`<sup>Required</sup> <a name="PutDeliverySource" id="@cdk_utils/iam.logs.LogsOperations.property.PutDeliverySource"></a>

```typescript
public readonly PutDeliverySource: string[];
```

- *Type:* string[]

IAM actions required for the PutDeliverySource API call.

---

##### `PutDestination`<sup>Required</sup> <a name="PutDestination" id="@cdk_utils/iam.logs.LogsOperations.property.PutDestination"></a>

```typescript
public readonly PutDestination: string[];
```

- *Type:* string[]

IAM actions required for the PutDestination API call.

---

##### `PutDestinationPolicy`<sup>Required</sup> <a name="PutDestinationPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutDestinationPolicy"></a>

```typescript
public readonly PutDestinationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutDestinationPolicy API call.

---

##### `PutIndexPolicy`<sup>Required</sup> <a name="PutIndexPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutIndexPolicy"></a>

```typescript
public readonly PutIndexPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutIndexPolicy API call.

---

##### `PutIntegration`<sup>Required</sup> <a name="PutIntegration" id="@cdk_utils/iam.logs.LogsOperations.property.PutIntegration"></a>

```typescript
public readonly PutIntegration: string[];
```

- *Type:* string[]

IAM actions required for the PutIntegration API call.

---

##### `PutLogEvents`<sup>Required</sup> <a name="PutLogEvents" id="@cdk_utils/iam.logs.LogsOperations.property.PutLogEvents"></a>

```typescript
public readonly PutLogEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutLogEvents API call.

---

##### `PutLogGroupDeletionProtection`<sup>Required</sup> <a name="PutLogGroupDeletionProtection" id="@cdk_utils/iam.logs.LogsOperations.property.PutLogGroupDeletionProtection"></a>

```typescript
public readonly PutLogGroupDeletionProtection: string[];
```

- *Type:* string[]

IAM actions required for the PutLogGroupDeletionProtection API call.

---

##### `PutMetricFilter`<sup>Required</sup> <a name="PutMetricFilter" id="@cdk_utils/iam.logs.LogsOperations.property.PutMetricFilter"></a>

```typescript
public readonly PutMetricFilter: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricFilter API call.

---

##### `PutQueryDefinition`<sup>Required</sup> <a name="PutQueryDefinition" id="@cdk_utils/iam.logs.LogsOperations.property.PutQueryDefinition"></a>

```typescript
public readonly PutQueryDefinition: string[];
```

- *Type:* string[]

IAM actions required for the PutQueryDefinition API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutRetentionPolicy`<sup>Required</sup> <a name="PutRetentionPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutRetentionPolicy"></a>

```typescript
public readonly PutRetentionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutRetentionPolicy API call.

---

##### `PutStorageTierPolicy`<sup>Required</sup> <a name="PutStorageTierPolicy" id="@cdk_utils/iam.logs.LogsOperations.property.PutStorageTierPolicy"></a>

```typescript
public readonly PutStorageTierPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutStorageTierPolicy API call.

---

##### `PutSubscriptionFilter`<sup>Required</sup> <a name="PutSubscriptionFilter" id="@cdk_utils/iam.logs.LogsOperations.property.PutSubscriptionFilter"></a>

```typescript
public readonly PutSubscriptionFilter: string[];
```

- *Type:* string[]

IAM actions required for the PutSubscriptionFilter API call.

---

##### `PutSyslogConfiguration`<sup>Required</sup> <a name="PutSyslogConfiguration" id="@cdk_utils/iam.logs.LogsOperations.property.PutSyslogConfiguration"></a>

```typescript
public readonly PutSyslogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutSyslogConfiguration API call.

---

##### `PutTransformer`<sup>Required</sup> <a name="PutTransformer" id="@cdk_utils/iam.logs.LogsOperations.property.PutTransformer"></a>

```typescript
public readonly PutTransformer: string[];
```

- *Type:* string[]

IAM actions required for the PutTransformer API call.

---

##### `StartLiveTail`<sup>Required</sup> <a name="StartLiveTail" id="@cdk_utils/iam.logs.LogsOperations.property.StartLiveTail"></a>

```typescript
public readonly StartLiveTail: string[];
```

- *Type:* string[]

IAM actions required for the StartLiveTail API call.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.logs.LogsOperations.property.StartQuery"></a>

```typescript
public readonly StartQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartQuery API call.

---

##### `StopQuery`<sup>Required</sup> <a name="StopQuery" id="@cdk_utils/iam.logs.LogsOperations.property.StopQuery"></a>

```typescript
public readonly StopQuery: string[];
```

- *Type:* string[]

IAM actions required for the StopQuery API call.

---

##### `TagLogGroup`<sup>Required</sup> <a name="TagLogGroup" id="@cdk_utils/iam.logs.LogsOperations.property.TagLogGroup"></a>

```typescript
public readonly TagLogGroup: string[];
```

- *Type:* string[]

IAM actions required for the TagLogGroup API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.logs.LogsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestMetricFilter`<sup>Required</sup> <a name="TestMetricFilter" id="@cdk_utils/iam.logs.LogsOperations.property.TestMetricFilter"></a>

```typescript
public readonly TestMetricFilter: string[];
```

- *Type:* string[]

IAM actions required for the TestMetricFilter API call.

---

##### `TestTransformer`<sup>Required</sup> <a name="TestTransformer" id="@cdk_utils/iam.logs.LogsOperations.property.TestTransformer"></a>

```typescript
public readonly TestTransformer: string[];
```

- *Type:* string[]

IAM actions required for the TestTransformer API call.

---

##### `UntagLogGroup`<sup>Required</sup> <a name="UntagLogGroup" id="@cdk_utils/iam.logs.LogsOperations.property.UntagLogGroup"></a>

```typescript
public readonly UntagLogGroup: string[];
```

- *Type:* string[]

IAM actions required for the UntagLogGroup API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.logs.LogsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnomaly`<sup>Required</sup> <a name="UpdateAnomaly" id="@cdk_utils/iam.logs.LogsOperations.property.UpdateAnomaly"></a>

```typescript
public readonly UpdateAnomaly: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnomaly API call.

---

##### `UpdateDeliveryConfiguration`<sup>Required</sup> <a name="UpdateDeliveryConfiguration" id="@cdk_utils/iam.logs.LogsOperations.property.UpdateDeliveryConfiguration"></a>

```typescript
public readonly UpdateDeliveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeliveryConfiguration API call.

---

##### `UpdateLogAnomalyDetector`<sup>Required</sup> <a name="UpdateLogAnomalyDetector" id="@cdk_utils/iam.logs.LogsOperations.property.UpdateLogAnomalyDetector"></a>

```typescript
public readonly UpdateLogAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLogAnomalyDetector API call.

---

##### `UpdateLookupTable`<sup>Required</sup> <a name="UpdateLookupTable" id="@cdk_utils/iam.logs.LogsOperations.property.UpdateLookupTable"></a>

```typescript
public readonly UpdateLookupTable: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLookupTable API call.

---

##### `UpdateScheduledQuery`<sup>Required</sup> <a name="UpdateScheduledQuery" id="@cdk_utils/iam.logs.LogsOperations.property.UpdateScheduledQuery"></a>

```typescript
public readonly UpdateScheduledQuery: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledQuery API call.

---

### LogsResources <a name="LogsResources" id="@cdk_utils/iam.logs.LogsResources"></a>

ARN builders, validators, and parsers for logs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.logs.LogsResources.Initializer"></a>

```typescript
import { logs } from '@cdk_utils/iam'

new logs.LogsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.anomalyDetector">anomalyDetector</a></code> | Builds an ARN for the anomaly-detector resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.delivery">delivery</a></code> | Builds an ARN for the delivery resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.deliveryDestination">deliveryDestination</a></code> | Builds an ARN for the delivery-destination resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.deliverySource">deliverySource</a></code> | Builds an ARN for the delivery-source resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.destination">destination</a></code> | Builds an ARN for the destination resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidAnomalyDetectorArn">isValidAnomalyDetectorArn</a></code> | Validates whether a string is a valid ARN for the anomaly-detector resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidDeliveryArn">isValidDeliveryArn</a></code> | Validates whether a string is a valid ARN for the delivery resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidDeliveryDestinationArn">isValidDeliveryDestinationArn</a></code> | Validates whether a string is a valid ARN for the delivery-destination resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidDeliverySourceArn">isValidDeliverySourceArn</a></code> | Validates whether a string is a valid ARN for the delivery-source resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidDestinationArn">isValidDestinationArn</a></code> | Validates whether a string is a valid ARN for the destination resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidLogGroupArn">isValidLogGroupArn</a></code> | Validates whether a string is a valid ARN for the log-group resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidLogStreamArn">isValidLogStreamArn</a></code> | Validates whether a string is a valid ARN for the log-stream resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidLookupTableArn">isValidLookupTableArn</a></code> | Validates whether a string is a valid ARN for the lookup-table resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.isValidScheduledQueryArn">isValidScheduledQueryArn</a></code> | Validates whether a string is a valid ARN for the scheduled-query resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.logGroup">logGroup</a></code> | Builds an ARN for the log-group resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.logStream">logStream</a></code> | Builds an ARN for the log-stream resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.lookupTable">lookupTable</a></code> | Builds an ARN for the lookup-table resource. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseAnomalyDetectorArn">parseAnomalyDetectorArn</a></code> | Parses a anomaly-detector ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseDeliveryArn">parseDeliveryArn</a></code> | Parses a delivery ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseDeliveryDestinationArn">parseDeliveryDestinationArn</a></code> | Parses a delivery-destination ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseDeliverySourceArn">parseDeliverySourceArn</a></code> | Parses a delivery-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseDestinationArn">parseDestinationArn</a></code> | Parses a destination ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseLogGroupArn">parseLogGroupArn</a></code> | Parses a log-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseLogStreamArn">parseLogStreamArn</a></code> | Parses a log-stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseLookupTableArn">parseLookupTableArn</a></code> | Parses a lookup-table ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.parseScheduledQueryArn">parseScheduledQueryArn</a></code> | Parses a scheduled-query ARN into its components. |
| <code><a href="#@cdk_utils/iam.logs.LogsResources.scheduledQuery">scheduledQuery</a></code> | Builds an ARN for the scheduled-query resource. |

---

##### `anomalyDetector` <a name="anomalyDetector" id="@cdk_utils/iam.logs.LogsResources.anomalyDetector"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.anomalyDetector(props: LogsAnomalyDetectorArnProps)
```

Builds an ARN for the anomaly-detector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.anomalyDetector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsAnomalyDetectorArnProps">LogsAnomalyDetectorArnProps</a>

---

##### `delivery` <a name="delivery" id="@cdk_utils/iam.logs.LogsResources.delivery"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.delivery(props: LogsDeliveryArnProps)
```

Builds an ARN for the delivery resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.delivery.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsDeliveryArnProps">LogsDeliveryArnProps</a>

---

##### `deliveryDestination` <a name="deliveryDestination" id="@cdk_utils/iam.logs.LogsResources.deliveryDestination"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.deliveryDestination(props: LogsDeliveryDestinationArnProps)
```

Builds an ARN for the delivery-destination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.deliveryDestination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsDeliveryDestinationArnProps">LogsDeliveryDestinationArnProps</a>

---

##### `deliverySource` <a name="deliverySource" id="@cdk_utils/iam.logs.LogsResources.deliverySource"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.deliverySource(props: LogsDeliverySourceArnProps)
```

Builds an ARN for the delivery-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.deliverySource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsDeliverySourceArnProps">LogsDeliverySourceArnProps</a>

---

##### `destination` <a name="destination" id="@cdk_utils/iam.logs.LogsResources.destination"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.destination(props: LogsDestinationArnProps)
```

Builds an ARN for the destination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.destination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsDestinationArnProps">LogsDestinationArnProps</a>

---

##### `isValidAnomalyDetectorArn` <a name="isValidAnomalyDetectorArn" id="@cdk_utils/iam.logs.LogsResources.isValidAnomalyDetectorArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidAnomalyDetectorArn(arn: string)
```

Validates whether a string is a valid ARN for the anomaly-detector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidAnomalyDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeliveryArn` <a name="isValidDeliveryArn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliveryArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidDeliveryArn(arn: string)
```

Validates whether a string is a valid ARN for the delivery resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliveryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeliveryDestinationArn` <a name="isValidDeliveryDestinationArn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliveryDestinationArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidDeliveryDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the delivery-destination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliveryDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeliverySourceArn` <a name="isValidDeliverySourceArn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliverySourceArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidDeliverySourceArn(arn: string)
```

Validates whether a string is a valid ARN for the delivery-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidDeliverySourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDestinationArn` <a name="isValidDestinationArn" id="@cdk_utils/iam.logs.LogsResources.isValidDestinationArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the destination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLogGroupArn` <a name="isValidLogGroupArn" id="@cdk_utils/iam.logs.LogsResources.isValidLogGroupArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidLogGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the log-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidLogGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLogStreamArn` <a name="isValidLogStreamArn" id="@cdk_utils/iam.logs.LogsResources.isValidLogStreamArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidLogStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the log-stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidLogStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLookupTableArn` <a name="isValidLookupTableArn" id="@cdk_utils/iam.logs.LogsResources.isValidLookupTableArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidLookupTableArn(arn: string)
```

Validates whether a string is a valid ARN for the lookup-table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidLookupTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduledQueryArn` <a name="isValidScheduledQueryArn" id="@cdk_utils/iam.logs.LogsResources.isValidScheduledQueryArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.isValidScheduledQueryArn(arn: string)
```

Validates whether a string is a valid ARN for the scheduled-query resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.isValidScheduledQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `logGroup` <a name="logGroup" id="@cdk_utils/iam.logs.LogsResources.logGroup"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.logGroup(props: LogsLogGroupArnProps)
```

Builds an ARN for the log-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.logGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsLogGroupArnProps">LogsLogGroupArnProps</a>

---

##### `logStream` <a name="logStream" id="@cdk_utils/iam.logs.LogsResources.logStream"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.logStream(props: LogsLogStreamArnProps)
```

Builds an ARN for the log-stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.logStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsLogStreamArnProps">LogsLogStreamArnProps</a>

---

##### `lookupTable` <a name="lookupTable" id="@cdk_utils/iam.logs.LogsResources.lookupTable"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.lookupTable(props: LogsLookupTableArnProps)
```

Builds an ARN for the lookup-table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.lookupTable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsLookupTableArnProps">LogsLookupTableArnProps</a>

---

##### `parseAnomalyDetectorArn` <a name="parseAnomalyDetectorArn" id="@cdk_utils/iam.logs.LogsResources.parseAnomalyDetectorArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseAnomalyDetectorArn(arn: string)
```

Parses a anomaly-detector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseAnomalyDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeliveryArn` <a name="parseDeliveryArn" id="@cdk_utils/iam.logs.LogsResources.parseDeliveryArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseDeliveryArn(arn: string)
```

Parses a delivery ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseDeliveryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeliveryDestinationArn` <a name="parseDeliveryDestinationArn" id="@cdk_utils/iam.logs.LogsResources.parseDeliveryDestinationArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseDeliveryDestinationArn(arn: string)
```

Parses a delivery-destination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseDeliveryDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeliverySourceArn` <a name="parseDeliverySourceArn" id="@cdk_utils/iam.logs.LogsResources.parseDeliverySourceArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseDeliverySourceArn(arn: string)
```

Parses a delivery-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseDeliverySourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDestinationArn` <a name="parseDestinationArn" id="@cdk_utils/iam.logs.LogsResources.parseDestinationArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseDestinationArn(arn: string)
```

Parses a destination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLogGroupArn` <a name="parseLogGroupArn" id="@cdk_utils/iam.logs.LogsResources.parseLogGroupArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseLogGroupArn(arn: string)
```

Parses a log-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseLogGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLogStreamArn` <a name="parseLogStreamArn" id="@cdk_utils/iam.logs.LogsResources.parseLogStreamArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseLogStreamArn(arn: string)
```

Parses a log-stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseLogStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLookupTableArn` <a name="parseLookupTableArn" id="@cdk_utils/iam.logs.LogsResources.parseLookupTableArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseLookupTableArn(arn: string)
```

Parses a lookup-table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseLookupTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduledQueryArn` <a name="parseScheduledQueryArn" id="@cdk_utils/iam.logs.LogsResources.parseScheduledQueryArn"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.parseScheduledQueryArn(arn: string)
```

Parses a scheduled-query ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.logs.LogsResources.parseScheduledQueryArn.parameter.arn"></a>

- *Type:* string

---

##### `scheduledQuery` <a name="scheduledQuery" id="@cdk_utils/iam.logs.LogsResources.scheduledQuery"></a>

```typescript
import { logs } from '@cdk_utils/iam'

logs.LogsResources.scheduledQuery(props: LogsScheduledQueryArnProps)
```

Builds an ARN for the scheduled-query resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.logs.LogsResources.scheduledQuery.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.logs.LogsScheduledQueryArnProps">LogsScheduledQueryArnProps</a>

---




