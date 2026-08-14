# `devicefarm` Submodule <a name="`devicefarm` Submodule" id="@cdk_utils/iam.devicefarm"></a>


## Structs <a name="Structs" id="Structs"></a>

### DevicefarmArtifactArnComponents <a name="DevicefarmArtifactArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents"></a>

Parsed components of a artifact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmArtifactArnComponents: devicefarm.DevicefarmArtifactArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmArtifactArnProps <a name="DevicefarmArtifactArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps"></a>

Properties for building a artifact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmArtifactArnProps: devicefarm.DevicefarmArtifactArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmDeviceArnComponents <a name="DevicefarmDeviceArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDeviceArnComponents: devicefarm.DevicefarmDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmDeviceArnProps <a name="DevicefarmDeviceArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDeviceArnProps: devicefarm.DevicefarmDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmDeviceinstanceArnComponents <a name="DevicefarmDeviceinstanceArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents"></a>

Parsed components of a deviceinstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDeviceinstanceArnComponents: devicefarm.DevicefarmDeviceinstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmDeviceinstanceArnProps <a name="DevicefarmDeviceinstanceArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps"></a>

Properties for building a deviceinstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDeviceinstanceArnProps: devicefarm.DevicefarmDeviceinstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmDevicepoolArnComponents <a name="DevicefarmDevicepoolArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents"></a>

Parsed components of a devicepool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDevicepoolArnComponents: devicefarm.DevicefarmDevicepoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmDevicepoolArnProps <a name="DevicefarmDevicepoolArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps"></a>

Properties for building a devicepool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmDevicepoolArnProps: devicefarm.DevicefarmDevicepoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmInstanceprofileArnComponents <a name="DevicefarmInstanceprofileArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents"></a>

Parsed components of a instanceprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmInstanceprofileArnComponents: devicefarm.DevicefarmInstanceprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmInstanceprofileArnProps <a name="DevicefarmInstanceprofileArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps"></a>

Properties for building a instanceprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmInstanceprofileArnProps: devicefarm.DevicefarmInstanceprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmJobArnComponents <a name="DevicefarmJobArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents"></a>

Parsed components of a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmJobArnComponents: devicefarm.DevicefarmJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmJobArnProps <a name="DevicefarmJobArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps"></a>

Properties for building a job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmJobArnProps: devicefarm.DevicefarmJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmNetworkprofileArnComponents <a name="DevicefarmNetworkprofileArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents"></a>

Parsed components of a networkprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmNetworkprofileArnComponents: devicefarm.DevicefarmNetworkprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmNetworkprofileArnProps <a name="DevicefarmNetworkprofileArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps"></a>

Properties for building a networkprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmNetworkprofileArnProps: devicefarm.DevicefarmNetworkprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmProjectArnComponents <a name="DevicefarmProjectArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmProjectArnComponents: devicefarm.DevicefarmProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmProjectArnProps <a name="DevicefarmProjectArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmProjectArnProps: devicefarm.DevicefarmProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmRunArnComponents <a name="DevicefarmRunArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents"></a>

Parsed components of a run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmRunArnComponents: devicefarm.DevicefarmRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmRunArnProps <a name="DevicefarmRunArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps"></a>

Properties for building a run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmRunArnProps: devicefarm.DevicefarmRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmSampleArnComponents <a name="DevicefarmSampleArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents"></a>

Parsed components of a sample ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSampleArnComponents: devicefarm.DevicefarmSampleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmSampleArnProps <a name="DevicefarmSampleArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps"></a>

Properties for building a sample ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSampleArnProps: devicefarm.DevicefarmSampleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmSessionArnComponents <a name="DevicefarmSessionArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSessionArnComponents: devicefarm.DevicefarmSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmSessionArnProps <a name="DevicefarmSessionArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSessionArnProps: devicefarm.DevicefarmSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmSuiteArnComponents <a name="DevicefarmSuiteArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents"></a>

Parsed components of a suite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSuiteArnComponents: devicefarm.DevicefarmSuiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmSuiteArnProps <a name="DevicefarmSuiteArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps"></a>

Properties for building a suite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmSuiteArnProps: devicefarm.DevicefarmSuiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmTestArnComponents <a name="DevicefarmTestArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents"></a>

Parsed components of a test ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestArnComponents: devicefarm.DevicefarmTestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmTestArnProps <a name="DevicefarmTestArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps"></a>

Properties for building a test ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestArnProps: devicefarm.DevicefarmTestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmTestgridProjectArnComponents <a name="DevicefarmTestgridProjectArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents"></a>

Parsed components of a testgrid-project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestgridProjectArnComponents: devicefarm.DevicefarmTestgridProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmTestgridProjectArnProps <a name="DevicefarmTestgridProjectArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps"></a>

Properties for building a testgrid-project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestgridProjectArnProps: devicefarm.DevicefarmTestgridProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmTestgridSessionArnComponents <a name="DevicefarmTestgridSessionArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents"></a>

Parsed components of a testgrid-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestgridSessionArnComponents: devicefarm.DevicefarmTestgridSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmTestgridSessionArnProps <a name="DevicefarmTestgridSessionArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps"></a>

Properties for building a testgrid-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmTestgridSessionArnProps: devicefarm.DevicefarmTestgridSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmUploadArnComponents <a name="DevicefarmUploadArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents"></a>

Parsed components of a upload ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmUploadArnComponents: devicefarm.DevicefarmUploadArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmUploadArnProps <a name="DevicefarmUploadArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps"></a>

Properties for building a upload ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmUploadArnProps: devicefarm.DevicefarmUploadArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DevicefarmVpceconfigurationArnComponents <a name="DevicefarmVpceconfigurationArnComponents" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents"></a>

Parsed components of a vpceconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmVpceconfigurationArnComponents: devicefarm.DevicefarmVpceconfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### DevicefarmVpceconfigurationArnProps <a name="DevicefarmVpceconfigurationArnProps" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps"></a>

Properties for building a vpceconfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

const devicefarmVpceconfigurationArnProps: devicefarm.DevicefarmVpceconfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DevicefarmActions <a name="DevicefarmActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions"></a>

IAM action constants for the devicefarm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devicefarm.DevicefarmActions.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

new devicefarm.DevicefarmActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] devicefarm:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevice">actionGetDevice</a></code> | <code>string</code> | [Read] devicefarm:GetDevice. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDeviceInstance">actionGetDeviceInstance</a></code> | <code>string</code> | [Read] devicefarm:GetDeviceInstance. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevicePool">actionGetDevicePool</a></code> | <code>string</code> | [Read] devicefarm:GetDevicePool. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevicePoolCompatibility">actionGetDevicePoolCompatibility</a></code> | <code>string</code> | [Read] devicefarm:GetDevicePoolCompatibility. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetInstanceProfile">actionGetInstanceProfile</a></code> | <code>string</code> | [Read] devicefarm:GetInstanceProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] devicefarm:GetJob. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetNetworkProfile">actionGetNetworkProfile</a></code> | <code>string</code> | [Read] devicefarm:GetNetworkProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetOfferingStatus">actionGetOfferingStatus</a></code> | <code>string</code> | [Read] devicefarm:GetOfferingStatus. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetProject">actionGetProject</a></code> | <code>string</code> | [Read] devicefarm:GetProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetRemoteAccessSession">actionGetRemoteAccessSession</a></code> | <code>string</code> | [Read] devicefarm:GetRemoteAccessSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetRun">actionGetRun</a></code> | <code>string</code> | [Read] devicefarm:GetRun. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetSuite">actionGetSuite</a></code> | <code>string</code> | [Read] devicefarm:GetSuite. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTest">actionGetTest</a></code> | <code>string</code> | [Read] devicefarm:GetTest. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTestGridProject">actionGetTestGridProject</a></code> | <code>string</code> | [Read] devicefarm:GetTestGridProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTestGridSession">actionGetTestGridSession</a></code> | <code>string</code> | [Read] devicefarm:GetTestGridSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetUpload">actionGetUpload</a></code> | <code>string</code> | [Read] devicefarm:GetUpload. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetVPCEConfiguration">actionGetVPCEConfiguration</a></code> | <code>string</code> | [Read] devicefarm:GetVPCEConfiguration. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateDevicePool">CreateDevicePool</a></code> | <code>string</code> | [Write] devicefarm:CreateDevicePool. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string</code> | [Write] devicefarm:CreateInstanceProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateNetworkProfile">CreateNetworkProfile</a></code> | <code>string</code> | [Write] devicefarm:CreateNetworkProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateProject">CreateProject</a></code> | <code>string</code> | [Write] devicefarm:CreateProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateRemoteAccessSession">CreateRemoteAccessSession</a></code> | <code>string</code> | [Write] devicefarm:CreateRemoteAccessSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateTestGridProject">CreateTestGridProject</a></code> | <code>string</code> | [Write] devicefarm:CreateTestGridProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateTestGridUrl">CreateTestGridUrl</a></code> | <code>string</code> | [Write] devicefarm:CreateTestGridUrl. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateUpload">CreateUpload</a></code> | <code>string</code> | [Write] devicefarm:CreateUpload. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateVPCEConfiguration">CreateVPCEConfiguration</a></code> | <code>string</code> | [Write] devicefarm:CreateVPCEConfiguration. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteDevicePool">DeleteDevicePool</a></code> | <code>string</code> | [Write] devicefarm:DeleteDevicePool. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string</code> | [Write] devicefarm:DeleteInstanceProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteNetworkProfile">DeleteNetworkProfile</a></code> | <code>string</code> | [Write] devicefarm:DeleteNetworkProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteProject">DeleteProject</a></code> | <code>string</code> | [Write] devicefarm:DeleteProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteRemoteAccessSession">DeleteRemoteAccessSession</a></code> | <code>string</code> | [Write] devicefarm:DeleteRemoteAccessSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteRun">DeleteRun</a></code> | <code>string</code> | [Write] devicefarm:DeleteRun. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteTestGridProject">DeleteTestGridProject</a></code> | <code>string</code> | [Write] devicefarm:DeleteTestGridProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteUpload">DeleteUpload</a></code> | <code>string</code> | [Write] devicefarm:DeleteUpload. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteVPCEConfiguration">DeleteVPCEConfiguration</a></code> | <code>string</code> | [Write] devicefarm:DeleteVPCEConfiguration. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.InstallToRemoteAccessSession">InstallToRemoteAccessSession</a></code> | <code>string</code> | [Write] devicefarm:InstallToRemoteAccessSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListArtifacts">ListArtifacts</a></code> | <code>string</code> | [List] devicefarm:ListArtifacts. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDeviceInstances">ListDeviceInstances</a></code> | <code>string</code> | [List] devicefarm:ListDeviceInstances. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDevicePools">ListDevicePools</a></code> | <code>string</code> | [List] devicefarm:ListDevicePools. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] devicefarm:ListDevices. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListInstanceProfiles">ListInstanceProfiles</a></code> | <code>string</code> | [List] devicefarm:ListInstanceProfiles. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] devicefarm:ListJobs. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListNetworkProfiles">ListNetworkProfiles</a></code> | <code>string</code> | [List] devicefarm:ListNetworkProfiles. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferingPromotions">ListOfferingPromotions</a></code> | <code>string</code> | [List] devicefarm:ListOfferingPromotions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferings">ListOfferings</a></code> | <code>string</code> | [List] devicefarm:ListOfferings. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferingTransactions">ListOfferingTransactions</a></code> | <code>string</code> | [List] devicefarm:ListOfferingTransactions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListProjects">ListProjects</a></code> | <code>string</code> | [List] devicefarm:ListProjects. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListRemoteAccessSessions">ListRemoteAccessSessions</a></code> | <code>string</code> | [List] devicefarm:ListRemoteAccessSessions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListRuns">ListRuns</a></code> | <code>string</code> | [List] devicefarm:ListRuns. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListSamples">ListSamples</a></code> | <code>string</code> | [List] devicefarm:ListSamples. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListSuites">ListSuites</a></code> | <code>string</code> | [List] devicefarm:ListSuites. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] devicefarm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridProjects">ListTestGridProjects</a></code> | <code>string</code> | [List] devicefarm:ListTestGridProjects. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessionActions">ListTestGridSessionActions</a></code> | <code>string</code> | [List] devicefarm:ListTestGridSessionActions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessionArtifacts">ListTestGridSessionArtifacts</a></code> | <code>string</code> | [List] devicefarm:ListTestGridSessionArtifacts. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessions">ListTestGridSessions</a></code> | <code>string</code> | [List] devicefarm:ListTestGridSessions. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTests">ListTests</a></code> | <code>string</code> | [List] devicefarm:ListTests. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListUniqueProblems">ListUniqueProblems</a></code> | <code>string</code> | [List] devicefarm:ListUniqueProblems. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListUploads">ListUploads</a></code> | <code>string</code> | [List] devicefarm:ListUploads. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListVPCEConfigurations">ListVPCEConfigurations</a></code> | <code>string</code> | [List] devicefarm:ListVPCEConfigurations. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string</code> | [Write] devicefarm:PurchaseOffering. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.RenewOffering">RenewOffering</a></code> | <code>string</code> | [Write] devicefarm:RenewOffering. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.ScheduleRun">ScheduleRun</a></code> | <code>string</code> | [Write] devicefarm:ScheduleRun. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopJob">StopJob</a></code> | <code>string</code> | [Write] devicefarm:StopJob. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopRemoteAccessSession">StopRemoteAccessSession</a></code> | <code>string</code> | [Write] devicefarm:StopRemoteAccessSession. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopRun">StopRun</a></code> | <code>string</code> | [Write] devicefarm:StopRun. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] devicefarm:TagResource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] devicefarm:UntagResource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateDeviceInstance">UpdateDeviceInstance</a></code> | <code>string</code> | [Write] devicefarm:UpdateDeviceInstance. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateDevicePool">UpdateDevicePool</a></code> | <code>string</code> | [Write] devicefarm:UpdateDevicePool. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateInstanceProfile">UpdateInstanceProfile</a></code> | <code>string</code> | [Write] devicefarm:UpdateInstanceProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateNetworkProfile">UpdateNetworkProfile</a></code> | <code>string</code> | [Write] devicefarm:UpdateNetworkProfile. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateProject">UpdateProject</a></code> | <code>string</code> | [Write] devicefarm:UpdateProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateTestGridProject">UpdateTestGridProject</a></code> | <code>string</code> | [Write] devicefarm:UpdateTestGridProject. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateUpload">UpdateUpload</a></code> | <code>string</code> | [Write] devicefarm:UpdateUpload. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateVPCEConfiguration">UpdateVPCEConfiguration</a></code> | <code>string</code> | [Write] devicefarm:UpdateVPCEConfiguration. |

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] devicefarm:GetAccountSettings.

---

##### `actionGetDevice`<sup>Required</sup> <a name="actionGetDevice" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevice"></a>

```typescript
public readonly actionGetDevice: string;
```

- *Type:* string

[Read] devicefarm:GetDevice.

---

##### `actionGetDeviceInstance`<sup>Required</sup> <a name="actionGetDeviceInstance" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDeviceInstance"></a>

```typescript
public readonly actionGetDeviceInstance: string;
```

- *Type:* string

[Read] devicefarm:GetDeviceInstance.

---

##### `actionGetDevicePool`<sup>Required</sup> <a name="actionGetDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevicePool"></a>

```typescript
public readonly actionGetDevicePool: string;
```

- *Type:* string

[Read] devicefarm:GetDevicePool.

---

##### `actionGetDevicePoolCompatibility`<sup>Required</sup> <a name="actionGetDevicePoolCompatibility" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetDevicePoolCompatibility"></a>

```typescript
public readonly actionGetDevicePoolCompatibility: string;
```

- *Type:* string

[Read] devicefarm:GetDevicePoolCompatibility.

---

##### `actionGetInstanceProfile`<sup>Required</sup> <a name="actionGetInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetInstanceProfile"></a>

```typescript
public readonly actionGetInstanceProfile: string;
```

- *Type:* string

[Read] devicefarm:GetInstanceProfile.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] devicefarm:GetJob.

---

##### `actionGetNetworkProfile`<sup>Required</sup> <a name="actionGetNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetNetworkProfile"></a>

```typescript
public readonly actionGetNetworkProfile: string;
```

- *Type:* string

[Read] devicefarm:GetNetworkProfile.

---

##### `actionGetOfferingStatus`<sup>Required</sup> <a name="actionGetOfferingStatus" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetOfferingStatus"></a>

```typescript
public readonly actionGetOfferingStatus: string;
```

- *Type:* string

[Read] devicefarm:GetOfferingStatus.

---

##### `actionGetProject`<sup>Required</sup> <a name="actionGetProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetProject"></a>

```typescript
public readonly actionGetProject: string;
```

- *Type:* string

[Read] devicefarm:GetProject.

---

##### `actionGetRemoteAccessSession`<sup>Required</sup> <a name="actionGetRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetRemoteAccessSession"></a>

```typescript
public readonly actionGetRemoteAccessSession: string;
```

- *Type:* string

[Read] devicefarm:GetRemoteAccessSession.

---

##### `actionGetRun`<sup>Required</sup> <a name="actionGetRun" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetRun"></a>

```typescript
public readonly actionGetRun: string;
```

- *Type:* string

[Read] devicefarm:GetRun.

---

##### `actionGetSuite`<sup>Required</sup> <a name="actionGetSuite" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetSuite"></a>

```typescript
public readonly actionGetSuite: string;
```

- *Type:* string

[Read] devicefarm:GetSuite.

---

##### `actionGetTest`<sup>Required</sup> <a name="actionGetTest" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTest"></a>

```typescript
public readonly actionGetTest: string;
```

- *Type:* string

[Read] devicefarm:GetTest.

---

##### `actionGetTestGridProject`<sup>Required</sup> <a name="actionGetTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTestGridProject"></a>

```typescript
public readonly actionGetTestGridProject: string;
```

- *Type:* string

[Read] devicefarm:GetTestGridProject.

---

##### `actionGetTestGridSession`<sup>Required</sup> <a name="actionGetTestGridSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetTestGridSession"></a>

```typescript
public readonly actionGetTestGridSession: string;
```

- *Type:* string

[Read] devicefarm:GetTestGridSession.

---

##### `actionGetUpload`<sup>Required</sup> <a name="actionGetUpload" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetUpload"></a>

```typescript
public readonly actionGetUpload: string;
```

- *Type:* string

[Read] devicefarm:GetUpload.

---

##### `actionGetVPCEConfiguration`<sup>Required</sup> <a name="actionGetVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.actionGetVPCEConfiguration"></a>

```typescript
public readonly actionGetVPCEConfiguration: string;
```

- *Type:* string

[Read] devicefarm:GetVPCEConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDevicePool`<sup>Required</sup> <a name="CreateDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateDevicePool"></a>

```typescript
public readonly CreateDevicePool: string;
```

- *Type:* string

[Write] devicefarm:CreateDevicePool.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string;
```

- *Type:* string

[Write] devicefarm:CreateInstanceProfile.

---

##### `CreateNetworkProfile`<sup>Required</sup> <a name="CreateNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateNetworkProfile"></a>

```typescript
public readonly CreateNetworkProfile: string;
```

- *Type:* string

[Write] devicefarm:CreateNetworkProfile.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateProject"></a>

```typescript
public readonly CreateProject: string;
```

- *Type:* string

[Write] devicefarm:CreateProject.

---

##### `CreateRemoteAccessSession`<sup>Required</sup> <a name="CreateRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateRemoteAccessSession"></a>

```typescript
public readonly CreateRemoteAccessSession: string;
```

- *Type:* string

[Write] devicefarm:CreateRemoteAccessSession.

---

##### `CreateTestGridProject`<sup>Required</sup> <a name="CreateTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateTestGridProject"></a>

```typescript
public readonly CreateTestGridProject: string;
```

- *Type:* string

[Write] devicefarm:CreateTestGridProject.

---

##### `CreateTestGridUrl`<sup>Required</sup> <a name="CreateTestGridUrl" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateTestGridUrl"></a>

```typescript
public readonly CreateTestGridUrl: string;
```

- *Type:* string

[Write] devicefarm:CreateTestGridUrl.

---

##### `CreateUpload`<sup>Required</sup> <a name="CreateUpload" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateUpload"></a>

```typescript
public readonly CreateUpload: string;
```

- *Type:* string

[Write] devicefarm:CreateUpload.

---

##### `CreateVPCEConfiguration`<sup>Required</sup> <a name="CreateVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.CreateVPCEConfiguration"></a>

```typescript
public readonly CreateVPCEConfiguration: string;
```

- *Type:* string

[Write] devicefarm:CreateVPCEConfiguration.

---

##### `DeleteDevicePool`<sup>Required</sup> <a name="DeleteDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteDevicePool"></a>

```typescript
public readonly DeleteDevicePool: string;
```

- *Type:* string

[Write] devicefarm:DeleteDevicePool.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string;
```

- *Type:* string

[Write] devicefarm:DeleteInstanceProfile.

---

##### `DeleteNetworkProfile`<sup>Required</sup> <a name="DeleteNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteNetworkProfile"></a>

```typescript
public readonly DeleteNetworkProfile: string;
```

- *Type:* string

[Write] devicefarm:DeleteNetworkProfile.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string;
```

- *Type:* string

[Write] devicefarm:DeleteProject.

---

##### `DeleteRemoteAccessSession`<sup>Required</sup> <a name="DeleteRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteRemoteAccessSession"></a>

```typescript
public readonly DeleteRemoteAccessSession: string;
```

- *Type:* string

[Write] devicefarm:DeleteRemoteAccessSession.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string;
```

- *Type:* string

[Write] devicefarm:DeleteRun.

---

##### `DeleteTestGridProject`<sup>Required</sup> <a name="DeleteTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteTestGridProject"></a>

```typescript
public readonly DeleteTestGridProject: string;
```

- *Type:* string

[Write] devicefarm:DeleteTestGridProject.

---

##### `DeleteUpload`<sup>Required</sup> <a name="DeleteUpload" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteUpload"></a>

```typescript
public readonly DeleteUpload: string;
```

- *Type:* string

[Write] devicefarm:DeleteUpload.

---

##### `DeleteVPCEConfiguration`<sup>Required</sup> <a name="DeleteVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.DeleteVPCEConfiguration"></a>

```typescript
public readonly DeleteVPCEConfiguration: string;
```

- *Type:* string

[Write] devicefarm:DeleteVPCEConfiguration.

---

##### `InstallToRemoteAccessSession`<sup>Required</sup> <a name="InstallToRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.InstallToRemoteAccessSession"></a>

```typescript
public readonly InstallToRemoteAccessSession: string;
```

- *Type:* string

[Write] devicefarm:InstallToRemoteAccessSession.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string;
```

- *Type:* string

[List] devicefarm:ListArtifacts.

---

##### `ListDeviceInstances`<sup>Required</sup> <a name="ListDeviceInstances" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDeviceInstances"></a>

```typescript
public readonly ListDeviceInstances: string;
```

- *Type:* string

[List] devicefarm:ListDeviceInstances.

---

##### `ListDevicePools`<sup>Required</sup> <a name="ListDevicePools" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDevicePools"></a>

```typescript
public readonly ListDevicePools: string;
```

- *Type:* string

[List] devicefarm:ListDevicePools.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] devicefarm:ListDevices.

---

##### `ListInstanceProfiles`<sup>Required</sup> <a name="ListInstanceProfiles" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListInstanceProfiles"></a>

```typescript
public readonly ListInstanceProfiles: string;
```

- *Type:* string

[List] devicefarm:ListInstanceProfiles.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] devicefarm:ListJobs.

---

##### `ListNetworkProfiles`<sup>Required</sup> <a name="ListNetworkProfiles" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListNetworkProfiles"></a>

```typescript
public readonly ListNetworkProfiles: string;
```

- *Type:* string

[List] devicefarm:ListNetworkProfiles.

---

##### `ListOfferingPromotions`<sup>Required</sup> <a name="ListOfferingPromotions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferingPromotions"></a>

```typescript
public readonly ListOfferingPromotions: string;
```

- *Type:* string

[List] devicefarm:ListOfferingPromotions.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string;
```

- *Type:* string

[List] devicefarm:ListOfferings.

---

##### `ListOfferingTransactions`<sup>Required</sup> <a name="ListOfferingTransactions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListOfferingTransactions"></a>

```typescript
public readonly ListOfferingTransactions: string;
```

- *Type:* string

[List] devicefarm:ListOfferingTransactions.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListProjects"></a>

```typescript
public readonly ListProjects: string;
```

- *Type:* string

[List] devicefarm:ListProjects.

---

##### `ListRemoteAccessSessions`<sup>Required</sup> <a name="ListRemoteAccessSessions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListRemoteAccessSessions"></a>

```typescript
public readonly ListRemoteAccessSessions: string;
```

- *Type:* string

[List] devicefarm:ListRemoteAccessSessions.

---

##### `ListRuns`<sup>Required</sup> <a name="ListRuns" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListRuns"></a>

```typescript
public readonly ListRuns: string;
```

- *Type:* string

[List] devicefarm:ListRuns.

---

##### `ListSamples`<sup>Required</sup> <a name="ListSamples" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListSamples"></a>

```typescript
public readonly ListSamples: string;
```

- *Type:* string

[List] devicefarm:ListSamples.

---

##### `ListSuites`<sup>Required</sup> <a name="ListSuites" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListSuites"></a>

```typescript
public readonly ListSuites: string;
```

- *Type:* string

[List] devicefarm:ListSuites.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] devicefarm:ListTagsForResource.

---

##### `ListTestGridProjects`<sup>Required</sup> <a name="ListTestGridProjects" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridProjects"></a>

```typescript
public readonly ListTestGridProjects: string;
```

- *Type:* string

[List] devicefarm:ListTestGridProjects.

---

##### `ListTestGridSessionActions`<sup>Required</sup> <a name="ListTestGridSessionActions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessionActions"></a>

```typescript
public readonly ListTestGridSessionActions: string;
```

- *Type:* string

[List] devicefarm:ListTestGridSessionActions.

---

##### `ListTestGridSessionArtifacts`<sup>Required</sup> <a name="ListTestGridSessionArtifacts" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessionArtifacts"></a>

```typescript
public readonly ListTestGridSessionArtifacts: string;
```

- *Type:* string

[List] devicefarm:ListTestGridSessionArtifacts.

---

##### `ListTestGridSessions`<sup>Required</sup> <a name="ListTestGridSessions" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTestGridSessions"></a>

```typescript
public readonly ListTestGridSessions: string;
```

- *Type:* string

[List] devicefarm:ListTestGridSessions.

---

##### `ListTests`<sup>Required</sup> <a name="ListTests" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListTests"></a>

```typescript
public readonly ListTests: string;
```

- *Type:* string

[List] devicefarm:ListTests.

---

##### `ListUniqueProblems`<sup>Required</sup> <a name="ListUniqueProblems" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListUniqueProblems"></a>

```typescript
public readonly ListUniqueProblems: string;
```

- *Type:* string

[List] devicefarm:ListUniqueProblems.

---

##### `ListUploads`<sup>Required</sup> <a name="ListUploads" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListUploads"></a>

```typescript
public readonly ListUploads: string;
```

- *Type:* string

[List] devicefarm:ListUploads.

---

##### `ListVPCEConfigurations`<sup>Required</sup> <a name="ListVPCEConfigurations" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ListVPCEConfigurations"></a>

```typescript
public readonly ListVPCEConfigurations: string;
```

- *Type:* string

[List] devicefarm:ListVPCEConfigurations.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string;
```

- *Type:* string

[Write] devicefarm:PurchaseOffering.

---

##### `RenewOffering`<sup>Required</sup> <a name="RenewOffering" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.RenewOffering"></a>

```typescript
public readonly RenewOffering: string;
```

- *Type:* string

[Write] devicefarm:RenewOffering.

---

##### `ScheduleRun`<sup>Required</sup> <a name="ScheduleRun" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.ScheduleRun"></a>

```typescript
public readonly ScheduleRun: string;
```

- *Type:* string

[Write] devicefarm:ScheduleRun.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StopJob`<sup>Required</sup> <a name="StopJob" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopJob"></a>

```typescript
public readonly StopJob: string;
```

- *Type:* string

[Write] devicefarm:StopJob.

---

##### `StopRemoteAccessSession`<sup>Required</sup> <a name="StopRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopRemoteAccessSession"></a>

```typescript
public readonly StopRemoteAccessSession: string;
```

- *Type:* string

[Write] devicefarm:StopRemoteAccessSession.

---

##### `StopRun`<sup>Required</sup> <a name="StopRun" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.StopRun"></a>

```typescript
public readonly StopRun: string;
```

- *Type:* string

[Write] devicefarm:StopRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] devicefarm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] devicefarm:UntagResource.

---

##### `UpdateDeviceInstance`<sup>Required</sup> <a name="UpdateDeviceInstance" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateDeviceInstance"></a>

```typescript
public readonly UpdateDeviceInstance: string;
```

- *Type:* string

[Write] devicefarm:UpdateDeviceInstance.

---

##### `UpdateDevicePool`<sup>Required</sup> <a name="UpdateDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateDevicePool"></a>

```typescript
public readonly UpdateDevicePool: string;
```

- *Type:* string

[Write] devicefarm:UpdateDevicePool.

---

##### `UpdateInstanceProfile`<sup>Required</sup> <a name="UpdateInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateInstanceProfile"></a>

```typescript
public readonly UpdateInstanceProfile: string;
```

- *Type:* string

[Write] devicefarm:UpdateInstanceProfile.

---

##### `UpdateNetworkProfile`<sup>Required</sup> <a name="UpdateNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateNetworkProfile"></a>

```typescript
public readonly UpdateNetworkProfile: string;
```

- *Type:* string

[Write] devicefarm:UpdateNetworkProfile.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string;
```

- *Type:* string

[Write] devicefarm:UpdateProject.

---

##### `UpdateTestGridProject`<sup>Required</sup> <a name="UpdateTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateTestGridProject"></a>

```typescript
public readonly UpdateTestGridProject: string;
```

- *Type:* string

[Write] devicefarm:UpdateTestGridProject.

---

##### `UpdateUpload`<sup>Required</sup> <a name="UpdateUpload" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateUpload"></a>

```typescript
public readonly UpdateUpload: string;
```

- *Type:* string

[Write] devicefarm:UpdateUpload.

---

##### `UpdateVPCEConfiguration`<sup>Required</sup> <a name="UpdateVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmActions.property.UpdateVPCEConfiguration"></a>

```typescript
public readonly UpdateVPCEConfiguration: string;
```

- *Type:* string

[Write] devicefarm:UpdateVPCEConfiguration.

---

### DevicefarmConditions <a name="DevicefarmConditions" id="@cdk_utils/iam.devicefarm.DevicefarmConditions"></a>

Condition key constants and builders for devicefarm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

new devicefarm.DevicefarmConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.requestTag"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.resourceTag"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.tagKeys"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.devicefarm.DevicefarmConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DevicefarmOperations <a name="DevicefarmOperations" id="@cdk_utils/iam.devicefarm.DevicefarmOperations"></a>

API operation to required IAM actions mapping for devicefarm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

new devicefarm.DevicefarmOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateDevicePool">CreateDevicePool</a></code> | <code>string[]</code> | IAM actions required for the CreateDevicePool API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateInstanceProfile">CreateInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateNetworkProfile">CreateNetworkProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateNetworkProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateRemoteAccessSession">CreateRemoteAccessSession</a></code> | <code>string[]</code> | IAM actions required for the CreateRemoteAccessSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateTestGridProject">CreateTestGridProject</a></code> | <code>string[]</code> | IAM actions required for the CreateTestGridProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateTestGridUrl">CreateTestGridUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateTestGridUrl API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateUpload">CreateUpload</a></code> | <code>string[]</code> | IAM actions required for the CreateUpload API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateVPCEConfiguration">CreateVPCEConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateVPCEConfiguration API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteDevicePool">DeleteDevicePool</a></code> | <code>string[]</code> | IAM actions required for the DeleteDevicePool API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteInstanceProfile">DeleteInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteNetworkProfile">DeleteNetworkProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteRemoteAccessSession">DeleteRemoteAccessSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteRemoteAccessSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteRun">DeleteRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteRun API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteTestGridProject">DeleteTestGridProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteTestGridProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteUpload">DeleteUpload</a></code> | <code>string[]</code> | IAM actions required for the DeleteUpload API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteVPCEConfiguration">DeleteVPCEConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteVPCEConfiguration API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.InstallToRemoteAccessSession">InstallToRemoteAccessSession</a></code> | <code>string[]</code> | IAM actions required for the InstallToRemoteAccessSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListArtifacts">ListArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListArtifacts API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDeviceInstances">ListDeviceInstances</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceInstances API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDevicePools">ListDevicePools</a></code> | <code>string[]</code> | IAM actions required for the ListDevicePools API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDevices">ListDevices</a></code> | <code>string[]</code> | IAM actions required for the ListDevices API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListInstanceProfiles">ListInstanceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceProfiles API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListNetworkProfiles">ListNetworkProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListNetworkProfiles API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferingPromotions">ListOfferingPromotions</a></code> | <code>string[]</code> | IAM actions required for the ListOfferingPromotions API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferings">ListOfferings</a></code> | <code>string[]</code> | IAM actions required for the ListOfferings API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferingTransactions">ListOfferingTransactions</a></code> | <code>string[]</code> | IAM actions required for the ListOfferingTransactions API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListRemoteAccessSessions">ListRemoteAccessSessions</a></code> | <code>string[]</code> | IAM actions required for the ListRemoteAccessSessions API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListRuns">ListRuns</a></code> | <code>string[]</code> | IAM actions required for the ListRuns API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListSamples">ListSamples</a></code> | <code>string[]</code> | IAM actions required for the ListSamples API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListSuites">ListSuites</a></code> | <code>string[]</code> | IAM actions required for the ListSuites API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridProjects">ListTestGridProjects</a></code> | <code>string[]</code> | IAM actions required for the ListTestGridProjects API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessionActions">ListTestGridSessionActions</a></code> | <code>string[]</code> | IAM actions required for the ListTestGridSessionActions API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessionArtifacts">ListTestGridSessionArtifacts</a></code> | <code>string[]</code> | IAM actions required for the ListTestGridSessionArtifacts API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessions">ListTestGridSessions</a></code> | <code>string[]</code> | IAM actions required for the ListTestGridSessions API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTests">ListTests</a></code> | <code>string[]</code> | IAM actions required for the ListTests API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListUniqueProblems">ListUniqueProblems</a></code> | <code>string[]</code> | IAM actions required for the ListUniqueProblems API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListUploads">ListUploads</a></code> | <code>string[]</code> | IAM actions required for the ListUploads API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListVPCEConfigurations">ListVPCEConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListVPCEConfigurations API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevice">opGetDevice</a></code> | <code>string[]</code> | IAM actions required for the GetDevice API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDeviceInstance">opGetDeviceInstance</a></code> | <code>string[]</code> | IAM actions required for the GetDeviceInstance API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevicePool">opGetDevicePool</a></code> | <code>string[]</code> | IAM actions required for the GetDevicePool API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevicePoolCompatibility">opGetDevicePoolCompatibility</a></code> | <code>string[]</code> | IAM actions required for the GetDevicePoolCompatibility API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetInstanceProfile">opGetInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetNetworkProfile">opGetNetworkProfile</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetOfferingStatus">opGetOfferingStatus</a></code> | <code>string[]</code> | IAM actions required for the GetOfferingStatus API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetProject">opGetProject</a></code> | <code>string[]</code> | IAM actions required for the GetProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetRemoteAccessSession">opGetRemoteAccessSession</a></code> | <code>string[]</code> | IAM actions required for the GetRemoteAccessSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetRun">opGetRun</a></code> | <code>string[]</code> | IAM actions required for the GetRun API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetSuite">opGetSuite</a></code> | <code>string[]</code> | IAM actions required for the GetSuite API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTest">opGetTest</a></code> | <code>string[]</code> | IAM actions required for the GetTest API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTestGridProject">opGetTestGridProject</a></code> | <code>string[]</code> | IAM actions required for the GetTestGridProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTestGridSession">opGetTestGridSession</a></code> | <code>string[]</code> | IAM actions required for the GetTestGridSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetUpload">opGetUpload</a></code> | <code>string[]</code> | IAM actions required for the GetUpload API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetVPCEConfiguration">opGetVPCEConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetVPCEConfiguration API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseOffering API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.RenewOffering">RenewOffering</a></code> | <code>string[]</code> | IAM actions required for the RenewOffering API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ScheduleRun">ScheduleRun</a></code> | <code>string[]</code> | IAM actions required for the ScheduleRun API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopJob">StopJob</a></code> | <code>string[]</code> | IAM actions required for the StopJob API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopRemoteAccessSession">StopRemoteAccessSession</a></code> | <code>string[]</code> | IAM actions required for the StopRemoteAccessSession API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopRun">StopRun</a></code> | <code>string[]</code> | IAM actions required for the StopRun API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateDeviceInstance">UpdateDeviceInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeviceInstance API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateDevicePool">UpdateDevicePool</a></code> | <code>string[]</code> | IAM actions required for the UpdateDevicePool API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateInstanceProfile">UpdateInstanceProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateNetworkProfile">UpdateNetworkProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkProfile API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateTestGridProject">UpdateTestGridProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateTestGridProject API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateUpload">UpdateUpload</a></code> | <code>string[]</code> | IAM actions required for the UpdateUpload API call. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateVPCEConfiguration">UpdateVPCEConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateVPCEConfiguration API call. |

---

##### `CreateDevicePool`<sup>Required</sup> <a name="CreateDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateDevicePool"></a>

```typescript
public readonly CreateDevicePool: string[];
```

- *Type:* string[]

IAM actions required for the CreateDevicePool API call.

---

##### `CreateInstanceProfile`<sup>Required</sup> <a name="CreateInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateInstanceProfile"></a>

```typescript
public readonly CreateInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstanceProfile API call.

---

##### `CreateNetworkProfile`<sup>Required</sup> <a name="CreateNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateNetworkProfile"></a>

```typescript
public readonly CreateNetworkProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetworkProfile API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateRemoteAccessSession`<sup>Required</sup> <a name="CreateRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateRemoteAccessSession"></a>

```typescript
public readonly CreateRemoteAccessSession: string[];
```

- *Type:* string[]

IAM actions required for the CreateRemoteAccessSession API call.

---

##### `CreateTestGridProject`<sup>Required</sup> <a name="CreateTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateTestGridProject"></a>

```typescript
public readonly CreateTestGridProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateTestGridProject API call.

---

##### `CreateTestGridUrl`<sup>Required</sup> <a name="CreateTestGridUrl" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateTestGridUrl"></a>

```typescript
public readonly CreateTestGridUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateTestGridUrl API call.

---

##### `CreateUpload`<sup>Required</sup> <a name="CreateUpload" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateUpload"></a>

```typescript
public readonly CreateUpload: string[];
```

- *Type:* string[]

IAM actions required for the CreateUpload API call.

---

##### `CreateVPCEConfiguration`<sup>Required</sup> <a name="CreateVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.CreateVPCEConfiguration"></a>

```typescript
public readonly CreateVPCEConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateVPCEConfiguration API call.

---

##### `DeleteDevicePool`<sup>Required</sup> <a name="DeleteDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteDevicePool"></a>

```typescript
public readonly DeleteDevicePool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDevicePool API call.

---

##### `DeleteInstanceProfile`<sup>Required</sup> <a name="DeleteInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteInstanceProfile"></a>

```typescript
public readonly DeleteInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceProfile API call.

---

##### `DeleteNetworkProfile`<sup>Required</sup> <a name="DeleteNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteNetworkProfile"></a>

```typescript
public readonly DeleteNetworkProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkProfile API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteRemoteAccessSession`<sup>Required</sup> <a name="DeleteRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteRemoteAccessSession"></a>

```typescript
public readonly DeleteRemoteAccessSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRemoteAccessSession API call.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRun API call.

---

##### `DeleteTestGridProject`<sup>Required</sup> <a name="DeleteTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteTestGridProject"></a>

```typescript
public readonly DeleteTestGridProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTestGridProject API call.

---

##### `DeleteUpload`<sup>Required</sup> <a name="DeleteUpload" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteUpload"></a>

```typescript
public readonly DeleteUpload: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUpload API call.

---

##### `DeleteVPCEConfiguration`<sup>Required</sup> <a name="DeleteVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.DeleteVPCEConfiguration"></a>

```typescript
public readonly DeleteVPCEConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVPCEConfiguration API call.

---

##### `InstallToRemoteAccessSession`<sup>Required</sup> <a name="InstallToRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.InstallToRemoteAccessSession"></a>

```typescript
public readonly InstallToRemoteAccessSession: string[];
```

- *Type:* string[]

IAM actions required for the InstallToRemoteAccessSession API call.

---

##### `ListArtifacts`<sup>Required</sup> <a name="ListArtifacts" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListArtifacts"></a>

```typescript
public readonly ListArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListArtifacts API call.

---

##### `ListDeviceInstances`<sup>Required</sup> <a name="ListDeviceInstances" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDeviceInstances"></a>

```typescript
public readonly ListDeviceInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceInstances API call.

---

##### `ListDevicePools`<sup>Required</sup> <a name="ListDevicePools" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDevicePools"></a>

```typescript
public readonly ListDevicePools: string[];
```

- *Type:* string[]

IAM actions required for the ListDevicePools API call.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListDevices"></a>

```typescript
public readonly ListDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListDevices API call.

---

##### `ListInstanceProfiles`<sup>Required</sup> <a name="ListInstanceProfiles" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListInstanceProfiles"></a>

```typescript
public readonly ListInstanceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceProfiles API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListNetworkProfiles`<sup>Required</sup> <a name="ListNetworkProfiles" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListNetworkProfiles"></a>

```typescript
public readonly ListNetworkProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworkProfiles API call.

---

##### `ListOfferingPromotions`<sup>Required</sup> <a name="ListOfferingPromotions" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferingPromotions"></a>

```typescript
public readonly ListOfferingPromotions: string[];
```

- *Type:* string[]

IAM actions required for the ListOfferingPromotions API call.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string[];
```

- *Type:* string[]

IAM actions required for the ListOfferings API call.

---

##### `ListOfferingTransactions`<sup>Required</sup> <a name="ListOfferingTransactions" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListOfferingTransactions"></a>

```typescript
public readonly ListOfferingTransactions: string[];
```

- *Type:* string[]

IAM actions required for the ListOfferingTransactions API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListRemoteAccessSessions`<sup>Required</sup> <a name="ListRemoteAccessSessions" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListRemoteAccessSessions"></a>

```typescript
public readonly ListRemoteAccessSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListRemoteAccessSessions API call.

---

##### `ListRuns`<sup>Required</sup> <a name="ListRuns" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListRuns"></a>

```typescript
public readonly ListRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListRuns API call.

---

##### `ListSamples`<sup>Required</sup> <a name="ListSamples" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListSamples"></a>

```typescript
public readonly ListSamples: string[];
```

- *Type:* string[]

IAM actions required for the ListSamples API call.

---

##### `ListSuites`<sup>Required</sup> <a name="ListSuites" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListSuites"></a>

```typescript
public readonly ListSuites: string[];
```

- *Type:* string[]

IAM actions required for the ListSuites API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTestGridProjects`<sup>Required</sup> <a name="ListTestGridProjects" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridProjects"></a>

```typescript
public readonly ListTestGridProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListTestGridProjects API call.

---

##### `ListTestGridSessionActions`<sup>Required</sup> <a name="ListTestGridSessionActions" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessionActions"></a>

```typescript
public readonly ListTestGridSessionActions: string[];
```

- *Type:* string[]

IAM actions required for the ListTestGridSessionActions API call.

---

##### `ListTestGridSessionArtifacts`<sup>Required</sup> <a name="ListTestGridSessionArtifacts" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessionArtifacts"></a>

```typescript
public readonly ListTestGridSessionArtifacts: string[];
```

- *Type:* string[]

IAM actions required for the ListTestGridSessionArtifacts API call.

---

##### `ListTestGridSessions`<sup>Required</sup> <a name="ListTestGridSessions" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTestGridSessions"></a>

```typescript
public readonly ListTestGridSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListTestGridSessions API call.

---

##### `ListTests`<sup>Required</sup> <a name="ListTests" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListTests"></a>

```typescript
public readonly ListTests: string[];
```

- *Type:* string[]

IAM actions required for the ListTests API call.

---

##### `ListUniqueProblems`<sup>Required</sup> <a name="ListUniqueProblems" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListUniqueProblems"></a>

```typescript
public readonly ListUniqueProblems: string[];
```

- *Type:* string[]

IAM actions required for the ListUniqueProblems API call.

---

##### `ListUploads`<sup>Required</sup> <a name="ListUploads" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListUploads"></a>

```typescript
public readonly ListUploads: string[];
```

- *Type:* string[]

IAM actions required for the ListUploads API call.

---

##### `ListVPCEConfigurations`<sup>Required</sup> <a name="ListVPCEConfigurations" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ListVPCEConfigurations"></a>

```typescript
public readonly ListVPCEConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListVPCEConfigurations API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetDevice`<sup>Required</sup> <a name="opGetDevice" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevice"></a>

```typescript
public readonly opGetDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetDevice API call.

---

##### `opGetDeviceInstance`<sup>Required</sup> <a name="opGetDeviceInstance" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDeviceInstance"></a>

```typescript
public readonly opGetDeviceInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetDeviceInstance API call.

---

##### `opGetDevicePool`<sup>Required</sup> <a name="opGetDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevicePool"></a>

```typescript
public readonly opGetDevicePool: string[];
```

- *Type:* string[]

IAM actions required for the GetDevicePool API call.

---

##### `opGetDevicePoolCompatibility`<sup>Required</sup> <a name="opGetDevicePoolCompatibility" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetDevicePoolCompatibility"></a>

```typescript
public readonly opGetDevicePoolCompatibility: string[];
```

- *Type:* string[]

IAM actions required for the GetDevicePoolCompatibility API call.

---

##### `opGetInstanceProfile`<sup>Required</sup> <a name="opGetInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetInstanceProfile"></a>

```typescript
public readonly opGetInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceProfile API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetNetworkProfile`<sup>Required</sup> <a name="opGetNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetNetworkProfile"></a>

```typescript
public readonly opGetNetworkProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkProfile API call.

---

##### `opGetOfferingStatus`<sup>Required</sup> <a name="opGetOfferingStatus" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetOfferingStatus"></a>

```typescript
public readonly opGetOfferingStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetOfferingStatus API call.

---

##### `opGetProject`<sup>Required</sup> <a name="opGetProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetProject"></a>

```typescript
public readonly opGetProject: string[];
```

- *Type:* string[]

IAM actions required for the GetProject API call.

---

##### `opGetRemoteAccessSession`<sup>Required</sup> <a name="opGetRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetRemoteAccessSession"></a>

```typescript
public readonly opGetRemoteAccessSession: string[];
```

- *Type:* string[]

IAM actions required for the GetRemoteAccessSession API call.

---

##### `opGetRun`<sup>Required</sup> <a name="opGetRun" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetRun"></a>

```typescript
public readonly opGetRun: string[];
```

- *Type:* string[]

IAM actions required for the GetRun API call.

---

##### `opGetSuite`<sup>Required</sup> <a name="opGetSuite" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetSuite"></a>

```typescript
public readonly opGetSuite: string[];
```

- *Type:* string[]

IAM actions required for the GetSuite API call.

---

##### `opGetTest`<sup>Required</sup> <a name="opGetTest" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTest"></a>

```typescript
public readonly opGetTest: string[];
```

- *Type:* string[]

IAM actions required for the GetTest API call.

---

##### `opGetTestGridProject`<sup>Required</sup> <a name="opGetTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTestGridProject"></a>

```typescript
public readonly opGetTestGridProject: string[];
```

- *Type:* string[]

IAM actions required for the GetTestGridProject API call.

---

##### `opGetTestGridSession`<sup>Required</sup> <a name="opGetTestGridSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetTestGridSession"></a>

```typescript
public readonly opGetTestGridSession: string[];
```

- *Type:* string[]

IAM actions required for the GetTestGridSession API call.

---

##### `opGetUpload`<sup>Required</sup> <a name="opGetUpload" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetUpload"></a>

```typescript
public readonly opGetUpload: string[];
```

- *Type:* string[]

IAM actions required for the GetUpload API call.

---

##### `opGetVPCEConfiguration`<sup>Required</sup> <a name="opGetVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.opGetVPCEConfiguration"></a>

```typescript
public readonly opGetVPCEConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetVPCEConfiguration API call.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseOffering API call.

---

##### `RenewOffering`<sup>Required</sup> <a name="RenewOffering" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.RenewOffering"></a>

```typescript
public readonly RenewOffering: string[];
```

- *Type:* string[]

IAM actions required for the RenewOffering API call.

---

##### `ScheduleRun`<sup>Required</sup> <a name="ScheduleRun" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.ScheduleRun"></a>

```typescript
public readonly ScheduleRun: string[];
```

- *Type:* string[]

IAM actions required for the ScheduleRun API call.

---

##### `StopJob`<sup>Required</sup> <a name="StopJob" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopJob"></a>

```typescript
public readonly StopJob: string[];
```

- *Type:* string[]

IAM actions required for the StopJob API call.

---

##### `StopRemoteAccessSession`<sup>Required</sup> <a name="StopRemoteAccessSession" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopRemoteAccessSession"></a>

```typescript
public readonly StopRemoteAccessSession: string[];
```

- *Type:* string[]

IAM actions required for the StopRemoteAccessSession API call.

---

##### `StopRun`<sup>Required</sup> <a name="StopRun" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.StopRun"></a>

```typescript
public readonly StopRun: string[];
```

- *Type:* string[]

IAM actions required for the StopRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDeviceInstance`<sup>Required</sup> <a name="UpdateDeviceInstance" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateDeviceInstance"></a>

```typescript
public readonly UpdateDeviceInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeviceInstance API call.

---

##### `UpdateDevicePool`<sup>Required</sup> <a name="UpdateDevicePool" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateDevicePool"></a>

```typescript
public readonly UpdateDevicePool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDevicePool API call.

---

##### `UpdateInstanceProfile`<sup>Required</sup> <a name="UpdateInstanceProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateInstanceProfile"></a>

```typescript
public readonly UpdateInstanceProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceProfile API call.

---

##### `UpdateNetworkProfile`<sup>Required</sup> <a name="UpdateNetworkProfile" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateNetworkProfile"></a>

```typescript
public readonly UpdateNetworkProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkProfile API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateTestGridProject`<sup>Required</sup> <a name="UpdateTestGridProject" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateTestGridProject"></a>

```typescript
public readonly UpdateTestGridProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTestGridProject API call.

---

##### `UpdateUpload`<sup>Required</sup> <a name="UpdateUpload" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateUpload"></a>

```typescript
public readonly UpdateUpload: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUpload API call.

---

##### `UpdateVPCEConfiguration`<sup>Required</sup> <a name="UpdateVPCEConfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmOperations.property.UpdateVPCEConfiguration"></a>

```typescript
public readonly UpdateVPCEConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVPCEConfiguration API call.

---

### DevicefarmResources <a name="DevicefarmResources" id="@cdk_utils/iam.devicefarm.DevicefarmResources"></a>

ARN builders, validators, and parsers for devicefarm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devicefarm.DevicefarmResources.Initializer"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

new devicefarm.DevicefarmResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.artifact">artifact</a></code> | Builds an ARN for the artifact resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.deviceinstance">deviceinstance</a></code> | Builds an ARN for the deviceinstance resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.devicepool">devicepool</a></code> | Builds an ARN for the devicepool resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.instanceprofile">instanceprofile</a></code> | Builds an ARN for the instanceprofile resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidArtifactArn">isValidArtifactArn</a></code> | Validates whether a string is a valid ARN for the artifact resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceinstanceArn">isValidDeviceinstanceArn</a></code> | Validates whether a string is a valid ARN for the deviceinstance resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDevicepoolArn">isValidDevicepoolArn</a></code> | Validates whether a string is a valid ARN for the devicepool resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidInstanceprofileArn">isValidInstanceprofileArn</a></code> | Validates whether a string is a valid ARN for the instanceprofile resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidNetworkprofileArn">isValidNetworkprofileArn</a></code> | Validates whether a string is a valid ARN for the networkprofile resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidRunArn">isValidRunArn</a></code> | Validates whether a string is a valid ARN for the run resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSampleArn">isValidSampleArn</a></code> | Validates whether a string is a valid ARN for the sample resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSuiteArn">isValidSuiteArn</a></code> | Validates whether a string is a valid ARN for the suite resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestArn">isValidTestArn</a></code> | Validates whether a string is a valid ARN for the test resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridProjectArn">isValidTestgridProjectArn</a></code> | Validates whether a string is a valid ARN for the testgrid-project resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridSessionArn">isValidTestgridSessionArn</a></code> | Validates whether a string is a valid ARN for the testgrid-session resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidUploadArn">isValidUploadArn</a></code> | Validates whether a string is a valid ARN for the upload resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.isValidVpceconfigurationArn">isValidVpceconfigurationArn</a></code> | Validates whether a string is a valid ARN for the vpceconfiguration resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.job">job</a></code> | Builds an ARN for the job resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.networkprofile">networkprofile</a></code> | Builds an ARN for the networkprofile resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseArtifactArn">parseArtifactArn</a></code> | Parses a artifact ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceinstanceArn">parseDeviceinstanceArn</a></code> | Parses a deviceinstance ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseDevicepoolArn">parseDevicepoolArn</a></code> | Parses a devicepool ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseInstanceprofileArn">parseInstanceprofileArn</a></code> | Parses a instanceprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseJobArn">parseJobArn</a></code> | Parses a job ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseNetworkprofileArn">parseNetworkprofileArn</a></code> | Parses a networkprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseRunArn">parseRunArn</a></code> | Parses a run ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseSampleArn">parseSampleArn</a></code> | Parses a sample ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseSuiteArn">parseSuiteArn</a></code> | Parses a suite ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestArn">parseTestArn</a></code> | Parses a test ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridProjectArn">parseTestgridProjectArn</a></code> | Parses a testgrid-project ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridSessionArn">parseTestgridSessionArn</a></code> | Parses a testgrid-session ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseUploadArn">parseUploadArn</a></code> | Parses a upload ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.parseVpceconfigurationArn">parseVpceconfigurationArn</a></code> | Parses a vpceconfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.run">run</a></code> | Builds an ARN for the run resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.sample">sample</a></code> | Builds an ARN for the sample resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.suite">suite</a></code> | Builds an ARN for the suite resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.test">test</a></code> | Builds an ARN for the test resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.testgridProject">testgridProject</a></code> | Builds an ARN for the testgrid-project resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.testgridSession">testgridSession</a></code> | Builds an ARN for the testgrid-session resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.upload">upload</a></code> | Builds an ARN for the upload resource. |
| <code><a href="#@cdk_utils/iam.devicefarm.DevicefarmResources.vpceconfiguration">vpceconfiguration</a></code> | Builds an ARN for the vpceconfiguration resource. |

---

##### `artifact` <a name="artifact" id="@cdk_utils/iam.devicefarm.DevicefarmResources.artifact"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.artifact(props: DevicefarmArtifactArnProps)
```

Builds an ARN for the artifact resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.artifact.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmArtifactArnProps">DevicefarmArtifactArnProps</a>

---

##### `device` <a name="device" id="@cdk_utils/iam.devicefarm.DevicefarmResources.device"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.device(props: DevicefarmDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceArnProps">DevicefarmDeviceArnProps</a>

---

##### `deviceinstance` <a name="deviceinstance" id="@cdk_utils/iam.devicefarm.DevicefarmResources.deviceinstance"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.deviceinstance(props: DevicefarmDeviceinstanceArnProps)
```

Builds an ARN for the deviceinstance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.deviceinstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmDeviceinstanceArnProps">DevicefarmDeviceinstanceArnProps</a>

---

##### `devicepool` <a name="devicepool" id="@cdk_utils/iam.devicefarm.DevicefarmResources.devicepool"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.devicepool(props: DevicefarmDevicepoolArnProps)
```

Builds an ARN for the devicepool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.devicepool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmDevicepoolArnProps">DevicefarmDevicepoolArnProps</a>

---

##### `instanceprofile` <a name="instanceprofile" id="@cdk_utils/iam.devicefarm.DevicefarmResources.instanceprofile"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.instanceprofile(props: DevicefarmInstanceprofileArnProps)
```

Builds an ARN for the instanceprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.instanceprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmInstanceprofileArnProps">DevicefarmInstanceprofileArnProps</a>

---

##### `isValidArtifactArn` <a name="isValidArtifactArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidArtifactArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidArtifactArn(arn: string)
```

Validates whether a string is a valid ARN for the artifact resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidArtifactArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceinstanceArn` <a name="isValidDeviceinstanceArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceinstanceArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidDeviceinstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the deviceinstance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDeviceinstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDevicepoolArn` <a name="isValidDevicepoolArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDevicepoolArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidDevicepoolArn(arn: string)
```

Validates whether a string is a valid ARN for the devicepool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidDevicepoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceprofileArn` <a name="isValidInstanceprofileArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidInstanceprofileArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidInstanceprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the instanceprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidInstanceprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidJobArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkprofileArn` <a name="isValidNetworkprofileArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidNetworkprofileArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidNetworkprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the networkprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidNetworkprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidProjectArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRunArn` <a name="isValidRunArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidRunArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidRunArn(arn: string)
```

Validates whether a string is a valid ARN for the run resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSampleArn` <a name="isValidSampleArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSampleArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidSampleArn(arn: string)
```

Validates whether a string is a valid ARN for the sample resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSampleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSessionArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSuiteArn` <a name="isValidSuiteArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSuiteArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidSuiteArn(arn: string)
```

Validates whether a string is a valid ARN for the suite resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidSuiteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestArn` <a name="isValidTestArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidTestArn(arn: string)
```

Validates whether a string is a valid ARN for the test resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestgridProjectArn` <a name="isValidTestgridProjectArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridProjectArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidTestgridProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the testgrid-project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestgridSessionArn` <a name="isValidTestgridSessionArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridSessionArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidTestgridSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the testgrid-session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidTestgridSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUploadArn` <a name="isValidUploadArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidUploadArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidUploadArn(arn: string)
```

Validates whether a string is a valid ARN for the upload resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidUploadArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVpceconfigurationArn` <a name="isValidVpceconfigurationArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidVpceconfigurationArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.isValidVpceconfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the vpceconfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.isValidVpceconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.devicefarm.DevicefarmResources.job"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.job(props: DevicefarmJobArnProps)
```

Builds an ARN for the job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmJobArnProps">DevicefarmJobArnProps</a>

---

##### `networkprofile` <a name="networkprofile" id="@cdk_utils/iam.devicefarm.DevicefarmResources.networkprofile"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.networkprofile(props: DevicefarmNetworkprofileArnProps)
```

Builds an ARN for the networkprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.networkprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmNetworkprofileArnProps">DevicefarmNetworkprofileArnProps</a>

---

##### `parseArtifactArn` <a name="parseArtifactArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseArtifactArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseArtifactArn(arn: string)
```

Parses a artifact ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseArtifactArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceinstanceArn` <a name="parseDeviceinstanceArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceinstanceArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseDeviceinstanceArn(arn: string)
```

Parses a deviceinstance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDeviceinstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDevicepoolArn` <a name="parseDevicepoolArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDevicepoolArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseDevicepoolArn(arn: string)
```

Parses a devicepool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseDevicepoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceprofileArn` <a name="parseInstanceprofileArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseInstanceprofileArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseInstanceprofileArn(arn: string)
```

Parses a instanceprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseInstanceprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseJobArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseJobArn(arn: string)
```

Parses a job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkprofileArn` <a name="parseNetworkprofileArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseNetworkprofileArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseNetworkprofileArn(arn: string)
```

Parses a networkprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseNetworkprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseProjectArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRunArn` <a name="parseRunArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseRunArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseRunArn(arn: string)
```

Parses a run ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSampleArn` <a name="parseSampleArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSampleArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseSampleArn(arn: string)
```

Parses a sample ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSampleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSessionArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSuiteArn` <a name="parseSuiteArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSuiteArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseSuiteArn(arn: string)
```

Parses a suite ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseSuiteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestArn` <a name="parseTestArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseTestArn(arn: string)
```

Parses a test ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestgridProjectArn` <a name="parseTestgridProjectArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridProjectArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseTestgridProjectArn(arn: string)
```

Parses a testgrid-project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestgridSessionArn` <a name="parseTestgridSessionArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridSessionArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseTestgridSessionArn(arn: string)
```

Parses a testgrid-session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseTestgridSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUploadArn` <a name="parseUploadArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseUploadArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseUploadArn(arn: string)
```

Parses a upload ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseUploadArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVpceconfigurationArn` <a name="parseVpceconfigurationArn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseVpceconfigurationArn"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.parseVpceconfigurationArn(arn: string)
```

Parses a vpceconfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devicefarm.DevicefarmResources.parseVpceconfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.devicefarm.DevicefarmResources.project"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.project(props: DevicefarmProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmProjectArnProps">DevicefarmProjectArnProps</a>

---

##### `run` <a name="run" id="@cdk_utils/iam.devicefarm.DevicefarmResources.run"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.run(props: DevicefarmRunArnProps)
```

Builds an ARN for the run resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.run.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmRunArnProps">DevicefarmRunArnProps</a>

---

##### `sample` <a name="sample" id="@cdk_utils/iam.devicefarm.DevicefarmResources.sample"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.sample(props: DevicefarmSampleArnProps)
```

Builds an ARN for the sample resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.sample.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmSampleArnProps">DevicefarmSampleArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.devicefarm.DevicefarmResources.session"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.session(props: DevicefarmSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmSessionArnProps">DevicefarmSessionArnProps</a>

---

##### `suite` <a name="suite" id="@cdk_utils/iam.devicefarm.DevicefarmResources.suite"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.suite(props: DevicefarmSuiteArnProps)
```

Builds an ARN for the suite resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.suite.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmSuiteArnProps">DevicefarmSuiteArnProps</a>

---

##### `test` <a name="test" id="@cdk_utils/iam.devicefarm.DevicefarmResources.test"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.test(props: DevicefarmTestArnProps)
```

Builds an ARN for the test resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.test.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmTestArnProps">DevicefarmTestArnProps</a>

---

##### `testgridProject` <a name="testgridProject" id="@cdk_utils/iam.devicefarm.DevicefarmResources.testgridProject"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.testgridProject(props: DevicefarmTestgridProjectArnProps)
```

Builds an ARN for the testgrid-project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.testgridProject.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridProjectArnProps">DevicefarmTestgridProjectArnProps</a>

---

##### `testgridSession` <a name="testgridSession" id="@cdk_utils/iam.devicefarm.DevicefarmResources.testgridSession"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.testgridSession(props: DevicefarmTestgridSessionArnProps)
```

Builds an ARN for the testgrid-session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.testgridSession.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmTestgridSessionArnProps">DevicefarmTestgridSessionArnProps</a>

---

##### `upload` <a name="upload" id="@cdk_utils/iam.devicefarm.DevicefarmResources.upload"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.upload(props: DevicefarmUploadArnProps)
```

Builds an ARN for the upload resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.upload.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmUploadArnProps">DevicefarmUploadArnProps</a>

---

##### `vpceconfiguration` <a name="vpceconfiguration" id="@cdk_utils/iam.devicefarm.DevicefarmResources.vpceconfiguration"></a>

```typescript
import { devicefarm } from '@cdk_utils/iam'

devicefarm.DevicefarmResources.vpceconfiguration(props: DevicefarmVpceconfigurationArnProps)
```

Builds an ARN for the vpceconfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devicefarm.DevicefarmResources.vpceconfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devicefarm.DevicefarmVpceconfigurationArnProps">DevicefarmVpceconfigurationArnProps</a>

---




