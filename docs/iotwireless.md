# `iotwireless` Submodule <a name="`iotwireless` Submodule" id="@cdk_utils/iam.iotwireless"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotwirelessCertArnComponents <a name="IotwirelessCertArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents"></a>

Parsed components of a cert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessCertArnComponents: iotwireless.IotwirelessCertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.certificate">certificate</a></code> | <code>string</code> | The Certificate component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The Certificate component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessCertArnProps <a name="IotwirelessCertArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps"></a>

Properties for building a cert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessCertArnProps: iotwireless.IotwirelessCertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.certificate">certificate</a></code> | <code>string</code> | The Certificate component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The Certificate component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessCertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessDestinationArnComponents <a name="IotwirelessDestinationArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents"></a>

Parsed components of a Destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessDestinationArnComponents: iotwireless.IotwirelessDestinationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.destinationName">destinationName</a></code> | <code>string</code> | The DestinationName component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

The DestinationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessDestinationArnProps <a name="IotwirelessDestinationArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps"></a>

Properties for building a Destination ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessDestinationArnProps: iotwireless.IotwirelessDestinationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.destinationName">destinationName</a></code> | <code>string</code> | The DestinationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

The DestinationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessDeviceProfileArnComponents <a name="IotwirelessDeviceProfileArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents"></a>

Parsed components of a DeviceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessDeviceProfileArnComponents: iotwireless.IotwirelessDeviceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | The DeviceProfileId component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

The DeviceProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessDeviceProfileArnProps <a name="IotwirelessDeviceProfileArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps"></a>

Properties for building a DeviceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessDeviceProfileArnProps: iotwireless.IotwirelessDeviceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | The DeviceProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

The DeviceProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessFuotaTaskArnComponents <a name="IotwirelessFuotaTaskArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents"></a>

Parsed components of a FuotaTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessFuotaTaskArnComponents: iotwireless.IotwirelessFuotaTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.fuotaTaskId">fuotaTaskId</a></code> | <code>string</code> | The FuotaTaskId component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fuotaTaskId`<sup>Required</sup> <a name="fuotaTaskId" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.fuotaTaskId"></a>

```typescript
public readonly fuotaTaskId: string;
```

- *Type:* string

The FuotaTaskId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessFuotaTaskArnProps <a name="IotwirelessFuotaTaskArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps"></a>

Properties for building a FuotaTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessFuotaTaskArnProps: iotwireless.IotwirelessFuotaTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.fuotaTaskId">fuotaTaskId</a></code> | <code>string</code> | The FuotaTaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fuotaTaskId`<sup>Required</sup> <a name="fuotaTaskId" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.fuotaTaskId"></a>

```typescript
public readonly fuotaTaskId: string;
```

- *Type:* string

The FuotaTaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessImportTaskArnComponents <a name="IotwirelessImportTaskArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents"></a>

Parsed components of a ImportTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessImportTaskArnComponents: iotwireless.IotwirelessImportTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.importTaskId">importTaskId</a></code> | <code>string</code> | The ImportTaskId component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `importTaskId`<sup>Required</sup> <a name="importTaskId" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.importTaskId"></a>

```typescript
public readonly importTaskId: string;
```

- *Type:* string

The ImportTaskId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessImportTaskArnProps <a name="IotwirelessImportTaskArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps"></a>

Properties for building a ImportTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessImportTaskArnProps: iotwireless.IotwirelessImportTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.importTaskId">importTaskId</a></code> | <code>string</code> | The ImportTaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `importTaskId`<sup>Required</sup> <a name="importTaskId" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.importTaskId"></a>

```typescript
public readonly importTaskId: string;
```

- *Type:* string

The ImportTaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessMulticastGroupArnComponents <a name="IotwirelessMulticastGroupArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents"></a>

Parsed components of a MulticastGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessMulticastGroupArnComponents: iotwireless.IotwirelessMulticastGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.multicastGroupId">multicastGroupId</a></code> | <code>string</code> | The MulticastGroupId component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `multicastGroupId`<sup>Required</sup> <a name="multicastGroupId" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.multicastGroupId"></a>

```typescript
public readonly multicastGroupId: string;
```

- *Type:* string

The MulticastGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessMulticastGroupArnProps <a name="IotwirelessMulticastGroupArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps"></a>

Properties for building a MulticastGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessMulticastGroupArnProps: iotwireless.IotwirelessMulticastGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.multicastGroupId">multicastGroupId</a></code> | <code>string</code> | The MulticastGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `multicastGroupId`<sup>Required</sup> <a name="multicastGroupId" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.multicastGroupId"></a>

```typescript
public readonly multicastGroupId: string;
```

- *Type:* string

The MulticastGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessNetworkAnalyzerConfigurationArnComponents <a name="IotwirelessNetworkAnalyzerConfigurationArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents"></a>

Parsed components of a NetworkAnalyzerConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessNetworkAnalyzerConfigurationArnComponents: iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.networkAnalyzerConfigurationName">networkAnalyzerConfigurationName</a></code> | <code>string</code> | The NetworkAnalyzerConfigurationName component. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkAnalyzerConfigurationName`<sup>Required</sup> <a name="networkAnalyzerConfigurationName" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.networkAnalyzerConfigurationName"></a>

```typescript
public readonly networkAnalyzerConfigurationName: string;
```

- *Type:* string

The NetworkAnalyzerConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotwirelessNetworkAnalyzerConfigurationArnProps <a name="IotwirelessNetworkAnalyzerConfigurationArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps"></a>

Properties for building a NetworkAnalyzerConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessNetworkAnalyzerConfigurationArnProps: iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.networkAnalyzerConfigurationName">networkAnalyzerConfigurationName</a></code> | <code>string</code> | The NetworkAnalyzerConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkAnalyzerConfigurationName`<sup>Required</sup> <a name="networkAnalyzerConfigurationName" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.networkAnalyzerConfigurationName"></a>

```typescript
public readonly networkAnalyzerConfigurationName: string;
```

- *Type:* string

The NetworkAnalyzerConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessServiceProfileArnComponents <a name="IotwirelessServiceProfileArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents"></a>

Parsed components of a ServiceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessServiceProfileArnComponents: iotwireless.IotwirelessServiceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | The ServiceProfileId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnComponents.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

The ServiceProfileId component.

---

### IotwirelessServiceProfileArnProps <a name="IotwirelessServiceProfileArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps"></a>

Properties for building a ServiceProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessServiceProfileArnProps: iotwireless.IotwirelessServiceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | The ServiceProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

The ServiceProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessSidewalkAccountArnComponents <a name="IotwirelessSidewalkAccountArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents"></a>

Parsed components of a SidewalkAccount ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessSidewalkAccountArnComponents: iotwireless.IotwirelessSidewalkAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.sidewalkAccountId">sidewalkAccountId</a></code> | <code>string</code> | The SidewalkAccountId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sidewalkAccountId`<sup>Required</sup> <a name="sidewalkAccountId" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnComponents.property.sidewalkAccountId"></a>

```typescript
public readonly sidewalkAccountId: string;
```

- *Type:* string

The SidewalkAccountId component.

---

### IotwirelessSidewalkAccountArnProps <a name="IotwirelessSidewalkAccountArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps"></a>

Properties for building a SidewalkAccount ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessSidewalkAccountArnProps: iotwireless.IotwirelessSidewalkAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.sidewalkAccountId">sidewalkAccountId</a></code> | <code>string</code> | The SidewalkAccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sidewalkAccountId`<sup>Required</sup> <a name="sidewalkAccountId" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.sidewalkAccountId"></a>

```typescript
public readonly sidewalkAccountId: string;
```

- *Type:* string

The SidewalkAccountId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessThingArnComponents <a name="IotwirelessThingArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents"></a>

Parsed components of a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessThingArnComponents: iotwireless.IotwirelessThingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnComponents.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component.

---

### IotwirelessThingArnProps <a name="IotwirelessThingArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps"></a>

Properties for building a thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessThingArnProps: iotwireless.IotwirelessThingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.thingName">thingName</a></code> | <code>string</code> | The ThingName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The ThingName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessThingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessWirelessDeviceArnComponents <a name="IotwirelessWirelessDeviceArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents"></a>

Parsed components of a WirelessDevice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessDeviceArnComponents: iotwireless.IotwirelessWirelessDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.wirelessDeviceId">wirelessDeviceId</a></code> | <code>string</code> | The WirelessDeviceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `wirelessDeviceId`<sup>Required</sup> <a name="wirelessDeviceId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnComponents.property.wirelessDeviceId"></a>

```typescript
public readonly wirelessDeviceId: string;
```

- *Type:* string

The WirelessDeviceId component.

---

### IotwirelessWirelessDeviceArnProps <a name="IotwirelessWirelessDeviceArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps"></a>

Properties for building a WirelessDevice ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessDeviceArnProps: iotwireless.IotwirelessWirelessDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.wirelessDeviceId">wirelessDeviceId</a></code> | <code>string</code> | The WirelessDeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `wirelessDeviceId`<sup>Required</sup> <a name="wirelessDeviceId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.wirelessDeviceId"></a>

```typescript
public readonly wirelessDeviceId: string;
```

- *Type:* string

The WirelessDeviceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessWirelessGatewayArnComponents <a name="IotwirelessWirelessGatewayArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents"></a>

Parsed components of a WirelessGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessGatewayArnComponents: iotwireless.IotwirelessWirelessGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.wirelessGatewayId">wirelessGatewayId</a></code> | <code>string</code> | The WirelessGatewayId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `wirelessGatewayId`<sup>Required</sup> <a name="wirelessGatewayId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnComponents.property.wirelessGatewayId"></a>

```typescript
public readonly wirelessGatewayId: string;
```

- *Type:* string

The WirelessGatewayId component.

---

### IotwirelessWirelessGatewayArnProps <a name="IotwirelessWirelessGatewayArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps"></a>

Properties for building a WirelessGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessGatewayArnProps: iotwireless.IotwirelessWirelessGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.wirelessGatewayId">wirelessGatewayId</a></code> | <code>string</code> | The WirelessGatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `wirelessGatewayId`<sup>Required</sup> <a name="wirelessGatewayId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.wirelessGatewayId"></a>

```typescript
public readonly wirelessGatewayId: string;
```

- *Type:* string

The WirelessGatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotwirelessWirelessGatewayTaskDefinitionArnComponents <a name="IotwirelessWirelessGatewayTaskDefinitionArnComponents" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents"></a>

Parsed components of a WirelessGatewayTaskDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessGatewayTaskDefinitionArnComponents: iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.wirelessGatewayTaskDefinitionId">wirelessGatewayTaskDefinitionId</a></code> | <code>string</code> | The WirelessGatewayTaskDefinitionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `wirelessGatewayTaskDefinitionId`<sup>Required</sup> <a name="wirelessGatewayTaskDefinitionId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnComponents.property.wirelessGatewayTaskDefinitionId"></a>

```typescript
public readonly wirelessGatewayTaskDefinitionId: string;
```

- *Type:* string

The WirelessGatewayTaskDefinitionId component.

---

### IotwirelessWirelessGatewayTaskDefinitionArnProps <a name="IotwirelessWirelessGatewayTaskDefinitionArnProps" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps"></a>

Properties for building a WirelessGatewayTaskDefinition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

const iotwirelessWirelessGatewayTaskDefinitionArnProps: iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.wirelessGatewayTaskDefinitionId">wirelessGatewayTaskDefinitionId</a></code> | <code>string</code> | The WirelessGatewayTaskDefinitionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `wirelessGatewayTaskDefinitionId`<sup>Required</sup> <a name="wirelessGatewayTaskDefinitionId" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.wirelessGatewayTaskDefinitionId"></a>

```typescript
public readonly wirelessGatewayTaskDefinitionId: string;
```

- *Type:* string

The WirelessGatewayTaskDefinitionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessActions <a name="IotwirelessActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions"></a>

IAM action constants for the iotwireless service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotwireless.IotwirelessActions.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

new iotwireless.IotwirelessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetDestination">actionGetDestination</a></code> | <code>string</code> | [Read] iotwireless:GetDestination. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetDeviceProfile">actionGetDeviceProfile</a></code> | <code>string</code> | [Read] iotwireless:GetDeviceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetEventConfigurationByResourceTypes">actionGetEventConfigurationByResourceTypes</a></code> | <code>string</code> | [Read] iotwireless:GetEventConfigurationByResourceTypes. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetFuotaTask">actionGetFuotaTask</a></code> | <code>string</code> | [Read] iotwireless:GetFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetLogLevelsByResourceTypes">actionGetLogLevelsByResourceTypes</a></code> | <code>string</code> | [Read] iotwireless:GetLogLevelsByResourceTypes. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMetricConfiguration">actionGetMetricConfiguration</a></code> | <code>string</code> | [Read] iotwireless:GetMetricConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMetrics">actionGetMetrics</a></code> | <code>string</code> | [Read] iotwireless:GetMetrics. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMulticastGroup">actionGetMulticastGroup</a></code> | <code>string</code> | [Read] iotwireless:GetMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMulticastGroupSession">actionGetMulticastGroupSession</a></code> | <code>string</code> | [Read] iotwireless:GetMulticastGroupSession. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetNetworkAnalyzerConfiguration">actionGetNetworkAnalyzerConfiguration</a></code> | <code>string</code> | [Read] iotwireless:GetNetworkAnalyzerConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPartnerAccount">actionGetPartnerAccount</a></code> | <code>string</code> | [Read] iotwireless:GetPartnerAccount. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPosition">actionGetPosition</a></code> | <code>string</code> | [Read] iotwireless:GetPosition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPositionConfiguration">actionGetPositionConfiguration</a></code> | <code>string</code> | [Read] iotwireless:GetPositionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPositionEstimate">actionGetPositionEstimate</a></code> | <code>string</code> | [Read] iotwireless:GetPositionEstimate. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourceEventConfiguration">actionGetResourceEventConfiguration</a></code> | <code>string</code> | [Read] iotwireless:GetResourceEventConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourceLogLevel">actionGetResourceLogLevel</a></code> | <code>string</code> | [Read] iotwireless:GetResourceLogLevel. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourcePosition">actionGetResourcePosition</a></code> | <code>string</code> | [Read] iotwireless:GetResourcePosition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetServiceEndpoint">actionGetServiceEndpoint</a></code> | <code>string</code> | [Read] iotwireless:GetServiceEndpoint. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetServiceProfile">actionGetServiceProfile</a></code> | <code>string</code> | [Read] iotwireless:GetServiceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDevice">actionGetWirelessDevice</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDeviceImportTask">actionGetWirelessDeviceImportTask</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDeviceStatistics">actionGetWirelessDeviceStatistics</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessDeviceStatistics. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGateway">actionGetWirelessGateway</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGateway. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayCertificate">actionGetWirelessGatewayCertificate</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGatewayCertificate. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayFirmwareInformation">actionGetWirelessGatewayFirmwareInformation</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGatewayFirmwareInformation. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayStatistics">actionGetWirelessGatewayStatistics</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGatewayStatistics. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayTask">actionGetWirelessGatewayTask</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGatewayTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayTaskDefinition">actionGetWirelessGatewayTaskDefinition</a></code> | <code>string</code> | [Read] iotwireless:GetWirelessGatewayTaskDefinition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateAwsAccountWithPartnerAccount">AssociateAwsAccountWithPartnerAccount</a></code> | <code>string</code> | [Write] iotwireless:AssociateAwsAccountWithPartnerAccount. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateMulticastGroupWithFuotaTask">AssociateMulticastGroupWithFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:AssociateMulticastGroupWithFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithFuotaTask">AssociateWirelessDeviceWithFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:AssociateWirelessDeviceWithFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithMulticastGroup">AssociateWirelessDeviceWithMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:AssociateWirelessDeviceWithMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithThing">AssociateWirelessDeviceWithThing</a></code> | <code>string</code> | [Write] iotwireless:AssociateWirelessDeviceWithThing. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessGatewayWithCertificate">AssociateWirelessGatewayWithCertificate</a></code> | <code>string</code> | [Write] iotwireless:AssociateWirelessGatewayWithCertificate. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessGatewayWithThing">AssociateWirelessGatewayWithThing</a></code> | <code>string</code> | [Write] iotwireless:AssociateWirelessGatewayWithThing. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CancelMulticastGroupSession">CancelMulticastGroupSession</a></code> | <code>string</code> | [Write] iotwireless:CancelMulticastGroupSession. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateDestination">CreateDestination</a></code> | <code>string</code> | [Write] iotwireless:CreateDestination. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateDeviceProfile">CreateDeviceProfile</a></code> | <code>string</code> | [Write] iotwireless:CreateDeviceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateFuotaTask">CreateFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:CreateFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateMulticastGroup">CreateMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:CreateMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateNetworkAnalyzerConfiguration">CreateNetworkAnalyzerConfiguration</a></code> | <code>string</code> | [Write] iotwireless:CreateNetworkAnalyzerConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateServiceProfile">CreateServiceProfile</a></code> | <code>string</code> | [Write] iotwireless:CreateServiceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessDevice">CreateWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:CreateWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGateway">CreateWirelessGateway</a></code> | <code>string</code> | [Write] iotwireless:CreateWirelessGateway. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGatewayTask">CreateWirelessGatewayTask</a></code> | <code>string</code> | [Write] iotwireless:CreateWirelessGatewayTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGatewayTaskDefinition">CreateWirelessGatewayTaskDefinition</a></code> | <code>string</code> | [Write] iotwireless:CreateWirelessGatewayTaskDefinition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteDestination">DeleteDestination</a></code> | <code>string</code> | [Write] iotwireless:DeleteDestination. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteDeviceProfile">DeleteDeviceProfile</a></code> | <code>string</code> | [Write] iotwireless:DeleteDeviceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteFuotaTask">DeleteFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:DeleteFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteMulticastGroup">DeleteMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:DeleteMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteNetworkAnalyzerConfiguration">DeleteNetworkAnalyzerConfiguration</a></code> | <code>string</code> | [Write] iotwireless:DeleteNetworkAnalyzerConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteQueuedMessages">DeleteQueuedMessages</a></code> | <code>string</code> | [Write] iotwireless:DeleteQueuedMessages. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteServiceProfile">DeleteServiceProfile</a></code> | <code>string</code> | [Write] iotwireless:DeleteServiceProfile. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessDevice">DeleteWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:DeleteWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessDeviceImportTask">DeleteWirelessDeviceImportTask</a></code> | <code>string</code> | [Write] iotwireless:DeleteWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGateway">DeleteWirelessGateway</a></code> | <code>string</code> | [Write] iotwireless:DeleteWirelessGateway. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGatewayTask">DeleteWirelessGatewayTask</a></code> | <code>string</code> | [Write] iotwireless:DeleteWirelessGatewayTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGatewayTaskDefinition">DeleteWirelessGatewayTaskDefinition</a></code> | <code>string</code> | [Write] iotwireless:DeleteWirelessGatewayTaskDefinition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeregisterWirelessDevice">DeregisterWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:DeregisterWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateAwsAccountFromPartnerAccount">DisassociateAwsAccountFromPartnerAccount</a></code> | <code>string</code> | [Write] iotwireless:DisassociateAwsAccountFromPartnerAccount. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateMulticastGroupFromFuotaTask">DisassociateMulticastGroupFromFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:DisassociateMulticastGroupFromFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromFuotaTask">DisassociateWirelessDeviceFromFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:DisassociateWirelessDeviceFromFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromMulticastGroup">DisassociateWirelessDeviceFromMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:DisassociateWirelessDeviceFromMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromThing">DisassociateWirelessDeviceFromThing</a></code> | <code>string</code> | [Write] iotwireless:DisassociateWirelessDeviceFromThing. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessGatewayFromCertificate">DisassociateWirelessGatewayFromCertificate</a></code> | <code>string</code> | [Write] iotwireless:DisassociateWirelessGatewayFromCertificate. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessGatewayFromThing">DisassociateWirelessGatewayFromThing</a></code> | <code>string</code> | [Write] iotwireless:DisassociateWirelessGatewayFromThing. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDestinations">ListDestinations</a></code> | <code>string</code> | [Read] iotwireless:ListDestinations. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDeviceProfiles">ListDeviceProfiles</a></code> | <code>string</code> | [Read] iotwireless:ListDeviceProfiles. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDevicesForWirelessDeviceImportTask">ListDevicesForWirelessDeviceImportTask</a></code> | <code>string</code> | [Read] iotwireless:ListDevicesForWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListEventConfigurations">ListEventConfigurations</a></code> | <code>string</code> | [Read] iotwireless:ListEventConfigurations. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListFuotaTasks">ListFuotaTasks</a></code> | <code>string</code> | [Read] iotwireless:ListFuotaTasks. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListMulticastGroups">ListMulticastGroups</a></code> | <code>string</code> | [Read] iotwireless:ListMulticastGroups. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListMulticastGroupsByFuotaTask">ListMulticastGroupsByFuotaTask</a></code> | <code>string</code> | [Read] iotwireless:ListMulticastGroupsByFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListNetworkAnalyzerConfigurations">ListNetworkAnalyzerConfigurations</a></code> | <code>string</code> | [Read] iotwireless:ListNetworkAnalyzerConfigurations. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListPartnerAccounts">ListPartnerAccounts</a></code> | <code>string</code> | [Read] iotwireless:ListPartnerAccounts. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListPositionConfigurations">ListPositionConfigurations</a></code> | <code>string</code> | [Read] iotwireless:ListPositionConfigurations. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListQueuedMessages">ListQueuedMessages</a></code> | <code>string</code> | [Read] iotwireless:ListQueuedMessages. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListServiceProfiles">ListServiceProfiles</a></code> | <code>string</code> | [Read] iotwireless:ListServiceProfiles. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotwireless:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessDeviceImportTasks">ListWirelessDeviceImportTasks</a></code> | <code>string</code> | [Read] iotwireless:ListWirelessDeviceImportTasks. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessDevices">ListWirelessDevices</a></code> | <code>string</code> | [Read] iotwireless:ListWirelessDevices. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessGateways">ListWirelessGateways</a></code> | <code>string</code> | [Read] iotwireless:ListWirelessGateways. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessGatewayTaskDefinitions">ListWirelessGatewayTaskDefinitions</a></code> | <code>string</code> | [Read] iotwireless:ListWirelessGatewayTaskDefinitions. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.PutPositionConfiguration">PutPositionConfiguration</a></code> | <code>string</code> | [Write] iotwireless:PutPositionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.PutResourceLogLevel">PutResourceLogLevel</a></code> | <code>string</code> | [Write] iotwireless:PutResourceLogLevel. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ResetAllResourceLogLevels">ResetAllResourceLogLevels</a></code> | <code>string</code> | [Write] iotwireless:ResetAllResourceLogLevels. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.ResetResourceLogLevel">ResetResourceLogLevel</a></code> | <code>string</code> | [Write] iotwireless:ResetResourceLogLevel. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.SendDataToMulticastGroup">SendDataToMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:SendDataToMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.SendDataToWirelessDevice">SendDataToWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:SendDataToWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartBulkAssociateWirelessDeviceWithMulticastGroup">StartBulkAssociateWirelessDeviceWithMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:StartBulkAssociateWirelessDeviceWithMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartBulkDisassociateWirelessDeviceFromMulticastGroup">StartBulkDisassociateWirelessDeviceFromMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:StartBulkDisassociateWirelessDeviceFromMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartFuotaTask">StartFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:StartFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartMulticastGroupSession">StartMulticastGroupSession</a></code> | <code>string</code> | [Write] iotwireless:StartMulticastGroupSession. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartNetworkAnalyzerStream">StartNetworkAnalyzerStream</a></code> | <code>string</code> | [Write] iotwireless:StartNetworkAnalyzerStream. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartSingleWirelessDeviceImportTask">StartSingleWirelessDeviceImportTask</a></code> | <code>string</code> | [Write] iotwireless:StartSingleWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartWirelessDeviceImportTask">StartWirelessDeviceImportTask</a></code> | <code>string</code> | [Write] iotwireless:StartWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotwireless:TagResource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.TestWirelessDevice">TestWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:TestWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotwireless:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateDestination">UpdateDestination</a></code> | <code>string</code> | [Write] iotwireless:UpdateDestination. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateEventConfigurationByResourceTypes">UpdateEventConfigurationByResourceTypes</a></code> | <code>string</code> | [Write] iotwireless:UpdateEventConfigurationByResourceTypes. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateFuotaTask">UpdateFuotaTask</a></code> | <code>string</code> | [Write] iotwireless:UpdateFuotaTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateLogLevelsByResourceTypes">UpdateLogLevelsByResourceTypes</a></code> | <code>string</code> | [Write] iotwireless:UpdateLogLevelsByResourceTypes. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateMetricConfiguration">UpdateMetricConfiguration</a></code> | <code>string</code> | [Write] iotwireless:UpdateMetricConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateMulticastGroup">UpdateMulticastGroup</a></code> | <code>string</code> | [Write] iotwireless:UpdateMulticastGroup. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateNetworkAnalyzerConfiguration">UpdateNetworkAnalyzerConfiguration</a></code> | <code>string</code> | [Write] iotwireless:UpdateNetworkAnalyzerConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdatePartnerAccount">UpdatePartnerAccount</a></code> | <code>string</code> | [Write] iotwireless:UpdatePartnerAccount. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdatePosition">UpdatePosition</a></code> | <code>string</code> | [Write] iotwireless:UpdatePosition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateResourceEventConfiguration">UpdateResourceEventConfiguration</a></code> | <code>string</code> | [Write] iotwireless:UpdateResourceEventConfiguration. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateResourcePosition">UpdateResourcePosition</a></code> | <code>string</code> | [Write] iotwireless:UpdateResourcePosition. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessDevice">UpdateWirelessDevice</a></code> | <code>string</code> | [Write] iotwireless:UpdateWirelessDevice. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessDeviceImportTask">UpdateWirelessDeviceImportTask</a></code> | <code>string</code> | [Write] iotwireless:UpdateWirelessDeviceImportTask. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessGateway">UpdateWirelessGateway</a></code> | <code>string</code> | [Write] iotwireless:UpdateWirelessGateway. |

---

##### `actionGetDestination`<sup>Required</sup> <a name="actionGetDestination" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetDestination"></a>

```typescript
public readonly actionGetDestination: string;
```

- *Type:* string

[Read] iotwireless:GetDestination.

---

##### `actionGetDeviceProfile`<sup>Required</sup> <a name="actionGetDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetDeviceProfile"></a>

```typescript
public readonly actionGetDeviceProfile: string;
```

- *Type:* string

[Read] iotwireless:GetDeviceProfile.

---

##### `actionGetEventConfigurationByResourceTypes`<sup>Required</sup> <a name="actionGetEventConfigurationByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetEventConfigurationByResourceTypes"></a>

```typescript
public readonly actionGetEventConfigurationByResourceTypes: string;
```

- *Type:* string

[Read] iotwireless:GetEventConfigurationByResourceTypes.

---

##### `actionGetFuotaTask`<sup>Required</sup> <a name="actionGetFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetFuotaTask"></a>

```typescript
public readonly actionGetFuotaTask: string;
```

- *Type:* string

[Read] iotwireless:GetFuotaTask.

---

##### `actionGetLogLevelsByResourceTypes`<sup>Required</sup> <a name="actionGetLogLevelsByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetLogLevelsByResourceTypes"></a>

```typescript
public readonly actionGetLogLevelsByResourceTypes: string;
```

- *Type:* string

[Read] iotwireless:GetLogLevelsByResourceTypes.

---

##### `actionGetMetricConfiguration`<sup>Required</sup> <a name="actionGetMetricConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMetricConfiguration"></a>

```typescript
public readonly actionGetMetricConfiguration: string;
```

- *Type:* string

[Read] iotwireless:GetMetricConfiguration.

---

##### `actionGetMetrics`<sup>Required</sup> <a name="actionGetMetrics" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMetrics"></a>

```typescript
public readonly actionGetMetrics: string;
```

- *Type:* string

[Read] iotwireless:GetMetrics.

---

##### `actionGetMulticastGroup`<sup>Required</sup> <a name="actionGetMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMulticastGroup"></a>

```typescript
public readonly actionGetMulticastGroup: string;
```

- *Type:* string

[Read] iotwireless:GetMulticastGroup.

---

##### `actionGetMulticastGroupSession`<sup>Required</sup> <a name="actionGetMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetMulticastGroupSession"></a>

```typescript
public readonly actionGetMulticastGroupSession: string;
```

- *Type:* string

[Read] iotwireless:GetMulticastGroupSession.

---

##### `actionGetNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="actionGetNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetNetworkAnalyzerConfiguration"></a>

```typescript
public readonly actionGetNetworkAnalyzerConfiguration: string;
```

- *Type:* string

[Read] iotwireless:GetNetworkAnalyzerConfiguration.

---

##### `actionGetPartnerAccount`<sup>Required</sup> <a name="actionGetPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPartnerAccount"></a>

```typescript
public readonly actionGetPartnerAccount: string;
```

- *Type:* string

[Read] iotwireless:GetPartnerAccount.

---

##### `actionGetPosition`<sup>Required</sup> <a name="actionGetPosition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPosition"></a>

```typescript
public readonly actionGetPosition: string;
```

- *Type:* string

[Read] iotwireless:GetPosition.

---

##### `actionGetPositionConfiguration`<sup>Required</sup> <a name="actionGetPositionConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPositionConfiguration"></a>

```typescript
public readonly actionGetPositionConfiguration: string;
```

- *Type:* string

[Read] iotwireless:GetPositionConfiguration.

---

##### `actionGetPositionEstimate`<sup>Required</sup> <a name="actionGetPositionEstimate" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetPositionEstimate"></a>

```typescript
public readonly actionGetPositionEstimate: string;
```

- *Type:* string

[Read] iotwireless:GetPositionEstimate.

---

##### `actionGetResourceEventConfiguration`<sup>Required</sup> <a name="actionGetResourceEventConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourceEventConfiguration"></a>

```typescript
public readonly actionGetResourceEventConfiguration: string;
```

- *Type:* string

[Read] iotwireless:GetResourceEventConfiguration.

---

##### `actionGetResourceLogLevel`<sup>Required</sup> <a name="actionGetResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourceLogLevel"></a>

```typescript
public readonly actionGetResourceLogLevel: string;
```

- *Type:* string

[Read] iotwireless:GetResourceLogLevel.

---

##### `actionGetResourcePosition`<sup>Required</sup> <a name="actionGetResourcePosition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetResourcePosition"></a>

```typescript
public readonly actionGetResourcePosition: string;
```

- *Type:* string

[Read] iotwireless:GetResourcePosition.

---

##### `actionGetServiceEndpoint`<sup>Required</sup> <a name="actionGetServiceEndpoint" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetServiceEndpoint"></a>

```typescript
public readonly actionGetServiceEndpoint: string;
```

- *Type:* string

[Read] iotwireless:GetServiceEndpoint.

---

##### `actionGetServiceProfile`<sup>Required</sup> <a name="actionGetServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetServiceProfile"></a>

```typescript
public readonly actionGetServiceProfile: string;
```

- *Type:* string

[Read] iotwireless:GetServiceProfile.

---

##### `actionGetWirelessDevice`<sup>Required</sup> <a name="actionGetWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDevice"></a>

```typescript
public readonly actionGetWirelessDevice: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessDevice.

---

##### `actionGetWirelessDeviceImportTask`<sup>Required</sup> <a name="actionGetWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDeviceImportTask"></a>

```typescript
public readonly actionGetWirelessDeviceImportTask: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessDeviceImportTask.

---

##### `actionGetWirelessDeviceStatistics`<sup>Required</sup> <a name="actionGetWirelessDeviceStatistics" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessDeviceStatistics"></a>

```typescript
public readonly actionGetWirelessDeviceStatistics: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessDeviceStatistics.

---

##### `actionGetWirelessGateway`<sup>Required</sup> <a name="actionGetWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGateway"></a>

```typescript
public readonly actionGetWirelessGateway: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGateway.

---

##### `actionGetWirelessGatewayCertificate`<sup>Required</sup> <a name="actionGetWirelessGatewayCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayCertificate"></a>

```typescript
public readonly actionGetWirelessGatewayCertificate: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGatewayCertificate.

---

##### `actionGetWirelessGatewayFirmwareInformation`<sup>Required</sup> <a name="actionGetWirelessGatewayFirmwareInformation" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayFirmwareInformation"></a>

```typescript
public readonly actionGetWirelessGatewayFirmwareInformation: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGatewayFirmwareInformation.

---

##### `actionGetWirelessGatewayStatistics`<sup>Required</sup> <a name="actionGetWirelessGatewayStatistics" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayStatistics"></a>

```typescript
public readonly actionGetWirelessGatewayStatistics: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGatewayStatistics.

---

##### `actionGetWirelessGatewayTask`<sup>Required</sup> <a name="actionGetWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayTask"></a>

```typescript
public readonly actionGetWirelessGatewayTask: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGatewayTask.

---

##### `actionGetWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="actionGetWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.actionGetWirelessGatewayTaskDefinition"></a>

```typescript
public readonly actionGetWirelessGatewayTaskDefinition: string;
```

- *Type:* string

[Read] iotwireless:GetWirelessGatewayTaskDefinition.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAwsAccountWithPartnerAccount`<sup>Required</sup> <a name="AssociateAwsAccountWithPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateAwsAccountWithPartnerAccount"></a>

```typescript
public readonly AssociateAwsAccountWithPartnerAccount: string;
```

- *Type:* string

[Write] iotwireless:AssociateAwsAccountWithPartnerAccount.

---

##### `AssociateMulticastGroupWithFuotaTask`<sup>Required</sup> <a name="AssociateMulticastGroupWithFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateMulticastGroupWithFuotaTask"></a>

```typescript
public readonly AssociateMulticastGroupWithFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:AssociateMulticastGroupWithFuotaTask.

---

##### `AssociateWirelessDeviceWithFuotaTask`<sup>Required</sup> <a name="AssociateWirelessDeviceWithFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithFuotaTask"></a>

```typescript
public readonly AssociateWirelessDeviceWithFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:AssociateWirelessDeviceWithFuotaTask.

---

##### `AssociateWirelessDeviceWithMulticastGroup`<sup>Required</sup> <a name="AssociateWirelessDeviceWithMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithMulticastGroup"></a>

```typescript
public readonly AssociateWirelessDeviceWithMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:AssociateWirelessDeviceWithMulticastGroup.

---

##### `AssociateWirelessDeviceWithThing`<sup>Required</sup> <a name="AssociateWirelessDeviceWithThing" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessDeviceWithThing"></a>

```typescript
public readonly AssociateWirelessDeviceWithThing: string;
```

- *Type:* string

[Write] iotwireless:AssociateWirelessDeviceWithThing.

---

##### `AssociateWirelessGatewayWithCertificate`<sup>Required</sup> <a name="AssociateWirelessGatewayWithCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessGatewayWithCertificate"></a>

```typescript
public readonly AssociateWirelessGatewayWithCertificate: string;
```

- *Type:* string

[Write] iotwireless:AssociateWirelessGatewayWithCertificate.

---

##### `AssociateWirelessGatewayWithThing`<sup>Required</sup> <a name="AssociateWirelessGatewayWithThing" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.AssociateWirelessGatewayWithThing"></a>

```typescript
public readonly AssociateWirelessGatewayWithThing: string;
```

- *Type:* string

[Write] iotwireless:AssociateWirelessGatewayWithThing.

---

##### `CancelMulticastGroupSession`<sup>Required</sup> <a name="CancelMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CancelMulticastGroupSession"></a>

```typescript
public readonly CancelMulticastGroupSession: string;
```

- *Type:* string

[Write] iotwireless:CancelMulticastGroupSession.

---

##### `CreateDestination`<sup>Required</sup> <a name="CreateDestination" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateDestination"></a>

```typescript
public readonly CreateDestination: string;
```

- *Type:* string

[Write] iotwireless:CreateDestination.

---

##### `CreateDeviceProfile`<sup>Required</sup> <a name="CreateDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateDeviceProfile"></a>

```typescript
public readonly CreateDeviceProfile: string;
```

- *Type:* string

[Write] iotwireless:CreateDeviceProfile.

---

##### `CreateFuotaTask`<sup>Required</sup> <a name="CreateFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateFuotaTask"></a>

```typescript
public readonly CreateFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:CreateFuotaTask.

---

##### `CreateMulticastGroup`<sup>Required</sup> <a name="CreateMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateMulticastGroup"></a>

```typescript
public readonly CreateMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:CreateMulticastGroup.

---

##### `CreateNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="CreateNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateNetworkAnalyzerConfiguration"></a>

```typescript
public readonly CreateNetworkAnalyzerConfiguration: string;
```

- *Type:* string

[Write] iotwireless:CreateNetworkAnalyzerConfiguration.

---

##### `CreateServiceProfile`<sup>Required</sup> <a name="CreateServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateServiceProfile"></a>

```typescript
public readonly CreateServiceProfile: string;
```

- *Type:* string

[Write] iotwireless:CreateServiceProfile.

---

##### `CreateWirelessDevice`<sup>Required</sup> <a name="CreateWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessDevice"></a>

```typescript
public readonly CreateWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:CreateWirelessDevice.

---

##### `CreateWirelessGateway`<sup>Required</sup> <a name="CreateWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGateway"></a>

```typescript
public readonly CreateWirelessGateway: string;
```

- *Type:* string

[Write] iotwireless:CreateWirelessGateway.

---

##### `CreateWirelessGatewayTask`<sup>Required</sup> <a name="CreateWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGatewayTask"></a>

```typescript
public readonly CreateWirelessGatewayTask: string;
```

- *Type:* string

[Write] iotwireless:CreateWirelessGatewayTask.

---

##### `CreateWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="CreateWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.CreateWirelessGatewayTaskDefinition"></a>

```typescript
public readonly CreateWirelessGatewayTaskDefinition: string;
```

- *Type:* string

[Write] iotwireless:CreateWirelessGatewayTaskDefinition.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string;
```

- *Type:* string

[Write] iotwireless:DeleteDestination.

---

##### `DeleteDeviceProfile`<sup>Required</sup> <a name="DeleteDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteDeviceProfile"></a>

```typescript
public readonly DeleteDeviceProfile: string;
```

- *Type:* string

[Write] iotwireless:DeleteDeviceProfile.

---

##### `DeleteFuotaTask`<sup>Required</sup> <a name="DeleteFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteFuotaTask"></a>

```typescript
public readonly DeleteFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:DeleteFuotaTask.

---

##### `DeleteMulticastGroup`<sup>Required</sup> <a name="DeleteMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteMulticastGroup"></a>

```typescript
public readonly DeleteMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:DeleteMulticastGroup.

---

##### `DeleteNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="DeleteNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteNetworkAnalyzerConfiguration"></a>

```typescript
public readonly DeleteNetworkAnalyzerConfiguration: string;
```

- *Type:* string

[Write] iotwireless:DeleteNetworkAnalyzerConfiguration.

---

##### `DeleteQueuedMessages`<sup>Required</sup> <a name="DeleteQueuedMessages" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteQueuedMessages"></a>

```typescript
public readonly DeleteQueuedMessages: string;
```

- *Type:* string

[Write] iotwireless:DeleteQueuedMessages.

---

##### `DeleteServiceProfile`<sup>Required</sup> <a name="DeleteServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteServiceProfile"></a>

```typescript
public readonly DeleteServiceProfile: string;
```

- *Type:* string

[Write] iotwireless:DeleteServiceProfile.

---

##### `DeleteWirelessDevice`<sup>Required</sup> <a name="DeleteWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessDevice"></a>

```typescript
public readonly DeleteWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:DeleteWirelessDevice.

---

##### `DeleteWirelessDeviceImportTask`<sup>Required</sup> <a name="DeleteWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessDeviceImportTask"></a>

```typescript
public readonly DeleteWirelessDeviceImportTask: string;
```

- *Type:* string

[Write] iotwireless:DeleteWirelessDeviceImportTask.

---

##### `DeleteWirelessGateway`<sup>Required</sup> <a name="DeleteWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGateway"></a>

```typescript
public readonly DeleteWirelessGateway: string;
```

- *Type:* string

[Write] iotwireless:DeleteWirelessGateway.

---

##### `DeleteWirelessGatewayTask`<sup>Required</sup> <a name="DeleteWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGatewayTask"></a>

```typescript
public readonly DeleteWirelessGatewayTask: string;
```

- *Type:* string

[Write] iotwireless:DeleteWirelessGatewayTask.

---

##### `DeleteWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="DeleteWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeleteWirelessGatewayTaskDefinition"></a>

```typescript
public readonly DeleteWirelessGatewayTaskDefinition: string;
```

- *Type:* string

[Write] iotwireless:DeleteWirelessGatewayTaskDefinition.

---

##### `DeregisterWirelessDevice`<sup>Required</sup> <a name="DeregisterWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DeregisterWirelessDevice"></a>

```typescript
public readonly DeregisterWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:DeregisterWirelessDevice.

---

##### `DisassociateAwsAccountFromPartnerAccount`<sup>Required</sup> <a name="DisassociateAwsAccountFromPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateAwsAccountFromPartnerAccount"></a>

```typescript
public readonly DisassociateAwsAccountFromPartnerAccount: string;
```

- *Type:* string

[Write] iotwireless:DisassociateAwsAccountFromPartnerAccount.

---

##### `DisassociateMulticastGroupFromFuotaTask`<sup>Required</sup> <a name="DisassociateMulticastGroupFromFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateMulticastGroupFromFuotaTask"></a>

```typescript
public readonly DisassociateMulticastGroupFromFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:DisassociateMulticastGroupFromFuotaTask.

---

##### `DisassociateWirelessDeviceFromFuotaTask`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromFuotaTask"></a>

```typescript
public readonly DisassociateWirelessDeviceFromFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:DisassociateWirelessDeviceFromFuotaTask.

---

##### `DisassociateWirelessDeviceFromMulticastGroup`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromMulticastGroup"></a>

```typescript
public readonly DisassociateWirelessDeviceFromMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:DisassociateWirelessDeviceFromMulticastGroup.

---

##### `DisassociateWirelessDeviceFromThing`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromThing" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessDeviceFromThing"></a>

```typescript
public readonly DisassociateWirelessDeviceFromThing: string;
```

- *Type:* string

[Write] iotwireless:DisassociateWirelessDeviceFromThing.

---

##### `DisassociateWirelessGatewayFromCertificate`<sup>Required</sup> <a name="DisassociateWirelessGatewayFromCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessGatewayFromCertificate"></a>

```typescript
public readonly DisassociateWirelessGatewayFromCertificate: string;
```

- *Type:* string

[Write] iotwireless:DisassociateWirelessGatewayFromCertificate.

---

##### `DisassociateWirelessGatewayFromThing`<sup>Required</sup> <a name="DisassociateWirelessGatewayFromThing" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.DisassociateWirelessGatewayFromThing"></a>

```typescript
public readonly DisassociateWirelessGatewayFromThing: string;
```

- *Type:* string

[Write] iotwireless:DisassociateWirelessGatewayFromThing.

---

##### `ListDestinations`<sup>Required</sup> <a name="ListDestinations" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDestinations"></a>

```typescript
public readonly ListDestinations: string;
```

- *Type:* string

[Read] iotwireless:ListDestinations.

---

##### `ListDeviceProfiles`<sup>Required</sup> <a name="ListDeviceProfiles" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDeviceProfiles"></a>

```typescript
public readonly ListDeviceProfiles: string;
```

- *Type:* string

[Read] iotwireless:ListDeviceProfiles.

---

##### `ListDevicesForWirelessDeviceImportTask`<sup>Required</sup> <a name="ListDevicesForWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListDevicesForWirelessDeviceImportTask"></a>

```typescript
public readonly ListDevicesForWirelessDeviceImportTask: string;
```

- *Type:* string

[Read] iotwireless:ListDevicesForWirelessDeviceImportTask.

---

##### `ListEventConfigurations`<sup>Required</sup> <a name="ListEventConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListEventConfigurations"></a>

```typescript
public readonly ListEventConfigurations: string;
```

- *Type:* string

[Read] iotwireless:ListEventConfigurations.

---

##### `ListFuotaTasks`<sup>Required</sup> <a name="ListFuotaTasks" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListFuotaTasks"></a>

```typescript
public readonly ListFuotaTasks: string;
```

- *Type:* string

[Read] iotwireless:ListFuotaTasks.

---

##### `ListMulticastGroups`<sup>Required</sup> <a name="ListMulticastGroups" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListMulticastGroups"></a>

```typescript
public readonly ListMulticastGroups: string;
```

- *Type:* string

[Read] iotwireless:ListMulticastGroups.

---

##### `ListMulticastGroupsByFuotaTask`<sup>Required</sup> <a name="ListMulticastGroupsByFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListMulticastGroupsByFuotaTask"></a>

```typescript
public readonly ListMulticastGroupsByFuotaTask: string;
```

- *Type:* string

[Read] iotwireless:ListMulticastGroupsByFuotaTask.

---

##### `ListNetworkAnalyzerConfigurations`<sup>Required</sup> <a name="ListNetworkAnalyzerConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListNetworkAnalyzerConfigurations"></a>

```typescript
public readonly ListNetworkAnalyzerConfigurations: string;
```

- *Type:* string

[Read] iotwireless:ListNetworkAnalyzerConfigurations.

---

##### `ListPartnerAccounts`<sup>Required</sup> <a name="ListPartnerAccounts" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListPartnerAccounts"></a>

```typescript
public readonly ListPartnerAccounts: string;
```

- *Type:* string

[Read] iotwireless:ListPartnerAccounts.

---

##### `ListPositionConfigurations`<sup>Required</sup> <a name="ListPositionConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListPositionConfigurations"></a>

```typescript
public readonly ListPositionConfigurations: string;
```

- *Type:* string

[Read] iotwireless:ListPositionConfigurations.

---

##### `ListQueuedMessages`<sup>Required</sup> <a name="ListQueuedMessages" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListQueuedMessages"></a>

```typescript
public readonly ListQueuedMessages: string;
```

- *Type:* string

[Read] iotwireless:ListQueuedMessages.

---

##### `ListServiceProfiles`<sup>Required</sup> <a name="ListServiceProfiles" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListServiceProfiles"></a>

```typescript
public readonly ListServiceProfiles: string;
```

- *Type:* string

[Read] iotwireless:ListServiceProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotwireless:ListTagsForResource.

---

##### `ListWirelessDeviceImportTasks`<sup>Required</sup> <a name="ListWirelessDeviceImportTasks" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessDeviceImportTasks"></a>

```typescript
public readonly ListWirelessDeviceImportTasks: string;
```

- *Type:* string

[Read] iotwireless:ListWirelessDeviceImportTasks.

---

##### `ListWirelessDevices`<sup>Required</sup> <a name="ListWirelessDevices" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessDevices"></a>

```typescript
public readonly ListWirelessDevices: string;
```

- *Type:* string

[Read] iotwireless:ListWirelessDevices.

---

##### `ListWirelessGateways`<sup>Required</sup> <a name="ListWirelessGateways" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessGateways"></a>

```typescript
public readonly ListWirelessGateways: string;
```

- *Type:* string

[Read] iotwireless:ListWirelessGateways.

---

##### `ListWirelessGatewayTaskDefinitions`<sup>Required</sup> <a name="ListWirelessGatewayTaskDefinitions" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ListWirelessGatewayTaskDefinitions"></a>

```typescript
public readonly ListWirelessGatewayTaskDefinitions: string;
```

- *Type:* string

[Read] iotwireless:ListWirelessGatewayTaskDefinitions.

---

##### `PutPositionConfiguration`<sup>Required</sup> <a name="PutPositionConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.PutPositionConfiguration"></a>

```typescript
public readonly PutPositionConfiguration: string;
```

- *Type:* string

[Write] iotwireless:PutPositionConfiguration.

---

##### `PutResourceLogLevel`<sup>Required</sup> <a name="PutResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.PutResourceLogLevel"></a>

```typescript
public readonly PutResourceLogLevel: string;
```

- *Type:* string

[Write] iotwireless:PutResourceLogLevel.

---

##### `ResetAllResourceLogLevels`<sup>Required</sup> <a name="ResetAllResourceLogLevels" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ResetAllResourceLogLevels"></a>

```typescript
public readonly ResetAllResourceLogLevels: string;
```

- *Type:* string

[Write] iotwireless:ResetAllResourceLogLevels.

---

##### `ResetResourceLogLevel`<sup>Required</sup> <a name="ResetResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.ResetResourceLogLevel"></a>

```typescript
public readonly ResetResourceLogLevel: string;
```

- *Type:* string

[Write] iotwireless:ResetResourceLogLevel.

---

##### `SendDataToMulticastGroup`<sup>Required</sup> <a name="SendDataToMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.SendDataToMulticastGroup"></a>

```typescript
public readonly SendDataToMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:SendDataToMulticastGroup.

---

##### `SendDataToWirelessDevice`<sup>Required</sup> <a name="SendDataToWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.SendDataToWirelessDevice"></a>

```typescript
public readonly SendDataToWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:SendDataToWirelessDevice.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBulkAssociateWirelessDeviceWithMulticastGroup`<sup>Required</sup> <a name="StartBulkAssociateWirelessDeviceWithMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartBulkAssociateWirelessDeviceWithMulticastGroup"></a>

```typescript
public readonly StartBulkAssociateWirelessDeviceWithMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:StartBulkAssociateWirelessDeviceWithMulticastGroup.

---

##### `StartBulkDisassociateWirelessDeviceFromMulticastGroup`<sup>Required</sup> <a name="StartBulkDisassociateWirelessDeviceFromMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartBulkDisassociateWirelessDeviceFromMulticastGroup"></a>

```typescript
public readonly StartBulkDisassociateWirelessDeviceFromMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:StartBulkDisassociateWirelessDeviceFromMulticastGroup.

---

##### `StartFuotaTask`<sup>Required</sup> <a name="StartFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartFuotaTask"></a>

```typescript
public readonly StartFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:StartFuotaTask.

---

##### `StartMulticastGroupSession`<sup>Required</sup> <a name="StartMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartMulticastGroupSession"></a>

```typescript
public readonly StartMulticastGroupSession: string;
```

- *Type:* string

[Write] iotwireless:StartMulticastGroupSession.

---

##### `StartNetworkAnalyzerStream`<sup>Required</sup> <a name="StartNetworkAnalyzerStream" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartNetworkAnalyzerStream"></a>

```typescript
public readonly StartNetworkAnalyzerStream: string;
```

- *Type:* string

[Write] iotwireless:StartNetworkAnalyzerStream.

---

##### `StartSingleWirelessDeviceImportTask`<sup>Required</sup> <a name="StartSingleWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartSingleWirelessDeviceImportTask"></a>

```typescript
public readonly StartSingleWirelessDeviceImportTask: string;
```

- *Type:* string

[Write] iotwireless:StartSingleWirelessDeviceImportTask.

---

##### `StartWirelessDeviceImportTask`<sup>Required</sup> <a name="StartWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.StartWirelessDeviceImportTask"></a>

```typescript
public readonly StartWirelessDeviceImportTask: string;
```

- *Type:* string

[Write] iotwireless:StartWirelessDeviceImportTask.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotwireless:TagResource.

---

##### `TestWirelessDevice`<sup>Required</sup> <a name="TestWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.TestWirelessDevice"></a>

```typescript
public readonly TestWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:TestWirelessDevice.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotwireless:UntagResource.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string;
```

- *Type:* string

[Write] iotwireless:UpdateDestination.

---

##### `UpdateEventConfigurationByResourceTypes`<sup>Required</sup> <a name="UpdateEventConfigurationByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateEventConfigurationByResourceTypes"></a>

```typescript
public readonly UpdateEventConfigurationByResourceTypes: string;
```

- *Type:* string

[Write] iotwireless:UpdateEventConfigurationByResourceTypes.

---

##### `UpdateFuotaTask`<sup>Required</sup> <a name="UpdateFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateFuotaTask"></a>

```typescript
public readonly UpdateFuotaTask: string;
```

- *Type:* string

[Write] iotwireless:UpdateFuotaTask.

---

##### `UpdateLogLevelsByResourceTypes`<sup>Required</sup> <a name="UpdateLogLevelsByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateLogLevelsByResourceTypes"></a>

```typescript
public readonly UpdateLogLevelsByResourceTypes: string;
```

- *Type:* string

[Write] iotwireless:UpdateLogLevelsByResourceTypes.

---

##### `UpdateMetricConfiguration`<sup>Required</sup> <a name="UpdateMetricConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateMetricConfiguration"></a>

```typescript
public readonly UpdateMetricConfiguration: string;
```

- *Type:* string

[Write] iotwireless:UpdateMetricConfiguration.

---

##### `UpdateMulticastGroup`<sup>Required</sup> <a name="UpdateMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateMulticastGroup"></a>

```typescript
public readonly UpdateMulticastGroup: string;
```

- *Type:* string

[Write] iotwireless:UpdateMulticastGroup.

---

##### `UpdateNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="UpdateNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateNetworkAnalyzerConfiguration"></a>

```typescript
public readonly UpdateNetworkAnalyzerConfiguration: string;
```

- *Type:* string

[Write] iotwireless:UpdateNetworkAnalyzerConfiguration.

---

##### `UpdatePartnerAccount`<sup>Required</sup> <a name="UpdatePartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdatePartnerAccount"></a>

```typescript
public readonly UpdatePartnerAccount: string;
```

- *Type:* string

[Write] iotwireless:UpdatePartnerAccount.

---

##### `UpdatePosition`<sup>Required</sup> <a name="UpdatePosition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdatePosition"></a>

```typescript
public readonly UpdatePosition: string;
```

- *Type:* string

[Write] iotwireless:UpdatePosition.

---

##### `UpdateResourceEventConfiguration`<sup>Required</sup> <a name="UpdateResourceEventConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateResourceEventConfiguration"></a>

```typescript
public readonly UpdateResourceEventConfiguration: string;
```

- *Type:* string

[Write] iotwireless:UpdateResourceEventConfiguration.

---

##### `UpdateResourcePosition`<sup>Required</sup> <a name="UpdateResourcePosition" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateResourcePosition"></a>

```typescript
public readonly UpdateResourcePosition: string;
```

- *Type:* string

[Write] iotwireless:UpdateResourcePosition.

---

##### `UpdateWirelessDevice`<sup>Required</sup> <a name="UpdateWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessDevice"></a>

```typescript
public readonly UpdateWirelessDevice: string;
```

- *Type:* string

[Write] iotwireless:UpdateWirelessDevice.

---

##### `UpdateWirelessDeviceImportTask`<sup>Required</sup> <a name="UpdateWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessDeviceImportTask"></a>

```typescript
public readonly UpdateWirelessDeviceImportTask: string;
```

- *Type:* string

[Write] iotwireless:UpdateWirelessDeviceImportTask.

---

##### `UpdateWirelessGateway`<sup>Required</sup> <a name="UpdateWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessActions.property.UpdateWirelessGateway"></a>

```typescript
public readonly UpdateWirelessGateway: string;
```

- *Type:* string

[Write] iotwireless:UpdateWirelessGateway.

---

### IotwirelessConditions <a name="IotwirelessConditions" id="@cdk_utils/iam.iotwireless.IotwirelessConditions"></a>

Condition key constants and builders for iotwireless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

new iotwireless.IotwirelessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.destinationName">destinationName</a></code> | Generates a condition block for `iotwireless:DestinationName`. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.deviceProfileId">deviceProfileId</a></code> | Generates a condition block for `iotwireless:DeviceProfileId`. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.serviceProfileId">serviceProfileId</a></code> | Generates a condition block for `iotwireless:ServiceProfileId`. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `destinationName` <a name="destinationName" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.destinationName"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.destinationName(value: string)
```

Generates a condition block for `iotwireless:DestinationName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.destinationName.parameter.value"></a>

- *Type:* string

---

##### `deviceProfileId` <a name="deviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.deviceProfileId"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.deviceProfileId(value: string)
```

Generates a condition block for `iotwireless:DeviceProfileId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.deviceProfileId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.requestTag"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.resourceTag"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceProfileId` <a name="serviceProfileId" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.serviceProfileId"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.serviceProfileId(value: string)
```

Generates a condition block for `iotwireless:ServiceProfileId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.serviceProfileId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.tagKeys"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AssociateAwsAccountWithPartnerAccountConditionKeys">AssociateAwsAccountWithPartnerAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateAwsAccountWithPartnerAccount action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateDestinationConditionKeys">CreateDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDestination action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateDeviceProfileConditionKeys">CreateDeviceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDeviceProfile action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateFuotaTaskConditionKeys">CreateFuotaTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFuotaTask action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateMulticastGroupConditionKeys">CreateMulticastGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMulticastGroup action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateNetworkAnalyzerConfigurationConditionKeys">CreateNetworkAnalyzerConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkAnalyzerConfiguration action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateServiceProfileConditionKeys">CreateServiceProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceProfile action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessDeviceConditionKeys">CreateWirelessDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWirelessDevice action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessGatewayConditionKeys">CreateWirelessGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWirelessGateway action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessGatewayTaskDefinitionConditionKeys">CreateWirelessGatewayTaskDefinitionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWirelessGatewayTaskDefinition action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.DESTINATION_NAME">DESTINATION_NAME</a></code> | <code>string</code> | Condition key: iotwireless:DestinationName (String). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.DEVICE_PROFILE_ID">DEVICE_PROFILE_ID</a></code> | <code>string</code> | Condition key: iotwireless:DeviceProfileId (String). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.SERVICE_PROFILE_ID">SERVICE_PROFILE_ID</a></code> | <code>string</code> | Condition key: iotwireless:ServiceProfileId (String). |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.StartSingleWirelessDeviceImportTaskConditionKeys">StartSingleWirelessDeviceImportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSingleWirelessDeviceImportTask action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.StartWirelessDeviceImportTaskConditionKeys">StartWirelessDeviceImportTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartWirelessDeviceImportTask action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateAwsAccountWithPartnerAccountConditionKeys`<sup>Required</sup> <a name="AssociateAwsAccountWithPartnerAccountConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AssociateAwsAccountWithPartnerAccountConditionKeys"></a>

```typescript
public readonly AssociateAwsAccountWithPartnerAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateAwsAccountWithPartnerAccount action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDestinationConditionKeys`<sup>Required</sup> <a name="CreateDestinationConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateDestinationConditionKeys"></a>

```typescript
public readonly CreateDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDestination action.

---

##### `CreateDeviceProfileConditionKeys`<sup>Required</sup> <a name="CreateDeviceProfileConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateDeviceProfileConditionKeys"></a>

```typescript
public readonly CreateDeviceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDeviceProfile action.

---

##### `CreateFuotaTaskConditionKeys`<sup>Required</sup> <a name="CreateFuotaTaskConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateFuotaTaskConditionKeys"></a>

```typescript
public readonly CreateFuotaTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFuotaTask action.

---

##### `CreateMulticastGroupConditionKeys`<sup>Required</sup> <a name="CreateMulticastGroupConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateMulticastGroupConditionKeys"></a>

```typescript
public readonly CreateMulticastGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMulticastGroup action.

---

##### `CreateNetworkAnalyzerConfigurationConditionKeys`<sup>Required</sup> <a name="CreateNetworkAnalyzerConfigurationConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateNetworkAnalyzerConfigurationConditionKeys"></a>

```typescript
public readonly CreateNetworkAnalyzerConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkAnalyzerConfiguration action.

---

##### `CreateServiceProfileConditionKeys`<sup>Required</sup> <a name="CreateServiceProfileConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateServiceProfileConditionKeys"></a>

```typescript
public readonly CreateServiceProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceProfile action.

---

##### `CreateWirelessDeviceConditionKeys`<sup>Required</sup> <a name="CreateWirelessDeviceConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessDeviceConditionKeys"></a>

```typescript
public readonly CreateWirelessDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWirelessDevice action.

---

##### `CreateWirelessGatewayConditionKeys`<sup>Required</sup> <a name="CreateWirelessGatewayConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessGatewayConditionKeys"></a>

```typescript
public readonly CreateWirelessGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWirelessGateway action.

---

##### `CreateWirelessGatewayTaskDefinitionConditionKeys`<sup>Required</sup> <a name="CreateWirelessGatewayTaskDefinitionConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.CreateWirelessGatewayTaskDefinitionConditionKeys"></a>

```typescript
public readonly CreateWirelessGatewayTaskDefinitionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWirelessGatewayTaskDefinition action.

---

##### `DESTINATION_NAME`<sup>Required</sup> <a name="DESTINATION_NAME" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.DESTINATION_NAME"></a>

```typescript
public readonly DESTINATION_NAME: string;
```

- *Type:* string

Condition key: iotwireless:DestinationName (String).

---

##### `DEVICE_PROFILE_ID`<sup>Required</sup> <a name="DEVICE_PROFILE_ID" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.DEVICE_PROFILE_ID"></a>

```typescript
public readonly DEVICE_PROFILE_ID: string;
```

- *Type:* string

Condition key: iotwireless:DeviceProfileId (String).

---

##### `SERVICE_PROFILE_ID`<sup>Required</sup> <a name="SERVICE_PROFILE_ID" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.SERVICE_PROFILE_ID"></a>

```typescript
public readonly SERVICE_PROFILE_ID: string;
```

- *Type:* string

Condition key: iotwireless:ServiceProfileId (String).

---

##### `StartSingleWirelessDeviceImportTaskConditionKeys`<sup>Required</sup> <a name="StartSingleWirelessDeviceImportTaskConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.StartSingleWirelessDeviceImportTaskConditionKeys"></a>

```typescript
public readonly StartSingleWirelessDeviceImportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSingleWirelessDeviceImportTask action.

---

##### `StartWirelessDeviceImportTaskConditionKeys`<sup>Required</sup> <a name="StartWirelessDeviceImportTaskConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.StartWirelessDeviceImportTaskConditionKeys"></a>

```typescript
public readonly StartWirelessDeviceImportTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartWirelessDeviceImportTask action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotwireless.IotwirelessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IotwirelessOperations <a name="IotwirelessOperations" id="@cdk_utils/iam.iotwireless.IotwirelessOperations"></a>

API operation to required IAM actions mapping for iotwireless.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

new iotwireless.IotwirelessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateAwsAccountWithPartnerAccount">AssociateAwsAccountWithPartnerAccount</a></code> | <code>string[]</code> | IAM actions required for the AssociateAwsAccountWithPartnerAccount API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateMulticastGroupWithFuotaTask">AssociateMulticastGroupWithFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the AssociateMulticastGroupWithFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithFuotaTask">AssociateWirelessDeviceWithFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the AssociateWirelessDeviceWithFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithMulticastGroup">AssociateWirelessDeviceWithMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateWirelessDeviceWithMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithThing">AssociateWirelessDeviceWithThing</a></code> | <code>string[]</code> | IAM actions required for the AssociateWirelessDeviceWithThing API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessGatewayWithCertificate">AssociateWirelessGatewayWithCertificate</a></code> | <code>string[]</code> | IAM actions required for the AssociateWirelessGatewayWithCertificate API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessGatewayWithThing">AssociateWirelessGatewayWithThing</a></code> | <code>string[]</code> | IAM actions required for the AssociateWirelessGatewayWithThing API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CancelMulticastGroupSession">CancelMulticastGroupSession</a></code> | <code>string[]</code> | IAM actions required for the CancelMulticastGroupSession API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateDestination">CreateDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateDestination API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateDeviceProfile">CreateDeviceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateDeviceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateFuotaTask">CreateFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the CreateFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateMulticastGroup">CreateMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateNetworkAnalyzerConfiguration">CreateNetworkAnalyzerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateNetworkAnalyzerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateServiceProfile">CreateServiceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessDevice">CreateWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the CreateWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGateway">CreateWirelessGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateWirelessGateway API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGatewayTask">CreateWirelessGatewayTask</a></code> | <code>string[]</code> | IAM actions required for the CreateWirelessGatewayTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGatewayTaskDefinition">CreateWirelessGatewayTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateWirelessGatewayTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteDestination">DeleteDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteDestination API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteDeviceProfile">DeleteDeviceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeviceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteFuotaTask">DeleteFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteMulticastGroup">DeleteMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteNetworkAnalyzerConfiguration">DeleteNetworkAnalyzerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkAnalyzerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteQueuedMessages">DeleteQueuedMessages</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueuedMessages API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteServiceProfile">DeleteServiceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessDevice">DeleteWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the DeleteWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessDeviceImportTask">DeleteWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGateway">DeleteWirelessGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteWirelessGateway API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGatewayTask">DeleteWirelessGatewayTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteWirelessGatewayTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGatewayTaskDefinition">DeleteWirelessGatewayTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteWirelessGatewayTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeregisterWirelessDevice">DeregisterWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the DeregisterWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateAwsAccountFromPartnerAccount">DisassociateAwsAccountFromPartnerAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAwsAccountFromPartnerAccount API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateMulticastGroupFromFuotaTask">DisassociateMulticastGroupFromFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMulticastGroupFromFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromFuotaTask">DisassociateWirelessDeviceFromFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWirelessDeviceFromFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromMulticastGroup">DisassociateWirelessDeviceFromMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWirelessDeviceFromMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromThing">DisassociateWirelessDeviceFromThing</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWirelessDeviceFromThing API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessGatewayFromCertificate">DisassociateWirelessGatewayFromCertificate</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWirelessGatewayFromCertificate API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessGatewayFromThing">DisassociateWirelessGatewayFromThing</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWirelessGatewayFromThing API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDestinations">ListDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListDestinations API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDeviceProfiles">ListDeviceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceProfiles API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDevicesForWirelessDeviceImportTask">ListDevicesForWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the ListDevicesForWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListEventConfigurations">ListEventConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListEventConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListFuotaTasks">ListFuotaTasks</a></code> | <code>string[]</code> | IAM actions required for the ListFuotaTasks API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListMulticastGroups">ListMulticastGroups</a></code> | <code>string[]</code> | IAM actions required for the ListMulticastGroups API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListMulticastGroupsByFuotaTask">ListMulticastGroupsByFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the ListMulticastGroupsByFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListNetworkAnalyzerConfigurations">ListNetworkAnalyzerConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkAnalyzerConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListPartnerAccounts">ListPartnerAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListPartnerAccounts API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListPositionConfigurations">ListPositionConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListPositionConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListQueuedMessages">ListQueuedMessages</a></code> | <code>string[]</code> | IAM actions required for the ListQueuedMessages API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListServiceProfiles">ListServiceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListServiceProfiles API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessDeviceImportTasks">ListWirelessDeviceImportTasks</a></code> | <code>string[]</code> | IAM actions required for the ListWirelessDeviceImportTasks API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessDevices">ListWirelessDevices</a></code> | <code>string[]</code> | IAM actions required for the ListWirelessDevices API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessGateways">ListWirelessGateways</a></code> | <code>string[]</code> | IAM actions required for the ListWirelessGateways API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessGatewayTaskDefinitions">ListWirelessGatewayTaskDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListWirelessGatewayTaskDefinitions API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetDestination">opGetDestination</a></code> | <code>string[]</code> | IAM actions required for the GetDestination API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetDeviceProfile">opGetDeviceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetDeviceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetEventConfigurationByResourceTypes">opGetEventConfigurationByResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the GetEventConfigurationByResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetFuotaTask">opGetFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the GetFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetLogLevelsByResourceTypes">opGetLogLevelsByResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the GetLogLevelsByResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMetricConfiguration">opGetMetricConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetMetricConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMetrics">opGetMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetMetrics API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMulticastGroup">opGetMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the GetMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMulticastGroupSession">opGetMulticastGroupSession</a></code> | <code>string[]</code> | IAM actions required for the GetMulticastGroupSession API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetNetworkAnalyzerConfiguration">opGetNetworkAnalyzerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkAnalyzerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPartnerAccount">opGetPartnerAccount</a></code> | <code>string[]</code> | IAM actions required for the GetPartnerAccount API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPosition">opGetPosition</a></code> | <code>string[]</code> | IAM actions required for the GetPosition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPositionConfiguration">opGetPositionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetPositionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPositionEstimate">opGetPositionEstimate</a></code> | <code>string[]</code> | IAM actions required for the GetPositionEstimate API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourceEventConfiguration">opGetResourceEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetResourceEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourceLogLevel">opGetResourceLogLevel</a></code> | <code>string[]</code> | IAM actions required for the GetResourceLogLevel API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourcePosition">opGetResourcePosition</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePosition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetServiceEndpoint">opGetServiceEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetServiceEndpoint API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetServiceProfile">opGetServiceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetServiceProfile API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDevice">opGetWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDeviceImportTask">opGetWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDeviceStatistics">opGetWirelessDeviceStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessDeviceStatistics API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGateway">opGetWirelessGateway</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGateway API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayCertificate">opGetWirelessGatewayCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGatewayCertificate API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayFirmwareInformation">opGetWirelessGatewayFirmwareInformation</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGatewayFirmwareInformation API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayStatistics">opGetWirelessGatewayStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGatewayStatistics API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayTask">opGetWirelessGatewayTask</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGatewayTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayTaskDefinition">opGetWirelessGatewayTaskDefinition</a></code> | <code>string[]</code> | IAM actions required for the GetWirelessGatewayTaskDefinition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.PutPositionConfiguration">PutPositionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutPositionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.PutResourceLogLevel">PutResourceLogLevel</a></code> | <code>string[]</code> | IAM actions required for the PutResourceLogLevel API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ResetAllResourceLogLevels">ResetAllResourceLogLevels</a></code> | <code>string[]</code> | IAM actions required for the ResetAllResourceLogLevels API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ResetResourceLogLevel">ResetResourceLogLevel</a></code> | <code>string[]</code> | IAM actions required for the ResetResourceLogLevel API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.SendDataToMulticastGroup">SendDataToMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the SendDataToMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.SendDataToWirelessDevice">SendDataToWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the SendDataToWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartBulkAssociateWirelessDeviceWithMulticastGroup">StartBulkAssociateWirelessDeviceWithMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the StartBulkAssociateWirelessDeviceWithMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartBulkDisassociateWirelessDeviceFromMulticastGroup">StartBulkDisassociateWirelessDeviceFromMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the StartBulkDisassociateWirelessDeviceFromMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartFuotaTask">StartFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the StartFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartMulticastGroupSession">StartMulticastGroupSession</a></code> | <code>string[]</code> | IAM actions required for the StartMulticastGroupSession API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartSingleWirelessDeviceImportTask">StartSingleWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the StartSingleWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartWirelessDeviceImportTask">StartWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the StartWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.TestWirelessDevice">TestWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the TestWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateDestination">UpdateDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateDestination API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateEventConfigurationByResourceTypes">UpdateEventConfigurationByResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventConfigurationByResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateFuotaTask">UpdateFuotaTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateFuotaTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateLogLevelsByResourceTypes">UpdateLogLevelsByResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the UpdateLogLevelsByResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateMetricConfiguration">UpdateMetricConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateMetricConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateMulticastGroup">UpdateMulticastGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateMulticastGroup API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateNetworkAnalyzerConfiguration">UpdateNetworkAnalyzerConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkAnalyzerConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdatePartnerAccount">UpdatePartnerAccount</a></code> | <code>string[]</code> | IAM actions required for the UpdatePartnerAccount API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdatePosition">UpdatePosition</a></code> | <code>string[]</code> | IAM actions required for the UpdatePosition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateResourceEventConfiguration">UpdateResourceEventConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceEventConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateResourcePosition">UpdateResourcePosition</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourcePosition API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessDevice">UpdateWirelessDevice</a></code> | <code>string[]</code> | IAM actions required for the UpdateWirelessDevice API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessDeviceImportTask">UpdateWirelessDeviceImportTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateWirelessDeviceImportTask API call. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessGateway">UpdateWirelessGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateWirelessGateway API call. |

---

##### `AssociateAwsAccountWithPartnerAccount`<sup>Required</sup> <a name="AssociateAwsAccountWithPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateAwsAccountWithPartnerAccount"></a>

```typescript
public readonly AssociateAwsAccountWithPartnerAccount: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAwsAccountWithPartnerAccount API call.

---

##### `AssociateMulticastGroupWithFuotaTask`<sup>Required</sup> <a name="AssociateMulticastGroupWithFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateMulticastGroupWithFuotaTask"></a>

```typescript
public readonly AssociateMulticastGroupWithFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMulticastGroupWithFuotaTask API call.

---

##### `AssociateWirelessDeviceWithFuotaTask`<sup>Required</sup> <a name="AssociateWirelessDeviceWithFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithFuotaTask"></a>

```typescript
public readonly AssociateWirelessDeviceWithFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWirelessDeviceWithFuotaTask API call.

---

##### `AssociateWirelessDeviceWithMulticastGroup`<sup>Required</sup> <a name="AssociateWirelessDeviceWithMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithMulticastGroup"></a>

```typescript
public readonly AssociateWirelessDeviceWithMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWirelessDeviceWithMulticastGroup API call.

---

##### `AssociateWirelessDeviceWithThing`<sup>Required</sup> <a name="AssociateWirelessDeviceWithThing" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessDeviceWithThing"></a>

```typescript
public readonly AssociateWirelessDeviceWithThing: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWirelessDeviceWithThing API call.

---

##### `AssociateWirelessGatewayWithCertificate`<sup>Required</sup> <a name="AssociateWirelessGatewayWithCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessGatewayWithCertificate"></a>

```typescript
public readonly AssociateWirelessGatewayWithCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWirelessGatewayWithCertificate API call.

---

##### `AssociateWirelessGatewayWithThing`<sup>Required</sup> <a name="AssociateWirelessGatewayWithThing" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.AssociateWirelessGatewayWithThing"></a>

```typescript
public readonly AssociateWirelessGatewayWithThing: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWirelessGatewayWithThing API call.

---

##### `CancelMulticastGroupSession`<sup>Required</sup> <a name="CancelMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CancelMulticastGroupSession"></a>

```typescript
public readonly CancelMulticastGroupSession: string[];
```

- *Type:* string[]

IAM actions required for the CancelMulticastGroupSession API call.

---

##### `CreateDestination`<sup>Required</sup> <a name="CreateDestination" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateDestination"></a>

```typescript
public readonly CreateDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateDestination API call.

---

##### `CreateDeviceProfile`<sup>Required</sup> <a name="CreateDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateDeviceProfile"></a>

```typescript
public readonly CreateDeviceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateDeviceProfile API call.

---

##### `CreateFuotaTask`<sup>Required</sup> <a name="CreateFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateFuotaTask"></a>

```typescript
public readonly CreateFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateFuotaTask API call.

---

##### `CreateMulticastGroup`<sup>Required</sup> <a name="CreateMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateMulticastGroup"></a>

```typescript
public readonly CreateMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateMulticastGroup API call.

---

##### `CreateNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="CreateNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateNetworkAnalyzerConfiguration"></a>

```typescript
public readonly CreateNetworkAnalyzerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetworkAnalyzerConfiguration API call.

---

##### `CreateServiceProfile`<sup>Required</sup> <a name="CreateServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateServiceProfile"></a>

```typescript
public readonly CreateServiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceProfile API call.

---

##### `CreateWirelessDevice`<sup>Required</sup> <a name="CreateWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessDevice"></a>

```typescript
public readonly CreateWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the CreateWirelessDevice API call.

---

##### `CreateWirelessGateway`<sup>Required</sup> <a name="CreateWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGateway"></a>

```typescript
public readonly CreateWirelessGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateWirelessGateway API call.

---

##### `CreateWirelessGatewayTask`<sup>Required</sup> <a name="CreateWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGatewayTask"></a>

```typescript
public readonly CreateWirelessGatewayTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateWirelessGatewayTask API call.

---

##### `CreateWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="CreateWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.CreateWirelessGatewayTaskDefinition"></a>

```typescript
public readonly CreateWirelessGatewayTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateWirelessGatewayTaskDefinition API call.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDestination API call.

---

##### `DeleteDeviceProfile`<sup>Required</sup> <a name="DeleteDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteDeviceProfile"></a>

```typescript
public readonly DeleteDeviceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeviceProfile API call.

---

##### `DeleteFuotaTask`<sup>Required</sup> <a name="DeleteFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteFuotaTask"></a>

```typescript
public readonly DeleteFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFuotaTask API call.

---

##### `DeleteMulticastGroup`<sup>Required</sup> <a name="DeleteMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteMulticastGroup"></a>

```typescript
public readonly DeleteMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMulticastGroup API call.

---

##### `DeleteNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="DeleteNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteNetworkAnalyzerConfiguration"></a>

```typescript
public readonly DeleteNetworkAnalyzerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkAnalyzerConfiguration API call.

---

##### `DeleteQueuedMessages`<sup>Required</sup> <a name="DeleteQueuedMessages" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteQueuedMessages"></a>

```typescript
public readonly DeleteQueuedMessages: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueuedMessages API call.

---

##### `DeleteServiceProfile`<sup>Required</sup> <a name="DeleteServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteServiceProfile"></a>

```typescript
public readonly DeleteServiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceProfile API call.

---

##### `DeleteWirelessDevice`<sup>Required</sup> <a name="DeleteWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessDevice"></a>

```typescript
public readonly DeleteWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWirelessDevice API call.

---

##### `DeleteWirelessDeviceImportTask`<sup>Required</sup> <a name="DeleteWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessDeviceImportTask"></a>

```typescript
public readonly DeleteWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWirelessDeviceImportTask API call.

---

##### `DeleteWirelessGateway`<sup>Required</sup> <a name="DeleteWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGateway"></a>

```typescript
public readonly DeleteWirelessGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWirelessGateway API call.

---

##### `DeleteWirelessGatewayTask`<sup>Required</sup> <a name="DeleteWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGatewayTask"></a>

```typescript
public readonly DeleteWirelessGatewayTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWirelessGatewayTask API call.

---

##### `DeleteWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="DeleteWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeleteWirelessGatewayTaskDefinition"></a>

```typescript
public readonly DeleteWirelessGatewayTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWirelessGatewayTaskDefinition API call.

---

##### `DeregisterWirelessDevice`<sup>Required</sup> <a name="DeregisterWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DeregisterWirelessDevice"></a>

```typescript
public readonly DeregisterWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterWirelessDevice API call.

---

##### `DisassociateAwsAccountFromPartnerAccount`<sup>Required</sup> <a name="DisassociateAwsAccountFromPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateAwsAccountFromPartnerAccount"></a>

```typescript
public readonly DisassociateAwsAccountFromPartnerAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAwsAccountFromPartnerAccount API call.

---

##### `DisassociateMulticastGroupFromFuotaTask`<sup>Required</sup> <a name="DisassociateMulticastGroupFromFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateMulticastGroupFromFuotaTask"></a>

```typescript
public readonly DisassociateMulticastGroupFromFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMulticastGroupFromFuotaTask API call.

---

##### `DisassociateWirelessDeviceFromFuotaTask`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromFuotaTask"></a>

```typescript
public readonly DisassociateWirelessDeviceFromFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWirelessDeviceFromFuotaTask API call.

---

##### `DisassociateWirelessDeviceFromMulticastGroup`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromMulticastGroup"></a>

```typescript
public readonly DisassociateWirelessDeviceFromMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWirelessDeviceFromMulticastGroup API call.

---

##### `DisassociateWirelessDeviceFromThing`<sup>Required</sup> <a name="DisassociateWirelessDeviceFromThing" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessDeviceFromThing"></a>

```typescript
public readonly DisassociateWirelessDeviceFromThing: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWirelessDeviceFromThing API call.

---

##### `DisassociateWirelessGatewayFromCertificate`<sup>Required</sup> <a name="DisassociateWirelessGatewayFromCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessGatewayFromCertificate"></a>

```typescript
public readonly DisassociateWirelessGatewayFromCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWirelessGatewayFromCertificate API call.

---

##### `DisassociateWirelessGatewayFromThing`<sup>Required</sup> <a name="DisassociateWirelessGatewayFromThing" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.DisassociateWirelessGatewayFromThing"></a>

```typescript
public readonly DisassociateWirelessGatewayFromThing: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWirelessGatewayFromThing API call.

---

##### `ListDestinations`<sup>Required</sup> <a name="ListDestinations" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDestinations"></a>

```typescript
public readonly ListDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListDestinations API call.

---

##### `ListDeviceProfiles`<sup>Required</sup> <a name="ListDeviceProfiles" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDeviceProfiles"></a>

```typescript
public readonly ListDeviceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceProfiles API call.

---

##### `ListDevicesForWirelessDeviceImportTask`<sup>Required</sup> <a name="ListDevicesForWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListDevicesForWirelessDeviceImportTask"></a>

```typescript
public readonly ListDevicesForWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the ListDevicesForWirelessDeviceImportTask API call.

---

##### `ListEventConfigurations`<sup>Required</sup> <a name="ListEventConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListEventConfigurations"></a>

```typescript
public readonly ListEventConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListEventConfigurations API call.

---

##### `ListFuotaTasks`<sup>Required</sup> <a name="ListFuotaTasks" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListFuotaTasks"></a>

```typescript
public readonly ListFuotaTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListFuotaTasks API call.

---

##### `ListMulticastGroups`<sup>Required</sup> <a name="ListMulticastGroups" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListMulticastGroups"></a>

```typescript
public readonly ListMulticastGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListMulticastGroups API call.

---

##### `ListMulticastGroupsByFuotaTask`<sup>Required</sup> <a name="ListMulticastGroupsByFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListMulticastGroupsByFuotaTask"></a>

```typescript
public readonly ListMulticastGroupsByFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the ListMulticastGroupsByFuotaTask API call.

---

##### `ListNetworkAnalyzerConfigurations`<sup>Required</sup> <a name="ListNetworkAnalyzerConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListNetworkAnalyzerConfigurations"></a>

```typescript
public readonly ListNetworkAnalyzerConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkAnalyzerConfigurations API call.

---

##### `ListPartnerAccounts`<sup>Required</sup> <a name="ListPartnerAccounts" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListPartnerAccounts"></a>

```typescript
public readonly ListPartnerAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListPartnerAccounts API call.

---

##### `ListPositionConfigurations`<sup>Required</sup> <a name="ListPositionConfigurations" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListPositionConfigurations"></a>

```typescript
public readonly ListPositionConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListPositionConfigurations API call.

---

##### `ListQueuedMessages`<sup>Required</sup> <a name="ListQueuedMessages" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListQueuedMessages"></a>

```typescript
public readonly ListQueuedMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListQueuedMessages API call.

---

##### `ListServiceProfiles`<sup>Required</sup> <a name="ListServiceProfiles" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListServiceProfiles"></a>

```typescript
public readonly ListServiceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceProfiles API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWirelessDeviceImportTasks`<sup>Required</sup> <a name="ListWirelessDeviceImportTasks" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessDeviceImportTasks"></a>

```typescript
public readonly ListWirelessDeviceImportTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListWirelessDeviceImportTasks API call.

---

##### `ListWirelessDevices`<sup>Required</sup> <a name="ListWirelessDevices" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessDevices"></a>

```typescript
public readonly ListWirelessDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListWirelessDevices API call.

---

##### `ListWirelessGateways`<sup>Required</sup> <a name="ListWirelessGateways" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessGateways"></a>

```typescript
public readonly ListWirelessGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListWirelessGateways API call.

---

##### `ListWirelessGatewayTaskDefinitions`<sup>Required</sup> <a name="ListWirelessGatewayTaskDefinitions" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ListWirelessGatewayTaskDefinitions"></a>

```typescript
public readonly ListWirelessGatewayTaskDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListWirelessGatewayTaskDefinitions API call.

---

##### `opGetDestination`<sup>Required</sup> <a name="opGetDestination" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetDestination"></a>

```typescript
public readonly opGetDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetDestination API call.

---

##### `opGetDeviceProfile`<sup>Required</sup> <a name="opGetDeviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetDeviceProfile"></a>

```typescript
public readonly opGetDeviceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetDeviceProfile API call.

---

##### `opGetEventConfigurationByResourceTypes`<sup>Required</sup> <a name="opGetEventConfigurationByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetEventConfigurationByResourceTypes"></a>

```typescript
public readonly opGetEventConfigurationByResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetEventConfigurationByResourceTypes API call.

---

##### `opGetFuotaTask`<sup>Required</sup> <a name="opGetFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetFuotaTask"></a>

```typescript
public readonly opGetFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the GetFuotaTask API call.

---

##### `opGetLogLevelsByResourceTypes`<sup>Required</sup> <a name="opGetLogLevelsByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetLogLevelsByResourceTypes"></a>

```typescript
public readonly opGetLogLevelsByResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetLogLevelsByResourceTypes API call.

---

##### `opGetMetricConfiguration`<sup>Required</sup> <a name="opGetMetricConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMetricConfiguration"></a>

```typescript
public readonly opGetMetricConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricConfiguration API call.

---

##### `opGetMetrics`<sup>Required</sup> <a name="opGetMetrics" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMetrics"></a>

```typescript
public readonly opGetMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetMetrics API call.

---

##### `opGetMulticastGroup`<sup>Required</sup> <a name="opGetMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMulticastGroup"></a>

```typescript
public readonly opGetMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetMulticastGroup API call.

---

##### `opGetMulticastGroupSession`<sup>Required</sup> <a name="opGetMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetMulticastGroupSession"></a>

```typescript
public readonly opGetMulticastGroupSession: string[];
```

- *Type:* string[]

IAM actions required for the GetMulticastGroupSession API call.

---

##### `opGetNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="opGetNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetNetworkAnalyzerConfiguration"></a>

```typescript
public readonly opGetNetworkAnalyzerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkAnalyzerConfiguration API call.

---

##### `opGetPartnerAccount`<sup>Required</sup> <a name="opGetPartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPartnerAccount"></a>

```typescript
public readonly opGetPartnerAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetPartnerAccount API call.

---

##### `opGetPosition`<sup>Required</sup> <a name="opGetPosition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPosition"></a>

```typescript
public readonly opGetPosition: string[];
```

- *Type:* string[]

IAM actions required for the GetPosition API call.

---

##### `opGetPositionConfiguration`<sup>Required</sup> <a name="opGetPositionConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPositionConfiguration"></a>

```typescript
public readonly opGetPositionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetPositionConfiguration API call.

---

##### `opGetPositionEstimate`<sup>Required</sup> <a name="opGetPositionEstimate" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetPositionEstimate"></a>

```typescript
public readonly opGetPositionEstimate: string[];
```

- *Type:* string[]

IAM actions required for the GetPositionEstimate API call.

---

##### `opGetResourceEventConfiguration`<sup>Required</sup> <a name="opGetResourceEventConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourceEventConfiguration"></a>

```typescript
public readonly opGetResourceEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceEventConfiguration API call.

---

##### `opGetResourceLogLevel`<sup>Required</sup> <a name="opGetResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourceLogLevel"></a>

```typescript
public readonly opGetResourceLogLevel: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceLogLevel API call.

---

##### `opGetResourcePosition`<sup>Required</sup> <a name="opGetResourcePosition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetResourcePosition"></a>

```typescript
public readonly opGetResourcePosition: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePosition API call.

---

##### `opGetServiceEndpoint`<sup>Required</sup> <a name="opGetServiceEndpoint" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetServiceEndpoint"></a>

```typescript
public readonly opGetServiceEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceEndpoint API call.

---

##### `opGetServiceProfile`<sup>Required</sup> <a name="opGetServiceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetServiceProfile"></a>

```typescript
public readonly opGetServiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceProfile API call.

---

##### `opGetWirelessDevice`<sup>Required</sup> <a name="opGetWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDevice"></a>

```typescript
public readonly opGetWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessDevice API call.

---

##### `opGetWirelessDeviceImportTask`<sup>Required</sup> <a name="opGetWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDeviceImportTask"></a>

```typescript
public readonly opGetWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessDeviceImportTask API call.

---

##### `opGetWirelessDeviceStatistics`<sup>Required</sup> <a name="opGetWirelessDeviceStatistics" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessDeviceStatistics"></a>

```typescript
public readonly opGetWirelessDeviceStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessDeviceStatistics API call.

---

##### `opGetWirelessGateway`<sup>Required</sup> <a name="opGetWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGateway"></a>

```typescript
public readonly opGetWirelessGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGateway API call.

---

##### `opGetWirelessGatewayCertificate`<sup>Required</sup> <a name="opGetWirelessGatewayCertificate" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayCertificate"></a>

```typescript
public readonly opGetWirelessGatewayCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGatewayCertificate API call.

---

##### `opGetWirelessGatewayFirmwareInformation`<sup>Required</sup> <a name="opGetWirelessGatewayFirmwareInformation" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayFirmwareInformation"></a>

```typescript
public readonly opGetWirelessGatewayFirmwareInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGatewayFirmwareInformation API call.

---

##### `opGetWirelessGatewayStatistics`<sup>Required</sup> <a name="opGetWirelessGatewayStatistics" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayStatistics"></a>

```typescript
public readonly opGetWirelessGatewayStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGatewayStatistics API call.

---

##### `opGetWirelessGatewayTask`<sup>Required</sup> <a name="opGetWirelessGatewayTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayTask"></a>

```typescript
public readonly opGetWirelessGatewayTask: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGatewayTask API call.

---

##### `opGetWirelessGatewayTaskDefinition`<sup>Required</sup> <a name="opGetWirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.opGetWirelessGatewayTaskDefinition"></a>

```typescript
public readonly opGetWirelessGatewayTaskDefinition: string[];
```

- *Type:* string[]

IAM actions required for the GetWirelessGatewayTaskDefinition API call.

---

##### `PutPositionConfiguration`<sup>Required</sup> <a name="PutPositionConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.PutPositionConfiguration"></a>

```typescript
public readonly PutPositionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutPositionConfiguration API call.

---

##### `PutResourceLogLevel`<sup>Required</sup> <a name="PutResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.PutResourceLogLevel"></a>

```typescript
public readonly PutResourceLogLevel: string[];
```

- *Type:* string[]

IAM actions required for the PutResourceLogLevel API call.

---

##### `ResetAllResourceLogLevels`<sup>Required</sup> <a name="ResetAllResourceLogLevels" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ResetAllResourceLogLevels"></a>

```typescript
public readonly ResetAllResourceLogLevels: string[];
```

- *Type:* string[]

IAM actions required for the ResetAllResourceLogLevels API call.

---

##### `ResetResourceLogLevel`<sup>Required</sup> <a name="ResetResourceLogLevel" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.ResetResourceLogLevel"></a>

```typescript
public readonly ResetResourceLogLevel: string[];
```

- *Type:* string[]

IAM actions required for the ResetResourceLogLevel API call.

---

##### `SendDataToMulticastGroup`<sup>Required</sup> <a name="SendDataToMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.SendDataToMulticastGroup"></a>

```typescript
public readonly SendDataToMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the SendDataToMulticastGroup API call.

---

##### `SendDataToWirelessDevice`<sup>Required</sup> <a name="SendDataToWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.SendDataToWirelessDevice"></a>

```typescript
public readonly SendDataToWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the SendDataToWirelessDevice API call.

---

##### `StartBulkAssociateWirelessDeviceWithMulticastGroup`<sup>Required</sup> <a name="StartBulkAssociateWirelessDeviceWithMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartBulkAssociateWirelessDeviceWithMulticastGroup"></a>

```typescript
public readonly StartBulkAssociateWirelessDeviceWithMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the StartBulkAssociateWirelessDeviceWithMulticastGroup API call.

---

##### `StartBulkDisassociateWirelessDeviceFromMulticastGroup`<sup>Required</sup> <a name="StartBulkDisassociateWirelessDeviceFromMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartBulkDisassociateWirelessDeviceFromMulticastGroup"></a>

```typescript
public readonly StartBulkDisassociateWirelessDeviceFromMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the StartBulkDisassociateWirelessDeviceFromMulticastGroup API call.

---

##### `StartFuotaTask`<sup>Required</sup> <a name="StartFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartFuotaTask"></a>

```typescript
public readonly StartFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the StartFuotaTask API call.

---

##### `StartMulticastGroupSession`<sup>Required</sup> <a name="StartMulticastGroupSession" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartMulticastGroupSession"></a>

```typescript
public readonly StartMulticastGroupSession: string[];
```

- *Type:* string[]

IAM actions required for the StartMulticastGroupSession API call.

---

##### `StartSingleWirelessDeviceImportTask`<sup>Required</sup> <a name="StartSingleWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartSingleWirelessDeviceImportTask"></a>

```typescript
public readonly StartSingleWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartSingleWirelessDeviceImportTask API call.

---

##### `StartWirelessDeviceImportTask`<sup>Required</sup> <a name="StartWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.StartWirelessDeviceImportTask"></a>

```typescript
public readonly StartWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the StartWirelessDeviceImportTask API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestWirelessDevice`<sup>Required</sup> <a name="TestWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.TestWirelessDevice"></a>

```typescript
public readonly TestWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the TestWirelessDevice API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDestination API call.

---

##### `UpdateEventConfigurationByResourceTypes`<sup>Required</sup> <a name="UpdateEventConfigurationByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateEventConfigurationByResourceTypes"></a>

```typescript
public readonly UpdateEventConfigurationByResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventConfigurationByResourceTypes API call.

---

##### `UpdateFuotaTask`<sup>Required</sup> <a name="UpdateFuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateFuotaTask"></a>

```typescript
public readonly UpdateFuotaTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFuotaTask API call.

---

##### `UpdateLogLevelsByResourceTypes`<sup>Required</sup> <a name="UpdateLogLevelsByResourceTypes" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateLogLevelsByResourceTypes"></a>

```typescript
public readonly UpdateLogLevelsByResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLogLevelsByResourceTypes API call.

---

##### `UpdateMetricConfiguration`<sup>Required</sup> <a name="UpdateMetricConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateMetricConfiguration"></a>

```typescript
public readonly UpdateMetricConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMetricConfiguration API call.

---

##### `UpdateMulticastGroup`<sup>Required</sup> <a name="UpdateMulticastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateMulticastGroup"></a>

```typescript
public readonly UpdateMulticastGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMulticastGroup API call.

---

##### `UpdateNetworkAnalyzerConfiguration`<sup>Required</sup> <a name="UpdateNetworkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateNetworkAnalyzerConfiguration"></a>

```typescript
public readonly UpdateNetworkAnalyzerConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkAnalyzerConfiguration API call.

---

##### `UpdatePartnerAccount`<sup>Required</sup> <a name="UpdatePartnerAccount" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdatePartnerAccount"></a>

```typescript
public readonly UpdatePartnerAccount: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePartnerAccount API call.

---

##### `UpdatePosition`<sup>Required</sup> <a name="UpdatePosition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdatePosition"></a>

```typescript
public readonly UpdatePosition: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePosition API call.

---

##### `UpdateResourceEventConfiguration`<sup>Required</sup> <a name="UpdateResourceEventConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateResourceEventConfiguration"></a>

```typescript
public readonly UpdateResourceEventConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceEventConfiguration API call.

---

##### `UpdateResourcePosition`<sup>Required</sup> <a name="UpdateResourcePosition" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateResourcePosition"></a>

```typescript
public readonly UpdateResourcePosition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourcePosition API call.

---

##### `UpdateWirelessDevice`<sup>Required</sup> <a name="UpdateWirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessDevice"></a>

```typescript
public readonly UpdateWirelessDevice: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWirelessDevice API call.

---

##### `UpdateWirelessDeviceImportTask`<sup>Required</sup> <a name="UpdateWirelessDeviceImportTask" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessDeviceImportTask"></a>

```typescript
public readonly UpdateWirelessDeviceImportTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWirelessDeviceImportTask API call.

---

##### `UpdateWirelessGateway`<sup>Required</sup> <a name="UpdateWirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessOperations.property.UpdateWirelessGateway"></a>

```typescript
public readonly UpdateWirelessGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWirelessGateway API call.

---

### IotwirelessResources <a name="IotwirelessResources" id="@cdk_utils/iam.iotwireless.IotwirelessResources"></a>

ARN builders, validators, and parsers for iotwireless resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotwireless.IotwirelessResources.Initializer"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

new iotwireless.IotwirelessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.cert">cert</a></code> | Builds an ARN for the cert resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.destination">destination</a></code> | Builds an ARN for the Destination resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.deviceProfile">deviceProfile</a></code> | Builds an ARN for the DeviceProfile resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.fuotaTask">fuotaTask</a></code> | Builds an ARN for the FuotaTask resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.importTask">importTask</a></code> | Builds an ARN for the ImportTask resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidCertArn">isValidCertArn</a></code> | Validates whether a string is a valid ARN for the cert resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDestinationArn">isValidDestinationArn</a></code> | Validates whether a string is a valid ARN for the Destination resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDeviceProfileArn">isValidDeviceProfileArn</a></code> | Validates whether a string is a valid ARN for the DeviceProfile resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidFuotaTaskArn">isValidFuotaTaskArn</a></code> | Validates whether a string is a valid ARN for the FuotaTask resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidImportTaskArn">isValidImportTaskArn</a></code> | Validates whether a string is a valid ARN for the ImportTask resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidMulticastGroupArn">isValidMulticastGroupArn</a></code> | Validates whether a string is a valid ARN for the MulticastGroup resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidNetworkAnalyzerConfigurationArn">isValidNetworkAnalyzerConfigurationArn</a></code> | Validates whether a string is a valid ARN for the NetworkAnalyzerConfiguration resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidServiceProfileArn">isValidServiceProfileArn</a></code> | Validates whether a string is a valid ARN for the ServiceProfile resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidSidewalkAccountArn">isValidSidewalkAccountArn</a></code> | Validates whether a string is a valid ARN for the SidewalkAccount resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidThingArn">isValidThingArn</a></code> | Validates whether a string is a valid ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessDeviceArn">isValidWirelessDeviceArn</a></code> | Validates whether a string is a valid ARN for the WirelessDevice resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayArn">isValidWirelessGatewayArn</a></code> | Validates whether a string is a valid ARN for the WirelessGateway resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayTaskDefinitionArn">isValidWirelessGatewayTaskDefinitionArn</a></code> | Validates whether a string is a valid ARN for the WirelessGatewayTaskDefinition resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.multicastGroup">multicastGroup</a></code> | Builds an ARN for the MulticastGroup resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.networkAnalyzerConfiguration">networkAnalyzerConfiguration</a></code> | Builds an ARN for the NetworkAnalyzerConfiguration resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseCertArn">parseCertArn</a></code> | Parses a cert ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseDestinationArn">parseDestinationArn</a></code> | Parses a Destination ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseDeviceProfileArn">parseDeviceProfileArn</a></code> | Parses a DeviceProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseFuotaTaskArn">parseFuotaTaskArn</a></code> | Parses a FuotaTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseImportTaskArn">parseImportTaskArn</a></code> | Parses a ImportTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseMulticastGroupArn">parseMulticastGroupArn</a></code> | Parses a MulticastGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseNetworkAnalyzerConfigurationArn">parseNetworkAnalyzerConfigurationArn</a></code> | Parses a NetworkAnalyzerConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseServiceProfileArn">parseServiceProfileArn</a></code> | Parses a ServiceProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseSidewalkAccountArn">parseSidewalkAccountArn</a></code> | Parses a SidewalkAccount ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseThingArn">parseThingArn</a></code> | Parses a thing ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessDeviceArn">parseWirelessDeviceArn</a></code> | Parses a WirelessDevice ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayArn">parseWirelessGatewayArn</a></code> | Parses a WirelessGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayTaskDefinitionArn">parseWirelessGatewayTaskDefinitionArn</a></code> | Parses a WirelessGatewayTaskDefinition ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.serviceProfile">serviceProfile</a></code> | Builds an ARN for the ServiceProfile resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.sidewalkAccount">sidewalkAccount</a></code> | Builds an ARN for the SidewalkAccount resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.thing">thing</a></code> | Builds an ARN for the thing resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessDevice">wirelessDevice</a></code> | Builds an ARN for the WirelessDevice resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGateway">wirelessGateway</a></code> | Builds an ARN for the WirelessGateway resource. |
| <code><a href="#@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGatewayTaskDefinition">wirelessGatewayTaskDefinition</a></code> | Builds an ARN for the WirelessGatewayTaskDefinition resource. |

---

##### `cert` <a name="cert" id="@cdk_utils/iam.iotwireless.IotwirelessResources.cert"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.cert(props: IotwirelessCertArnProps)
```

Builds an ARN for the cert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.cert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessCertArnProps">IotwirelessCertArnProps</a>

---

##### `destination` <a name="destination" id="@cdk_utils/iam.iotwireless.IotwirelessResources.destination"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.destination(props: IotwirelessDestinationArnProps)
```

Builds an ARN for the Destination resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.destination.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessDestinationArnProps">IotwirelessDestinationArnProps</a>

---

##### `deviceProfile` <a name="deviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessResources.deviceProfile"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.deviceProfile(props: IotwirelessDeviceProfileArnProps)
```

Builds an ARN for the DeviceProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.deviceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessDeviceProfileArnProps">IotwirelessDeviceProfileArnProps</a>

---

##### `fuotaTask` <a name="fuotaTask" id="@cdk_utils/iam.iotwireless.IotwirelessResources.fuotaTask"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.fuotaTask(props: IotwirelessFuotaTaskArnProps)
```

Builds an ARN for the FuotaTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.fuotaTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessFuotaTaskArnProps">IotwirelessFuotaTaskArnProps</a>

---

##### `importTask` <a name="importTask" id="@cdk_utils/iam.iotwireless.IotwirelessResources.importTask"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.importTask(props: IotwirelessImportTaskArnProps)
```

Builds an ARN for the ImportTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.importTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessImportTaskArnProps">IotwirelessImportTaskArnProps</a>

---

##### `isValidCertArn` <a name="isValidCertArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidCertArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidCertArn(arn: string)
```

Validates whether a string is a valid ARN for the cert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidCertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDestinationArn` <a name="isValidDestinationArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDestinationArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidDestinationArn(arn: string)
```

Validates whether a string is a valid ARN for the Destination resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceProfileArn` <a name="isValidDeviceProfileArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDeviceProfileArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidDeviceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the DeviceProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidDeviceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFuotaTaskArn` <a name="isValidFuotaTaskArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidFuotaTaskArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidFuotaTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the FuotaTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidFuotaTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidImportTaskArn` <a name="isValidImportTaskArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidImportTaskArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidImportTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the ImportTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidImportTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMulticastGroupArn` <a name="isValidMulticastGroupArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidMulticastGroupArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidMulticastGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the MulticastGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidMulticastGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkAnalyzerConfigurationArn` <a name="isValidNetworkAnalyzerConfigurationArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidNetworkAnalyzerConfigurationArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidNetworkAnalyzerConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the NetworkAnalyzerConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidNetworkAnalyzerConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceProfileArn` <a name="isValidServiceProfileArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidServiceProfileArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidServiceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the ServiceProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidServiceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSidewalkAccountArn` <a name="isValidSidewalkAccountArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidSidewalkAccountArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidSidewalkAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the SidewalkAccount resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidSidewalkAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidThingArn` <a name="isValidThingArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidThingArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidThingArn(arn: string)
```

Validates whether a string is a valid ARN for the thing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidThingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWirelessDeviceArn` <a name="isValidWirelessDeviceArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessDeviceArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidWirelessDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the WirelessDevice resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWirelessGatewayArn` <a name="isValidWirelessGatewayArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidWirelessGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the WirelessGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWirelessGatewayTaskDefinitionArn` <a name="isValidWirelessGatewayTaskDefinitionArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayTaskDefinitionArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.isValidWirelessGatewayTaskDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the WirelessGatewayTaskDefinition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.isValidWirelessGatewayTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `multicastGroup` <a name="multicastGroup" id="@cdk_utils/iam.iotwireless.IotwirelessResources.multicastGroup"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.multicastGroup(props: IotwirelessMulticastGroupArnProps)
```

Builds an ARN for the MulticastGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.multicastGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessMulticastGroupArnProps">IotwirelessMulticastGroupArnProps</a>

---

##### `networkAnalyzerConfiguration` <a name="networkAnalyzerConfiguration" id="@cdk_utils/iam.iotwireless.IotwirelessResources.networkAnalyzerConfiguration"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.networkAnalyzerConfiguration(props: IotwirelessNetworkAnalyzerConfigurationArnProps)
```

Builds an ARN for the NetworkAnalyzerConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.networkAnalyzerConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessNetworkAnalyzerConfigurationArnProps">IotwirelessNetworkAnalyzerConfigurationArnProps</a>

---

##### `parseCertArn` <a name="parseCertArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseCertArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseCertArn(arn: string)
```

Parses a cert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseCertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDestinationArn` <a name="parseDestinationArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseDestinationArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseDestinationArn(arn: string)
```

Parses a Destination ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseDestinationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceProfileArn` <a name="parseDeviceProfileArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseDeviceProfileArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseDeviceProfileArn(arn: string)
```

Parses a DeviceProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseDeviceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFuotaTaskArn` <a name="parseFuotaTaskArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseFuotaTaskArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseFuotaTaskArn(arn: string)
```

Parses a FuotaTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseFuotaTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseImportTaskArn` <a name="parseImportTaskArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseImportTaskArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseImportTaskArn(arn: string)
```

Parses a ImportTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseImportTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMulticastGroupArn` <a name="parseMulticastGroupArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseMulticastGroupArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseMulticastGroupArn(arn: string)
```

Parses a MulticastGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseMulticastGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkAnalyzerConfigurationArn` <a name="parseNetworkAnalyzerConfigurationArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseNetworkAnalyzerConfigurationArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseNetworkAnalyzerConfigurationArn(arn: string)
```

Parses a NetworkAnalyzerConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseNetworkAnalyzerConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceProfileArn` <a name="parseServiceProfileArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseServiceProfileArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseServiceProfileArn(arn: string)
```

Parses a ServiceProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseServiceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSidewalkAccountArn` <a name="parseSidewalkAccountArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseSidewalkAccountArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseSidewalkAccountArn(arn: string)
```

Parses a SidewalkAccount ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseSidewalkAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseThingArn` <a name="parseThingArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseThingArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseThingArn(arn: string)
```

Parses a thing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseThingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWirelessDeviceArn` <a name="parseWirelessDeviceArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessDeviceArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseWirelessDeviceArn(arn: string)
```

Parses a WirelessDevice ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWirelessGatewayArn` <a name="parseWirelessGatewayArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseWirelessGatewayArn(arn: string)
```

Parses a WirelessGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWirelessGatewayTaskDefinitionArn` <a name="parseWirelessGatewayTaskDefinitionArn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayTaskDefinitionArn"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.parseWirelessGatewayTaskDefinitionArn(arn: string)
```

Parses a WirelessGatewayTaskDefinition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotwireless.IotwirelessResources.parseWirelessGatewayTaskDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `serviceProfile` <a name="serviceProfile" id="@cdk_utils/iam.iotwireless.IotwirelessResources.serviceProfile"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.serviceProfile(props: IotwirelessServiceProfileArnProps)
```

Builds an ARN for the ServiceProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.serviceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessServiceProfileArnProps">IotwirelessServiceProfileArnProps</a>

---

##### `sidewalkAccount` <a name="sidewalkAccount" id="@cdk_utils/iam.iotwireless.IotwirelessResources.sidewalkAccount"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.sidewalkAccount(props: IotwirelessSidewalkAccountArnProps)
```

Builds an ARN for the SidewalkAccount resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.sidewalkAccount.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessSidewalkAccountArnProps">IotwirelessSidewalkAccountArnProps</a>

---

##### `thing` <a name="thing" id="@cdk_utils/iam.iotwireless.IotwirelessResources.thing"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.thing(props: IotwirelessThingArnProps)
```

Builds an ARN for the thing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.thing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessThingArnProps">IotwirelessThingArnProps</a>

---

##### `wirelessDevice` <a name="wirelessDevice" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessDevice"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.wirelessDevice(props: IotwirelessWirelessDeviceArnProps)
```

Builds an ARN for the WirelessDevice resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessDevice.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessDeviceArnProps">IotwirelessWirelessDeviceArnProps</a>

---

##### `wirelessGateway` <a name="wirelessGateway" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGateway"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.wirelessGateway(props: IotwirelessWirelessGatewayArnProps)
```

Builds an ARN for the WirelessGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayArnProps">IotwirelessWirelessGatewayArnProps</a>

---

##### `wirelessGatewayTaskDefinition` <a name="wirelessGatewayTaskDefinition" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGatewayTaskDefinition"></a>

```typescript
import { iotwireless } from '@cdk_utils/iam'

iotwireless.IotwirelessResources.wirelessGatewayTaskDefinition(props: IotwirelessWirelessGatewayTaskDefinitionArnProps)
```

Builds an ARN for the WirelessGatewayTaskDefinition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotwireless.IotwirelessResources.wirelessGatewayTaskDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotwireless.IotwirelessWirelessGatewayTaskDefinitionArnProps">IotwirelessWirelessGatewayTaskDefinitionArnProps</a>

---




