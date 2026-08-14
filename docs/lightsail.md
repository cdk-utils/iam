# `lightsail` Submodule <a name="`lightsail` Submodule" id="@cdk_utils/iam.lightsail"></a>


## Structs <a name="Structs" id="Structs"></a>

### LightSailAlarmArnComponents <a name="LightSailAlarmArnComponents" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents"></a>

Parsed components of a Alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailAlarmArnComponents: lightsail.LightSailAlarmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailAlarmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailAlarmArnProps <a name="LightSailAlarmArnProps" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps"></a>

Properties for building a Alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailAlarmArnProps: lightsail.LightSailAlarmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailAlarmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailBucketArnComponents <a name="LightSailBucketArnComponents" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents"></a>

Parsed components of a Bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailBucketArnComponents: lightsail.LightSailBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailBucketArnProps <a name="LightSailBucketArnProps" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps"></a>

Properties for building a Bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailBucketArnProps: lightsail.LightSailBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailCertificateArnComponents <a name="LightSailCertificateArnComponents" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents"></a>

Parsed components of a Certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailCertificateArnComponents: lightsail.LightSailCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailCertificateArnProps <a name="LightSailCertificateArnProps" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps"></a>

Properties for building a Certificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailCertificateArnProps: lightsail.LightSailCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailCloudFormationStackRecordArnComponents <a name="LightSailCloudFormationStackRecordArnComponents" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents"></a>

Parsed components of a CloudFormationStackRecord ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailCloudFormationStackRecordArnComponents: lightsail.LightSailCloudFormationStackRecordArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailCloudFormationStackRecordArnProps <a name="LightSailCloudFormationStackRecordArnProps" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps"></a>

Properties for building a CloudFormationStackRecord ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailCloudFormationStackRecordArnProps: lightsail.LightSailCloudFormationStackRecordArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailContactMethodArnComponents <a name="LightSailContactMethodArnComponents" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents"></a>

Parsed components of a ContactMethod ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailContactMethodArnComponents: lightsail.LightSailContactMethodArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailContactMethodArnProps <a name="LightSailContactMethodArnProps" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps"></a>

Properties for building a ContactMethod ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailContactMethodArnProps: lightsail.LightSailContactMethodArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailContactMethodArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailContainerServiceArnComponents <a name="LightSailContainerServiceArnComponents" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents"></a>

Parsed components of a ContainerService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailContainerServiceArnComponents: lightsail.LightSailContainerServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailContainerServiceArnProps <a name="LightSailContainerServiceArnProps" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps"></a>

Properties for building a ContainerService ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailContainerServiceArnProps: lightsail.LightSailContainerServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailDiskArnComponents <a name="LightSailDiskArnComponents" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents"></a>

Parsed components of a Disk ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDiskArnComponents: lightsail.LightSailDiskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDiskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailDiskArnProps <a name="LightSailDiskArnProps" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps"></a>

Properties for building a Disk ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDiskArnProps: lightsail.LightSailDiskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDiskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailDiskSnapshotArnComponents <a name="LightSailDiskSnapshotArnComponents" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents"></a>

Parsed components of a DiskSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDiskSnapshotArnComponents: lightsail.LightSailDiskSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailDiskSnapshotArnProps <a name="LightSailDiskSnapshotArnProps" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps"></a>

Properties for building a DiskSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDiskSnapshotArnProps: lightsail.LightSailDiskSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailDistributionArnComponents <a name="LightSailDistributionArnComponents" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents"></a>

Parsed components of a Distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDistributionArnComponents: lightsail.LightSailDistributionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDistributionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailDistributionArnProps <a name="LightSailDistributionArnProps" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps"></a>

Properties for building a Distribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDistributionArnProps: lightsail.LightSailDistributionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDistributionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailDomainArnComponents <a name="LightSailDomainArnComponents" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents"></a>

Parsed components of a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDomainArnComponents: lightsail.LightSailDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailDomainArnProps <a name="LightSailDomainArnProps" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps"></a>

Properties for building a Domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailDomainArnProps: lightsail.LightSailDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailExportSnapshotRecordArnComponents <a name="LightSailExportSnapshotRecordArnComponents" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents"></a>

Parsed components of a ExportSnapshotRecord ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailExportSnapshotRecordArnComponents: lightsail.LightSailExportSnapshotRecordArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailExportSnapshotRecordArnProps <a name="LightSailExportSnapshotRecordArnProps" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps"></a>

Properties for building a ExportSnapshotRecord ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailExportSnapshotRecordArnProps: lightsail.LightSailExportSnapshotRecordArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailInstanceArnComponents <a name="LightSailInstanceArnComponents" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents"></a>

Parsed components of a Instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailInstanceArnComponents: lightsail.LightSailInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailInstanceArnProps <a name="LightSailInstanceArnProps" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps"></a>

Properties for building a Instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailInstanceArnProps: lightsail.LightSailInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailInstanceSnapshotArnComponents <a name="LightSailInstanceSnapshotArnComponents" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents"></a>

Parsed components of a InstanceSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailInstanceSnapshotArnComponents: lightsail.LightSailInstanceSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailInstanceSnapshotArnProps <a name="LightSailInstanceSnapshotArnProps" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps"></a>

Properties for building a InstanceSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailInstanceSnapshotArnProps: lightsail.LightSailInstanceSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailKeyPairArnComponents <a name="LightSailKeyPairArnComponents" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents"></a>

Parsed components of a KeyPair ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailKeyPairArnComponents: lightsail.LightSailKeyPairArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailKeyPairArnProps <a name="LightSailKeyPairArnProps" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps"></a>

Properties for building a KeyPair ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailKeyPairArnProps: lightsail.LightSailKeyPairArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailKeyPairArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailLoadBalancerArnComponents <a name="LightSailLoadBalancerArnComponents" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents"></a>

Parsed components of a LoadBalancer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailLoadBalancerArnComponents: lightsail.LightSailLoadBalancerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailLoadBalancerArnProps <a name="LightSailLoadBalancerArnProps" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps"></a>

Properties for building a LoadBalancer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailLoadBalancerArnProps: lightsail.LightSailLoadBalancerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailLoadBalancerTLSCertificateArnComponents <a name="LightSailLoadBalancerTLSCertificateArnComponents" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents"></a>

Parsed components of a LoadBalancerTlsCertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailLoadBalancerTLSCertificateArnComponents: lightsail.LightSailLoadBalancerTLSCertificateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailLoadBalancerTLSCertificateArnProps <a name="LightSailLoadBalancerTLSCertificateArnProps" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps"></a>

Properties for building a LoadBalancerTlsCertificate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailLoadBalancerTLSCertificateArnProps: lightsail.LightSailLoadBalancerTLSCertificateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailRelationalDatabaseArnComponents <a name="LightSailRelationalDatabaseArnComponents" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents"></a>

Parsed components of a RelationalDatabase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailRelationalDatabaseArnComponents: lightsail.LightSailRelationalDatabaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailRelationalDatabaseArnProps <a name="LightSailRelationalDatabaseArnProps" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps"></a>

Properties for building a RelationalDatabase ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailRelationalDatabaseArnProps: lightsail.LightSailRelationalDatabaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailRelationalDatabaseSnapshotArnComponents <a name="LightSailRelationalDatabaseSnapshotArnComponents" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents"></a>

Parsed components of a RelationalDatabaseSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailRelationalDatabaseSnapshotArnComponents: lightsail.LightSailRelationalDatabaseSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailRelationalDatabaseSnapshotArnProps <a name="LightSailRelationalDatabaseSnapshotArnProps" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps"></a>

Properties for building a RelationalDatabaseSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailRelationalDatabaseSnapshotArnProps: lightsail.LightSailRelationalDatabaseSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LightSailStaticIPArnComponents <a name="LightSailStaticIPArnComponents" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents"></a>

Parsed components of a StaticIp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailStaticIPArnComponents: lightsail.LightSailStaticIPArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LightSailStaticIPArnProps <a name="LightSailStaticIPArnProps" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps"></a>

Properties for building a StaticIp ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

const lightSailStaticIPArnProps: lightsail.LightSailStaticIPArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lightsail.LightSailStaticIPArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LightSailActions <a name="LightSailActions" id="@cdk_utils/iam.lightsail.LightSailActions"></a>

IAM action constants for the lightsail service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lightsail.LightSailActions.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

new lightsail.LightSailActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetActiveNames">actionGetActiveNames</a></code> | <code>string</code> | [Read] lightsail:GetActiveNames. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetAlarms">actionGetAlarms</a></code> | <code>string</code> | [Read] lightsail:GetAlarms. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetAutoSnapshots">actionGetAutoSnapshots</a></code> | <code>string</code> | [Read] lightsail:GetAutoSnapshots. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBlueprints">actionGetBlueprints</a></code> | <code>string</code> | [Read] lightsail:GetBlueprints. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketAccessKeys">actionGetBucketAccessKeys</a></code> | <code>string</code> | [Read] lightsail:GetBucketAccessKeys. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketBundles">actionGetBucketBundles</a></code> | <code>string</code> | [Read] lightsail:GetBucketBundles. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketMetricData">actionGetBucketMetricData</a></code> | <code>string</code> | [Read] lightsail:GetBucketMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBuckets">actionGetBuckets</a></code> | <code>string</code> | [Read] lightsail:GetBuckets. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBundles">actionGetBundles</a></code> | <code>string</code> | [Read] lightsail:GetBundles. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCertificates">actionGetCertificates</a></code> | <code>string</code> | [Read] lightsail:GetCertificates. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCloudFormationStackRecords">actionGetCloudFormationStackRecords</a></code> | <code>string</code> | [Read] lightsail:GetCloudFormationStackRecords. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContactMethods">actionGetContactMethods</a></code> | <code>string</code> | [Read] lightsail:GetContactMethods. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerAPIMetadata">actionGetContainerAPIMetadata</a></code> | <code>string</code> | [Read] lightsail:GetContainerAPIMetadata. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerImages">actionGetContainerImages</a></code> | <code>string</code> | [Read] lightsail:GetContainerImages. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerLog">actionGetContainerLog</a></code> | <code>string</code> | [Read] lightsail:GetContainerLog. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServiceDeployments">actionGetContainerServiceDeployments</a></code> | <code>string</code> | [Read] lightsail:GetContainerServiceDeployments. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServiceMetricData">actionGetContainerServiceMetricData</a></code> | <code>string</code> | [Read] lightsail:GetContainerServiceMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServicePowers">actionGetContainerServicePowers</a></code> | <code>string</code> | [Read] lightsail:GetContainerServicePowers. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServices">actionGetContainerServices</a></code> | <code>string</code> | [Read] lightsail:GetContainerServices. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCostEstimate">actionGetCostEstimate</a></code> | <code>string</code> | [Read] lightsail:GetCostEstimate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDisk">actionGetDisk</a></code> | <code>string</code> | [Read] lightsail:GetDisk. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDisks">actionGetDisks</a></code> | <code>string</code> | [Read] lightsail:GetDisks. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDiskSnapshot">actionGetDiskSnapshot</a></code> | <code>string</code> | [Read] lightsail:GetDiskSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDiskSnapshots">actionGetDiskSnapshots</a></code> | <code>string</code> | [Read] lightsail:GetDiskSnapshots. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionBundles">actionGetDistributionBundles</a></code> | <code>string</code> | [Read] lightsail:GetDistributionBundles. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionLatestCacheReset">actionGetDistributionLatestCacheReset</a></code> | <code>string</code> | [Read] lightsail:GetDistributionLatestCacheReset. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionMetricData">actionGetDistributionMetricData</a></code> | <code>string</code> | [Read] lightsail:GetDistributionMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributions">actionGetDistributions</a></code> | <code>string</code> | [Read] lightsail:GetDistributions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] lightsail:GetDomain. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDomains">actionGetDomains</a></code> | <code>string</code> | [Read] lightsail:GetDomains. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetExportSnapshotRecords">actionGetExportSnapshotRecords</a></code> | <code>string</code> | [Read] lightsail:GetExportSnapshotRecords. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstance">actionGetInstance</a></code> | <code>string</code> | [Read] lightsail:GetInstance. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceAccessDetails">actionGetInstanceAccessDetails</a></code> | <code>string</code> | [Write] lightsail:GetInstanceAccessDetails. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceMetricData">actionGetInstanceMetricData</a></code> | <code>string</code> | [Read] lightsail:GetInstanceMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstancePortStates">actionGetInstancePortStates</a></code> | <code>string</code> | [Read] lightsail:GetInstancePortStates. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstances">actionGetInstances</a></code> | <code>string</code> | [Read] lightsail:GetInstances. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceSnapshot">actionGetInstanceSnapshot</a></code> | <code>string</code> | [Read] lightsail:GetInstanceSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceSnapshots">actionGetInstanceSnapshots</a></code> | <code>string</code> | [Read] lightsail:GetInstanceSnapshots. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceState">actionGetInstanceState</a></code> | <code>string</code> | [Read] lightsail:GetInstanceState. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetKeyPair">actionGetKeyPair</a></code> | <code>string</code> | [Read] lightsail:GetKeyPair. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetKeyPairs">actionGetKeyPairs</a></code> | <code>string</code> | [Read] lightsail:GetKeyPairs. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancer">actionGetLoadBalancer</a></code> | <code>string</code> | [Read] lightsail:GetLoadBalancer. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerMetricData">actionGetLoadBalancerMetricData</a></code> | <code>string</code> | [Read] lightsail:GetLoadBalancerMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancers">actionGetLoadBalancers</a></code> | <code>string</code> | [Read] lightsail:GetLoadBalancers. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerTlsCertificates">actionGetLoadBalancerTlsCertificates</a></code> | <code>string</code> | [Read] lightsail:GetLoadBalancerTlsCertificates. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerTlsPolicies">actionGetLoadBalancerTlsPolicies</a></code> | <code>string</code> | [Read] lightsail:GetLoadBalancerTlsPolicies. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperation">actionGetOperation</a></code> | <code>string</code> | [Read] lightsail:GetOperation. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperations">actionGetOperations</a></code> | <code>string</code> | [Read] lightsail:GetOperations. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperationsForResource">actionGetOperationsForResource</a></code> | <code>string</code> | [Read] lightsail:GetOperationsForResource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRegions">actionGetRegions</a></code> | <code>string</code> | [Read] lightsail:GetRegions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabase">actionGetRelationalDatabase</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseBlueprints">actionGetRelationalDatabaseBlueprints</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseBlueprints. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseBundles">actionGetRelationalDatabaseBundles</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseBundles. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseEvents">actionGetRelationalDatabaseEvents</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseEvents. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseLogEvents">actionGetRelationalDatabaseLogEvents</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseLogEvents. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseLogStreams">actionGetRelationalDatabaseLogStreams</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseLogStreams. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseMasterUserPassword">actionGetRelationalDatabaseMasterUserPassword</a></code> | <code>string</code> | [Write] lightsail:GetRelationalDatabaseMasterUserPassword. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseMetricData">actionGetRelationalDatabaseMetricData</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseMetricData. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseParameters">actionGetRelationalDatabaseParameters</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseParameters. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabases">actionGetRelationalDatabases</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabases. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseSnapshot">actionGetRelationalDatabaseSnapshot</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseSnapshots">actionGetRelationalDatabaseSnapshots</a></code> | <code>string</code> | [Read] lightsail:GetRelationalDatabaseSnapshots. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetSetupHistory">actionGetSetupHistory</a></code> | <code>string</code> | [Read] lightsail:GetSetupHistory. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetStaticIp">actionGetStaticIp</a></code> | <code>string</code> | [Read] lightsail:GetStaticIp. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionGetStaticIps">actionGetStaticIps</a></code> | <code>string</code> | [Read] lightsail:GetStaticIps. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionSetIpAddressType">actionSetIpAddressType</a></code> | <code>string</code> | [Write] lightsail:SetIpAddressType. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.actionSetResourceAccessForBucket">actionSetResourceAccessForBucket</a></code> | <code>string</code> | [Write] lightsail:SetResourceAccessForBucket. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllocateStaticIp">AllocateStaticIp</a></code> | <code>string</code> | [Write] lightsail:AllocateStaticIp. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AttachCertificateToDistribution">AttachCertificateToDistribution</a></code> | <code>string</code> | [Write] lightsail:AttachCertificateToDistribution. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AttachDisk">AttachDisk</a></code> | <code>string</code> | [Write] lightsail:AttachDisk. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AttachInstancesToLoadBalancer">AttachInstancesToLoadBalancer</a></code> | <code>string</code> | [Write] lightsail:AttachInstancesToLoadBalancer. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AttachLoadBalancerTlsCertificate">AttachLoadBalancerTlsCertificate</a></code> | <code>string</code> | [Write] lightsail:AttachLoadBalancerTlsCertificate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.AttachStaticIp">AttachStaticIp</a></code> | <code>string</code> | [Write] lightsail:AttachStaticIp. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CloseInstancePublicPorts">CloseInstancePublicPorts</a></code> | <code>string</code> | [Write] lightsail:CloseInstancePublicPorts. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CopySnapshot">CopySnapshot</a></code> | <code>string</code> | [Write] lightsail:CopySnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateBucket">CreateBucket</a></code> | <code>string</code> | [Write] lightsail:CreateBucket. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateBucketAccessKey">CreateBucketAccessKey</a></code> | <code>string</code> | [Write] lightsail:CreateBucketAccessKey. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateCertificate">CreateCertificate</a></code> | <code>string</code> | [Write] lightsail:CreateCertificate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateCloudFormationStack">CreateCloudFormationStack</a></code> | <code>string</code> | [Write] lightsail:CreateCloudFormationStack. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateContactMethod">CreateContactMethod</a></code> | <code>string</code> | [Write] lightsail:CreateContactMethod. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerService">CreateContainerService</a></code> | <code>string</code> | [Write] lightsail:CreateContainerService. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerServiceDeployment">CreateContainerServiceDeployment</a></code> | <code>string</code> | [Write] lightsail:CreateContainerServiceDeployment. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerServiceRegistryLogin">CreateContainerServiceRegistryLogin</a></code> | <code>string</code> | [Write] lightsail:CreateContainerServiceRegistryLogin. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDisk">CreateDisk</a></code> | <code>string</code> | [Write] lightsail:CreateDisk. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDiskFromSnapshot">CreateDiskFromSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateDiskFromSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDiskSnapshot">CreateDiskSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateDiskSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDistribution">CreateDistribution</a></code> | <code>string</code> | [Write] lightsail:CreateDistribution. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] lightsail:CreateDomain. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateDomainEntry">CreateDomainEntry</a></code> | <code>string</code> | [Write] lightsail:CreateDomainEntry. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateGUISessionAccessDetails">CreateGUISessionAccessDetails</a></code> | <code>string</code> | [Write] lightsail:CreateGUISessionAccessDetails. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstances">CreateInstances</a></code> | <code>string</code> | [Write] lightsail:CreateInstances. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstancesFromSnapshot">CreateInstancesFromSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateInstancesFromSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstanceSnapshot">CreateInstanceSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateInstanceSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateKeyPair">CreateKeyPair</a></code> | <code>string</code> | [Write] lightsail:CreateKeyPair. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateLoadBalancer">CreateLoadBalancer</a></code> | <code>string</code> | [Write] lightsail:CreateLoadBalancer. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateLoadBalancerTlsCertificate">CreateLoadBalancerTlsCertificate</a></code> | <code>string</code> | [Write] lightsail:CreateLoadBalancerTlsCertificate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabase">CreateRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:CreateRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabaseFromSnapshot">CreateRelationalDatabaseFromSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateRelationalDatabaseFromSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabaseSnapshot">CreateRelationalDatabaseSnapshot</a></code> | <code>string</code> | [Write] lightsail:CreateRelationalDatabaseSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteAlarm">DeleteAlarm</a></code> | <code>string</code> | [Write] lightsail:DeleteAlarm. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteAutoSnapshot">DeleteAutoSnapshot</a></code> | <code>string</code> | [Write] lightsail:DeleteAutoSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteBucket">DeleteBucket</a></code> | <code>string</code> | [Write] lightsail:DeleteBucket. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteBucketAccessKey">DeleteBucketAccessKey</a></code> | <code>string</code> | [Write] lightsail:DeleteBucketAccessKey. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string</code> | [Write] lightsail:DeleteCertificate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContactMethod">DeleteContactMethod</a></code> | <code>string</code> | [Write] lightsail:DeleteContactMethod. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContainerImage">DeleteContainerImage</a></code> | <code>string</code> | [Write] lightsail:DeleteContainerImage. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContainerService">DeleteContainerService</a></code> | <code>string</code> | [Write] lightsail:DeleteContainerService. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDisk">DeleteDisk</a></code> | <code>string</code> | [Write] lightsail:DeleteDisk. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDiskSnapshot">DeleteDiskSnapshot</a></code> | <code>string</code> | [Write] lightsail:DeleteDiskSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDistribution">DeleteDistribution</a></code> | <code>string</code> | [Write] lightsail:DeleteDistribution. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] lightsail:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDomainEntry">DeleteDomainEntry</a></code> | <code>string</code> | [Write] lightsail:DeleteDomainEntry. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] lightsail:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteInstanceSnapshot">DeleteInstanceSnapshot</a></code> | <code>string</code> | [Write] lightsail:DeleteInstanceSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteKeyPair">DeleteKeyPair</a></code> | <code>string</code> | [Write] lightsail:DeleteKeyPair. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteKnownHostKeys">DeleteKnownHostKeys</a></code> | <code>string</code> | [Write] lightsail:DeleteKnownHostKeys. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteLoadBalancer">DeleteLoadBalancer</a></code> | <code>string</code> | [Write] lightsail:DeleteLoadBalancer. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteLoadBalancerTlsCertificate">DeleteLoadBalancerTlsCertificate</a></code> | <code>string</code> | [Write] lightsail:DeleteLoadBalancerTlsCertificate. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteRelationalDatabase">DeleteRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:DeleteRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DeleteRelationalDatabaseSnapshot">DeleteRelationalDatabaseSnapshot</a></code> | <code>string</code> | [Write] lightsail:DeleteRelationalDatabaseSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DetachCertificateFromDistribution">DetachCertificateFromDistribution</a></code> | <code>string</code> | [Write] lightsail:DetachCertificateFromDistribution. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DetachDisk">DetachDisk</a></code> | <code>string</code> | [Write] lightsail:DetachDisk. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DetachInstancesFromLoadBalancer">DetachInstancesFromLoadBalancer</a></code> | <code>string</code> | [Write] lightsail:DetachInstancesFromLoadBalancer. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DetachStaticIp">DetachStaticIp</a></code> | <code>string</code> | [Write] lightsail:DetachStaticIp. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DisableAddOn">DisableAddOn</a></code> | <code>string</code> | [Write] lightsail:DisableAddOn. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.DownloadDefaultKeyPair">DownloadDefaultKeyPair</a></code> | <code>string</code> | [Write] lightsail:DownloadDefaultKeyPair. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.EnableAddOn">EnableAddOn</a></code> | <code>string</code> | [Write] lightsail:EnableAddOn. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.ExportSnapshot">ExportSnapshot</a></code> | <code>string</code> | [Write] lightsail:ExportSnapshot. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.ImportKeyPair">ImportKeyPair</a></code> | <code>string</code> | [Write] lightsail:ImportKeyPair. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.IsVpcPeered">IsVpcPeered</a></code> | <code>string</code> | [Read] lightsail:IsVpcPeered. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.OpenInstancePublicPorts">OpenInstancePublicPorts</a></code> | <code>string</code> | [Write] lightsail:OpenInstancePublicPorts. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.PeerVpc">PeerVpc</a></code> | <code>string</code> | [Write] lightsail:PeerVpc. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.PutAlarm">PutAlarm</a></code> | <code>string</code> | [Write] lightsail:PutAlarm. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.PutInstancePublicPorts">PutInstancePublicPorts</a></code> | <code>string</code> | [Write] lightsail:PutInstancePublicPorts. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.RebootInstance">RebootInstance</a></code> | <code>string</code> | [Write] lightsail:RebootInstance. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.RebootRelationalDatabase">RebootRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:RebootRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.RegisterContainerImage">RegisterContainerImage</a></code> | <code>string</code> | [Write] lightsail:RegisterContainerImage. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.ReleaseStaticIp">ReleaseStaticIp</a></code> | <code>string</code> | [Write] lightsail:ReleaseStaticIp. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.ResetDistributionCache">ResetDistributionCache</a></code> | <code>string</code> | [Write] lightsail:ResetDistributionCache. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.SendContactMethodVerification">SendContactMethodVerification</a></code> | <code>string</code> | [Write] lightsail:SendContactMethodVerification. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.SetupInstanceHttps">SetupInstanceHttps</a></code> | <code>string</code> | [Write] lightsail:SetupInstanceHttps. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StartGUISession">StartGUISession</a></code> | <code>string</code> | [Write] lightsail:StartGUISession. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StartInstance">StartInstance</a></code> | <code>string</code> | [Write] lightsail:StartInstance. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StartRelationalDatabase">StartRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:StartRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StopGUISession">StopGUISession</a></code> | <code>string</code> | [Write] lightsail:StopGUISession. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StopInstance">StopInstance</a></code> | <code>string</code> | [Write] lightsail:StopInstance. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.StopRelationalDatabase">StopRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:StopRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lightsail:TagResource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.TestAlarm">TestAlarm</a></code> | <code>string</code> | [Write] lightsail:TestAlarm. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UnpeerVpc">UnpeerVpc</a></code> | <code>string</code> | [Write] lightsail:UnpeerVpc. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lightsail:UntagResource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateBucket">UpdateBucket</a></code> | <code>string</code> | [Write] lightsail:UpdateBucket. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateBucketBundle">UpdateBucketBundle</a></code> | <code>string</code> | [Write] lightsail:UpdateBucketBundle. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateContainerService">UpdateContainerService</a></code> | <code>string</code> | [Write] lightsail:UpdateContainerService. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDistribution">UpdateDistribution</a></code> | <code>string</code> | [Write] lightsail:UpdateDistribution. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDistributionBundle">UpdateDistributionBundle</a></code> | <code>string</code> | [Write] lightsail:UpdateDistributionBundle. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDomainEntry">UpdateDomainEntry</a></code> | <code>string</code> | [Write] lightsail:UpdateDomainEntry. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateInstanceMetadataOptions">UpdateInstanceMetadataOptions</a></code> | <code>string</code> | [Write] lightsail:UpdateInstanceMetadataOptions. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateLoadBalancerAttribute">UpdateLoadBalancerAttribute</a></code> | <code>string</code> | [Write] lightsail:UpdateLoadBalancerAttribute. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateRelationalDatabase">UpdateRelationalDatabase</a></code> | <code>string</code> | [Write] lightsail:UpdateRelationalDatabase. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailActions.property.UpdateRelationalDatabaseParameters">UpdateRelationalDatabaseParameters</a></code> | <code>string</code> | [Write] lightsail:UpdateRelationalDatabaseParameters. |

---

##### `actionGetActiveNames`<sup>Required</sup> <a name="actionGetActiveNames" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetActiveNames"></a>

```typescript
public readonly actionGetActiveNames: string;
```

- *Type:* string

[Read] lightsail:GetActiveNames.

---

##### `actionGetAlarms`<sup>Required</sup> <a name="actionGetAlarms" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetAlarms"></a>

```typescript
public readonly actionGetAlarms: string;
```

- *Type:* string

[Read] lightsail:GetAlarms.

---

##### `actionGetAutoSnapshots`<sup>Required</sup> <a name="actionGetAutoSnapshots" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetAutoSnapshots"></a>

```typescript
public readonly actionGetAutoSnapshots: string;
```

- *Type:* string

[Read] lightsail:GetAutoSnapshots.

---

##### `actionGetBlueprints`<sup>Required</sup> <a name="actionGetBlueprints" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBlueprints"></a>

```typescript
public readonly actionGetBlueprints: string;
```

- *Type:* string

[Read] lightsail:GetBlueprints.

---

##### `actionGetBucketAccessKeys`<sup>Required</sup> <a name="actionGetBucketAccessKeys" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketAccessKeys"></a>

```typescript
public readonly actionGetBucketAccessKeys: string;
```

- *Type:* string

[Read] lightsail:GetBucketAccessKeys.

---

##### `actionGetBucketBundles`<sup>Required</sup> <a name="actionGetBucketBundles" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketBundles"></a>

```typescript
public readonly actionGetBucketBundles: string;
```

- *Type:* string

[Read] lightsail:GetBucketBundles.

---

##### `actionGetBucketMetricData`<sup>Required</sup> <a name="actionGetBucketMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBucketMetricData"></a>

```typescript
public readonly actionGetBucketMetricData: string;
```

- *Type:* string

[Read] lightsail:GetBucketMetricData.

---

##### `actionGetBuckets`<sup>Required</sup> <a name="actionGetBuckets" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBuckets"></a>

```typescript
public readonly actionGetBuckets: string;
```

- *Type:* string

[Read] lightsail:GetBuckets.

---

##### `actionGetBundles`<sup>Required</sup> <a name="actionGetBundles" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetBundles"></a>

```typescript
public readonly actionGetBundles: string;
```

- *Type:* string

[Read] lightsail:GetBundles.

---

##### `actionGetCertificates`<sup>Required</sup> <a name="actionGetCertificates" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCertificates"></a>

```typescript
public readonly actionGetCertificates: string;
```

- *Type:* string

[Read] lightsail:GetCertificates.

---

##### `actionGetCloudFormationStackRecords`<sup>Required</sup> <a name="actionGetCloudFormationStackRecords" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCloudFormationStackRecords"></a>

```typescript
public readonly actionGetCloudFormationStackRecords: string;
```

- *Type:* string

[Read] lightsail:GetCloudFormationStackRecords.

---

##### `actionGetContactMethods`<sup>Required</sup> <a name="actionGetContactMethods" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContactMethods"></a>

```typescript
public readonly actionGetContactMethods: string;
```

- *Type:* string

[Read] lightsail:GetContactMethods.

---

##### `actionGetContainerAPIMetadata`<sup>Required</sup> <a name="actionGetContainerAPIMetadata" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerAPIMetadata"></a>

```typescript
public readonly actionGetContainerAPIMetadata: string;
```

- *Type:* string

[Read] lightsail:GetContainerAPIMetadata.

---

##### `actionGetContainerImages`<sup>Required</sup> <a name="actionGetContainerImages" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerImages"></a>

```typescript
public readonly actionGetContainerImages: string;
```

- *Type:* string

[Read] lightsail:GetContainerImages.

---

##### `actionGetContainerLog`<sup>Required</sup> <a name="actionGetContainerLog" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerLog"></a>

```typescript
public readonly actionGetContainerLog: string;
```

- *Type:* string

[Read] lightsail:GetContainerLog.

---

##### `actionGetContainerServiceDeployments`<sup>Required</sup> <a name="actionGetContainerServiceDeployments" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServiceDeployments"></a>

```typescript
public readonly actionGetContainerServiceDeployments: string;
```

- *Type:* string

[Read] lightsail:GetContainerServiceDeployments.

---

##### `actionGetContainerServiceMetricData`<sup>Required</sup> <a name="actionGetContainerServiceMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServiceMetricData"></a>

```typescript
public readonly actionGetContainerServiceMetricData: string;
```

- *Type:* string

[Read] lightsail:GetContainerServiceMetricData.

---

##### `actionGetContainerServicePowers`<sup>Required</sup> <a name="actionGetContainerServicePowers" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServicePowers"></a>

```typescript
public readonly actionGetContainerServicePowers: string;
```

- *Type:* string

[Read] lightsail:GetContainerServicePowers.

---

##### `actionGetContainerServices`<sup>Required</sup> <a name="actionGetContainerServices" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetContainerServices"></a>

```typescript
public readonly actionGetContainerServices: string;
```

- *Type:* string

[Read] lightsail:GetContainerServices.

---

##### `actionGetCostEstimate`<sup>Required</sup> <a name="actionGetCostEstimate" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetCostEstimate"></a>

```typescript
public readonly actionGetCostEstimate: string;
```

- *Type:* string

[Read] lightsail:GetCostEstimate.

---

##### `actionGetDisk`<sup>Required</sup> <a name="actionGetDisk" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDisk"></a>

```typescript
public readonly actionGetDisk: string;
```

- *Type:* string

[Read] lightsail:GetDisk.

---

##### `actionGetDisks`<sup>Required</sup> <a name="actionGetDisks" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDisks"></a>

```typescript
public readonly actionGetDisks: string;
```

- *Type:* string

[Read] lightsail:GetDisks.

---

##### `actionGetDiskSnapshot`<sup>Required</sup> <a name="actionGetDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDiskSnapshot"></a>

```typescript
public readonly actionGetDiskSnapshot: string;
```

- *Type:* string

[Read] lightsail:GetDiskSnapshot.

---

##### `actionGetDiskSnapshots`<sup>Required</sup> <a name="actionGetDiskSnapshots" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDiskSnapshots"></a>

```typescript
public readonly actionGetDiskSnapshots: string;
```

- *Type:* string

[Read] lightsail:GetDiskSnapshots.

---

##### `actionGetDistributionBundles`<sup>Required</sup> <a name="actionGetDistributionBundles" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionBundles"></a>

```typescript
public readonly actionGetDistributionBundles: string;
```

- *Type:* string

[Read] lightsail:GetDistributionBundles.

---

##### `actionGetDistributionLatestCacheReset`<sup>Required</sup> <a name="actionGetDistributionLatestCacheReset" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionLatestCacheReset"></a>

```typescript
public readonly actionGetDistributionLatestCacheReset: string;
```

- *Type:* string

[Read] lightsail:GetDistributionLatestCacheReset.

---

##### `actionGetDistributionMetricData`<sup>Required</sup> <a name="actionGetDistributionMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributionMetricData"></a>

```typescript
public readonly actionGetDistributionMetricData: string;
```

- *Type:* string

[Read] lightsail:GetDistributionMetricData.

---

##### `actionGetDistributions`<sup>Required</sup> <a name="actionGetDistributions" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDistributions"></a>

```typescript
public readonly actionGetDistributions: string;
```

- *Type:* string

[Read] lightsail:GetDistributions.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] lightsail:GetDomain.

---

##### `actionGetDomains`<sup>Required</sup> <a name="actionGetDomains" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetDomains"></a>

```typescript
public readonly actionGetDomains: string;
```

- *Type:* string

[Read] lightsail:GetDomains.

---

##### `actionGetExportSnapshotRecords`<sup>Required</sup> <a name="actionGetExportSnapshotRecords" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetExportSnapshotRecords"></a>

```typescript
public readonly actionGetExportSnapshotRecords: string;
```

- *Type:* string

[Read] lightsail:GetExportSnapshotRecords.

---

##### `actionGetInstance`<sup>Required</sup> <a name="actionGetInstance" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstance"></a>

```typescript
public readonly actionGetInstance: string;
```

- *Type:* string

[Read] lightsail:GetInstance.

---

##### `actionGetInstanceAccessDetails`<sup>Required</sup> <a name="actionGetInstanceAccessDetails" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceAccessDetails"></a>

```typescript
public readonly actionGetInstanceAccessDetails: string;
```

- *Type:* string

[Write] lightsail:GetInstanceAccessDetails.

---

##### `actionGetInstanceMetricData`<sup>Required</sup> <a name="actionGetInstanceMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceMetricData"></a>

```typescript
public readonly actionGetInstanceMetricData: string;
```

- *Type:* string

[Read] lightsail:GetInstanceMetricData.

---

##### `actionGetInstancePortStates`<sup>Required</sup> <a name="actionGetInstancePortStates" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstancePortStates"></a>

```typescript
public readonly actionGetInstancePortStates: string;
```

- *Type:* string

[Read] lightsail:GetInstancePortStates.

---

##### `actionGetInstances`<sup>Required</sup> <a name="actionGetInstances" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstances"></a>

```typescript
public readonly actionGetInstances: string;
```

- *Type:* string

[Read] lightsail:GetInstances.

---

##### `actionGetInstanceSnapshot`<sup>Required</sup> <a name="actionGetInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceSnapshot"></a>

```typescript
public readonly actionGetInstanceSnapshot: string;
```

- *Type:* string

[Read] lightsail:GetInstanceSnapshot.

---

##### `actionGetInstanceSnapshots`<sup>Required</sup> <a name="actionGetInstanceSnapshots" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceSnapshots"></a>

```typescript
public readonly actionGetInstanceSnapshots: string;
```

- *Type:* string

[Read] lightsail:GetInstanceSnapshots.

---

##### `actionGetInstanceState`<sup>Required</sup> <a name="actionGetInstanceState" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetInstanceState"></a>

```typescript
public readonly actionGetInstanceState: string;
```

- *Type:* string

[Read] lightsail:GetInstanceState.

---

##### `actionGetKeyPair`<sup>Required</sup> <a name="actionGetKeyPair" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetKeyPair"></a>

```typescript
public readonly actionGetKeyPair: string;
```

- *Type:* string

[Read] lightsail:GetKeyPair.

---

##### `actionGetKeyPairs`<sup>Required</sup> <a name="actionGetKeyPairs" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetKeyPairs"></a>

```typescript
public readonly actionGetKeyPairs: string;
```

- *Type:* string

[Read] lightsail:GetKeyPairs.

---

##### `actionGetLoadBalancer`<sup>Required</sup> <a name="actionGetLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancer"></a>

```typescript
public readonly actionGetLoadBalancer: string;
```

- *Type:* string

[Read] lightsail:GetLoadBalancer.

---

##### `actionGetLoadBalancerMetricData`<sup>Required</sup> <a name="actionGetLoadBalancerMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerMetricData"></a>

```typescript
public readonly actionGetLoadBalancerMetricData: string;
```

- *Type:* string

[Read] lightsail:GetLoadBalancerMetricData.

---

##### `actionGetLoadBalancers`<sup>Required</sup> <a name="actionGetLoadBalancers" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancers"></a>

```typescript
public readonly actionGetLoadBalancers: string;
```

- *Type:* string

[Read] lightsail:GetLoadBalancers.

---

##### `actionGetLoadBalancerTlsCertificates`<sup>Required</sup> <a name="actionGetLoadBalancerTlsCertificates" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerTlsCertificates"></a>

```typescript
public readonly actionGetLoadBalancerTlsCertificates: string;
```

- *Type:* string

[Read] lightsail:GetLoadBalancerTlsCertificates.

---

##### `actionGetLoadBalancerTlsPolicies`<sup>Required</sup> <a name="actionGetLoadBalancerTlsPolicies" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetLoadBalancerTlsPolicies"></a>

```typescript
public readonly actionGetLoadBalancerTlsPolicies: string;
```

- *Type:* string

[Read] lightsail:GetLoadBalancerTlsPolicies.

---

##### `actionGetOperation`<sup>Required</sup> <a name="actionGetOperation" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperation"></a>

```typescript
public readonly actionGetOperation: string;
```

- *Type:* string

[Read] lightsail:GetOperation.

---

##### `actionGetOperations`<sup>Required</sup> <a name="actionGetOperations" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperations"></a>

```typescript
public readonly actionGetOperations: string;
```

- *Type:* string

[Read] lightsail:GetOperations.

---

##### `actionGetOperationsForResource`<sup>Required</sup> <a name="actionGetOperationsForResource" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetOperationsForResource"></a>

```typescript
public readonly actionGetOperationsForResource: string;
```

- *Type:* string

[Read] lightsail:GetOperationsForResource.

---

##### `actionGetRegions`<sup>Required</sup> <a name="actionGetRegions" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRegions"></a>

```typescript
public readonly actionGetRegions: string;
```

- *Type:* string

[Read] lightsail:GetRegions.

---

##### `actionGetRelationalDatabase`<sup>Required</sup> <a name="actionGetRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabase"></a>

```typescript
public readonly actionGetRelationalDatabase: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabase.

---

##### `actionGetRelationalDatabaseBlueprints`<sup>Required</sup> <a name="actionGetRelationalDatabaseBlueprints" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseBlueprints"></a>

```typescript
public readonly actionGetRelationalDatabaseBlueprints: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseBlueprints.

---

##### `actionGetRelationalDatabaseBundles`<sup>Required</sup> <a name="actionGetRelationalDatabaseBundles" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseBundles"></a>

```typescript
public readonly actionGetRelationalDatabaseBundles: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseBundles.

---

##### `actionGetRelationalDatabaseEvents`<sup>Required</sup> <a name="actionGetRelationalDatabaseEvents" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseEvents"></a>

```typescript
public readonly actionGetRelationalDatabaseEvents: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseEvents.

---

##### `actionGetRelationalDatabaseLogEvents`<sup>Required</sup> <a name="actionGetRelationalDatabaseLogEvents" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseLogEvents"></a>

```typescript
public readonly actionGetRelationalDatabaseLogEvents: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseLogEvents.

---

##### `actionGetRelationalDatabaseLogStreams`<sup>Required</sup> <a name="actionGetRelationalDatabaseLogStreams" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseLogStreams"></a>

```typescript
public readonly actionGetRelationalDatabaseLogStreams: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseLogStreams.

---

##### `actionGetRelationalDatabaseMasterUserPassword`<sup>Required</sup> <a name="actionGetRelationalDatabaseMasterUserPassword" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseMasterUserPassword"></a>

```typescript
public readonly actionGetRelationalDatabaseMasterUserPassword: string;
```

- *Type:* string

[Write] lightsail:GetRelationalDatabaseMasterUserPassword.

---

##### `actionGetRelationalDatabaseMetricData`<sup>Required</sup> <a name="actionGetRelationalDatabaseMetricData" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseMetricData"></a>

```typescript
public readonly actionGetRelationalDatabaseMetricData: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseMetricData.

---

##### `actionGetRelationalDatabaseParameters`<sup>Required</sup> <a name="actionGetRelationalDatabaseParameters" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseParameters"></a>

```typescript
public readonly actionGetRelationalDatabaseParameters: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseParameters.

---

##### `actionGetRelationalDatabases`<sup>Required</sup> <a name="actionGetRelationalDatabases" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabases"></a>

```typescript
public readonly actionGetRelationalDatabases: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabases.

---

##### `actionGetRelationalDatabaseSnapshot`<sup>Required</sup> <a name="actionGetRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseSnapshot"></a>

```typescript
public readonly actionGetRelationalDatabaseSnapshot: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseSnapshot.

---

##### `actionGetRelationalDatabaseSnapshots`<sup>Required</sup> <a name="actionGetRelationalDatabaseSnapshots" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetRelationalDatabaseSnapshots"></a>

```typescript
public readonly actionGetRelationalDatabaseSnapshots: string;
```

- *Type:* string

[Read] lightsail:GetRelationalDatabaseSnapshots.

---

##### `actionGetSetupHistory`<sup>Required</sup> <a name="actionGetSetupHistory" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetSetupHistory"></a>

```typescript
public readonly actionGetSetupHistory: string;
```

- *Type:* string

[Read] lightsail:GetSetupHistory.

---

##### `actionGetStaticIp`<sup>Required</sup> <a name="actionGetStaticIp" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetStaticIp"></a>

```typescript
public readonly actionGetStaticIp: string;
```

- *Type:* string

[Read] lightsail:GetStaticIp.

---

##### `actionGetStaticIps`<sup>Required</sup> <a name="actionGetStaticIps" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionGetStaticIps"></a>

```typescript
public readonly actionGetStaticIps: string;
```

- *Type:* string

[Read] lightsail:GetStaticIps.

---

##### `actionSetIpAddressType`<sup>Required</sup> <a name="actionSetIpAddressType" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionSetIpAddressType"></a>

```typescript
public readonly actionSetIpAddressType: string;
```

- *Type:* string

[Write] lightsail:SetIpAddressType.

---

##### `actionSetResourceAccessForBucket`<sup>Required</sup> <a name="actionSetResourceAccessForBucket" id="@cdk_utils/iam.lightsail.LightSailActions.property.actionSetResourceAccessForBucket"></a>

```typescript
public readonly actionSetResourceAccessForBucket: string;
```

- *Type:* string

[Write] lightsail:SetResourceAccessForBucket.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllocateStaticIp`<sup>Required</sup> <a name="AllocateStaticIp" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllocateStaticIp"></a>

```typescript
public readonly AllocateStaticIp: string;
```

- *Type:* string

[Write] lightsail:AllocateStaticIp.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lightsail.LightSailActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AttachCertificateToDistribution`<sup>Required</sup> <a name="AttachCertificateToDistribution" id="@cdk_utils/iam.lightsail.LightSailActions.property.AttachCertificateToDistribution"></a>

```typescript
public readonly AttachCertificateToDistribution: string;
```

- *Type:* string

[Write] lightsail:AttachCertificateToDistribution.

---

##### `AttachDisk`<sup>Required</sup> <a name="AttachDisk" id="@cdk_utils/iam.lightsail.LightSailActions.property.AttachDisk"></a>

```typescript
public readonly AttachDisk: string;
```

- *Type:* string

[Write] lightsail:AttachDisk.

---

##### `AttachInstancesToLoadBalancer`<sup>Required</sup> <a name="AttachInstancesToLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailActions.property.AttachInstancesToLoadBalancer"></a>

```typescript
public readonly AttachInstancesToLoadBalancer: string;
```

- *Type:* string

[Write] lightsail:AttachInstancesToLoadBalancer.

---

##### `AttachLoadBalancerTlsCertificate`<sup>Required</sup> <a name="AttachLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailActions.property.AttachLoadBalancerTlsCertificate"></a>

```typescript
public readonly AttachLoadBalancerTlsCertificate: string;
```

- *Type:* string

[Write] lightsail:AttachLoadBalancerTlsCertificate.

---

##### `AttachStaticIp`<sup>Required</sup> <a name="AttachStaticIp" id="@cdk_utils/iam.lightsail.LightSailActions.property.AttachStaticIp"></a>

```typescript
public readonly AttachStaticIp: string;
```

- *Type:* string

[Write] lightsail:AttachStaticIp.

---

##### `CloseInstancePublicPorts`<sup>Required</sup> <a name="CloseInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailActions.property.CloseInstancePublicPorts"></a>

```typescript
public readonly CloseInstancePublicPorts: string;
```

- *Type:* string

[Write] lightsail:CloseInstancePublicPorts.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string;
```

- *Type:* string

[Write] lightsail:CopySnapshot.

---

##### `CreateBucket`<sup>Required</sup> <a name="CreateBucket" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateBucket"></a>

```typescript
public readonly CreateBucket: string;
```

- *Type:* string

[Write] lightsail:CreateBucket.

---

##### `CreateBucketAccessKey`<sup>Required</sup> <a name="CreateBucketAccessKey" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateBucketAccessKey"></a>

```typescript
public readonly CreateBucketAccessKey: string;
```

- *Type:* string

[Write] lightsail:CreateBucketAccessKey.

---

##### `CreateCertificate`<sup>Required</sup> <a name="CreateCertificate" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateCertificate"></a>

```typescript
public readonly CreateCertificate: string;
```

- *Type:* string

[Write] lightsail:CreateCertificate.

---

##### `CreateCloudFormationStack`<sup>Required</sup> <a name="CreateCloudFormationStack" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateCloudFormationStack"></a>

```typescript
public readonly CreateCloudFormationStack: string;
```

- *Type:* string

[Write] lightsail:CreateCloudFormationStack.

---

##### `CreateContactMethod`<sup>Required</sup> <a name="CreateContactMethod" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateContactMethod"></a>

```typescript
public readonly CreateContactMethod: string;
```

- *Type:* string

[Write] lightsail:CreateContactMethod.

---

##### `CreateContainerService`<sup>Required</sup> <a name="CreateContainerService" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerService"></a>

```typescript
public readonly CreateContainerService: string;
```

- *Type:* string

[Write] lightsail:CreateContainerService.

---

##### `CreateContainerServiceDeployment`<sup>Required</sup> <a name="CreateContainerServiceDeployment" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerServiceDeployment"></a>

```typescript
public readonly CreateContainerServiceDeployment: string;
```

- *Type:* string

[Write] lightsail:CreateContainerServiceDeployment.

---

##### `CreateContainerServiceRegistryLogin`<sup>Required</sup> <a name="CreateContainerServiceRegistryLogin" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateContainerServiceRegistryLogin"></a>

```typescript
public readonly CreateContainerServiceRegistryLogin: string;
```

- *Type:* string

[Write] lightsail:CreateContainerServiceRegistryLogin.

---

##### `CreateDisk`<sup>Required</sup> <a name="CreateDisk" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDisk"></a>

```typescript
public readonly CreateDisk: string;
```

- *Type:* string

[Write] lightsail:CreateDisk.

---

##### `CreateDiskFromSnapshot`<sup>Required</sup> <a name="CreateDiskFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDiskFromSnapshot"></a>

```typescript
public readonly CreateDiskFromSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateDiskFromSnapshot.

---

##### `CreateDiskSnapshot`<sup>Required</sup> <a name="CreateDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDiskSnapshot"></a>

```typescript
public readonly CreateDiskSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateDiskSnapshot.

---

##### `CreateDistribution`<sup>Required</sup> <a name="CreateDistribution" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDistribution"></a>

```typescript
public readonly CreateDistribution: string;
```

- *Type:* string

[Write] lightsail:CreateDistribution.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] lightsail:CreateDomain.

---

##### `CreateDomainEntry`<sup>Required</sup> <a name="CreateDomainEntry" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateDomainEntry"></a>

```typescript
public readonly CreateDomainEntry: string;
```

- *Type:* string

[Write] lightsail:CreateDomainEntry.

---

##### `CreateGUISessionAccessDetails`<sup>Required</sup> <a name="CreateGUISessionAccessDetails" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateGUISessionAccessDetails"></a>

```typescript
public readonly CreateGUISessionAccessDetails: string;
```

- *Type:* string

[Write] lightsail:CreateGUISessionAccessDetails.

---

##### `CreateInstances`<sup>Required</sup> <a name="CreateInstances" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstances"></a>

```typescript
public readonly CreateInstances: string;
```

- *Type:* string

[Write] lightsail:CreateInstances.

---

##### `CreateInstancesFromSnapshot`<sup>Required</sup> <a name="CreateInstancesFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstancesFromSnapshot"></a>

```typescript
public readonly CreateInstancesFromSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateInstancesFromSnapshot.

---

##### `CreateInstanceSnapshot`<sup>Required</sup> <a name="CreateInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateInstanceSnapshot"></a>

```typescript
public readonly CreateInstanceSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateInstanceSnapshot.

---

##### `CreateKeyPair`<sup>Required</sup> <a name="CreateKeyPair" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateKeyPair"></a>

```typescript
public readonly CreateKeyPair: string;
```

- *Type:* string

[Write] lightsail:CreateKeyPair.

---

##### `CreateLoadBalancer`<sup>Required</sup> <a name="CreateLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateLoadBalancer"></a>

```typescript
public readonly CreateLoadBalancer: string;
```

- *Type:* string

[Write] lightsail:CreateLoadBalancer.

---

##### `CreateLoadBalancerTlsCertificate`<sup>Required</sup> <a name="CreateLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateLoadBalancerTlsCertificate"></a>

```typescript
public readonly CreateLoadBalancerTlsCertificate: string;
```

- *Type:* string

[Write] lightsail:CreateLoadBalancerTlsCertificate.

---

##### `CreateRelationalDatabase`<sup>Required</sup> <a name="CreateRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabase"></a>

```typescript
public readonly CreateRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:CreateRelationalDatabase.

---

##### `CreateRelationalDatabaseFromSnapshot`<sup>Required</sup> <a name="CreateRelationalDatabaseFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabaseFromSnapshot"></a>

```typescript
public readonly CreateRelationalDatabaseFromSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateRelationalDatabaseFromSnapshot.

---

##### `CreateRelationalDatabaseSnapshot`<sup>Required</sup> <a name="CreateRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.CreateRelationalDatabaseSnapshot"></a>

```typescript
public readonly CreateRelationalDatabaseSnapshot: string;
```

- *Type:* string

[Write] lightsail:CreateRelationalDatabaseSnapshot.

---

##### `DeleteAlarm`<sup>Required</sup> <a name="DeleteAlarm" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteAlarm"></a>

```typescript
public readonly DeleteAlarm: string;
```

- *Type:* string

[Write] lightsail:DeleteAlarm.

---

##### `DeleteAutoSnapshot`<sup>Required</sup> <a name="DeleteAutoSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteAutoSnapshot"></a>

```typescript
public readonly DeleteAutoSnapshot: string;
```

- *Type:* string

[Write] lightsail:DeleteAutoSnapshot.

---

##### `DeleteBucket`<sup>Required</sup> <a name="DeleteBucket" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteBucket"></a>

```typescript
public readonly DeleteBucket: string;
```

- *Type:* string

[Write] lightsail:DeleteBucket.

---

##### `DeleteBucketAccessKey`<sup>Required</sup> <a name="DeleteBucketAccessKey" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteBucketAccessKey"></a>

```typescript
public readonly DeleteBucketAccessKey: string;
```

- *Type:* string

[Write] lightsail:DeleteBucketAccessKey.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string;
```

- *Type:* string

[Write] lightsail:DeleteCertificate.

---

##### `DeleteContactMethod`<sup>Required</sup> <a name="DeleteContactMethod" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContactMethod"></a>

```typescript
public readonly DeleteContactMethod: string;
```

- *Type:* string

[Write] lightsail:DeleteContactMethod.

---

##### `DeleteContainerImage`<sup>Required</sup> <a name="DeleteContainerImage" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContainerImage"></a>

```typescript
public readonly DeleteContainerImage: string;
```

- *Type:* string

[Write] lightsail:DeleteContainerImage.

---

##### `DeleteContainerService`<sup>Required</sup> <a name="DeleteContainerService" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteContainerService"></a>

```typescript
public readonly DeleteContainerService: string;
```

- *Type:* string

[Write] lightsail:DeleteContainerService.

---

##### `DeleteDisk`<sup>Required</sup> <a name="DeleteDisk" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDisk"></a>

```typescript
public readonly DeleteDisk: string;
```

- *Type:* string

[Write] lightsail:DeleteDisk.

---

##### `DeleteDiskSnapshot`<sup>Required</sup> <a name="DeleteDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDiskSnapshot"></a>

```typescript
public readonly DeleteDiskSnapshot: string;
```

- *Type:* string

[Write] lightsail:DeleteDiskSnapshot.

---

##### `DeleteDistribution`<sup>Required</sup> <a name="DeleteDistribution" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDistribution"></a>

```typescript
public readonly DeleteDistribution: string;
```

- *Type:* string

[Write] lightsail:DeleteDistribution.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] lightsail:DeleteDomain.

---

##### `DeleteDomainEntry`<sup>Required</sup> <a name="DeleteDomainEntry" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteDomainEntry"></a>

```typescript
public readonly DeleteDomainEntry: string;
```

- *Type:* string

[Write] lightsail:DeleteDomainEntry.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] lightsail:DeleteInstance.

---

##### `DeleteInstanceSnapshot`<sup>Required</sup> <a name="DeleteInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteInstanceSnapshot"></a>

```typescript
public readonly DeleteInstanceSnapshot: string;
```

- *Type:* string

[Write] lightsail:DeleteInstanceSnapshot.

---

##### `DeleteKeyPair`<sup>Required</sup> <a name="DeleteKeyPair" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteKeyPair"></a>

```typescript
public readonly DeleteKeyPair: string;
```

- *Type:* string

[Write] lightsail:DeleteKeyPair.

---

##### `DeleteKnownHostKeys`<sup>Required</sup> <a name="DeleteKnownHostKeys" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteKnownHostKeys"></a>

```typescript
public readonly DeleteKnownHostKeys: string;
```

- *Type:* string

[Write] lightsail:DeleteKnownHostKeys.

---

##### `DeleteLoadBalancer`<sup>Required</sup> <a name="DeleteLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteLoadBalancer"></a>

```typescript
public readonly DeleteLoadBalancer: string;
```

- *Type:* string

[Write] lightsail:DeleteLoadBalancer.

---

##### `DeleteLoadBalancerTlsCertificate`<sup>Required</sup> <a name="DeleteLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteLoadBalancerTlsCertificate"></a>

```typescript
public readonly DeleteLoadBalancerTlsCertificate: string;
```

- *Type:* string

[Write] lightsail:DeleteLoadBalancerTlsCertificate.

---

##### `DeleteRelationalDatabase`<sup>Required</sup> <a name="DeleteRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteRelationalDatabase"></a>

```typescript
public readonly DeleteRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:DeleteRelationalDatabase.

---

##### `DeleteRelationalDatabaseSnapshot`<sup>Required</sup> <a name="DeleteRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.DeleteRelationalDatabaseSnapshot"></a>

```typescript
public readonly DeleteRelationalDatabaseSnapshot: string;
```

- *Type:* string

[Write] lightsail:DeleteRelationalDatabaseSnapshot.

---

##### `DetachCertificateFromDistribution`<sup>Required</sup> <a name="DetachCertificateFromDistribution" id="@cdk_utils/iam.lightsail.LightSailActions.property.DetachCertificateFromDistribution"></a>

```typescript
public readonly DetachCertificateFromDistribution: string;
```

- *Type:* string

[Write] lightsail:DetachCertificateFromDistribution.

---

##### `DetachDisk`<sup>Required</sup> <a name="DetachDisk" id="@cdk_utils/iam.lightsail.LightSailActions.property.DetachDisk"></a>

```typescript
public readonly DetachDisk: string;
```

- *Type:* string

[Write] lightsail:DetachDisk.

---

##### `DetachInstancesFromLoadBalancer`<sup>Required</sup> <a name="DetachInstancesFromLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailActions.property.DetachInstancesFromLoadBalancer"></a>

```typescript
public readonly DetachInstancesFromLoadBalancer: string;
```

- *Type:* string

[Write] lightsail:DetachInstancesFromLoadBalancer.

---

##### `DetachStaticIp`<sup>Required</sup> <a name="DetachStaticIp" id="@cdk_utils/iam.lightsail.LightSailActions.property.DetachStaticIp"></a>

```typescript
public readonly DetachStaticIp: string;
```

- *Type:* string

[Write] lightsail:DetachStaticIp.

---

##### `DisableAddOn`<sup>Required</sup> <a name="DisableAddOn" id="@cdk_utils/iam.lightsail.LightSailActions.property.DisableAddOn"></a>

```typescript
public readonly DisableAddOn: string;
```

- *Type:* string

[Write] lightsail:DisableAddOn.

---

##### `DownloadDefaultKeyPair`<sup>Required</sup> <a name="DownloadDefaultKeyPair" id="@cdk_utils/iam.lightsail.LightSailActions.property.DownloadDefaultKeyPair"></a>

```typescript
public readonly DownloadDefaultKeyPair: string;
```

- *Type:* string

[Write] lightsail:DownloadDefaultKeyPair.

---

##### `EnableAddOn`<sup>Required</sup> <a name="EnableAddOn" id="@cdk_utils/iam.lightsail.LightSailActions.property.EnableAddOn"></a>

```typescript
public readonly EnableAddOn: string;
```

- *Type:* string

[Write] lightsail:EnableAddOn.

---

##### `ExportSnapshot`<sup>Required</sup> <a name="ExportSnapshot" id="@cdk_utils/iam.lightsail.LightSailActions.property.ExportSnapshot"></a>

```typescript
public readonly ExportSnapshot: string;
```

- *Type:* string

[Write] lightsail:ExportSnapshot.

---

##### `ImportKeyPair`<sup>Required</sup> <a name="ImportKeyPair" id="@cdk_utils/iam.lightsail.LightSailActions.property.ImportKeyPair"></a>

```typescript
public readonly ImportKeyPair: string;
```

- *Type:* string

[Write] lightsail:ImportKeyPair.

---

##### `IsVpcPeered`<sup>Required</sup> <a name="IsVpcPeered" id="@cdk_utils/iam.lightsail.LightSailActions.property.IsVpcPeered"></a>

```typescript
public readonly IsVpcPeered: string;
```

- *Type:* string

[Read] lightsail:IsVpcPeered.

---

##### `OpenInstancePublicPorts`<sup>Required</sup> <a name="OpenInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailActions.property.OpenInstancePublicPorts"></a>

```typescript
public readonly OpenInstancePublicPorts: string;
```

- *Type:* string

[Write] lightsail:OpenInstancePublicPorts.

---

##### `PeerVpc`<sup>Required</sup> <a name="PeerVpc" id="@cdk_utils/iam.lightsail.LightSailActions.property.PeerVpc"></a>

```typescript
public readonly PeerVpc: string;
```

- *Type:* string

[Write] lightsail:PeerVpc.

---

##### `PutAlarm`<sup>Required</sup> <a name="PutAlarm" id="@cdk_utils/iam.lightsail.LightSailActions.property.PutAlarm"></a>

```typescript
public readonly PutAlarm: string;
```

- *Type:* string

[Write] lightsail:PutAlarm.

---

##### `PutInstancePublicPorts`<sup>Required</sup> <a name="PutInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailActions.property.PutInstancePublicPorts"></a>

```typescript
public readonly PutInstancePublicPorts: string;
```

- *Type:* string

[Write] lightsail:PutInstancePublicPorts.

---

##### `RebootInstance`<sup>Required</sup> <a name="RebootInstance" id="@cdk_utils/iam.lightsail.LightSailActions.property.RebootInstance"></a>

```typescript
public readonly RebootInstance: string;
```

- *Type:* string

[Write] lightsail:RebootInstance.

---

##### `RebootRelationalDatabase`<sup>Required</sup> <a name="RebootRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.RebootRelationalDatabase"></a>

```typescript
public readonly RebootRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:RebootRelationalDatabase.

---

##### `RegisterContainerImage`<sup>Required</sup> <a name="RegisterContainerImage" id="@cdk_utils/iam.lightsail.LightSailActions.property.RegisterContainerImage"></a>

```typescript
public readonly RegisterContainerImage: string;
```

- *Type:* string

[Write] lightsail:RegisterContainerImage.

---

##### `ReleaseStaticIp`<sup>Required</sup> <a name="ReleaseStaticIp" id="@cdk_utils/iam.lightsail.LightSailActions.property.ReleaseStaticIp"></a>

```typescript
public readonly ReleaseStaticIp: string;
```

- *Type:* string

[Write] lightsail:ReleaseStaticIp.

---

##### `ResetDistributionCache`<sup>Required</sup> <a name="ResetDistributionCache" id="@cdk_utils/iam.lightsail.LightSailActions.property.ResetDistributionCache"></a>

```typescript
public readonly ResetDistributionCache: string;
```

- *Type:* string

[Write] lightsail:ResetDistributionCache.

---

##### `SendContactMethodVerification`<sup>Required</sup> <a name="SendContactMethodVerification" id="@cdk_utils/iam.lightsail.LightSailActions.property.SendContactMethodVerification"></a>

```typescript
public readonly SendContactMethodVerification: string;
```

- *Type:* string

[Write] lightsail:SendContactMethodVerification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lightsail.LightSailActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SetupInstanceHttps`<sup>Required</sup> <a name="SetupInstanceHttps" id="@cdk_utils/iam.lightsail.LightSailActions.property.SetupInstanceHttps"></a>

```typescript
public readonly SetupInstanceHttps: string;
```

- *Type:* string

[Write] lightsail:SetupInstanceHttps.

---

##### `StartGUISession`<sup>Required</sup> <a name="StartGUISession" id="@cdk_utils/iam.lightsail.LightSailActions.property.StartGUISession"></a>

```typescript
public readonly StartGUISession: string;
```

- *Type:* string

[Write] lightsail:StartGUISession.

---

##### `StartInstance`<sup>Required</sup> <a name="StartInstance" id="@cdk_utils/iam.lightsail.LightSailActions.property.StartInstance"></a>

```typescript
public readonly StartInstance: string;
```

- *Type:* string

[Write] lightsail:StartInstance.

---

##### `StartRelationalDatabase`<sup>Required</sup> <a name="StartRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.StartRelationalDatabase"></a>

```typescript
public readonly StartRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:StartRelationalDatabase.

---

##### `StopGUISession`<sup>Required</sup> <a name="StopGUISession" id="@cdk_utils/iam.lightsail.LightSailActions.property.StopGUISession"></a>

```typescript
public readonly StopGUISession: string;
```

- *Type:* string

[Write] lightsail:StopGUISession.

---

##### `StopInstance`<sup>Required</sup> <a name="StopInstance" id="@cdk_utils/iam.lightsail.LightSailActions.property.StopInstance"></a>

```typescript
public readonly StopInstance: string;
```

- *Type:* string

[Write] lightsail:StopInstance.

---

##### `StopRelationalDatabase`<sup>Required</sup> <a name="StopRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.StopRelationalDatabase"></a>

```typescript
public readonly StopRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:StopRelationalDatabase.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lightsail.LightSailActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lightsail:TagResource.

---

##### `TestAlarm`<sup>Required</sup> <a name="TestAlarm" id="@cdk_utils/iam.lightsail.LightSailActions.property.TestAlarm"></a>

```typescript
public readonly TestAlarm: string;
```

- *Type:* string

[Write] lightsail:TestAlarm.

---

##### `UnpeerVpc`<sup>Required</sup> <a name="UnpeerVpc" id="@cdk_utils/iam.lightsail.LightSailActions.property.UnpeerVpc"></a>

```typescript
public readonly UnpeerVpc: string;
```

- *Type:* string

[Write] lightsail:UnpeerVpc.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lightsail.LightSailActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lightsail:UntagResource.

---

##### `UpdateBucket`<sup>Required</sup> <a name="UpdateBucket" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateBucket"></a>

```typescript
public readonly UpdateBucket: string;
```

- *Type:* string

[Write] lightsail:UpdateBucket.

---

##### `UpdateBucketBundle`<sup>Required</sup> <a name="UpdateBucketBundle" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateBucketBundle"></a>

```typescript
public readonly UpdateBucketBundle: string;
```

- *Type:* string

[Write] lightsail:UpdateBucketBundle.

---

##### `UpdateContainerService`<sup>Required</sup> <a name="UpdateContainerService" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateContainerService"></a>

```typescript
public readonly UpdateContainerService: string;
```

- *Type:* string

[Write] lightsail:UpdateContainerService.

---

##### `UpdateDistribution`<sup>Required</sup> <a name="UpdateDistribution" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDistribution"></a>

```typescript
public readonly UpdateDistribution: string;
```

- *Type:* string

[Write] lightsail:UpdateDistribution.

---

##### `UpdateDistributionBundle`<sup>Required</sup> <a name="UpdateDistributionBundle" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDistributionBundle"></a>

```typescript
public readonly UpdateDistributionBundle: string;
```

- *Type:* string

[Write] lightsail:UpdateDistributionBundle.

---

##### `UpdateDomainEntry`<sup>Required</sup> <a name="UpdateDomainEntry" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateDomainEntry"></a>

```typescript
public readonly UpdateDomainEntry: string;
```

- *Type:* string

[Write] lightsail:UpdateDomainEntry.

---

##### `UpdateInstanceMetadataOptions`<sup>Required</sup> <a name="UpdateInstanceMetadataOptions" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateInstanceMetadataOptions"></a>

```typescript
public readonly UpdateInstanceMetadataOptions: string;
```

- *Type:* string

[Write] lightsail:UpdateInstanceMetadataOptions.

---

##### `UpdateLoadBalancerAttribute`<sup>Required</sup> <a name="UpdateLoadBalancerAttribute" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateLoadBalancerAttribute"></a>

```typescript
public readonly UpdateLoadBalancerAttribute: string;
```

- *Type:* string

[Write] lightsail:UpdateLoadBalancerAttribute.

---

##### `UpdateRelationalDatabase`<sup>Required</sup> <a name="UpdateRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateRelationalDatabase"></a>

```typescript
public readonly UpdateRelationalDatabase: string;
```

- *Type:* string

[Write] lightsail:UpdateRelationalDatabase.

---

##### `UpdateRelationalDatabaseParameters`<sup>Required</sup> <a name="UpdateRelationalDatabaseParameters" id="@cdk_utils/iam.lightsail.LightSailActions.property.UpdateRelationalDatabaseParameters"></a>

```typescript
public readonly UpdateRelationalDatabaseParameters: string;
```

- *Type:* string

[Write] lightsail:UpdateRelationalDatabaseParameters.

---

### LightSailConditions <a name="LightSailConditions" id="@cdk_utils/iam.lightsail.LightSailConditions"></a>

Condition key constants and builders for lightsail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lightsail.LightSailConditions.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

new lightsail.LightSailConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lightsail.LightSailConditions.requestTag"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lightsail.LightSailConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lightsail.LightSailConditions.resourceTag"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lightsail.LightSailConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.tagKeys"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lightsail.LightSailConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateBucketConditionKeys">CreateBucketConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBucket action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateCertificateConditionKeys">CreateCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCertificate action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateContactMethodConditionKeys">CreateContactMethodConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactMethod action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateContainerServiceConditionKeys">CreateContainerServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainerService action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskConditionKeys">CreateDiskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDisk action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskFromSnapshotConditionKeys">CreateDiskFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDiskFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskSnapshotConditionKeys">CreateDiskSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDiskSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDistributionConditionKeys">CreateDistributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDistribution action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstancesConditionKeys">CreateInstancesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstances action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstancesFromSnapshotConditionKeys">CreateInstancesFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstancesFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstanceSnapshotConditionKeys">CreateInstanceSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstanceSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateKeyPairConditionKeys">CreateKeyPairConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateKeyPair action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateLoadBalancerConditionKeys">CreateLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseConditionKeys">CreateRelationalDatabaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelationalDatabase action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseFromSnapshotConditionKeys">CreateRelationalDatabaseFromSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelationalDatabaseFromSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseSnapshotConditionKeys">CreateRelationalDatabaseSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelationalDatabaseSnapshot action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.PutAlarmConditionKeys">PutAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlarm action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lightsail.LightSailConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBucketConditionKeys`<sup>Required</sup> <a name="CreateBucketConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateBucketConditionKeys"></a>

```typescript
public readonly CreateBucketConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBucket action.

---

##### `CreateCertificateConditionKeys`<sup>Required</sup> <a name="CreateCertificateConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateCertificateConditionKeys"></a>

```typescript
public readonly CreateCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCertificate action.

---

##### `CreateContactMethodConditionKeys`<sup>Required</sup> <a name="CreateContactMethodConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateContactMethodConditionKeys"></a>

```typescript
public readonly CreateContactMethodConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactMethod action.

---

##### `CreateContainerServiceConditionKeys`<sup>Required</sup> <a name="CreateContainerServiceConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateContainerServiceConditionKeys"></a>

```typescript
public readonly CreateContainerServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainerService action.

---

##### `CreateDiskConditionKeys`<sup>Required</sup> <a name="CreateDiskConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskConditionKeys"></a>

```typescript
public readonly CreateDiskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDisk action.

---

##### `CreateDiskFromSnapshotConditionKeys`<sup>Required</sup> <a name="CreateDiskFromSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskFromSnapshotConditionKeys"></a>

```typescript
public readonly CreateDiskFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDiskFromSnapshot action.

---

##### `CreateDiskSnapshotConditionKeys`<sup>Required</sup> <a name="CreateDiskSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDiskSnapshotConditionKeys"></a>

```typescript
public readonly CreateDiskSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDiskSnapshot action.

---

##### `CreateDistributionConditionKeys`<sup>Required</sup> <a name="CreateDistributionConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDistributionConditionKeys"></a>

```typescript
public readonly CreateDistributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDistribution action.

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `CreateInstancesConditionKeys`<sup>Required</sup> <a name="CreateInstancesConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstancesConditionKeys"></a>

```typescript
public readonly CreateInstancesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstances action.

---

##### `CreateInstancesFromSnapshotConditionKeys`<sup>Required</sup> <a name="CreateInstancesFromSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstancesFromSnapshotConditionKeys"></a>

```typescript
public readonly CreateInstancesFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstancesFromSnapshot action.

---

##### `CreateInstanceSnapshotConditionKeys`<sup>Required</sup> <a name="CreateInstanceSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateInstanceSnapshotConditionKeys"></a>

```typescript
public readonly CreateInstanceSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstanceSnapshot action.

---

##### `CreateKeyPairConditionKeys`<sup>Required</sup> <a name="CreateKeyPairConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateKeyPairConditionKeys"></a>

```typescript
public readonly CreateKeyPairConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateKeyPair action.

---

##### `CreateLoadBalancerConditionKeys`<sup>Required</sup> <a name="CreateLoadBalancerConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateLoadBalancerConditionKeys"></a>

```typescript
public readonly CreateLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoadBalancer action.

---

##### `CreateRelationalDatabaseConditionKeys`<sup>Required</sup> <a name="CreateRelationalDatabaseConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseConditionKeys"></a>

```typescript
public readonly CreateRelationalDatabaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelationalDatabase action.

---

##### `CreateRelationalDatabaseFromSnapshotConditionKeys`<sup>Required</sup> <a name="CreateRelationalDatabaseFromSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseFromSnapshotConditionKeys"></a>

```typescript
public readonly CreateRelationalDatabaseFromSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelationalDatabaseFromSnapshot action.

---

##### `CreateRelationalDatabaseSnapshotConditionKeys`<sup>Required</sup> <a name="CreateRelationalDatabaseSnapshotConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.CreateRelationalDatabaseSnapshotConditionKeys"></a>

```typescript
public readonly CreateRelationalDatabaseSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelationalDatabaseSnapshot action.

---

##### `PutAlarmConditionKeys`<sup>Required</sup> <a name="PutAlarmConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.PutAlarmConditionKeys"></a>

```typescript
public readonly PutAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlarm action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lightsail.LightSailConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LightSailOperations <a name="LightSailOperations" id="@cdk_utils/iam.lightsail.LightSailOperations"></a>

API operation to required IAM actions mapping for lightsail.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lightsail.LightSailOperations.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

new lightsail.LightSailOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AllocateStaticIp">AllocateStaticIp</a></code> | <code>string[]</code> | IAM actions required for the AllocateStaticIp API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AttachCertificateToDistribution">AttachCertificateToDistribution</a></code> | <code>string[]</code> | IAM actions required for the AttachCertificateToDistribution API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AttachDisk">AttachDisk</a></code> | <code>string[]</code> | IAM actions required for the AttachDisk API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AttachInstancesToLoadBalancer">AttachInstancesToLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the AttachInstancesToLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AttachLoadBalancerTlsCertificate">AttachLoadBalancerTlsCertificate</a></code> | <code>string[]</code> | IAM actions required for the AttachLoadBalancerTlsCertificate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.AttachStaticIp">AttachStaticIp</a></code> | <code>string[]</code> | IAM actions required for the AttachStaticIp API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CloseInstancePublicPorts">CloseInstancePublicPorts</a></code> | <code>string[]</code> | IAM actions required for the CloseInstancePublicPorts API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CopySnapshot">CopySnapshot</a></code> | <code>string[]</code> | IAM actions required for the CopySnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateBucket">CreateBucket</a></code> | <code>string[]</code> | IAM actions required for the CreateBucket API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateBucketAccessKey">CreateBucketAccessKey</a></code> | <code>string[]</code> | IAM actions required for the CreateBucketAccessKey API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateCertificate">CreateCertificate</a></code> | <code>string[]</code> | IAM actions required for the CreateCertificate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateCloudFormationStack">CreateCloudFormationStack</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudFormationStack API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContactMethod">CreateContactMethod</a></code> | <code>string[]</code> | IAM actions required for the CreateContactMethod API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerService">CreateContainerService</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerService API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerServiceDeployment">CreateContainerServiceDeployment</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerServiceDeployment API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerServiceRegistryLogin">CreateContainerServiceRegistryLogin</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerServiceRegistryLogin API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDisk">CreateDisk</a></code> | <code>string[]</code> | IAM actions required for the CreateDisk API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDiskFromSnapshot">CreateDiskFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateDiskFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDiskSnapshot">CreateDiskSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateDiskSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDistribution">CreateDistribution</a></code> | <code>string[]</code> | IAM actions required for the CreateDistribution API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDomainEntry">CreateDomainEntry</a></code> | <code>string[]</code> | IAM actions required for the CreateDomainEntry API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateGUISessionAccessDetails">CreateGUISessionAccessDetails</a></code> | <code>string[]</code> | IAM actions required for the CreateGUISessionAccessDetails API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstances">CreateInstances</a></code> | <code>string[]</code> | IAM actions required for the CreateInstances API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstancesFromSnapshot">CreateInstancesFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateInstancesFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstanceSnapshot">CreateInstanceSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateInstanceSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateKeyPair">CreateKeyPair</a></code> | <code>string[]</code> | IAM actions required for the CreateKeyPair API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateLoadBalancer">CreateLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the CreateLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateLoadBalancerTlsCertificate">CreateLoadBalancerTlsCertificate</a></code> | <code>string[]</code> | IAM actions required for the CreateLoadBalancerTlsCertificate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabase">CreateRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the CreateRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabaseFromSnapshot">CreateRelationalDatabaseFromSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateRelationalDatabaseFromSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabaseSnapshot">CreateRelationalDatabaseSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateRelationalDatabaseSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteAlarm">DeleteAlarm</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlarm API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteAutoSnapshot">DeleteAutoSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutoSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteBucket">DeleteBucket</a></code> | <code>string[]</code> | IAM actions required for the DeleteBucket API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteBucketAccessKey">DeleteBucketAccessKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteBucketAccessKey API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteCertificate">DeleteCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCertificate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContactMethod">DeleteContactMethod</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactMethod API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContainerImage">DeleteContainerImage</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerImage API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContainerService">DeleteContainerService</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerService API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDisk">DeleteDisk</a></code> | <code>string[]</code> | IAM actions required for the DeleteDisk API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDiskSnapshot">DeleteDiskSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteDiskSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDistribution">DeleteDistribution</a></code> | <code>string[]</code> | IAM actions required for the DeleteDistribution API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDomainEntry">DeleteDomainEntry</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainEntry API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteInstance">DeleteInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstance API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteInstanceSnapshot">DeleteInstanceSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteKeyPair">DeleteKeyPair</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeyPair API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteKnownHostKeys">DeleteKnownHostKeys</a></code> | <code>string[]</code> | IAM actions required for the DeleteKnownHostKeys API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteLoadBalancer">DeleteLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteLoadBalancerTlsCertificate">DeleteLoadBalancerTlsCertificate</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoadBalancerTlsCertificate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteRelationalDatabase">DeleteRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the DeleteRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteRelationalDatabaseSnapshot">DeleteRelationalDatabaseSnapshot</a></code> | <code>string[]</code> | IAM actions required for the DeleteRelationalDatabaseSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DetachCertificateFromDistribution">DetachCertificateFromDistribution</a></code> | <code>string[]</code> | IAM actions required for the DetachCertificateFromDistribution API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DetachDisk">DetachDisk</a></code> | <code>string[]</code> | IAM actions required for the DetachDisk API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DetachInstancesFromLoadBalancer">DetachInstancesFromLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the DetachInstancesFromLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DetachStaticIp">DetachStaticIp</a></code> | <code>string[]</code> | IAM actions required for the DetachStaticIp API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DisableAddOn">DisableAddOn</a></code> | <code>string[]</code> | IAM actions required for the DisableAddOn API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.DownloadDefaultKeyPair">DownloadDefaultKeyPair</a></code> | <code>string[]</code> | IAM actions required for the DownloadDefaultKeyPair API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.EnableAddOn">EnableAddOn</a></code> | <code>string[]</code> | IAM actions required for the EnableAddOn API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.ExportSnapshot">ExportSnapshot</a></code> | <code>string[]</code> | IAM actions required for the ExportSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.ImportKeyPair">ImportKeyPair</a></code> | <code>string[]</code> | IAM actions required for the ImportKeyPair API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.IsVpcPeered">IsVpcPeered</a></code> | <code>string[]</code> | IAM actions required for the IsVpcPeered API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.OpenInstancePublicPorts">OpenInstancePublicPorts</a></code> | <code>string[]</code> | IAM actions required for the OpenInstancePublicPorts API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetActiveNames">opGetActiveNames</a></code> | <code>string[]</code> | IAM actions required for the GetActiveNames API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetAlarms">opGetAlarms</a></code> | <code>string[]</code> | IAM actions required for the GetAlarms API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetAutoSnapshots">opGetAutoSnapshots</a></code> | <code>string[]</code> | IAM actions required for the GetAutoSnapshots API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBlueprints">opGetBlueprints</a></code> | <code>string[]</code> | IAM actions required for the GetBlueprints API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketAccessKeys">opGetBucketAccessKeys</a></code> | <code>string[]</code> | IAM actions required for the GetBucketAccessKeys API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketBundles">opGetBucketBundles</a></code> | <code>string[]</code> | IAM actions required for the GetBucketBundles API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketMetricData">opGetBucketMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetBucketMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBuckets">opGetBuckets</a></code> | <code>string[]</code> | IAM actions required for the GetBuckets API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBundles">opGetBundles</a></code> | <code>string[]</code> | IAM actions required for the GetBundles API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCertificates">opGetCertificates</a></code> | <code>string[]</code> | IAM actions required for the GetCertificates API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCloudFormationStackRecords">opGetCloudFormationStackRecords</a></code> | <code>string[]</code> | IAM actions required for the GetCloudFormationStackRecords API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContactMethods">opGetContactMethods</a></code> | <code>string[]</code> | IAM actions required for the GetContactMethods API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerAPIMetadata">opGetContainerAPIMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetContainerAPIMetadata API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerImages">opGetContainerImages</a></code> | <code>string[]</code> | IAM actions required for the GetContainerImages API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerLog">opGetContainerLog</a></code> | <code>string[]</code> | IAM actions required for the GetContainerLog API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServiceDeployments">opGetContainerServiceDeployments</a></code> | <code>string[]</code> | IAM actions required for the GetContainerServiceDeployments API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServiceMetricData">opGetContainerServiceMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetContainerServiceMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServicePowers">opGetContainerServicePowers</a></code> | <code>string[]</code> | IAM actions required for the GetContainerServicePowers API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServices">opGetContainerServices</a></code> | <code>string[]</code> | IAM actions required for the GetContainerServices API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCostEstimate">opGetCostEstimate</a></code> | <code>string[]</code> | IAM actions required for the GetCostEstimate API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDisk">opGetDisk</a></code> | <code>string[]</code> | IAM actions required for the GetDisk API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDisks">opGetDisks</a></code> | <code>string[]</code> | IAM actions required for the GetDisks API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDiskSnapshot">opGetDiskSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetDiskSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDiskSnapshots">opGetDiskSnapshots</a></code> | <code>string[]</code> | IAM actions required for the GetDiskSnapshots API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionBundles">opGetDistributionBundles</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionBundles API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionLatestCacheReset">opGetDistributionLatestCacheReset</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionLatestCacheReset API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionMetricData">opGetDistributionMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetDistributionMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributions">opGetDistributions</a></code> | <code>string[]</code> | IAM actions required for the GetDistributions API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDomain">opGetDomain</a></code> | <code>string[]</code> | IAM actions required for the GetDomain API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDomains">opGetDomains</a></code> | <code>string[]</code> | IAM actions required for the GetDomains API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetExportSnapshotRecords">opGetExportSnapshotRecords</a></code> | <code>string[]</code> | IAM actions required for the GetExportSnapshotRecords API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstance">opGetInstance</a></code> | <code>string[]</code> | IAM actions required for the GetInstance API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceAccessDetails">opGetInstanceAccessDetails</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceAccessDetails API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceMetricData">opGetInstanceMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstancePortStates">opGetInstancePortStates</a></code> | <code>string[]</code> | IAM actions required for the GetInstancePortStates API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstances">opGetInstances</a></code> | <code>string[]</code> | IAM actions required for the GetInstances API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceSnapshot">opGetInstanceSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceSnapshots">opGetInstanceSnapshots</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceSnapshots API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceState">opGetInstanceState</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceState API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetKeyPair">opGetKeyPair</a></code> | <code>string[]</code> | IAM actions required for the GetKeyPair API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetKeyPairs">opGetKeyPairs</a></code> | <code>string[]</code> | IAM actions required for the GetKeyPairs API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancer">opGetLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the GetLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerMetricData">opGetLoadBalancerMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetLoadBalancerMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancers">opGetLoadBalancers</a></code> | <code>string[]</code> | IAM actions required for the GetLoadBalancers API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerTlsCertificates">opGetLoadBalancerTlsCertificates</a></code> | <code>string[]</code> | IAM actions required for the GetLoadBalancerTlsCertificates API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerTlsPolicies">opGetLoadBalancerTlsPolicies</a></code> | <code>string[]</code> | IAM actions required for the GetLoadBalancerTlsPolicies API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperation">opGetOperation</a></code> | <code>string[]</code> | IAM actions required for the GetOperation API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperations">opGetOperations</a></code> | <code>string[]</code> | IAM actions required for the GetOperations API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperationsForResource">opGetOperationsForResource</a></code> | <code>string[]</code> | IAM actions required for the GetOperationsForResource API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRegions">opGetRegions</a></code> | <code>string[]</code> | IAM actions required for the GetRegions API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabase">opGetRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseBlueprints">opGetRelationalDatabaseBlueprints</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseBlueprints API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseBundles">opGetRelationalDatabaseBundles</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseBundles API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseEvents">opGetRelationalDatabaseEvents</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseEvents API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseLogEvents">opGetRelationalDatabaseLogEvents</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseLogEvents API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseLogStreams">opGetRelationalDatabaseLogStreams</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseLogStreams API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseMasterUserPassword">opGetRelationalDatabaseMasterUserPassword</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseMasterUserPassword API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseMetricData">opGetRelationalDatabaseMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseMetricData API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseParameters">opGetRelationalDatabaseParameters</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseParameters API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabases">opGetRelationalDatabases</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabases API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseSnapshot">opGetRelationalDatabaseSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseSnapshot API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseSnapshots">opGetRelationalDatabaseSnapshots</a></code> | <code>string[]</code> | IAM actions required for the GetRelationalDatabaseSnapshots API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetSetupHistory">opGetSetupHistory</a></code> | <code>string[]</code> | IAM actions required for the GetSetupHistory API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetStaticIp">opGetStaticIp</a></code> | <code>string[]</code> | IAM actions required for the GetStaticIp API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opGetStaticIps">opGetStaticIps</a></code> | <code>string[]</code> | IAM actions required for the GetStaticIps API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opSetIpAddressType">opSetIpAddressType</a></code> | <code>string[]</code> | IAM actions required for the SetIpAddressType API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.opSetResourceAccessForBucket">opSetResourceAccessForBucket</a></code> | <code>string[]</code> | IAM actions required for the SetResourceAccessForBucket API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.PeerVpc">PeerVpc</a></code> | <code>string[]</code> | IAM actions required for the PeerVpc API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.PutAlarm">PutAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutAlarm API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.PutInstancePublicPorts">PutInstancePublicPorts</a></code> | <code>string[]</code> | IAM actions required for the PutInstancePublicPorts API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.RebootInstance">RebootInstance</a></code> | <code>string[]</code> | IAM actions required for the RebootInstance API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.RebootRelationalDatabase">RebootRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the RebootRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.RegisterContainerImage">RegisterContainerImage</a></code> | <code>string[]</code> | IAM actions required for the RegisterContainerImage API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.ReleaseStaticIp">ReleaseStaticIp</a></code> | <code>string[]</code> | IAM actions required for the ReleaseStaticIp API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.ResetDistributionCache">ResetDistributionCache</a></code> | <code>string[]</code> | IAM actions required for the ResetDistributionCache API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.SendContactMethodVerification">SendContactMethodVerification</a></code> | <code>string[]</code> | IAM actions required for the SendContactMethodVerification API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.SetupInstanceHttps">SetupInstanceHttps</a></code> | <code>string[]</code> | IAM actions required for the SetupInstanceHttps API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StartGUISession">StartGUISession</a></code> | <code>string[]</code> | IAM actions required for the StartGUISession API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StartInstance">StartInstance</a></code> | <code>string[]</code> | IAM actions required for the StartInstance API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StartRelationalDatabase">StartRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the StartRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StopGUISession">StopGUISession</a></code> | <code>string[]</code> | IAM actions required for the StopGUISession API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StopInstance">StopInstance</a></code> | <code>string[]</code> | IAM actions required for the StopInstance API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.StopRelationalDatabase">StopRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the StopRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.TestAlarm">TestAlarm</a></code> | <code>string[]</code> | IAM actions required for the TestAlarm API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UnpeerVpc">UnpeerVpc</a></code> | <code>string[]</code> | IAM actions required for the UnpeerVpc API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateBucket">UpdateBucket</a></code> | <code>string[]</code> | IAM actions required for the UpdateBucket API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateBucketBundle">UpdateBucketBundle</a></code> | <code>string[]</code> | IAM actions required for the UpdateBucketBundle API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateContainerService">UpdateContainerService</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerService API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDistribution">UpdateDistribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistribution API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDistributionBundle">UpdateDistributionBundle</a></code> | <code>string[]</code> | IAM actions required for the UpdateDistributionBundle API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDomainEntry">UpdateDomainEntry</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomainEntry API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateInstanceMetadataOptions">UpdateInstanceMetadataOptions</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceMetadataOptions API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateLoadBalancerAttribute">UpdateLoadBalancerAttribute</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoadBalancerAttribute API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateRelationalDatabase">UpdateRelationalDatabase</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelationalDatabase API call. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateRelationalDatabaseParameters">UpdateRelationalDatabaseParameters</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelationalDatabaseParameters API call. |

---

##### `AllocateStaticIp`<sup>Required</sup> <a name="AllocateStaticIp" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AllocateStaticIp"></a>

```typescript
public readonly AllocateStaticIp: string[];
```

- *Type:* string[]

IAM actions required for the AllocateStaticIp API call.

---

##### `AttachCertificateToDistribution`<sup>Required</sup> <a name="AttachCertificateToDistribution" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AttachCertificateToDistribution"></a>

```typescript
public readonly AttachCertificateToDistribution: string[];
```

- *Type:* string[]

IAM actions required for the AttachCertificateToDistribution API call.

---

##### `AttachDisk`<sup>Required</sup> <a name="AttachDisk" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AttachDisk"></a>

```typescript
public readonly AttachDisk: string[];
```

- *Type:* string[]

IAM actions required for the AttachDisk API call.

---

##### `AttachInstancesToLoadBalancer`<sup>Required</sup> <a name="AttachInstancesToLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AttachInstancesToLoadBalancer"></a>

```typescript
public readonly AttachInstancesToLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the AttachInstancesToLoadBalancer API call.

---

##### `AttachLoadBalancerTlsCertificate`<sup>Required</sup> <a name="AttachLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AttachLoadBalancerTlsCertificate"></a>

```typescript
public readonly AttachLoadBalancerTlsCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AttachLoadBalancerTlsCertificate API call.

---

##### `AttachStaticIp`<sup>Required</sup> <a name="AttachStaticIp" id="@cdk_utils/iam.lightsail.LightSailOperations.property.AttachStaticIp"></a>

```typescript
public readonly AttachStaticIp: string[];
```

- *Type:* string[]

IAM actions required for the AttachStaticIp API call.

---

##### `CloseInstancePublicPorts`<sup>Required</sup> <a name="CloseInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CloseInstancePublicPorts"></a>

```typescript
public readonly CloseInstancePublicPorts: string[];
```

- *Type:* string[]

IAM actions required for the CloseInstancePublicPorts API call.

---

##### `CopySnapshot`<sup>Required</sup> <a name="CopySnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CopySnapshot"></a>

```typescript
public readonly CopySnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CopySnapshot API call.

---

##### `CreateBucket`<sup>Required</sup> <a name="CreateBucket" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateBucket"></a>

```typescript
public readonly CreateBucket: string[];
```

- *Type:* string[]

IAM actions required for the CreateBucket API call.

---

##### `CreateBucketAccessKey`<sup>Required</sup> <a name="CreateBucketAccessKey" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateBucketAccessKey"></a>

```typescript
public readonly CreateBucketAccessKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateBucketAccessKey API call.

---

##### `CreateCertificate`<sup>Required</sup> <a name="CreateCertificate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateCertificate"></a>

```typescript
public readonly CreateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the CreateCertificate API call.

---

##### `CreateCloudFormationStack`<sup>Required</sup> <a name="CreateCloudFormationStack" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateCloudFormationStack"></a>

```typescript
public readonly CreateCloudFormationStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudFormationStack API call.

---

##### `CreateContactMethod`<sup>Required</sup> <a name="CreateContactMethod" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContactMethod"></a>

```typescript
public readonly CreateContactMethod: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactMethod API call.

---

##### `CreateContainerService`<sup>Required</sup> <a name="CreateContainerService" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerService"></a>

```typescript
public readonly CreateContainerService: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerService API call.

---

##### `CreateContainerServiceDeployment`<sup>Required</sup> <a name="CreateContainerServiceDeployment" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerServiceDeployment"></a>

```typescript
public readonly CreateContainerServiceDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerServiceDeployment API call.

---

##### `CreateContainerServiceRegistryLogin`<sup>Required</sup> <a name="CreateContainerServiceRegistryLogin" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateContainerServiceRegistryLogin"></a>

```typescript
public readonly CreateContainerServiceRegistryLogin: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerServiceRegistryLogin API call.

---

##### `CreateDisk`<sup>Required</sup> <a name="CreateDisk" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDisk"></a>

```typescript
public readonly CreateDisk: string[];
```

- *Type:* string[]

IAM actions required for the CreateDisk API call.

---

##### `CreateDiskFromSnapshot`<sup>Required</sup> <a name="CreateDiskFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDiskFromSnapshot"></a>

```typescript
public readonly CreateDiskFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDiskFromSnapshot API call.

---

##### `CreateDiskSnapshot`<sup>Required</sup> <a name="CreateDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDiskSnapshot"></a>

```typescript
public readonly CreateDiskSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateDiskSnapshot API call.

---

##### `CreateDistribution`<sup>Required</sup> <a name="CreateDistribution" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDistribution"></a>

```typescript
public readonly CreateDistribution: string[];
```

- *Type:* string[]

IAM actions required for the CreateDistribution API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateDomainEntry`<sup>Required</sup> <a name="CreateDomainEntry" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateDomainEntry"></a>

```typescript
public readonly CreateDomainEntry: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomainEntry API call.

---

##### `CreateGUISessionAccessDetails`<sup>Required</sup> <a name="CreateGUISessionAccessDetails" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateGUISessionAccessDetails"></a>

```typescript
public readonly CreateGUISessionAccessDetails: string[];
```

- *Type:* string[]

IAM actions required for the CreateGUISessionAccessDetails API call.

---

##### `CreateInstances`<sup>Required</sup> <a name="CreateInstances" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstances"></a>

```typescript
public readonly CreateInstances: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstances API call.

---

##### `CreateInstancesFromSnapshot`<sup>Required</sup> <a name="CreateInstancesFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstancesFromSnapshot"></a>

```typescript
public readonly CreateInstancesFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstancesFromSnapshot API call.

---

##### `CreateInstanceSnapshot`<sup>Required</sup> <a name="CreateInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateInstanceSnapshot"></a>

```typescript
public readonly CreateInstanceSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstanceSnapshot API call.

---

##### `CreateKeyPair`<sup>Required</sup> <a name="CreateKeyPair" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateKeyPair"></a>

```typescript
public readonly CreateKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeyPair API call.

---

##### `CreateLoadBalancer`<sup>Required</sup> <a name="CreateLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateLoadBalancer"></a>

```typescript
public readonly CreateLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoadBalancer API call.

---

##### `CreateLoadBalancerTlsCertificate`<sup>Required</sup> <a name="CreateLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateLoadBalancerTlsCertificate"></a>

```typescript
public readonly CreateLoadBalancerTlsCertificate: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoadBalancerTlsCertificate API call.

---

##### `CreateRelationalDatabase`<sup>Required</sup> <a name="CreateRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabase"></a>

```typescript
public readonly CreateRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelationalDatabase API call.

---

##### `CreateRelationalDatabaseFromSnapshot`<sup>Required</sup> <a name="CreateRelationalDatabaseFromSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabaseFromSnapshot"></a>

```typescript
public readonly CreateRelationalDatabaseFromSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelationalDatabaseFromSnapshot API call.

---

##### `CreateRelationalDatabaseSnapshot`<sup>Required</sup> <a name="CreateRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.CreateRelationalDatabaseSnapshot"></a>

```typescript
public readonly CreateRelationalDatabaseSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelationalDatabaseSnapshot API call.

---

##### `DeleteAlarm`<sup>Required</sup> <a name="DeleteAlarm" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteAlarm"></a>

```typescript
public readonly DeleteAlarm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlarm API call.

---

##### `DeleteAutoSnapshot`<sup>Required</sup> <a name="DeleteAutoSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteAutoSnapshot"></a>

```typescript
public readonly DeleteAutoSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutoSnapshot API call.

---

##### `DeleteBucket`<sup>Required</sup> <a name="DeleteBucket" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteBucket"></a>

```typescript
public readonly DeleteBucket: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBucket API call.

---

##### `DeleteBucketAccessKey`<sup>Required</sup> <a name="DeleteBucketAccessKey" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteBucketAccessKey"></a>

```typescript
public readonly DeleteBucketAccessKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBucketAccessKey API call.

---

##### `DeleteCertificate`<sup>Required</sup> <a name="DeleteCertificate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteCertificate"></a>

```typescript
public readonly DeleteCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCertificate API call.

---

##### `DeleteContactMethod`<sup>Required</sup> <a name="DeleteContactMethod" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContactMethod"></a>

```typescript
public readonly DeleteContactMethod: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactMethod API call.

---

##### `DeleteContainerImage`<sup>Required</sup> <a name="DeleteContainerImage" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContainerImage"></a>

```typescript
public readonly DeleteContainerImage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerImage API call.

---

##### `DeleteContainerService`<sup>Required</sup> <a name="DeleteContainerService" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteContainerService"></a>

```typescript
public readonly DeleteContainerService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerService API call.

---

##### `DeleteDisk`<sup>Required</sup> <a name="DeleteDisk" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDisk"></a>

```typescript
public readonly DeleteDisk: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDisk API call.

---

##### `DeleteDiskSnapshot`<sup>Required</sup> <a name="DeleteDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDiskSnapshot"></a>

```typescript
public readonly DeleteDiskSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDiskSnapshot API call.

---

##### `DeleteDistribution`<sup>Required</sup> <a name="DeleteDistribution" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDistribution"></a>

```typescript
public readonly DeleteDistribution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDistribution API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteDomainEntry`<sup>Required</sup> <a name="DeleteDomainEntry" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteDomainEntry"></a>

```typescript
public readonly DeleteDomainEntry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainEntry API call.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstance API call.

---

##### `DeleteInstanceSnapshot`<sup>Required</sup> <a name="DeleteInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteInstanceSnapshot"></a>

```typescript
public readonly DeleteInstanceSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceSnapshot API call.

---

##### `DeleteKeyPair`<sup>Required</sup> <a name="DeleteKeyPair" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteKeyPair"></a>

```typescript
public readonly DeleteKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeyPair API call.

---

##### `DeleteKnownHostKeys`<sup>Required</sup> <a name="DeleteKnownHostKeys" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteKnownHostKeys"></a>

```typescript
public readonly DeleteKnownHostKeys: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKnownHostKeys API call.

---

##### `DeleteLoadBalancer`<sup>Required</sup> <a name="DeleteLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteLoadBalancer"></a>

```typescript
public readonly DeleteLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoadBalancer API call.

---

##### `DeleteLoadBalancerTlsCertificate`<sup>Required</sup> <a name="DeleteLoadBalancerTlsCertificate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteLoadBalancerTlsCertificate"></a>

```typescript
public readonly DeleteLoadBalancerTlsCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoadBalancerTlsCertificate API call.

---

##### `DeleteRelationalDatabase`<sup>Required</sup> <a name="DeleteRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteRelationalDatabase"></a>

```typescript
public readonly DeleteRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRelationalDatabase API call.

---

##### `DeleteRelationalDatabaseSnapshot`<sup>Required</sup> <a name="DeleteRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DeleteRelationalDatabaseSnapshot"></a>

```typescript
public readonly DeleteRelationalDatabaseSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRelationalDatabaseSnapshot API call.

---

##### `DetachCertificateFromDistribution`<sup>Required</sup> <a name="DetachCertificateFromDistribution" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DetachCertificateFromDistribution"></a>

```typescript
public readonly DetachCertificateFromDistribution: string[];
```

- *Type:* string[]

IAM actions required for the DetachCertificateFromDistribution API call.

---

##### `DetachDisk`<sup>Required</sup> <a name="DetachDisk" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DetachDisk"></a>

```typescript
public readonly DetachDisk: string[];
```

- *Type:* string[]

IAM actions required for the DetachDisk API call.

---

##### `DetachInstancesFromLoadBalancer`<sup>Required</sup> <a name="DetachInstancesFromLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DetachInstancesFromLoadBalancer"></a>

```typescript
public readonly DetachInstancesFromLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the DetachInstancesFromLoadBalancer API call.

---

##### `DetachStaticIp`<sup>Required</sup> <a name="DetachStaticIp" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DetachStaticIp"></a>

```typescript
public readonly DetachStaticIp: string[];
```

- *Type:* string[]

IAM actions required for the DetachStaticIp API call.

---

##### `DisableAddOn`<sup>Required</sup> <a name="DisableAddOn" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DisableAddOn"></a>

```typescript
public readonly DisableAddOn: string[];
```

- *Type:* string[]

IAM actions required for the DisableAddOn API call.

---

##### `DownloadDefaultKeyPair`<sup>Required</sup> <a name="DownloadDefaultKeyPair" id="@cdk_utils/iam.lightsail.LightSailOperations.property.DownloadDefaultKeyPair"></a>

```typescript
public readonly DownloadDefaultKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the DownloadDefaultKeyPair API call.

---

##### `EnableAddOn`<sup>Required</sup> <a name="EnableAddOn" id="@cdk_utils/iam.lightsail.LightSailOperations.property.EnableAddOn"></a>

```typescript
public readonly EnableAddOn: string[];
```

- *Type:* string[]

IAM actions required for the EnableAddOn API call.

---

##### `ExportSnapshot`<sup>Required</sup> <a name="ExportSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.ExportSnapshot"></a>

```typescript
public readonly ExportSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the ExportSnapshot API call.

---

##### `ImportKeyPair`<sup>Required</sup> <a name="ImportKeyPair" id="@cdk_utils/iam.lightsail.LightSailOperations.property.ImportKeyPair"></a>

```typescript
public readonly ImportKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the ImportKeyPair API call.

---

##### `IsVpcPeered`<sup>Required</sup> <a name="IsVpcPeered" id="@cdk_utils/iam.lightsail.LightSailOperations.property.IsVpcPeered"></a>

```typescript
public readonly IsVpcPeered: string[];
```

- *Type:* string[]

IAM actions required for the IsVpcPeered API call.

---

##### `OpenInstancePublicPorts`<sup>Required</sup> <a name="OpenInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailOperations.property.OpenInstancePublicPorts"></a>

```typescript
public readonly OpenInstancePublicPorts: string[];
```

- *Type:* string[]

IAM actions required for the OpenInstancePublicPorts API call.

---

##### `opGetActiveNames`<sup>Required</sup> <a name="opGetActiveNames" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetActiveNames"></a>

```typescript
public readonly opGetActiveNames: string[];
```

- *Type:* string[]

IAM actions required for the GetActiveNames API call.

---

##### `opGetAlarms`<sup>Required</sup> <a name="opGetAlarms" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetAlarms"></a>

```typescript
public readonly opGetAlarms: string[];
```

- *Type:* string[]

IAM actions required for the GetAlarms API call.

---

##### `opGetAutoSnapshots`<sup>Required</sup> <a name="opGetAutoSnapshots" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetAutoSnapshots"></a>

```typescript
public readonly opGetAutoSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the GetAutoSnapshots API call.

---

##### `opGetBlueprints`<sup>Required</sup> <a name="opGetBlueprints" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBlueprints"></a>

```typescript
public readonly opGetBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the GetBlueprints API call.

---

##### `opGetBucketAccessKeys`<sup>Required</sup> <a name="opGetBucketAccessKeys" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketAccessKeys"></a>

```typescript
public readonly opGetBucketAccessKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetBucketAccessKeys API call.

---

##### `opGetBucketBundles`<sup>Required</sup> <a name="opGetBucketBundles" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketBundles"></a>

```typescript
public readonly opGetBucketBundles: string[];
```

- *Type:* string[]

IAM actions required for the GetBucketBundles API call.

---

##### `opGetBucketMetricData`<sup>Required</sup> <a name="opGetBucketMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBucketMetricData"></a>

```typescript
public readonly opGetBucketMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetBucketMetricData API call.

---

##### `opGetBuckets`<sup>Required</sup> <a name="opGetBuckets" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBuckets"></a>

```typescript
public readonly opGetBuckets: string[];
```

- *Type:* string[]

IAM actions required for the GetBuckets API call.

---

##### `opGetBundles`<sup>Required</sup> <a name="opGetBundles" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetBundles"></a>

```typescript
public readonly opGetBundles: string[];
```

- *Type:* string[]

IAM actions required for the GetBundles API call.

---

##### `opGetCertificates`<sup>Required</sup> <a name="opGetCertificates" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCertificates"></a>

```typescript
public readonly opGetCertificates: string[];
```

- *Type:* string[]

IAM actions required for the GetCertificates API call.

---

##### `opGetCloudFormationStackRecords`<sup>Required</sup> <a name="opGetCloudFormationStackRecords" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCloudFormationStackRecords"></a>

```typescript
public readonly opGetCloudFormationStackRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudFormationStackRecords API call.

---

##### `opGetContactMethods`<sup>Required</sup> <a name="opGetContactMethods" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContactMethods"></a>

```typescript
public readonly opGetContactMethods: string[];
```

- *Type:* string[]

IAM actions required for the GetContactMethods API call.

---

##### `opGetContainerAPIMetadata`<sup>Required</sup> <a name="opGetContainerAPIMetadata" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerAPIMetadata"></a>

```typescript
public readonly opGetContainerAPIMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerAPIMetadata API call.

---

##### `opGetContainerImages`<sup>Required</sup> <a name="opGetContainerImages" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerImages"></a>

```typescript
public readonly opGetContainerImages: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerImages API call.

---

##### `opGetContainerLog`<sup>Required</sup> <a name="opGetContainerLog" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerLog"></a>

```typescript
public readonly opGetContainerLog: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerLog API call.

---

##### `opGetContainerServiceDeployments`<sup>Required</sup> <a name="opGetContainerServiceDeployments" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServiceDeployments"></a>

```typescript
public readonly opGetContainerServiceDeployments: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerServiceDeployments API call.

---

##### `opGetContainerServiceMetricData`<sup>Required</sup> <a name="opGetContainerServiceMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServiceMetricData"></a>

```typescript
public readonly opGetContainerServiceMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerServiceMetricData API call.

---

##### `opGetContainerServicePowers`<sup>Required</sup> <a name="opGetContainerServicePowers" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServicePowers"></a>

```typescript
public readonly opGetContainerServicePowers: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerServicePowers API call.

---

##### `opGetContainerServices`<sup>Required</sup> <a name="opGetContainerServices" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetContainerServices"></a>

```typescript
public readonly opGetContainerServices: string[];
```

- *Type:* string[]

IAM actions required for the GetContainerServices API call.

---

##### `opGetCostEstimate`<sup>Required</sup> <a name="opGetCostEstimate" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetCostEstimate"></a>

```typescript
public readonly opGetCostEstimate: string[];
```

- *Type:* string[]

IAM actions required for the GetCostEstimate API call.

---

##### `opGetDisk`<sup>Required</sup> <a name="opGetDisk" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDisk"></a>

```typescript
public readonly opGetDisk: string[];
```

- *Type:* string[]

IAM actions required for the GetDisk API call.

---

##### `opGetDisks`<sup>Required</sup> <a name="opGetDisks" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDisks"></a>

```typescript
public readonly opGetDisks: string[];
```

- *Type:* string[]

IAM actions required for the GetDisks API call.

---

##### `opGetDiskSnapshot`<sup>Required</sup> <a name="opGetDiskSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDiskSnapshot"></a>

```typescript
public readonly opGetDiskSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetDiskSnapshot API call.

---

##### `opGetDiskSnapshots`<sup>Required</sup> <a name="opGetDiskSnapshots" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDiskSnapshots"></a>

```typescript
public readonly opGetDiskSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the GetDiskSnapshots API call.

---

##### `opGetDistributionBundles`<sup>Required</sup> <a name="opGetDistributionBundles" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionBundles"></a>

```typescript
public readonly opGetDistributionBundles: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionBundles API call.

---

##### `opGetDistributionLatestCacheReset`<sup>Required</sup> <a name="opGetDistributionLatestCacheReset" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionLatestCacheReset"></a>

```typescript
public readonly opGetDistributionLatestCacheReset: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionLatestCacheReset API call.

---

##### `opGetDistributionMetricData`<sup>Required</sup> <a name="opGetDistributionMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributionMetricData"></a>

```typescript
public readonly opGetDistributionMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributionMetricData API call.

---

##### `opGetDistributions`<sup>Required</sup> <a name="opGetDistributions" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDistributions"></a>

```typescript
public readonly opGetDistributions: string[];
```

- *Type:* string[]

IAM actions required for the GetDistributions API call.

---

##### `opGetDomain`<sup>Required</sup> <a name="opGetDomain" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDomain"></a>

```typescript
public readonly opGetDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetDomain API call.

---

##### `opGetDomains`<sup>Required</sup> <a name="opGetDomains" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetDomains"></a>

```typescript
public readonly opGetDomains: string[];
```

- *Type:* string[]

IAM actions required for the GetDomains API call.

---

##### `opGetExportSnapshotRecords`<sup>Required</sup> <a name="opGetExportSnapshotRecords" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetExportSnapshotRecords"></a>

```typescript
public readonly opGetExportSnapshotRecords: string[];
```

- *Type:* string[]

IAM actions required for the GetExportSnapshotRecords API call.

---

##### `opGetInstance`<sup>Required</sup> <a name="opGetInstance" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstance"></a>

```typescript
public readonly opGetInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetInstance API call.

---

##### `opGetInstanceAccessDetails`<sup>Required</sup> <a name="opGetInstanceAccessDetails" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceAccessDetails"></a>

```typescript
public readonly opGetInstanceAccessDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceAccessDetails API call.

---

##### `opGetInstanceMetricData`<sup>Required</sup> <a name="opGetInstanceMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceMetricData"></a>

```typescript
public readonly opGetInstanceMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceMetricData API call.

---

##### `opGetInstancePortStates`<sup>Required</sup> <a name="opGetInstancePortStates" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstancePortStates"></a>

```typescript
public readonly opGetInstancePortStates: string[];
```

- *Type:* string[]

IAM actions required for the GetInstancePortStates API call.

---

##### `opGetInstances`<sup>Required</sup> <a name="opGetInstances" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstances"></a>

```typescript
public readonly opGetInstances: string[];
```

- *Type:* string[]

IAM actions required for the GetInstances API call.

---

##### `opGetInstanceSnapshot`<sup>Required</sup> <a name="opGetInstanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceSnapshot"></a>

```typescript
public readonly opGetInstanceSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceSnapshot API call.

---

##### `opGetInstanceSnapshots`<sup>Required</sup> <a name="opGetInstanceSnapshots" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceSnapshots"></a>

```typescript
public readonly opGetInstanceSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceSnapshots API call.

---

##### `opGetInstanceState`<sup>Required</sup> <a name="opGetInstanceState" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetInstanceState"></a>

```typescript
public readonly opGetInstanceState: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceState API call.

---

##### `opGetKeyPair`<sup>Required</sup> <a name="opGetKeyPair" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetKeyPair"></a>

```typescript
public readonly opGetKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyPair API call.

---

##### `opGetKeyPairs`<sup>Required</sup> <a name="opGetKeyPairs" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetKeyPairs"></a>

```typescript
public readonly opGetKeyPairs: string[];
```

- *Type:* string[]

IAM actions required for the GetKeyPairs API call.

---

##### `opGetLoadBalancer`<sup>Required</sup> <a name="opGetLoadBalancer" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancer"></a>

```typescript
public readonly opGetLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the GetLoadBalancer API call.

---

##### `opGetLoadBalancerMetricData`<sup>Required</sup> <a name="opGetLoadBalancerMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerMetricData"></a>

```typescript
public readonly opGetLoadBalancerMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetLoadBalancerMetricData API call.

---

##### `opGetLoadBalancers`<sup>Required</sup> <a name="opGetLoadBalancers" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancers"></a>

```typescript
public readonly opGetLoadBalancers: string[];
```

- *Type:* string[]

IAM actions required for the GetLoadBalancers API call.

---

##### `opGetLoadBalancerTlsCertificates`<sup>Required</sup> <a name="opGetLoadBalancerTlsCertificates" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerTlsCertificates"></a>

```typescript
public readonly opGetLoadBalancerTlsCertificates: string[];
```

- *Type:* string[]

IAM actions required for the GetLoadBalancerTlsCertificates API call.

---

##### `opGetLoadBalancerTlsPolicies`<sup>Required</sup> <a name="opGetLoadBalancerTlsPolicies" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetLoadBalancerTlsPolicies"></a>

```typescript
public readonly opGetLoadBalancerTlsPolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetLoadBalancerTlsPolicies API call.

---

##### `opGetOperation`<sup>Required</sup> <a name="opGetOperation" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperation"></a>

```typescript
public readonly opGetOperation: string[];
```

- *Type:* string[]

IAM actions required for the GetOperation API call.

---

##### `opGetOperations`<sup>Required</sup> <a name="opGetOperations" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperations"></a>

```typescript
public readonly opGetOperations: string[];
```

- *Type:* string[]

IAM actions required for the GetOperations API call.

---

##### `opGetOperationsForResource`<sup>Required</sup> <a name="opGetOperationsForResource" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetOperationsForResource"></a>

```typescript
public readonly opGetOperationsForResource: string[];
```

- *Type:* string[]

IAM actions required for the GetOperationsForResource API call.

---

##### `opGetRegions`<sup>Required</sup> <a name="opGetRegions" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRegions"></a>

```typescript
public readonly opGetRegions: string[];
```

- *Type:* string[]

IAM actions required for the GetRegions API call.

---

##### `opGetRelationalDatabase`<sup>Required</sup> <a name="opGetRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabase"></a>

```typescript
public readonly opGetRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabase API call.

---

##### `opGetRelationalDatabaseBlueprints`<sup>Required</sup> <a name="opGetRelationalDatabaseBlueprints" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseBlueprints"></a>

```typescript
public readonly opGetRelationalDatabaseBlueprints: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseBlueprints API call.

---

##### `opGetRelationalDatabaseBundles`<sup>Required</sup> <a name="opGetRelationalDatabaseBundles" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseBundles"></a>

```typescript
public readonly opGetRelationalDatabaseBundles: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseBundles API call.

---

##### `opGetRelationalDatabaseEvents`<sup>Required</sup> <a name="opGetRelationalDatabaseEvents" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseEvents"></a>

```typescript
public readonly opGetRelationalDatabaseEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseEvents API call.

---

##### `opGetRelationalDatabaseLogEvents`<sup>Required</sup> <a name="opGetRelationalDatabaseLogEvents" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseLogEvents"></a>

```typescript
public readonly opGetRelationalDatabaseLogEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseLogEvents API call.

---

##### `opGetRelationalDatabaseLogStreams`<sup>Required</sup> <a name="opGetRelationalDatabaseLogStreams" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseLogStreams"></a>

```typescript
public readonly opGetRelationalDatabaseLogStreams: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseLogStreams API call.

---

##### `opGetRelationalDatabaseMasterUserPassword`<sup>Required</sup> <a name="opGetRelationalDatabaseMasterUserPassword" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseMasterUserPassword"></a>

```typescript
public readonly opGetRelationalDatabaseMasterUserPassword: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseMasterUserPassword API call.

---

##### `opGetRelationalDatabaseMetricData`<sup>Required</sup> <a name="opGetRelationalDatabaseMetricData" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseMetricData"></a>

```typescript
public readonly opGetRelationalDatabaseMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseMetricData API call.

---

##### `opGetRelationalDatabaseParameters`<sup>Required</sup> <a name="opGetRelationalDatabaseParameters" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseParameters"></a>

```typescript
public readonly opGetRelationalDatabaseParameters: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseParameters API call.

---

##### `opGetRelationalDatabases`<sup>Required</sup> <a name="opGetRelationalDatabases" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabases"></a>

```typescript
public readonly opGetRelationalDatabases: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabases API call.

---

##### `opGetRelationalDatabaseSnapshot`<sup>Required</sup> <a name="opGetRelationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseSnapshot"></a>

```typescript
public readonly opGetRelationalDatabaseSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseSnapshot API call.

---

##### `opGetRelationalDatabaseSnapshots`<sup>Required</sup> <a name="opGetRelationalDatabaseSnapshots" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetRelationalDatabaseSnapshots"></a>

```typescript
public readonly opGetRelationalDatabaseSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationalDatabaseSnapshots API call.

---

##### `opGetSetupHistory`<sup>Required</sup> <a name="opGetSetupHistory" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetSetupHistory"></a>

```typescript
public readonly opGetSetupHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetSetupHistory API call.

---

##### `opGetStaticIp`<sup>Required</sup> <a name="opGetStaticIp" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetStaticIp"></a>

```typescript
public readonly opGetStaticIp: string[];
```

- *Type:* string[]

IAM actions required for the GetStaticIp API call.

---

##### `opGetStaticIps`<sup>Required</sup> <a name="opGetStaticIps" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opGetStaticIps"></a>

```typescript
public readonly opGetStaticIps: string[];
```

- *Type:* string[]

IAM actions required for the GetStaticIps API call.

---

##### `opSetIpAddressType`<sup>Required</sup> <a name="opSetIpAddressType" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opSetIpAddressType"></a>

```typescript
public readonly opSetIpAddressType: string[];
```

- *Type:* string[]

IAM actions required for the SetIpAddressType API call.

---

##### `opSetResourceAccessForBucket`<sup>Required</sup> <a name="opSetResourceAccessForBucket" id="@cdk_utils/iam.lightsail.LightSailOperations.property.opSetResourceAccessForBucket"></a>

```typescript
public readonly opSetResourceAccessForBucket: string[];
```

- *Type:* string[]

IAM actions required for the SetResourceAccessForBucket API call.

---

##### `PeerVpc`<sup>Required</sup> <a name="PeerVpc" id="@cdk_utils/iam.lightsail.LightSailOperations.property.PeerVpc"></a>

```typescript
public readonly PeerVpc: string[];
```

- *Type:* string[]

IAM actions required for the PeerVpc API call.

---

##### `PutAlarm`<sup>Required</sup> <a name="PutAlarm" id="@cdk_utils/iam.lightsail.LightSailOperations.property.PutAlarm"></a>

```typescript
public readonly PutAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutAlarm API call.

---

##### `PutInstancePublicPorts`<sup>Required</sup> <a name="PutInstancePublicPorts" id="@cdk_utils/iam.lightsail.LightSailOperations.property.PutInstancePublicPorts"></a>

```typescript
public readonly PutInstancePublicPorts: string[];
```

- *Type:* string[]

IAM actions required for the PutInstancePublicPorts API call.

---

##### `RebootInstance`<sup>Required</sup> <a name="RebootInstance" id="@cdk_utils/iam.lightsail.LightSailOperations.property.RebootInstance"></a>

```typescript
public readonly RebootInstance: string[];
```

- *Type:* string[]

IAM actions required for the RebootInstance API call.

---

##### `RebootRelationalDatabase`<sup>Required</sup> <a name="RebootRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.RebootRelationalDatabase"></a>

```typescript
public readonly RebootRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the RebootRelationalDatabase API call.

---

##### `RegisterContainerImage`<sup>Required</sup> <a name="RegisterContainerImage" id="@cdk_utils/iam.lightsail.LightSailOperations.property.RegisterContainerImage"></a>

```typescript
public readonly RegisterContainerImage: string[];
```

- *Type:* string[]

IAM actions required for the RegisterContainerImage API call.

---

##### `ReleaseStaticIp`<sup>Required</sup> <a name="ReleaseStaticIp" id="@cdk_utils/iam.lightsail.LightSailOperations.property.ReleaseStaticIp"></a>

```typescript
public readonly ReleaseStaticIp: string[];
```

- *Type:* string[]

IAM actions required for the ReleaseStaticIp API call.

---

##### `ResetDistributionCache`<sup>Required</sup> <a name="ResetDistributionCache" id="@cdk_utils/iam.lightsail.LightSailOperations.property.ResetDistributionCache"></a>

```typescript
public readonly ResetDistributionCache: string[];
```

- *Type:* string[]

IAM actions required for the ResetDistributionCache API call.

---

##### `SendContactMethodVerification`<sup>Required</sup> <a name="SendContactMethodVerification" id="@cdk_utils/iam.lightsail.LightSailOperations.property.SendContactMethodVerification"></a>

```typescript
public readonly SendContactMethodVerification: string[];
```

- *Type:* string[]

IAM actions required for the SendContactMethodVerification API call.

---

##### `SetupInstanceHttps`<sup>Required</sup> <a name="SetupInstanceHttps" id="@cdk_utils/iam.lightsail.LightSailOperations.property.SetupInstanceHttps"></a>

```typescript
public readonly SetupInstanceHttps: string[];
```

- *Type:* string[]

IAM actions required for the SetupInstanceHttps API call.

---

##### `StartGUISession`<sup>Required</sup> <a name="StartGUISession" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StartGUISession"></a>

```typescript
public readonly StartGUISession: string[];
```

- *Type:* string[]

IAM actions required for the StartGUISession API call.

---

##### `StartInstance`<sup>Required</sup> <a name="StartInstance" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StartInstance"></a>

```typescript
public readonly StartInstance: string[];
```

- *Type:* string[]

IAM actions required for the StartInstance API call.

---

##### `StartRelationalDatabase`<sup>Required</sup> <a name="StartRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StartRelationalDatabase"></a>

```typescript
public readonly StartRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the StartRelationalDatabase API call.

---

##### `StopGUISession`<sup>Required</sup> <a name="StopGUISession" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StopGUISession"></a>

```typescript
public readonly StopGUISession: string[];
```

- *Type:* string[]

IAM actions required for the StopGUISession API call.

---

##### `StopInstance`<sup>Required</sup> <a name="StopInstance" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StopInstance"></a>

```typescript
public readonly StopInstance: string[];
```

- *Type:* string[]

IAM actions required for the StopInstance API call.

---

##### `StopRelationalDatabase`<sup>Required</sup> <a name="StopRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.StopRelationalDatabase"></a>

```typescript
public readonly StopRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the StopRelationalDatabase API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lightsail.LightSailOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestAlarm`<sup>Required</sup> <a name="TestAlarm" id="@cdk_utils/iam.lightsail.LightSailOperations.property.TestAlarm"></a>

```typescript
public readonly TestAlarm: string[];
```

- *Type:* string[]

IAM actions required for the TestAlarm API call.

---

##### `UnpeerVpc`<sup>Required</sup> <a name="UnpeerVpc" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UnpeerVpc"></a>

```typescript
public readonly UnpeerVpc: string[];
```

- *Type:* string[]

IAM actions required for the UnpeerVpc API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBucket`<sup>Required</sup> <a name="UpdateBucket" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateBucket"></a>

```typescript
public readonly UpdateBucket: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBucket API call.

---

##### `UpdateBucketBundle`<sup>Required</sup> <a name="UpdateBucketBundle" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateBucketBundle"></a>

```typescript
public readonly UpdateBucketBundle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBucketBundle API call.

---

##### `UpdateContainerService`<sup>Required</sup> <a name="UpdateContainerService" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateContainerService"></a>

```typescript
public readonly UpdateContainerService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerService API call.

---

##### `UpdateDistribution`<sup>Required</sup> <a name="UpdateDistribution" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDistribution"></a>

```typescript
public readonly UpdateDistribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistribution API call.

---

##### `UpdateDistributionBundle`<sup>Required</sup> <a name="UpdateDistributionBundle" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDistributionBundle"></a>

```typescript
public readonly UpdateDistributionBundle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDistributionBundle API call.

---

##### `UpdateDomainEntry`<sup>Required</sup> <a name="UpdateDomainEntry" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateDomainEntry"></a>

```typescript
public readonly UpdateDomainEntry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomainEntry API call.

---

##### `UpdateInstanceMetadataOptions`<sup>Required</sup> <a name="UpdateInstanceMetadataOptions" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateInstanceMetadataOptions"></a>

```typescript
public readonly UpdateInstanceMetadataOptions: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceMetadataOptions API call.

---

##### `UpdateLoadBalancerAttribute`<sup>Required</sup> <a name="UpdateLoadBalancerAttribute" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateLoadBalancerAttribute"></a>

```typescript
public readonly UpdateLoadBalancerAttribute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoadBalancerAttribute API call.

---

##### `UpdateRelationalDatabase`<sup>Required</sup> <a name="UpdateRelationalDatabase" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateRelationalDatabase"></a>

```typescript
public readonly UpdateRelationalDatabase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelationalDatabase API call.

---

##### `UpdateRelationalDatabaseParameters`<sup>Required</sup> <a name="UpdateRelationalDatabaseParameters" id="@cdk_utils/iam.lightsail.LightSailOperations.property.UpdateRelationalDatabaseParameters"></a>

```typescript
public readonly UpdateRelationalDatabaseParameters: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelationalDatabaseParameters API call.

---

### LightSailResources <a name="LightSailResources" id="@cdk_utils/iam.lightsail.LightSailResources"></a>

ARN builders, validators, and parsers for lightsail resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lightsail.LightSailResources.Initializer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

new lightsail.LightSailResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.alarm">alarm</a></code> | Builds an ARN for the Alarm resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.bucket">bucket</a></code> | Builds an ARN for the Bucket resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.certificate">certificate</a></code> | Builds an ARN for the Certificate resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.cloudFormationStackRecord">cloudFormationStackRecord</a></code> | Builds an ARN for the CloudFormationStackRecord resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.contactMethod">contactMethod</a></code> | Builds an ARN for the ContactMethod resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.containerService">containerService</a></code> | Builds an ARN for the ContainerService resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.disk">disk</a></code> | Builds an ARN for the Disk resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.diskSnapshot">diskSnapshot</a></code> | Builds an ARN for the DiskSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.distribution">distribution</a></code> | Builds an ARN for the Distribution resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.domain">domain</a></code> | Builds an ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.exportSnapshotRecord">exportSnapshotRecord</a></code> | Builds an ARN for the ExportSnapshotRecord resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.instance">instance</a></code> | Builds an ARN for the Instance resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.instanceSnapshot">instanceSnapshot</a></code> | Builds an ARN for the InstanceSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidAlarmArn">isValidAlarmArn</a></code> | Validates whether a string is a valid ARN for the Alarm resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidBucketArn">isValidBucketArn</a></code> | Validates whether a string is a valid ARN for the Bucket resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidCertificateArn">isValidCertificateArn</a></code> | Validates whether a string is a valid ARN for the Certificate resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidCloudFormationStackRecordArn">isValidCloudFormationStackRecordArn</a></code> | Validates whether a string is a valid ARN for the CloudFormationStackRecord resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidContactMethodArn">isValidContactMethodArn</a></code> | Validates whether a string is a valid ARN for the ContactMethod resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidContainerServiceArn">isValidContainerServiceArn</a></code> | Validates whether a string is a valid ARN for the ContainerService resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidDiskArn">isValidDiskArn</a></code> | Validates whether a string is a valid ARN for the Disk resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidDiskSnapshotArn">isValidDiskSnapshotArn</a></code> | Validates whether a string is a valid ARN for the DiskSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidDistributionArn">isValidDistributionArn</a></code> | Validates whether a string is a valid ARN for the Distribution resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the Domain resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidExportSnapshotRecordArn">isValidExportSnapshotRecordArn</a></code> | Validates whether a string is a valid ARN for the ExportSnapshotRecord resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the Instance resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceSnapshotArn">isValidInstanceSnapshotArn</a></code> | Validates whether a string is a valid ARN for the InstanceSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidKeyPairArn">isValidKeyPairArn</a></code> | Validates whether a string is a valid ARN for the KeyPair resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerArn">isValidLoadBalancerArn</a></code> | Validates whether a string is a valid ARN for the LoadBalancer resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerTLSCertificateArn">isValidLoadBalancerTLSCertificateArn</a></code> | Validates whether a string is a valid ARN for the LoadBalancerTlsCertificate resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseArn">isValidRelationalDatabaseArn</a></code> | Validates whether a string is a valid ARN for the RelationalDatabase resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseSnapshotArn">isValidRelationalDatabaseSnapshotArn</a></code> | Validates whether a string is a valid ARN for the RelationalDatabaseSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.isValidStaticIPArn">isValidStaticIPArn</a></code> | Validates whether a string is a valid ARN for the StaticIp resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.keyPair">keyPair</a></code> | Builds an ARN for the KeyPair resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.loadBalancer">loadBalancer</a></code> | Builds an ARN for the LoadBalancer resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.loadBalancerTLSCertificate">loadBalancerTLSCertificate</a></code> | Builds an ARN for the LoadBalancerTlsCertificate resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseAlarmArn">parseAlarmArn</a></code> | Parses a Alarm ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseBucketArn">parseBucketArn</a></code> | Parses a Bucket ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseCertificateArn">parseCertificateArn</a></code> | Parses a Certificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseCloudFormationStackRecordArn">parseCloudFormationStackRecordArn</a></code> | Parses a CloudFormationStackRecord ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseContactMethodArn">parseContactMethodArn</a></code> | Parses a ContactMethod ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseContainerServiceArn">parseContainerServiceArn</a></code> | Parses a ContainerService ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseDiskArn">parseDiskArn</a></code> | Parses a Disk ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseDiskSnapshotArn">parseDiskSnapshotArn</a></code> | Parses a DiskSnapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseDistributionArn">parseDistributionArn</a></code> | Parses a Distribution ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseDomainArn">parseDomainArn</a></code> | Parses a Domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseExportSnapshotRecordArn">parseExportSnapshotRecordArn</a></code> | Parses a ExportSnapshotRecord ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a Instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseInstanceSnapshotArn">parseInstanceSnapshotArn</a></code> | Parses a InstanceSnapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseKeyPairArn">parseKeyPairArn</a></code> | Parses a KeyPair ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerArn">parseLoadBalancerArn</a></code> | Parses a LoadBalancer ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerTLSCertificateArn">parseLoadBalancerTLSCertificateArn</a></code> | Parses a LoadBalancerTlsCertificate ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseArn">parseRelationalDatabaseArn</a></code> | Parses a RelationalDatabase ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseSnapshotArn">parseRelationalDatabaseSnapshotArn</a></code> | Parses a RelationalDatabaseSnapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.parseStaticIPArn">parseStaticIPArn</a></code> | Parses a StaticIp ARN into its components. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.relationalDatabase">relationalDatabase</a></code> | Builds an ARN for the RelationalDatabase resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.relationalDatabaseSnapshot">relationalDatabaseSnapshot</a></code> | Builds an ARN for the RelationalDatabaseSnapshot resource. |
| <code><a href="#@cdk_utils/iam.lightsail.LightSailResources.staticIP">staticIP</a></code> | Builds an ARN for the StaticIp resource. |

---

##### `alarm` <a name="alarm" id="@cdk_utils/iam.lightsail.LightSailResources.alarm"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.alarm(props: LightSailAlarmArnProps)
```

Builds an ARN for the Alarm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.alarm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailAlarmArnProps">LightSailAlarmArnProps</a>

---

##### `bucket` <a name="bucket" id="@cdk_utils/iam.lightsail.LightSailResources.bucket"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.bucket(props: LightSailBucketArnProps)
```

Builds an ARN for the Bucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.bucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailBucketArnProps">LightSailBucketArnProps</a>

---

##### `certificate` <a name="certificate" id="@cdk_utils/iam.lightsail.LightSailResources.certificate"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.certificate(props: LightSailCertificateArnProps)
```

Builds an ARN for the Certificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.certificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailCertificateArnProps">LightSailCertificateArnProps</a>

---

##### `cloudFormationStackRecord` <a name="cloudFormationStackRecord" id="@cdk_utils/iam.lightsail.LightSailResources.cloudFormationStackRecord"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.cloudFormationStackRecord(props: LightSailCloudFormationStackRecordArnProps)
```

Builds an ARN for the CloudFormationStackRecord resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.cloudFormationStackRecord.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailCloudFormationStackRecordArnProps">LightSailCloudFormationStackRecordArnProps</a>

---

##### `contactMethod` <a name="contactMethod" id="@cdk_utils/iam.lightsail.LightSailResources.contactMethod"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.contactMethod(props: LightSailContactMethodArnProps)
```

Builds an ARN for the ContactMethod resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.contactMethod.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailContactMethodArnProps">LightSailContactMethodArnProps</a>

---

##### `containerService` <a name="containerService" id="@cdk_utils/iam.lightsail.LightSailResources.containerService"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.containerService(props: LightSailContainerServiceArnProps)
```

Builds an ARN for the ContainerService resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.containerService.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailContainerServiceArnProps">LightSailContainerServiceArnProps</a>

---

##### `disk` <a name="disk" id="@cdk_utils/iam.lightsail.LightSailResources.disk"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.disk(props: LightSailDiskArnProps)
```

Builds an ARN for the Disk resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.disk.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailDiskArnProps">LightSailDiskArnProps</a>

---

##### `diskSnapshot` <a name="diskSnapshot" id="@cdk_utils/iam.lightsail.LightSailResources.diskSnapshot"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.diskSnapshot(props: LightSailDiskSnapshotArnProps)
```

Builds an ARN for the DiskSnapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.diskSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailDiskSnapshotArnProps">LightSailDiskSnapshotArnProps</a>

---

##### `distribution` <a name="distribution" id="@cdk_utils/iam.lightsail.LightSailResources.distribution"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.distribution(props: LightSailDistributionArnProps)
```

Builds an ARN for the Distribution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.distribution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailDistributionArnProps">LightSailDistributionArnProps</a>

---

##### `domain` <a name="domain" id="@cdk_utils/iam.lightsail.LightSailResources.domain"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.domain(props: LightSailDomainArnProps)
```

Builds an ARN for the Domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailDomainArnProps">LightSailDomainArnProps</a>

---

##### `exportSnapshotRecord` <a name="exportSnapshotRecord" id="@cdk_utils/iam.lightsail.LightSailResources.exportSnapshotRecord"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.exportSnapshotRecord(props: LightSailExportSnapshotRecordArnProps)
```

Builds an ARN for the ExportSnapshotRecord resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.exportSnapshotRecord.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailExportSnapshotRecordArnProps">LightSailExportSnapshotRecordArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.lightsail.LightSailResources.instance"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.instance(props: LightSailInstanceArnProps)
```

Builds an ARN for the Instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailInstanceArnProps">LightSailInstanceArnProps</a>

---

##### `instanceSnapshot` <a name="instanceSnapshot" id="@cdk_utils/iam.lightsail.LightSailResources.instanceSnapshot"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.instanceSnapshot(props: LightSailInstanceSnapshotArnProps)
```

Builds an ARN for the InstanceSnapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.instanceSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailInstanceSnapshotArnProps">LightSailInstanceSnapshotArnProps</a>

---

##### `isValidAlarmArn` <a name="isValidAlarmArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidAlarmArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidAlarmArn(arn: string)
```

Validates whether a string is a valid ARN for the Alarm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBucketArn` <a name="isValidBucketArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidBucketArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the Bucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCertificateArn` <a name="isValidCertificateArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidCertificateArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the Certificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudFormationStackRecordArn` <a name="isValidCloudFormationStackRecordArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidCloudFormationStackRecordArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidCloudFormationStackRecordArn(arn: string)
```

Validates whether a string is a valid ARN for the CloudFormationStackRecord resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidCloudFormationStackRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactMethodArn` <a name="isValidContactMethodArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidContactMethodArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidContactMethodArn(arn: string)
```

Validates whether a string is a valid ARN for the ContactMethod resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidContactMethodArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContainerServiceArn` <a name="isValidContainerServiceArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidContainerServiceArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidContainerServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the ContainerService resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidContainerServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDiskArn` <a name="isValidDiskArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDiskArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidDiskArn(arn: string)
```

Validates whether a string is a valid ARN for the Disk resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDiskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDiskSnapshotArn` <a name="isValidDiskSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDiskSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidDiskSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the DiskSnapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDiskSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDistributionArn` <a name="isValidDistributionArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDistributionArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidDistributionArn(arn: string)
```

Validates whether a string is a valid ARN for the Distribution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDomainArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the Domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExportSnapshotRecordArn` <a name="isValidExportSnapshotRecordArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidExportSnapshotRecordArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidExportSnapshotRecordArn(arn: string)
```

Validates whether a string is a valid ARN for the ExportSnapshotRecord resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidExportSnapshotRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the Instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceSnapshotArn` <a name="isValidInstanceSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidInstanceSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the InstanceSnapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidInstanceSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyPairArn` <a name="isValidKeyPairArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidKeyPairArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidKeyPairArn(arn: string)
```

Validates whether a string is a valid ARN for the KeyPair resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidKeyPairArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadBalancerArn` <a name="isValidLoadBalancerArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidLoadBalancerArn(arn: string)
```

Validates whether a string is a valid ARN for the LoadBalancer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadBalancerTLSCertificateArn` <a name="isValidLoadBalancerTLSCertificateArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerTLSCertificateArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidLoadBalancerTLSCertificateArn(arn: string)
```

Validates whether a string is a valid ARN for the LoadBalancerTlsCertificate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidLoadBalancerTLSCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRelationalDatabaseArn` <a name="isValidRelationalDatabaseArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidRelationalDatabaseArn(arn: string)
```

Validates whether a string is a valid ARN for the RelationalDatabase resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRelationalDatabaseSnapshotArn` <a name="isValidRelationalDatabaseSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidRelationalDatabaseSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the RelationalDatabaseSnapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidRelationalDatabaseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStaticIPArn` <a name="isValidStaticIPArn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidStaticIPArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.isValidStaticIPArn(arn: string)
```

Validates whether a string is a valid ARN for the StaticIp resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.isValidStaticIPArn.parameter.arn"></a>

- *Type:* string

---

##### `keyPair` <a name="keyPair" id="@cdk_utils/iam.lightsail.LightSailResources.keyPair"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.keyPair(props: LightSailKeyPairArnProps)
```

Builds an ARN for the KeyPair resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.keyPair.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailKeyPairArnProps">LightSailKeyPairArnProps</a>

---

##### `loadBalancer` <a name="loadBalancer" id="@cdk_utils/iam.lightsail.LightSailResources.loadBalancer"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.loadBalancer(props: LightSailLoadBalancerArnProps)
```

Builds an ARN for the LoadBalancer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.loadBalancer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerArnProps">LightSailLoadBalancerArnProps</a>

---

##### `loadBalancerTLSCertificate` <a name="loadBalancerTLSCertificate" id="@cdk_utils/iam.lightsail.LightSailResources.loadBalancerTLSCertificate"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.loadBalancerTLSCertificate(props: LightSailLoadBalancerTLSCertificateArnProps)
```

Builds an ARN for the LoadBalancerTlsCertificate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.loadBalancerTLSCertificate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailLoadBalancerTLSCertificateArnProps">LightSailLoadBalancerTLSCertificateArnProps</a>

---

##### `parseAlarmArn` <a name="parseAlarmArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseAlarmArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseAlarmArn(arn: string)
```

Parses a Alarm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBucketArn` <a name="parseBucketArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseBucketArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseBucketArn(arn: string)
```

Parses a Bucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCertificateArn` <a name="parseCertificateArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseCertificateArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseCertificateArn(arn: string)
```

Parses a Certificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudFormationStackRecordArn` <a name="parseCloudFormationStackRecordArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseCloudFormationStackRecordArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseCloudFormationStackRecordArn(arn: string)
```

Parses a CloudFormationStackRecord ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseCloudFormationStackRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactMethodArn` <a name="parseContactMethodArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseContactMethodArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseContactMethodArn(arn: string)
```

Parses a ContactMethod ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseContactMethodArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerServiceArn` <a name="parseContainerServiceArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseContainerServiceArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseContainerServiceArn(arn: string)
```

Parses a ContainerService ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseContainerServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDiskArn` <a name="parseDiskArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDiskArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseDiskArn(arn: string)
```

Parses a Disk ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDiskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDiskSnapshotArn` <a name="parseDiskSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDiskSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseDiskSnapshotArn(arn: string)
```

Parses a DiskSnapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDiskSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDistributionArn` <a name="parseDistributionArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDistributionArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseDistributionArn(arn: string)
```

Parses a Distribution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDistributionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDomainArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseDomainArn(arn: string)
```

Parses a Domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExportSnapshotRecordArn` <a name="parseExportSnapshotRecordArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseExportSnapshotRecordArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseExportSnapshotRecordArn(arn: string)
```

Parses a ExportSnapshotRecord ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseExportSnapshotRecordArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseInstanceArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseInstanceArn(arn: string)
```

Parses a Instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceSnapshotArn` <a name="parseInstanceSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseInstanceSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseInstanceSnapshotArn(arn: string)
```

Parses a InstanceSnapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseInstanceSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyPairArn` <a name="parseKeyPairArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseKeyPairArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseKeyPairArn(arn: string)
```

Parses a KeyPair ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseKeyPairArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadBalancerArn` <a name="parseLoadBalancerArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseLoadBalancerArn(arn: string)
```

Parses a LoadBalancer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadBalancerTLSCertificateArn` <a name="parseLoadBalancerTLSCertificateArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerTLSCertificateArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseLoadBalancerTLSCertificateArn(arn: string)
```

Parses a LoadBalancerTlsCertificate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseLoadBalancerTLSCertificateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRelationalDatabaseArn` <a name="parseRelationalDatabaseArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseRelationalDatabaseArn(arn: string)
```

Parses a RelationalDatabase ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRelationalDatabaseSnapshotArn` <a name="parseRelationalDatabaseSnapshotArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseSnapshotArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseRelationalDatabaseSnapshotArn(arn: string)
```

Parses a RelationalDatabaseSnapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseRelationalDatabaseSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStaticIPArn` <a name="parseStaticIPArn" id="@cdk_utils/iam.lightsail.LightSailResources.parseStaticIPArn"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.parseStaticIPArn(arn: string)
```

Parses a StaticIp ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lightsail.LightSailResources.parseStaticIPArn.parameter.arn"></a>

- *Type:* string

---

##### `relationalDatabase` <a name="relationalDatabase" id="@cdk_utils/iam.lightsail.LightSailResources.relationalDatabase"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.relationalDatabase(props: LightSailRelationalDatabaseArnProps)
```

Builds an ARN for the RelationalDatabase resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.relationalDatabase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseArnProps">LightSailRelationalDatabaseArnProps</a>

---

##### `relationalDatabaseSnapshot` <a name="relationalDatabaseSnapshot" id="@cdk_utils/iam.lightsail.LightSailResources.relationalDatabaseSnapshot"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.relationalDatabaseSnapshot(props: LightSailRelationalDatabaseSnapshotArnProps)
```

Builds an ARN for the RelationalDatabaseSnapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.relationalDatabaseSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailRelationalDatabaseSnapshotArnProps">LightSailRelationalDatabaseSnapshotArnProps</a>

---

##### `staticIP` <a name="staticIP" id="@cdk_utils/iam.lightsail.LightSailResources.staticIP"></a>

```typescript
import { lightsail } from '@cdk_utils/iam'

lightsail.LightSailResources.staticIP(props: LightSailStaticIPArnProps)
```

Builds an ARN for the StaticIp resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lightsail.LightSailResources.staticIP.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lightsail.LightSailStaticIPArnProps">LightSailStaticIPArnProps</a>

---




